import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a JSON-friendly Beebole GraphQL query or mutation against the connected account. */
    "beebole.execute_graphql": {
      input: {
        /**
         * The GraphQL query or mutation document to execute.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
        /**
         * The GraphQL operation name to execute when the document defines multiple operations.
         * @minLength 1
         */
        operationName?: string;
      };
      output: {
        /** The GraphQL data payload returned by Beebole. */
        data?: unknown;
        /** GraphQL errors returned by Beebole. */
        errors?: Array<{
          /** The GraphQL error message. */
          message?: string;
          /** Source locations associated with the GraphQL error. */
          locations?: Array<{
            /** The one-based source line for the GraphQL error. */
            line?: number;
            /** The one-based source column for the GraphQL error. */
            column?: number;
            [key: string]: unknown;
          }>;
          /** GraphQL response path entries associated with the error. */
          path?: Array<unknown>;
          /** Provider-specific GraphQL error metadata. */
          extensions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Provider-specific GraphQL response extensions. */
        extensions?: Record<string, unknown>;
      };
    };
  }
}
