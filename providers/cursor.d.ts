import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a session while retaining readable history. Call unarchive_agent before sending another prompt. */
    "cursor.archive_agent": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /**
         * Affected agent or run ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Cancel an active run. To continue afterward, create a new run on the same session. */
    "cursor.cancel_run": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
        /**
         * Run ID returned by create_agent, create_run, or list_runs (run-...).
         * @minLength 1
         */
        runId: string;
      };
      output: {
        /**
         * Affected agent or run ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Create a durable Cursor cloud session and enqueue its first run. Returns immediately; poll get_run for the result. MCP servers can give the session access to external tools. */
    "cursor.create_agent": {
      input: {
        /** Instructions for one run. */
        prompt: {
          /**
           * Task or follow-up instructions.
           * @minLength 1
           * @pattern \S
           */
          text: string;
        };
        /**
         * Session name; generated from the prompt when omitted.
         * @minLength 1
         * @maxLength 100
         * @pattern \S
         */
        name?: string;
        /**
         * Repositories to clone. Omit for a no-repo VM, if enabled for your account.
         * @maxItems 20
         */
        repos?: Array<{
          /**
           * GitHub repository URL, including https://.
           * @format uri
           */
          url: string;
          /**
           * Starting branch or commit; ignored when prUrl is supplied.
           * @minLength 1
           */
          startingRef: string;
          /**
           * Existing pull request to work on; url is still required.
           * @format uri
           */
          prUrl: string;
        }>;
        /** Model configuration. Omit to use Cursor's configured model. */
        model?: {
          /**
           * Model ID from list_models.
           * @minLength 1
           */
          id: string;
          /** Model parameters supported by list_models. */
          params: Array<{
            /**
             * Parameter ID.
             * @minLength 1
             */
            id: string;
            /** Parameter value. */
            value: string;
          }>;
        };
        /** Choose plan to explore and propose changes, or agent to implement them. */
        mode?: "agent" | "plan";
        /**
         * Inline MCP servers. On a follow-up, replaces the current inline servers for that run; omit to retain them.
         * @maxItems 50
         */
        mcpServers?: Array<{
          /**
           * Unique server name.
           * @minLength 1
           */
          name: string;
          /** Remote MCP transport type. */
          type: "http" | "sse";
          /**
           * HTTP(S) MCP endpoint that Cursor can reach, without embedded credentials.
           * @format uri
           */
          url: string;
          /** Headers sent by Cursor to this MCP server. */
          headers: Record<string, string>;
        } | {
          /**
           * Unique server name.
           * @minLength 1
           */
          name: string;
          /** Local standard-input MCP transport. */
          type: "stdio";
          /**
           * Command to run inside the cloud VM.
           * @minLength 1
           */
          command: string;
          /** Command arguments. */
          args: Array<string>;
          /** Environment variables for the MCP process. */
          env: Record<string, string>;
        }>;
        /** Open a pull request after the run finishes. */
        autoCreatePR?: boolean;
        /** Push to the starting branch or existing PR head; false creates a new branch. */
        workOnCurrentBranch?: boolean;
        /** Skip requesting the user as reviewer when autoCreatePR is true. */
        skipReviewerRequest?: boolean;
      };
      output: {
        /** Durable cloud session. Read latestRunId with get_run for execution progress. */
        agent: {
          /**
           * Cloud agent ID returned by create_agent or list_agents (bc-...).
           * @minLength 1
           */
          id: string;
          /** Agent name. */
          name: string;
          /** Agent status. */
          status: "ACTIVE" | "IDLE" | "ARCHIVED";
          /**
           * Creation time.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update time.
           * @format date-time
           */
          updatedAt: string;
          /**
           * Open this session in Cursor.
           * @format uri
           */
          url?: string;
          /**
           * Run ID returned by create_agent, create_run, or list_runs (run-...).
           * @minLength 1
           */
          latestRunId?: string;
          /** Execution environment. */
          env?: {
            /** Environment type. */
            type?: string;
            /** Environment name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Repositories available to the session. */
          repos?: Array<{
            /**
             * GitHub repository URL, including https://.
             * @format uri
             */
            url: string;
            /**
             * Starting branch or commit; ignored when prUrl is supplied.
             * @minLength 1
             */
            startingRef: string;
            /**
             * Existing pull request to work on; url is still required.
             * @format uri
             */
            prUrl: string;
          }>;
          /** Whether commits are pushed to the starting branch. */
          workOnCurrentBranch?: boolean;
          /** Whether Cursor opens a pull request. */
          autoCreatePR?: boolean;
          [key: string]: unknown;
        };
        /** One prompt execution. Poll get_run until a terminal status to read result. */
        run: {
          /**
           * Run ID returned by create_agent, create_run, or list_runs (run-...).
           * @minLength 1
           */
          id: string;
          /**
           * Cloud agent ID returned by create_agent or list_agents (bc-...).
           * @minLength 1
           */
          agentId: string;
          /** Run status. */
          status: "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
          /**
           * Creation time.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update time.
           * @format date-time
           */
          updatedAt: string;
          /**
           * Elapsed milliseconds for a terminal run.
           * @minimum 0
           */
          durationMs?: number;
          /** Final assistant reply when available. */
          result?: string;
          /** Current pushed branches across the agent, shared by all of its runs. */
          git?: {
            /** Pushed branches. */
            branches?: Array<{
              /** Repository host and path, without a URL scheme. */
              repoUrl: string;
              /** Pushed branch name. */
              branch?: string;
              /**
               * Pull request URL.
               * @format uri
               */
              prUrl?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Send a follow-up using the session's conversation and workspace. Wait for or cancel an active run before starting another. Unarchive archived sessions first. */
    "cursor.create_run": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
        /** Instructions for one run. */
        prompt: {
          /**
           * Task or follow-up instructions.
           * @minLength 1
           * @pattern \S
           */
          text: string;
        };
        /** Choose plan to explore and propose changes, or agent to implement them. */
        mode?: "agent" | "plan";
        /**
         * Inline MCP servers. On a follow-up, replaces the current inline servers for that run; omit to retain them.
         * @maxItems 50
         */
        mcpServers?: Array<{
          /**
           * Unique server name.
           * @minLength 1
           */
          name: string;
          /** Remote MCP transport type. */
          type: "http" | "sse";
          /**
           * HTTP(S) MCP endpoint that Cursor can reach, without embedded credentials.
           * @format uri
           */
          url: string;
          /** Headers sent by Cursor to this MCP server. */
          headers: Record<string, string>;
        } | {
          /**
           * Unique server name.
           * @minLength 1
           */
          name: string;
          /** Local standard-input MCP transport. */
          type: "stdio";
          /**
           * Command to run inside the cloud VM.
           * @minLength 1
           */
          command: string;
          /** Command arguments. */
          args: Array<string>;
          /** Environment variables for the MCP process. */
          env: Record<string, string>;
        }>;
      };
      output: {
        /** One prompt execution. Poll get_run until a terminal status to read result. */
        run: {
          /**
           * Run ID returned by create_agent, create_run, or list_runs (run-...).
           * @minLength 1
           */
          id: string;
          /**
           * Cloud agent ID returned by create_agent or list_agents (bc-...).
           * @minLength 1
           */
          agentId: string;
          /** Run status. */
          status: "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
          /**
           * Creation time.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update time.
           * @format date-time
           */
          updatedAt: string;
          /**
           * Elapsed milliseconds for a terminal run.
           * @minimum 0
           */
          durationMs?: number;
          /** Final assistant reply when available. */
          result?: string;
          /** Current pushed branches across the agent, shared by all of its runs. */
          git?: {
            /** Pushed branches. */
            branches?: Array<{
              /** Repository host and path, without a URL scheme. */
              repoUrl: string;
              /** Pushed branch name. */
              branch?: string;
              /**
               * Pull request URL.
               * @format uri
               */
              prUrl?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a cloud session. This is irreversible; archive_agent provides reversible removal. */
    "cursor.delete_agent": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /**
         * Affected agent or run ID.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Read a cloud session's configuration and latestRunId. Use get_run for execution status and results. */
    "cursor.get_agent": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        id: string;
        /** Agent name. */
        name: string;
        /** Agent status. */
        status: "ACTIVE" | "IDLE" | "ARCHIVED";
        /**
         * Creation time.
         * @format date-time
         */
        createdAt: string;
        /**
         * Last update time.
         * @format date-time
         */
        updatedAt: string;
        /**
         * Open this session in Cursor.
         * @format uri
         */
        url?: string;
        /**
         * Run ID returned by create_agent, create_run, or list_runs (run-...).
         * @minLength 1
         */
        latestRunId?: string;
        /** Execution environment. */
        env?: {
          /** Environment type. */
          type?: string;
          /** Environment name. */
          name?: string;
          [key: string]: unknown;
        };
        /** Repositories available to the session. */
        repos?: Array<{
          /**
           * GitHub repository URL, including https://.
           * @format uri
           */
          url: string;
          /**
           * Starting branch or commit; ignored when prUrl is supplied.
           * @minLength 1
           */
          startingRef: string;
          /**
           * Existing pull request to work on; url is still required.
           * @format uri
           */
          prUrl: string;
        }>;
        /** Whether commits are pushed to the starting branch. */
        workOnCurrentBranch?: boolean;
        /** Whether Cursor opens a pull request. */
        autoCreatePR?: boolean;
        [key: string]: unknown;
      };
    };
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
    /** Read a run's progress, final assistant reply, and pushed branches. FINISHED, ERROR, CANCELLED, and EXPIRED are terminal statuses. */
    "cursor.get_run": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
        /**
         * Run ID returned by create_agent, create_run, or list_runs (run-...).
         * @minLength 1
         */
        runId: string;
      };
      output: {
        /**
         * Run ID returned by create_agent, create_run, or list_runs (run-...).
         * @minLength 1
         */
        id: string;
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
        /** Run status. */
        status: "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
        /**
         * Creation time.
         * @format date-time
         */
        createdAt: string;
        /**
         * Last update time.
         * @format date-time
         */
        updatedAt: string;
        /**
         * Elapsed milliseconds for a terminal run.
         * @minimum 0
         */
        durationMs?: number;
        /** Final assistant reply when available. */
        result?: string;
        /** Current pushed branches across the agent, shared by all of its runs. */
        git?: {
          /** Pushed branches. */
          branches?: Array<{
            /** Repository host and path, without a URL scheme. */
            repoUrl: string;
            /** Pushed branch name. */
            branch?: string;
            /**
             * Pull request URL.
             * @format uri
             */
            prUrl?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
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
    /** List cloud sessions, newest first. Use nextCursor to request another page. */
    "cursor.list_agents": {
      input: {
        /**
         * Page size; Cursor defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Use nextCursor from the previous page; omit for the first page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Filter by pull request URL.
         * @format uri
         */
        prUrl?: string;
        /** Include archived sessions; Cursor defaults to true. */
        includeArchived?: boolean;
      };
      output: {
        /** Cloud sessions. */
        items: Array<{
          /**
           * Cloud agent ID returned by create_agent or list_agents (bc-...).
           * @minLength 1
           */
          id: string;
          /** Agent name. */
          name: string;
          /** Agent status. */
          status: "ACTIVE" | "IDLE" | "ARCHIVED";
          /**
           * Creation time.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update time.
           * @format date-time
           */
          updatedAt: string;
          /**
           * Open this session in Cursor.
           * @format uri
           */
          url?: string;
          /**
           * Run ID returned by create_agent, create_run, or list_runs (run-...).
           * @minLength 1
           */
          latestRunId?: string;
          /** Execution environment. */
          env?: {
            /** Environment type. */
            type?: string;
            /** Environment name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Repositories available to the session. */
          repos?: Array<{
            /**
             * GitHub repository URL, including https://.
             * @format uri
             */
            url: string;
            /**
             * Starting branch or commit; ignored when prUrl is supplied.
             * @minLength 1
             */
            startingRef: string;
            /**
             * Existing pull request to work on; url is still required.
             * @format uri
             */
            prUrl: string;
          }>;
          /** Whether commits are pushed to the starting branch. */
          workOnCurrentBranch?: boolean;
          /** Whether Cursor opens a pull request. */
          autoCreatePR?: boolean;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page. */
        nextCursor?: string;
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
    /** List available cloud agent models and their supported parameters and variants. */
    "cursor.list_models": {
      input: Record<string, never>;
      output: {
        /** Available models. */
        items: Array<{
          /**
           * Model ID for create_agent.
           * @minLength 1
           */
          id: string;
          /** Model name. */
          displayName: string;
          /** Model description. */
          description?: string;
          /** Alternative model IDs. */
          aliases?: Array<string>;
          /** Supported parameters. */
          parameters?: Array<{
            /** Parameter ID. */
            id: string;
            /** Parameter name. */
            displayName?: string;
            /** Allowed values. */
            values: Array<{
              /** Parameter value. */
              value: string;
              /** Value name. */
              displayName?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Supported model configurations. */
          variants?: Array<{
            /** Model parameters supported by list_models. */
            params: Array<{
              /**
               * Parameter ID.
               * @minLength 1
               */
              id: string;
              /** Parameter value. */
              value: string;
            }>;
            /** Variant name. */
            displayName: string;
            /** Variant description. */
            description?: string;
            /** Whether this is the default variant. */
            isDefault?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a cloud session's runs, newest first, with cursor pagination. */
    "cursor.list_runs": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
        /**
         * Page size; Cursor defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Use nextCursor from the previous page; omit for the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Runs. */
        items: Array<{
          /**
           * Run ID returned by create_agent, create_run, or list_runs (run-...).
           * @minLength 1
           */
          id: string;
          /**
           * Cloud agent ID returned by create_agent or list_agents (bc-...).
           * @minLength 1
           */
          agentId: string;
          /** Run status. */
          status: "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
          /**
           * Creation time.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update time.
           * @format date-time
           */
          updatedAt: string;
          /**
           * Elapsed milliseconds for a terminal run.
           * @minimum 0
           */
          durationMs?: number;
          /** Final assistant reply when available. */
          result?: string;
          /** Current pushed branches across the agent, shared by all of its runs. */
          git?: {
            /** Pushed branches. */
            branches?: Array<{
              /** Repository host and path, without a URL scheme. */
              repoUrl: string;
              /** Pushed branch name. */
              branch?: string;
              /**
               * Pull request URL.
               * @format uri
               */
              prUrl?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Cursor for the next page. */
        nextCursor?: string;
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
    /** Restore an archived session so it can accept new runs. */
    "cursor.unarchive_agent": {
      input: {
        /**
         * Cloud agent ID returned by create_agent or list_agents (bc-...).
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /**
         * Affected agent or run ID.
         * @minLength 1
         */
        id: string;
      };
    };
  }
}
