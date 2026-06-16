import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Scrapfly monitoring metrics for the connected API key. */
    "scrapfly.get_monitoring_metrics": {
      input: {
        /**
         * The metrics aggregation list accepted by Scrapfly, such as account, project, or account,project,target.
         * @minLength 1
         */
        aggregation?: string;
        /** The monitoring period to retrieve. */
        period?: "last5m" | "last1h" | "last7d" | "last24h" | "subscription";
        /**
         * The UTC start date accepted by Scrapfly when period is omitted.
         * @minLength 1
         */
        start?: string;
        /**
         * The UTC end date accepted by Scrapfly when period is omitted.
         * @minLength 1
         */
        end?: string;
        /** Whether target aggregation should group subdomains. */
        group_subdomain?: boolean;
      };
      output: {
        /** Monitoring metrics returned by Scrapfly. */
        metrics: Record<string, unknown>;
        /** Metadata collected from Scrapfly response headers. */
        metadata: {
          /** The HTTP status code returned by Scrapfly. */
          status_code: number;
          /** The API credit cost reported by Scrapfly. */
          api_cost: number | null;
          /** Remaining API credit reported by Scrapfly. */
          remaining_api_credit: number | null;
          /** The Scrapfly reject code when a scrape is rejected. */
          reject_code: string | null;
          /** The Scrapfly reject documentation URL when a scrape is rejected. */
          reject_description: string | null;
          /** Whether Scrapfly reported the rejection as retryable. */
          reject_retryable: string | null;
        };
        /** Response headers returned by Scrapfly. */
        headers: Record<string, string>;
      };
    };
    /** Scrape one public URL through Scrapfly and return the documented JSON response envelope. */
    "scrapfly.scrape": {
      input: {
        /**
         * The public URL Scrapfly should scrape.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** The HTTP method Scrapfly should use against the target URL. */
        method?: "GET" | "POST" | "PUT" | "PATCH" | "HEAD" | "OPTIONS";
        /** The raw request body Scrapfly should send to the target URL. */
        body?: string;
        /**
         * The Content-Type header for the target request body.
         * @minLength 1
         */
        content_type?: string;
        /**
         * The content format Scrapfly should return.
         * @minLength 1
         */
        format?: string;
        /**
         * The proxy country selection accepted by Scrapfly, such as us, us,ca,mx, or -gb.
         * @minLength 2
         */
        country?: string;
        /** The Scrapfly proxy pool to use for the scrape. */
        proxy_pool?: "public_datacenter_pool" | "public_residential_pool";
        /** Whether Scrapfly should render JavaScript before returning. */
        render_js?: boolean;
        /** Whether Scrapfly should enable Anti Scraping Protection. */
        asp?: boolean;
        /** Whether Scrapfly should retry the scrape request. */
        retry?: boolean;
        /**
         * The scrape timeout in milliseconds.
         * @minimum 1000
         * @maximum 150000
         */
        timeout?: number;
        /**
         * The CSS selector Scrapfly should wait for before returning content.
         * @minLength 1
         */
        wait_for_selector?: string;
        /** Whether Scrapfly should use cached scrape results when available. */
        cache?: boolean;
        /**
         * The cache time-to-live in seconds.
         * @minimum 1
         */
        cache_ttl?: number;
        /** Whether Scrapfly should clear any matching cached result. */
        cache_clear?: boolean;
        /**
         * The Scrapfly session name used to keep browsing state.
         * @minLength 1
         * @maxLength 255
         */
        session?: string;
        /** Whether Scrapfly should keep the session proxy sticky. */
        session_sticky_proxy?: boolean;
        /** Target request headers Scrapfly should send to the scraped website. */
        headers?: Record<string, string>;
        /** Tags for grouping the scrape in Scrapfly monitoring. */
        tags?: Array<string>;
        /**
         * A caller-provided correlation identifier for monitoring.
         * @minLength 1
         */
        correlation_id?: string;
        /** Whether Scrapfly should expose debug data for the scrape. */
        debug?: boolean;
      };
      output: {
        /** The result object returned by Scrapfly. */
        result: {
          /** The scraped content, a large object URL, or encoded binary content. */
          content: unknown;
          /** The HTTP status code returned by the target website. */
          status_code: number;
          /** The Scrapfly result content format. */
          format: string;
          [key: string]: unknown;
        };
        /** The scrape configuration returned by Scrapfly. */
        config: Record<string, unknown>;
        /** Additional context returned by Scrapfly. */
        context: Record<string, unknown>;
        /** Metadata collected from Scrapfly response headers. */
        metadata: {
          /** The HTTP status code returned by Scrapfly. */
          status_code: number;
          /** The API credit cost reported by Scrapfly. */
          api_cost: number | null;
          /** Remaining API credit reported by Scrapfly. */
          remaining_api_credit: number | null;
          /** The Scrapfly reject code when a scrape is rejected. */
          reject_code: string | null;
          /** The Scrapfly reject documentation URL when a scrape is rejected. */
          reject_description: string | null;
          /** Whether Scrapfly reported the rejection as retryable. */
          reject_retryable: string | null;
        };
        /** Response headers returned by Scrapfly. */
        headers: Record<string, string>;
      };
    };
  }
}
