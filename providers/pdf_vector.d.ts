import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Ask a question about a document available at a public URL with PDF Vector. */
    "pdf_vector.ask_document": {
      input: {
        /**
         * The publicly accessible URL of the document that PDF Vector should process.
         * @format uri
         */
        documentUrl: string;
        /** The PDF Vector model tier. Defaults to auto, which lets PDF Vector select a tier. */
        model?: "auto" | "nano" | "mini" | "pro" | "max";
        /**
         * An optional external document identifier recorded with PDF Vector usage.
         * @minLength 1
         * @maxLength 512
         */
        documentId?: string;
        /**
         * The question PDF Vector should answer from the document.
         * @minLength 4
         */
        question: string;
      };
      output: {
        /** The Markdown answer to the question. */
        markdown: string;
        /** The number of pages processed by PDF Vector. */
        pageCount: number;
        /** The model tier used by PDF Vector. */
        model: "nano" | "mini" | "pro" | "max";
        /** The number of PDF Vector credits consumed by the request. */
        credits: number;
        /** The PDF Vector request identifier. */
        requestId: number;
        /** The external document identifier when one was supplied. */
        documentId?: string;
        [key: string]: unknown;
      };
    };
    /** Extract structured JSON matching a supplied schema from a document at a public URL with PDF Vector. */
    "pdf_vector.extract_document": {
      input: {
        /**
         * The publicly accessible URL of the document that PDF Vector should process.
         * @format uri
         */
        documentUrl: string;
        /** The PDF Vector model tier. Defaults to auto, which lets PDF Vector select a tier. */
        model?: "auto" | "nano" | "mini" | "pro" | "max";
        /**
         * An optional external document identifier recorded with PDF Vector usage.
         * @minLength 1
         * @maxLength 512
         */
        documentId?: string;
        /**
         * Instructions describing the data to extract from the document.
         * @minLength 4
         */
        prompt: string;
        /** The JSON Schema describing the structure PDF Vector should extract. */
        schema: Record<string, unknown>;
      };
      output: {
        /** The structured data produced from the caller-supplied JSON Schema. */
        data?: unknown;
        /** The number of pages processed by PDF Vector. */
        pageCount: number;
        /** The model tier used by PDF Vector. */
        model: "nano" | "mini" | "pro" | "max";
        /** The number of PDF Vector credits consumed by the request. */
        credits: number;
        /** The PDF Vector request identifier. */
        requestId: number;
        /** The external document identifier when one was supplied. */
        documentId?: string;
        [key: string]: unknown;
      };
    };
    /** Parse a document from a public URL into Markdown with PDF Vector. */
    "pdf_vector.parse_document": {
      input: {
        /**
         * The publicly accessible URL of the document that PDF Vector should process.
         * @format uri
         */
        documentUrl: string;
        /** The PDF Vector model tier. Defaults to auto, which lets PDF Vector select a tier. */
        model?: "auto" | "nano" | "mini" | "pro" | "max";
        /**
         * An optional external document identifier recorded with PDF Vector usage.
         * @minLength 1
         * @maxLength 512
         */
        documentId?: string;
        /** Whether to include page-separated Markdown in addition to the full document text. */
        includePages?: boolean;
      };
      output: {
        /** The full Markdown content extracted from the document. */
        markdown: string;
        /** The number of pages processed by PDF Vector. */
        pageCount: number;
        /** The model tier used by PDF Vector. */
        model: "nano" | "mini" | "pro" | "max";
        /** The number of PDF Vector credits consumed by the request. */
        credits: number;
        /** The PDF Vector request identifier. */
        requestId: number;
        /** The external document identifier when one was supplied. */
        documentId?: string;
        /** The rich HTML representation returned when supported by the model. */
        html?: string;
        /** Page-separated Markdown when includePages is enabled. */
        pages?: Array<{
          /**
           * The 1-based page number in the source document.
           * @minimum 1
           */
          pageNumber: number;
          /** The Markdown content extracted from this page. */
          markdown: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
