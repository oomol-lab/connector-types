import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Cursor daily usage metrics for a team over a date range of up to 30 days. */
    "cursor.get_daily_usage_data": {
      input: {
        /** The inclusive start date in epoch milliseconds. */
        startDate: number;
        /** The inclusive end date in epoch milliseconds. */
        endDate: number;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of users to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** The Cursor daily usage rows. */
        data: Array<{
          /** The Cursor user ID. */
          userId?: number;
          /**
           * The day covered by this usage row.
           * @format date
           */
          day?: string;
          /** The day timestamp in epoch milliseconds. */
          date?: number;
          /**
           * The user email address.
           * @format email
           */
          email?: string;
          /** Whether the user had activity on this day. */
          isActive?: boolean;
          /** The total lines added. */
          totalLinesAdded?: number;
          /** The total lines deleted. */
          totalLinesDeleted?: number;
          /** The AI-suggested added lines that were accepted. */
          acceptedLinesAdded?: number;
          /** The AI-suggested deleted lines that were accepted. */
          acceptedLinesDeleted?: number;
          /** The total AI code apply actions. */
          totalApplies?: number;
          /** The total accepted AI suggestions. */
          totalAccepts?: number;
          /** The total rejected AI suggestions. */
          totalRejects?: number;
          /** The total Tab completions shown. */
          totalTabsShown?: number;
          /** The total Tab completions accepted. */
          totalTabsAccepted?: number;
          /** The number of Composer requests. */
          composerRequests?: number;
          /** The number of chat requests. */
          chatRequests?: number;
          /** The number of Agent mode requests. */
          agentRequests?: number;
          /** The number of Cmd+K inline edit uses. */
          cmdkUsages?: number;
          /** The subscription-included request count. */
          subscriptionIncludedReqs?: number;
          /** The API key request count. */
          apiKeyReqs?: number;
          /** The usage-based request count. */
          usageBasedReqs?: number;
          /** The Bugbot usage count. */
          bugbotUsages?: number;
          /** The most frequently used model for the day. */
          mostUsedModel?: string | null;
          /** The most common file extension for apply actions. */
          applyMostUsedExtension?: string | null;
          /** The most common file extension for Tab completions. */
          tabMostUsedExtension?: string | null;
          /** The Cursor client version used. */
          clientVersion?: string | null;
          [key: string]: unknown;
        }>;
        /** A JSON object returned by Cursor. */
        period: Record<string, unknown>;
        /** Cursor pagination metadata. */
        pagination?: {
          /** The current 1-indexed page number. */
          page?: number;
          /** The number of records requested per page. */
          pageSize?: number;
          /** The total number of matching records. */
          totalCount?: number;
          /** The total number of matching users. */
          totalUsers?: number;
          /** The total number of result pages. */
          totalPages?: number;
          /** Whether another result page is available. */
          hasNextPage?: boolean;
          /** Whether a previous result page is available. */
          hasPreviousPage?: boolean;
          [key: string]: unknown;
        };
        /** A JSON object returned by Cursor. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Cursor team spending for the current billing cycle with optional search, sort, and pagination. */
    "cursor.get_team_spend": {
      input: {
        /**
         * Search text matched against user names and emails.
         * @minLength 1
         */
        searchTerm?: string;
        /** The field used to sort spending rows. */
        sortBy?: "amount" | "date" | "user";
        /** The sort direction for spending rows. */
        sortDirection?: "asc" | "desc";
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of spending rows to return per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The Cursor team member spending rows. */
        teamMemberSpend: Array<{
          /** The Cursor user ID. */
          userId?: number;
          /** The user display name. */
          name?: string;
          /**
           * The user email address.
           * @format email
           */
          email?: string;
          /** The team role such as member or owner. */
          role?: string;
          /** The on-demand spend in cents for the current billing cycle. */
          spendCents?: number;
          /** The total spend in cents for the current billing cycle, including included usage. */
          overallSpendCents?: number;
          /** The number of usage-based premium requests. */
          fastPremiumRequests?: number;
          /** The custom hard spending limit override in dollars. */
          hardLimitOverrideDollars?: number;
          /** The monthly spending limit in dollars, or null when none is set. */
          monthlyLimitDollars?: number | null;
          [key: string]: unknown;
        }>;
        /** The current subscription cycle start timestamp in epoch milliseconds. */
        subscriptionCycleStart: number;
        /** The total number of matching team members. */
        totalMembers: number;
        /** The total number of spending pages. */
        totalPages: number;
        /** A JSON object returned by Cursor. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cursor team audit log events with optional time, event type, user, search, and page filters. */
    "cursor.list_audit_logs": {
      input: {
        /**
         * The start time as a Cursor date shortcut, ISO timestamp, date, or Unix timestamp.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The end time as a Cursor date shortcut, ISO timestamp, date, or Unix timestamp.
         * @minLength 1
         */
        endTime?: string;
        /**
         * Cursor audit event types to include.
         * @minItems 1
         */
        eventTypes?: Array<string>;
        /**
         * A search term used to filter audit events.
         * @minLength 1
         */
        search?: string;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * User emails or encoded Cursor user IDs to filter by.
         * @minItems 1
         */
        users?: Array<string>;
      };
      output: {
        /** The Cursor audit log events. */
        events: Array<{
          /** The Cursor audit event ID. */
          event_id?: string;
          /**
           * The event timestamp.
           * @format date-time
           */
          timestamp?: string;
          /** The IP address associated with the event. */
          ip_address?: string;
          /**
           * The user email address associated with the event.
           * @format email
           */
          user_email?: string;
          /** The Cursor audit event type. */
          event_type?: string;
          /** A JSON object returned by Cursor. */
          event_data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Cursor pagination metadata. */
        pagination: {
          /** The current 1-indexed page number. */
          page?: number;
          /** The number of records requested per page. */
          pageSize?: number;
          /** The total number of matching records. */
          totalCount?: number;
          /** The total number of matching users. */
          totalUsers?: number;
          /** The total number of result pages. */
          totalPages?: number;
          /** Whether another result page is available. */
          hasNextPage?: boolean;
          /** Whether a previous result page is available. */
          hasPreviousPage?: boolean;
          [key: string]: unknown;
        };
        /** A JSON object returned by Cursor. */
        params?: Record<string, unknown>;
        /** A JSON object returned by Cursor. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cursor team members visible to the team API key. */
    "cursor.list_team_members": {
      input: Record<string, never>;
      output: {
        /** The Cursor team members. */
        teamMembers: Array<{
          /** The unique Cursor team member ID. */
          id: number;
          /**
           * The team member email address.
           * @format email
           */
          email: string;
          /** The team member display name. */
          name?: string;
          /** The team role such as member or owner. */
          role?: string;
          /** Whether this member has been removed from the team. */
          isRemoved?: boolean;
        }>;
        /** A JSON object returned by Cursor. */
        raw: Record<string, unknown>;
      };
    };
  }
}
