import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return exact field values to reuse in Crustdata company search filters. */
    "crustdata.autocomplete_companies": {
      input: {
        /**
         * The searchable field to autocomplete.
         * @minLength 1
         */
        field: string;
        /** The partial text to match. Use an empty string for common values. */
        query: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A Crustdata filter condition or nested group using `and` or `or` arrays. */
        filters?: {
          /**
           * The searchable field name to filter on.
           * @minLength 1
           */
          field?: string;
          /** The official Crustdata filter operator. Use `=>` and `=<` instead of `>=` and `<=`. */
          operator?: "=" | "!=" | ">" | "<" | "=>" | "=<" | "in" | "not_in" | "is_null" | "is_not_null" | "(.)" | "[.]";
          /** One supported Crustdata filter value. */
          value?: string | number | boolean | Array<string | number | boolean>;
          /**
           * A list of nested filter conditions or groups combined with logical AND.
           * @minItems 1
           */
          and?: Array<Record<string, unknown>>;
          /**
           * A list of nested filter conditions or groups combined with logical OR.
           * @minItems 1
           */
          or?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The ordered autocomplete suggestions returned by Crustdata. */
        suggestions: Array<{
          /** The exact field value to reuse in a later search filter. */
          value: string;
        }>;
      };
    };
    /** Enrich companies from one identifier family and optional field sections, returning ranked company matches with detailed profiles. */
    "crustdata.enrich_companies": {
      input: {
        /**
         * The company domains to resolve or enrich.
         * @minItems 1
         */
        domains?: Array<string>;
        /**
         * The company profile URLs to resolve or enrich.
         * @minItems 1
         */
        professionalNetworkProfileUrls?: Array<string>;
        /**
         * The company names to resolve or enrich.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * The Crustdata company IDs to enrich.
         * @minItems 1
         */
        crustdataCompanyIds?: Array<number>;
        /**
         * The response fields or sections to request from Crustdata.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether Crustdata should enforce strict domain matching. */
        exactMatch?: boolean;
      };
      output: {
        /** The normalized enrich results for each submitted identifier. */
        results: Array<{
          /** The identifier Crustdata matched on. */
          matchedOn: string;
          /** The identifier type Crustdata reports for this result. */
          matchType: string;
          /** The ranked company matches returned by Crustdata. */
          matches: Array<{
            /** The Crustdata confidence score for this match. */
            confidenceScore: number;
            /** The upstream Crustdata company payload. */
            companyData: {
              /** The Crustdata company ID when present. */
              crustdata_company_id?: number;
              /** The `basic_info` section returned by Crustdata. */
              basic_info?: {
                /** The company name returned by Crustdata. */
                name?: string;
                /** The primary domain returned by Crustdata. */
                primary_domain?: string;
                [key: string]: unknown;
              };
              /** Additional metadata returned by Crustdata. */
              metadata?: Record<string, string | number | boolean | Record<string, never>>;
              [key: string]: unknown;
            };
          }>;
        }>;
      };
    };
    /** Resolve companies from domains, profile URLs, names, or Crustdata company IDs and return ranked matches. */
    "crustdata.identify_companies": {
      input: {
        /**
         * The company domains to resolve or enrich.
         * @minItems 1
         */
        domains?: Array<string>;
        /**
         * The company profile URLs to resolve or enrich.
         * @minItems 1
         */
        professionalNetworkProfileUrls?: Array<string>;
        /**
         * The company names to resolve or enrich.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * The Crustdata company IDs to enrich.
         * @minItems 1
         */
        crustdataCompanyIds?: Array<number>;
        /**
         * The response fields or sections to request from Crustdata.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether Crustdata should enforce strict domain matching. */
        exactMatch?: boolean;
      };
      output: {
        /** The normalized identify results for each submitted identifier. */
        results: Array<{
          /** The identifier Crustdata matched on. */
          matchedOn: string;
          /** The identifier type Crustdata reports for this result. */
          matchType: string;
          /** The ranked company matches returned by Crustdata. */
          matches: Array<{
            /** The Crustdata confidence score for this match. */
            confidenceScore: number;
            /** The upstream Crustdata company payload. */
            companyData: {
              /** The Crustdata company ID when present. */
              crustdata_company_id?: number;
              /** The `basic_info` section returned by Crustdata. */
              basic_info?: {
                /** The company name returned by Crustdata. */
                name?: string;
                /** The primary domain returned by Crustdata. */
                primary_domain?: string;
                [key: string]: unknown;
              };
              /** Additional metadata returned by Crustdata. */
              metadata?: Record<string, string | number | boolean | Record<string, never>>;
              [key: string]: unknown;
            };
          }>;
        }>;
      };
    };
    /** Search companies with Crustdata filters, optional field selection, sorting, and cursor pagination. */
    "crustdata.search_companies": {
      input: {
        /** A Crustdata filter condition or nested group using `and` or `or` arrays. */
        filters?: {
          /**
           * The searchable field name to filter on.
           * @minLength 1
           */
          field?: string;
          /** The official Crustdata filter operator. Use `=>` and `=<` instead of `>=` and `<=`. */
          operator?: "=" | "!=" | ">" | "<" | "=>" | "=<" | "in" | "not_in" | "is_null" | "is_not_null" | "(.)" | "[.]";
          /** One supported Crustdata filter value. */
          value?: string | number | boolean | Array<string | number | boolean>;
          /**
           * A list of nested filter conditions or groups combined with logical AND.
           * @minItems 1
           */
          and?: Array<Record<string, unknown>>;
          /**
           * A list of nested filter conditions or groups combined with logical OR.
           * @minItems 1
           */
          or?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The response fields or sections to request from Crustdata.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * The ordered sort rules for a company search request.
         * @minItems 1
         */
        sorts?: Array<{
          /**
           * The sortable field name to order by.
           * @minLength 1
           */
          column: string;
          /** The sort order for one Crustdata sort rule. */
          order: "asc" | "desc";
        }>;
        /**
         * The number of companies to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous search response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The company search results returned by Crustdata. */
        companies: Array<{
          /** The Crustdata company ID when present. */
          crustdata_company_id?: number;
          /** The `basic_info` section returned by Crustdata. */
          basic_info?: {
            /** The company name returned by Crustdata. */
            name?: string;
            /** The primary domain returned by Crustdata. */
            primary_domain?: string;
            [key: string]: unknown;
          };
          /** Additional metadata returned by Crustdata. */
          metadata?: Record<string, string | number | boolean | Record<string, never>>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next company search page, or null when no further page exists. */
        nextCursor: string | null;
        /** The total number of matching companies when Crustdata returns it. */
        totalCount: number | null;
      };
    };
  }
}
