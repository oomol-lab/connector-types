import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Render a URL or raw HTML with Cloudflare Browser Run and return the fully rendered HTML content. */
    "cloudflare_browser_rendering.get_html_content": {
      input: {
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
      };
      output: {
        /** The rendered HTML content. */
        content: string;
        /** Cloudflare Browser Run response metadata. */
        meta?: {
          /** The HTTP status reported by the rendered page. */
          status?: number;
          /** The title reported by the rendered page. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and extract structured JSON from the page. */
    "cloudflare_browser_rendering.get_json": {
      input: {
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
        /**
         * The natural language prompt for extracting structured data.
         * @minLength 1
         */
        prompt?: string;
        /** Structured JSON response format options forwarded to Cloudflare Browser Run. */
        responseFormat?: {
          /**
           * The response format type accepted by Cloudflare Browser Run.
           * @minLength 1
           */
          type: string;
          /** The JSON schema Cloudflare should use for the structured result. */
          jsonSchema?: Record<string, unknown>;
        };
      };
      output: {
        /** The structured JSON result returned by Cloudflare Browser Run. */
        data: unknown;
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and return links discovered on the page. */
    "cloudflare_browser_rendering.get_links": {
      input: {
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
        /** Whether Cloudflare should exclude external links. */
        excludeExternalLinks?: boolean;
        /** Whether Cloudflare should return only visible links. */
        visibleLinksOnly?: boolean;
      };
      output: {
        /** The extracted links. */
        links: Array<string>;
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and return the page content as Markdown. */
    "cloudflare_browser_rendering.get_markdown": {
      input: {
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
      };
      output: {
        /** The extracted Markdown content. */
        markdown: string;
      };
    };
    /** List Cloudflare accounts accessible to the API token so callers can confirm account IDs used by Browser Run actions. */
    "cloudflare_browser_rendering.list_accounts": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** Cloudflare accounts visible to the API token. */
        accounts: Array<{
          /** The Cloudflare account ID. */
          id: string;
          /** The Cloudflare account name. */
          name: string;
          /** The Cloudflare account type. */
          type?: string;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and scrape selected HTML elements. */
    "cloudflare_browser_rendering.scrape_elements": {
      input: {
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
        /**
         * The CSS selectors to scrape after rendering.
         * @minItems 1
         */
        elements: Array<{
          /**
           * The CSS selector Cloudflare Browser Run should scrape.
           * @minLength 1
           */
          selector: string;
        }>;
      };
      output: {
        /** The scrape results by selector. */
        elements: Array<{
          /** The CSS selector used for this result. */
          selector: string;
          /** The element result or result array returned by Cloudflare for this selector. */
          results: unknown;
        }>;
      };
    };
  }
}
