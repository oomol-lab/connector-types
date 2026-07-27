import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Browser Use Cloud account billing and plan information. */
    "browser_use.get_billing_account": {
      input: Record<string, never>;
      output: {
        /** The Browser Use account billing response. */
        account: {
          /** The Browser Use account user name. */
          name?: string | null;
          /** The total credits balance in USD. */
          totalCreditsBalanceUsd: number;
          /** The monthly subscription credits balance in USD. */
          monthlyCreditsBalanceUsd: number;
          /** The additional top-up credits balance in USD. */
          additionalCreditsBalanceUsd: number;
          /** The account rate limit. */
          rateLimit: number;
          /** Browser Use account plan information. */
          planInfo: {
            /** The Browser Use plan name. */
            planName: string;
            /** The subscription status. */
            subscriptionStatus: string | null;
            /** The subscription ID. */
            subscriptionId: string | null;
            /** The end of the current subscription period. */
            subscriptionCurrentPeriodEnd: string | null;
            /** When the subscription was canceled. */
            subscriptionCanceledAt: string | null;
          };
          /** Whether the account is on the free tier. */
          isFreeTier?: boolean;
          /**
           * The Browser Use project ID.
           * @format uuid
           */
          projectId: string;
        };
      };
    };
    /** Get a Browser Use Cloud session and poll for task completion. */
    "browser_use.get_session": {
      input: {
        /**
         * The Browser Use session ID.
         * @format uuid
         */
        sessionId: string;
      };
      output: {
        /** A Browser Use Cloud session. */
        session: {
          /**
           * The Browser Use session ID.
           * @format uuid
           */
          id?: string;
          /** The Browser Use session lifecycle status. */
          status?: "created" | "idle" | "running" | "stopped" | "timed_out" | "error";
          /** The Browser Use model to run the task with. */
          model?: "bu-mini" | "bu-max" | "bu-ultra" | "gemini-3-flash" | "claude-sonnet-4.6" | "claude-opus-4.6" | "claude-opus-4.7" | "gpt-5.4-mini";
          /** The auto-generated session title. */
          title?: string | null;
          /** The agent final output when the task is complete. */
          output?: unknown;
          /** The requested structured output JSON Schema. */
          outputSchema?: Record<string, unknown> | null;
          /** The number of agent steps executed so far. */
          stepCount?: number;
          /** The latest human-readable agent step summary. */
          lastStepSummary?: string | null;
          /** Whether the task completed successfully. */
          isTaskSuccessful?: boolean | null;
          /** The live browser preview URL. */
          liveUrl?: string | null;
          /** The recording URLs returned for the session. */
          recordingUrls?: Array<string>;
          /**
           * The browser profile ID attached to this session.
           * @format uuid
           */
          profileId?: string | null;
          /**
           * The workspace ID attached to this session.
           * @format uuid
           */
          workspaceId?: string | null;
          /** The country code used for the Browser Use proxy. */
          proxyCountryCode?: string | null;
          /** The maximum cost limit in USD for this session. */
          maxCostUsd?: string | null;
          /** Total LLM input tokens consumed by this session. */
          totalInputTokens?: number;
          /** Total LLM output tokens consumed by this session. */
          totalOutputTokens?: number;
          /**
           * Proxy bandwidth used in megabytes.
           * @minLength 1
           * @pattern \S
           */
          proxyUsedMb?: string;
          /**
           * Cost of LLM usage in USD.
           * @minLength 1
           * @pattern \S
           */
          llmCostUsd?: string;
          /**
           * Cost of proxy bandwidth in USD.
           * @minLength 1
           * @pattern \S
           */
          proxyCostUsd?: string;
          /**
           * Cost of browser compute time in USD.
           * @minLength 1
           * @pattern \S
           */
          browserCostUsd?: string;
          /**
           * Total session cost in USD.
           * @minLength 1
           * @pattern \S
           */
          totalCostUsd?: string;
          /** The latest expiring browser screenshot URL. */
          screenshotUrl?: string | null;
          /** The temporary AgentMail email address for this session. */
          agentmailEmail?: string | null;
          /** The Browser Use integrations used by this session. */
          integrationsUsed?: Array<string>;
          /**
           * When the session was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the session was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Browser Use Cloud messages for one session. */
    "browser_use.list_session_messages": {
      input: {
        /**
         * The Browser Use session ID.
         * @format uuid
         */
        sessionId: string;
        /**
         * Return messages after this message ID.
         * @format uuid
         */
        after?: string;
        /**
         * Return messages before this message ID.
         * @format uuid
         */
        before?: string;
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Browser Use messages in chronological order. */
        messages: Array<{
          /**
           * The Browser Use message ID.
           * @format uuid
           */
          id?: string;
          /**
           * The Browser Use session ID.
           * @format uuid
           */
          sessionId?: string;
          /**
           * The message role returned by Browser Use.
           * @minLength 1
           * @pattern \S
           */
          role?: string;
          /** The raw message content. */
          data?: string;
          /** The Browser Use message type. */
          type?: string;
          /** A short human-readable message summary. */
          summary?: string;
          /** The screenshot URL captured for this message. */
          screenshotUrl?: string | null;
          /** Whether Browser Use marks the message as hidden. */
          hidden?: boolean;
          /**
           * When the message was created.
           * @format date-time
           */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /** Whether more messages are available through cursor pagination. */
        hasMore: boolean;
      };
    };
    /** List Browser Use Cloud sessions for the authenticated project. */
    "browser_use.list_sessions": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of sessions per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The Browser Use sessions on this page. */
        sessions: Array<{
          /**
           * The Browser Use session ID.
           * @format uuid
           */
          id?: string;
          /** The Browser Use session lifecycle status. */
          status?: "created" | "idle" | "running" | "stopped" | "timed_out" | "error";
          /** The Browser Use model to run the task with. */
          model?: "bu-mini" | "bu-max" | "bu-ultra" | "gemini-3-flash" | "claude-sonnet-4.6" | "claude-opus-4.6" | "claude-opus-4.7" | "gpt-5.4-mini";
          /** The auto-generated session title. */
          title?: string | null;
          /** The agent final output when the task is complete. */
          output?: unknown;
          /** The requested structured output JSON Schema. */
          outputSchema?: Record<string, unknown> | null;
          /** The number of agent steps executed so far. */
          stepCount?: number;
          /** The latest human-readable agent step summary. */
          lastStepSummary?: string | null;
          /** Whether the task completed successfully. */
          isTaskSuccessful?: boolean | null;
          /** The live browser preview URL. */
          liveUrl?: string | null;
          /** The recording URLs returned for the session. */
          recordingUrls?: Array<string>;
          /**
           * The browser profile ID attached to this session.
           * @format uuid
           */
          profileId?: string | null;
          /**
           * The workspace ID attached to this session.
           * @format uuid
           */
          workspaceId?: string | null;
          /** The country code used for the Browser Use proxy. */
          proxyCountryCode?: string | null;
          /** The maximum cost limit in USD for this session. */
          maxCostUsd?: string | null;
          /** Total LLM input tokens consumed by this session. */
          totalInputTokens?: number;
          /** Total LLM output tokens consumed by this session. */
          totalOutputTokens?: number;
          /**
           * Proxy bandwidth used in megabytes.
           * @minLength 1
           * @pattern \S
           */
          proxyUsedMb?: string;
          /**
           * Cost of LLM usage in USD.
           * @minLength 1
           * @pattern \S
           */
          llmCostUsd?: string;
          /**
           * Cost of proxy bandwidth in USD.
           * @minLength 1
           * @pattern \S
           */
          proxyCostUsd?: string;
          /**
           * Cost of browser compute time in USD.
           * @minLength 1
           * @pattern \S
           */
          browserCostUsd?: string;
          /**
           * Total session cost in USD.
           * @minLength 1
           * @pattern \S
           */
          totalCostUsd?: string;
          /** The latest expiring browser screenshot URL. */
          screenshotUrl?: string | null;
          /** The temporary AgentMail email address for this session. */
          agentmailEmail?: string | null;
          /** The Browser Use integrations used by this session. */
          integrationsUsed?: Array<string>;
          /**
           * When the session was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the session was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching sessions. */
        total: number;
        /** The current one-based page number. */
        page: number;
        /** The number of sessions per page. */
        pageSize: number;
      };
    };
    /** Create or reuse a Browser Use Cloud session and dispatch an agent task. */
    "browser_use.run_task": {
      input: {
        /**
         * The natural-language instruction for the Browser Use agent.
         * @minLength 1
         * @pattern \S
         */
        task: string;
        /** The Browser Use model to run the task with. */
        model?: "bu-mini" | "bu-max" | "bu-ultra" | "gemini-3-flash" | "claude-sonnet-4.6" | "claude-opus-4.6" | "claude-opus-4.7" | "gpt-5.4-mini";
        /**
         * The Browser Use session ID.
         * @format uuid
         */
        sessionId?: string;
        /** Whether to keep the session alive after the task completes. */
        keepAlive?: boolean;
        /**
         * Maximum total cost in USD allowed for this session.
         * @exclusiveMinimum 0
         */
        maxCostUsd?: number;
        /**
         * The browser profile ID to load into the session.
         * @format uuid
         */
        profileId?: string;
        /**
         * The workspace ID to attach to the session.
         * @format uuid
         */
        workspaceId?: string;
        /** The proxy country code, such as us, de, or jp. Use null through the proxy API to disable it. */
        proxyCountryCode?: string | null;
        /** JSON Schema that the agent final output must conform to. */
        outputSchema?: Record<string, unknown>;
        /** Whether the agent can create scheduled tasks. */
        enableScheduledTasks?: boolean;
        /** Sensitive values exposed to the agent through secure placeholders. */
        sensitiveData?: Record<string, string>;
        /** Whether Browser Use should record the browser session. */
        enableRecording?: boolean;
        /** Whether built-in Browser Use agent skills are enabled. */
        skills?: boolean;
        /** Whether Browser Use should provision a temporary email inbox. */
        agentmail?: boolean;
        /** Whether the agent should return structured text and Python code. */
        codeMode?: boolean;
        /** Whether deterministic script caching should be forced on or off. */
        cacheScript?: boolean;
        /** Whether Browser Use should use the user's configured LLM API key. */
        useOwnKey?: boolean;
        /** Whether cached script runs should auto-heal on bad output. */
        autoHeal?: boolean;
      };
      output: {
        /** A Browser Use Cloud session. */
        session: {
          /**
           * The Browser Use session ID.
           * @format uuid
           */
          id?: string;
          /** The Browser Use session lifecycle status. */
          status?: "created" | "idle" | "running" | "stopped" | "timed_out" | "error";
          /** The Browser Use model to run the task with. */
          model?: "bu-mini" | "bu-max" | "bu-ultra" | "gemini-3-flash" | "claude-sonnet-4.6" | "claude-opus-4.6" | "claude-opus-4.7" | "gpt-5.4-mini";
          /** The auto-generated session title. */
          title?: string | null;
          /** The agent final output when the task is complete. */
          output?: unknown;
          /** The requested structured output JSON Schema. */
          outputSchema?: Record<string, unknown> | null;
          /** The number of agent steps executed so far. */
          stepCount?: number;
          /** The latest human-readable agent step summary. */
          lastStepSummary?: string | null;
          /** Whether the task completed successfully. */
          isTaskSuccessful?: boolean | null;
          /** The live browser preview URL. */
          liveUrl?: string | null;
          /** The recording URLs returned for the session. */
          recordingUrls?: Array<string>;
          /**
           * The browser profile ID attached to this session.
           * @format uuid
           */
          profileId?: string | null;
          /**
           * The workspace ID attached to this session.
           * @format uuid
           */
          workspaceId?: string | null;
          /** The country code used for the Browser Use proxy. */
          proxyCountryCode?: string | null;
          /** The maximum cost limit in USD for this session. */
          maxCostUsd?: string | null;
          /** Total LLM input tokens consumed by this session. */
          totalInputTokens?: number;
          /** Total LLM output tokens consumed by this session. */
          totalOutputTokens?: number;
          /**
           * Proxy bandwidth used in megabytes.
           * @minLength 1
           * @pattern \S
           */
          proxyUsedMb?: string;
          /**
           * Cost of LLM usage in USD.
           * @minLength 1
           * @pattern \S
           */
          llmCostUsd?: string;
          /**
           * Cost of proxy bandwidth in USD.
           * @minLength 1
           * @pattern \S
           */
          proxyCostUsd?: string;
          /**
           * Cost of browser compute time in USD.
           * @minLength 1
           * @pattern \S
           */
          browserCostUsd?: string;
          /**
           * Total session cost in USD.
           * @minLength 1
           * @pattern \S
           */
          totalCostUsd?: string;
          /** The latest expiring browser screenshot URL. */
          screenshotUrl?: string | null;
          /** The temporary AgentMail email address for this session. */
          agentmailEmail?: string | null;
          /** The Browser Use integrations used by this session. */
          integrationsUsed?: Array<string>;
          /**
           * When the session was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the session was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /**
         * The Browser Use session ID.
         * @format uuid
         */
        sessionId: string;
      };
    };
    /** Stop a Browser Use Cloud session or the current task in that session. */
    "browser_use.stop_session": {
      input: {
        /**
         * The Browser Use session ID.
         * @format uuid
         */
        sessionId: string;
        /** How Browser Use should stop the session. */
        strategy?: "task" | "session";
      };
      output: {
        /** A Browser Use Cloud session. */
        session: {
          /**
           * The Browser Use session ID.
           * @format uuid
           */
          id?: string;
          /** The Browser Use session lifecycle status. */
          status?: "created" | "idle" | "running" | "stopped" | "timed_out" | "error";
          /** The Browser Use model to run the task with. */
          model?: "bu-mini" | "bu-max" | "bu-ultra" | "gemini-3-flash" | "claude-sonnet-4.6" | "claude-opus-4.6" | "claude-opus-4.7" | "gpt-5.4-mini";
          /** The auto-generated session title. */
          title?: string | null;
          /** The agent final output when the task is complete. */
          output?: unknown;
          /** The requested structured output JSON Schema. */
          outputSchema?: Record<string, unknown> | null;
          /** The number of agent steps executed so far. */
          stepCount?: number;
          /** The latest human-readable agent step summary. */
          lastStepSummary?: string | null;
          /** Whether the task completed successfully. */
          isTaskSuccessful?: boolean | null;
          /** The live browser preview URL. */
          liveUrl?: string | null;
          /** The recording URLs returned for the session. */
          recordingUrls?: Array<string>;
          /**
           * The browser profile ID attached to this session.
           * @format uuid
           */
          profileId?: string | null;
          /**
           * The workspace ID attached to this session.
           * @format uuid
           */
          workspaceId?: string | null;
          /** The country code used for the Browser Use proxy. */
          proxyCountryCode?: string | null;
          /** The maximum cost limit in USD for this session. */
          maxCostUsd?: string | null;
          /** Total LLM input tokens consumed by this session. */
          totalInputTokens?: number;
          /** Total LLM output tokens consumed by this session. */
          totalOutputTokens?: number;
          /**
           * Proxy bandwidth used in megabytes.
           * @minLength 1
           * @pattern \S
           */
          proxyUsedMb?: string;
          /**
           * Cost of LLM usage in USD.
           * @minLength 1
           * @pattern \S
           */
          llmCostUsd?: string;
          /**
           * Cost of proxy bandwidth in USD.
           * @minLength 1
           * @pattern \S
           */
          proxyCostUsd?: string;
          /**
           * Cost of browser compute time in USD.
           * @minLength 1
           * @pattern \S
           */
          browserCostUsd?: string;
          /**
           * Total session cost in USD.
           * @minLength 1
           * @pattern \S
           */
          totalCostUsd?: string;
          /** The latest expiring browser screenshot URL. */
          screenshotUrl?: string | null;
          /** The temporary AgentMail email address for this session. */
          agentmailEmail?: string | null;
          /** The Browser Use integrations used by this session. */
          integrationsUsed?: Array<string>;
          /**
           * When the session was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the session was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
