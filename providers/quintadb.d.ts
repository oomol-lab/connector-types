import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one record in a QuintaDB form. */
    "quintadb.create_record": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The QuintaDB form ID.
         * @minLength 1
         */
        formId: string;
        /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
        values: Record<string, unknown>;
      };
      output: {
        /** A QuintaDB record. */
        record: {
          /** The QuintaDB record ID. */
          id: string;
          /** The database ID that owns the record. */
          app_id: string;
          /** The form ID that owns the record. */
          entity_id: string;
          /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
          values: Record<string, unknown>;
          /** Whether the record is approved. */
          approved?: boolean;
          /** When the record was created. */
          created_at?: string;
          /** When the record was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one QuintaDB record permanently. */
    "quintadb.delete_record": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The QuintaDB record ID.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** A QuintaDB record. */
        record: {
          /** The QuintaDB record ID. */
          id: string;
          /** The database ID that owns the record. */
          app_id: string;
          /** The form ID that owns the record. */
          entity_id: string;
          /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
          values: Record<string, unknown>;
          /** Whether the record is approved. */
          approved?: boolean;
          /** When the record was created. */
          created_at?: string;
          /** When the record was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one QuintaDB database by ID. */
    "quintadb.get_database": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
      };
      output: {
        /** A QuintaDB database. */
        database: {
          /** The QuintaDB database ID. */
          id: string;
          /** The database name. */
          name: string;
          /** When the database was created. */
          created_at?: string;
          /** When the database was last updated. */
          updated_at?: string;
          /**
           * The number of records in the database.
           * @minimum 0
           */
          dtypes_count?: number;
          /**
           * The number of forms in the database.
           * @minimum 0
           */
          entities_count?: number;
          /**
           * The number of fields in the database.
           * @minimum 0
           */
          properties_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one QuintaDB record by database ID and record ID. */
    "quintadb.get_record": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The QuintaDB record ID.
         * @minLength 1
         */
        recordId: string;
        /** Whether record values should include field names alongside field IDs. */
        nameValue?: boolean;
      };
      output: {
        /** A QuintaDB record. */
        record: {
          /** The QuintaDB record ID. */
          id: string;
          /** The database ID that owns the record. */
          app_id: string;
          /** The form ID that owns the record. */
          entity_id: string;
          /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
          values: Record<string, unknown>;
          /** Whether the record is approved. */
          approved?: boolean;
          /** When the record was created. */
          created_at?: string;
          /** When the record was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List QuintaDB databases accessible to the connected API key. */
    "quintadb.list_databases": {
      input: {
        /**
         * The page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The databases on the requested page. */
        databases: Array<{
          /** The QuintaDB database ID. */
          id: string;
          /** The database name. */
          name: string;
          /** When the database was created. */
          created_at?: string;
          /** When the database was last updated. */
          updated_at?: string;
          /**
           * The number of records in the database.
           * @minimum 0
           */
          dtypes_count?: number;
          /**
           * The number of forms in the database.
           * @minimum 0
           */
          entities_count?: number;
          /**
           * The number of fields in the database.
           * @minimum 0
           */
          properties_count?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List fields in one QuintaDB form. */
    "quintadb.list_fields": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The QuintaDB form ID.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** The fields in the form. */
        fields: Array<{
          /** The QuintaDB field ID. */
          id: string;
          /** The form ID that owns the field. */
          entity_id: string;
          /** The field name. */
          name: string;
          /** The field description. */
          desc?: string | null;
          /** The QuintaDB field type. */
          type_name: string;
          /** The field position in its form. */
          position?: number;
          /** Whether the field is visible. */
          visible?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List forms in one QuintaDB database. */
    "quintadb.list_forms": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
      };
      output: {
        /** The forms in the database. */
        forms: Array<{
          /** The QuintaDB form ID. */
          id: string;
          /** The database ID that owns the form. */
          app_id: string;
          /** The form name. */
          name: string;
          /** The form description. */
          desc?: string | null;
          /** The form position in its database. */
          position?: number;
          /**
           * The configured record page size.
           * @exclusiveMinimum 0
           */
          per_page?: number;
          /**
           * The number of records in the form.
           * @minimum 0
           */
          records_count?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List records from one QuintaDB form with optional paging and report filtering. */
    "quintadb.list_records": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The QuintaDB form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * The optional QuintaDB report ID used to filter records.
         * @minLength 1
         */
        viewId?: string;
        /** Whether record values should include field names alongside field IDs. */
        nameValue?: boolean;
      };
      output: {
        /** The records on the requested page. */
        records: Array<{
          /** The QuintaDB record ID. */
          id: string;
          /** The database ID that owns the record. */
          app_id: string;
          /** The form ID that owns the record. */
          entity_id: string;
          /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
          values: Record<string, unknown>;
          /** Whether the record is approved. */
          approved?: boolean;
          /** When the record was created. */
          created_at?: string;
          /** When the record was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the supplied field values on one QuintaDB record. */
    "quintadb.update_record": {
      input: {
        /**
         * The QuintaDB database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The QuintaDB record ID.
         * @minLength 1
         */
        recordId: string;
        /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
        values: Record<string, unknown>;
      };
      output: {
        /** A QuintaDB record. */
        record: {
          /** The QuintaDB record ID. */
          id: string;
          /** The database ID that owns the record. */
          app_id: string;
          /** The form ID that owns the record. */
          entity_id: string;
          /** Record values keyed by QuintaDB field ID. Values must be JSON-compatible. */
          values: Record<string, unknown>;
          /** Whether the record is approved. */
          approved?: boolean;
          /** When the record was created. */
          created_at?: string;
          /** When the record was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
