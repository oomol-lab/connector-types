import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete records from a Quickbase table by record id. */
    "quickbase.delete_records": {
      input: {
        /**
         * Quickbase table identifier.
         * @minLength 1
         */
        tableId: string;
        /**
         * Quickbase record ids to delete.
         * @minItems 1
         */
        recordIds: Array<number>;
      };
      output: {
        /** Record ids deleted by Quickbase. */
        deletedRecordIds: Array<number>;
        /** Number of records deleted by Quickbase. */
        numberDeleted: number;
      };
    };
    /** Retrieve metadata for a Quickbase app. */
    "quickbase.get_app": {
      input: {
        /**
         * Quickbase app identifier.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Object returned by Quickbase. */
        app: Record<string, unknown>;
      };
    };
    /** List fields in a Quickbase table. */
    "quickbase.get_table_fields": {
      input: {
        /**
         * Quickbase table identifier.
         * @minLength 1
         */
        tableId: string;
        /** Whether to include field permission metadata. */
        includeFieldPerms?: boolean;
      };
      output: {
        /** Fields returned by Quickbase. */
        fields: Array<Record<string, unknown>>;
      };
    };
    /** List tables in a Quickbase app. */
    "quickbase.list_app_tables": {
      input: {
        /**
         * Quickbase app identifier.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Tables returned by Quickbase. */
        tables: Array<Record<string, unknown>>;
      };
    };
    /** Query records from a Quickbase table. */
    "quickbase.query_records": {
      input: {
        /**
         * Quickbase table identifier to query.
         * @minLength 1
         */
        tableId: string;
        /**
         * Field ids to return. Omit to use Quickbase defaults.
         * @minItems 1
         */
        select?: Array<number>;
        /**
         * Quickbase query filter string.
         * @minLength 1
         */
        where?: string;
        /**
         * Sort instructions for returned records.
         * @minItems 1
         */
        sortBy?: Array<{
          /**
           * Quickbase field identifier.
           * @exclusiveMinimum 0
           */
          fieldId: number;
          /** Sort order used by Quickbase. */
          order: "ASC" | "DESC";
        }>;
        /**
         * Grouping instructions for returned records.
         * @minItems 1
         */
        groupBy?: Array<{
          /**
           * Quickbase field identifier.
           * @exclusiveMinimum 0
           */
          fieldId: number;
          /** Quickbase grouping mode. */
          grouping: "equal-values";
        }>;
        /** Quickbase query paging options. */
        options?: {
          /**
           * Number of records to skip.
           * @minimum 0
           */
          skip?: number;
          /**
           * Maximum number of records to return.
           * @exclusiveMinimum 0
           */
          top?: number;
          /** Whether to compare date values in app local time. */
          compareWithAppLocalTime?: boolean;
        };
      };
      output: {
        /** Records returned by Quickbase. */
        data: Array<Record<string, {
            /** Field value returned by Quickbase. */
            value?: unknown;
            [key: string]: unknown;
          }>>;
        /** Field metadata returned with the query. */
        fields: Array<Record<string, unknown>>;
        /** Query metadata returned by Quickbase. */
        metadata: {
          /** Total record count reported by Quickbase. */
          totalRecords?: number;
          /** Number of records in the current response. */
          numRecords?: number;
          /** Number of fields in each returned record. */
          numFields?: number;
          /** Number of records skipped. */
          skip?: number;
          /** Maximum number of records requested. */
          top?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Insert or update records in a Quickbase table. */
    "quickbase.upsert_records": {
      input: {
        /**
         * Quickbase table identifier.
         * @minLength 1
         */
        tableId: string;
        /**
         * Records to insert or update.
         * @minItems 1
         */
        data: Array<Record<string, {
            /** Value to write for the field. */
            value: unknown;
            [key: string]: unknown;
          }>>;
        /**
         * Field ids to include in the response.
         * @minItems 1
         */
        fieldsToReturn?: Array<number>;
        /**
         * Quickbase field identifier.
         * @exclusiveMinimum 0
         */
        mergeFieldId?: number;
        /**
         * Quickbase field name used as the merge key.
         * @minLength 1
         */
        mergeFieldName?: string;
      };
      output: {
        /** Returned records after insert or update. */
        data: Array<Record<string, {
            /** Field value returned by Quickbase. */
            value?: unknown;
            [key: string]: unknown;
          }>>;
        /** Object returned by Quickbase. */
        metadata?: Record<string, unknown>;
      };
    };
  }
}
