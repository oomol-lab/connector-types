import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more records to a Grist table. */
    "grist.add_records": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
        /**
         * The Grist table identifier.
         * @minLength 1
         */
        tableId?: string;
        /** Whether Grist should store values without automatic parsing. */
        noparse?: boolean;
        /**
         * Records to add to the target table.
         * @minItems 1
         */
        records: Array<{
          /** Column IDs mapped to cell values for the new record. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /** Created record IDs returned by Grist. */
        records: Array<{
          /** Row ID of the created record. */
          id: number;
        }>;
      };
    };
    /** Delete one or more records from a Grist table by row ID. */
    "grist.delete_records": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
        /**
         * The Grist table identifier.
         * @minLength 1
         */
        tableId?: string;
        /**
         * Row IDs to delete from the target table.
         * @minItems 1
         */
        rowIds?: Array<number>;
      };
      output: {
        /** Whether the Grist delete request completed successfully. */
        ok: boolean;
        /** Row IDs that were requested for deletion. */
        deletedRowIds: Array<number>;
      };
    };
    /** Fetch metadata for a Grist document by document ID or short URL alias. */
    "grist.get_document": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
      };
      output: {
        /** Unique document identifier. */
        id: string;
        /** Document name. */
        name: string;
        /** Access level for the authenticated user. */
        access: string;
        /** Short URL alias for the document, if any. */
        urlId?: string | null;
        /** Whether the document is pinned. */
        isPinned?: boolean;
        /** Document type, when present. */
        type?: string | null;
        /** Workspace metadata attached to the document, when present. */
        workspace?: {
          /** Workspace identifier. */
          id: number;
          /** Workspace name. */
          name: string;
          /** Access level for the authenticated user. */
          access: string;
          /** Organization domain that owns the workspace, when present. */
          orgDomain?: string | null;
          /** Documents contained in the workspace. */
          docs: Array<{
            /** Unique document identifier. */
            id: string;
            /** Document name. */
            name: string;
            /** Access level for the authenticated user. */
            access: string;
            /** Short URL alias for the document, if any. */
            urlId?: string | null;
            /** Document type, if Grist reports one. */
            type?: string | null;
            /** Parent document ID when the document is a fork. */
            trunkId?: string | null;
            /** Whether the document is pinned in the workspace. */
            isPinned: boolean;
            /** Timestamp when the document was created. */
            createdAt?: string;
            /** Timestamp when the document was last updated. */
            updatedAt?: string;
            /** Fork summaries attached to the document, when present. */
            forks?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          /** Workspace owner information, when present. */
          owner?: Record<string, unknown> | null;
          /** Timestamp when the workspace was created. */
          createdAt?: string;
          /** Timestamp when the workspace was last updated. */
          updatedAt?: string;
          /** Whether Grist marks this as a support workspace. */
          isSupportWorkspace?: boolean;
          [key: string]: unknown;
        };
        /** Organization metadata attached to the document, when present. */
        org?: Record<string, unknown>;
        /** Timestamp when the document was created. */
        createdAt?: string;
        /** Timestamp when the document was last updated. */
        updatedAt?: string;
        /** Fork metadata attached to the document, when present. */
        forks?: Array<Record<string, unknown>>;
        /** Document aliases attached to the document, when present. */
        aliases?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the columns defined in a Grist table. */
    "grist.list_columns": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
        /**
         * The Grist table identifier.
         * @minLength 1
         */
        tableId?: string;
        /** Whether hidden metadata columns should be included. */
        hidden?: boolean;
      };
      output: {
        /** Columns returned by Grist for the table. */
        columns: Array<{
          /** Column identifier. */
          id: string;
          /** Metadata fields for the column. */
          fields: {
            /** Display label of the column. */
            label: string;
            /** Grist column type. */
            type: string;
            /** Formula expression when the column is formula-backed. */
            formula?: string;
            /** Whether the column is formula-backed. */
            isFormula?: boolean;
            /** Help text or description of the column. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List records from a Grist table with optional filtering, sorting, limits, and hidden-column inclusion. */
    "grist.list_records": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
        /**
         * The Grist table identifier.
         * @minLength 1
         */
        tableId?: string;
        /** Whether hidden metadata columns should be included. */
        hidden?: boolean;
        /** Comma-separated columns to sort by. Prefix with '-' for descending. */
        sort?: string;
        /** JSON string that maps column IDs to allowed values arrays, such as '{"pet":["cat"]}'. */
        filter?: string;
        /**
         * Maximum number of records to return. Use 0 for no limit.
         * @minimum 0
         */
        limit?: number;
      };
      output: {
        /** Records returned by Grist for the table. */
        records: Array<{
          /** Row ID of the record. */
          id: number;
          /** Column IDs mapped to cell values for the record. */
          fields: Record<string, unknown>;
        }>;
      };
    };
    /** List the tables defined in a Grist document. */
    "grist.list_tables": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
      };
      output: {
        /** Tables returned by Grist for the document. */
        tables: Array<{
          /** Table identifier. */
          id: string;
          /** Metadata fields for the table. */
          fields: {
            /** Internal table reference identifier. */
            tableRef: number;
            /** Whether the table is loaded on demand. */
            onDemand: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Grist workspaces and documents that the authenticated API key can access on the current Grist site. */
    "grist.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** Workspaces available to the authenticated user. */
        workspaces: Array<{
          /** Workspace identifier. */
          id: number;
          /** Workspace name. */
          name: string;
          /** Access level for the authenticated user. */
          access: string;
          /** Organization domain that owns the workspace, when present. */
          orgDomain?: string | null;
          /** Documents contained in the workspace. */
          docs: Array<{
            /** Unique document identifier. */
            id: string;
            /** Document name. */
            name: string;
            /** Access level for the authenticated user. */
            access: string;
            /** Short URL alias for the document, if any. */
            urlId?: string | null;
            /** Document type, if Grist reports one. */
            type?: string | null;
            /** Parent document ID when the document is a fork. */
            trunkId?: string | null;
            /** Whether the document is pinned in the workspace. */
            isPinned: boolean;
            /** Timestamp when the document was created. */
            createdAt?: string;
            /** Timestamp when the document was last updated. */
            updatedAt?: string;
            /** Fork summaries attached to the document, when present. */
            forks?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          /** Workspace owner information, when present. */
          owner?: Record<string, unknown> | null;
          /** Timestamp when the workspace was created. */
          createdAt?: string;
          /** Timestamp when the workspace was last updated. */
          updatedAt?: string;
          /** Whether Grist marks this as a support workspace. */
          isSupportWorkspace?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one or more existing Grist records by row ID. */
    "grist.update_records": {
      input: {
        /**
         * The Grist document identifier.
         * @minLength 1
         */
        docId?: string;
        /**
         * The Grist table identifier.
         * @minLength 1
         */
        tableId?: string;
        /** Whether Grist should store values without automatic parsing. */
        noparse?: boolean;
        /**
         * Records to update in the target table.
         * @minItems 1
         */
        records: Array<{
          /**
           * The Grist row ID to update.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Column IDs mapped to the updated cell values. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /** Whether the Grist update request completed successfully. */
        ok: boolean;
        /** Number of records included in the update request. */
        updatedCount: number;
      };
    };
  }
}
