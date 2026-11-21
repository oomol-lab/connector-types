import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run one read-only SELECT, WITH, SHOW, DESC, DESCRIBE, or EXPLAIN statement against Apache Doris. Writes, INTO OUTFILE, SQL hints, and multiple statements are rejected. Responses are capped at 8 MiB. */
    "doris.execute_query": {
      input: {
        /**
         * One read-only SQL statement. A trailing semicolon is allowed. Use doubled quotes instead of backslash escapes.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Database to use instead of the connection's default database.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * Maximum returned rows. An extra row is requested to detect truncation. Use SQL LIMIT to also bound query work.
         * @minimum 1
         * @maximum 10000
         * @default 1000
         */
        maxRows?: number;
      };
      output: {
        /** Result column metadata in order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Doris column type. */
          type: string;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Number of rows returned in rows, not the total number of matches.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time reported by Doris in milliseconds.
         * @minimum 0
         */
        executionTimeMs: number;
        /** Whether additional rows were omitted by maxRows. Narrow the query or use SQL pagination to retrieve more. */
        truncated: boolean;
      };
    };
    /** Describe a Doris table. Result rows describe fields, types, nullability, keys, defaults, and extra attributes. Set database here or on the connection. */
    "doris.get_table_schema": {
      input: {
        /**
         * Database to use instead of the connection's default database.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * Unqualified table name; supply its database separately.
         * @minLength 1
         * @pattern \S
         */
        table: string;
        /**
         * Maximum returned rows. An extra row is requested to detect truncation. Use SQL LIMIT to also bound query work.
         * @minimum 1
         * @maximum 10000
         * @default 1000
         */
        maxRows?: number;
      };
      output: {
        /** Result column metadata in order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Doris column type. */
          type: string;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Number of rows returned in rows, not the total number of matches.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time reported by Doris in milliseconds.
         * @minimum 0
         */
        executionTimeMs: number;
        /** Whether additional rows were omitted by maxRows. Narrow the query or use SQL pagination to retrieve more. */
        truncated: boolean;
      };
    };
    /** List databases visible to the connected Doris user. Each result row contains a database name. */
    "doris.list_databases": {
      input: {
        /**
         * Maximum returned rows. An extra row is requested to detect truncation. Use SQL LIMIT to also bound query work.
         * @minimum 1
         * @maximum 10000
         * @default 1000
         */
        maxRows?: number;
      };
      output: {
        /** Result column metadata in order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Doris column type. */
          type: string;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Number of rows returned in rows, not the total number of matches.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time reported by Doris in milliseconds.
         * @minimum 0
         */
        executionTimeMs: number;
        /** Whether additional rows were omitted by maxRows. Narrow the query or use SQL pagination to retrieve more. */
        truncated: boolean;
      };
    };
    /** List tables and views in a Doris database. Set database here or on the connection. */
    "doris.list_tables": {
      input: {
        /**
         * Database to use instead of the connection's default database.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * Maximum returned rows. An extra row is requested to detect truncation. Use SQL LIMIT to also bound query work.
         * @minimum 1
         * @maximum 10000
         * @default 1000
         */
        maxRows?: number;
      };
      output: {
        /** Result column metadata in order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Doris column type. */
          type: string;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Number of rows returned in rows, not the total number of matches.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time reported by Doris in milliseconds.
         * @minimum 0
         */
        executionTimeMs: number;
        /** Whether additional rows were omitted by maxRows. Narrow the query or use SQL pagination to retrieve more. */
        truncated: boolean;
      };
    };
  }
}
