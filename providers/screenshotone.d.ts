import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current ScreenshotOne plan usage and concurrency information. */
    "screenshotone.get_usage": {
      input: Record<string, never>;
      output: {
        /** The total requests allowed in the current billing period. */
        total: number;
        /** The remaining requests available in the current billing period. */
        available: number;
        /** The number of requests already used in the current billing period. */
        used: number;
        /** The current concurrency allowance. */
        concurrency: {
          /** The total concurrent requests allowed. */
          limit: number;
          /** The remaining concurrent requests allowed. */
          remaining: number;
          /** The reset timestamp in nanoseconds. */
          reset: number;
        };
      };
    };
    /** List the ScreenshotOne device presets available for viewport emulation. */
    "screenshotone.list_devices": {
      input: Record<string, never>;
      output: {
        /** The available ScreenshotOne device presets. */
        devices: Array<{
          /** The device preset identifier. */
          id: string;
          /** The human-readable device preset name. */
          name: string;
          /** The user agent string used by the device preset. */
          userAgent: string;
          /** The viewport parameters for the device preset. */
          viewport: {
            /** The viewport width in pixels. */
            width: number;
            /** The viewport height in pixels. */
            height: number;
            /** The device pixel ratio. */
            deviceScaleFactor: number;
            /** Whether the device is mobile. */
            isMobile: boolean;
            /** Whether the device supports touch. */
            hasTouch: boolean;
            /** Whether the device is in landscape orientation. */
            isLandscape: boolean;
          };
        }>;
      };
    };
    /** Take an animated ScreenshotOne capture as a video or GIF file. */
    "screenshotone.take_animated_screenshot": {
      input: {
        /**
         * The website URL to capture as an animation.
         * @format uri
         */
        url: string;
        /**
         * The delay in milliseconds before recording begins.
         * @minimum 0
         */
        delay?: number;
        /**
         * The output width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The output height in pixels.
         * @minimum 1
         */
        height?: number;
        /** The animation output format. */
        format?: "mp4" | "mov" | "avi" | "webm" | "gif";
        /**
         * The animation duration in seconds.
         * @minimum 1
         * @maximum 30
         */
        duration?: number;
        /** The animation scenario. */
        scenario?: "default" | "scroll";
        /** Whether to block ads during capture. */
        block_ads?: boolean;
        /** Whether to capture the full scrollable page. */
        full_page?: boolean;
        /**
         * The pixels to scroll per step.
         * @minimum 0
         */
        scroll_by?: number;
        /**
         * The X coordinate for GIF clipping.
         * @minimum 0
         */
        clip_x?: number;
        /**
         * The Y coordinate for GIF clipping.
         * @minimum 0
         */
        clip_y?: number;
        /**
         * The GIF clip width in pixels.
         * @minimum 1
         */
        clip_width?: number;
        /**
         * The GIF clip height in pixels.
         * @minimum 1
         */
        clip_height?: number;
        /** Whether to scroll back to the top after scrolling. */
        scroll_back?: boolean;
        /**
         * The output aspect ratio string.
         * @minLength 1
         */
        aspect_ratio?: string;
        /**
         * The delay between scroll steps in milliseconds.
         * @minimum 0
         */
        scroll_delay?: number;
        /** The easing to use for scrolling animations. */
        scroll_easing?: "linear" | "ease_in_quad" | "ease_out_quad" | "ease_in_out_quad" | "ease_in_cubic" | "ease_out_cubic" | "ease_in_out_cubic" | "ease_in_quart" | "ease_out_quart" | "ease_in_out_quart" | "ease_in_quint" | "ease_out_quint" | "ease_in_out_quint";
        /**
         * The viewport width in pixels.
         * @minimum 1
         */
        viewport_width?: number;
        /** Whether to omit the background. Only supported for MOV output. */
        omit_background?: boolean;
        /** Whether to stop recording when scrolling completes. */
        scroll_complete?: boolean;
        /**
         * The duration of each scroll in milliseconds.
         * @minimum 0
         */
        scroll_duration?: number;
        /**
         * The viewport height in pixels.
         * @minimum 1
         */
        viewport_height?: number;
        /**
         * The delay before scrolling begins in milliseconds.
         * @minimum 0
         */
        scroll_start_delay?: number;
        /**
         * The device scale factor.
         * @minimum 1
         */
        device_scale_factor?: number;
        /**
         * Scroll to the end after the specified duration in milliseconds.
         * @minimum 0
         */
        scroll_to_end_after?: number;
        /** Whether to navigate while scrolling and record the new page. */
        scroll_try_navigate?: boolean;
        /** Whether to block cookie banners during capture. */
        block_cookie_banners?: boolean;
        /**
         * Scroll until the CSS selector becomes visible.
         * @minLength 1
         */
        scroll_till_selector?: string;
        /** The algorithm used when scrolling back. */
        scroll_back_algorithm?: "once" | "repeat";
        /**
         * Navigate after the specified duration in milliseconds.
         * @minimum 0
         */
        scroll_navigate_after?: number;
        /**
         * The URL to navigate to while recording the animation.
         * @format uri
         */
        scroll_navigate_to_url?: string;
        /** Whether scrolling should start immediately. */
        scroll_start_immediately?: boolean;
        /**
         * Scroll back after the specified duration in milliseconds.
         * @minimum 0
         */
        scroll_back_after_duration?: number;
        /** The link text hints used when selecting a navigation target. */
        scroll_navigate_link_hints?: Array<string>;
        /**
         * Stop scrolling after the specified duration in milliseconds.
         * @minimum 0
         */
        scroll_stop_after_duration?: number;
        /**
         * Adjust the top selector position in pixels.
         * @minimum 0
         */
        scroll_till_selector_adjust_top?: number;
      };
      output: {
        /** The downloaded animated screenshot file. */
        file: {
          /** The generated filename. */
          name: string;
          /** The MIME type of the generated file. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
        /** The response content type returned by ScreenshotOne. */
        content_type: string;
      };
    };
    /** Submit multiple ScreenshotOne screenshot requests in a single bulk call. */
    "screenshotone.take_bulk_screenshots": {
      input: {
        /** Whether ScreenshotOne should execute all requests immediately. */
        execute?: boolean;
        /** The default options applied to each bulk screenshot request. */
        options?: {
          /**
           * The default website URL to render. Combined defaults must resolve to one source.
           * @format uri
           */
          url?: string;
          /**
           * The default HTML content to render. Combined defaults must resolve to one source.
           * @minLength 1
           */
          html?: string;
          /**
           * The default Markdown content to render. Combined defaults must resolve to one source.
           * @minLength 1
           */
          markdown?: string;
          /** Whether the bulk screenshots should use caching by default. */
          cache?: boolean;
          /**
           * The default delay in milliseconds before rendering each screenshot.
           * @minimum 0
           * @maximum 30000
           */
          delay?: number;
          /** The default image format for the bulk screenshots. */
          format?: "png" | "jpg" | "jpeg" | "webp";
          /** Whether to block ads by default. */
          block_ads?: boolean;
          /**
           * The default cache TTL in seconds.
           * @minimum 0
           */
          cache_ttl?: number;
          /** Whether to capture the full page by default. */
          full_page?: boolean;
          /** Whether to block chats by default. */
          block_chats?: boolean;
          /**
           * The default storage path.
           * @minLength 1
           */
          storage_path?: string;
          /** Whether to block trackers by default. */
          block_trackers?: boolean;
          /**
           * The default viewport width in pixels.
           * @minimum 1
           * @maximum 7680
           */
          viewport_width?: number;
          /** The default device viewport preset. */
          viewport_device?: "desktop" | "mobile" | "tablet";
          /**
           * The default viewport height in pixels.
           * @minimum 1
           * @maximum 7680
           */
          viewport_height?: number;
          /**
           * The default device scale factor.
           * @minimum 1
           * @maximum 3
           */
          device_scale_factor?: number;
          /** Whether to block cookie banners by default. */
          block_cookie_banners?: boolean;
        };
        /** Whether to optimize same-site bulk execution. Requires execute=true. */
        optimize?: boolean;
        /**
         * The list of individual bulk screenshot requests.
         * @minItems 1
         * @maxItems 20
         */
        requests: Array<{
          /**
           * The request URL to render. Combined defaults and overrides must resolve to one source.
           * @format uri
           */
          url?: string;
          /**
           * The request HTML to render. Combined defaults and overrides must resolve to one source.
           * @minLength 1
           */
          html?: string;
          /**
           * The request Markdown to render. Combined defaults and overrides must resolve to one source.
           * @minLength 1
           */
          markdown?: string;
          /** Whether this screenshot should use caching. */
          cache?: boolean;
          /**
           * The delay in milliseconds before rendering this screenshot.
           * @minimum 0
           * @maximum 30000
           */
          delay?: number;
          /** The image format for this screenshot. */
          format?: "png" | "jpg" | "jpeg" | "webp";
          /** Whether to block ads for this screenshot. */
          block_ads?: boolean;
          /**
           * The cache TTL in seconds for this screenshot.
           * @minimum 0
           */
          cache_ttl?: number;
          /** Whether to capture the full page for this screenshot. */
          full_page?: boolean;
          /** Whether to block chats for this screenshot. */
          block_chats?: boolean;
          /**
           * The storage path for this screenshot.
           * @minLength 1
           */
          storage_path?: string;
          /** Whether to block trackers for this screenshot. */
          block_trackers?: boolean;
          /**
           * The viewport width in pixels.
           * @minimum 1
           * @maximum 7680
           */
          viewport_width?: number;
          /** The viewport preset for this screenshot. */
          viewport_device?: "desktop" | "mobile" | "tablet";
          /**
           * The viewport height in pixels.
           * @minimum 1
           * @maximum 7680
           */
          viewport_height?: number;
          /**
           * The device scale factor for this screenshot.
           * @minimum 1
           * @maximum 3
           */
          device_scale_factor?: number;
          /** Whether to block cookie banners for this screenshot. */
          block_cookie_banners?: boolean;
        }>;
      };
      output: {
        /** The list of ScreenshotOne bulk response items. */
        responses: Array<{
          /** The download URL for the generated screenshot. */
          url: string;
          /** The execution result when the bulk request uses execute=true. */
          response?: {
            /** Whether ScreenshotOne executed the request successfully. */
            is_successful: boolean;
            /** The HTTP status code of the executed request. */
            status: number;
            /** The HTTP status text of the executed request. */
            statusText: string;
            /** The error response body when ScreenshotOne returns structured details. */
            body?: Record<string, string>;
          };
        }>;
      };
    };
    /** Take a ScreenshotOne screenshot from a website URL, HTML, or Markdown source. */
    "screenshotone.take_screenshot": {
      input: {
        /**
         * The website URL to render. Exactly one of url, html, or markdown is required.
         * @format uri
         */
        url?: string;
        /**
         * The raw HTML content to render. Exactly one of url, html, or markdown is required.
         * @minLength 1
         */
        html?: string;
        /**
         * The Markdown content to render. Exactly one of url, html, or markdown is required.
         * @minLength 1
         */
        markdown?: string;
        /** Whether ScreenshotOne should return or reuse a cached screenshot URL. */
        cache?: boolean;
        /**
         * The delay in seconds before rendering the screenshot.
         * @minimum 0
         * @maximum 30
         */
        delay?: number;
        /** The output format for the screenshot. */
        format?: "png" | "jpeg" | "webp" | "pdf" | "html";
        /** The response type requested from ScreenshotOne. */
        response_type?: "by_format" | "json" | "empty";
        /** Whether to block ads while rendering the screenshot. */
        block_ads?: boolean;
        /** Whether to block chat widgets while rendering the screenshot. */
        block_chats?: boolean;
        /** Whether to block cookie banners while rendering the screenshot. */
        block_cookie_banners?: boolean;
        /** Whether to enable dark mode during rendering. */
        dark_mode?: boolean;
        /**
         * The viewport width in pixels.
         * @minimum 1
         */
        viewport_width?: number;
        /**
         * The viewport height in pixels.
         * @minimum 1
         */
        viewport_height?: number;
        /**
         * The viewport device scale factor.
         * @minimum 1
         * @maximum 5
         */
        device_scale_factor?: number;
      };
      output: {
        /** The downloaded screenshot file. */
        file?: {
          /** The generated filename. */
          name: string;
          /** The MIME type of the generated file. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
        /** The response content type returned by ScreenshotOne. */
        content_type?: string;
        /**
         * The cached screenshot URL returned when ScreenshotOne responds with JSON.
         * @format uri
         */
        cache_url?: string;
      };
    };
  }
}
