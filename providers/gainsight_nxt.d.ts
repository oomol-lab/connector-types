import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one Gainsight NXT Company record by its GSID. */
    "gainsight_nxt.delete_company": {
      input: {
        /**
         * The Gainsight GSID of the Company record to delete.
         * @minLength 1
         */
        gsid: string;
      };
      output: {
        /** Whether Gainsight reported a successful request. */
        result: boolean;
        /** Gainsight request identifier for troubleshooting. */
        requestId: string | null;
        /** Gainsight deletion status message. */
        data: string | null;
        /** The raw Gainsight API response wrapper, including result, errorCode, errorDesc, requestId, data, and message when returned. */
        rawResponse: Record<string, unknown>;
      };
    };
    /** Insert up to 50 records into the Gainsight NXT Company object using field names from your tenant's Data Management schema. */
    "gainsight_nxt.insert_companies": {
      input: {
        /**
         * Company records to insert. Each record must use field names from your Gainsight Company schema.
         * @minItems 1
         * @maxItems 50
         */
        records: Array<Record<string, unknown>>;
        /** Optional Gainsight import lookup configuration used to populate GSID fields from the same or another object. */
        lookups?: Record<string, unknown>;
      };
      output: {
        /** Whether Gainsight reported a successful request. */
        result: boolean;
        /** Gainsight request identifier for troubleshooting. */
        requestId: string | null;
        /** Normalized Gainsight Company mutation data. */
        data: {
          /** Number of records Gainsight reported for the mutation. */
          count: number | null;
          /** Gainsight records returned by the Company API. */
          records: Array<Record<string, unknown>>;
          /** Raw Gainsight validation or processing errors returned for failed records. */
          errors: unknown;
        };
        /** The raw Gainsight API response wrapper, including result, errorCode, errorDesc, requestId, data, and message when returned. */
        rawResponse: Record<string, unknown>;
      };
    };
    /** Query Gainsight NXT Company records with selected fields, optional where conditions, sorting, limit, and offset. */
    "gainsight_nxt.query_companies": {
      input: {
        /**
         * Company fields to return, including relationship paths such as csm__gr.email when supported by your tenant schema.
         * @minItems 1
         */
        select: Array<string>;
        /** Optional Gainsight where clause. */
        where?: {
          /**
           * Conditions used by the Gainsight where expression.
           * @minItems 1
           */
          conditions?: Array<{
            /**
             * Company field name used by this condition.
             * @minLength 1
             */
            name: string;
            /**
             * Condition alias used in the where expression.
             * @minLength 1
             */
            alias: string;
            /**
             * Gainsight query operator such as EQ, IN, BTW, GT, or LT.
             * @minLength 1
             */
            operator: string;
            /** Condition value or values accepted by the Gainsight operator. */
            value: unknown;
            [key: string]: unknown;
          }>;
          /**
           * Boolean expression over condition aliases, such as A OR B.
           * @minLength 1
           */
          expression?: string;
        };
        /** Optional sort map whose keys are Company fields and whose values are asc or desc. */
        orderBy?: Record<string, "asc" | "desc">;
        /**
         * Maximum number of records to return. Gainsight documents a maximum of 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Zero-based result offset for fetching additional records.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Whether Gainsight reported a successful request. */
        result: boolean;
        /** Gainsight request identifier for troubleshooting. */
        requestId: string | null;
        /** Gainsight records returned by the Company API. */
        records: Array<Record<string, unknown>>;
        /** The raw Gainsight API response wrapper, including result, errorCode, errorDesc, requestId, data, and message when returned. */
        rawResponse: Record<string, unknown>;
      };
    };
    /** Update up to 50 Gainsight NXT Company records identified by one to three Company key fields. */
    "gainsight_nxt.update_companies": {
      input: {
        /**
         * Company field names used to identify records. Gainsight supports up to three String, GSID, Number, or Email keys and combines them with AND.
         * @minItems 1
         * @maxItems 3
         */
        keys: Array<string>;
        /**
         * Company records to update. Each record must contain the key fields and the values to update.
         * @minItems 1
         * @maxItems 50
         */
        records: Array<Record<string, unknown>>;
        /** Optional Gainsight import lookup configuration used to populate GSID fields from the same or another object. */
        lookups?: Record<string, unknown>;
      };
      output: {
        /** Whether Gainsight reported a successful request. */
        result: boolean;
        /** Gainsight request identifier for troubleshooting. */
        requestId: string | null;
        /** Normalized Gainsight Company mutation data. */
        data: {
          /** Number of records Gainsight reported for the mutation. */
          count: number | null;
          /** Gainsight records returned by the Company API. */
          records: Array<Record<string, unknown>>;
          /** Raw Gainsight validation or processing errors returned for failed records. */
          errors: unknown;
        };
        /** The raw Gainsight API response wrapper, including result, errorCode, errorDesc, requestId, data, and message when returned. */
        rawResponse: Record<string, unknown>;
      };
    };
  }
}
