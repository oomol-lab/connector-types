import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Approve a Bitbucket pull request. */
    "bitbucket.approve_pull_request": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
      };
      output: Record<string, unknown>;
    };
    /** Create a branch from a commit hash or existing revision in a Bitbucket repository. */
    "bitbucket.create_branch": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The new branch name.
         * @minLength 1
         */
        name: string;
        /**
         * The commit hash or existing revision for the new branch.
         * @minLength 1
         */
        target: string;
      };
      output: {
        /** The branch name. */
        name?: string;
        /** The reference type. */
        type?: string;
        /** The commit targeted by the branch. */
        target?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create an issue in a repository that still supports the deprecated Bitbucket issue tracker. */
    "bitbucket.create_issue": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The issue title.
         * @minLength 1
         */
        title: string;
        /** The issue description in Bitbucket markup. */
        content?: string;
        /** The issue kind. */
        kind?: "bug" | "enhancement" | "proposal" | "task";
        /** The issue priority. */
        priority?: "trivial" | "minor" | "major" | "critical" | "blocker";
      };
      output: {
        /** The issue ID within the repository. */
        id?: number;
        /** The issue title. */
        title?: string;
        /** The issue state. */
        state?: string;
        /** The issue kind. */
        kind?: string;
        /** The issue priority. */
        priority?: string;
        [key: string]: unknown;
      };
    };
    /** Create an issue comment in a repository that still supports the deprecated Bitbucket issue tracker. */
    "bitbucket.create_issue_comment": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The issue ID.
         * @minimum 1
         */
        issueId: number;
        /**
         * The comment or issue content in Bitbucket markup.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** Whether Bitbucket accepted the issue comment. */
        created: boolean;
        /** The URL of the created issue comment when returned by Bitbucket. */
        location: string | null;
      };
    };
    /** Create a repository-level Bitbucket Pipelines variable. */
    "bitbucket.create_pipeline_variable": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The variable key.
         * @minLength 1
         */
        key: string;
        /** The variable value. */
        value: string;
        /** Whether the variable should be secured. */
        secured?: boolean;
      };
      output: {
        /** The variable UUID. */
        uuid?: string;
        /** The variable key. */
        key?: string;
        /** The variable value when it is not secured. */
        value?: string;
        /** Whether the variable is secured. */
        secured?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a pull request in a Bitbucket repository. */
    "bitbucket.create_pull_request": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request title.
         * @minLength 1
         */
        title: string;
        /**
         * The source branch name.
         * @minLength 1
         */
        sourceBranch: string;
        /**
         * The destination branch name. Omit to use the repository main branch.
         * @minLength 1
         */
        destinationBranch?: string;
        /** The pull request description in Bitbucket markup. */
        description?: string;
        /** Whether to close the source branch after merge. */
        closeSourceBranch?: boolean;
        /** Whether to create the pull request as a draft. */
        draft?: boolean;
        /** Bitbucket account UUIDs to request as reviewers. */
        reviewerUuids?: Array<string>;
      };
      output: {
        /** The pull request ID within the repository. */
        id?: number;
        /** The pull request title. */
        title?: string;
        /** The pull request state. */
        state?: string;
        /** The source branch and repository. */
        source?: Record<string, unknown>;
        /** The destination branch and repository. */
        destination?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a comment on a Bitbucket pull request. */
    "bitbucket.create_pull_request_comment": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
        /**
         * The comment or issue content in Bitbucket markup.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The comment ID. */
        id?: number;
        /** The comment content in raw and rendered forms. */
        content?: Record<string, unknown>;
        /** A Bitbucket account record. */
        user?: {
          /** The account UUID. */
          uuid?: string;
          /** The Atlassian account ID. */
          account_id?: string;
          /** The account nickname. */
          nickname?: string;
          /** The display name. */
          display_name?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Decline a Bitbucket pull request. */
    "bitbucket.decline_pull_request": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
      };
      output: {
        /** The pull request ID within the repository. */
        id?: number;
        /** The pull request title. */
        title?: string;
        /** The pull request state. */
        state?: string;
        /** The source branch and repository. */
        source?: Record<string, unknown>;
        /** The destination branch and repository. */
        destination?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a branch from a Bitbucket repository. */
    "bitbucket.delete_branch": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The branch name.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /** Whether Bitbucket accepted the branch deletion. */
        ok: boolean;
      };
    };
    /** Delete a repository-level Bitbucket Pipelines variable. */
    "bitbucket.delete_pipeline_variable": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The variable UUID.
         * @minLength 1
         */
        variableUuid: string;
      };
      output: {
        /** Whether Bitbucket accepted the pipeline variable deletion. */
        ok: boolean;
      };
    };
    /** Permanently delete a Bitbucket repository. */
    "bitbucket.delete_repository": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
      };
      output: {
        /** Whether Bitbucket accepted the repository deletion. */
        ok: boolean;
      };
    };
    /** Get a branch in a Bitbucket repository. */
    "bitbucket.get_branch": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The branch name.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /** The branch name. */
        name?: string;
        /** The reference type. */
        type?: string;
        /** The commit targeted by the branch. */
        target?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a commit from a Bitbucket repository. */
    "bitbucket.get_commit": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The commit hash or revision.
         * @minLength 1
         */
        commit: string;
      };
      output: {
        /** The commit hash. */
        hash?: string;
        /** The commit timestamp. */
        date?: string;
        /** The commit message. */
        message?: string;
        /** The object type. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Get the currently authenticated Bitbucket user. */
    "bitbucket.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The account UUID. */
        uuid?: string;
        /** The Atlassian account ID. */
        account_id?: string;
        /** The account nickname. */
        nickname?: string;
        /** The display name. */
        display_name?: string;
        /** The account type. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Get an issue from a repository that still supports the deprecated Bitbucket issue tracker. */
    "bitbucket.get_issue": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The issue ID.
         * @minimum 1
         */
        issueId: number;
      };
      output: {
        /** The issue ID within the repository. */
        id?: number;
        /** The issue title. */
        title?: string;
        /** The issue state. */
        state?: string;
        /** The issue kind. */
        kind?: string;
        /** The issue priority. */
        priority?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Pipelines run from a Bitbucket repository. */
    "bitbucket.get_pipeline": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pipeline UUID.
         * @minLength 1
         */
        pipelineUuid: string;
      };
      output: {
        /** The pipeline UUID. */
        uuid?: string;
        /** The pipeline build number. */
        build_number?: number;
        /** The pipeline state. */
        state?: Record<string, unknown>;
        /** The pipeline target. */
        target?: Record<string, unknown>;
        /** The normalized pipeline execution status. */
        status?: "running" | "succeeded" | "failed";
        [key: string]: unknown;
      };
    };
    /** Get a pull request from a Bitbucket repository. */
    "bitbucket.get_pull_request": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
      };
      output: {
        /** The pull request ID within the repository. */
        id?: number;
        /** The pull request title. */
        title?: string;
        /** The pull request state. */
        state?: string;
        /** The source branch and repository. */
        source?: Record<string, unknown>;
        /** The destination branch and repository. */
        destination?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the status of an asynchronous Bitbucket pull request merge task. */
    "bitbucket.get_pull_request_merge_task_status": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
        /**
         * The asynchronous merge task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The current merge task status, such as PENDING or SUCCESS. */
        task_status?: string;
        /** Links related to the merge task. */
        links?: Record<string, unknown>;
        /** A Bitbucket pull request record. */
        merge_result?: {
          /** The pull request ID within the repository. */
          id?: number;
          /** The pull request title. */
          title?: string;
          /** The pull request state. */
          state?: string;
          /** The source branch and repository. */
          source?: Record<string, unknown>;
          /** The destination branch and repository. */
          destination?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get a Bitbucket repository by workspace and repository slug or UUID. */
    "bitbucket.get_repository": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
      };
      output: {
        /** The repository UUID. */
        uuid?: string;
        /** The repository slug. */
        slug?: string;
        /** The repository name. */
        name?: string;
        /** The workspace and repository slug. */
        full_name?: string;
        /** Whether the repository is private. */
        is_private?: boolean;
        /** The main branch when one exists. */
        mainbranch?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Get a Bitbucket snippet by workspace and encoded snippet ID. */
    "bitbucket.get_snippet": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The snippet ID.
         * @minLength 1
         */
        snippetId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a Bitbucket workspace by slug or UUID. */
    "bitbucket.get_workspace": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
      };
      output: {
        /** The workspace UUID. */
        uuid?: string;
        /** The workspace slug. */
        slug?: string;
        /** The workspace display name. */
        name?: string;
        /** The object type. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** List branches in a Bitbucket repository. */
    "bitbucket.list_branches": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The branches returned by Bitbucket. */
        branches: Array<{
          /** The branch name. */
          name?: string;
          /** The reference type. */
          type?: string;
          /** The commit targeted by the branch. */
          target?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List commits in a Bitbucket repository, optionally starting from a revision. */
    "bitbucket.list_commits": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * An optional branch, tag, or commit to start the history from.
         * @minLength 1
         */
        revision?: string;
        /**
         * A revision whose ancestors should be included.
         * @minLength 1
         */
        include?: string;
        /**
         * A revision whose ancestors should be excluded.
         * @minLength 1
         */
        exclude?: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The commits returned by Bitbucket. */
        commits: Array<{
          /** The commit hash. */
          hash?: string;
          /** The commit timestamp. */
          date?: string;
          /** The commit message. */
          message?: string;
          /** The object type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List issue comments in a repository that still supports the deprecated Bitbucket issue tracker. */
    "bitbucket.list_issue_comments": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The issue ID.
         * @minimum 1
         */
        issueId: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The comments returned by Bitbucket. */
        comments: Array<{
          /** The comment ID. */
          id?: number;
          /** The comment content in raw and rendered forms. */
          content?: Record<string, unknown>;
          /** A Bitbucket account record. */
          user?: {
            /** The account UUID. */
            uuid?: string;
            /** The Atlassian account ID. */
            account_id?: string;
            /** The account nickname. */
            nickname?: string;
            /** The display name. */
            display_name?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List issues in a repository that still supports the deprecated Bitbucket issue tracker. */
    "bitbucket.list_issues": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The issues returned by Bitbucket. */
        issues: Array<{
          /** The issue ID within the repository. */
          id?: number;
          /** The issue title. */
          title?: string;
          /** The issue state. */
          state?: string;
          /** The issue kind. */
          kind?: string;
          /** The issue priority. */
          priority?: string;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List repository-level Bitbucket Pipelines variables. */
    "bitbucket.list_pipeline_variables": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The variables returned by Bitbucket. */
        variables: Array<{
          /** The variable UUID. */
          uuid?: string;
          /** The variable key. */
          key?: string;
          /** The variable value when it is not secured. */
          value?: string;
          /** Whether the variable is secured. */
          secured?: boolean;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List Pipelines runs for a Bitbucket repository. */
    "bitbucket.list_pipelines": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The pipelines returned by Bitbucket. */
        pipelines: Array<{
          /** The pipeline UUID. */
          uuid?: string;
          /** The pipeline build number. */
          build_number?: number;
          /** The pipeline state. */
          state?: Record<string, unknown>;
          /** The pipeline target. */
          target?: Record<string, unknown>;
          /** The normalized pipeline execution status. */
          status?: "running" | "succeeded" | "failed";
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List comments on a Bitbucket pull request. */
    "bitbucket.list_pull_request_comments": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The comments returned by Bitbucket. */
        comments: Array<{
          /** The comment ID. */
          id?: number;
          /** The comment content in raw and rendered forms. */
          content?: Record<string, unknown>;
          /** A Bitbucket account record. */
          user?: {
            /** The account UUID. */
            uuid?: string;
            /** The Atlassian account ID. */
            account_id?: string;
            /** The account nickname. */
            nickname?: string;
            /** The display name. */
            display_name?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List pull requests in a Bitbucket repository. */
    "bitbucket.list_pull_requests": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /** The pull request state to return. */
        state?: "OPEN" | "MERGED" | "DECLINED" | "SUPERSEDED";
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The pullRequests returned by Bitbucket. */
        pullRequests: Array<{
          /** The pull request ID within the repository. */
          id?: number;
          /** The pull request title. */
          title?: string;
          /** The pull request state. */
          state?: string;
          /** The source branch and repository. */
          source?: Record<string, unknown>;
          /** The destination branch and repository. */
          destination?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List repositories in a Bitbucket workspace. */
    "bitbucket.list_repositories": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The repositories returned by Bitbucket. */
        repositories: Array<{
          /** The repository UUID. */
          uuid?: string;
          /** The repository slug. */
          slug?: string;
          /** The repository name. */
          name?: string;
          /** The workspace and repository slug. */
          full_name?: string;
          /** Whether the repository is private. */
          is_private?: boolean;
          /** The main branch when one exists. */
          mainbranch?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List Pipelines runners configured for a Bitbucket repository. */
    "bitbucket.list_repository_runners": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The runners returned by Bitbucket. */
        runners: Array<Record<string, unknown>>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List snippets owned by or visible through a Bitbucket workspace. */
    "bitbucket.list_snippets": {
      input: {
        /**
         * The optional workspace slug or UUID. Omit to list current-user snippets.
         * @minLength 1
         */
        workspace?: string;
        /** The current user's relationship to returned snippets. */
        role?: "owner" | "contributor" | "member";
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The snippets returned by Bitbucket. */
        snippets: Array<Record<string, unknown>>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List tags in a Bitbucket repository. */
    "bitbucket.list_tags": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The tags returned by Bitbucket. */
        tags: Array<Record<string, unknown>>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List members of a Bitbucket workspace. */
    "bitbucket.list_workspace_members": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The members returned by Bitbucket. */
        members: Array<Record<string, unknown>>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List projects in a Bitbucket workspace. */
    "bitbucket.list_workspace_projects": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The projects returned by Bitbucket. */
        projects: Array<Record<string, unknown>>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** List workspaces available to the authenticated Bitbucket user. */
    "bitbucket.list_workspaces": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageLength?: number;
        /**
         * A Bitbucket filter expression passed as the q query parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * A Bitbucket sort expression passed as the sort query parameter.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The workspaces returned by Bitbucket. */
        workspaces: Array<{
          /** The workspace UUID. */
          uuid?: string;
          /** The workspace slug. */
          slug?: string;
          /** The workspace display name. */
          name?: string;
          /** The object type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The current page number when returned by Bitbucket. */
        page: number | null;
        /** The page length when returned by Bitbucket. */
        pageLength: number | null;
        /** The total number of records when returned by Bitbucket. */
        size: number | null;
        /** The URL of the next page when one exists. */
        next: string | null;
        /** The URL of the previous page when one exists. */
        previous: string | null;
      };
    };
    /** Merge a Bitbucket pull request. */
    "bitbucket.merge_pull_request": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pull request ID.
         * @minimum 1
         */
        pullRequestId: number;
        /** The merge commit message. */
        message?: string;
        /** Whether to close the source branch after merge. */
        closeSourceBranch?: boolean;
        /** The merge strategy. */
        mergeStrategy?: "merge_commit" | "squash" | "fast_forward" | "squash_fast_forward" | "rebase_fast_forward" | "rebase_merge";
      };
      output: {
        /** Whether the merge completed immediately or was queued. */
        status: "completed" | "queued";
        /** A Bitbucket pull request record. */
        pullRequest: {
          /** The pull request ID within the repository. */
          id?: number;
          /** The pull request title. */
          title?: string;
          /** The pull request state. */
          state?: string;
          /** The source branch and repository. */
          source?: Record<string, unknown>;
          /** The destination branch and repository. */
          destination?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** The asynchronous merge task ID when the merge was queued. */
        taskId: string | null;
        /** The Bitbucket URL for polling the asynchronous merge task when one exists. */
        taskStatusUrl: string | null;
      };
    };
    /** Trigger a Bitbucket Pipelines run for a branch, tag, or commit. */
    "bitbucket.run_pipeline": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /** The target reference type. */
        refType: "branch" | "tag" | "commit";
        /**
         * The branch or tag name. Required for branch and tag targets.
         * @minLength 1
         */
        refName?: string;
        /**
         * The commit hash. Required for commit targets.
         * @minLength 1
         */
        commitHash?: string;
        /** The custom pipeline selector type. Must be provided together with selectorPattern. */
        selectorType?: "custom";
        /**
         * The custom pipeline selector pattern. Must be provided together with selectorType.
         * @minLength 1
         */
        selectorPattern?: string;
        /** Variables supplied only to this pipeline run. */
        variables?: Array<{
          /**
           * The variable key.
           * @minLength 1
           */
          key: string;
          /** The variable value. */
          value: string;
          /** Whether the variable should be secured. */
          secured?: boolean;
        }>;
      };
      output: {
        /** The pipeline UUID. */
        uuid?: string;
        /** The pipeline build number. */
        build_number?: number;
        /** The pipeline state. */
        state?: Record<string, unknown>;
        /** The pipeline target. */
        target?: Record<string, unknown>;
        /** The normalized pipeline execution status. */
        status?: "running" | "succeeded" | "failed";
        [key: string]: unknown;
      };
    };
    /** Stop a running Bitbucket pipeline. */
    "bitbucket.stop_pipeline": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The pipeline UUID.
         * @minLength 1
         */
        pipelineUuid: string;
      };
      output: {
        /** Whether Bitbucket accepted the request to stop the pipeline. */
        ok: boolean;
      };
    };
    /** Update an issue in a repository that still supports the deprecated Bitbucket issue tracker. */
    "bitbucket.update_issue": {
      input: Record<string, unknown>;
      output: {
        /** The issue ID within the repository. */
        id?: number;
        /** The issue title. */
        title?: string;
        /** The issue state. */
        state?: string;
        /** The issue kind. */
        kind?: string;
        /** The issue priority. */
        priority?: string;
        [key: string]: unknown;
      };
    };
    /** Replace a repository-level Bitbucket Pipelines variable. */
    "bitbucket.update_pipeline_variable": {
      input: {
        /**
         * The workspace slug or UUID.
         * @minLength 1
         */
        workspace: string;
        /**
         * The repository slug or UUID.
         * @minLength 1
         */
        repository: string;
        /**
         * The variable UUID.
         * @minLength 1
         */
        variableUuid: string;
        /**
         * The replacement variable key.
         * @minLength 1
         */
        key: string;
        /** The replacement variable value. */
        value: string;
        /** Whether the variable should be secured. */
        secured?: boolean;
      };
      output: {
        /** The variable UUID. */
        uuid?: string;
        /** The variable key. */
        key?: string;
        /** The variable value when it is not secured. */
        value?: string;
        /** Whether the variable is secured. */
        secured?: boolean;
        [key: string]: unknown;
      };
    };
  }
}
