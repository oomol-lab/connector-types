import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a Customer.io person and their information through the Track API. */
    "customerio.delete_customer": {
      input: {
        /**
         * The Customer.io person identifier in the path. Use the person's id, email address, or cio_id value with the cio_ prefix.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
    /** Add or update a Customer.io person through the Track API. */
    "customerio.identify_customer": {
      input: {
        /**
         * The Customer.io person identifier in the path. Use the person's id, email address, or cio_id value with the cio_ prefix.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** The Customer.io profile attributes to assign to the person. */
        attributes: {
          /** The Customer.io id attribute to assign to the person. */
          id?: string;
          /**
           * The Customer.io email attribute to assign to the person.
           * @format email
           */
          email?: string;
          /** The anonymous identifier to associate with the person. */
          anonymous_id?: string;
          /** The Unix timestamp when the person was created. */
          created_at?: number;
          /** The Unix timestamp for when this attribute update occurred. */
          _timestamp?: number;
          /** Whether Customer.io should only update an existing person instead of creating a new one. */
          _update?: boolean;
          /** Whether the person is unsubscribed from all messages. */
          unsubscribed?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
    /** Merge two Customer.io people, keeping the primary profile and deleting the secondary profile. */
    "customerio.merge_customers": {
      input: {
        /** A Customer.io person reference identified by exactly one of id, email, or cio_id. */
        primary: {
          /**
           * The Customer.io person id.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The Customer.io person email address.
           * @format email
           */
          email?: string;
          /**
           * The Customer.io cio_id value with the cio_ prefix.
           * @minLength 1
           * @pattern \S
           */
          cio_id?: string;
        };
        /** A Customer.io person reference identified by exactly one of id, email, or cio_id. */
        secondary: {
          /**
           * The Customer.io person id.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The Customer.io person email address.
           * @format email
           */
          email?: string;
          /**
           * The Customer.io cio_id value with the cio_ prefix.
           * @minLength 1
           * @pattern \S
           */
          cio_id?: string;
        };
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
    /** Delete and suppress a Customer.io person identifier so it cannot be re-added until unsuppressed. */
    "customerio.suppress_customer": {
      input: {
        /**
         * The Customer.io person identifier in the path. Use the person's id, email address, or cio_id value with the cio_ prefix.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
    /** Track an event for an anonymous person in Customer.io. */
    "customerio.track_anonymous_event": {
      input: {
        /**
         * The Customer.io anonymous_id value for the event.
         * @minLength 1
         * @pattern \S
         */
        anonymousId: string;
        /**
         * The Customer.io event name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The Customer.io event type. Use event for standard events, page for page views, or screen for mobile screen views. */
        type?: "event" | "page" | "screen";
        /**
         * The optional Customer.io dedupe id for the event.
         * @minLength 1
         * @pattern \S
         */
        eventId?: string;
        /** The Unix timestamp when the event occurred. */
        timestamp?: number;
        /** Additional Customer.io event data for Liquid merge fields, campaign triggers, or attributes. */
        data?: {
          /** The recipient value used by Customer.io message trigger overrides. */
          recipient?: string;
          /** The from_address value used by Customer.io message trigger overrides. */
          from_address?: string;
          /** The reply_to value used by Customer.io message trigger overrides. */
          reply_to?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
    /** Track an event associated with an identified Customer.io person. */
    "customerio.track_customer_event": {
      input: {
        /**
         * The Customer.io person identifier in the path. Use the person's id, email address, or cio_id value with the cio_ prefix.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /**
         * The Customer.io anonymous_id value required by Customer.io for screen events.
         * @minLength 1
         * @pattern \S
         */
        anonymousId?: string;
        /**
         * The Customer.io event name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The Customer.io event type. Use event for standard events, page for page views, or screen for mobile screen views. */
        type?: "event" | "page" | "screen";
        /**
         * The optional Customer.io dedupe id for the event.
         * @minLength 1
         * @pattern \S
         */
        eventId?: string;
        /** The Unix timestamp when the event occurred. */
        timestamp?: number;
        /** Additional Customer.io event data for Liquid merge fields, campaign triggers, or attributes. */
        data?: {
          /** The recipient value used by Customer.io message trigger overrides. */
          recipient?: string;
          /** The from_address value used by Customer.io message trigger overrides. */
          from_address?: string;
          /** The reply_to value used by Customer.io message trigger overrides. */
          reply_to?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
    /** Unsuppress a Customer.io person identifier so a new profile can be created later. */
    "customerio.unsuppress_customer": {
      input: {
        /**
         * The Customer.io person identifier in the path. Use the person's id, email address, or cio_id value with the cio_ prefix.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
      };
      output: {
        /** Whether Customer.io accepted the request. */
        ok: boolean;
      };
    };
  }
}
