import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count InfoLobby records matching filters, search, or a saved view. */
    "infolobby.count_records": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
        /** Simple equality or comparison filters keyed by field id. */
        where?: Record<string, unknown>;
        /**
         * The explicit filters applied to records.
         * @minItems 1
         */
        filters?: Array<{
          /**
           * The field id to filter.
           * @minLength 1
           */
          column?: string;
          /**
           * An alternative field id to filter.
           * @minLength 1
           */
          field?: string;
          /**
           * The documented comparison operator or alias.
           * @minLength 1
           */
          compare: string;
          /** A JSON-encodable InfoLobby field or filter value. */
          value?: unknown;
          /** How this filter joins the preceding filter. */
          connector?: "AND" | "OR";
        }>;
        /**
         * A case-insensitive search term applied across selected fields.
         * @minLength 1
         */
        search?: string;
        /**
         * The saved view id, or 0 for the synthesized default view.
         * @minimum 0
         */
        viewId?: number;
      };
      output: {
        /** The number of records matching the query. */
        count: number;
        /** The total number of records in the table. */
        total: number;
        /** Whether the total is an approximate estimate. */
        totalApprox: boolean;
        /** Whether the query narrows the table. */
        restricted: boolean;
      };
    };
    /** Create a record in an InfoLobby table. */
    "infolobby.create_record": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
        /** Record field values keyed by InfoLobby field id. */
        data: Record<string, unknown>;
      };
      output: {
        /** The object returned by InfoLobby. */
        record: Record<string, unknown>;
      };
    };
    /** Delete one InfoLobby record. */
    "infolobby.delete_record": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
        /**
         * The InfoLobby record id.
         * @minimum 1
         */
        recordId: number;
      };
      output: {
        /** The JSON response returned by the delete endpoint. */
        result: unknown;
      };
    };
    /** Get one InfoLobby record with typed field values. */
    "infolobby.get_record": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
        /**
         * The InfoLobby record id.
         * @minimum 1
         */
        recordId: number;
      };
      output: {
        /** The object returned by InfoLobby. */
        record: Record<string, unknown>;
      };
    };
    /** Get storage-oriented metadata for one InfoLobby workspace. */
    "infolobby.get_space": {
      input: {
        /**
         * The InfoLobby workspace id.
         * @minimum 1
         */
        spaceId: number;
      };
      output: {
        /** The object returned by InfoLobby. */
        space: Record<string, unknown>;
      };
    };
    /** Get an InfoLobby table and its field schema. */
    "infolobby.get_table": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
      };
      output: {
        /** The object returned by InfoLobby. */
        table: Record<string, unknown>;
      };
    };
    /** List InfoLobby workspaces accessible to the connected API key. */
    "infolobby.list_spaces": {
      input: Record<string, never>;
      output: {
        /** The workspaces returned by InfoLobby. */
        spaces: Array<Record<string, unknown>>;
      };
    };
    /** List tables in an InfoLobby workspace. */
    "infolobby.list_tables": {
      input: {
        /**
         * The InfoLobby workspace id.
         * @minimum 1
         */
        spaceId: number;
      };
      output: {
        /** The tables returned by InfoLobby. */
        tables: Array<Record<string, unknown>>;
      };
    };
    /** Query and page through flat InfoLobby table rows. */
    "infolobby.query_records": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
        /**
         * The field ids to include in query rows.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Simple equality or comparison filters keyed by field id. */
        where?: Record<string, unknown>;
        /**
         * The explicit filters applied to records.
         * @minItems 1
         */
        filters?: Array<{
          /**
           * The field id to filter.
           * @minLength 1
           */
          column?: string;
          /**
           * An alternative field id to filter.
           * @minLength 1
           */
          field?: string;
          /**
           * The documented comparison operator or alias.
           * @minLength 1
           */
          compare: string;
          /** A JSON-encodable InfoLobby field or filter value. */
          value?: unknown;
          /** How this filter joins the preceding filter. */
          connector?: "AND" | "OR";
        }>;
        /**
         * A case-insensitive search term applied across selected fields.
         * @minLength 1
         */
        search?: string;
        /**
         * The saved view id, or 0 for the synthesized default view.
         * @minimum 0
         */
        viewId?: number;
        /**
         * The field id used to sort query rows.
         * @minLength 1
         */
        orderBy?: string;
        /** The InfoLobby ascending or descending sort direction. */
        orderDir?: "A" | "D";
        /**
         * The maximum number of rows to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based row offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The flat stored-value rows returned by InfoLobby. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Update selected fields on an InfoLobby record. */
    "infolobby.update_record": {
      input: {
        /**
         * The InfoLobby table id.
         * @minimum 1
         */
        tableId: number;
        /**
         * The InfoLobby record id.
         * @minimum 1
         */
        recordId: number;
        /** Record field values keyed by InfoLobby field id. */
        data: Record<string, unknown>;
      };
      output: {
        /** The object returned by InfoLobby. */
        record: Record<string, unknown>;
      };
    };
  }
}
