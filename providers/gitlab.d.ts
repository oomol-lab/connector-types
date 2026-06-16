import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new issue in a GitLab project. */
    "gitlab.create_project_issue": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The issue title.
         * @minLength 1
         */
        title: string;
        /**
         * The issue description.
         * @minLength 1
         */
        description?: string;
        /**
         * Comma-separated label names to attach to the issue.
         * @minLength 1
         */
        labels?: string;
        /** User IDs to assign to the issue. */
        assigneeIds?: Array<number>;
        /** Whether the issue should be confidential. */
        confidential?: boolean;
        /**
         * The issue due date in YYYY-MM-DD format.
         * @minLength 1
         */
        dueDate?: string;
      };
      output: {
        /** The issue ID. */
        id?: number;
        /** The internal issue ID within the project. */
        iid?: number;
        /** The project ID. */
        project_id?: number;
        /** The issue title. */
        title?: string;
        /** The issue description. */
        description?: string | null;
        /** The issue state. */
        state?: string;
        /** The issue URL. */
        web_url?: string;
        /** Whether the issue is confidential. */
        confidential?: boolean;
        /** Whether discussions are locked. */
        discussion_locked?: boolean | null;
        /** The GitLab issue type. */
        issue_type?: string;
        /** A GitLab user record. */
        author?: {
          /** The GitLab user ID. */
          id?: number;
          /** The GitLab username. */
          username?: string;
          /** The display name. */
          name?: string;
          /** The user state. */
          state?: string;
          /** The avatar URL. */
          avatar_url?: string | null;
          /** The GitLab profile URL. */
          web_url?: string;
          /** The email address when visible. */
          email?: string;
          /** The public email address when visible. */
          public_email?: string;
          [key: string]: unknown;
        };
        /** Users assigned to the issue. */
        assignees?: Array<{
          /** The GitLab user ID. */
          id?: number;
          /** The GitLab username. */
          username?: string;
          /** The display name. */
          name?: string;
          /** The user state. */
          state?: string;
          /** The avatar URL. */
          avatar_url?: string | null;
          /** The GitLab profile URL. */
          web_url?: string;
          /** The email address when visible. */
          email?: string;
          /** The public email address when visible. */
          public_email?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the issue. */
        labels?: Array<string>;
        /** A GitLab milestone record. */
        milestone?: {
          /** The milestone ID. */
          id?: number;
          /** The internal milestone ID within the project. */
          iid?: number;
          /** The milestone title. */
          title?: string;
          /** The milestone description. */
          description?: string | null;
          /** The milestone state. */
          state?: string;
          /** The milestone due date. */
          due_date?: string | null;
          /** The milestone start date. */
          start_date?: string | null;
          /** The milestone URL. */
          web_url?: string;
          [key: string]: unknown;
        } | null;
        /** The issue creation timestamp. */
        created_at?: string;
        /** The issue update timestamp. */
        updated_at?: string;
        /** The timestamp when the issue was closed. */
        closed_at?: string | null;
        /** The issue due date. */
        due_date?: string | null;
        /** The number of notes on the issue. */
        user_notes_count?: number;
        [key: string]: unknown;
      };
    };
    /** Get the current authenticated GitLab user profile. */
    "gitlab.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The GitLab user ID. */
        id?: number;
        /** The GitLab username. */
        username?: string;
        /** The display name. */
        name?: string;
        /** The user state. */
        state?: string;
        /** The avatar URL. */
        avatar_url?: string | null;
        /** The GitLab profile URL. */
        web_url?: string;
        /** The email address when visible. */
        email?: string;
        /** The public email address when visible. */
        public_email?: string;
        [key: string]: unknown;
      };
    };
    /** Get a GitLab project by numeric ID or URL-encoded path with namespace. */
    "gitlab.get_project": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The project ID. */
        id?: number;
        /** The project name. */
        name?: string;
        /** The project path. */
        path?: string;
        /** The project path including namespace. */
        path_with_namespace?: string;
        /** The project description. */
        description?: string | null;
        /** The default branch name. */
        default_branch?: string | null;
        /** The project visibility. */
        visibility?: string;
        /** The project URL. */
        web_url?: string;
        /** The SSH clone URL. */
        ssh_url_to_repo?: string;
        /** The HTTPS clone URL. */
        http_url_to_repo?: string;
        /** The README URL when returned by GitLab. */
        readme_url?: string | null;
        /** The project creation timestamp. */
        created_at?: string;
        /** The last activity timestamp. */
        last_activity_at?: string;
        /** Whether the project is archived. */
        archived?: boolean;
        /** The number of stars. */
        star_count?: number;
        /** The number of forks. */
        forks_count?: number;
        /** The number of open issues. */
        open_issues_count?: number;
        /** A GitLab namespace record. */
        namespace?: {
          /** The namespace ID. */
          id?: number;
          /** The namespace name. */
          name?: string;
          /** The namespace path. */
          path?: string;
          /** The namespace kind. */
          kind?: string;
          /** The full namespace path. */
          full_path?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List issues for a GitLab project with common state, label, assignee, and search filters. */
    "gitlab.list_project_issues": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /** Issue state filter. */
        state?: "opened" | "closed" | "all";
        /**
         * Comma-separated label names to filter issues by.
         * @minLength 1
         */
        labels?: string;
        /** Filter by assignee user ID. */
        assigneeId?: number;
        /**
         * Search issues by title or description.
         * @minLength 1
         */
        search?: string;
        /** Sort issues by a GitLab-supported field. */
        orderBy?: "created_at" | "updated_at" | "priority" | "due_date" | "relative_position" | "label_priority" | "milestone_due" | "popularity" | "weight";
        /** Sort direction. */
        sort?: "asc" | "desc";
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Issues returned by GitLab. */
        issues: Array<{
          /** The issue ID. */
          id?: number;
          /** The internal issue ID within the project. */
          iid?: number;
          /** The project ID. */
          project_id?: number;
          /** The issue title. */
          title?: string;
          /** The issue description. */
          description?: string | null;
          /** The issue state. */
          state?: string;
          /** The issue URL. */
          web_url?: string;
          /** Whether the issue is confidential. */
          confidential?: boolean;
          /** Whether discussions are locked. */
          discussion_locked?: boolean | null;
          /** The GitLab issue type. */
          issue_type?: string;
          /** A GitLab user record. */
          author?: {
            /** The GitLab user ID. */
            id?: number;
            /** The GitLab username. */
            username?: string;
            /** The display name. */
            name?: string;
            /** The user state. */
            state?: string;
            /** The avatar URL. */
            avatar_url?: string | null;
            /** The GitLab profile URL. */
            web_url?: string;
            /** The email address when visible. */
            email?: string;
            /** The public email address when visible. */
            public_email?: string;
            [key: string]: unknown;
          };
          /** Users assigned to the issue. */
          assignees?: Array<{
            /** The GitLab user ID. */
            id?: number;
            /** The GitLab username. */
            username?: string;
            /** The display name. */
            name?: string;
            /** The user state. */
            state?: string;
            /** The avatar URL. */
            avatar_url?: string | null;
            /** The GitLab profile URL. */
            web_url?: string;
            /** The email address when visible. */
            email?: string;
            /** The public email address when visible. */
            public_email?: string;
            [key: string]: unknown;
          }>;
          /** Labels attached to the issue. */
          labels?: Array<string>;
          /** A GitLab milestone record. */
          milestone?: {
            /** The milestone ID. */
            id?: number;
            /** The internal milestone ID within the project. */
            iid?: number;
            /** The milestone title. */
            title?: string;
            /** The milestone description. */
            description?: string | null;
            /** The milestone state. */
            state?: string;
            /** The milestone due date. */
            due_date?: string | null;
            /** The milestone start date. */
            start_date?: string | null;
            /** The milestone URL. */
            web_url?: string;
            [key: string]: unknown;
          } | null;
          /** The issue creation timestamp. */
          created_at?: string;
          /** The issue update timestamp. */
          updated_at?: string;
          /** The timestamp when the issue was closed. */
          closed_at?: string | null;
          /** The issue due date. */
          due_date?: string | null;
          /** The number of notes on the issue. */
          user_notes_count?: number;
          [key: string]: unknown;
        }>;
        /** The total number of issues when GitLab returns it. */
        total: number | null;
        /** The next page number when another page exists. */
        nextPage: number | null;
      };
    };
    /** List GitLab projects visible to the authenticated personal access token, with optional search and membership filters. */
    "gitlab.list_projects": {
      input: {
        /**
         * Search projects by name or path.
         * @minLength 1
         */
        search?: string;
        /** Limit results to projects the authenticated user is a member of. */
        membership?: boolean;
        /** Limit results to projects explicitly owned by the authenticated user. */
        owned?: boolean;
        /** Return a simplified project representation from GitLab. */
        simple?: boolean;
        /** Sort projects by a GitLab-supported field. */
        orderBy?: "id" | "name" | "path" | "created_at" | "updated_at" | "last_activity_at";
        /** Sort direction. */
        sort?: "asc" | "desc";
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Projects returned by GitLab. */
        projects: Array<{
          /** The project ID. */
          id?: number;
          /** The project name. */
          name?: string;
          /** The project path. */
          path?: string;
          /** The project path including namespace. */
          path_with_namespace?: string;
          /** The project description. */
          description?: string | null;
          /** The default branch name. */
          default_branch?: string | null;
          /** The project visibility. */
          visibility?: string;
          /** The project URL. */
          web_url?: string;
          /** The SSH clone URL. */
          ssh_url_to_repo?: string;
          /** The HTTPS clone URL. */
          http_url_to_repo?: string;
          /** The README URL when returned by GitLab. */
          readme_url?: string | null;
          /** The project creation timestamp. */
          created_at?: string;
          /** The last activity timestamp. */
          last_activity_at?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** The number of stars. */
          star_count?: number;
          /** The number of forks. */
          forks_count?: number;
          /** The number of open issues. */
          open_issues_count?: number;
          /** A GitLab namespace record. */
          namespace?: {
            /** The namespace ID. */
            id?: number;
            /** The namespace name. */
            name?: string;
            /** The namespace path. */
            path?: string;
            /** The namespace kind. */
            kind?: string;
            /** The full namespace path. */
            full_path?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The total number of projects when GitLab returns it. */
        total: number | null;
        /** The next page number when another page exists. */
        nextPage: number | null;
      };
    };
  }
}
