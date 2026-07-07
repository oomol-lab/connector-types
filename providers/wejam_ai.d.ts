import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Export one page of Jam training data for reporting or BI workflows. */
    "wejam_ai.export_data": {
      input: {
        /** The Jam data-export resource to retrieve. */
        resource: "users" | "teams" | "missions" | "tracks" | "sprints" | "track-assignments" | "mission-assignments" | "sessions" | "real-call-sessions" | "scorecards";
        /**
         * The one-indexed page number to return. Jam defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Jam allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Jam data-export resource to retrieve. */
        resource: "users" | "teams" | "missions" | "tracks" | "sprints" | "track-assignments" | "mission-assignments" | "sessions" | "real-call-sessions" | "scorecards";
        /** The records returned for the requested Jam data-export resource. */
        data: Array<Record<string, unknown>>;
        /** Jam pagination metadata for a data-export page. */
        meta: {
          /** The total number of records matching the export request. */
          total: number;
          /** The one-indexed page number returned by Jam. */
          page: number;
          /** The page size returned by Jam. */
          limit: number;
          /** Whether another page exists after this response. */
          hasNext: boolean;
        };
      };
    };
  }
}
