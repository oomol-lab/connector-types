import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Build a QuickChart image URL from a Chart.js configuration without downloading the rendered image. */
    "quickchart.build_chart_url": {
      input: {
        /** The Chart.js configuration object to render with QuickChart. */
        chart: Record<string, unknown>;
        /**
         * The chart image width in pixels.
         * @minimum 1
         * @maximum 4000
         */
        width?: number;
        /**
         * The chart image height in pixels.
         * @minimum 1
         * @maximum 4000
         */
        height?: number;
        /**
         * The output device pixel ratio. QuickChart accepts 1 or 2.
         * @minimum 1
         * @maximum 2
         */
        devicePixelRatio?: number;
        /**
         * The chart canvas background color as a CSS color, such as transparent, white, or #ffffff.
         * @minLength 1
         */
        backgroundColor?: string;
        /**
         * The Chart.js version to use, such as 2, 3, 4, or a valid Chart.js version string.
         * @minLength 1
         */
        version?: string;
        /** The image format QuickChart should render. */
        format?: "png" | "webp" | "jpg" | "svg" | "pdf";
      };
      output: {
        /**
         * The QuickChart URL that renders the chart image.
         * @format uri
         */
        url: string;
      };
    };
    /** Build a QuickChart QR code image URL for text, URLs, or other compact QR payloads. */
    "quickchart.build_qr_url": {
      input: {
        /**
         * The text or URL to encode in the QR code.
         * @minLength 1
         */
        text: string;
        /**
         * The QR code width and height in pixels.
         * @minimum 1
         * @maximum 4000
         */
        size?: number;
        /**
         * The QR code margin in modules.
         * @minimum 0
         * @maximum 100
         */
        margin?: number;
        /**
         * The dark module color as a CSS color or hex color.
         * @minLength 1
         */
        dark?: string;
        /**
         * The light module color as a CSS color or hex color.
         * @minLength 1
         */
        light?: string;
        /** The QR code error correction level. */
        ecLevel?: "L" | "M" | "Q" | "H";
        /** The QR code image format. */
        format?: "png" | "svg";
      };
      output: {
        /**
         * The QuickChart URL that renders the QR code image.
         * @format uri
         */
        url: string;
      };
    };
    /** Create a QuickChart short URL for a Chart.js configuration and return the URL plus creation metadata. */
    "quickchart.create_chart_short_url": {
      input: {
        /** The Chart.js configuration object to render with QuickChart. */
        chart: Record<string, unknown>;
        /**
         * The chart image width in pixels.
         * @minimum 1
         * @maximum 4000
         */
        width?: number;
        /**
         * The chart image height in pixels.
         * @minimum 1
         * @maximum 4000
         */
        height?: number;
        /**
         * The output device pixel ratio. QuickChart accepts 1 or 2.
         * @minimum 1
         * @maximum 2
         */
        devicePixelRatio?: number;
        /**
         * The chart canvas background color as a CSS color, such as transparent, white, or #ffffff.
         * @minLength 1
         */
        backgroundColor?: string;
        /**
         * The Chart.js version to use, such as 2, 3, 4, or a valid Chart.js version string.
         * @minLength 1
         */
        version?: string;
        /** The image format QuickChart should render. */
        format?: "png" | "webp" | "jpg" | "svg" | "pdf";
        /**
         * An optional QuickChart API key for paid-account short URL retention.
         * @minLength 1
         */
        key?: string;
      };
      output: {
        /** Whether QuickChart reported the short URL creation as successful. */
        success: boolean;
        /**
         * The generated short URL for rendering the chart.
         * @format uri
         */
        url: string | null;
        /** The raw JSON payload returned by QuickChart. */
        raw: unknown;
      };
    };
  }
}
