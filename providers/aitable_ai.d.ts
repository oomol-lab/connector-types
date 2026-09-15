import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create up to 10 records in an AITable datasheet. */
    "aitable_ai.create_records": {
      input: {
        /**
         * The AITable datasheet ID.
         * @minLength 1
         */
        datasheetId: string;
        /**
         * The records to create, with a maximum of 10 per request.
         * @minItems 1
         * @maxItems 10
         */
        records: Array<{
          /** Field values keyed by field name or field ID. */
          fields: Record<string, unknown>;
        }>;
        /** Whether field names or field IDs identify record fields. */
        fieldKey?: "name" | "id";
      };
      output: {
        /** The records returned by AITable. */
        records: Array<{
          /** The stable AITable record ID. */
          recordId?: string;
          /** Field values keyed by field name or field ID. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete up to 10 records from an AITable datasheet. */
    "aitable_ai.delete_records": {
      input: {
        /**
         * The AITable datasheet ID.
         * @minLength 1
         */
        datasheetId: string;
        /**
         * The record IDs to delete, with a maximum of 10 per request.
         * @minItems 1
         * @maxItems 10
         */
        recordIds: Array<string>;
      };
      output: {
        /** Whether AITable confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** List field definitions for an AITable datasheet. */
    "aitable_ai.list_fields": {
      input: {
        /**
         * The AITable datasheet ID.
         * @minLength 1
         */
        datasheetId: string;
      };
      output: {
        /** Field definitions returned by AITable. */
        fields: Array<{
          /** The stable AITable field ID. */
          id?: string;
          /** The field name. */
          name?: string;
          /** The AITable field type. */
          type?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the top-level file nodes in an AITable space. */
    "aitable_ai.list_nodes": {
      input: {
        /**
         * The AITable space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** Nodes returned by AITable. */
        nodes: Array<{
          /** The stable AITable node ID. */
          id?: string;
          /** The node name. */
          name?: string;
          /** The node type, such as Datasheet or Folder. */
          type?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a page of records from an AITable datasheet. */
    "aitable_ai.list_records": {
      input: {
        /**
         * The AITable datasheet ID.
         * @minLength 1
         */
        datasheetId: string;
        /**
         * The number of records per page, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The maximum total number of records to return.
         * @minimum 1
         */
        maxRecords?: number;
        /**
         * The view whose records and visible fields should be returned.
         * @minLength 1
         */
        viewId?: string;
        /**
         * An AITable formula used to filter records.
         * @minLength 1
         */
        filterByFormula?: string;
        /** Whether field names or field IDs identify record fields. */
        fieldKey?: "name" | "id";
        /** The representation used for cell values. */
        cellFormat?: "json" | "string";
      };
      output: {
        /** The returned page number. */
        pageNum: number;
        /** The returned page size. */
        pageSize: number;
        /** The total number of matching records. */
        total: number;
        /** Records in the returned page. */
        records: Array<{
          /** The stable AITable record ID. */
          recordId?: string;
          /** Field values keyed by field name or field ID. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the AITable spaces accessible to the authenticated user. */
    "aitable_ai.list_spaces": {
      input: Record<string, never>;
      output: {
        /** Spaces returned by AITable. */
        spaces: Array<{
          /** The stable AITable space ID. */
          id?: string;
          /** The AITable space name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List views configured for an AITable datasheet. */
    "aitable_ai.list_views": {
      input: {
        /**
         * The AITable datasheet ID.
         * @minLength 1
         */
        datasheetId: string;
      };
      output: {
        /** Views returned by AITable. */
        views: Array<{
          /** The stable AITable view ID. */
          id?: string;
          /** The view name. */
          name?: string;
          /** The AITable view type. */
          type?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update up to 10 existing records in an AITable datasheet. */
    "aitable_ai.update_records": {
      input: {
        /**
         * The AITable datasheet ID.
         * @minLength 1
         */
        datasheetId: string;
        /**
         * The records to update, with a maximum of 10 per request.
         * @minItems 1
         * @maxItems 10
         */
        records: Array<{
          /**
           * The AITable record ID to update.
           * @minLength 1
           */
          recordId: string;
          /** Field values keyed by field name or field ID. */
          fields: Record<string, unknown>;
        }>;
        /** Whether field names or field IDs identify record fields. */
        fieldKey?: "name" | "id";
      };
      output: {
        /** The records returned by AITable. */
        records: Array<{
          /** The stable AITable record ID. */
          recordId?: string;
          /** Field values keyed by field name or field ID. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
