import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count the most frequent values of a field in a supported openFDA drug dataset, optionally filtered by a search expression. */
    "openfda.count_drug_values": {
      input: {
        /** The openFDA drug dataset to query. */
        dataset: "event" | "label" | "ndc" | "enforcement" | "orangebook" | "drugsfda" | "shortages";
        /**
         * The searchable openFDA field to count, such as patient.reaction.reactionmeddrapt.exact.
         * @minLength 1
         */
        field: string;
        /**
         * An openFDA search expression, such as openfda.brand_name:Advil or receivedate:[20240101 TO 20241231].
         * @minLength 1
         */
        search?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 99
         */
        limit?: number;
      };
      output: {
        /** Metadata returned by openFDA. */
        meta: {
          /** The openFDA data-use disclaimer. */
          disclaimer: string | null;
          /** The URL of the openFDA terms of service. */
          terms: string | null;
          /** The URL of the openFDA data license. */
          license: string | null;
          /** The dataset update date reported by openFDA. */
          lastUpdated: string | null;
          /** The result offset reported by openFDA. */
          skip: number | null;
          /** The result page size reported by openFDA. */
          limit: number | null;
          /** The total number of records matching the query. */
          total: number | null;
          /** A raw object returned by openFDA. */
          raw: Record<string, unknown>;
        };
        /** The field values ordered by frequency by openFDA. */
        counts: Array<{
          /** The field value returned by openFDA. */
          term: string;
          /** The number of matching records containing the field value. */
          count: number;
        }>;
      };
    };
    /** Search and page through records from a supported openFDA drug dataset. Results are informational and must not be used as medical advice. */
    "openfda.search_drug_records": {
      input: {
        /** The openFDA drug dataset to query. */
        dataset: "event" | "label" | "ndc" | "enforcement" | "orangebook" | "drugsfda" | "shortages";
        /**
         * An openFDA search expression, such as openfda.brand_name:Advil or receivedate:[20240101 TO 20241231].
         * @minLength 1
         */
        search?: string;
        /**
         * An openFDA sort expression containing a field and optional :asc or :desc modifier.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 99
         */
        limit?: number;
        /**
         * The number of matching records to skip before returning results. The sum of skip and limit cannot exceed 26,000.
         * @minimum 0
         * @maximum 25999
         */
        skip?: number;
      };
      output: {
        /** Metadata returned by openFDA. */
        meta: {
          /** The openFDA data-use disclaimer. */
          disclaimer: string | null;
          /** The URL of the openFDA terms of service. */
          terms: string | null;
          /** The URL of the openFDA data license. */
          license: string | null;
          /** The dataset update date reported by openFDA. */
          lastUpdated: string | null;
          /** The result offset reported by openFDA. */
          skip: number | null;
          /** The result page size reported by openFDA. */
          limit: number | null;
          /** The total number of records matching the query. */
          total: number | null;
          /** A raw object returned by openFDA. */
          raw: Record<string, unknown>;
        };
        /** The raw records returned by the selected openFDA dataset. */
        records: Array<Record<string, unknown>>;
      };
    };
  }
}
