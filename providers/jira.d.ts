import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a comment to one Jira issue. */
    "jira.add_comment": {
      input: {
        /**
         * The Jira issue ID or key.
         * @minLength 1
         */
        issueIdOrKey: string;
        /**
         * Plain text comment body converted to the connected deployment's document format.
         * @minLength 1
         */
        bodyText?: string;
        /** Raw Atlassian Document Format comment body. */
        body?: {
          /** The ADF root node type. */
          type: "doc";
          /** The ADF document version. */
          version: number;
          /** The ADF top-level content nodes. */
          content: Array<unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The created Jira comment. */
        comment: {
          /** The Jira comment ID. */
          id: string;
          /** The Jira API URL for this comment. */
          self?: string;
          /** The Jira comment body in the connected deployment's format. */
          body?: {
            /** The ADF root node type. */
            type: "doc";
            /** The ADF document version. */
            version: number;
            /** The ADF top-level content nodes. */
            content: Array<unknown>;
            [key: string]: unknown;
          } | string;
          /** The Jira comment author. */
          author?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira comment update author. */
          updateAuthor?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira comment creation timestamp. */
          created?: string;
          /** The Jira comment update timestamp. */
          updated?: string;
          /** Whether the Jira comment is public in JSM. */
          jsdPublic?: boolean;
          /** The original Jira comment payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Jira issue and return the normalized issue detail. */
    "jira.create_issue": {
      input: {
        /**
         * The Jira project key.
         * @minLength 1
         */
        projectKey?: string;
        /**
         * The Jira project ID.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Jira issue type ID.
         * @minLength 1
         */
        issueTypeId?: string;
        /**
         * The Jira issue type name.
         * @minLength 1
         */
        issueTypeName?: string;
        /**
         * The Jira issue summary.
         * @minLength 1
         */
        summary: string;
        /**
         * Plain text description converted to the connected deployment's document format.
         * @minLength 1
         */
        descriptionText?: string;
        /** Raw Atlassian Document Format description. */
        description?: {
          /** The ADF root node type. */
          type: "doc";
          /** The ADF document version. */
          version: number;
          /** The ADF top-level content nodes. */
          content: Array<unknown>;
          [key: string]: unknown;
        };
        /**
         * Jira labels to apply to the new issue.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * The Jira Cloud account ID or Jira Server username to assign to the new issue.
         * @minLength 1
         */
        assigneeAccountId?: string;
        /**
         * The Jira priority ID.
         * @minLength 1
         */
        priorityId?: string;
        /**
         * The Jira due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * The parent Jira issue key for subtasks.
         * @minLength 1
         */
        parentIssueKey?: string;
        /** Additional Jira issue fields by field key. */
        extraFields?: Record<string, unknown>;
      };
      output: {
        /** The created Jira issue. */
        issue: {
          /** The Jira issue ID. */
          id: string;
          /** The Jira issue key. */
          key: string;
          /** The Jira API URL for this issue. */
          self?: string;
          /** The Jira issue summary. */
          summary?: string;
          /** The normalized Jira issue description in ADF. */
          description?: {
            /** The ADF root node type. */
            type: "doc";
            /** The ADF document version. */
            version: number;
            /** The ADF top-level content nodes. */
            content: Array<unknown>;
            [key: string]: unknown;
          };
          /** The Jira issue status. */
          status?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue type. */
          issueType?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue project. */
          project?: {
            /** The Jira project ID. */
            id: string;
            /** The Jira project key. */
            key: string;
            /** The Jira project name. */
            name: string;
            /** The Jira API URL for this project. */
            self?: string;
            /** The Jira project description. */
            description?: string;
            /** The Jira project type key. */
            projectTypeKey?: string;
            /** Whether the project uses a simplified workflow. */
            simplified?: boolean;
            /** The Jira project style. */
            style?: string;
            /** The Jira project URL. */
            url?: string;
            /** The Jira project lead. */
            lead?: {
              /** The Jira account ID. */
              accountId?: string;
              /** The Jira Server username. */
              name?: string;
              /** The Jira Server user key. */
              key?: string;
              /** The Jira account type. */
              accountType?: string;
              /** The Jira display name. */
              displayName?: string;
              /** The Jira email address when available. */
              emailAddress?: string;
              /** Whether the Jira account is active. */
              active?: boolean;
              /** The Jira API URL for this user. */
              self?: string;
              /** The Jira user time zone. */
              timeZone?: string;
              [key: string]: unknown;
            };
            /** The Jira project category. */
            projectCategory?: {
              /** The Jira identifier. */
              id?: string;
              /** The Jira display name. */
              name?: string;
              /** The Jira key. */
              key?: string;
              /** The Jira API URL for this object. */
              self?: string;
              /** The Jira description. */
              description?: string;
              [key: string]: unknown;
            } | null;
            /** Jira avatar URLs keyed by size. */
            avatarUrls?: Record<string, unknown>;
            /** The original Jira project payload. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** The Jira issue assignee. */
          assignee?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue reporter. */
          reporter?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue priority. */
          priority?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue labels. */
          labels?: Array<string>;
          /** The Jira issue creation timestamp. */
          created?: string;
          /** The Jira issue update timestamp. */
          updated?: string;
          /** The Jira issue due date. */
          dueDate?: string | null;
          /** The original Jira fields payload. */
          fields?: Record<string, unknown>;
          /** The original Jira issue payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Jira issue by issue ID or key. */
    "jira.get_issue": {
      input: {
        /**
         * The Jira issue ID or key.
         * @minLength 1
         */
        issueIdOrKey: string;
        /**
         * Additional Jira issue fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Additional Jira issue expand tokens to include in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The requested Jira issue. */
        issue: {
          /** The Jira issue ID. */
          id: string;
          /** The Jira issue key. */
          key: string;
          /** The Jira API URL for this issue. */
          self?: string;
          /** The Jira issue summary. */
          summary?: string;
          /** The normalized Jira issue description in ADF. */
          description?: {
            /** The ADF root node type. */
            type: "doc";
            /** The ADF document version. */
            version: number;
            /** The ADF top-level content nodes. */
            content: Array<unknown>;
            [key: string]: unknown;
          };
          /** The Jira issue status. */
          status?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue type. */
          issueType?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue project. */
          project?: {
            /** The Jira project ID. */
            id: string;
            /** The Jira project key. */
            key: string;
            /** The Jira project name. */
            name: string;
            /** The Jira API URL for this project. */
            self?: string;
            /** The Jira project description. */
            description?: string;
            /** The Jira project type key. */
            projectTypeKey?: string;
            /** Whether the project uses a simplified workflow. */
            simplified?: boolean;
            /** The Jira project style. */
            style?: string;
            /** The Jira project URL. */
            url?: string;
            /** The Jira project lead. */
            lead?: {
              /** The Jira account ID. */
              accountId?: string;
              /** The Jira Server username. */
              name?: string;
              /** The Jira Server user key. */
              key?: string;
              /** The Jira account type. */
              accountType?: string;
              /** The Jira display name. */
              displayName?: string;
              /** The Jira email address when available. */
              emailAddress?: string;
              /** Whether the Jira account is active. */
              active?: boolean;
              /** The Jira API URL for this user. */
              self?: string;
              /** The Jira user time zone. */
              timeZone?: string;
              [key: string]: unknown;
            };
            /** The Jira project category. */
            projectCategory?: {
              /** The Jira identifier. */
              id?: string;
              /** The Jira display name. */
              name?: string;
              /** The Jira key. */
              key?: string;
              /** The Jira API URL for this object. */
              self?: string;
              /** The Jira description. */
              description?: string;
              [key: string]: unknown;
            } | null;
            /** Jira avatar URLs keyed by size. */
            avatarUrls?: Record<string, unknown>;
            /** The original Jira project payload. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** The Jira issue assignee. */
          assignee?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue reporter. */
          reporter?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue priority. */
          priority?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue labels. */
          labels?: Array<string>;
          /** The Jira issue creation timestamp. */
          created?: string;
          /** The Jira issue update timestamp. */
          updated?: string;
          /** The Jira issue due date. */
          dueDate?: string | null;
          /** The original Jira fields payload. */
          fields?: Record<string, unknown>;
          /** The original Jira issue payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Jira project by project ID or key. */
    "jira.get_project": {
      input: {
        /**
         * The Jira project ID or key.
         * @minLength 1
         */
        projectIdOrKey: string;
        /**
         * Additional Jira project expand tokens to include in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The requested Jira project. */
        project: {
          /** The Jira project ID. */
          id: string;
          /** The Jira project key. */
          key: string;
          /** The Jira project name. */
          name: string;
          /** The Jira API URL for this project. */
          self?: string;
          /** The Jira project description. */
          description?: string;
          /** The Jira project type key. */
          projectTypeKey?: string;
          /** Whether the project uses a simplified workflow. */
          simplified?: boolean;
          /** The Jira project style. */
          style?: string;
          /** The Jira project URL. */
          url?: string;
          /** The Jira project lead. */
          lead?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          };
          /** The Jira project category. */
          projectCategory?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** Jira avatar URLs keyed by size. */
          avatarUrls?: Record<string, unknown>;
          /** The original Jira project payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List comments for one Jira issue. */
    "jira.list_issue_comments": {
      input: {
        /**
         * The Jira issue ID or key.
         * @minLength 1
         */
        issueIdOrKey: string;
        /**
         * Maximum number of items to return in one Jira page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor for Jira startAt-based pagination as a non-negative integer string.
         * @pattern ^\d+$
         */
        cursor?: string;
        /**
         * Additional Jira comment expand tokens to include in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The Jira comments returned by this page. */
        comments: Array<{
          /** The Jira comment ID. */
          id: string;
          /** The Jira API URL for this comment. */
          self?: string;
          /** The Jira comment body in the connected deployment's format. */
          body?: {
            /** The ADF root node type. */
            type: "doc";
            /** The ADF document version. */
            version: number;
            /** The ADF top-level content nodes. */
            content: Array<unknown>;
            [key: string]: unknown;
          } | string;
          /** The Jira comment author. */
          author?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira comment update author. */
          updateAuthor?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira comment creation timestamp. */
          created?: string;
          /** The Jira comment update timestamp. */
          updated?: string;
          /** Whether the Jira comment is public in JSM. */
          jsdPublic?: boolean;
          /** The original Jira comment payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Jira pagination metadata. */
        pagination: {
          /** Cursor for the next Jira page, or null when there are no more results. */
          nextCursor: string | null;
        };
      };
    };
    /** List Jira projects available to the connected Jira site. */
    "jira.list_projects": {
      input: {
        /**
         * Maximum number of items to return in one Jira page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor for Jira startAt-based pagination as a non-negative integer string.
         * @pattern ^\d+$
         */
        cursor?: string;
        /**
         * Additional Jira project expand tokens to include in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The Jira projects returned by this page. */
        projects: Array<{
          /** The Jira project ID. */
          id: string;
          /** The Jira project key. */
          key: string;
          /** The Jira project name. */
          name: string;
          /** The Jira API URL for this project. */
          self?: string;
          /** The Jira project description. */
          description?: string;
          /** The Jira project type key. */
          projectTypeKey?: string;
          /** Whether the project uses a simplified workflow. */
          simplified?: boolean;
          /** The Jira project style. */
          style?: string;
          /** The Jira project URL. */
          url?: string;
          /** The Jira project lead. */
          lead?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          };
          /** The Jira project category. */
          projectCategory?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** Jira avatar URLs keyed by size. */
          avatarUrls?: Record<string, unknown>;
          /** The original Jira project payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Jira pagination metadata. */
        pagination: {
          /** Cursor for the next Jira page, or null when there are no more results. */
          nextCursor: string | null;
        };
      };
    };
    /** Search Jira issues with JQL on the connected Jira site. */
    "jira.search_issues": {
      input: {
        /**
         * The Jira Query Language string used to search issues.
         * @minLength 1
         */
        jql: string;
        /**
         * Maximum number of items to return in one Jira page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Jira response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Jira issue fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Additional Jira issue expand tokens to include in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The Jira issues returned by this page. */
        issues: Array<{
          /** The Jira issue ID. */
          id: string;
          /** The Jira issue key. */
          key: string;
          /** The Jira API URL for this issue. */
          self?: string;
          /** The Jira issue summary. */
          summary?: string;
          /** The normalized Jira issue description in ADF. */
          description?: {
            /** The ADF root node type. */
            type: "doc";
            /** The ADF document version. */
            version: number;
            /** The ADF top-level content nodes. */
            content: Array<unknown>;
            [key: string]: unknown;
          };
          /** The Jira issue status. */
          status?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue type. */
          issueType?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue project. */
          project?: {
            /** The Jira project ID. */
            id: string;
            /** The Jira project key. */
            key: string;
            /** The Jira project name. */
            name: string;
            /** The Jira API URL for this project. */
            self?: string;
            /** The Jira project description. */
            description?: string;
            /** The Jira project type key. */
            projectTypeKey?: string;
            /** Whether the project uses a simplified workflow. */
            simplified?: boolean;
            /** The Jira project style. */
            style?: string;
            /** The Jira project URL. */
            url?: string;
            /** The Jira project lead. */
            lead?: {
              /** The Jira account ID. */
              accountId?: string;
              /** The Jira Server username. */
              name?: string;
              /** The Jira Server user key. */
              key?: string;
              /** The Jira account type. */
              accountType?: string;
              /** The Jira display name. */
              displayName?: string;
              /** The Jira email address when available. */
              emailAddress?: string;
              /** Whether the Jira account is active. */
              active?: boolean;
              /** The Jira API URL for this user. */
              self?: string;
              /** The Jira user time zone. */
              timeZone?: string;
              [key: string]: unknown;
            };
            /** The Jira project category. */
            projectCategory?: {
              /** The Jira identifier. */
              id?: string;
              /** The Jira display name. */
              name?: string;
              /** The Jira key. */
              key?: string;
              /** The Jira API URL for this object. */
              self?: string;
              /** The Jira description. */
              description?: string;
              [key: string]: unknown;
            } | null;
            /** Jira avatar URLs keyed by size. */
            avatarUrls?: Record<string, unknown>;
            /** The original Jira project payload. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** The Jira issue assignee. */
          assignee?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue reporter. */
          reporter?: {
            /** The Jira account ID. */
            accountId?: string;
            /** The Jira Server username. */
            name?: string;
            /** The Jira Server user key. */
            key?: string;
            /** The Jira account type. */
            accountType?: string;
            /** The Jira display name. */
            displayName?: string;
            /** The Jira email address when available. */
            emailAddress?: string;
            /** Whether the Jira account is active. */
            active?: boolean;
            /** The Jira API URL for this user. */
            self?: string;
            /** The Jira user time zone. */
            timeZone?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue priority. */
          priority?: {
            /** The Jira identifier. */
            id?: string;
            /** The Jira display name. */
            name?: string;
            /** The Jira key. */
            key?: string;
            /** The Jira API URL for this object. */
            self?: string;
            /** The Jira description. */
            description?: string;
            [key: string]: unknown;
          } | null;
          /** The Jira issue labels. */
          labels?: Array<string>;
          /** The Jira issue creation timestamp. */
          created?: string;
          /** The Jira issue update timestamp. */
          updated?: string;
          /** The Jira issue due date. */
          dueDate?: string | null;
          /** The original Jira fields payload. */
          fields?: Record<string, unknown>;
          /** The original Jira issue payload. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Jira pagination metadata. */
        pagination: {
          /** Cursor for the next Jira page, or null when there are no more results. */
          nextCursor: string | null;
        };
      };
    };
  }
}
