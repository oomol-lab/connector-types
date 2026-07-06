import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert a publicly accessible PDF URL to DOCX with ConvertAPI and return temporary file download URLs. */
    "convertapi.convert_pdf_to_docx": {
      input: {
        /**
         * The publicly accessible PDF URL to convert.
         * @format uri
         */
        fileUrl: string;
        /**
         * The optional output file name to request from ConvertAPI. ConvertAPI appends the correct extension when needed.
         * @maxLength 200
         */
        fileName?: string;
        /**
         * The conversion timeout in seconds.
         * @minimum 10
         * @maximum 1200
         */
        timeout?: number;
        /** The password used to open a protected PDF document. */
        password?: string;
        /** The PDF page range to convert, for example 1-10 or 1,3,5. */
        pageRange?: string;
        /** How ConvertAPI should reconstruct the PDF page layout in the DOCX output. */
        layout?: "flowing" | "continuous" | "exact";
        /** How ConvertAPI should apply OCR during conversion. */
        ocrMode?: "auto" | "force" | "never";
        /** The OCR language code to use for text recognition, or auto for automatic detection. */
        ocrLanguage?: "auto" | "ar" | "ca" | "zh" | "da" | "nl" | "en" | "fi" | "fr" | "de" | "el" | "ko" | "it" | "ja" | "no" | "pl" | "pt" | "ro" | "ru" | "sl" | "es" | "sv" | "tr" | "ua" | "th";
        /** The OCR engine ConvertAPI should use for text recognition. */
        ocrEngine?: "native" | "tesseract";
        /** How ConvertAPI should handle PDF annotations in the DOCX output. */
        annotations?: "textBox" | "comment" | "none";
      };
      output: {
        /** The amount deducted from the ConvertAPI balance. */
        conversionCost?: number;
        /**
         * The converted DOCX files returned by ConvertAPI.
         * @minItems 1
         */
        files: Array<{
          /** The converted file name. */
          fileName?: string;
          /** The converted file extension. */
          fileExt?: string;
          /** The converted file size in bytes. */
          fileSize?: number;
          /** The ConvertAPI temporary file ID. */
          fileId?: string;
          /**
           * The ConvertAPI temporary download URL for the converted file.
           * @format uri
           */
          url?: string;
        }>;
      };
    };
  }
}
