import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create up to 25 HTML/CSS to Image images in one batch using shared default options and per-image variations. */
    "htmlcsstoimage.create_batch_images": {
      input: {
        /** Default image creation options applied to every batch variation. */
        default_options?: {
          /** CSS to render with HTML snippets or inject into URL screenshots. */
          css?: string;
          /** Google Fonts to load, such as Roboto or multiple font families separated by a pipe. */
          google_fonts?: string;
          /**
           * A CSS selector for an element to crop the generated image to.
           * @minLength 1
           */
          selector?: string;
          /**
           * The fixed delay in milliseconds before generating the image.
           * @minimum 0
           */
          ms_delay?: number;
          /**
           * The maximum time in milliseconds to wait before taking the screenshot.
           * @minimum 500
           * @maximum 10000
           */
          max_wait_ms?: number;
          /**
           * The Chrome device scale factor. Higher values increase resolution and file size.
           * @minimum 0.1
           * @maximum 3
           */
          device_scale?: number;
          /** Whether page JavaScript must call ScreenshotReady() before the image is generated. */
          render_when_ready?: boolean;
          /** Whether to generate an image of the entire page height. */
          full_screen?: boolean;
          /** Whether to automatically hide common cookie consent banners and popups. */
          block_consent_banners?: boolean;
          /**
           * The Chrome viewport width in pixels. Set with viewport_height to disable automatic cropping.
           * @minimum 1
           */
          viewport_width?: number;
          /**
           * The Chrome viewport height in pixels. Set with viewport_width to disable automatic cropping.
           * @minimum 1
           */
          viewport_height?: number;
          /** Whether Chrome should emulate a mobile viewport. */
          viewport_mobile?: boolean;
          /** Whether Chrome should emulate a landscape mobile viewport. */
          viewport_landscape?: boolean;
          /** Whether Chrome should emulate touch input support. */
          viewport_touch?: boolean;
          /** The Chrome color scheme to use while rendering websites that support prefers-color-scheme. */
          color_scheme?: "light" | "dark";
          /**
           * The IANA timezone identifier used while rendering the image.
           * @minLength 1
           */
          timezone?: string;
          /** Whether to use native emoji fonts instead of Twemoji. */
          disable_twemoji?: boolean;
          /**
           * The configured HTML/CSS to Image dashboard proxy ID for outbound requests.
           * @minLength 1
           */
          proxy_id?: string;
        };
        /**
         * The image variations to create, up to 25.
         * @minItems 1
         * @maxItems 25
         */
        variations: Array<{
          /**
           * The HTML snippet or complete webpage markup to render.
           * @minLength 1
           */
          html?: string;
          /**
           * The public webpage URL to screenshot.
           * @format uri
           */
          url?: string;
          /** CSS to render with HTML snippets or inject into URL screenshots. */
          css?: string;
          /** Google Fonts to load, such as Roboto or multiple font families separated by a pipe. */
          google_fonts?: string;
          /**
           * A CSS selector for an element to crop the generated image to.
           * @minLength 1
           */
          selector?: string;
          /**
           * The fixed delay in milliseconds before generating the image.
           * @minimum 0
           */
          ms_delay?: number;
          /**
           * The maximum time in milliseconds to wait before taking the screenshot.
           * @minimum 500
           * @maximum 10000
           */
          max_wait_ms?: number;
          /**
           * The Chrome device scale factor. Higher values increase resolution and file size.
           * @minimum 0.1
           * @maximum 3
           */
          device_scale?: number;
          /** Whether page JavaScript must call ScreenshotReady() before the image is generated. */
          render_when_ready?: boolean;
          /** Whether to generate an image of the entire page height. */
          full_screen?: boolean;
          /** Whether to automatically hide common cookie consent banners and popups. */
          block_consent_banners?: boolean;
          /**
           * The Chrome viewport width in pixels. Set with viewport_height to disable automatic cropping.
           * @minimum 1
           */
          viewport_width?: number;
          /**
           * The Chrome viewport height in pixels. Set with viewport_width to disable automatic cropping.
           * @minimum 1
           */
          viewport_height?: number;
          /** Whether Chrome should emulate a mobile viewport. */
          viewport_mobile?: boolean;
          /** Whether Chrome should emulate a landscape mobile viewport. */
          viewport_landscape?: boolean;
          /** Whether Chrome should emulate touch input support. */
          viewport_touch?: boolean;
          /** The Chrome color scheme to use while rendering websites that support prefers-color-scheme. */
          color_scheme?: "light" | "dark";
          /**
           * The IANA timezone identifier used while rendering the image.
           * @minLength 1
           */
          timezone?: string;
          /** Whether to use native emoji fonts instead of Twemoji. */
          disable_twemoji?: boolean;
          /**
           * The configured HTML/CSS to Image dashboard proxy ID for outbound requests.
           * @minLength 1
           */
          proxy_id?: string;
        }>;
      };
      output: {
        /** The images created by the batch request. */
        images: Array<{
          /** The generated image identifier. */
          id: string;
          /**
           * The generated image URL.
           * @format uri
           */
          url: string;
        }>;
      };
    };
    /** Create an image from either raw HTML/CSS or a public webpage URL with HTML/CSS to Image. */
    "htmlcsstoimage.create_image": {
      input: {
        /**
         * The HTML snippet or complete webpage markup to render.
         * @minLength 1
         */
        html?: string;
        /**
         * The public webpage URL to screenshot. This overrides html upstream.
         * @format uri
         */
        url?: string;
        /** CSS to render with HTML snippets or inject into URL screenshots. */
        css?: string;
        /** Google Fonts to load, such as Roboto or multiple font families separated by a pipe. */
        google_fonts?: string;
        /**
         * A CSS selector for an element to crop the generated image to.
         * @minLength 1
         */
        selector?: string;
        /**
         * The fixed delay in milliseconds before generating the image.
         * @minimum 0
         */
        ms_delay?: number;
        /**
         * The maximum time in milliseconds to wait before taking the screenshot.
         * @minimum 500
         * @maximum 10000
         */
        max_wait_ms?: number;
        /**
         * The Chrome device scale factor. Higher values increase resolution and file size.
         * @minimum 0.1
         * @maximum 3
         */
        device_scale?: number;
        /** Whether page JavaScript must call ScreenshotReady() before the image is generated. */
        render_when_ready?: boolean;
        /** Whether to generate an image of the entire page height. */
        full_screen?: boolean;
        /** Whether to automatically hide common cookie consent banners and popups. */
        block_consent_banners?: boolean;
        /**
         * The Chrome viewport width in pixels. Set with viewport_height to disable automatic cropping.
         * @minimum 1
         */
        viewport_width?: number;
        /**
         * The Chrome viewport height in pixels. Set with viewport_width to disable automatic cropping.
         * @minimum 1
         */
        viewport_height?: number;
        /** Whether Chrome should emulate a mobile viewport. */
        viewport_mobile?: boolean;
        /** Whether Chrome should emulate a landscape mobile viewport. */
        viewport_landscape?: boolean;
        /** Whether Chrome should emulate touch input support. */
        viewport_touch?: boolean;
        /** The Chrome color scheme to use while rendering websites that support prefers-color-scheme. */
        color_scheme?: "light" | "dark";
        /**
         * The IANA timezone identifier used while rendering the image.
         * @minLength 1
         */
        timezone?: string;
        /** Whether to use native emoji fonts instead of Twemoji. */
        disable_twemoji?: boolean;
        /**
         * The configured HTML/CSS to Image dashboard proxy ID for outbound requests.
         * @minLength 1
         */
        proxy_id?: string;
      };
      output: {
        /** The generated image identifier. */
        id: string;
        /**
         * The generated image URL.
         * @format uri
         */
        url: string;
      };
    };
    /** Delete multiple generated images from HTML/CSS to Image in one request. */
    "htmlcsstoimage.delete_batch_images": {
      input: {
        /**
         * The image identifiers to delete.
         * @minItems 1
         * @maxItems 25
         */
        ids: Array<string>;
      };
      output: {
        /** Whether HTML/CSS to Image accepted the batch delete request. */
        accepted: boolean;
        /** The image identifiers submitted for deletion. */
        ids: Array<string>;
      };
    };
    /** Delete one generated image from HTML/CSS to Image and clear its CDN cache. */
    "htmlcsstoimage.delete_image": {
      input: {
        /**
         * The image identifier to delete.
         * @minLength 1
         */
        image_id: string;
      };
      output: {
        /** Whether HTML/CSS to Image accepted the delete request. */
        accepted: boolean;
        /** The image identifier that was deleted. */
        image_id: string;
      };
    };
    /** Retrieve HTML/CSS to Image usage counts by hour, day, month, and billing period. */
    "htmlcsstoimage.get_usage": {
      input: Record<string, never>;
      output: {
        /** Usage counts grouped by rollup interval. */
        data: {
          /** Usage counts keyed by ISO timestamp for one rollup interval. */
          hour: Record<string, number>;
          /** Usage counts keyed by ISO timestamp for one rollup interval. */
          day: Record<string, number>;
          /** Usage counts keyed by ISO timestamp for one rollup interval. */
          month: Record<string, number>;
        };
        /** Usage summaries for recent billing periods. */
        per_billing_period: Array<{
          /** The number of images created in this billing period. */
          total_images: number;
          /** The billing period start timestamp. */
          start: string;
          /** The billing period end timestamp. */
          end: string;
        }>;
      };
    };
  }
}
