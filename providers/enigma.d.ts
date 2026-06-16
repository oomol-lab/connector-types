import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a user-managed Enigma list from a search definition or input file, with optional aliases, column ordering, and column mapping. */
    "enigma.create_list": {
      input: {
        /** The list name to create. */
        name?: string;
        /** The list type to create. */
        listType?: "LIST_GENERATION" | "ENRICHMENT";
        /** The optional list description. */
        description?: string;
        /** The official Enigma list search input used to populate the list. */
        searchInput?: {
          /** The entity type Enigma should materialize into the list. */
          entityType?: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
          /** Additional list search conditions supported by Enigma. */
          conditions?: {
            /** The JSON filter object for the list search. */
            filter?: Record<string, unknown>;
            /** The order-by expressions Enigma should apply to the list search. */
            orderBy?: Array<string>;
            /**
             * The maximum number of rows to include.
             * @exclusiveMinimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          /** A natural-language prompt used to create the list. */
          prompt?: string;
          /**
           * The minimum match confidence Enigma should keep for the list search.
           * @minimum 0
           * @maximum 1
           */
          matchThreshold?: number;
          [key: string]: unknown;
        };
        /** The output file format Enigma should use for exports. */
        fileFormat?: string;
        /** Field aliases to configure on the list. */
        aliases?: Array<{
          /** The fully qualified Enigma field path that should receive an alias. */
          fullyQualifiedName: string;
          /** The alias name to show for the field. */
          aliasName: string;
          [key: string]: unknown;
        }>;
        /** The output column ordering for the list. */
        columnOrdering?: Array<string>;
        /** The column mappings Enigma should use when reading an input file. */
        columnMapping?: Array<{
          /** The input column name to map. */
          columnName: string;
          /** The Enigma search field to map onto the column. */
          searchField: "NAME" | "PERSON_FIRST_NAME" | "PERSON_LAST_NAME" | "WEBSITE" | "ADDRESS_STREET1" | "ADDRESS_STREET2" | "ADDRESS_CITY" | "ADDRESS_STATE" | "ADDRESS_POSTAL_CODE";
          [key: string]: unknown;
        }>;
        /** The input file URI Enigma should use to build the list. */
        inputFileUri?: string;
        [key: string]: unknown;
      };
      output: {
        /** The created Enigma list, if returned. */
        list: {
          /** The Enigma list ID. */
          id: string;
          listType?: "LIST_GENERATION" | "ENRICHMENT" | null;
          name?: string | null;
          description?: string | null;
          fileFormat?: string | null;
          inputFileUri?: string | null;
          /** When the list was created. */
          createdTimestamp: string;
          /** When the list was last updated. */
          updatedTimestamp: string;
          /** The ordered output columns for the list. */
          columnOrdering: Array<string>;
          /** The field aliases configured on the list. */
          fieldAliases: Array<{
            /** The fully qualified Enigma field path that is being aliased. */
            fullyQualifiedName: string;
            /** The user-defined alias for the field. */
            aliasName: string;
            [key: string]: unknown;
          }>;
          /** The populated-column counts returned by Enigma. */
          columnCounts: Array<{
            /** The fully qualified Enigma field path represented in the exported output. */
            fullyQualifiedName: string;
            /** The number of non-null values Enigma observed for the field. */
            count: number;
            [key: string]: unknown;
          }>;
          /** The list column mappings returned by Enigma. */
          columnMapping: Array<{
            /** The input or output column name. */
            columnName: string;
            /** The Enigma search field mapped to the column. */
            searchField: "NAME" | "PERSON_FIRST_NAME" | "PERSON_LAST_NAME" | "WEBSITE" | "ADDRESS_STREET1" | "ADDRESS_STREET2" | "ADDRESS_CITY" | "ADDRESS_STATE" | "ADDRESS_POSTAL_CODE";
            [key: string]: unknown;
          }>;
          /** The raw list search input returned by Enigma. */
          searchInput?: unknown;
          /** The raw list payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        } | null;
        /** A normalized preview entity returned by Enigma, if any. */
        searchPreview: {
          /** The Enigma entity type for this result. */
          entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
          /** The Enigma GraphQL entity ID. */
          id: string;
          enigmaId?: string | null;
          /** The entity names returned by Enigma. */
          names: Array<string>;
          /** The website URLs returned by Enigma. */
          websites: Array<string>;
          /** The phone numbers returned by Enigma. */
          phoneNumbers: Array<string>;
          /** The addresses returned by Enigma. */
          addresses: Array<{
            id?: string | null;
            fullAddress?: string | null;
            streetAddress1?: string | null;
            streetAddress2?: string | null;
            city?: string | null;
            state?: string | null;
            postalCode?: string | null;
            countryCode?: string | null;
            latitude?: number | null;
            longitude?: number | null;
            [key: string]: unknown;
          }>;
          /** The operating-status values returned by Enigma. */
          operatingStatuses: Array<string>;
          /** Related entity summaries grouped by type. */
          relatedEntities: {
            /** Brands related to the result. */
            brands: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            /** Legal entities related to the result. */
            legalEntities: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            /** Operating locations related to the result. */
            operatingLocations: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Card-transaction summaries returned by Enigma. */
          cardTransactions: Array<{
            periodStartDate?: string | null;
            periodEndDate?: string | null;
            projectedQuantity?: number | null;
            quantityType?: string | null;
            [key: string]: unknown;
          }>;
          /** The raw Enigma search-metadata object when available. */
          searchMetadata?: unknown;
          /** The raw entity payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Submit a suggestion to Enigma for data correction or enrichment feedback using the official GraphQL suggestion mutation. */
    "enigma.create_suggestion": {
      input: {
        /** The email address of the person submitting the suggestion. */
        suggestedByEmail?: string;
        /** The JSON payload describing the suggested correction or addition. */
        payload?: Record<string, unknown>;
        /** The suggestion status to set when supported. */
        status?: "APPROVED" | "REJECTED" | "PENDING_REVIEW";
        /** The JSON value being proposed for the target field. */
        suggestedValue?: Record<string, unknown>;
        /** Ancestor entities related to the suggestion. */
        ancestorIdentifier?: Array<{
          /** The ancestor entity ID. */
          id: string;
          /** The ancestor entity type. */
          type: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
          [key: string]: unknown;
        }>;
        /** The entity identifier the suggestion is attached to. */
        suggestedEntityIdentifier?: {
          /** The suggested entity ID. */
          id: string;
          /** The suggested entity type. */
          type: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
          [key: string]: unknown;
        };
        /** The target field being suggested for update. */
        field?: string;
        [key: string]: unknown;
      };
      output: {
        /** The created suggestion, or null when Enigma returned no suggestion. */
        suggestion: {
          /** The Enigma suggestion UUID. */
          id: string;
          /** The Enigma suggestion revision ID. */
          revision: string;
          /** The Enigma request ID associated with the suggestion. */
          requestId: string;
          /** The suggestion status returned by Enigma. */
          status: string;
          /** The email address associated with the suggestion. */
          suggestedByEmail?: string | null;
          /** The email address of the last modifier when available. */
          lastModifiedByEmail?: string | null;
          /** When the suggestion was created. */
          createdTimestamp?: string | null;
          /** The parsed suggestion payload returned by Enigma. */
          payload: unknown;
          /** The raw suggestion payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Delete a user-managed Enigma list by ID. */
    "enigma.delete_list": {
      input: {
        /** The Enigma list ID to delete. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The Enigma list ID that was deleted. */
        id: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the current Enigma account metadata available to the connected API key, including customer, billing, and auto-recharge details. */
    "enigma.get_account": {
      input: Record<string, unknown>;
      output: {
        customerId?: string | null;
        pricingPlan?: string | null;
        customerEmail?: string | null;
        autoRenewEnabled?: boolean | null;
        billingAccountId?: string | null;
        creditsAvailable?: boolean | null;
        autoRechargeLimitUsd?: number | null;
        autoRechargeCurrentState?: boolean | null;
        autoRechargeDesiredState?: boolean | null;
        autoRechargeThresholdAmount?: number | null;
        autoRechargeRechargeToAmount?: number | null;
        autoRechargeReenableAfterTimestamp?: string | null;
        [key: string]: unknown;
      };
    };
    /** Run the official Enigma GraphQL `aggregate` query to count matching entities or related entities for a search request. */
    "enigma.get_aggregate_counts": {
      input: {
        /** A natural-language prompt used by Enigma semantic search. */
        prompt?: string;
        /** The Enigma GraphQL entity ID to look up directly. When used, `entityType` should also be set. */
        id?: string;
        /** The business or entity name to search for. */
        name?: string;
        /** A single address input used to narrow the search. */
        address?: {
          /** The Enigma address identifier to search for directly. */
          id?: string;
          /** The first street-address line used to narrow the search. */
          street1?: string;
          /** The second street-address line, such as suite or unit number. */
          street2?: string;
          /** The city used to narrow the search. */
          city?: string;
          /** The state or region used to narrow the search. */
          state?: string;
          /** The postal code used to narrow the search. */
          postalCode?: string;
          [key: string]: unknown;
        };
        /** Multiple address candidates used to narrow the search. */
        addresses?: Array<{
          /** The Enigma address identifier to search for directly. */
          id?: string;
          /** The first street-address line used to narrow the search. */
          street1?: string;
          /** The second street-address line, such as suite or unit number. */
          street2?: string;
          /** The city used to narrow the search. */
          city?: string;
          /** The state or region used to narrow the search. */
          state?: string;
          /** The postal code used to narrow the search. */
          postalCode?: string;
          [key: string]: unknown;
        }>;
        /** A person associated with the entity, used to narrow the search. */
        person?: {
          /** The person's first name. */
          firstName?: string;
          /** The person's last name. */
          lastName?: string;
          /** The person's date of birth in ISO 8601 date format. */
          dateOfBirth?: string;
          /** The person's address used to narrow the search. */
          address?: {
            /** The Enigma address identifier to search for directly. */
            id?: string;
            /** The first street-address line used to narrow the search. */
            street1?: string;
            /** The second street-address line, such as suite or unit number. */
            street2?: string;
            /** The city used to narrow the search. */
            city?: string;
            /** The state or region used to narrow the search. */
            state?: string;
            /** The postal code used to narrow the search. */
            postalCode?: string;
            [key: string]: unknown;
          };
          /** The person's taxpayer identification number used to narrow the search. */
          tin?: {
            /** The taxpayer identification number to search with. */
            tin?: string;
            /** The TIN type Enigma should use for the search. */
            tinType?: "EIN" | "SSN" | "ITIN" | "TIN";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A complete phone number used to narrow the search. */
        phoneNumber?: string;
        /** A website URL or domain used to narrow the search. */
        website?: string;
        /** Additional Enigma filter, ordering, limit, and pagination options. */
        conditions?: {
          /** The Enigma JSON filter object to apply. */
          filter?: Record<string, unknown>;
          /** The order-by expressions Enigma should apply. */
          orderBy?: Array<string>;
          /**
           * The maximum number of matches to return.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The opaque Enigma page token used to continue pagination. */
          pageToken?: string;
          [key: string]: unknown;
        };
        /** A taxpayer identification number used to narrow the search. */
        tin?: {
          /** The taxpayer identification number to search with. */
          tin?: string;
          /** The TIN type Enigma should use for the search. */
          tinType?: "EIN" | "SSN" | "ITIN" | "TIN";
          [key: string]: unknown;
        };
        /**
         * The minimum Enigma match confidence to keep, between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        matchThreshold?: number;
        /** The entity type Enigma should search within. */
        entityType?: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
        /** The Enigma search engine override to use for the query. */
        engine?: string;
        /** The asynchronous output specification for export-style searches. */
        output?: {
          /** The output file name Enigma should generate. */
          filename?: string;
          /** The export file format Enigma should generate. */
          format?: "PARQUET" | "CSV";
          [key: string]: unknown;
        };
        /** The S3 parquet path containing `internal_id` values for enrichment filtering. */
        enrichmentIdsS3Path?: string;
        /** The Enigma field path to count, such as `id`, `brands.id`, or `legalEntities.id`. Toolkit-style aliases like `brand`, `operatingLocation`, and `legalEntity` are also accepted. */
        countField: string;
        /** Additional Enigma conditions applied only to the count operation. */
        countConditions?: {
          /** The Enigma JSON filter object to apply. */
          filter?: Record<string, unknown>;
          /** The order-by expressions Enigma should apply. */
          orderBy?: Array<string>;
          /**
           * The maximum number of matches to return.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The opaque Enigma page token used to continue pagination. */
          pageToken?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** The resolved Enigma field path that was counted. */
        countField: string;
        /** The aggregate count returned by Enigma. */
        count: number | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest status for an Enigma background task created by an asynchronous GraphQL search or export workflow. */
    "enigma.get_background_task": {
      input: {
        /** The Enigma background task UUID to retrieve. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The Enigma background task, or null when nothing matched. */
        backgroundTask: {
          /** The background task UUID. */
          id: string;
          /** The Enigma background task type. */
          backgroundTaskType: string;
          /** The current background task status. */
          status: string;
          /** When the task was created. */
          createdTimestamp: string;
          /** When the task was last updated. */
          updatedTimestamp: string;
          /** When the task last executed. */
          lastExecutionTimestamp?: string | null;
          /** When the task is next scheduled to execute. */
          nextExecutionTimestamp?: string | null;
          /** The last recorded task error, if any. */
          lastError?: string | null;
          /** The number of execution attempts Enigma has made. */
          executionAttempts?: number;
          /** The raw task arguments payload. */
          args?: unknown;
          /** The raw task result payload. */
          result?: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Enigma entity by GraphQL entity ID and entity type, returning a normalized summary plus the raw enriched entity payload. */
    "enigma.get_business": {
      input: {
        /**
         * The Enigma GraphQL entity ID to retrieve.
         * @minLength 1
         */
        id: string;
        /** The Enigma entity type for the ID. */
        entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
        [key: string]: unknown;
      };
      output: {
        /** The normalized Enigma entity, or null when nothing matched. */
        business: {
          /** The Enigma entity type for this result. */
          entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
          /** The Enigma GraphQL entity ID. */
          id: string;
          enigmaId?: string | null;
          /** The entity names returned by Enigma. */
          names: Array<string>;
          /** The website URLs returned by Enigma. */
          websites: Array<string>;
          /** The phone numbers returned by Enigma. */
          phoneNumbers: Array<string>;
          /** The addresses returned by Enigma. */
          addresses: Array<{
            id?: string | null;
            fullAddress?: string | null;
            streetAddress1?: string | null;
            streetAddress2?: string | null;
            city?: string | null;
            state?: string | null;
            postalCode?: string | null;
            countryCode?: string | null;
            latitude?: number | null;
            longitude?: number | null;
            [key: string]: unknown;
          }>;
          /** The operating-status values returned by Enigma. */
          operatingStatuses: Array<string>;
          /** Related entity summaries grouped by type. */
          relatedEntities: {
            /** Brands related to the result. */
            brands: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            /** Legal entities related to the result. */
            legalEntities: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            /** Operating locations related to the result. */
            operatingLocations: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Card-transaction summaries returned by Enigma. */
          cardTransactions: Array<{
            periodStartDate?: string | null;
            periodEndDate?: string | null;
            projectedQuantity?: number | null;
            quantityType?: string | null;
            [key: string]: unknown;
          }>;
          /** The raw Enigma search-metadata object when available. */
          searchMetadata?: unknown;
          /** The raw entity payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve Enigma's extended GraphQL schema metadata, including types, projections, and data-asset descriptors. */
    "enigma.get_graphql_schema_extended": {
      input: Record<string, unknown>;
      output: {
        /** The extended-schema types returned by Enigma. */
        types: Array<{
          name?: string | null;
          label?: string | null;
          description?: string | null;
          descriptionSimplified?: string | null;
          pricingTier?: string | null;
          /** The fields declared on the type. */
          fields: Array<{
            name?: string | null;
            label?: string | null;
            description?: string | null;
            descriptionSimplified?: string | null;
            pricingTier?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The extended-schema projections returned by Enigma. */
        projections: Array<{
          entity?: string | null;
          name?: string | null;
          label?: string | null;
          description?: string | null;
          /** The raw projection field metadata returned by Enigma. */
          fields?: unknown;
          /** The raw projection path metadata returned by Enigma. */
          path?: unknown;
          /** The raw projection filter metadata returned by Enigma. */
          filter?: unknown;
          /** The raw projection aggregation metadata returned by Enigma. */
          aggregation?: unknown;
          [key: string]: unknown;
        }>;
        /** The extended-schema data-asset metadata returned by Enigma. */
        dataAssetMetadata: Array<{
          namespace?: string | null;
          name?: string | null;
          value?: string | null;
          description?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve an Enigma list materialization by ID, including progress, generated resource URI, metrics, and billing details. */
    "enigma.get_list_materialization": {
      input: {
        /** The Enigma list materialization ID to retrieve. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The Enigma list materialization, or null when nothing matched. */
        listMaterialization: {
          /** The Enigma list materialization ID. */
          id: string;
          /** The parent Enigma list ID. */
          listId: string;
          /** The current materialization status. */
          status: string;
          /** When the materialization was created. */
          createdTimestamp: string;
          /** When the materialization was last updated. */
          updatedTimestamp: string;
          listType?: "LIST_GENERATION" | "ENRICHMENT" | null;
          resourceUri?: string | null;
          inputFileUri?: string | null;
          progressPercentComplete?: number | null;
          progressMessage?: string | null;
          /** The field aliases configured for the materialization. */
          fieldAliases: Array<{
            /** The fully qualified Enigma field path that is being aliased. */
            fullyQualifiedName: string;
            /** The user-defined alias for the field. */
            aliasName: string;
            [key: string]: unknown;
          }>;
          /** The output column ordering for the materialization. */
          columnOrdering: Array<string>;
          /** The populated-column counts returned for the materialization. */
          columnCounts: Array<{
            /** The fully qualified Enigma field path represented in the exported output. */
            fullyQualifiedName: string;
            /** The number of non-null values Enigma observed for the field. */
            count: number;
            [key: string]: unknown;
          }>;
          /** The materialization column mappings. */
          columnMapping: Array<{
            /** The input or output column name. */
            columnName: string;
            /** The Enigma search field mapped to the column. */
            searchField: "NAME" | "PERSON_FIRST_NAME" | "PERSON_LAST_NAME" | "WEBSITE" | "ADDRESS_STREET1" | "ADDRESS_STREET2" | "ADDRESS_CITY" | "ADDRESS_STATE" | "ADDRESS_POSTAL_CODE";
            [key: string]: unknown;
          }>;
          /** The metrics returned for the materialization. */
          metrics: Array<{
            /** The metric name returned by Enigma. */
            metricName: string;
            /** The column name associated with the metric when present. */
            columnName?: string | null;
            /** The raw metric value returned by Enigma. */
            metricValue: unknown;
            [key: string]: unknown;
          }>;
          /** The billing-event details returned for the materialization. */
          billingEventDetails: Array<{
            /** The billing-event detail ID. */
            id: string;
            /** The parent list materialization ID. */
            listMaterializationId: string;
            /** The Enigma pricing tier applied to the event. */
            pricingTier: string;
            /** The billed quantity for the event. */
            quantity: number;
            /** The entity type associated with the billed quantity. */
            entityType: string;
            [key: string]: unknown;
          }>;
          /** The raw list search input returned by Enigma. */
          searchInput?: unknown;
          /** The raw materialization payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Search Enigma entities through the official GraphQL `search` query, supporting direct lookups, structured filters, natural-language prompts, and asynchronous output generation. */
    "enigma.search_graphql": {
      input: {
        /** A natural-language prompt used by Enigma semantic search. */
        prompt?: string;
        /** The Enigma GraphQL entity ID to look up directly. When used, `entityType` should also be set. */
        id?: string;
        /** The business or entity name to search for. */
        name?: string;
        /** A single address input used to narrow the search. */
        address?: {
          /** The Enigma address identifier to search for directly. */
          id?: string;
          /** The first street-address line used to narrow the search. */
          street1?: string;
          /** The second street-address line, such as suite or unit number. */
          street2?: string;
          /** The city used to narrow the search. */
          city?: string;
          /** The state or region used to narrow the search. */
          state?: string;
          /** The postal code used to narrow the search. */
          postalCode?: string;
          [key: string]: unknown;
        };
        /** Multiple address candidates used to narrow the search. */
        addresses?: Array<{
          /** The Enigma address identifier to search for directly. */
          id?: string;
          /** The first street-address line used to narrow the search. */
          street1?: string;
          /** The second street-address line, such as suite or unit number. */
          street2?: string;
          /** The city used to narrow the search. */
          city?: string;
          /** The state or region used to narrow the search. */
          state?: string;
          /** The postal code used to narrow the search. */
          postalCode?: string;
          [key: string]: unknown;
        }>;
        /** A person associated with the entity, used to narrow the search. */
        person?: {
          /** The person's first name. */
          firstName?: string;
          /** The person's last name. */
          lastName?: string;
          /** The person's date of birth in ISO 8601 date format. */
          dateOfBirth?: string;
          /** The person's address used to narrow the search. */
          address?: {
            /** The Enigma address identifier to search for directly. */
            id?: string;
            /** The first street-address line used to narrow the search. */
            street1?: string;
            /** The second street-address line, such as suite or unit number. */
            street2?: string;
            /** The city used to narrow the search. */
            city?: string;
            /** The state or region used to narrow the search. */
            state?: string;
            /** The postal code used to narrow the search. */
            postalCode?: string;
            [key: string]: unknown;
          };
          /** The person's taxpayer identification number used to narrow the search. */
          tin?: {
            /** The taxpayer identification number to search with. */
            tin?: string;
            /** The TIN type Enigma should use for the search. */
            tinType?: "EIN" | "SSN" | "ITIN" | "TIN";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A complete phone number used to narrow the search. */
        phoneNumber?: string;
        /** A website URL or domain used to narrow the search. */
        website?: string;
        /** Additional Enigma filter, ordering, limit, and pagination options. */
        conditions?: {
          /** The Enigma JSON filter object to apply. */
          filter?: Record<string, unknown>;
          /** The order-by expressions Enigma should apply. */
          orderBy?: Array<string>;
          /**
           * The maximum number of matches to return.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The opaque Enigma page token used to continue pagination. */
          pageToken?: string;
          [key: string]: unknown;
        };
        /** A taxpayer identification number used to narrow the search. */
        tin?: {
          /** The taxpayer identification number to search with. */
          tin?: string;
          /** The TIN type Enigma should use for the search. */
          tinType?: "EIN" | "SSN" | "ITIN" | "TIN";
          [key: string]: unknown;
        };
        /**
         * The minimum Enigma match confidence to keep, between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        matchThreshold?: number;
        /** The entity type Enigma should search within. */
        entityType?: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
        /** The Enigma search engine override to use for the query. */
        engine?: string;
        /** The asynchronous output specification for export-style searches. */
        output?: {
          /** The output file name Enigma should generate. */
          filename?: string;
          /** The export file format Enigma should generate. */
          format?: "PARQUET" | "CSV";
          [key: string]: unknown;
        };
        /** The S3 parquet path containing `internal_id` values for enrichment filtering. */
        enrichmentIdsS3Path?: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether Enigma accepted the request as an asynchronous background task. */
        accepted: boolean;
        /** The synchronous search results returned by Enigma. */
        results: Array<{
          /** The Enigma entity type for this result. */
          entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
          /** The Enigma GraphQL entity ID. */
          id: string;
          enigmaId?: string | null;
          /** The entity names returned by Enigma. */
          names: Array<string>;
          /** The website URLs returned by Enigma. */
          websites: Array<string>;
          /** The phone numbers returned by Enigma. */
          phoneNumbers: Array<string>;
          /** The addresses returned by Enigma. */
          addresses: Array<{
            id?: string | null;
            fullAddress?: string | null;
            streetAddress1?: string | null;
            streetAddress2?: string | null;
            city?: string | null;
            state?: string | null;
            postalCode?: string | null;
            countryCode?: string | null;
            latitude?: number | null;
            longitude?: number | null;
            [key: string]: unknown;
          }>;
          /** The operating-status values returned by Enigma. */
          operatingStatuses: Array<string>;
          /** Related entity summaries grouped by type. */
          relatedEntities: {
            /** Brands related to the result. */
            brands: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            /** Legal entities related to the result. */
            legalEntities: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            /** Operating locations related to the result. */
            operatingLocations: Array<{
              /** The related entity type. */
              entityType: "BRAND" | "OPERATING_LOCATION" | "LEGAL_ENTITY";
              /** The Enigma GraphQL entity ID. */
              id: string;
              enigmaId?: string | null;
              primaryName?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Card-transaction summaries returned by Enigma. */
          cardTransactions: Array<{
            periodStartDate?: string | null;
            periodEndDate?: string | null;
            projectedQuantity?: number | null;
            quantityType?: string | null;
            [key: string]: unknown;
          }>;
          /** The raw Enigma search-metadata object when available. */
          searchMetadata?: unknown;
          /** The raw entity payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        }>;
        /** Background tasks returned for asynchronous search jobs. */
        backgroundTasks: Array<{
          /** The background task UUID. */
          id: string;
          /** The Enigma background task type. */
          backgroundTaskType: string;
          /** The current background task status. */
          status: string;
          /** When the task was created. */
          createdTimestamp: string;
          /** When the task was last updated. */
          updatedTimestamp: string;
          /** When the task last executed. */
          lastExecutionTimestamp?: string | null;
          /** When the task is next scheduled to execute. */
          nextExecutionTimestamp?: string | null;
          /** The last recorded task error, if any. */
          lastError?: string | null;
          /** The number of execution attempts Enigma has made. */
          executionAttempts?: number;
          /** The raw task arguments payload. */
          args?: unknown;
          /** The raw task result payload. */
          result?: unknown;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Query user-created Enigma lists with optional name or ID filters and Relay-style pagination controls. */
    "enigma.search_lists": {
      input: {
        /** The Enigma list ID to filter by. */
        id?: string;
        /** The list name to filter by. */
        name?: string;
        /** Additional connection conditions supported by Enigma. */
        conditions?: {
          /** The Enigma JSON filter object to apply to the connection. */
          filter?: Record<string, unknown>;
          /** The order-by expressions Enigma should apply to the connection. */
          orderBy?: Array<string>;
          [key: string]: unknown;
        };
        /**
         * The number of items to return when paginating forward.
         * @exclusiveMinimum 0
         */
        first?: number;
        /** The forward-pagination cursor. */
        after?: string;
        /**
         * The number of items to return when paginating backward.
         * @exclusiveMinimum 0
         */
        last?: number;
        /** The backward-pagination cursor. */
        before?: string;
        [key: string]: unknown;
      };
      output: {
        /** The lists returned by Enigma. */
        lists: Array<{
          /** The Enigma list ID. */
          id: string;
          listType?: "LIST_GENERATION" | "ENRICHMENT" | null;
          name?: string | null;
          description?: string | null;
          fileFormat?: string | null;
          inputFileUri?: string | null;
          /** When the list was created. */
          createdTimestamp: string;
          /** When the list was last updated. */
          updatedTimestamp: string;
          /** The ordered output columns for the list. */
          columnOrdering: Array<string>;
          /** The field aliases configured on the list. */
          fieldAliases: Array<{
            /** The fully qualified Enigma field path that is being aliased. */
            fullyQualifiedName: string;
            /** The user-defined alias for the field. */
            aliasName: string;
            [key: string]: unknown;
          }>;
          /** The populated-column counts returned by Enigma. */
          columnCounts: Array<{
            /** The fully qualified Enigma field path represented in the exported output. */
            fullyQualifiedName: string;
            /** The number of non-null values Enigma observed for the field. */
            count: number;
            [key: string]: unknown;
          }>;
          /** The list column mappings returned by Enigma. */
          columnMapping: Array<{
            /** The input or output column name. */
            columnName: string;
            /** The Enigma search field mapped to the column. */
            searchField: "NAME" | "PERSON_FIRST_NAME" | "PERSON_LAST_NAME" | "WEBSITE" | "ADDRESS_STREET1" | "ADDRESS_STREET2" | "ADDRESS_CITY" | "ADDRESS_STATE" | "ADDRESS_POSTAL_CODE";
            [key: string]: unknown;
          }>;
          /** The raw list search input returned by Enigma. */
          searchInput?: unknown;
          /** The raw list payload returned by Enigma. */
          raw: unknown;
          [key: string]: unknown;
        }>;
        /** Pagination information for the list query. */
        pageInfo: {
          /** Whether another page exists when paginating forward. */
          hasNextPage: boolean;
          /** Whether another page exists when paginating backward. */
          hasPreviousPage: boolean;
          /** The cursor to continue paginating backward from the current page. */
          startCursor: string | null;
          /** The cursor to continue paginating forward from the current page. */
          endCursor: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Verify a business with Enigma's KYB v2 API, returning a normalized risk summary and the raw verification payload. */
    "enigma.verify_business_v2": {
      input: {
        /** The Enigma KYB package to run. `verify` is the default recommended mode. */
        package?: "identify" | "verify";
        /** Additional KYB attributes to request, such as `watchlist`, `tin_verification`, `ssn_verification`, or `business_bankruptcy`. */
        attrs?: string | Array<string>;
        /** A business name to verify. */
        name?: string;
        /**
         * Up to two business-name candidates to verify.
         * @maxItems 2
         */
        names?: Array<string>;
        /** A business TIN or EIN to verify. */
        tin?: string;
        /**
         * Up to one business TIN or EIN candidate to verify.
         * @maxItems 1
         */
        tins?: Array<string>;
        /** A business address to verify. */
        address?: {
          /** The primary business street address. */
          streetAddress1?: string;
          /** The secondary business street address. */
          streetAddress2?: string;
          /** The business city. */
          city?: string;
          /** The business state or region. */
          state?: string;
          /** The business postal code. */
          postalCode?: string;
          [key: string]: unknown;
        };
        /**
         * Up to two business-address candidates to verify.
         * @maxItems 2
         */
        addresses?: Array<{
          /** The primary business street address. */
          streetAddress1?: string;
          /** The secondary business street address. */
          streetAddress2?: string;
          /** The business city. */
          city?: string;
          /** The business state or region. */
          state?: string;
          /** The business postal code. */
          postalCode?: string;
          [key: string]: unknown;
        }>;
        /** A person associated with the business. */
        person?: {
          /** The person's first name. */
          firstName?: string;
          /** The person's last name. */
          lastName?: string;
          /** The person's Social Security Number. */
          ssn?: string;
          [key: string]: unknown;
        };
        /**
         * Up to four people to screen against watchlists.
         * @maxItems 4
         */
        personsToScreen?: Array<{
          /** The person's first name. */
          firstName?: string;
          /** The person's last name. */
          lastName?: string;
          /** The person's Social Security Number. */
          ssn?: string;
          [key: string]: unknown;
        }>;
        /** A business website URL. */
        website?: string;
        /**
         * Up to one website candidate to verify.
         * @maxItems 1
         */
        websites?: Array<string>;
        /**
         * The maximum number of top matches Enigma should return.
         * @exclusiveMinimum 0
         */
        topN?: number;
        /**
         * The minimum match confidence Enigma should keep, between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        matchConfidence?: number;
        [key: string]: unknown;
      };
      output: {
        responseId?: string | null;
        /** The normalized Enigma KYB risk summary. */
        riskSummary?: {
          overallRisk?: string | null;
          /** The individual tasks Enigma evaluated. */
          tasks?: Array<{
            /** The risk-summary task name. */
            taskName: string;
            /** The task status. */
            status: string;
            reason?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The number of matched registered entities returned by Enigma. */
        registeredEntityMatchCount?: number;
        /** The number of matched brands returned by Enigma. */
        brandMatchCount?: number;
        /** The raw Enigma KYB v2 response payload. */
        raw: unknown;
        [key: string]: unknown;
      };
    };
  }
}
