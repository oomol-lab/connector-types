import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract structured JSON from a Reducto-supported document URL or file id using a caller-supplied JSON Schema. */
    "reducto.extract_data": {
      input: {
        /**
         * A public URL, presigned URL, reducto:// file identifier, or jobid:// parse job identifier accepted by Reducto.
         * @minLength 1
         * @pattern \S
         */
        documentUrl: string;
        /** JSON Schema object that tells Reducto which fields to extract. */
        schema: Record<string, unknown>;
        /**
         * Optional system prompt used by Reducto extraction.
         * @minLength 1
         * @pattern \S
         */
        systemPrompt?: string;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        parsing?: Record<string, unknown>;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The Reducto job identifier when returned. */
        jobId: string | null;
        /** The Reducto processing duration in seconds when returned. */
        duration: number | null;
        /** The temporary processed PDF URL when returned. */
        pdfUrl: string | null;
        /** The Reducto Studio result URL when returned. */
        studioLink: string | null;
        /** Usage counters returned by Reducto. */
        usage: {
          /** The number of document pages processed by Reducto. */
          num_pages: number;
          [key: string]: unknown;
        } | null;
        /** The Reducto result payload. */
        result: unknown;
        /** The raw Reducto response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Parse a Reducto-supported document URL or file id into structured chunks, blocks, and document metadata. */
    "reducto.parse_document": {
      input: {
        /**
         * A public URL, presigned URL, reducto:// file identifier, or jobid:// parse job identifier accepted by Reducto.
         * @minLength 1
         * @pattern \S
         */
        documentUrl: string;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        enhance?: Record<string, unknown>;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        retrieval?: Record<string, unknown>;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        formatting?: Record<string, unknown>;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        spreadsheet?: Record<string, unknown>;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The Reducto job identifier when returned. */
        jobId: string | null;
        /** The Reducto processing duration in seconds when returned. */
        duration: number | null;
        /** The temporary processed PDF URL when returned. */
        pdfUrl: string | null;
        /** The Reducto Studio result URL when returned. */
        studioLink: string | null;
        /** Usage counters returned by Reducto. */
        usage: {
          /** The number of document pages processed by Reducto. */
          num_pages: number;
          [key: string]: unknown;
        } | null;
        /** The Reducto result payload. */
        result: unknown;
        /** The raw Reducto response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Split a Reducto-supported document URL or file id into named page sections using natural-language section descriptions. */
    "reducto.split_document": {
      input: {
        /**
         * A public URL, presigned URL, reducto:// file identifier, or jobid:// parse job identifier accepted by Reducto.
         * @minLength 1
         * @pattern \S
         */
        documentUrl: string;
        /**
         * The Reducto section descriptions to identify in the document.
         * @minItems 1
         */
        splitDescription: Array<{
          /**
           * The section or partition name Reducto should identify.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * Natural-language criteria that describe this section.
           * @minLength 1
           * @pattern \S
           */
          description: string;
          /**
           * Optional Reducto partition key used for partition-aware splitting.
           * @minLength 1
           */
          partition_key?: string | null;
        }>;
        /**
         * Optional prompt that defines global rules for splitting.
         * @minLength 1
         * @pattern \S
         */
        splitRules?: string;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        parsing?: Record<string, unknown>;
        /** Reducto configuration object forwarded to the official API using Reducto option names. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The page numbers mapped by Reducto for each section name. */
        sectionMapping: Record<string, Array<number>> | null;
        /** The split records returned by Reducto. */
        splits: Array<{
          /** The split section name. */
          name: string;
          /** One-indexed Reducto page numbers for the split. */
          pages: Array<number>;
          [key: string]: unknown;
        }>;
        /** Usage counters returned by Reducto. */
        usage: {
          /** The number of document pages processed by Reducto. */
          num_pages: number;
          [key: string]: unknown;
        } | null;
        /** The raw Reducto result object. */
        result: unknown;
        /** The raw Reducto split response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
