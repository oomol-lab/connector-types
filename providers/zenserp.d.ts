import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run a Google Image Search request through Zenserp. */
    "zenserp.google_image_search": {
      input: {
        /**
         * Search query sent to Zenserp.
         * @minLength 1
         */
        q: string;
        /**
         * Search engine domain sent as the search_engine query parameter.
         * @minLength 1
         */
        searchEngine?: string;
        /**
         * Geo location string sent to Zenserp when localized results are needed.
         * @minLength 1
         */
        location?: string;
        /**
         * Language code sent to Zenserp.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code sent to Zenserp.
         * @minLength 1
         */
        gl?: string;
        /**
         * Maximum number of results to request.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /**
         * Zero-based result offset used for pagination.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** Image search results returned by Zenserp. */
        image_results?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Run a Google Maps local search request through Zenserp. */
    "zenserp.google_maps_search": {
      input: {
        /**
         * Search query sent to Zenserp.
         * @minLength 1
         */
        q: string;
        /**
         * Search engine domain sent as the search_engine query parameter.
         * @minLength 1
         */
        searchEngine?: string;
        /**
         * Geo location string sent to Zenserp when localized results are needed.
         * @minLength 1
         */
        location?: string;
        /**
         * Language code sent to Zenserp.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code sent to Zenserp.
         * @minLength 1
         */
        gl?: string;
        /**
         * Maximum number of results to request.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /**
         * Zero-based result offset used for pagination.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** Local results returned by Zenserp. */
        local_results?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Run a Google News request through Zenserp. */
    "zenserp.google_news_search": {
      input: {
        /**
         * Search query sent to Zenserp.
         * @minLength 1
         */
        q: string;
        /**
         * Search engine domain sent as the search_engine query parameter.
         * @minLength 1
         */
        searchEngine?: string;
        /**
         * Geo location string sent to Zenserp when localized results are needed.
         * @minLength 1
         */
        location?: string;
        /**
         * Language code sent to Zenserp.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code sent to Zenserp.
         * @minLength 1
         */
        gl?: string;
        /**
         * Maximum number of results to request.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /**
         * Zero-based result offset used for pagination.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** News results returned by Zenserp. */
        news_results?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Run a Google Search request through Zenserp and return the first-pass common result surfaces. */
    "zenserp.search": {
      input: {
        /**
         * Search query sent to Zenserp.
         * @minLength 1
         */
        q: string;
        /**
         * Search engine domain sent as the search_engine query parameter.
         * @minLength 1
         */
        searchEngine?: string;
        /**
         * Geo location string sent to Zenserp when localized results are needed.
         * @minLength 1
         */
        location?: string;
        /**
         * Language code sent to Zenserp.
         * @minLength 1
         */
        hl?: string;
        /**
         * Country code sent to Zenserp.
         * @minLength 1
         */
        gl?: string;
        /**
         * Maximum number of results to request.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /**
         * Zero-based result offset used for pagination.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** Organic results returned by Zenserp. */
        organic?: Array<Record<string, unknown>> | null;
        /** Knowledge Graph payload returned by Zenserp when available. */
        knowledge_graph?: Record<string, unknown> | null;
        /** Related searches returned by Zenserp when available. */
        related_searches?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
  }
}
