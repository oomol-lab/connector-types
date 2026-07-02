import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Dixa agent or admin by ID. */
    "dixa.get_agent": {
      input: {
        /**
         * The Dixa user ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Dixa agent, admin, or end user. */
        data: {
          /** The Dixa user ID. */
          id?: string;
          /** The time when the user was created. */
          createdAt?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's primary email address. */
          email?: string;
          /** The URL for the user's avatar. */
          avatarUrl?: string;
          /** The user's primary phone number. */
          phoneNumber?: string;
          /** Additional email addresses for the user. */
          additionalEmails?: Array<string>;
          /** Additional phone numbers for the user. */
          additionalPhoneNumbers?: Array<string>;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's middle names. */
          middleNames?: Array<string>;
          /** The user's roles. */
          roles?: Array<string>;
          /** The custom external identifier for the end user. */
          externalId?: string;
          /** Custom attributes returned for the end user. */
          customAttributes?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Dixa conversation by ID. */
    "dixa.get_conversation": {
      input: {
        /**
         * The Dixa conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
      };
      output: {
        /** A Dixa response object. */
        data: Record<string, unknown>;
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Dixa end user by ID. */
    "dixa.get_end_user": {
      input: {
        /**
         * The Dixa user ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Dixa agent, admin, or end user. */
        data: {
          /** The Dixa user ID. */
          id?: string;
          /** The time when the user was created. */
          createdAt?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's primary email address. */
          email?: string;
          /** The URL for the user's avatar. */
          avatarUrl?: string;
          /** The user's primary phone number. */
          phoneNumber?: string;
          /** Additional email addresses for the user. */
          additionalEmails?: Array<string>;
          /** Additional phone numbers for the user. */
          additionalPhoneNumbers?: Array<string>;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's middle names. */
          middleNames?: Array<string>;
          /** The user's roles. */
          roles?: Array<string>;
          /** The custom external identifier for the end user. */
          externalId?: string;
          /** Custom attributes returned for the end user. */
          customAttributes?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Dixa agents and admins with optional email or phone filtering. */
    "dixa.list_agents": {
      input: {
        /**
         * The maximum number of results per page. May be used with pageKey between page requests.
         * @exclusiveMinimum 0
         */
        pageLimit?: number;
        /**
         * The base64 encoded pagination key returned by Dixa. Do not construct or modify it.
         * @minLength 1
         */
        pageKey?: string;
        /**
         * The email address filter.
         * @format email
         */
        email?: string;
        /**
         * The phone number filter.
         * @minLength 1
         */
        phone?: string;
      };
      output: {
        /** The Dixa users returned by the request. */
        data: Array<{
          /** The Dixa user ID. */
          id?: string;
          /** The time when the user was created. */
          createdAt?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's primary email address. */
          email?: string;
          /** The URL for the user's avatar. */
          avatarUrl?: string;
          /** The user's primary phone number. */
          phoneNumber?: string;
          /** Additional email addresses for the user. */
          additionalEmails?: Array<string>;
          /** Additional phone numbers for the user. */
          additionalPhoneNumbers?: Array<string>;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's middle names. */
          middleNames?: Array<string>;
          /** The user's roles. */
          roles?: Array<string>;
          /** The custom external identifier for the end user. */
          externalId?: string;
          /** Custom attributes returned for the end user. */
          customAttributes?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Dixa. */
        meta?: {
          /** The previous page URL. */
          previous?: string;
          /** The next page URL. */
          next?: string;
          [key: string]: unknown;
        };
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List all messages for a Dixa conversation from oldest to newest. */
    "dixa.list_conversation_messages": {
      input: {
        /**
         * The Dixa conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
      };
      output: {
        /** The Dixa messages returned by the request. */
        data: Array<Record<string, unknown>>;
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Dixa end users with optional email, phone, or external ID filtering. */
    "dixa.list_end_users": {
      input: {
        /**
         * The maximum number of results per page. May be used with pageKey between page requests.
         * @exclusiveMinimum 0
         */
        pageLimit?: number;
        /**
         * The base64 encoded pagination key returned by Dixa. Do not construct or modify it.
         * @minLength 1
         */
        pageKey?: string;
        /**
         * The email address filter.
         * @format email
         */
        email?: string;
        /**
         * The phone number filter.
         * @minLength 1
         */
        phone?: string;
        /**
         * The external ID filter.
         * @minLength 1
         */
        externalId?: string;
      };
      output: {
        /** The Dixa users returned by the request. */
        data: Array<{
          /** The Dixa user ID. */
          id?: string;
          /** The time when the user was created. */
          createdAt?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's primary email address. */
          email?: string;
          /** The URL for the user's avatar. */
          avatarUrl?: string;
          /** The user's primary phone number. */
          phoneNumber?: string;
          /** Additional email addresses for the user. */
          additionalEmails?: Array<string>;
          /** Additional phone numbers for the user. */
          additionalPhoneNumbers?: Array<string>;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's middle names. */
          middleNames?: Array<string>;
          /** The user's roles. */
          roles?: Array<string>;
          /** The custom external identifier for the end user. */
          externalId?: string;
          /** Custom attributes returned for the end user. */
          customAttributes?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Dixa. */
        meta?: {
          /** The previous page URL. */
          previous?: string;
          /** The next page URL. */
          next?: string;
          [key: string]: unknown;
        };
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List presence status for Dixa agents and admins. */
    "dixa.list_presence": {
      input: Record<string, never>;
      output: {
        /** Presence records returned by Dixa. */
        data: Array<{
          /** The Dixa user ID. */
          userId?: string;
          /** The request time reported by Dixa. */
          requestTime?: string;
          /** The last time the user was seen. */
          lastSeen?: string;
          /** The Dixa presence status. */
          presenceStatus?: "Away" | "Working";
          /** The Dixa connection status. */
          connectionStatus?: "Offline" | "Online";
          /** The active Dixa channels. */
          activeChannels?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The raw Dixa response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
