import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Comment on a Linear issue through Linear's MCP save_comment tool, optionally as a reply to another comment. Needs the write scope on the grant. */
    "linear_mcp.create_comment": {
      input: {
        /**
         * Issue ID or human identifier such as ENG-123.
         * @minLength 1
         */
        issueId: string;
        /**
         * Comment body in Markdown.
         * @minLength 1
         */
        body: string;
        /** Comment ID to reply to, for a threaded reply. */
        parentId?: string;
        [key: string]: unknown;
      };
      output: {
        /** A Linear issue comment. */
        comment: {
          /**
           * Comment ID.
           * @minLength 1
           */
          id: string;
          /** Comment body in Markdown. */
          body?: string;
          /** Author name, when returned. */
          user?: string;
          /** Author user ID, when the record carries one. */
          userId?: string;
          /** Creation time as returned by Linear. */
          createdAt?: string;
          /** Last edit time, when returned. */
          updatedAt?: string;
          /** Link to the comment in Linear. */
          url?: string;
          [key: string]: unknown;
        } | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Create a Linear issue through Linear's MCP save_issue tool. Needs the write scope on the grant; an id in the input is dropped so this never updates an existing issue. */
    "linear_mcp.create_issue": {
      input: {
        /**
         * Issue title.
         * @minLength 1
         */
        title: string;
        /** Issue description in Markdown. */
        description?: string;
        /**
         * Team key, name or ID the issue belongs to.
         * @minLength 1
         */
        team: string;
        /** Assignee as a user ID, name or email, or me for the signed-in user. */
        assignee?: string;
        /** Workflow state name or ID. */
        state?: string;
        /**
         * Priority as Linear numbers it: 0 none, 1 urgent, 2 high, 3 medium, 4 low.
         * @minimum 0
         * @maximum 4
         */
        priority?: number;
        /** Label names or IDs. */
        labels?: Array<string>;
        /** Project name or ID. */
        project?: string;
        /** Due date as YYYY-MM-DD. */
        dueDate?: string;
        /** Parent issue ID or identifier, for a sub-issue. */
        parentId?: string;
        /** Estimate on the team's scale. */
        estimate?: number;
        [key: string]: unknown;
      };
      output: {
        /** A Linear issue. Typed fields are lifted from the MCP record when present; fields not listed here are only in the action's raw text. */
        issue: {
          /**
           * Issue ID as Linear MCP returned it. This may be the human identifier such as ENG-123 rather than the UUID; see identifier and uuid.
           * @minLength 1
           */
          id: string;
          /** Human identifier such as ENG-123, when known. */
          identifier?: string;
          /** Issue UUID, when known. */
          uuid?: string;
          /** Issue title. */
          title?: string;
          /** Issue description in Markdown. Linear MCP may clip it in lists; see descriptionTruncated. */
          description?: string;
          /** Whether the description carries Linear's truncation marker. Call get_issue for the full text. */
          descriptionTruncated?: boolean;
          /** Link to the issue in Linear. */
          url?: string;
          /** Workflow state name. */
          state?: string;
          /** Priority as returned: a number or a label. */
          priority?: unknown;
          /** Assignee name, when assigned. */
          assignee?: string;
          /** Assignee user ID, when the record carries one. */
          assigneeId?: string;
          /** Creator name, when returned. */
          creator?: string;
          /** Creator user ID, when the record carries one. */
          creatorId?: string;
          /** Team name or key. */
          team?: string;
          /** Project name, when the issue belongs to one. */
          project?: string;
          /** Label names. */
          labels?: Array<string>;
          /** Creation time as returned by Linear. */
          createdAt?: string;
          /** Last update time as returned by Linear. */
          updatedAt?: string;
          /** Archive time, when archived. */
          archivedAt?: string;
          /** Completion time, when completed. */
          completedAt?: string;
          /** Due date, when set. */
          dueDate?: string;
          [key: string]: unknown;
        } | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Get one Linear issue with its full description through Linear's MCP get_issue tool. */
    "linear_mcp.get_issue": {
      input: {
        /**
         * Issue ID or human identifier such as ENG-123, as returned by list_issues.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Linear issue. Typed fields are lifted from the MCP record when present; fields not listed here are only in the action's raw text. */
        issue: {
          /**
           * Issue ID as Linear MCP returned it. This may be the human identifier such as ENG-123 rather than the UUID; see identifier and uuid.
           * @minLength 1
           */
          id: string;
          /** Human identifier such as ENG-123, when known. */
          identifier?: string;
          /** Issue UUID, when known. */
          uuid?: string;
          /** Issue title. */
          title?: string;
          /** Issue description in Markdown. Linear MCP may clip it in lists; see descriptionTruncated. */
          description?: string;
          /** Whether the description carries Linear's truncation marker. Call get_issue for the full text. */
          descriptionTruncated?: boolean;
          /** Link to the issue in Linear. */
          url?: string;
          /** Workflow state name. */
          state?: string;
          /** Priority as returned: a number or a label. */
          priority?: unknown;
          /** Assignee name, when assigned. */
          assignee?: string;
          /** Assignee user ID, when the record carries one. */
          assigneeId?: string;
          /** Creator name, when returned. */
          creator?: string;
          /** Creator user ID, when the record carries one. */
          creatorId?: string;
          /** Team name or key. */
          team?: string;
          /** Project name, when the issue belongs to one. */
          project?: string;
          /** Label names. */
          labels?: Array<string>;
          /** Creation time as returned by Linear. */
          createdAt?: string;
          /** Last update time as returned by Linear. */
          updatedAt?: string;
          /** Archive time, when archived. */
          archivedAt?: string;
          /** Completion time, when completed. */
          completedAt?: string;
          /** Due date, when set. */
          dueDate?: string;
          [key: string]: unknown;
        } | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Get the signed-in Linear user through Linear's MCP get_user tool. */
    "linear_mcp.get_self": {
      input: Record<string, never>;
      output: {
        /** The signed-in Linear user. */
        user: {
          /**
           * Linear user ID; the same viewer ID the Linear GraphQL API reports.
           * @minLength 1
           */
          id: string;
          /** The user's email address, when returned. */
          email?: string;
          /** The user's display name, when returned. */
          displayName?: string;
          /** The user's full name, when returned. */
          name?: string;
          [key: string]: unknown;
        } | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List the comments on one Linear issue through Linear's MCP list_comments tool. */
    "linear_mcp.list_comments": {
      input: {
        /**
         * Issue ID or human identifier such as ENG-123.
         * @minLength 1
         */
        issueId: string;
      };
      output: {
        /** Comments as returned, oldest first when Linear orders them. */
        comments: Array<{
          /**
           * Comment ID.
           * @minLength 1
           */
          id: string;
          /** Comment body in Markdown. */
          body?: string;
          /** Author name, when returned. */
          user?: string;
          /** Author user ID, when the record carries one. */
          userId?: string;
          /** Creation time as returned by Linear. */
          createdAt?: string;
          /** Last edit time, when returned. */
          updatedAt?: string;
          /** Link to the comment in Linear. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List issue labels through Linear's MCP list_issue_labels tool, for the workspace or one team. */
    "linear_mcp.list_issue_labels": {
      input: {
        /**
         * Team key, name or ID; omitted, the workspace's labels.
         * @minLength 1
         */
        team?: string;
      };
      output: {
        /** Labels as returned. */
        labels: Array<{
          /**
           * Record ID as Linear MCP returned it.
           * @minLength 1
           */
          id: string;
          /** Display name. */
          name?: string;
          /** Team key such as ENG, when the record is a team. */
          key?: string;
          /** Workflow state type such as started or completed, when the record is a state. */
          type?: string;
          /** Color, when the record is a label. */
          color?: string;
          /** Link to the record in Linear, when returned. */
          url?: string;
          /** Project state, when the record is a project. */
          state?: string;
          [key: string]: unknown;
        }>;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List one team's workflow states through Linear's MCP list_issue_statuses tool: the names the issue tools take as state. */
    "linear_mcp.list_issue_statuses": {
      input: {
        /**
         * Team key, name or ID.
         * @minLength 1
         */
        team: string;
      };
      output: {
        /** States as returned. */
        statuses: Array<{
          /**
           * Record ID as Linear MCP returned it.
           * @minLength 1
           */
          id: string;
          /** Display name. */
          name?: string;
          /** Team key such as ENG, when the record is a team. */
          key?: string;
          /** Workflow state type such as started or completed, when the record is a state. */
          type?: string;
          /** Color, when the record is a label. */
          color?: string;
          /** Link to the record in Linear, when returned. */
          url?: string;
          /** Project state, when the record is a project. */
          state?: string;
          [key: string]: unknown;
        }>;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List Linear issues through Linear's MCP list_issues tool with optional updated-since, ordering, limit, and cursor pagination. Descriptions may be clipped; call get_issue for the full text. */
    "linear_mcp.list_issues": {
      input: {
        /** Only issues updated at or after this time, as the tool accepts it (an ISO 8601 timestamp or a relative duration such as -P1D). */
        updatedAt?: string;
        /** Sort field, such as updatedAt or createdAt. */
        orderBy?: string;
        /**
         * Maximum number of issues to return on this page.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Cursor returned by the previous page of the same query.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Issues on this page. */
        issues: Array<{
          /**
           * Issue ID as Linear MCP returned it. This may be the human identifier such as ENG-123 rather than the UUID; see identifier and uuid.
           * @minLength 1
           */
          id: string;
          /** Human identifier such as ENG-123, when known. */
          identifier?: string;
          /** Issue UUID, when known. */
          uuid?: string;
          /** Issue title. */
          title?: string;
          /** Issue description in Markdown. Linear MCP may clip it in lists; see descriptionTruncated. */
          description?: string;
          /** Whether the description carries Linear's truncation marker. Call get_issue for the full text. */
          descriptionTruncated?: boolean;
          /** Link to the issue in Linear. */
          url?: string;
          /** Workflow state name. */
          state?: string;
          /** Priority as returned: a number or a label. */
          priority?: unknown;
          /** Assignee name, when assigned. */
          assignee?: string;
          /** Assignee user ID, when the record carries one. */
          assigneeId?: string;
          /** Creator name, when returned. */
          creator?: string;
          /** Creator user ID, when the record carries one. */
          creatorId?: string;
          /** Team name or key. */
          team?: string;
          /** Project name, when the issue belongs to one. */
          project?: string;
          /** Label names. */
          labels?: Array<string>;
          /** Creation time as returned by Linear. */
          createdAt?: string;
          /** Last update time as returned by Linear. */
          updatedAt?: string;
          /** Archive time, when archived. */
          archivedAt?: string;
          /** Completion time, when completed. */
          completedAt?: string;
          /** Due date, when set. */
          dueDate?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page follows. */
        hasNextPage: boolean;
        /** Cursor for the next page, when one is available. */
        cursor: string | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List Linear projects through Linear's MCP list_projects tool, optionally for one team, with cursor pagination. */
    "linear_mcp.list_projects": {
      input: {
        /**
         * Team key, name or ID whose projects to list.
         * @minLength 1
         */
        team?: string;
        /**
         * Maximum number of projects to return on this page.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Cursor returned by the previous page of the same query.
         * @minLength 1
         */
        cursor?: string;
        [key: string]: unknown;
      };
      output: {
        /** Projects on this page. */
        projects: Array<{
          /**
           * Record ID as Linear MCP returned it.
           * @minLength 1
           */
          id: string;
          /** Display name. */
          name?: string;
          /** Team key such as ENG, when the record is a team. */
          key?: string;
          /** Workflow state type such as started or completed, when the record is a state. */
          type?: string;
          /** Color, when the record is a label. */
          color?: string;
          /** Link to the record in Linear, when returned. */
          url?: string;
          /** Project state, when the record is a project. */
          state?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page follows. */
        hasNextPage: boolean;
        /** Cursor for the next page, when one is available. */
        cursor: string | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** List the teams of the connected Linear workspace through Linear's MCP list_teams tool: the keys and IDs the issue tools take as team. */
    "linear_mcp.list_teams": {
      input: Record<string, never>;
      output: {
        /** Teams as returned. */
        teams: Array<{
          /**
           * Record ID as Linear MCP returned it.
           * @minLength 1
           */
          id: string;
          /** Display name. */
          name?: string;
          /** Team key such as ENG, when the record is a team. */
          key?: string;
          /** Workflow state type such as started or completed, when the record is a state. */
          type?: string;
          /** Color, when the record is a label. */
          color?: string;
          /** Link to the record in Linear, when returned. */
          url?: string;
          /** Project state, when the record is a project. */
          state?: string;
          [key: string]: unknown;
        }>;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
    /** Update a Linear issue through Linear's MCP save_issue tool with its id: the title, description, team, assignee, state, priority, labels, project, due date, parent or estimate. Needs the write scope on the grant. */
    "linear_mcp.update_issue": {
      input: {
        /**
         * Issue ID or human identifier such as ENG-123, as returned by list_issues.
         * @minLength 1
         */
        id: string;
        /**
         * Issue title.
         * @minLength 1
         */
        title?: string;
        /** Issue description in Markdown. */
        description?: string;
        /**
         * Team key, name or ID the issue belongs to.
         * @minLength 1
         */
        team?: string;
        /** Assignee as a user ID, name or email, or me for the signed-in user. */
        assignee?: string;
        /** Workflow state name or ID. */
        state?: string;
        /**
         * Priority as Linear numbers it: 0 none, 1 urgent, 2 high, 3 medium, 4 low.
         * @minimum 0
         * @maximum 4
         */
        priority?: number;
        /** Label names or IDs. */
        labels?: Array<string>;
        /** Project name or ID. */
        project?: string;
        /** Due date as YYYY-MM-DD. */
        dueDate?: string;
        /** Parent issue ID or identifier, for a sub-issue. */
        parentId?: string;
        /** Estimate on the team's scale. */
        estimate?: number;
        [key: string]: unknown;
      };
      output: {
        /** A Linear issue. Typed fields are lifted from the MCP record when present; fields not listed here are only in the action's raw text. */
        issue: {
          /**
           * Issue ID as Linear MCP returned it. This may be the human identifier such as ENG-123 rather than the UUID; see identifier and uuid.
           * @minLength 1
           */
          id: string;
          /** Human identifier such as ENG-123, when known. */
          identifier?: string;
          /** Issue UUID, when known. */
          uuid?: string;
          /** Issue title. */
          title?: string;
          /** Issue description in Markdown. Linear MCP may clip it in lists; see descriptionTruncated. */
          description?: string;
          /** Whether the description carries Linear's truncation marker. Call get_issue for the full text. */
          descriptionTruncated?: boolean;
          /** Link to the issue in Linear. */
          url?: string;
          /** Workflow state name. */
          state?: string;
          /** Priority as returned: a number or a label. */
          priority?: unknown;
          /** Assignee name, when assigned. */
          assignee?: string;
          /** Assignee user ID, when the record carries one. */
          assigneeId?: string;
          /** Creator name, when returned. */
          creator?: string;
          /** Creator user ID, when the record carries one. */
          creatorId?: string;
          /** Team name or key. */
          team?: string;
          /** Project name, when the issue belongs to one. */
          project?: string;
          /** Label names. */
          labels?: Array<string>;
          /** Creation time as returned by Linear. */
          createdAt?: string;
          /** Last update time as returned by Linear. */
          updatedAt?: string;
          /** Archive time, when archived. */
          archivedAt?: string;
          /** Completion time, when completed. */
          completedAt?: string;
          /** Due date, when set. */
          dueDate?: string;
          [key: string]: unknown;
        } | null;
        /** The untouched text Linear's MCP tool returned. Read it when a typed field is missing: Linear can change its MCP output shape without notice. */
        raw: string;
      };
    };
  }
}
