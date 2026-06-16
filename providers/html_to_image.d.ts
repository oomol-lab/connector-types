import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Capture a public webpage with HTML to Image and return the generated screenshot URL. */
    "html_to_image.capture_website_screenshot": {
      input: {
        /**
         * The public webpage URL to capture, including the protocol.
         * @format uri
         */
        url: string;
        /**
         * A CSS selector for capturing a specific element on the target page.
         * @minLength 1
         */
        selector?: string;
        /** Additional CSS to inject before the image is rendered. */
        css?: string;
        /**
         * The viewport width in pixels from 1 to 5000.
         * @minimum 1
         * @maximum 5000
         */
        width?: number;
        /**
         * The viewport height in pixels from 1 to 5000.
         * @minimum 1
         * @maximum 5000
         */
        height?: number;
        /** Whether to capture the full page height instead of only the viewport height. */
        fullpage?: boolean;
        /**
         * The device pixel ratio from 1 to 4. When `fullpage` is true, HTML to Image forces this to 1.
         * @minimum 1
         * @maximum 4
         */
        dpi?: number;
        /**
         * A CSS selector that must appear in the DOM before capture starts.
         * @minLength 1
         */
        wait_for_selector?: string;
        /**
         * A fixed delay in milliseconds before capture, from 0 to 5000.
         * @minimum 0
         * @maximum 5000
         */
        ms_delay?: number;
      };
      output: {
        /** Whether HTML to Image reported the request as successful. */
        success: boolean;
        /** The remaining image credits after the request. */
        credits_remaining?: number;
        /** The HTML to Image image identifier. */
        id: string;
        /**
         * The generated image URL.
         * @format uri
         */
        url: string;
      };
    };
    /** Convert raw HTML and optional CSS to an image with HTML to Image and return the generated image URL. */
    "html_to_image.convert_html_to_image": {
      input: {
        /**
         * The HTML content to render. This can include inline CSS and JavaScript.
         * @minLength 1
         */
        html: string;
        /** Additional CSS to inject before the image is rendered. */
        css?: string;
        /**
         * The viewport width in pixels from 1 to 5000.
         * @minimum 1
         * @maximum 5000
         */
        width?: number;
        /**
         * The viewport height in pixels from 1 to 5000.
         * @minimum 1
         * @maximum 5000
         */
        height?: number;
        /** Whether to capture the full page height instead of only the viewport height. */
        fullpage?: boolean;
        /**
         * The device pixel ratio from 1 to 4. When `fullpage` is true, HTML to Image forces this to 1.
         * @minimum 1
         * @maximum 4
         */
        dpi?: number;
        /**
         * A CSS selector that must appear in the DOM before capture starts.
         * @minLength 1
         */
        wait_for_selector?: string;
        /**
         * A fixed delay in milliseconds before capture, from 0 to 5000.
         * @minimum 0
         * @maximum 5000
         */
        ms_delay?: number;
      };
      output: {
        /** Whether HTML to Image reported the request as successful. */
        success: boolean;
        /** The remaining image credits after the request. */
        credits_remaining?: number;
        /** The HTML to Image image identifier. */
        id: string;
        /**
         * The generated image URL.
         * @format uri
         */
        url: string;
      };
    };
  }
}
