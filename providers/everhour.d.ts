import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Everhour time record with a duration, date, and optional task or user assignment. */
    "everhour.create_time_record": {
      input: {
        /**
         * The duration to log in seconds.
         * @minimum 1
         */
        time: number;
        /**
         * An ISO 8601 date string in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * The Everhour task ID to log time against.
         * @minLength 1
         */
        taskId?: string;
        /**
         * The Everhour user ID.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * An optional comment to save on the time record.
         * @minLength 1
         */
        comment?: string;
      };
      output: {
        /** An Everhour time record. */
        timeRecord: {
          /**
           * The Everhour time record ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The tracked duration in seconds. */
          time: number;
          /**
           * The Everhour user ID.
           * @exclusiveMinimum 0
           */
          user: number;
          /**
           * An ISO 8601 date string in YYYY-MM-DD format.
           * @format date
           */
          date: string;
          /** An Everhour task record. */
          task?: {
            /**
             * The Everhour task ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Everhour task name.
             * @minLength 1
             */
            name: string;
            /** The Everhour project IDs linked to the task. */
            projects: Array<string>;
            /** The numeric Everhour section ID. */
            section?: number;
            /** The labels assigned to the task. */
            labels?: Array<string>;
            /** The task position inside its project or section. */
            position?: number;
            /**
             * The task description.
             * @minLength 1
             */
            description?: string;
            /**
             * The task due timestamp string returned by Everhour.
             * @minLength 1
             */
            dueAt?: string;
            /** The Everhour task status. */
            status?: "open" | "closed";
            /** The tracked time summary returned by Everhour. */
            time?: Record<string, unknown>;
            /** The estimate summary returned by Everhour. */
            estimate?: Record<string, unknown>;
            /** The custom attribute values returned by Everhour. */
            attributes?: Record<string, string>;
            /** The numeric metrics returned by Everhour. */
            metrics?: Record<string, number>;
            /** Whether the task is marked as unbillable. */
            unbillable?: boolean;
            [key: string]: unknown;
          };
          /** Whether the time record is locked. */
          isLocked?: boolean;
          /** Whether the time record is already invoiced. */
          isInvoiced?: boolean;
          /**
           * The comment saved on the time record.
           * @minLength 1
           */
          comment?: string;
          /** The change history entries returned by Everhour. */
          history?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current running Everhour timer. */
    "everhour.get_current_timer": {
      input: Record<string, never>;
      output: {
        /** An Everhour timer record. */
        timer: {
          /** The Everhour timer status. */
          status: "active" | "stopped";
          /** The running duration in seconds. */
          duration?: number;
          /** The total tracked time for the timer's day in seconds. */
          today?: number;
          /**
           * The timestamp string for when the timer started.
           * @minLength 1
           */
          startedAt?: string;
          /**
           * An ISO 8601 date string in YYYY-MM-DD format.
           * @format date
           */
          userDate?: string;
          /**
           * The timer comment.
           * @minLength 1
           */
          comment?: string;
          /** An Everhour task record. */
          task?: {
            /**
             * The Everhour task ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Everhour task name.
             * @minLength 1
             */
            name: string;
            /** The Everhour project IDs linked to the task. */
            projects: Array<string>;
            /** The numeric Everhour section ID. */
            section?: number;
            /** The labels assigned to the task. */
            labels?: Array<string>;
            /** The task position inside its project or section. */
            position?: number;
            /**
             * The task description.
             * @minLength 1
             */
            description?: string;
            /**
             * The task due timestamp string returned by Everhour.
             * @minLength 1
             */
            dueAt?: string;
            /** The Everhour task status. */
            status?: "open" | "closed";
            /** The tracked time summary returned by Everhour. */
            time?: Record<string, unknown>;
            /** The estimate summary returned by Everhour. */
            estimate?: Record<string, unknown>;
            /** The custom attribute values returned by Everhour. */
            attributes?: Record<string, string>;
            /** The numeric metrics returned by Everhour. */
            metrics?: Record<string, number>;
            /** Whether the task is marked as unbillable. */
            unbillable?: boolean;
            [key: string]: unknown;
          };
          /** An Everhour user record. */
          user?: {
            /**
             * The Everhour user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Everhour user name.
             * @minLength 1
             */
            name: string;
            /**
             * The headline shown on the user profile.
             * @minLength 1
             */
            headline?: string;
            /**
             * The avatar URL returned by Everhour.
             * @minLength 1
             */
            avatarUrl?: string;
            /** The Everhour user role. */
            role: "admin" | "supervisor" | "member";
            /** The Everhour user status. */
            status: "active" | "invited" | "pending" | "removed";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the current Everhour user profile associated with the API key. */
    "everhour.get_current_user": {
      input: Record<string, never>;
      output: {
        /** An Everhour user record. */
        user: {
          /**
           * The Everhour user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Everhour user name.
           * @minLength 1
           */
          name: string;
          /**
           * The headline shown on the user profile.
           * @minLength 1
           */
          headline?: string;
          /**
           * The avatar URL returned by Everhour.
           * @minLength 1
           */
          avatarUrl?: string;
          /** The Everhour user role. */
          role: "admin" | "supervisor" | "member";
          /** The Everhour user status. */
          status: "active" | "invited" | "pending" | "removed";
          [key: string]: unknown;
        };
      };
    };
    /** Get one Everhour project by its project ID. */
    "everhour.get_project": {
      input: {
        /**
         * The Everhour project ID to retrieve.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** An Everhour project record. */
        project: {
          /**
           * The Everhour project ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Everhour project name.
           * @minLength 1
           */
          name: string;
          /**
           * The upstream workspace ID associated with the project.
           * @minLength 1
           */
          workspaceId?: string;
          /**
           * The upstream workspace name associated with the project.
           * @minLength 1
           */
          workspaceName?: string;
          /** The numeric Everhour client ID. */
          client?: number;
          /** The Everhour project type. */
          type?: "board" | "list";
          /** Whether the project is marked as a favorite. */
          favorite?: boolean;
          /** The user IDs assigned to the project. */
          users?: Array<number>;
          /** The billing configuration returned by Everhour. */
          billing?: Record<string, unknown>;
          /** The billing rate configuration returned by Everhour. */
          rate?: Record<string, unknown>;
          /** The budget configuration returned by Everhour. */
          budget?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Everhour task by its task ID. */
    "everhour.get_task": {
      input: {
        /**
         * The Everhour task ID to retrieve.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** An Everhour task record. */
        task: {
          /**
           * The Everhour task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Everhour task name.
           * @minLength 1
           */
          name: string;
          /** The Everhour project IDs linked to the task. */
          projects: Array<string>;
          /** The numeric Everhour section ID. */
          section?: number;
          /** The labels assigned to the task. */
          labels?: Array<string>;
          /** The task position inside its project or section. */
          position?: number;
          /**
           * The task description.
           * @minLength 1
           */
          description?: string;
          /**
           * The task due timestamp string returned by Everhour.
           * @minLength 1
           */
          dueAt?: string;
          /** The Everhour task status. */
          status?: "open" | "closed";
          /** The tracked time summary returned by Everhour. */
          time?: Record<string, unknown>;
          /** The estimate summary returned by Everhour. */
          estimate?: Record<string, unknown>;
          /** The custom attribute values returned by Everhour. */
          attributes?: Record<string, string>;
          /** The numeric metrics returned by Everhour. */
          metrics?: Record<string, number>;
          /** Whether the task is marked as unbillable. */
          unbillable?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List the tasks in one Everhour project with optional paging and search filters. */
    "everhour.list_project_tasks": {
      input: {
        /**
         * The Everhour project ID whose tasks should be listed.
         * @minLength 1
         */
        projectId: string;
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Filter tasks by task name text.
         * @minLength 1
         */
        query?: string;
        /** Whether closed tasks should be excluded from the response. */
        excludeClosed?: boolean;
      };
      output: {
        /** The Everhour tasks returned for the requested project. */
        tasks: Array<{
          /**
           * The Everhour task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Everhour task name.
           * @minLength 1
           */
          name: string;
          /** The Everhour project IDs linked to the task. */
          projects: Array<string>;
          /** The numeric Everhour section ID. */
          section?: number;
          /** The labels assigned to the task. */
          labels?: Array<string>;
          /** The task position inside its project or section. */
          position?: number;
          /**
           * The task description.
           * @minLength 1
           */
          description?: string;
          /**
           * The task due timestamp string returned by Everhour.
           * @minLength 1
           */
          dueAt?: string;
          /** The Everhour task status. */
          status?: "open" | "closed";
          /** The tracked time summary returned by Everhour. */
          time?: Record<string, unknown>;
          /** The estimate summary returned by Everhour. */
          estimate?: Record<string, unknown>;
          /** The custom attribute values returned by Everhour. */
          attributes?: Record<string, string>;
          /** The numeric metrics returned by Everhour. */
          metrics?: Record<string, number>;
          /** Whether the task is marked as unbillable. */
          unbillable?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Everhour projects with optional text, platform, and limit filters. */
    "everhour.list_projects": {
      input: {
        /**
         * Filter projects by project name text.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The Everhour platform slug used to filter integration-backed projects.
         * @minLength 1
         */
        platform?: string;
      };
      output: {
        /** The Everhour projects returned for the request. */
        projects: Array<{
          /**
           * The Everhour project ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Everhour project name.
           * @minLength 1
           */
          name: string;
          /**
           * The upstream workspace ID associated with the project.
           * @minLength 1
           */
          workspaceId?: string;
          /**
           * The upstream workspace name associated with the project.
           * @minLength 1
           */
          workspaceName?: string;
          /** The numeric Everhour client ID. */
          client?: number;
          /** The Everhour project type. */
          type?: "board" | "list";
          /** Whether the project is marked as a favorite. */
          favorite?: boolean;
          /** The user IDs assigned to the project. */
          users?: Array<number>;
          /** The billing configuration returned by Everhour. */
          billing?: Record<string, unknown>;
          /** The billing rate configuration returned by Everhour. */
          rate?: Record<string, unknown>;
          /** The budget configuration returned by Everhour. */
          budget?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Everhour team time records with optional date range and paging filters. */
    "everhour.list_time_records": {
      input: {
        /**
         * An ISO 8601 date string in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * An ISO 8601 date string in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The Everhour time records returned for the request. */
        timeRecords: Array<{
          /**
           * The Everhour time record ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The tracked duration in seconds. */
          time: number;
          /**
           * The Everhour user ID.
           * @exclusiveMinimum 0
           */
          user: number;
          /**
           * An ISO 8601 date string in YYYY-MM-DD format.
           * @format date
           */
          date: string;
          /** An Everhour task record. */
          task?: {
            /**
             * The Everhour task ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Everhour task name.
             * @minLength 1
             */
            name: string;
            /** The Everhour project IDs linked to the task. */
            projects: Array<string>;
            /** The numeric Everhour section ID. */
            section?: number;
            /** The labels assigned to the task. */
            labels?: Array<string>;
            /** The task position inside its project or section. */
            position?: number;
            /**
             * The task description.
             * @minLength 1
             */
            description?: string;
            /**
             * The task due timestamp string returned by Everhour.
             * @minLength 1
             */
            dueAt?: string;
            /** The Everhour task status. */
            status?: "open" | "closed";
            /** The tracked time summary returned by Everhour. */
            time?: Record<string, unknown>;
            /** The estimate summary returned by Everhour. */
            estimate?: Record<string, unknown>;
            /** The custom attribute values returned by Everhour. */
            attributes?: Record<string, string>;
            /** The numeric metrics returned by Everhour. */
            metrics?: Record<string, number>;
            /** Whether the task is marked as unbillable. */
            unbillable?: boolean;
            [key: string]: unknown;
          };
          /** Whether the time record is locked. */
          isLocked?: boolean;
          /** Whether the time record is already invoiced. */
          isInvoiced?: boolean;
          /**
           * The comment saved on the time record.
           * @minLength 1
           */
          comment?: string;
          /** The change history entries returned by Everhour. */
          history?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the users in the Everhour team that the API key can access. */
    "everhour.list_users": {
      input: Record<string, never>;
      output: {
        /** The Everhour users returned for the current team. */
        users: Array<{
          /**
           * The Everhour user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The Everhour user name.
           * @minLength 1
           */
          name: string;
          /**
           * The headline shown on the user profile.
           * @minLength 1
           */
          headline?: string;
          /**
           * The avatar URL returned by Everhour.
           * @minLength 1
           */
          avatarUrl?: string;
          /** The Everhour user role. */
          role: "admin" | "supervisor" | "member";
          /** The Everhour user status. */
          status: "active" | "invited" | "pending" | "removed";
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Everhour tasks across accessible projects. */
    "everhour.search_tasks": {
      input: {
        /**
         * Task name text to search for.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /** Whether closed tasks should be included in the search results. */
        searchInClosed?: boolean;
      };
      output: {
        /** The Everhour tasks matching the search query. */
        tasks: Array<{
          /**
           * The Everhour task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Everhour task name.
           * @minLength 1
           */
          name: string;
          /** The Everhour project IDs linked to the task. */
          projects: Array<string>;
          /** The numeric Everhour section ID. */
          section?: number;
          /** The labels assigned to the task. */
          labels?: Array<string>;
          /** The task position inside its project or section. */
          position?: number;
          /**
           * The task description.
           * @minLength 1
           */
          description?: string;
          /**
           * The task due timestamp string returned by Everhour.
           * @minLength 1
           */
          dueAt?: string;
          /** The Everhour task status. */
          status?: "open" | "closed";
          /** The tracked time summary returned by Everhour. */
          time?: Record<string, unknown>;
          /** The estimate summary returned by Everhour. */
          estimate?: Record<string, unknown>;
          /** The custom attribute values returned by Everhour. */
          attributes?: Record<string, string>;
          /** The numeric metrics returned by Everhour. */
          metrics?: Record<string, number>;
          /** Whether the task is marked as unbillable. */
          unbillable?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Start an Everhour timer for a task with an optional user date and comment. */
    "everhour.start_timer": {
      input: {
        /**
         * The Everhour task ID to start tracking against.
         * @minLength 1
         */
        taskId: string;
        /**
         * An ISO 8601 date string in YYYY-MM-DD format.
         * @format date
         */
        userDate?: string;
        /**
         * An optional comment to save on the running timer.
         * @minLength 1
         */
        comment?: string;
      };
      output: {
        /** An Everhour timer record. */
        timer: {
          /** The Everhour timer status. */
          status: "active" | "stopped";
          /** The running duration in seconds. */
          duration?: number;
          /** The total tracked time for the timer's day in seconds. */
          today?: number;
          /**
           * The timestamp string for when the timer started.
           * @minLength 1
           */
          startedAt?: string;
          /**
           * An ISO 8601 date string in YYYY-MM-DD format.
           * @format date
           */
          userDate?: string;
          /**
           * The timer comment.
           * @minLength 1
           */
          comment?: string;
          /** An Everhour task record. */
          task?: {
            /**
             * The Everhour task ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Everhour task name.
             * @minLength 1
             */
            name: string;
            /** The Everhour project IDs linked to the task. */
            projects: Array<string>;
            /** The numeric Everhour section ID. */
            section?: number;
            /** The labels assigned to the task. */
            labels?: Array<string>;
            /** The task position inside its project or section. */
            position?: number;
            /**
             * The task description.
             * @minLength 1
             */
            description?: string;
            /**
             * The task due timestamp string returned by Everhour.
             * @minLength 1
             */
            dueAt?: string;
            /** The Everhour task status. */
            status?: "open" | "closed";
            /** The tracked time summary returned by Everhour. */
            time?: Record<string, unknown>;
            /** The estimate summary returned by Everhour. */
            estimate?: Record<string, unknown>;
            /** The custom attribute values returned by Everhour. */
            attributes?: Record<string, string>;
            /** The numeric metrics returned by Everhour. */
            metrics?: Record<string, number>;
            /** Whether the task is marked as unbillable. */
            unbillable?: boolean;
            [key: string]: unknown;
          };
          /** An Everhour user record. */
          user?: {
            /**
             * The Everhour user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Everhour user name.
             * @minLength 1
             */
            name: string;
            /**
             * The headline shown on the user profile.
             * @minLength 1
             */
            headline?: string;
            /**
             * The avatar URL returned by Everhour.
             * @minLength 1
             */
            avatarUrl?: string;
            /** The Everhour user role. */
            role: "admin" | "supervisor" | "member";
            /** The Everhour user status. */
            status: "active" | "invited" | "pending" | "removed";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Stop the current Everhour timer and return the final timer snapshot. */
    "everhour.stop_timer": {
      input: Record<string, never>;
      output: {
        /** An Everhour timer record. */
        timer: {
          /** The Everhour timer status. */
          status: "active" | "stopped";
          /** The running duration in seconds. */
          duration?: number;
          /** The total tracked time for the timer's day in seconds. */
          today?: number;
          /**
           * The timestamp string for when the timer started.
           * @minLength 1
           */
          startedAt?: string;
          /**
           * An ISO 8601 date string in YYYY-MM-DD format.
           * @format date
           */
          userDate?: string;
          /**
           * The timer comment.
           * @minLength 1
           */
          comment?: string;
          /** An Everhour task record. */
          task?: {
            /**
             * The Everhour task ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Everhour task name.
             * @minLength 1
             */
            name: string;
            /** The Everhour project IDs linked to the task. */
            projects: Array<string>;
            /** The numeric Everhour section ID. */
            section?: number;
            /** The labels assigned to the task. */
            labels?: Array<string>;
            /** The task position inside its project or section. */
            position?: number;
            /**
             * The task description.
             * @minLength 1
             */
            description?: string;
            /**
             * The task due timestamp string returned by Everhour.
             * @minLength 1
             */
            dueAt?: string;
            /** The Everhour task status. */
            status?: "open" | "closed";
            /** The tracked time summary returned by Everhour. */
            time?: Record<string, unknown>;
            /** The estimate summary returned by Everhour. */
            estimate?: Record<string, unknown>;
            /** The custom attribute values returned by Everhour. */
            attributes?: Record<string, string>;
            /** The numeric metrics returned by Everhour. */
            metrics?: Record<string, number>;
            /** Whether the task is marked as unbillable. */
            unbillable?: boolean;
            [key: string]: unknown;
          };
          /** An Everhour user record. */
          user?: {
            /**
             * The Everhour user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The Everhour user name.
             * @minLength 1
             */
            name: string;
            /**
             * The headline shown on the user profile.
             * @minLength 1
             */
            headline?: string;
            /**
             * The avatar URL returned by Everhour.
             * @minLength 1
             */
            avatarUrl?: string;
            /** The Everhour user role. */
            role: "admin" | "supervisor" | "member";
            /** The Everhour user status. */
            status: "active" | "invited" | "pending" | "removed";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
