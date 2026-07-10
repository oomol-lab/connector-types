import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve current ScraperAPI account usage and limits. */
    "scraperapi.get_account_usage": {
      input: Record<string, never>;
      output: {
        /** Usage and account details returned by ScraperAPI. */
        usage: Record<string, unknown>;
      };
    };
    /** Fetch one public URL through ScraperAPI with optional rendering, geotargeting, and text output controls. */
    "scraperapi.scrape_url": {
      input: {
        /**
         * The public target URL ScraperAPI should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether ScraperAPI should render JavaScript before returning the response. */
        render?: boolean;
        /**
         * The CSS selector ScraperAPI should wait for before returning the response. This requires render to be true.
         * @minLength 1
         */
        waitForSelector?: string;
        /**
         * The two-letter country code used for request geolocation.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** Whether ScraperAPI should use premium residential or mobile proxies. */
        premium?: boolean;
        /** Whether ScraperAPI should use advanced bypass mechanisms. */
        ultraPremium?: boolean;
        /**
         * The sticky session number used to reuse the same proxy across related requests.
         * @exclusiveMinimum 0
         */
        sessionNumber?: number;
        /** Whether ScraperAPI should forward provided custom headers to the target URL. */
        keepHeaders?: boolean;
        /** The device type ScraperAPI should emulate. */
        deviceType?: "desktop" | "mobile";
        /** The text-oriented output format ScraperAPI should return. */
        outputFormat?: "text" | "markdown";
        /** Whether ScraperAPI should follow target website redirects. */
        followRedirect?: boolean;
        /** Custom HTTP headers ScraperAPI should forward to the target URL when keepHeaders is true. */
        customHeaders?: Record<string, string>;
      };
      output: {
        /** The response body returned by ScraperAPI. */
        body: string;
        /** Metadata collected from the ScraperAPI response. */
        metadata: {
          /** The HTTP status code returned by ScraperAPI. */
          statusCode: number;
          /** The response content type returned by ScraperAPI. */
          contentType: string | null;
        };
        /** Response headers returned by ScraperAPI or the target website. */
        headers: Record<string, string>;
      };
    };
    /** Send a POST or PUT request to one public URL through ScraperAPI. */
    "scraperapi.submit_url": {
      input: {
        /**
         * The public target URL ScraperAPI should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether ScraperAPI should render JavaScript before returning the response. */
        render?: boolean;
        /**
         * The CSS selector ScraperAPI should wait for before returning the response. This requires render to be true.
         * @minLength 1
         */
        waitForSelector?: string;
        /**
         * The two-letter country code used for request geolocation.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** Whether ScraperAPI should use premium residential or mobile proxies. */
        premium?: boolean;
        /** Whether ScraperAPI should use advanced bypass mechanisms. */
        ultraPremium?: boolean;
        /**
         * The sticky session number used to reuse the same proxy across related requests.
         * @exclusiveMinimum 0
         */
        sessionNumber?: number;
        /** Whether ScraperAPI should forward provided custom headers to the target URL. */
        keepHeaders?: boolean;
        /** The device type ScraperAPI should emulate. */
        deviceType?: "desktop" | "mobile";
        /** The text-oriented output format ScraperAPI should return. */
        outputFormat?: "text" | "markdown";
        /** Whether ScraperAPI should follow target website redirects. */
        followRedirect?: boolean;
        /** Custom HTTP headers ScraperAPI should forward to the target URL when keepHeaders is true. */
        customHeaders?: Record<string, string>;
        /** The HTTP method ScraperAPI should send to the target URL. */
        method: "POST" | "PUT";
        /** The request body to send to the target URL. */
        body: string;
        /**
         * The Content-Type header for the submitted request body.
         * @minLength 1
         */
        contentType?: string;
      };
      output: {
        /** The response body returned by ScraperAPI. */
        body: string;
        /** Metadata collected from the ScraperAPI response. */
        metadata: {
          /** The HTTP status code returned by ScraperAPI. */
          statusCode: number;
          /** The response content type returned by ScraperAPI. */
          contentType: string | null;
        };
        /** Response headers returned by ScraperAPI or the target website. */
        headers: Record<string, string>;
      };
    };
  }
}
