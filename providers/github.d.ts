import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add assignees to a GitHub issue. */
    "github.add_issue_assignees": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The usernames to assign.
         * @minItems 1
         */
        assignees: Array<string>;
      };
      output: {
        /** The issue ID. */
        id: number;
        /** The issue number. */
        number: number;
        /** The issue title. */
        title: string;
        /** The issue state. */
        state: string;
        /** The issue URL. */
        html_url: string;
        /** The issue body. */
        body?: string | null;
        /** The number of comments. */
        comments?: number;
        /** The issue author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The assigned users. */
        assignees?: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The issue labels. */
        labels?: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        } | string>;
        /** The linked pull request metadata. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Add labels to a GitHub issue. */
    "github.add_issue_labels": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The labels to add.
         * @minItems 1
         */
        labels: Array<string>;
      };
      output: {
        /** The labels on the issue after adding. */
        labels: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Check whether a GitHub pull request has been merged. */
    "github.check_pull_request_merged": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
      };
      output: {
        /** Whether the pull request has been merged. */
        merged: boolean;
      };
    };
    /** Remove all labels from a GitHub issue. */
    "github.clear_issue_labels": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Compare two commit references in a GitHub repository. */
    "github.compare_commits": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The base...head comparison string.
         * @minLength 1
         */
        basehead: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The comparison metadata. */
        comparison: Record<string, unknown>;
        /** The commits in the comparison. */
        commits: Array<{
          /** The commit SHA. */
          sha: string;
          /** The commit URL. */
          html_url?: string;
          /** The API URL. */
          url?: string;
          /** The commit metadata object. */
          commit: Record<string, unknown>;
          author?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          committer?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          /** The parent commits. */
          parents?: Array<Record<string, unknown>>;
          /** The commit statistics. */
          stats?: Record<string, unknown>;
          /** The files changed in the commit. */
          files?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The files changed in the comparison. */
        files: Array<Record<string, unknown>>;
      };
    };
    /** Create a commit status for a GitHub commit SHA. */
    "github.create_commit_status": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The commit SHA.
         * @minLength 1
         */
        sha: string;
        /** The status state. */
        state: "error" | "failure" | "pending" | "success";
        /** The status context identifier. */
        context?: string;
        /** The target URL for the status. */
        targetUrl?: string;
        /** The status description. */
        description?: string;
      };
      output: {
        /** The status ID. */
        id: number;
        /** The status state. */
        state: string;
        /** The status context. */
        context?: string;
        /** The status description. */
        description?: string | null;
        /** The target URL. */
        target_url?: string | null;
        /** The creation timestamp. */
        created_at?: string;
        /** The last update timestamp. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create an issue in a GitHub repository. */
    "github.create_issue": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue title.
         * @minLength 1
         */
        title: string;
        /** The issue body. */
        body?: string;
        /** The usernames to assign. */
        assignees?: Array<string>;
        /** The labels to add. */
        labels?: Array<string>;
        /**
         * The milestone number.
         * @exclusiveMinimum 0
         */
        milestone?: number;
      };
      output: {
        /** The issue ID. */
        id: number;
        /** The issue number. */
        number: number;
        /** The issue title. */
        title: string;
        /** The issue state. */
        state: string;
        /** The issue URL. */
        html_url: string;
        /** The issue body. */
        body?: string | null;
        /** The number of comments. */
        comments?: number;
        /** The issue author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The assigned users. */
        assignees?: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The issue labels. */
        labels?: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        } | string>;
        /** The linked pull request metadata. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a comment on a GitHub issue. */
    "github.create_issue_comment": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The comment body.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** The comment ID. */
        id: number;
        /** The comment URL. */
        html_url: string;
        /** The comment body. */
        body: string;
        /** The comment author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The creation timestamp. */
        created_at?: string;
        /** The last update timestamp. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a label in a GitHub repository. */
    "github.create_label": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The label name.
         * @minLength 1
         */
        name: string;
        /**
         * The label color as a 6-character hex value without #.
         * @pattern ^[0-9a-fA-F]{6}$
         */
        color: string;
        /** The label description. */
        description?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create or update a repository file through the GitHub contents API. Writing under .github/workflows may require GitHub workflow scope. */
    "github.create_or_update_file": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The file path.
         * @minLength 1
         */
        path: string;
        /**
         * The commit message.
         * @minLength 1
         */
        message: string;
        /** The file content as UTF-8 text. */
        content?: string;
        /** The file content as base64. */
        contentBase64?: string;
        /** The SHA of the file being replaced for updates. */
        sha?: string;
        /** The branch name to commit to. */
        branch?: string;
      };
      output: {
        /** The created or updated content entry. */
        content: {
          /** The content entry type. */
          type: "file" | "dir" | "symlink" | "submodule";
          /** The file or directory name. */
          name: string;
          /** The file path. */
          path: string;
          /** The content SHA. */
          sha: string;
          /** The file size in bytes. */
          size?: number;
          /** The content URL. */
          html_url?: string | null;
          /** The download URL. */
          download_url?: string | null;
          [key: string]: unknown;
        };
        /** The resulting commit. */
        commit: Record<string, unknown>;
      };
    };
    /** Create a pull request in a GitHub repository. */
    "github.create_pull_request": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request title.
         * @minLength 1
         */
        title: string;
        /**
         * The head branch name.
         * @minLength 1
         */
        head: string;
        /**
         * The base branch name.
         * @minLength 1
         */
        base: string;
        /** The pull request body. */
        body?: string;
        /** Whether to create a draft pull request. */
        draft?: boolean;
        /** Whether maintainers can modify the pull request. */
        maintainerCanModify?: boolean;
      };
      output: {
        /** The pull request ID. */
        id: number;
        /** The pull request number. */
        number: number;
        /** The pull request state. */
        state: string;
        /** The pull request title. */
        title: string;
        /** The pull request body. */
        body?: string | null;
        /** The pull request URL. */
        html_url: string;
        /** Whether the pull request is a draft. */
        draft?: boolean;
        /** The pull request author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The head branch reference. */
        head: Record<string, unknown>;
        /** The base branch reference. */
        base: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a review for a GitHub pull request, optionally with inline comments. */
    "github.create_pull_request_review": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The review body. */
        body?: string;
        /** The review event type. */
        event?: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
        /** The commit SHA to review. */
        commitId?: string;
        /** The inline review comments. */
        comments?: Array<{
          /**
           * The file path to comment on.
           * @minLength 1
           */
          path: string;
          /**
           * The comment body.
           * @minLength 1
           */
          body: string;
          /**
           * The line number in the diff.
           * @exclusiveMinimum 0
           */
          line?: number;
          /** The side of the diff. */
          side?: "LEFT" | "RIGHT";
          /**
           * The start line for multi-line comments.
           * @exclusiveMinimum 0
           */
          startLine?: number;
          /** The start side for multi-line comments. */
          startSide?: "LEFT" | "RIGHT";
        }>;
      };
      output: {
        /** The review ID. */
        id: number;
        /** The reviewer. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The review body. */
        body?: string | null;
        /** The review state. */
        state?: string;
        /** The review URL. */
        html_url?: string;
        /** The reviewed commit SHA. */
        commit_id?: string;
        /** The submission timestamp. */
        submitted_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a review comment on a GitHub pull request diff. */
    "github.create_pull_request_review_comment": {
      input: ({
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /**
         * The comment body.
         * @minLength 1
         */
        body: string;
        /**
         * The commit SHA to comment on.
         * @minLength 1
         */
        commitId: string;
      }) & ({
        /**
         * The file path to comment on.
         * @minLength 1
         */
        path: string;
        /**
         * The comment body.
         * @minLength 1
         */
        body: string;
        /**
         * The line number in the diff.
         * @exclusiveMinimum 0
         */
        line?: number;
        /** The side of the diff. */
        side?: "LEFT" | "RIGHT";
        /**
         * The start line for multi-line comments.
         * @exclusiveMinimum 0
         */
        startLine?: number;
        /** The start side for multi-line comments. */
        startSide?: "LEFT" | "RIGHT";
      });
      output: {
        /** The comment ID. */
        id: number;
        /** The file path the comment applies to. */
        path: string;
        /** The comment body. */
        body: string;
        /** The comment author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The commit SHA the comment applies to. */
        commit_id?: string;
        /** The original commit SHA. */
        original_commit_id?: string;
        /** The diff hunk the comment applies to. */
        diff_hunk?: string;
        /** The comment URL. */
        html_url?: string;
        line?: number | null;
        start_line?: number | null;
        /** The side of the diff. */
        side?: string;
        start_side?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a Git reference in a GitHub repository. */
    "github.create_ref": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The fully qualified ref name, such as refs/heads/branch.
         * @minLength 1
         */
        ref: string;
        /**
         * The SHA the ref should point to.
         * @minLength 1
         */
        sha: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a release in a GitHub repository. */
    "github.create_release": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The tag name for the release.
         * @minLength 1
         */
        tagName: string;
        /** The branch or commit SHA to tag. */
        targetCommitish?: string;
        /** The release title. */
        name?: string;
        /** The release body. */
        body?: string;
        /** Whether to create a draft release. */
        draft?: boolean;
        /** Whether to mark the release as prerelease. */
        prerelease?: boolean;
        /** Whether GitHub should generate release notes. */
        generateReleaseNotes?: boolean;
        /** Whether this release should be marked latest. */
        makeLatest?: "true" | "false" | "legacy";
      };
      output: Record<string, unknown>;
    };
    /** Create a repository for the authenticated GitHub user. */
    "github.create_repository": {
      input: {
        /**
         * The repository name.
         * @minLength 1
         */
        name: string;
        /** The repository description. */
        description?: string;
        /**
         * The repository homepage URL.
         * @format uri
         */
        homepage?: string;
        /** Whether to create a private repository. */
        private?: boolean;
        /** Whether GitHub should create an initial commit. */
        autoInit?: boolean;
        /** Whether issues are enabled. */
        hasIssues?: boolean;
        /** Whether projects are enabled. */
        hasProjects?: boolean;
        /** Whether the wiki is enabled. */
        hasWiki?: boolean;
        /** Whether discussions are enabled. */
        hasDiscussions?: boolean;
        /** The .gitignore template name. */
        gitignoreTemplate?: string;
        /** The license template name. */
        licenseTemplate?: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a repository file through the GitHub contents API. Deleting under .github/workflows may require GitHub workflow scope. */
    "github.delete_file": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The file path to delete.
         * @minLength 1
         */
        path: string;
        /**
         * The commit message.
         * @minLength 1
         */
        message: string;
        /**
         * The SHA of the file to delete.
         * @minLength 1
         */
        sha: string;
        /** The branch name to commit to. */
        branch?: string;
      };
      output: {
        content: {
          /** The content entry type. */
          type: "file" | "dir" | "symlink" | "submodule";
          /** The file or directory name. */
          name: string;
          /** The file path. */
          path: string;
          /** The content SHA. */
          sha: string;
          /** The file size in bytes. */
          size?: number;
          /** The content URL. */
          html_url?: string | null;
          /** The download URL. */
          download_url?: string | null;
          [key: string]: unknown;
        } | null;
        /** The resulting commit. */
        commit: Record<string, unknown>;
      };
    };
    /** Delete a GitHub repository by owner and name. */
    "github.delete_repository": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Get a GitHub branch by name. */
    "github.get_branch": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The branch name.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /** The branch name. */
        name: string;
        /** The branch head commit. */
        commit: Record<string, unknown>;
        /** Whether the branch is protected. */
        protected?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a commit by SHA in a GitHub repository. */
    "github.get_commit": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The commit SHA or ref to retrieve.
         * @minLength 1
         */
        ref: string;
      };
      output: {
        /** The commit SHA. */
        sha: string;
        /** The commit URL. */
        html_url?: string;
        /** The API URL. */
        url?: string;
        /** The commit metadata object. */
        commit: Record<string, unknown>;
        author?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        } | null;
        committer?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        } | null;
        /** The parent commits. */
        parents?: Array<Record<string, unknown>>;
        /** The commit statistics. */
        stats?: Record<string, unknown>;
        /** The files changed in the commit. */
        files?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List statuses for a commit reference in reverse chronological order. */
    "github.get_commit_statuses": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The commit SHA, branch, or tag.
         * @minLength 1
         */
        ref: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of commit statuses. */
        statuses: Array<{
          /** The status ID. */
          id: number;
          /** The status state. */
          state: string;
          /** The status context. */
          context?: string;
          /** The status description. */
          description?: string | null;
          /** The target URL. */
          target_url?: string | null;
          /** The creation timestamp. */
          created_at?: string;
          /** The last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the current authenticated GitHub user profile. */
    "github.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The user ID. */
        id: number;
        /** The username. */
        login: string;
        /** The avatar URL. */
        avatar_url?: string;
        /** The profile URL. */
        html_url?: string;
        /** The account type. */
        type?: string;
        /** The display name. */
        name?: string | null;
        /** The email address. */
        email?: string | null;
        /** The bio. */
        bio?: string | null;
        /** The company. */
        company?: string | null;
        /** The location. */
        location?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read a repository file and return both base64 and decoded text when available. */
    "github.get_file_contents": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The file path.
         * @minLength 1
         */
        path: string;
        /** The branch, tag, or commit SHA. */
        ref?: string;
      };
      output: {
        /** The content type. */
        type: "file";
        /** The file or directory name. */
        name: string;
        /** The file path. */
        path: string;
        /** The content SHA. */
        sha: string;
        /** The file size in bytes. */
        size?: number;
        /** The content URL. */
        html_url?: string | null;
        /** The download URL. */
        download_url?: string | null;
        /** The file content encoded as base64. */
        content_base64: string;
        decoded_content: string | null;
        /** The content encoding. */
        encoding?: string;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub issue by number. */
    "github.get_issue": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
      };
      output: {
        /** The issue ID. */
        id: number;
        /** The issue number. */
        number: number;
        /** The issue title. */
        title: string;
        /** The issue state. */
        state: string;
        /** The issue URL. */
        html_url: string;
        /** The issue body. */
        body?: string | null;
        /** The number of comments. */
        comments?: number;
        /** The issue author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The assigned users. */
        assignees?: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The issue labels. */
        labels?: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        } | string>;
        /** The linked pull request metadata. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the latest published release for a GitHub repository. */
    "github.get_latest_release": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** The release ID. */
        id: number;
        /** The release tag name. */
        tag_name: string;
        /** The release name. */
        name?: string | null;
        /** The release body. */
        body?: string | null;
        /** Whether the release is a draft. */
        draft?: boolean;
        /** Whether the release is a prerelease. */
        prerelease?: boolean;
        /** The release URL. */
        html_url?: string;
        /** The assets API URL. */
        assets_url?: string;
        /** The tarball download URL. */
        tarball_url?: string;
        /** The zipball download URL. */
        zipball_url?: string;
        /** The target branch or commit SHA. */
        target_commitish?: string;
        /** The release author. */
        author?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The creation timestamp. */
        created_at?: string;
        /** The publication timestamp. */
        published_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub pull request by number. */
    "github.get_pull_request": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
      };
      output: {
        /** The pull request ID. */
        id: number;
        /** The pull request number. */
        number: number;
        /** The pull request state. */
        state: string;
        /** The pull request title. */
        title: string;
        /** The pull request body. */
        body?: string | null;
        /** The pull request URL. */
        html_url: string;
        /** Whether the pull request is a draft. */
        draft?: boolean;
        /** The pull request author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The head branch reference. */
        head: Record<string, unknown>;
        /** The base branch reference. */
        base: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub release by numeric id. */
    "github.get_release": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The release ID.
         * @exclusiveMinimum 0
         */
        releaseId: number;
      };
      output: {
        /** The release ID. */
        id: number;
        /** The release tag name. */
        tag_name: string;
        /** The release name. */
        name?: string | null;
        /** The release body. */
        body?: string | null;
        /** Whether the release is a draft. */
        draft?: boolean;
        /** Whether the release is a prerelease. */
        prerelease?: boolean;
        /** The release URL. */
        html_url?: string;
        /** The assets API URL. */
        assets_url?: string;
        /** The tarball download URL. */
        tarball_url?: string;
        /** The zipball download URL. */
        zipball_url?: string;
        /** The target branch or commit SHA. */
        target_commitish?: string;
        /** The release author. */
        author?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The creation timestamp. */
        created_at?: string;
        /** The publication timestamp. */
        published_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub release by tag name. */
    "github.get_release_by_tag": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The tag name.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** The release ID. */
        id: number;
        /** The release tag name. */
        tag_name: string;
        /** The release name. */
        name?: string | null;
        /** The release body. */
        body?: string | null;
        /** Whether the release is a draft. */
        draft?: boolean;
        /** Whether the release is a prerelease. */
        prerelease?: boolean;
        /** The release URL. */
        html_url?: string;
        /** The assets API URL. */
        assets_url?: string;
        /** The tarball download URL. */
        tarball_url?: string;
        /** The zipball download URL. */
        zipball_url?: string;
        /** The target branch or commit SHA. */
        target_commitish?: string;
        /** The release author. */
        author?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The creation timestamp. */
        created_at?: string;
        /** The publication timestamp. */
        published_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get metadata for a GitHub repository by owner and name. */
    "github.get_repository": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** The repository ID. */
        id: number;
        /** The repository name. */
        name: string;
        /** The full repository name including owner. */
        full_name: string;
        /** Whether the repository is private. */
        private: boolean;
        /** The repository URL. */
        html_url: string;
        /** The HTTPS clone URL. */
        clone_url?: string;
        /** The SSH clone URL. */
        ssh_url?: string;
        /** The repository description. */
        description?: string | null;
        /** The default branch name. */
        default_branch?: string;
        /** The repository visibility. */
        visibility?: string;
        /** Whether the repository is a fork. */
        fork?: boolean;
        /** A GitHub user summary. */
        owner: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a GitHub workflow run by id. */
    "github.get_workflow_run": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The workflow run ID.
         * @exclusiveMinimum 0
         */
        runId: number;
      };
      output: {
        /** The workflow run ID. */
        id: number;
        /** The workflow run name. */
        name?: string;
        /** The display title of the run. */
        display_title?: string;
        /** The parent workflow ID. */
        workflow_id?: number;
        /** The event that triggered the run. */
        event?: string;
        /** The run status. */
        status?: string;
        /** The run conclusion. */
        conclusion?: string | null;
        /** The head branch name. */
        head_branch?: string;
        /** The head commit SHA. */
        head_sha?: string;
        /** The workflow run URL. */
        html_url?: string;
        /** The run number. */
        run_number?: number;
        [key: string]: unknown;
      };
    };
    /** List activity events for a GitHub user and include private events when the authenticated credential belongs to that user. */
    "github.list_authenticated_user_events": {
      input: {
        /**
         * The username.
         * @minLength 1
         */
        username: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of events. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The event type. */
          type?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The repository. */
          repo?: Record<string, unknown>;
          /** The organization. */
          org?: Record<string, unknown>;
          /** The event payload. */
          payload?: Record<string, unknown>;
          /** Whether the event is public. */
          public?: boolean;
          /** The event timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List received activity events for a GitHub user and include private events when the authenticated credential belongs to that user. */
    "github.list_authenticated_user_received_events": {
      input: {
        /**
         * The username.
         * @minLength 1
         */
        username: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of events. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The event type. */
          type?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The repository. */
          repo?: Record<string, unknown>;
          /** The organization. */
          org?: Record<string, unknown>;
          /** The event payload. */
          payload?: Record<string, unknown>;
          /** Whether the event is public. */
          public?: boolean;
          /** The event timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List branches in a GitHub repository. */
    "github.list_branches": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** Whether to list only protected branches. */
        protectedOnly?: boolean;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of branches. */
        branches: Array<{
          /** The branch name. */
          name: string;
          /** The branch head commit. */
          commit: Record<string, unknown>;
          /** Whether the branch is protected. */
          protected?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List GitHub check runs for a commit SHA, branch, or tag. */
    "github.list_check_runs_for_ref": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The commit SHA, branch, or tag.
         * @minLength 1
         */
        ref: string;
        /**
         * The GitHub App ID to filter by.
         * @exclusiveMinimum 0
         */
        appId?: number;
        /** The check run name to filter by. */
        checkName?: string;
        /** The check run filter. */
        filter?: "latest" | "all";
        /** The check run status to filter by. */
        status?: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of check runs. */
        total_count: number;
        /** The list of check runs. */
        check_runs: Array<{
          /** The check run ID. */
          id: number;
          /** The check run name. */
          name: string;
          /** The check run status. */
          status: string;
          /** The check run conclusion. */
          conclusion?: string | null;
          /** The head commit SHA. */
          head_sha: string;
          /** The check run URL. */
          html_url?: string | null;
          /** The details URL. */
          details_url?: string | null;
          /** The start timestamp. */
          started_at?: string | null;
          /** The completion timestamp. */
          completed_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List commits in a GitHub repository with optional branch, path, author, and date filters. */
    "github.list_commits": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The branch name or commit SHA to filter by. */
        sha?: string;
        /** The file path to filter commits by. */
        path?: string;
        /** The author username or email to filter by. */
        author?: string;
        /** The committer username or email to filter by. */
        committer?: string;
        /** The ISO 8601 date to filter commits after. */
        since?: string;
        /** The ISO 8601 date to filter commits before. */
        until?: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of commits. */
        commits: Array<{
          /** The commit SHA. */
          sha: string;
          /** The commit URL. */
          html_url?: string;
          /** The API URL. */
          url?: string;
          /** The commit metadata object. */
          commit: Record<string, unknown>;
          author?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          committer?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          /** The parent commits. */
          parents?: Array<Record<string, unknown>>;
          /** The commit statistics. */
          stats?: Record<string, unknown>;
          /** The files changed in the commit. */
          files?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List entries under a repository directory path. Empty path means repository root. */
    "github.list_directory_contents": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The directory path. */
        path?: string;
        /** The branch, tag, or commit SHA. */
        ref?: string;
      };
      output: {
        /** The directory entries. */
        entries: Array<{
          /** The content entry type. */
          type: "file" | "dir" | "symlink" | "submodule";
          /** The file or directory name. */
          name: string;
          /** The file path. */
          path: string;
          /** The content SHA. */
          sha: string;
          /** The file size in bytes. */
          size?: number;
          /** The content URL. */
          html_url?: string | null;
          /** The download URL. */
          download_url?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List comments under a GitHub issue. */
    "github.list_issue_comments": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of comments. */
        comments: Array<{
          /** The comment ID. */
          id: number;
          /** The comment URL. */
          html_url: string;
          /** The comment body. */
          body: string;
          /** The comment author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The creation timestamp. */
          created_at?: string;
          /** The last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List events for a GitHub issue. */
    "github.list_issue_events": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of issue events. */
        events: Array<{
          /** The event ID. */
          id?: number;
          /** The event type. */
          event?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The event timestamp. */
          created_at?: string;
          commit_id?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List labels applied to a GitHub issue. */
    "github.list_issue_labels": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The labels on the issue. */
        labels: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List timeline events for a GitHub issue. */
    "github.list_issue_timeline_events": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of timeline events. */
        events: Array<{
          /** The event ID. */
          id?: number;
          /** The event type. */
          event?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The event timestamp. */
          created_at?: string;
          commit_id?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List repositories visible to the authenticated GitHub user. */
    "github.list_my_repositories": {
      input: {
        /** The visibility filter. */
        visibility?: "all" | "public" | "private";
        /** The sort field. */
        sort?: "created" | "updated" | "pushed" | "full_name";
        /** The sort direction. */
        direction?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of repositories. */
        repositories: Array<{
          /** The repository ID. */
          id: number;
          /** The repository name. */
          name: string;
          /** The full repository name including owner. */
          full_name: string;
          /** Whether the repository is private. */
          private: boolean;
          /** The repository URL. */
          html_url: string;
          /** The HTTPS clone URL. */
          clone_url?: string;
          /** The SSH clone URL. */
          ssh_url?: string;
          /** The repository description. */
          description?: string | null;
          /** The default branch name. */
          default_branch?: string;
          /** The repository visibility. */
          visibility?: string;
          /** Whether the repository is a fork. */
          fork?: boolean;
          /** A GitHub user summary. */
          owner: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the global public GitHub event feed. */
    "github.list_public_events": {
      input: {
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of public events. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The event type. */
          type?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The repository. */
          repo?: Record<string, unknown>;
          /** The organization. */
          org?: Record<string, unknown>;
          /** The event payload. */
          payload?: Record<string, unknown>;
          /** Whether the event is public. */
          public?: boolean;
          /** The event timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List commits on a GitHub pull request. */
    "github.list_pull_request_commits": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The commits on the pull request. */
        commits: Array<{
          /** The commit SHA. */
          sha: string;
          /** The commit URL. */
          html_url?: string;
          /** The API URL. */
          url?: string;
          /** The commit metadata object. */
          commit: Record<string, unknown>;
          author?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          committer?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          /** The parent commits. */
          parents?: Array<Record<string, unknown>>;
          /** The commit statistics. */
          stats?: Record<string, unknown>;
          /** The files changed in the commit. */
          files?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List files changed in a GitHub pull request. */
    "github.list_pull_request_files": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The changed files. */
        files: Array<Record<string, unknown>>;
      };
    };
    /** List requested reviewers on a GitHub pull request. */
    "github.list_pull_request_requested_reviewers": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
      };
      output: {
        /** The requested individual reviewers. */
        users: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The requested team reviewers. */
        teams: Array<Record<string, unknown>>;
      };
    };
    /** List review comments on a GitHub pull request. */
    "github.list_pull_request_review_comments": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The sort field. */
        sort?: "created" | "updated";
        /** The sort direction. */
        direction?: "asc" | "desc";
        /** The ISO 8601 date to filter comments after. */
        since?: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of review comments. */
        comments: Array<{
          /** The comment ID. */
          id: number;
          /** The file path the comment applies to. */
          path: string;
          /** The comment body. */
          body: string;
          /** The comment author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The commit SHA the comment applies to. */
          commit_id?: string;
          /** The original commit SHA. */
          original_commit_id?: string;
          /** The diff hunk the comment applies to. */
          diff_hunk?: string;
          /** The comment URL. */
          html_url?: string;
          line?: number | null;
          start_line?: number | null;
          /** The side of the diff. */
          side?: string;
          start_side?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List reviews for a GitHub pull request. */
    "github.list_pull_request_reviews": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of reviews. */
        reviews: Array<{
          /** The review ID. */
          id: number;
          /** The reviewer. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The review body. */
          body?: string | null;
          /** The review state. */
          state?: string;
          /** The review URL. */
          html_url?: string;
          /** The reviewed commit SHA. */
          commit_id?: string;
          /** The submission timestamp. */
          submitted_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List pull requests for a GitHub repository. */
    "github.list_pull_requests": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The pull request state filter. */
        state?: "open" | "closed" | "all";
        /** The head branch filter in user:ref-name format. */
        head?: string;
        /** The base branch name filter. */
        base?: string;
        /** The sort field. */
        sort?: "created" | "updated" | "popularity" | "long-running";
        /** The sort direction. */
        direction?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of pull requests. */
        pull_requests: Array<{
          /** The pull request ID. */
          id: number;
          /** The pull request number. */
          number: number;
          /** The pull request state. */
          state: string;
          /** The pull request title. */
          title: string;
          /** The pull request body. */
          body?: string | null;
          /** The pull request URL. */
          html_url: string;
          /** Whether the pull request is a draft. */
          draft?: boolean;
          /** The pull request author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The head branch reference. */
          head: Record<string, unknown>;
          /** The base branch reference. */
          base: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List pull requests associated with a commit SHA. */
    "github.list_pull_requests_associated_with_commit": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The commit SHA.
         * @minLength 1
         */
        commitSha: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The associated pull requests. */
        pull_requests: Array<{
          /** The pull request ID. */
          id: number;
          /** The pull request number. */
          number: number;
          /** The pull request state. */
          state: string;
          /** The pull request title. */
          title: string;
          /** The pull request body. */
          body?: string | null;
          /** The pull request URL. */
          html_url: string;
          /** Whether the pull request is a draft. */
          draft?: boolean;
          /** The pull request author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The head branch reference. */
          head: Record<string, unknown>;
          /** The base branch reference. */
          base: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List assets attached to a GitHub release. */
    "github.list_release_assets": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The release ID.
         * @exclusiveMinimum 0
         */
        releaseId: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of release assets. */
        assets: Array<{
          /** The asset ID. */
          id: number;
          /** The asset file name. */
          name: string;
          /** The asset label. */
          label?: string | null;
          /** The asset state. */
          state?: string;
          /** The asset MIME type. */
          content_type?: string;
          /** The asset file size in bytes. */
          size?: number;
          /** The number of downloads. */
          download_count?: number;
          /** The browser download URL. */
          browser_download_url?: string;
          /** The asset uploader. */
          uploader?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The creation timestamp. */
          created_at?: string;
          /** The last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List releases for a GitHub repository. */
    "github.list_releases": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of releases. */
        releases: Array<{
          /** The release ID. */
          id: number;
          /** The release tag name. */
          tag_name: string;
          /** The release name. */
          name?: string | null;
          /** The release body. */
          body?: string | null;
          /** Whether the release is a draft. */
          draft?: boolean;
          /** Whether the release is a prerelease. */
          prerelease?: boolean;
          /** The release URL. */
          html_url?: string;
          /** The assets API URL. */
          assets_url?: string;
          /** The tarball download URL. */
          tarball_url?: string;
          /** The zipball download URL. */
          zipball_url?: string;
          /** The target branch or commit SHA. */
          target_commitish?: string;
          /** The release author. */
          author?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The creation timestamp. */
          created_at?: string;
          /** The publication timestamp. */
          published_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List recent GitHub events for a repository. */
    "github.list_repository_events": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of repository events. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The event type. */
          type?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The repository. */
          repo?: Record<string, unknown>;
          /** The organization. */
          org?: Record<string, unknown>;
          /** The event payload. */
          payload?: Record<string, unknown>;
          /** Whether the event is public. */
          public?: boolean;
          /** The event timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List issue events across a GitHub repository. */
    "github.list_repository_issue_events": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of repository issue events. */
        events: Array<{
          /** The event ID. */
          id?: number;
          /** The event type. */
          event?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The event timestamp. */
          created_at?: string;
          commit_id?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List issues for a GitHub repository. Pull requests are filtered out from the response. */
    "github.list_repository_issues": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The issue state filter. */
        state?: "open" | "closed" | "all";
        /** The labels to filter by. */
        labels?: Array<string>;
        /** The sort field. */
        sort?: "created" | "updated" | "comments";
        /** The sort direction. */
        direction?: "asc" | "desc";
        /** The ISO 8601 date to filter issues updated after. */
        since?: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of issues. */
        issues: Array<{
          /** The issue ID. */
          id: number;
          /** The issue number. */
          number: number;
          /** The issue title. */
          title: string;
          /** The issue state. */
          state: string;
          /** The issue URL. */
          html_url: string;
          /** The issue body. */
          body?: string | null;
          /** The number of comments. */
          comments?: number;
          /** The issue author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The assigned users. */
          assignees?: Array<{
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          }>;
          /** The issue labels. */
          labels?: Array<{
            /** The label ID. */
            id?: number;
            /** The label name. */
            name: string;
            /** The label color hex code. */
            color?: string;
            /** The label description. */
            description?: string | null;
            [key: string]: unknown;
          } | string>;
          /** The linked pull request metadata. */
          pull_request?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List labels available in a GitHub repository. */
    "github.list_repository_labels": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of labels. */
        labels: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List workflows configured in a GitHub repository. */
    "github.list_repository_workflows": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of workflows. */
        total_count: number;
        /** The list of workflows. */
        workflows: Array<{
          /** The workflow ID. */
          id: number;
          /** The workflow name. */
          name: string;
          /** The workflow file path. */
          path: string;
          /** The workflow state. */
          state?: string;
          /** The workflow URL. */
          html_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List public GitHub events performed by a user. */
    "github.list_user_public_events": {
      input: {
        /**
         * The username.
         * @minLength 1
         */
        username: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of events. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The event type. */
          type?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The repository. */
          repo?: Record<string, unknown>;
          /** The organization. */
          org?: Record<string, unknown>;
          /** The event payload. */
          payload?: Record<string, unknown>;
          /** Whether the event is public. */
          public?: boolean;
          /** The event timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List public GitHub events received by a user. */
    "github.list_user_received_public_events": {
      input: {
        /**
         * The username.
         * @minLength 1
         */
        username: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The list of events. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The event type. */
          type?: string;
          /** The user who triggered the event. */
          actor?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The repository. */
          repo?: Record<string, unknown>;
          /** The organization. */
          org?: Record<string, unknown>;
          /** The event payload. */
          payload?: Record<string, unknown>;
          /** Whether the event is public. */
          public?: boolean;
          /** The event timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List jobs for a GitHub workflow run. */
    "github.list_workflow_run_jobs": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The workflow run ID.
         * @exclusiveMinimum 0
         */
        runId: number;
        /** The job filter. */
        filter?: "latest" | "all";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of jobs. */
        total_count: number;
        /** The list of jobs. */
        jobs: Array<{
          /** The job ID. */
          id: number;
          /** The parent workflow run ID. */
          run_id?: number;
          /** The job name. */
          name: string;
          /** The job status. */
          status?: string;
          /** The job conclusion. */
          conclusion?: string | null;
          /** The job URL. */
          html_url?: string;
          /** The start timestamp. */
          started_at?: string | null;
          /** The completion timestamp. */
          completed_at?: string | null;
          /** The job steps. */
          steps?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List GitHub workflow runs for a repository. */
    "github.list_workflow_runs": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The actor username to filter by. */
        actor?: string;
        /** The branch name to filter by. */
        branch?: string;
        /** The created date filter query. */
        created?: string;
        /**
         * The check suite ID to filter by.
         * @exclusiveMinimum 0
         */
        checkSuiteId?: number;
        /** The event type to filter by. */
        event?: string;
        /** The head commit SHA to filter by. */
        headSha?: string;
        /** The run status to filter by. */
        status?: string;
        /** Whether to exclude pull request runs. */
        excludePullRequests?: boolean;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of workflow runs. */
        total_count: number;
        /** The list of workflow runs. */
        workflow_runs: Array<{
          /** The workflow run ID. */
          id: number;
          /** The workflow run name. */
          name?: string;
          /** The display title of the run. */
          display_title?: string;
          /** The parent workflow ID. */
          workflow_id?: number;
          /** The event that triggered the run. */
          event?: string;
          /** The run status. */
          status?: string;
          /** The run conclusion. */
          conclusion?: string | null;
          /** The head branch name. */
          head_branch?: string;
          /** The head commit SHA. */
          head_sha?: string;
          /** The workflow run URL. */
          html_url?: string;
          /** The run number. */
          run_number?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Lock a GitHub issue conversation. */
    "github.lock_issue": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** The reason for locking. */
        lockReason?: "off-topic" | "too heated" | "resolved" | "spam";
      };
      output: {
        /** Whether the issue is locked. */
        locked: true;
      };
    };
    /** Merge one branch into another in a GitHub repository. */
    "github.merge_branch": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The base branch to merge into.
         * @minLength 1
         */
        base: string;
        /**
         * The head branch to merge from.
         * @minLength 1
         */
        head: string;
        /** The merge commit message. */
        commitMessage?: string;
      };
      output: {
        /** The commit SHA. */
        sha: string;
        /** The commit URL. */
        html_url?: string;
        /** The API URL. */
        url?: string;
        /** The commit metadata object. */
        commit: Record<string, unknown>;
        author?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        } | null;
        committer?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        } | null;
        /** The parent commits. */
        parents?: Array<Record<string, unknown>>;
        /** The commit statistics. */
        stats?: Record<string, unknown>;
        /** The files changed in the commit. */
        files?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Merge a GitHub pull request. */
    "github.merge_pull_request": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The merge commit title. */
        commitTitle?: string;
        /** The merge commit message. */
        commitMessage?: string;
        /** The expected head SHA for optimistic locking. */
        sha?: string;
        /** The merge method. */
        mergeMethod?: "merge" | "squash" | "rebase";
      };
      output: {
        /** The merge commit SHA. */
        sha: string;
        /** Whether the pull request was merged. */
        merged: boolean;
        /** The merge result message. */
        message: string;
      };
    };
    /** Remove assignees from a GitHub issue. */
    "github.remove_issue_assignees": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The usernames to remove.
         * @minItems 1
         */
        assignees: Array<string>;
      };
      output: {
        /** The issue ID. */
        id: number;
        /** The issue number. */
        number: number;
        /** The issue title. */
        title: string;
        /** The issue state. */
        state: string;
        /** The issue URL. */
        html_url: string;
        /** The issue body. */
        body?: string | null;
        /** The number of comments. */
        comments?: number;
        /** The issue author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The assigned users. */
        assignees?: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The issue labels. */
        labels?: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        } | string>;
        /** The linked pull request metadata. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Remove one label from a GitHub issue. */
    "github.remove_issue_label": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * The label name to remove.
         * @minLength 1
         */
        label: string;
      };
      output: {
        /** The remaining labels on the issue. */
        labels: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Remove requested reviewers from a GitHub pull request. */
    "github.remove_pull_request_reviewers": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The individual reviewers to remove. */
        reviewers?: Array<string>;
        /** The team reviewers to remove. */
        teamReviewers?: Array<string>;
      };
      output: {
        /** The pull request. */
        pull_request: {
          /** The pull request ID. */
          id: number;
          /** The pull request number. */
          number: number;
          /** The pull request state. */
          state: string;
          /** The pull request title. */
          title: string;
          /** The pull request body. */
          body?: string | null;
          /** The pull request URL. */
          html_url: string;
          /** Whether the pull request is a draft. */
          draft?: boolean;
          /** The pull request author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The head branch reference. */
          head: Record<string, unknown>;
          /** The base branch reference. */
          base: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The requested individual reviewers. */
        requested_reviewers: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The requested team reviewers. */
        requested_teams: Array<Record<string, unknown>>;
      };
    };
    /** Rename a branch in a GitHub repository. */
    "github.rename_branch": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The current branch name.
         * @minLength 1
         */
        branch: string;
        /**
         * The new branch name.
         * @minLength 1
         */
        newName: string;
      };
      output: {
        /** The branch name. */
        name: string;
        /** The branch head commit. */
        commit: Record<string, unknown>;
        /** Whether the branch is protected. */
        protected?: boolean;
        [key: string]: unknown;
      };
    };
    /** Reply to a top-level GitHub pull request review comment. */
    "github.reply_pull_request_review_comment": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /**
         * The comment ID to reply to.
         * @exclusiveMinimum 0
         */
        commentId: number;
        /**
         * The reply body.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** The comment ID. */
        id: number;
        /** The file path the comment applies to. */
        path: string;
        /** The comment body. */
        body: string;
        /** The comment author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The commit SHA the comment applies to. */
        commit_id?: string;
        /** The original commit SHA. */
        original_commit_id?: string;
        /** The diff hunk the comment applies to. */
        diff_hunk?: string;
        /** The comment URL. */
        html_url?: string;
        line?: number | null;
        start_line?: number | null;
        /** The side of the diff. */
        side?: string;
        start_side?: string | null;
        [key: string]: unknown;
      };
    };
    /** Request reviewers on a GitHub pull request. */
    "github.request_pull_request_reviewers": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The individual reviewers to request. */
        reviewers?: Array<string>;
        /** The team reviewers to request. */
        teamReviewers?: Array<string>;
      };
      output: {
        /** The pull request. */
        pull_request: {
          /** The pull request ID. */
          id: number;
          /** The pull request number. */
          number: number;
          /** The pull request state. */
          state: string;
          /** The pull request title. */
          title: string;
          /** The pull request body. */
          body?: string | null;
          /** The pull request URL. */
          html_url: string;
          /** Whether the pull request is a draft. */
          draft?: boolean;
          /** The pull request author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The head branch reference. */
          head: Record<string, unknown>;
          /** The base branch reference. */
          base: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The requested individual reviewers. */
        requested_reviewers: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The requested team reviewers. */
        requested_teams: Array<Record<string, unknown>>;
      };
    };
    /** Re-request a GitHub check run. */
    "github.rerequest_check_run": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The check run ID.
         * @exclusiveMinimum 0
         */
        checkRunId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Re-request a GitHub check suite. */
    "github.rerequest_check_suite": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The check suite ID.
         * @exclusiveMinimum 0
         */
        checkSuiteId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Re-run a GitHub Actions workflow run. */
    "github.rerun_workflow": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The workflow run ID.
         * @exclusiveMinimum 0
         */
        runId: number;
        /** Whether to enable debug logging for the rerun. */
        enableDebugLogging?: boolean;
      };
      output: {
        /** Whether the rerun was requested. */
        rerun_requested: boolean;
      };
    };
    /** Search GitHub code with GitHub search syntax. */
    "github.search_code": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /** The sort field. */
        sort?: "indexed" | "updated";
        /** The sort order. */
        order?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The matching code results. */
        items: Array<{
          /** The file name. */
          name: string;
          /** The file path. */
          path: string;
          /** The content SHA. */
          sha: string;
          /** The API URL. */
          url: string;
          /** The Git blob URL. */
          git_url?: string;
          /** The file URL. */
          html_url?: string;
          /** The repository containing the code. */
          repository: {
            /** The repository ID. */
            id?: number;
            /** The full repository name. */
            full_name: string;
            /** The repository URL. */
            html_url?: string;
            /** The repository owner. */
            owner?: {
              /** The user ID. */
              id: number;
              /** The username. */
              login: string;
              /** The avatar URL. */
              avatar_url?: string;
              /** The profile URL. */
              html_url?: string;
              /** The account type. */
              type?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Search GitHub commits by commit-message text and qualifiers. */
    "github.search_commits": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /** The sort field. */
        sort?: "author-date" | "committer-date";
        /** The sort order. */
        order?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The matching commits. */
        items: Array<{
          /** The commit SHA. */
          sha: string;
          /** The commit URL. */
          html_url?: string;
          /** The API URL. */
          url?: string;
          /** The commit metadata object. */
          commit: Record<string, unknown>;
          author?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          committer?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          } | null;
          /** The repository the commit belongs to. */
          repository?: {
            /** The repository ID. */
            id?: number;
            /** The full repository name. */
            full_name: string;
            /** The repository URL. */
            html_url?: string;
            [key: string]: unknown;
          };
          /** The search relevance score. */
          score?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search GitHub issues and pull requests with raw GitHub search syntax or structured filters. */
    "github.search_issues_and_pull_requests": {
      input: {
        /**
         * The raw GitHub search query.
         * @maxLength 256
         */
        query?: string;
        /**
         * An alias for the raw GitHub search query.
         * @maxLength 256
         */
        q?: string;
        /** The repository owner to filter by. */
        owner?: string;
        /** The repository name to filter by. */
        repo?: string;
        /** The state filter. */
        state?: "open" | "closed" | "all";
        /** The label to filter by. */
        label?: string;
        /** The author username to filter by. */
        author?: string;
        /** The assignee username to filter by. */
        assignee?: string;
        /** The mentioned username to filter by. */
        mentions?: string;
        /** The programming language to filter by. */
        language?: string;
        /** The base branch to filter by. */
        baseBranch?: string;
        /** The head branch to filter by. */
        headBranch?: string;
        /** Whether to filter by merged status. */
        isMerged?: boolean;
        /** The result type filter. */
        type?: "issue" | "pr";
        /** The sort field. */
        sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated";
        /** The sort order. */
        order?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The search result items. */
        items: Array<{
          /** The issue or pull request ID. */
          id: number;
          /** The issue or pull request number. */
          number?: number;
          /** The title. */
          title: string;
          /** The URL. */
          html_url: string;
          /** The state. */
          state?: string;
          /** The body. */
          body?: string | null;
          /** The repository API URL. */
          repository_url?: string;
          /** The linked pull request metadata. */
          pull_request?: Record<string, unknown>;
          /** The author. */
          user?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Search labels within a GitHub repository by repository id and query. */
    "github.search_labels": {
      input: {
        /**
         * The repository ID to search within.
         * @exclusiveMinimum 0
         */
        repositoryId: number;
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /** The sort field. */
        sort?: "created" | "updated";
        /** The sort order. */
        order?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The matching labels. */
        items: Array<{
          /** The label ID. */
          id: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          /** The search relevance score. */
          score?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search GitHub repositories with GitHub search syntax. */
    "github.search_repositories": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /** The sort field. */
        sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
        /** The sort order. */
        order?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The matching repositories. */
        repositories: Array<{
          /** The repository ID. */
          id: number;
          /** The repository name. */
          name: string;
          /** The full repository name including owner. */
          full_name: string;
          /** The repository URL. */
          html_url: string;
          /** The repository description. */
          description?: string | null;
          /** Whether the repository is private. */
          private?: boolean;
          /** The number of stars. */
          stargazers_count?: number;
          /** The primary programming language. */
          language?: string | null;
          /** The repository owner. */
          owner?: {
            /** The user ID. */
            id: number;
            /** The username. */
            login: string;
            /** The avatar URL. */
            avatar_url?: string;
            /** The profile URL. */
            html_url?: string;
            /** The account type. */
            type?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Search GitHub topics with GitHub search syntax. */
    "github.search_topics": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The matching topics. */
        items: Array<{
          /** The topic name. */
          name: string;
          /** The display name. */
          display_name?: string;
          /** The short description. */
          short_description?: string;
          /** The full description. */
          description?: string;
          /** Whether the topic is featured. */
          featured?: boolean;
          /** Whether the topic is curated. */
          curated?: boolean;
          /** The search relevance score. */
          score?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search GitHub users with GitHub search syntax. */
    "github.search_users": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /** The sort field. */
        sort?: "followers" | "repositories" | "joined";
        /** The sort order. */
        order?: "asc" | "desc";
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The total number of matching results. */
        total_count: number;
        /** Whether the results are incomplete. */
        incomplete_results: boolean;
        /** The matching users. */
        items: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The account type. */
          type?: string;
          /** The profile URL. */
          html_url?: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The search relevance score. */
          score?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Replace all labels on a GitHub issue. */
    "github.set_issue_labels": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** The labels to set. */
        labels: Array<string>;
      };
      output: {
        /** The labels on the issue after replacement. */
        labels: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Submit a pending GitHub pull request review. */
    "github.submit_pull_request_review": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /**
         * The review ID to submit.
         * @exclusiveMinimum 0
         */
        reviewId: number;
        /** The review event type. */
        event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
        /** The review body. */
        body?: string;
      };
      output: {
        /** The review ID. */
        id: number;
        /** The reviewer. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The review body. */
        body?: string | null;
        /** The review state. */
        state?: string;
        /** The review URL. */
        html_url?: string;
        /** The reviewed commit SHA. */
        commit_id?: string;
        /** The submission timestamp. */
        submitted_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Sync a fork branch with its upstream branch. */
    "github.sync_fork_branch_with_upstream": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The branch name to sync.
         * @minLength 1
         */
        branch: string;
      };
      output: Record<string, unknown>;
    };
    /** Unlock a GitHub issue conversation. */
    "github.unlock_issue": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
      };
      output: {
        /** Whether the issue is locked. */
        locked: false;
      };
    };
    /** Update a GitHub issue by number. */
    "github.update_issue": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The issue number.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** The new issue title. */
        title?: string;
        /** The new issue body. */
        body?: string;
        /** The new issue state. */
        state?: "open" | "closed";
        /** The usernames to assign. */
        assignees?: Array<string>;
        /** The labels to set. */
        labels?: Array<string>;
        milestone?: number | null;
      };
      output: {
        /** The issue ID. */
        id: number;
        /** The issue number. */
        number: number;
        /** The issue title. */
        title: string;
        /** The issue state. */
        state: string;
        /** The issue URL. */
        html_url: string;
        /** The issue body. */
        body?: string | null;
        /** The number of comments. */
        comments?: number;
        /** The issue author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The assigned users. */
        assignees?: Array<{
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The issue labels. */
        labels?: Array<{
          /** The label ID. */
          id?: number;
          /** The label name. */
          name: string;
          /** The label color hex code. */
          color?: string;
          /** The label description. */
          description?: string | null;
          [key: string]: unknown;
        } | string>;
        /** The linked pull request metadata. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a GitHub pull request title, body, state, base branch, or maintainer-can-modify flag. */
    "github.update_pull_request": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The new pull request title. */
        title?: string;
        /** The new pull request body. */
        body?: string;
        /** The new pull request state. */
        state?: "open" | "closed";
        /** The new base branch name. */
        base?: string;
        /** Whether maintainers can modify the pull request. */
        maintainerCanModify?: boolean;
      };
      output: {
        /** The pull request ID. */
        id: number;
        /** The pull request number. */
        number: number;
        /** The pull request state. */
        state: string;
        /** The pull request title. */
        title: string;
        /** The pull request body. */
        body?: string | null;
        /** The pull request URL. */
        html_url: string;
        /** Whether the pull request is a draft. */
        draft?: boolean;
        /** The pull request author. */
        user?: {
          /** The user ID. */
          id: number;
          /** The username. */
          login: string;
          /** The avatar URL. */
          avatar_url?: string;
          /** The profile URL. */
          html_url?: string;
          /** The account type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The head branch reference. */
        head: Record<string, unknown>;
        /** The base branch reference. */
        base: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a GitHub pull request branch with the latest base branch changes. */
    "github.update_pull_request_branch": {
      input: {
        /**
         * The repository owner.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /**
         * The pull request number.
         * @exclusiveMinimum 0
         */
        pullNumber: number;
        /** The expected head SHA for optimistic locking. */
        expectedHeadSha?: string;
      };
      output: {
        /** The update result message. */
        message: string;
        /** The URL of the updated branch. */
        url: string;
      };
    };
  }
}
