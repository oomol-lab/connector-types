import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Asana project in a workspace with optional notes, owner, dates, and display settings. */
    "asana.create_project": {
      input: {
        /**
         * The Asana project name.
         * @minLength 1
         */
        name: string;
        /** The Asana project notes. */
        notes?: string;
        /**
         * The project owner identifier.
         * @minLength 1
         */
        owner?: string;
        /**
         * The project due date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        dueOn?: string;
        /**
         * The project start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startOn?: string;
        /** The Asana project privacy setting. */
        privacySetting?: string;
        /** The Asana project default view. */
        defaultView?: string;
        /** The Asana project default access level. */
        defaultAccessLevel?: string;
        /** The Asana project color. */
        color?: string;
        /** The Asana project icon. */
        icon?: string;
        /** Arbitrary object keyed by Asana custom field gid. */
        customFields?: Record<string, unknown>;
        /** Whether the project is archived. */
        archived?: boolean;
        /**
         * The Asana workspace gid that owns the project.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The created Asana project. */
        project: {
          /** The project gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** The project owner. */
          owner?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The project team. */
          team?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a new Asana task in a project with optional assignee, notes, dates, and custom fields. */
    "asana.create_task": {
      input: {
        /**
         * The Asana task name.
         * @minLength 1
         */
        name: string;
        /** The Asana task notes. */
        notes?: string;
        /**
         * The Asana task assignee.
         * @minLength 1
         */
        assignee?: string;
        /** Whether the task is completed. */
        completed?: boolean;
        /**
         * The task due date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        dueOn?: string;
        /**
         * The task due date-time in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        dueAt?: string;
        /**
         * The task start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startOn?: string;
        /**
         * The task start date-time in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        startAt?: string;
        /** The Asana task approval status. */
        approvalStatus?: string;
        /** The Asana task subtype. */
        resourceSubtype?: string;
        /** Arbitrary object keyed by Asana custom field gid. */
        customFields?: Record<string, unknown>;
        /**
         * The Asana project gid that should receive the task.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The created Asana task. */
        task: {
          /** The task gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** The task assignee. */
          assignee?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The task workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The parent task. */
          parent?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<Record<string, unknown>>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Asana project by gid. */
    "asana.get_project": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * Additional Asana project fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana project. */
        project: {
          /** The project gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** The project owner. */
          owner?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The project team. */
          team?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Asana task by gid. */
    "asana.get_task": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Additional Asana task fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana task. */
        task: {
          /** The task gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** The task assignee. */
          assignee?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The task workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The parent task. */
          parent?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<Record<string, unknown>>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Asana workspace by gid. */
    "asana.get_workspace": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Additional Asana workspace fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana workspace. */
        workspace: {
          /** The workspace gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The workspace name. */
          name: string;
          /** The workspace email domains. */
          email_domains?: Array<string>;
          /** Whether the workspace is an organization. */
          is_organization?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List tasks within an Asana project, ordered by project priority, with pagination support. */
    "asana.list_project_tasks": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /** Only include tasks incomplete or completed since this RFC 3339 timestamp, or use the literal "now". */
        completedSince?: "now" | string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana task fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** The task assignee. */
          assignee?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The task workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The parent task. */
          parent?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<Record<string, unknown>>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List Asana projects for a workspace, with optional archived filtering and pagination. */
    "asana.list_projects": {
      input: {
        /**
         * The Asana workspace gid to filter projects on.
         * @minLength 1
         */
        workspaceId: string;
        /** Whether to include archived projects. */
        archived?: boolean;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana project fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana projects. */
        projects: Array<{
          /** The project gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** The project owner. */
          owner?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The project team. */
          team?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the Asana workspaces visible to the connected personal access token. */
    "asana.list_workspaces": {
      input: {
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana workspace fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana workspaces. */
        workspaces: Array<{
          /** The workspace gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The workspace name. */
          name: string;
          /** The workspace email domains. */
          email_domains?: Array<string>;
          /** Whether the workspace is an organization. */
          is_organization?: boolean;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** Update an existing Asana project by gid. */
    "asana.update_project": {
      input: {
        /**
         * The Asana project name.
         * @minLength 1
         */
        name?: string;
        /** The Asana project notes. */
        notes?: string;
        /**
         * The project owner identifier.
         * @minLength 1
         */
        owner?: string;
        /**
         * The project due date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        dueOn?: string;
        /**
         * The project start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startOn?: string;
        /** The Asana project privacy setting. */
        privacySetting?: string;
        /** The Asana project default view. */
        defaultView?: string;
        /** The Asana project default access level. */
        defaultAccessLevel?: string;
        /** The Asana project color. */
        color?: string;
        /** The Asana project icon. */
        icon?: string;
        /** Arbitrary object keyed by Asana custom field gid. */
        customFields?: Record<string, unknown>;
        /** Whether the project is archived. */
        archived?: boolean;
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The updated Asana project. */
        project: {
          /** The project gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** The project owner. */
          owner?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The project team. */
          team?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Asana task by gid. */
    "asana.update_task": {
      input: {
        /**
         * The Asana task name.
         * @minLength 1
         */
        name?: string;
        /** The Asana task notes. */
        notes?: string;
        /**
         * The Asana task assignee.
         * @minLength 1
         */
        assignee?: string;
        /** Whether the task is completed. */
        completed?: boolean;
        /**
         * The task due date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        dueOn?: string;
        /**
         * The task due date-time in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        dueAt?: string;
        /**
         * The task start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startOn?: string;
        /**
         * The task start date-time in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        startAt?: string;
        /** The Asana task approval status. */
        approvalStatus?: string;
        /** The Asana task subtype. */
        resourceSubtype?: string;
        /** Arbitrary object keyed by Asana custom field gid. */
        customFields?: Record<string, unknown>;
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The updated Asana task. */
        task: {
          /** The task gid. */
          gid: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** The task assignee. */
          assignee?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The task workspace. */
          workspace?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The parent task. */
          parent?: {
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<Record<string, unknown>>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
