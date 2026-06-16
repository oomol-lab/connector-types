import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a SQL query with the Turbot Pipes Query API and return rows plus query metadata. */
    "turbot_pipes.execute_query": {
      input: {
        /**
         * The SQL statement to execute in Turbot Pipes.
         * @minLength 1
         */
        sql: string;
      };
      output: {
        /** Rows returned by the query. */
        rows: Array<Record<string, unknown>>;
        /**
         * The number of rows returned by the query.
         * @minimum 0
         */
        rowCount: number;
        /** Columns inferred from the query response. */
        columns: Array<{
          /** The column name returned by Turbot Pipes. */
          name: string | null;
          /** The Turbot Pipes column type when returned. */
          type: string | null;
          [key: string]: unknown;
        }>;
        /** Turbot Pipes query metadata returned by the Query API. */
        meta: Record<string, unknown> | null;
        /** The raw Turbot Pipes Query API response. */
        raw: unknown;
      };
    };
  }
}
