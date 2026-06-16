import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a JumpCloud system by ID through the v1 Systems API. */
    "jumpcloud.get_system": {
      input: {
        /**
         * The JumpCloud object identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Space-separated fields to include in the returned JumpCloud records.
         * @minLength 1
         */
        fields?: string;
        /**
         * JumpCloud v1 filter expression such as department:$eq:Finance.
         * @minLength 1
         */
        filter?: string;
        /**
         * Optional JumpCloud organization ID to send with the x-org-id header for multi-tenant admin accounts.
         * @minLength 1
         */
        orgId?: string;
        /** The JumpCloud data-center region to call. */
        region?: "us" | "eu" | "in";
      };
      output: {
        /** JumpCloud system record. */
        system: {
          /**
           * The JumpCloud object identifier.
           * @minLength 1
           */
          _id?: string;
          /** The JumpCloud system display name. */
          displayName?: string;
          /** The system hostname. */
          hostname?: string;
          /** The operating system name. */
          os?: string;
          /** The operating system version. */
          version?: string;
          /** Whether the system is active. */
          active?: boolean;
          /** The installed JumpCloud agent version. */
          agentVersion?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a JumpCloud system user by ID through the v1 Systemusers API. */
    "jumpcloud.get_system_user": {
      input: {
        /**
         * The JumpCloud object identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Space-separated fields to include in the returned JumpCloud records.
         * @minLength 1
         */
        fields?: string;
        /**
         * JumpCloud v1 filter expression such as department:$eq:Finance.
         * @minLength 1
         */
        filter?: string;
        /**
         * Optional JumpCloud organization ID to send with the x-org-id header for multi-tenant admin accounts.
         * @minLength 1
         */
        orgId?: string;
        /** The JumpCloud data-center region to call. */
        region?: "us" | "eu" | "in";
      };
      output: {
        /** JumpCloud system user record. */
        systemUser: {
          /**
           * The JumpCloud object identifier.
           * @minLength 1
           */
          _id?: string;
          /** The JumpCloud username. */
          username?: string;
          /** The user's email address. */
          email?: string;
          /** The user's first name. */
          firstname?: string;
          /** The user's last name. */
          lastname?: string;
          /** The user's display name. */
          displayname?: string;
          /** The JumpCloud user state. */
          state?: string;
          /** Whether the user is activated. */
          activated?: boolean;
          /** Whether the user is suspended. */
          suspended?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List JumpCloud system users through the v1 Systemusers API. */
    "jumpcloud.list_system_users": {
      input: {
        /**
         * Space-separated fields to include in the returned JumpCloud records.
         * @minLength 1
         */
        fields?: string;
        /**
         * JumpCloud v1 filter expression such as department:$eq:Finance.
         * @minLength 1
         */
        filter?: string;
        /**
         * The number of records to return at once. JumpCloud limits this to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Optional JumpCloud organization ID to send with the x-org-id header for multi-tenant admin accounts.
         * @minLength 1
         */
        orgId?: string;
        /** The JumpCloud data-center region to call. */
        region?: "us" | "eu" | "in";
        /**
         * JumpCloud search object serialized as a query string value, matching the v1 API search parameter.
         * @minLength 1
         */
        search?: string;
        /**
         * The offset into the JumpCloud record collection.
         * @minimum 0
         */
        skip?: number;
        /**
         * Space-separated fields used to sort the collection. Prefix a field with - for descending order.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** JumpCloud system users returned by the API. */
        results: Array<{
          /**
           * The JumpCloud object identifier.
           * @minLength 1
           */
          _id?: string;
          /** The JumpCloud username. */
          username?: string;
          /** The user's email address. */
          email?: string;
          /** The user's first name. */
          firstname?: string;
          /** The user's last name. */
          lastname?: string;
          /** The user's display name. */
          displayname?: string;
          /** The JumpCloud user state. */
          state?: string;
          /** Whether the user is activated. */
          activated?: boolean;
          /** Whether the user is suspended. */
          suspended?: boolean;
          [key: string]: unknown;
        }>;
        /** JumpCloud pagination metadata returned by the connector. */
        meta: {
          /** Total number of records reported by JumpCloud. */
          totalCount: number | null;
        };
        /** Raw JumpCloud object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List JumpCloud systems through the v1 Systems API. */
    "jumpcloud.list_systems": {
      input: {
        /**
         * Space-separated fields to include in the returned JumpCloud records.
         * @minLength 1
         */
        fields?: string;
        /**
         * JumpCloud v1 filter expression such as department:$eq:Finance.
         * @minLength 1
         */
        filter?: string;
        /**
         * The number of records to return at once. JumpCloud limits this to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Optional JumpCloud organization ID to send with the x-org-id header for multi-tenant admin accounts.
         * @minLength 1
         */
        orgId?: string;
        /** The JumpCloud data-center region to call. */
        region?: "us" | "eu" | "in";
        /**
         * JumpCloud search object serialized as a query string value, matching the v1 API search parameter.
         * @minLength 1
         */
        search?: string;
        /**
         * The offset into the JumpCloud record collection.
         * @minimum 0
         */
        skip?: number;
        /**
         * Space-separated fields used to sort the collection. Prefix a field with - for descending order.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** JumpCloud systems returned by the API. */
        results: Array<{
          /**
           * The JumpCloud object identifier.
           * @minLength 1
           */
          _id?: string;
          /** The JumpCloud system display name. */
          displayName?: string;
          /** The system hostname. */
          hostname?: string;
          /** The operating system name. */
          os?: string;
          /** The operating system version. */
          version?: string;
          /** Whether the system is active. */
          active?: boolean;
          /** The installed JumpCloud agent version. */
          agentVersion?: string;
          [key: string]: unknown;
        }>;
        /** JumpCloud pagination metadata returned by the connector. */
        meta: {
          /** Total number of records reported by JumpCloud. */
          totalCount: number | null;
        };
        /** Raw JumpCloud object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
