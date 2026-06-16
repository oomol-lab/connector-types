import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Knack record in the selected object with a raw JSON record payload. */
    "knack.create_record": {
      input: {
        /**
         * The Knack object key, such as object_1, that identifies which object to query.
         * @minLength 1
         */
        objectKey: string;
        /** The Knack response format query parameter forwarded to the API. */
        format?: "html" | "raw" | "both";
        /** A Knack record payload containing field_xx keys and any nested data returned by the API. */
        record: Record<string, unknown>;
      };
      output: {
        /** A Knack record payload containing field_xx keys and any nested data returned by the API. */
        record: Record<string, unknown>;
      };
    };
    /** Delete one Knack record by object key and record ID. */
    "knack.delete_record": {
      input: {
        /**
         * The Knack object key, such as object_1, that identifies which object to query.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The Knack record ID, such as 6838de4ef4d2453c4d1b402f, that identifies one record.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether the Knack delete request completed successfully. */
        deleted: boolean;
        /**
         * The Knack record ID, such as 6838de4ef4d2453c4d1b402f, that identifies one record.
         * @minLength 1
         */
        recordId: string;
        /** The raw Knack delete response payload when the API returned a JSON body. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Retrieve one Knack record by object key and record ID. */
    "knack.get_record": {
      input: {
        /**
         * The Knack object key, such as object_1, that identifies which object to query.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The Knack record ID, such as 6838de4ef4d2453c4d1b402f, that identifies one record.
         * @minLength 1
         */
        recordId: string;
        /** The Knack response format query parameter forwarded to the API. */
        format?: "html" | "raw" | "both";
      };
      output: {
        /** A Knack record payload containing field_xx keys and any nested data returned by the API. */
        record: Record<string, unknown>;
      };
    };
    /** List records from one Knack object with optional pagination, sorting, formatting, and filter query parameters. */
    "knack.list_records": {
      input: {
        /**
         * The Knack object key, such as object_1, that identifies which object to query.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The 1-based page number to request from Knack.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        rowsPerPage?: number;
        /** The Knack response format query parameter forwarded to the API. */
        format?: "html" | "raw" | "both";
        /**
         * The Knack field key used for server-side sorting, such as field_25.
         * @minLength 1
         */
        sortField?: string;
        /** The Knack sort order applied to the selected sort field. */
        sortOrder?: "asc" | "desc";
        /** The Knack filters JSON object forwarded to the filters query parameter as-is. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** The records returned by the current Knack list request. */
        records: Array<Record<string, unknown>>;
        /** The current Knack response page when the API includes pagination metadata. */
        currentPage: number | null;
        /** The total number of available Knack pages when returned by the API. */
        totalPages: number | null;
        /** The total number of Knack records that match the current query. */
        totalRecords: number | null;
        /** The raw Knack list response envelope returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Knack record by sending a partial JSON payload for the selected object and record ID. */
    "knack.update_record": {
      input: {
        /**
         * The Knack object key, such as object_1, that identifies which object to query.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The Knack record ID, such as 6838de4ef4d2453c4d1b402f, that identifies one record.
         * @minLength 1
         */
        recordId: string;
        /** The Knack response format query parameter forwarded to the API. */
        format?: "html" | "raw" | "both";
        /** A Knack record payload containing field_xx keys and any nested data returned by the API. */
        record: Record<string, unknown>;
      };
      output: {
        /** A Knack record payload containing field_xx keys and any nested data returned by the API. */
        record: Record<string, unknown>;
      };
    };
  }
}
