import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Bolna voice agent by agent_id. */
    "bolna.get_agent": {
      input: {
        /**
         * The Bolna agent identifier.
         * @format uuid
         */
        agent_id: string;
      };
      output: {
        /** One Bolna agent returned by the API. */
        agent: {
          /**
           * The Bolna agent identifier.
           * @format uuid
           */
          id: string;
          /** The human-readable Bolna agent name. */
          agent_name: string;
          /** The Bolna agent type. */
          agent_type?: string;
          /** The current Bolna agent status. */
          agent_status?: string;
          /**
           * The creation timestamp returned by Bolna.
           * @format date-time
           */
          created_at: string;
          /**
           * The last update timestamp returned by Bolna.
           * @format date-time
           */
          updated_at?: string;
          /** The tasks configured on the Bolna agent. */
          tasks?: Array<Record<string, unknown>>;
          /** The Bolna ingest source configuration returned for the agent. */
          ingest_source_config?: Record<string, unknown> | null;
          /** The Bolna agent prompts object keyed by task name, such as task_1. */
          agent_prompts?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Bolna execution by execution_id. */
    "bolna.get_execution": {
      input: {
        /**
         * The Bolna execution identifier.
         * @format uuid
         */
        execution_id: string;
      };
      output: {
        /** One Bolna execution returned by the API. */
        execution: {
          /**
           * The Bolna execution identifier.
           * @format uuid
           */
          id: string;
          /**
           * The Bolna agent identifier attached to the execution.
           * @format uuid
           */
          agent_id: string;
          /** The Bolna batch identifier when the execution belongs to a batch. */
          batch_id?: string;
          /** The execution conversation duration in seconds. */
          conversation_duration?: number;
          /** The total execution cost in cents. */
          total_cost?: number;
          /** The current Bolna execution status. */
          status: string;
          /** The execution error message returned by Bolna. */
          error_message?: string;
          /** Whether the execution reached voicemail. */
          answered_by_voice_mail?: boolean;
          /** The execution transcript returned by Bolna. */
          transcript?: string;
          /**
           * The execution creation timestamp.
           * @format date-time
           */
          created_at: string;
          /**
           * The execution last update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Bolna execution cost breakdown object. */
          cost_breakdown?: Record<string, unknown>;
          /** The telephony details returned by Bolna. */
          telephony_data?: Record<string, unknown>;
          /** The transfer call details returned by Bolna. */
          transfer_call_data?: Record<string, unknown>;
          /** The batch metadata returned by Bolna. */
          batch_run_details?: Record<string, unknown>;
          /** The extracted data object returned by Bolna. */
          extracted_data?: Record<string, unknown> | null;
          /** The context variables returned by Bolna. */
          context_details?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get raw logs for one Bolna execution by execution_id. */
    "bolna.get_execution_raw_logs": {
      input: {
        /**
         * The Bolna execution identifier.
         * @format uuid
         */
        execution_id: string;
      };
      output: {
        /** The status string returned by Bolna for the raw log request. */
        status: string;
        /** The normalized Bolna execution log entries. */
        logs: Array<{
          /**
           * The log creation timestamp.
           * @format date-time
           */
          created_at: string;
          /** The direction of the log entry. */
          type: "request" | "response";
          /** The Bolna component that produced the log entry. */
          component: string;
          /** The provider associated with the log entry. */
          provider?: string;
          /** The log payload or message returned by Bolna. */
          data: string;
          /** The optional reasoning content returned by Bolna. */
          reasoning_content?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the authenticated Bolna workspace user, wallet, and concurrency summary. */
    "bolna.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The authenticated Bolna user summary. */
        user: {
          /**
           * The Bolna user identifier.
           * @format uuid
           */
          id: string;
          /** The display name of the Bolna user. */
          name?: string;
          /**
           * The email address of the Bolna user.
           * @format email
           */
          email?: string;
          /** The current wallet balance returned by Bolna. */
          wallet?: number;
          /** The concurrency summary returned by Bolna. */
          concurrency?: {
            /** The maximum concurrency limit for the workspace. */
            max: number;
            /** The current number of running calls in the workspace. */
            current: number;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List execution history for one Bolna voice agent. */
    "bolna.list_agent_executions": {
      input: {
        /**
         * The Bolna agent identifier.
         * @format uuid
         */
        agent_id: string;
        /**
         * The page number to request from Bolna.
         * @maximum 9999
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of executions to request from Bolna.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /** The execution status filter accepted by Bolna. */
        status?: "scheduled" | "queued" | "rescheduled" | "ringing" | "initiated" | "in-progress" | "call-disconnected" | "completed" | "balance-low" | "busy" | "no-answer" | "canceled" | "failed" | "stopped" | "error";
        /** The call type filter accepted by Bolna. */
        call_type?: "inbound" | "outbound";
        /** The provider filter accepted by Bolna. */
        provider?: "plivo" | "twilio" | "websocket" | "web-call";
        /** Whether to filter executions answered by voicemail. */
        answered_by_voice_mail?: boolean;
        /**
         * The Bolna batch identifier used to filter executions.
         * @minLength 1
         */
        batch_id?: string;
        /**
         * The inclusive execution start timestamp filter in ISO 8601 format.
         * @format date-time
         */
        from?: string;
        /**
         * The inclusive execution end timestamp filter in ISO 8601 format.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** The current page number returned by Bolna. */
        page_number: number;
        /** The current page size returned by Bolna. */
        page_size: number;
        /** The total number of matching executions returned by Bolna. */
        total: number;
        /** Whether Bolna reports that more execution pages are available. */
        has_more: boolean;
        /** The normalized Bolna executions for this page. */
        executions: Array<{
          /**
           * The Bolna execution identifier.
           * @format uuid
           */
          id: string;
          /**
           * The Bolna agent identifier attached to the execution.
           * @format uuid
           */
          agent_id: string;
          /** The Bolna batch identifier when the execution belongs to a batch. */
          batch_id?: string;
          /** The execution conversation duration in seconds. */
          conversation_duration?: number;
          /** The total execution cost in cents. */
          total_cost?: number;
          /** The current Bolna execution status. */
          status: string;
          /** The execution error message returned by Bolna. */
          error_message?: string;
          /** Whether the execution reached voicemail. */
          answered_by_voice_mail?: boolean;
          /** The execution transcript returned by Bolna. */
          transcript?: string;
          /**
           * The execution creation timestamp.
           * @format date-time
           */
          created_at: string;
          /**
           * The execution last update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Bolna execution cost breakdown object. */
          cost_breakdown?: Record<string, unknown>;
          /** The telephony details returned by Bolna. */
          telephony_data?: Record<string, unknown>;
          /** The transfer call details returned by Bolna. */
          transfer_call_data?: Record<string, unknown>;
          /** The batch metadata returned by Bolna. */
          batch_run_details?: Record<string, unknown>;
          /** The extracted data object returned by Bolna. */
          extracted_data?: Record<string, unknown> | null;
          /** The context variables returned by Bolna. */
          context_details?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all Bolna voice agents in the authenticated workspace. */
    "bolna.list_agents": {
      input: Record<string, never>;
      output: {
        /** The Bolna agents returned by the workspace. */
        agents: Array<{
          /**
           * The Bolna agent identifier.
           * @format uuid
           */
          id: string;
          /** The human-readable Bolna agent name. */
          agent_name: string;
          /** The Bolna agent type. */
          agent_type?: string;
          /** The current Bolna agent status. */
          agent_status?: string;
          /**
           * The creation timestamp returned by Bolna.
           * @format date-time
           */
          created_at: string;
          /**
           * The last update timestamp returned by Bolna.
           * @format date-time
           */
          updated_at?: string;
          /** The tasks configured on the Bolna agent. */
          tasks?: Array<Record<string, unknown>>;
          /** The Bolna ingest source configuration returned for the agent. */
          ingest_source_config?: Record<string, unknown> | null;
          /** The Bolna agent prompts object keyed by task name, such as task_1. */
          agent_prompts?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
