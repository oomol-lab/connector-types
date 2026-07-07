import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Permanently delete a Knock user and associated data. */
    "knock.delete_user": {
      input: {
        /**
         * The Knock user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        success: boolean;
        /**
         * The Knock user ID.
         * @minLength 1
         */
        userId: string;
      };
    };
    /** Retrieve a Knock user by user ID. */
    "knock.get_user": {
      input: {
        /**
         * The Knock user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** A normalized Knock user. */
        user: {
          /** The Knock user ID. */
          id?: string;
          /** The user's email address when present. */
          email?: string | null;
          /** The user's display name when present. */
          name?: string | null;
          /** When the Knock user was created. */
          createdAt?: string | null;
          /** When the Knock user was last updated. */
          updatedAt?: string | null;
          /** The raw Knock user payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update a Knock user with identification data. */
    "knock.identify_user": {
      input: {
        /**
         * The Knock user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The user's email address.
         * @minLength 1
         */
        email?: string;
        /**
         * The user's display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The user's IANA timezone.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The user's avatar URL.
         * @minLength 1
         */
        avatar?: string;
        /**
         * The user's phone number.
         * @minLength 1
         */
        phoneNumber?: string;
        /** Knock channel data keyed by channel ID. */
        channelData?: Record<string, unknown>;
        /** Knock user preference data. */
        preferences?: Record<string, unknown>;
        /** Additional user properties to send to Knock as top-level identify fields. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A normalized Knock user. */
        user: {
          /** The Knock user ID. */
          id?: string;
          /** The user's email address when present. */
          email?: string | null;
          /** The user's display name when present. */
          name?: string | null;
          /** When the Knock user was created. */
          createdAt?: string | null;
          /** When the Knock user was last updated. */
          updatedAt?: string | null;
          /** The raw Knock user payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Knock users with cursor pagination. */
    "knock.list_users": {
      input: {
        /**
         * Associated resources to include in the Knock response.
         * @minItems 1
         */
        include?: Array<string>;
        /**
         * A Knock pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Knock pagination cursor.
         * @minLength 1
         */
        before?: string;
        /**
         * The number of users to return. Knock defaults to 50.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** Users returned by Knock. */
        users: Array<{
          /** The Knock user ID. */
          id?: string;
          /** The user's email address when present. */
          email?: string | null;
          /** The user's display name when present. */
          name?: string | null;
          /** When the Knock user was created. */
          createdAt?: string | null;
          /** When the Knock user was last updated. */
          updatedAt?: string | null;
          /** The raw Knock user payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Knock pagination information. */
        pageInfo: {
          /** The next-page cursor when present. */
          after?: string | null;
          /** The previous-page cursor when present. */
          before?: string | null;
          /** The page size returned by Knock. */
          pageSize?: number | null;
          /** The raw Knock page_info payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Trigger a Knock workflow for one or more recipients and return the workflow run request ID. */
    "knock.trigger_workflow": {
      input: {
        /**
         * The Knock workflow key to trigger.
         * @minLength 1
         */
        key: string;
        /**
         * Workflow recipients as Knock IDs or inline identification objects.
         * @minItems 1
         */
        recipients: Array<string | Record<string, unknown>>;
        /** Workflow data payload passed to Knock. */
        data?: Record<string, unknown>;
        /** A Knock ID string or inline identification object. */
        actor?: string | Record<string, unknown>;
        /** A Knock ID string or inline identification object. */
        tenant?: string | Record<string, unknown>;
        /**
         * A cancellation key for the workflow run.
         * @minLength 1
         */
        cancellationKey?: string;
        /** Workflow trigger settings passed to Knock. */
        settings?: Record<string, unknown>;
        /**
         * An optional Idempotency-Key header value for safe retries.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** The workflow_run_id returned by Knock. */
        workflowRunId: string;
        /** The raw Knock workflow trigger payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
