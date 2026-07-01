import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the active BlazeMeter sessions for the configured API key. */
    "blaze_meter_functional.get_active_sessions": {
      input: Record<string, never>;
      output: {
        /** The BlazeMeter API version returned by the endpoint. */
        apiVersion: number | null;
        /** The BlazeMeter request identifier. */
        requestId: string | null;
        /** The error object returned by BlazeMeter when a request fails. */
        error: {
          /** The numeric BlazeMeter error code. */
          code?: number | null;
          /** The BlazeMeter error message. */
          message?: string | null;
        } | null;
        /** The result payload returned by BlazeMeter. */
        result: unknown;
        /** The total number of matching records when returned. */
        total: number | null;
        /** The response limit when returned. */
        limit: number | null;
        /** The response offset when returned. */
        skip: number | null;
        /** The number of hidden records when returned. */
        hidden: number | null;
        /** The raw BlazeMeter response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one BlazeMeter Functional multi-test by collection ID. */
    "blaze_meter_functional.get_multi_test": {
      input: {
        /**
         * The BlazeMeter multi-test collection ID to retrieve.
         * @minimum 0
         */
        collectionId: number;
        /** Whether BlazeMeter should include embedded test objects. */
        populateTests?: boolean;
      };
      output: {
        /** The BlazeMeter API version returned by the endpoint. */
        apiVersion: number | null;
        /** The BlazeMeter request identifier. */
        requestId: string | null;
        /** The error object returned by BlazeMeter when a request fails. */
        error: {
          /** The numeric BlazeMeter error code. */
          code?: number | null;
          /** The BlazeMeter error message. */
          message?: string | null;
        } | null;
        /** The result payload returned by BlazeMeter. */
        result: unknown;
        /** The total number of matching records when returned. */
        total: number | null;
        /** The response limit when returned. */
        limit: number | null;
        /** The response offset when returned. */
        skip: number | null;
        /** The number of hidden records when returned. */
        hidden: number | null;
        /** The raw BlazeMeter response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List BlazeMeter Functional multi-tests in a workspace. */
    "blaze_meter_functional.list_multi_tests": {
      input: {
        /**
         * The BlazeMeter workspace ID to list multi-tests from.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The BlazeMeter project ID used to filter multi-tests.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The number of multi-tests to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of multi-tests to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Sort fields accepted by BlazeMeter, such as name or -created. */
        sort?: Array<string>;
      };
      output: {
        /** The BlazeMeter API version returned by the endpoint. */
        apiVersion: number | null;
        /** The BlazeMeter request identifier. */
        requestId: string | null;
        /** The error object returned by BlazeMeter when a request fails. */
        error: {
          /** The numeric BlazeMeter error code. */
          code?: number | null;
          /** The BlazeMeter error message. */
          message?: string | null;
        } | null;
        /** The result payload returned by BlazeMeter. */
        result: unknown;
        /** The total number of matching records when returned. */
        total: number | null;
        /** The response limit when returned. */
        limit: number | null;
        /** The response offset when returned. */
        skip: number | null;
        /** The number of hidden records when returned. */
        hidden: number | null;
        /** The raw BlazeMeter response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
