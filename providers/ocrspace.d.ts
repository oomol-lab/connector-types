import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract text from a public image or uploaded Base64 file by calling OCR.space and returning normalized page results. */
    "ocrspace.extract_text": {
      input: {
        /**
         * The public image or PDF URL to parse with OCR.space.
         * @format uri
         */
        url?: string;
        /**
         * The Base64-encoded image or PDF content to upload.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * The filename used when uploading Base64 content to OCR.space.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The MIME type used when uploading Base64 content to OCR.space.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * The OCR language code to send upstream.
         * @minLength 1
         */
        language?: string;
        /** Whether OCR.space should auto-detect page orientation. */
        detectOrientation?: boolean;
        /** Whether OCR.space should scale the input image. */
        scale?: boolean;
        /** Whether OCR.space should return word-level overlay metadata. */
        isOverlayRequired?: boolean;
        /** Whether OCR.space should apply table-aware parsing when possible. */
        isTable?: boolean;
        /** The OCR engine version to request from OCR.space. */
        ocrEngine?: "1" | "2" | "3";
      };
      output: {
        /** The concatenated OCR text from all successful pages. */
        text: string;
        /** The normalized OCR page results returned by OCR.space. */
        pages: Array<{
          /** The 1-based page number in the OCR result. */
          pageNumber: number;
          /** The parsed text returned for this page. */
          parsedText: string;
          /** The page-level OCR parse exit code returned by OCR.space. */
          fileParseExitCode: number;
          /** The page-level error message, when present. */
          errorMessage: string | null;
          /** The page-level error details, when present. */
          errorDetails: string | null;
          /** Optional OCR text overlay metadata returned by OCR.space. */
          textOverlay: Record<string, unknown> | null;
        }>;
        /** The top-level OCR exit code returned by OCR.space. */
        ocrExitCode: number;
        /** Whether OCR.space marked the request as errored during processing. */
        isErroredOnProcessing: boolean;
        /** The top-level OCR error message, when present. */
        errorMessage: string | null;
        /** The top-level OCR error details, when present. */
        errorDetails: string | null;
        /** The OCR processing time in milliseconds returned by OCR.space. */
        processingTimeInMilliseconds: string;
      };
    };
    /** Fetch OCR.space conversion statistics for the current month or the previous month. */
    "ocrspace.get_conversion_stats": {
      input: {
        /** Optional OCR.space period selector for the previous month. */
        startDate?: "lastMonth";
      };
      output: {
        /** The OCR.space engine 1 conversion count. */
        engine1: number;
        /** The OCR.space engine 2 conversion count. */
        engine2: number;
        /** The total OCR.space conversion count. */
        total: number;
        /** The logical period represented by the returned conversion counts. */
        period: "currentMonth" | "lastMonth";
      };
    };
  }
}
