import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve account usage statistics for the connected SearchApi API key. */
    "search_api.get_account_info": {
      input: Record<string, never>;
      output: {
        /** Account usage information returned by SearchApi. */
        account: {
          /** Maximum allowable searches per month. */
          monthly_allowance: number;
          /** Search credits available for the current period. */
          remaining_credits: number;
          /** Total searches performed in the current month. */
          current_month_usage: number;
        };
        /** Hourly API usage information returned by SearchApi. */
        api_usage: {
          /** Maximum searches permitted per hour. */
          hourly_rate_limit: number;
          /** Count of searches made within the current hour. */
          searches_this_hour: number;
        };
        /** Subscription period information returned by SearchApi. */
        subscription?: {
          /**
           * Subscription period start timestamp.
           * @minLength 1
           */
          period_start: string;
          /**
           * Subscription period end timestamp.
           * @minLength 1
           */
          period_end: string;
        };
      };
    };
    /** Retrieve one cached SearchApi search result in HTML format by search identifier. */
    "search_api.get_cached_search_html": {
      input: {
        /**
         * Search identifier returned by SearchApi.
         * @minLength 1
         */
        searchId: string;
      };
      output: {
        /**
         * Search identifier that was retrieved.
         * @minLength 1
         */
        search_id: string;
        /**
         * Cached HTML content returned by SearchApi.
         * @minLength 1
         */
        html_content: string;
      };
    };
    /** Retrieve one cached SearchApi search result in JSON format by search identifier. */
    "search_api.get_cached_search_json": {
      input: {
        /**
         * Search identifier returned by SearchApi.
         * @minLength 1
         */
        searchId: string;
      };
      output: {
        /** Search metadata returned by SearchApi. */
        search_metadata: Record<string, unknown>;
        /** Search parameters returned by SearchApi. */
        search_parameters: Record<string, unknown>;
        /** Optional search information returned by SearchApi. */
        search_information?: Record<string, unknown>;
        /** Engine-specific result payload returned by SearchApi. */
        data: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
      };
    };
    /** Look up canonical SearchApi locations for geo-targeted search queries. */
    "search_api.get_locations": {
      input: {
        /**
         * Search query used to match locations.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of location matches to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether SearchApi should disable logging for the request. */
        zeroRetention?: boolean;
      };
      output: {
        /** Location matches returned by SearchApi. */
        locations: Array<{
          /**
           * Common display name of the location.
           * @minLength 1
           */
          name: string;
          /**
           * Canonical location string accepted by SearchApi.
           * @minLength 1
           */
          canonical_name: string;
          /**
           * Location target type returned by SearchApi.
           * @minLength 1
           */
          target_type: string;
          /**
           * Two-letter country code returned by SearchApi.
           * @minLength 1
           */
          country_code: string;
          /** Google location identifier returned by SearchApi. */
          google_id: number | string;
          /** Google parent location identifier returned by SearchApi. */
          google_parent_id?: number | string;
          /** Reach estimate returned by SearchApi. */
          reach?: number;
          /** Latitude coordinate of the location. */
          lat?: number;
          /** Longitude coordinate of the location. */
          lon?: number;
        }>;
      };
    };
    /** Run one SearchApi search request with the first-pass common query parameters. */
    "search_api.search": {
      input: {
        /**
         * Search engine identifier accepted by SearchApi.
         * @minLength 1
         */
        engine: string;
        /**
         * Search query sent to SearchApi.
         * @minLength 1
         */
        q: string;
        /**
         * Canonical search location accepted by SearchApi.
         * @minLength 1
         */
        location?: string;
        /**
         * Two-letter country code used for localized results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Two-letter language code used for localized results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Document language restriction sent to SearchApi.
         * @minLength 1
         */
        lr?: string;
        /**
         * Country restriction sent to SearchApi.
         * @minLength 1
         */
        cr?: string;
        /**
         * Maximum number of results to request.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /**
         * Result page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Safe search mode sent to SearchApi. */
        safe?: "active" | "blur" | "off";
        /**
         * Google encoded location parameter sent to SearchApi.
         * @minLength 1
         */
        uule?: string;
        /**
         * Knowledge Graph identifier sent to SearchApi.
         * @minLength 1
         */
        kgmid?: string;
        /** Device type used for the search request. */
        device?: "desktop" | "mobile" | "tablet";
        /**
         * Duplicate filtering mode sent to SearchApi.
         * @minimum 0
         * @maximum 1
         */
        filter?: number;
        /**
         * Whether to exclude auto-corrected results.
         * @minimum 0
         * @maximum 1
         */
        nfpr?: number;
        /**
         * Google domain override sent to SearchApi.
         * @minLength 1
         */
        googleDomain?: string;
        /** Relative date filter sent to SearchApi. */
        timePeriod?: "last_hour" | "last_day" | "last_week" | "last_month" | "last_year";
        /**
         * Custom date range start in MM/DD/YYYY format.
         * @minLength 1
         */
        timePeriodMin?: string;
        /**
         * Custom date range end in MM/DD/YYYY format.
         * @minLength 1
         */
        timePeriodMax?: string;
        /** Optimization strategy sent to SearchApi. */
        optimizationStrategy?: "performance" | "ads";
        /** Whether SearchApi should disable logging for the request. */
        zeroRetention?: boolean;
      };
      output: {
        /** Search metadata returned by SearchApi. */
        search_metadata: Record<string, unknown>;
        /** Search parameters returned by SearchApi. */
        search_parameters: Record<string, unknown>;
        /** Optional search information returned by SearchApi. */
        search_information?: Record<string, unknown>;
        /** Engine-specific result payload returned by SearchApi. */
        data: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
      };
    };
  }
}
