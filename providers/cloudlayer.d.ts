import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an asynchronous cloudlayer.io HTML-to-PDF job from base64-encoded HTML and return the new job status. */
    "cloudlayer.create_html_pdf_job": {
      input: {
        /**
         * The output page format such as `a4` or `letter`.
         * @minLength 1
         */
        format?: string;
        /** The optional page margin overrides forwarded to cloudlayer.io. */
        margin?: {
          /**
           * The top page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          top?: string;
          /**
           * The right page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          right?: string;
          /**
           * The bottom page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          bottom?: string;
          /**
           * The left page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          left?: string;
        };
        /** Whether the generated PDF should include background graphics and colors. */
        printBackground?: boolean;
        /**
         * The page load event to wait for before rendering, such as `load` or `networkidle0`.
         * @minLength 1
         */
        waitUntil?: string;
        /**
         * The maximum page load time in milliseconds before rendering fails.
         * @minimum 1
         */
        timeout?: number;
        /**
         * The optional output filename hint for the generated PDF.
         * @minLength 1
         */
        filename?: string;
        /**
         * The base64-encoded HTML document to render as a PDF.
         * @minLength 1
         */
        html: string;
      };
      output: {
        /**
         * The cloudlayer.io job identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The cloudlayer.io user identifier that owns the job.
         * @minLength 1
         */
        uid?: string;
        /**
         * The upstream job type such as `html-pdf` or `url-pdf`.
         * @minLength 1
         */
        type?: string;
        /**
         * The current job status such as `pending`, `success`, or `error`.
         * @minLength 1
         */
        status: string;
        /** The upstream request parameters recorded for the job when available. */
        params?: Record<string, unknown>;
        /** The generated output size in bytes when available. */
        size?: number;
        /** The upstream processing time in milliseconds when available. */
        processTime?: number;
        /** The upstream API credit cost charged for this job when available. */
        apiCreditCost?: number;
        /**
         * The upstream worker identifier that processed the job.
         * @minLength 1
         */
        workerName?: string;
        /** The Unix epoch timestamp in milliseconds when the job was created. */
        timestamp?: number;
      };
    };
    /** Create an asynchronous cloudlayer.io template-to-PDF job from a base64-encoded template and JSON data. */
    "cloudlayer.create_template_pdf_job": {
      input: {
        /**
         * The output page format such as `a4` or `letter`.
         * @minLength 1
         */
        format?: string;
        /** The optional page margin overrides forwarded to cloudlayer.io. */
        margin?: {
          /**
           * The top page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          top?: string;
          /**
           * The right page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          right?: string;
          /**
           * The bottom page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          bottom?: string;
          /**
           * The left page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          left?: string;
        };
        /** Whether the generated PDF should include background graphics and colors. */
        printBackground?: boolean;
        /**
         * The page load event to wait for before rendering, such as `load` or `networkidle0`.
         * @minLength 1
         */
        waitUntil?: string;
        /**
         * The maximum page load time in milliseconds before rendering fails.
         * @minimum 1
         */
        timeout?: number;
        /**
         * The optional output filename hint for the generated PDF.
         * @minLength 1
         */
        filename?: string;
        /**
         * The base64-encoded template source to render as a PDF.
         * @minLength 1
         */
        template: string;
        /** The JSON object used to populate the Nunjucks template variables. */
        data: Record<string, unknown>;
      };
      output: {
        /**
         * The cloudlayer.io job identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The cloudlayer.io user identifier that owns the job.
         * @minLength 1
         */
        uid?: string;
        /**
         * The upstream job type such as `html-pdf` or `url-pdf`.
         * @minLength 1
         */
        type?: string;
        /**
         * The current job status such as `pending`, `success`, or `error`.
         * @minLength 1
         */
        status: string;
        /** The upstream request parameters recorded for the job when available. */
        params?: Record<string, unknown>;
        /** The generated output size in bytes when available. */
        size?: number;
        /** The upstream processing time in milliseconds when available. */
        processTime?: number;
        /** The upstream API credit cost charged for this job when available. */
        apiCreditCost?: number;
        /**
         * The upstream worker identifier that processed the job.
         * @minLength 1
         */
        workerName?: string;
        /** The Unix epoch timestamp in milliseconds when the job was created. */
        timestamp?: number;
      };
    };
    /** Create an asynchronous cloudlayer.io URL-to-PDF job for one public webpage and return the new job status. */
    "cloudlayer.create_url_pdf_job": {
      input: {
        /**
         * The output page format such as `a4` or `letter`.
         * @minLength 1
         */
        format?: string;
        /** The optional page margin overrides forwarded to cloudlayer.io. */
        margin?: {
          /**
           * The top page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          top?: string;
          /**
           * The right page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          right?: string;
          /**
           * The bottom page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          bottom?: string;
          /**
           * The left page margin, such as `0.5in` or `20px`.
           * @minLength 1
           */
          left?: string;
        };
        /** Whether the generated PDF should include background graphics and colors. */
        printBackground?: boolean;
        /**
         * The page load event to wait for before rendering, such as `load` or `networkidle0`.
         * @minLength 1
         */
        waitUntil?: string;
        /**
         * The maximum page load time in milliseconds before rendering fails.
         * @minimum 1
         */
        timeout?: number;
        /**
         * The optional output filename hint for the generated PDF.
         * @minLength 1
         */
        filename?: string;
        /**
         * The public webpage URL to render as a PDF.
         * @format uri
         */
        url: string;
      };
      output: {
        /**
         * The cloudlayer.io job identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The cloudlayer.io user identifier that owns the job.
         * @minLength 1
         */
        uid?: string;
        /**
         * The upstream job type such as `html-pdf` or `url-pdf`.
         * @minLength 1
         */
        type?: string;
        /**
         * The current job status such as `pending`, `success`, or `error`.
         * @minLength 1
         */
        status: string;
        /** The upstream request parameters recorded for the job when available. */
        params?: Record<string, unknown>;
        /** The generated output size in bytes when available. */
        size?: number;
        /** The upstream processing time in milliseconds when available. */
        processTime?: number;
        /** The upstream API credit cost charged for this job when available. */
        apiCreditCost?: number;
        /**
         * The upstream worker identifier that processed the job.
         * @minLength 1
         */
        workerName?: string;
        /** The Unix epoch timestamp in milliseconds when the job was created. */
        timestamp?: number;
      };
    };
    /** Get the current cloudlayer.io account usage, limits, and job totals for the API key. */
    "cloudlayer.get_account": {
      input: Record<string, never>;
      output: {
        /** The current cloudlayer.io account usage snapshot. */
        account: {
          /**
           * The unique cloudlayer.io account identifier.
           * @minLength 1
           */
          uid: string;
          /**
           * The subscription price identifier for the current account.
           * @minLength 1
           */
          subscription: string;
          /**
           * The billing model reported by cloudlayer.io, such as `limit` or `usage`.
           * @minLength 1
           */
          subType: string;
          /** Whether the current subscription is active. */
          subActive: boolean;
          /** The API calls used in the current billing period. */
          calls: number;
          /** The maximum API calls allowed in the current billing period. */
          callsLimit: number;
          /** The remaining API credits when the account uses usage-based billing. */
          credit?: number;
          /** The total generated output bytes in the current billing period. */
          bytesTotal: number;
          /** The maximum generated output bytes allowed in the current billing period. */
          bytesLimit: number;
          /** The total rendering compute time used in milliseconds for the current billing period. */
          computeTimeTotal: number;
          /** The maximum rendering compute time allowed in milliseconds for the current billing period. */
          computeTimeLimit: number;
          /** The currently used cloud storage in bytes for stored generated assets. */
          storageUsed: number;
          /** The maximum cloud storage allowed in bytes for stored generated assets. */
          storageLimit: number;
          /** The total completed jobs for the current billing period. */
          totalJobs: number;
          /** The number of successfully completed jobs. */
          successJobs: number;
          /** The number of failed jobs. */
          errorJobs: number;
        };
      };
    };
    /** Get one generated cloudlayer.io asset by asset ID, including its direct download URL. */
    "cloudlayer.get_asset": {
      input: {
        /**
         * The cloudlayer.io asset identifier to retrieve.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** The requested cloudlayer.io asset. */
        asset: {
          /**
           * The cloudlayer.io asset identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The job identifier that produced the asset.
           * @minLength 1
           */
          jobId: string;
          /**
           * The generated file extension such as `pdf` or `png`.
           * @minLength 1
           */
          ext: string;
          /**
           * The generated file MIME type.
           * @minLength 1
           */
          type: string;
          /** The generated file size in bytes. */
          size: number;
          /**
           * The pre-authenticated download URL for the generated file.
           * @format uri
           */
          url: string;
          /** The Unix epoch timestamp in milliseconds when the asset was created. */
          timestamp: number;
        };
      };
    };
    /** Get one cloudlayer.io job by job ID to inspect status, timing, and request metadata. */
    "cloudlayer.get_job": {
      input: {
        /**
         * The cloudlayer.io job identifier to retrieve.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** The requested cloudlayer.io job. */
        job: {
          /**
           * The cloudlayer.io job identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The cloudlayer.io user identifier that owns the job.
           * @minLength 1
           */
          uid?: string;
          /**
           * The upstream job type such as `html-pdf` or `url-pdf`.
           * @minLength 1
           */
          type?: string;
          /**
           * The current job status such as `pending`, `success`, or `error`.
           * @minLength 1
           */
          status: string;
          /** The upstream request parameters recorded for the job when available. */
          params?: Record<string, unknown>;
          /** The generated output size in bytes when available. */
          size?: number;
          /** The upstream processing time in milliseconds when available. */
          processTime?: number;
          /** The upstream API credit cost charged for this job when available. */
          apiCreditCost?: number;
          /**
           * The upstream worker identifier that processed the job.
           * @minLength 1
           */
          workerName?: string;
          /** The Unix epoch timestamp in milliseconds when the job was created. */
          timestamp?: number;
        };
      };
    };
    /** List recent generated cloudlayer.io assets for the current account with optional cursor pagination. */
    "cloudlayer.list_assets": {
      input: {
        /**
         * The number of assets to return, between 1 and 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The asset ID to paginate after for cursor-based listing.
         * @minLength 1
         */
        startAfterId?: string;
      };
      output: {
        /** The recent cloudlayer.io assets returned by the API. */
        assets: Array<{
          /**
           * The cloudlayer.io asset identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The job identifier that produced the asset.
           * @minLength 1
           */
          jobId: string;
          /**
           * The generated file extension such as `pdf` or `png`.
           * @minLength 1
           */
          ext: string;
          /**
           * The generated file MIME type.
           * @minLength 1
           */
          type: string;
          /** The generated file size in bytes. */
          size: number;
          /**
           * The pre-authenticated download URL for the generated file.
           * @format uri
           */
          url: string;
          /** The Unix epoch timestamp in milliseconds when the asset was created. */
          timestamp: number;
        }>;
      };
    };
    /** List recent cloudlayer.io jobs for the current account with optional cursor pagination. */
    "cloudlayer.list_jobs": {
      input: {
        /**
         * The number of jobs to return, between 1 and 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The job ID to paginate after for cursor-based listing.
         * @minLength 1
         */
        startAfterId?: string;
      };
      output: {
        /** The recent cloudlayer.io jobs returned by the API. */
        jobs: Array<{
          /**
           * The cloudlayer.io job identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The cloudlayer.io user identifier that owns the job.
           * @minLength 1
           */
          uid?: string;
          /**
           * The upstream job type such as `html-pdf` or `url-pdf`.
           * @minLength 1
           */
          type?: string;
          /**
           * The current job status such as `pending`, `success`, or `error`.
           * @minLength 1
           */
          status: string;
          /** The upstream request parameters recorded for the job when available. */
          params?: Record<string, unknown>;
          /** The generated output size in bytes when available. */
          size?: number;
          /** The upstream processing time in milliseconds when available. */
          processTime?: number;
          /** The upstream API credit cost charged for this job when available. */
          apiCreditCost?: number;
          /**
           * The upstream worker identifier that processed the job.
           * @minLength 1
           */
          workerName?: string;
          /** The Unix epoch timestamp in milliseconds when the job was created. */
          timestamp?: number;
        }>;
      };
    };
  }
}
