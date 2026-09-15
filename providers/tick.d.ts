import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Tick time entry. */
    "tick.create_entry": {
      input: {
        /**
         * The work date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * The positive number of hours to record.
         * @exclusiveMinimum 0
         */
        hours: number;
        /**
         * The task receiving the time entry.
         * @minimum 1
         */
        taskId: number;
        /** Notes to record with the time entry. */
        notes?: string;
        /**
         * The user receiving the entry; ignored for non-administrators.
         * @minimum 1
         */
        userId?: number;
      };
      output: {
        /** A Tick time entry. */
        entry: {
          /** The time entry ID. */
          id?: string | number;
          /** The work date in YYYY-MM-DD format. */
          date?: string;
          /** The number of hours recorded. */
          hours?: number;
          /** Notes recorded with the time entry. */
          notes?: string;
          /**
           * The associated task ID.
           * @minimum 1
           */
          task_id?: number;
          /**
           * The associated user ID.
           * @minimum 1
           */
          user_id?: number;
          /** Whether the time entry has been billed. */
          billed?: boolean;
          /** The API URL for the time entry. */
          url?: string;
          /** When the time entry was created. */
          created_at?: string;
          /** When the time entry was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a Tick time entry. */
    "tick.delete_entry": {
      input: {
        /**
         * The time entry ID.
         * @minimum 1
         */
        entryId: number;
      };
      output: {
        /** Whether Tick accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Retrieve one Tick time entry by ID. */
    "tick.get_entry": {
      input: {
        /**
         * The time entry ID.
         * @minimum 1
         */
        entryId: number;
      };
      output: {
        /** A Tick time entry. */
        entry: {
          /** The time entry ID. */
          id?: string | number;
          /** The work date in YYYY-MM-DD format. */
          date?: string;
          /** The number of hours recorded. */
          hours?: number;
          /** Notes recorded with the time entry. */
          notes?: string;
          /**
           * The associated task ID.
           * @minimum 1
           */
          task_id?: number;
          /**
           * The associated user ID.
           * @minimum 1
           */
          user_id?: number;
          /** Whether the time entry has been billed. */
          billed?: boolean;
          /** The API URL for the time entry. */
          url?: string;
          /** When the time entry was created. */
          created_at?: string;
          /** When the time entry was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Tick clients with open projects, or include every client. */
    "tick.list_clients": {
      input: {
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /** Whether to include clients without open projects. */
        includeAll?: boolean;
      };
      output: {
        /** The returned clients. */
        clients: Array<{
          /**
           * The client ID.
           * @minimum 1
           */
          id?: number;
          /** The client name. */
          name?: string;
          /** Whether the client is archived. */
          archive?: boolean;
          /** The API URL for the client. */
          url?: string;
          /** When the client was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Tick time entries by date range or update timestamp. */
    "tick.list_entries": {
      input: {
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * Return entries created or modified after this ISO 8601 timestamp.
         * @format date-time
         */
        updatedAt?: string;
        /** Filter entries by whether their tasks are billable. */
        billable?: boolean;
        /** Filter entries by whether they have been billed. */
        billed?: boolean;
        /**
         * Filter entries by project ID.
         * @minimum 1
         */
        projectId?: number;
        /**
         * Filter entries by task ID.
         * @minimum 1
         */
        taskId?: number;
        /**
         * Filter entries by user ID.
         * @minimum 1
         */
        userId?: number;
      };
      output: {
        /** The returned time entries. */
        entries: Array<{
          /** The time entry ID. */
          id?: string | number;
          /** The work date in YYYY-MM-DD format. */
          date?: string;
          /** The number of hours recorded. */
          hours?: number;
          /** Notes recorded with the time entry. */
          notes?: string;
          /**
           * The associated task ID.
           * @minimum 1
           */
          task_id?: number;
          /**
           * The associated user ID.
           * @minimum 1
           */
          user_id?: number;
          /** Whether the time entry has been billed. */
          billed?: boolean;
          /** The API URL for the time entry. */
          url?: string;
          /** When the time entry was created. */
          created_at?: string;
          /** When the time entry was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List open or closed Tick projects. */
    "tick.list_projects": {
      input: {
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /** Whether to list closed projects instead of open projects. */
        closed?: boolean;
      };
      output: {
        /** The returned projects. */
        projects: Array<{
          /**
           * The project ID.
           * @minimum 1
           */
          id?: number;
          /** The project name. */
          name?: string;
          /** The project budget in hours. */
          budget?: number;
          /** The date the project was closed, or null if open. */
          date_closed?: string | null;
          /** Whether budget notifications are enabled. */
          notifications?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** Whether the project recurs. */
          recurring?: boolean;
          /**
           * The associated client ID.
           * @minimum 1
           */
          client_id?: number;
          /**
           * The project owner user ID.
           * @minimum 1
           */
          owner_id?: number;
          /** The API URL for the project. */
          url?: string;
          /** When the project was created. */
          created_at?: string;
          /** When the project was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List open or closed Tick tasks, optionally within one project. */
    "tick.list_tasks": {
      input: {
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The project whose tasks should be returned.
         * @minimum 1
         */
        projectId?: number;
        /** Whether to list closed tasks instead of open tasks. */
        closed?: boolean;
      };
      output: {
        /** The returned tasks. */
        tasks: Array<{
          /** The task ID. */
          id?: string | number;
          /** The task name. */
          name?: string;
          /** The task budget in hours. */
          budget?: number;
          /** The task position within its project. */
          position?: number;
          /**
           * The associated project ID.
           * @minimum 1
           */
          project_id?: number;
          /** The date the task was closed, or null if open. */
          date_closed?: string | null;
          /** Whether time on the task is billable. */
          billable?: boolean;
          /** The API URL for the task. */
          url?: string;
          /** When the task was created. */
          created_at?: string;
          /** When the task was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List active or deleted users visible to the Tick API token. */
    "tick.list_users": {
      input: {
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /** Whether to list deleted users with time entries instead of active users. */
        deleted?: boolean;
      };
      output: {
        /** The returned users. */
        users: Array<{
          /**
           * The user ID.
           * @minimum 1
           */
          id?: number;
          /** The user's first name. */
          first_name?: string;
          /** The user's last name. */
          last_name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's time zone. */
          timezone?: string;
          /** When the user was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update fields on an existing Tick time entry. */
    "tick.update_entry": {
      input: {
        /**
         * The time entry ID.
         * @minimum 1
         */
        entryId: number;
        /**
         * The replacement work date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /**
         * The replacement positive number of hours.
         * @exclusiveMinimum 0
         */
        hours?: number;
        /**
         * The replacement task ID.
         * @minimum 1
         */
        taskId?: number;
        /** The replacement notes. */
        notes?: string;
        /**
         * The replacement user ID; ignored for non-administrators.
         * @minimum 1
         */
        userId?: number;
        /** Whether the entry has been billed. */
        billed?: boolean;
      };
      output: {
        /** A Tick time entry. */
        entry: {
          /** The time entry ID. */
          id?: string | number;
          /** The work date in YYYY-MM-DD format. */
          date?: string;
          /** The number of hours recorded. */
          hours?: number;
          /** Notes recorded with the time entry. */
          notes?: string;
          /**
           * The associated task ID.
           * @minimum 1
           */
          task_id?: number;
          /**
           * The associated user ID.
           * @minimum 1
           */
          user_id?: number;
          /** Whether the time entry has been billed. */
          billed?: boolean;
          /** The API URL for the time entry. */
          url?: string;
          /** When the time entry was created. */
          created_at?: string;
          /** When the time entry was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
