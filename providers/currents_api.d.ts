import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the latest Currents news feed with optional language and region filters. */
    "currents_api.get_latest_news": {
      input: {
        /**
         * Comma-separated language codes used to filter the latest news feed.
         * @minLength 1
         */
        language?: string;
        /**
         * Comma-separated region codes used to filter the latest news feed.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated category values used to filter the latest news feed.
         * @minLength 1
         */
        category?: string;
        /**
         * Article type filter forwarded to Currents.
         * @minLength 1
         */
        type?: string;
        /**
         * Comma-separated domains to include in the latest news feed.
         * @minLength 1
         */
        domain?: string;
        /**
         * Comma-separated domains to exclude from the latest news feed.
         * @minLength 1
         */
        domain_not?: string;
        /**
         * One-based page number to request from Currents.
         * @minimum 1
         */
        page_number?: number;
        /**
         * Maximum number of news articles to request from Currents.
         * @minimum 1
         */
        page_size?: number;
      };
      output: {
        /**
         * Top-level request status returned by Currents.
         * @minLength 1
         */
        status: string;
        /** News articles returned by Currents for this request. */
        news: Array<{
          /**
           * Unique Currents article identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Article headline returned by Currents.
           * @minLength 1
           */
          title?: string;
          /**
           * Article summary returned by Currents.
           * @minLength 1
           */
          description?: string;
          /**
           * Canonical article URL.
           * @minLength 1
           */
          url?: string;
          /**
           * Publisher or author name reported by Currents.
           * @minLength 1
           */
          author?: string;
          /**
           * Image URL associated with the article.
           * @minLength 1
           */
          image?: string;
          /**
           * Language code returned for the article.
           * @minLength 1
           */
          language?: string;
          /** Article categories returned by Currents. */
          category?: Array<string>;
          /**
           * Published timestamp string returned by Currents.
           * @minLength 1
           */
          published?: string;
          [key: string]: unknown;
        }>;
        /** Current page number returned by Currents. */
        page_number?: number;
        /**
         * Cursor token returned by Currents for fetching the next search page.
         * @minLength 1
         */
        nextPage?: string;
        [key: string]: unknown;
      };
    };
    /** List the news categories currently supported by Currents. */
    "currents_api.list_available_categories": {
      input: Record<string, never>;
      output: {
        /**
         * Top-level request status returned by Currents.
         * @minLength 1
         */
        status: string;
        /** Categories currently supported by Currents. */
        categories: Array<string>;
        /**
         * Human-readable description returned by Currents for this taxonomy payload.
         * @minLength 1
         */
        description?: string;
      };
    };
    /** List the language codes currently supported by Currents. */
    "currents_api.list_available_languages": {
      input: Record<string, never>;
      output: {
        /**
         * Top-level request status returned by Currents.
         * @minLength 1
         */
        status: string;
        /** Language display names mapped to Currents language codes. */
        languages: Record<string, string>;
        /**
         * Human-readable description returned by Currents for this taxonomy payload.
         * @minLength 1
         */
        description?: string;
      };
    };
    /** List the region codes currently supported by Currents. */
    "currents_api.list_available_regions": {
      input: Record<string, never>;
      output: {
        /**
         * Top-level request status returned by Currents.
         * @minLength 1
         */
        status: string;
        /** Region display names mapped to Currents region codes. */
        regions: Record<string, string>;
        /**
         * Human-readable description returned by Currents for this taxonomy payload.
         * @minLength 1
         */
        description?: string;
      };
    };
    /** Search Currents news articles with keyword, taxonomy, and time-range filters. */
    "currents_api.search_news": {
      input: {
        /**
         * Keyword query forwarded to Currents search.
         * @minLength 1
         */
        keywords?: string;
        /**
         * Comma-separated language codes used to filter search.
         * @minLength 1
         */
        language?: string;
        /**
         * Comma-separated region codes used to filter search.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated category values used to filter search.
         * @minLength 1
         */
        category?: string;
        /**
         * UTC timestamp filter in ISO 8601 format, such as 2026-04-29T00:00:00Z.
         * @format date-time
         */
        start_date?: string;
        /**
         * UTC timestamp filter in ISO 8601 format, such as 2026-04-29T00:00:00Z.
         * @format date-time
         */
        end_date?: string;
        /**
         * Article type filter forwarded to Currents search.
         * @minLength 1
         */
        type?: string;
        /**
         * Comma-separated domains to include in the search results.
         * @minLength 1
         */
        domain?: string;
        /**
         * Comma-separated domains to exclude from the search results.
         * @minLength 1
         */
        domain_not?: string;
        /**
         * Comma-separated author names used to filter search.
         * @minLength 1
         */
        author?: string;
        /**
         * One-based page number to request from Currents.
         * @minimum 1
         */
        page_number?: number;
        /**
         * Maximum number of news articles to request from Currents search.
         * @minimum 1
         */
        page_size?: number;
        /**
         * Cursor token returned by Currents for deep pagination.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /**
         * Top-level request status returned by Currents.
         * @minLength 1
         */
        status: string;
        /** News articles returned by Currents for this request. */
        news: Array<{
          /**
           * Unique Currents article identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Article headline returned by Currents.
           * @minLength 1
           */
          title?: string;
          /**
           * Article summary returned by Currents.
           * @minLength 1
           */
          description?: string;
          /**
           * Canonical article URL.
           * @minLength 1
           */
          url?: string;
          /**
           * Publisher or author name reported by Currents.
           * @minLength 1
           */
          author?: string;
          /**
           * Image URL associated with the article.
           * @minLength 1
           */
          image?: string;
          /**
           * Language code returned for the article.
           * @minLength 1
           */
          language?: string;
          /** Article categories returned by Currents. */
          category?: Array<string>;
          /**
           * Published timestamp string returned by Currents.
           * @minLength 1
           */
          published?: string;
          [key: string]: unknown;
        }>;
        /** Current page number returned by Currents. */
        page_number?: number;
        /**
         * Cursor token returned by Currents for fetching the next search page.
         * @minLength 1
         */
        nextPage?: string;
        [key: string]: unknown;
      };
    };
  }
}
