import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the current Worksnaps user profile for the connected API token. */
    "worksnaps.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Worksnaps user profile. */
        user: {
          /**
           * The Worksnaps user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps login name.
           * @minLength 1
           */
          login: string;
          /**
           * The user's first name.
           * @minLength 1
           */
          firstName?: string;
          /**
           * The user's last name.
           * @minLength 1
           */
          lastName?: string;
          /**
           * The user's email address.
           * @minLength 1
           */
          email?: string;
          /** The Worksnaps timezone identifier. */
          timezoneId?: number;
          /**
           * The Worksnaps timezone name.
           * @minLength 1
           */
          timezoneName?: string;
          /** Whether the user is currently in daylight saving time. */
          isInDaylightTime?: boolean;
          /** The raw Worksnaps user payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Read one Worksnaps project by project ID. */
    "worksnaps.get_project": {
      input: {
        /**
         * The Worksnaps project ID to retrieve.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** Whether Worksnaps should include project member assignments in the response. */
        includeUserAssignment?: boolean;
      };
      output: {
        /** A normalized Worksnaps project record. */
        project: {
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps project name.
           * @minLength 1
           */
          name: string;
          /**
           * The Worksnaps project description.
           * @minLength 1
           */
          description?: string;
          /**
           * The Worksnaps project status.
           * @minLength 1
           */
          status?: string;
          /** The project members returned when includeUserAssignment is enabled. */
          userAssignments?: Array<{
            /**
             * The Worksnaps user assignment ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Worksnaps project ID.
             * @exclusiveMinimum 0
             */
            projectId: number;
            /**
             * The Worksnaps user ID.
             * @exclusiveMinimum 0
             */
            userId: number;
            /**
             * The assigned user's first name.
             * @minLength 1
             */
            userFirstName?: string;
            /**
             * The assigned user's last name.
             * @minLength 1
             */
            userLastName?: string;
            /**
             * The assigned user's email address.
             * @minLength 1
             */
            userEmail?: string;
            /**
             * The assigned project role.
             * @minLength 1
             */
            role?: string;
            /** The raw Worksnaps user assignment payload. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw Worksnaps project payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Read one Worksnaps time entry by project ID and time entry ID. */
    "worksnaps.get_project_time_entry": {
      input: {
        /**
         * The Worksnaps project ID that owns the time entry.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Worksnaps time entry ID to retrieve.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** A normalized Worksnaps time entry record. */
        timeEntry: {
          /**
           * The Worksnaps time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The timestamp when Worksnaps logged the entry.
           * @minLength 1
           */
          loggedTimestamp: string;
          /**
           * The start timestamp of the time entry.
           * @minLength 1
           */
          fromTimestamp: string;
          /**
           * The duration of the time entry in minutes.
           * @minimum 0
           */
          durationInMinutes: number;
          /**
           * The Worksnaps time entry type.
           * @minLength 1
           */
          type: string;
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          projectId?: number;
          /**
           * The Worksnaps user ID.
           * @exclusiveMinimum 0
           */
          userId?: number;
          /**
           * The Worksnaps task ID.
           * @exclusiveMinimum 0
           */
          taskId?: number;
          /**
           * The user comment attached to the time entry.
           * @minLength 1
           */
          userComment?: string;
          /**
           * The thumbnail screenshot URL.
           * @minLength 1
           */
          thumbnailUrl?: string;
          /**
           * The webcam snapshot URL.
           * @minLength 1
           */
          webcamUrl?: string;
          /**
           * The activity level reported by Worksnaps.
           * @minimum 0
           */
          activityLevel?: number;
          /** The raw Worksnaps time entry payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Read a Worksnaps project report for a bounded time window and user set. */
    "worksnaps.get_project_time_report": {
      input: {
        /**
         * The Worksnaps project ID whose report should be generated.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** The Worksnaps report type to request. */
        reportType: "time_entries" | "time_summary";
        /**
         * The starting Unix timestamp string at a 10-minute boundary.
         * @minLength 1
         */
        fromTimestamp: string;
        /**
         * The ending Unix timestamp string at a 10-minute boundary.
         * @minLength 1
         */
        toTimestamp: string;
        /**
         * A non-empty list of Worksnaps numeric identifiers.
         * @minItems 1
         */
        userIds: Array<number>;
        /**
         * A non-empty list of Worksnaps numeric identifiers.
         * @minItems 1
         */
        taskIds?: Array<number>;
        /** The Worksnaps time entry type filter. */
        timeEntryType?: "online" | "offline";
      };
      output: {
        /** The Worksnaps report type to request. */
        reportType: "time_entries" | "time_summary";
        /** The Worksnaps report lines returned for the request. */
        reportLines: Array<{
          /**
           * The Worksnaps user ID.
           * @exclusiveMinimum 0
           */
          userId: number;
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The reported duration in minutes.
           * @minimum 0
           */
          durationInMinutes: number;
          /**
           * The Worksnaps task ID.
           * @exclusiveMinimum 0
           */
          taskId?: number;
          /**
           * The Worksnaps task name.
           * @minLength 1
           */
          taskName?: string;
          /**
           * The reported user comment.
           * @minLength 1
           */
          userComment?: string;
          /**
           * The Worksnaps time entry type.
           * @minLength 1
           */
          timeEntryType?: string;
          /** The raw Worksnaps report line payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read one Worksnaps task by project ID and task ID. */
    "worksnaps.get_task": {
      input: {
        /**
         * The Worksnaps project ID that owns the task.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Worksnaps task ID to retrieve.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
      output: {
        /** A normalized Worksnaps task record. */
        task: {
          /**
           * The Worksnaps task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps task name.
           * @minLength 1
           */
          name: string;
          /**
           * The Worksnaps task description.
           * @minLength 1
           */
          description?: string;
          /** The task assignments returned when includeTaskAssignment is enabled. */
          taskAssignments?: Array<{
            /**
             * The Worksnaps task assignment ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Worksnaps project ID.
             * @exclusiveMinimum 0
             */
            projectId: number;
            /**
             * The Worksnaps task ID.
             * @exclusiveMinimum 0
             */
            taskId: number;
            /**
             * The Worksnaps user ID.
             * @exclusiveMinimum 0
             */
            userId: number;
            /** The raw Worksnaps task assignment payload. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw Worksnaps task payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List task assignments for one Worksnaps project. */
    "worksnaps.list_project_task_assignments": {
      input: {
        /**
         * The Worksnaps project ID whose task assignments should be listed.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** The task assignments returned for the Worksnaps project. */
        taskAssignments: Array<{
          /**
           * The Worksnaps task assignment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The Worksnaps task ID.
           * @exclusiveMinimum 0
           */
          taskId: number;
          /**
           * The Worksnaps user ID.
           * @exclusiveMinimum 0
           */
          userId: number;
          /** The raw Worksnaps task assignment payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List tasks that belong to one Worksnaps project. */
    "worksnaps.list_project_tasks": {
      input: {
        /**
         * The Worksnaps project ID whose tasks should be listed.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** Whether Worksnaps should include task assignments in each task record. */
        includeTaskAssignment?: boolean;
      };
      output: {
        /** The Worksnaps tasks returned for the request. */
        tasks: Array<{
          /**
           * The Worksnaps task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps task name.
           * @minLength 1
           */
          name: string;
          /**
           * The Worksnaps task description.
           * @minLength 1
           */
          description?: string;
          /** The task assignments returned when includeTaskAssignment is enabled. */
          taskAssignments?: Array<{
            /**
             * The Worksnaps task assignment ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Worksnaps project ID.
             * @exclusiveMinimum 0
             */
            projectId: number;
            /**
             * The Worksnaps task ID.
             * @exclusiveMinimum 0
             */
            taskId: number;
            /**
             * The Worksnaps user ID.
             * @exclusiveMinimum 0
             */
            userId: number;
            /** The raw Worksnaps task assignment payload. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw Worksnaps task payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Worksnaps time entries in one project for one or more users. */
    "worksnaps.list_project_time_entries": {
      input: {
        /**
         * The Worksnaps project ID whose time entries should be listed.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * A non-empty list of Worksnaps numeric identifiers.
         * @minItems 1
         */
        userIds: Array<number>;
        /**
         * The starting Unix timestamp string at a 10-minute boundary.
         * @minLength 1
         */
        fromTimestamp: string;
        /**
         * The ending Unix timestamp string at a 10-minute boundary.
         * @minLength 1
         */
        toTimestamp: string;
        /**
         * A non-empty list of Worksnaps numeric identifiers.
         * @minItems 1
         */
        taskIds?: Array<number>;
        /** The Worksnaps time entry type filter. */
        timeEntryType?: "online" | "offline";
      };
      output: {
        /** The Worksnaps time entries returned for the request. */
        timeEntries: Array<{
          /**
           * The Worksnaps time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The timestamp when Worksnaps logged the entry.
           * @minLength 1
           */
          loggedTimestamp: string;
          /**
           * The start timestamp of the time entry.
           * @minLength 1
           */
          fromTimestamp: string;
          /**
           * The duration of the time entry in minutes.
           * @minimum 0
           */
          durationInMinutes: number;
          /**
           * The Worksnaps time entry type.
           * @minLength 1
           */
          type: string;
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          projectId?: number;
          /**
           * The Worksnaps user ID.
           * @exclusiveMinimum 0
           */
          userId?: number;
          /**
           * The Worksnaps task ID.
           * @exclusiveMinimum 0
           */
          taskId?: number;
          /**
           * The user comment attached to the time entry.
           * @minLength 1
           */
          userComment?: string;
          /**
           * The thumbnail screenshot URL.
           * @minLength 1
           */
          thumbnailUrl?: string;
          /**
           * The webcam snapshot URL.
           * @minLength 1
           */
          webcamUrl?: string;
          /**
           * The activity level reported by Worksnaps.
           * @minimum 0
           */
          activityLevel?: number;
          /** The raw Worksnaps time entry payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List user assignments for one Worksnaps project. */
    "worksnaps.list_project_user_assignments": {
      input: {
        /**
         * The Worksnaps project ID whose members should be listed.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** The user assignments returned for the Worksnaps project. */
        userAssignments: Array<{
          /**
           * The Worksnaps user assignment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The Worksnaps user ID.
           * @exclusiveMinimum 0
           */
          userId: number;
          /**
           * The assigned user's first name.
           * @minLength 1
           */
          userFirstName?: string;
          /**
           * The assigned user's last name.
           * @minLength 1
           */
          userLastName?: string;
          /**
           * The assigned user's email address.
           * @minLength 1
           */
          userEmail?: string;
          /**
           * The assigned project role.
           * @minLength 1
           */
          role?: string;
          /** The raw Worksnaps user assignment payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Worksnaps projects that the current user is involved in. */
    "worksnaps.list_projects": {
      input: {
        /** Whether Worksnaps should include project member assignments in each project record. */
        includeUserAssignment?: boolean;
      };
      output: {
        /** The Worksnaps projects returned for the request. */
        projects: Array<{
          /**
           * The Worksnaps project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Worksnaps project name.
           * @minLength 1
           */
          name: string;
          /**
           * The Worksnaps project description.
           * @minLength 1
           */
          description?: string;
          /**
           * The Worksnaps project status.
           * @minLength 1
           */
          status?: string;
          /** The project members returned when includeUserAssignment is enabled. */
          userAssignments?: Array<{
            /**
             * The Worksnaps user assignment ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Worksnaps project ID.
             * @exclusiveMinimum 0
             */
            projectId: number;
            /**
             * The Worksnaps user ID.
             * @exclusiveMinimum 0
             */
            userId: number;
            /**
             * The assigned user's first name.
             * @minLength 1
             */
            userFirstName?: string;
            /**
             * The assigned user's last name.
             * @minLength 1
             */
            userLastName?: string;
            /**
             * The assigned user's email address.
             * @minLength 1
             */
            userEmail?: string;
            /**
             * The assigned project role.
             * @minLength 1
             */
            role?: string;
            /** The raw Worksnaps user assignment payload. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw Worksnaps project payload. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
