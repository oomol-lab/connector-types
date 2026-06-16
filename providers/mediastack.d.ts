import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search live Mediastack news articles with optional keyword, source, location, and sorting filters. */
    "mediastack.search_live_news": {
      input: {
        /**
         * Keywords used to filter returned news articles by title or description.
         * @minLength 1
         */
        keywords?: string;
        /**
         * Comma-separated source identifiers used to filter returned articles.
         * @minLength 1
         */
        sources?: string;
        /**
         * Comma-separated country codes used to filter returned articles.
         * @minLength 1
         */
        countries?: string;
        /**
         * Comma-separated language codes used to filter returned articles.
         * @minLength 1
         */
        languages?: string;
        /**
         * Comma-separated categories used to filter returned articles.
         * @minLength 1
         */
        categories?: string;
        /** Sort order used by the live news request. */
        sort?: "published_desc" | "published_asc" | "popularity";
        /**
         * Maximum number of articles to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of leading articles to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** News articles returned by Mediastack. */
        articles: Array<{
          /** Author name returned by Mediastack. */
          author: string | null;
          /** Article title returned by Mediastack. */
          title: string | null;
          /** Article summary or excerpt. */
          description: string | null;
          /** Canonical article URL. */
          url: string | null;
          /** Source name returned by Mediastack. */
          source: string | null;
          /** Preview image URL returned by Mediastack. */
          image: string | null;
          /** Article category returned by Mediastack. */
          category: string | null;
          /** Article language code returned by Mediastack. */
          language: string | null;
          /** Article country code returned by Mediastack. */
          country: string | null;
          /** Article publication timestamp returned by Mediastack. */
          publishedAt: string | null;
        }>;
        /** Pagination information returned by Mediastack. */
        pagination: {
          /** Requested page size returned by Mediastack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** Search Mediastack news sources with language, country, category, and pagination filters. */
    "mediastack.search_news_sources": {
      input: {
        /**
         * Search text used to match source names or descriptions.
         * @minLength 1
         */
        search: string;
        /**
         * Comma-separated country codes used to filter the returned sources.
         * @minLength 1
         */
        countries?: string;
        /**
         * Comma-separated language codes used to filter the returned sources.
         * @minLength 1
         */
        languages?: string;
        /**
         * Comma-separated categories used to filter the returned sources.
         * @minLength 1
         */
        categories?: string;
        /**
         * Maximum number of sources to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of leading sources to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** News sources returned by Mediastack. */
        sources: Array<{
          /** Unique source identifier returned by Mediastack. */
          id: string | null;
          /** Display name of the news source. */
          name: string | null;
          /** Short description of the news source. */
          description: string | null;
          /** Category assigned to the source. */
          category: string | null;
          /** Country code assigned to the source. */
          country: string | null;
          /** Language code assigned to the source. */
          language: string | null;
          /** Homepage URL of the source. */
          url: string | null;
        }>;
        /** Pagination information returned by Mediastack. */
        pagination: {
          /** Requested page size returned by Mediastack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
  }
}
