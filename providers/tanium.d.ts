import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a GraphQL document against the connected Tanium Gateway endpoint. */
    "tanium.execute_graphql": {
      input: {
        /**
         * The GraphQL query or mutation document to execute.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
        /** The GraphQL operation name to execute when the document has multiple operations. */
        operationName?: string;
      };
      output: {
        /** The GraphQL data payload returned by Tanium Gateway. */
        data?: Record<string, unknown> | null;
        /** GraphQL errors returned by Tanium Gateway. */
        errors?: Array<{
          /** The GraphQL error message. */
          message?: string;
          /** The GraphQL response path where the error occurred. */
          path?: Array<string | number>;
          /** Source locations related to the GraphQL error. */
          locations?: Array<{
            /** The source line number. */
            line?: number;
            /** The source column number. */
            column?: number;
            [key: string]: unknown;
          }>;
          /** Additional GraphQL error metadata. */
          extensions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** GraphQL response extensions returned by Tanium Gateway. */
        extensions?: Record<string, unknown>;
        /** A semicolon-separated summary of GraphQL error messages. */
        message?: string;
      };
    };
  }
}
