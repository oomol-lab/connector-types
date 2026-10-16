import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find Explorium business filter values by field and optional partial query, including countries, industries, company names, and technologies. */
    "explorium.autocomplete_businesses": {
      input: {
        /** The field to autocomplete. */
        field: "country" | "country_code" | "region_country_code" | "google_category" | "naics_category" | "linkedin_category" | "company_tech_stack_tech" | "company_tech_stack_categories" | "job_title" | "company_size" | "company_revenue" | "number_of_locations" | "company_age" | "job_department" | "job_level" | "city_region_country" | "company_name";
        /** Partial search text; omitted means an empty query. */
        query?: string;
      };
      output: {
        /** Suggested filter values. */
        items: Array<{
          /** The original search query. */
          query?: string;
          /** The suggestion display label. */
          label?: string;
          /** The filter value to use in API requests. */
          value?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve company profiles for one to fifty Explorium business IDs, including industry, location, employee count, and revenue. Obtain IDs with match_businesses first. Requests may consume credits. */
    "explorium.enrich_firmographics": {
      input: {
        /**
         * Business IDs to enrich.
         * @minItems 1
         * @maxItems 50
         */
        business_ids: Array<string>;
        /** Optional request context forwarded to Explorium. */
        request_context?: Record<string, unknown>;
        /** Optional enrichment parameters forwarded to Explorium. */
        parameters?: Record<string, unknown>;
      };
      output: {
        /** Request status and diagnostic context. */
        response_context: {
          /** The upstream correlation ID. */
          correlation_id?: string;
          /** The upstream status: success, miss, or failure. */
          request_status?: string;
          /** Upstream processing time in seconds. */
          time_took_in_seconds?: number;
          [key: string]: unknown;
        };
        /** The total number of results. */
        total_results: number;
        /** Enrichment results for the supplied business IDs. */
        data?: Array<{
          /** The requested business ID. */
          business_id?: string;
          /** Company attributes; additional upstream fields are preserved. */
          data?: {
            /** The matched business ID. */
            business_id?: string;
            /** The business name. */
            name?: string;
            /** The business website URL. */
            website?: string;
            /** The business country name. */
            country_name?: string;
            /** The employee count range. */
            number_of_employees_range?: string;
            /** The yearly revenue range. */
            yearly_revenue_range?: string;
            /** The LinkedIn company profile URL. */
            linkedin_profile?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve technology stacks for one to fifty Explorium business IDs. Obtain IDs with match_businesses first. Requests may consume credits. */
    "explorium.enrich_technographics": {
      input: {
        /**
         * Business IDs to enrich.
         * @minItems 1
         * @maxItems 50
         */
        business_ids: Array<string>;
        /** Optional request context forwarded to Explorium. */
        request_context?: Record<string, unknown>;
        /** Optional enrichment parameters forwarded to Explorium. */
        parameters?: Record<string, unknown>;
      };
      output: {
        /** Request status and diagnostic context. */
        response_context: {
          /** The upstream correlation ID. */
          correlation_id?: string;
          /** The upstream status: success, miss, or failure. */
          request_status?: string;
          /** Upstream processing time in seconds. */
          time_took_in_seconds?: number;
          [key: string]: unknown;
        };
        /** The total number of results. */
        total_results: number;
        /** Enrichment results for the supplied business IDs. */
        data?: Array<{
          /** The requested business ID. */
          business_id?: string;
          /** Technology attributes; additional upstream fields are preserved. */
          data?: {
            /** All detected technologies. */
            full_tech_stack?: Array<string>;
            /** Technology details grouped by category. */
            full_nested_tech_stack?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Match one to fifty businesses by name, domain, or URL to Explorium business IDs. Results preserve input order; unmatched rows have no business ID. Requests may consume credits. */
    "explorium.match_businesses": {
      input: {
        /**
         * Businesses to match in input order.
         * @minItems 1
         * @maxItems 50
         */
        businesses_to_match: Array<{
          /**
           * The business name.
           * @minLength 1
           * @maxLength 256
           * @pattern \S
           */
          name?: string;
          /**
           * The business website domain.
           * @minLength 1
           * @pattern \S
           */
          domain?: string;
          /**
           * The business URL, such as its LinkedIn company URL.
           * @minLength 1
           * @pattern \S
           */
          url?: string;
        }>;
        /** Optional request context forwarded to Explorium. */
        request_context?: Record<string, unknown>;
      };
      output: {
        /** Request status and diagnostic context. */
        response_context: {
          /** The upstream correlation ID. */
          correlation_id?: string;
          /** The upstream status: success, miss, or failure. */
          request_status?: string;
          /** Upstream processing time in seconds. */
          time_took_in_seconds?: number;
          [key: string]: unknown;
        };
        /** The number of submitted business results. */
        total_results: number;
        /** The number of matched businesses. */
        total_matches: number;
        /** Matched and unmatched business results. */
        matched_businesses?: Array<{
          /** The original business identifiers. */
          input?: {
            /** The submitted business name. */
            name?: string;
            /** The submitted business domain. */
            domain?: string;
            /** The submitted business URL. */
            url?: string;
            [key: string]: unknown;
          };
          /** The matched ID; null or absent when unmatched. */
          business_id?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
