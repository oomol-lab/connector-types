import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one TicketSource event by its case-sensitive identifier. */
    "ticket_source.get_event": {
      input: {
        /**
         * The case-sensitive TicketSource resource identifier.
         * @minLength 1
         * @pattern \S
         */
        eventId: string;
      };
      output: {
        /** A TicketSource resource. */
        event: {
          /** The case-sensitive TicketSource resource identifier. */
          id: string;
          /** The TicketSource resource type. */
          type: string;
          /** The attributes returned for the resource. */
          attributes: Record<string, unknown>;
          /** The related resource links returned by TicketSource. */
          links: Record<string, unknown>;
        };
      };
    };
    /** List performance dates associated with a TicketSource event. */
    "ticket_source.list_event_dates": {
      input: {
        /**
         * The case-sensitive TicketSource resource identifier.
         * @minLength 1
         * @pattern \S
         */
        eventId: string;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The dates returned by TicketSource. */
        dates: Array<{
          /** The case-sensitive TicketSource resource identifier. */
          id: string;
          /** The TicketSource resource type. */
          type: string;
          /** The attributes returned for the resource. */
          attributes: Record<string, unknown>;
          /** The related resource links returned by TicketSource. */
          links: Record<string, unknown>;
        }>;
        /** The first, last, previous, and next page links returned by TicketSource. */
        links: Record<string, unknown>;
        /** The pagination metadata returned by TicketSource. */
        meta: Record<string, unknown>;
      };
    };
    /** List venues associated with a TicketSource event. */
    "ticket_source.list_event_venues": {
      input: {
        /**
         * The case-sensitive TicketSource resource identifier.
         * @minLength 1
         * @pattern \S
         */
        eventId: string;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The venues returned by TicketSource. */
        venues: Array<{
          /** The case-sensitive TicketSource resource identifier. */
          id: string;
          /** The TicketSource resource type. */
          type: string;
          /** The attributes returned for the resource. */
          attributes: Record<string, unknown>;
          /** The related resource links returned by TicketSource. */
          links: Record<string, unknown>;
        }>;
        /** The first, last, previous, and next page links returned by TicketSource. */
        links: Record<string, unknown>;
        /** The pagination metadata returned by TicketSource. */
        meta: Record<string, unknown>;
      };
    };
    /** List events in the connected TicketSource account. */
    "ticket_source.list_events": {
      input: {
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The events returned by TicketSource. */
        events: Array<{
          /** The case-sensitive TicketSource resource identifier. */
          id: string;
          /** The TicketSource resource type. */
          type: string;
          /** The attributes returned for the resource. */
          attributes: Record<string, unknown>;
          /** The related resource links returned by TicketSource. */
          links: Record<string, unknown>;
        }>;
        /** The first, last, previous, and next page links returned by TicketSource. */
        links: Record<string, unknown>;
        /** The pagination metadata returned by TicketSource. */
        meta: Record<string, unknown>;
      };
    };
  }
}
