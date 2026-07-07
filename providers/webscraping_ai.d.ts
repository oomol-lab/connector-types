import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract visible text from one target page with WebScraping.AI. */
    "webscraping_ai.extract_text": {
      input: {
        /**
         * The target page URL WebScraping.AI should retrieve.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** HTTP headers WebScraping.AI should send to the target page. */
        headers?: Record<string, string>;
        /**
         * Maximum target page retrieval time in milliseconds.
         * @minimum 1
         * @maximum 30000
         */
        timeout?: number;
        /** Whether WebScraping.AI should execute on-page JavaScript. */
        js?: boolean;
        /**
         * Maximum JavaScript rendering time in milliseconds.
         * @minimum 1
         * @maximum 20000
         */
        jsTimeout?: number;
        /**
         * A CSS selector WebScraping.AI should wait for before returning.
         * @minLength 1
         */
        waitFor?: string;
        /** The WebScraping.AI proxy pool to use for the target page. */
        proxy?: "datacenter" | "residential" | "stealth";
        /** The proxy country code to use for the target page. */
        country?: "us" | "gb" | "de" | "it" | "fr" | "ca" | "es" | "ru" | "jp" | "kr" | "in" | "hk" | "tr";
        /** The browser device profile WebScraping.AI should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /** Whether target page HTTP 404 responses should be returned as errors. */
        errorOn404?: boolean;
        /** Whether target page redirects should be returned as errors. */
        errorOnRedirect?: boolean;
        /**
         * Custom JavaScript code to execute on the target page.
         * @minLength 1
         */
        jsScript?: string;
        /** The WebScraping.AI text response format. */
        textFormat?: "plain" | "xml" | "json";
        /** Whether WebScraping.AI should include links when textFormat is json. */
        returnLinks?: boolean;
      };
      output: {
        /** The response body returned by WebScraping.AI. */
        content: string;
        /** The HTTP status code returned by WebScraping.AI. */
        statusCode: number;
        /** The response Content-Type header when returned. */
        contentType: string | null;
      };
    };
    /** Fetch the rendered HTML content of one target page with WebScraping.AI. */
    "webscraping_ai.fetch_html": {
      input: {
        /**
         * The target page URL WebScraping.AI should retrieve.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** HTTP headers WebScraping.AI should send to the target page. */
        headers?: Record<string, string>;
        /**
         * Maximum target page retrieval time in milliseconds.
         * @minimum 1
         * @maximum 30000
         */
        timeout?: number;
        /** Whether WebScraping.AI should execute on-page JavaScript. */
        js?: boolean;
        /**
         * Maximum JavaScript rendering time in milliseconds.
         * @minimum 1
         * @maximum 20000
         */
        jsTimeout?: number;
        /**
         * A CSS selector WebScraping.AI should wait for before returning.
         * @minLength 1
         */
        waitFor?: string;
        /** The WebScraping.AI proxy pool to use for the target page. */
        proxy?: "datacenter" | "residential" | "stealth";
        /** The proxy country code to use for the target page. */
        country?: "us" | "gb" | "de" | "it" | "fr" | "ca" | "es" | "ru" | "jp" | "kr" | "in" | "hk" | "tr";
        /** The browser device profile WebScraping.AI should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /** Whether target page HTTP 404 responses should be returned as errors. */
        errorOn404?: boolean;
        /** Whether target page redirects should be returned as errors. */
        errorOnRedirect?: boolean;
        /**
         * Custom JavaScript code to execute on the target page.
         * @minLength 1
         */
        jsScript?: string;
        /** Whether to return the custom JavaScript result instead of the page HTML. */
        returnScriptResult?: boolean;
      };
      output: {
        /** The response body returned by WebScraping.AI. */
        content: string;
        /** The HTTP status code returned by WebScraping.AI. */
        statusCode: number;
        /** The response Content-Type header when returned. */
        contentType: string | null;
      };
    };
    /** Retrieve WebScraping.AI account email, quota, reset, and concurrency details. */
    "webscraping_ai.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The WebScraping.AI account limits payload. */
        account: {
          /** The account email returned by WebScraping.AI. */
          email?: string;
          /** Remaining API call credits in the current billing period. */
          remaining_api_calls?: number;
          /** Next billing cycle start time as a UNIX timestamp. */
          resets_at?: number;
          /** Remaining concurrent requests for the account. */
          remaining_concurrency?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch HTML for one selected target page area with WebScraping.AI. */
    "webscraping_ai.select_html": {
      input: {
        /**
         * The target page URL WebScraping.AI should retrieve.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** HTTP headers WebScraping.AI should send to the target page. */
        headers?: Record<string, string>;
        /**
         * Maximum target page retrieval time in milliseconds.
         * @minimum 1
         * @maximum 30000
         */
        timeout?: number;
        /** Whether WebScraping.AI should execute on-page JavaScript. */
        js?: boolean;
        /**
         * Maximum JavaScript rendering time in milliseconds.
         * @minimum 1
         * @maximum 20000
         */
        jsTimeout?: number;
        /**
         * A CSS selector WebScraping.AI should wait for before returning.
         * @minLength 1
         */
        waitFor?: string;
        /** The WebScraping.AI proxy pool to use for the target page. */
        proxy?: "datacenter" | "residential" | "stealth";
        /** The proxy country code to use for the target page. */
        country?: "us" | "gb" | "de" | "it" | "fr" | "ca" | "es" | "ru" | "jp" | "kr" | "in" | "hk" | "tr";
        /** The browser device profile WebScraping.AI should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /** Whether target page HTTP 404 responses should be returned as errors. */
        errorOn404?: boolean;
        /** Whether target page redirects should be returned as errors. */
        errorOnRedirect?: boolean;
        /**
         * Custom JavaScript code to execute on the target page.
         * @minLength 1
         */
        jsScript?: string;
        /**
         * The CSS selector for the page area to return.
         * @minLength 1
         */
        selector: string;
      };
      output: {
        /** The response body returned by WebScraping.AI. */
        content: string;
        /** The HTTP status code returned by WebScraping.AI. */
        statusCode: number;
        /** The response Content-Type header when returned. */
        contentType: string | null;
      };
    };
    /** Fetch HTML for multiple selected target page areas with WebScraping.AI. */
    "webscraping_ai.select_multiple_html": {
      input: {
        /**
         * The target page URL WebScraping.AI should retrieve.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** HTTP headers WebScraping.AI should send to the target page. */
        headers?: Record<string, string>;
        /**
         * Maximum target page retrieval time in milliseconds.
         * @minimum 1
         * @maximum 30000
         */
        timeout?: number;
        /** Whether WebScraping.AI should execute on-page JavaScript. */
        js?: boolean;
        /**
         * Maximum JavaScript rendering time in milliseconds.
         * @minimum 1
         * @maximum 20000
         */
        jsTimeout?: number;
        /**
         * A CSS selector WebScraping.AI should wait for before returning.
         * @minLength 1
         */
        waitFor?: string;
        /** The WebScraping.AI proxy pool to use for the target page. */
        proxy?: "datacenter" | "residential" | "stealth";
        /** The proxy country code to use for the target page. */
        country?: "us" | "gb" | "de" | "it" | "fr" | "ca" | "es" | "ru" | "jp" | "kr" | "in" | "hk" | "tr";
        /** The browser device profile WebScraping.AI should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /** Whether target page HTTP 404 responses should be returned as errors. */
        errorOn404?: boolean;
        /** Whether target page redirects should be returned as errors. */
        errorOnRedirect?: boolean;
        /**
         * Custom JavaScript code to execute on the target page.
         * @minLength 1
         */
        jsScript?: string;
        /**
         * CSS selectors for the page areas to return.
         * @minItems 1
         */
        selectors: Array<string>;
      };
      output: {
        /** HTML snippets returned for each requested selector. */
        areas: Array<string>;
        /** The HTTP status code returned by WebScraping.AI. */
        statusCode: number;
        /** The response Content-Type header when returned. */
        contentType: string | null;
      };
    };
  }
}
