import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a unique trackable Zigpoll survey link for a poll. */
    "zigpoll.generate_survey_link": {
      input: {
        /**
         * The Zigpoll poll ID.
         * @minLength 1
         */
        pollId: string;
        /** Optional key-value metadata to attach to the generated survey activity. */
        metadata?: Record<string, unknown>;
        /**
         * ISO 8601 datetime after which the survey link expires.
         * @format date-time
         */
        expiresAt?: string;
      };
      output: {
        /**
         * The unique survey URL to distribute to a respondent.
         * @format uri
         */
        url: string;
        /** The unique Zigpoll activity ID associated with the survey link. */
        activityId: string;
      };
    };
    /** Fetch the authenticated Zigpoll user object. */
    "zigpoll.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Zigpoll user ID. */
        _id: string;
        /**
         * The Zigpoll user's email address.
         * @format email
         */
        email: string;
        /** The Zigpoll user's display name. */
        name: string;
        /** Account IDs associated with the user. */
        accounts: Array<string>;
        /**
         * Timestamp when the user was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * Timestamp when the user was last modified.
         * @format date-time
         */
        lastModified: string;
        [key: string]: unknown;
      };
    };
    /** Fetch a Zigpoll poll by ID. */
    "zigpoll.get_poll": {
      input: {
        /**
         * The Zigpoll poll ID.
         * @minLength 1
         */
        pollId: string;
      };
      output: Record<string, unknown>;
    };
    /** List Zigpoll account objects available to the authenticated user. */
    "zigpoll.list_accounts": {
      input: Record<string, never>;
      output: Array<Record<string, unknown>>;
    };
    /** List Zigpoll participants by account, poll, or slide with cursor pagination. */
    "zigpoll.list_participants": {
      input: {
        /**
         * The Zigpoll account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The Zigpoll poll ID.
         * @minLength 1
         */
        pollId?: string;
        /**
         * The Zigpoll slide ID.
         * @minLength 1
         */
        slideId?: string;
        /**
         * Cursor returned by Zigpoll for the next page.
         * @minLength 1
         */
        startCursor?: string;
        /**
         * Maximum number of objects to return. Zigpoll documents a maximum of 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
      };
      output: {
        /** Objects returned by Zigpoll. */
        data: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasNextPage: boolean;
        /** Cursor for fetching the next page. */
        endCursor: string;
        [key: string]: unknown;
      };
    };
    /** List Zigpoll polls for an account. */
    "zigpoll.list_polls": {
      input: {
        /**
         * The Zigpoll account ID.
         * @minLength 1
         */
        accountId: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List Zigpoll responses by account, poll, or slide with cursor pagination. */
    "zigpoll.list_responses": {
      input: {
        /**
         * The Zigpoll account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The Zigpoll poll ID.
         * @minLength 1
         */
        pollId?: string;
        /**
         * The Zigpoll slide ID.
         * @minLength 1
         */
        slideId?: string;
        /**
         * Cursor returned by Zigpoll for the next page.
         * @minLength 1
         */
        startCursor?: string;
        /**
         * Maximum number of objects to return. Zigpoll documents a maximum of 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * JavaScript timestamp string for returning objects created on or after this time.
         * @minLength 1
         */
        createdAfter?: string;
        /**
         * JavaScript timestamp string for returning objects created on or before this time.
         * @minLength 1
         */
        createdBefore?: string;
      };
      output: {
        /** Objects returned by Zigpoll. */
        data: Array<Record<string, unknown>>;
        /** Whether another page is available. */
        hasNextPage: boolean;
        /** Cursor for fetching the next page. */
        endCursor: string;
        [key: string]: unknown;
      };
    };
    /** List Zigpoll slides for a poll. */
    "zigpoll.list_slides": {
      input: {
        /**
         * The Zigpoll poll ID.
         * @minLength 1
         */
        pollId: string;
      };
      output: Array<Record<string, unknown>>;
    };
  }
}
