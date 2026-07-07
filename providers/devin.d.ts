import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Devin organization session from a prompt. */
    "devin.create_session": {
      input: {
        /**
         * The Devin organization ID, usually prefixed with org-.
         * @minLength 1
         */
        orgId: string;
        /**
         * The prompt Devin should execute in the new session.
         * @minLength 1
         */
        prompt: string;
        /**
         * The optional title for the new session.
         * @minLength 1
         */
        title?: string;
        /**
         * Optional caller-supplied Devin session ID for the request query.
         * @minLength 1
         */
        devinId?: string;
        /** The Devin agent mode to use for the session. */
        devinMode?: "normal" | "fast" | "lite" | "ultra";
        /** Repository names Devin should use for the session. */
        repos?: Array<string>;
        /** URLs for files Devin should attach to the session. */
        attachmentUrls?: Array<string>;
        /** Tags to attach to the new session. */
        tags?: Array<string>;
        /**
         * The playbook ID to use for the session.
         * @minLength 1
         */
        playbookId?: string;
        /**
         * The child playbook ID to use for the session.
         * @minLength 1
         */
        childPlaybookId?: string;
        /** Knowledge entry IDs to attach to the session. */
        knowledgeIds?: Array<string>;
        /** Secret IDs to attach to the session. */
        secretIds?: Array<string>;
        /** Links to associate with the session. */
        sessionLinks?: Array<string>;
        /**
         * Create the session on behalf of this Devin user ID.
         * @minLength 1
         */
        createAsUserId?: string;
        /** Maximum ACU usage allowed for the session. */
        maxAcuLimit?: number;
        /** Whether Devin should bypass approvals when allowed. */
        bypassApproval?: boolean;
        /** Whether to preserve VM state after the session stops. */
        resumable?: boolean;
        /**
         * The configured VM platform label to use for the session.
         * @minLength 1
         */
        platform?: string;
        /** Whether Devin must provide final structured output before finishing. */
        structuredOutputRequired?: boolean;
        /** A JSON object returned by Devin. */
        structuredOutputSchema?: Record<string, unknown>;
      };
      output: {
        /** A Devin session. */
        session: {
          /**
           * The Devin session identifier.
           * @minLength 1
           */
          session_id?: string;
          /**
           * The Devin organization identifier.
           * @minLength 1
           */
          org_id?: string;
          /** The current Devin session status. */
          status?: "new" | "claimed" | "running" | "exit" | "error" | "suspended" | "resuming";
          /** Additional detail about the Devin session status. */
          status_detail?: "working" | "waiting_for_user" | "waiting_for_approval" | "finished" | "inactivity" | "user_request" | "usage_limit_exceeded" | "out_of_credits" | "out_of_quota" | "no_quota_allocation" | "payment_declined" | "org_usage_limit_exceeded" | "total_session_limit_exceeded" | "error" | null;
          /** The Devin session title. */
          title?: string | null;
          /** The web URL for the Devin session. */
          url?: string;
          /** The Unix timestamp when the session was created. */
          created_at?: number;
          /** The Unix timestamp when the session was last updated. */
          updated_at?: number;
          /** The user identifier associated with the session. */
          user_id?: string | null;
          /** The service user identifier associated with the session. */
          service_user_id?: string | null;
          /** The origin from which the Devin session was created. */
          origin?: "webapp" | "slack" | "teams" | "api" | "linear" | "jira" | "automation" | "cli" | "desktop" | "code_scan" | "other" | null;
          /** The Devin-assigned session category. */
          category?: "bug_fixing" | "ci_cd_and_devops" | "code_quality_and_security" | "code_review" | "code_review_and_analysis" | "data_and_automation" | "documentation_and_content" | "feature_development" | "migrations_and_upgrades" | "other" | "refactoring_and_optimization" | "research_and_exploration" | "security" | "unit_test_generation" | null;
          /** The Devin-assigned session subcategory. */
          subcategory?: string | null;
          /** The tags attached to the session. */
          tags?: Array<string>;
          /** A JSON object returned by Devin. */
          structured_output?: Record<string, unknown> | null;
          /** Whether the session is archived. */
          is_archived?: boolean;
          /** The ACUs consumed by the session. */
          acus_consumed?: number;
          [key: string]: unknown;
        };
        /** The raw Devin API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get identity information for the authenticated Devin API credential. */
    "devin.get_self": {
      input: Record<string, never>;
      output: {
        /**
         * The authenticated Devin principal type.
         * @minLength 1
         */
        principalType: string;
        /** The organization ID associated with the credential when available. */
        orgId: string | null;
        /**
         * The stable principal identifier.
         * @minLength 1
         */
        id: string;
        /** The principal display name when available. */
        name: string | null;
        /** The raw Devin API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for one Devin organization session. */
    "devin.get_session": {
      input: {
        /**
         * The Devin organization ID, usually prefixed with org-.
         * @minLength 1
         */
        orgId: string;
        /**
         * The Devin session ID, usually prefixed with devin-.
         * @minLength 1
         */
        devinId: string;
      };
      output: {
        /** A Devin session. */
        session: {
          /**
           * The Devin session identifier.
           * @minLength 1
           */
          session_id?: string;
          /**
           * The Devin organization identifier.
           * @minLength 1
           */
          org_id?: string;
          /** The current Devin session status. */
          status?: "new" | "claimed" | "running" | "exit" | "error" | "suspended" | "resuming";
          /** Additional detail about the Devin session status. */
          status_detail?: "working" | "waiting_for_user" | "waiting_for_approval" | "finished" | "inactivity" | "user_request" | "usage_limit_exceeded" | "out_of_credits" | "out_of_quota" | "no_quota_allocation" | "payment_declined" | "org_usage_limit_exceeded" | "total_session_limit_exceeded" | "error" | null;
          /** The Devin session title. */
          title?: string | null;
          /** The web URL for the Devin session. */
          url?: string;
          /** The Unix timestamp when the session was created. */
          created_at?: number;
          /** The Unix timestamp when the session was last updated. */
          updated_at?: number;
          /** The user identifier associated with the session. */
          user_id?: string | null;
          /** The service user identifier associated with the session. */
          service_user_id?: string | null;
          /** The origin from which the Devin session was created. */
          origin?: "webapp" | "slack" | "teams" | "api" | "linear" | "jira" | "automation" | "cli" | "desktop" | "code_scan" | "other" | null;
          /** The Devin-assigned session category. */
          category?: "bug_fixing" | "ci_cd_and_devops" | "code_quality_and_security" | "code_review" | "code_review_and_analysis" | "data_and_automation" | "documentation_and_content" | "feature_development" | "migrations_and_upgrades" | "other" | "refactoring_and_optimization" | "research_and_exploration" | "security" | "unit_test_generation" | null;
          /** The Devin-assigned session subcategory. */
          subcategory?: string | null;
          /** The tags attached to the session. */
          tags?: Array<string>;
          /** A JSON object returned by Devin. */
          structured_output?: Record<string, unknown> | null;
          /** Whether the session is archived. */
          is_archived?: boolean;
          /** The ACUs consumed by the session. */
          acus_consumed?: number;
          [key: string]: unknown;
        };
        /** The raw Devin API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Devin organization sessions with optional filters using cursor-based pagination. */
    "devin.list_sessions": {
      input: {
        /**
         * The Devin organization ID, usually prefixed with org-.
         * @minLength 1
         */
        orgId: string;
        /**
         * The maximum number of sessions to return.
         * @minimum 1
         * @maximum 200
         */
        first?: number;
        /**
         * The pagination cursor returned by a previous list_sessions call.
         * @minLength 1
         */
        after?: string;
        /**
         * Filter results to one Devin session ID.
         * @minLength 1
         */
        devinId?: string;
        /** Filter results by Devin session IDs. */
        sessionIds?: Array<string>;
        /** Filter results by Devin user IDs. */
        userIds?: Array<string>;
        /** Filter results by Devin service user IDs. */
        serviceUserIds?: Array<string>;
        /** Filter results by repository names such as owner/repo. */
        repoNames?: Array<string>;
        /** Filter results by session tags. */
        tags?: Array<string>;
        /** Filter results by session origins. */
        origins?: Array<"webapp" | "slack" | "teams" | "api" | "linear" | "jira" | "automation" | "cli" | "desktop" | "code_scan" | "other">;
        /** The Devin-assigned session category. */
        category?: "bug_fixing" | "ci_cd_and_devops" | "code_quality_and_security" | "code_review" | "code_review_and_analysis" | "data_and_automation" | "documentation_and_content" | "feature_development" | "migrations_and_upgrades" | "other" | "refactoring_and_optimization" | "research_and_exploration" | "security" | "unit_test_generation";
        /** Filter results by archived state. */
        isArchived?: boolean;
        /** Only include sessions created after this Unix timestamp. */
        createdAfter?: number;
        /** Only include sessions created before this Unix timestamp. */
        createdBefore?: number;
        /** Only include sessions updated after this Unix timestamp. */
        updatedAfter?: number;
        /** Only include sessions updated before this Unix timestamp. */
        updatedBefore?: number;
        /**
         * Filter results by playbook ID.
         * @minLength 1
         */
        playbookId?: string;
        /**
         * Filter results by schedule ID.
         * @minLength 1
         */
        scheduleId?: string;
      };
      output: {
        /** The Devin sessions returned by the API. */
        items: Array<{
          /**
           * The Devin session identifier.
           * @minLength 1
           */
          session_id?: string;
          /**
           * The Devin organization identifier.
           * @minLength 1
           */
          org_id?: string;
          /** The current Devin session status. */
          status?: "new" | "claimed" | "running" | "exit" | "error" | "suspended" | "resuming";
          /** Additional detail about the Devin session status. */
          status_detail?: "working" | "waiting_for_user" | "waiting_for_approval" | "finished" | "inactivity" | "user_request" | "usage_limit_exceeded" | "out_of_credits" | "out_of_quota" | "no_quota_allocation" | "payment_declined" | "org_usage_limit_exceeded" | "total_session_limit_exceeded" | "error" | null;
          /** The Devin session title. */
          title?: string | null;
          /** The web URL for the Devin session. */
          url?: string;
          /** The Unix timestamp when the session was created. */
          created_at?: number;
          /** The Unix timestamp when the session was last updated. */
          updated_at?: number;
          /** The user identifier associated with the session. */
          user_id?: string | null;
          /** The service user identifier associated with the session. */
          service_user_id?: string | null;
          /** The origin from which the Devin session was created. */
          origin?: "webapp" | "slack" | "teams" | "api" | "linear" | "jira" | "automation" | "cli" | "desktop" | "code_scan" | "other" | null;
          /** The Devin-assigned session category. */
          category?: "bug_fixing" | "ci_cd_and_devops" | "code_quality_and_security" | "code_review" | "code_review_and_analysis" | "data_and_automation" | "documentation_and_content" | "feature_development" | "migrations_and_upgrades" | "other" | "refactoring_and_optimization" | "research_and_exploration" | "security" | "unit_test_generation" | null;
          /** The Devin-assigned session subcategory. */
          subcategory?: string | null;
          /** The tags attached to the session. */
          tags?: Array<string>;
          /** A JSON object returned by Devin. */
          structured_output?: Record<string, unknown> | null;
          /** Whether the session is archived. */
          is_archived?: boolean;
          /** The ACUs consumed by the session. */
          acus_consumed?: number;
          [key: string]: unknown;
        }>;
        /** Whether another page of sessions is available. */
        hasNextPage: boolean;
        /** The cursor for the next page of sessions. */
        endCursor: string | null;
        /** The total matching session count when Devin returns it. */
        total: number | null;
        /** The raw Devin API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a message to an active Devin session and resume it if suspended. */
    "devin.send_message": {
      input: {
        /**
         * The Devin organization ID, usually prefixed with org-.
         * @minLength 1
         */
        orgId: string;
        /**
         * The Devin session ID, usually prefixed with devin-.
         * @minLength 1
         */
        devinId: string;
        /**
         * The message to send to the Devin session.
         * @minLength 1
         */
        message: string;
        /** URLs for files Devin should attach to the message. */
        attachmentUrls?: Array<string>;
        /**
         * Send the message on behalf of this Devin user ID.
         * @minLength 1
         */
        messageAsUserId?: string;
      };
      output: {
        /** A Devin session. */
        session: {
          /**
           * The Devin session identifier.
           * @minLength 1
           */
          session_id?: string;
          /**
           * The Devin organization identifier.
           * @minLength 1
           */
          org_id?: string;
          /** The current Devin session status. */
          status?: "new" | "claimed" | "running" | "exit" | "error" | "suspended" | "resuming";
          /** Additional detail about the Devin session status. */
          status_detail?: "working" | "waiting_for_user" | "waiting_for_approval" | "finished" | "inactivity" | "user_request" | "usage_limit_exceeded" | "out_of_credits" | "out_of_quota" | "no_quota_allocation" | "payment_declined" | "org_usage_limit_exceeded" | "total_session_limit_exceeded" | "error" | null;
          /** The Devin session title. */
          title?: string | null;
          /** The web URL for the Devin session. */
          url?: string;
          /** The Unix timestamp when the session was created. */
          created_at?: number;
          /** The Unix timestamp when the session was last updated. */
          updated_at?: number;
          /** The user identifier associated with the session. */
          user_id?: string | null;
          /** The service user identifier associated with the session. */
          service_user_id?: string | null;
          /** The origin from which the Devin session was created. */
          origin?: "webapp" | "slack" | "teams" | "api" | "linear" | "jira" | "automation" | "cli" | "desktop" | "code_scan" | "other" | null;
          /** The Devin-assigned session category. */
          category?: "bug_fixing" | "ci_cd_and_devops" | "code_quality_and_security" | "code_review" | "code_review_and_analysis" | "data_and_automation" | "documentation_and_content" | "feature_development" | "migrations_and_upgrades" | "other" | "refactoring_and_optimization" | "research_and_exploration" | "security" | "unit_test_generation" | null;
          /** The Devin-assigned session subcategory. */
          subcategory?: string | null;
          /** The tags attached to the session. */
          tags?: Array<string>;
          /** A JSON object returned by Devin. */
          structured_output?: Record<string, unknown> | null;
          /** Whether the session is archived. */
          is_archived?: boolean;
          /** The ACUs consumed by the session. */
          acus_consumed?: number;
          [key: string]: unknown;
        };
        /** The raw Devin API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Terminate a Devin session, optionally archiving it for future reference. */
    "devin.terminate_session": {
      input: {
        /**
         * The Devin organization ID, usually prefixed with org-.
         * @minLength 1
         */
        orgId: string;
        /**
         * The Devin session ID, usually prefixed with devin-.
         * @minLength 1
         */
        devinId: string;
        /** Whether Devin should archive the session after terminating it. */
        archive?: boolean;
      };
      output: {
        /** A Devin session. */
        session: {
          /**
           * The Devin session identifier.
           * @minLength 1
           */
          session_id?: string;
          /**
           * The Devin organization identifier.
           * @minLength 1
           */
          org_id?: string;
          /** The current Devin session status. */
          status?: "new" | "claimed" | "running" | "exit" | "error" | "suspended" | "resuming";
          /** Additional detail about the Devin session status. */
          status_detail?: "working" | "waiting_for_user" | "waiting_for_approval" | "finished" | "inactivity" | "user_request" | "usage_limit_exceeded" | "out_of_credits" | "out_of_quota" | "no_quota_allocation" | "payment_declined" | "org_usage_limit_exceeded" | "total_session_limit_exceeded" | "error" | null;
          /** The Devin session title. */
          title?: string | null;
          /** The web URL for the Devin session. */
          url?: string;
          /** The Unix timestamp when the session was created. */
          created_at?: number;
          /** The Unix timestamp when the session was last updated. */
          updated_at?: number;
          /** The user identifier associated with the session. */
          user_id?: string | null;
          /** The service user identifier associated with the session. */
          service_user_id?: string | null;
          /** The origin from which the Devin session was created. */
          origin?: "webapp" | "slack" | "teams" | "api" | "linear" | "jira" | "automation" | "cli" | "desktop" | "code_scan" | "other" | null;
          /** The Devin-assigned session category. */
          category?: "bug_fixing" | "ci_cd_and_devops" | "code_quality_and_security" | "code_review" | "code_review_and_analysis" | "data_and_automation" | "documentation_and_content" | "feature_development" | "migrations_and_upgrades" | "other" | "refactoring_and_optimization" | "research_and_exploration" | "security" | "unit_test_generation" | null;
          /** The Devin-assigned session subcategory. */
          subcategory?: string | null;
          /** The tags attached to the session. */
          tags?: Array<string>;
          /** A JSON object returned by Devin. */
          structured_output?: Record<string, unknown> | null;
          /** Whether the session is archived. */
          is_archived?: boolean;
          /** The ACUs consumed by the session. */
          acus_consumed?: number;
          [key: string]: unknown;
        };
        /** The raw Devin API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
