import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch fully rendered HTML content from Browserless. */
    "browserless.fetch_content": {
      input: {
        /**
         * The public URL Browserless should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * The inline HTML Browserless should render instead of navigating to a URL.
         * @minLength 1
         */
        html?: string;
        /** Whether Browserless should continue when asynchronous wait steps fail or time out. */
        bestAttempt?: boolean;
        /** Navigation options forwarded to Browserless gotoOptions. */
        gotoOptions?: {
          /**
           * The maximum navigation time in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** When Browserless should consider navigation successful. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        };
        /** A Browserless waitForEvent configuration. */
        waitForEvent?: {
          /**
           * The page event name Browserless should wait for.
           * @minLength 1
           */
          event: string;
          /**
           * The maximum time in milliseconds to wait for the event.
           * @minimum 0
           */
          timeout?: number;
        };
        /**
         * The fixed time in milliseconds Browserless should wait before returning.
         * @minimum 0
         */
        waitForTimeout?: number;
        /** A Browserless waitForSelector configuration. */
        waitForSelector?: {
          /**
           * The CSS selector Browserless should wait for.
           * @minLength 1
           */
          selector: string;
          /**
           * The maximum time in milliseconds to wait for the selector.
           * @minimum 0
           */
          timeout?: number;
          /** Whether the selector must become visible before continuing. */
          visible?: boolean;
          /** Whether the selector must become hidden before continuing. */
          hidden?: boolean;
        };
        /**
         * The browser resource types Browserless should block during navigation.
         * @minItems 1
         */
        rejectResourceTypes?: Array<string>;
        /**
         * The request URL patterns Browserless should block during navigation.
         * @minItems 1
         */
        rejectRequestPattern?: Array<string>;
        /**
         * The scripts Browserless should inject before producing the final output.
         * @minItems 1
         */
        addScriptTag?: Array<{
          /**
           * The absolute URL of the external script or stylesheet to inject.
           * @minLength 1
           * @format uri
           */
          url?: string;
          /**
           * The inline script or stylesheet content to inject.
           * @minLength 1
           */
          content?: string;
        }>;
        /**
         * The stylesheets Browserless should inject before producing the final output.
         * @minItems 1
         */
        addStyleTag?: Array<{
          /**
           * The absolute URL of the external script or stylesheet to inject.
           * @minLength 1
           * @format uri
           */
          url?: string;
          /**
           * The inline script or stylesheet content to inject.
           * @minLength 1
           */
          content?: string;
        }>;
      };
      output: {
        /** The fully rendered HTML content returned by Browserless. */
        html: string;
      };
    };
    /** Generate a Browserless PDF file and return it as base64 content. */
    "browserless.generate_pdf": {
      input: {
        /**
         * The public URL Browserless should render into a PDF.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * The inline HTML Browserless should render into a PDF.
         * @minLength 1
         */
        html?: string;
        /** The PDF options forwarded to Browserless. */
        options?: {
          /** The paper format Browserless should use. */
          format?: "Letter" | "Legal" | "Tabloid" | "Ledger" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6";
          /** Whether Browserless should print CSS backgrounds. */
          printBackground?: boolean;
          /** Whether Browserless should include header and footer templates. */
          displayHeaderFooter?: boolean;
        };
        /** Whether Browserless should continue when asynchronous wait steps fail or time out. */
        bestAttempt?: boolean;
        /** Navigation options forwarded to Browserless gotoOptions. */
        gotoOptions?: {
          /**
           * The maximum navigation time in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** When Browserless should consider navigation successful. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        };
        /** A Browserless waitForEvent configuration. */
        waitForEvent?: {
          /**
           * The page event name Browserless should wait for.
           * @minLength 1
           */
          event: string;
          /**
           * The maximum time in milliseconds to wait for the event.
           * @minimum 0
           */
          timeout?: number;
        };
        /**
         * The fixed time in milliseconds Browserless should wait before returning.
         * @minimum 0
         */
        waitForTimeout?: number;
        /** A Browserless waitForSelector configuration. */
        waitForSelector?: {
          /**
           * The CSS selector Browserless should wait for.
           * @minLength 1
           */
          selector: string;
          /**
           * The maximum time in milliseconds to wait for the selector.
           * @minimum 0
           */
          timeout?: number;
          /** Whether the selector must become visible before continuing. */
          visible?: boolean;
          /** Whether the selector must become hidden before continuing. */
          hidden?: boolean;
        };
        /**
         * The browser resource types Browserless should block during navigation.
         * @minItems 1
         */
        rejectResourceTypes?: Array<string>;
        /**
         * The request URL patterns Browserless should block during navigation.
         * @minItems 1
         */
        rejectRequestPattern?: Array<string>;
        /**
         * The scripts Browserless should inject before producing the final output.
         * @minItems 1
         */
        addScriptTag?: Array<{
          /**
           * The absolute URL of the external script or stylesheet to inject.
           * @minLength 1
           * @format uri
           */
          url?: string;
          /**
           * The inline script or stylesheet content to inject.
           * @minLength 1
           */
          content?: string;
        }>;
        /**
         * The stylesheets Browserless should inject before producing the final output.
         * @minItems 1
         */
        addStyleTag?: Array<{
          /**
           * The absolute URL of the external script or stylesheet to inject.
           * @minLength 1
           * @format uri
           */
          url?: string;
          /**
           * The inline script or stylesheet content to inject.
           * @minLength 1
           */
          content?: string;
        }>;
      };
      output: {
        /**
         * The Browserless binary response encoded as a base64 string.
         * @minLength 1
         */
        contentBase64: string;
        /**
         * The MIME type returned by Browserless for the generated file.
         * @minLength 1
         */
        contentType: string;
        /**
         * The suggested output file name derived from the Browserless response.
         * @minLength 1
         */
        fileName: string;
      };
    };
    /** Generate a Browserless screenshot and return it as base64 content. */
    "browserless.take_screenshot": {
      input: {
        /**
         * The public URL Browserless should capture.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * The inline HTML Browserless should capture instead of navigating to a URL.
         * @minLength 1
         */
        html?: string;
        /** The screenshot options forwarded to Browserless. */
        options?: {
          /** The screenshot image format. */
          type?: "png" | "jpeg" | "webp";
          /** Whether Browserless should capture the full scrollable page. */
          fullPage?: boolean;
          /**
           * The output image quality from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          quality?: number;
          /** Whether Browserless should omit the page background. */
          omitBackground?: boolean;
          /** The clipping rectangle for the captured screenshot. */
          clip?: {
            /**
             * The X coordinate in CSS pixels.
             * @minimum 0
             */
            x: number;
            /**
             * The Y coordinate in CSS pixels.
             * @minimum 0
             */
            y: number;
            /**
             * The clip width in CSS pixels.
             * @minimum 1
             */
            width: number;
            /**
             * The clip height in CSS pixels.
             * @minimum 1
             */
            height: number;
          };
        };
        /** Whether Browserless should continue when asynchronous wait steps fail or time out. */
        bestAttempt?: boolean;
        /** Navigation options forwarded to Browserless gotoOptions. */
        gotoOptions?: {
          /**
           * The maximum navigation time in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** When Browserless should consider navigation successful. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        };
        /** A Browserless waitForEvent configuration. */
        waitForEvent?: {
          /**
           * The page event name Browserless should wait for.
           * @minLength 1
           */
          event: string;
          /**
           * The maximum time in milliseconds to wait for the event.
           * @minimum 0
           */
          timeout?: number;
        };
        /**
         * The fixed time in milliseconds Browserless should wait before returning.
         * @minimum 0
         */
        waitForTimeout?: number;
        /** A Browserless waitForSelector configuration. */
        waitForSelector?: {
          /**
           * The CSS selector Browserless should wait for.
           * @minLength 1
           */
          selector: string;
          /**
           * The maximum time in milliseconds to wait for the selector.
           * @minimum 0
           */
          timeout?: number;
          /** Whether the selector must become visible before continuing. */
          visible?: boolean;
          /** Whether the selector must become hidden before continuing. */
          hidden?: boolean;
        };
        /**
         * The browser resource types Browserless should block during navigation.
         * @minItems 1
         */
        rejectResourceTypes?: Array<string>;
        /**
         * The request URL patterns Browserless should block during navigation.
         * @minItems 1
         */
        rejectRequestPattern?: Array<string>;
        /**
         * The scripts Browserless should inject before producing the final output.
         * @minItems 1
         */
        addScriptTag?: Array<{
          /**
           * The absolute URL of the external script or stylesheet to inject.
           * @minLength 1
           * @format uri
           */
          url?: string;
          /**
           * The inline script or stylesheet content to inject.
           * @minLength 1
           */
          content?: string;
        }>;
        /**
         * The stylesheets Browserless should inject before producing the final output.
         * @minItems 1
         */
        addStyleTag?: Array<{
          /**
           * The absolute URL of the external script or stylesheet to inject.
           * @minLength 1
           * @format uri
           */
          url?: string;
          /**
           * The inline script or stylesheet content to inject.
           * @minLength 1
           */
          content?: string;
        }>;
      };
      output: {
        /**
         * The Browserless binary response encoded as a base64 string.
         * @minLength 1
         */
        contentBase64: string;
        /**
         * The MIME type returned by Browserless for the generated file.
         * @minLength 1
         */
        contentType: string;
        /**
         * The suggested output file name derived from the Browserless response.
         * @minLength 1
         */
        fileName: string;
      };
    };
  }
}
