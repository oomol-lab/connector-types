import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one or more rows from a Retable table. */
    "retable.delete_rows": {
      input: {
        /**
         * The Retable table ID from its URL or a discovery action.
         * @minLength 1
         */
        retableId: string;
        /**
         * Numeric row IDs to delete.
         * @minItems 1
         */
        rowIds: Array<number>;
      };
      output: {
        /** The number of rows deleted by Retable. */
        deletedRowCount: number;
      };
    };
    /** Get one Retable table and its column definitions. */
    "retable.get_retable": {
      input: {
        /**
         * The Retable table ID from its URL or a discovery action.
         * @minLength 1
         */
        retableId: string;
      };
      output: {
        /** A resource returned by Retable. */
        retable: Record<string, unknown>;
      };
    };
    /** Insert one or more rows into a Retable table. */
    "retable.insert_rows": {
      input: {
        /**
         * The Retable table ID from its URL or a discovery action.
         * @minLength 1
         */
        retableId: string;
        /**
         * Rows to insert.
         * @minItems 1
         */
        rows: Array<{
          /**
           * Cells to insert into the row.
           * @minItems 1
           */
          columns: Array<{
            /**
             * The Retable column ID.
             * @minLength 1
             */
            column_id: string;
            /** A Retable cell value accepted by the public API. */
            cell_value: string | null;
          }>;
        }>;
      };
      output: {
        /** The inserted row data or row IDs returned by Retable. */
        result: unknown;
      };
    };
    /** List the projects inside one accessible Retable workspace. */
    "retable.list_projects": {
      input: {
        /**
         * The Retable workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** Projects returned by Retable. */
        projects: Array<Record<string, unknown>>;
      };
    };
    /** List the tables inside one accessible Retable project. */
    "retable.list_retables": {
      input: {
        /**
         * The Retable project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Tables returned by Retable. */
        retables: Array<Record<string, unknown>>;
      };
    };
    /** List all rows or up to 50 selected row IDs from one Retable table. */
    "retable.list_rows": {
      input: {
        /**
         * The Retable table ID from its URL or a discovery action.
         * @minLength 1
         */
        retableId: string;
        /**
         * Specific row IDs to return, limited by Retable to 50 rows.
         * @minItems 1
         * @maxItems 50
         */
        rowIds?: Array<number>;
      };
      output: {
        /** Rows returned by Retable. */
        rows: Array<{
          /**
           * The numeric Retable row ID.
           * @exclusiveMinimum 0
           */
          row_id: number;
          [key: string]: unknown;
        }>;
        /** The total count returned by Retable, or null when omitted. */
        count: number | null;
      };
    };
    /** List the Retable workspaces accessible to the authenticated API key. */
    "retable.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** Workspaces returned by Retable. */
        workspaces: Array<Record<string, unknown>>;
      };
    };
    /** Search a Retable table for a term in one column with optional pagination. */
    "retable.search_rows": {
      input: {
        /**
         * The Retable table ID from its URL or a discovery action.
         * @minLength 1
         */
        retableId: string;
        /**
         * The Retable column ID.
         * @minLength 1
         */
        columnId: string;
        /**
         * The search term.
         * @minLength 1
         */
        term: string;
        /**
         * Additional Retable column IDs included in the search result.
         * @minItems 1
         */
        columnIds?: Array<string>;
        /**
         * The maximum number of search results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based search result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Matching rows returned by Retable. */
        rows: Array<{
          /**
           * The numeric Retable row ID.
           * @exclusiveMinimum 0
           */
          row_id: number;
          [key: string]: unknown;
        }>;
        /** The total count returned by Retable, or null when omitted. */
        count: number | null;
      };
    };
    /** Update cells in one or more rows of a Retable table. */
    "retable.update_rows": {
      input: {
        /**
         * The Retable table ID from its URL or a discovery action.
         * @minLength 1
         */
        retableId: string;
        /**
         * Rows and cells to update.
         * @minItems 1
         */
        rows: Array<{
          /**
           * The numeric Retable row ID.
           * @exclusiveMinimum 0
           */
          row_id: number;
          /**
           * Cells to update in the row.
           * @minItems 1
           */
          columns: Array<{
            /**
             * The Retable column ID.
             * @minLength 1
             */
            column_id: string;
            /** A Retable cell value accepted by the public API. */
            update_cell_value: string | null;
          }>;
        }>;
      };
      output: {
        /** The updated row data or row IDs returned by Retable. */
        result: unknown;
      };
    };
  }
}
