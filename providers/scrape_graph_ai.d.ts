import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract structured JSON from a URL, raw HTML, or markdown with a natural-language prompt. */
    "scrape_graph_ai.extract": {
      input: {
        /**
         * The public URL to fetch or extract from.
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content to extract from.
         * @minLength 1
         */
        html?: string;
        /**
         * Markdown content to extract from.
         * @minLength 1
         */
        markdown?: string;
        /**
         * The natural-language description of what to extract.
         * @minLength 1
         */
        prompt: string;
        /** A loose JSON object. */
        schema?: Record<string, unknown>;
        /** The HTML pre-processing mode. */
        mode?: "normal" | "reader" | "prune";
        /** Fetch-time options used when ScrapeGraphAI retrieves a page. */
        fetchConfig?: {
          /** The fetch mode used by ScrapeGraphAI. */
          mode?: "auto" | "fast" | "js";
          /** Whether ScrapeGraphAI should use residential proxy and anti-bot headers. */
          stealth?: boolean;
          /** Custom HTTP headers ScrapeGraphAI should send while fetching the target page. */
          headers?: Record<string, string>;
          /** Cookies ScrapeGraphAI should send while fetching the target page. */
          cookies?: Record<string, string>;
          /**
           * The number of scrolls for infinite-scroll pages.
           * @minimum 0
           * @maximum 100
           */
          scrolls?: number;
          /**
           * The milliseconds to wait after page load.
           * @minimum 0
           * @maximum 30000
           */
          wait?: number;
          /**
           * The page fetch timeout in milliseconds.
           * @minimum 1000
           * @maximum 60000
           */
          timeout?: number;
          /** The ISO 3166-1 alpha-2 country code for geo-targeted proxy use. */
          country?: string;
        };
      };
      output: {
        /** The ScrapeGraphAI request ID. */
        id?: string;
        /** The structured JSON output returned by ScrapeGraphAI. */
        json?: unknown;
        /** The raw model output returned by ScrapeGraphAI, when available. */
        raw?: unknown;
        /** Token usage or accounting data returned by ScrapeGraphAI. */
        usage?: {
          /** The number of prompt tokens used by the request. */
          promptTokens?: number;
          /** The number of completion tokens used by the request. */
          completionTokens?: number;
          [key: string]: unknown;
        };
        /** Metadata returned by ScrapeGraphAI. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check ScrapeGraphAI remaining credits, plan, and job quotas. */
    "scrape_graph_ai.get_credits": {
      input: Record<string, never>;
      output: {
        /** The available credits for request-based endpoints. */
        remaining?: number;
        /** The credits consumed in the current billing cycle. */
        used?: number;
        /** The active subscription plan name. */
        plan?: string;
        /** Current crawl and monitor job quotas. */
        jobs?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one ScrapeGraphAI history entry by request ID. */
    "scrape_graph_ai.get_history": {
      input: {
        /**
         * The UUID of the ScrapeGraphAI history entry to retrieve.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The ScrapeGraphAI history entry ID. */
        id?: string;
        /** The ScrapeGraphAI user ID that issued the request. */
        userId?: string;
        /** The ScrapeGraphAI service that produced the entry. */
        service?: string;
        /** The lifecycle status of the entry. */
        status?: string;
        /** The original request parameters. */
        params?: Record<string, unknown>;
        /** The full result payload for the entry. */
        result?: unknown;
        /** The error payload when the entry failed. */
        error?: unknown;
        /** The elapsed time in milliseconds. */
        elapsedMs?: number;
        /** The parent request ID when this entry was created by another job. */
        requestParentId?: unknown;
        /**
         * The ISO 8601 creation timestamp.
         * @format date-time
         */
        createdAt?: string;
        [key: string]: unknown;
      };
    };
    /** List recent ScrapeGraphAI request history entries with optional filters. */
    "scrape_graph_ai.list_history": {
      input: {
        /**
         * The 1-indexed history page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of history entries to return per page.
         * @minimum 1
         */
        limit?: number;
        /** The ScrapeGraphAI service type to filter by. */
        service?: "scrape" | "extract" | "search" | "monitor" | "crawl" | "schema";
      };
      output: {
        /** The history entries returned by ScrapeGraphAI. */
        data: Array<{
          /** The ScrapeGraphAI history entry ID. */
          id?: string;
          /** The ScrapeGraphAI user ID that issued the request. */
          userId?: string;
          /** The ScrapeGraphAI service that produced the entry. */
          service?: string;
          /** The lifecycle status of the entry. */
          status?: string;
          /** The original request parameters. */
          params?: Record<string, unknown>;
          /** The full result payload for the entry. */
          result?: unknown;
          /** The error payload when the entry failed. */
          error?: unknown;
          /** The elapsed time in milliseconds. */
          elapsedMs?: number;
          /** The parent request ID when this entry was created by another job. */
          requestParentId?: unknown;
          /**
           * The ISO 8601 creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /** The history pagination metadata. */
        pagination: {
          /** The returned page number. */
          page?: number;
          /** The returned page size. */
          limit?: number;
          /** The total number of matching entries. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a public URL with ScrapeGraphAI and return one or more content formats. */
    "scrape_graph_ai.scrape": {
      input: {
        /**
         * The public URL to fetch or extract from.
         * @format uri
         */
        url: string;
        /**
         * The output formats to return from ScrapeGraphAI.
         * @minItems 1
         */
        formats: Array<{
          /** The output format type to return. */
          type: "markdown" | "html" | "links" | "images" | "summary" | "json" | "branding" | "screenshot";
          /** The markdown or HTML processing mode for this format. */
          mode?: "normal" | "reader" | "prune";
          /**
           * The extraction prompt used when type is json.
           * @minLength 1
           */
          prompt?: string;
          /** A loose JSON object. */
          schema?: Record<string, unknown>;
          /** Whether screenshot output should capture the full page. */
          fullPage?: boolean;
          /**
           * The screenshot viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The screenshot viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height?: number;
          /** The screenshot image quality requested from ScrapeGraphAI. */
          quality?: number;
        }>;
        /** The content type override, such as text/html or application/pdf. */
        contentType?: string;
        /** Fetch-time options used when ScrapeGraphAI retrieves a page. */
        fetchConfig?: {
          /** The fetch mode used by ScrapeGraphAI. */
          mode?: "auto" | "fast" | "js";
          /** Whether ScrapeGraphAI should use residential proxy and anti-bot headers. */
          stealth?: boolean;
          /** Custom HTTP headers ScrapeGraphAI should send while fetching the target page. */
          headers?: Record<string, string>;
          /** Cookies ScrapeGraphAI should send while fetching the target page. */
          cookies?: Record<string, string>;
          /**
           * The number of scrolls for infinite-scroll pages.
           * @minimum 0
           * @maximum 100
           */
          scrolls?: number;
          /**
           * The milliseconds to wait after page load.
           * @minimum 0
           * @maximum 30000
           */
          wait?: number;
          /**
           * The page fetch timeout in milliseconds.
           * @minimum 1000
           * @maximum 60000
           */
          timeout?: number;
          /** The ISO 3166-1 alpha-2 country code for geo-targeted proxy use. */
          country?: string;
        };
      };
      output: {
        /** The ScrapeGraphAI request ID. */
        id?: string;
        /** The result object keyed by requested output format. */
        results?: Record<string, unknown>;
        /** Metadata returned by ScrapeGraphAI. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Run a web search with ScrapeGraphAI, fetch the top results, and optionally extract JSON from them. */
    "scrape_graph_ai.search": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /**
         * The number of search results to return and fetch.
         * @minimum 1
         * @maximum 20
         */
        numResults?: number;
        /**
         * The optional extraction prompt to apply across the fetched search results.
         * @minLength 1
         */
        prompt?: string;
        /** A loose JSON object. */
        schema?: Record<string, unknown>;
        /** The inline content format for each search result. */
        format?: "markdown" | "html";
        /** The recency filter for search results. */
        timeRange?: "past_hour" | "past_24_hours" | "past_week" | "past_month" | "past_year";
        /** The ISO 3166-1 alpha-2 country code used to localize search results. */
        locationGeoCode?: string;
        /** Fetch-time options used when ScrapeGraphAI retrieves a page. */
        fetchConfig?: {
          /** The fetch mode used by ScrapeGraphAI. */
          mode?: "auto" | "fast" | "js";
          /** Whether ScrapeGraphAI should use residential proxy and anti-bot headers. */
          stealth?: boolean;
          /** Custom HTTP headers ScrapeGraphAI should send while fetching the target page. */
          headers?: Record<string, string>;
          /** Cookies ScrapeGraphAI should send while fetching the target page. */
          cookies?: Record<string, string>;
          /**
           * The number of scrolls for infinite-scroll pages.
           * @minimum 0
           * @maximum 100
           */
          scrolls?: number;
          /**
           * The milliseconds to wait after page load.
           * @minimum 0
           * @maximum 30000
           */
          wait?: number;
          /**
           * The page fetch timeout in milliseconds.
           * @minimum 1000
           * @maximum 60000
           */
          timeout?: number;
          /** The ISO 3166-1 alpha-2 country code for geo-targeted proxy use. */
          country?: string;
        };
      };
      output: {
        /** The ScrapeGraphAI request ID. */
        id?: string;
        /** The ordered fetched search results. */
        results?: Array<{
          /**
           * The result URL.
           * @format uri
           */
          url?: string;
          /** The result title. */
          title?: string;
          /** The inline page content in the requested format. */
          content?: string;
          [key: string]: unknown;
        }>;
        /** The structured JSON output when an extraction prompt was supplied. */
        json?: unknown;
        /** The raw model output when an extraction prompt was supplied. */
        raw?: unknown;
        /** Token usage or accounting data returned by ScrapeGraphAI. */
        usage?: {
          /** The number of prompt tokens used by the request. */
          promptTokens?: number;
          /** The number of completion tokens used by the request. */
          completionTokens?: number;
          [key: string]: unknown;
        };
        /** Metadata returned by ScrapeGraphAI. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
