import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a running Firecrawl agent job by job ID. */
    "firecrawl.agent_cancel": {
      input: {
        /** The Firecrawl agent job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the cancellation request succeeded. */
        success?: boolean;
        /** The final status returned by Firecrawl. */
        status?: string;
        /** The cancellation message returned by Firecrawl. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Start a Firecrawl batch scrape job for multiple URLs and return the async job ID. */
    "firecrawl.batch_scrape": {
      input: {
        /** The URLs to scrape in batch. */
        urls: Array<string>;
        /** The browser actions to run before each scrape. */
        actions?: Array<{
          /** The browser action type, such as click, write, wait, or press. */
          type: string;
          /** The CSS selector targeted by the action. */
          selector?: string;
          /** The text to type for write actions. */
          text?: string;
          /** The key to press for press actions. */
          key?: string;
          /** The duration in milliseconds used by wait-style actions. */
          milliseconds?: number;
          [key: string]: unknown;
        }>;
        /** The output formats to return. */
        formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
          /** The structured format type, such as json or screenshot. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Custom HTTP headers to send with the request. */
        headers?: Record<string, string>;
        /** Location settings for the request. */
        location?: {
          /** The ISO 3166-1 alpha-2 country code to request from. */
          country?: string;
          /** The preferred locales for the request. */
          languages?: Array<string>;
          [key: string]: unknown;
        };
        /** Webhook callback settings for async jobs. */
        webhook?: {
          /** The webhook destination URL. */
          url: string;
          /** The webhook events that should trigger notifications. */
          events?: Array<string>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Free-form webhook metadata. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The request timeout in milliseconds. */
        timeout?: number;
        /** The delay before scraping starts. */
        waitFor?: number;
        /** The cache max age in milliseconds. */
        maxAge?: number;
        /** The maximum concurrency for the batch job. */
        maxConcurrency?: number;
        /** Whether to keep only the main content of each page. */
        onlyMainContent?: boolean;
        /** The HTML tags that should be prioritized in the extracted content. */
        includeTags?: Array<string>;
        /** The HTML tags that should be removed from the extracted content. */
        excludeTags?: Array<string>;
        /** Whether to emulate a mobile device. */
        mobile?: boolean;
        /** The proxy mode to use for the request. */
        proxy?: "basic" | "stealth" | "auto";
        /** Whether invalid URLs should be ignored instead of failing the job. */
        ignoreInvalidURLs?: boolean;
        /** Whether ad resources should be blocked. */
        blockAds?: boolean;
        /** Whether Firecrawl should store the result in cache. */
        storeInCache?: boolean;
        /** Whether base64-encoded images should be removed from the output. */
        removeBase64Images?: boolean;
        /** Whether TLS verification should be skipped. */
        skipTlsVerification?: boolean;
        /** Whether the request should opt into zero data retention. */
        zeroDataRetention?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the job was accepted successfully. */
        success: boolean;
        /** The Firecrawl job ID. */
        id: string;
        /** The status URL returned by Firecrawl. */
        url?: string;
        /** The invalid URLs rejected before the job started. */
        invalidURLs?: Array<string>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a running Firecrawl batch scrape job by job ID. */
    "firecrawl.batch_scrape_cancel": {
      input: {
        /** The Firecrawl batch scrape job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the cancellation request succeeded. */
        success?: boolean;
        /** The final status returned by Firecrawl. */
        status?: string;
        /** The cancellation message returned by Firecrawl. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current status and paged results of a Firecrawl batch scrape job by job ID. */
    "firecrawl.batch_scrape_get": {
      input: {
        /** The Firecrawl batch scrape job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success?: boolean;
        /** The current job status. */
        status: string;
        /** The total number of queued or discovered items. */
        total?: number;
        /** The number of completed items in the job. */
        completed?: number;
        /** The credits used by the job. */
        creditsUsed?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The pagination URL for the next segment of data. */
        next?: string | null;
        /** The result items returned by Firecrawl. */
        data?: Array<Record<string, unknown>>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        /** An error message returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Get the failed URLs and robots.txt blocks from a Firecrawl batch scrape job. */
    "firecrawl.batch_scrape_get_errors": {
      input: {
        /** The Firecrawl batch scrape job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The failed items for the job. */
        errors: Array<{
          /** The job item ID. */
          id?: string;
          /** The URL that failed. */
          url: string;
          /** The Firecrawl error code. */
          code?: string;
          /** The error message. */
          error: string;
          /** The ISO 8601 failure timestamp. */
          timestamp?: string;
          [key: string]: unknown;
        }>;
        /** The URLs blocked by robots.txt. */
        robotsBlocked?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Start a Firecrawl crawl job with compatibility fields accepted from legacy crawl inputs. */
    "firecrawl.crawl": {
      input: {
        /** The seed URL for the crawl. */
        url: string;
        /** The path patterns that the crawl should include. */
        includePaths?: Array<string>;
        /** The path patterns that the crawl should exclude. */
        excludePaths?: Array<string>;
        /** The maximum traversal depth. */
        maxDepth?: number;
        /** The maximum depth for link discovery. */
        maxDiscoveryDepth?: number;
        /** The maximum number of pages to crawl. */
        limit?: number;
        /** The delay between crawl requests in milliseconds. */
        delay?: number;
        /** Whether backward links should be followed for compatibility. */
        allowBackwardLinks?: boolean;
        /** Whether external links should be followed. */
        allowExternalLinks?: boolean;
        /** Whether the entire domain should be crawled. */
        crawlEntireDomain?: boolean;
        /** Whether the sitemap should be ignored. */
        ignoreSitemap?: boolean;
        /** Whether query parameters should be ignored when deduplicating pages. */
        ignoreQueryParameters?: boolean;
        /** Webhook callback settings for async jobs. */
        webhook?: {
          /** The webhook destination URL. */
          url: string;
          /** The webhook events that should trigger notifications. */
          events?: Array<string>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Free-form webhook metadata. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Shared Firecrawl scrape options. */
        scrapeOptions?: {
          /** The browser actions to perform before extraction. */
          actions?: Array<{
            /** The browser action type, such as click, write, wait, or press. */
            type: string;
            /** The CSS selector targeted by the action. */
            selector?: string;
            /** The text to type for write actions. */
            text?: string;
            /** The key to press for press actions. */
            key?: string;
            /** The duration in milliseconds used by wait-style actions. */
            milliseconds?: number;
            [key: string]: unknown;
          }>;
          /** The formats to return from Firecrawl. */
          formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
            /** The structured format type, such as json or screenshot. */
            type: string;
            [key: string]: unknown;
          }>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Location settings for the request. */
          location?: {
            /** The ISO 3166-1 alpha-2 country code to request from. */
            country?: string;
            /** The preferred locales for the request. */
            languages?: Array<string>;
            [key: string]: unknown;
          };
          /** Options for structured JSON output. */
          jsonOptions?: {
            /** An extraction prompt that explains the desired JSON structure. */
            prompt?: string;
            /** A JSON Schema object for structured output. */
            schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The request timeout in milliseconds. */
          timeout?: number;
          /** The delay in milliseconds before extraction starts. */
          waitFor?: number;
          /** The cache max age in milliseconds. */
          maxAge?: number;
          /** Whether to keep only the main content of the page. */
          onlyMainContent?: boolean;
          /** Whether to emulate a mobile device. */
          mobile?: boolean;
          /** The HTML tags that should be prioritized in the extracted content. */
          includeTags?: Array<string>;
          /** The HTML tags that should be removed from the extracted content. */
          excludeTags?: Array<string>;
          /** The parser plugins to enable for the request. */
          parsers?: Array<string>;
          /** Whether PDF parsing should be enabled. */
          parsePDF?: boolean;
          /** The proxy mode to use for the request. */
          proxy?: "basic" | "stealth" | "auto";
          /** Whether Firecrawl should store the result in cache. */
          storeInCache?: boolean;
          /** Whether base64-encoded images should be removed from the output. */
          removeBase64Images?: boolean;
          /** Whether ad resources should be blocked. */
          blockAds?: boolean;
          /** Whether TLS certificate verification should be skipped. */
          skipTlsVerification?: boolean;
          /** Whether the request should opt into zero data retention. */
          zeroDataRetention?: boolean;
          /** Change-tracking options accepted by Firecrawl. */
          changeTrackingOptions?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Compatibility browser actions for nested scrape options. */
        scrapeOptions_actions?: Array<{
          /** The browser action type, such as click, write, wait, or press. */
          type: string;
          /** The CSS selector targeted by the action. */
          selector?: string;
          /** The text to type for write actions. */
          text?: string;
          /** The key to press for press actions. */
          key?: string;
          /** The duration in milliseconds used by wait-style actions. */
          milliseconds?: number;
          [key: string]: unknown;
        }>;
        /** Compatibility formats for nested scrape options. */
        scrapeOptions_formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
          /** The structured format type, such as json or screenshot. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Custom HTTP headers to send with the request. */
        scrapeOptions_headers?: Record<string, string>;
        /** Location settings for the request. */
        scrapeOptions_location?: {
          /** The ISO 3166-1 alpha-2 country code to request from. */
          country?: string;
          /** The preferred locales for the request. */
          languages?: Array<string>;
          [key: string]: unknown;
        };
        /** Options for structured JSON output. */
        scrapeOptions_jsonOptions?: {
          /** An extraction prompt that explains the desired JSON structure. */
          prompt?: string;
          /** A JSON Schema object for structured output. */
          schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Compatibility timeout for nested scrape options. */
        scrapeOptions_timeout?: number;
        /** Compatibility delay for nested scrape options. */
        scrapeOptions_waitFor?: number;
        /** Compatibility cache max age for nested scrape options. */
        scrapeOptions_maxAge?: number;
        /** Compatibility main-content flag for nested scrape options. */
        scrapeOptions_onlyMainContent?: boolean;
        /** Compatibility mobile emulation flag for nested scrape options. */
        scrapeOptions_mobile?: boolean;
        /** Compatibility includeTags for nested scrape options. */
        scrapeOptions_includeTags?: Array<string>;
        /** Compatibility excludeTags for nested scrape options. */
        scrapeOptions_excludeTags?: Array<string>;
        /** Compatibility proxy mode for nested scrape options. */
        scrapeOptions_proxy?: "basic" | "stealth" | "auto";
        /** Compatibility parser plugins for nested scrape options. */
        scrapeOptions_parsers?: Array<string>;
        /** Compatibility PDF parsing flag for nested scrape options. */
        scrapeOptions_parsePDF?: boolean;
        /** Compatibility ad-blocking flag for nested scrape options. */
        scrapeOptions_blockAds?: boolean;
        /** Compatibility cache storage flag for nested scrape options. */
        scrapeOptions_storeInCache?: boolean;
        /** Compatibility base64 image removal flag for nested scrape options. */
        scrapeOptions_removeBase64Images?: boolean;
        /** Compatibility TLS verification flag for nested scrape options. */
        scrapeOptions_skipTlsVerification?: boolean;
        /** Change-tracking options accepted by Firecrawl. */
        scrapeOptions_changeTrackingOptions?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Whether the job was accepted successfully. */
        success: boolean;
        /** The Firecrawl job ID. */
        id: string;
        /** The status URL returned by Firecrawl. */
        url?: string;
        /** The invalid URLs rejected before the job started. */
        invalidURLs?: Array<string>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a running Firecrawl crawl job by job ID. */
    "firecrawl.crawl_cancel": {
      input: {
        /** The Firecrawl crawl job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the cancellation request succeeded. */
        success?: boolean;
        /** The final status returned by Firecrawl. */
        status?: string;
        /** The cancellation message returned by Firecrawl. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Compatibility alias of crawl_cancel for the FIRECRAWL_CRAWL_DELETE action name. */
    "firecrawl.crawl_delete": {
      input: {
        /** The Firecrawl crawl job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the cancellation request succeeded. */
        success?: boolean;
        /** The final status returned by Firecrawl. */
        status?: string;
        /** The cancellation message returned by Firecrawl. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current status and paged results of a Firecrawl crawl job by job ID. */
    "firecrawl.crawl_get": {
      input: {
        /** The Firecrawl crawl job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success?: boolean;
        /** The current job status. */
        status: string;
        /** The total number of queued or discovered items. */
        total?: number;
        /** The number of completed items in the job. */
        completed?: number;
        /** The credits used by the job. */
        creditsUsed?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The pagination URL for the next segment of data. */
        next?: string | null;
        /** The result items returned by Firecrawl. */
        data?: Array<Record<string, unknown>>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        /** An error message returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Get the failed URLs and robots.txt blocks from a Firecrawl crawl job. */
    "firecrawl.crawl_get_errors": {
      input: {
        /** The Firecrawl crawl job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The failed items for the job. */
        errors: Array<{
          /** The job item ID. */
          id?: string;
          /** The URL that failed. */
          url: string;
          /** The Firecrawl error code. */
          code?: string;
          /** The error message. */
          error: string;
          /** The ISO 8601 failure timestamp. */
          timestamp?: string;
          [key: string]: unknown;
        }>;
        /** The URLs blocked by robots.txt. */
        robotsBlocked?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List the currently active Firecrawl crawl jobs for the authenticated team. */
    "firecrawl.crawl_list_active": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The active crawl jobs returned by Firecrawl. */
        crawls: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Preview the crawl parameters that Firecrawl would infer from a URL and prompt before starting the crawl. */
    "firecrawl.crawl_params_preview": {
      input: {
        /** The seed URL for the crawl preview. */
        url: string;
        /** The natural-language prompt used for preview generation. */
        prompt: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the preview request succeeded. */
        success: boolean;
        /** The preview payload returned by Firecrawl. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Start a Firecrawl crawl job with the official v2 crawl fields, including prompt-driven options generation. */
    "firecrawl.crawl_v2": {
      input: {
        /** The seed URL for the crawl. */
        url: string;
        /** A natural-language prompt that guides crawl option generation. */
        prompt?: string;
        /** The path patterns that the crawl should include. */
        includePaths?: Array<string>;
        /** The path patterns that the crawl should exclude. */
        excludePaths?: Array<string>;
        /** The maximum depth for link discovery. */
        maxDiscoveryDepth?: number;
        /** The maximum number of pages to crawl. */
        limit?: number;
        /** The delay between crawl requests in milliseconds. */
        delay?: number;
        /** The maximum concurrency for the crawl job. */
        maxConcurrency?: number;
        /** Whether external links should be followed. */
        allowExternalLinks?: boolean;
        /** Whether subdomains should be followed. */
        allowSubdomains?: boolean;
        /** Whether the entire domain should be crawled. */
        crawlEntireDomain?: boolean;
        /** Whether query parameters should be ignored when deduplicating pages. */
        ignoreQueryParameters?: boolean;
        /** Whether sitemap discovery should be enabled. */
        sitemap?: boolean;
        /** Webhook callback settings for async jobs. */
        webhook?: {
          /** The webhook destination URL. */
          url: string;
          /** The webhook events that should trigger notifications. */
          events?: Array<string>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Free-form webhook metadata. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether the request should opt into zero data retention. */
        zeroDataRetention?: boolean;
        /** Shared Firecrawl scrape options. */
        scrapeOptions?: {
          /** The browser actions to perform before extraction. */
          actions?: Array<{
            /** The browser action type, such as click, write, wait, or press. */
            type: string;
            /** The CSS selector targeted by the action. */
            selector?: string;
            /** The text to type for write actions. */
            text?: string;
            /** The key to press for press actions. */
            key?: string;
            /** The duration in milliseconds used by wait-style actions. */
            milliseconds?: number;
            [key: string]: unknown;
          }>;
          /** The formats to return from Firecrawl. */
          formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
            /** The structured format type, such as json or screenshot. */
            type: string;
            [key: string]: unknown;
          }>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Location settings for the request. */
          location?: {
            /** The ISO 3166-1 alpha-2 country code to request from. */
            country?: string;
            /** The preferred locales for the request. */
            languages?: Array<string>;
            [key: string]: unknown;
          };
          /** Options for structured JSON output. */
          jsonOptions?: {
            /** An extraction prompt that explains the desired JSON structure. */
            prompt?: string;
            /** A JSON Schema object for structured output. */
            schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The request timeout in milliseconds. */
          timeout?: number;
          /** The delay in milliseconds before extraction starts. */
          waitFor?: number;
          /** The cache max age in milliseconds. */
          maxAge?: number;
          /** Whether to keep only the main content of the page. */
          onlyMainContent?: boolean;
          /** Whether to emulate a mobile device. */
          mobile?: boolean;
          /** The HTML tags that should be prioritized in the extracted content. */
          includeTags?: Array<string>;
          /** The HTML tags that should be removed from the extracted content. */
          excludeTags?: Array<string>;
          /** The parser plugins to enable for the request. */
          parsers?: Array<string>;
          /** Whether PDF parsing should be enabled. */
          parsePDF?: boolean;
          /** The proxy mode to use for the request. */
          proxy?: "basic" | "stealth" | "auto";
          /** Whether Firecrawl should store the result in cache. */
          storeInCache?: boolean;
          /** Whether base64-encoded images should be removed from the output. */
          removeBase64Images?: boolean;
          /** Whether ad resources should be blocked. */
          blockAds?: boolean;
          /** Whether TLS certificate verification should be skipped. */
          skipTlsVerification?: boolean;
          /** Whether the request should opt into zero data retention. */
          zeroDataRetention?: boolean;
          /** Change-tracking options accepted by Firecrawl. */
          changeTrackingOptions?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Compatibility browser actions for nested scrape options. */
        scrapeOptions_actions?: Array<{
          /** The browser action type, such as click, write, wait, or press. */
          type: string;
          /** The CSS selector targeted by the action. */
          selector?: string;
          /** The text to type for write actions. */
          text?: string;
          /** The key to press for press actions. */
          key?: string;
          /** The duration in milliseconds used by wait-style actions. */
          milliseconds?: number;
          [key: string]: unknown;
        }>;
        /** Compatibility formats for nested scrape options. */
        scrapeOptions_formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
          /** The structured format type, such as json or screenshot. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Custom HTTP headers to send with the request. */
        scrapeOptions_headers?: Record<string, string>;
        /** Location settings for the request. */
        scrapeOptions_location?: {
          /** The ISO 3166-1 alpha-2 country code to request from. */
          country?: string;
          /** The preferred locales for the request. */
          languages?: Array<string>;
          [key: string]: unknown;
        };
        /** Options for structured JSON output. */
        scrapeOptions_jsonOptions?: {
          /** An extraction prompt that explains the desired JSON structure. */
          prompt?: string;
          /** A JSON Schema object for structured output. */
          schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Compatibility timeout for nested scrape options. */
        scrapeOptions_timeout?: number;
        /** Compatibility delay for nested scrape options. */
        scrapeOptions_waitFor?: number;
        /** Compatibility cache max age for nested scrape options. */
        scrapeOptions_maxAge?: number;
        /** Compatibility main-content flag for nested scrape options. */
        scrapeOptions_onlyMainContent?: boolean;
        /** Compatibility mobile emulation flag for nested scrape options. */
        scrapeOptions_mobile?: boolean;
        /** Compatibility includeTags for nested scrape options. */
        scrapeOptions_includeTags?: Array<string>;
        /** Compatibility excludeTags for nested scrape options. */
        scrapeOptions_excludeTags?: Array<string>;
        /** Compatibility proxy mode for nested scrape options. */
        scrapeOptions_proxy?: "basic" | "stealth" | "auto";
        /** Compatibility parser plugins for nested scrape options. */
        scrapeOptions_parsers?: Array<string>;
        /** Compatibility PDF parsing flag for nested scrape options. */
        scrapeOptions_parsePDF?: boolean;
        /** Compatibility ad-blocking flag for nested scrape options. */
        scrapeOptions_blockAds?: boolean;
        /** Compatibility cache storage flag for nested scrape options. */
        scrapeOptions_storeInCache?: boolean;
        /** Compatibility base64 image removal flag for nested scrape options. */
        scrapeOptions_removeBase64Images?: boolean;
        /** Compatibility TLS verification flag for nested scrape options. */
        scrapeOptions_skipTlsVerification?: boolean;
        /** Change-tracking options accepted by Firecrawl. */
        scrapeOptions_changeTrackingOptions?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Whether the job was accepted successfully. */
        success: boolean;
        /** The Firecrawl job ID. */
        id: string;
        /** The status URL returned by Firecrawl. */
        url?: string;
        /** The invalid URLs rejected before the job started. */
        invalidURLs?: Array<string>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Firecrawl team's current credit usage summary. */
    "firecrawl.credit_usage_get": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The usage payload returned by Firecrawl. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Firecrawl team's historical credit usage summary. */
    "firecrawl.credit_usage_get_historical": {
      input: {
        /** Whether usage should be grouped by API key. */
        byApiKey?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The historical usage periods returned by Firecrawl. */
        periods: Array<{
          /** The billing period start timestamp. */
          startDate: string;
          /** The billing period end timestamp. */
          endDate: string;
          /** The credits used in the period. */
          creditsUsed?: number;
          /** The tokens used in the period. */
          tokensUsed?: number;
          /** The API key identifier for the period. */
          apiKey?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Start a Firecrawl deep research job. This endpoint remains alpha and Firecrawl currently documents it outside the main v2 endpoint set. */
    "firecrawl.deep_research": {
      input: {
        /** The research question or topic. */
        query: string;
        /** The output formats requested from deep research. */
        formats?: Array<string>;
        /** Options for structured JSON output. */
        jsonOptions?: {
          /** An extraction prompt that explains the desired JSON structure. */
          prompt?: string;
          /** A JSON Schema object for structured output. */
          schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The maximum URLs the research job may analyze. */
        maxUrls?: number;
        /** The maximum research depth for the job. */
        maxDepth?: number;
        /** The research time limit in seconds. */
        timeLimit?: number;
        /** A system prompt that guides the research agent. */
        systemPrompt?: string;
        /** A synthesis prompt that guides the final analysis. */
        analysisPrompt?: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the job was accepted successfully. */
        success: boolean;
        /** The Firecrawl deep research job ID. */
        id: string;
        /** The current deep research status. */
        status?: string;
        /** The current research depth. */
        currentDepth?: number;
        /** The configured maximum research depth. */
        maxDepth?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The initial research result payload. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Start a Firecrawl extract job that returns structured data for one or more URLs. */
    "firecrawl.extract": {
      input: {
        /** The URLs to extract structured data from. */
        urls: Array<string>;
        /** The extraction prompt. */
        prompt?: string;
        /** The JSON Schema for structured extraction. */
        schema?: Record<string, unknown>;
        /** Shared Firecrawl scrape options. */
        scrapeOptions?: {
          /** The browser actions to perform before extraction. */
          actions?: Array<{
            /** The browser action type, such as click, write, wait, or press. */
            type: string;
            /** The CSS selector targeted by the action. */
            selector?: string;
            /** The text to type for write actions. */
            text?: string;
            /** The key to press for press actions. */
            key?: string;
            /** The duration in milliseconds used by wait-style actions. */
            milliseconds?: number;
            [key: string]: unknown;
          }>;
          /** The formats to return from Firecrawl. */
          formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
            /** The structured format type, such as json or screenshot. */
            type: string;
            [key: string]: unknown;
          }>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Location settings for the request. */
          location?: {
            /** The ISO 3166-1 alpha-2 country code to request from. */
            country?: string;
            /** The preferred locales for the request. */
            languages?: Array<string>;
            [key: string]: unknown;
          };
          /** Options for structured JSON output. */
          jsonOptions?: {
            /** An extraction prompt that explains the desired JSON structure. */
            prompt?: string;
            /** A JSON Schema object for structured output. */
            schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The request timeout in milliseconds. */
          timeout?: number;
          /** The delay in milliseconds before extraction starts. */
          waitFor?: number;
          /** The cache max age in milliseconds. */
          maxAge?: number;
          /** Whether to keep only the main content of the page. */
          onlyMainContent?: boolean;
          /** Whether to emulate a mobile device. */
          mobile?: boolean;
          /** The HTML tags that should be prioritized in the extracted content. */
          includeTags?: Array<string>;
          /** The HTML tags that should be removed from the extracted content. */
          excludeTags?: Array<string>;
          /** The parser plugins to enable for the request. */
          parsers?: Array<string>;
          /** Whether PDF parsing should be enabled. */
          parsePDF?: boolean;
          /** The proxy mode to use for the request. */
          proxy?: "basic" | "stealth" | "auto";
          /** Whether Firecrawl should store the result in cache. */
          storeInCache?: boolean;
          /** Whether base64-encoded images should be removed from the output. */
          removeBase64Images?: boolean;
          /** Whether ad resources should be blocked. */
          blockAds?: boolean;
          /** Whether TLS certificate verification should be skipped. */
          skipTlsVerification?: boolean;
          /** Whether the request should opt into zero data retention. */
          zeroDataRetention?: boolean;
          /** Change-tracking options accepted by Firecrawl. */
          changeTrackingOptions?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether web search should be enabled for the extraction. */
        enableWebSearch?: boolean;
        /** Whether sitemap discovery should be ignored. */
        ignoreSitemap?: boolean;
        /** Whether subdomains should be considered for the extraction. */
        includeSubdomains?: boolean;
        /** Whether invalid URLs should be ignored instead of failing the request. */
        ignoreInvalidURLs?: boolean;
        /** Whether cited sources should be returned. */
        showSources?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The Firecrawl job ID. */
        id?: string;
        /** The current extract job status. */
        status?: string;
        /** The extracted structured data payload. */
        data?: Record<string, unknown>;
        /** The sources used by the extraction request. */
        sources?: Array<{
          /** The source URL. */
          url: string;
          /** The source title. */
          title?: string;
          /** The source description. */
          description?: string;
          /** The source icon URL. */
          icon?: string;
          [key: string]: unknown;
        }>;
        /** The trace of URLs visited by the extraction request. */
        urlTrace?: Array<Record<string, unknown>>;
        /** The invalid URLs rejected before extraction started. */
        invalidURLs?: Array<string>;
        /** The credits used by the extract job. */
        creditsUsed?: number;
        /** The LLM tokens used by the extract job. */
        tokensUsed?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** A warning returned by Firecrawl. */
        warning?: string;
        /** An error returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current status and output of a Firecrawl extract job by job ID. */
    "firecrawl.extract_get": {
      input: {
        /** The Firecrawl extract job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The Firecrawl job ID. */
        id?: string;
        /** The current extract job status. */
        status?: string;
        /** The extracted structured data payload. */
        data?: Record<string, unknown>;
        /** The sources used by the extraction request. */
        sources?: Array<{
          /** The source URL. */
          url: string;
          /** The source title. */
          title?: string;
          /** The source description. */
          description?: string;
          /** The source icon URL. */
          icon?: string;
          [key: string]: unknown;
        }>;
        /** The trace of URLs visited by the extraction request. */
        urlTrace?: Array<Record<string, unknown>>;
        /** The invalid URLs rejected before extraction started. */
        invalidURLs?: Array<string>;
        /** The credits used by the extract job. */
        creditsUsed?: number;
        /** The LLM tokens used by the extract job. */
        tokensUsed?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** A warning returned by Firecrawl. */
        warning?: string;
        /** An error returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current status and output of a Firecrawl agent job by job ID. */
    "firecrawl.get_agent_status": {
      input: {
        /** The Firecrawl agent job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The current agent job status. */
        status: string;
        /** The agent output payload. */
        data?: Record<string, unknown>;
        /** The credits used by the agent job. */
        creditsUsed?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The model used by the agent job. */
        model?: string;
        /** An error returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current status and output of a Firecrawl deep research job by job ID. */
    "firecrawl.get_deep_research_status": {
      input: {
        /** The Firecrawl deep research job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The Firecrawl job ID. */
        id?: string;
        /** The current deep research status. */
        status?: string;
        /** The current research depth. */
        currentDepth?: number;
        /** The configured maximum research depth. */
        maxDepth?: number;
        /** The total URLs processed by the job. */
        totalUrls?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The research result payload. */
        data?: Record<string, unknown>;
        /** The sources gathered during deep research. */
        sources?: Array<{
          /** The source URL. */
          url: string;
          /** The source title. */
          title?: string;
          /** The source description. */
          description?: string;
          /** The source icon URL. */
          icon?: string;
          [key: string]: unknown;
        }>;
        /** The deep research activity timeline. */
        activities?: Array<{
          /** The activity type. */
          type?: string;
          /** The research depth for the activity. */
          depth?: number;
          /** The activity status. */
          status?: string;
          /** The activity summary message. */
          message?: string;
          /** The ISO 8601 timestamp of the activity. */
          timestamp?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Compatibility alias of crawl_get for the FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB action name. */
    "firecrawl.get_the_status_of_a_crawl_job": {
      input: {
        /** The Firecrawl crawl job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success?: boolean;
        /** The current job status. */
        status: string;
        /** The total number of queued or discovered items. */
        total?: number;
        /** The number of completed items in the job. */
        completed?: number;
        /** The credits used by the job. */
        creditsUsed?: number;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The pagination URL for the next segment of data. */
        next?: string | null;
        /** The result items returned by Firecrawl. */
        data?: Array<Record<string, unknown>>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        /** An error message returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Start an LLMs.txt generation job for a website. This endpoint remains outside the main v2 endpoint set in Firecrawl's docs. */
    "firecrawl.llms_txt_generate": {
      input: {
        /** The root URL to turn into LLMs.txt. */
        url: string;
        /** The maximum URLs to analyze. */
        maxUrls?: number;
        /** Whether the llms-full.txt content should also be generated. */
        showFullText?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the job was accepted successfully. */
        success: boolean;
        /** The Firecrawl LLMs.txt job ID. */
        id: string;
        [key: string]: unknown;
      };
    };
    /** Get the current status and generated content of an LLMs.txt job by job ID. */
    "firecrawl.llms_txt_get": {
      input: {
        /** The Firecrawl LLMs.txt job ID. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The current LLMs.txt generation status. */
        status?: string;
        /** The ISO 8601 expiry timestamp for the job data. */
        expiresAt?: string;
        /** The generated LLMs.txt payload. */
        data?: {
          /** The generated llms.txt content. */
          llmstxt?: string;
          /** The generated llms-full.txt content. */
          llmsfulltxt?: string;
          [key: string]: unknown;
        };
        /** An error returned by Firecrawl. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Discover URLs from a website with Firecrawl's map endpoint using a legacy action name. */
    "firecrawl.map_multiple_urls_based_on_options": {
      input: {
        /** The root URL to map. */
        url: string;
        /** The maximum number of links to return. */
        limit?: number;
        /** A search term used to filter discovered links. */
        search?: string;
        /** The request timeout in milliseconds. */
        timeout?: number;
        /** Whether Firecrawl cache should be bypassed. */
        ignoreCache?: boolean;
        /** Whether query parameters should be ignored when deduplicating links. */
        ignoreQueryParameters?: boolean;
        /** Whether subdomains should be included. */
        includeSubdomains?: boolean;
        /** Whether sitemap discovery should be enabled. */
        sitemap?: boolean;
        /** Location settings for the request. */
        location?: {
          /** The ISO 3166-1 alpha-2 country code to request from. */
          country?: string;
          /** The preferred locales for the request. */
          languages?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Whether the map request succeeded. */
        success: boolean;
        /** The URLs discovered by the map request. */
        links: Array<string>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Firecrawl team's queue status and concurrency information. */
    "firecrawl.queue_get": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The number of active jobs in the queue. */
        activeJobsInQueue?: number;
        /** The number of waiting jobs in the queue. */
        waitingJobsInQueue?: number;
        /** The total jobs in the queue. */
        jobsInQueue?: number;
        /** The queue concurrency limit. */
        maxConcurrency?: number;
        /** The most recent successful queue record. */
        mostRecentSuccess?: unknown;
        [key: string]: unknown;
      };
    };
    /** Scrape a single URL with Firecrawl and return the extracted page content in the requested formats. */
    "firecrawl.scrape": {
      input: {
        /** The URL to scrape. */
        url: string;
        /** The browser actions to run before scraping. */
        actions?: Array<{
          /** The browser action type, such as click, write, wait, or press. */
          type: string;
          /** The CSS selector targeted by the action. */
          selector?: string;
          /** The text to type for write actions. */
          text?: string;
          /** The key to press for press actions. */
          key?: string;
          /** The duration in milliseconds used by wait-style actions. */
          milliseconds?: number;
          [key: string]: unknown;
        }>;
        /** The output formats to return. */
        formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
          /** The structured format type, such as json or screenshot. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Custom HTTP headers to send with the request. */
        headers?: Record<string, string>;
        /** Location settings for the request. */
        location?: {
          /** The ISO 3166-1 alpha-2 country code to request from. */
          country?: string;
          /** The preferred locales for the request. */
          languages?: Array<string>;
          [key: string]: unknown;
        };
        /** Options for structured JSON output. */
        jsonOptions?: {
          /** An extraction prompt that explains the desired JSON structure. */
          prompt?: string;
          /** A JSON Schema object for structured output. */
          schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The request timeout in milliseconds. */
        timeout?: number;
        /** The delay before scraping starts. */
        waitFor?: number;
        /** The cache max age in milliseconds. */
        maxAge?: number;
        /** Whether to keep only the main content of the page. */
        onlyMainContent?: boolean;
        /** The HTML tags that should be prioritized in the extracted content. */
        includeTags?: Array<string>;
        /** The HTML tags that should be removed from the extracted content. */
        excludeTags?: Array<string>;
        /** Whether to emulate a mobile device. */
        mobile?: boolean;
        /** The proxy mode to use for the request. */
        proxy?: "basic" | "stealth" | "auto";
        /** The parser plugins to enable for the request. */
        parsers?: Array<string>;
        /** Whether ad resources should be blocked. */
        blockAds?: boolean;
        /** Whether Firecrawl should store the result in cache. */
        storeInCache?: boolean;
        /** Whether base64-encoded images should be removed from the output. */
        removeBase64Images?: boolean;
        /** Whether TLS verification should be skipped. */
        skipTlsVerification?: boolean;
        /** Whether the request should opt into zero data retention. */
        zeroDataRetention?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the scrape request succeeded. */
        success: boolean;
        /** The extracted page payload. */
        data?: Record<string, unknown>;
        /** A warning returned by Firecrawl. */
        warning?: string;
        /** An error message returned by Firecrawl. */
        error?: string;
        /** The Firecrawl response code. */
        code?: string | number;
        [key: string]: unknown;
      };
    };
    /** Search the web with Firecrawl and optionally scrape the top results in the requested formats. */
    "firecrawl.search": {
      input: {
        /** The search query text. */
        query: string;
        /** The maximum number of search results to return. */
        limit?: number;
        /** The country code used to localize search results. */
        country?: string;
        /** The language code used to localize search results. */
        lang?: string;
        /** The request timeout in milliseconds. */
        timeout?: number;
        /** The scrape formats to apply to each search result. */
        formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
          /** The structured format type, such as json or screenshot. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Shared Firecrawl scrape options. */
        scrapeOptions?: {
          /** The browser actions to perform before extraction. */
          actions?: Array<{
            /** The browser action type, such as click, write, wait, or press. */
            type: string;
            /** The CSS selector targeted by the action. */
            selector?: string;
            /** The text to type for write actions. */
            text?: string;
            /** The key to press for press actions. */
            key?: string;
            /** The duration in milliseconds used by wait-style actions. */
            milliseconds?: number;
            [key: string]: unknown;
          }>;
          /** The formats to return from Firecrawl. */
          formats?: Array<"markdown" | "html" | "rawHtml" | "links" | "screenshot" | "screenshot@fullPage" | "json" | "changeTracking" | "summary" | {
            /** The structured format type, such as json or screenshot. */
            type: string;
            [key: string]: unknown;
          }>;
          /** Custom HTTP headers to send with the request. */
          headers?: Record<string, string>;
          /** Location settings for the request. */
          location?: {
            /** The ISO 3166-1 alpha-2 country code to request from. */
            country?: string;
            /** The preferred locales for the request. */
            languages?: Array<string>;
            [key: string]: unknown;
          };
          /** Options for structured JSON output. */
          jsonOptions?: {
            /** An extraction prompt that explains the desired JSON structure. */
            prompt?: string;
            /** A JSON Schema object for structured output. */
            schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The request timeout in milliseconds. */
          timeout?: number;
          /** The delay in milliseconds before extraction starts. */
          waitFor?: number;
          /** The cache max age in milliseconds. */
          maxAge?: number;
          /** Whether to keep only the main content of the page. */
          onlyMainContent?: boolean;
          /** Whether to emulate a mobile device. */
          mobile?: boolean;
          /** The HTML tags that should be prioritized in the extracted content. */
          includeTags?: Array<string>;
          /** The HTML tags that should be removed from the extracted content. */
          excludeTags?: Array<string>;
          /** The parser plugins to enable for the request. */
          parsers?: Array<string>;
          /** Whether PDF parsing should be enabled. */
          parsePDF?: boolean;
          /** The proxy mode to use for the request. */
          proxy?: "basic" | "stealth" | "auto";
          /** Whether Firecrawl should store the result in cache. */
          storeInCache?: boolean;
          /** Whether base64-encoded images should be removed from the output. */
          removeBase64Images?: boolean;
          /** Whether ad resources should be blocked. */
          blockAds?: boolean;
          /** Whether TLS certificate verification should be skipped. */
          skipTlsVerification?: boolean;
          /** Whether the request should opt into zero data retention. */
          zeroDataRetention?: boolean;
          /** Change-tracking options accepted by Firecrawl. */
          changeTrackingOptions?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Whether the search request succeeded. */
        success: boolean;
        /** The Firecrawl search job ID. */
        id?: string;
        /** The search results payload returned by Firecrawl. */
        data: Record<string, unknown>;
        /** The credits used by the search request. */
        creditsUsed?: number;
        /** A warning returned by Firecrawl. */
        warning?: string;
        [key: string]: unknown;
      };
    };
    /** Start a Firecrawl agent job for multi-page autonomous browsing and extraction. */
    "firecrawl.start_agent": {
      input: {
        /** The natural-language task for the agent. */
        prompt: string;
        /** The URLs that constrain where the agent can start. */
        urls?: Array<string>;
        /** The JSON Schema for the agent response. */
        schema?: Record<string, unknown>;
        /** The maximum credits the agent may spend. */
        maxCredits?: number;
        /** Whether the agent must stay strictly within the provided URLs. */
        strictConstrainToURLs?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the job was accepted successfully. */
        success: boolean;
        /** The Firecrawl agent job ID. */
        id: string;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Firecrawl team's current token usage summary. */
    "firecrawl.token_usage_get": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The usage payload returned by Firecrawl. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Firecrawl team's historical token usage summary. */
    "firecrawl.token_usage_get_historical": {
      input: {
        /** Whether usage should be grouped by API key. */
        byApiKey?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** The historical usage periods returned by Firecrawl. */
        periods: Array<{
          /** The billing period start timestamp. */
          startDate: string;
          /** The billing period end timestamp. */
          endDate: string;
          /** The credits used in the period. */
          creditsUsed?: number;
          /** The tokens used in the period. */
          tokensUsed?: number;
          /** The API key identifier for the period. */
          apiKey?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
