import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Harvest time entry. */
    "harvest.create_time_entry": {
      input: {
        /**
         * The user ID to assign when the token may create entries for other users.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * The Harvest project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Harvest task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
        /**
         * The date when the time entry was spent.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        spentDate: string;
        /**
         * The number of decimal hours to record when tracking by duration.
         * @minimum 0
         */
        hours?: number;
        /**
         * The start time to record when tracking by start and end time.
         * @minLength 1
         */
        startedTime?: string;
        /**
         * The end time to record when tracking by start and end time.
         * @minLength 1
         */
        endedTime?: string;
        /** Notes attached to the time entry. */
        notes?: string;
        /** The external reference object attached to the time entry. */
        externalReference?: Record<string, unknown>;
      };
      output: {
        /** The Harvest time entry returned by the request. */
        time_entry: {
          /**
           * The Harvest time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The date the time entry was spent.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          spent_date?: string;
          /** The user who owns the time entry. */
          user?: {
            /**
             * The Harvest user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /** The email address of the user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The client associated with the time entry. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          } | null;
          /** The project associated with the time entry. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the time entry. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The user assignment summary associated with the time entry. */
          user_assignment?: Record<string, unknown>;
          /** The external reference attached to the time entry. */
          external_reference?: Record<string, unknown> | null;
          /** The invoice summary attached to the time entry. */
          invoice?: Record<string, unknown> | null;
          /** The number of decimal hours tracked in the time entry. */
          hours?: number;
          /** The number of hours tracked before the timer was last started. */
          hours_without_timer?: number;
          /** The rounded number of hours used for billing. */
          rounded_hours?: number;
          /** Notes attached to the time entry. */
          notes?: string | null;
          /**
           * When the time entry was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the time entry was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** Whether the time entry is locked. */
          is_locked?: boolean;
          /** The reason the time entry is locked. */
          locked_reason?: string | null;
          /** Whether the time entry is closed. */
          is_closed?: boolean;
          /** Whether the time entry has been billed. */
          is_billed?: boolean;
          /** When the running timer was started. */
          timer_started_at?: string | null;
          /** The start time stored on the time entry. */
          started_time?: string | null;
          /** The end time stored on the time entry. */
          ended_time?: string | null;
          /** Whether the time entry is currently running. */
          is_running?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Harvest time entry by ID. */
    "harvest.delete_time_entry": {
      input: {
        /**
         * The Harvest time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** Whether Harvest deleted the requested time entry. */
        deleted: boolean;
      };
    };
    /** Get a single Harvest client by ID. */
    "harvest.get_client": {
      input: {
        /**
         * The Harvest client ID.
         * @exclusiveMinimum 0
         */
        clientId: number;
      };
      output: {
        /** The Harvest client returned by the request. */
        client: {
          /**
           * The Harvest client ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client name. */
          name: string;
          /** Whether the client is active. */
          is_active: boolean;
          /** The address configured for the client. */
          address?: string | null;
          /** The statement key associated with the client. */
          statement_key?: string;
          /**
           * When the client was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the client was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** The currency code associated with the client. */
          currency?: string;
          /** The cache version returned by Harvest. */
          cache_version?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current authenticated Harvest user. */
    "harvest.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Harvest user. */
        user: {
          /**
           * The Harvest user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The first name of the user. */
          first_name: string;
          /** The last name of the user. */
          last_name: string;
          /** The email address of the user. */
          email: string;
          /** The telephone number of the user. */
          telephone?: string;
          /** The timezone configured for the user. */
          timezone?: string;
          /** Whether the user has access to all future projects. */
          has_access_to_all_future_projects?: boolean;
          /** Whether the user is a contractor. */
          is_contractor?: boolean;
          /** Whether the user is an administrator. */
          is_admin?: boolean;
          /** Whether the user is active. */
          is_active?: boolean;
          /**
           * When the user was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the user was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** The weekly capacity value returned by Harvest. */
          weekly_capacity?: number;
          /** The default hourly rate assigned to the user. */
          default_hourly_rate?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Harvest project by ID. */
    "harvest.get_project": {
      input: {
        /**
         * The Harvest project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** The Harvest project returned by the request. */
        project: {
          /**
           * The Harvest project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The project name. */
          name: string;
          /** The project code. */
          code?: string | null;
          /** Whether the project is active. */
          is_active: boolean;
          /** Whether the project is billable. */
          is_billable?: boolean;
          /** How the project is invoiced. */
          bill_by?: string;
          /** The project budget when budgeting by time. */
          budget?: number | null;
          /** How the project budget is measured. */
          budget_by?: string;
          /** Whether the project budget resets every month. */
          budget_is_monthly?: boolean;
          /** Whether managers are notified when the project exceeds budget. */
          notify_when_over_budget?: boolean;
          /** The percentage that triggers an over-budget notification. */
          over_budget_notification_percentage?: number | null;
          /** The date when an over-budget notification was last sent. */
          over_budget_notification_date?: string | null;
          /** Whether the project budget is visible to all users. */
          show_budget_to_all?: boolean;
          /**
           * When the project was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the project was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** The project start date. */
          starts_on?: string | null;
          /** The project end date. */
          ends_on?: string | null;
          /** Notes stored on the project. */
          notes?: string | null;
          /** The monetary budget configured for the project. */
          cost_budget?: number | null;
          /** Whether expense totals count toward the project cost budget. */
          cost_budget_include_expenses?: boolean;
          /** The hourly rate configured on the project. */
          hourly_rate?: number | null;
          /** The fixed fee configured on the project. */
          fee?: number | null;
          /** The client associated with the project. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Harvest task by ID. */
    "harvest.get_task": {
      input: {
        /**
         * The Harvest task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
      output: {
        /** The Harvest task returned by the request. */
        task: {
          /**
           * The Harvest task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The task name. */
          name: string;
          /** Whether the task is billable by default. */
          billable_by_default?: boolean;
          /** The default hourly rate used when the task is added to a project. */
          default_hourly_rate?: number | null;
          /** Whether the task is added to future projects by default. */
          is_default?: boolean;
          /** Whether the task is active. */
          is_active?: boolean;
          /**
           * When the task was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the task was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Harvest time entry by ID. */
    "harvest.get_time_entry": {
      input: {
        /**
         * The Harvest time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** The Harvest time entry returned by the request. */
        time_entry: {
          /**
           * The Harvest time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The date the time entry was spent.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          spent_date?: string;
          /** The user who owns the time entry. */
          user?: {
            /**
             * The Harvest user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /** The email address of the user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The client associated with the time entry. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          } | null;
          /** The project associated with the time entry. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the time entry. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The user assignment summary associated with the time entry. */
          user_assignment?: Record<string, unknown>;
          /** The external reference attached to the time entry. */
          external_reference?: Record<string, unknown> | null;
          /** The invoice summary attached to the time entry. */
          invoice?: Record<string, unknown> | null;
          /** The number of decimal hours tracked in the time entry. */
          hours?: number;
          /** The number of hours tracked before the timer was last started. */
          hours_without_timer?: number;
          /** The rounded number of hours used for billing. */
          rounded_hours?: number;
          /** Notes attached to the time entry. */
          notes?: string | null;
          /**
           * When the time entry was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the time entry was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** Whether the time entry is locked. */
          is_locked?: boolean;
          /** The reason the time entry is locked. */
          locked_reason?: string | null;
          /** Whether the time entry is closed. */
          is_closed?: boolean;
          /** Whether the time entry has been billed. */
          is_billed?: boolean;
          /** When the running timer was started. */
          timer_started_at?: string | null;
          /** The start time stored on the time entry. */
          started_time?: string | null;
          /** The end time stored on the time entry. */
          ended_time?: string | null;
          /** Whether the time entry is currently running. */
          is_running?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List clients available in the connected Harvest account. */
    "harvest.list_clients": {
      input: {
        /** Whether to return only active or only inactive clients. */
        isActive?: boolean;
        /**
         * Only return clients updated after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedSince?: string;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 2000
         */
        perPage?: number;
      };
      output: {
        /** The clients returned by Harvest. */
        clients: Array<{
          /**
           * The Harvest client ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The client name. */
          name: string;
          /** Whether the client is active. */
          is_active: boolean;
          /** The address configured for the client. */
          address?: string | null;
          /** The statement key associated with the client. */
          statement_key?: string;
          /**
           * When the client was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the client was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** The currency code associated with the client. */
          currency?: string;
          /** The cache version returned by Harvest. */
          cache_version?: number;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the client list. */
        pagination: {
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          per_page: number;
          /**
           * The total number of pages available.
           * @minimum 1
           */
          total_pages: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total_entries: number;
          /** The next page number when another page is available. */
          next_page: number | null;
          /** The previous page number when a prior page is available. */
          previous_page: number | null;
          /**
           * The current page number.
           * @minimum 1
           */
          page: number;
          /** Pagination links returned by Harvest. */
          links?: {
            /** The URL for the first page of results. */
            first?: string | null;
            /** The URL for the next page of results. */
            next?: string | null;
            /** The URL for the previous page of results. */
            previous?: string | null;
            /** The URL for the last page of results. */
            last?: string | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** List task assignments for a specific Harvest project. */
    "harvest.list_project_task_assignments": {
      input: {
        /**
         * The Harvest project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** Whether to return only active or only inactive task assignments for the project. */
        isActive?: boolean;
        /**
         * Only return task assignments updated after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedSince?: string;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 2000
         */
        perPage?: number;
      };
      output: {
        /** The project task assignments returned by Harvest. */
        task_assignments: Array<{
          /**
           * The Harvest task assignment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Whether the task assignment is billable. */
          billable?: boolean;
          /** Whether the task assignment is active. */
          is_active?: boolean;
          /**
           * When the task assignment was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the task assignment was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** The hourly rate used when the project bills by task. */
          hourly_rate?: number | null;
          /** The budget used when the project budgets by task. */
          budget?: number | null;
          /** The project associated with the task assignment. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the task assignment. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the task assignment list. */
        pagination: {
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          per_page: number;
          /**
           * The total number of pages available.
           * @minimum 1
           */
          total_pages: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total_entries: number;
          /** The next page number when another page is available. */
          next_page: number | null;
          /** The previous page number when a prior page is available. */
          previous_page: number | null;
          /**
           * The current page number.
           * @minimum 1
           */
          page: number;
          /** Pagination links returned by Harvest. */
          links?: {
            /** The URL for the first page of results. */
            first?: string | null;
            /** The URL for the next page of results. */
            next?: string | null;
            /** The URL for the previous page of results. */
            previous?: string | null;
            /** The URL for the last page of results. */
            last?: string | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** List projects available in the connected Harvest account. */
    "harvest.list_projects": {
      input: {
        /** Whether to return only active or only inactive projects. */
        isActive?: boolean;
        /**
         * Only return projects associated with this client ID.
         * @exclusiveMinimum 0
         */
        clientId?: number;
        /**
         * Only return projects updated after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedSince?: string;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 2000
         */
        perPage?: number;
      };
      output: {
        /** The projects returned by Harvest. */
        projects: Array<{
          /**
           * The Harvest project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The project name. */
          name: string;
          /** The project code. */
          code?: string | null;
          /** Whether the project is active. */
          is_active: boolean;
          /** Whether the project is billable. */
          is_billable?: boolean;
          /** How the project is invoiced. */
          bill_by?: string;
          /** The project budget when budgeting by time. */
          budget?: number | null;
          /** How the project budget is measured. */
          budget_by?: string;
          /** Whether the project budget resets every month. */
          budget_is_monthly?: boolean;
          /** Whether managers are notified when the project exceeds budget. */
          notify_when_over_budget?: boolean;
          /** The percentage that triggers an over-budget notification. */
          over_budget_notification_percentage?: number | null;
          /** The date when an over-budget notification was last sent. */
          over_budget_notification_date?: string | null;
          /** Whether the project budget is visible to all users. */
          show_budget_to_all?: boolean;
          /**
           * When the project was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the project was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** The project start date. */
          starts_on?: string | null;
          /** The project end date. */
          ends_on?: string | null;
          /** Notes stored on the project. */
          notes?: string | null;
          /** The monetary budget configured for the project. */
          cost_budget?: number | null;
          /** Whether expense totals count toward the project cost budget. */
          cost_budget_include_expenses?: boolean;
          /** The hourly rate configured on the project. */
          hourly_rate?: number | null;
          /** The fixed fee configured on the project. */
          fee?: number | null;
          /** The client associated with the project. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the project list. */
        pagination: {
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          per_page: number;
          /**
           * The total number of pages available.
           * @minimum 1
           */
          total_pages: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total_entries: number;
          /** The next page number when another page is available. */
          next_page: number | null;
          /** The previous page number when a prior page is available. */
          previous_page: number | null;
          /**
           * The current page number.
           * @minimum 1
           */
          page: number;
          /** Pagination links returned by Harvest. */
          links?: {
            /** The URL for the first page of results. */
            first?: string | null;
            /** The URL for the next page of results. */
            next?: string | null;
            /** The URL for the previous page of results. */
            previous?: string | null;
            /** The URL for the last page of results. */
            last?: string | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** List tasks available in the connected Harvest account. */
    "harvest.list_tasks": {
      input: {
        /** Whether to return only active or only inactive tasks. */
        isActive?: boolean;
        /**
         * Only return tasks updated after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedSince?: string;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 2000
         */
        perPage?: number;
      };
      output: {
        /** The tasks returned by Harvest. */
        tasks: Array<{
          /**
           * The Harvest task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The task name. */
          name: string;
          /** Whether the task is billable by default. */
          billable_by_default?: boolean;
          /** The default hourly rate used when the task is added to a project. */
          default_hourly_rate?: number | null;
          /** Whether the task is added to future projects by default. */
          is_default?: boolean;
          /** Whether the task is active. */
          is_active?: boolean;
          /**
           * When the task was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the task was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the task list. */
        pagination: {
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          per_page: number;
          /**
           * The total number of pages available.
           * @minimum 1
           */
          total_pages: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total_entries: number;
          /** The next page number when another page is available. */
          next_page: number | null;
          /** The previous page number when a prior page is available. */
          previous_page: number | null;
          /**
           * The current page number.
           * @minimum 1
           */
          page: number;
          /** Pagination links returned by Harvest. */
          links?: {
            /** The URL for the first page of results. */
            first?: string | null;
            /** The URL for the next page of results. */
            next?: string | null;
            /** The URL for the previous page of results. */
            previous?: string | null;
            /** The URL for the last page of results. */
            last?: string | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** List Harvest time entries with optional resource and date filters. */
    "harvest.list_time_entries": {
      input: {
        /**
         * Only return time entries owned by this user ID.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * Only return time entries associated with this client ID.
         * @exclusiveMinimum 0
         */
        clientId?: number;
        /**
         * Only return time entries associated with this project ID.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * Only return time entries associated with this task ID.
         * @exclusiveMinimum 0
         */
        taskId?: number;
        /**
         * Only return time entries on or after this date.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from?: string;
        /**
         * Only return time entries on or before this date.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to?: string;
        /** Whether to return only running or stopped time entries. */
        isRunning?: boolean;
        /**
         * Only return time entries updated after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedSince?: string;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 2000
         */
        perPage?: number;
      };
      output: {
        /** The time entries returned by Harvest. */
        time_entries: Array<{
          /**
           * The Harvest time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The date the time entry was spent.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          spent_date?: string;
          /** The user who owns the time entry. */
          user?: {
            /**
             * The Harvest user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /** The email address of the user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The client associated with the time entry. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          } | null;
          /** The project associated with the time entry. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the time entry. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The user assignment summary associated with the time entry. */
          user_assignment?: Record<string, unknown>;
          /** The external reference attached to the time entry. */
          external_reference?: Record<string, unknown> | null;
          /** The invoice summary attached to the time entry. */
          invoice?: Record<string, unknown> | null;
          /** The number of decimal hours tracked in the time entry. */
          hours?: number;
          /** The number of hours tracked before the timer was last started. */
          hours_without_timer?: number;
          /** The rounded number of hours used for billing. */
          rounded_hours?: number;
          /** Notes attached to the time entry. */
          notes?: string | null;
          /**
           * When the time entry was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the time entry was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** Whether the time entry is locked. */
          is_locked?: boolean;
          /** The reason the time entry is locked. */
          locked_reason?: string | null;
          /** Whether the time entry is closed. */
          is_closed?: boolean;
          /** Whether the time entry has been billed. */
          is_billed?: boolean;
          /** When the running timer was started. */
          timer_started_at?: string | null;
          /** The start time stored on the time entry. */
          started_time?: string | null;
          /** The end time stored on the time entry. */
          ended_time?: string | null;
          /** Whether the time entry is currently running. */
          is_running?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the time entry list. */
        pagination: {
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          per_page: number;
          /**
           * The total number of pages available.
           * @minimum 1
           */
          total_pages: number;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total_entries: number;
          /** The next page number when another page is available. */
          next_page: number | null;
          /** The previous page number when a prior page is available. */
          previous_page: number | null;
          /**
           * The current page number.
           * @minimum 1
           */
          page: number;
          /** Pagination links returned by Harvest. */
          links?: {
            /** The URL for the first page of results. */
            first?: string | null;
            /** The URL for the next page of results. */
            next?: string | null;
            /** The URL for the previous page of results. */
            previous?: string | null;
            /** The URL for the last page of results. */
            last?: string | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** Restart a stopped Harvest time entry. */
    "harvest.restart_time_entry": {
      input: {
        /**
         * The Harvest time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** The Harvest time entry returned by the request. */
        time_entry: {
          /**
           * The Harvest time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The date the time entry was spent.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          spent_date?: string;
          /** The user who owns the time entry. */
          user?: {
            /**
             * The Harvest user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /** The email address of the user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The client associated with the time entry. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          } | null;
          /** The project associated with the time entry. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the time entry. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The user assignment summary associated with the time entry. */
          user_assignment?: Record<string, unknown>;
          /** The external reference attached to the time entry. */
          external_reference?: Record<string, unknown> | null;
          /** The invoice summary attached to the time entry. */
          invoice?: Record<string, unknown> | null;
          /** The number of decimal hours tracked in the time entry. */
          hours?: number;
          /** The number of hours tracked before the timer was last started. */
          hours_without_timer?: number;
          /** The rounded number of hours used for billing. */
          rounded_hours?: number;
          /** Notes attached to the time entry. */
          notes?: string | null;
          /**
           * When the time entry was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the time entry was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** Whether the time entry is locked. */
          is_locked?: boolean;
          /** The reason the time entry is locked. */
          locked_reason?: string | null;
          /** Whether the time entry is closed. */
          is_closed?: boolean;
          /** Whether the time entry has been billed. */
          is_billed?: boolean;
          /** When the running timer was started. */
          timer_started_at?: string | null;
          /** The start time stored on the time entry. */
          started_time?: string | null;
          /** The end time stored on the time entry. */
          ended_time?: string | null;
          /** Whether the time entry is currently running. */
          is_running?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Stop a running Harvest time entry. */
    "harvest.stop_time_entry": {
      input: {
        /**
         * The Harvest time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** The Harvest time entry returned by the request. */
        time_entry: {
          /**
           * The Harvest time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The date the time entry was spent.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          spent_date?: string;
          /** The user who owns the time entry. */
          user?: {
            /**
             * The Harvest user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /** The email address of the user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The client associated with the time entry. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          } | null;
          /** The project associated with the time entry. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the time entry. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The user assignment summary associated with the time entry. */
          user_assignment?: Record<string, unknown>;
          /** The external reference attached to the time entry. */
          external_reference?: Record<string, unknown> | null;
          /** The invoice summary attached to the time entry. */
          invoice?: Record<string, unknown> | null;
          /** The number of decimal hours tracked in the time entry. */
          hours?: number;
          /** The number of hours tracked before the timer was last started. */
          hours_without_timer?: number;
          /** The rounded number of hours used for billing. */
          rounded_hours?: number;
          /** Notes attached to the time entry. */
          notes?: string | null;
          /**
           * When the time entry was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the time entry was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** Whether the time entry is locked. */
          is_locked?: boolean;
          /** The reason the time entry is locked. */
          locked_reason?: string | null;
          /** Whether the time entry is closed. */
          is_closed?: boolean;
          /** Whether the time entry has been billed. */
          is_billed?: boolean;
          /** When the running timer was started. */
          timer_started_at?: string | null;
          /** The start time stored on the time entry. */
          started_time?: string | null;
          /** The end time stored on the time entry. */
          ended_time?: string | null;
          /** Whether the time entry is currently running. */
          is_running?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Harvest time entry. */
    "harvest.update_time_entry": {
      input: {
        /**
         * The Harvest time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
        /**
         * The project ID to associate with the time entry.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The task ID to associate with the time entry.
         * @exclusiveMinimum 0
         */
        taskId?: number;
        /**
         * The date when the time entry was spent.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        spentDate?: string;
        /**
         * The number of decimal hours tracked in the time entry.
         * @minimum 0
         */
        hours?: number;
        /**
         * The updated start time for the time entry.
         * @minLength 1
         */
        startedTime?: string;
        /**
         * The updated end time for the time entry.
         * @minLength 1
         */
        endedTime?: string;
        /** The updated notes for the time entry. */
        notes?: string;
        /** The external reference object attached to the time entry. */
        externalReference?: Record<string, unknown>;
      };
      output: {
        /** The Harvest time entry returned by the request. */
        time_entry: {
          /**
           * The Harvest time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The date the time entry was spent.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          spent_date?: string;
          /** The user who owns the time entry. */
          user?: {
            /**
             * The Harvest user ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /** The email address of the user. */
            email?: string;
            [key: string]: unknown;
          };
          /** The client associated with the time entry. */
          client?: {
            /**
             * The Harvest client ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The client name. */
            name?: string;
            /** The currency code associated with the client. */
            currency?: string;
            [key: string]: unknown;
          } | null;
          /** The project associated with the time entry. */
          project?: {
            /**
             * The Harvest project ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The project name. */
            name?: string;
            /** The project code. */
            code?: string | null;
            [key: string]: unknown;
          };
          /** The task associated with the time entry. */
          task?: {
            /**
             * The Harvest task ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The task name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The user assignment summary associated with the time entry. */
          user_assignment?: Record<string, unknown>;
          /** The external reference attached to the time entry. */
          external_reference?: Record<string, unknown> | null;
          /** The invoice summary attached to the time entry. */
          invoice?: Record<string, unknown> | null;
          /** The number of decimal hours tracked in the time entry. */
          hours?: number;
          /** The number of hours tracked before the timer was last started. */
          hours_without_timer?: number;
          /** The rounded number of hours used for billing. */
          rounded_hours?: number;
          /** Notes attached to the time entry. */
          notes?: string | null;
          /**
           * When the time entry was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          created_at?: string;
          /**
           * When the time entry was last updated.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          updated_at?: string;
          /** Whether the time entry is locked. */
          is_locked?: boolean;
          /** The reason the time entry is locked. */
          locked_reason?: string | null;
          /** Whether the time entry is closed. */
          is_closed?: boolean;
          /** Whether the time entry has been billed. */
          is_billed?: boolean;
          /** When the running timer was started. */
          timer_started_at?: string | null;
          /** The start time stored on the time entry. */
          started_time?: string | null;
          /** The end time stored on the time entry. */
          ended_time?: string | null;
          /** Whether the time entry is currently running. */
          is_running?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
