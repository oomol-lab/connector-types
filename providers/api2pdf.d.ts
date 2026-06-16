import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert raw Markdown to PDF with API2PDF and return the generated PDF URL plus conversion metadata. */
    "api2pdf.markdown_to_pdf": {
      input: {
        /**
         * The raw Markdown content to convert to PDF.
         * @minLength 1
         */
        markdown: string;
        /**
         * An optional output PDF file name sent to API2PDF.
         * @minLength 1
         */
        fileName?: string;
        /** Whether API2PDF should mark the generated PDF for inline display when possible. */
        inline?: boolean;
        /** Advanced Headless Chrome PDF options forwarded to API2PDF as-is. Use the official API2PDF option keys supported by the /chrome/pdf/markdown endpoint. */
        options?: Record<string, unknown>;
      };
      output: {
        /** The temporary API2PDF URL for downloading the PDF. */
        pdfUrl: string | null;
        /** Whether API2PDF reported the Markdown-to-PDF conversion as successful. */
        success: boolean;
        /** The API2PDF response identifier for this conversion request. */
        responseId: string | null;
        /** The conversion cost in USD when returned by API2PDF. */
        cost: number | null;
        /** The input size in megabytes when returned by API2PDF. */
        mbIn: number | null;
        /** The output size in megabytes when returned by API2PDF. */
        mbOut: number | null;
        /** The processing duration in seconds when returned by API2PDF. */
        seconds: number | null;
        /** The upstream API2PDF error string when one was returned. */
        error: string | null;
      };
    };
  }
}
