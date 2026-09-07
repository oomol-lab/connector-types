import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a task in a ClickUp List. */
    "clickup_mcp.create_task": {
      input: {
        /**
         * The task name.
         * @minLength 1
         */
        name: string;
        /**
         * The destination ClickUp List ID.
         * @minLength 1
         */
        list_id: string;
        /** The task description in Markdown. */
        markdown_description?: string;
        /** ClickUp user IDs to assign. */
        assignees?: Array<string>;
        /** The due date as YYYY-MM-DD or YYYY-MM-DD HH:MM. */
        due_date?: string;
        /** The start date as YYYY-MM-DD or YYYY-MM-DD HH:MM. */
        start_date?: string;
        /** The task priority. */
        priority?: "urgent" | "high" | "normal" | "low";
        /**
         * A status available in the destination List.
         * @minLength 1
         */
        status?: string;
        /** Existing tag names to apply. */
        tags?: Array<string>;
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** Add a comment to a ClickUp task. */
    "clickup_mcp.create_task_comment": {
      input: {
        /**
         * The target task ID.
         * @minLength 1
         */
        entity_id: string;
        /**
         * The plain-text comment body.
         * @minLength 1
         * @maxLength 40000
         */
        comment_text: string;
        /** The parent comment ID when creating a threaded reply. */
        reply_to_id?: string;
        /** Whether to notify every assignee. */
        notify_all?: boolean;
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** Get one ClickUp task, optionally including normally summarized sections. */
    "clickup_mcp.get_task": {
      input: {
        /**
         * The ClickUp task ID, including a custom ID when configured.
         * @minLength 1
         */
        task_id: string;
        /** Sections to expand in the response. */
        include?: Array<"attachments" | "checklists" | "custom_fields" | "dependencies" | "description" | "linked_tasks" | "subtasks" | "watchers">;
        /** Whether to include the statuses available for this task's List. */
        expand_statuses?: boolean;
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** Get the authorized ClickUp Workspace hierarchy of Spaces, Folders, and Lists. */
    "clickup_mcp.get_workspace_hierarchy": {
      input: {
        /** The cursor returned by the previous page. */
        cursor?: string;
        /**
         * The maximum number of Spaces to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** The hierarchy depth: Spaces only, Folders, or Lists. */
        max_depth?: "0" | "1" | "2";
        /** Only return these Space IDs. */
        space_ids?: Array<string>;
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** List members and guests in an authorized ClickUp Workspace. */
    "clickup_mcp.get_workspace_members": {
      input: {
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** Search tasks, Lists, Folders, and Docs across the authorized ClickUp Workspaces. */
    "clickup_mcp.search_workspace": {
      input: {
        /**
         * Keywords to search for.
         * @minLength 1
         */
        keywords?: string;
        /** The maximum number of results to return on this page. */
        count?: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** Send a message to a ClickUp Chat channel. */
    "clickup_mcp.send_chat_message": {
      input: {
        /**
         * The ClickUp Chat channel ID.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message content.
         * @minLength 1
         */
        content: string;
        /** The parent message ID when sending a threaded reply. */
        parent_message_id?: string;
        /** The chat item type. */
        type?: "message" | "post";
        /** The content format. */
        content_format?: "text/md" | "text/plain";
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
    /** Update the properties of an existing ClickUp task. */
    "clickup_mcp.update_task": {
      input: {
        /**
         * The ClickUp task ID, including a custom ID when configured.
         * @minLength 1
         */
        task_id: string;
        /**
         * The updated task name.
         * @minLength 1
         */
        name?: string;
        /** The updated task description in Markdown. */
        markdown_description?: string;
        /** Replacement ClickUp user IDs. */
        assignees?: Array<string>;
        /** The updated due date, or `none` to clear it. */
        due_date?: string;
        /** The updated start date, or `none` to clear it. */
        start_date?: string;
        /** The updated task priority, or `none` to clear it. */
        priority?: "urgent" | "high" | "normal" | "low" | "none";
        /**
         * The updated task status.
         * @minLength 1
         */
        status?: string;
        /**
         * The Workspace ID when the connection authorizes multiple Workspaces.
         * @pattern ^\d+$
         */
        workspace_id?: string;
      };
      output: {
        /** The normalized structured result, text, or MCP content returned by ClickUp. */
        result: unknown;
      };
    };
  }
}
