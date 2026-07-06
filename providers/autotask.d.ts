import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Autotask entityInformation metadata for Companies, Contacts, or Tickets. */
    "autotask.get_entity_information": {
      input: {
        /** Autotask entity to query. */
        entity: "Companies" | "Contacts" | "Tickets";
        /** Autotask entityInformation section to retrieve. */
        section?: "summary" | "fields" | "userDefinedFields";
      };
      output: {
        /** Autotask entity metadata returned by the selected endpoint. */
        information: Record<string, unknown>;
        /** Raw entity metadata response returned by Autotask. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Autotask Company, Contact, or Ticket by numeric ID. */
    "autotask.get_record": {
      input: {
        /** Autotask entity to query. */
        entity: "Companies" | "Contacts" | "Tickets";
        /**
         * Numeric Autotask record ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Autotask record returned by ID. */
        item: Record<string, unknown>;
        /** Raw record response returned by Autotask. */
        raw: Record<string, unknown>;
      };
    };
    /** Return the Autotask REST API zone URL for the connected API user. */
    "autotask.get_zone_information": {
      input: Record<string, never>;
      output: {
        /** Normalized Autotask REST API base URL for the API user. */
        apiBaseUrl?: string;
        /** Autotask zone name returned for the API user. */
        zoneName?: string | null;
        /** Autotask web app URL returned for the API user. */
        webUrl?: string | null;
        /** Autotask customer identifier returned for the API user. */
        ci?: number | null;
        /** Raw ZoneInformation response returned by Autotask. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query Autotask Companies, Contacts, or Tickets with optional filter, IncludeFields, and MaxRecords parameters. */
    "autotask.query_records": {
      input: {
        /** Autotask entity to query. */
        entity: "Companies" | "Contacts" | "Tickets";
        /**
         * Autotask filter expressions.
         * @minItems 1
         */
        filter?: Array<{
          /** Autotask filter operator, such as eq, noteq, gt, exist, in, or or. */
          op?: string;
          /** Autotask field name used by the filter expression. */
          field?: string;
          /** Autotask filter value. */
          value?: unknown;
          /** Whether the filter targets a user-defined field. */
          udf?: boolean;
          /** Nested Autotask filter expressions for grouped AND or OR filters. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * Autotask field names to include in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Maximum records to return. Autotask allows 1 to 500 per page.
         * @minimum 1
         * @maximum 500
         */
        maxRecords?: number;
      };
      output: {
        /** Autotask records returned by the query. */
        items: Array<Record<string, unknown>>;
        /** Autotask query pagination details. */
        pageDetails: {
          /** Number of records in the current page. */
          count?: number;
          /** Maximum number of records requested. */
          requestCount?: number;
          /** Previous page URL returned by Autotask. */
          prevPageUrl?: string | null;
          /** Next page URL returned by Autotask. */
          nextPageUrl?: string | null;
          [key: string]: unknown;
        };
        /** Raw query response returned by Autotask. */
        raw: Record<string, unknown>;
      };
    };
  }
}
