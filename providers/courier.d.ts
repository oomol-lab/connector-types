import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add Courier recipients to a subscription list without replacing existing members. */
    "courier.add_list_subscribers": {
      input: {
        /**
         * The Courier list ID.
         * @minLength 1
         * @pattern \S
         */
        listId: string;
        /**
         * The Courier recipients to subscribe.
         * @minItems 1
         */
        recipients: Array<{
          /**
           * The Courier recipient ID to subscribe.
           * @minLength 1
           * @pattern \S
           */
          recipientId: string;
          /** The Courier recipient preferences object. */
          preferences?: Record<string, unknown>;
        }>;
      };
      output: {
        /** The Courier list ID used for the request. */
        listId: string;
        /** Whether the subscription request completed successfully. */
        success: boolean;
        /** The HTTP status code returned by Courier. */
        statusCode: number;
      };
    };
    /** Delete a Courier subscription list by list ID. */
    "courier.delete_list": {
      input: {
        /**
         * The Courier list ID.
         * @minLength 1
         * @pattern \S
         */
        listId: string;
      };
      output: {
        /** The Courier list ID used for the request. */
        listId: string;
        /** Whether the delete request completed successfully. */
        success: boolean;
        /** The HTTP status code returned by Courier. */
        statusCode: number;
      };
    };
    /** Delete a Courier user profile by user ID. */
    "courier.delete_profile": {
      input: {
        /**
         * The Courier user ID associated with the profile.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** The Courier user ID used for the request. */
        userId: string;
        /** Whether the delete request completed successfully. */
        success: boolean;
        /** The HTTP status code returned by Courier. */
        statusCode: number;
      };
    };
    /** Return a Courier subscription list by list ID. */
    "courier.get_list": {
      input: {
        /**
         * The Courier list ID.
         * @minLength 1
         * @pattern \S
         */
        listId: string;
      };
      output: {
        /** A Courier subscription list. */
        list: {
          /** The Courier list ID. */
          id: string;
          /** The Courier list name. */
          name: string;
          /** The timestamp when Courier reports the list was created. */
          created: string | null;
          /** The timestamp when Courier reports the list was last updated. */
          updated: string | null;
          /** An object returned by the Courier API. */
          raw: Record<string, unknown>;
        };
        /** The raw Courier API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return a Courier user profile and preferences by user ID. */
    "courier.get_profile": {
      input: {
        /**
         * The Courier user ID associated with the profile.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** The Courier user ID used for the request. */
        userId: string;
        /** The Courier profile object to merge into the user profile. */
        profile: Record<string, unknown>;
        /** The Courier recipient preferences object. */
        preferences: Record<string, unknown> | null;
        /** The raw Courier API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List subscriptions for a Courier subscription list. */
    "courier.list_list_subscriptions": {
      input: {
        /**
         * The Courier list ID.
         * @minLength 1
         * @pattern \S
         */
        listId: string;
        /**
         * The Courier pagination cursor for the next page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** The Courier list ID used for the request. */
        listId: string;
        /** Courier pagination metadata. */
        paging: {
          /** The cursor for the next page when Courier returns one. */
          cursor: string | null;
          /** Whether Courier reports more records after this page. */
          more: boolean;
        };
        /** The Courier list subscriptions returned for this page. */
        subscriptions: Array<{
          /** The subscribed Courier recipient ID. */
          recipientId: string;
          /** The timestamp when Courier reports the subscription was created. */
          created: string | null;
          /** The Courier recipient preferences object. */
          preferences: Record<string, unknown> | null;
          /** An object returned by the Courier API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Courier API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Courier subscription lists with optional cursor and pattern filters. */
    "courier.list_lists": {
      input: {
        /**
         * The Courier pagination cursor for the next page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The Courier list pattern filter.
         * @minLength 1
         * @pattern \S
         */
        pattern?: string;
      };
      output: {
        /** Courier pagination metadata. */
        paging: {
          /** The cursor for the next page when Courier returns one. */
          cursor: string | null;
          /** Whether Courier reports more records after this page. */
          more: boolean;
        };
        /** The Courier subscription lists returned for this page. */
        lists: Array<{
          /** The Courier list ID. */
          id: string;
          /** The Courier list name. */
          name: string;
          /** The timestamp when Courier reports the list was created. */
          created: string | null;
          /** The timestamp when Courier reports the list was last updated. */
          updated: string | null;
          /** An object returned by the Courier API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Courier API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Merge values into a Courier user profile or create it when missing. */
    "courier.merge_profile": {
      input: {
        /**
         * The Courier user ID associated with the profile.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
        /** The Courier profile object to merge into the user profile. */
        profile: Record<string, unknown>;
      };
      output: {
        /** The Courier user ID used for the request. */
        userId: string;
        /** The Courier merge status when present. */
        status: string | null;
        /** The raw Courier API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a Courier message to one or more recipients. */
    "courier.send_message": {
      input: {
        /** The Courier message object passed to POST /send. */
        message: Record<string, unknown>;
        /**
         * The optional Courier Idempotency-Key header value used to deduplicate a logical send request.
         * @minLength 1
         * @pattern \S
         */
        idempotencyKey?: string;
      };
      output: {
        /** The Courier requestId value. Single-recipient sends return a string; multi-recipient sends may return a structured value. */
        requestId: unknown;
        /** The raw Courier API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Unsubscribe one Courier user profile from a subscription list. */
    "courier.unsubscribe_list_subscriber": {
      input: {
        /**
         * The Courier list ID.
         * @minLength 1
         * @pattern \S
         */
        listId: string;
        /**
         * The Courier user ID associated with the profile.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** The Courier list ID used for the request. */
        listId: string;
        /** The Courier user ID used for the request. */
        userId: string;
        /** Whether the unsubscribe request completed successfully. */
        success: boolean;
        /** The HTTP status code returned by Courier. */
        statusCode: number;
      };
    };
    /** Create or replace a Courier subscription list. */
    "courier.upsert_list": {
      input: {
        /**
         * The Courier list ID.
         * @minLength 1
         * @pattern \S
         */
        listId: string;
        /**
         * The Courier subscription list name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The Courier recipient preferences object. */
        preferences?: Record<string, unknown>;
      };
      output: {
        /** The Courier list ID used for the request. */
        listId: string;
        /** Whether the upsert request completed successfully. */
        success: boolean;
        /** The HTTP status code returned by Courier. */
        statusCode: number;
      };
    };
  }
}
