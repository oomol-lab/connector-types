import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Summarize text or a document URL with Kagi, optionally translating the summary or extracting key takeaways. */
    "kagi.summarize": {
      input: Record<string, unknown>;
      output: {
        /** Request metadata, including request ID, processing time, and API balance when available. */
        meta?: Record<string, unknown>;
        /** Generated summary and token usage. */
        data: {
          /** Generated summary text. */
          output: string;
          /** Number of tokens processed. */
          tokens: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
