import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract structured JSON data from one public URL with ScrapingBee extract_rules. */
    "scrapingbee.extract_data": {
      input: {
        /**
         * The public URL to extract data from with ScrapingBee.
         * @format uri
         */
        url: string;
        /** The extraction rules object serialized into the extract_rules query parameter. */
        extractRules: Record<string, unknown>;
        /** Whether ScrapingBee should render JavaScript before returning the page. */
        renderJs?: boolean;
        /**
         * How many milliseconds ScrapingBee should wait before returning the page.
         * @minimum 0
         */
        waitMs?: number;
        /**
         * The CSS selector ScrapingBee should wait for before returning the page.
         * @minLength 1
         */
        waitFor?: string;
        /** The device preset used for the request. */
        device?: "desktop" | "mobile";
        /** Whether ScrapingBee should block ads on the page. */
        blockAds?: boolean;
        /** Whether ScrapingBee should block images and CSS resources. */
        blockResources?: boolean;
        /**
         * The two-letter country code used for request geolocation.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** Whether ScrapingBee should use premium proxy routing. */
        premiumProxy?: boolean;
        /** Whether ScrapingBee should use stealth proxy routing. */
        stealthProxy?: boolean;
        /** Whether ScrapingBee should return the target page status code transparently. */
        transparentStatusCode?: boolean;
        /**
         * How many times ScrapingBee should retry the request on failure.
         * @exclusiveMinimum 0
         */
        retry?: number;
      };
      output: {
        /** The structured data object returned by ScrapingBee extract_rules. */
        data: Record<string, unknown>;
        /** The HTTP status code returned by ScrapingBee. */
        statusCode: number;
        /** The final resolved URL reported by ScrapingBee. */
        resolvedUrl?: string;
        /** The request credit cost reported by ScrapingBee. */
        creditCost?: number;
      };
    };
    /** Fetch HTML content from one public URL with optional rendering and proxy controls. */
    "scrapingbee.fetch_html": {
      input: {
        /**
         * The public URL to fetch with ScrapingBee.
         * @format uri
         */
        url: string;
        /** Whether ScrapingBee should render JavaScript before returning the page. */
        renderJs?: boolean;
        /**
         * How many milliseconds ScrapingBee should wait before returning the page.
         * @minimum 0
         */
        waitMs?: number;
        /**
         * The CSS selector ScrapingBee should wait for before returning the page.
         * @minLength 1
         */
        waitFor?: string;
        /** The device preset used for the request. */
        device?: "desktop" | "mobile";
        /** Whether ScrapingBee should block ads on the page. */
        blockAds?: boolean;
        /** Whether ScrapingBee should block images and CSS resources. */
        blockResources?: boolean;
        /**
         * The two-letter country code used for request geolocation.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** Whether ScrapingBee should use premium proxy routing. */
        premiumProxy?: boolean;
        /** Whether ScrapingBee should use stealth proxy routing. */
        stealthProxy?: boolean;
        /** Whether ScrapingBee should return the target page status code transparently. */
        transparentStatusCode?: boolean;
        /**
         * How many times ScrapingBee should retry the request on failure.
         * @exclusiveMinimum 0
         */
        retry?: number;
      };
      output: {
        /** The HTML content returned by ScrapingBee. */
        html: string;
        /** The HTTP status code returned by ScrapingBee. */
        statusCode: number;
        /** The content type returned by ScrapingBee. */
        contentType?: string;
        /** The original target page status code reported by ScrapingBee. */
        initialStatusCode?: number;
        /** The final resolved URL reported by ScrapingBee. */
        resolvedUrl?: string;
        /** The request credit cost reported by ScrapingBee. */
        creditCost?: number;
      };
    };
    /** Retrieve the current ScrapingBee API usage and concurrency statistics. */
    "scrapingbee.get_usage_stats": {
      input: Record<string, never>;
      output: {
        /** The current ScrapingBee usage snapshot. */
        usage: {
          /** The maximum API credits available in the current billing period. */
          max_api_credit: number;
          /** The API credits already consumed in the current billing period. */
          used_api_credit: number;
          /** The maximum number of concurrent requests allowed. */
          max_concurrency: number;
          /** The current number of concurrent requests in use. */
          current_concurrency: number;
          /** The renewal timestamp for the current subscription period. */
          renewal_subscription_date: string;
        };
      };
    };
  }
}
