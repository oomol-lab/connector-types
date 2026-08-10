import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get balance and budget information for the connected DumplingAI API key. */
    "dumplingai.get_balance": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get the current contract and metadata for a DumplingAI catalog item. */
    "dumplingai.get_catalog_details": {
      input: {
        /**
         * The capability, provider, or endpoint ID to inspect.
         * @minLength 1
         */
        id: string;
        /** The catalog object type to search or inspect. */
        type: "capability" | "provider" | "endpoint";
        /** Whether to include related capabilities, providers, and endpoints. */
        includeRelated?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List credit transactions for the connected DumplingAI API key. */
    "dumplingai.list_transactions": {
      input: {
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of transactions to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List usage and request logs for the connected DumplingAI API key. */
    "dumplingai.list_usage": {
      input: {
        /** The catalog object type to search or inspect. */
        objectType?: "capability" | "provider" | "endpoint";
        /**
         * The request status to filter by.
         * @minLength 1
         */
        status?: string;
        /**
         * The managed provider ID to filter by.
         * @minLength 1
         */
        provider?: string;
        /**
         * The capability or endpoint ID to filter by.
         * @minLength 1
         */
        objectId?: string;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of usage records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Run a DumplingAI capability or managed provider endpoint with JSON input. */
    "dumplingai.run": {
      input: {
        /** The kind of catalog object to run. */
        type: "capability" | "endpoint";
        /**
         * The capability ID, such as search_news, or endpoint ID, such as firecrawl.scrape.
         * @minLength 1
         */
        id: string;
        /**
         * An optional provider override supported by the selected capability.
         * @minLength 1
         */
        provider?: string;
        /** The JSON input defined by the selected catalog item. */
        input: Record<string, unknown>;
        /** Optional execution response settings. */
        options?: {
          /** Whether to include the managed provider's native response payload. */
          include_native?: boolean;
        };
      };
      output: Record<string, unknown>;
    };
    /** Search DumplingAI capabilities, providers, and managed provider endpoints. */
    "dumplingai.search_catalog": {
      input: {
        /**
         * The natural-language catalog search prompt.
         * @minLength 1
         */
        prompt: string;
        /**
         * The maximum number of catalog matches to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The catalog object type to search or inspect. */
        type?: "capability" | "provider" | "endpoint";
      };
      output: Record<string, unknown>;
    };
  }
}
