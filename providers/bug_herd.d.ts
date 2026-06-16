import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a BugHerd task attachment from a publicly accessible file URL. */
    "bug_herd.create_attachment_from_url": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The globally unique BugHerd task identifier.
         * @exclusiveMinimum 0
         */
        task_id: number;
        /**
         * The file name to store with the attachment.
         * @minLength 1
         */
        file_name: string;
        /**
         * The publicly accessible URL that BugHerd should download and attach.
         * @format uri
         */
        url: string;
      };
      output: {
        /** A BugHerd task attachment object. */
        attachment: {
          /** The BugHerd attachment identifier. */
          id?: number;
          /** The attachment file name. */
          file_name?: string;
          /**
           * The URL for the stored BugHerd attachment.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a comment on a BugHerd task. */
    "bug_herd.create_comment": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The globally unique BugHerd task identifier.
         * @exclusiveMinimum 0
         */
        task_id: number;
        /**
         * The comment text.
         * @minLength 1
         */
        text: string;
        /**
         * The BugHerd user identifier for the commenter.
         * @exclusiveMinimum 0
         */
        user_id?: number;
        /**
         * The commenter email address. BugHerd looks up the user by email.
         * @format email
         */
        email?: string;
        /** Whether this comment is private to team members. */
        is_private?: boolean;
      };
      output: {
        /** A BugHerd task comment object. */
        comment: {
          /** The BugHerd comment identifier. */
          id?: number;
          /** The comment text. */
          text?: string;
          /** The BugHerd user identifier for the commenter. */
          user_id?: number;
          /** Whether the comment is private to team members. */
          is_private?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a BugHerd project with the required project name and website URL. */
    "bug_herd.create_project": {
      input: {
        /**
         * The BugHerd project name.
         * @minLength 1
         */
        name: string;
        /**
         * The primary website URL for the BugHerd project.
         * @format uri
         */
        devurl: string;
        /** Whether the BugHerd project is active. */
        is_active?: boolean;
        /** Whether public feedback is enabled for the BugHerd project. */
        is_public?: boolean;
        /** Whether project guests can see other guests' feedback. */
        guests_see_guests?: boolean;
      };
      output: {
        /** A BugHerd project object. */
        project: {
          /** The BugHerd project identifier. */
          id?: number;
          /** The BugHerd project name. */
          name?: string;
          /** The primary website URL configured for the project. */
          devurl?: string;
          /** Whether the project is active. */
          is_active?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a BugHerd task in a project. */
    "bug_herd.create_task": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The BugHerd task description.
         * @minLength 1
         */
        description: string;
        /** The BugHerd task priority. */
        priority?: "not set" | "critical" | "important" | "normal" | "minor";
        /**
         * The BugHerd status or custom column name for the task.
         * @minLength 1
         */
        status?: string;
        /**
         * The BugHerd user identifier for the requester.
         * @exclusiveMinimum 0
         */
        requester_id?: number;
        /**
         * The requester email address.
         * @format email
         */
        requester_email?: string;
        /**
         * The BugHerd user identifier to assign to the task.
         * @exclusiveMinimum 0
         */
        assigned_to_id?: number | null;
        /**
         * The email address of a project member to assign to the task.
         * @format email
         */
        assigned_to_email?: string;
        /**
         * The BugHerd user identifier to remove from assignees.
         * @exclusiveMinimum 0
         */
        unassign_user?: number;
        /**
         * The tag names to assign to the BugHerd task.
         * @minItems 1
         */
        tag_names?: Array<string>;
        /**
         * An external identifier used to correlate the task.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The website URL where the task was reported.
         * @format uri
         */
        site?: string;
        /**
         * The page path where the task was reported.
         * @minLength 1
         */
        url?: string;
        /**
         * The email address used to attribute this task update.
         * @format email
         */
        updater_email?: string;
      };
      output: {
        /** A BugHerd task object. */
        task: {
          /** The globally unique BugHerd task identifier. */
          id?: number;
          /** The project-scoped BugHerd task number. */
          local_task_id?: number;
          /** The BugHerd project identifier for the task. */
          project_id?: number;
          /** The BugHerd task description. */
          description?: string;
          /** The current BugHerd task status or custom column name. */
          status?: string;
          /** The BugHerd task priority. */
          priority?: "not set" | "critical" | "important" | "normal" | "minor";
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve full details for a BugHerd project. */
    "bug_herd.get_project": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
      };
      output: {
        /** A BugHerd project object. */
        project: {
          /** The BugHerd project identifier. */
          id?: number;
          /** The BugHerd project name. */
          name?: string;
          /** The primary website URL configured for the project. */
          devurl?: string;
          /** Whether the project is active. */
          is_active?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a BugHerd task by project ID and global task ID. */
    "bug_herd.get_task": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The globally unique BugHerd task identifier.
         * @exclusiveMinimum 0
         */
        task_id: number;
      };
      output: {
        /** A BugHerd task object. */
        task: {
          /** The globally unique BugHerd task identifier. */
          id?: number;
          /** The project-scoped BugHerd task number. */
          local_task_id?: number;
          /** The BugHerd project identifier for the task. */
          project_id?: number;
          /** The BugHerd task description. */
          description?: string;
          /** The current BugHerd task status or custom column name. */
          status?: string;
          /** The BugHerd task priority. */
          priority?: "not set" | "critical" | "important" | "normal" | "minor";
          [key: string]: unknown;
        };
      };
    };
    /** List active BugHerd projects in the organization. */
    "bug_herd.list_active_projects": {
      input: {
        /**
         * The one-based page number to request from BugHerd.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The BugHerd projects returned for the requested page. */
        projects: Array<{
          /** The BugHerd project identifier. */
          id?: number;
          /** The BugHerd project name. */
          name?: string;
          /** The primary website URL configured for the project. */
          devurl?: string;
          /** Whether the project is active. */
          is_active?: boolean;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by BugHerd. */
        meta: {
          /** The total number of records reported by BugHerd when present. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List file attachments on a BugHerd task. */
    "bug_herd.list_attachments": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The globally unique BugHerd task identifier.
         * @exclusiveMinimum 0
         */
        task_id: number;
      };
      output: {
        /** The BugHerd attachments returned for the task. */
        attachments: Array<{
          /** The BugHerd attachment identifier. */
          id?: number;
          /** The attachment file name. */
          file_name?: string;
          /**
           * The URL for the stored BugHerd attachment.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by BugHerd. */
        meta: {
          /** The total number of records reported by BugHerd when present. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List comments on a BugHerd task. */
    "bug_herd.list_comments": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The globally unique BugHerd task identifier.
         * @exclusiveMinimum 0
         */
        task_id: number;
      };
      output: {
        /** The BugHerd comments returned for the task. */
        comments: Array<{
          /** The BugHerd comment identifier. */
          id?: number;
          /** The comment text. */
          text?: string;
          /** The BugHerd user identifier for the commenter. */
          user_id?: number;
          /** Whether the comment is private to team members. */
          is_private?: boolean;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by BugHerd. */
        meta: {
          /** The total number of records reported by BugHerd when present. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List BugHerd tasks for a project with optional server-side filters. */
    "bug_herd.list_project_tasks": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * Return tasks updated after this timestamp.
         * @format date-time
         */
        updated_since?: string;
        /**
         * Return tasks created after this timestamp.
         * @format date-time
         */
        created_since?: string;
        /**
         * Filter by BugHerd status name or custom column name.
         * @minLength 1
         */
        status?: string;
        /** The BugHerd task priority. */
        priority?: "not set" | "critical" | "important" | "normal" | "minor";
        /**
         * Filter by a BugHerd task tag name.
         * @minLength 1
         */
        tag?: string;
        /**
         * Filter by assigned BugHerd user identifier.
         * @exclusiveMinimum 0
         */
        assigned_to_id?: number;
        /**
         * Filter by external task identifier.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The one-based page number to request from BugHerd.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The BugHerd tasks returned for the requested page. */
        tasks: Array<{
          /** The globally unique BugHerd task identifier. */
          id?: number;
          /** The project-scoped BugHerd task number. */
          local_task_id?: number;
          /** The BugHerd project identifier for the task. */
          project_id?: number;
          /** The BugHerd task description. */
          description?: string;
          /** The current BugHerd task status or custom column name. */
          status?: string;
          /** The BugHerd task priority. */
          priority?: "not set" | "critical" | "important" | "normal" | "minor";
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by BugHerd. */
        meta: {
          /** The total number of records reported by BugHerd when present. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List all BugHerd projects in the organization. */
    "bug_herd.list_projects": {
      input: {
        /**
         * The one-based page number to request from BugHerd.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The BugHerd projects returned for the requested page. */
        projects: Array<{
          /** The BugHerd project identifier. */
          id?: number;
          /** The BugHerd project name. */
          name?: string;
          /** The primary website URL configured for the project. */
          devurl?: string;
          /** Whether the project is active. */
          is_active?: boolean;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by BugHerd. */
        meta: {
          /** The total number of records reported by BugHerd when present. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve top-level details about the authenticated BugHerd organization. */
    "bug_herd.show_organization": {
      input: Record<string, never>;
      output: {
        /** A BugHerd organization object. */
        organization: {
          /** The BugHerd organization identifier. */
          id?: number;
          /** The BugHerd organization name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update settings for an existing BugHerd project. */
    "bug_herd.update_project": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The BugHerd project name.
         * @minLength 1
         */
        name?: string;
        /**
         * The primary website URL for the BugHerd project.
         * @format uri
         */
        devurl?: string;
        /** Whether the BugHerd project is active. */
        is_active?: boolean;
        /** Whether public feedback is enabled for the BugHerd project. */
        is_public?: boolean;
        /** Whether project guests can see other guests' feedback. */
        guests_see_guests?: boolean;
        /** Whether the BugHerd project uses custom columns. */
        has_custom_columns?: boolean;
      };
      output: {
        /** A BugHerd project object. */
        project: {
          /** The BugHerd project identifier. */
          id?: number;
          /** The BugHerd project name. */
          name?: string;
          /** The primary website URL configured for the project. */
          devurl?: string;
          /** Whether the project is active. */
          is_active?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update mutable fields on a BugHerd task. */
    "bug_herd.update_task": {
      input: {
        /**
         * The BugHerd project identifier.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The globally unique BugHerd task identifier.
         * @exclusiveMinimum 0
         */
        task_id: number;
        /**
         * The BugHerd task description.
         * @minLength 1
         */
        description?: string;
        /** The BugHerd task priority. */
        priority?: "not set" | "critical" | "important" | "normal" | "minor";
        /**
         * The BugHerd status or custom column name for the task.
         * @minLength 1
         */
        status?: string;
        /**
         * The BugHerd user identifier for the requester.
         * @exclusiveMinimum 0
         */
        requester_id?: number;
        /**
         * The requester email address.
         * @format email
         */
        requester_email?: string;
        /**
         * The BugHerd user identifier to assign to the task.
         * @exclusiveMinimum 0
         */
        assigned_to_id?: number | null;
        /**
         * The email address of a project member to assign to the task.
         * @format email
         */
        assigned_to_email?: string;
        /**
         * The BugHerd user identifier to remove from assignees.
         * @exclusiveMinimum 0
         */
        unassign_user?: number;
        /**
         * The tag names to assign to the BugHerd task.
         * @minItems 1
         */
        tag_names?: Array<string>;
        /**
         * An external identifier used to correlate the task.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The website URL where the task was reported.
         * @format uri
         */
        site?: string;
        /**
         * The page path where the task was reported.
         * @minLength 1
         */
        url?: string;
        /**
         * The email address used to attribute this task update.
         * @format email
         */
        updater_email?: string;
      };
      output: {
        /** A BugHerd task object. */
        task: {
          /** The globally unique BugHerd task identifier. */
          id?: number;
          /** The project-scoped BugHerd task number. */
          local_task_id?: number;
          /** The BugHerd project identifier for the task. */
          project_id?: number;
          /** The BugHerd task description. */
          description?: string;
          /** The current BugHerd task status or custom column name. */
          status?: string;
          /** The BugHerd task priority. */
          priority?: "not set" | "critical" | "important" | "normal" | "minor";
          [key: string]: unknown;
        };
      };
    };
  }
}
