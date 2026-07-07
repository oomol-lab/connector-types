import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a Contentful GraphQL Content API query against a space and environment. */
    "contentful_graphql.execute_query": {
      input: {
        /**
         * Contentful space identifier. Defaults to the space configured on the connection when omitted.
         * @minLength 1
         */
        spaceId?: string;
        /**
         * Contentful environment identifier. Defaults to the environment configured on the connection when omitted.
         * @minLength 1
         */
        environmentId?: string;
        /** Contentful GraphQL API region. */
        region?: "global" | "eu";
        /**
         * The GraphQL query document to execute.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name and encoded as JSON values. */
        variables?: Record<string, unknown>;
        /**
         * The GraphQL operation name to execute when the document defines multiple operations.
         * @minLength 1
         */
        operationName?: string;
      };
      output: {
        /** The GraphQL data object returned by Contentful, or null when execution failed. */
        data?: Record<string, unknown> | null;
        /** GraphQL errors returned by Contentful. */
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
          /** Provider-specific GraphQL error extensions. */
          extensions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** GraphQL response extensions returned by Contentful. */
        extensions?: Record<string, unknown>;
        /** The Contentful request identifier response header. */
        requestId?: string;
        /** The Contentful GraphQL query cost response header. */
        queryCost?: number;
        /** The per-second Contentful rate limit response header. */
        rateLimitSecondLimit?: number;
        /** Seconds until the Contentful rate limit resets. */
        rateLimitReset?: number;
      };
    };
  }
}
