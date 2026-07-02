import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert a DocSend document URL to PDF and return JSON-safe download metadata. */
    "docsend_2_pdf.convert": {
      input: {
        /**
         * The DocSend document URL to convert.
         * @format uri
         */
        url: string;
        /**
         * The optional email address required by some protected DocSend links.
         * @format email
         */
        email?: string;
        /**
         * The optional passcode required by password-protected DocSend links.
         * @minLength 1
         */
        passcode?: string;
        /**
         * The preferred PDF filename for the converted document.
         * @minLength 1
         */
        outputName?: string;
        /** Whether to return the PDF bytes as base64 when file transit is unavailable or not desired. */
        returnPdfBase64?: boolean;
      };
      output: {
        /** Whether the conversion completed successfully. */
        succeeded: boolean;
        /** The MIME type returned for the converted PDF. */
        contentType: string;
        /** The PDF size in bytes. */
        contentLength: number;
        /** Rate limit metadata returned by Docsend2pdf when available. */
        rateLimit: {
          /** The maximum requests allowed in the rate-limit window. */
          limit?: number;
          /** The remaining requests in the current rate-limit window. */
          remaining?: number;
          /** The timestamp when the rate-limit window resets. */
          reset?: number;
          /** The retry delay in seconds when rate limited. */
          retryAfter?: number;
        };
        /** The converted PDF delivery metadata. */
        pdf: {
          /** The PDF filename. */
          name: string;
          /** The PDF MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the converted PDF.
           * @format uri
           */
          s3url?: string;
          /** The converted PDF content encoded as base64 when explicitly requested. */
          base64?: string;
        };
      };
    };
  }
}
