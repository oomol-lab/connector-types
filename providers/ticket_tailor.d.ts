import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one event belonging to the connected Ticket Tailor box office. */
    "ticket_tailor.get_event": {
      input: {
        /**
         * The Ticket Tailor event ID to retrieve.
         * @minLength 1
         */
        event_id: string;
      };
      output: {
        /**
         * The Ticket Tailor resource identifier.
         * @minLength 1
         */
        id?: string;
        /** The Ticket Tailor resource type when returned by the API. */
        object?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one issued ticket from the connected Ticket Tailor box office. */
    "ticket_tailor.get_issued_ticket": {
      input: {
        /**
         * The Ticket Tailor issued ticket ID to retrieve.
         * @minLength 1
         */
        issued_ticket_id: string;
      };
      output: {
        /**
         * The Ticket Tailor resource identifier.
         * @minLength 1
         */
        id?: string;
        /** The Ticket Tailor resource type when returned by the API. */
        object?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one order belonging to the connected Ticket Tailor box office. */
    "ticket_tailor.get_order": {
      input: {
        /**
         * The Ticket Tailor order ID to retrieve.
         * @minLength 1
         */
        order_id: string;
      };
      output: {
        /**
         * The Ticket Tailor resource identifier.
         * @minLength 1
         */
        id?: string;
        /** The Ticket Tailor resource type when returned by the API. */
        object?: string;
        [key: string]: unknown;
      };
    };
    /** List events belonging to the connected Ticket Tailor box office. */
    "ticket_tailor.list_events": {
      input: {
        /**
         * A Ticket Tailor object ID used as a cursor for pagination.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A Ticket Tailor object ID used as a cursor for pagination.
         * @minLength 1
         */
        ending_before?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Filter events starting at this Unix timestamp. */
        start_at?: number;
        /** Filter events starting after this Unix timestamp. */
        "start_at.gt"?: number;
        /** Filter events starting at or after this Unix timestamp. */
        "start_at.gte"?: number;
        /** Filter events starting before this Unix timestamp. */
        "start_at.lt"?: number;
        /** Filter events starting at or before this Unix timestamp. */
        "start_at.lte"?: number;
        /** Filter events ending at this Unix timestamp. */
        end_at?: number;
        /** Filter events ending after this Unix timestamp. */
        "end_at.gt"?: number;
        /** Filter events ending at or after this Unix timestamp. */
        "end_at.gte"?: number;
        /** Filter events ending before this Unix timestamp. */
        "end_at.lt"?: number;
        /** Filter events ending at or before this Unix timestamp. */
        "end_at.lte"?: number;
        /**
         * A comma-separated list of event statuses: published, draft, or sales_closed.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter events by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter events by venue.
         * @minLength 1
         */
        venue?: string;
      };
      output: {
        /** Resources returned by Ticket Tailor. */
        data?: Array<{
          /**
           * The Ticket Tailor resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The Ticket Tailor resource type when returned by the API. */
          object?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ticket Tailor. */
        links?: {
          /** The URL for the next page when one exists. */
          next?: string | null;
          /** The URL for the previous page when one exists. */
          previous?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List tickets issued by the connected Ticket Tailor box office. */
    "ticket_tailor.list_issued_tickets": {
      input: {
        /**
         * A Ticket Tailor object ID used as a cursor for pagination.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A Ticket Tailor object ID used as a cursor for pagination.
         * @minLength 1
         */
        ending_before?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter issued tickets by event ID.
         * @minLength 1
         */
        event_id?: string;
        /**
         * Filter issued tickets by event series ID.
         * @minLength 1
         */
        event_series_id?: string;
        /**
         * Filter issued tickets by order ID.
         * @minLength 1
         */
        order_id?: string;
        /**
         * Filter issued tickets by barcode.
         * @minLength 1
         */
        barcode?: string;
        /**
         * Filter issued tickets by attendee name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter issued tickets by attendee email address.
         * @format email
         */
        email?: string;
        /**
         * Filter issued tickets by external reference.
         * @minLength 1
         */
        reference?: string;
        /** Filter issued tickets by status. */
        status?: "valid" | "voided";
        /** Filter resources created at this Unix timestamp. */
        created_at?: number;
        /** Filter resources created after this Unix timestamp. */
        "created_at.gt"?: number;
        /** Filter resources created at or after this Unix timestamp. */
        "created_at.gte"?: number;
        /** Filter resources created before this Unix timestamp. */
        "created_at.lt"?: number;
        /** Filter resources created at or before this Unix timestamp. */
        "created_at.lte"?: number;
      };
      output: {
        /** Resources returned by Ticket Tailor. */
        data?: Array<{
          /**
           * The Ticket Tailor resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The Ticket Tailor resource type when returned by the API. */
          object?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ticket Tailor. */
        links?: {
          /** The URL for the next page when one exists. */
          next?: string | null;
          /** The URL for the previous page when one exists. */
          previous?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List orders belonging to the connected Ticket Tailor box office. */
    "ticket_tailor.list_orders": {
      input: {
        /**
         * A Ticket Tailor object ID used as a cursor for pagination.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A Ticket Tailor object ID used as a cursor for pagination.
         * @minLength 1
         */
        ending_before?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Filter resources created at this Unix timestamp. */
        created_at?: number;
        /** Filter resources created after this Unix timestamp. */
        "created_at.gt"?: number;
        /** Filter resources created at or after this Unix timestamp. */
        "created_at.gte"?: number;
        /** Filter resources created before this Unix timestamp. */
        "created_at.lt"?: number;
        /** Filter resources created at or before this Unix timestamp. */
        "created_at.lte"?: number;
        /**
         * Filter orders by the buyer's first, last, or full name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter orders by the buyer's email address.
         * @format email
         */
        email?: string;
        /**
         * Filter orders by transaction ID.
         * @minLength 1
         */
        txn_id?: string;
        /**
         * Filter orders by ticket barcode.
         * @minLength 1
         */
        barcode?: string;
        /**
         * A comma-separated list of event IDs used to filter orders.
         * @minLength 1
         */
        event_id?: string;
        /**
         * A comma-separated list of event series IDs used to filter orders.
         * @minLength 1
         */
        event_series_id?: string;
        /** Filter orders by status. */
        status?: "completed" | "pending" | "canceled";
        /**
         * Filter orders by a store ID prefixed with st_.
         * @minLength 1
         */
        store_id?: string;
        /**
         * Filter orders by the referral tracking tag.
         * @minLength 1
         */
        referral_tag?: string;
      };
      output: {
        /** Resources returned by Ticket Tailor. */
        data?: Array<{
          /**
           * The Ticket Tailor resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The Ticket Tailor resource type when returned by the API. */
          object?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ticket Tailor. */
        links?: {
          /** The URL for the next page when one exists. */
          next?: string | null;
          /** The URL for the previous page when one exists. */
          previous?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
