import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for the user authenticated by the Assured Platform API key. */
    "assured_platform.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated user returned by Assured Platform. */
        user: Record<string, unknown>;
      };
    };
    /** Get detailed information about one Assured Platform task. */
    "assured_platform.get_task": {
      input: {
        /**
         * The UUID of the task to retrieve.
         * @format uuid
         */
        taskId: string;
      };
      output: {
        /** One task returned by Assured Platform. */
        task: Record<string, unknown>;
      };
    };
    /** List Assured Platform tasks with optional filtering and offset pagination. */
    "assured_platform.list_tasks": {
      input: {
        /**
         * The maximum number of tasks to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The text used to search tasks.
         * @minLength 1
         */
        search?: string;
        /**
         * The task status used to filter results.
         * @minLength 1
         */
        status?: string;
        /** The task type used to filter results. */
        taskType?: "APPLICATION_REVIEW" | "CREDENTIALING_REQUEST" | "ENROLLMENT_REQUEST" | "EXPIRABLE" | "GLOBAL" | "INFORMATION_REQUIRED" | "PROFILE_INCOMPLETE" | "PROVIDER_ONBOARDING_DOCUMENT" | "SIGNATURE";
        /**
         * The UUID of the task assignee.
         * @format uuid
         */
        assigneeId?: string;
        /**
         * The UUID of the client associated with the task.
         * @format uuid
         */
        clientId?: string;
        /**
         * The UUID of the facility associated with the task.
         * @format uuid
         */
        facilityId?: string;
        /**
         * Return tasks created at or after this timestamp.
         * @format date-time
         */
        createdAtAfter?: string;
        /**
         * Return tasks created at or before this timestamp.
         * @format date-time
         */
        createdAtBefore?: string;
        /**
         * Return tasks due at or after this timestamp.
         * @format date-time
         */
        dueOnAfter?: string;
        /**
         * Return tasks due at or before this timestamp.
         * @format date-time
         */
        dueOnBefore?: string;
        /**
         * The documented Assured Platform ordering expression.
         * @minLength 1
         */
        ordering?: string;
      };
      output: {
        /** The total number of matching tasks. */
        count: number;
        /** The URL for the next result page when one exists. */
        next: string | null;
        /** The URL for the previous result page when one exists. */
        previous: string | null;
        /** The tasks returned for this page. */
        tasks: Array<Record<string, unknown>>;
      };
    };
  }
}
