import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve account details and quota usage for the connected Serpdog API key. */
    "serpdog.get_account_info": {
      input: Record<string, never>;
      output: {
        /**
         * The user name returned by Serpdog.
         * @minLength 1
         */
        user_name: string;
        /**
         * The API key echoed by Serpdog.
         * @minLength 1
         */
        api_key: string;
        /**
         * The account email address returned by Serpdog.
         * @minLength 1
         */
        email: string;
        /**
         * The current Serpdog plan name.
         * @minLength 1
         */
        plan: string;
        /**
         * The monthly quota returned by Serpdog.
         * @minimum 0
         */
        quota: number;
        /**
         * The number of requests already used in the current period.
         * @minimum 0
         */
        requests: number;
        /**
         * The number of requests remaining in the current period.
         * @minimum 0
         */
        requests_left: number;
        /** The billing history entries returned by Serpdog when available. */
        billing_history?: Array<{
          /**
           * The billing event timestamp.
           * @minLength 1
           */
          date: string;
          /**
           * The billed plan name.
           * @minLength 1
           */
          plan: string;
          /**
           * The billed amount string.
           * @minLength 1
           */
          amount: string;
          /**
           * The invoice URL or label returned by Serpdog.
           * @minLength 1
           */
          invoice: string;
        }>;
      };
    };
    /** Retrieve Google Autocomplete suggestions through Serpdog. */
    "serpdog.google_autocomplete": {
      input: {
        /**
         * Google Autocomplete query.
         * @minLength 1
         */
        q: string;
        /**
         * Two-letter country code used for localized suggestions.
         * @minLength 1
         */
        gl?: string;
        /**
         * Language code used for localized suggestions.
         * @minLength 1
         */
        hl?: string;
      };
      output: {
        /** Request metadata returned by Serpdog. */
        meta: Record<string, unknown>;
        /** Autocomplete suggestions returned by Serpdog. */
        suggestions: Array<{
          /**
           * Suggestion text returned by Serpdog.
           * @minLength 1
           */
          value: string;
          /** Suggestion relevance score returned by Serpdog. */
          relevance: number;
          /**
           * Suggestion type returned by Serpdog.
           * @minLength 1
           */
          type: string;
        }>;
        /** Verbatim relevance score returned by Serpdog. */
        verbatim_relevance: number;
      };
    };
    /** Run a Google News request through Serpdog. */
    "serpdog.google_news_search": {
      input: {
        /**
         * Google News query.
         * @minLength 1
         */
        q: string;
        /**
         * Number of results to request per page.
         * @minimum 1
         */
        num?: number;
        /**
         * Two-letter country code used for localized results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Language code used for localized results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Result offset used by Serpdog pagination, such as 0, 10, or 20.
         * @minimum 0
         */
        page?: number;
        /**
         * Document language restriction passed to Google News.
         * @minLength 1
         */
        lr?: string;
        /**
         * Encoded location parameter passed to Google News.
         * @minLength 1
         */
        uule?: string;
        /**
         * Relative time filter passed to Google News.
         * @minLength 1
         */
        duration?: string;
        /** Whether to exclude results for an auto-corrected query. */
        nfpr?: boolean;
        /**
         * Advanced search filter string passed to Google News.
         * @minLength 1
         */
        tbs?: string;
        /** Safe search mode passed to Google News. */
        safe?: "active" | "off";
      };
      output: {
        /** Request metadata returned by Serpdog. */
        meta: Record<string, unknown>;
        /** News results returned by Serpdog. */
        news_results: Array<Record<string, unknown>>;
        /** Grouped sub-articles returned by Serpdog when available. */
        subArticles?: Array<Record<string, unknown>>;
        /** Google pagination payload returned by Serpdog. */
        pagination?: Record<string, unknown>;
        /** Serpdog pagination helper payload returned by Serpdog. */
        serpdog_pagination?: Record<string, unknown>;
      };
    };
    /** Run a Google Search request through Serpdog using either the advanced or lite endpoint. */
    "serpdog.google_search": {
      input: {
        /**
         * Google Search query.
         * @minLength 1
         */
        q: string;
        /** Search mode used for Google Search requests. */
        mode?: "advanced" | "lite";
        /**
         * Number of results to request per page.
         * @minimum 1
         */
        num?: number;
        /**
         * Two-letter country code used for localized results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Language code used for localized results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Result offset used by Serpdog pagination, such as 0, 10, or 20.
         * @minimum 0
         */
        page?: number;
        /**
         * Document language restriction passed to Google Search.
         * @minLength 1
         */
        lr?: string;
        /**
         * Encoded location parameter passed to Google Search.
         * @minLength 1
         */
        uule?: string;
        /**
         * Relative time filter passed to Google Search.
         * @minLength 1
         */
        duration?: string;
        /** Whether to exclude results for an auto-corrected query. */
        nfpr?: boolean;
        /**
         * Advanced search filter string passed to Google Search.
         * @minLength 1
         */
        tbs?: string;
        /** Safe search mode passed to Google Search. */
        safe?: "active" | "off";
        /**
         * Google domain override such as google.co.uk.
         * @minLength 1
         */
        domain?: string;
      };
      output: {
        /** Request metadata returned by Serpdog. */
        meta: Record<string, unknown>;
        /** Organic search results returned by Serpdog. */
        organic_results: Array<Record<string, unknown>>;
        /** Knowledge graph payload returned by Serpdog when available. */
        knowledge_graph?: Record<string, unknown>;
        /** Inline video results returned by Serpdog when available. */
        inline_videos?: Array<Record<string, unknown>>;
        /** Local results returned by Serpdog when available. */
        local_results?: Array<Record<string, unknown>>;
        /** Recipe results returned by Serpdog when available. */
        recipes_results?: Array<Record<string, unknown>>;
        /** Related entity results returned by Serpdog when available. */
        peopleAlsoAskedFor?: Array<Record<string, unknown>>;
        /** Related searches returned by Serpdog when available. */
        relatedSearches?: Array<Record<string, unknown>>;
        /** Google pagination payload returned by Serpdog. */
        pagination?: Record<string, unknown>;
        /** Serpdog pagination helper payload returned by Serpdog. */
        serpdog_pagination?: Record<string, unknown>;
      };
    };
    /** Run a Google Videos request through Serpdog. */
    "serpdog.google_videos_search": {
      input: {
        /**
         * Google Videos query.
         * @minLength 1
         */
        q: string;
        /**
         * Number of results to request per page.
         * @minimum 1
         */
        num?: number;
        /**
         * Two-letter country code used for localized results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Language code used for localized results.
         * @minLength 1
         */
        hl?: string;
        /**
         * Result offset used by Serpdog pagination, such as 0, 10, or 20.
         * @minimum 0
         */
        page?: number;
        /**
         * Document language restriction passed to Google Videos.
         * @minLength 1
         */
        lr?: string;
        /**
         * Encoded location parameter passed to Google Videos.
         * @minLength 1
         */
        uule?: string;
        /**
         * Relative time filter passed to Google Videos.
         * @minLength 1
         */
        duration?: string;
        /** Whether to exclude results for an auto-corrected query. */
        nfpr?: boolean;
        /**
         * Advanced search filter string passed to Google Videos.
         * @minLength 1
         */
        tbs?: string;
        /** Safe search mode passed to Google Videos. */
        safe?: "active" | "off";
      };
      output: {
        /** Request metadata returned by Serpdog. */
        meta: Record<string, unknown>;
        /** Video results returned by Serpdog. */
        video_results: Array<Record<string, unknown>>;
        /** Google pagination payload returned by Serpdog. */
        pagination?: Record<string, unknown>;
        /** Serpdog pagination helper payload returned by Serpdog. */
        serpdog_pagination?: Record<string, unknown>;
      };
    };
  }
}
