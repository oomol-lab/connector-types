import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Motion project in a workspace. */
    "motion.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /** The project description. */
        description?: string;
        /**
         * The ISO 8601 project due date.
         * @format date-time
         */
        dueDate?: string;
        /**
         * The Motion project status name.
         * @minLength 1
         */
        status?: string;
        /** The Motion task priority. */
        priority?: "ASAP" | "HIGH" | "MEDIUM" | "LOW";
      };
      output: {
        /** A Motion API resource object. */
        project: Record<string, unknown>;
      };
    };
    /** Create a Motion task in a workspace. */
    "motion.create_task": {
      input: {
        /**
         * The task title.
         * @minLength 1
         */
        name: string;
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The ISO 8601 due date for the task.
         * @format date-time
         */
        dueDate?: string;
        /** The task duration as minutes or a Motion duration keyword. */
        duration?: number | "NONE" | "REMINDER";
        /**
         * The Motion task status name.
         * @minLength 1
         */
        status?: string;
        /** Motion auto-scheduling settings for the task. */
        autoScheduled?: Record<string, unknown> | null;
        /**
         * The Motion project ID.
         * @minLength 1
         */
        projectId?: string;
        /** The GitHub Flavored Markdown task description. */
        description?: string;
        /** The Motion task priority. */
        priority?: "ASAP" | "HIGH" | "MEDIUM" | "LOW";
        /** The label names to add to the task. */
        labels?: Array<string>;
        /**
         * The Motion user ID assigned to the task.
         * @minLength 1
         */
        assigneeId?: string;
      };
      output: {
        /** A Motion task resource. */
        task: {
          /** The Motion task ID. */
          id?: string;
          /** The task name. */
          name?: string;
          /** The HTML task description returned by Motion. */
          description?: string;
          /** The task duration returned by Motion. */
          duration?: number | string;
          /** The task due date. */
          dueDate?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The timestamp when the task was last updated. */
          updatedTime?: string;
          /** The Motion task priority. */
          priority?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Motion task by ID. */
    "motion.delete_task": {
      input: {
        /**
         * The Motion resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the Motion task delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get the Motion user associated with the current API key. */
    "motion.get_my_user": {
      input: Record<string, never>;
      output: {
        /** A Motion API resource object. */
        user: Record<string, unknown>;
      };
    };
    /** Get a Motion project by ID. */
    "motion.get_project": {
      input: {
        /**
         * The Motion resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Motion API resource object. */
        project: Record<string, unknown>;
      };
    };
    /** Get a Motion task by ID. */
    "motion.get_task": {
      input: {
        /**
         * The Motion resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Motion task resource. */
        task: {
          /** The Motion task ID. */
          id?: string;
          /** The task name. */
          name?: string;
          /** The HTML task description returned by Motion. */
          description?: string;
          /** The task duration returned by Motion. */
          duration?: number | string;
          /** The task due date. */
          dueDate?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The timestamp when the task was last updated. */
          updatedTime?: string;
          /** The Motion task priority. */
          priority?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Motion projects for a workspace. */
    "motion.list_projects": {
      input: {
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The pagination cursor returned by a previous Motion response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Motion pagination metadata. */
        meta: {
          /** The cursor for the next page of results. */
          nextCursor?: string;
          /** The number of records returned in the current page. */
          pageSize?: number;
          [key: string]: unknown;
        };
        /** The Motion projects returned by the API. */
        projects: Array<Record<string, unknown>>;
      };
    };
    /** List Motion schedules for a workspace. */
    "motion.list_schedules": {
      input: {
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The Motion schedules returned by the API. */
        schedules: Array<Record<string, unknown>>;
      };
    };
    /** List Motion statuses for a workspace. */
    "motion.list_statuses": {
      input: {
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The Motion statuses returned by the API. */
        statuses: Array<Record<string, unknown>>;
      };
    };
    /** List Motion tasks with optional workspace, project, assignee, status, and cursor filters. */
    "motion.list_tasks": {
      input: {
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Only return tasks in this Motion project.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Only return tasks assigned to this Motion user.
         * @minLength 1
         */
        assigneeId?: string;
        /**
         * The pagination cursor returned by a previous Motion response.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to include all statuses that exist on tasks. */
        includeAllStatuses?: boolean;
        /**
         * Only return tasks with this label.
         * @minLength 1
         */
        label?: string;
        /**
         * Only return tasks whose name contains this case-insensitive string.
         * @minLength 1
         */
        name?: string;
        /** Only return tasks with these status names. */
        status?: Array<string>;
      };
      output: {
        /** Motion pagination metadata. */
        meta: {
          /** The cursor for the next page of results. */
          nextCursor?: string;
          /** The number of records returned in the current page. */
          pageSize?: number;
          [key: string]: unknown;
        };
        /** The Motion tasks returned by the API. */
        tasks: Array<{
          /** The Motion task ID. */
          id?: string;
          /** The task name. */
          name?: string;
          /** The HTML task description returned by Motion. */
          description?: string;
          /** The task duration returned by Motion. */
          duration?: number | string;
          /** The task due date. */
          dueDate?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The timestamp when the task was last updated. */
          updatedTime?: string;
          /** The Motion task priority. */
          priority?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Motion users visible to the API key. */
    "motion.list_users": {
      input: {
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId?: string;
      };
      output: {
        /** The Motion users returned by the API. */
        users: Array<Record<string, unknown>>;
      };
    };
    /** List Motion workspaces available to the API key. */
    "motion.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The Motion workspaces returned by the API. */
        workspaces: Array<Record<string, unknown>>;
      };
    };
    /** Update a Motion task by ID. */
    "motion.update_task": {
      input: {
        /**
         * The Motion resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The task title.
         * @minLength 1
         */
        name?: string;
        /**
         * The Motion workspace ID.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * The ISO 8601 due date for the task.
         * @format date-time
         */
        dueDate?: string;
        /** The task duration as minutes or a Motion duration keyword. */
        duration?: number | "NONE" | "REMINDER";
        /**
         * The Motion task status name.
         * @minLength 1
         */
        status?: string;
        /** Motion auto-scheduling settings for the task. */
        autoScheduled?: Record<string, unknown> | null;
        /**
         * The Motion project ID.
         * @minLength 1
         */
        projectId?: string;
        /** The GitHub Flavored Markdown task description. */
        description?: string;
        /** The Motion task priority. */
        priority?: "ASAP" | "HIGH" | "MEDIUM" | "LOW";
        /** The label names to add to the task. */
        labels?: Array<string>;
        /**
         * The Motion user ID assigned to the task.
         * @minLength 1
         */
        assigneeId?: string;
      };
      output: {
        /** A Motion task resource. */
        task: {
          /** The Motion task ID. */
          id?: string;
          /** The task name. */
          name?: string;
          /** The HTML task description returned by Motion. */
          description?: string;
          /** The task duration returned by Motion. */
          duration?: number | string;
          /** The task due date. */
          dueDate?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The timestamp when the task was last updated. */
          updatedTime?: string;
          /** The Motion task priority. */
          priority?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
