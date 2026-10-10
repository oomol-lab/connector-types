import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Finlight article by its original URL, optionally including company entities and full content. */
    "finlight.get_article_by_link": {
      input: {
        /**
         * Original article URL to look up in Finlight.
         * @format uri
         */
        link: string;
        /** Include company entities; requires a suitable subscription. Defaults to false. */
        includeEntities?: boolean;
        /** Deprecated upstream option to include full article content. Defaults to false. */
        includeContent?: boolean;
      };
      output: {
        /** Upstream response status. */
        status: string;
        /** A financial news article returned by Finlight. */
        article: {
          /** URL of the original article. */
          link: string;
          /** Publisher domain. */
          source?: string;
          /** Article title. */
          title: string;
          /** Article summary when available. */
          summary?: string | null;
          /** Publication date as an ISO date string. */
          publishDate?: string;
          /** Indexing date, returned when ordering by createdAt. */
          createdAt?: string;
          /** Last revision date, returned when ordering by revisedDate. */
          revisedDate?: string | null;
          /** Article language as an ISO 639-1 code. */
          language?: string;
          /** Sentiment: positive, neutral, or negative. */
          sentiment?: string;
          /** Sentiment confidence from 0 to 1 as a stringified number. */
          confidence?: string;
          /** Full article content when available under the subscription. */
          content?: string | null;
          /** Article image URLs. */
          images?: Array<string>;
          /** Countries related to the article. */
          countries?: Array<string>;
          /** Article categories. */
          categories?: Array<string>;
          /** Company entities, subject to subscription access. */
          companies?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Finlight news sources, their languages, countries, and default inclusion status. */
    "finlight.list_sources": {
      input: Record<string, never>;
      output: {
        /** Supported sources; availability can change. */
        sources: Array<{
          /** Publisher domain. */
          domain: string;
          /** Whether the source is included by default. */
          isDefaultSource: boolean;
          /** Publisher country code; may be empty. */
          originCountry: string;
          /** Publisher languages, primary language first. */
          languages: Array<string>;
          /** Whether this is a custom source enabled for the subscription. */
          isCustomSource?: boolean;
          /** Deprecated indication of full content availability on eligible plans. */
          isContentAvailable?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search financial news with sentiment, source, ticker, country, category, date, and pagination filters. */
    "finlight.search_articles": {
      input: {
        /** Search query, including Finlight advanced query syntax. */
        query?: string;
        /** Restrict sources; use * to include all sources. */
        sources?: Array<string>;
        /** Additional sources to include beyond the default set. */
        optInSources?: Array<string>;
        /** Sources to exclude. */
        excludeSources?: Array<string>;
        /** Stock tickers to match; supports *. */
        tickers?: Array<string>;
        /** Filter countries the article is about, not publisher or company domicile. */
        countries?: Array<string>;
        /** Filter by article categories. */
        categories?: Array<"markets" | "economy" | "business" | "politics" | "geopolitics" | "regulation" | "technology" | "energy" | "commodities" | "crypto" | "health" | "climate" | "security">;
        /** Include company entities; requires a suitable subscription. Defaults to false. */
        includeEntities?: boolean;
        /**
         * Start date in YYYY-MM-DD or ISO date format.
         * @minLength 1
         */
        from?: string;
        /**
         * End date in YYYY-MM-DD or ISO date format.
         * @minLength 1
         */
        to?: string;
        /**
         * ISO 639-1 language filter. Defaults to en, excluding other languages.
         * @minLength 1
         */
        language?: string;
        /** Sort field. Defaults to publishDate. */
        orderBy?: "publishDate" | "createdAt" | "revisedDate";
        /** Sort direction. Defaults to DESC. */
        order?: "ASC" | "DESC";
        /**
         * Results per page. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Upstream response status. */
        status: string;
        /** Current page number. */
        page: number;
        /** Requested page size. */
        pageSize: number;
        /** Matching articles on this page. */
        articles: Array<{
          /** URL of the original article. */
          link: string;
          /** Publisher domain. */
          source?: string;
          /** Article title. */
          title: string;
          /** Article summary when available. */
          summary?: string | null;
          /** Publication date as an ISO date string. */
          publishDate?: string;
          /** Indexing date, returned when ordering by createdAt. */
          createdAt?: string;
          /** Last revision date, returned when ordering by revisedDate. */
          revisedDate?: string | null;
          /** Article language as an ISO 639-1 code. */
          language?: string;
          /** Sentiment: positive, neutral, or negative. */
          sentiment?: string;
          /** Sentiment confidence from 0 to 1 as a stringified number. */
          confidence?: string;
          /** Full article content when available under the subscription. */
          content?: string | null;
          /** Article image URLs. */
          images?: Array<string>;
          /** Countries related to the article. */
          countries?: Array<string>;
          /** Article categories. */
          categories?: Array<string>;
          /** Company entities, subject to subscription access. */
          companies?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
