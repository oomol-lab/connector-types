import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one BlazeMeter performance test by ID. */
    "blaze_meter_performance.get_test": {
      input: {
        /**
         * The BlazeMeter test ID to retrieve.
         * @exclusiveMinimum 0
         */
        testId: number;
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
    /** Get the BlazeMeter user profile associated with the configured API key. */
    "blaze_meter_performance.get_user": {
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
    /** List BlazeMeter accounts available to the configured API key. */
    "blaze_meter_performance.list_accounts": {
      input: {
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
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
    /** List BlazeMeter projects for a workspace. */
    "blaze_meter_performance.list_projects": {
      input: {
        /**
         * The BlazeMeter workspace ID to list projects from.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The number of projects to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of projects to return.
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
    /** List BlazeMeter performance tests by workspace or project. */
    "blaze_meter_performance.list_tests": {
      input: {
        /**
         * The BlazeMeter workspace ID used to filter tests.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /**
         * The BlazeMeter project ID used to filter tests.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The number of tests to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of tests to return.
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
    /** List BlazeMeter workspaces for an account. */
    "blaze_meter_performance.list_workspaces": {
      input: {
        /**
         * The BlazeMeter account ID to list workspaces from.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** Whether to return only enabled or disabled workspaces. */
        enabled?: boolean;
        /**
         * A text filter matched against workspace names.
         * @minLength 1
         */
        textFilter?: string;
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
