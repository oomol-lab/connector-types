import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Append one or more rows to a SeaTable table using column names as keys. */
    "seatable.append_rows": {
      input: {
        /**
         * The SeaTable table name.
         * @minLength 1
         */
        tableName: string;
        /**
         * Rows to append, keyed by column names.
         * @minItems 1
         * @maxItems 1000
         */
        rows: Array<Record<string, unknown>>;
        /** Whether SeaTable should apply column default values to missing fields. */
        applyDefault?: boolean;
      };
      output: {
        /** Number of rows inserted by SeaTable. */
        insertedRowCount: number;
        /** Identifiers of the inserted rows. */
        rowIds: Array<unknown>;
        /** A row returned by SeaTable. */
        firstRow?: {
          /** The SeaTable row ID. */
          _id?: string;
          /** The row modification timestamp. */
          _mtime?: string;
          [key: string]: unknown;
        };
        /** The raw SeaTable API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one or more SeaTable rows by row ID. */
    "seatable.delete_rows": {
      input: {
        /**
         * The SeaTable table name.
         * @minLength 1
         */
        tableName: string;
        /**
         * SeaTable row IDs to delete.
         * @minItems 1
         * @maxItems 10000
         */
        rowIds: Array<string>;
      };
      output: {
        /** Whether SeaTable accepted the deletion. */
        success: boolean;
        /** The raw SeaTable API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get metadata for the SeaTable base associated with the API token. */
    "seatable.get_metadata": {
      input: Record<string, never>;
      output: {
        /** The raw SeaTable API response. */
        metadata: Record<string, unknown>;
      };
    };
    /** Get one row from a SeaTable table by row ID. */
    "seatable.get_row": {
      input: {
        /**
         * The SeaTable table name.
         * @minLength 1
         */
        tableName: string;
        /**
         * The 22-character SeaTable row ID.
         * @minLength 22
         * @maxLength 22
         */
        rowId: string;
        /** Whether returned row keys should use column names instead of internal keys. */
        convertKeys?: boolean;
      };
      output: {
        /** A row returned by SeaTable. */
        row: {
          /** The SeaTable row ID. */
          _id?: string;
          /** The row modification timestamp. */
          _mtime?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List rows from a SeaTable table or view with offset pagination. */
    "seatable.list_rows": {
      input: {
        /**
         * The SeaTable table name.
         * @minLength 1
         */
        tableName: string;
        /**
         * Optional SeaTable view name.
         * @minLength 1
         */
        viewName?: string;
        /**
         * Zero-based row offset.
         * @minimum 0
         */
        start?: number;
        /**
         * Maximum rows to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Whether returned row keys should use column names instead of internal keys. */
        convertKeys?: boolean;
      };
      output: {
        /** Rows returned by SeaTable. */
        rows: Array<{
          /** The SeaTable row ID. */
          _id?: string;
          /** The row modification timestamp. */
          _mtime?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one or more SeaTable rows using column names as keys. */
    "seatable.update_rows": {
      input: {
        /**
         * The SeaTable table name.
         * @minLength 1
         */
        tableName: string;
        /**
         * Rows to update.
         * @minItems 1
         * @maxItems 1000
         */
        updates: Array<{
          /**
           * The 22-character SeaTable row ID.
           * @minLength 22
           * @maxLength 22
           */
          rowId: string;
          /** A row keyed by SeaTable column names. */
          row: Record<string, unknown>;
        }>;
      };
      output: {
        /** Whether SeaTable accepted the updates. */
        success: boolean;
        /** The raw SeaTable API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
