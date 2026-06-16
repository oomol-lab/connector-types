import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one public URL through Scrape.do and return the synchronous response body. */
    "scrape_do.fetch_html": {
      input: {
        /**
         * The public target URL Scrape.do should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether Scrape.do should use residential and mobile proxy networks. */
        super?: boolean;
        /**
         * The two-letter country code used for Scrape.do geo-targeting.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        geoCode?: string;
        /**
         * The continent code used for Scrape.do regional geo-targeting.
         * @minLength 2
         */
        regionalGeoCode?: string;
        /**
         * The sticky Scrape.do session identifier.
         * @minimum 1
         */
        sessionId?: number;
        /** Whether Scrape.do should render the page with a headless browser. */
        render?: boolean;
        /** The browser device profile Scrape.do should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /**
         * The browser viewport width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The browser viewport height in pixels.
         * @minimum 1
         */
        height?: number;
        /** Whether Scrape.do should block CSS, image, and font resources while rendering. */
        blockResources?: boolean;
        /**
         * The maximum Scrape.do request timeout in milliseconds.
         * @minimum 5000
         * @maximum 120000
         */
        timeout?: number;
        /**
         * The maximum Scrape.do retry timeout in milliseconds.
         * @minimum 5000
         * @maximum 55000
         */
        retryTimeout?: number;
        /** Whether Scrape.do should disable its retry mechanism. */
        disableRetry?: boolean;
        /** Whether Scrape.do should disable target request redirection. */
        disableRedirection?: boolean;
        /**
         * The Cookie header value Scrape.do should send to the target website.
         * @minLength 1
         */
        setCookies?: string;
        /** Whether Scrape.do should handle all request headers. */
        customHeaders?: boolean;
        /** Whether Scrape.do should forward caller headers to the target. */
        forwardHeaders?: boolean;
        /** The Scrape.do output format for page content. */
        output?: "raw" | "markdown";
      };
      output: {
        /** The response body returned by Scrape.do. */
        content: string;
        /** The HTTP status code returned by Scrape.do. */
        statusCode: number;
        /** The HTTP response headers returned by Scrape.do or the target website. */
        headers: Record<string, string>;
        /** Metadata collected from Scrape.do response headers. */
        metadata: {
          /** The HTTP status code returned by Scrape.do. */
          statusCode: number;
          /** The Scrape.do credit cost reported for this request. */
          requestCost: number | null;
          /** The remaining Scrape.do credits reported after this request. */
          remainingCredits: number | null;
          /** The response Content-Type header when returned. */
          contentType: string | null;
          /** The final response URL observed by the connector. */
          finalUrl: string | null;
        };
      };
    };
    /** Fetch one public URL through Scrape.do returnJSON mode and return the parsed JSON payload. */
    "scrape_do.fetch_json": {
      input: {
        /**
         * The public target URL Scrape.do should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether Scrape.do should use residential and mobile proxy networks. */
        super?: boolean;
        /**
         * The two-letter country code used for Scrape.do geo-targeting.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        geoCode?: string;
        /**
         * The continent code used for Scrape.do regional geo-targeting.
         * @minLength 2
         */
        regionalGeoCode?: string;
        /**
         * The sticky Scrape.do session identifier.
         * @minimum 1
         */
        sessionId?: number;
        /** Whether Scrape.do should render the page with a headless browser. */
        render?: boolean;
        /** The browser device profile Scrape.do should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /**
         * The browser viewport width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The browser viewport height in pixels.
         * @minimum 1
         */
        height?: number;
        /** Whether Scrape.do should block CSS, image, and font resources while rendering. */
        blockResources?: boolean;
        /**
         * The maximum Scrape.do request timeout in milliseconds.
         * @minimum 5000
         * @maximum 120000
         */
        timeout?: number;
        /**
         * The maximum Scrape.do retry timeout in milliseconds.
         * @minimum 5000
         * @maximum 55000
         */
        retryTimeout?: number;
        /** Whether Scrape.do should disable its retry mechanism. */
        disableRetry?: boolean;
        /** Whether Scrape.do should disable target request redirection. */
        disableRedirection?: boolean;
        /**
         * The Cookie header value Scrape.do should send to the target website.
         * @minLength 1
         */
        setCookies?: string;
        /** Whether Scrape.do should handle all request headers. */
        customHeaders?: boolean;
        /** Whether Scrape.do should forward caller headers to the target. */
        forwardHeaders?: boolean;
        /** The Scrape.do output format for page content. */
        output?: "raw" | "markdown";
        /** Whether Scrape.do should include iframe content when render and returnJSON are enabled. */
        showFrames?: boolean;
        /** Whether Scrape.do should include WebSocket requests when render and returnJSON are enabled. */
        showWebsocketRequests?: boolean;
      };
      output: {
        /** The parsed JSON payload returned by Scrape.do. */
        data: unknown;
        /** The HTTP status code returned by Scrape.do. */
        statusCode: number;
        /** The HTTP response headers returned by Scrape.do or the target website. */
        headers: Record<string, string>;
        /** Metadata collected from Scrape.do response headers. */
        metadata: {
          /** The HTTP status code returned by Scrape.do. */
          statusCode: number;
          /** The Scrape.do credit cost reported for this request. */
          requestCost: number | null;
          /** The remaining Scrape.do credits reported after this request. */
          remainingCredits: number | null;
          /** The response Content-Type header when returned. */
          contentType: string | null;
          /** The final response URL observed by the connector. */
          finalUrl: string | null;
        };
      };
    };
    /** Retrieve Scrape.do account information and usage counters for the API token. */
    "scrape_do.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The account information and usage payload returned by Scrape.do. */
        account: {
          /** Whether the Scrape.do subscription is active. */
          is_active: boolean;
          /** The maximum concurrent request count for the account. */
          concurrent_request: number;
          /** The maximum monthly request count for the account. */
          max_monthly_request: number;
          /** The remaining concurrent request count for the account. */
          remaining_concurrent_request: number;
          /** The remaining monthly request count for the account. */
          remaining_monthly_request: number;
          [key: string]: unknown;
        };
      };
    };
    /** Render one public URL through Scrape.do and return a screenshot as base64. */
    "scrape_do.take_screenshot": {
      input: {
        /**
         * The public target URL Scrape.do should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether Scrape.do should use residential and mobile proxy networks. */
        super?: boolean;
        /**
         * The two-letter country code used for Scrape.do geo-targeting.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        geoCode?: string;
        /**
         * The continent code used for Scrape.do regional geo-targeting.
         * @minLength 2
         */
        regionalGeoCode?: string;
        /**
         * The sticky Scrape.do session identifier.
         * @minimum 1
         */
        sessionId?: number;
        /** Whether Scrape.do should render the page with a headless browser. */
        render?: boolean;
        /** The browser device profile Scrape.do should emulate. */
        device?: "desktop" | "mobile" | "tablet";
        /**
         * The browser viewport width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The browser viewport height in pixels.
         * @minimum 1
         */
        height?: number;
        /** Whether Scrape.do should block CSS, image, and font resources while rendering. */
        blockResources?: boolean;
        /**
         * The maximum Scrape.do request timeout in milliseconds.
         * @minimum 5000
         * @maximum 120000
         */
        timeout?: number;
        /**
         * The maximum Scrape.do retry timeout in milliseconds.
         * @minimum 5000
         * @maximum 55000
         */
        retryTimeout?: number;
        /** Whether Scrape.do should disable its retry mechanism. */
        disableRetry?: boolean;
        /** Whether Scrape.do should disable target request redirection. */
        disableRedirection?: boolean;
        /**
         * The Cookie header value Scrape.do should send to the target website.
         * @minLength 1
         */
        setCookies?: string;
        /** Whether Scrape.do should handle all request headers. */
        customHeaders?: boolean;
        /** Whether Scrape.do should forward caller headers to the target. */
        forwardHeaders?: boolean;
        /** The Scrape.do output format for page content. */
        output?: "raw" | "markdown";
        /** Whether Scrape.do should capture a full-page screenshot. */
        fullPage?: boolean;
        /**
         * A CSS selector for a partial screenshot area.
         * @minLength 1
         */
        selector?: string;
      };
      output: {
        /** The screenshot image encoded as a base64 string. */
        imageBase64: string;
        /** The screenshot response content type. */
        contentType: string;
        /** The HTTP status code returned by Scrape.do. */
        statusCode: number;
        /** The HTTP response headers returned by Scrape.do or the target website. */
        headers: Record<string, string>;
        /** Metadata collected from Scrape.do response headers. */
        metadata: {
          /** The HTTP status code returned by Scrape.do. */
          statusCode: number;
          /** The Scrape.do credit cost reported for this request. */
          requestCost: number | null;
          /** The remaining Scrape.do credits reported after this request. */
          remainingCredits: number | null;
          /** The response Content-Type header when returned. */
          contentType: string | null;
          /** The final response URL observed by the connector. */
          finalUrl: string | null;
        };
      };
    };
  }
}
