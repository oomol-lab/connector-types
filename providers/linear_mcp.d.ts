import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
          id?: string;
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
          id?: string;
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
          id?: string;
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
          id?: string;
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
  }
}
