import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read metadata and stats for one Tinybird Data Source. */
    "tinybird.get_data_source": {
      input: {
        /**
         * Data Source name or ID.
         * @minLength 1
         */
        name: string;
        /**
         * Comma-separated Data Source attributes to include in the response.
         * @minLength 1
         */
        attrs?: string;
      };
      output: {
        /** A Tinybird Data Source object. */
        dataSource: Record<string, unknown>;
      };
    };
    /** List Tinybird Data Sources visible to the authenticated token. */
    "tinybird.list_data_sources": {
      input: {
        /**
         * Comma-separated Data Source attributes to include in the response.
         * @minLength 1
         */
        attrs?: string;
      };
      output: {
        /** Data Sources returned by Tinybird. */
        dataSources: Array<Record<string, unknown>>;
        /** Raw JSON payload returned by Tinybird. */
        payload: unknown;
      };
    };
    /** Query a published Tinybird Pipe endpoint and return its JSON response. */
    "tinybird.run_pipe_endpoint": {
      input: {
        /**
         * Published Pipe endpoint name.
         * @minLength 1
         */
        pipeName: string;
        /** Custom query or template parameters sent to Tinybird. */
        parameters?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON payload returned by Tinybird. */
        payload: unknown;
      };
    };
    /** Run a SQL query against Tinybird through the synchronous Query API. */
    "tinybird.run_sql_query": {
      input: {
        /**
         * SQL query to execute with Tinybird.
         * @minLength 1
         */
        q: string;
        /** Optional custom parameters merged into the JSON request body. */
        parameters?: Record<string, unknown>;
        /**
         * Optional Pipe name used by Tinybird as the `_` placeholder.
         * @minLength 1
         */
        pipeline?: string;
        /** Whether Tinybird should return EXPLAIN output instead of executing. */
        explain?: boolean;
      };
      output: {
        /** Raw JSON payload returned by Tinybird. */
        payload: unknown;
      };
    };
  }
}
