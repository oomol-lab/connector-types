import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract structured values from one public URL with ZenRows CSS selectors. */
    "zenrows.extract_css": {
      input: {
        /**
         * The public URL ZenRows should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether ZenRows should render JavaScript before returning the response. */
        js_render?: boolean;
        /**
         * The time in milliseconds ZenRows should wait after page load before returning content.
         * @minimum 1
         * @maximum 30000
         */
        wait?: number;
        /**
         * The CSS selector ZenRows should wait for before returning content.
         * @minLength 1
         */
        wait_for?: string;
        /** Whether ZenRows should use premium proxies for the request. */
        premium_proxy?: boolean;
        /**
         * The ISO 3166-1 alpha-2 country code for proxy geolocation. ZenRows requires premium_proxy when this is set.
         * @pattern ^[A-Za-z]{2}$
         */
        proxy_country?: string;
        /**
         * The ZenRows session identifier used to keep the same IP across related requests.
         * @minLength 1
         */
        session_id?: string;
        /** Custom HTTP headers ZenRows should send to the target website. */
        custom_headers?: Record<string, string>;
        /** CSS selectors ZenRows should extract, keyed by output field name. */
        css_selectors: Record<string, string>;
      };
      output: {
        /** The CSS extraction result returned by ZenRows. */
        data: Record<string, unknown>;
        /** Metadata collected from ZenRows response headers. */
        metadata: {
          /** The HTTP status code returned by ZenRows. */
          status_code: number;
          /** The response content type returned by ZenRows. */
          content_type: string | null;
          /** The original target website status code reported by ZenRows. */
          original_status_code: number | null;
          /** The final URL reported by ZenRows after redirects. */
          final_url: string | null;
          /** The ZenRows request identifier when returned. */
          request_id: string | null;
          /** The maximum concurrent requests allowed for the API key when returned. */
          concurrency_limit: number | null;
          /** The remaining concurrent request slots when returned. */
          concurrency_remaining: number | null;
        };
        /** Response headers returned by ZenRows or the target website. */
        headers: Record<string, string>;
      };
    };
    /** Fetch raw HTML from one public URL with optional JavaScript rendering and proxy controls. */
    "zenrows.fetch_html": {
      input: {
        /**
         * The public URL ZenRows should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether ZenRows should render JavaScript before returning the response. */
        js_render?: boolean;
        /**
         * The time in milliseconds ZenRows should wait after page load before returning content.
         * @minimum 1
         * @maximum 30000
         */
        wait?: number;
        /**
         * The CSS selector ZenRows should wait for before returning content.
         * @minLength 1
         */
        wait_for?: string;
        /** Whether ZenRows should use premium proxies for the request. */
        premium_proxy?: boolean;
        /**
         * The ISO 3166-1 alpha-2 country code for proxy geolocation. ZenRows requires premium_proxy when this is set.
         * @pattern ^[A-Za-z]{2}$
         */
        proxy_country?: string;
        /**
         * The ZenRows session identifier used to keep the same IP across related requests.
         * @minLength 1
         */
        session_id?: string;
        /** Custom HTTP headers ZenRows should send to the target website. */
        custom_headers?: Record<string, string>;
        /** Whether ZenRows should expose the original target website status code. */
        original_status?: boolean;
      };
      output: {
        /** The raw HTML content returned by ZenRows. */
        html: string;
        /** Metadata collected from ZenRows response headers. */
        metadata: {
          /** The HTTP status code returned by ZenRows. */
          status_code: number;
          /** The response content type returned by ZenRows. */
          content_type: string | null;
          /** The original target website status code reported by ZenRows. */
          original_status_code: number | null;
          /** The final URL reported by ZenRows after redirects. */
          final_url: string | null;
          /** The ZenRows request identifier when returned. */
          request_id: string | null;
          /** The maximum concurrent requests allowed for the API key when returned. */
          concurrency_limit: number | null;
          /** The remaining concurrent request slots when returned. */
          concurrency_remaining: number | null;
        };
        /** Response headers returned by ZenRows or the target website. */
        headers: Record<string, string>;
      };
    };
    /** Fetch plain text extracted from one public URL with ZenRows. */
    "zenrows.fetch_plaintext": {
      input: {
        /**
         * The public URL ZenRows should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether ZenRows should render JavaScript before returning the response. */
        js_render?: boolean;
        /**
         * The time in milliseconds ZenRows should wait after page load before returning content.
         * @minimum 1
         * @maximum 30000
         */
        wait?: number;
        /**
         * The CSS selector ZenRows should wait for before returning content.
         * @minLength 1
         */
        wait_for?: string;
        /** Whether ZenRows should use premium proxies for the request. */
        premium_proxy?: boolean;
        /**
         * The ISO 3166-1 alpha-2 country code for proxy geolocation. ZenRows requires premium_proxy when this is set.
         * @pattern ^[A-Za-z]{2}$
         */
        proxy_country?: string;
        /**
         * The ZenRows session identifier used to keep the same IP across related requests.
         * @minLength 1
         */
        session_id?: string;
        /** Custom HTTP headers ZenRows should send to the target website. */
        custom_headers?: Record<string, string>;
      };
      output: {
        /** The plain text content returned by ZenRows. */
        text: string;
        /** Metadata collected from ZenRows response headers. */
        metadata: {
          /** The HTTP status code returned by ZenRows. */
          status_code: number;
          /** The response content type returned by ZenRows. */
          content_type: string | null;
          /** The original target website status code reported by ZenRows. */
          original_status_code: number | null;
          /** The final URL reported by ZenRows after redirects. */
          final_url: string | null;
          /** The ZenRows request identifier when returned. */
          request_id: string | null;
          /** The maximum concurrent requests allowed for the API key when returned. */
          concurrency_limit: number | null;
          /** The remaining concurrent request slots when returned. */
          concurrency_remaining: number | null;
        };
        /** Response headers returned by ZenRows or the target website. */
        headers: Record<string, string>;
      };
    };
    /** Retrieve usage and plan details for the connected ZenRows API key. */
    "zenrows.get_usage": {
      input: Record<string, never>;
      output: {
        /** The ZenRows API usage details. */
        usage: {
          /** The current subscription status returned by ZenRows. */
          status: string;
          /** The start date of the current usage period. */
          period_starts_at: string;
          /** The end date of the current usage period. */
          period_ends_at: string;
          /** The current usage value. */
          usage: number;
          /** The usage percentage for the current period. */
          usage_percent: number;
          /** The plan object returned by ZenRows usage details. */
          plan: Record<string, unknown>;
          /** Top-ups applied to the account. */
          top_ups: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
