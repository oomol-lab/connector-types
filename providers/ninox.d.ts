import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one Ninox record by record ID. */
    "ninox.delete_record": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The Ninox record identifier.
         * @exclusiveMinimum 0
         */
        recordId: number;
      };
      output: {
        /** Whether the target Ninox record was deleted. */
        deleted: boolean;
      };
    };
    /** Delete multiple Ninox records from the same table. */
    "ninox.delete_records": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The Ninox record IDs to delete.
         * @minItems 1
         */
        recordIds: Array<number>;
      };
      output: {
        /**
         * The number of Ninox record IDs submitted for deletion.
         * @minimum 0
         */
        deletedCount: number;
      };
    };
    /** Get Ninox schema metadata for one database. */
    "ninox.get_database": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
      };
      output: {
        /** A Ninox database schema wrapper. */
        database: {
          /** A loose object returned by Ninox. */
          settings: Record<string, unknown> | null;
          /** A loose object returned by Ninox. */
          schema: Record<string, unknown> | null;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Ninox record by record ID. */
    "ninox.get_record": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The Ninox record identifier.
         * @exclusiveMinimum 0
         */
        recordId: number;
        /** How Ninox should render choice or date values in the response. */
        choiceStyle?: "ids" | "names";
        /** How Ninox should render choice or date values in the response. */
        style?: "ids" | "names";
      };
      output: {
        /** A normalized Ninox record. */
        record: {
          /**
           * The Ninox record identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The Ninox record sequence when Ninox returns one. */
          sequence: number | null;
          /** The record creation timestamp when Ninox returns one. */
          createdAt: string | null;
          /** The record creator identifier when Ninox returns one. */
          createdBy: unknown;
          /** The record modification timestamp when Ninox returns one. */
          modifiedAt: string | null;
          /** The record modifier identifier when Ninox returns one. */
          modifiedBy: unknown;
          /** Record field values keyed by Ninox field name or field identifier. */
          fields: Record<string, unknown>;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Ninox schema metadata for one table. */
    "ninox.get_table": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
      };
      output: {
        /** A Ninox table schema summary. */
        table: {
          /**
           * The Ninox table identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The Ninox table name. */
          name: string;
          /** The Ninox table fields. */
          fields: Array<{
            /** The field identifier when Ninox returns one. */
            id: string | null;
            /** The field name when Ninox returns one. */
            name: string | null;
            /** The field type when Ninox returns one. */
            type: string | null;
            /** The field choices returned by Ninox. */
            choices: Array<{
              /** The choice identifier when Ninox returns one. */
              id: string | null;
              /** The display caption of the choice when Ninox returns one. */
              caption: string | null;
              /** A loose object returned by Ninox. */
              captions: Record<string, unknown> | null;
              /** A loose object returned by Ninox. */
              raw: Record<string, unknown>;
            }> | null;
            /** A loose object returned by Ninox. */
            raw: Record<string, unknown>;
          }>;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Ninox workspace by workspace ID. */
    "ninox.get_workspace": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
      };
      output: {
        /** A Ninox workspace summary. */
        workspace: {
          /**
           * The Ninox workspace identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The Ninox workspace name. */
          name: string;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Ninox databases inside one workspace. */
    "ninox.list_databases": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
      };
      output: {
        /** The databases returned by Ninox. */
        databases: Array<{
          /**
           * The Ninox database identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The Ninox database name. */
          name: string;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List records from one Ninox table. */
    "ninox.list_records": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /** How Ninox should render choice or date values in the response. */
        choiceStyle?: "ids" | "names";
      };
      output: {
        /** The records returned by Ninox. */
        records: Array<{
          /**
           * The Ninox record identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The Ninox record sequence when Ninox returns one. */
          sequence: number | null;
          /** The record creation timestamp when Ninox returns one. */
          createdAt: string | null;
          /** The record creator identifier when Ninox returns one. */
          createdBy: unknown;
          /** The record modification timestamp when Ninox returns one. */
          modifiedAt: string | null;
          /** The record modifier identifier when Ninox returns one. */
          modifiedBy: unknown;
          /** Record field values keyed by Ninox field name or field identifier. */
          fields: Record<string, unknown>;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Ninox tables for one database. */
    "ninox.list_tables": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
      };
      output: {
        /** The tables returned by Ninox. */
        tables: Array<{
          /**
           * The Ninox table identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The Ninox table name. */
          name: string;
          /** The Ninox table fields. */
          fields: Array<{
            /** The field identifier when Ninox returns one. */
            id: string | null;
            /** The field name when Ninox returns one. */
            name: string | null;
            /** The field type when Ninox returns one. */
            type: string | null;
            /** The field choices returned by Ninox. */
            choices: Array<{
              /** The choice identifier when Ninox returns one. */
              id: string | null;
              /** The display caption of the choice when Ninox returns one. */
              caption: string | null;
              /** A loose object returned by Ninox. */
              captions: Record<string, unknown> | null;
              /** A loose object returned by Ninox. */
              raw: Record<string, unknown>;
            }> | null;
            /** A loose object returned by Ninox. */
            raw: Record<string, unknown>;
          }>;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Ninox workspaces available to the authenticated Personal Access Token. */
    "ninox.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The workspaces returned by Ninox. */
        workspaces: Array<{
          /**
           * The Ninox workspace identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The Ninox workspace name. */
          name: string;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Create new Ninox records or update existing ones in the same table using the native POST /records endpoint. */
    "ninox.save_records": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The records to create or update in Ninox.
         * @minItems 1
         */
        records: Array<{
          /**
           * The Ninox record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Record field values keyed by Ninox field name or field identifier. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /** The records returned by Ninox after saving. */
        records: Array<{
          /**
           * The Ninox record identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The Ninox record sequence when Ninox returns one. */
          sequence: number | null;
          /** The record creation timestamp when Ninox returns one. */
          createdAt: string | null;
          /** The record creator identifier when Ninox returns one. */
          createdBy: unknown;
          /** The record modification timestamp when Ninox returns one. */
          modifiedAt: string | null;
          /** The record modifier identifier when Ninox returns one. */
          modifiedBy: unknown;
          /** Record field values keyed by Ninox field name or field identifier. */
          fields: Record<string, unknown>;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Find a single Ninox record by filters in one table. */
    "ninox.search_record": {
      input: {
        /**
         * The Ninox workspace identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Ninox database identifier.
         * @minLength 1
         * @pattern \S
         */
        databaseId: string;
        /**
         * The Ninox table identifier.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /** Filters keyed by Ninox field identifier or field name for single-record lookup. */
        filters: Record<string, unknown>;
        /** How Ninox should render choice or date values in the response. */
        style?: "ids" | "names";
        /** How Ninox should render choice or date values in the response. */
        dateStyle?: "ids" | "names";
        /** How Ninox should render choice or date values in the response. */
        choiceStyle?: "ids" | "names";
      };
      output: {
        /** A normalized Ninox record. */
        record: {
          /**
           * The Ninox record identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The Ninox record sequence when Ninox returns one. */
          sequence: number | null;
          /** The record creation timestamp when Ninox returns one. */
          createdAt: string | null;
          /** The record creator identifier when Ninox returns one. */
          createdBy: unknown;
          /** The record modification timestamp when Ninox returns one. */
          modifiedAt: string | null;
          /** The record modifier identifier when Ninox returns one. */
          modifiedBy: unknown;
          /** Record field values keyed by Ninox field name or field identifier. */
          fields: Record<string, unknown>;
          /** A loose object returned by Ninox. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
  }
}
