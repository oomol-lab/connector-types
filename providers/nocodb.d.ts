import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count records in one NocoDB table, optionally filtered by a where expression. */
    "nocodb.count_records": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** A NocoDB where expression, such as (Status,eq,Done). */
        where?: string;
        /** The NocoDB view ID used to restrict records to a specific view. */
        viewId?: string;
      };
      output: {
        /** The number of records matching the query. */
        count: number;
      };
    };
    /** Count records in one NocoDB table using the v3 data API. */
    "nocodb.count_table_records": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** A NocoDB v3 where expression, such as (Status,eq,Done). */
        where?: string;
        /** The NocoDB view ID used to restrict records to a specific view. */
        viewId?: string;
      };
      output: {
        /** The number of records matching the query. */
        count: number;
      };
    };
    /** Create one or more records in a NocoDB table. */
    "nocodb.create_records": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Records to create in the table.
         * @minItems 1
         */
        rows: Array<Record<string, unknown>>;
      };
      output: {
        /** Created records returned by NocoDB. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Create a table in a NocoDB base using the v3 metadata API. */
    "nocodb.create_table": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The table title. */
        title: string;
        /** The table description. */
        description?: string | null;
        /** The NocoDB source ID. */
        sourceId?: string;
        /** NocoDB table metadata options. */
        meta?: Record<string, unknown>;
        /**
         * Fields to create with the table.
         * @minItems 1
         */
        fields?: Array<{
          /** The field title. */
          title?: string;
          /** The NocoDB field type. */
          type?: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** A NocoDB table metadata object. */
        table: {
          /** The NocoDB table ID. */
          id?: string;
          /** The NocoDB table title. */
          title?: string;
          /** The physical table name, when returned by NocoDB. */
          table_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a field in a NocoDB table using the v3 metadata API. */
    "nocodb.create_table_field": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** The NocoDB v3 field creation payload. */
        field: Record<string, unknown>;
      };
      output: {
        /** A NocoDB v3 field metadata object. */
        field: {
          /** The NocoDB field ID. */
          id?: string;
          /** The NocoDB field title. */
          title?: string;
          /** The NocoDB field type. */
          type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one or more records in a NocoDB table using the v3 data API. */
    "nocodb.create_table_records": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Records to create in the table.
         * @minItems 1
         */
        records: Array<{
          /** Record field values keyed by field title or field ID. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /** Created records returned by NocoDB. */
        records: Array<{
          /** The NocoDB record ID value. */
          id?: string | number;
          /** Primary key field values for the record. */
          id_fields?: Record<string, unknown>;
          /** Record field values excluding primary key fields. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a view for a NocoDB table using the v3 metadata API. */
    "nocodb.create_table_view": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** The NocoDB v3 view creation payload. */
        view: Record<string, unknown>;
      };
      output: {
        /** A NocoDB view metadata object. */
        view: {
          /** The NocoDB view ID. */
          id?: string;
          /** The NocoDB view title. */
          title?: string;
          /** The NocoDB view type. */
          type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one or more records from a NocoDB table. */
    "nocodb.delete_records": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Records to delete. Each record must include its NocoDB record ID.
         * @minItems 1
         */
        rows: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether NocoDB accepted the delete request. */
        deleted: boolean;
        /** Deleted records returned by NocoDB when available. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Delete a NocoDB table using the v3 metadata API. */
    "nocodb.delete_table": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
      };
      output: {
        /** Whether NocoDB accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete one or more records from a NocoDB table using the v3 data API. */
    "nocodb.delete_table_records": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Records to delete from the table.
         * @minItems 1
         */
        records: Array<{
          /** The NocoDB record ID value. */
          id: string | number;
        }>;
      };
      output: {
        /** Deleted records returned by NocoDB. */
        records: Array<{
          /** The NocoDB record ID value. */
          id?: string | number;
          /** Primary key field values for the record. */
          id_fields?: Record<string, unknown>;
          /** Record field values excluding primary key fields. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get schema metadata for one NocoDB base. */
    "nocodb.get_base_schema": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
      };
      output: {
        /** The NocoDB base schema object. */
        base: Record<string, unknown>;
      };
    };
    /** Get the NocoDB user associated with the connected API token. */
    "nocodb.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current NocoDB user object. */
        user: Record<string, unknown>;
      };
    };
    /** Get metadata for one NocoDB table, including columns and views when available. */
    "nocodb.get_table_metadata": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
      };
      output: {
        /** A NocoDB table metadata object. */
        table: {
          /** The NocoDB table ID. */
          id?: string;
          /** The NocoDB table title. */
          title?: string;
          /** The physical table name, when returned by NocoDB. */
          table_name?: string;
          [key: string]: unknown;
        };
        /** Columns returned for the table. */
        columns: Array<{
          /** The NocoDB column ID. */
          id?: string;
          /** The NocoDB column title. */
          title?: string;
          /** The physical column name, when returned by NocoDB. */
          column_name?: string;
          /** The NocoDB UI data type. */
          uidt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List bases visible to the connected NocoDB API token. */
    "nocodb.list_bases": {
      input: Record<string, never>;
      output: {
        /** Bases returned by NocoDB. */
        bases: Array<Record<string, unknown>>;
      };
    };
    /** List records from one NocoDB table with optional where, sort, field, limit, and offset query parameters. */
    "nocodb.list_records": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /** A NocoDB where expression, such as (Status,eq,Done). */
        where?: string;
        /** A comma-separated sort expression. Prefix a field with - for descending sort. */
        sort?: string;
        /** A comma-separated list of fields to include. */
        fields?: string;
        /** The NocoDB view ID used to restrict records to a specific view. */
        viewId?: string;
        /** Whether to shuffle the returned records. */
        shuffle?: boolean;
      };
      output: {
        /** Records returned by NocoDB. */
        rows: Array<Record<string, unknown>>;
        /** Pagination metadata returned by NocoDB. */
        pageInfo: {
          /** The total number of matching rows. */
          totalRows?: number;
          /** The current page number. */
          page?: number;
          /** The requested page size. */
          pageSize?: number;
          /** Whether the current page is the first page. */
          isFirstPage?: boolean;
          /** Whether the current page is the last page. */
          isLastPage?: boolean;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List records from one NocoDB table using the v3 data API with optional field, sort, filter, page, and view parameters. */
    "nocodb.list_table_records": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * The one-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The one-based page number for nested linked record data.
         * @exclusiveMinimum 0
         */
        nestedPage?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** A NocoDB v3 where expression, such as (Status,eq,Done). */
        where?: string;
        /** A NocoDB v3 sort expression as a JSON object or array string, such as {"direction":"asc","field":"Name"}. */
        sort?: string;
        /** A comma-separated list or JSON array string of fields to include. */
        fields?: string;
        /** The NocoDB view ID used to restrict records to a specific view. */
        viewId?: string;
        /** Whether Links fields should return full linked record data instead of only a count. */
        linksAsLtar?: boolean;
      };
      output: {
        /** Records returned by NocoDB. */
        records: Array<{
          /** The NocoDB record ID value. */
          id?: string | number;
          /** Primary key field values for the record. */
          id_fields?: Record<string, unknown>;
          /** Record field values excluding primary key fields. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination token for the next page. */
        next: string | null;
        /** The pagination token for the previous page. */
        prev: string | null;
        /** The nested pagination token for the next page. */
        nestedNext: string | null;
        /** The nested pagination token for the previous page. */
        nestedPrev: string | null;
      };
    };
    /** List views for a NocoDB table using the v3 metadata API. */
    "nocodb.list_table_views": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
      };
      output: {
        /** Views returned by NocoDB. */
        views: Array<{
          /** The NocoDB view ID. */
          id?: string;
          /** The NocoDB view title. */
          title?: string;
          /** The NocoDB view type. */
          type?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List tables in a NocoDB base or in a specific base source. */
    "nocodb.list_tables": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB source ID. */
        sourceId?: string;
      };
      output: {
        /** Tables returned by NocoDB. */
        tables: Array<{
          /** The NocoDB table ID. */
          id?: string;
          /** The NocoDB table title. */
          title?: string;
          /** The physical table name, when returned by NocoDB. */
          table_name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read one record from a NocoDB table by record ID. */
    "nocodb.read_record": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** The NocoDB record ID value. */
        recordId: string | number;
        /** A comma-separated list of fields to include. */
        fields?: string;
      };
      output: {
        /** A NocoDB record returned by the API. */
        row: Record<string, unknown>;
      };
    };
    /** Read one record from a NocoDB table using the v3 data API. */
    "nocodb.read_table_record": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** The NocoDB record ID value. */
        recordId: string | number;
        /** A comma-separated list or JSON array string of fields to include. */
        fields?: string;
        /** Whether Links fields should return full linked record data instead of only a count. */
        linksAsLtar?: boolean;
      };
      output: {
        /** A NocoDB v3 data record. */
        record: {
          /** The NocoDB record ID value. */
          id?: string | number;
          /** Primary key field values for the record. */
          id_fields?: Record<string, unknown>;
          /** Record field values excluding primary key fields. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update one or more records in a NocoDB table. */
    "nocodb.update_records": {
      input: {
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Records to update. Each record must include its NocoDB record ID.
         * @minItems 1
         */
        rows: Array<Record<string, unknown>>;
      };
      output: {
        /** Updated records returned by NocoDB. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Update a NocoDB table title, description, display field, or metadata using the v3 metadata API. */
    "nocodb.update_table": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /** The new table title. */
        title?: string;
        /** The new table description. */
        description?: string;
        /** The field ID to use as the table display field. */
        displayFieldId?: string;
        /** NocoDB table metadata options. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A NocoDB table metadata object. */
        table: {
          /** The NocoDB table ID. */
          id?: string;
          /** The NocoDB table title. */
          title?: string;
          /** The physical table name, when returned by NocoDB. */
          table_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one or more records in a NocoDB table using the v3 data API. */
    "nocodb.update_table_records": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Records to update in the table.
         * @minItems 1
         */
        records: Array<{
          /** The NocoDB record ID value. */
          id: string | number;
          /** Record field values to update. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /** Updated records returned by NocoDB. */
        records: Array<{
          /** The NocoDB record ID value. */
          id?: string | number;
          /** Primary key field values for the record. */
          id_fields?: Record<string, unknown>;
          /** Record field values excluding primary key fields. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create or update records in a NocoDB table by matching up to three fields using the v3 data API. */
    "nocodb.upsert_table_records": {
      input: {
        /** The NocoDB base ID. */
        baseId: string;
        /** The NocoDB table ID, such as m1abcdefghijk. */
        tableId: string;
        /**
         * Field titles or IDs used to match existing records.
         * @minItems 1
         * @maxItems 3
         */
        fieldsToMergeOn: Array<string>;
        /**
         * Records to create or update.
         * @minItems 1
         * @maxItems 10
         */
        records: Array<{
          /** Record field values keyed by field title or field ID. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /** Upserted records returned by NocoDB. */
        records: Array<{
          /** The NocoDB record ID value. */
          id?: string | number;
          /** Primary key field values for the record. */
          id_fields?: Record<string, unknown>;
          /** Record field values excluding primary key fields. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
