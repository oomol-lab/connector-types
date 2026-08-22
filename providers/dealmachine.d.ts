import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count properties and people matching DealMachine search criteria without consuming data credits. */
    "dealmachine.count_properties": {
      input: {
        /**
         * The geographic areas included in the search.
         * @minItems 1
         * @maxItems 15
         */
        locations?: Array<{
          /** The named geographic area type. */
          type: "state" | "county" | "city" | "zip_code";
          /**
           * The state, county, city, or ZIP identifier for the location.
           * @minLength 1
           */
          code: string;
        } | {
          /** The radius geographic area type. */
          type: "radius";
          /** The center latitude for a radius search. */
          latitude: number;
          /** The center longitude for a radius search. */
          longitude: number;
          /**
           * The radius in miles for a radius search.
           * @exclusiveMinimum 0
           */
          radius_miles: number;
        } | {
          /** The polygon geographic area type. */
          type: "polygon";
          /**
           * The boundary points for a polygon search as longitude and latitude pairs.
           * @minItems 3
           */
          coordinates: Array<[number, number]>;
        }>;
        /** The property or people filters combined with AND logic. */
        filters?: Array<{
          /**
           * The filter slug returned by list_filters.
           * @minLength 1
           */
          filter_id: string;
          /**
           * An operator allowed by the selected filter.
           * @minLength 1
           */
          operator?: string;
          /** The filter value in the shape required by the selected operator. */
          value: unknown;
        }>;
        /** Property list IDs used to include or exclude records. */
        include_lists?: {
          /**
           * The DealMachine property list IDs.
           * @minItems 1
           */
          property_list_ids: Array<number>;
        };
        /** Property list IDs used to include or exclude records. */
        exclude_lists?: {
          /**
           * The DealMachine property list IDs.
           * @minItems 1
           */
          property_list_ids: Array<number>;
        };
        /** Whether or how to exclude records previously exported by the organization. */
        exclude_previously_exported?: unknown;
        /** The primary entity represented by each result. */
        anchor?: "properties" | "people";
        /** The relationship group used to select contacts included in the count. */
        contact_audience?: "owners" | "owners_and_family" | "renters" | "residents";
      };
      output: {
        /** The number of matching properties. */
        total_properties: number;
        /** The number of matching people. */
        total_people: number;
        /** The count for the selected anchor entity. */
        total_results: number;
      };
    };
    /** Get the DealMachine organization, authentication identity, and plan details. */
    "dealmachine.get_account": {
      input: Record<string, never>;
      output: {
        /** The DealMachine organization associated with the key. */
        organization: {
          /** The organization ID. */
          id: number;
          /** The organization name. */
          name: string;
          /** The organization creation timestamp. */
          createdAt: string;
          [key: string]: unknown;
        };
        /** The identity represented by the credential. */
        user: {
          /** The user ID, or null for an organization API key. */
          id: number | null;
          /** The upstream authentication type. */
          authType: string;
          [key: string]: unknown;
        };
        /** The organization's current DealMachine plan and credit details. */
        plan: {
          /** The DealMachine plan name. */
          name: string;
          /** Whether the organization has a paid plan. */
          is_paid: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one DealMachine property and optionally enrich its fields and contacts. */
    "dealmachine.get_property": {
      input: {
        /**
         * The DealMachine property ID.
         * @minLength 1
         */
        id: string;
        /** Whether to return enriched property data and consume property credits. */
        enrich?: boolean;
        /** The relationship group used to select contacts associated with the property. */
        contact_audience?: "owners" | "owners_and_family" | "renters" | "residents" | "all" | "none";
        /** The property field IDs to include in the response. */
        fields?: Array<string>;
      };
      output: {
        /** The DealMachine property and any requested dynamic fields. */
        data: {
          /** The DealMachine property ID. */
          dm_property_id: string;
          /** The complete formatted property address. */
          full_address: string;
          [key: string]: unknown;
        };
        /** The credits consumed by this property lookup. */
        credits: Record<string, unknown>;
      };
    };
    /** Discover DealMachine property and people fields available for search results. */
    "dealmachine.list_fields": {
      input: {
        /** The record family whose metadata should be returned. */
        source_type?: "properties" | "people";
        /**
         * Text used to search metadata names and descriptions.
         * @minLength 1
         */
        search?: string;
        /**
         * The one-based results page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of metadata entries to return per page.
         * @minimum 1
         * @maximum 250
         */
        per_page?: number;
        /**
         * The field group ID used to limit returned fields.
         * @minLength 1
         */
        group_id?: string;
      };
      output: {
        /** The returned metadata entries. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by DealMachine. */
        pagination: {
          /** The current one-based page number. */
          page: number;
          /** The number of entries requested per page. */
          per_page: number;
          /** The total number of matching entries. */
          total_results: number;
          /** The total number of available pages. */
          total_pages: number;
          /** Whether another page follows this page. */
          has_next_page: boolean;
          /** Whether a page precedes this page. */
          has_previous_page: boolean;
        };
      };
    };
    /** Discover DealMachine property and people filters and their allowed operators. */
    "dealmachine.list_filters": {
      input: {
        /** The record family whose metadata should be returned. */
        source_type?: "properties" | "people";
        /**
         * Text used to search metadata names and descriptions.
         * @minLength 1
         */
        search?: string;
        /**
         * The one-based results page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of metadata entries to return per page.
         * @minimum 1
         * @maximum 250
         */
        per_page?: number;
      };
      output: {
        /** The returned metadata entries. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by DealMachine. */
        pagination: {
          /** The current one-based page number. */
          page: number;
          /** The number of entries requested per page. */
          per_page: number;
          /** The total number of matching entries. */
          total_results: number;
          /** The total number of available pages. */
          total_pages: number;
          /** Whether another page follows this page. */
          has_next_page: boolean;
          /** Whether a page precedes this page. */
          has_previous_page: boolean;
        };
      };
    };
    /** Search DealMachine property data or estimate the credit cost of a search. */
    "dealmachine.search_properties": {
      input: {
        /**
         * The geographic areas included in the search.
         * @minItems 1
         * @maxItems 15
         */
        locations?: Array<{
          /** The named geographic area type. */
          type: "state" | "county" | "city" | "zip_code";
          /**
           * The state, county, city, or ZIP identifier for the location.
           * @minLength 1
           */
          code: string;
        } | {
          /** The radius geographic area type. */
          type: "radius";
          /** The center latitude for a radius search. */
          latitude: number;
          /** The center longitude for a radius search. */
          longitude: number;
          /**
           * The radius in miles for a radius search.
           * @exclusiveMinimum 0
           */
          radius_miles: number;
        } | {
          /** The polygon geographic area type. */
          type: "polygon";
          /**
           * The boundary points for a polygon search as longitude and latitude pairs.
           * @minItems 3
           */
          coordinates: Array<[number, number]>;
        }>;
        /** The property or people filters combined with AND logic. */
        filters?: Array<{
          /**
           * The filter slug returned by list_filters.
           * @minLength 1
           */
          filter_id: string;
          /**
           * An operator allowed by the selected filter.
           * @minLength 1
           */
          operator?: string;
          /** The filter value in the shape required by the selected operator. */
          value: unknown;
        }>;
        /** Property list IDs used to include or exclude records. */
        include_lists?: {
          /**
           * The DealMachine property list IDs.
           * @minItems 1
           */
          property_list_ids: Array<number>;
        };
        /** Property list IDs used to include or exclude records. */
        exclude_lists?: {
          /**
           * The DealMachine property list IDs.
           * @minItems 1
           */
          property_list_ids: Array<number>;
        };
        /** Whether or how to exclude records previously exported by the organization. */
        exclude_previously_exported?: unknown;
        /** The primary entity represented by each result. */
        anchor?: "properties" | "people";
        /** The relationship group used to select contacts associated with matching properties. */
        contact_audience?: "owners" | "owners_and_family" | "renters" | "residents" | "none";
        /**
         * The Query Builder dataset environment identifier.
         * @minimum 1
         * @maximum 3
         */
        bigquery_data_environment?: number;
        /** The property and people field IDs to include in each result. */
        fields?: Array<string>;
        /**
         * The one-based results page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 250
         */
        per_page?: number;
        /**
         * The fields used to sort results in priority order.
         * @minItems 1
         */
        sort?: Array<{
          /**
           * A sortable field ID returned by list_fields.
           * @minLength 1
           */
          field_id: string;
          /** The sort direction. */
          direction: "asc" | "desc";
        }>;
        /** Whether to return a credit estimate without returning records or consuming credits. */
        estimate_cost?: boolean;
      };
      output: {
        /** The returned property- or people-anchored records. */
        data?: Array<Record<string, unknown>>;
        /** The total matching property and people counts. */
        totals: Record<string, unknown>;
        /** Pagination metadata returned by DealMachine. */
        pagination: {
          /** The current one-based page number. */
          page: number;
          /** The number of entries requested per page. */
          per_page: number;
          /** The total number of matching entries. */
          total_results: number;
          /** The total number of available pages. */
          total_pages: number;
          /** Whether another page follows this page. */
          has_next_page: boolean;
          /** Whether a page precedes this page. */
          has_previous_page: boolean;
        };
        /** The credits consumed by this search page. */
        credits?: Record<string, unknown>;
        /** The estimated credit cost when estimate_cost is enabled. */
        estimated_credits?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
