import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Capture a website screenshot with ApiFlash and return the generated screenshot URL. */
    "apiflash.capture_website_screenshot": {
      input: {
        /**
         * The complete website URL to capture, including the protocol.
         * @format uri
         */
        url: string;
        /** Whether ApiFlash should bypass the cache and capture a fresh screenshot. */
        fresh?: boolean;
        /**
         * The screenshot cache lifetime in seconds, from 0 to 2592000.
         * @minimum 0
         * @maximum 2592000
         */
        ttl?: number;
        /** Whether to capture the entire scrollable page instead of only the viewport. */
        full_page?: boolean;
        /** Whether ApiFlash should scroll the page before capture to trigger lazy-loaded content. */
        scroll_page?: boolean;
        /**
         * The viewport width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The viewport height in pixels. This is ignored when `full_page` is true.
         * @minimum 1
         */
        height?: number;
        /**
         * The delay in seconds to wait after load before capturing the screenshot.
         * @minimum 0
         * @maximum 10
         */
        delay?: number;
        /**
         * A CSS selector that must match an element before the screenshot is captured.
         * @minLength 1
         */
        wait_for?: string;
        /** The page load condition ApiFlash should wait for before capturing. */
        wait_until?: "dom_loaded" | "page_loaded" | "network_idle";
        /**
         * A CSS selector for capturing only the first matching element.
         * @minLength 1
         */
        element?: string;
        /** Whether to keep overlapping elements when capturing a targeted element. */
        element_overlap?: boolean;
        /** The screenshot image format. */
        format?: "jpeg" | "png" | "webp";
        /**
         * The screenshot quality between 0 and 100 for jpeg or webp output.
         * @minimum 0
         * @maximum 100
         */
        quality?: number;
        /** Whether to capture the screenshot with transparency enabled when using png output. */
        transparent?: boolean;
        /** Whether ApiFlash should also return a URL for the extracted HTML. */
        extract_html?: boolean;
        /** Whether ApiFlash should also return a URL for the extracted plain text. */
        extract_text?: boolean;
        /**
         * The Accept-Language header value used when rendering the target page.
         * @minLength 1
         */
        accept_language?: string;
        /**
         * The User-Agent string used when rendering the target page.
         * @minLength 1
         */
        user_agent?: string;
        /**
         * A semicolon-separated header list such as `Header1=value1;Header2=value2`.
         * @minLength 1
         */
        headers?: string;
        /**
         * A semicolon-separated cookie list such as `name1=value1;name2=value2`.
         * @minLength 1
         */
        cookies?: string;
        /**
         * A comma-separated list or range of HTTP status codes that should fail the capture.
         * @minLength 1
         */
        fail_on_status?: string;
        /** Whether ApiFlash should block popular ad networks during capture. */
        no_ads?: boolean;
        /** Whether ApiFlash should block common tracking scripts during capture. */
        no_tracking?: boolean;
        /** Whether ApiFlash should hide cookie banners and popups during capture. */
        no_cookie_banners?: boolean;
      };
      output: {
        /**
         * The URL of the captured screenshot image.
         * @format uri
         */
        url: string;
        /**
         * The URL of the extracted HTML file when `extract_html` is enabled.
         * @format uri
         */
        extracted_html?: string;
        /**
         * The URL of the extracted text file when `extract_text` is enabled.
         * @format uri
         */
        extracted_text?: string;
        /** Quota headers returned alongside the screenshot capture response. */
        quota?: {
          /** The maximum number of screenshots allowed in the billing period. */
          limit?: number;
          /** The number of screenshots still available in the current billing period. */
          remaining?: number;
          /** The UTC epoch second when the screenshot quota resets. */
          reset?: number;
        };
      };
    };
    /** Retrieve the current ApiFlash screenshot quota and reset time. */
    "apiflash.get_quota_information": {
      input: Record<string, never>;
      output: {
        /** The maximum number of screenshots allowed in the billing period. */
        limit: number;
        /** The number of screenshots still available in the current billing period. */
        remaining: number;
        /** The UTC epoch second when the screenshot quota resets. */
        reset: number;
      };
    };
    /** Read HTTP metadata for a screenshot URL previously returned by ApiFlash. */
    "apiflash.get_screenshot_metadata": {
      input: {
        /**
         * The screenshot URL returned by `capture_website_screenshot` for metadata lookup.
         * @format uri
         */
        url: string;
      };
      output: {
        /**
         * The screenshot URL that was inspected.
         * @format uri
         */
        url: string;
        /** The Content-Type header returned by the screenshot URL. */
        content_type?: string;
        /** The Content-Length header returned by the screenshot URL, in bytes. */
        content_length?: number;
        /** The ETag header returned by the screenshot URL. */
        etag?: string;
        /** The Last-Modified header returned by the screenshot URL. */
        last_modified?: string;
        /** The Cache-Control header returned by the screenshot URL. */
        cache_control?: string;
      };
    };
  }
}
