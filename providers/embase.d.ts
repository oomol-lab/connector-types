import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Embase article record by a documented literature identifier. */
    "embase.get_article": {
      input: {
        /** The identifier namespace used by the supplied value. */
        identifierType: "lui" | "pii" | "doi" | "embase" | "pubmed_id" | "medline";
        /**
         * The article identifier in the selected namespace.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
      };
      output: {
        /** One raw Embase record returned by Elsevier. */
        record: Record<string, unknown>;
        /** The Embase quota metadata returned in response headers. */
        quota: {
          /**
           * The request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Embase biomedical literature with a CommandLanguage query or an encoded alert identifier. */
    "embase.search_articles": {
      input: {
        /**
         * An Embase CommandLanguage Boolean query.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * An encoded Embase alert identifier from an alert email.
         * @minLength 1
         * @pattern \S
         */
        alertId?: string;
        /**
         * The one-based position of the first result to return.
         * @exclusiveMinimum 0
         */
        start?: number;
        /**
         * The maximum number of results to return, subject to the account service limit.
         * @exclusiveMinimum 0
         */
        count?: number;
        /** The ordering applied to matching records. */
        sort?: "entrydate" | "publicationyear" | "relevance";
      };
      output: {
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalResults: number | null;
        /** The raw Embase result records in this page. */
        entries: Array<Record<string, unknown>>;
        /** The Embase quota metadata returned in response headers. */
        quota: {
          /**
           * The request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
  }
}
