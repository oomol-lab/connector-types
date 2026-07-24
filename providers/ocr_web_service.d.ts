import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get OCR Web Service account limits, remaining pages, subscription plan, and expiration metadata. */
    "ocr_web_service.get_account_information": {
      input: Record<string, never>;
      output: {
        /** The remaining available pages for the current subscription plan. */
        availablePages?: number;
        /** The maximum pages for the current subscription plan. */
        maxPages?: number;
        /** The last processing time returned by OCR Web Service. */
        lastProcessingTime: string | null;
        /** The current subscription plan name. */
        subscriptionPlan: string | null;
        /** The license expiration date returned by OCR Web Service. */
        expirationDate: string | null;
      };
    };
    /** Download a public image or PDF URL through the connector SSRF guard, upload it to OCR Web Service, and return extracted text or output file metadata. */
    "ocr_web_service.process_document_from_url": {
      input: {
        /**
         * The public HTTP or HTTPS URL of the image or PDF file to process.
         * @format uri
         */
        fileUrl: string;
        /**
         * Recognition languages to send to OCR Web Service.
         * @minItems 1
         */
        languages?: Array<string>;
        /**
         * Page numbers or ranges separated by commas, such as 1,3,5-12 or allpages.
         * @minLength 1
         */
        pageRange?: string;
        /** Whether OCR Web Service should convert the image to black and white. */
        toBlackAndWhite?: boolean;
        /**
         * OCR zones to process on each page.
         * @minItems 1
         */
        zones?: Array<{
          /**
           * The top coordinate in pixels from the upper-left corner.
           * @minimum 0
           */
          top: number;
          /**
           * The left coordinate in pixels from the upper-left corner.
           * @minimum 0
           */
          left: number;
          /**
           * The zone height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /**
           * The zone width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
        }>;
        /**
         * Output file formats to generate. OCR Web Service accepts up to two formats.
         * @minItems 1
         * @maxItems 2
         */
        outputFormats?: Array<"pdf" | "doc" | "xls" | "rtf" | "txt">;
        /** Whether OCR Web Service should return extracted text in the response. */
        returnText?: boolean;
        /** Whether OCR Web Service should return recognized word coordinates. */
        returnWords?: boolean;
        /** Whether returned extracted text should preserve newline characters. */
        newline?: boolean;
        /**
         * A task description that OCR Web Service returns in the response.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** The extracted OCR text concatenated from all zones and pages. */
        text: string;
        /** The raw OCR text matrix returned by OCR Web Service as zones by pages. */
        ocrText: Array<Array<string>>;
        /** The remaining available pages after this task. */
        availablePages?: number;
        /** The number of pages processed for this task. */
        processedPages?: number;
        /** The OCR Web Service output file URL when an output format was requested. */
        outputFileUrl: string | null;
        /** The task description echoed by OCR Web Service. */
        taskDescription: string | null;
      };
    };
  }
}
