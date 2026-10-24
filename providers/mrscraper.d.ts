import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch raw webpage HTML with optional browser rendering and geo-targeting. */
    "mrscraper.fetch_html": {
      input: {
        /**
         * The full URL to scrape, including the protocol.
         * @format uri
         */
        url: string;
        /** Use additional resources to bypass anti-bot protection. */
        super?: boolean;
        /** Render the page using Chromium. */
        browserRendering?: boolean;
        /** When browser navigation is considered complete. */
        waitUntil?: "domcontentloaded" | "load" | "networkidle0" | "networkidle2";
        /**
         * Maximum page loading time in seconds; the upstream default is 300.
         * @minimum 1
         */
        timeout?: number;
        /** Geographic code for the proxy location. */
        geoCode?: string;
        /** Country code of the proxy server. */
        proxyCountry?: string;
        /** Block images, fonts, and stylesheets. */
        blockResources?: boolean;
        /** Wait for this CSS selector before extracting content. */
        waitForSelector?: string;
        /** Include browser session cookies in the response. */
        returnCookie?: boolean;
      };
      output: {
        /** The raw HTML returned by MrScraper. */
        html: string;
      };
    };
    /** Extract structured data from a single page using a natural language prompt. */
    "mrscraper.scrape_json": {
      input: {
        /**
         * The full URL to scrape, including the protocol.
         * @format uri
         */
        url: string;
        /** Use additional resources to bypass anti-bot protection. */
        super?: boolean;
        /** Render the page using Chromium. */
        browserRendering?: boolean;
        /** When browser navigation is considered complete. */
        waitUntil?: "domcontentloaded" | "load" | "networkidle0" | "networkidle2";
        /**
         * Maximum page loading time in seconds; the upstream default is 300.
         * @minimum 1
         */
        timeout?: number;
        /** Geographic code for the proxy location. */
        geoCode?: string;
        /** Country code of the proxy server. */
        proxyCountry?: string;
        /**
         * Token budget for the scrape and retries; omit for no limit. An individual attempt may exceed the cap.
         * @minimum 1
         */
        tokenCap?: number;
        /**
         * Maximum number of retries for the request.
         * @minimum 0
         */
        maxRetries?: number;
        /** Save the result to the Result tab; the upstream default is true. */
        saveResult?: boolean;
        /** Describe the data to extract. This only parses content; it cannot instruct browser navigation. Append a Json Schema: section to specify a JSON schema. */
        prompt?: string;
        /** Include the raw HTML in the response. */
        html?: boolean;
      };
      output: {
        /** Extracted data in the upstream-defined shape. */
        data?: unknown;
        /** Scraped HTML when included by the upstream API. */
        html?: string;
        /** Converted Markdown when included by the upstream API. */
        markdown?: string;
        /** Execution runtime in seconds. */
        runtime?: number;
        /** Tokens consumed by the request. */
        token_usage?: number;
        /** Upstream result storage path; not necessarily a public URL. */
        data_path?: string | null;
        /** Upstream HTML storage path; not necessarily a public URL. */
        html_path?: string | null;
        [key: string]: unknown;
      };
    };
    /** Extract items across paginated listings, infinite scroll, or Load More batches. */
    "mrscraper.scrape_listing": {
      input: {
        /**
         * The full URL to scrape, including the protocol.
         * @format uri
         */
        url: string;
        /** Additional resources are required for listing extraction. */
        super?: true;
        /** Render the page using Chromium. */
        browserRendering?: boolean;
        /** When browser navigation is considered complete. */
        waitUntil?: "domcontentloaded" | "load" | "networkidle0" | "networkidle2";
        /**
         * Maximum page loading time in seconds; the upstream default is 300.
         * @minimum 1
         */
        timeout?: number;
        /** Geographic code for the proxy location. */
        geoCode?: string;
        /** Country code of the proxy server. */
        proxyCountry?: string;
        /**
         * Token budget for the scrape and retries; omit for no limit. An individual attempt may exceed the cap.
         * @minimum 1
         */
        tokenCap?: number;
        /**
         * Maximum number of retries for the request.
         * @minimum 0
         */
        maxRetries?: number;
        /** Save the result to the Result tab; the upstream default is true. */
        saveResult?: boolean;
        /** Describe the data to extract. This only parses content; it cannot instruct browser navigation. Append a Json Schema: section to specify a JSON schema. */
        prompt?: string;
        /**
         * Maximum pages to process; a batch from infinite scroll or Load More counts as one page. The upstream default is 3.
         * @minimum 1
         */
        maxPages?: number;
      };
      output: {
        /** Extracted data in the upstream-defined shape. */
        data?: unknown;
        /** Scraped HTML when included by the upstream API. */
        html?: string;
        /** Converted Markdown when included by the upstream API. */
        markdown?: string;
        /** Execution runtime in seconds. */
        runtime?: number;
        /** Tokens consumed by the request. */
        token_usage?: number;
        /** Upstream result storage path; not necessarily a public URL. */
        data_path?: string | null;
        /** Upstream HTML storage path; not necessarily a public URL. */
        html_path?: string | null;
        [key: string]: unknown;
      };
    };
    /** Convert a webpage to Markdown and optionally save the result in MrScraper. */
    "mrscraper.scrape_markdown": {
      input: {
        /**
         * The full URL to scrape, including the protocol.
         * @format uri
         */
        url: string;
        /** Use additional resources to bypass anti-bot protection. */
        super?: boolean;
        /** Render the page using Chromium. */
        browserRendering?: boolean;
        /** When browser navigation is considered complete. */
        waitUntil?: "domcontentloaded" | "load" | "networkidle0" | "networkidle2";
        /**
         * Maximum page loading time in seconds; the upstream default is 300.
         * @minimum 1
         */
        timeout?: number;
        /** Geographic code for the proxy location. */
        geoCode?: string;
        /** Country code of the proxy server. */
        proxyCountry?: string;
        /** Block images, fonts, and stylesheets. */
        blockResources?: boolean;
        /** Wait for this CSS selector before extracting content. */
        waitForSelector?: string;
        /** Include browser session cookies in the response. */
        returnCookie?: boolean;
        /**
         * Token budget for the scrape and retries; omit for no limit. An individual attempt may exceed the cap.
         * @minimum 1
         */
        tokenCap?: number;
        /**
         * Maximum number of retries for the request.
         * @minimum 0
         */
        maxRetries?: number;
        /** Save the result to the Result tab; the upstream default is true. */
        saveResult?: boolean;
        /** Scraper action flag used to separate analytics per domain. */
        action?: string;
        /** Custom proxy URL, optionally including username and password. */
        proxy?: string;
      };
      output: {
        /** Extracted data in the upstream-defined shape. */
        data?: unknown;
        /** Scraped HTML when included by the upstream API. */
        html?: string;
        /** Converted Markdown when included by the upstream API. */
        markdown?: string;
        /** Execution runtime in seconds. */
        runtime?: number;
        /** Tokens consumed by the request. */
        token_usage?: number;
        /** Upstream result storage path; not necessarily a public URL. */
        data_path?: string | null;
        /** Upstream HTML storage path; not necessarily a public URL. */
        html_path?: string | null;
        [key: string]: unknown;
      };
    };
    /** Discover website URLs with crawl depth, page limits, and URL pattern filters. */
    "mrscraper.scrape_sitemap": {
      input: {
        /**
         * The full URL to scrape, including the protocol.
         * @format uri
         */
        url: string;
        /** Use additional resources to bypass anti-bot protection. */
        super?: boolean;
        /** Render the page using Chromium. */
        browserRendering?: boolean;
        /** When browser navigation is considered complete. */
        waitUntil?: "domcontentloaded" | "load" | "networkidle0" | "networkidle2";
        /**
         * Maximum page loading time in seconds; the upstream default is 300.
         * @minimum 1
         */
        timeout?: number;
        /** Geographic code for the proxy location. */
        geoCode?: string;
        /** Country code of the proxy server. */
        proxyCountry?: string;
        /**
         * Token budget for the scrape and retries; omit for no limit. An individual attempt may exceed the cap.
         * @minimum 1
         */
        tokenCap?: number;
        /**
         * Maximum number of retries for the request.
         * @minimum 0
         */
        maxRetries?: number;
        /** Save the result to the Result tab; the upstream default is true. */
        saveResult?: boolean;
        /**
         * Maximum pages to process; a batch from infinite scroll or Load More counts as one page. The upstream default is 3.
         * @minimum 1
         */
        maxPages?: number;
        /**
         * Maximum crawl depth; the upstream default is 2.
         * @minimum 1
         */
        maxDepth?: number;
        /**
         * Maximum URLs to collect; the upstream default is 1000.
         * @minimum 1
         */
        limit?: number;
        /** Only crawl URLs matching these patterns. */
        includePatterns?: Array<string>;
        /** Skip URLs matching these patterns. */
        excludePatterns?: Array<string>;
      };
      output: {
        /** Extracted data in the upstream-defined shape. */
        data?: unknown;
        /** Scraped HTML when included by the upstream API. */
        html?: string;
        /** Converted Markdown when included by the upstream API. */
        markdown?: string;
        /** Execution runtime in seconds. */
        runtime?: number;
        /** Tokens consumed by the request. */
        token_usage?: number;
        /** Upstream result storage path; not necessarily a public URL. */
        data_path?: string | null;
        /** Upstream HTML storage path; not necessarily a public URL. */
        html_path?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
