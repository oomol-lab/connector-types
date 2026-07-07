import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get an OpenHands Cloud conversation by ID. */
    "open_hands.get_conversation": {
      input: {
        /**
         * OpenHands conversation ID.
         * @format uuid
         */
        conversation_id: string;
      };
      output: {
        /** OpenHands app conversation. */
        conversation: {
          /**
           * OpenHands conversation ID.
           * @minLength 1
           */
          id: string;
          /**
           * Sandbox ID for the conversation.
           * @minLength 1
           */
          sandbox_id: string | null;
          /**
           * Repository selected for the conversation.
           * @minLength 1
           */
          selected_repository: string | null;
          /**
           * Branch selected for the conversation.
           * @minLength 1
           */
          selected_branch: string | null;
          /**
           * Conversation title.
           * @minLength 1
           */
          title: string | null;
          /** OpenHands sandbox status. */
          sandbox_status: "STARTING" | "RUNNING" | "PAUSED" | "ERROR" | "MISSING";
          /** OpenHands agent execution status when the sandbox is running. */
          execution_status: "idle" | "running" | "paused" | "waiting_for_confirmation" | "finished" | "error" | "stuck" | "deleting" | null;
          /**
           * URL where the conversation can be opened.
           * @minLength 1
           */
          conversation_url: string | null;
          /**
           * Timestamp when the conversation was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the conversation was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        } | null;
        /** Raw OpenHands response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the status of an OpenHands Cloud conversation start task. */
    "open_hands.get_start_task": {
      input: {
        /**
         * Start task ID returned by start_conversation.
         * @format uuid
         */
        task_id: string;
      };
      output: {
        /** OpenHands conversation start task. */
        task: {
          /**
           * Start task ID returned by OpenHands.
           * @minLength 1
           */
          id: string;
          /** OpenHands start task status. */
          status: "WORKING" | "WAITING_FOR_SANDBOX" | "PREPARING_REPOSITORY" | "RUNNING_SETUP_SCRIPT" | "SETTING_UP_GIT_HOOKS" | "SETTING_UP_SKILLS" | "STARTING_CONVERSATION" | "READY" | "ERROR";
          /**
           * Additional start task detail when OpenHands returned one.
           * @minLength 1
           */
          detail: string | null;
          /**
           * Conversation ID once the start task reaches READY.
           * @minLength 1
           */
          app_conversation_id: string | null;
          /**
           * Sandbox ID once the start task has a sandbox.
           * @minLength 1
           */
          sandbox_id: string | null;
          /**
           * Agent server URL when OpenHands returned one.
           * @minLength 1
           */
          agent_server_url: string | null;
          /**
           * Timestamp when the start task was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the start task was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        };
        /**
         * OpenHands conversation URL when the conversation ID is available.
         * @format uri
         */
        conversation_url: string | null;
        /** Raw OpenHands response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List OpenHands Cloud conversations with optional filters. */
    "open_hands.list_conversations": {
      input: {
        /**
         * Only return conversations whose title contains this text.
         * @minLength 1
         */
        title__contains?: string;
        /**
         * Only return conversations created at or after this time.
         * @format date-time
         */
        created_at__gte?: string;
        /**
         * Only return conversations created before this time.
         * @format date-time
         */
        created_at__lt?: string;
        /**
         * Only return conversations updated at or after this time.
         * @format date-time
         */
        updated_at__gte?: string;
        /**
         * Only return conversations updated before this time.
         * @format date-time
         */
        updated_at__lt?: string;
        /**
         * Only return conversations for this exact sandbox ID.
         * @minLength 1
         */
        sandbox_id__eq?: string;
        /**
         * Next page ID returned by a previous list response.
         * @minLength 1
         */
        page_id?: string;
        /**
         * Maximum number of conversations to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether to include sub-conversations. */
        include_sub_conversations?: boolean;
      };
      output: {
        /** OpenHands conversations on this page. */
        items: Array<{
          /**
           * OpenHands conversation ID.
           * @minLength 1
           */
          id: string;
          /**
           * Sandbox ID for the conversation.
           * @minLength 1
           */
          sandbox_id: string | null;
          /**
           * Repository selected for the conversation.
           * @minLength 1
           */
          selected_repository: string | null;
          /**
           * Branch selected for the conversation.
           * @minLength 1
           */
          selected_branch: string | null;
          /**
           * Conversation title.
           * @minLength 1
           */
          title: string | null;
          /** OpenHands sandbox status. */
          sandbox_status: "STARTING" | "RUNNING" | "PAUSED" | "ERROR" | "MISSING";
          /** OpenHands agent execution status when the sandbox is running. */
          execution_status: "idle" | "running" | "paused" | "waiting_for_confirmation" | "finished" | "error" | "stuck" | "deleting" | null;
          /**
           * URL where the conversation can be opened.
           * @minLength 1
           */
          conversation_url: string | null;
          /**
           * Timestamp when the conversation was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the conversation was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** OpenHands page metadata. */
        page: {
          /**
           * Next page ID when OpenHands returned one.
           * @minLength 1
           */
          next_page_id: string | null;
        };
        /** Raw OpenHands response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a follow-up user message to an existing OpenHands Cloud conversation. */
    "open_hands.send_message": {
      input: {
        /**
         * OpenHands conversation ID.
         * @format uuid
         */
        conversation_id: string;
        /**
         * Follow-up message text to send to the conversation.
         * @minLength 1
         */
        message: string;
        /** Whether OpenHands should automatically run the agent after sending. */
        run?: boolean;
      };
      output: {
        /** Whether OpenHands accepted the message. */
        success: boolean;
        /** OpenHands sandbox status. */
        sandbox_status: "STARTING" | "RUNNING" | "PAUSED" | "ERROR" | "MISSING";
        /**
         * Additional response message when OpenHands returned one.
         * @minLength 1
         */
        message: string | null;
        /** Raw OpenHands response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Start an OpenHands Cloud conversation for a repository task. */
    "open_hands.start_conversation": {
      input: {
        /**
         * Initial task message to send to OpenHands.
         * @minLength 1
         */
        message: string;
        /**
         * Repository name in owner/repo format.
         * @minLength 1
         */
        selected_repository?: string;
        /**
         * Branch to use for the conversation.
         * @minLength 1
         */
        selected_branch?: string;
        /**
         * Optional title for the conversation.
         * @minLength 1
         */
        title?: string;
        /**
         * Optional OpenHands LLM model identifier.
         * @minLength 1
         */
        llm_model?: string;
        /**
         * Optional extra system instructions appended by OpenHands.
         * @minLength 1
         */
        system_message_suffix?: string;
        /** Whether OpenHands should run the agent after creating the message. */
        run?: boolean;
      };
      output: {
        /** OpenHands conversation start task. */
        task: {
          /**
           * Start task ID returned by OpenHands.
           * @minLength 1
           */
          id: string;
          /** OpenHands start task status. */
          status: "WORKING" | "WAITING_FOR_SANDBOX" | "PREPARING_REPOSITORY" | "RUNNING_SETUP_SCRIPT" | "SETTING_UP_GIT_HOOKS" | "SETTING_UP_SKILLS" | "STARTING_CONVERSATION" | "READY" | "ERROR";
          /**
           * Additional start task detail when OpenHands returned one.
           * @minLength 1
           */
          detail: string | null;
          /**
           * Conversation ID once the start task reaches READY.
           * @minLength 1
           */
          app_conversation_id: string | null;
          /**
           * Sandbox ID once the start task has a sandbox.
           * @minLength 1
           */
          sandbox_id: string | null;
          /**
           * Agent server URL when OpenHands returned one.
           * @minLength 1
           */
          agent_server_url: string | null;
          /**
           * Timestamp when the start task was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the start task was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        };
        /**
         * OpenHands conversation URL when the conversation ID is available.
         * @format uri
         */
        conversation_url: string | null;
        /** Raw OpenHands response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
