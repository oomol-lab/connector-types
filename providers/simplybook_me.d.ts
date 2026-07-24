import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get performer ids available for a SimplyBook.me service at a specific date-time. */
    "simplybook_me.get_available_units": {
      input: {
        /**
         * The SimplyBook.me service event id.
         * @exclusiveMinimum 0
         */
        serviceId: number;
        /**
         * The requested date and time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         */
        dateTime: string;
        /**
         * The booking count used for availability checks.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** Performer unit ids available for the requested slot. */
        performerIds: Array<number>;
      };
    };
    /** Get public company profile and configuration details from SimplyBook.me. */
    "simplybook_me.get_company_info": {
      input: Record<string, never>;
      output: {
        /** The SimplyBook.me company information object. */
        company: {
          /** The company name returned by SimplyBook.me. */
          name?: string;
          /** The company login returned by SimplyBook.me. */
          login?: string;
          /** The company email returned by SimplyBook.me. */
          email?: string;
          /** The company timezone returned by SimplyBook.me. */
          timezone?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get available SimplyBook.me start times for a service and performer over a date range. */
    "simplybook_me.get_start_time_matrix": {
      input: {
        /**
         * The first date to include in YYYY-MM-DD format.
         * @format date
         */
        from: string;
        /**
         * The last date to include in YYYY-MM-DD format.
         * @format date
         */
        to: string;
        /**
         * The SimplyBook.me service event id.
         * @exclusiveMinimum 0
         */
        serviceId: number;
        /**
         * The SimplyBook.me performer unit id.
         * @exclusiveMinimum 0
         */
        performerId: number;
        /**
         * The booking count used for availability checks.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** Available start times keyed by date. */
        timesByDate: Record<string, Array<string>>;
      };
    };
    /** List SimplyBook.me service performers that can provide services. */
    "simplybook_me.list_performers": {
      input: {
        /** Whether to return only records visible on the public booking site. */
        isVisibleOnly?: boolean;
      };
      output: {
        /** Performers returned by SimplyBook.me. */
        performers: Array<{
          /** The performer unit id returned by SimplyBook.me. */
          id?: string;
          /** The performer name returned by SimplyBook.me. */
          name?: string;
          /** The performer email returned by SimplyBook.me. */
          email?: string;
          /** Whether the performer is active in SimplyBook.me. */
          is_active?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SimplyBook.me public service events available for booking. */
    "simplybook_me.list_services": {
      input: {
        /** Whether to return only records visible on the public booking site. */
        isVisibleOnly?: boolean;
      };
      output: {
        /** Service events returned by SimplyBook.me. */
        services: Array<{
          /** The service event id returned by SimplyBook.me. */
          id?: string;
          /** The service name returned by SimplyBook.me. */
          name?: string;
          /** The service duration returned by SimplyBook.me. */
          duration?: string;
          /** Whether the service is public in SimplyBook.me. */
          is_public?: string;
          /** Whether the service is active in SimplyBook.me. */
          is_active?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
