import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get KnowBe4 account and subscription data from the Reporting API. */
    "knowbe4.get_account": {
      input: Record<string, never>;
      output: {
        /** Normalized KnowBe4 account data. */
        account: {
          /**
           * KnowBe4 organization name.
           * @minLength 1
           */
          name: string | null;
          /** Allowed domains on the KnowBe4 account. */
          domains: Array<string>;
          /**
           * KnowBe4 subscription level.
           * @minLength 1
           */
          subscriptionLevel: string | null;
          /**
           * KnowBe4 subscription end date.
           * @format date
           */
          subscriptionEndDate: string | null;
          /** Number of seats available on the account. */
          numberOfSeats: number | null;
          /** Current account risk score. */
          currentRiskScore: number | null;
          /** Raw KnowBe4 API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw KnowBe4 API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a specific KnowBe4 group by group ID. */
    "knowbe4.get_group": {
      input: {
        /**
         * KnowBe4 group ID.
         * @minimum 1
         */
        groupId: number;
      };
      output: {
        /** Normalized KnowBe4 group data. */
        group: {
          /** KnowBe4 group ID. */
          id: number | null;
          /**
           * KnowBe4 group name.
           * @minLength 1
           */
          name: string | null;
          /**
           * KnowBe4 group type.
           * @minLength 1
           */
          groupType: string | null;
          /** Number of users in the group. */
          memberCount: number | null;
          /**
           * KnowBe4 group status.
           * @minLength 1
           */
          status: string | null;
          /** Current group risk score. */
          currentRiskScore: number | null;
          /** Raw KnowBe4 API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw KnowBe4 API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a specific KnowBe4 user by user ID. */
    "knowbe4.get_user": {
      input: {
        /**
         * KnowBe4 user ID.
         * @minimum 1
         */
        userId: number;
      };
      output: {
        /** Normalized KnowBe4 user data. */
        user: {
          /** KnowBe4 user ID. */
          id: number | null;
          /**
           * KnowBe4 user email address.
           * @minLength 1
           */
          email: string | null;
          /**
           * KnowBe4 user first name.
           * @minLength 1
           */
          firstName: string | null;
          /**
           * KnowBe4 user last name.
           * @minLength 1
           */
          lastName: string | null;
          /**
           * KnowBe4 user job title.
           * @minLength 1
           */
          jobTitle: string | null;
          /**
           * KnowBe4 user status.
           * @minLength 1
           */
          status: string | null;
          /** KnowBe4 group IDs assigned to the user. */
          groups: Array<number>;
          /** Current user risk score. */
          currentRiskScore: number | null;
          /** Raw KnowBe4 API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw KnowBe4 API object. */
        raw: Record<string, unknown>;
      };
    };
    /** List KnowBe4 groups with optional status, per_page, and cursor filters. */
    "knowbe4.list_groups": {
      input: {
        /** Optional KnowBe4 record status filter. */
        status?: "active" | "archived";
        /**
         * Maximum number of records to request from KnowBe4.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * KnowBe4 cursor value returned by a previous request.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** KnowBe4 groups returned by the API. */
        groups: Array<{
          /** KnowBe4 group ID. */
          id: number | null;
          /**
           * KnowBe4 group name.
           * @minLength 1
           */
          name: string | null;
          /**
           * KnowBe4 group type.
           * @minLength 1
           */
          groupType: string | null;
          /** Number of users in the group. */
          memberCount: number | null;
          /**
           * KnowBe4 group status.
           * @minLength 1
           */
          status: string | null;
          /** Current group risk score. */
          currentRiskScore: number | null;
          /** Raw KnowBe4 API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** KnowBe4 request pagination metadata. */
        pagination: {
          /**
           * Cursor value sent to KnowBe4.
           * @minLength 1
           */
          requestCursor: string | null;
          /**
           * Maximum number of records requested from KnowBe4.
           * @minimum 1
           * @maximum 500
           */
          requestPerPage: number | null;
          /**
           * Next cursor detected in KnowBe4 response headers.
           * @minLength 1
           */
          nextCursor: string | null;
          /**
           * KnowBe4 X-Request-Id response header.
           * @minLength 1
           */
          requestId: string | null;
        };
        /** Raw KnowBe4 response payload. */
        raw: unknown;
      };
    };
    /** List KnowBe4 users with optional status, group, expanded group, per_page, and cursor filters. */
    "knowbe4.list_users": {
      input: {
        /** Optional KnowBe4 record status filter. */
        status?: "active" | "archived";
        /**
         * Only return users who are members of this KnowBe4 group ID.
         * @minimum 1
         */
        groupId?: number;
        /** Whether to ask KnowBe4 to expand group details on each user. */
        expandGroups?: boolean;
        /**
         * Maximum number of records to request from KnowBe4.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * KnowBe4 cursor value returned by a previous request.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** KnowBe4 users returned by the API. */
        users: Array<{
          /** KnowBe4 user ID. */
          id: number | null;
          /**
           * KnowBe4 user email address.
           * @minLength 1
           */
          email: string | null;
          /**
           * KnowBe4 user first name.
           * @minLength 1
           */
          firstName: string | null;
          /**
           * KnowBe4 user last name.
           * @minLength 1
           */
          lastName: string | null;
          /**
           * KnowBe4 user job title.
           * @minLength 1
           */
          jobTitle: string | null;
          /**
           * KnowBe4 user status.
           * @minLength 1
           */
          status: string | null;
          /** KnowBe4 group IDs assigned to the user. */
          groups: Array<number>;
          /** Current user risk score. */
          currentRiskScore: number | null;
          /** Raw KnowBe4 API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** KnowBe4 request pagination metadata. */
        pagination: {
          /**
           * Cursor value sent to KnowBe4.
           * @minLength 1
           */
          requestCursor: string | null;
          /**
           * Maximum number of records requested from KnowBe4.
           * @minimum 1
           * @maximum 500
           */
          requestPerPage: number | null;
          /**
           * Next cursor detected in KnowBe4 response headers.
           * @minLength 1
           */
          nextCursor: string | null;
          /**
           * KnowBe4 X-Request-Id response header.
           * @minLength 1
           */
          requestId: string | null;
        };
        /** Raw KnowBe4 response payload. */
        raw: unknown;
      };
    };
  }
}
