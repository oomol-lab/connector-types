import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert a page into Markdown through ScrapingAnt's Markdown transformation endpoint. */
    "scrapingant.extract_content_as_markdown": {
      input: {
        /**
         * The absolute URL to scrape.
         * @format uri
         */
        url: string;
        /** The HTTP method sent to the target site through ScrapingAnt. */
        method?: "GET" | "POST" | "PUT" | "DELETE";
        /** Whether ScrapingAnt should render the page in a headless browser. */
        browser?: boolean;
        /**
         * The maximum upstream request time in seconds.
         * @minimum 5
         * @maximum 60
         */
        timeout?: number;
        /** Whether ScrapingAnt should return the raw server page source without JavaScript rendering. */
        returnPageSource?: boolean;
        /**
         * The cookie string sent to the target site, for example name=value; second=value.
         * @minLength 1
         */
        cookies?: string;
        /**
         * A plain JavaScript snippet that the connector will Base64-encode for ScrapingAnt.
         * @minLength 1
         */
        jsSnippet?: string;
        /** The proxy network to use for the request. */
        proxyType?: "datacenter" | "residential";
        /**
         * The two-letter proxy country code.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        proxyCountry?: string;
        /**
         * The CSS selector ScrapingAnt should wait for before returning the result.
         * @minLength 1
         */
        waitForSelector?: string;
        /**
         * The resource types ScrapingAnt should block while rendering.
         * @minItems 1
         */
        blockResource?: Array<"document" | "stylesheet" | "image" | "media" | "font" | "script" | "texttrack" | "xhr" | "fetch" | "eventsource" | "websocket" | "manifest" | "other">;
        /** Custom request headers forwarded to the target page through Ant-* headers. */
        customHeaders?: Record<string, string>;
        /**
         * A raw text request body forwarded to the target page for POST, PUT, or DELETE requests.
         * @minLength 1
         */
        bodyText?: string;
        /** A JSON object request body forwarded to the target page for POST, PUT, or DELETE requests. */
        bodyJson?: Record<string, unknown>;
      };
      output: {
        /**
         * The original requested URL.
         * @format uri
         */
        url: string;
        /**
         * The Markdown content extracted from the target page.
         * @minLength 1
         */
        markdown: string;
      };
    };
    /** Extract structured top-level JSON fields from a page through ScrapingAnt's AI extraction endpoint. */
    "scrapingant.extract_data_with_ai": {
      input: {
        /**
         * The absolute URL to extract data from.
         * @format uri
         */
        url: string;
        /** The HTTP method sent to the target site through ScrapingAnt. */
        method?: "GET" | "POST" | "PUT" | "DELETE";
        /** Whether ScrapingAnt should render the page in a headless browser. */
        browser?: boolean;
        /**
         * The maximum upstream request time in seconds.
         * @minimum 5
         * @maximum 60
         */
        timeout?: number;
        /** Whether ScrapingAnt should return the raw server page source without JavaScript rendering. */
        returnPageSource?: boolean;
        /**
         * The cookie string sent to the target site, for example name=value; second=value.
         * @minLength 1
         */
        cookies?: string;
        /**
         * A plain JavaScript snippet that the connector will Base64-encode for ScrapingAnt.
         * @minLength 1
         */
        jsSnippet?: string;
        /** The proxy network to use for the request. */
        proxyType?: "datacenter" | "residential";
        /**
         * The two-letter proxy country code.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        proxyCountry?: string;
        /**
         * The CSS selector ScrapingAnt should wait for before returning the result.
         * @minLength 1
         */
        waitForSelector?: string;
        /**
         * The resource types ScrapingAnt should block while rendering.
         * @minItems 1
         */
        blockResource?: Array<"document" | "stylesheet" | "image" | "media" | "font" | "script" | "texttrack" | "xhr" | "fetch" | "eventsource" | "websocket" | "manifest" | "other">;
        /** Custom request headers forwarded to the target page through Ant-* headers. */
        customHeaders?: Record<string, string>;
        /**
         * A raw text request body forwarded to the target page for POST, PUT, or DELETE requests.
         * @minLength 1
         */
        bodyText?: string;
        /** A JSON object request body forwarded to the target page for POST, PUT, or DELETE requests. */
        bodyJson?: Record<string, unknown>;
        /**
         * The free-form extraction description that ScrapingAnt will map into top-level JSON fields.
         * @minLength 1
         */
        extractProperties: string;
      };
      output: Record<string, unknown>;
    };
    /** Read the current ScrapingAnt subscription status and remaining API credits. */
    "scrapingant.get_api_credits_usage": {
      input: Record<string, never>;
      output: {
        /**
         * The active subscription plan name.
         * @minLength 1
         */
        plan_name: string;
        /**
         * The active subscription start date.
         * @minLength 1
         */
        start_date: string;
        /**
         * The active subscription end date.
         * @minLength 1
         */
        end_date: string;
        /** The total credits available for the active plan. */
        plan_total_credits: number;
        /** The remaining credits available for the active plan. */
        remained_credits: number;
      };
    };
    /** Scrape a page through ScrapingAnt's v2 extended endpoint and return HTML, text, cookies, headers, XHRs, and iframes. */
    "scrapingant.scrape_with_extended_json_output": {
      input: {
        /**
         * The absolute URL to scrape.
         * @format uri
         */
        url: string;
        /** The HTTP method sent to the target site through ScrapingAnt. */
        method?: "GET" | "POST" | "PUT" | "DELETE";
        /** Whether ScrapingAnt should render the page in a headless browser. */
        browser?: boolean;
        /**
         * The maximum upstream request time in seconds.
         * @minimum 5
         * @maximum 60
         */
        timeout?: number;
        /** Whether ScrapingAnt should return the raw server page source without JavaScript rendering. */
        returnPageSource?: boolean;
        /**
         * The cookie string sent to the target site, for example name=value; second=value.
         * @minLength 1
         */
        cookies?: string;
        /**
         * A plain JavaScript snippet that the connector will Base64-encode for ScrapingAnt.
         * @minLength 1
         */
        jsSnippet?: string;
        /** The proxy network to use for the request. */
        proxyType?: "datacenter" | "residential";
        /**
         * The two-letter proxy country code.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        proxyCountry?: string;
        /**
         * The CSS selector ScrapingAnt should wait for before returning the result.
         * @minLength 1
         */
        waitForSelector?: string;
        /**
         * The resource types ScrapingAnt should block while rendering.
         * @minItems 1
         */
        blockResource?: Array<"document" | "stylesheet" | "image" | "media" | "font" | "script" | "texttrack" | "xhr" | "fetch" | "eventsource" | "websocket" | "manifest" | "other">;
        /** Custom request headers forwarded to the target page through Ant-* headers. */
        customHeaders?: Record<string, string>;
        /**
         * A raw text request body forwarded to the target page for POST, PUT, or DELETE requests.
         * @minLength 1
         */
        bodyText?: string;
        /** A JSON object request body forwarded to the target page for POST, PUT, or DELETE requests. */
        bodyJson?: Record<string, unknown>;
      };
      output: {
        /**
         * The rendered page HTML.
         * @minLength 1
         */
        html: string;
        /**
         * The extracted plain text content.
         * @minLength 1
         */
        text: string;
        /** The response cookies returned by the target page. */
        cookies: string;
        /** The HTTP status code returned by the target page. */
        status_code: number;
        /** The HTTP response headers returned by the target page. */
        headers: Array<{
          /**
           * The header name.
           * @minLength 1
           */
          name: string;
          /**
           * The header value.
           * @minLength 1
           */
          value: string;
        }>;
        /** The XHR and fetch requests captured during page rendering. */
        xhrs: Array<{
          /**
           * The captured request URL.
           * @format uri
           */
          url: string;
          /** The captured response status code. */
          status: number;
          /**
           * The captured HTTP method.
           * @minLength 1
           */
          method: string;
          /** The headers captured for the XHR request. */
          headers: Array<{
            /**
             * The header name.
             * @minLength 1
             */
            name: string;
            /**
             * The header value.
             * @minLength 1
             */
            value: string;
          }>;
          /**
           * The response body captured for the XHR request.
           * @minLength 1
           */
          body?: string;
          /**
           * The request body captured for the XHR request.
           * @minLength 1
           */
          request_body?: string;
          [key: string]: unknown;
        }>;
        /** The iframe payloads captured during page rendering. */
        iframes: Array<{
          /**
           * The iframe source URL.
           * @format uri
           */
          src: string;
          /**
           * The rendered iframe HTML.
           * @minLength 1
           */
          html: string;
        }>;
      };
    };
  }
}
