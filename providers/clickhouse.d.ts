import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a SQL query against a ClickHouse instance and return JSON rows. */
    "clickhouse.execute_query": {
      input: {
        /**
         * The SQL query to execute against ClickHouse.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * The ClickHouse database to use for this request. Defaults to the database configured on the connection.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * The maximum query execution time in seconds.
         * @minimum 1
         */
        maxExecutionTime?: number;
        /** Additional ClickHouse settings to send with the query. */
        settings?: Record<string, string | number | boolean>;
      };
      output: {
        /** The rows returned by ClickHouse. */
        rows: Array<Record<string, unknown>>;
        /** The number of rows returned in this response. */
        rowCount: number;
        /** The result column metadata returned by ClickHouse. */
        columns: Array<{
          /** The column name. */
          name: string;
          /** The ClickHouse column type. */
          type: string;
        }>;
        /** ClickHouse query execution statistics. */
        statistics: {
          /** The query execution time in seconds. */
          elapsed?: number | null;
          /** The number of rows read while executing the query. */
          rowsRead?: number | null;
          /** The number of bytes read while executing the query. */
          bytesRead?: number | null;
        };
        /** The raw ClickHouse JSON response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get an overview of one ClickHouse database with tables and optional column name lists. */
    "clickhouse.get_database_schema": {
      input: {
        /**
         * The ClickHouse database to use for this request. Defaults to the database configured on the connection.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * Whether to include column names for every returned table.
         * @default false
         */
        includeTableSchemas?: boolean;
      };
      output: {
        /** The database whose schema was returned. */
        database: string;
        /** The tables in the database. */
        tables: Array<{
          /** The database containing the table. */
          database: string;
          /** The table or view name. */
          name: string;
          /** The table engine, if returned by ClickHouse. */
          engine: string | null;
          /** Whether the table is temporary. */
          isTemporary: boolean;
          /** The primary key expression when requested or returned. */
          primaryKey: string | null;
          /** The sorting key expression when requested or returned. */
          sortingKey: string | null;
          /** The partition key expression when requested or returned. */
          partitionKey: string | null;
          /** The table column names when requested. */
          columns: Array<string>;
          /** The approximate total number of rows, if returned. */
          totalRows: number | null;
          /** The approximate total number of bytes, if returned. */
          totalBytes: number | null;
          /** The raw ClickHouse table row. */
          raw: Record<string, unknown>;
        }>;
        /** The number of tables returned. */
        totalTables: number;
        /** The approximate total rows across returned tables, or null when unknown. */
        totalRows: number | null;
        /** The approximate total bytes across returned tables, or null when unknown. */
        totalBytes: number | null;
        /** The raw ClickHouse JSON response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get column metadata for one ClickHouse table. */
    "clickhouse.get_table_schema": {
      input: {
        /**
         * The ClickHouse database to use for this request. Defaults to the database configured on the connection.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * The ClickHouse table name.
         * @minLength 1
         * @pattern \S
         */
        table: string;
        /**
         * Whether to include sample rows from the table.
         * @default false
         */
        includeSampleData?: boolean;
        /**
         * The number of sample rows to return when includeSampleData is true.
         * @minimum 1
         * @maximum 25
         * @default 5
         */
        sampleRows?: number;
      };
      output: {
        /** The database containing the table. */
        database: string;
        /** The table whose schema was returned. */
        table: string;
        /** The table engine, if returned by ClickHouse. */
        engine: string | null;
        /** The primary key expression, if returned by ClickHouse. */
        primaryKey: string | null;
        /** The sorting key expression, if returned by ClickHouse. */
        sortingKey: string | null;
        /** The partition key expression, if returned by ClickHouse. */
        partitionKey: string | null;
        /** The approximate total number of rows, if returned. */
        totalRows: number | null;
        /** The approximate total number of bytes, if returned. */
        totalBytes: number | null;
        /** The columns returned by ClickHouse. */
        columns: Array<{
          /** The column name. */
          name: string;
          /** The ClickHouse column type. */
          type: string;
          /** The default expression kind, if any. */
          defaultKind: string | null;
          /** The default expression, if any. */
          defaultExpression: string | null;
          /** The column comment, if any. */
          comment: string | null;
          /** The column compression codec, if specified. */
          compressionCodec: string | null;
          /** Whether the column is part of the primary key expression. */
          isInPrimaryKey: boolean;
          /** Whether the column is part of the sorting key expression. */
          isInSortingKey: boolean;
          /** The raw ClickHouse column row. */
          raw: Record<string, unknown>;
        }>;
        /** Sample rows returned from the table when requested. */
        sampleData: Array<Record<string, unknown>>;
        /** The raw ClickHouse JSON response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List databases available in the connected ClickHouse instance. */
    "clickhouse.list_databases": {
      input: {
        /**
         * An optional SQL LIKE pattern used to filter database names.
         * @minLength 1
         * @pattern \S
         */
        pattern?: string;
        /** Whether to include table names for each returned database. */
        includeTables?: boolean;
      };
      output: {
        /** The databases returned by ClickHouse. */
        databases: Array<{
          /** The database name. */
          name: string;
          /** The database engine, if returned by ClickHouse. */
          engine: string | null;
          /** The database UUID, if returned by ClickHouse. */
          uuid: string | null;
          /** The table names in this database when requested. */
          tables: Array<string>;
          /** The raw ClickHouse database row. */
          raw: Record<string, unknown>;
        }>;
        /** The number of databases returned. */
        total: number;
        /** The raw ClickHouse JSON response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List tables or views in ClickHouse databases. */
    "clickhouse.list_tables": {
      input: {
        /**
         * The ClickHouse database to list tables from. If omitted, tables from all databases are returned.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * An optional SQL LIKE pattern used to filter table names.
         * @minLength 1
         * @pattern \S
         */
        pattern?: string;
        /**
         * Whether to include ClickHouse views in the returned tables.
         * @default true
         */
        includeViews?: boolean;
        /**
         * Whether to include column names for each returned table.
         * @default false
         */
        includeColumns?: boolean;
        /**
         * Whether to include primary, sorting, and partition key expressions.
         * @default false
         */
        includePrimaryKey?: boolean;
      };
      output: {
        /** The tables returned by ClickHouse. */
        tables: Array<{
          /** The database containing the table. */
          database: string;
          /** The table or view name. */
          name: string;
          /** The table engine, if returned by ClickHouse. */
          engine: string | null;
          /** Whether the table is temporary. */
          isTemporary: boolean;
          /** The primary key expression when requested or returned. */
          primaryKey: string | null;
          /** The sorting key expression when requested or returned. */
          sortingKey: string | null;
          /** The partition key expression when requested or returned. */
          partitionKey: string | null;
          /** The table column names when requested. */
          columns: Array<string>;
          /** The approximate total number of rows, if returned. */
          totalRows: number | null;
          /** The approximate total number of bytes, if returned. */
          totalBytes: number | null;
          /** The raw ClickHouse table row. */
          raw: Record<string, unknown>;
        }>;
        /** The number of tables returned. */
        total: number;
        /** The raw ClickHouse JSON response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
