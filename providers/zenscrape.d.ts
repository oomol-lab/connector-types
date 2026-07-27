import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one public URL through Zenscrape with optional rendering, proxy, header, and wait controls. */
    "zenscrape.fetch_url": {
      input: {
        /**
         * The public target URL Zenscrape should request.
         * @minLength 1
         * @maxLength 2083
         * @format uri
         */
        url: string;
        /** Whether Zenscrape should render JavaScript before returning the page. */
        render?: boolean;
        /** Whether Zenscrape should use premium proxies for the request. */
        premium?: boolean;
        /**
         * The Zenscrape proxy location code, such as na, eu, or a premium country code.
         * @minLength 1
         */
        location?: string;
        /** The device type Zenscrape should emulate. */
        deviceType?: "mobile";
        /**
         * How long Zenscrape should wait before returning the page response.
         * @exclusiveMinimum 0
         */
        waitFor?: number;
        /**
         * The CSS selector Zenscrape should wait for before returning the page response.
         * @minLength 1
         */
        waitForCss?: string;
        /** Whether Zenscrape should block ads while loading the page. */
        blockAds?: boolean;
        /**
         * The JavaScript snippet Zenscrape should execute before returning the page response.
         * @minLength 1
         */
        javascriptSnippet?: string;
        /**
         * The resource types Zenscrape should block while loading the page.
         * @minItems 1
         */
        blockResources?: Array<"document" | "stylesheet" | "image" | "media" | "font" | "script" | "texttrack" | "xhr" | "fetch" | "eventsource" | "websocket" | "manifest" | "other">;
        /** Whether Zenscrape should forward provided custom headers to the target URL. */
        keepHeaders?: boolean;
        /** Custom HTTP headers Zenscrape should forward to the target URL when keepHeaders is true. */
        customHeaders?: Record<string, string>;
        /**
         * The Cookie header value Zenscrape should forward to the target URL.
         * @minLength 1
         */
        cookies?: string;
      };
      output: {
        /** The response body returned by Zenscrape. */
        body: string;
        /** Metadata collected from the Zenscrape response. */
        metadata: {
          /** The HTTP status code returned by Zenscrape. */
          statusCode: number;
          /** The response content type returned by Zenscrape. */
          contentType: string | null;
        };
        /** Response headers returned by Zenscrape or the target website. */
        headers: Record<string, string>;
      };
    };
  }
}
