import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one or more records in a Teable table using provider-defined field values. */
    "teable.create_records": {
      input: {
        /**
         * The ID of the Teable table where records should be created.
         * @minLength 1
         */
        tableId: string;
        /**
         * The records to create.
         * @minItems 1
         */
        records: Array<{
          /** Record values keyed by Teable field name, field ID, or database field name. */
          fields: Record<string, unknown>;
        }>;
        /** The key type used for record fields in the request or response. */
        fieldKeyType?: "id" | "name" | "dbFieldName";
        /** Whether Teable should automatically convert supplied values to each field's data type. */
        typecast?: boolean;
      };
      output: {
        /** The newly created Teable records. */
        records: Array<{
          /**
           * The Teable record ID.
           * @minLength 1
           */
          id: string;
          /** Record values keyed by Teable field name, field ID, or database field name. */
          fields: Record<string, unknown>;
          /** The primary field value rendered as text. */
          name?: string;
          /** The table-wide auto number assigned to the record. */
          autoNumber?: number;
          /**
           * The ISO 8601 time when the record was created.
           * @format date-time
           */
          createdTime?: string;
          /**
           * The ISO 8601 time when the record was last modified.
           * @format date-time
           */
          lastModifiedTime?: string;
          /** The name of the user who created the record. */
          createdBy?: string;
          /** The name of the user who last modified the record. */
          lastModifiedBy?: string;
          /** Provider-defined permissions for the record. */
          permissions?: Record<string, unknown>;
          /** Whether Teable prevents this record from being deleted. */
          undeletable?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Permanently delete one Teable record by table ID and record ID. */
    "teable.delete_record": {
      input: {
        /**
         * The ID of the Teable table containing the record.
         * @minLength 1
         */
        tableId: string;
        /**
         * The ID of the Teable record to permanently delete.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether Teable accepted the delete request. */
        deleted: boolean;
        /**
         * The ID of the deleted Teable record.
         * @minLength 1
         */
        recordId: string;
      };
    };
    /** Get the Teable user associated with the connected personal access token. */
    "teable.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * The Teable user ID.
         * @minLength 1
         */
        id: string;
        /**
         * The user's display name.
         * @minLength 1
         */
        name: string;
        /** The user's avatar URL, when configured. */
        avatar?: string | null;
        /**
         * The user's email address, when returned by Teable.
         * @format email
         */
        email?: string;
      };
    };
    /** Get one Teable record by table ID and record ID. */
    "teable.get_record": {
      input: {
        /**
         * The ID of the Teable table containing the record.
         * @minLength 1
         */
        tableId: string;
        /**
         * The ID of the Teable record to retrieve.
         * @minLength 1
         */
        recordId: string;
        /**
         * The field names or IDs to include, interpreted according to fieldKeyType.
         * @minItems 1
         */
        projection?: Array<string>;
        /** The format used for record cell values. */
        cellFormat?: "json" | "text";
        /** The key type used for record fields in the request or response. */
        fieldKeyType?: "id" | "name" | "dbFieldName";
      };
      output: {
        /** A Teable record. Provider-added fields are preserved. */
        record: {
          /**
           * The Teable record ID.
           * @minLength 1
           */
          id: string;
          /** Record values keyed by Teable field name, field ID, or database field name. */
          fields: Record<string, unknown>;
          /** The primary field value rendered as text. */
          name?: string;
          /** The table-wide auto number assigned to the record. */
          autoNumber?: number;
          /**
           * The ISO 8601 time when the record was created.
           * @format date-time
           */
          createdTime?: string;
          /**
           * The ISO 8601 time when the record was last modified.
           * @format date-time
           */
          lastModifiedTime?: string;
          /** The name of the user who created the record. */
          createdBy?: string;
          /** The name of the user who last modified the record. */
          lastModifiedBy?: string;
          /** Provider-defined permissions for the record. */
          permissions?: Record<string, unknown>;
          /** Whether Teable prevents this record from being deleted. */
          undeletable?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List the Teable bases in a space accessible to the connected token. */
    "teable.list_bases": {
      input: {
        /**
         * The ID of the Teable space whose bases should be listed.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The Teable bases returned for the space. */
        bases: Array<{
          /**
           * The Teable base ID.
           * @minLength 1
           */
          id: string;
          /**
           * The display name of the base.
           * @minLength 1
           */
          name: string;
          /**
           * The ID of the space containing the base.
           * @minLength 1
           */
          spaceId: string;
          /** The base icon, when configured. */
          icon?: string | null;
          /** The current user's role in the base. */
          role?: "owner" | "creator" | "editor" | "commenter" | "viewer";
          /** The ID of the user who created the base. */
          createdBy?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List records in a Teable table with optional projection, view, filtering, sorting, and offset pagination. */
    "teable.list_records": {
      input: {
        /**
         * The ID of the Teable table whose records should be listed.
         * @minLength 1
         */
        tableId: string;
        /**
         * The field names or IDs to include, interpreted according to fieldKeyType.
         * @minItems 1
         */
        projection?: Array<string>;
        /** The format used for record cell values. */
        cellFormat?: "json" | "text";
        /** The key type used for record fields in the request or response. */
        fieldKeyType?: "id" | "name" | "dbFieldName";
        /**
         * The view whose filters and sorting should be applied.
         * @minLength 1
         */
        viewId?: string;
        /** Whether to ignore the selected view's filter and sorting configuration. */
        ignoreViewQuery?: boolean;
        /** A Teable filter object containing field conditions or nested filter groups. */
        filter?: {
          /** How the filter entries are combined. */
          conjunction: "and" | "or";
          /** The field conditions or nested filter groups to apply. */
          filterSet: Array<unknown>;
          [key: string]: unknown;
        };
        /** The Teable sort definitions applied in priority order. */
        orderBy?: Array<{
          /**
           * The ID of the field used for sorting.
           * @minLength 1
           */
          fieldId: string;
          /** The direction used to sort the field. */
          order: "asc" | "desc";
        }>;
        /**
         * The maximum number of records to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        take?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The Teable records returned by the query. */
        records: Array<{
          /**
           * The Teable record ID.
           * @minLength 1
           */
          id: string;
          /** Record values keyed by Teable field name, field ID, or database field name. */
          fields: Record<string, unknown>;
          /** The primary field value rendered as text. */
          name?: string;
          /** The table-wide auto number assigned to the record. */
          autoNumber?: number;
          /**
           * The ISO 8601 time when the record was created.
           * @format date-time
           */
          createdTime?: string;
          /**
           * The ISO 8601 time when the record was last modified.
           * @format date-time
           */
          lastModifiedTime?: string;
          /** The name of the user who created the record. */
          createdBy?: string;
          /** The name of the user who last modified the record. */
          lastModifiedBy?: string;
          /** Provider-defined permissions for the record. */
          permissions?: Record<string, unknown>;
          /** Whether Teable prevents this record from being deleted. */
          undeletable?: boolean;
          [key: string]: unknown;
        }>;
        /** Provider-defined grouping or search metadata. */
        extra?: Record<string, unknown>;
      };
    };
    /** List the Teable spaces accessible to the connected personal access token. */
    "teable.list_spaces": {
      input: Record<string, never>;
      output: {
        /** The accessible Teable spaces. */
        spaces: Array<{
          /**
           * The Teable space ID.
           * @minLength 1
           */
          id: string;
          /**
           * The display name of the space.
           * @minLength 1
           */
          name: string;
          /** The current user's role in the space. */
          role: "owner" | "creator" | "editor" | "commenter" | "viewer";
          /** The organization associated with the space, when present. */
          organization?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Teable tables in a base accessible to the connected token. */
    "teable.list_tables": {
      input: {
        /**
         * The ID of the Teable base whose tables should be listed.
         * @minLength 1
         */
        baseId: string;
      };
      output: {
        /** The Teable tables returned for the base. */
        tables: Array<{
          /**
           * The Teable table ID.
           * @minLength 1
           */
          id: string;
          /**
           * The display name of the table.
           * @minLength 1
           */
          name: string;
          /**
           * The physical database table name managed by Teable.
           * @minLength 1
           */
          dbTableName: string;
          /** The table description. */
          description?: string;
          /** The emoji icon configured for the table. */
          icon?: string;
          /** The table's display order within the base. */
          order?: number;
          /**
           * The ISO 8601 time when the table was last modified.
           * @format date-time
           */
          lastModifiedTime?: string;
          /** The ID of the table's default view. */
          defaultViewId?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the fields of one Teable record by table ID and record ID. */
    "teable.update_record": {
      input: {
        /**
         * The ID of the Teable table containing the record.
         * @minLength 1
         */
        tableId: string;
        /**
         * The ID of the Teable record to update.
         * @minLength 1
         */
        recordId: string;
        /** Record values keyed by Teable field name, field ID, or database field name. */
        fields: Record<string, unknown>;
        /** The key type used for record fields in the request or response. */
        fieldKeyType?: "id" | "name" | "dbFieldName";
        /** Whether Teable should automatically convert supplied values to each field's data type. */
        typecast?: boolean;
      };
      output: {
        /** A Teable record. Provider-added fields are preserved. */
        record: {
          /**
           * The Teable record ID.
           * @minLength 1
           */
          id: string;
          /** Record values keyed by Teable field name, field ID, or database field name. */
          fields: Record<string, unknown>;
          /** The primary field value rendered as text. */
          name?: string;
          /** The table-wide auto number assigned to the record. */
          autoNumber?: number;
          /**
           * The ISO 8601 time when the record was created.
           * @format date-time
           */
          createdTime?: string;
          /**
           * The ISO 8601 time when the record was last modified.
           * @format date-time
           */
          lastModifiedTime?: string;
          /** The name of the user who created the record. */
          createdBy?: string;
          /** The name of the user who last modified the record. */
          lastModifiedBy?: string;
          /** Provider-defined permissions for the record. */
          permissions?: Record<string, unknown>;
          /** Whether Teable prevents this record from being deleted. */
          undeletable?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
