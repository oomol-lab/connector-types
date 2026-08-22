import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a GitLab merge request. */
    "gitlab.create_merge_request": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The source branch name.
         * @minLength 1
         */
        sourceBranch: string;
        /**
         * The target branch name.
         * @minLength 1
         */
        targetBranch: string;
        /**
         * The merge request title.
         * @minLength 1
         */
        title: string;
        /** The merge request description. */
        description?: string;
        /** The target project ID for a cross-project merge request. */
        targetProjectId?: number;
        /** Users to assign. */
        assigneeIds?: Array<number>;
        /** Users to review. */
        reviewerIds?: Array<number>;
        /** Comma-separated label names. */
        labels?: string;
        /** Whether to remove the source branch after merge. */
        removeSourceBranch?: boolean;
        /** Whether to squash commits when merging. */
        squash?: boolean;
      };
      output: {
        /** The global merge request ID. */
        id?: number;
        /** The internal merge request ID within the project. */
        iid?: number;
        /** The target project ID. */
        project_id?: number;
        /** The merge request title. */
        title?: string;
        /** The merge request description. */
        description?: string | null;
        /** The merge request state. */
        state?: string;
        /** The merge request URL. */
        web_url?: string;
        /** The source branch name. */
        source_branch?: string;
        /** The target branch name. */
        target_branch?: string;
        [key: string]: unknown;
      };
    };
    /** Create a new GitLab project owned by the authenticated user. */
    "gitlab.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /**
         * The repository path.
         * @minLength 1
         */
        path?: string;
        /** The namespace ID for the project. */
        namespaceId?: number;
        /** The project description. */
        description?: string;
        /** The project visibility. */
        visibility?: "private" | "internal" | "public";
        /** Whether to initialize the repository with a README. */
        initializeWithReadme?: boolean;
        /** The initial default branch name. */
        defaultBranch?: string;
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
    /** Mark a GitLab project for deletion. */
    "gitlab.delete_project": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether GitLab accepted the deletion request. */
        deleted: boolean;
      };
    };
    /** Delete a GitLab project issue. */
    "gitlab.delete_project_issue": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The internal issue ID within the project.
         * @minimum 1
         */
        issueIid: number;
      };
      output: {
        /** Whether GitLab accepted the deletion request. */
        deleted: boolean;
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
    /** Get a single issue from a GitLab project by its internal issue ID. */
    "gitlab.get_project_issue": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The internal issue ID within the project.
         * @minimum 1
         */
        issueIid: number;
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
    /** List merge requests for a GitLab project with state, branch, search, and pagination filters. */
    "gitlab.list_project_merge_requests": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /** Merge request state. */
        state?: "opened" | "closed" | "merged" | "locked" | "all";
        /**
         * Search merge requests by title or description.
         * @minLength 1
         */
        search?: string;
        /**
         * Filter by source branch.
         * @minLength 1
         */
        sourceBranch?: string;
        /**
         * Filter by target branch.
         * @minLength 1
         */
        targetBranch?: string;
        /** Sort field. */
        orderBy?: "created_at" | "updated_at" | "priority" | "title";
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
        /** Merge requests returned by GitLab. */
        mergeRequests: Array<{
          /** The global merge request ID. */
          id?: number;
          /** The internal merge request ID within the project. */
          iid?: number;
          /** The target project ID. */
          project_id?: number;
          /** The merge request title. */
          title?: string;
          /** The merge request description. */
          description?: string | null;
          /** The merge request state. */
          state?: string;
          /** The merge request URL. */
          web_url?: string;
          /** The source branch name. */
          source_branch?: string;
          /** The target branch name. */
          target_branch?: string;
          [key: string]: unknown;
        }>;
        /** The total number of merge requests when returned. */
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
    /** Accept and merge a GitLab merge request. */
    "gitlab.merge_merge_request": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The internal merge request ID within the project.
         * @minimum 1
         */
        mergeRequestIid: number;
        /** Merge automatically when checks pass. Requires GitLab 17.11 or later. */
        autoMerge?: boolean;
        /**
         * Require this source branch commit SHA.
         * @minLength 1
         */
        sha?: string;
        /** Remove the source branch after merging. */
        shouldRemoveSourceBranch?: boolean;
        /** Squash commits when merging. */
        squash?: boolean;
        /** Custom merge commit message. */
        mergeCommitMessage?: string;
        /** Custom squash commit message. */
        squashCommitMessage?: string;
      };
      output: {
        /** The global merge request ID. */
        id?: number;
        /** The internal merge request ID within the project. */
        iid?: number;
        /** The target project ID. */
        project_id?: number;
        /** The merge request title. */
        title?: string;
        /** The merge request description. */
        description?: string | null;
        /** The merge request state. */
        state?: string;
        /** The merge request URL. */
        web_url?: string;
        /** The source branch name. */
        source_branch?: string;
        /** The target branch name. */
        target_branch?: string;
        [key: string]: unknown;
      };
    };
    /** Update a GitLab merge request. */
    "gitlab.update_merge_request": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The internal merge request ID within the project.
         * @minimum 1
         */
        mergeRequestIid: number;
        /**
         * The replacement title.
         * @minLength 1
         */
        title?: string;
        /** The replacement description. */
        description?: string;
        /**
         * The replacement target branch.
         * @minLength 1
         */
        targetBranch?: string;
        /** Close or reopen the merge request. */
        stateEvent?: "close" | "reopen";
        /** Comma-separated label names to set. */
        labels?: string;
        /** Users to assign. */
        assigneeIds?: Array<number>;
        /** Users to review. */
        reviewerIds?: Array<number>;
        /** The milestone ID. */
        milestoneId?: number;
        /** Whether to remove the source branch after merge. */
        removeSourceBranch?: boolean;
        /** Whether to squash commits when merging. */
        squash?: boolean;
        /** Allow commits from eligible project members. */
        allowCollaboration?: boolean;
      };
      output: {
        /** The global merge request ID. */
        id?: number;
        /** The internal merge request ID within the project. */
        iid?: number;
        /** The target project ID. */
        project_id?: number;
        /** The merge request title. */
        title?: string;
        /** The merge request description. */
        description?: string | null;
        /** The merge request state. */
        state?: string;
        /** The merge request URL. */
        web_url?: string;
        /** The source branch name. */
        source_branch?: string;
        /** The target branch name. */
        target_branch?: string;
        [key: string]: unknown;
      };
    };
    /** Update basic settings for an existing GitLab project. */
    "gitlab.update_project": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The replacement project name.
         * @minLength 1
         */
        name?: string;
        /**
         * The replacement repository path.
         * @minLength 1
         */
        path?: string;
        /** The replacement project description. */
        description?: string;
        /** The project visibility. */
        visibility?: "private" | "internal" | "public";
        /** The default branch name. */
        defaultBranch?: string;
        /** Whether the project is archived. */
        archived?: boolean;
        /** Issue visibility. */
        issuesAccessLevel?: "disabled" | "private" | "enabled";
        /** Merge request visibility. */
        mergeRequestsAccessLevel?: "disabled" | "private" | "enabled";
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
    /** Update a GitLab project issue, including its title, labels, assignees, or state. */
    "gitlab.update_project_issue": {
      input: {
        /**
         * The GitLab project ID or URL-encoded path with namespace, such as 123 or group%2Fproject.
         * @minLength 1
         */
        projectId: string;
        /**
         * The internal issue ID within the project.
         * @minimum 1
         */
        issueIid: number;
        /**
         * The replacement issue title.
         * @minLength 1
         */
        title?: string;
        /** The replacement issue description. */
        description?: string;
        /** Comma-separated label names to set. */
        labels?: string;
        /** Comma-separated label names to add. */
        addLabels?: string;
        /** Comma-separated label names to remove. */
        removeLabels?: string;
        /** Users to assign. */
        assigneeIds?: Array<number>;
        /** Whether the issue is confidential. */
        confidential?: boolean;
        /** Whether issue discussions are locked. */
        discussionLocked?: boolean;
        /** The due date in YYYY-MM-DD format. */
        dueDate?: string;
        /** Close or reopen the issue. */
        stateEvent?: "close" | "reopen";
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
  }
}
