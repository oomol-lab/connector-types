import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count matching people or companies without retrieving result records. */
    "dataforb2b.count_results": {
      input: {
        /** Record category to count. */
        category: "people" | "company";
        /** Filters used to select DataForB2B records. */
        filters: {
          /** Logical operator used to combine filter conditions. */
          op: "and" | "or";
          /**
           * Filter conditions or nested groups.
           * @minItems 1
           */
          conditions: Array<{
            /** DataForB2B column name to filter on. */
            column?: string;
            /** Comparison operator for this condition. */
            type?: "=" | ">" | ">=" | "<" | "<=" | "between" | "in" | "like";
            /** A JSON value used by a DataForB2B filter condition. */
            value?: unknown;
            /** Second filter value used by the between operator. */
            value2?: unknown;
            /** Logical operator for a nested filter group. */
            op?: "and" | "or";
            /** Conditions contained in a nested filter group. */
            conditions?: Array<Record<string, unknown>>;
          }>;
        };
      };
      output: {
        /** Number of matching records, capped at 10,000. */
        total_results: number;
        /** Whether the real count exceeds the returned cap. */
        total_results_is_capped: boolean;
      };
    };
    /** Enrich a company with firmographic, funding, location, and growth data. */
    "dataforb2b.enrich_company": {
      input: {
        /**
         * Company slug, LinkedIn or X URL, handle, or encoded DataForB2B company ID.
         * @minLength 1
         * @pattern \S
         */
        company_identifier: string;
      };
      output: Record<string, unknown>;
    };
    /** Enrich a person profile and optionally retrieve contact or GitHub data. */
    "dataforb2b.enrich_profile": {
      input: {
        /**
         * LinkedIn or X URL, public handle, or encoded DataForB2B profile ID.
         * @minLength 1
         * @pattern \S
         */
        profile_identifier: string;
        /** Whether to retrieve full profile information. */
        enrich_profile?: boolean;
        /** Whether to retrieve a professional email address. */
        enrich_work_email?: boolean;
        /** Whether to retrieve a personal email address. */
        enrich_personal_email?: boolean;
        /** Whether to retrieve a phone number. */
        enrich_phone?: boolean;
        /** Whether to retrieve linked GitHub profile data. */
        enrich_github?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get the connected DataForB2B account status and remaining credit balance. */
    "dataforb2b.get_account": {
      input: Record<string, never>;
      output: {
        /** Whether the connected API key is valid. */
        valid: boolean;
        /** Remaining credits on the account. */
        credits: number;
      };
    };
    /** Search companies with DataForB2B filters and pagination. */
    "dataforb2b.search_companies": {
      input: {
        /** Filters used to select DataForB2B records. */
        filters?: {
          /** Logical operator used to combine filter conditions. */
          op: "and" | "or";
          /**
           * Filter conditions or nested groups.
           * @minItems 1
           */
          conditions: Array<{
            /** DataForB2B column name to filter on. */
            column?: string;
            /** Comparison operator for this condition. */
            type?: "=" | ">" | ">=" | "<" | "<=" | "between" | "in" | "like";
            /** A JSON value used by a DataForB2B filter condition. */
            value?: unknown;
            /** Second filter value used by the between operator. */
            value2?: unknown;
            /** Logical operator for a nested filter group. */
            op?: "and" | "or";
            /** Conditions contained in a nested filter group. */
            conditions?: Array<Record<string, unknown>>;
          }>;
        };
        /**
         * Number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
        /** Whether to retrieve live enriched data at the higher credit cost. */
        enrich_live?: boolean;
      };
      output: {
        /** Total number of matching records. */
        total: number;
        /** Offset returned for this page. */
        offset: number;
        /** Number of records requested or returned. */
        count: number;
        /** Matching records returned by DataForB2B. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search professional profiles with DataForB2B filters and pagination. */
    "dataforb2b.search_people": {
      input: {
        /** Filters used to select DataForB2B records. */
        filters?: {
          /** Logical operator used to combine filter conditions. */
          op: "and" | "or";
          /**
           * Filter conditions or nested groups.
           * @minItems 1
           */
          conditions: Array<{
            /** DataForB2B column name to filter on. */
            column?: string;
            /** Comparison operator for this condition. */
            type?: "=" | ">" | ">=" | "<" | "<=" | "between" | "in" | "like";
            /** A JSON value used by a DataForB2B filter condition. */
            value?: unknown;
            /** Second filter value used by the between operator. */
            value2?: unknown;
            /** Logical operator for a nested filter group. */
            op?: "and" | "or";
            /** Conditions contained in a nested filter group. */
            conditions?: Array<Record<string, unknown>>;
          }>;
        };
        /**
         * Number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
        /** Whether to retrieve live enriched data at the higher credit cost. */
        enrich_live?: boolean;
      };
      output: {
        /** Total number of matching records. */
        total: number;
        /** Offset returned for this page. */
        offset: number;
        /** Number of records requested or returned. */
        count: number;
        /** Matching records returned by DataForB2B. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Autocomplete values for DataForB2B people and company search filters. */
    "dataforb2b.typeahead": {
      input: {
        /** Category of filter values to autocomplete. */
        type: "company" | "people_industry" | "company_industry" | "category" | "location" | "city" | "region" | "school" | "title" | "skill" | "investor";
        /**
         * Search query for matching filter values.
         * @minLength 1
         * @maxLength 100
         */
        q: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** Typeahead category returned by DataForB2B. */
        type: string;
        /** Number of autocomplete results returned. */
        count: number;
        /** Credits charged for the request. */
        credits_used: number;
        /** Matching filter values. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
