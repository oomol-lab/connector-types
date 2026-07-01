import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List LiveSession session replays with pagination and common filters. */
    "livesession.list_sessions": {
      input: {
        /**
         * The page number to start with. LiveSession defaults to 0.
         * @minimum 0
         * @maximum 10000
         */
        page?: number;
        /**
         * The number of sessions per page. LiveSession defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter sessions by the identified visitor email address.
         * @format email
         */
        email?: string;
        /**
         * Filter sessions by LiveSession visitor ID.
         * @minLength 1
         */
        visitorId?: string;
        /**
         * IANA timezone used by LiveSession for relative date filters.
         * @minLength 1
         */
        timezone?: string;
        /** An ISO 8601 timestamp or LiveSession relative date string. */
        dateFrom?: string | "TODAY" | "YESTERDAY" | "BEGINNING_OF_WEEK" | "BEGINNING_OF_MONTH";
        /** An ISO 8601 timestamp or LiveSession relative date string. */
        dateTo?: string | "TODAY" | "YESTERDAY" | "BEGINNING_OF_WEEK" | "BEGINNING_OF_MONTH";
      };
      output: {
        /**
         * Total sessions matching the query.
         * @minimum 0
         */
        total: number;
        /** LiveSession pagination metadata. */
        page: {
          /** The current LiveSession page number. */
          num: number;
          /** The page size used by LiveSession. */
          size: number;
        };
        /** Sessions returned by LiveSession. */
        sessions: Array<{
          /** The LiveSession session identifier. */
          id?: string;
          /** The website identifier where the session was recorded. */
          websiteId?: string | null;
          /** The URL to open the session in the LiveSession dashboard. */
          sessionUrl?: string | null;
          /** Unix timestamp when the session was created, as returned by LiveSession. */
          creationTimestamp?: number | null;
          /** Total session duration in seconds when returned. */
          duration?: number | null;
          /** Device type reported for the session. */
          device?: string | null;
          /** Nested LiveSession session data. */
          visitor?: Record<string, unknown> | null;
          /** The raw LiveSession session object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw LiveSession list sessions response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
