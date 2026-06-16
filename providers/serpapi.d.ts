import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run a Google Maps search through SerpApi. */
    "serpapi.google_maps_search": {
      input: {
        /**
         * Search query for Google Maps search.
         * @minLength 1
         */
        q: string;
        /**
         * Latitude and longitude search context formatted for SerpApi.
         * @minLength 1
         */
        ll?: string;
        /**
         * Language code for localized maps results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code for localized maps results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Zero-based result offset for pagination.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** Search metadata returned by SerpApi. */
        search_metadata: Record<string, unknown>;
        /** Search parameters returned by SerpApi. */
        search_parameters: Record<string, unknown>;
        /** Search information returned by SerpApi. */
        search_information: Record<string, unknown>;
        /** Local search results returned by SerpApi. */
        local_results: Array<Record<string, unknown>>;
        /** Place details returned by SerpApi when available. */
        place_results?: Record<string, unknown>;
        /** Pagination metadata returned by SerpApi when available. */
        pagination?: Record<string, unknown>;
      };
    };
    /** Run a Google News search through SerpApi. */
    "serpapi.google_news_search": {
      input: {
        /**
         * Search query for Google News search.
         * @minLength 1
         */
        q: string;
        /**
         * Language code for localized news results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code for localized news results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Zero-based result offset for pagination.
         * @minimum 0
         */
        start?: number;
        /**
         * Sorting option passed to Google News through SerpApi.
         * @minLength 1
         */
        so?: string;
      };
      output: {
        /** Search metadata returned by SerpApi. */
        search_metadata: Record<string, unknown>;
        /** Search parameters returned by SerpApi. */
        search_parameters: Record<string, unknown>;
        /** Search information returned by SerpApi. */
        search_information: Record<string, unknown>;
        /** News search results returned by SerpApi. */
        news_results: Array<Record<string, unknown>>;
        /** Story clusters returned by SerpApi when available. */
        stories?: Array<Record<string, unknown>>;
        /** Pagination metadata returned by SerpApi when available. */
        pagination?: Record<string, unknown>;
      };
    };
    /** Run a Google web search through SerpApi. */
    "serpapi.google_search": {
      input: {
        /**
         * Search query for Google web search.
         * @minLength 1
         */
        q: string;
        /**
         * Location used by SerpApi to localize results.
         * @minLength 1
         */
        location?: string;
        /**
         * Language code for localized results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code for localized results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Zero-based result offset for pagination.
         * @minimum 0
         */
        start?: number;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /**
         * Safe search setting passed to SerpApi.
         * @minLength 1
         */
        safe?: string;
      };
      output: {
        /** Search metadata returned by SerpApi. */
        search_metadata: Record<string, unknown>;
        /** Search parameters returned by SerpApi. */
        search_parameters: Record<string, unknown>;
        /** Search information returned by SerpApi. */
        search_information: Record<string, unknown>;
        /** Organic search results returned by SerpApi. */
        organic_results: Array<Record<string, unknown>>;
        /** Knowledge graph returned by SerpApi when available. */
        knowledge_graph?: Record<string, unknown>;
        /** Related questions returned by SerpApi when available. */
        related_questions?: Array<Record<string, unknown>>;
        /** Related searches returned by SerpApi when available. */
        related_searches?: Array<Record<string, unknown>>;
        /** Top stories returned by SerpApi when available. */
        top_stories?: Array<Record<string, unknown>>;
      };
    };
  }
}
