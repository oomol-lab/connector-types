import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Toggl Track project in a workspace. */
    "toggl.create_project": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** Whether the project should be active. */
        active?: boolean;
        /** Whether the project should be billable. */
        billable?: boolean;
        /**
         * The client ID to associate with the project.
         * @exclusiveMinimum 0
         */
        clientId?: number;
        /**
         * The client name to associate with the project.
         * @minLength 1
         */
        clientName?: string;
        /**
         * The hex color string used for the project.
         * @minLength 1
         */
        color?: string;
        /**
         * The currency code stored on the project.
         * @minLength 1
         */
        currency?: string;
        /** Whether the project should be private. */
        isPrivate?: boolean;
        /** Whether the project should be shared. */
        isShared?: boolean;
        /** The hourly rate stored on the project. */
        rate?: number;
        /**
         * The rate change mode stored on the project.
         * @minLength 1
         */
        rateChangeMode?: string;
        /**
         * The project start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The project end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
        /**
         * The estimated project duration in hours.
         * @minimum 0
         */
        estimatedHours?: number;
        /** Whether the project should be marked as a template. */
        template?: boolean;
        /**
         * The template ID used when creating a project from a template.
         * @exclusiveMinimum 0
         */
        templateId?: number;
      };
      output: {
        /** The newly created project returned by Toggl Track. */
        project: {
          /**
           * The Toggl Track project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the project.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project name. */
          name?: string;
          /** Whether the project is active. */
          active?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The color assigned to the project. */
          color?: string;
          /** The associated client ID. */
          client_id?: number | null;
          /** The associated client name. */
          client_name?: string | null;
          /** The project currency. */
          currency?: string | null;
          /** Whether the project is private. */
          is_private?: boolean;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** The project start date. */
          start_date?: string | null;
          /** The project end date. */
          end_date?: string | null;
          /** The hourly rate configured for the project. */
          rate?: number | null;
          /** The project status returned by Toggl Track. */
          status?: string;
          /** Whether the project is a template. */
          template?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a new Toggl Track tag in a workspace. */
    "toggl.create_tag": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The newly created tag returned by Toggl Track. */
        tag: {
          /**
           * The Toggl Track tag ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the tag.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /** The tag name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a new Toggl Track task inside a project. */
    "toggl.create_task": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The task name.
         * @minLength 1
         */
        name: string;
        /** Whether the task should be active. */
        active?: boolean;
        /**
         * The estimated task duration in seconds.
         * @minimum 0
         */
        estimatedSeconds?: number;
        /**
         * The external reference stored on the task.
         * @minLength 1
         */
        externalReference?: string;
        /**
         * The user ID assigned to the task.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** The newly created task returned by Toggl Track. */
        task: {
          /**
           * The Toggl Track task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the task.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The project ID that owns the task.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The user ID assigned to the task. */
          user_id?: number | null;
          /** The task name. */
          name?: string;
          /** Whether the task is active. */
          active?: boolean;
          /** The estimated task duration in seconds. */
          estimated_seconds?: number | null;
          /** The external reference stored on the task. */
          external_reference?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a new Toggl Track time entry in a workspace. */
    "toggl.create_time_entry": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /** Whether the time entry should be billable. */
        billable?: boolean;
        /**
         * The client identifier stored on the time entry.
         * @minLength 1
         */
        createdWith?: string;
        /** The time entry description. */
        description?: string;
        /**
         * The time entry duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The project ID associated with the time entry.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The time entry start timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        start: string;
        /**
         * The date part used together with start when creating the time entry.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The time entry stop timestamp. Omit it to create a running timer.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        stop?: string;
        /**
         * The tag IDs attached to the time entry.
         * @minItems 1
         */
        tagIds?: Array<number>;
        /**
         * The tag names attached to the time entry.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The task ID associated with the time entry.
         * @exclusiveMinimum 0
         */
        taskId?: number;
        /**
         * The user ID that should own the time entry.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** The newly created time entry returned by Toggl Track. */
        time_entry: {
          /**
           * The Toggl Track time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project ID associated with the time entry. */
          project_id?: number | null;
          /** The legacy project ID alias returned by Toggl. */
          pid?: number | null;
          /** The task ID associated with the time entry. */
          task_id?: number | null;
          /** The legacy task ID alias returned by Toggl. */
          tid?: number | null;
          /**
           * The user ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The legacy user ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          uid?: number;
          /** The time entry description. */
          description?: string | null;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /**
           * The time entry start timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          start?: string;
          /** The time entry stop timestamp, if the entry has stopped. */
          stop?: string | null;
          /** The time entry duration in seconds. Running entries use a negative value. */
          duration?: number;
          /** The client identifier stored on the time entry. */
          created_with?: string | null;
          /** The tag IDs attached to the time entry. */
          tag_ids?: Array<number> | null;
          /** The tag names attached to the time entry. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Toggl Track project by ID. */
    "toggl.delete_project": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** Whether Toggl Track deleted the requested project. */
        deleted: boolean;
      };
    };
    /** Delete a Toggl Track tag by ID. */
    "toggl.delete_tag": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track tag ID.
         * @exclusiveMinimum 0
         */
        tagId: number;
      };
      output: {
        /** Whether Toggl Track deleted the requested tag. */
        deleted: boolean;
      };
    };
    /** Delete a Toggl Track task by ID. */
    "toggl.delete_task": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Toggl Track task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
      output: {
        /** Whether Toggl Track deleted the requested task. */
        deleted: boolean;
      };
    };
    /** Delete a Toggl Track time entry by ID. */
    "toggl.delete_time_entry": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** Whether Toggl Track deleted the requested time entry. */
        deleted: boolean;
      };
    };
    /** Get the current running Toggl Track time entry, if one exists. */
    "toggl.get_current_time_entry": {
      input: Record<string, never>;
      output: {
        /** The current running time entry, or null if there is none. */
        time_entry: {
          /**
           * The Toggl Track time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project ID associated with the time entry. */
          project_id?: number | null;
          /** The legacy project ID alias returned by Toggl. */
          pid?: number | null;
          /** The task ID associated with the time entry. */
          task_id?: number | null;
          /** The legacy task ID alias returned by Toggl. */
          tid?: number | null;
          /**
           * The user ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The legacy user ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          uid?: number;
          /** The time entry description. */
          description?: string | null;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /**
           * The time entry start timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          start?: string;
          /** The time entry stop timestamp, if the entry has stopped. */
          stop?: string | null;
          /** The time entry duration in seconds. Running entries use a negative value. */
          duration?: number;
          /** The client identifier stored on the time entry. */
          created_with?: string | null;
          /** The tag IDs attached to the time entry. */
          tag_ids?: Array<number> | null;
          /** The tag names attached to the time entry. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get the currently authenticated Toggl Track user. */
    "toggl.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Toggl Track user. */
        user: {
          /**
           * The Toggl Track user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The user's email address.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email?: string;
          /** The user's full name. */
          fullname?: string;
          /** The user's configured timezone. */
          timezone?: string;
          /** The numeric beginning-of-week setting returned by Toggl Track. */
          beginning_of_week?: number;
          /**
           * The default workspace ID returned for the user.
           * @exclusiveMinimum 0
           */
          default_workspace_id?: number;
          /** The organization ID returned for the user. */
          organization_id?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Toggl Track project by ID. */
    "toggl.get_project": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** The project returned by Toggl Track. */
        project: {
          /**
           * The Toggl Track project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the project.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project name. */
          name?: string;
          /** Whether the project is active. */
          active?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The color assigned to the project. */
          color?: string;
          /** The associated client ID. */
          client_id?: number | null;
          /** The associated client name. */
          client_name?: string | null;
          /** The project currency. */
          currency?: string | null;
          /** Whether the project is private. */
          is_private?: boolean;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** The project start date. */
          start_date?: string | null;
          /** The project end date. */
          end_date?: string | null;
          /** The hourly rate configured for the project. */
          rate?: number | null;
          /** The project status returned by Toggl Track. */
          status?: string;
          /** Whether the project is a template. */
          template?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Toggl Track task by ID. */
    "toggl.get_task": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Toggl Track task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
      output: {
        /** The task returned by Toggl Track. */
        task: {
          /**
           * The Toggl Track task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the task.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The project ID that owns the task.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The user ID assigned to the task. */
          user_id?: number | null;
          /** The task name. */
          name?: string;
          /** Whether the task is active. */
          active?: boolean;
          /** The estimated task duration in seconds. */
          estimated_seconds?: number | null;
          /** The external reference stored on the task. */
          external_reference?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Toggl Track time entry by ID. */
    "toggl.get_time_entry": {
      input: {
        /**
         * The Toggl Track time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** The time entry returned by Toggl Track. */
        time_entry: {
          /**
           * The Toggl Track time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project ID associated with the time entry. */
          project_id?: number | null;
          /** The legacy project ID alias returned by Toggl. */
          pid?: number | null;
          /** The task ID associated with the time entry. */
          task_id?: number | null;
          /** The legacy task ID alias returned by Toggl. */
          tid?: number | null;
          /**
           * The user ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The legacy user ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          uid?: number;
          /** The time entry description. */
          description?: string | null;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /**
           * The time entry start timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          start?: string;
          /** The time entry stop timestamp, if the entry has stopped. */
          stop?: string | null;
          /** The time entry duration in seconds. Running entries use a negative value. */
          duration?: number;
          /** The client identifier stored on the time entry. */
          created_with?: string | null;
          /** The tag IDs attached to the time entry. */
          tag_ids?: Array<number> | null;
          /** The tag names attached to the time entry. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Toggl Track workspace by ID. */
    "toggl.get_workspace": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
      };
      output: {
        /** The workspace returned by Toggl Track. */
        workspace: {
          /**
           * The Toggl Track workspace ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The workspace name. */
          name?: string;
          /** The organization ID associated with the workspace. */
          organization_id?: number;
          /** The default currency configured for the workspace. */
          default_currency?: string;
          /** Whether only admins may create projects in the workspace. */
          only_admins_may_create_projects?: boolean;
          /** Whether only admins may create tags in the workspace. */
          only_admins_may_create_tags?: boolean;
          /** Whether newly created projects are billable by default. */
          projects_billable_by_default?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List Toggl Track projects in a workspace. */
    "toggl.list_projects": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /** Whether to return only active projects or both active and inactive projects. */
        active?: boolean | "both";
        /**
         * A UNIX timestamp used to fetch changed projects since that moment.
         * @minimum 0
         */
        since?: number;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The project field used for sorting the result set.
         * @minLength 1
         */
        sortField?: string;
        /**
         * The sort direction used for ordering the project result set.
         * @minLength 1
         */
        sortOrder?: string;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * A search string used to filter projects by name.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The projects returned by Toggl Track. */
        projects: Array<{
          /**
           * The Toggl Track project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the project.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project name. */
          name?: string;
          /** Whether the project is active. */
          active?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The color assigned to the project. */
          color?: string;
          /** The associated client ID. */
          client_id?: number | null;
          /** The associated client name. */
          client_name?: string | null;
          /** The project currency. */
          currency?: string | null;
          /** Whether the project is private. */
          is_private?: boolean;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** The project start date. */
          start_date?: string | null;
          /** The project end date. */
          end_date?: string | null;
          /** The hourly rate configured for the project. */
          rate?: number | null;
          /** The project status returned by Toggl Track. */
          status?: string;
          /** Whether the project is a template. */
          template?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Toggl Track tags in a workspace. */
    "toggl.list_tags": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * A search string used to filter tags by name.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The tags returned by Toggl Track. */
        tags: Array<{
          /**
           * The Toggl Track tag ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the tag.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /** The tag name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Toggl Track tasks for a project. */
    "toggl.list_tasks": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** Whether to return only active tasks. */
        active?: boolean;
      };
      output: {
        /** The tasks returned by Toggl Track. */
        tasks: Array<{
          /**
           * The Toggl Track task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the task.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The project ID that owns the task.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The user ID assigned to the task. */
          user_id?: number | null;
          /** The task name. */
          name?: string;
          /** Whether the task is active. */
          active?: boolean;
          /** The estimated task duration in seconds. */
          estimated_seconds?: number | null;
          /** The external reference stored on the task. */
          external_reference?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Toggl Track time entries for the authenticated user. */
    "toggl.list_time_entries": {
      input: {
        /** Return time entries that start on or after this date or date-time. */
        since?: string;
        /** Return time entries that start before this date or date-time. */
        before?: string;
        /** The lower bound used together with endDate to filter time entries. */
        startDate?: string;
        /** The upper bound used together with startDate to filter time entries. */
        endDate?: string;
      };
      output: {
        /** The time entries returned by Toggl Track. */
        time_entries: Array<{
          /**
           * The Toggl Track time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project ID associated with the time entry. */
          project_id?: number | null;
          /** The legacy project ID alias returned by Toggl. */
          pid?: number | null;
          /** The task ID associated with the time entry. */
          task_id?: number | null;
          /** The legacy task ID alias returned by Toggl. */
          tid?: number | null;
          /**
           * The user ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The legacy user ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          uid?: number;
          /** The time entry description. */
          description?: string | null;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /**
           * The time entry start timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          start?: string;
          /** The time entry stop timestamp, if the entry has stopped. */
          stop?: string | null;
          /** The time entry duration in seconds. Running entries use a negative value. */
          duration?: number;
          /** The client identifier stored on the time entry. */
          created_with?: string | null;
          /** The tag IDs attached to the time entry. */
          tag_ids?: Array<number> | null;
          /** The tag names attached to the time entry. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Toggl Track workspaces available to the authenticated user. */
    "toggl.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The workspaces returned by Toggl Track. */
        workspaces: Array<{
          /**
           * The Toggl Track workspace ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The workspace name. */
          name?: string;
          /** The organization ID associated with the workspace. */
          organization_id?: number;
          /** The default currency configured for the workspace. */
          default_currency?: string;
          /** Whether only admins may create projects in the workspace. */
          only_admins_may_create_projects?: boolean;
          /** Whether only admins may create tags in the workspace. */
          only_admins_may_create_tags?: boolean;
          /** Whether newly created projects are billable by default. */
          projects_billable_by_default?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Stop a running Toggl Track time entry. */
    "toggl.stop_time_entry": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
      };
      output: {
        /** The stopped time entry returned by Toggl Track. */
        time_entry: {
          /**
           * The Toggl Track time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project ID associated with the time entry. */
          project_id?: number | null;
          /** The legacy project ID alias returned by Toggl. */
          pid?: number | null;
          /** The task ID associated with the time entry. */
          task_id?: number | null;
          /** The legacy task ID alias returned by Toggl. */
          tid?: number | null;
          /**
           * The user ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The legacy user ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          uid?: number;
          /** The time entry description. */
          description?: string | null;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /**
           * The time entry start timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          start?: string;
          /** The time entry stop timestamp, if the entry has stopped. */
          stop?: string | null;
          /** The time entry duration in seconds. Running entries use a negative value. */
          duration?: number;
          /** The client identifier stored on the time entry. */
          created_with?: string | null;
          /** The tag IDs attached to the time entry. */
          tag_ids?: Array<number> | null;
          /** The tag names attached to the time entry. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Toggl Track project. */
    "toggl.update_project": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The updated project name.
         * @minLength 1
         */
        name?: string;
        /** Whether the project should be active. */
        active?: boolean;
        /** Whether the project should be billable. */
        billable?: boolean;
        /**
         * The updated client ID associated with the project.
         * @exclusiveMinimum 0
         */
        clientId?: number;
        /**
         * The updated client name associated with the project.
         * @minLength 1
         */
        clientName?: string;
        /**
         * The updated hex color string for the project.
         * @minLength 1
         */
        color?: string;
        /**
         * The updated currency code stored on the project.
         * @minLength 1
         */
        currency?: string;
        /** Whether the project should be private. */
        isPrivate?: boolean;
        /** Whether the project should be shared. */
        isShared?: boolean;
        /** The updated hourly rate stored on the project. */
        rate?: number;
        /**
         * The updated rate change mode stored on the project.
         * @minLength 1
         */
        rateChangeMode?: string;
        /**
         * The updated project start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The updated project end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
        /**
         * The updated project estimate in hours.
         * @minimum 0
         */
        estimatedHours?: number;
        /** Whether the project should be marked as a template. */
        template?: boolean;
        /**
         * The updated template ID for the project.
         * @exclusiveMinimum 0
         */
        templateId?: number;
      };
      output: {
        /** The updated project returned by Toggl Track. */
        project: {
          /**
           * The Toggl Track project ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the project.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project name. */
          name?: string;
          /** Whether the project is active. */
          active?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The color assigned to the project. */
          color?: string;
          /** The associated client ID. */
          client_id?: number | null;
          /** The associated client name. */
          client_name?: string | null;
          /** The project currency. */
          currency?: string | null;
          /** Whether the project is private. */
          is_private?: boolean;
          /** Whether the project is shared. */
          is_shared?: boolean;
          /** The project start date. */
          start_date?: string | null;
          /** The project end date. */
          end_date?: string | null;
          /** The hourly rate configured for the project. */
          rate?: number | null;
          /** The project status returned by Toggl Track. */
          status?: string;
          /** Whether the project is a template. */
          template?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Toggl Track tag. */
    "toggl.update_tag": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track tag ID.
         * @exclusiveMinimum 0
         */
        tagId: number;
        /**
         * The updated tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The updated tag returned by Toggl Track. */
        tag: {
          /**
           * The Toggl Track tag ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the tag.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /** The tag name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Toggl Track task. */
    "toggl.update_task": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Toggl Track task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
        /**
         * The updated task name.
         * @minLength 1
         */
        name?: string;
        /** Whether the task should be active. */
        active?: boolean;
        /**
         * The updated estimated task duration in seconds.
         * @minimum 0
         */
        estimatedSeconds?: number;
        /**
         * The updated external reference stored on the task.
         * @minLength 1
         */
        externalReference?: string;
        /**
         * The updated user ID assigned to the task.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** The updated task returned by Toggl Track. */
        task: {
          /**
           * The Toggl Track task ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the task.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The project ID that owns the task.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** The user ID assigned to the task. */
          user_id?: number | null;
          /** The task name. */
          name?: string;
          /** Whether the task is active. */
          active?: boolean;
          /** The estimated task duration in seconds. */
          estimated_seconds?: number | null;
          /** The external reference stored on the task. */
          external_reference?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Toggl Track time entry. */
    "toggl.update_time_entry": {
      input: {
        /**
         * The Toggl Track workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The Toggl Track time entry ID.
         * @exclusiveMinimum 0
         */
        timeEntryId: number;
        /** Whether the time entry should be billable. */
        billable?: boolean;
        /**
         * The updated client identifier stored on the time entry.
         * @minLength 1
         */
        createdWith?: string;
        /** The updated time entry description. */
        description?: string;
        /**
         * The updated time entry duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The updated project ID associated with the time entry.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The updated time entry start timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        start?: string;
        /**
         * The updated date part used together with start.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The updated time entry stop timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        stop?: string;
        /**
         * The updated tag IDs attached to the time entry.
         * @minItems 1
         */
        tagIds?: Array<number>;
        /**
         * The updated tag names attached to the time entry.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The updated task ID associated with the time entry.
         * @exclusiveMinimum 0
         */
        taskId?: number;
        /**
         * The updated user ID that owns the time entry.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** The updated time entry returned by Toggl Track. */
        time_entry: {
          /**
           * The Toggl Track time entry ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The workspace ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          workspace_id?: number;
          /**
           * The legacy workspace ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          wid?: number;
          /** The project ID associated with the time entry. */
          project_id?: number | null;
          /** The legacy project ID alias returned by Toggl. */
          pid?: number | null;
          /** The task ID associated with the time entry. */
          task_id?: number | null;
          /** The legacy task ID alias returned by Toggl. */
          tid?: number | null;
          /**
           * The user ID that owns the time entry.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The legacy user ID alias returned by Toggl.
           * @exclusiveMinimum 0
           */
          uid?: number;
          /** The time entry description. */
          description?: string | null;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /**
           * The time entry start timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          start?: string;
          /** The time entry stop timestamp, if the entry has stopped. */
          stop?: string | null;
          /** The time entry duration in seconds. Running entries use a negative value. */
          duration?: number;
          /** The client identifier stored on the time entry. */
          created_with?: string | null;
          /** The tag IDs attached to the time entry. */
          tag_ids?: Array<number> | null;
          /** The tag names attached to the time entry. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
