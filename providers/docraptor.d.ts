import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a hosted PDF or Excel document with DocRaptor from raw HTML or a public URL and return its download URL. */
    "docraptor.create_hosted_document": {
      input: {
        /**
         * A name for identifying the generated document in DocRaptor.
         * @minLength 1
         */
        name: string;
        /** The output document format. */
        documentType: "pdf" | "xls" | "xlsx";
        /**
         * Raw HTML or XML content to convert into a document.
         * @minLength 1
         */
        documentContent?: string;
        /**
         * A public URL that DocRaptor should fetch and convert.
         * @format uri
         */
        documentUrl?: string;
        /** Whether DocRaptor should create a test document. Test documents may include a watermark. */
        test?: boolean;
        /** Whether DocRaptor should execute JavaScript during rendering. */
        javascript?: boolean;
        /**
         * A specific DocRaptor pipeline version to use.
         * @minLength 1
         */
        pipeline?: string;
        /**
         * The HTTP referrer DocRaptor should use when fetching document assets.
         * @format uri
         */
        referrer?: string;
        /**
         * An arbitrary tag stored with the document for account-side tracking.
         * @minLength 1
         */
        tag?: string;
        /** The DocRaptor validation mode for input HTML. */
        strict?: "none" | "html";
        /**
         * The maximum number of times the hosted document can be downloaded.
         * @exclusiveMinimum 0
         */
        hostedDownloadLimit?: number;
        /**
         * The ISO 8601 date-time when the hosted document should expire.
         * @format date-time
         */
        hostedExpiresAt?: string;
        /** Advanced Prince PDF options forwarded to DocRaptor as-is using official prince_options keys. */
        princeOptions?: Record<string, unknown>;
      };
      output: {
        /**
         * The URL for downloading the hosted document.
         * @format uri
         */
        documentUrl: string;
        /** The hosted document identifier when DocRaptor includes one in the response. */
        documentId: string | null;
        /** The generated PDF page count when DocRaptor includes it in the response. */
        numberOfPages: number | null;
      };
    };
  }
}
