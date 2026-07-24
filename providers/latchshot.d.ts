import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Render a public web page as a PNG, JPEG, or PDF and upload the bounded artifact to transit storage. */
    "latchshot.capture_page": {
      input: {
        /**
         * The public HTTP or HTTPS page URL. Latchshot rejects private, special-use, credential-bearing, and non-web-port targets.
         * @maxLength 2048
         * @format uri
         */
        url: string;
        /** The artifact family to render. Defaults to screenshot. */
        kind?: "screenshot" | "pdf";
        /** The screenshot image format. PDF renders always return PDF. */
        format?: "png" | "jpeg";
        /**
         * The browser viewport width in CSS pixels. Defaults to 1440.
         * @minimum 320
         * @maximum 2560
         */
        width?: number;
        /**
         * The browser viewport height in CSS pixels. Defaults to 900.
         * @minimum 240
         * @maximum 1440
         */
        height?: number;
        /**
         * The device scale factor for screenshot output. Defaults to 1.
         * @minimum 1
         * @maximum 2
         */
        scale?: number;
        /** Whether to capture the bounded full document height. Defaults to false. */
        fullPage?: boolean;
        /** The browser lifecycle event awaited before the optional delay. Defaults to domcontentloaded. */
        waitUntil?: "load" | "domcontentloaded" | "networkidle";
        /**
         * Additional wait in milliseconds after the lifecycle event. Defaults to 0.
         * @minimum 0
         * @maximum 3000
         */
        delay?: number;
        /**
         * The browser navigation timeout in milliseconds. Defaults to 15000.
         * @minimum 3000
         * @maximum 30000
         */
        timeout?: number;
        /** Whether to emulate a dark color-scheme preference. Defaults to false. */
        darkMode?: boolean;
        /** Whether to emulate reduced motion for a stable capture. Defaults to true. */
        reducedMotion?: boolean;
        /** The paper size for PDF rendering. Defaults to A4. */
        paper?: "A4" | "Letter" | "Legal";
        /** Whether PDF output should use landscape orientation. Defaults to false. */
        landscape?: boolean;
      };
      output: {
        /** A rendered artifact uploaded to connector transit storage. */
        file: {
          /** The generated artifact filename. */
          name: string;
          /** The artifact MIME type. */
          mimetype: "image/png" | "image/jpeg" | "application/pdf";
          /**
           * The transit URL for downloading the rendered artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /** Bounded render diagnostics returned by Latchshot response headers. */
        diagnostics?: {
          /**
           * The server-side render duration in milliseconds.
           * @minimum 0
           */
          renderMs?: number;
          /** Whether browser navigation completed before capture. */
          navigation?: "complete" | "timed-out";
          /** Whether the page used its original fonts or a fallback state. */
          fonts?: "original" | "fallback";
          /** Whether page scripts stayed active or were paused. */
          scripts?: "active" | "paused";
        };
        /** The successful-render quota snapshot returned with the artifact. */
        quota?: {
          /**
           * The successful-render allowance for the current UTC month.
           * @minimum 0
           */
          limit?: number;
          /**
           * The successful renders remaining in the current month.
           * @minimum 0
           */
          remaining?: number;
          /**
           * The start of the next UTC calendar month.
           * @format date-time
           */
          resetAt?: string;
        };
      };
    };
    /** Read the current Latchshot plan, successful-render quota, reset time, upgrade-request status, and informational continuation links. */
    "latchshot.get_usage": {
      input: Record<string, never>;
      output: {
        /** The display identity attached to the API key. */
        customer: {
          /**
           * The display name attached to the API key.
           * @minLength 1
           */
          name: string;
          /**
           * The current Latchshot plan identifier. Known values include trial, launch, build, and scale.
           * @minLength 1
           */
          plan: string;
        };
        /** Current successful-render usage for the UTC calendar month. */
        usage: {
          /**
           * The current UTC calendar month.
           * @pattern ^[0-9]{4}-[0-9]{2}$
           */
          period: string;
          /**
           * The current Latchshot plan identifier. Known values include trial, launch, build, and scale.
           * @minLength 1
           */
          plan: string;
          /**
           * The successful-render allowance for the current month.
           * @minimum 0
           */
          limit: number;
          /**
           * The successful renders remaining in the current month.
           * @minimum 0
           */
          remaining: number;
          /**
           * The start of the next UTC calendar month.
           * @format date-time
           */
          resetAt: string;
          /**
           * The successful renders completed in the current month.
           * @minimum 0
           */
          successful: number;
          /**
           * The failed reserved renders that did not consume quota.
           * @minimum 0
           */
          failed: number;
          /**
           * The render slots currently reserved for in-flight work.
           * @minimum 0
           */
          reserved: number;
          /**
           * The successful output bytes produced in the current month.
           * @minimum 0
           */
          outputBytes: number;
          /**
           * The aggregate successful render duration in milliseconds.
           * @minimum 0
           */
          renderMs: number;
          /**
           * The last usage update time, or null before the first render.
           * @format date-time
           */
          updatedAt: string | null;
        };
        /** The latest paid-plan request attached to the key. */
        upgradeRequest: {
          /**
           * The request identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API key record identifier.
           * @exclusiveMinimum 0
           */
          keyId: number;
          /**
           * The requested paid plan. Known values include launch, build, and scale.
           * @minLength 1
           */
          requestedPlan: string;
          /** The optional request note. */
          note: string | null;
          /**
           * The request review status. Known values include new, contacted, fulfilled, and declined.
           * @minLength 1
           */
          status: string;
          /**
           * When the request was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * When the request was last updated.
           * @format date-time
           */
          updatedAt: string;
        } | null;
        /** Owner-managed continuation links that do not initiate payment or work. */
        links: {
          /**
           * The public Latchshot plan comparison.
           * @format uri
           */
          plans: string;
          /**
           * The human paid-plan request form.
           * @format uri
           */
          requestPaidPlan: string;
          /**
           * The authenticated paid-plan request API documentation.
           * @format uri
           */
          requestPaidPlanDocs: string;
        };
      };
    };
  }
}
