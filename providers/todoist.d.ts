import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark a Todoist task complete. Recurring tasks advance to their next occurrence. */
    "todoist.close_task": {
      input: {
        /**
         * Todoist task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the Todoist operation completed successfully. */
        success: true;
      };
    };
    /** Create a Todoist comment on exactly one task or project. */
    "todoist.create_comment": {
      input: {
        /**
         * Todoist comment content.
         * @minLength 1
         * @maxLength 15000
         */
        content: string;
        /**
         * Todoist task ID.
         * @minLength 1
         */
        taskId?: string;
        /**
         * Todoist project ID.
         * @minLength 1
         */
        projectId?: string;
        /** Optional Todoist file attachment payload. */
        attachment?: {
          /** Attachment download URL. */
          fileUrl?: string;
          /** Attachment file name. */
          fileName?: string;
          /** Attachment MIME type. */
          fileType?: string;
          /** Attachment resource type. */
          resourceType?: string;
        };
        /**
         * Todoist user IDs to notify about the comment.
         * @minItems 1
         */
        uidsToNotify?: Array<number | string>;
      };
      output: {
        /** The created Todoist comment. */
        comment: {
          /** Todoist comment ID. */
          id: string;
          /** Comment content. */
          content?: string;
          /** Comment creation timestamp. */
          posted_at?: string;
          /** Task ID that owns the comment. */
          task_id?: string | null;
          /** Project ID that owns the comment. */
          project_id?: string | null;
          /** User ID that posted the comment. */
          posted_uid?: string;
          /** Whether the comment is deleted. */
          is_deleted?: boolean;
          /** Users notified by the comment. */
          uids_to_notify?: Array<string>;
          /** Attachment metadata. */
          attachment?: {
            /** Attachment file name. */
            file_name?: string;
            /** Attachment MIME type. */
            file_type?: string;
            /** Attachment download URL. */
            file_url?: string;
            /** Attachment resource type. */
            resource_type?: string;
            /** Attachment file size in bytes. */
            file_size?: number;
            /** Attachment upload state. */
            upload_state?: string;
            /** Attachment duration in seconds. */
            file_duration?: number;
          };
          /** Reaction metadata keyed by emoji. */
          reactions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Todoist project with optional description, color, parent, view style, and workspace placement. */
    "todoist.create_project": {
      input: {
        /**
         * Todoist project name.
         * @minLength 1
         */
        name?: string;
        /** Todoist project description. */
        description?: string;
        /** Parent project ID, or null where the API supports clearing it. */
        parentId?: string | null;
        /** Todoist project color. */
        color?: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "grey" | "taupe" | number;
        /** Whether the project is a favorite. */
        isFavorite?: boolean;
        /** Todoist project view style. */
        viewStyle?: "list" | "board" | "calendar";
        /** Todoist workspace ID for creating a workspace-scoped project. */
        workspaceId?: number | string;
      };
      output: {
        /** The created Todoist project. */
        project: {
          /** Todoist project ID. */
          id: string;
          /** Project name. */
          name: string;
          /** Project description. */
          description?: string;
          /** Project color. */
          color?: string;
          /** Project view style. */
          view_style?: string;
          /** Current user's role in the project. */
          role?: string;
          /** Workspace project status. */
          status?: string;
          /** Parent project ID. */
          parent_id?: string | null;
          /** Workspace ID. */
          workspace_id?: string;
          /** Folder ID. */
          folder_id?: string | number | null;
          /** Project order among siblings. */
          child_order?: number;
          /** Default task order for the project. */
          default_order?: number;
          /** Creator user ID. */
          creator_uid?: string;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** Whether the project is a favorite. */
          is_favorite?: boolean;
          /** Whether the project is archived. */
          is_archived?: boolean;
          /** Whether the project is deleted. */
          is_deleted?: boolean;
          /** Whether the project is frozen. */
          is_frozen?: boolean;
          /** Whether the project is collapsed. */
          is_collapsed?: boolean;
          /** Whether the project is collapsed. */
          collapsed?: boolean;
          /** Whether tasks can be assigned in the project. */
          can_assign_tasks?: boolean;
          /** Whether public access is enabled. */
          public_access?: boolean;
          /** Whether this is the inbox project. */
          inbox_project?: boolean;
          /** Whether the project is invite-only. */
          is_invite_only?: boolean;
          /** Whether project link sharing is enabled. */
          is_link_sharing_enabled?: boolean;
          /** Whether project insights are enabled. */
          is_project_insights_enabled?: boolean;
          /** Whether default collaborator invites are pending. */
          is_pending_default_collaborator_invites?: boolean;
          /** Default collaborator role for the project. */
          collaborator_role_default?: string;
          /** Project creation timestamp. */
          created_at?: string;
          /** Project update timestamp. */
          updated_at?: string;
          /** Project web URL. */
          url?: string;
          /** Project public sharing key. */
          public_key?: string;
          /** Project access settings. */
          access?: {
            /** Project visibility level. */
            visibility?: string;
            /** Project access configuration payload. */
            configuration?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a Todoist section inside a project. */
    "todoist.create_section": {
      input: {
        /**
         * Todoist project ID that will own the section.
         * @minLength 1
         */
        projectId: string;
        /**
         * Todoist section name.
         * @minLength 1
         */
        name: string;
        /** Optional section order within the project. */
        order?: number;
      };
      output: {
        /** The created Todoist section. */
        section: {
          /** Todoist section ID. */
          id: string;
          /** Project ID that owns the section. */
          project_id: string;
          /** User ID that owns the section. */
          user_id?: string;
          /** Section name. */
          name: string;
          /** Section order within the project. */
          section_order?: number;
          /** Whether the section is archived. */
          is_archived?: boolean;
          /** Whether the section is deleted. */
          is_deleted?: boolean;
          /** Whether the section is collapsed. */
          is_collapsed?: boolean;
          /** Section creation timestamp. */
          added_at?: string;
          /** Section update timestamp. */
          updated_at?: string;
          /** Section archive timestamp. */
          archived_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Todoist task with optional project, section, parent, labels, assignment, due date, deadline, and duration fields. */
    "todoist.create_task": {
      input: {
        /**
         * Todoist task content.
         * @minLength 1
         */
        content?: string;
        /** Todoist task description. */
        description?: string;
        /**
         * Todoist project ID.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Todoist section ID.
         * @minLength 1
         */
        sectionId?: string;
        /**
         * Todoist parent task ID.
         * @minLength 1
         */
        parentId?: string;
        /** Task order within the current scope. */
        order?: number;
        /**
         * Todoist label names to assign to the task.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Todoist task priority.
         * @minimum 1
         * @maximum 4
         */
        priority?: number;
        /** Todoist assignee user ID. */
        assigneeId?: number | string;
        /**
         * Human-readable Todoist due date.
         * @minLength 1
         */
        dueString?: string;
        /**
         * Todoist due date string.
         * @minLength 1
         */
        dueDate?: string;
        /**
         * Todoist due date-time string.
         * @minLength 1
         */
        dueDatetime?: string;
        /**
         * Language code for parsing dueString.
         * @minLength 1
         */
        dueLang?: string;
        /** Todoist task duration amount. */
        duration?: number;
        /** Todoist task duration unit. */
        durationUnit?: "minute" | "day";
        /** Todoist task deadline date in YYYY-MM-DD format. */
        deadlineDate?: string | null;
      };
      output: {
        /** The created Todoist task. */
        task: {
          /** Todoist task ID. */
          id: string;
          /** User ID that owns the task. */
          user_id?: string;
          /** Project ID that owns the task. */
          project_id: string;
          /** Section ID that owns the task. */
          section_id?: string | null;
          /** Parent task ID. */
          parent_id?: string | null;
          /** Task title. */
          content: string;
          /** Task description. */
          description?: string;
          /** Task label names. */
          labels?: Array<string>;
          /** Task priority from 1 to 4. */
          priority?: number;
          /** Whether the task is completed. */
          checked?: boolean;
          /** Whether the task is deleted. */
          is_deleted?: boolean;
          /** Whether subtasks are collapsed. */
          is_collapsed?: boolean;
          /** Number of comments on the task. */
          note_count?: number;
          /** Task order in Today and Upcoming. */
          day_order?: number;
          /** Task order within its parent scope. */
          child_order?: number;
          /** Task creation timestamp. */
          added_at?: string;
          /** Task update timestamp. */
          updated_at?: string;
          /** Task completion timestamp. */
          completed_at?: string;
          /** User ID that added the task. */
          added_by_uid?: string;
          /** User ID that assigned the task. */
          assigned_by_uid?: string;
          /** Assigned responsible user ID. */
          responsible_uid?: string | null;
          /** User ID that completed the task. */
          completed_by_uid?: string;
          /** Task due date payload. */
          due?: {
            /** Due date in YYYY-MM-DD or date-time form. */
            date: string;
            /** Human-readable due text. */
            string?: string;
            /** Language code used to parse the due text. */
            lang?: string;
            /** Exact due date-time in RFC 3339 form. */
            datetime?: string;
            /** Time zone for the due date-time. */
            timezone?: string;
            /** Whether the due date is recurring. */
            is_recurring?: boolean;
            [key: string]: unknown;
          } | null;
          /** Task deadline payload. */
          deadline?: {
            /** Deadline date in YYYY-MM-DD format. */
            date: string;
          } | null;
          /** Task duration payload. */
          duration?: {
            /** Duration amount. */
            amount: number;
            /** Duration unit. */
            unit: "minute" | "day";
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Todoist comment by comment ID. */
    "todoist.get_comment": {
      input: {
        /**
         * Todoist comment ID.
         * @minLength 1
         */
        commentId: string;
      };
      output: {
        /** The requested Todoist comment. */
        comment: {
          /** Todoist comment ID. */
          id: string;
          /** Comment content. */
          content?: string;
          /** Comment creation timestamp. */
          posted_at?: string;
          /** Task ID that owns the comment. */
          task_id?: string | null;
          /** Project ID that owns the comment. */
          project_id?: string | null;
          /** User ID that posted the comment. */
          posted_uid?: string;
          /** Whether the comment is deleted. */
          is_deleted?: boolean;
          /** Users notified by the comment. */
          uids_to_notify?: Array<string>;
          /** Attachment metadata. */
          attachment?: {
            /** Attachment file name. */
            file_name?: string;
            /** Attachment MIME type. */
            file_type?: string;
            /** Attachment download URL. */
            file_url?: string;
            /** Attachment resource type. */
            resource_type?: string;
            /** Attachment file size in bytes. */
            file_size?: number;
            /** Attachment upload state. */
            upload_state?: string;
            /** Attachment duration in seconds. */
            file_duration?: number;
          };
          /** Reaction metadata keyed by emoji. */
          reactions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the current Todoist user profile and plan metadata. */
    "todoist.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Todoist user profile. */
        user: {
          /** Todoist user ID. */
          id: string;
          /** User email address. */
          email?: string;
          /** User full name. */
          full_name?: string;
          /** User language code. */
          lang?: string;
          /** Whether the user has a paid plan. */
          is_premium?: boolean;
          /** Account creation timestamp. */
          joined_at?: string;
          /** Avatar image identifier. */
          image_id?: string;
          /** Large avatar URL. */
          avatar_big?: string;
          /** Large square avatar URL. */
          avatar_s640?: string;
          /** User default Todoist start page. */
          start_page?: string;
          /** First day of the week. */
          start_day?: number;
          /** Weekend start day. */
          weekend_start_day?: number;
          /** Weekday used for postponing next week tasks. */
          next_week?: number;
          /** Date format preference code. */
          date_format?: number;
          /** Task sort order preference code. */
          sort_order?: number;
          /** Theme identifier. */
          theme_id?: string;
          /** Daily karma goal. */
          daily_goal?: number;
          /** Weekly karma goal. */
          weekly_goal?: number;
          /** User karma score. */
          karma?: number;
          /** Total completed task count. */
          completed_count?: number;
          /** Completed task count for today. */
          completed_today?: number;
          /** Configured days off. */
          days_off?: Array<number>;
          /** User time zone details. */
          tz_info?: {
            /** IANA time zone name. */
            timezone?: string;
            /** GMT offset text. */
            gmt_string?: string;
            /** Hours offset from GMT. */
            hours?: number;
            /** Minutes offset from GMT. */
            minutes?: number;
            /** Whether DST is active. */
            is_dst?: boolean | number;
          };
          /** Feature flag and limit metadata. */
          features?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Todoist project by project ID. */
    "todoist.get_project": {
      input: {
        /**
         * Todoist project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The requested Todoist project. */
        project: {
          /** Todoist project ID. */
          id: string;
          /** Project name. */
          name: string;
          /** Project description. */
          description?: string;
          /** Project color. */
          color?: string;
          /** Project view style. */
          view_style?: string;
          /** Current user's role in the project. */
          role?: string;
          /** Workspace project status. */
          status?: string;
          /** Parent project ID. */
          parent_id?: string | null;
          /** Workspace ID. */
          workspace_id?: string;
          /** Folder ID. */
          folder_id?: string | number | null;
          /** Project order among siblings. */
          child_order?: number;
          /** Default task order for the project. */
          default_order?: number;
          /** Creator user ID. */
          creator_uid?: string;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** Whether the project is a favorite. */
          is_favorite?: boolean;
          /** Whether the project is archived. */
          is_archived?: boolean;
          /** Whether the project is deleted. */
          is_deleted?: boolean;
          /** Whether the project is frozen. */
          is_frozen?: boolean;
          /** Whether the project is collapsed. */
          is_collapsed?: boolean;
          /** Whether the project is collapsed. */
          collapsed?: boolean;
          /** Whether tasks can be assigned in the project. */
          can_assign_tasks?: boolean;
          /** Whether public access is enabled. */
          public_access?: boolean;
          /** Whether this is the inbox project. */
          inbox_project?: boolean;
          /** Whether the project is invite-only. */
          is_invite_only?: boolean;
          /** Whether project link sharing is enabled. */
          is_link_sharing_enabled?: boolean;
          /** Whether project insights are enabled. */
          is_project_insights_enabled?: boolean;
          /** Whether default collaborator invites are pending. */
          is_pending_default_collaborator_invites?: boolean;
          /** Default collaborator role for the project. */
          collaborator_role_default?: string;
          /** Project creation timestamp. */
          created_at?: string;
          /** Project update timestamp. */
          updated_at?: string;
          /** Project web URL. */
          url?: string;
          /** Project public sharing key. */
          public_key?: string;
          /** Project access settings. */
          access?: {
            /** Project visibility level. */
            visibility?: string;
            /** Project access configuration payload. */
            configuration?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a Todoist section by section ID. */
    "todoist.get_section": {
      input: {
        /**
         * Todoist section ID.
         * @minLength 1
         */
        sectionId: string;
      };
      output: {
        /** The requested Todoist section. */
        section: {
          /** Todoist section ID. */
          id: string;
          /** Project ID that owns the section. */
          project_id: string;
          /** User ID that owns the section. */
          user_id?: string;
          /** Section name. */
          name: string;
          /** Section order within the project. */
          section_order?: number;
          /** Whether the section is archived. */
          is_archived?: boolean;
          /** Whether the section is deleted. */
          is_deleted?: boolean;
          /** Whether the section is collapsed. */
          is_collapsed?: boolean;
          /** Section creation timestamp. */
          added_at?: string;
          /** Section update timestamp. */
          updated_at?: string;
          /** Section archive timestamp. */
          archived_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Todoist task by task ID. */
    "todoist.get_task": {
      input: {
        /**
         * Todoist task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The requested Todoist task. */
        task: {
          /** Todoist task ID. */
          id: string;
          /** User ID that owns the task. */
          user_id?: string;
          /** Project ID that owns the task. */
          project_id: string;
          /** Section ID that owns the task. */
          section_id?: string | null;
          /** Parent task ID. */
          parent_id?: string | null;
          /** Task title. */
          content: string;
          /** Task description. */
          description?: string;
          /** Task label names. */
          labels?: Array<string>;
          /** Task priority from 1 to 4. */
          priority?: number;
          /** Whether the task is completed. */
          checked?: boolean;
          /** Whether the task is deleted. */
          is_deleted?: boolean;
          /** Whether subtasks are collapsed. */
          is_collapsed?: boolean;
          /** Number of comments on the task. */
          note_count?: number;
          /** Task order in Today and Upcoming. */
          day_order?: number;
          /** Task order within its parent scope. */
          child_order?: number;
          /** Task creation timestamp. */
          added_at?: string;
          /** Task update timestamp. */
          updated_at?: string;
          /** Task completion timestamp. */
          completed_at?: string;
          /** User ID that added the task. */
          added_by_uid?: string;
          /** User ID that assigned the task. */
          assigned_by_uid?: string;
          /** Assigned responsible user ID. */
          responsible_uid?: string | null;
          /** User ID that completed the task. */
          completed_by_uid?: string;
          /** Task due date payload. */
          due?: {
            /** Due date in YYYY-MM-DD or date-time form. */
            date: string;
            /** Human-readable due text. */
            string?: string;
            /** Language code used to parse the due text. */
            lang?: string;
            /** Exact due date-time in RFC 3339 form. */
            datetime?: string;
            /** Time zone for the due date-time. */
            timezone?: string;
            /** Whether the due date is recurring. */
            is_recurring?: boolean;
            [key: string]: unknown;
          } | null;
          /** Task deadline payload. */
          deadline?: {
            /** Deadline date in YYYY-MM-DD format. */
            date: string;
          } | null;
          /** Task duration payload. */
          duration?: {
            /** Duration amount. */
            amount: number;
            /** Duration unit. */
            unit: "minute" | "day";
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Todoist comments for exactly one task or project. */
    "todoist.list_comments": {
      input: {
        /**
         * Todoist task ID.
         * @minLength 1
         */
        taskId?: string;
        /**
         * Todoist project ID.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Opaque pagination cursor returned by a previous Todoist response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of Todoist results to return in one page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** The Todoist comments returned for this page. */
        comments: Array<{
          /** Todoist comment ID. */
          id: string;
          /** Comment content. */
          content?: string;
          /** Comment creation timestamp. */
          posted_at?: string;
          /** Task ID that owns the comment. */
          task_id?: string | null;
          /** Project ID that owns the comment. */
          project_id?: string | null;
          /** User ID that posted the comment. */
          posted_uid?: string;
          /** Whether the comment is deleted. */
          is_deleted?: boolean;
          /** Users notified by the comment. */
          uids_to_notify?: Array<string>;
          /** Attachment metadata. */
          attachment?: {
            /** Attachment file name. */
            file_name?: string;
            /** Attachment MIME type. */
            file_type?: string;
            /** Attachment download URL. */
            file_url?: string;
            /** Attachment resource type. */
            resource_type?: string;
            /** Attachment file size in bytes. */
            file_size?: number;
            /** Attachment upload state. */
            upload_state?: string;
            /** Attachment duration in seconds. */
            file_duration?: number;
          };
          /** Reaction metadata keyed by emoji. */
          reactions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next Todoist page, or null when exhausted. */
        nextCursor: string | null;
      };
    };
    /** List Todoist labels with cursor pagination. */
    "todoist.list_labels": {
      input: {
        /**
         * Opaque pagination cursor returned by a previous Todoist response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of Todoist results to return in one page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** The Todoist labels returned for this page. */
        labels: Array<{
          /** Todoist label ID. */
          id: string;
          /** Label name. */
          name: string;
          /** Label color. */
          color?: string;
          /** Label ordering value. */
          order?: number;
          /** Whether the label is a favorite. */
          is_favorite?: boolean;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next Todoist page, or null when exhausted. */
        nextCursor: string | null;
      };
    };
    /** List active Todoist projects with optional folder, workspace, and cursor filters. */
    "todoist.list_projects": {
      input: {
        /** Optional Todoist folder ID to filter projects by. */
        folderId?: number | string;
        /** Optional Todoist workspace ID to filter projects by. */
        workspaceId?: number | string;
        /**
         * Opaque pagination cursor returned by a previous Todoist response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of Todoist results to return in one page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** The Todoist projects returned for this page. */
        projects: Array<{
          /** Todoist project ID. */
          id: string;
          /** Project name. */
          name: string;
          /** Project description. */
          description?: string;
          /** Project color. */
          color?: string;
          /** Project view style. */
          view_style?: string;
          /** Current user's role in the project. */
          role?: string;
          /** Workspace project status. */
          status?: string;
          /** Parent project ID. */
          parent_id?: string | null;
          /** Workspace ID. */
          workspace_id?: string;
          /** Folder ID. */
          folder_id?: string | number | null;
          /** Project order among siblings. */
          child_order?: number;
          /** Default task order for the project. */
          default_order?: number;
          /** Creator user ID. */
          creator_uid?: string;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** Whether the project is a favorite. */
          is_favorite?: boolean;
          /** Whether the project is archived. */
          is_archived?: boolean;
          /** Whether the project is deleted. */
          is_deleted?: boolean;
          /** Whether the project is frozen. */
          is_frozen?: boolean;
          /** Whether the project is collapsed. */
          is_collapsed?: boolean;
          /** Whether the project is collapsed. */
          collapsed?: boolean;
          /** Whether tasks can be assigned in the project. */
          can_assign_tasks?: boolean;
          /** Whether public access is enabled. */
          public_access?: boolean;
          /** Whether this is the inbox project. */
          inbox_project?: boolean;
          /** Whether the project is invite-only. */
          is_invite_only?: boolean;
          /** Whether project link sharing is enabled. */
          is_link_sharing_enabled?: boolean;
          /** Whether project insights are enabled. */
          is_project_insights_enabled?: boolean;
          /** Whether default collaborator invites are pending. */
          is_pending_default_collaborator_invites?: boolean;
          /** Default collaborator role for the project. */
          collaborator_role_default?: string;
          /** Project creation timestamp. */
          created_at?: string;
          /** Project update timestamp. */
          updated_at?: string;
          /** Project web URL. */
          url?: string;
          /** Project public sharing key. */
          public_key?: string;
          /** Project access settings. */
          access?: {
            /** Project visibility level. */
            visibility?: string;
            /** Project access configuration payload. */
            configuration?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next Todoist page, or null when exhausted. */
        nextCursor: string | null;
      };
    };
    /** List active Todoist sections with optional project and cursor filters. */
    "todoist.list_sections": {
      input: {
        /**
         * Optional Todoist project ID.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Opaque pagination cursor returned by a previous Todoist response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of Todoist results to return in one page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** The Todoist sections returned for this page. */
        sections: Array<{
          /** Todoist section ID. */
          id: string;
          /** Project ID that owns the section. */
          project_id: string;
          /** User ID that owns the section. */
          user_id?: string;
          /** Section name. */
          name: string;
          /** Section order within the project. */
          section_order?: number;
          /** Whether the section is archived. */
          is_archived?: boolean;
          /** Whether the section is deleted. */
          is_deleted?: boolean;
          /** Whether the section is collapsed. */
          is_collapsed?: boolean;
          /** Section creation timestamp. */
          added_at?: string;
          /** Section update timestamp. */
          updated_at?: string;
          /** Section archive timestamp. */
          archived_at?: string;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next Todoist page, or null when exhausted. */
        nextCursor: string | null;
      };
    };
    /** List active Todoist tasks with optional project, section, parent, label, goal, ID, and cursor filters. */
    "todoist.list_tasks": {
      input: {
        /**
         * Optional Todoist project ID filter.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Optional Todoist section ID filter.
         * @minLength 1
         */
        sectionId?: string;
        /**
         * Optional Todoist parent task ID filter.
         * @minLength 1
         */
        parentId?: string;
        /**
         * Optional Todoist label name filter.
         * @minLength 1
         */
        label?: string;
        /**
         * Explicit Todoist task IDs to fetch.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Optional Todoist goal ID filter.
         * @minLength 1
         */
        goalId?: string;
        /**
         * Opaque pagination cursor returned by a previous Todoist response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of Todoist results to return in one page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** The Todoist tasks returned for this page. */
        tasks: Array<{
          /** Todoist task ID. */
          id: string;
          /** User ID that owns the task. */
          user_id?: string;
          /** Project ID that owns the task. */
          project_id: string;
          /** Section ID that owns the task. */
          section_id?: string | null;
          /** Parent task ID. */
          parent_id?: string | null;
          /** Task title. */
          content: string;
          /** Task description. */
          description?: string;
          /** Task label names. */
          labels?: Array<string>;
          /** Task priority from 1 to 4. */
          priority?: number;
          /** Whether the task is completed. */
          checked?: boolean;
          /** Whether the task is deleted. */
          is_deleted?: boolean;
          /** Whether subtasks are collapsed. */
          is_collapsed?: boolean;
          /** Number of comments on the task. */
          note_count?: number;
          /** Task order in Today and Upcoming. */
          day_order?: number;
          /** Task order within its parent scope. */
          child_order?: number;
          /** Task creation timestamp. */
          added_at?: string;
          /** Task update timestamp. */
          updated_at?: string;
          /** Task completion timestamp. */
          completed_at?: string;
          /** User ID that added the task. */
          added_by_uid?: string;
          /** User ID that assigned the task. */
          assigned_by_uid?: string;
          /** Assigned responsible user ID. */
          responsible_uid?: string | null;
          /** User ID that completed the task. */
          completed_by_uid?: string;
          /** Task due date payload. */
          due?: {
            /** Due date in YYYY-MM-DD or date-time form. */
            date: string;
            /** Human-readable due text. */
            string?: string;
            /** Language code used to parse the due text. */
            lang?: string;
            /** Exact due date-time in RFC 3339 form. */
            datetime?: string;
            /** Time zone for the due date-time. */
            timezone?: string;
            /** Whether the due date is recurring. */
            is_recurring?: boolean;
            [key: string]: unknown;
          } | null;
          /** Task deadline payload. */
          deadline?: {
            /** Deadline date in YYYY-MM-DD format. */
            date: string;
          } | null;
          /** Task duration payload. */
          duration?: {
            /** Duration amount. */
            amount: number;
            /** Duration unit. */
            unit: "minute" | "day";
          } | null;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next Todoist page, or null when exhausted. */
        nextCursor: string | null;
      };
    };
    /** Update a Todoist comment by comment ID. */
    "todoist.update_comment": {
      input: {
        /**
         * Todoist comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * Updated Todoist comment content.
         * @minLength 1
         * @maxLength 15000
         */
        content: string;
      };
      output: {
        /** The updated Todoist comment. */
        comment: {
          /** Todoist comment ID. */
          id: string;
          /** Comment content. */
          content?: string;
          /** Comment creation timestamp. */
          posted_at?: string;
          /** Task ID that owns the comment. */
          task_id?: string | null;
          /** Project ID that owns the comment. */
          project_id?: string | null;
          /** User ID that posted the comment. */
          posted_uid?: string;
          /** Whether the comment is deleted. */
          is_deleted?: boolean;
          /** Users notified by the comment. */
          uids_to_notify?: Array<string>;
          /** Attachment metadata. */
          attachment?: {
            /** Attachment file name. */
            file_name?: string;
            /** Attachment MIME type. */
            file_type?: string;
            /** Attachment download URL. */
            file_url?: string;
            /** Attachment resource type. */
            resource_type?: string;
            /** Attachment file size in bytes. */
            file_size?: number;
            /** Attachment upload state. */
            upload_state?: string;
            /** Attachment duration in seconds. */
            file_duration?: number;
          };
          /** Reaction metadata keyed by emoji. */
          reactions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Todoist project by project ID. */
    "todoist.update_project": {
      input: {
        /**
         * Todoist project ID.
         * @minLength 1
         */
        projectId: string;
        /** Updated project name. */
        name?: string | null;
        /** Updated project description. */
        description?: string | null;
        /** Updated project color. */
        color?: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "grey" | "taupe" | number | null;
        /** Updated favorite flag. */
        isFavorite?: boolean | null;
        /** Updated project view style. */
        viewStyle?: "list" | "board" | "calendar" | null;
        /** Updated project order among sibling projects. */
        childOrder?: number | null;
        /** Updated collapsed state of the project. */
        isCollapsed?: boolean | null;
        /** Updated folder ID for a workspace project. */
        folderId?: number | null;
      };
      output: {
        /** The updated Todoist project. */
        project: {
          /** Todoist project ID. */
          id: string;
          /** Project name. */
          name: string;
          /** Project description. */
          description?: string;
          /** Project color. */
          color?: string;
          /** Project view style. */
          view_style?: string;
          /** Current user's role in the project. */
          role?: string;
          /** Workspace project status. */
          status?: string;
          /** Parent project ID. */
          parent_id?: string | null;
          /** Workspace ID. */
          workspace_id?: string;
          /** Folder ID. */
          folder_id?: string | number | null;
          /** Project order among siblings. */
          child_order?: number;
          /** Default task order for the project. */
          default_order?: number;
          /** Creator user ID. */
          creator_uid?: string;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** Whether the project is a favorite. */
          is_favorite?: boolean;
          /** Whether the project is archived. */
          is_archived?: boolean;
          /** Whether the project is deleted. */
          is_deleted?: boolean;
          /** Whether the project is frozen. */
          is_frozen?: boolean;
          /** Whether the project is collapsed. */
          is_collapsed?: boolean;
          /** Whether the project is collapsed. */
          collapsed?: boolean;
          /** Whether tasks can be assigned in the project. */
          can_assign_tasks?: boolean;
          /** Whether public access is enabled. */
          public_access?: boolean;
          /** Whether this is the inbox project. */
          inbox_project?: boolean;
          /** Whether the project is invite-only. */
          is_invite_only?: boolean;
          /** Whether project link sharing is enabled. */
          is_link_sharing_enabled?: boolean;
          /** Whether project insights are enabled. */
          is_project_insights_enabled?: boolean;
          /** Whether default collaborator invites are pending. */
          is_pending_default_collaborator_invites?: boolean;
          /** Default collaborator role for the project. */
          collaborator_role_default?: string;
          /** Project creation timestamp. */
          created_at?: string;
          /** Project update timestamp. */
          updated_at?: string;
          /** Project web URL. */
          url?: string;
          /** Project public sharing key. */
          public_key?: string;
          /** Project access settings. */
          access?: {
            /** Project visibility level. */
            visibility?: string;
            /** Project access configuration payload. */
            configuration?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update a Todoist section by section ID. */
    "todoist.update_section": {
      input: {
        /**
         * Todoist section ID.
         * @minLength 1
         */
        sectionId: string;
        /** Updated section name. */
        name?: string | null;
        /** Updated section order. */
        sectionOrder?: number | null;
        /** Updated collapsed state of the section. */
        isCollapsed?: boolean | null;
      };
      output: {
        /** The updated Todoist section. */
        section: {
          /** Todoist section ID. */
          id: string;
          /** Project ID that owns the section. */
          project_id: string;
          /** User ID that owns the section. */
          user_id?: string;
          /** Section name. */
          name: string;
          /** Section order within the project. */
          section_order?: number;
          /** Whether the section is archived. */
          is_archived?: boolean;
          /** Whether the section is deleted. */
          is_deleted?: boolean;
          /** Whether the section is collapsed. */
          is_collapsed?: boolean;
          /** Section creation timestamp. */
          added_at?: string;
          /** Section update timestamp. */
          updated_at?: string;
          /** Section archive timestamp. */
          archived_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Todoist task by task ID. */
    "todoist.update_task": {
      input: {
        /**
         * Todoist task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Updated task content.
         * @minLength 1
         */
        content?: string;
        /** Updated task description. */
        description?: string;
        /**
         * Updated Todoist label names.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Updated task priority.
         * @minimum 1
         * @maximum 4
         */
        priority?: number;
        /**
         * Updated human-readable Todoist due date.
         * @minLength 1
         */
        dueString?: string;
        /**
         * Updated Todoist due date.
         * @minLength 1
         */
        dueDate?: string;
        /**
         * Updated Todoist due date-time.
         * @minLength 1
         */
        dueDatetime?: string;
        /**
         * Updated dueString language code.
         * @minLength 1
         */
        dueLang?: string;
        /** Updated assignee user ID, or null to clear it. */
        assigneeId?: number | null;
        /** Updated duration amount, or null to clear it. */
        duration?: number | null;
        /** Updated duration unit, or null to clear it. */
        durationUnit?: "minute" | "day" | null;
        /** Updated deadline date, or null to clear it. */
        deadlineDate?: string | null;
        /** Updated task order within its current scope. */
        childOrder?: number;
        /** Updated collapsed state of the task. */
        isCollapsed?: boolean;
        /** Updated task order in Today and Upcoming. */
        dayOrder?: number;
      };
      output: {
        /** The updated Todoist task. */
        task: {
          /** Todoist task ID. */
          id: string;
          /** User ID that owns the task. */
          user_id?: string;
          /** Project ID that owns the task. */
          project_id: string;
          /** Section ID that owns the task. */
          section_id?: string | null;
          /** Parent task ID. */
          parent_id?: string | null;
          /** Task title. */
          content: string;
          /** Task description. */
          description?: string;
          /** Task label names. */
          labels?: Array<string>;
          /** Task priority from 1 to 4. */
          priority?: number;
          /** Whether the task is completed. */
          checked?: boolean;
          /** Whether the task is deleted. */
          is_deleted?: boolean;
          /** Whether subtasks are collapsed. */
          is_collapsed?: boolean;
          /** Number of comments on the task. */
          note_count?: number;
          /** Task order in Today and Upcoming. */
          day_order?: number;
          /** Task order within its parent scope. */
          child_order?: number;
          /** Task creation timestamp. */
          added_at?: string;
          /** Task update timestamp. */
          updated_at?: string;
          /** Task completion timestamp. */
          completed_at?: string;
          /** User ID that added the task. */
          added_by_uid?: string;
          /** User ID that assigned the task. */
          assigned_by_uid?: string;
          /** Assigned responsible user ID. */
          responsible_uid?: string | null;
          /** User ID that completed the task. */
          completed_by_uid?: string;
          /** Task due date payload. */
          due?: {
            /** Due date in YYYY-MM-DD or date-time form. */
            date: string;
            /** Human-readable due text. */
            string?: string;
            /** Language code used to parse the due text. */
            lang?: string;
            /** Exact due date-time in RFC 3339 form. */
            datetime?: string;
            /** Time zone for the due date-time. */
            timezone?: string;
            /** Whether the due date is recurring. */
            is_recurring?: boolean;
            [key: string]: unknown;
          } | null;
          /** Task deadline payload. */
          deadline?: {
            /** Deadline date in YYYY-MM-DD format. */
            date: string;
          } | null;
          /** Task duration payload. */
          duration?: {
            /** Duration amount. */
            amount: number;
            /** Duration unit. */
            unit: "minute" | "day";
          } | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
