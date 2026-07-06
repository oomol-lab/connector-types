import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a Segment Alias call to associate one user identity with another. */
    "segment.alias": {
      input: {
        /**
         * Unique identifier for the user in your database.
         * @minLength 1
         */
        userId: string;
        /**
         * Previous unique identifier for the user.
         * @minLength 1
         */
        previousId: string;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
        /**
         * Timestamp when the message took place, in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /**
         * Timestamp when the message was sent to Segment, in ISO 8601 format.
         * @format date-time
         */
        sentAt?: string;
        /**
         * Unique message identifier used by Segment for deduplication.
         * @minLength 1
         * @maxLength 100
         */
        messageId?: string;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
    /** Send a Segment Batch call containing Identify, Group, Track, Page, or Screen items. */
    "segment.batch": {
      input: {
        /**
         * Segment event items to send in this batch.
         * @minItems 1
         * @maxItems 2500
         */
        batch: Array<{
          /** Segment event type for this batch item. */
          type: "identify" | "track" | "page" | "screen" | "group";
          [key: string]: unknown;
        }>;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
    /** Send a Segment Group call to associate a user with a group. */
    "segment.group": {
      input: {
        /**
         * Unique identifier for the user in your database.
         * @minLength 1
         */
        userId?: string;
        /**
         * Pseudo-unique anonymous identifier for the user.
         * @minLength 1
         */
        anonymousId?: string;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
        /**
         * Timestamp when the message took place, in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /**
         * Timestamp when the message was sent to Segment, in ISO 8601 format.
         * @format date-time
         */
        sentAt?: string;
        /**
         * Unique message identifier used by Segment for deduplication.
         * @minLength 1
         * @maxLength 100
         */
        messageId?: string;
        /**
         * Unique identifier for the group in your database.
         * @minLength 1
         */
        groupId: string;
        /** Free-form traits associated with the group. */
        traits?: Record<string, unknown>;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
    /** Send a Segment Identify call to record user traits. */
    "segment.identify": {
      input: {
        /**
         * Unique identifier for the user in your database.
         * @minLength 1
         */
        userId?: string;
        /**
         * Pseudo-unique anonymous identifier for the user.
         * @minLength 1
         */
        anonymousId?: string;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
        /**
         * Timestamp when the message took place, in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /**
         * Timestamp when the message was sent to Segment, in ISO 8601 format.
         * @format date-time
         */
        sentAt?: string;
        /**
         * Unique message identifier used by Segment for deduplication.
         * @minLength 1
         * @maxLength 100
         */
        messageId?: string;
        /** Free-form traits associated with the user. */
        traits?: Record<string, unknown>;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
    /** Send a Segment Page call to record a website page view. */
    "segment.page": {
      input: {
        /**
         * Unique identifier for the user in your database.
         * @minLength 1
         */
        userId?: string;
        /**
         * Pseudo-unique anonymous identifier for the user.
         * @minLength 1
         */
        anonymousId?: string;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
        /**
         * Timestamp when the message took place, in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /**
         * Timestamp when the message was sent to Segment, in ISO 8601 format.
         * @format date-time
         */
        sentAt?: string;
        /**
         * Unique message identifier used by Segment for deduplication.
         * @minLength 1
         * @maxLength 100
         */
        messageId?: string;
        /**
         * Optional page name.
         * @minLength 1
         */
        name?: string;
        /** Free-form properties associated with the page. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
    /** Send a Segment Screen call to record a mobile app screen view. */
    "segment.screen": {
      input: {
        /**
         * Unique identifier for the user in your database.
         * @minLength 1
         */
        userId?: string;
        /**
         * Pseudo-unique anonymous identifier for the user.
         * @minLength 1
         */
        anonymousId?: string;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
        /**
         * Timestamp when the message took place, in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /**
         * Timestamp when the message was sent to Segment, in ISO 8601 format.
         * @format date-time
         */
        sentAt?: string;
        /**
         * Unique message identifier used by Segment for deduplication.
         * @minLength 1
         * @maxLength 100
         */
        messageId?: string;
        /**
         * Optional screen name.
         * @minLength 1
         */
        name?: string;
        /** Free-form properties associated with the screen. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
    /** Send a Segment Track call to record one user event. */
    "segment.track": {
      input: {
        /**
         * Unique identifier for the user in your database.
         * @minLength 1
         */
        userId?: string;
        /**
         * Pseudo-unique anonymous identifier for the user.
         * @minLength 1
         */
        anonymousId?: string;
        /** Segment context object with extra information about the event. */
        context?: Record<string, unknown>;
        /** Segment destination flags keyed by destination name. */
        integrations?: Record<string, unknown>;
        /**
         * Timestamp when the message took place, in ISO 8601 format.
         * @format date-time
         */
        timestamp?: string;
        /**
         * Timestamp when the message was sent to Segment, in ISO 8601 format.
         * @format date-time
         */
        sentAt?: string;
        /**
         * Unique message identifier used by Segment for deduplication.
         * @minLength 1
         * @maxLength 100
         */
        messageId?: string;
        /**
         * Name of the action the user performed.
         * @minLength 1
         */
        event: string;
        /** Free-form properties associated with the event. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** Whether Segment accepted the HTTP request. */
        accepted: boolean;
        /** HTTP status returned by Segment. */
        status: number;
        /** Raw response payload returned by Segment, or null when the body is empty. */
        raw: unknown;
      };
    };
  }
}
