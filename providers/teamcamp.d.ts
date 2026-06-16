import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get detailed information about one Teamcamp project. */
    "teamcamp.get_project": {
      input: {
        /**
         * The Teamcamp project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The Teamcamp project detail object. */
        project: Record<string, unknown>;
        /** The raw Teamcamp project detail object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get detailed information about one Teamcamp task. */
    "teamcamp.get_task": {
      input: {
        /**
         * The Teamcamp task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The Teamcamp task detail object. */
        task: Record<string, unknown>;
        /** The raw Teamcamp task detail object. */
        raw: Record<string, unknown>;
      };
    };
    /** List users in the Teamcamp workspace. */
    "teamcamp.list_company_users": {
      input: Record<string, never>;
      output: {
        /** Users returned by Teamcamp. */
        users: Array<{
          /** The unique ID of the user. */
          id?: string;
          /** The name of the user. */
          name?: string;
          /** The email address of the user. */
          email?: string;
          /** The phone number of the user. */
          phone?: string;
          /** The URL of the user's profile photo. */
          profile_photo?: string;
          /** Whether the user is the workspace owner. */
          isOwner?: boolean;
          /** Whether the user is a workspace admin. */
          isAdmin?: boolean;
          [key: string]: unknown;
        }>;
        /** Raw user objects returned by Teamcamp. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List customers in the Teamcamp workspace. */
    "teamcamp.list_customers": {
      input: Record<string, never>;
      output: {
        /** Customers returned by Teamcamp. */
        customers: Array<{
          /** The unique ID of the customer. */
          customerId?: string;
          /** The address of the customer. */
          address?: string;
          /** The first name of the customer. */
          firstName?: string;
          /** The last name of the customer. */
          lastName?: string;
          /** The email address of the customer. */
          email?: string;
          /** The company name of the customer. */
          companyName?: string;
          /** The phone number of the customer. */
          phone?: string;
          /** Client contacts associated with the customer. */
          clients?: Array<{
            /** The unique ID of the client contact. */
            clientId?: string;
            /** The name of the client contact. */
            name?: string;
            /** The email address of the client contact. */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Raw customer objects returned by Teamcamp. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List all projects in the Teamcamp workspace. */
    "teamcamp.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Teamcamp. */
        projects: Array<{
          /** The ID of the project. */
          projectId?: string;
          /** The name of the project. */
          projectName?: string;
          [key: string]: unknown;
        }>;
        /** Raw project objects returned by Teamcamp. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List tasks in a Teamcamp project, optionally filtered by completion status. */
    "teamcamp.list_tasks": {
      input: {
        /**
         * The Teamcamp project ID.
         * @minLength 1
         */
        projectId: string;
        /** Filter tasks by completion status. */
        complete?: boolean;
      };
      output: {
        /** Tasks returned by Teamcamp. */
        tasks: Array<{
          /** The task ID, when Teamcamp includes the id alias. */
          id?: string;
          /** The ID of the task. */
          taskId?: string;
          /** The name of the task. */
          taskName?: string;
          /** Whether the task is complete. */
          status?: boolean;
          /** The task creation timestamp returned by Teamcamp. */
          createdAt?: string;
          /** The task update timestamp returned by Teamcamp. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Raw task objects returned by Teamcamp. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Post a comment to a Teamcamp task. */
    "teamcamp.post_task_comment": {
      input: {
        /**
         * The Teamcamp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The comment content to post to the task.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** A Teamcamp task comment. */
        comment: {
          /** The unique ID of the comment. */
          commentId?: string;
          /** The comment content. */
          content?: string;
          [key: string]: unknown;
        };
        /** The raw Teamcamp comment response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
