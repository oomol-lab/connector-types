import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Pulsetic monitor by ID. */
    "pulsetic.get_monitor": {
      input: {
        /**
         * The unique Pulsetic monitor ID.
         * @minimum 1
         */
        monitorId: number;
      };
      output: {
        /** A monitor returned by Pulsetic. */
        monitor: {
          /** The unique Pulsetic monitor ID. */
          id?: number;
          /** The monitor name. */
          name?: string;
          /** The monitored URL. */
          url?: string;
          /** The current monitor status. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get total Pulsetic downtime for a monitor over an optional lookback window. */
    "pulsetic.get_monitor_downtime": {
      input: {
        /**
         * The unique Pulsetic monitor ID.
         * @minimum 1
         */
        monitorId: number;
        /**
         * The lookback window in seconds used to calculate downtime.
         * @exclusiveMinimum 0
         */
        seconds?: number;
      };
      output: {
        /** The total downtime in seconds reported by Pulsetic. */
        downtimeSeconds: number;
      };
    };
    /** Get Pulsetic uptime, downtime, and response-time statistics for a monitor. */
    "pulsetic.get_monitor_stats": {
      input: {
        /**
         * The unique Pulsetic monitor ID.
         * @minimum 1
         */
        monitorId: number;
      };
      output: {
        /** The 1-, 7-, 30-, and 90-day statistics returned by Pulsetic. */
        stats: Record<string, unknown>;
      };
    };
    /** List Pulsetic checks for a monitor and time range. */
    "pulsetic.list_monitor_checks": {
      input: {
        /**
         * The unique Pulsetic monitor ID.
         * @minimum 1
         */
        monitorId: number;
        /**
         * The start or end of the query window as a date-time accepted by Pulsetic.
         * @minLength 1
         */
        startTime: string;
        /**
         * The start or end of the query window as a date-time accepted by Pulsetic.
         * @minLength 1
         */
        endTime: string;
        /**
         * The Pulsetic node slugs used to filter checks.
         * @minItems 1
         */
        nodes?: Array<string>;
        /**
         * The HTTP response codes used to filter checks.
         * @minItems 1
         */
        responseCodes?: Array<number>;
      };
      output: {
        /** The monitor checks returned by Pulsetic. */
        checks: Array<Record<string, unknown>>;
      };
    };
    /** List Pulsetic online and offline events for a monitor and time range. */
    "pulsetic.list_monitor_events": {
      input: {
        /**
         * The unique Pulsetic monitor ID.
         * @minimum 1
         */
        monitorId: number;
        /**
         * The start or end of the query window as a date-time accepted by Pulsetic.
         * @minLength 1
         */
        startTime: string;
        /**
         * The start or end of the query window as a date-time accepted by Pulsetic.
         * @minLength 1
         */
        endTime: string;
        /** The monitor event type used to filter results. */
        eventType?: "Online" | "Offline";
      };
      output: {
        /** The monitor events returned by Pulsetic. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List hourly Pulsetic snapshots for a monitor and time range. */
    "pulsetic.list_monitor_snapshots": {
      input: {
        /**
         * The unique Pulsetic monitor ID.
         * @minimum 1
         */
        monitorId: number;
        /**
         * The start or end of the query window as a date-time accepted by Pulsetic.
         * @minLength 1
         */
        startTime: string;
        /**
         * The start or end of the query window as a date-time accepted by Pulsetic.
         * @minLength 1
         */
        endTime: string;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The Pulsetic node slugs used to filter snapshots.
         * @minItems 1
         */
        nodes?: Array<string>;
      };
      output: {
        /** The monitor snapshots returned by Pulsetic. */
        snapshots: Array<Record<string, unknown>>;
      };
    };
    /** List Pulsetic monitors with optional pagination. */
    "pulsetic.list_monitors": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The Pulsetic monitors on the requested page. */
        monitors: Array<{
          /** The unique Pulsetic monitor ID. */
          id?: number;
          /** The monitor name. */
          name?: string;
          /** The monitored URL. */
          url?: string;
          /** The current monitor status. */
          status?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
