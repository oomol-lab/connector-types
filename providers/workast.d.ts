import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark an existing Workast task as completed. */
    "workast.complete_task": {
      input: {
        /**
         * The unique Workast task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The Workast task object. */
        task: Record<string, unknown>;
      };
    };
    /** Create a task in a Workast space with common assignment and scheduling fields. */
    "workast.create_task": {
      input: {
        /**
         * The unique Workast space ID where the task is created.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The task summary text.
         * @minLength 1
         */
        text: string;
        /** The task description. */
        description?: string;
        /**
         * The due date timezone from the IANA timezone database.
         * @minLength 1
         */
        dueDateTimezone?: string;
        /**
         * The time portion of the task due date.
         * @minLength 1
         */
        dueDateTime?: string;
        /**
         * The task start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The task due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * Workast user IDs to assign to the task.
         * @minItems 1
         */
        assignedTo?: Array<string>;
        /** The task position within its Workast list. */
        listPosition?: number;
      };
      output: {
        /** The Workast task object. */
        task: Record<string, unknown>;
      };
    };
    /** Get the Workast user represented by the connected API token. */
    "workast.get_my_details": {
      input: Record<string, never>;
      output: {
        /** The current Workast user object. */
        user: Record<string, unknown>;
      };
    };
    /** Get the details of one Workast space by ID. */
    "workast.get_space_details": {
      input: {
        /**
         * The unique Workast space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The Workast space object. */
        space: Record<string, unknown>;
      };
    };
    /** List tasks in a Workast space with status, pagination, and ordering controls. */
    "workast.get_space_tasks": {
      input: {
        /**
         * The unique Workast space ID.
         * @minLength 1
         */
        spaceId: string;
        /** The Workast task status to include. */
        statusIs?: string;
        /**
         * The number of Workast tasks to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of Workast tasks to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The Workast task sort field and direction, such as createdAt|asc. */
        order?: string;
      };
      output: {
        /** The matching Workast tasks. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** Get the details of one Workast task by ID. */
    "workast.get_task_details": {
      input: {
        /**
         * The unique Workast task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The Workast task object. */
        task: Record<string, unknown>;
      };
    };
    /** Search Workast spaces available to the connected user with filters and pagination. */
    "workast.search_spaces": {
      input: {
        /** Whether to return only spaces available to the current user. */
        onlyUserLists?: boolean;
        /** The Workast space status to include. */
        statusIs?: "active" | "archived";
        /** Whether to include Workast team templates. */
        includeTemplates?: boolean;
        /** The Workast space type to include. */
        type?: "direct" | "group";
        /** Filter spaces by name. */
        name?: string;
        /**
         * The maximum number of Workast spaces to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The number of Workast spaces to skip.
         * @minimum 0
         */
        skip?: number;
        /** The order used for Workast space results. */
        sort?: "name" | "-name" | "createdAt" | "-createdAt";
      };
      output: {
        /** The matching Workast spaces. */
        spaces: Array<Record<string, unknown>>;
      };
    };
    /** Update one or more common fields on an existing Workast task. */
    "workast.update_task": {
      input: {
        /**
         * The unique Workast task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The task summary text.
         * @minLength 1
         */
        text?: string;
        /** The task description. */
        description?: string;
        /**
         * The due date timezone from the IANA timezone database.
         * @minLength 1
         */
        dueDateTimezone?: string;
        /**
         * The time portion of the task due date.
         * @minLength 1
         */
        dueDateTime?: string;
        /**
         * The task start date and time in ISO 8601 format.
         * @format date-time
         */
        startDate?: string;
        /**
         * The task due date and time in ISO 8601 format.
         * @format date-time
         */
        dueDate?: string;
      };
      output: {
        /** The Workast task object. */
        task: Record<string, unknown>;
      };
    };
  }
}
