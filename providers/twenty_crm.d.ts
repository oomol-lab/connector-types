import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Twenty record for a workspace object. */
    "twenty_crm.create_record": {
      input: {
        /**
         * The Twenty plural object API name, such as companies, people, opportunities, or a custom object plural name.
         * @minLength 1
         */
        objectNamePlural: string;
        /** A JSON object accepted or returned by Twenty. */
        data: Record<string, unknown>;
      };
      output: {
        /** A Twenty record. */
        record: Record<string, unknown>;
        /** The raw Twenty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Twenty record by object API name and record UUID. */
    "twenty_crm.delete_record": {
      input: {
        /**
         * The Twenty plural object API name, such as companies, people, opportunities, or a custom object plural name.
         * @minLength 1
         */
        objectNamePlural: string;
        /**
         * The Twenty record UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Twenty record. */
        record: Record<string, unknown> | null;
        /** Whether Twenty reported the delete operation as successful. */
        success: boolean;
        /** The raw Twenty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Twenty metadata objects for the connected workspace. */
    "twenty_crm.list_metadata_objects": {
      input: Record<string, never>;
      output: {
        /** The Twenty metadata object definitions. */
        objects: Array<Record<string, unknown>>;
        /** The raw Twenty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Twenty records for one workspace object using the generated schema-per-tenant REST API. */
    "twenty_crm.list_records": {
      input: {
        /**
         * The Twenty plural object API name, such as companies, people, opportunities, or a custom object plural name.
         * @minLength 1
         */
        objectNamePlural: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The Twenty record UUID.
         * @format uuid
         */
        startingAfter?: string;
        /**
         * The Twenty record UUID.
         * @format uuid
         */
        endingBefore?: string;
        /** A JSON object accepted or returned by Twenty. */
        filter?: Record<string, unknown>;
        /** A JSON object accepted or returned by Twenty. */
        orderBy?: Record<string, unknown>;
        /**
         * The relation depth to include in the returned records.
         * @minimum 0
         * @maximum 10
         */
        depth?: number;
      };
      output: {
        /** The Twenty records returned by the API. */
        records: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Twenty. */
        pageInfo: Record<string, unknown>;
        /** The raw Twenty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Twenty record by object API name and record UUID. */
    "twenty_crm.retrieve_record": {
      input: {
        /**
         * The Twenty plural object API name, such as companies, people, opportunities, or a custom object plural name.
         * @minLength 1
         */
        objectNamePlural: string;
        /**
         * The Twenty record UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Twenty record. */
        record: Record<string, unknown>;
        /** The raw Twenty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Twenty record by object API name and record UUID. */
    "twenty_crm.update_record": {
      input: {
        /**
         * The Twenty plural object API name, such as companies, people, opportunities, or a custom object plural name.
         * @minLength 1
         */
        objectNamePlural: string;
        /**
         * The Twenty record UUID.
         * @format uuid
         */
        id: string;
        /** A JSON object accepted or returned by Twenty. */
        data: Record<string, unknown>;
      };
      output: {
        /** A Twenty record. */
        record: Record<string, unknown>;
        /** The raw Twenty API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
