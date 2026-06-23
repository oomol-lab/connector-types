import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List OnceHub Booking Pages. */
    "oncehub.list_booking_pages": {
      input: {
        /**
         * The maximum number of objects to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A OnceHub object ID used as a pagination cursor.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * A OnceHub object ID used as a pagination cursor.
         * @minLength 1
         * @pattern \S
         */
        before?: string;
        /**
         * The OnceHub expandable response fields to include, using official expand paths.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The OnceHub list object type. */
        object: string;
        /** The OnceHub objects returned by the list request. */
        data: Array<{
          /** The OnceHub object identifier. */
          id: string;
          /** The OnceHub object type. */
          object: string;
          [key: string]: unknown;
        }>;
        /** Whether OnceHub reported additional objects in the list response. */
        hasMore: boolean;
        /** The cursor ID for the next page when available. */
        nextCursor: string | null;
        /** The cursor ID for the previous page when available. */
        previousCursor: string | null;
        /** The OnceHub Request-Id response header when available. */
        requestId: string | null;
      };
    };
    /** List OnceHub bookings, optionally filtered by last update time. */
    "oncehub.list_bookings": {
      input: {
        /**
         * The maximum number of objects to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A OnceHub object ID used as a pagination cursor.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * A OnceHub object ID used as a pagination cursor.
         * @minLength 1
         * @pattern \S
         */
        before?: string;
        /**
         * The OnceHub expandable response fields to include, using official expand paths.
         * @minItems 1
         */
        expand?: Array<string>;
        /**
         * Only return bookings whose last_updated_time is greater than this timestamp.
         * @format date-time
         */
        lastUpdatedTimeGt?: string;
      };
      output: {
        /** The OnceHub list object type. */
        object: string;
        /** The OnceHub objects returned by the list request. */
        data: Array<{
          /** The OnceHub object identifier. */
          id: string;
          /** The OnceHub object type. */
          object: string;
          [key: string]: unknown;
        }>;
        /** Whether OnceHub reported additional objects in the list response. */
        hasMore: boolean;
        /** The cursor ID for the next page when available. */
        nextCursor: string | null;
        /** The cursor ID for the previous page when available. */
        previousCursor: string | null;
        /** The OnceHub Request-Id response header when available. */
        requestId: string | null;
      };
    };
    /** List OnceHub event types. */
    "oncehub.list_event_types": {
      input: {
        /**
         * The maximum number of objects to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A OnceHub object ID used as a pagination cursor.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * A OnceHub object ID used as a pagination cursor.
         * @minLength 1
         * @pattern \S
         */
        before?: string;
        /**
         * The OnceHub expandable response fields to include, using official expand paths.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The OnceHub list object type. */
        object: string;
        /** The OnceHub objects returned by the list request. */
        data: Array<{
          /** The OnceHub object identifier. */
          id: string;
          /** The OnceHub object type. */
          object: string;
          [key: string]: unknown;
        }>;
        /** Whether OnceHub reported additional objects in the list response. */
        hasMore: boolean;
        /** The cursor ID for the next page when available. */
        nextCursor: string | null;
        /** The cursor ID for the previous page when available. */
        previousCursor: string | null;
        /** The OnceHub Request-Id response header when available. */
        requestId: string | null;
      };
    };
  }
}
