import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Airtable base in a workspace with the provided initial table and field schema. */
    "airtable.create_base": {
      input: {
        /**
         * Name for the Airtable base.
         * @minLength 1
         */
        name: string;
        /**
         * Workspace ID in the format wspXXXXXXXXXXXXXX.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Tables to create along with the new Airtable base.
         * @minItems 1
         */
        tables: Array<{
          /**
           * Name for the Airtable table.
           * @minLength 1
           */
          name: string;
          /**
           * Optional Airtable description, up to 20,000 characters.
           * @maxLength 20000
           */
          description?: string;
          /**
           * Field configurations to create in the Airtable table.
           * @minItems 1
           */
          fields: Array<{
            /**
             * Name for the Airtable field.
             * @minLength 1
             */
            name: string;
            /**
             * Airtable field type, such as singleLineText.
             * @minLength 1
             */
            type: string;
            /**
             * Optional Airtable description, up to 20,000 characters.
             * @maxLength 20000
             */
            description?: string;
            /** Type-specific Airtable field options. */
            options?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Base ID. */
        id: string;
        /** Tables created with the Airtable base. */
        tables: Array<{
          /** Table ID. */
          id: string;
          /** Table name. */
          name: string;
          /** Table description when Airtable returns one. */
          description?: string;
          /** Primary field ID configured for the table. */
          primaryFieldId?: string;
          /** Date dependency settings returned by Airtable for the table. */
          dateDependencySettings?: Record<string, unknown>;
          /** Fields defined on the Airtable table. */
          fields: Array<{
            /** Field ID. */
            id: string;
            /** Field name. */
            name: string;
            /** Field type reported by Airtable. */
            type: string;
            /** Field description when Airtable returns one. */
            description?: string;
            /** Field options reported by Airtable. */
            options?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Views defined on the Airtable table. */
          views?: Array<{
            /** View ID. */
            id: string;
            /** View name. */
            name: string;
            /** View type reported by Airtable. */
            type?: string;
            /** Field IDs visible in the Airtable view. */
            visibleFieldIds?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a field in an Airtable table. */
    "airtable.create_field": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID in the format tblXXXXXXXXXXXXXX.
         * @minLength 1
         */
        tableId: string;
        /**
         * Name for the Airtable field.
         * @minLength 1
         */
        name: string;
        /**
         * Airtable field type, such as singleLineText.
         * @minLength 1
         */
        type: string;
        /**
         * Optional Airtable description, up to 20,000 characters.
         * @maxLength 20000
         */
        description?: string;
        /** Type-specific Airtable field options. */
        options?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Field ID. */
        id: string;
        /** Field name. */
        name: string;
        /** Field type reported by Airtable. */
        type: string;
        /** Field description when Airtable returns one. */
        description?: string;
        /** Field options reported by Airtable. */
        options?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create one or more Airtable records in a table. */
    "airtable.create_records": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID or table name accepted by the Airtable path parameter.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * Records to create in the Airtable table.
         * @minItems 1
         * @maxItems 10
         */
        records: Array<{
          /** Field values for the new Airtable record. */
          fields: Record<string, unknown>;
        }>;
        /** Whether Airtable should coerce incoming values to compatible field types. */
        typecast?: boolean;
        /** Whether Airtable should return field IDs instead of field names in record objects. */
        returnFieldsByFieldId?: boolean;
      };
      output: {
        /** Records created by Airtable. */
        records: Array<{
          /** Record ID. */
          id: string;
          /** Record creation timestamp returned by Airtable. */
          createdTime?: string;
          /** Record fields keyed by field name or field ID. */
          fields: Record<string, unknown>;
          /** Comment count returned by Airtable when enabled on the endpoint. */
          commentCount?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a table in an Airtable base with the provided field schema. */
    "airtable.create_table": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Name for the Airtable table.
         * @minLength 1
         */
        name: string;
        /**
         * Optional Airtable description, up to 20,000 characters.
         * @maxLength 20000
         */
        description?: string;
        /**
         * Field configurations to create in the Airtable table.
         * @minItems 1
         */
        fields: Array<{
          /**
           * Name for the Airtable field.
           * @minLength 1
           */
          name: string;
          /**
           * Airtable field type, such as singleLineText.
           * @minLength 1
           */
          type: string;
          /**
           * Optional Airtable description, up to 20,000 characters.
           * @maxLength 20000
           */
          description?: string;
          /** Type-specific Airtable field options. */
          options?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Table ID. */
        id: string;
        /** Table name. */
        name: string;
        /** Table description when Airtable returns one. */
        description?: string;
        /** Primary field ID configured for the table. */
        primaryFieldId?: string;
        /** Date dependency settings returned by Airtable for the table. */
        dateDependencySettings?: Record<string, unknown>;
        /** Fields defined on the Airtable table. */
        fields: Array<{
          /** Field ID. */
          id: string;
          /** Field name. */
          name: string;
          /** Field type reported by Airtable. */
          type: string;
          /** Field description when Airtable returns one. */
          description?: string;
          /** Field options reported by Airtable. */
          options?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Views defined on the Airtable table. */
        views?: Array<{
          /** View ID. */
          id: string;
          /** View name. */
          name: string;
          /** View type reported by Airtable. */
          type?: string;
          /** Field IDs visible in the Airtable view. */
          visibleFieldIds?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete an Airtable base. Airtable restricts this endpoint to enterprise admins. */
    "airtable.delete_base": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
      };
      output: {
        /** Base ID. */
        id: string;
        /** Whether Airtable reports the base as deleted. */
        deleted: true;
      };
    };
    /** Delete one or more Airtable records by record ID. */
    "airtable.delete_records": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID or table name accepted by the Airtable path parameter.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * Record IDs to delete from the Airtable table.
         * @minItems 1
         * @maxItems 10
         */
        recordIds: Array<string>;
      };
      output: {
        /** Deleted-record acknowledgements returned by Airtable. */
        records: Array<{
          /** Record ID. */
          id: string;
          /** Whether Airtable reports the record as deleted. */
          deleted: boolean;
        }>;
      };
    };
    /** Read Airtable base metadata, including workspaceId and optional collaborator details. */
    "airtable.get_base_collaborators": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Optional Airtable base collaboration details to include.
         * @minItems 1
         */
        include?: Array<"collaborators" | "inviteLinks" | "interfaces" | "packages">;
      };
      output: {
        /** Base metadata returned by Airtable. */
        base: {
          /** Base ID. */
          id: string;
          /** Base creation timestamp returned by Airtable. */
          createdTime: string;
          /** Permission level reported by Airtable for the authenticated user. */
          permissionLevel: string;
          /**
           * Workspace ID in the format wspXXXXXXXXXXXXXX.
           * @minLength 1
           */
          workspaceId: string;
          /** Base name. */
          name: string;
          /** Interface metadata returned by Airtable. */
          interfaces?: Record<string, unknown>;
          /** Deprecated collaborator metadata returned by Airtable. */
          collaborators?: Record<string, unknown>;
          /** Group collaborator metadata returned by Airtable. */
          groupCollaborators?: Record<string, unknown>;
          /** Individual collaborator metadata returned by Airtable. */
          individualCollaborators?: Record<string, unknown>;
          /** Invite link metadata returned by Airtable. */
          inviteLinks?: Record<string, unknown>;
          /** Package metadata returned by Airtable. */
          packages?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Read Airtable table, field, and view schema for a specific base. */
    "airtable.get_base_schema": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Optional Airtable schema details to include in table views.
         * @minItems 1
         * @maxItems 1
         */
        include?: Array<"visibleFieldIds">;
      };
      output: {
        /** Tables returned by Airtable for the base. */
        tables: Array<{
          /** Table ID. */
          id: string;
          /** Table name. */
          name: string;
          /** Table description when Airtable returns one. */
          description?: string;
          /** Primary field ID configured for the table. */
          primaryFieldId?: string;
          /** Date dependency settings returned by Airtable for the table. */
          dateDependencySettings?: Record<string, unknown>;
          /** Fields defined on the Airtable table. */
          fields: Array<{
            /** Field ID. */
            id: string;
            /** Field name. */
            name: string;
            /** Field type reported by Airtable. */
            type: string;
            /** Field description when Airtable returns one. */
            description?: string;
            /** Field options reported by Airtable. */
            options?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Views defined on the Airtable table. */
          views?: Array<{
            /** View ID. */
            id: string;
            /** View name. */
            name: string;
            /** View type reported by Airtable. */
            type?: string;
            /** Field IDs visible in the Airtable view. */
            visibleFieldIds?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read a single Airtable record by record ID. */
    "airtable.get_record": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID or table name accepted by the Airtable path parameter.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * Record ID in the format recXXXXXXXXXXXXXX.
         * @minLength 1
         */
        recordId: string;
        /** Cell format accepted by Airtable for read operations. */
        cellFormat?: "json" | "string";
        /**
         * Timezone string sent to Airtable when cellFormat is string.
         * @minLength 1
         */
        timeZone?: string;
        /**
         * User locale sent to Airtable when cellFormat is string.
         * @minLength 1
         */
        userLocale?: string;
        /** Whether Airtable should return field IDs instead of field names in record objects. */
        returnFieldsByFieldId?: boolean;
        /** Whether Airtable should return date dependency metadata for linked record fields. */
        includeDateDependencyMetadata?: boolean;
      };
      output: {
        /** Record returned by Airtable. */
        record: {
          /** Record ID. */
          id: string;
          /** Record creation timestamp returned by Airtable. */
          createdTime?: string;
          /** Record fields keyed by field name or field ID. */
          fields: Record<string, unknown>;
          /** Comment count returned by Airtable when enabled on the endpoint. */
          commentCount?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Airtable bases accessible to the authenticated personal access token. */
    "airtable.list_bases": {
      input: {
        /**
         * Opaque pagination cursor returned by a previous Airtable response.
         * @minLength 1
         */
        offset?: string;
      };
      output: {
        /** Bases returned by Airtable. */
        bases: Array<{
          /** Base ID. */
          id: string;
          /** Base name. */
          name: string;
          /** Permission level reported by Airtable for this base. */
          permissionLevel: string;
        }>;
        /** Pagination cursor for the next page of bases, or null when unavailable. */
        offset?: string | null;
      };
    };
    /** List Airtable records from a table with optional fields, sorting, view filters, formula filters, and pagination. */
    "airtable.list_records": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID or table name accepted by the Airtable path parameter.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * View name or view ID used by Airtable to filter and sort results.
         * @minLength 1
         */
        view?: string;
        /**
         * Field names or field IDs to include in the Airtable response.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Sort rules applied by Airtable in order.
         * @minItems 1
         */
        sort?: Array<{
          /**
           * Field name or field ID used by Airtable for sorting.
           * @minLength 1
           */
          field: string;
          /** Sort direction accepted by Airtable. */
          direction?: "asc" | "desc";
        }>;
        /**
         * Formula string evaluated by Airtable to filter matching records.
         * @minLength 1
         */
        filterByFormula?: string;
        /**
         * Maximum total number of records to return before Airtable stops pagination.
         * @minimum 1
         */
        maxRecords?: number;
        /**
         * Number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Opaque pagination cursor returned by a previous Airtable response.
         * @minLength 1
         */
        offset?: string;
        /** Cell format accepted by Airtable for read operations. */
        cellFormat?: "json" | "string";
        /**
         * Timezone string sent to Airtable when cellFormat is string.
         * @minLength 1
         */
        timeZone?: string;
        /**
         * User locale sent to Airtable when cellFormat is string.
         * @minLength 1
         */
        userLocale?: string;
        /** Whether Airtable should return field IDs instead of field names in record objects. */
        returnFieldsByFieldId?: boolean;
        /** Whether Airtable should return date dependency metadata for linked record fields. */
        includeDateDependencyMetadata?: boolean;
        /**
         * Record metadata fields to include in Airtable list records responses.
         * @minItems 1
         */
        recordMetadata?: Array<"commentCount">;
      };
      output: {
        /** Records returned by Airtable. */
        records: Array<{
          /** Record ID. */
          id: string;
          /** Record creation timestamp returned by Airtable. */
          createdTime?: string;
          /** Record fields keyed by field name or field ID. */
          fields: Record<string, unknown>;
          /** Comment count returned by Airtable when enabled on the endpoint. */
          commentCount?: number;
          [key: string]: unknown;
        }>;
        /** Pagination cursor for the next page of records, or null when unavailable. */
        offset?: string | null;
      };
    };
    /** Update an Airtable field name, description, or type-specific options. */
    "airtable.update_field": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID in the format tblXXXXXXXXXXXXXX.
         * @minLength 1
         */
        tableId: string;
        /**
         * Field ID in the format fldXXXXXXXXXXXXXX.
         * @minLength 1
         */
        columnId: string;
        /**
         * Name for the Airtable field.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional Airtable description, up to 20,000 characters.
         * @maxLength 20000
         */
        description?: string;
        /** Type-specific Airtable field options. */
        options?: Record<string, unknown>;
      };
      output: {
        /** Field ID. */
        id: string;
        /** Field name. */
        name: string;
        /** Field type reported by Airtable. */
        type: string;
        /** Field description when Airtable returns one. */
        description?: string;
        /** Field options reported by Airtable. */
        options?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update one or more existing Airtable records by record ID. */
    "airtable.update_records": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID or table name accepted by the Airtable path parameter.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * Records to update in the Airtable table.
         * @minItems 1
         * @maxItems 10
         */
        records: Array<{
          /**
           * Record ID in the format recXXXXXXXXXXXXXX.
           * @minLength 1
           */
          id: string;
          /** Field values to write into the existing Airtable record. */
          fields: Record<string, unknown>;
        }>;
        /** Whether Airtable should coerce incoming values to compatible field types. */
        typecast?: boolean;
        /** Whether Airtable should return field IDs instead of field names in record objects. */
        returnFieldsByFieldId?: boolean;
      };
      output: {
        /** Records returned by Airtable after update. */
        records: Array<{
          /** Record ID. */
          id: string;
          /** Record creation timestamp returned by Airtable. */
          createdTime?: string;
          /** Record fields keyed by field name or field ID. */
          fields: Record<string, unknown>;
          /** Comment count returned by Airtable when enabled on the endpoint. */
          commentCount?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update an Airtable table name, description, or date dependency settings. */
    "airtable.update_table": {
      input: {
        /**
         * Base ID in the format appXXXXXXXXXXXXXX.
         * @minLength 1
         */
        baseId: string;
        /**
         * Table ID or table name accepted by the Airtable path parameter.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * Name for the Airtable table.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional Airtable description, up to 20,000 characters.
         * @maxLength 20000
         */
        description?: string;
        /** Airtable date dependency settings for a table. */
        dateDependencySettings?: Record<string, unknown>;
      };
      output: {
        /** Table ID. */
        id: string;
        /** Table name. */
        name: string;
        /** Table description when Airtable returns one. */
        description?: string;
        /** Primary field ID configured for the table. */
        primaryFieldId?: string;
        /** Date dependency settings returned by Airtable for the table. */
        dateDependencySettings?: Record<string, unknown>;
        /** Fields defined on the Airtable table. */
        fields: Array<{
          /** Field ID. */
          id: string;
          /** Field name. */
          name: string;
          /** Field type reported by Airtable. */
          type: string;
          /** Field description when Airtable returns one. */
          description?: string;
          /** Field options reported by Airtable. */
          options?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Views defined on the Airtable table. */
        views?: Array<{
          /** View ID. */
          id: string;
          /** View name. */
          name: string;
          /** View type reported by Airtable. */
          type?: string;
          /** Field IDs visible in the Airtable view. */
          visibleFieldIds?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
