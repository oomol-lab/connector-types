import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Capture a website screenshot with screenshot.fyi and return the generated URL. */
    "screenshot_fyi.take_screenshot": {
      input: {
        /**
         * The complete website URL to capture, including the protocol.
         * @format uri
         */
        url: string;
        /**
         * The viewport width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The viewport height in pixels.
         * @minimum 1
         */
        height?: number;
        /** Whether to capture the full scrollable page instead of only the viewport. */
        fullPage?: boolean;
        /** Whether to render the target page with dark mode enabled. */
        darkMode?: boolean;
        /** Whether screenshot.fyi should hide cookie banners before capture. */
        disableCookieBanners?: boolean;
      };
      output: {
        /**
         * The generated screenshot URL returned by screenshot.fyi.
         * @format uri
         */
        url: string;
      };
    };
  }
}
