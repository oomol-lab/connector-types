import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one NetSuite record for a record type. */
    "netsuite.create_record": {
      input: {
        /**
         * The NetSuite record type path segment, such as customer, vendor, salesOrder, or invoice.
         * @minLength 1
         */
        recordType: string;
        /** A NetSuite JSON object with record-type-specific fields. */
        body: Record<string, unknown>;
      };
      output: {
        /** Whether NetSuite accepted the create request. */
        ok: boolean;
        /** The NetSuite Location header for the created record, when returned. */
        location?: string;
        /** The NetSuite response body, when NetSuite returned one. */
        record?: Record<string, unknown>;
      };
    };
    /** Retrieve one NetSuite record by record type and ID. */
    "netsuite.get_record": {
      input: {
        /**
         * The NetSuite record type path segment, such as customer, vendor, salesOrder, or invoice.
         * @minLength 1
         */
        recordType: string;
        /**
         * The NetSuite internal ID or external ID for the record.
         * @minLength 1
         */
        recordId: string;
        /** Whether NetSuite should expand subresources. */
        expandSubResources?: boolean;
      };
      output: {
        /** A NetSuite JSON object with record-type-specific fields. */
        record: Record<string, unknown>;
      };
    };
    /** List NetSuite records of one record type with optional REST filtering. */
    "netsuite.list_records": {
      input: {
        /**
         * The NetSuite record type path segment, such as customer, vendor, salesOrder, or invoice.
         * @minLength 1
         */
        recordType: string;
        /**
         * The maximum number of NetSuite records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based NetSuite result offset.
         * @minimum 0
         */
        offset?: number;
        /** NetSuite REST record filtering expression. */
        q?: string;
      };
      output: {
        /** A NetSuite paged collection response. */
        records: {
          /** Links returned with the NetSuite collection. */
          links: Array<{
            /** The link relationship returned by NetSuite. */
            rel: string;
            /** The link URL or path returned by NetSuite. */
            href: string;
            [key: string]: unknown;
          }>;
          /** The number of records returned in this page. */
          count: number;
          /** Whether NetSuite has more records after this page. */
          hasMore: boolean;
          /** The offset returned by NetSuite. */
          offset: number;
          /** The total result count returned by NetSuite, when available. */
          totalResults: number;
          /** NetSuite records returned in this page. */
          items: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Execute a SuiteQL query through NetSuite REST Web Services. */
    "netsuite.run_suiteql": {
      input: {
        /**
         * The SuiteQL query text to execute.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of NetSuite records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based NetSuite result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** A NetSuite paged collection response. */
        result: {
          /** Links returned with the NetSuite collection. */
          links: Array<{
            /** The link relationship returned by NetSuite. */
            rel: string;
            /** The link URL or path returned by NetSuite. */
            href: string;
            [key: string]: unknown;
          }>;
          /** The number of records returned in this page. */
          count: number;
          /** Whether NetSuite has more records after this page. */
          hasMore: boolean;
          /** The offset returned by NetSuite. */
          offset: number;
          /** The total result count returned by NetSuite, when available. */
          totalResults: number;
          /** NetSuite records returned in this page. */
          items: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update one NetSuite record by record type and ID. */
    "netsuite.update_record": {
      input: {
        /**
         * The NetSuite record type path segment, such as customer, vendor, salesOrder, or invoice.
         * @minLength 1
         */
        recordType: string;
        /**
         * The NetSuite internal ID or external ID for the record.
         * @minLength 1
         */
        recordId: string;
        /** A NetSuite JSON object with record-type-specific fields. */
        body: Record<string, unknown>;
      };
      output: {
        /** Whether NetSuite accepted the update. */
        ok: boolean;
        /** The NetSuite Location header for the updated record, when returned. */
        location?: string;
        /** The NetSuite response body, when NetSuite returned one. */
        record?: Record<string, unknown>;
      };
    };
  }
}
