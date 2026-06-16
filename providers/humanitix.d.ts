import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve full Humanitix metadata for a single event by event ID. */
    "humanitix.get_event": {
      input: {
        /**
         * The unique Humanitix event identifier.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** The complete Humanitix event object. */
        event: Record<string, unknown>;
      };
    };
    /** List Humanitix events accessible to the connected account, with optional pagination and update filters. */
    "humanitix.list_events": {
      input: {
        /**
         * Page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of events to fetch per page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Return events updated since this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /** Whether to return only events with an end date in the future. */
        inFutureOnly?: boolean;
        /**
         * ISO 3166-1 alpha-2 country code used to override user location.
         * @minLength 2
         * @maxLength 2
         */
        overrideLocation?: string;
      };
      output: {
        /** Humanitix event records. */
        events: Array<{
          /** The Humanitix event identifier. */
          id?: string;
          /** The event name. */
          name?: string;
          /** The event slug. */
          slug?: string;
          /** The public event URL when one is returned. */
          url?: string | null;
          /** The event start date returned by Humanitix. */
          startDate?: string;
          /** The event end date returned by Humanitix. */
          endDate?: string;
          /** The event timezone. */
          timezone?: string;
          /** The event currency code. */
          currency?: string;
          /** Whether the event is public. */
          public?: boolean;
          /** Whether the event is published. */
          published?: boolean;
          /** The event creation timestamp returned by Humanitix. */
          createdAt?: string;
          /** The event update timestamp returned by Humanitix. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Humanitix list endpoints. */
        pagination: {
          /** The current result page number. */
          page: number;
          /** The number of records requested for each page. */
          pageSize: number;
          /** The total number of records matching the request. */
          total: number;
        };
      };
    };
    /** List tags associated with the connected Humanitix account. */
    "humanitix.list_tags": {
      input: {
        /**
         * Page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Humanitix tag records. */
        tags: Array<{
          /** The unique Humanitix tag identifier. */
          id: string;
          /** The tag name. */
          name: string;
        }>;
        /** Pagination metadata returned by Humanitix list endpoints. */
        pagination: {
          /** The current result page number. */
          page: number;
          /** The number of records requested for each page. */
          pageSize: number;
          /** The total number of records matching the request. */
          total: number;
        };
      };
    };
  }
}
