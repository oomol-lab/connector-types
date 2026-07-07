import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or upsert a Novu subscriber. */
    "novu.create_subscriber": {
      input: {
        /**
         * Unique subscriber identifier from your system.
         * @minLength 1
         */
        subscriberId: string;
        /**
         * The subscriber's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The subscriber's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The subscriber's email address.
         * @format email
         */
        email?: string;
        /**
         * The subscriber's phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The subscriber avatar URL or identifier.
         * @minLength 1
         */
        avatar?: string;
        /**
         * The subscriber locale, such as en-US.
         * @minLength 1
         */
        locale?: string;
        /**
         * The subscriber timezone, such as America/New_York.
         * @minLength 1
         */
        timezone?: string;
        /** Custom data stored with the Novu resource. */
        data?: Record<string, unknown>;
        /** Whether Novu should fail if the subscriber already exists. */
        failIfExists?: boolean;
        /**
         * Optional idempotency key sent with the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A Novu subscriber resource. */
        subscriber: {
          /** The internal Novu subscriber ID. */
          _id?: string;
          /** The subscriber identifier from your system. */
          subscriberId?: string;
          /** The subscriber's first name. */
          firstName?: string | null;
          /** The subscriber's last name. */
          lastName?: string | null;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string | null;
          /** The subscriber's phone number. */
          phone?: string | null;
          /** The subscriber avatar URL or identifier. */
          avatar?: string | null;
          /** The subscriber locale. */
          locale?: string | null;
          /** The subscriber timezone. */
          timezone?: string | null;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown> | null;
          /** Whether Novu considers the subscriber online. */
          isOnline?: boolean | null;
          /**
           * When the subscriber was last online.
           * @format date-time
           */
          lastOnlineAt?: string | null;
          /** Whether the subscriber is deleted. */
          deleted?: boolean;
          /**
           * When the subscriber was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the subscriber was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Novu API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a Novu subscriber by subscriber ID. */
    "novu.get_subscriber": {
      input: {
        /**
         * The subscriber identifier from your system.
         * @minLength 1
         */
        subscriberId: string;
      };
      output: {
        /** A Novu subscriber resource. */
        subscriber: {
          /** The internal Novu subscriber ID. */
          _id?: string;
          /** The subscriber identifier from your system. */
          subscriberId?: string;
          /** The subscriber's first name. */
          firstName?: string | null;
          /** The subscriber's last name. */
          lastName?: string | null;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string | null;
          /** The subscriber's phone number. */
          phone?: string | null;
          /** The subscriber avatar URL or identifier. */
          avatar?: string | null;
          /** The subscriber locale. */
          locale?: string | null;
          /** The subscriber timezone. */
          timezone?: string | null;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown> | null;
          /** Whether Novu considers the subscriber online. */
          isOnline?: boolean | null;
          /**
           * When the subscriber was last online.
           * @format date-time
           */
          lastOnlineAt?: string | null;
          /** Whether the subscriber is deleted. */
          deleted?: boolean;
          /**
           * When the subscriber was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the subscriber was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Novu API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Novu subscribers with filters and cursor pagination. */
    "novu.search_subscribers": {
      input: {
        /**
         * Cursor after which to fetch results.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor before which to fetch results.
         * @minLength 1
         */
        before?: string;
        /**
         * Maximum number of subscribers to return.
         * @minimum 1
         */
        limit?: number;
        /** Sort direction. */
        orderDirection?: "ASC" | "DESC";
        /**
         * Field to order subscribers by.
         * @minLength 1
         */
        orderBy?: string;
        /** Whether to include the cursor item in the response. */
        includeCursor?: boolean;
        /**
         * Email address to filter subscribers by.
         * @format email
         */
        email?: string;
        /**
         * Name to filter subscribers by.
         * @minLength 1
         */
        name?: string;
        /**
         * Phone number to filter subscribers by.
         * @minLength 1
         */
        phone?: string;
        /**
         * Subscriber identifier to filter subscribers by.
         * @minLength 1
         */
        subscriberId?: string;
      };
      output: {
        /** Subscribers returned by Novu. */
        subscribers: Array<{
          /** The internal Novu subscriber ID. */
          _id?: string;
          /** The subscriber identifier from your system. */
          subscriberId?: string;
          /** The subscriber's first name. */
          firstName?: string | null;
          /** The subscriber's last name. */
          lastName?: string | null;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string | null;
          /** The subscriber's phone number. */
          phone?: string | null;
          /** The subscriber avatar URL or identifier. */
          avatar?: string | null;
          /** The subscriber locale. */
          locale?: string | null;
          /** The subscriber timezone. */
          timezone?: string | null;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown> | null;
          /** Whether Novu considers the subscriber online. */
          isOnline?: boolean | null;
          /**
           * When the subscriber was last online.
           * @format date-time
           */
          lastOnlineAt?: string | null;
          /** Whether the subscriber is deleted. */
          deleted?: boolean;
          /**
           * When the subscriber was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the subscriber was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page. */
        next: string | null;
        /** Cursor for the previous page. */
        previous: string | null;
        /** Total count reported by Novu. */
        totalCount: number;
        /** Whether the total count was capped by Novu. */
        totalCountCapped: boolean;
        /** Raw object returned by the official Novu API. */
        raw: Record<string, unknown>;
      };
    };
    /** Trigger a Novu workflow event for subscribers or topics. */
    "novu.trigger_event": {
      input: {
        /**
         * The workflow trigger identifier.
         * @minLength 1
         */
        name: string;
        /** One or more trigger recipients. */
        to: string | {
          /**
           * The subscriber identifier from your system.
           * @minLength 1
           */
          subscriberId?: string;
          /**
           * The subscriber's first name.
           * @minLength 1
           */
          firstName?: string;
          /**
           * The subscriber's last name.
           * @minLength 1
           */
          lastName?: string;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string;
          /**
           * The subscriber's phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The subscriber avatar URL or identifier.
           * @minLength 1
           */
          avatar?: string;
          /**
           * The subscriber locale, such as en-US.
           * @minLength 1
           */
          locale?: string;
          /**
           * The subscriber timezone, such as America/New_York.
           * @minLength 1
           */
          timezone?: string;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        } | {
          /** The recipient type for a topic trigger. */
          type: "Topic";
          /**
           * The topic key.
           * @minLength 1
           */
          topicKey: string;
          /** Subscriber IDs to exclude from the topic trigger. */
          exclude?: Array<string>;
        } | Array<string | {
          /**
           * The subscriber identifier from your system.
           * @minLength 1
           */
          subscriberId?: string;
          /**
           * The subscriber's first name.
           * @minLength 1
           */
          firstName?: string;
          /**
           * The subscriber's last name.
           * @minLength 1
           */
          lastName?: string;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string;
          /**
           * The subscriber's phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The subscriber avatar URL or identifier.
           * @minLength 1
           */
          avatar?: string;
          /**
           * The subscriber locale, such as en-US.
           * @minLength 1
           */
          locale?: string;
          /**
           * The subscriber timezone, such as America/New_York.
           * @minLength 1
           */
          timezone?: string;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        } | {
          /** The recipient type for a topic trigger. */
          type: "Topic";
          /**
           * The topic key.
           * @minLength 1
           */
          topicKey: string;
          /** Subscriber IDs to exclude from the topic trigger. */
          exclude?: Array<string>;
        }>;
        /** Custom data stored with the Novu resource. */
        payload?: Record<string, unknown>;
        /** Provider, channel, or step overrides for the trigger. */
        overrides?: Record<string, unknown>;
        /**
         * Unique deduplication identifier for this trigger.
         * @minLength 1
         */
        transactionId?: string;
        /** Actor subscriber ID or actor object. */
        actor?: string | {
          /**
           * The subscriber identifier from your system.
           * @minLength 1
           */
          subscriberId?: string;
          /**
           * The subscriber's first name.
           * @minLength 1
           */
          firstName?: string;
          /**
           * The subscriber's last name.
           * @minLength 1
           */
          lastName?: string;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string;
          /**
           * The subscriber's phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The subscriber avatar URL or identifier.
           * @minLength 1
           */
          avatar?: string;
          /**
           * The subscriber locale, such as en-US.
           * @minLength 1
           */
          locale?: string;
          /**
           * The subscriber timezone, such as America/New_York.
           * @minLength 1
           */
          timezone?: string;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A tenant ID or rich tenant object. */
        tenant?: string | {
          /**
           * The tenant identifier.
           * @minLength 1
           */
          identifier: string;
          /**
           * The tenant display name.
           * @minLength 1
           */
          name?: string;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown>;
        };
        /** Context objects keyed by context name. */
        context?: Record<string, string | {
            /**
             * The context ID.
             * @minLength 1
             */
            id: string;
            /** Custom data stored with the Novu resource. */
            data?: Record<string, unknown>;
          }>;
        /**
         * Optional idempotency key sent with the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Whether Novu acknowledged the trigger. */
        acknowledged: boolean;
        /** Novu trigger status. */
        status: "error" | "trigger_not_active" | "no_workflow_active_steps_defined" | "no_workflow_steps_defined" | "processed" | "no_tenant_found" | "invalid_recipients";
        /** Errors returned by Novu for the trigger. */
        error?: Array<string>;
        /** Transaction ID returned by Novu. */
        transactionId: string | null;
        /** Link to the Novu activity feed. */
        activityFeedLink: string | null;
        /** Raw object returned by the official Novu API. */
        jobData: Record<string, unknown> | null;
        /** Raw object returned by the official Novu API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Novu subscriber by subscriber ID. */
    "novu.update_subscriber": {
      input: {
        /**
         * The subscriber identifier from your system.
         * @minLength 1
         */
        subscriberId: string;
        /**
         * The subscriber's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The subscriber's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The subscriber's email address.
         * @format email
         */
        email?: string;
        /**
         * The subscriber's phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The subscriber avatar URL or identifier.
         * @minLength 1
         */
        avatar?: string;
        /**
         * The subscriber locale, such as en-US.
         * @minLength 1
         */
        locale?: string;
        /**
         * The subscriber timezone, such as America/New_York.
         * @minLength 1
         */
        timezone?: string;
        /** Custom data stored with the Novu resource. */
        data?: Record<string, unknown>;
        /**
         * Optional idempotency key sent with the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A Novu subscriber resource. */
        subscriber: {
          /** The internal Novu subscriber ID. */
          _id?: string;
          /** The subscriber identifier from your system. */
          subscriberId?: string;
          /** The subscriber's first name. */
          firstName?: string | null;
          /** The subscriber's last name. */
          lastName?: string | null;
          /**
           * The subscriber's email address.
           * @format email
           */
          email?: string | null;
          /** The subscriber's phone number. */
          phone?: string | null;
          /** The subscriber avatar URL or identifier. */
          avatar?: string | null;
          /** The subscriber locale. */
          locale?: string | null;
          /** The subscriber timezone. */
          timezone?: string | null;
          /** Custom data stored with the Novu resource. */
          data?: Record<string, unknown> | null;
          /** Whether Novu considers the subscriber online. */
          isOnline?: boolean | null;
          /**
           * When the subscriber was last online.
           * @format date-time
           */
          lastOnlineAt?: string | null;
          /** Whether the subscriber is deleted. */
          deleted?: boolean;
          /**
           * When the subscriber was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the subscriber was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Novu API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
