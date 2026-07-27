import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Scrape one public web page through HasData's synchronous Web Scraping API and return the official JSON payload. */
    "hasdata.scrape_web": {
      input: {
        /**
         * The absolute public URL HasData should scrape.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /**
         * Response formats HasData should include in the result.
         * @minItems 1
         */
        outputFormat?: Array<"html" | "text" | "markdown" | "json">;
        /** The proxy type HasData should use for the target page. */
        proxyType?: "datacenter" | "residential";
        /**
         * The ISO 3166-1 alpha-2 country code used for HasData proxy geolocation.
         * @minLength 1
         */
        proxyCountry?: string;
        /** String values keyed by caller-defined field names. */
        extractRules?: Record<string, string>;
        /** Structured AI extraction rules accepted by HasData. */
        aiExtractRules?: Record<string, unknown>;
        /** Whether HasData should capture a page screenshot. */
        screenshot?: boolean;
        /** Whether HasData should extract email addresses from the page. */
        extractEmails?: boolean;
        /** Whether HasData should extract hyperlinks from the page. */
        extractLinks?: boolean;
        /**
         * Delay in milliseconds after page load before HasData scrapes the page.
         * @minimum 0
         * @maximum 30000
         */
        wait?: number;
        /**
         * CSS selector HasData should wait for before scraping.
         * @minLength 1
         */
        waitFor?: string;
        /** Whether HasData should block images and stylesheets while loading the page. */
        blockResources?: boolean;
        /** Whether HasData should block common ad scripts and tracking pixels. */
        blockAds?: boolean;
        /**
         * Network request substrings or domains HasData should block.
         * @minItems 1
         */
        blockUrls?: Array<string>;
        /** Whether HasData should enable JavaScript rendering for the page. */
        jsRendering?: boolean;
        /**
         * JavaScript browser actions HasData should run on the page.
         * @minItems 1
         */
        jsScenario?: Array<Record<string, unknown>>;
        /** HTTP headers HasData should send to the target website. */
        headers?: Record<string, string>;
      };
      output: {
        /** Raw JSON object returned by HasData. */
        payload: Record<string, unknown>;
      };
    };
    /** Run one synchronous Google SERP search through HasData and return the official JSON payload. */
    "hasdata.search_google_serp": {
      input: {
        /**
         * Search term to query Google for.
         * @minLength 1
         */
        q: string;
        /**
         * Google canonical location for the search.
         * @minLength 1
         */
        location?: string;
        /**
         * Encoded Google canonical location string.
         * @minLength 1
         */
        uule?: string;
        /**
         * Google domain to use for the search, such as google.com.
         * @minLength 1
         */
        domain?: string;
        /**
         * Two-letter country code used to localize results.
         * @minLength 1
         */
        gl?: string;
        /**
         * Two-letter language code used for the search interface.
         * @minLength 1
         */
        hl?: string;
        /**
         * Language restriction for the web content returned by Google.
         * @minLength 1
         */
        lr?: string;
        /**
         * Google advanced filter expression such as qdr:d or sbd:1.
         * @minLength 1
         */
        tbs?: string;
        /** Adult content filtering mode sent to Google. */
        safe?: "active" | "off";
        /**
         * Whether Google should enable similar and omitted result filtering.
         * @minimum 0
         * @maximum 1
         */
        filter?: number;
        /**
         * Whether Google should show only the original query.
         * @minimum 0
         * @maximum 1
         */
        nfpr?: number;
        /**
         * Number of search results to skip for pagination.
         * @minimum 0
         */
        start?: number;
        /**
         * Number of results per page.
         * @minimum 10
         * @maximum 100
         */
        num?: number;
        /** Google search type. */
        tbm?: "isch" | "vid" | "nws" | "shop" | "lcl";
        /** Device type HasData should emulate for Google results. */
        deviceType?: "desktop" | "mobile" | "tablet";
        /**
         * Google Place ID for a specific location result.
         * @minLength 1
         */
        ludocid?: string;
        /**
         * Additional Google Place ID parameter.
         * @minLength 1
         */
        lsig?: string;
        /**
         * Google Knowledge Graph ID.
         * @minLength 1
         */
        kgmid?: string;
        /**
         * Google cached search parameters ID.
         * @minLength 1
         */
        si?: string;
      };
      output: {
        /** Raw JSON object returned by HasData. */
        payload: Record<string, unknown>;
      };
    };
  }
}
