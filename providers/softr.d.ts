import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one record in a Softr table. */
    "softr.create_record": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /** Record values keyed by Softr field ID or field name. */
        fields: Record<string, unknown>;
        /** Whether response field keys should use field names instead of field IDs. */
        fieldNames?: boolean;
      };
      output: {
        /** A Softr table record. */
        record: {
          /** The record ID. */
          id: string;
          /** The table ID that owns the record. */
          tableId?: string;
          /** Record values keyed by Softr field ID or field name. */
          fields: Record<string, unknown>;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete one Softr table record by ID. */
    "softr.delete_record": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Softr record ID.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether the record deletion request completed successfully. */
        deleted: boolean;
        /** The deleted record ID. */
        recordId: string;
      };
    };
    /** Get one Softr database by ID. */
    "softr.get_database": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
      };
      output: {
        /** A Softr database. */
        database: {
          /** The database ID. */
          id: string;
          /** The database name. */
          name: string;
          /** The workspace ID that owns the database. */
          workspaceId: string;
          /** The optional resource description. */
          description?: string | null;
          /**
           * The number of tables in the database.
           * @minimum 0
           */
          tablesCount?: number;
          /**
           * The database creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The database update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Softr table record by ID. */
    "softr.get_record": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Softr record ID.
         * @minLength 1
         */
        recordId: string;
        /** Whether response field keys should use field names instead of field IDs. */
        fieldNames?: boolean;
      };
      output: {
        /** A Softr table record. */
        record: {
          /** The record ID. */
          id: string;
          /** The table ID that owns the record. */
          tableId?: string;
          /** Record values keyed by Softr field ID or field name. */
          fields: Record<string, unknown>;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Softr table and its field definitions by database ID and table ID. */
    "softr.get_table": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** A Softr database table. */
        table: {
          /** The table ID. */
          id: string;
          /** The table name. */
          name: string;
          /** The optional resource description. */
          description?: string | null;
          /** The table's primary field ID. */
          primaryFieldId?: string;
          /** The table's default view ID. */
          defaultViewId?: string;
          /** Field definitions in the table. */
          fields?: Array<{
            /** The field ID. */
            id: string;
            /** The field name. */
            name: string;
            /** The Softr field type. */
            type: string;
            /** The optional resource description. */
            description?: string | null;
            /** Provider-defined configuration for this field type. */
            options?: Record<string, unknown>;
            /** Whether the field accepts multiple values or linked entries. */
            allowMultipleEntries?: boolean;
            /** Whether the field is read-only. */
            readonly?: boolean;
            /** Whether the field requires a value. */
            required?: boolean;
            /** Whether the field configuration is locked. */
            locked?: boolean;
            /** The field's default value when one is configured. */
            defaultValue?: string | null;
            /** AI-powered auto-fill configuration for the field. */
            aiOptions?: Record<string, unknown> | null;
            /**
             * The field creation timestamp.
             * @format date-time
             */
            createdAt?: string;
            /**
             * The field update timestamp.
             * @format date-time
             */
            updatedAt?: string;
            [key: string]: unknown;
          }>;
          /**
           * The table creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The table update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Softr table field definition by ID. */
    "softr.get_table_field": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Softr table field ID.
         * @minLength 1
         */
        fieldId: string;
      };
      output: {
        /** A Softr table field definition. */
        field: {
          /** The field ID. */
          id: string;
          /** The field name. */
          name: string;
          /** The Softr field type. */
          type: string;
          /** The optional resource description. */
          description?: string | null;
          /** Provider-defined configuration for this field type. */
          options?: Record<string, unknown>;
          /** Whether the field accepts multiple values or linked entries. */
          allowMultipleEntries?: boolean;
          /** Whether the field is read-only. */
          readonly?: boolean;
          /** Whether the field requires a value. */
          required?: boolean;
          /** Whether the field configuration is locked. */
          locked?: boolean;
          /** The field's default value when one is configured. */
          defaultValue?: string | null;
          /** AI-powered auto-fill configuration for the field. */
          aiOptions?: Record<string, unknown> | null;
          /**
           * The field creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The field update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the Softr databases accessible to the connected Personal Access Token. */
    "softr.list_databases": {
      input: Record<string, never>;
      output: {
        /** Databases accessible to the connected token. */
        databases: Array<{
          /** The database ID. */
          id: string;
          /** The database name. */
          name: string;
          /** The workspace ID that owns the database. */
          workspaceId: string;
          /** The optional resource description. */
          description?: string | null;
          /**
           * The number of tables in the database.
           * @minimum 0
           */
          tablesCount?: number;
          /**
           * The database creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The database update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a paginated page of records from one Softr table, optionally filtered by a table view. */
    "softr.list_records": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of records to return, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Whether response field keys should use field names instead of field IDs. */
        fieldNames?: boolean;
        /**
         * The Softr table view ID used to filter the records.
         * @minLength 1
         */
        viewId?: string;
      };
      output: {
        /** The records returned in this page. */
        records: Array<{
          /** The record ID. */
          id: string;
          /** The table ID that owns the record. */
          tableId?: string;
          /** Record values keyed by Softr field ID or field name. */
          fields: Record<string, unknown>;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Softr pagination metadata. */
        metadata: {
          /**
           * The number of records skipped.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of records returned in this page.
           * @exclusiveMinimum 0
           */
          limit: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total: number;
        };
      };
    };
    /** List the configured views for one Softr table. */
    "softr.list_table_views": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** Table views returned by Softr. */
        views: Array<{
          /** The table view ID. */
          id: string;
          /** The table ID that owns the view. */
          tableId: string;
          /** The table view name. */
          name: string;
          /** The optional resource description. */
          description?: string | null;
          /**
           * The table view creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The table view update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all tables in a Softr database, including their field definitions. */
    "softr.list_tables": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
      };
      output: {
        /** Tables returned by Softr. */
        tables: Array<{
          /** The table ID. */
          id: string;
          /** The table name. */
          name: string;
          /** The optional resource description. */
          description?: string | null;
          /** The table's primary field ID. */
          primaryFieldId?: string;
          /** The table's default view ID. */
          defaultViewId?: string;
          /** Field definitions in the table. */
          fields?: Array<{
            /** The field ID. */
            id: string;
            /** The field name. */
            name: string;
            /** The Softr field type. */
            type: string;
            /** The optional resource description. */
            description?: string | null;
            /** Provider-defined configuration for this field type. */
            options?: Record<string, unknown>;
            /** Whether the field accepts multiple values or linked entries. */
            allowMultipleEntries?: boolean;
            /** Whether the field is read-only. */
            readonly?: boolean;
            /** Whether the field requires a value. */
            required?: boolean;
            /** Whether the field configuration is locked. */
            locked?: boolean;
            /** The field's default value when one is configured. */
            defaultValue?: string | null;
            /** AI-powered auto-fill configuration for the field. */
            aiOptions?: Record<string, unknown> | null;
            /**
             * The field creation timestamp.
             * @format date-time
             */
            createdAt?: string;
            /**
             * The field update timestamp.
             * @format date-time
             */
            updatedAt?: string;
            [key: string]: unknown;
          }>;
          /**
           * The table creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The table update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search records in one Softr table using optional filters, sorting, and pagination. */
    "softr.search_records": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /** Whether response field keys should use field names instead of field IDs. */
        fieldNames?: boolean;
        /** The filter applied to the search. */
        filter?: {
          /** A Softr record filter condition. */
          condition: {
            /** The filter condition operator. */
            operator?: "AND" | "OR" | "IS_EMPTY" | "IS_NOT_EMPTY" | "IS_BETWEEN" | "IS_NOT_BETWEEN" | "IS_WITHIN" | "IS_NOT_WITHIN" | "IS" | "IS_NOT" | "GREATER_THAN" | "GREATER_THAN_OR_EQUALS" | "LESS_THAN" | "LESS_THAN_OR_EQUALS" | "CONTAINS" | "DOES_NOT_CONTAIN" | "STARTS_WITH" | "DOES_NOT_START_WITH" | "ENDS_WITH" | "DOES_NOT_END_WITH" | "IS_ONE_OF" | "IS_NOT_ONE_OF" | "HAS_ANY_OF" | "HAS_ALL_OF" | "HAS_NONE_OF";
            /** The field ID to which the condition applies. */
            leftSide?: string;
            /** The scalar or string-array value to compare with the selected field. */
            rightSide?: string | number | boolean | Array<string>;
            /** The lower bound for a between condition. */
            lowerBound?: string | number;
            /** The upper bound for a between condition. */
            upperBound?: string | number;
            /** Nested conditions used by AND or OR operators. */
            conditions?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
        };
        /** Sort rules applied in order. */
        sort?: Array<{
          /**
           * The field ID used for sorting.
           * @minLength 1
           */
          sortingField: string;
          /** The sort direction. */
          sortType: "ASC" | "DESC";
        }>;
        /** Pagination controls for the search. */
        paging?: {
          /**
           * The number of matching records to skip.
           * @minimum 0
           */
          offset?: number;
          /**
           * The number of matching records to return, from 1 to 200.
           * @minimum 1
           * @maximum 200
           */
          limit?: number;
        };
      };
      output: {
        /** The records returned in this page. */
        records: Array<{
          /** The record ID. */
          id: string;
          /** The table ID that owns the record. */
          tableId?: string;
          /** Record values keyed by Softr field ID or field name. */
          fields: Record<string, unknown>;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Softr pagination metadata. */
        metadata: {
          /**
           * The number of records skipped.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of records returned in this page.
           * @exclusiveMinimum 0
           */
          limit: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total: number;
        };
      };
    };
    /** Partially update the supplied fields of one Softr table record. */
    "softr.update_record": {
      input: {
        /**
         * The Softr database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * The Softr table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The Softr record ID.
         * @minLength 1
         */
        recordId: string;
        /** Record values keyed by Softr field ID or field name. */
        fields: Record<string, unknown>;
        /** Whether response field keys should use field names instead of field IDs. */
        fieldNames?: boolean;
      };
      output: {
        /** A Softr table record. */
        record: {
          /** The record ID. */
          id: string;
          /** The table ID that owns the record. */
          tableId?: string;
          /** Record values keyed by Softr field ID or field name. */
          fields: Record<string, unknown>;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
