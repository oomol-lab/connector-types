import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Dart task using the official item wrapper. */
    "dart.create_task": {
      input: {
        /** The task details wrapped by the official Dart create request. */
        item: {
          /** The short task title. */
          title: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId?: string | null;
          /** The full title of the destination dartboard. */
          dartboard?: string;
          /** The workspace task type title. */
          type?: string;
          /** The workspace task status title. */
          status?: string;
          /** The task description, which may contain Markdown. */
          description?: string;
          /** The names or emails assigned in multi-assignee workspaces. */
          assignees?: Array<string> | null;
          /** The name or email assigned in single-assignee workspaces. */
          assignee?: string | null;
          /** The names or emails assigned as reviewers in multi-reviewer workspaces. */
          reviewers?: Array<string> | null;
          /** The name or email assigned in single-reviewer workspaces. */
          reviewer?: string | null;
          /** The tags applied to the task. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /**
           * The task start date in YYYY-MM-DD format.
           * @format date
           */
          startAt?: string | null;
          /**
           * The task due date in YYYY-MM-DD format.
           * @format date
           */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** Relationships between this task and other Dart tasks. */
          taskRelationships?: {
            /** Task IDs that are subtasks of this task. */
            subtaskIds?: Array<string>;
            /** Task IDs that block this task. */
            blockerIds?: Array<string>;
            /** Task IDs that this task blocks. */
            blockingIds?: Array<string>;
            /** Task IDs that duplicate this task. */
            duplicateIds?: Array<string>;
            /** Task IDs related to this task. */
            relatedIds?: Array<string>;
          } | null;
        };
      };
      output: {
        /** A complete Dart task. */
        item: {
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          id: string;
          /** The string that opens the task in the Dart web UI. */
          htmlUrl: string;
          /** The task title. */
          title: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId: string | null;
          /** The full dartboard title. */
          dartboard: string;
          /** The task type title. */
          type: string;
          /** The task status title. */
          status: string;
          /** The assigned user names or emails in a multi-assignee workspace. */
          assignees?: Array<string> | null;
          /** The assigned user name or email. */
          assignee?: string | null;
          /** The reviewer names or emails in a multi-reviewer workspace. */
          reviewers?: Array<string> | null;
          /** The reviewer name or email. */
          reviewer?: string | null;
          /** The task tags. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /** The task start date. */
          startAt?: string | null;
          /** The task due date. */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** The tracked task duration in hh:mm:ss format. */
          timeTracking?: string;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** The user that created the task. */
          createdBy?: string | null;
          /**
           * The task creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /** The user that last updated the task. */
          updatedBy?: string | null;
          /**
           * The task update timestamp.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The task completion timestamp.
           * @format date-time
           */
          completedAt: string | null;
          /** The Markdown task description. */
          description: string;
          /** The task attachments. */
          attachments: Array<{
            /** The attachment name. */
            name: string;
            /**
             * The attachment URL.
             * @format uri
             */
            url: string;
            /** The attachment MIME type. */
            kind: string;
            [key: string]: unknown;
          }>;
          /** Relationships between this task and other Dart tasks. */
          taskRelationships?: {
            /** Task IDs that are subtasks of this task. */
            subtaskIds?: Array<string>;
            /** Task IDs that block this task. */
            blockerIds?: Array<string>;
            /** Task IDs that this task blocks. */
            blockingIds?: Array<string>;
            /** Task IDs that duplicate this task. */
            duplicateIds?: Array<string>;
            /** Task IDs related to this task. */
            relatedIds?: Array<string>;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Move a Dart task to trash and return the updated task. */
    "dart.delete_task": {
      input: {
        /**
         * The 12-character alphanumeric Dart task ID.
         * @minLength 12
         * @maxLength 12
         * @pattern ^[a-zA-Z0-9]{12}$
         */
        id: string;
      };
      output: {
        /** A complete Dart task. */
        item: {
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          id: string;
          /** The string that opens the task in the Dart web UI. */
          htmlUrl: string;
          /** The task title. */
          title: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId: string | null;
          /** The full dartboard title. */
          dartboard: string;
          /** The task type title. */
          type: string;
          /** The task status title. */
          status: string;
          /** The assigned user names or emails in a multi-assignee workspace. */
          assignees?: Array<string> | null;
          /** The assigned user name or email. */
          assignee?: string | null;
          /** The reviewer names or emails in a multi-reviewer workspace. */
          reviewers?: Array<string> | null;
          /** The reviewer name or email. */
          reviewer?: string | null;
          /** The task tags. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /** The task start date. */
          startAt?: string | null;
          /** The task due date. */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** The tracked task duration in hh:mm:ss format. */
          timeTracking?: string;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** The user that created the task. */
          createdBy?: string | null;
          /**
           * The task creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /** The user that last updated the task. */
          updatedBy?: string | null;
          /**
           * The task update timestamp.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The task completion timestamp.
           * @format date-time
           */
          completedAt: string | null;
          /** The Markdown task description. */
          description: string;
          /** The task attachments. */
          attachments: Array<{
            /** The attachment name. */
            name: string;
            /**
             * The attachment URL.
             * @format uri
             */
            url: string;
            /** The attachment MIME type. */
            kind: string;
            [key: string]: unknown;
          }>;
          /** Relationships between this task and other Dart tasks. */
          taskRelationships?: {
            /** Task IDs that are subtasks of this task. */
            subtaskIds?: Array<string>;
            /** Task IDs that block this task. */
            blockerIds?: Array<string>;
            /** Task IDs that this task blocks. */
            blockingIds?: Array<string>;
            /** Task IDs that duplicate this task. */
            duplicateIds?: Array<string>;
            /** Task IDs related to this task. */
            relatedIds?: Array<string>;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the authenticated Dart workspace configuration and valid task values. */
    "dart.get_config": {
      input: Record<string, never>;
      output: {
        /**
         * The current workspace date.
         * @format date
         */
        today: string;
        /** A Dart workspace user. */
        user: {
          /** The user's display name. */
          name: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        };
        /** The available dartboard titles. */
        dartboards: Array<string>;
        /** The available folder titles. */
        folders: Array<string>;
        /** The available task type titles. */
        types: Array<string>;
        /** The available task statuses. */
        statuses: Array<string>;
        /** The users available for assignment. */
        assignees: Array<{
          /** The user's display name. */
          name: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        }>;
        /** The available task tags. */
        tags: Array<string>;
        /** The available task priorities. */
        priorities: Array<string>;
        /** The workspace size configuration. */
        sizes: string | Array<string | number>;
        /** The available Dart skill titles. */
        skills: Array<string>;
        /** The workspace custom property definitions. */
        customProperties: Array<{
          /** The custom property name. */
          name?: string;
          /** The custom property type. */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Dart task by its ID. */
    "dart.get_task": {
      input: {
        /**
         * The 12-character alphanumeric Dart task ID.
         * @minLength 12
         * @maxLength 12
         * @pattern ^[a-zA-Z0-9]{12}$
         */
        id: string;
      };
      output: {
        /** A complete Dart task. */
        item: {
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          id: string;
          /** The string that opens the task in the Dart web UI. */
          htmlUrl: string;
          /** The task title. */
          title: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId: string | null;
          /** The full dartboard title. */
          dartboard: string;
          /** The task type title. */
          type: string;
          /** The task status title. */
          status: string;
          /** The assigned user names or emails in a multi-assignee workspace. */
          assignees?: Array<string> | null;
          /** The assigned user name or email. */
          assignee?: string | null;
          /** The reviewer names or emails in a multi-reviewer workspace. */
          reviewers?: Array<string> | null;
          /** The reviewer name or email. */
          reviewer?: string | null;
          /** The task tags. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /** The task start date. */
          startAt?: string | null;
          /** The task due date. */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** The tracked task duration in hh:mm:ss format. */
          timeTracking?: string;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** The user that created the task. */
          createdBy?: string | null;
          /**
           * The task creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /** The user that last updated the task. */
          updatedBy?: string | null;
          /**
           * The task update timestamp.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The task completion timestamp.
           * @format date-time
           */
          completedAt: string | null;
          /** The Markdown task description. */
          description: string;
          /** The task attachments. */
          attachments: Array<{
            /** The attachment name. */
            name: string;
            /**
             * The attachment URL.
             * @format uri
             */
            url: string;
            /** The attachment MIME type. */
            kind: string;
            [key: string]: unknown;
          }>;
          /** Relationships between this task and other Dart tasks. */
          taskRelationships?: {
            /** Task IDs that are subtasks of this task. */
            subtaskIds?: Array<string>;
            /** Task IDs that block this task. */
            blockerIds?: Array<string>;
            /** Task IDs that this task blocks. */
            blockingIds?: Array<string>;
            /** Task IDs that duplicate this task. */
            duplicateIds?: Array<string>;
            /** Task IDs related to this task. */
            relatedIds?: Array<string>;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Dart tasks with documented filters, ordering, and pagination. */
    "dart.list_tasks": {
      input: {
        /** Filter tasks by title. */
        title?: string;
        /** Filter by comma-separated task IDs. */
        ids?: string;
        /** Filter by dartboard title. */
        dartboard?: string;
        /** Filter by dartboard ID. */
        dartboard_id?: string;
        /** Filter by status title. */
        status?: string;
        /** Filter by status ID. */
        status_id?: string;
        /** Filter by assignee name or email. */
        assignee?: string;
        /** Filter by assignee ID. */
        assignee_id?: string;
        /** Filter by reviewer name or email. */
        reviewer?: string;
        /** Filter by reviewer ID. */
        reviewer_id?: string;
        /** Filter by tag title. */
        tag?: string;
        /** Filter by tag ID. */
        tag_id?: string;
        /** Filter by priority title. */
        priority?: string;
        /** Filter by task type title. */
        type?: string;
        /** Filter by task type ID. */
        type_id?: string;
        /** Filter by parent task ID. */
        parent_id?: string;
        /** Filter by completion state. */
        is_completed?: boolean;
        /** Filter by whether tasks are in trash. */
        in_trash?: boolean;
        /**
         * Filter tasks starting after this timestamp.
         * @format date-time
         */
        start_at_after?: string;
        /**
         * Filter tasks starting before this timestamp.
         * @format date-time
         */
        start_at_before?: string;
        /**
         * Filter tasks due after this timestamp.
         * @format date-time
         */
        due_at_after?: string;
        /**
         * Filter tasks due before this timestamp.
         * @format date-time
         */
        due_at_before?: string;
        /**
         * Filter tasks created after this timestamp.
         * @format date-time
         */
        created_at_after?: string;
        /**
         * Filter tasks created before this timestamp.
         * @format date-time
         */
        created_at_before?: string;
        /**
         * Filter tasks updated after this timestamp.
         * @format date-time
         */
        updated_at_after?: string;
        /**
         * Filter tasks updated before this timestamp.
         * @format date-time
         */
        updated_at_before?: string;
        /** Whether Dart should skip its default filters and ordering. */
        no_defaults?: boolean;
        /** The ordered Dart sort fields. */
        o?: Array<"-completed_at" | "-created_at" | "-dartboard__order" | "-order" | "-title" | "-updated_at" | "completed_at" | "created_at" | "dartboard__order" | "order" | "title" | "updated_at">;
        /** The maximum number of tasks to return. */
        limit?: number;
        /** The result offset. */
        offset?: number;
      };
      output: {
        /** The total number of matching tasks. */
        count: number;
        /**
         * The URL for the next result page.
         * @format uri
         */
        next?: string | null;
        /**
         * The URL for the previous result page.
         * @format uri
         */
        previous?: string | null;
        /** The tasks in this result page. */
        results: Array<{
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          id: string;
          /** The string that opens the task in the Dart web UI. */
          htmlUrl: string;
          /** The task title. */
          title: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId: string | null;
          /** The full dartboard title. */
          dartboard: string;
          /** The task type title. */
          type: string;
          /** The task status title. */
          status: string;
          /** The assigned user names or emails in a multi-assignee workspace. */
          assignees?: Array<string> | null;
          /** The assigned user name or email. */
          assignee?: string | null;
          /** The reviewer names or emails in a multi-reviewer workspace. */
          reviewers?: Array<string> | null;
          /** The reviewer name or email. */
          reviewer?: string | null;
          /** The task tags. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /** The task start date. */
          startAt?: string | null;
          /** The task due date. */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** The tracked task duration in hh:mm:ss format. */
          timeTracking?: string;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** The user that created the task. */
          createdBy?: string | null;
          /**
           * The task creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /** The user that last updated the task. */
          updatedBy?: string | null;
          /**
           * The task update timestamp.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The task completion timestamp.
           * @format date-time
           */
          completedAt: string | null;
          [key: string]: unknown;
        }>;
        /** Metadata describing applied Dart list defaults. */
        meta?: {
          /** Whether Dart applied default filters or ordering. */
          defaultsApplied?: boolean;
          /** The default filters Dart applied automatically. */
          appliedDefaultFilters?: Record<string, string>;
          /** The default ordering fields Dart applied automatically. */
          appliedDefaultSorts?: Array<string>;
          /** Instructions for overriding or disabling defaults. */
          instructions?: string;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Update a Dart task using its item ID and the official item wrapper. */
    "dart.update_task": {
      input: {
        /** The task ID and fields included in the official Dart update request. */
        item: {
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          id: string;
          /** The short task title. */
          title?: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId?: string | null;
          /** The full title of the destination dartboard. */
          dartboard?: string;
          /** The workspace task type title. */
          type?: string;
          /** The workspace task status title. */
          status?: string;
          /** The task description, which may contain Markdown. */
          description?: string;
          /** The names or emails assigned in multi-assignee workspaces. */
          assignees?: Array<string> | null;
          /** The name or email assigned in single-assignee workspaces. */
          assignee?: string | null;
          /** The names or emails assigned as reviewers in multi-reviewer workspaces. */
          reviewers?: Array<string> | null;
          /** The name or email assigned in single-reviewer workspaces. */
          reviewer?: string | null;
          /** The tags applied to the task. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /**
           * The task start date in YYYY-MM-DD format.
           * @format date
           */
          startAt?: string | null;
          /**
           * The task due date in YYYY-MM-DD format.
           * @format date
           */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** Relationships between this task and other Dart tasks. */
          taskRelationships?: {
            /** Task IDs that are subtasks of this task. */
            subtaskIds?: Array<string>;
            /** Task IDs that block this task. */
            blockerIds?: Array<string>;
            /** Task IDs that this task blocks. */
            blockingIds?: Array<string>;
            /** Task IDs that duplicate this task. */
            duplicateIds?: Array<string>;
            /** Task IDs related to this task. */
            relatedIds?: Array<string>;
          } | null;
        };
      };
      output: {
        /** A complete Dart task. */
        item: {
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          id: string;
          /** The string that opens the task in the Dart web UI. */
          htmlUrl: string;
          /** The task title. */
          title: string;
          /**
           * The 12-character alphanumeric Dart task ID.
           * @minLength 12
           * @maxLength 12
           * @pattern ^[a-zA-Z0-9]{12}$
           */
          parentId: string | null;
          /** The full dartboard title. */
          dartboard: string;
          /** The task type title. */
          type: string;
          /** The task status title. */
          status: string;
          /** The assigned user names or emails in a multi-assignee workspace. */
          assignees?: Array<string> | null;
          /** The assigned user name or email. */
          assignee?: string | null;
          /** The reviewer names or emails in a multi-reviewer workspace. */
          reviewers?: Array<string> | null;
          /** The reviewer name or email. */
          reviewer?: string | null;
          /** The task tags. */
          tags?: Array<string>;
          /** The Dart task priority. */
          priority?: "Critical" | "High" | "Medium" | "Low" | null;
          /** The task start date. */
          startAt?: string | null;
          /** The task due date. */
          dueAt?: string | null;
          /** The task size as a workspace label or integer estimate. */
          size?: string | number | null;
          /** The tracked task duration in hh:mm:ss format. */
          timeTracking?: string;
          /** Custom properties keyed by the exact case-sensitive workspace property name. */
          customProperties?: Record<string, string | null | number | null | boolean | Array<string | null>> | null;
          /** The user that created the task. */
          createdBy?: string | null;
          /**
           * The task creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /** The user that last updated the task. */
          updatedBy?: string | null;
          /**
           * The task update timestamp.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The task completion timestamp.
           * @format date-time
           */
          completedAt: string | null;
          /** The Markdown task description. */
          description: string;
          /** The task attachments. */
          attachments: Array<{
            /** The attachment name. */
            name: string;
            /**
             * The attachment URL.
             * @format uri
             */
            url: string;
            /** The attachment MIME type. */
            kind: string;
            [key: string]: unknown;
          }>;
          /** Relationships between this task and other Dart tasks. */
          taskRelationships?: {
            /** Task IDs that are subtasks of this task. */
            subtaskIds?: Array<string>;
            /** Task IDs that block this task. */
            blockerIds?: Array<string>;
            /** Task IDs that this task blocks. */
            blockingIds?: Array<string>;
            /** Task IDs that duplicate this task. */
            duplicateIds?: Array<string>;
            /** Task IDs related to this task. */
            relatedIds?: Array<string>;
          } | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
