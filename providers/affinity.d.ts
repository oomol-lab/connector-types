import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Affinity company by ID with optional field selectors. */
    "affinity.get_company": {
      input: {
        /**
         * The Affinity company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
        /**
         * The field IDs for which to return company field data.
         * @minItems 1
         * @maxItems 100
         */
        fieldIds?: Array<string>;
        /**
         * The field types for which to return company field data.
         * @minItems 1
         * @maxItems 3
         */
        fieldTypes?: Array<"enriched" | "global" | "relationship-intelligence">;
      };
      output: {
        /** One Affinity company object returned by the API. */
        company: {
          /**
           * The Affinity company ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The company name. */
          name: string;
          /** The company's primary domain when available. */
          domain: string | null;
          /** The domains returned for the company. */
          domains: Array<string>;
          /** Whether the company is global across tenants. */
          isGlobal: boolean;
          /** The non-list-specific fields attached to the company when requested. */
          fields: Array<{
            /** The field identifier. */
            id: string;
            /** The field display name. */
            name: string;
            /** The field category returned by Affinity. */
            type: "enriched" | "global" | "list" | "relationship-intelligence";
            /** The enrichment source when Affinity returned one. */
            enrichmentSource: "affinity-data" | "dealroom" | null;
            /** One Affinity field value union object returned by the API. */
            value: Record<string, unknown>;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the authenticated Affinity user, tenant, and API grant summary. */
    "affinity.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Affinity tenant returned by whoami. */
        tenant: {
          /**
           * The tenant ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The tenant name. */
          name: string;
          /** The tenant subdomain. */
          subdomain: string;
          [key: string]: unknown;
        };
        /** The Affinity user returned by whoami. */
        user: {
          /**
           * The user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The user's first name. */
          firstName: string;
          /** The user's last name when available. */
          lastName: string | null;
          /**
           * The user's email address.
           * @format email
           */
          emailAddress: string;
          [key: string]: unknown;
        };
        /** The Affinity grant returned by whoami. */
        grant: {
          /** The authentication grant type. */
          type: "api-key" | "access-token";
          /** The grant scopes returned by Affinity. */
          scopes: Array<string>;
          /**
           * When the grant was created.
           * @format date-time
           */
          createdAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Affinity list by ID. */
    "affinity.get_list": {
      input: {
        /**
         * The Affinity list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** One Affinity list detail object returned by the API. */
        list: {
          /**
           * The Affinity list ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The list name. */
          name: string;
          /**
           * The user ID that created the list.
           * @exclusiveMinimum 0
           */
          creatorId: number;
          /**
           * The user ID that owns the list.
           * @exclusiveMinimum 0
           */
          ownerId: number;
          /** Whether the list is public. */
          isPublic: boolean;
          /** The entity type associated with the list. */
          type: "company" | "opportunity" | "person";
          [key: string]: unknown;
        };
      };
    };
    /** Get one Affinity opportunity by ID. */
    "affinity.get_opportunity": {
      input: {
        /**
         * The Affinity opportunity ID.
         * @exclusiveMinimum 0
         */
        opportunityId: number;
      };
      output: {
        /** One Affinity opportunity object returned by the API. */
        opportunity: {
          /**
           * The Affinity opportunity ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The opportunity name. */
          name: string;
          /**
           * The list ID that owns the opportunity.
           * @exclusiveMinimum 0
           */
          listId: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Affinity person by ID with optional field selectors. */
    "affinity.get_person": {
      input: {
        /**
         * The Affinity person ID.
         * @exclusiveMinimum 0
         */
        personId: number;
        /**
         * The field IDs for which to return person field data.
         * @minItems 1
         * @maxItems 100
         */
        fieldIds?: Array<string>;
        /**
         * The field types for which to return person field data.
         * @minItems 1
         * @maxItems 3
         */
        fieldTypes?: Array<"enriched" | "global" | "relationship-intelligence">;
      };
      output: {
        /** One Affinity person object returned by the API. */
        person: {
          /**
           * The Affinity person ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The person's first name. */
          firstName: string;
          /** The person's last name when available. */
          lastName: string | null;
          /**
           * The person's primary email address when available.
           * @format email
           */
          primaryEmailAddress: string | null;
          /** The person's email addresses. */
          emailAddresses: Array<string>;
          /** The Affinity person type. */
          type: "internal" | "external";
          /** The non-list-specific fields attached to the person when requested. */
          fields: Array<{
            /** The field identifier. */
            id: string;
            /** The field display name. */
            name: string;
            /** The field category returned by Affinity. */
            type: "enriched" | "global" | "list" | "relationship-intelligence";
            /** The enrichment source when Affinity returned one. */
            enrichmentSource: "affinity-data" | "dealroom" | null;
            /** One Affinity field value union object returned by the API. */
            value: Record<string, unknown>;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Affinity saved view by list ID and saved view ID. */
    "affinity.get_saved_view": {
      input: {
        /**
         * The Affinity list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The Affinity saved view ID.
         * @exclusiveMinimum 0
         */
        viewId: number;
      };
      output: {
        /** One Affinity saved view object returned by the API. */
        savedView: {
          /**
           * The Affinity saved view ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The saved view name. */
          name: string;
          /** The saved view type. */
          type: "sheet" | "board" | "dashboard";
          /**
           * The timestamp when the saved view was created.
           * @format date-time
           */
          createdAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Affinity companies with optional ID and field selectors. */
    "affinity.list_companies": {
      input: {
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Affinity company IDs to fetch directly.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * The field IDs for which to return company field data.
         * @minItems 1
         * @maxItems 100
         */
        fieldIds?: Array<string>;
        /**
         * The field types for which to return company field data.
         * @minItems 1
         * @maxItems 3
         */
        fieldTypes?: Array<"enriched" | "global" | "list" | "relationship-intelligence">;
      };
      output: {
        /** The Affinity companies returned by the API. */
        companies: Array<{
          /**
           * The Affinity company ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The company name. */
          name: string;
          /** The company's primary domain when available. */
          domain: string | null;
          /** The domains returned for the company. */
          domains: Array<string>;
          /** Whether the company is global across tenants. */
          isGlobal: boolean;
          /** The non-list-specific fields attached to the company when requested. */
          fields: Array<{
            /** The field identifier. */
            id: string;
            /** The field display name. */
            name: string;
            /** The field category returned by Affinity. */
            type: "enriched" | "global" | "list" | "relationship-intelligence";
            /** The enrichment source when Affinity returned one. */
            enrichmentSource: "affinity-data" | "dealroom" | null;
            /** One Affinity field value union object returned by the API. */
            value: Record<string, unknown>;
          }>;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List non-list-specific Affinity company field metadata. */
    "affinity.list_company_fields": {
      input: {
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity field metadata records returned by the API. */
        fields: Array<{
          /** The field identifier. */
          id: string;
          /** The field name. */
          name: string;
          /** The field category returned by Affinity. */
          type: "enriched" | "global" | "list" | "relationship-intelligence";
          /** The enrichment source when Affinity returned one. */
          enrichmentSource: "affinity-data" | "dealroom" | null;
          /** The underlying Affinity value type. */
          valueType: "person" | "person-multi" | "company" | "company-multi" | "filterable-text" | "filterable-text-multi" | "number" | "number-multi" | "datetime" | "location" | "location-multi" | "text" | "ranked-dropdown" | "dropdown" | "dropdown-multi" | "formula-number" | "interaction";
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List all Affinity list entries for one company across lists. */
    "affinity.list_company_list_entries": {
      input: {
        /**
         * The Affinity company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity list entries returned for the entity. */
        listEntries: Array<{
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** The list-specific fields returned for the list entry. */
          fields: Array<{
            /** The field identifier. */
            id: string;
            /** The field display name. */
            name: string;
            /** The field category returned by Affinity. */
            type: "enriched" | "global" | "list" | "relationship-intelligence";
            /** The enrichment source when Affinity returned one. */
            enrichmentSource: "affinity-data" | "dealroom" | null;
            /** One Affinity field value union object returned by the API. */
            value: Record<string, unknown>;
          }>;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the Affinity lists that contain one company. */
    "affinity.list_company_lists": {
      input: {
        /**
         * The Affinity company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity lists returned by the API. */
        lists: Array<{
          /**
           * The Affinity list ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The list name. */
          name: string;
          /**
           * The user ID that created the list.
           * @exclusiveMinimum 0
           */
          creatorId: number;
          /**
           * The user ID that owns the list.
           * @exclusiveMinimum 0
           */
          ownerId: number;
          /** Whether the list is public. */
          isPublic: boolean;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the Affinity list entries for one list with optional field selectors. */
    "affinity.list_list_entries": {
      input: {
        /**
         * The Affinity list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The field IDs for which to return list entry field data.
         * @minItems 1
         * @maxItems 100
         */
        fieldIds?: Array<string>;
        /**
         * The field types for which to return list entry field data.
         * @minItems 1
         * @maxItems 4
         */
        fieldTypes?: Array<"enriched" | "global" | "list" | "relationship-intelligence">;
      };
      output: {
        /** The Affinity list entries returned by the API. */
        listEntries: Array<{
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The entity type for this list entry. */
          type: "company";
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** One Affinity company object returned by the API. */
          entity: {
            /**
             * The Affinity company ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The company name. */
            name: string;
            /** The company's primary domain when available. */
            domain: string | null;
            /** The domains returned for the company. */
            domains: Array<string>;
            /** Whether the company is global across tenants. */
            isGlobal: boolean;
            /** The non-list-specific fields attached to the company when requested. */
            fields: Array<{
              /** The field identifier. */
              id: string;
              /** The field display name. */
              name: string;
              /** The field category returned by Affinity. */
              type: "enriched" | "global" | "list" | "relationship-intelligence";
              /** The enrichment source when Affinity returned one. */
              enrichmentSource: "affinity-data" | "dealroom" | null;
              /** One Affinity field value union object returned by the API. */
              value: Record<string, unknown>;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The entity type for this list entry. */
          type: "opportunity";
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** The Affinity opportunity entity returned for the list entry. */
          entity: {
            /**
             * The Affinity opportunity ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The opportunity name. */
            name: string;
            /**
             * The list ID that owns the opportunity.
             * @exclusiveMinimum 0
             */
            listId: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The entity type for this list entry. */
          type: "person";
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** One Affinity person object returned by the API. */
          entity: {
            /**
             * The Affinity person ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The person's first name. */
            firstName: string;
            /** The person's last name when available. */
            lastName: string | null;
            /**
             * The person's primary email address when available.
             * @format email
             */
            primaryEmailAddress: string | null;
            /** The person's email addresses. */
            emailAddresses: Array<string>;
            /** The Affinity person type. */
            type: "internal" | "external";
            /** The non-list-specific fields attached to the person when requested. */
            fields: Array<{
              /** The field identifier. */
              id: string;
              /** The field display name. */
              name: string;
              /** The field category returned by Affinity. */
              type: "enriched" | "global" | "list" | "relationship-intelligence";
              /** The enrichment source when Affinity returned one. */
              enrichmentSource: "affinity-data" | "dealroom" | null;
              /** One Affinity field value union object returned by the API. */
              value: Record<string, unknown>;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the field metadata for one Affinity list. */
    "affinity.list_list_fields": {
      input: {
        /**
         * The Affinity list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity field metadata records returned by the API. */
        fields: Array<{
          /** The field identifier. */
          id: string;
          /** The field name. */
          name: string;
          /** The field category returned by Affinity. */
          type: "enriched" | "global" | "list" | "relationship-intelligence";
          /** The enrichment source when Affinity returned one. */
          enrichmentSource: "affinity-data" | "dealroom" | null;
          /** The underlying Affinity value type. */
          valueType: "person" | "person-multi" | "company" | "company-multi" | "filterable-text" | "filterable-text-multi" | "number" | "number-multi" | "datetime" | "location" | "location-multi" | "text" | "ranked-dropdown" | "dropdown" | "dropdown-multi" | "formula-number" | "interaction";
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the Affinity lists visible to the authenticated user. */
    "affinity.list_lists": {
      input: {
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity lists returned by the API. */
        lists: Array<{
          /**
           * The Affinity list ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The list name. */
          name: string;
          /**
           * The user ID that created the list.
           * @exclusiveMinimum 0
           */
          creatorId: number;
          /**
           * The user ID that owns the list.
           * @exclusiveMinimum 0
           */
          ownerId: number;
          /** Whether the list is public. */
          isPublic: boolean;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List Affinity opportunities with optional ID filtering. */
    "affinity.list_opportunities": {
      input: {
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Affinity opportunity IDs to fetch directly.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
      };
      output: {
        /** The Affinity opportunities returned by the API. */
        opportunities: Array<{
          /**
           * The Affinity opportunity ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The opportunity name. */
          name: string;
          /**
           * The list ID that owns the opportunity.
           * @exclusiveMinimum 0
           */
          listId: number;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List non-list-specific Affinity person field metadata. */
    "affinity.list_person_fields": {
      input: {
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity field metadata records returned by the API. */
        fields: Array<{
          /** The field identifier. */
          id: string;
          /** The field name. */
          name: string;
          /** The field category returned by Affinity. */
          type: "enriched" | "global" | "list" | "relationship-intelligence";
          /** The enrichment source when Affinity returned one. */
          enrichmentSource: "affinity-data" | "dealroom" | null;
          /** The underlying Affinity value type. */
          valueType: "person" | "person-multi" | "company" | "company-multi" | "filterable-text" | "filterable-text-multi" | "number" | "number-multi" | "datetime" | "location" | "location-multi" | "text" | "ranked-dropdown" | "dropdown" | "dropdown-multi" | "formula-number" | "interaction";
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List all Affinity list entries for one person across lists. */
    "affinity.list_person_list_entries": {
      input: {
        /**
         * The Affinity person ID.
         * @exclusiveMinimum 0
         */
        personId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity list entries returned for the entity. */
        listEntries: Array<{
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** The list-specific fields returned for the list entry. */
          fields: Array<{
            /** The field identifier. */
            id: string;
            /** The field display name. */
            name: string;
            /** The field category returned by Affinity. */
            type: "enriched" | "global" | "list" | "relationship-intelligence";
            /** The enrichment source when Affinity returned one. */
            enrichmentSource: "affinity-data" | "dealroom" | null;
            /** One Affinity field value union object returned by the API. */
            value: Record<string, unknown>;
          }>;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the Affinity lists that contain one person. */
    "affinity.list_person_lists": {
      input: {
        /**
         * The Affinity person ID.
         * @exclusiveMinimum 0
         */
        personId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity lists returned by the API. */
        lists: Array<{
          /**
           * The Affinity list ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The list name. */
          name: string;
          /**
           * The user ID that created the list.
           * @exclusiveMinimum 0
           */
          creatorId: number;
          /**
           * The user ID that owns the list.
           * @exclusiveMinimum 0
           */
          ownerId: number;
          /** Whether the list is public. */
          isPublic: boolean;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List Affinity persons with optional ID and field selectors. */
    "affinity.list_persons": {
      input: {
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Affinity person IDs to fetch directly.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * The field IDs for which to return person field data.
         * @minItems 1
         * @maxItems 100
         */
        fieldIds?: Array<string>;
        /**
         * The field types for which to return person field data.
         * @minItems 1
         * @maxItems 4
         */
        fieldTypes?: Array<"enriched" | "global" | "list" | "relationship-intelligence">;
      };
      output: {
        /** The Affinity persons returned by the API. */
        persons: Array<{
          /**
           * The Affinity person ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The person's first name. */
          firstName: string;
          /** The person's last name when available. */
          lastName: string | null;
          /**
           * The person's primary email address when available.
           * @format email
           */
          primaryEmailAddress: string | null;
          /** The person's email addresses. */
          emailAddresses: Array<string>;
          /** The Affinity person type. */
          type: "internal" | "external";
          /** The non-list-specific fields attached to the person when requested. */
          fields: Array<{
            /** The field identifier. */
            id: string;
            /** The field display name. */
            name: string;
            /** The field category returned by Affinity. */
            type: "enriched" | "global" | "list" | "relationship-intelligence";
            /** The enrichment source when Affinity returned one. */
            enrichmentSource: "affinity-data" | "dealroom" | null;
            /** One Affinity field value union object returned by the API. */
            value: Record<string, unknown>;
          }>;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the Affinity list entries returned by one saved view. */
    "affinity.list_saved_view_list_entries": {
      input: {
        /**
         * The Affinity list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The Affinity saved view ID.
         * @exclusiveMinimum 0
         */
        viewId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity list entries returned by the API. */
        listEntries: Array<{
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The entity type for this list entry. */
          type: "company";
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** One Affinity company object returned by the API. */
          entity: {
            /**
             * The Affinity company ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The company name. */
            name: string;
            /** The company's primary domain when available. */
            domain: string | null;
            /** The domains returned for the company. */
            domains: Array<string>;
            /** Whether the company is global across tenants. */
            isGlobal: boolean;
            /** The non-list-specific fields attached to the company when requested. */
            fields: Array<{
              /** The field identifier. */
              id: string;
              /** The field display name. */
              name: string;
              /** The field category returned by Affinity. */
              type: "enriched" | "global" | "list" | "relationship-intelligence";
              /** The enrichment source when Affinity returned one. */
              enrichmentSource: "affinity-data" | "dealroom" | null;
              /** One Affinity field value union object returned by the API. */
              value: Record<string, unknown>;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The entity type for this list entry. */
          type: "opportunity";
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** The Affinity opportunity entity returned for the list entry. */
          entity: {
            /**
             * The Affinity opportunity ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The opportunity name. */
            name: string;
            /**
             * The list ID that owns the opportunity.
             * @exclusiveMinimum 0
             */
            listId: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          /**
           * The list entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The entity type for this list entry. */
          type: "person";
          /**
           * The list ID that owns the list entry.
           * @exclusiveMinimum 0
           */
          listId: number;
          /**
           * The timestamp when the list entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The user ID that created the list entry when present.
           * @exclusiveMinimum 0
           */
          creatorId: number | null;
          /** One Affinity person object returned by the API. */
          entity: {
            /**
             * The Affinity person ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The person's first name. */
            firstName: string;
            /** The person's last name when available. */
            lastName: string | null;
            /**
             * The person's primary email address when available.
             * @format email
             */
            primaryEmailAddress: string | null;
            /** The person's email addresses. */
            emailAddresses: Array<string>;
            /** The Affinity person type. */
            type: "internal" | "external";
            /** The non-list-specific fields attached to the person when requested. */
            fields: Array<{
              /** The field identifier. */
              id: string;
              /** The field display name. */
              name: string;
              /** The field category returned by Affinity. */
              type: "enriched" | "global" | "list" | "relationship-intelligence";
              /** The enrichment source when Affinity returned one. */
              enrichmentSource: "affinity-data" | "dealroom" | null;
              /** One Affinity field value union object returned by the API. */
              value: Record<string, unknown>;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
    /** List the saved views configured on one Affinity list. */
    "affinity.list_saved_views": {
      input: {
        /**
         * The Affinity list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The pagination cursor returned by Affinity.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to include in the page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Affinity saved views returned by the API. */
        savedViews: Array<{
          /**
           * The Affinity saved view ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The saved view name. */
          name: string;
          /** The saved view type. */
          type: "sheet" | "board" | "dashboard";
          /**
           * The timestamp when the saved view was created.
           * @format date-time
           */
          createdAt: string;
          [key: string]: unknown;
        }>;
        /** The Affinity pagination object returned by the API. */
        pagination: {
          /**
           * The URL for the next page when Affinity provided one.
           * @format uri
           */
          nextUrl: string | null;
          /**
           * The URL for the previous page when Affinity provided one.
           * @format uri
           */
          prevUrl: string | null;
        };
      };
    };
  }
}
