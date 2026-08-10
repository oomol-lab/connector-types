import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an MX Platform API user and return the newly-created user. */
    "mx.create_user": {
      input: {
        /** The user fields accepted by MX user create and update requests. */
        user: {
          /**
           * The unique partner-defined identifier for the user.
           * @minLength 1
           */
          id?: string;
          /**
           * The email address associated with the user.
           * @format email
           */
          email?: string;
          /** Whether the user is disabled in MX. */
          isDisabled?: boolean;
          /** Additional non-sensitive metadata to store on the MX user. */
          metadata?: string;
        };
      };
      output: {
        /** A normalized MX Platform API user. */
        user: {
          /** The unique identifier for the user, defined by MX. */
          guid: string | null;
          /** The unique partner-defined identifier for the user. */
          id: string | null;
          /** The email address associated with the user. */
          email: string | null;
          /** Whether the user is disabled in MX. */
          isDisabled: boolean | null;
          /** Additional information stored on the MX user. */
          metadata: string | null;
          /** The raw MX user object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Permanently delete one MX Platform API user by MX guid or partner-defined id. */
    "mx.delete_user": {
      input: {
        /**
         * The MX-defined user guid or partner-defined user id.
         * @minLength 1
         */
        userIdentifier: string;
      };
      output: {
        /** Whether MX accepted the user deletion request. */
        deleted: boolean;
        /** The HTTP status returned by MX for the delete request. */
        status: number;
      };
    };
    /** List users created in the MX Platform API with pagination and simple filters. */
    "mx.list_users": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of users to request per page.
         * @minimum 10
         * @maximum 1000
         */
        recordsPerPage?: number;
        /** Filter users by partner-defined user id. */
        id?: string;
        /**
         * Filter users by email address.
         * @format email
         */
        email?: string;
        /** Filter users by disabled status. */
        isDisabled?: boolean;
      };
      output: {
        /** The users returned by MX. */
        users: Array<{
          /** The unique identifier for the user, defined by MX. */
          guid: string | null;
          /** The unique partner-defined identifier for the user. */
          id: string | null;
          /** The email address associated with the user. */
          email: string | null;
          /** Whether the user is disabled in MX. */
          isDisabled: boolean | null;
          /** Additional information stored on the MX user. */
          metadata: string | null;
          /** The raw MX user object returned by the Platform API. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by MX list endpoints. */
        pagination: {
          /** The page delivered by the current response. */
          currentPage: number | null;
          /** The number of records delivered with each page. */
          perPage: number | null;
          /** The total number of records available. */
          totalEntries: number | null;
          /** The total number of pages available. */
          totalPages: number | null;
          /** The raw pagination object returned by MX. */
          raw: Record<string, unknown> | null;
        };
        /** The raw MX list-users response. */
        raw: Record<string, unknown>;
      };
    };
    /** Read one MX Platform API user by MX guid or partner-defined id. */
    "mx.read_user": {
      input: {
        /**
         * The MX-defined user guid or partner-defined user id.
         * @minLength 1
         */
        userIdentifier: string;
      };
      output: {
        /** A normalized MX Platform API user. */
        user: {
          /** The unique identifier for the user, defined by MX. */
          guid: string | null;
          /** The unique partner-defined identifier for the user. */
          id: string | null;
          /** The email address associated with the user. */
          email: string | null;
          /** Whether the user is disabled in MX. */
          isDisabled: boolean | null;
          /** Additional information stored on the MX user. */
          metadata: string | null;
          /** The raw MX user object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update an MX Platform API user by MX guid or partner-defined id. */
    "mx.update_user": {
      input: {
        /**
         * The MX-defined user guid or partner-defined user id.
         * @minLength 1
         */
        userIdentifier: string;
        /** The user fields accepted by MX user create and update requests. */
        user: {
          /**
           * The unique partner-defined identifier for the user.
           * @minLength 1
           */
          id?: string;
          /**
           * The email address associated with the user.
           * @format email
           */
          email?: string;
          /** Whether the user is disabled in MX. */
          isDisabled?: boolean;
          /** Additional non-sensitive metadata to store on the MX user. */
          metadata?: string;
        };
      };
      output: {
        /** A normalized MX Platform API user. */
        user: {
          /** The unique identifier for the user, defined by MX. */
          guid: string | null;
          /** The unique partner-defined identifier for the user. */
          id: string | null;
          /** The email address associated with the user. */
          email: string | null;
          /** Whether the user is disabled in MX. */
          isDisabled: boolean | null;
          /** Additional information stored on the MX user. */
          metadata: string | null;
          /** The raw MX user object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
