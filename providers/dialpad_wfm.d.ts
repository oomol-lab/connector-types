import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one page of Dialpad WFM schedule entries for an RFC 3339 time interval. */
    "dialpad_wfm.get_schedule": {
      input: {
        /**
         * Start of the reporting interval in RFC 3339 format.
         * @format date-time
         */
        start: string;
        /**
         * End of the reporting interval in RFC 3339 format.
         * @format date-time
         */
        end: string;
        /** Whether to include deleted agent schedules. Dialpad WFM defaults this to true. */
        includeDeletedAgents?: boolean;
        /**
         * Maximum number of schedule entries to return in one response. Dialpad WFM defaults to 100.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * Schedule pagination cursor from the links.next URL in a previous response.
         * @minLength 1
         */
        pageAfter?: string;
      };
      output: {
        /** The schedule entries returned for this page. */
        data: Array<Record<string, unknown>>;
        /** Dialpad WFM schedule pagination links. */
        links: {
          /**
           * The URL of this page of schedule results.
           * @minLength 1
           */
          self: string;
          /**
           * The URL of the next page of schedule results, or null when there are no more pages.
           * @minLength 1
           */
          next: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one cursor page of Dialpad WFM activity metrics for an RFC 3339 interval. */
    "dialpad_wfm.list_activity_metrics": {
      input: {
        /**
         * Start of the reporting interval in RFC 3339 format.
         * @format date-time
         */
        start: string;
        /**
         * End of the reporting interval in RFC 3339 format.
         * @format date-time
         */
        end: string;
        /**
         * Comma-separated agent email addresses to filter by.
         * @minLength 1
         */
        emails?: string;
        /** Whether to include deleted agents in the response. */
        includeDeletedAgents?: boolean;
        /**
         * Maximum number of metric records to return. Dialpad WFM defaults to 500 and caps the value at 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Pagination cursor from a previous Dialpad WFM response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The metric records returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The pagination cursor for the next page, or null when there are no more results.
         * @minLength 1
         */
        cursor: string | null;
      };
    };
    /** Retrieve one cursor page of Dialpad WFM agent metrics for an RFC 3339 interval. */
    "dialpad_wfm.list_agent_metrics": {
      input: {
        /**
         * Start of the reporting interval in RFC 3339 format.
         * @format date-time
         */
        start: string;
        /**
         * End of the reporting interval in RFC 3339 format.
         * @format date-time
         */
        end: string;
        /**
         * Comma-separated agent email addresses to filter by.
         * @minLength 1
         */
        emails?: string;
        /** Whether to include deleted agents in the response. */
        includeDeletedAgents?: boolean;
        /**
         * Maximum number of metric records to return. Dialpad WFM defaults to 500 and caps the value at 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Pagination cursor from a previous Dialpad WFM response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The metric records returned for this page. */
        items: Array<Record<string, unknown>>;
        /**
         * The pagination cursor for the next page, or null when there are no more results.
         * @minLength 1
         */
        cursor: string | null;
      };
    };
  }
}
