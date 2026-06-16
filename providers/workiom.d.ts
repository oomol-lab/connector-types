import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a record in a Workiom list from a JSON object keyed by field ID. */
    "workiom.create_record": {
      input: {
        /**
         * The Workiom UUID value.
         * @minLength 1
         */
        listId: string;
        /** The record field values keyed by Workiom field ID, using values that match each field type. */
        record: Record<string, unknown>;
      };
      output: {
        /** The raw Workiom object. */
        record: Record<string, unknown>;
        /** The raw Workiom response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Workiom list metadata including fields, views, or filters. */
    "workiom.get_list_metadata": {
      input: {
        /**
         * The Workiom UUID value.
         * @minLength 1
         */
        listId: string;
        /**
         * The list metadata sections to expand.
         * @minItems 1
         */
        expand?: Array<"Fields" | "Views" | "Filters">;
      };
      output: {
        /** Workiom list metadata with fields, views, and filters when expanded. */
        list: {
          /** The Workiom list ID. */
          id: string;
          /** The Workiom list name. */
          name?: string;
          /** The Workiom app ID that owns the list. */
          appId?: string;
          /** The fields configured on the list. */
          fields?: Array<Record<string, unknown>>;
          /** The views configured on the list. */
          views?: Array<Record<string, unknown>>;
          /** The filters configured on the list. */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw Workiom response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Workiom apps available to the connected API key. */
    "workiom.list_apps": {
      input: Record<string, never>;
      output: {
        /** The Workiom apps returned by the API. */
        apps: Array<{
          /** The Workiom app ID. */
          id: string;
          /** The Workiom app name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** The raw Workiom response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Workiom lists in an app. */
    "workiom.list_lists": {
      input: {
        /**
         * The Workiom UUID value.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** The Workiom lists returned by the API. */
        lists: Array<{
          /** The Workiom list ID. */
          id: string;
          /** The Workiom list name. */
          name?: string;
          /** The Workiom app ID that owns the list. */
          appId?: string;
          [key: string]: unknown;
        }>;
        /** The total number of Workiom lists when present. */
        totalCount: number | null;
        /** The raw Workiom response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List records from a Workiom list with optional filters, sorting, and pagination. */
    "workiom.list_records": {
      input: {
        /**
         * The Workiom UUID value.
         * @minLength 1
         */
        listId: string;
        /** The filters to apply to the record query. */
        filters?: Array<{
          /** The numeric field ID to filter on. */
          fieldId: number;
          /**
           * The Workiom filter operator code such as 1 for Contains, 3 for Is, or 12 for In.
           * @minimum 1
           * @maximum 13
           */
          operator: number;
          /** The value to compare in a Workiom record filter. */
          value: string | number | boolean | Array<string> | Array<number>;
        }>;
        /**
         * The Workiom sorting expression such as '11284 ASC'.
         * @minLength 1
         */
        sorting?: string;
        /**
         * The number of records to skip for pagination.
         * @minimum 0
         */
        skipCount?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        maxResultCount?: number;
      };
      output: {
        /** The record objects returned by Workiom. */
        records: Array<Record<string, unknown>>;
        /** The total matching record count when present. */
        totalCount: number | null;
        /** The Workiom summary object when present. */
        summary: Record<string, unknown> | null;
        /** The raw Workiom response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
