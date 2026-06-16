import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one row in a Baserow table. */
    "baserow.create_table_row": {
      input: {
        /**
         * The Baserow table ID.
         * @exclusiveMinimum 0
         */
        tableId?: number;
        /** Whether Baserow should use user-facing field names instead of field IDs. */
        userFieldNames?: boolean;
        /** A Baserow row payload keyed by field name or field ID. */
        row: Record<string, unknown>;
      };
      output: {
        /** The created Baserow row. */
        row: {
          /** The Baserow row ID. */
          id: number;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Baserow row by row ID. */
    "baserow.delete_table_row": {
      input: {
        /**
         * The Baserow table ID.
         * @exclusiveMinimum 0
         */
        tableId?: number;
        /**
         * The Baserow row ID.
         * @exclusiveMinimum 0
         */
        rowId?: number;
      };
      output: {
        /** Whether the row deletion request succeeded. */
        deleted: boolean;
        /** The Baserow row ID that was deleted. */
        rowId: number;
      };
    };
    /** Read one Baserow row by table ID and row ID. */
    "baserow.get_table_row": {
      input: {
        /**
         * The Baserow table ID.
         * @exclusiveMinimum 0
         */
        tableId?: number;
        /**
         * The Baserow row ID.
         * @exclusiveMinimum 0
         */
        rowId?: number;
        /** Whether Baserow should use user-facing field names instead of field IDs. */
        userFieldNames?: boolean;
      };
      output: {
        /** The Baserow row returned by the API. */
        row: {
          /** The Baserow row ID. */
          id: number;
          [key: string]: unknown;
        };
      };
    };
    /** List the field definitions for one Baserow table. */
    "baserow.list_table_fields": {
      input: {
        /**
         * The Baserow table ID.
         * @exclusiveMinimum 0
         */
        tableId?: number;
      };
      output: {
        /** Field definitions returned by Baserow. */
        fields: Array<{
          /** The Baserow field ID. */
          id: number;
          /** The Baserow field name. */
          name: string;
          /** The Baserow field type. */
          type: string;
          /** The field order inside the table. */
          order?: number;
          /** Whether the field is the table primary field. */
          primary?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List rows from one Baserow table with optional search, ordering, filters, and pagination. */
    "baserow.list_table_rows": {
      input: {
        /**
         * The Baserow table ID.
         * @exclusiveMinimum 0
         */
        tableId?: number;
        /** Whether Baserow should use user-facing field names instead of field IDs. */
        userFieldNames?: boolean;
        /**
         * Free-text search string applied by Baserow when listing rows.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated Baserow sort expression, using '-' for descending fields.
         * @minLength 1
         */
        orderBy?: string;
        /** Baserow field filters keyed by field name or field ID. */
        filters?: Record<string, unknown>;
        /** How multiple Baserow filters should be combined. */
        filterType?: "AND" | "OR";
        /**
         * Page number to fetch from the paginated Baserow rows endpoint.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of rows to request per page, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
      };
      output: {
        /** Total number of rows that match the current query. */
        count: number;
        /** URL for the next rows page, or null when there is no next page. */
        next: string | null;
        /** URL for the previous rows page, or null when there is no previous page. */
        previous: string | null;
        /** Rows returned by the current Baserow page. */
        rows: Array<{
          /** The Baserow row ID. */
          id: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Baserow tables accessible to the authenticated database token. */
    "baserow.list_tables": {
      input: Record<string, never>;
      output: {
        /** Baserow tables accessible to the token. */
        tables: Array<{
          /** The Baserow table ID. */
          id: number;
          /** The Baserow table name. */
          name: string;
          /** The table order inside the database. */
          order?: number;
          /** The database ID that owns the table. */
          database_id?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one existing Baserow row. */
    "baserow.update_table_row": {
      input: {
        /**
         * The Baserow table ID.
         * @exclusiveMinimum 0
         */
        tableId?: number;
        /**
         * The Baserow row ID.
         * @exclusiveMinimum 0
         */
        rowId?: number;
        /** Whether Baserow should use user-facing field names instead of field IDs. */
        userFieldNames?: boolean;
        /** A Baserow row payload keyed by field name or field ID. */
        row: Record<string, unknown>;
      };
      output: {
        /** The updated Baserow row. */
        row: {
          /** The Baserow row ID. */
          id: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
