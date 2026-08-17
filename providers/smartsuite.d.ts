import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a record in a SmartSuite Table using its field slugs. */
    "smartsuite.create_record": {
      input: {
        /**
         * The SmartSuite Table ID.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /** Record values keyed by SmartSuite Table field slug. */
        fields: Record<string, unknown>;
      };
      output: {
        /** A SmartSuite record whose properties are determined by the Table field slugs. */
        record: Record<string, unknown>;
      };
    };
    /** Delete one record from a SmartSuite Table. */
    "smartsuite.delete_record": {
      input: {
        /**
         * The SmartSuite Table ID.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The SmartSuite record ID.
         * @minLength 1
         * @pattern \S
         */
        recordId: string;
      };
      output: {
        /** Whether the record deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Retrieve one record from a SmartSuite Table. */
    "smartsuite.get_record": {
      input: {
        /**
         * The SmartSuite Table ID.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The SmartSuite record ID.
         * @minLength 1
         * @pattern \S
         */
        recordId: string;
        /** Whether to include human-readable labels for supported field types. */
        hydrated?: boolean;
      };
      output: {
        /** A SmartSuite record whose properties are determined by the Table field slugs. */
        record: Record<string, unknown>;
      };
    };
    /** List records in a SmartSuite Table with optional pagination, sorting, and filtering. */
    "smartsuite.list_records": {
      input: {
        /**
         * The SmartSuite Table ID.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Whether to include records marked as deleted. */
        includeDeleted?: boolean;
        /** Whether to include human-readable labels for supported field types. */
        hydrated?: boolean;
        /** SmartSuite sort directives in the order they should be applied. */
        sort?: Array<Record<string, unknown>>;
        /** A SmartSuite group filter using the official filter syntax. */
        filter?: Record<string, unknown>;
      };
      output: {
        /**
         * The total number of matching records.
         * @minimum 0
         */
        total: number;
        /**
         * The current pagination offset.
         * @minimum 0
         */
        offset: number;
        /**
         * The response page limit.
         * @minimum 0
         */
        limit: number;
        /** The records returned for this page. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** List the Solutions accessible in the connected SmartSuite workspace. */
    "smartsuite.list_solutions": {
      input: Record<string, never>;
      output: {
        /** The accessible Solutions. */
        solutions: Array<{
          /**
           * The Solution ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /** The Solution name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SmartSuite Tables, optionally limited to one Solution. */
    "smartsuite.list_tables": {
      input: {
        /**
         * The Solution ID used to limit the returned Tables.
         * @minLength 1
         * @pattern \S
         */
        solutionId?: string;
      };
      output: {
        /** The accessible Tables. */
        tables: Array<{
          /**
           * The Table ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /** The Table name. */
          name?: string;
          /**
           * The ID of the Solution containing the Table.
           * @minLength 1
           * @pattern \S
           */
          solution?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Partially update fields on a SmartSuite record without clearing omitted fields. */
    "smartsuite.update_record": {
      input: {
        /**
         * The SmartSuite Table ID.
         * @minLength 1
         * @pattern \S
         */
        tableId: string;
        /**
         * The SmartSuite record ID.
         * @minLength 1
         * @pattern \S
         */
        recordId: string;
        /** Record values keyed by SmartSuite Table field slug. */
        fields: Record<string, unknown>;
      };
      output: {
        /** A SmartSuite record whose properties are determined by the Table field slugs. */
        record: Record<string, unknown>;
      };
    };
  }
}
