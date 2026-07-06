import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List 1Password audit events using the official cursor-based Events API. */
    "one_password_events.list_audit_events": {
      input: {
        /**
         * Cursor from a previous 1Password Events API response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Start time for a reset cursor request.
         * @format date-time
         */
        startTime?: string;
        /**
         * End time for a reset cursor request.
         * @format date-time
         */
        endTime?: string;
        /**
         * Maximum number of events to return, from 1 to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Cursor to continue reading the event stream. */
        cursor: string;
        /** Whether 1Password reports more events are available for this cursor. */
        hasMore: boolean;
        /** The event objects returned by 1Password. */
        events: Array<Record<string, unknown>>;
        /** The raw 1Password Events API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List 1Password item usage events using the official cursor-based Events API. */
    "one_password_events.list_item_usages": {
      input: {
        /**
         * Cursor from a previous 1Password Events API response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Start time for a reset cursor request.
         * @format date-time
         */
        startTime?: string;
        /**
         * End time for a reset cursor request.
         * @format date-time
         */
        endTime?: string;
        /**
         * Maximum number of events to return, from 1 to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Cursor to continue reading the event stream. */
        cursor: string;
        /** Whether 1Password reports more events are available for this cursor. */
        hasMore: boolean;
        /** The event objects returned by 1Password. */
        events: Array<Record<string, unknown>>;
        /** The raw 1Password Events API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List 1Password sign-in attempts using the official cursor-based Events API. */
    "one_password_events.list_sign_in_attempts": {
      input: {
        /**
         * Cursor from a previous 1Password Events API response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Start time for a reset cursor request.
         * @format date-time
         */
        startTime?: string;
        /**
         * End time for a reset cursor request.
         * @format date-time
         */
        endTime?: string;
        /**
         * Maximum number of events to return, from 1 to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Cursor to continue reading the event stream. */
        cursor: string;
        /** Whether 1Password reports more events are available for this cursor. */
        hasMore: boolean;
        /** The event objects returned by 1Password. */
        events: Array<Record<string, unknown>>;
        /** The raw 1Password Events API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
