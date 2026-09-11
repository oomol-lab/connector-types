import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the latest Sanity documents by ID while bypassing the query cache. */
    "sanity.get_documents": {
      input: {
        /**
         * Sanity dataset name.
         * @minLength 1
         */
        dataset: string;
        /**
         * One or more Sanity document identifiers to retrieve.
         * @minItems 1
         */
        documentIds: Array<string>;
        /** Whether to include drafts and release versions matching published document IDs. */
        includeAllVersions?: boolean;
      };
      output: {
        /** Matching Sanity documents. */
        documents: Array<Record<string, unknown>>;
      };
    };
    /** Execute an atomic transaction of Sanity document mutations. */
    "sanity.mutate_documents": {
      input: {
        /**
         * Sanity dataset name.
         * @minLength 1
         */
        dataset: string;
        /**
         * Ordered mutations in the atomic transaction.
         * @minItems 1
         */
        mutations: Array<Record<string, unknown>>;
        /** Whether to return identifiers of modified documents. */
        returnIds?: boolean;
        /** Whether to return the changed documents. */
        returnDocuments?: boolean;
        /** Whether Sanity should add unique _key values to array items. */
        autoGenerateArrayKeys?: boolean;
        /**
         * Caller-supplied transaction identifier.
         * @minLength 1
         */
        transactionId?: string;
        /** Whether to treat cross-dataset references as weak during validation. */
        skipCrossDatasetReferencesValidation?: boolean;
        /** When committed mutations become visible to queries. */
        visibility?: "sync" | "async" | "deferred";
        /** Whether to validate the transaction without committing it. */
        dryRun?: boolean;
        /** Request tag used in Sanity Content Lake request logs. */
        tag?: string;
      };
      output: {
        /** Unique identifier of the mutation transaction. */
        transactionId: string;
        /** Mutation results in transaction order. */
        results: Array<{
          /** Mutation operation performed. */
          operation: string;
          /** Identifier of the affected document. */
          documentId: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Run a GROQ query against a Sanity Content Lake dataset. */
    "sanity.query_documents": {
      input: {
        /**
         * Sanity dataset name.
         * @minLength 1
         */
        dataset: string;
        /**
         * GROQ query to execute.
         * @minLength 1
         */
        query: string;
        /** Named GROQ parameters without the leading dollar sign. */
        params?: Record<string, unknown>;
        /** Query perspective, such as published, drafts, raw, or a release stack. */
        perspective?: string;
        /** Request tag used in Sanity Content Lake request logs. */
        tag?: string;
        /** Whether to include content source map metadata. */
        resultSourceMap?: boolean;
        /** Whether the response should include the submitted query. */
        returnQuery?: boolean;
      };
      output: {
        /** The JSON value produced by the GROQ query. */
        result: unknown;
        /** Server-side query processing time in milliseconds. */
        ms?: number;
        /** The submitted GROQ query when returned by Sanity. */
        query?: string;
        /** Synchronization tags associated with the query result. */
        syncTags?: Array<string>;
        [key: string]: unknown;
      };
    };
  }
}
