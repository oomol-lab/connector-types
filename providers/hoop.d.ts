import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Hoop profile for the connected API key. */
    "hoop.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Hoop API caller profile. */
        user: {
          /** The Hoop user subject identifier. */
          subject?: string;
          /** The Hoop user email address. */
          email?: string;
          /** The Hoop user display name. */
          name?: string;
          /** The Hoop groups assigned to the caller. */
          groups?: Array<string>;
          /** The raw Hoop userinfo response. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Hoop connections with optional filters and pagination. */
    "hoop.list_connections": {
      input: {
        /**
         * Filter by Hoop agent ID.
         * @minLength 1
         */
        agentId?: string;
        /**
         * Deprecated comma-separated Hoop tags filter.
         * @minLength 1
         */
        tags?: string;
        /**
         * Selector tags to filter on, such as key=value,key2!=value2.
         * @minLength 1
         */
        tagSelector?: string;
        /**
         * Search by connection name, type, subtype, resource name, or status.
         * @minLength 1
         */
        search?: string;
        /**
         * Filter by Hoop connection type.
         * @minLength 1
         */
        type?: string;
        /**
         * Filter by Hoop connection subtype.
         * @minLength 1
         */
        subtype?: string;
        /**
         * Filter by manager identifier.
         * @minLength 1
         */
        managedBy?: string;
        /**
         * Filter by upstream resource name.
         * @minLength 1
         */
        resourceName?: string;
        /**
         * Filter by comma-separated Hoop attributes.
         * @minLength 1
         */
        attribute?: string;
        /**
         * Filter by comma-separated Hoop connection IDs.
         * @minLength 1
         */
        connectionIds?: string;
        /**
         * Maximum number of connections to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * One-based Hoop page number.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The Hoop connection summaries. */
        connections: Array<{
          /** The Hoop connection name. */
          name?: string;
          /** The Hoop connection type. */
          type?: string;
          /** The Hoop connection subtype. */
          subtype?: string;
          /** The current connection status. */
          status?: string;
          /** The agent ID associated with the connection. */
          agentId?: string;
          /** The upstream resource name associated with the connection. */
          resourceName?: string;
          /** The raw Hoop connection object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Hoop connections response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Hoop sessions with optional filters and pagination. */
    "hoop.list_sessions": {
      input: {
        /**
         * Filter by Hoop user subject ID.
         * @minLength 1
         */
        user?: string;
        /**
         * Filter by Hoop connection name.
         * @minLength 1
         */
        connectionName?: string;
        /**
         * Filter by Hoop connection type.
         * @minLength 1
         */
        type?: string;
        /**
         * Filter by the review approver email.
         * @minLength 1
         */
        reviewApprover?: string;
        /**
         * Filter by review status.
         * @minLength 1
         */
        reviewStatus?: string;
        /**
         * Filter by external workflow or task correlation ID.
         * @minLength 1
         */
        correlationId?: string;
        /**
         * Filter by Jira issue key.
         * @minLength 1
         */
        jiraIssueKey?: string;
        /**
         * Filter sessions starting on or after this RFC3339 timestamp.
         * @format date-time
         */
        startDate?: string;
        /**
         * Filter sessions ending on or before this RFC3339 timestamp.
         * @format date-time
         */
        endDate?: string;
        /**
         * Maximum number of sessions to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset used to paginate Hoop sessions.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The Hoop session summaries. */
        sessions: Array<{
          /** The Hoop session identifier. */
          id?: string;
          /** The connection name associated with the session. */
          connectionName?: string;
          /** The current session status. */
          status?: string;
          /** The Hoop user subject or email associated with the session. */
          user?: string;
          /** The raw Hoop session object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Hoop sessions response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
  }
}
