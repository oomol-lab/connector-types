import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve recent NewsCatcher headlines with source and publication filters. */
    "newscatcher.get_latest_headlines": {
      input: {
        /** The recent time window, such as 1h, 24h, 7d, or 30d. */
        when?: string;
        /**
         * The article language codes to include.
         * @minItems 1
         */
        lang?: Array<string>;
        /**
         * The publisher country codes to include.
         * @minItems 1
         */
        countries?: Array<string>;
        /**
         * The source domains to include.
         * @minItems 1
         */
        sources?: Array<string>;
        /**
         * The source domains to exclude.
         * @minItems 1
         */
        not_sources?: Array<string>;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        page_size?: number;
        /** Whether to include available NewsCatcher NLP enrichments. */
        include_nlp_data?: boolean;
      };
      output: {
        /** The response status reported by NewsCatcher. */
        status: string;
        /** The number of matching articles, capped by the API search window. */
        total_hits: number;
        /** The returned page number. */
        page: number;
        /** The number of available pages. */
        total_pages: number;
        /** The requested page size. */
        page_size: number;
        /** The matching articles. */
        articles?: Array<{
          /** The NewsCatcher article identifier. */
          id?: string;
          /** The article title. */
          title?: string;
          /** The canonical article URL. */
          link?: string;
          /** The article publication timestamp. */
          published_date?: string;
          [key: string]: unknown;
        }>;
        /** The effective filters reported by NewsCatcher. */
        user_input?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the active NewsCatcher subscription plan and remaining API allowance. */
    "newscatcher.get_subscription": {
      input: Record<string, never>;
      output: {
        /** Whether the NewsCatcher subscription is active. */
        active: boolean;
        /** The plan's concurrent request allowance. */
        concurrent_calls: number;
        /** The subscription plan name. */
        plan: string;
        /** The plan's total call allowance. */
        plan_calls: number;
        /** The number of calls remaining in the current allowance. */
        remaining_calls: number;
        /** The number of historical news days available to the plan. */
        historical_days: number;
        [key: string]: unknown;
      };
    };
    /** List news sources indexed by NewsCatcher using language and country filters. */
    "newscatcher.list_sources": {
      input: {
        /**
         * The source language codes to include.
         * @minItems 1
         */
        lang?: Array<string>;
        /**
         * The source country codes to include.
         * @minItems 1
         */
        countries?: Array<string>;
        /** A documented NewsCatcher predefined source collection. */
        predefined_sources?: string;
        /** A source name to match. */
        source_name?: string;
        /** A source domain URL to match. */
        source_url?: string;
        /** Whether to include rank, country, and domain classification metadata. */
        include_additional_info?: boolean;
      };
      output: {
        /** The result message reported by NewsCatcher. */
        message: string;
        /** The matching news sources. */
        sources: Array<{
          /** The source domain URL. */
          domain_url: string;
          /** The source display name. */
          name_source?: string;
          [key: string]: unknown;
        } | string>;
        /** The effective source filters reported by NewsCatcher. */
        user_input: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search NewsCatcher's global news index with practical publication filters. */
    "newscatcher.search_articles": {
      input: {
        /**
         * The keyword, phrase, or Boolean query to search for.
         * @minLength 1
         */
        q: string;
        /**
         * The article language codes to include.
         * @minItems 1
         */
        lang?: Array<string>;
        /**
         * The publisher country codes to include.
         * @minItems 1
         */
        countries?: Array<string>;
        /**
         * The source domains to include.
         * @minItems 1
         */
        sources?: Array<string>;
        /**
         * The source domains to exclude.
         * @minItems 1
         */
        not_sources?: Array<string>;
        /** The earliest publication date or relative time accepted by NewsCatcher. */
        from_?: string;
        /** The latest publication date or relative time accepted by NewsCatcher. */
        to_?: string;
        /** The order used for matching articles. */
        sort_by?: "relevancy" | "date" | "rank";
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        page_size?: number;
        /** Whether to include available NewsCatcher NLP enrichments. */
        include_nlp_data?: boolean;
        /** Whether to exclude duplicate articles. */
        exclude_duplicates?: boolean;
      };
      output: {
        /** The response status reported by NewsCatcher. */
        status: string;
        /** The number of matching articles, capped by the API search window. */
        total_hits: number;
        /** The returned page number. */
        page: number;
        /** The number of available pages. */
        total_pages: number;
        /** The requested page size. */
        page_size: number;
        /** The matching articles. */
        articles?: Array<{
          /** The NewsCatcher article identifier. */
          id?: string;
          /** The article title. */
          title?: string;
          /** The canonical article URL. */
          link?: string;
          /** The article publication timestamp. */
          published_date?: string;
          [key: string]: unknown;
        }>;
        /** The effective filters reported by NewsCatcher. */
        user_input?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
