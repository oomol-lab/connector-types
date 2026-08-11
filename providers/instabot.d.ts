import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a registered user in Instabot. */
    "instabot.create_user": {
      input: {
        /**
         * The unique user name.
         * @minLength 1
         */
        userName: string;
        /**
         * The initial user password.
         * @minLength 1
         */
        userPassword: string;
        /** The user's display name. */
        name?: string;
        /** The user description. */
        description?: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /** The user's phone number. */
        phone?: string;
        /** A reference to an existing Instabot File Object. */
        photoFile?: {
          /**
           * The Instabot File Object ID used as the user's photo.
           * @minimum 1
           */
          objectId: number;
        };
        /** Custom Instabot user properties keyed by property name. */
        customProperties?: Record<string, unknown>;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
        /**
         * The Instabot user object ID.
         * @minimum 1
         */
        userId: number;
      };
    };
    /** Soft-delete an Instabot user. */
    "instabot.delete_user": {
      input: {
        /**
         * The Instabot user object ID.
         * @minimum 1
         */
        userId: number;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
      };
    };
    /** Get one Instabot user by object ID. */
    "instabot.get_user": {
      input: {
        /**
         * The Instabot user object ID.
         * @minimum 1
         */
        userId: number;
        /**
         * Related user resources to resolve in the response.
         * @minItems 1
         */
        resolve?: Array<"organizations" | "userSegments" | "conversations">;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
        /** An Instabot user resource. */
        user: Record<string, unknown>;
      };
    };
    /** List Instabot users changed since an ISO-8601 timestamp. */
    "instabot.list_updated_users": {
      input: {
        /**
         * The ISO-8601 timestamp after which users must have changed.
         * @format date-time
         */
        since: string;
        /**
         * The maximum number of users to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of users to skip from the start of the result set.
         * @minimum 0
         */
        skip?: number;
        /**
         * The Instabot sort expression, such as name desc,email asc.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Related user resources to resolve in the response.
         * @minItems 1
         */
        resolve?: Array<"organizations" | "userSegments" | "conversations">;
        /** Whether Instabot should include totalCount in the response. */
        getTotalCount?: boolean;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
        /** The users returned by Instabot. */
        users: Array<Record<string, unknown>>;
        /** Whether more users remain after this response when supplied by Instabot. */
        hasMoreRecords: boolean | null;
        /** The total matching user count when requested and supplied by Instabot. */
        totalCount: number | null;
      };
    };
    /** List Instabot users with pagination, sorting, and optional related resources. */
    "instabot.list_users": {
      input: {
        /**
         * The maximum number of users to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of users to skip from the start of the result set.
         * @minimum 0
         */
        skip?: number;
        /**
         * The Instabot sort expression, such as name desc,email asc.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Related user resources to resolve in the response.
         * @minItems 1
         */
        resolve?: Array<"organizations" | "userSegments" | "conversations">;
        /** Whether Instabot should include totalCount in the response. */
        getTotalCount?: boolean;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
        /** The users returned by Instabot. */
        users: Array<Record<string, unknown>>;
        /** Whether more users remain after this response when supplied by Instabot. */
        hasMoreRecords: boolean | null;
        /** The total matching user count when requested and supplied by Instabot. */
        totalCount: number | null;
      };
    };
    /** Restore a previously deleted Instabot user. */
    "instabot.restore_user": {
      input: {
        /**
         * The Instabot user object ID.
         * @minimum 1
         */
        userId: number;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
      };
    };
    /** Update writable fields on an Instabot user. */
    "instabot.update_user": {
      input: {
        /**
         * The Instabot user object ID.
         * @minimum 1
         */
        userId: number;
        /**
         * The unique user name.
         * @minLength 1
         */
        username?: string;
        /** The user's display name. */
        name?: string;
        /** The user description. */
        description?: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string | null;
        /** The user's phone number. */
        phone?: string | null;
        /** A reference to an existing Instabot File Object. */
        photoFile?: {
          /**
           * The Instabot File Object ID used as the user's photo.
           * @minimum 1
           */
          objectId: number;
        } | null;
        /** Custom Instabot user properties keyed by property name. */
        customProperties?: Record<string, unknown>;
      };
      output: {
        /** The status envelope returned by Instabot. */
        status: {
          /** The Instabot API status code. */
          apiStatusCode: string;
          /** The Instabot API status message when the service supplies one. */
          apiStatusMessage: string | null;
        };
      };
    };
  }
}
