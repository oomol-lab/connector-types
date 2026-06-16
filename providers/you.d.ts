import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch HTML, Markdown, or metadata for one or more webpages with You.com. */
    "you.fetch_contents": {
      input: {
        /**
         * Webpage URLs to fetch contents from.
         * @minItems 1
         */
        urls: Array<string>;
        /**
         * Content formats to return for each webpage.
         * @minItems 1
         */
        formats?: Array<"html" | "markdown" | "metadata">;
        /**
         * The maximum time in seconds to wait for page content.
         * @minimum 1
         * @maximum 60
         */
        crawlTimeout?: number;
      };
      output: {
        /** Fetched webpage contents. */
        pages: Array<{
          /** The webpage URL whose content was fetched. */
          url?: string;
          /** The title of the webpage. */
          title?: string;
          /** The retrieved HTML content of the webpage. */
          html?: string | null;
          /** The retrieved Markdown content of the webpage. */
          markdown?: string | null;
          /** Metadata returned for one fetched webpage. */
          metadata?: {
            /** The OpenGraph site name of the webpage. */
            siteName?: string | null;
            /** The URL of the webpage domain favicon. */
            faviconUrl?: string;
            /** A JSON object passed through to or from You.com. */
            raw: Record<string, unknown>;
          };
          /** A JSON object passed through to or from You.com. */
          raw: Record<string, unknown>;
        }>;
        /** The raw content response array returned by You.com. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Generate a cited finance-grade answer with the You.com Finance Research API. */
    "you.finance_research": {
      input: {
        /**
         * The financial research question requiring in-depth investigation.
         * @minLength 1
         * @maxLength 40000
         */
        input: string;
        /** How much effort the Finance Research API spends on the question. */
        researchEffort?: "deep" | "exhaustive";
      };
      output: {
        /** The research answer and its supporting sources. */
        output: {
          /** The answer content as Markdown text or a structured JSON object. */
          content: string | Record<string, unknown>;
          /** The format of the content field. */
          contentType: string;
          /** Sources used to generate the answer. */
          sources: Array<{
            /** The URL of the source webpage. */
            url: string;
            /** The title of the source webpage. */
            title?: string;
            /** Relevant excerpts from the source page. */
            snippets?: Array<string>;
            /** A JSON object passed through to or from You.com. */
            raw: Record<string, unknown>;
          }>;
          /** A JSON object passed through to or from You.com. */
          raw: Record<string, unknown>;
        };
        /** A JSON object passed through to or from You.com. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the remaining You.com credit balance for the API key account. */
    "you.get_account_balance": {
      input: Record<string, never>;
      output: {
        /** The billing entity type returned by You.com. */
        type: string;
        /** The stable hashed identifier for the billing entity. */
        id: string;
        /** The remaining credit balance in cents. */
        balanceCents: number;
        /** The remaining credit balance converted to US dollars. */
        balanceUsd: number;
        /** A JSON object passed through to or from You.com. */
        raw: Record<string, unknown>;
      };
    };
    /** Generate a cited research answer with the You.com Research API. */
    "you.research": {
      input: {
        /**
         * The research question requiring in-depth investigation.
         * @minLength 1
         * @maxLength 40000
         */
        input: string;
        /** How much effort the Research API spends on the question. */
        researchEffort?: "lite" | "standard" | "deep" | "exhaustive";
        /** Controls which web sources the research agent searches and visits. */
        sourceControl?: {
          /**
           * Domains to restrict results to. Cannot be combined with excludeDomains.
           * @minItems 1
           */
          includeDomains?: Array<string>;
          /**
           * Domains to exclude from results. Cannot be combined with includeDomains.
           * @minItems 1
           */
          excludeDomains?: Array<string>;
          /**
           * Domains to boost in ranking without filtering out other domains.
           * @minItems 1
           */
          boostDomains?: Array<string>;
          /**
           * The freshness filter, such as day, week, month, year, or YYYY-MM-DDtoYYYY-MM-DD.
           * @minLength 1
           */
          freshness?: string;
          /**
           * The country code that determines the geographical focus of the web results.
           * @minLength 2
           */
          country?: string;
        };
        /** A JSON object passed through to or from You.com. */
        outputSchema?: Record<string, unknown>;
      };
      output: {
        /** The research answer and its supporting sources. */
        output: {
          /** The answer content as Markdown text or a structured JSON object. */
          content: string | Record<string, unknown>;
          /** The format of the content field. */
          contentType: string;
          /** Sources used to generate the answer. */
          sources: Array<{
            /** The URL of the source webpage. */
            url: string;
            /** The title of the source webpage. */
            title?: string;
            /** Relevant excerpts from the source page. */
            snippets?: Array<string>;
            /** A JSON object passed through to or from You.com. */
            raw: Record<string, unknown>;
          }>;
          /** A JSON object passed through to or from You.com. */
          raw: Record<string, unknown>;
        };
        /** A JSON object passed through to or from You.com. */
        raw: Record<string, unknown>;
      };
    };
    /** Search web and news sources with the You.com Search API. */
    "you.search": {
      input: {
        /**
         * The search query used to retrieve relevant results.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of search results to return per section.
         * @minimum 1
         */
        count?: number;
        /**
         * The freshness filter, such as day, week, month, year, or YYYY-MM-DDtoYYYY-MM-DD.
         * @minLength 1
         */
        freshness?: string;
        /**
         * The pagination offset calculated in multiples of count.
         * @minimum 0
         * @maximum 9
         */
        offset?: number;
        /**
         * The country code that determines the geographical focus of the web results.
         * @minLength 2
         */
        country?: string;
        /**
         * The language of the web results in BCP 47 format.
         * @minLength 2
         */
        language?: string;
        /** The safesearch content moderation setting. */
        safesearch?: "off" | "moderate" | "strict";
        /** The result sections to live-crawl for full page content. */
        livecrawl?: "web" | "news" | "all";
        /**
         * The formats to return when livecrawl is enabled.
         * @minItems 1
         */
        livecrawlFormats?: Array<"html" | "markdown">;
        /**
         * Domains to restrict search results to. Cannot be combined with excludeDomains.
         * @minItems 1
         */
        includeDomains?: Array<string>;
        /**
         * Domains to exclude from search results.
         * @minItems 1
         */
        excludeDomains?: Array<string>;
        /**
         * Domains to boost in search ranking.
         * @minItems 1
         */
        boostDomains?: Array<string>;
        /**
         * The maximum time in seconds to wait for page content.
         * @minimum 1
         * @maximum 60
         */
        crawlTimeout?: number;
      };
      output: {
        /** Web results returned by You.com. */
        web: Array<{
          /** The URL of the search result. */
          url?: string;
          /** The title or name of the search result. */
          title?: string;
          /** A brief description of the search result. */
          description?: string;
          /** Text snippets from the search result. */
          snippets?: Array<string>;
          /** The URL of the result thumbnail. */
          thumbnailUrl?: string;
          /** The publication or crawl timestamp of the result. */
          pageAge?: string;
          /** The live-crawled page contents returned for a search result. */
          contents?: {
            /** The HTML content of the page. */
            html?: string;
            /** The Markdown content of the page. */
            markdown?: string;
          };
          /** The authors of the search result. */
          authors?: Array<string>;
          /** The URL of the result domain favicon. */
          faviconUrl?: string;
          /** A JSON object passed through to or from You.com. */
          raw: Record<string, unknown>;
        }>;
        /** News results returned by You.com. */
        news: Array<{
          /** The URL of the news result. */
          url?: string;
          /** The title of the news result. */
          title?: string;
          /** A brief description of the news result. */
          description?: string;
          /** The publication timestamp of the news result. */
          pageAge?: string;
          /** The URL of the news thumbnail. */
          thumbnailUrl?: string;
          /** The live-crawled page contents returned for a search result. */
          contents?: {
            /** The HTML content of the page. */
            html?: string;
            /** The Markdown content of the page. */
            markdown?: string;
          };
          /** A JSON object passed through to or from You.com. */
          raw: Record<string, unknown>;
        }>;
        /** Metadata returned with a You.com search response. */
        metadata: {
          /** The search UUID returned by You.com. */
          searchUuid?: string;
          /** The query used to retrieve the results. */
          query?: string;
          /** The response latency reported by You.com. */
          latency?: number;
          /** A JSON object passed through to or from You.com. */
          raw: Record<string, unknown>;
        };
        /** A JSON object passed through to or from You.com. */
        raw: Record<string, unknown>;
      };
    };
  }
}
