import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run a Bitquery V2 GraphQL HTTP query against the canonical streaming endpoint and return the GraphQL response envelope. */
    "bitquery.run_query": {
      input: {
        /**
         * The GraphQL query document to send to Bitquery.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
        /**
         * The GraphQL operation name to execute when the query document defines multiple operations.
         * @minLength 1
         */
        operationName?: string;
      };
      output: {
        /** The GraphQL data payload returned by Bitquery. */
        data?: unknown;
        /** GraphQL errors returned by Bitquery. */
        errors?: Array<{
          /** The GraphQL error message. */
          message?: string;
          /** GraphQL source locations associated with the error. */
          locations?: Array<{
            /** The one-based source line. */
            line?: number;
            /** The one-based source column. */
            column?: number;
            [key: string]: unknown;
          }>;
          /** The GraphQL response path associated with the error. */
          path?: Array<unknown>;
          /** Provider-specific GraphQL error extensions. */
          extensions?: unknown;
          [key: string]: unknown;
        }>;
        /** Provider-specific GraphQL response extensions. */
        extensions?: unknown;
        [key: string]: unknown;
      };
    };
  }
}
