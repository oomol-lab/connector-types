import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Build a signed capture URL that can be embedded where the API key must stay secret. Nothing is captured until the URL is loaded. */
    "framejet.create_signed_url": {
      input: {
        /**
         * The public http or https page to capture.
         * @format uri
         */
        url: string;
        /** The image format. Defaults to png. */
        format?: "png" | "jpeg";
        /** Whether to capture the whole scrollable page instead of the viewport. */
        full_page?: boolean;
        /**
         * The viewport width in pixels. Defaults to 1280.
         * @minimum 320
         * @maximum 3840
         */
        width?: number;
        /**
         * The viewport height in pixels. Defaults to 800.
         * @minimum 200
         * @maximum 4320
         */
        height?: number;
        /**
         * The device pixel ratio. Defaults to 1.
         * @minimum 1
         * @maximum 3
         */
        dpr?: number;
        /** Whether to remove cookie banners, consent walls and chat widgets before the capture. Defaults to true. */
        clean?: boolean;
        /**
         * An extra wait in milliseconds after the page loads.
         * @minimum 0
         * @maximum 10000
         */
        delay?: number;
        /**
         * Up to 10 steps, with at most 15 seconds of waiting in total, to run before the capture, separated by semicolons: click:<css>, type:<css>=<text>, waitfor:<css>, wait:<ms> or scroll:<px>. Example: click:#accept;waitfor:.pricing
         * @minLength 1
         * @maxLength 1000
         */
        actions?: string;
        /**
         * Seconds until the URL stops working. Omit it for a URL that never expires.
         * @minimum 1
         */
        expires_in?: number;
      };
      output: {
        /**
         * A capture URL that works in an img src, a CMS or a spreadsheet without exposing the API key. The first load spends one screenshot. Framejet serves later loads from its cache for seven days, then captures again, so a URL that keeps being viewed costs at most about one screenshot a week.
         * @format uri
         */
        signed_url: string;
      };
    };
    /** Capture a public web page as a PNG or JPEG with cookie banners and chat widgets removed, optionally after running page steps or reaching a state described in plain language. */
    "framejet.take_screenshot": {
      input: {
        /**
         * The public http or https page to capture.
         * @format uri
         */
        url: string;
        /** The image format. Defaults to png. */
        format?: "png" | "jpeg";
        /** Whether to capture the whole scrollable page instead of the viewport. */
        full_page?: boolean;
        /**
         * The viewport width in pixels. Defaults to 1280.
         * @minimum 320
         * @maximum 3840
         */
        width?: number;
        /**
         * The viewport height in pixels. Defaults to 800.
         * @minimum 200
         * @maximum 4320
         */
        height?: number;
        /**
         * The device pixel ratio. Defaults to 1.
         * @minimum 1
         * @maximum 3
         */
        dpr?: number;
        /** Whether to remove cookie banners, consent walls and chat widgets before the capture. Defaults to true. */
        clean?: boolean;
        /**
         * An extra wait in milliseconds after the page loads.
         * @minimum 0
         * @maximum 10000
         */
        delay?: number;
        /**
         * Up to 10 steps, with at most 15 seconds of waiting in total, to run before the capture, separated by semicolons: click:<css>, type:<css>=<text>, waitfor:<css>, wait:<ms> or scroll:<px>. Example: click:#accept;waitfor:.pricing
         * @minLength 1
         * @maxLength 1000
         */
        actions?: string;
        /**
         * A plain-language description of the page state to reach before the capture, ending with when to stop. Any text typed into the page must come from values. Example: switch the pricing table to yearly billing and stop when the yearly prices are shown
         * @minLength 1
         * @maxLength 300
         */
        goal?: string;
        /**
         * Exact strings goal mode may type into the page. Framejet never invents text, so a goal that fills a field fails with values_required unless a fitting value is listed. Joined with | separators, the list may total at most 1000 characters.
         * @maxItems 10
         */
        values?: Array<string>;
        /** Whether an identical earlier capture may be returned without spending a screenshot. Defaults to true. */
        cache?: boolean;
      };
      output: {
        /** The captured image stored in transit storage. */
        file: {
          /**
           * The transit URL for downloading the image.
           * @format uri
           */
          transitUrl: string;
          /** The image size in bytes. */
          sizeBytes: number;
          /**
           * The image file name.
           * @minLength 1
           */
          name: string;
          /**
           * The image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** Whether Framejet served an earlier identical capture. */
        cache: "HIT" | "MISS";
        /** Screenshots left in the current month, or null when Framejet does not report it. */
        remaining: number | null;
      };
    };
  }
}
