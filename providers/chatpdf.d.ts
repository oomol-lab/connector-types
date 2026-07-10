import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Import a publicly reachable PDF URL into ChatPDF and return its source ID. */
    "chatpdf.add_source_url": {
      input: {
        /**
         * The publicly reachable URL of the PDF to import.
         * @format uri
         */
        url: string;
      };
      output: {
        /**
         * The source ID assigned to the imported PDF.
         * @minLength 1
         */
        sourceId: string;
      };
    };
    /** Ask ChatPDF one or more stateless questions about an imported PDF source. */
    "chatpdf.chat": {
      input: {
        /**
         * The ChatPDF source ID for the imported PDF.
         * @minLength 1
         */
        sourceId: string;
        /**
         * The stateless conversation sent to ChatPDF.
         * @minItems 1
         * @maxItems 6
         */
        messages: Array<{
          /** The author role for this message. */
          role: "user" | "assistant";
          /**
           * The message text sent to ChatPDF.
           * @minLength 1
           */
          content: string;
        }>;
        /** Whether ChatPDF should include inline page citations and reference metadata. */
        referenceSources?: boolean;
      };
      output: {
        /** The answer text generated from the PDF. */
        content: string;
        /** The PDF pages cited in the answer. */
        references?: Array<{
          /**
           * The one-based PDF page number used in the answer.
           * @exclusiveMinimum 0
           */
          pageNumber: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete one or more imported PDF sources from ChatPDF. */
    "chatpdf.delete_sources": {
      input: {
        /**
         * The source IDs to delete.
         * @minItems 1
         */
        sources: Array<string>;
      };
      output: {
        /** The source IDs accepted for deletion. */
        deletedSources: Array<string>;
      };
    };
  }
}
