import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Confirm a pending Manus task action from a waiting status event. Use send_message instead for messageAskUser events. */
    "manus.confirm_task_action": {
      input: {
        /**
         * The task ID with a pending action.
         * @minLength 1
         */
        task_id: string;
        /**
         * The waiting_for_event_id value from the status update event.
         * @minLength 1
         */
        event_id: string;
        /** Optional input for the pending action, matching the event confirm_input_schema. */
        input?: Record<string, unknown>;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** The ID of the confirmed task. */
        task_id: string;
        /** Whether the pending action confirmation was accepted. */
        confirmed: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a Manus project for grouping tasks under shared instructions. */
    "manus.create_project": {
      input: {
        /**
         * Display name for the project.
         * @minLength 1
         */
        name: string;
        /**
         * Default instruction applied to tasks in this project.
         * @minLength 1
         */
        instruction?: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** A Manus project. */
        project: {
          /** Unique identifier for the project. */
          id: string;
          /** Display name of the project. */
          name: string;
          /** Unix timestamp in seconds when the project was created. */
          created_at: number;
          /** Default instruction applied to tasks in this project. */
          instruction: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a new asynchronous Manus task from a message and optional project, connector, skill, sharing, or structured-output settings. */
    "manus.create_task": {
      input: {
        /** Plain text or structured Manus content parts. */
        content?: string | Array<Record<string, unknown>>;
        /** Connector IDs to enable for the message. */
        connectors?: Array<string>;
        /** Skill IDs to enable for the message. */
        enable_skills?: Array<string>;
        /** Skill IDs the agent must invoke. */
        force_skills?: Array<string>;
        /** A Manus task message. */
        message?: {
          /** Plain text or structured Manus content parts. */
          content: string | Array<Record<string, unknown>>;
          /** Connector IDs to enable for the message. */
          connectors?: Array<string>;
          /** Skill IDs to enable for the message. */
          enable_skills?: Array<string>;
          /** Skill IDs the agent must invoke. */
          force_skills?: Array<string>;
        };
        /**
         * Project ID to associate this task with.
         * @minLength 1
         */
        project_id?: string;
        /**
         * Locale for the task output language, such as `en` or `zh-CN`.
         * @minLength 1
         */
        locale?: string;
        /** Whether the agent may pause to ask follow-up questions. */
        interactive_mode?: boolean;
        /** Whether to hide the task from the Manus webapp task list. */
        hide_in_task_list?: boolean;
        /** Task sharing visibility. */
        share_visibility?: "private" | "team" | "public";
        /** Manus agent profile to use for this task turn. */
        agent_profile?: "manus-1.6" | "manus-1.6-lite" | "manus-1.6-max";
        /**
         * Custom title for the task.
         * @minLength 1
         */
        title?: string;
        /** JSON Schema for Manus structured output extraction. */
        structured_output_schema?: Record<string, unknown>;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Unique identifier for the created task. */
        task_id: string;
        /** Title for the created task. */
        task_title: string;
        /**
         * URL to view the task in the Manus webapp.
         * @format uri
         */
        task_url: string;
        /**
         * Public share URL when the task is shareable.
         * @format uri
         */
        share_url?: string;
        /** Task sharing visibility. */
        share_visibility?: "private" | "team" | "public";
        [key: string]: unknown;
      };
    };
    /** Permanently delete a stopped Manus task. Stop a running task before deleting it. */
    "manus.delete_task": {
      input: {
        /**
         * The task ID to delete.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** The ID of the deleted task. */
        id: string;
        /** Whether the task was deleted. */
        deleted: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Manus custom agent by ID. */
    "manus.get_agent": {
      input: {
        /**
         * The agent ID to retrieve.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** A Manus custom agent. */
        agent: {
          /** Unique identifier for the agent. */
          id: string;
          /** Task ID associated with this agent. */
          task_id: string;
          /** Display name of the agent. */
          nickname: string;
          /** Description or bio of the agent. */
          about: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Manus task's current status and metadata. */
    "manus.get_task": {
      input: {
        /**
         * The task ID to retrieve, including supported Manus shortcuts.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** A Manus task object with current status and metadata. */
        task: {
          /** Unique identifier for the task. */
          id: string;
          /** Current task status. */
          status: "running" | "stopped" | "waiting" | "error";
          /** Unix timestamp in seconds when the task was created. */
          created_at: number;
          /** Unix timestamp in seconds when the task was last updated. */
          updated_at: number;
          /** Type of the task. */
          task_type: "standard" | "project" | "agent_subtask";
          /** Task sharing visibility. */
          share_visibility?: "private" | "team" | "public";
          /** Title of the task. */
          title: string;
          /** Total credits consumed by the task. */
          credit_usage?: number;
          /**
           * URL to view the task in the Manus webapp.
           * @format uri
           */
          task_url?: string;
          /** API key metadata when this task was created via API. */
          created_by_api_key?: Record<string, unknown> | null;
          /** Manus agent profile to use for this task turn. */
          agent_profile?: "manus-1.6" | "manus-1.6-lite" | "manus-1.6-max";
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Manus custom agents in the current account. */
    "manus.list_agents": {
      input: Record<string, never>;
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Agent objects. */
        data: Array<{
          /** Unique identifier for the agent. */
          id: string;
          /** Task ID associated with this agent. */
          task_id: string;
          /** Display name of the agent. */
          nickname: string;
          /** Description or bio of the agent. */
          about: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Manus connectors installed in the current account. */
    "manus.list_connectors": {
      input: Record<string, never>;
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Connector objects installed in the user account. */
        data: Array<{
          /** Unique identifier for the connector. */
          id: string;
          /** Display name of the connector. */
          name: string;
          /** Connector type. */
          type: "builtin" | "byok" | "mcp";
          /** Human-readable description of the connector. */
          description?: string;
          /** Category grouping for the connector. */
          category?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List online Manus browser clients that can be selected when confirming needConnectMyBrowser waiting events. */
    "manus.list_online_browser_clients": {
      input: Record<string, never>;
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Online browser clients available to the current account. */
        data: Array<{
          /** Unique identifier for the browser client. */
          client_id: string;
          /** Display name of the browser client. */
          client_name: string;
          /** User-Agent string for the browser client. */
          ua: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Manus projects available to the current account. */
    "manus.list_projects": {
      input: Record<string, never>;
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Project objects. */
        data: Array<{
          /** Unique identifier for the project. */
          id: string;
          /** Display name of the project. */
          name: string;
          /** Unix timestamp in seconds when the project was created. */
          created_at: number;
          /** Default instruction applied to tasks in this project. */
          instruction: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Manus skills available to the current account or project. */
    "manus.list_skills": {
      input: {
        /**
         * Project ID used to include project-specific skills.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Skill objects available to the user. */
        data: Array<{
          /** Unique identifier for the skill. */
          id: string;
          /** Display name of the skill. */
          name: string;
          /** What the skill does and when it is useful. */
          description?: string;
          /** Skill owner type. */
          owner_type: "personal" | "official" | "team" | "project";
          /** Information about who created the skill. */
          creator_info?: Record<string, unknown>;
          /** Unix timestamp in seconds when the skill was created. */
          created_at?: number;
          /** Unix timestamp in seconds when the skill was last updated. */
          updated_at?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Manus task event messages with cursor pagination. */
    "manus.list_task_messages": {
      input: {
        /**
         * The task ID to list messages for.
         * @minLength 1
         */
        task_id: string;
        /**
         * Number of messages to return per page, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Pagination cursor from the previous response.
         * @minLength 1
         */
        cursor?: string;
        /** Sort direction for cursor-paginated results. */
        order?: "asc" | "desc";
        /** Whether to include detailed tool, plan, and explanation events. */
        verbose?: boolean;
        /** Slides attachment format returned in task messages. */
        slides_format?: "html" | "pptx";
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** The task ID these messages belong to. */
        task_id: string;
        /** Task event objects representing conversation and agent activity. */
        messages: Array<Record<string, unknown>>;
        /** Whether more messages are available. */
        has_more: boolean;
        /** Cursor to fetch the next page. */
        next_cursor?: string;
        [key: string]: unknown;
      };
    };
    /** List Manus tasks with optional scope filters and cursor pagination. */
    "manus.list_tasks": {
      input: {
        /**
         * Number of tasks to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor from the previous response.
         * @minLength 1
         */
        cursor?: string;
        /** Sort direction for cursor-paginated results. */
        order?: "asc" | "desc";
        /** Task list scope filter. */
        scope?: "all" | "agent_subtask" | "project" | "standard";
        /**
         * Agent ID used when scope is `agent_subtask`.
         * @minLength 1
         */
        agent_id?: string;
        /**
         * Project ID used when scope is `project`.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Tasks matching the filter criteria. */
        data: Array<{
          /** Unique identifier for the task. */
          id: string;
          /** Current task status. */
          status: "running" | "stopped" | "waiting" | "error";
          /** Unix timestamp in seconds when the task was created. */
          created_at: number;
          /** Unix timestamp in seconds when the task was last updated. */
          updated_at: number;
          /** Type of the task. */
          task_type: "standard" | "project" | "agent_subtask";
          /** Task sharing visibility. */
          share_visibility?: "private" | "team" | "public";
          /** Title of the task. */
          title: string;
          /** Total credits consumed by the task. */
          credit_usage?: number;
          /**
           * URL to view the task in the Manus webapp.
           * @format uri
           */
          task_url?: string;
          /** API key metadata when this task was created via API. */
          created_by_api_key?: Record<string, unknown> | null;
          /** Manus agent profile to use for this task turn. */
          agent_profile?: "manus-1.6" | "manus-1.6-lite" | "manus-1.6-max";
          [key: string]: unknown;
        }>;
        /** Whether more tasks are available. */
        has_more: boolean;
        /** Cursor to fetch the next page. */
        next_cursor?: string;
        [key: string]: unknown;
      };
    };
    /** Send a follow-up message to an existing Manus task. */
    "manus.send_message": {
      input: {
        /**
         * The task ID to send the message to.
         * @minLength 1
         */
        task_id: string;
        /** Plain text or structured Manus content parts. */
        content?: string | Array<Record<string, unknown>>;
        /** Connector IDs to enable for the message. */
        connectors?: Array<string>;
        /** Skill IDs to enable for the message. */
        enable_skills?: Array<string>;
        /** Skill IDs the agent must invoke. */
        force_skills?: Array<string>;
        /** A Manus task message. */
        message?: {
          /** Plain text or structured Manus content parts. */
          content: string | Array<Record<string, unknown>>;
          /** Connector IDs to enable for the message. */
          connectors?: Array<string>;
          /** Skill IDs to enable for the message. */
          enable_skills?: Array<string>;
          /** Skill IDs the agent must invoke. */
          force_skills?: Array<string>;
        };
        /** Manus agent profile to use for this task turn. */
        agent_profile?: "manus-1.6" | "manus-1.6-lite" | "manus-1.6-max";
        /** JSON Schema for Manus structured output extraction. */
        structured_output_schema?: Record<string, unknown>;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** Unique identifier for the task. */
        task_id: string;
        [key: string]: unknown;
      };
    };
    /** Stop a running Manus task. */
    "manus.stop_task": {
      input: {
        /**
         * The running task ID to stop.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        [key: string]: unknown;
      };
    };
    /** Update a Manus custom agent's display name or description. */
    "manus.update_agent": {
      input: {
        /**
         * The agent ID to update.
         * @minLength 1
         */
        agent_id: string;
        /**
         * New display name for the agent.
         * @minLength 1
         */
        nickname?: string;
        /**
         * New description or bio for the agent.
         * @minLength 1
         */
        about?: string;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** A Manus custom agent. */
        agent: {
          /** Unique identifier for the agent. */
          id: string;
          /** Task ID associated with this agent. */
          task_id: string;
          /** Display name of the agent. */
          nickname: string;
          /** Description or bio of the agent. */
          about: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Manus task title, sharing visibility, or task-list visibility. */
    "manus.update_task": {
      input: {
        /**
         * The task ID to update.
         * @minLength 1
         */
        task_id: string;
        /**
         * New title for the task.
         * @minLength 1
         */
        title?: string;
        /** Task sharing visibility. */
        share_visibility?: "private" | "team" | "public";
        /** Whether the task appears in the Manus webapp task list. */
        enable_visible_in_task_list?: boolean;
      };
      output: {
        /** Whether the request was successful. */
        ok: boolean;
        /** Unique identifier for this API request. */
        request_id: string;
        /** The ID of the updated task. */
        task_id: string;
        /** The current title of the task. */
        task_title: string;
        /**
         * URL to view the task in the Manus webapp.
         * @format uri
         */
        task_url: string;
        /**
         * Public share URL when the task is shareable.
         * @format uri
         */
        share_url?: string;
        /** Task sharing visibility. */
        share_visibility?: "private" | "team" | "public";
        [key: string]: unknown;
      };
    };
  }
}
