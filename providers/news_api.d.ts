import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search every article published by News API using the official everything endpoint. */
    "news_api.get_everything": {
      input: {
        /**
         * Keywords or phrases to search for in the article title and body.
         * @minLength 1
         */
        q?: string;
        /** The oldest date or date-time allowed for articles in the result set. */
        from?: string;
        /** The newest date or date-time allowed for articles in the result set. */
        to?: string;
        /** The order used to sort the article results. */
        sortBy?: "relevancy" | "popularity" | "publishedAt";
        /**
         * A comma-separated list of source identifiers to include in the results.
         * @minLength 1
         */
        sources?: string;
        /**
         * A comma-separated list of domains to include in the results.
         * @minLength 1
         */
        domains?: string;
        /**
         * A comma-separated list of domains to exclude from the results.
         * @minLength 1
         */
        excludeDomains?: string;
        /** The ISO 639-1 language code used by the News API request. */
        language?: "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "sv" | "ud" | "zh";
        /**
         * Keywords or phrases to search for only in the article title.
         * @minLength 1
         */
        qInTitle?: string;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The top-level News API status. */
        status: string;
        /** The total number of matching articles. */
        totalResults: number;
        /** The articles returned by the request. */
        articles: Array<{
          /** The source metadata for the article. */
          source: {
            /** The source identifier for the article. */
            id?: string | null;
            /** The display name of the article source. */
            name: string;
          };
          /** The author of the article. */
          author?: string | null;
          /** The title of the article. */
          title: string;
          /** The short description or snippet of the article. */
          description?: string | null;
          /** The canonical URL of the article. */
          url: string;
          /** The image URL associated with the article. */
          urlToImage?: string | null;
          /** The publication timestamp of the article. */
          publishedAt: string;
          /** The content excerpt returned by News API. */
          content?: string | null;
        }>;
        [key: string]: unknown;
      };
    };
    /** List available news sources using the official sources endpoint. */
    "news_api.get_sources": {
      input: {
        /** The news category filter used by the request. */
        category?: "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
        /** The ISO 639-1 language code used by the source listing request. */
        language?: "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "sv" | "ud" | "zh";
        /** Schema for sourcesCountrySchema. */
        country?: "ae" | "ar" | "at" | "au" | "be" | "bg" | "br" | "ca" | "ch" | "cn" | "co" | "cu" | "cz" | "de" | "eg" | "fr" | "gb" | "gr" | "hk" | "hu" | "id" | "ie" | "il" | "in" | "is" | "it" | "jp" | "kr" | "lt" | "lv" | "ma" | "mx" | "my" | "ng" | "nl" | "no" | "nz" | "ph" | "pl" | "pt" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "th" | "tr" | "tw" | "ua" | "us" | "ve" | "za";
      };
      output: {
        /** The top-level News API status. */
        status: string;
        /** The sources returned by the request. */
        sources: Array<{
          /** The unique identifier of the source. */
          id: string;
          /** The display name of the source. */
          name: string;
          /** The short description of the source. */
          description: string;
          /** The homepage URL of the source. */
          url: string;
          /** The source category. */
          category: string;
          /** The source language. */
          language: string;
          /** The source country. */
          country: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve current top and breaking headlines using the official top headlines endpoint. */
    "news_api.get_top_headlines": {
      input: {
        /**
         * Keywords or phrases to search for in the article title and body.
         * @minLength 1
         */
        q?: string;
        /** Schema for topHeadlinesCountrySchema. */
        country?: "ae" | "ar" | "at" | "au" | "be" | "bg" | "br" | "ca" | "ch" | "cn" | "co" | "cu" | "cz" | "de" | "eg" | "fr" | "gb" | "gr" | "hk" | "hu" | "id" | "ie" | "il" | "in" | "it" | "jp" | "kr" | "lt" | "lv" | "ma" | "mx" | "my" | "ng" | "nl" | "no" | "nz" | "ph" | "pl" | "pt" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "th" | "tr" | "tw" | "ua" | "us" | "ve" | "za";
        /** The news category filter used by the request. */
        category?: "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
        /**
         * A comma-separated list of source identifiers to include.
         * @minLength 1
         */
        sources?: string;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The top-level News API status. */
        status: string;
        /** The total number of matching articles. */
        totalResults: number;
        /** The articles returned by the request. */
        articles: Array<{
          /** The source metadata for the article. */
          source: {
            /** The source identifier for the article. */
            id?: string | null;
            /** The display name of the article source. */
            name: string;
          };
          /** The author of the article. */
          author?: string | null;
          /** The title of the article. */
          title: string;
          /** The short description or snippet of the article. */
          description?: string | null;
          /** The canonical URL of the article. */
          url: string;
          /** The image URL associated with the article. */
          urlToImage?: string | null;
          /** The publication timestamp of the article. */
          publishedAt: string;
          /** The content excerpt returned by News API. */
          content?: string | null;
        }>;
        [key: string]: unknown;
      };
    };
    /** Provide a compatibility wrapper for the legacy v1 articles action by using the current top headlines endpoint with a single source. */
    "news_api.get_v1_articles": {
      input: {
        /**
         * The legacy single-source identifier used by the v1 articles action.
         * @minLength 1
         */
        source: string;
        /** The legacy v1 sort order requested by the caller. */
        sortBy?: "top";
      };
      output: {
        /** The top-level News API status. */
        status: string;
        /** The total number of matching articles. */
        totalResults: number;
        /** The articles returned by the request. */
        articles: Array<{
          /** The source metadata for the article. */
          source: {
            /** The source identifier for the article. */
            id?: string | null;
            /** The display name of the article source. */
            name: string;
          };
          /** The author of the article. */
          author?: string | null;
          /** The title of the article. */
          title: string;
          /** The short description or snippet of the article. */
          description?: string | null;
          /** The canonical URL of the article. */
          url: string;
          /** The image URL associated with the article. */
          urlToImage?: string | null;
          /** The publication timestamp of the article. */
          publishedAt: string;
          /** The content excerpt returned by News API. */
          content?: string | null;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
