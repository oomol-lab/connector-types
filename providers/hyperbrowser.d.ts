import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch a web page with Hyperbrowser and return the requested data formats. */
    "hyperbrowser.fetch_page": {
      input: {
        /**
         * The URL Hyperbrowser should load.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** The stealth mode Hyperbrowser should use. */
        stealth?: "none" | "auto" | "ultra";
        /** Output options sent to Hyperbrowser. */
        outputs?: {
          /**
           * The output formats Hyperbrowser should return.
           * @minItems 1
           */
          formats?: Array<"markdown" | "html" | "links" | "screenshot" | "branding">;
          /** The content sanitization mode. */
          sanitize?: "none" | "basic" | "advanced";
          /**
           * CSS selectors Hyperbrowser should include in extracted content.
           * @minItems 1
           */
          includeSelectors?: Array<string>;
          /**
           * CSS selectors Hyperbrowser should exclude from extracted content.
           * @minItems 1
           */
          excludeSelectors?: Array<string>;
        };
      };
      output: {
        /**
         * The Hyperbrowser fetch job ID.
         * @minLength 1
         * @pattern \S
         */
        jobId: string;
        /** The Hyperbrowser fetch status. */
        status: "pending" | "running" | "completed" | "failed";
        /** The error message returned by Hyperbrowser. */
        error?: string | null;
        /** Hyperbrowser response data. */
        data?: Record<string, unknown>;
      };
    };
    /** Get paginated results for a Hyperbrowser crawl job. */
    "hyperbrowser.get_web_crawl_results": {
      input: {
        /**
         * The Hyperbrowser crawl job ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The zero-based result page to read.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of crawl pages to return in one batch.
         * @minimum 1
         */
        batchSize?: number;
      };
      output: {
        /**
         * The Hyperbrowser crawl job ID.
         * @minLength 1
         * @pattern \S
         */
        jobId: string;
        /** The Hyperbrowser job status. */
        status: "pending" | "running" | "completed" | "failed" | "stopped";
        /** The error message returned by Hyperbrowser. */
        error?: string | null;
        /**
         * The total number of crawled pages.
         * @minimum 0
         */
        totalPages?: number;
        /**
         * The total number of result batches.
         * @minimum 0
         */
        totalPageBatches?: number;
        /**
         * The current result batch number.
         * @minimum 0
         */
        currentPageBatch?: number;
        /**
         * The result batch size.
         * @minimum 1
         */
        batchSize?: number;
        /** The crawl page data returned by Hyperbrowser. */
        data?: Array<Record<string, unknown>>;
      };
    };
    /** Get the current status of a Hyperbrowser crawl job. */
    "hyperbrowser.get_web_crawl_status": {
      input: {
        /**
         * The Hyperbrowser crawl job ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The Hyperbrowser job status. */
        status: "pending" | "running" | "completed" | "failed" | "stopped";
      };
    };
    /** Search the web with Hyperbrowser and return structured search results. */
    "hyperbrowser.search_web": {
      input: {
        /**
         * The search query.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        query: string;
        /**
         * The search results page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum age of cached search results in seconds.
         * @minimum 0
         */
        maxAgeSeconds?: number;
        /** Location bias for Hyperbrowser search. */
        location?: {
          /**
           * The country used for search localization.
           * @minLength 1
           * @pattern \S
           */
          country: string;
          /**
           * The state or region used for search localization.
           * @minLength 1
           * @pattern \S
           */
          state?: string;
          /**
           * The city used for search localization.
           * @minLength 1
           * @pattern \S
           */
          city?: string;
        };
        /** Search filters sent to Hyperbrowser. */
        filters?: {
          /** Whether Hyperbrowser should match the exact phrase. */
          exactPhrase?: boolean;
          /** Whether Hyperbrowser should use semantic phrase matching. */
          semanticPhrase?: boolean;
          /**
           * Terms Hyperbrowser should exclude from the search.
           * @minItems 1
           */
          excludeTerms?: Array<string>;
          /**
           * Terms Hyperbrowser should boost in the search.
           * @minItems 1
           */
          boostTerms?: Array<string>;
          /** The file type filter for search results. */
          filetype?: "pdf" | "doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "html";
          /**
           * The site Hyperbrowser should restrict results to.
           * @minLength 1
           * @pattern \S
           */
          site?: string;
          /**
           * The site Hyperbrowser should exclude from results.
           * @minLength 1
           * @pattern \S
           */
          excludeSite?: string;
          /**
           * Text that must appear in result titles.
           * @minLength 1
           * @pattern \S
           */
          intitle?: string;
          /**
           * Text that must appear in result URLs.
           * @minLength 1
           * @pattern \S
           */
          inurl?: string;
        };
      };
      output: {
        /**
         * The Hyperbrowser search job ID.
         * @minLength 1
         * @pattern \S
         */
        jobId: string;
        /** The Hyperbrowser job status. */
        status: "pending" | "running" | "completed" | "failed" | "stopped";
        /** The error message returned by Hyperbrowser. */
        error?: string | null;
        /** Hyperbrowser response data. */
        data?: Record<string, unknown>;
      };
    };
    /** Start an asynchronous Hyperbrowser crawl job from a URL. */
    "hyperbrowser.start_web_crawl": {
      input: {
        /**
         * The URL Hyperbrowser should load.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** The stealth mode Hyperbrowser should use. */
        stealth?: "none" | "auto" | "ultra";
        /** Output options sent to Hyperbrowser. */
        outputs?: {
          /**
           * The output formats Hyperbrowser should return.
           * @minItems 1
           */
          formats?: Array<"markdown" | "html" | "links" | "screenshot" | "branding">;
          /** The content sanitization mode. */
          sanitize?: "none" | "basic" | "advanced";
          /**
           * CSS selectors Hyperbrowser should include in extracted content.
           * @minItems 1
           */
          includeSelectors?: Array<string>;
          /**
           * CSS selectors Hyperbrowser should exclude from extracted content.
           * @minItems 1
           */
          excludeSelectors?: Array<string>;
        };
        /** Crawl options sent to Hyperbrowser. */
        crawlOptions?: {
          /**
           * The maximum number of pages Hyperbrowser should crawl.
           * @minimum 1
           * @maximum 100
           */
          maxPages?: number;
          /** Whether Hyperbrowser should follow links from crawled pages. */
          followLinks?: boolean;
          /** Whether Hyperbrowser should ignore the site's sitemap. */
          ignoreSitemap?: boolean;
          /**
           * URL patterns Hyperbrowser should exclude while crawling.
           * @minItems 1
           */
          excludePatterns?: Array<string>;
          /**
           * URL patterns Hyperbrowser should include while crawling.
           * @minItems 1
           */
          includePatterns?: Array<string>;
        };
      };
      output: {
        /**
         * The Hyperbrowser crawl job ID.
         * @minLength 1
         * @pattern \S
         */
        jobId: string;
      };
    };
  }
}
