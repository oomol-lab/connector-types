import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one pretix event by organizer and event slug. */
    "pretix.get_event": {
      input: {
        /** The organizer slug. */
        organizer: string;
        /** The event slug. */
        event: string;
      };
      output: {
        /** A pretix event. */
        event: {
          /** The translated event name keyed by locale. */
          name?: Record<string, unknown>;
          /** The event slug. */
          slug?: string;
          /** Whether the ticket shop is live. */
          live?: boolean;
          /** Whether the event is in test mode. */
          testmode?: boolean;
          /** The event currency code. */
          currency?: string;
          /** The event start date and time, or null for an event series without a single start date. */
          date_from?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one product or ticket item from a pretix event. */
    "pretix.get_item": {
      input: {
        /** The organizer slug. */
        organizer: string;
        /** The event slug. */
        event: string;
        /**
         * The item ID.
         * @exclusiveMinimum 0
         */
        itemId: number;
      };
      output: {
        /** A pretix item or product. */
        item: {
          /** The item ID. */
          id?: number;
          /** The translated item name keyed by locale. */
          name?: Record<string, unknown>;
          /** The default item price as a decimal string. */
          default_price?: string;
          /** Whether the item is active. */
          active?: boolean;
          /** Whether the item grants event admission. */
          admission?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one pretix order by organizer, event, and order code. */
    "pretix.get_order": {
      input: {
        /** The organizer slug. */
        organizer: string;
        /** The event slug. */
        event: string;
        /** The order code. */
        orderCode: string;
      };
      output: {
        /** A pretix order. */
        order: {
          /** The order code. */
          code?: string;
          /** The parent event slug. */
          event?: string;
          /** The order status code. */
          status?: string;
          /** Whether the order was created in test mode. */
          testmode?: boolean;
          /** The customer email address. */
          email?: string;
          /** The order creation date and time. */
          datetime?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one pretix organizer by slug. */
    "pretix.get_organizer": {
      input: {
        /** The organizer slug. */
        organizer: string;
      };
      output: {
        /** A pretix organizer. */
        organizer: {
          /** The organizer name. */
          name?: string;
          /** The organizer slug. */
          slug?: string;
          /** The public organizer URL. */
          public_url?: string;
          /** Enabled organizer plugin package names. */
          plugins?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List events belonging to a pretix organizer. */
    "pretix.list_events": {
      input: {
        /** The organizer slug. */
        organizer: string;
        /**
         * The one-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The official pretix ordering expression for this resource. */
        ordering?: string;
      };
      output: {
        /**
         * The total number of matching resources.
         * @minimum 0
         */
        count: number;
        /** The next page URL, or null when there is no next page. */
        next: string | null;
        /** The previous page URL, or null when there is no previous page. */
        previous: string | null;
        /** Events returned by pretix. */
        events: Array<{
          /** The translated event name keyed by locale. */
          name?: Record<string, unknown>;
          /** The event slug. */
          slug?: string;
          /** Whether the ticket shop is live. */
          live?: boolean;
          /** Whether the event is in test mode. */
          testmode?: boolean;
          /** The event currency code. */
          currency?: string;
          /** The event start date and time, or null for an event series without a single start date. */
          date_from?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List products or ticket items configured for a pretix event. */
    "pretix.list_items": {
      input: {
        /** The organizer slug. */
        organizer: string;
        /** The event slug. */
        event: string;
        /**
         * The one-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The official pretix ordering expression for this resource. */
        ordering?: string;
      };
      output: {
        /**
         * The total number of matching resources.
         * @minimum 0
         */
        count: number;
        /** The next page URL, or null when there is no next page. */
        next: string | null;
        /** The previous page URL, or null when there is no previous page. */
        previous: string | null;
        /** Items returned by pretix. */
        items: Array<{
          /** The item ID. */
          id?: number;
          /** The translated item name keyed by locale. */
          name?: Record<string, unknown>;
          /** The default item price as a decimal string. */
          default_price?: string;
          /** Whether the item is active. */
          active?: boolean;
          /** Whether the item grants event admission. */
          admission?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List and filter orders for a pretix event. */
    "pretix.list_orders": {
      input: {
        /** The organizer slug. */
        organizer: string;
        /** The event slug. */
        event: string;
        /**
         * The one-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The official pretix ordering expression for this resource. */
        ordering?: string;
        /** The pretix order status code to filter by. */
        status?: string;
        /** A search query matched against order and attendee fields. */
        search?: string;
        /** Only return orders modified at or after this ISO 8601 date and time. */
        modifiedSince?: string;
      };
      output: {
        /**
         * The total number of matching resources.
         * @minimum 0
         */
        count: number;
        /** The next page URL, or null when there is no next page. */
        next: string | null;
        /** The previous page URL, or null when there is no previous page. */
        previous: string | null;
        /** Orders returned by pretix. */
        orders: Array<{
          /** The order code. */
          code?: string;
          /** The parent event slug. */
          event?: string;
          /** The order status code. */
          status?: string;
          /** Whether the order was created in test mode. */
          testmode?: boolean;
          /** The customer email address. */
          email?: string;
          /** The order creation date and time. */
          datetime?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List pretix organizers accessible to the connected API token. */
    "pretix.list_organizers": {
      input: {
        /**
         * The one-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The official pretix ordering expression for this resource. */
        ordering?: string;
      };
      output: {
        /**
         * The total number of matching resources.
         * @minimum 0
         */
        count: number;
        /** The next page URL, or null when there is no next page. */
        next: string | null;
        /** The previous page URL, or null when there is no previous page. */
        previous: string | null;
        /** Organizers returned by pretix. */
        organizers: Array<{
          /** The organizer name. */
          name?: string;
          /** The organizer slug. */
          slug?: string;
          /** The public organizer URL. */
          public_url?: string;
          /** Enabled organizer plugin package names. */
          plugins?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
