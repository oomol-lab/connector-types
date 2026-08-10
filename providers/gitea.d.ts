import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a collaborator to a Gitea repository. */
    "gitea.add_collaborator": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Username of the collaborator to add.
         * @minLength 1
         */
        collaborator: string;
        /** Permission level of the collaborator. */
        permission?: "read" | "write" | "admin";
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Add labels to a Gitea issue. */
    "gitea.add_issue_labels": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** Label IDs to add to the issue. */
        labels?: Array<number>;
      };
      output: {
        /** Labels returned by the request. */
        labels: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** Total number of matching labels from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** Check whether a Gitea pull request has been merged. */
    "gitea.check_pull_request_merged": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
      };
      output: {
        /** Whether the pull request has been merged. */
        merged: boolean;
      };
    };
    /** Remove all labels from a Gitea issue. */
    "gitea.clear_issue_labels": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Create a new branch in a Gitea repository. */
    "gitea.create_branch": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the new branch to create.
         * @minLength 1
         */
        newBranchName: string;
        /**
         * Branch, tag or commit SHA the new branch is created from.
         * @minLength 1
         */
        oldRefName?: string;
      };
      output: {
        /** Branch name. */
        name?: string;
        /** Whether the branch is protected. */
        protected?: boolean;
        /** Whether the current user can push to the branch. */
        user_can_push?: boolean;
        /** Whether the current user can merge to the branch. */
        user_can_merge?: boolean;
        /** Name of the effective branch protection rule. */
        effective_branch_protection_name?: string | null;
        /** A Gitea API object. */
        commit?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a commit status for a commit SHA in a Gitea repository. */
    "gitea.create_commit_status": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Commit SHA to attach the status to.
         * @minLength 1
         */
        sha: string;
        /** Status state. */
        state: "pending" | "success" | "error" | "failure" | "warning" | "skipped";
        /**
         * Unique context identifier for the status.
         * @minLength 1
         */
        context?: string;
        /** Short description of the status. */
        description?: string;
        /**
         * URL with more details about the status.
         * @minLength 1
         */
        targetUrl?: string;
      };
      output: {
        /** Numeric status ID. */
        id?: number;
        /** Status context. */
        context?: string;
        /** Status description. */
        description?: string | null;
        /** Status state. */
        state?: "pending" | "success" | "error" | "failure" | "warning" | "skipped";
        /** URL with more details about the status. */
        target_url?: string | null;
        /** API URL of the status. */
        url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** A Gitea user record. */
        creator?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a file in a Gitea repository. */
    "gitea.create_file": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Path of the file to create.
         * @minLength 1
         */
        filePath: string;
        /**
         * Content of the file. It is base64 encoded automatically before sending.
         * @minLength 1
         */
        content: string;
        /** Commit message for the change. */
        message?: string;
        /** Base branch for the change. Defaults to the repository default branch. */
        branch?: string;
        /** Create the commit on a new branch based on the base branch. */
        newBranch?: string;
        /** Author name for the commit. */
        authorName?: string;
        /** Author email for the commit. */
        authorEmail?: string;
        /** Committer name for the commit. */
        committerName?: string;
        /** Committer email for the commit. */
        committerEmail?: string;
        /** Add a Signed-off-by trailer to the commit. */
        signoff?: boolean;
        /** Force-push if the new branch already exists. */
        forcePush?: boolean;
      };
      output: {
        /** A Gitea repository contents entry. */
        content?: {
          /** Entry type: file, dir, symlink or submodule. */
          type?: string;
          /** Content encoding, populated when type is file. */
          encoding?: string | null;
          /** File content, populated when type is file and encoded as base64. */
          content?: string | null;
          /** File size in bytes. */
          size?: number;
          /** Entry name. */
          name?: string;
          /** Full path of the entry. */
          path?: string;
          /** Git blob or tree SHA. */
          sha?: string;
          /** HTML URL of the entry. */
          html_url?: string;
          /** Git API URL of the entry. */
          git_url?: string;
          /** Direct download URL of the entry. */
          download_url?: string | null;
          /** API URL of the entry. */
          url?: string;
          /** Symlink target when type is symlink. */
          target?: string | null;
          /** Submodule git URL when type is submodule. */
          submodule_git_url?: string | null;
          /** SHA of the last commit that affected this entry. */
          last_commit_sha?: string;
          [key: string]: unknown;
        } | null;
        /** A Gitea commit created by a file operation. */
        commit?: {
          /** Commit SHA. */
          sha?: string;
          /** Commit message. */
          message?: string;
          /** API URL of the commit. */
          url?: string;
          /** HTML URL of the commit. */
          html_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** A git identity recorded on a commit. */
          author?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** A git identity recorded on a commit. */
          committer?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** Parent commits of this commit. */
          parents?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create an issue in a Gitea repository. */
    "gitea.create_issue": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Title of the issue.
         * @minLength 1
         */
        title: string;
        /** Body of the issue. */
        body?: string;
        /** Usernames to assign to the issue. */
        assignees?: Array<string>;
        /** Label IDs to attach to the issue. */
        labelIds?: Array<number>;
        /**
         * Milestone ID to attach to the issue.
         * @exclusiveMinimum 0
         */
        milestoneId?: number;
        /**
         * Git reference associated with the issue.
         * @minLength 1
         */
        ref?: string;
        /**
         * Issue deadline in RFC 3339 format. Gitea only uses the date component.
         * @minLength 1
         */
        dueDate?: string;
        /** Whether the issue should be created in the closed state. */
        closed?: boolean;
      };
      output: {
        /** Numeric issue ID. */
        id?: number;
        /** Issue number within the repository. */
        number?: number;
        /** Issue title. */
        title?: string;
        /** Issue body. */
        body?: string | null;
        /** Issue state. */
        state?: string;
        /** HTML URL of the issue. */
        html_url?: string;
        /** API URL of the issue. */
        url?: string;
        /** Number of comments on the issue. */
        comments?: number;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** Timestamp when the issue was closed. */
        closed_at?: string | null;
        /** Issue due date. */
        due_date?: string | null;
        /** Git reference associated with the issue. */
        ref?: string | null;
        /** Whether the issue is locked. */
        is_locked?: boolean;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        assignee?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the issue. */
        assignees?: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the issue. */
        labels?: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** A Gitea milestone. */
        milestone?: {
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        } | null;
        /** A compact Gitea repository record. */
        repository?: {
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        /** A Gitea API object. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a comment on a Gitea issue. */
    "gitea.create_issue_comment": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * Comment body.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** Numeric comment ID. */
        id?: number;
        /** Comment body. */
        body?: string;
        /** HTML URL of the comment. */
        html_url?: string;
        /** API URL of the parent issue. */
        issue_url?: string;
        /** API URL of the related pull request. */
        pull_request_url?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Attachments included with the comment. */
        assets?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a label in a Gitea repository. */
    "gitea.create_label": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Display name of the label.
         * @minLength 1
         */
        name: string;
        /**
         * Hex color of the label, for example #00aabb.
         * @minLength 1
         */
        color: string;
        /** Description of the label. */
        description?: string;
        /** Whether the label is exclusive. */
        exclusive?: boolean;
        /** Whether the label is archived. */
        isArchived?: boolean;
      };
      output: {
        /** Numeric label ID. */
        id?: number;
        /** Label name. */
        name?: string;
        /** Hex color value configured for the label. */
        color?: string;
        /** Description configured for the label. */
        description?: string | null;
        /** Whether the label is exclusive. */
        exclusive?: boolean;
        /** Whether the label is archived. */
        is_archived?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a milestone in a Gitea repository. */
    "gitea.create_milestone": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Title of the milestone.
         * @minLength 1
         */
        title: string;
        /** Description of the milestone. */
        description?: string;
        /** Initial state of the milestone. */
        state?: "open" | "closed";
        /**
         * Due date of the milestone in RFC 3339 format.
         * @minLength 1
         */
        dueOn?: string;
      };
      output: {
        /** Numeric milestone ID. */
        id?: number;
        /** Milestone title. */
        title?: string;
        /** Current milestone state. */
        state?: string;
        /** Milestone description. */
        description?: string | null;
        /** Due date of the milestone. */
        due_on?: string | null;
        /** Timestamp when the milestone was closed. */
        closed_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a pull request in a Gitea repository. */
    "gitea.create_pull_request": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Title of the pull request.
         * @minLength 1
         */
        title: string;
        /** Body of the pull request. */
        body?: string;
        /**
         * The base branch the pull request targets.
         * @minLength 1
         */
        base: string;
        /**
         * The head branch to merge from. Use branch name, or owner:branch for cross-repository pull requests.
         * @minLength 1
         */
        head: string;
        /** Usernames to assign to the pull request. */
        assignees?: Array<string>;
        /** Label IDs to attach to the pull request. */
        labelIds?: Array<number>;
        /**
         * Milestone ID to attach to the pull request.
         * @exclusiveMinimum 0
         */
        milestoneId?: number;
        /** Usernames to request review from. */
        reviewers?: Array<string>;
        /** Team names to request review from. */
        teamReviewers?: Array<string>;
        /** Whether maintainers can edit the pull request. */
        allowMaintainerEdit?: boolean;
        /**
         * Pull request deadline in RFC 3339 format. Gitea only uses the date component.
         * @minLength 1
         */
        dueDate?: string;
      };
      output: {
        /** Numeric pull request ID. */
        id?: number;
        /** Pull request number within the repository. */
        number?: number;
        /** Pull request title. */
        title?: string;
        /** Pull request body. */
        body?: string | null;
        /** Pull request state. */
        state?: string;
        /** HTML URL of the pull request. */
        html_url?: string;
        /** A Gitea pull request branch reference. */
        base?: {
          /** Branch label including the repository owner. */
          label?: string;
          /** Branch reference name. */
          ref?: string;
          /** Commit SHA the branch points to. */
          sha?: string;
          /** Numeric ID of the repository the branch belongs to. */
          repo_id?: number;
          /** Full repository name the branch belongs to. */
          repo_name?: string;
          /** Numeric ID of the repository owner. */
          user_id?: number;
          /** Username of the repository owner. */
          user_name?: string;
          [key: string]: unknown;
        };
        /** A Gitea pull request branch reference. */
        head?: {
          /** Branch label including the repository owner. */
          label?: string;
          /** Branch reference name. */
          ref?: string;
          /** Commit SHA the branch points to. */
          sha?: string;
          /** Numeric ID of the repository the branch belongs to. */
          repo_id?: number;
          /** Full repository name the branch belongs to. */
          repo_name?: string;
          /** Numeric ID of the repository owner. */
          user_id?: number;
          /** Username of the repository owner. */
          user_name?: string;
          [key: string]: unknown;
        };
        /** Whether the pull request can be merged. */
        mergeable?: boolean;
        /** Whether the pull request has been merged. */
        merged?: boolean;
        /** Mergeable state of the pull request. */
        mergeable_state?: string;
        /** SHA of the merge commit when merged. */
        merge_commit_sha?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** Timestamp when the pull request was closed. */
        closed_at?: string | null;
        /** Timestamp when the pull request was merged. */
        merged_at?: string | null;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        assignee?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the pull request. */
        assignees?: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the pull request. */
        labels?: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** A Gitea milestone. */
        milestone?: {
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        } | null;
        /** A compact Gitea repository record. */
        repository?: {
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a review for a Gitea pull request. */
    "gitea.create_pull_request_review": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /** Review body. */
        body?: string;
        /** Review event. */
        event?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
        /** Commit SHA the review is attached to. */
        commitId?: string;
      };
      output: {
        /** Numeric review ID. */
        id?: number;
        /** Review body. */
        body?: string;
        /** Review state. */
        state?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
        /** Commit SHA the review is attached to. */
        commit_id?: string;
        /** Whether the review counts as an official review. */
        official?: boolean;
        /** Whether the review has been dismissed. */
        dismissed?: boolean;
        /** Whether the review is stale. */
        stale?: boolean;
        /** Number of review comments. */
        comments_count?: number;
        /** HTML URL of the review. */
        html_url?: string;
        /** API URL of the pull request. */
        pull_request_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        submitted_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a release in a Gitea repository. */
    "gitea.create_release": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Git tag associated with the release.
         * @minLength 1
         */
        tagName: string;
        /** Display title of the release. */
        name?: string;
        /** Release notes or description. */
        body?: string;
        /**
         * Commit SHA or branch the release targets.
         * @minLength 1
         */
        targetCommitish?: string;
        /** Whether to create the release as a draft. */
        draft?: boolean;
        /** Whether to mark the release as a prerelease. */
        prerelease?: boolean;
        /** Message of the git tag. */
        tagMessage?: string;
      };
      output: {
        /** Numeric release ID. */
        id?: number;
        /** Git tag associated with the release. */
        tag_name?: string;
        /** Release title. */
        name?: string;
        /** Release notes. */
        body?: string | null;
        /** Whether the release is a draft. */
        draft?: boolean;
        /** Whether the release is a prerelease. */
        prerelease?: boolean;
        /** Target commitish of the release. */
        target_commitish?: string;
        /** HTML URL of the release. */
        html_url?: string;
        /** API URL of the release. */
        url?: string;
        /** Tarball download URL. */
        tarball_url?: string;
        /** Zipball download URL. */
        zipball_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp when the release was published. */
        published_at?: string | null;
        /** A Gitea user record. */
        author?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Files attached to the release. */
        assets?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a repository for the authenticated Gitea user. */
    "gitea.create_repository": {
      input: {
        /**
         * Name of the repository to create.
         * @minLength 1
         */
        name: string;
        /** Description of the repository. */
        description?: string;
        /** Whether the repository should be private. */
        private?: boolean;
        /** Whether the repository should be auto-initialized with a README. */
        autoInit?: boolean;
        /**
         * Default branch to use when initializing the repository.
         * @minLength 1
         */
        defaultBranch?: string;
        /** Comma-separated list of gitignore templates to use. */
        gitignores?: string;
        /** License template to use. */
        license?: string;
        /** README template to use. */
        readme?: string;
        /** Label set to use for the repository. */
        issueLabels?: string;
        /** Whether the repository should be a template repository. */
        template?: boolean;
        /** Git object format of the repository. */
        objectFormatName?: "sha1" | "sha256";
        /** Trust model of the repository. */
        trustModel?: "default" | "collaborator" | "committer" | "collaboratorcommitter";
      };
      output: {
        /** Numeric repository ID. */
        id?: number;
        /** Repository name. */
        name?: string;
        /** Full repository name including owner. */
        full_name?: string;
        /** Whether the repository is private. */
        private?: boolean;
        /** HTML URL of the repository. */
        html_url?: string;
        /** HTTPS clone URL of the repository. */
        clone_url?: string;
        /** SSH clone URL of the repository. */
        ssh_url?: string;
        /** Repository description. */
        description?: string | null;
        /** Default branch of the repository. */
        default_branch?: string;
        /** A Gitea user record. */
        owner?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Whether the repository is a fork. */
        fork?: boolean;
        /** Whether the repository is a mirror. */
        mirror?: boolean;
        /** Whether the repository is archived. */
        archived?: boolean;
        /** Whether the repository is empty. */
        empty?: boolean;
        /** Whether issues are enabled. */
        has_issues?: boolean;
        /** Whether pull requests are enabled. */
        has_pull_requests?: boolean;
        /** Whether projects are enabled. */
        has_projects?: boolean;
        /** Whether wiki is enabled. */
        has_wiki?: boolean;
        /** Whether actions are enabled. */
        has_actions?: boolean;
        /** Open issue count. */
        open_issues_count?: number;
        /** Star count. */
        stars_count?: number;
        /** Watcher count. */
        watchers_count?: number;
        /** Fork count. */
        forks_count?: number;
        /** Repository size in kilobytes. */
        size?: number;
        /** Primary language of the repository. */
        language?: string;
        /** Topics configured on the repository. */
        topics?: Array<string>;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a webhook in a Gitea repository. */
    "gitea.create_repository_hook": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** Hook type. */
        type: "dingtalk" | "discord" | "gitea" | "gogs" | "msteams" | "slack" | "telegram" | "feishu" | "wechatwork" | "packagist";
        /** Configuration of the hook. */
        config: {
          /**
           * URL the hook sends requests to.
           * @minLength 1
           */
          url: string;
          /** Content type of the request body. */
          content_type?: "json" | "form";
          /** Secret used to sign hook requests. */
          secret?: string;
          /** Whether to skip TLS verification. Use 'true' or 'false'. */
          insecure_ssl?: string;
        };
        /** Events that trigger the hook. */
        events?: Array<string>;
        /** Whether the hook is active. */
        active?: boolean;
        /** Branch filter pattern of the hook. */
        branchFilter?: string;
        /** Authorization header to include in hook requests. */
        authorizationHeader?: string;
      };
      output: {
        /** Numeric hook ID. */
        id?: number;
        /** Hook type (gitea, slack, discord, etc.). */
        type?: string;
        /** Human-readable hook name. */
        name?: string | null;
        /** Whether the hook is active. */
        active?: boolean;
        /** Events that trigger the hook. */
        events?: Array<string>;
        /** A Gitea API object. */
        config?: Record<string, unknown>;
        /** Branch filter pattern of the hook. */
        branch_filter?: string | null;
        /** Authorization header included in hook requests. */
        authorization_header?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a deploy key in a Gitea repository. */
    "gitea.create_repository_key": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Title of the deploy key.
         * @minLength 1
         */
        title: string;
        /**
         * SSH public key content.
         * @minLength 1
         */
        key: string;
        /** Whether the key should be read-only. */
        readOnly?: boolean;
      };
      output: {
        /** Numeric deploy key ID. */
        id?: number;
        /** SSH public key content. */
        key?: string;
        /** Key title. */
        title?: string;
        /** Whether the key is read-only. */
        read_only?: boolean;
        /** Key fingerprint. */
        fingerprint?: string;
        /** API URL of the deploy key. */
        url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a tag in a Gitea repository. */
    "gitea.create_tag": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the tag to create.
         * @minLength 1
         */
        tagName: string;
        /**
         * Commit SHA or branch name the tag points to. Defaults to the repository default branch.
         * @minLength 1
         */
        target?: string;
        /** Message of the annotated tag. */
        message?: string;
      };
      output: {
        /** ID of the tag object. */
        id?: string;
        /** Tag name. */
        name?: string;
        /** Annotated tag message. */
        message?: string | null;
        /** Commit the tag points to. */
        commit?: {
          /** Commit SHA. */
          id?: string;
          /** Commit message. */
          message?: string;
          /** API URL of the commit. */
          url?: string;
          [key: string]: unknown;
        };
        /** Tarball download URL. */
        tarball_url?: string;
        /** Zipball download URL. */
        zipball_url?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a branch of a Gitea repository. */
    "gitea.delete_branch": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the branch to delete.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a file from a Gitea repository. */
    "gitea.delete_file": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Path of the file to delete.
         * @minLength 1
         */
        filePath: string;
        /**
         * Blob SHA of the file to delete.
         * @minLength 1
         */
        sha: string;
        /** Commit message for the change. */
        message?: string;
        /** Base branch for the change. Defaults to the repository default branch. */
        branch?: string;
        /** Create the commit on a new branch based on the base branch. */
        newBranch?: string;
        /** Author name for the commit. */
        authorName?: string;
        /** Author email for the commit. */
        authorEmail?: string;
        /** Committer name for the commit. */
        committerName?: string;
        /** Committer email for the commit. */
        committerEmail?: string;
        /** Add a Signed-off-by trailer to the commit. */
        signoff?: boolean;
      };
      output: {
        /** A Gitea repository contents entry. */
        content?: {
          /** Entry type: file, dir, symlink or submodule. */
          type?: string;
          /** Content encoding, populated when type is file. */
          encoding?: string | null;
          /** File content, populated when type is file and encoded as base64. */
          content?: string | null;
          /** File size in bytes. */
          size?: number;
          /** Entry name. */
          name?: string;
          /** Full path of the entry. */
          path?: string;
          /** Git blob or tree SHA. */
          sha?: string;
          /** HTML URL of the entry. */
          html_url?: string;
          /** Git API URL of the entry. */
          git_url?: string;
          /** Direct download URL of the entry. */
          download_url?: string | null;
          /** API URL of the entry. */
          url?: string;
          /** Symlink target when type is symlink. */
          target?: string | null;
          /** Submodule git URL when type is submodule. */
          submodule_git_url?: string | null;
          /** SHA of the last commit that affected this entry. */
          last_commit_sha?: string;
          [key: string]: unknown;
        } | null;
        /** A Gitea commit created by a file operation. */
        commit?: {
          /** Commit SHA. */
          sha?: string;
          /** Commit message. */
          message?: string;
          /** API URL of the commit. */
          url?: string;
          /** HTML URL of the commit. */
          html_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** A git identity recorded on a commit. */
          author?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** A git identity recorded on a commit. */
          committer?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** Parent commits of this commit. */
          parents?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a comment from a Gitea issue. */
    "gitea.delete_issue_comment": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the comment to delete.
         * @exclusiveMinimum 0
         */
        commentId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a label from a Gitea repository. */
    "gitea.delete_label": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the label to delete.
         * @exclusiveMinimum 0
         */
        labelId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a milestone from a Gitea repository. */
    "gitea.delete_milestone": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the milestone to delete.
         * @exclusiveMinimum 0
         */
        milestoneId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a review from a Gitea pull request. */
    "gitea.delete_pull_request_review": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * ID of the review to delete.
         * @exclusiveMinimum 0
         */
        reviewId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a release from a Gitea repository. */
    "gitea.delete_release": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the release to delete.
         * @exclusiveMinimum 0
         */
        releaseId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a Gitea repository permanently. */
    "gitea.delete_repository": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a webhook from a Gitea repository. */
    "gitea.delete_repository_hook": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the webhook to delete.
         * @exclusiveMinimum 0
         */
        hookId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a deploy key from a Gitea repository. */
    "gitea.delete_repository_key": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the deploy key to delete.
         * @exclusiveMinimum 0
         */
        keyId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Delete a tag from a Gitea repository. */
    "gitea.delete_tag": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the tag to delete.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Dismiss a review on a Gitea pull request. */
    "gitea.dismiss_pull_request_review": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * ID of the review to dismiss.
         * @exclusiveMinimum 0
         */
        reviewId: number;
        /**
         * Dismissal message shown to the review author.
         * @minLength 1
         */
        message: string;
        /** Whether previous reviews should be dismissed as well. */
        priors?: boolean;
      };
      output: {
        /** Numeric review ID. */
        id?: number;
        /** Review body. */
        body?: string;
        /** Review state. */
        state?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
        /** Commit SHA the review is attached to. */
        commit_id?: string;
        /** Whether the review counts as an official review. */
        official?: boolean;
        /** Whether the review has been dismissed. */
        dismissed?: boolean;
        /** Whether the review is stale. */
        stale?: boolean;
        /** Number of review comments. */
        comments_count?: number;
        /** HTML URL of the review. */
        html_url?: string;
        /** API URL of the pull request. */
        pull_request_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        submitted_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fork a Gitea repository to the authenticated user or an organization. */
    "gitea.fork_repository": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the forked repository. Defaults to the original name.
         * @minLength 1
         */
        name?: string;
        /**
         * Organization name when forking into an organization.
         * @minLength 1
         */
        organization?: string;
      };
      output: {
        /** Numeric repository ID. */
        id?: number;
        /** Repository name. */
        name?: string;
        /** Full repository name including owner. */
        full_name?: string;
        /** Whether the repository is private. */
        private?: boolean;
        /** HTML URL of the repository. */
        html_url?: string;
        /** HTTPS clone URL of the repository. */
        clone_url?: string;
        /** SSH clone URL of the repository. */
        ssh_url?: string;
        /** Repository description. */
        description?: string | null;
        /** Default branch of the repository. */
        default_branch?: string;
        /** A Gitea user record. */
        owner?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Whether the repository is a fork. */
        fork?: boolean;
        /** Whether the repository is a mirror. */
        mirror?: boolean;
        /** Whether the repository is archived. */
        archived?: boolean;
        /** Whether the repository is empty. */
        empty?: boolean;
        /** Whether issues are enabled. */
        has_issues?: boolean;
        /** Whether pull requests are enabled. */
        has_pull_requests?: boolean;
        /** Whether projects are enabled. */
        has_projects?: boolean;
        /** Whether wiki is enabled. */
        has_wiki?: boolean;
        /** Whether actions are enabled. */
        has_actions?: boolean;
        /** Open issue count. */
        open_issues_count?: number;
        /** Star count. */
        stars_count?: number;
        /** Watcher count. */
        watchers_count?: number;
        /** Fork count. */
        forks_count?: number;
        /** Repository size in kilobytes. */
        size?: number;
        /** Primary language of the repository. */
        language?: string;
        /** Topics configured on the repository. */
        topics?: Array<string>;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get a branch of a Gitea repository by name. */
    "gitea.get_branch": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the branch.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /** Branch name. */
        name?: string;
        /** Whether the branch is protected. */
        protected?: boolean;
        /** Whether the current user can push to the branch. */
        user_can_push?: boolean;
        /** Whether the current user can merge to the branch. */
        user_can_merge?: boolean;
        /** Name of the effective branch protection rule. */
        effective_branch_protection_name?: string | null;
        /** A Gitea API object. */
        commit?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the permission level of a Gitea repository collaborator. */
    "gitea.get_collaborator_permission": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Username of the collaborator.
         * @minLength 1
         */
        collaborator: string;
      };
      output: {
        /** Permission levels of a collaborator. */
        permission?: {
          /** Whether the user has admin access. */
          admin?: boolean;
          /** Whether the user has pull access. */
          pull?: boolean;
          /** Whether the user has push access. */
          push?: boolean;
          [key: string]: unknown;
        };
        /** Role name of the collaborator. */
        role_name?: string;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a commit of a Gitea repository by SHA. */
    "gitea.get_commit": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Commit SHA to fetch.
         * @minLength 1
         */
        sha: string;
      };
      output: {
        /** Commit SHA. */
        sha?: string;
        /** API URL of the commit. */
        url?: string;
        /** HTML URL of the commit. */
        html_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created?: string;
        /** Git metadata of the commit. */
        commit?: {
          /** API URL of the git commit object. */
          url?: string;
          /** Commit message. */
          message?: string;
          /** A git identity recorded on a commit. */
          author?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** A git identity recorded on a commit. */
          committer?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** A Gitea API object. */
          tree?: Record<string, unknown>;
          /** A Gitea API object. */
          verification?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        author?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** A Gitea user record. */
        committer?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Parent commits of this commit. */
        parents?: Array<Record<string, unknown>>;
        /** Files touched by the commit when requested. */
        files?: Array<Record<string, unknown>>;
        /** A Gitea API object. */
        stats?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the current authenticated Gitea user profile. */
    "gitea.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Numeric user ID. */
        id?: number;
        /** Username of the Gitea account. */
        login?: string;
        /** Full display name of the user. */
        full_name?: string;
        /** Email address of the user when visible. */
        email?: string;
        /** Avatar URL of the user. */
        avatar_url?: string;
        /** HTML URL of the user profile. */
        html_url?: string;
        /** Preferred language of the user. */
        language?: string;
        /** Profile location of the user. */
        location?: string;
        /** Website configured on the user profile. */
        website?: string;
        /** Profile description or bio of the user. */
        description?: string;
        /** Visibility setting of the user profile. */
        visibility?: string;
        /** Whether the user is a site administrator. */
        is_admin?: boolean;
        /** Whether the user account is restricted. */
        restricted?: boolean;
        /** Whether the user account is active. */
        active?: boolean;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        last_login?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Gitea issue by repository and issue number. */
    "gitea.get_issue": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
      };
      output: {
        /** Numeric issue ID. */
        id?: number;
        /** Issue number within the repository. */
        number?: number;
        /** Issue title. */
        title?: string;
        /** Issue body. */
        body?: string | null;
        /** Issue state. */
        state?: string;
        /** HTML URL of the issue. */
        html_url?: string;
        /** API URL of the issue. */
        url?: string;
        /** Number of comments on the issue. */
        comments?: number;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** Timestamp when the issue was closed. */
        closed_at?: string | null;
        /** Issue due date. */
        due_date?: string | null;
        /** Git reference associated with the issue. */
        ref?: string | null;
        /** Whether the issue is locked. */
        is_locked?: boolean;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        assignee?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the issue. */
        assignees?: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the issue. */
        labels?: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** A Gitea milestone. */
        milestone?: {
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        } | null;
        /** A compact Gitea repository record. */
        repository?: {
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        /** A Gitea API object. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a label of a Gitea repository by ID. */
    "gitea.get_label": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the label.
         * @exclusiveMinimum 0
         */
        labelId: number;
      };
      output: {
        /** Numeric label ID. */
        id?: number;
        /** Label name. */
        name?: string;
        /** Hex color value configured for the label. */
        color?: string;
        /** Description configured for the label. */
        description?: string | null;
        /** Whether the label is exclusive. */
        exclusive?: boolean;
        /** Whether the label is archived. */
        is_archived?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a milestone of a Gitea repository by ID. */
    "gitea.get_milestone": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the milestone.
         * @exclusiveMinimum 0
         */
        milestoneId: number;
      };
      output: {
        /** Numeric milestone ID. */
        id?: number;
        /** Milestone title. */
        title?: string;
        /** Current milestone state. */
        state?: string;
        /** Milestone description. */
        description?: string | null;
        /** Due date of the milestone. */
        due_on?: string | null;
        /** Timestamp when the milestone was closed. */
        closed_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a Gitea organization by name. */
    "gitea.get_organization": {
      input: {
        /**
         * Name of the organization.
         * @minLength 1
         */
        org: string;
      };
      output: {
        /** Numeric organization ID. */
        id?: number;
        /** Organization name. */
        name?: string;
        /** Organization username. */
        username?: string;
        /** Full display name of the organization. */
        full_name?: string;
        /** Organization description. */
        description?: string | null;
        /** Website URL of the organization. */
        website?: string | null;
        /** Location of the organization. */
        location?: string | null;
        /** Email address of the organization. */
        email?: string | null;
        /** Avatar URL of the organization. */
        avatar_url?: string;
        /** Visibility level of the organization. */
        visibility?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Gitea pull request by repository and pull request number. */
    "gitea.get_pull_request": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
      };
      output: {
        /** Numeric pull request ID. */
        id?: number;
        /** Pull request number within the repository. */
        number?: number;
        /** Pull request title. */
        title?: string;
        /** Pull request body. */
        body?: string | null;
        /** Pull request state. */
        state?: string;
        /** HTML URL of the pull request. */
        html_url?: string;
        /** A Gitea pull request branch reference. */
        base?: {
          /** Branch label including the repository owner. */
          label?: string;
          /** Branch reference name. */
          ref?: string;
          /** Commit SHA the branch points to. */
          sha?: string;
          /** Numeric ID of the repository the branch belongs to. */
          repo_id?: number;
          /** Full repository name the branch belongs to. */
          repo_name?: string;
          /** Numeric ID of the repository owner. */
          user_id?: number;
          /** Username of the repository owner. */
          user_name?: string;
          [key: string]: unknown;
        };
        /** A Gitea pull request branch reference. */
        head?: {
          /** Branch label including the repository owner. */
          label?: string;
          /** Branch reference name. */
          ref?: string;
          /** Commit SHA the branch points to. */
          sha?: string;
          /** Numeric ID of the repository the branch belongs to. */
          repo_id?: number;
          /** Full repository name the branch belongs to. */
          repo_name?: string;
          /** Numeric ID of the repository owner. */
          user_id?: number;
          /** Username of the repository owner. */
          user_name?: string;
          [key: string]: unknown;
        };
        /** Whether the pull request can be merged. */
        mergeable?: boolean;
        /** Whether the pull request has been merged. */
        merged?: boolean;
        /** Mergeable state of the pull request. */
        mergeable_state?: string;
        /** SHA of the merge commit when merged. */
        merge_commit_sha?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** Timestamp when the pull request was closed. */
        closed_at?: string | null;
        /** Timestamp when the pull request was merged. */
        merged_at?: string | null;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        assignee?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the pull request. */
        assignees?: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the pull request. */
        labels?: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** A Gitea milestone. */
        milestone?: {
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        } | null;
        /** A compact Gitea repository record. */
        repository?: {
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a release of a Gitea repository by ID. */
    "gitea.get_release": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the release.
         * @exclusiveMinimum 0
         */
        releaseId: number;
      };
      output: {
        /** Numeric release ID. */
        id?: number;
        /** Git tag associated with the release. */
        tag_name?: string;
        /** Release title. */
        name?: string;
        /** Release notes. */
        body?: string | null;
        /** Whether the release is a draft. */
        draft?: boolean;
        /** Whether the release is a prerelease. */
        prerelease?: boolean;
        /** Target commitish of the release. */
        target_commitish?: string;
        /** HTML URL of the release. */
        html_url?: string;
        /** API URL of the release. */
        url?: string;
        /** Tarball download URL. */
        tarball_url?: string;
        /** Zipball download URL. */
        zipball_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp when the release was published. */
        published_at?: string | null;
        /** A Gitea user record. */
        author?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Files attached to the release. */
        assets?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get metadata for a Gitea repository by owner and name. */
    "gitea.get_repository": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Numeric repository ID. */
        id?: number;
        /** Repository name. */
        name?: string;
        /** Full repository name including owner. */
        full_name?: string;
        /** Whether the repository is private. */
        private?: boolean;
        /** HTML URL of the repository. */
        html_url?: string;
        /** HTTPS clone URL of the repository. */
        clone_url?: string;
        /** SSH clone URL of the repository. */
        ssh_url?: string;
        /** Repository description. */
        description?: string | null;
        /** Default branch of the repository. */
        default_branch?: string;
        /** A Gitea user record. */
        owner?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Whether the repository is a fork. */
        fork?: boolean;
        /** Whether the repository is a mirror. */
        mirror?: boolean;
        /** Whether the repository is archived. */
        archived?: boolean;
        /** Whether the repository is empty. */
        empty?: boolean;
        /** Whether issues are enabled. */
        has_issues?: boolean;
        /** Whether pull requests are enabled. */
        has_pull_requests?: boolean;
        /** Whether projects are enabled. */
        has_projects?: boolean;
        /** Whether wiki is enabled. */
        has_wiki?: boolean;
        /** Whether actions are enabled. */
        has_actions?: boolean;
        /** Open issue count. */
        open_issues_count?: number;
        /** Star count. */
        stars_count?: number;
        /** Watcher count. */
        watchers_count?: number;
        /** Fork count. */
        forks_count?: number;
        /** Repository size in kilobytes. */
        size?: number;
        /** Primary language of the repository. */
        language?: string;
        /** Topics configured on the repository. */
        topics?: Array<string>;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get the contents or metadata of a file or directory in a Gitea repository. */
    "gitea.get_repository_contents": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Path of the file, directory, symlink or submodule in the repository.
         * @minLength 1
         */
        filePath: string;
        /** The name of the commit, branch or tag. Defaults to the repository default branch. */
        ref?: string;
      };
      output: {
        /** Entry type: file, dir, symlink or submodule. */
        type?: string;
        /** Content encoding, populated when type is file. */
        encoding?: string | null;
        /** File content, populated when type is file and encoded as base64. */
        content?: string | null;
        /** File size in bytes. */
        size?: number;
        /** Entry name. */
        name?: string;
        /** Full path of the entry. */
        path?: string;
        /** Git blob or tree SHA. */
        sha?: string;
        /** HTML URL of the entry. */
        html_url?: string;
        /** Git API URL of the entry. */
        git_url?: string;
        /** Direct download URL of the entry. */
        download_url?: string | null;
        /** API URL of the entry. */
        url?: string;
        /** Symlink target when type is symlink. */
        target?: string | null;
        /** Submodule git URL when type is submodule. */
        submodule_git_url?: string | null;
        /** SHA of the last commit that affected this entry. */
        last_commit_sha?: string;
        [key: string]: unknown;
      } | Array<{
        /** Entry type: file, dir, symlink or submodule. */
        type?: string;
        /** Content encoding, populated when type is file. */
        encoding?: string | null;
        /** File content, populated when type is file and encoded as base64. */
        content?: string | null;
        /** File size in bytes. */
        size?: number;
        /** Entry name. */
        name?: string;
        /** Full path of the entry. */
        path?: string;
        /** Git blob or tree SHA. */
        sha?: string;
        /** HTML URL of the entry. */
        html_url?: string;
        /** Git API URL of the entry. */
        git_url?: string;
        /** Direct download URL of the entry. */
        download_url?: string | null;
        /** API URL of the entry. */
        url?: string;
        /** Symlink target when type is symlink. */
        target?: string | null;
        /** Submodule git URL when type is submodule. */
        submodule_git_url?: string | null;
        /** SHA of the last commit that affected this entry. */
        last_commit_sha?: string;
        [key: string]: unknown;
      }>;
    };
    /** Get a webhook of a Gitea repository by ID. */
    "gitea.get_repository_hook": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the webhook.
         * @exclusiveMinimum 0
         */
        hookId: number;
      };
      output: {
        /** Numeric hook ID. */
        id?: number;
        /** Hook type (gitea, slack, discord, etc.). */
        type?: string;
        /** Human-readable hook name. */
        name?: string | null;
        /** Whether the hook is active. */
        active?: boolean;
        /** Events that trigger the hook. */
        events?: Array<string>;
        /** A Gitea API object. */
        config?: Record<string, unknown>;
        /** Branch filter pattern of the hook. */
        branch_filter?: string | null;
        /** Authorization header included in hook requests. */
        authorization_header?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get a deploy key of a Gitea repository by ID. */
    "gitea.get_repository_key": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the deploy key.
         * @exclusiveMinimum 0
         */
        keyId: number;
      };
      output: {
        /** Numeric deploy key ID. */
        id?: number;
        /** SSH public key content. */
        key?: string;
        /** Key title. */
        title?: string;
        /** Whether the key is read-only. */
        read_only?: boolean;
        /** Key fingerprint. */
        fingerprint?: string;
        /** API URL of the deploy key. */
        url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get a tag of a Gitea repository by name. */
    "gitea.get_tag": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Name of the tag.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** ID of the tag object. */
        id?: string;
        /** Tag name. */
        name?: string;
        /** Annotated tag message. */
        message?: string | null;
        /** Commit the tag points to. */
        commit?: {
          /** Commit SHA. */
          id?: string;
          /** Commit message. */
          message?: string;
          /** API URL of the commit. */
          url?: string;
          [key: string]: unknown;
        };
        /** Tarball download URL. */
        tarball_url?: string;
        /** Zipball download URL. */
        zipball_url?: string;
        [key: string]: unknown;
      };
    };
    /** List branches of a Gitea repository. */
    "gitea.list_branches": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Branches returned by the request. */
        branches: Array<{
          /** Branch name. */
          name?: string;
          /** Whether the branch is protected. */
          protected?: boolean;
          /** Whether the current user can push to the branch. */
          user_can_push?: boolean;
          /** Whether the current user can merge to the branch. */
          user_can_merge?: boolean;
          /** Name of the effective branch protection rule. */
          effective_branch_protection_name?: string | null;
          /** A Gitea API object. */
          commit?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Total number of matching branches from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List collaborators of a Gitea repository. */
    "gitea.list_collaborators": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Collaborators returned by the request. */
        collaborators: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching collaborators from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List commit statuses for a commit SHA or ref in a Gitea repository. */
    "gitea.list_commit_statuses": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Commit SHA or ref to list statuses for.
         * @minLength 1
         */
        ref: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Commit statuses returned by the request. */
        statuses: Array<{
          /** Numeric status ID. */
          id?: number;
          /** Status context. */
          context?: string;
          /** Status description. */
          description?: string | null;
          /** Status state. */
          state?: "pending" | "success" | "error" | "failure" | "warning" | "skipped";
          /** URL with more details about the status. */
          target_url?: string | null;
          /** API URL of the status. */
          url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** A Gitea user record. */
          creator?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Total number of matching statuses from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List commits of a Gitea repository. */
    "gitea.list_commits": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Branch, tag or commit SHA to list commits from.
         * @minLength 1
         */
        sha?: string;
        /**
         * Only list commits affecting this file path.
         * @minLength 1
         */
        path?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        since?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        until?: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Commits returned by the request. */
        commits: Array<{
          /** Commit SHA. */
          sha?: string;
          /** API URL of the commit. */
          url?: string;
          /** HTML URL of the commit. */
          html_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Git metadata of the commit. */
          commit?: {
            /** API URL of the git commit object. */
            url?: string;
            /** Commit message. */
            message?: string;
            /** A git identity recorded on a commit. */
            author?: {
              /** Name recorded on the commit. */
              name?: string;
              /** Email recorded on the commit. */
              email?: string;
              /** Timestamp in ISO 8601 / RFC 3339 format. */
              date?: string;
              [key: string]: unknown;
            };
            /** A git identity recorded on a commit. */
            committer?: {
              /** Name recorded on the commit. */
              name?: string;
              /** Email recorded on the commit. */
              email?: string;
              /** Timestamp in ISO 8601 / RFC 3339 format. */
              date?: string;
              [key: string]: unknown;
            };
            /** A Gitea API object. */
            tree?: Record<string, unknown>;
            /** A Gitea API object. */
            verification?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Gitea user record. */
          author?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** A Gitea user record. */
          committer?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** Parent commits of this commit. */
          parents?: Array<Record<string, unknown>>;
          /** Files touched by the commit when requested. */
          files?: Array<Record<string, unknown>>;
          /** A Gitea API object. */
          stats?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Total number of matching commits from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List users that can be assigned to issues in a Gitea repository. */
    "gitea.list_issue_assignees": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Assignees returned by the request. */
        assignees: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching assignees from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List comments under a Gitea issue. */
    "gitea.list_issue_comments": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        since?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        before?: string;
      };
      output: {
        /** Comments returned by the request. */
        comments: Array<{
          /** Numeric comment ID. */
          id?: number;
          /** Comment body. */
          body?: string;
          /** HTML URL of the comment. */
          html_url?: string;
          /** API URL of the parent issue. */
          issue_url?: string;
          /** API URL of the related pull request. */
          pull_request_url?: string | null;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** A Gitea user record. */
          user?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** Attachments included with the comment. */
          assets?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Total number of matching comments from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List labels attached to a Gitea issue. */
    "gitea.list_issue_labels": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
      };
      output: {
        /** Labels returned by the request. */
        labels: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** Total number of matching labels from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List milestones of a Gitea repository. */
    "gitea.list_milestones": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** Milestone state filter. */
        state?: "open" | "closed" | "all";
        /**
         * Filter milestones by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Milestones returned by the request. */
        milestones: Array<{
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Total number of matching milestones from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List organizations the authenticated Gitea user belongs to. */
    "gitea.list_my_organizations": {
      input: {
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Organizations returned by the request. */
        organizations: Array<{
          /** Numeric organization ID. */
          id?: number;
          /** Organization name. */
          name?: string;
          /** Organization username. */
          username?: string;
          /** Full display name of the organization. */
          full_name?: string;
          /** Organization description. */
          description?: string | null;
          /** Website URL of the organization. */
          website?: string | null;
          /** Location of the organization. */
          location?: string | null;
          /** Email address of the organization. */
          email?: string | null;
          /** Avatar URL of the organization. */
          avatar_url?: string;
          /** Visibility level of the organization. */
          visibility?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching organizations from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List repositories owned by the authenticated Gitea user. */
    "gitea.list_my_repositories": {
      input: {
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Repositories returned by the request. */
        repositories: Array<{
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Full repository name including owner. */
          full_name?: string;
          /** Whether the repository is private. */
          private?: boolean;
          /** HTML URL of the repository. */
          html_url?: string;
          /** HTTPS clone URL of the repository. */
          clone_url?: string;
          /** SSH clone URL of the repository. */
          ssh_url?: string;
          /** Repository description. */
          description?: string | null;
          /** Default branch of the repository. */
          default_branch?: string;
          /** A Gitea user record. */
          owner?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** Whether the repository is a fork. */
          fork?: boolean;
          /** Whether the repository is a mirror. */
          mirror?: boolean;
          /** Whether the repository is archived. */
          archived?: boolean;
          /** Whether the repository is empty. */
          empty?: boolean;
          /** Whether issues are enabled. */
          has_issues?: boolean;
          /** Whether pull requests are enabled. */
          has_pull_requests?: boolean;
          /** Whether projects are enabled. */
          has_projects?: boolean;
          /** Whether wiki is enabled. */
          has_wiki?: boolean;
          /** Whether actions are enabled. */
          has_actions?: boolean;
          /** Open issue count. */
          open_issues_count?: number;
          /** Star count. */
          stars_count?: number;
          /** Watcher count. */
          watchers_count?: number;
          /** Fork count. */
          forks_count?: number;
          /** Repository size in kilobytes. */
          size?: number;
          /** Primary language of the repository. */
          language?: string;
          /** Topics configured on the repository. */
          topics?: Array<string>;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching repositories from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List members of a Gitea organization. */
    "gitea.list_organization_members": {
      input: {
        /**
         * Name of the organization.
         * @minLength 1
         */
        org: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Organization members returned by the request. */
        members: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching members from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List repositories of a Gitea organization. */
    "gitea.list_organization_repositories": {
      input: {
        /**
         * Name of the organization.
         * @minLength 1
         */
        org: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Repositories returned by the request. */
        repositories: Array<{
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Full repository name including owner. */
          full_name?: string;
          /** Whether the repository is private. */
          private?: boolean;
          /** HTML URL of the repository. */
          html_url?: string;
          /** HTTPS clone URL of the repository. */
          clone_url?: string;
          /** SSH clone URL of the repository. */
          ssh_url?: string;
          /** Repository description. */
          description?: string | null;
          /** Default branch of the repository. */
          default_branch?: string;
          /** A Gitea user record. */
          owner?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** Whether the repository is a fork. */
          fork?: boolean;
          /** Whether the repository is a mirror. */
          mirror?: boolean;
          /** Whether the repository is archived. */
          archived?: boolean;
          /** Whether the repository is empty. */
          empty?: boolean;
          /** Whether issues are enabled. */
          has_issues?: boolean;
          /** Whether pull requests are enabled. */
          has_pull_requests?: boolean;
          /** Whether projects are enabled. */
          has_projects?: boolean;
          /** Whether wiki is enabled. */
          has_wiki?: boolean;
          /** Whether actions are enabled. */
          has_actions?: boolean;
          /** Open issue count. */
          open_issues_count?: number;
          /** Star count. */
          stars_count?: number;
          /** Watcher count. */
          watchers_count?: number;
          /** Fork count. */
          forks_count?: number;
          /** Repository size in kilobytes. */
          size?: number;
          /** Primary language of the repository. */
          language?: string;
          /** Topics configured on the repository. */
          topics?: Array<string>;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching repositories from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List commits of a Gitea pull request. */
    "gitea.list_pull_request_commits": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Commits returned by the request. */
        commits: Array<{
          /** Commit SHA. */
          sha?: string;
          /** API URL of the commit. */
          url?: string;
          /** HTML URL of the commit. */
          html_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Git metadata of the commit. */
          commit?: {
            /** API URL of the git commit object. */
            url?: string;
            /** Commit message. */
            message?: string;
            /** A git identity recorded on a commit. */
            author?: {
              /** Name recorded on the commit. */
              name?: string;
              /** Email recorded on the commit. */
              email?: string;
              /** Timestamp in ISO 8601 / RFC 3339 format. */
              date?: string;
              [key: string]: unknown;
            };
            /** A git identity recorded on a commit. */
            committer?: {
              /** Name recorded on the commit. */
              name?: string;
              /** Email recorded on the commit. */
              email?: string;
              /** Timestamp in ISO 8601 / RFC 3339 format. */
              date?: string;
              [key: string]: unknown;
            };
            /** A Gitea API object. */
            tree?: Record<string, unknown>;
            /** A Gitea API object. */
            verification?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Gitea user record. */
          author?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** A Gitea user record. */
          committer?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** Parent commits of this commit. */
          parents?: Array<Record<string, unknown>>;
          /** Files touched by the commit when requested. */
          files?: Array<Record<string, unknown>>;
          /** A Gitea API object. */
          stats?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Total number of matching commits from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List files changed by a Gitea pull request. */
    "gitea.list_pull_request_files": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Files changed by the pull request. */
        files: Array<{
          /** Path of the changed file. */
          filename?: string;
          /** Previous path of the file when renamed. */
          previous_filename?: string | null;
          /** Status of the change (added, modified, deleted, renamed, etc.). */
          status?: string;
          /** Number of added lines. */
          additions?: number;
          /** Number of deleted lines. */
          deletions?: number;
          /** Total number of changed lines. */
          changes?: number;
          /** API URL of the file contents. */
          contents_url?: string;
          /** Raw download URL of the file. */
          raw_url?: string;
          /** HTML URL of the file diff. */
          html_url?: string;
          [key: string]: unknown;
        }>;
        /** Total number of changed files from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List review comments of a Gitea pull request review. */
    "gitea.list_pull_request_review_comments": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * ID of the review to list comments for.
         * @exclusiveMinimum 0
         */
        reviewId: number;
      };
      output: {
        /** Review comments returned by the request. */
        comments: Array<{
          /** Numeric comment ID. */
          id?: number;
          /** Comment body. */
          body?: string;
          /** File path the comment is attached to. */
          path?: string;
          /** Line position in the current diff. */
          position?: number;
          /** Line position in the original diff. */
          original_position?: number;
          /** Commit SHA the comment is attached to. */
          commit_id?: string;
          /** Original commit SHA the comment was created against. */
          original_commit_id?: string;
          /** Diff hunk context of the comment. */
          diff_hunk?: string;
          /** HTML URL of the comment. */
          html_url?: string;
          /** API URL of the pull request. */
          pull_request_url?: string;
          /** Numeric review ID the comment belongs to. */
          pull_request_review_id?: number;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** A Gitea user record. */
          user?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Total number of matching comments from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List reviews for a Gitea pull request. */
    "gitea.list_pull_request_reviews": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Reviews returned by the request. */
        reviews: Array<{
          /** Numeric review ID. */
          id?: number;
          /** Review body. */
          body?: string;
          /** Review state. */
          state?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
          /** Commit SHA the review is attached to. */
          commit_id?: string;
          /** Whether the review counts as an official review. */
          official?: boolean;
          /** Whether the review has been dismissed. */
          dismissed?: boolean;
          /** Whether the review is stale. */
          stale?: boolean;
          /** Number of review comments. */
          comments_count?: number;
          /** HTML URL of the review. */
          html_url?: string;
          /** API URL of the pull request. */
          pull_request_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          submitted_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** A Gitea user record. */
          user?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Total number of matching reviews from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List pull requests in a Gitea repository. */
    "gitea.list_pull_requests": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** Pull request state filter. */
        state?: "open" | "closed" | "all";
        /**
         * Filter by the target base branch of the pull request.
         * @minLength 1
         */
        baseBranch?: string;
        /** Sort type for the pull request list. */
        sort?: "oldest" | "recentupdate" | "recentclose" | "leastupdate" | "mostcomment" | "leastcomment" | "priority";
        /**
         * Milestone ID used to filter pull requests.
         * @exclusiveMinimum 0
         */
        milestone?: number;
        /** Label IDs used to filter pull requests. */
        labels?: Array<number>;
        /**
         * Filter by the pull request author username.
         * @minLength 1
         */
        poster?: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Pull requests returned by the request. */
        pull_requests: Array<{
          /** Numeric pull request ID. */
          id?: number;
          /** Pull request number within the repository. */
          number?: number;
          /** Pull request title. */
          title?: string;
          /** Pull request body. */
          body?: string | null;
          /** Pull request state. */
          state?: string;
          /** HTML URL of the pull request. */
          html_url?: string;
          /** A Gitea pull request branch reference. */
          base?: {
            /** Branch label including the repository owner. */
            label?: string;
            /** Branch reference name. */
            ref?: string;
            /** Commit SHA the branch points to. */
            sha?: string;
            /** Numeric ID of the repository the branch belongs to. */
            repo_id?: number;
            /** Full repository name the branch belongs to. */
            repo_name?: string;
            /** Numeric ID of the repository owner. */
            user_id?: number;
            /** Username of the repository owner. */
            user_name?: string;
            [key: string]: unknown;
          };
          /** A Gitea pull request branch reference. */
          head?: {
            /** Branch label including the repository owner. */
            label?: string;
            /** Branch reference name. */
            ref?: string;
            /** Commit SHA the branch points to. */
            sha?: string;
            /** Numeric ID of the repository the branch belongs to. */
            repo_id?: number;
            /** Full repository name the branch belongs to. */
            repo_name?: string;
            /** Numeric ID of the repository owner. */
            user_id?: number;
            /** Username of the repository owner. */
            user_name?: string;
            [key: string]: unknown;
          };
          /** Whether the pull request can be merged. */
          mergeable?: boolean;
          /** Whether the pull request has been merged. */
          merged?: boolean;
          /** Mergeable state of the pull request. */
          mergeable_state?: string;
          /** SHA of the merge commit when merged. */
          merge_commit_sha?: string | null;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** Timestamp when the pull request was closed. */
          closed_at?: string | null;
          /** Timestamp when the pull request was merged. */
          merged_at?: string | null;
          /** A Gitea user record. */
          user?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** A Gitea user record. */
          assignee?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** Assignees of the pull request. */
          assignees?: Array<{
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          }>;
          /** Labels attached to the pull request. */
          labels?: Array<{
            /** Numeric label ID. */
            id?: number;
            /** Label name. */
            name?: string;
            /** Hex color value configured for the label. */
            color?: string;
            /** Description configured for the label. */
            description?: string | null;
            /** Whether the label is exclusive. */
            exclusive?: boolean;
            /** Whether the label is archived. */
            is_archived?: boolean;
            [key: string]: unknown;
          }>;
          /** A Gitea milestone. */
          milestone?: {
            /** Numeric milestone ID. */
            id?: number;
            /** Milestone title. */
            title?: string;
            /** Current milestone state. */
            state?: string;
            /** Milestone description. */
            description?: string | null;
            /** Due date of the milestone. */
            due_on?: string | null;
            /** Timestamp when the milestone was closed. */
            closed_at?: string | null;
            [key: string]: unknown;
          } | null;
          /** A compact Gitea repository record. */
          repository?: {
            /** Numeric repository ID. */
            id?: number;
            /** Repository name. */
            name?: string;
            /** Repository owner name. */
            owner?: string;
            /** Full repository name including owner. */
            full_name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Total number of matching pull requests from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List releases of a Gitea repository. */
    "gitea.list_releases": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** Whether to include draft releases. */
        draft?: boolean;
        /** Whether to include prereleases. */
        prerelease?: boolean;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Releases returned by the request. */
        releases: Array<{
          /** Numeric release ID. */
          id?: number;
          /** Git tag associated with the release. */
          tag_name?: string;
          /** Release title. */
          name?: string;
          /** Release notes. */
          body?: string | null;
          /** Whether the release is a draft. */
          draft?: boolean;
          /** Whether the release is a prerelease. */
          prerelease?: boolean;
          /** Target commitish of the release. */
          target_commitish?: string;
          /** HTML URL of the release. */
          html_url?: string;
          /** API URL of the release. */
          url?: string;
          /** Tarball download URL. */
          tarball_url?: string;
          /** Zipball download URL. */
          zipball_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp when the release was published. */
          published_at?: string | null;
          /** A Gitea user record. */
          author?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** Files attached to the release. */
          assets?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Total number of matching releases from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List webhooks of a Gitea repository. */
    "gitea.list_repository_hooks": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Webhooks returned by the request. */
        hooks: Array<{
          /** Numeric hook ID. */
          id?: number;
          /** Hook type (gitea, slack, discord, etc.). */
          type?: string;
          /** Human-readable hook name. */
          name?: string | null;
          /** Whether the hook is active. */
          active?: boolean;
          /** Events that trigger the hook. */
          events?: Array<string>;
          /** A Gitea API object. */
          config?: Record<string, unknown>;
          /** Branch filter pattern of the hook. */
          branch_filter?: string | null;
          /** Authorization header included in hook requests. */
          authorization_header?: string | null;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching hooks from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List issues in a Gitea repository. Pull requests are filtered out. */
    "gitea.list_repository_issues": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** Issue state filter. */
        state?: "open" | "closed" | "all";
        /** Label names or IDs used to filter issues. */
        labels?: Array<string | number>;
        /**
         * Search string used to filter issues.
         * @minLength 1
         */
        query?: string;
        /** Milestone names or IDs used to filter issues. */
        milestones?: Array<string | number>;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        since?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        before?: string;
        /**
         * Only return issues created by this username.
         * @minLength 1
         */
        createdBy?: string;
        /**
         * Only return issues assigned to this username.
         * @minLength 1
         */
        assignedBy?: string;
        /**
         * Only return issues mentioning this username.
         * @minLength 1
         */
        mentionedBy?: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Issues returned by the request. */
        issues: Array<{
          /** Numeric issue ID. */
          id?: number;
          /** Issue number within the repository. */
          number?: number;
          /** Issue title. */
          title?: string;
          /** Issue body. */
          body?: string | null;
          /** Issue state. */
          state?: string;
          /** HTML URL of the issue. */
          html_url?: string;
          /** API URL of the issue. */
          url?: string;
          /** Number of comments on the issue. */
          comments?: number;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** Timestamp when the issue was closed. */
          closed_at?: string | null;
          /** Issue due date. */
          due_date?: string | null;
          /** Git reference associated with the issue. */
          ref?: string | null;
          /** Whether the issue is locked. */
          is_locked?: boolean;
          /** A Gitea user record. */
          user?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** A Gitea user record. */
          assignee?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** Assignees of the issue. */
          assignees?: Array<{
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          }>;
          /** Labels attached to the issue. */
          labels?: Array<{
            /** Numeric label ID. */
            id?: number;
            /** Label name. */
            name?: string;
            /** Hex color value configured for the label. */
            color?: string;
            /** Description configured for the label. */
            description?: string | null;
            /** Whether the label is exclusive. */
            exclusive?: boolean;
            /** Whether the label is archived. */
            is_archived?: boolean;
            [key: string]: unknown;
          }>;
          /** A Gitea milestone. */
          milestone?: {
            /** Numeric milestone ID. */
            id?: number;
            /** Milestone title. */
            title?: string;
            /** Current milestone state. */
            state?: string;
            /** Milestone description. */
            description?: string | null;
            /** Due date of the milestone. */
            due_on?: string | null;
            /** Timestamp when the milestone was closed. */
            closed_at?: string | null;
            [key: string]: unknown;
          } | null;
          /** A compact Gitea repository record. */
          repository?: {
            /** Numeric repository ID. */
            id?: number;
            /** Repository name. */
            name?: string;
            /** Repository owner name. */
            owner?: string;
            /** Full repository name including owner. */
            full_name?: string;
            [key: string]: unknown;
          };
          /** A Gitea API object. */
          pull_request?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Total number of matching issues from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List deploy keys of a Gitea repository. */
    "gitea.list_repository_keys": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Deploy keys returned by the request. */
        keys: Array<{
          /** Numeric deploy key ID. */
          id?: number;
          /** SSH public key content. */
          key?: string;
          /** Key title. */
          title?: string;
          /** Whether the key is read-only. */
          read_only?: boolean;
          /** Key fingerprint. */
          fingerprint?: string;
          /** API URL of the deploy key. */
          url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching deploy keys from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List labels of a Gitea repository. */
    "gitea.list_repository_labels": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Labels returned by the request. */
        labels: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** Total number of matching labels from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List stargazers of a Gitea repository. */
    "gitea.list_repository_stargazers": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Stargazers returned by the request. */
        stargazers: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching stargazers from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List topics of a Gitea repository. */
    "gitea.list_repository_topics": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Topics of the repository. */
        topics: Array<string>;
      };
    };
    /** List watchers of a Gitea repository. */
    "gitea.list_repository_watchers": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Watchers returned by the request. */
        watchers: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching watchers from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** List tags of a Gitea repository. */
    "gitea.list_tags": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Tags returned by the request. */
        tags: Array<{
          /** ID of the tag object. */
          id?: string;
          /** Tag name. */
          name?: string;
          /** Annotated tag message. */
          message?: string | null;
          /** Commit the tag points to. */
          commit?: {
            /** Commit SHA. */
            id?: string;
            /** Commit message. */
            message?: string;
            /** API URL of the commit. */
            url?: string;
            [key: string]: unknown;
          };
          /** Tarball download URL. */
          tarball_url?: string;
          /** Zipball download URL. */
          zipball_url?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching tags from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** Merge a Gitea pull request. */
    "gitea.merge_pull_request": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /** Merge style to use. */
        do: "merge" | "rebase" | "rebase-merge" | "squash" | "fast-forward-only" | "manually-merged";
        /** Title of the merge commit. */
        mergeTitle?: string;
        /** Message of the merge commit. */
        mergeMessage?: string;
        /** Whether to delete the head branch after merging. */
        deleteBranchAfterMerge?: boolean;
        /** Whether to merge even if checks do not pass. */
        forceMerge?: boolean;
        /** Whether to merge automatically when checks succeed. */
        mergeWhenChecksSucceed?: boolean;
        /** Commit ID of the head branch when force merging or merging manually. */
        headCommitId?: string;
      };
      output: {
        /** Whether the merge request succeeded. */
        ok: boolean;
        /** A Gitea API object. */
        response?: Record<string, unknown>;
      };
    };
    /** Remove a collaborator from a Gitea repository. */
    "gitea.remove_collaborator": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Username of the collaborator to remove.
         * @minLength 1
         */
        collaborator: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Remove a label from a Gitea issue. */
    "gitea.remove_issue_label": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /**
         * Numeric ID of the label to remove.
         * @exclusiveMinimum 0
         */
        labelId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Remove requested reviewers from a Gitea pull request. */
    "gitea.remove_pull_request_reviewers": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /** Usernames to remove from the review request. */
        reviewers?: Array<string>;
        /** Team names to remove from the review request. */
        teamReviewers?: Array<string>;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Replace all labels of a Gitea issue. */
    "gitea.replace_issue_labels": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** New list of label IDs for the issue. */
        labels?: Array<number>;
      };
      output: {
        /** Labels returned by the request. */
        labels: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** Total number of matching labels from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** Request reviews for a Gitea pull request from users or teams. */
    "gitea.request_pull_request_reviewers": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /** Usernames to request review from. */
        reviewers?: Array<string>;
        /** Team names to request review from. */
        teamReviewers?: Array<string>;
      };
      output: {
        /** Reviews returned by the request. */
        reviews: Array<{
          /** Numeric review ID. */
          id?: number;
          /** Review body. */
          body?: string;
          /** Review state. */
          state?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
          /** Commit SHA the review is attached to. */
          commit_id?: string;
          /** Whether the review counts as an official review. */
          official?: boolean;
          /** Whether the review has been dismissed. */
          dismissed?: boolean;
          /** Whether the review is stale. */
          stale?: boolean;
          /** Number of review comments. */
          comments_count?: number;
          /** HTML URL of the review. */
          html_url?: string;
          /** API URL of the pull request. */
          pull_request_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          submitted_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          /** A Gitea user record. */
          user?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Total number of matching reviews from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** Search Gitea repositories by keyword with optional repository filters. */
    "gitea.search_repositories": {
      input: {
        /**
         * Keyword used to search repositories.
         * @minLength 1
         */
        query: string;
        /** Whether to limit the keyword search to repository topics. */
        topic?: boolean;
        /** Whether the keyword should also search repository descriptions. */
        includeDescription?: boolean;
        /**
         * Only search repositories owned by or contributed to by this user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Repository owner ID to prioritize in the results.
         * @exclusiveMinimum 0
         */
        priorityOwnerId?: number;
        /**
         * Only search repositories that belong to this team ID.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * Only search repositories starred by this user ID.
         * @exclusiveMinimum 0
         */
        starredByUserId?: number;
        /** Whether private repositories accessible to the token should be included. */
        private?: boolean;
        /** Whether template repositories accessible to the token should be included. */
        template?: boolean;
        /** Whether archived repositories should be included. */
        archived?: boolean;
        /** Repository mode filter. */
        mode?: "fork" | "source" | "mirror" | "collaborative";
        /** When ownerId is set, whether to restrict results to repositories the user owns. */
        exclusive?: boolean;
        /** Sort field used by the repository search endpoint. */
        sort?: "alpha" | "created" | "updated" | "size" | "git_size" | "lfs_size" | "stars" | "forks" | "id";
        /** Sort order. */
        order?: "asc" | "desc";
        /**
         * Page number of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Whether the search request succeeded. */
        ok: boolean;
        /** Repositories returned by the search. */
        repositories: Array<{
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Full repository name including owner. */
          full_name?: string;
          /** Whether the repository is private. */
          private?: boolean;
          /** HTML URL of the repository. */
          html_url?: string;
          /** HTTPS clone URL of the repository. */
          clone_url?: string;
          /** SSH clone URL of the repository. */
          ssh_url?: string;
          /** Repository description. */
          description?: string | null;
          /** Default branch of the repository. */
          default_branch?: string;
          /** A Gitea user record. */
          owner?: {
            /** Numeric user ID. */
            id?: number;
            /** Username of the Gitea account. */
            login?: string;
            /** Full display name of the user. */
            full_name?: string;
            /** Email address of the user when visible. */
            email?: string;
            /** Avatar URL of the user. */
            avatar_url?: string;
            /** HTML URL of the user profile. */
            html_url?: string;
            /** Preferred language of the user. */
            language?: string;
            /** Profile location of the user. */
            location?: string;
            /** Website configured on the user profile. */
            website?: string;
            /** Profile description or bio of the user. */
            description?: string;
            /** Visibility setting of the user profile. */
            visibility?: string;
            /** Whether the user is a site administrator. */
            is_admin?: boolean;
            /** Whether the user account is restricted. */
            restricted?: boolean;
            /** Whether the user account is active. */
            active?: boolean;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            created?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** Whether the repository is a fork. */
          fork?: boolean;
          /** Whether the repository is a mirror. */
          mirror?: boolean;
          /** Whether the repository is archived. */
          archived?: boolean;
          /** Whether the repository is empty. */
          empty?: boolean;
          /** Whether issues are enabled. */
          has_issues?: boolean;
          /** Whether pull requests are enabled. */
          has_pull_requests?: boolean;
          /** Whether projects are enabled. */
          has_projects?: boolean;
          /** Whether wiki is enabled. */
          has_wiki?: boolean;
          /** Whether actions are enabled. */
          has_actions?: boolean;
          /** Open issue count. */
          open_issues_count?: number;
          /** Star count. */
          stars_count?: number;
          /** Watcher count. */
          watchers_count?: number;
          /** Fork count. */
          forks_count?: number;
          /** Repository size in kilobytes. */
          size?: number;
          /** Primary language of the repository. */
          language?: string;
          /** Topics configured on the repository. */
          topics?: Array<string>;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching repositories from the x-total-count header when available. */
        total_count?: number;
      };
    };
    /** Star a Gitea repository for the authenticated user. */
    "gitea.star_repository": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Submit a pending Gitea pull request review. */
    "gitea.submit_pull_request_review": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /**
         * ID of the review to submit.
         * @exclusiveMinimum 0
         */
        reviewId: number;
        /** Review body. */
        body?: string;
        /** Review event. */
        event?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
      };
      output: {
        /** Numeric review ID. */
        id?: number;
        /** Review body. */
        body?: string;
        /** Review state. */
        state?: "APPROVED" | "PENDING" | "COMMENT" | "REQUEST_CHANGES" | "REQUEST_REVIEW";
        /** Commit SHA the review is attached to. */
        commit_id?: string;
        /** Whether the review counts as an official review. */
        official?: boolean;
        /** Whether the review has been dismissed. */
        dismissed?: boolean;
        /** Whether the review is stale. */
        stale?: boolean;
        /** Number of review comments. */
        comments_count?: number;
        /** HTML URL of the review. */
        html_url?: string;
        /** API URL of the pull request. */
        pull_request_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        submitted_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Remove a star from a Gitea repository for the authenticated user. */
    "gitea.unstar_repository": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Update or create a file in a Gitea repository. */
    "gitea.update_file": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Path of the file to update.
         * @minLength 1
         */
        filePath: string;
        /**
         * New content of the file. It is base64 encoded automatically before sending.
         * @minLength 1
         */
        content: string;
        /** Blob SHA of the existing file to update. Omit to create a new file. */
        sha?: string;
        /** Commit message for the change. */
        message?: string;
        /** Base branch for the change. Defaults to the repository default branch. */
        branch?: string;
        /** Create the commit on a new branch based on the base branch. */
        newBranch?: string;
        /** Path of the original file when moving or renaming a file. */
        fromPath?: string;
        /** Author name for the commit. */
        authorName?: string;
        /** Author email for the commit. */
        authorEmail?: string;
        /** Committer name for the commit. */
        committerName?: string;
        /** Committer email for the commit. */
        committerEmail?: string;
        /** Add a Signed-off-by trailer to the commit. */
        signoff?: boolean;
        /** Force-push if the new branch already exists. */
        forcePush?: boolean;
      };
      output: {
        /** A Gitea repository contents entry. */
        content?: {
          /** Entry type: file, dir, symlink or submodule. */
          type?: string;
          /** Content encoding, populated when type is file. */
          encoding?: string | null;
          /** File content, populated when type is file and encoded as base64. */
          content?: string | null;
          /** File size in bytes. */
          size?: number;
          /** Entry name. */
          name?: string;
          /** Full path of the entry. */
          path?: string;
          /** Git blob or tree SHA. */
          sha?: string;
          /** HTML URL of the entry. */
          html_url?: string;
          /** Git API URL of the entry. */
          git_url?: string;
          /** Direct download URL of the entry. */
          download_url?: string | null;
          /** API URL of the entry. */
          url?: string;
          /** Symlink target when type is symlink. */
          target?: string | null;
          /** Submodule git URL when type is submodule. */
          submodule_git_url?: string | null;
          /** SHA of the last commit that affected this entry. */
          last_commit_sha?: string;
          [key: string]: unknown;
        } | null;
        /** A Gitea commit created by a file operation. */
        commit?: {
          /** Commit SHA. */
          sha?: string;
          /** Commit message. */
          message?: string;
          /** API URL of the commit. */
          url?: string;
          /** HTML URL of the commit. */
          html_url?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** A git identity recorded on a commit. */
          author?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** A git identity recorded on a commit. */
          committer?: {
            /** Name recorded on the commit. */
            name?: string;
            /** Email recorded on the commit. */
            email?: string;
            /** Timestamp in ISO 8601 / RFC 3339 format. */
            date?: string;
            [key: string]: unknown;
          };
          /** Parent commits of this commit. */
          parents?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update an issue in a Gitea repository. */
    "gitea.update_issue": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Issue number within the repository.
         * @exclusiveMinimum 0
         */
        issueNumber: number;
        /** New title of the issue. */
        title?: string;
        /** New body of the issue. */
        body?: string;
        /** New state of the issue. */
        state?: "open" | "closed";
        /** New list of assignee usernames. */
        assignees?: Array<string>;
        /**
         * New milestone ID.
         * @exclusiveMinimum 0
         */
        milestoneId?: number;
        /**
         * Git reference associated with the issue.
         * @minLength 1
         */
        ref?: string;
        /**
         * New deadline in RFC 3339 format. Gitea only uses the date component.
         * @minLength 1
         */
        dueDate?: string;
        /** Whether to remove the current deadline. */
        unsetDueDate?: boolean;
      };
      output: {
        /** Numeric issue ID. */
        id?: number;
        /** Issue number within the repository. */
        number?: number;
        /** Issue title. */
        title?: string;
        /** Issue body. */
        body?: string | null;
        /** Issue state. */
        state?: string;
        /** HTML URL of the issue. */
        html_url?: string;
        /** API URL of the issue. */
        url?: string;
        /** Number of comments on the issue. */
        comments?: number;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** Timestamp when the issue was closed. */
        closed_at?: string | null;
        /** Issue due date. */
        due_date?: string | null;
        /** Git reference associated with the issue. */
        ref?: string | null;
        /** Whether the issue is locked. */
        is_locked?: boolean;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        assignee?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the issue. */
        assignees?: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the issue. */
        labels?: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** A Gitea milestone. */
        milestone?: {
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        } | null;
        /** A compact Gitea repository record. */
        repository?: {
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        /** A Gitea API object. */
        pull_request?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a comment on a Gitea issue. */
    "gitea.update_issue_comment": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the comment to update.
         * @exclusiveMinimum 0
         */
        commentId: number;
        /**
         * New body of the comment.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** Numeric comment ID. */
        id?: number;
        /** Comment body. */
        body?: string;
        /** HTML URL of the comment. */
        html_url?: string;
        /** API URL of the parent issue. */
        issue_url?: string;
        /** API URL of the related pull request. */
        pull_request_url?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Attachments included with the comment. */
        assets?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Update a label of a Gitea repository. */
    "gitea.update_label": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the label.
         * @exclusiveMinimum 0
         */
        labelId: number;
        /** New display name of the label. */
        name?: string;
        /** New hex color of the label, for example #00aabb. */
        color?: string;
        /** New description of the label. */
        description?: string;
        /** Whether the label is exclusive. */
        exclusive?: boolean;
        /** Whether the label is archived. */
        isArchived?: boolean;
      };
      output: {
        /** Numeric label ID. */
        id?: number;
        /** Label name. */
        name?: string;
        /** Hex color value configured for the label. */
        color?: string;
        /** Description configured for the label. */
        description?: string | null;
        /** Whether the label is exclusive. */
        exclusive?: boolean;
        /** Whether the label is archived. */
        is_archived?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update a milestone of a Gitea repository. */
    "gitea.update_milestone": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the milestone.
         * @exclusiveMinimum 0
         */
        milestoneId: number;
        /** New title of the milestone. */
        title?: string;
        /** New description of the milestone. */
        description?: string;
        /** New state of the milestone. */
        state?: "open" | "closed";
        /**
         * New due date of the milestone in RFC 3339 format.
         * @minLength 1
         */
        dueOn?: string;
      };
      output: {
        /** Numeric milestone ID. */
        id?: number;
        /** Milestone title. */
        title?: string;
        /** Current milestone state. */
        state?: string;
        /** Milestone description. */
        description?: string | null;
        /** Due date of the milestone. */
        due_on?: string | null;
        /** Timestamp when the milestone was closed. */
        closed_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Update a Gitea pull request title, body, state, base branch, or review assignments. */
    "gitea.update_pull_request": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /** New title of the pull request. */
        title?: string;
        /** New body of the pull request. */
        body?: string;
        /** New state of the pull request. */
        state?: "open" | "closed";
        /** New base branch the pull request targets. */
        base?: string;
        /** New list of assignee usernames. */
        assignees?: Array<string>;
        /** New list of label IDs. */
        labelIds?: Array<number>;
        /**
         * New milestone ID.
         * @exclusiveMinimum 0
         */
        milestoneId?: number;
        /** Whether maintainers can edit the pull request. */
        allowMaintainerEdit?: boolean;
        /** Whether to remove the current deadline. */
        unsetDueDate?: boolean;
        /**
         * New deadline in RFC 3339 format. Gitea only uses the date component.
         * @minLength 1
         */
        dueDate?: string;
      };
      output: {
        /** Numeric pull request ID. */
        id?: number;
        /** Pull request number within the repository. */
        number?: number;
        /** Pull request title. */
        title?: string;
        /** Pull request body. */
        body?: string | null;
        /** Pull request state. */
        state?: string;
        /** HTML URL of the pull request. */
        html_url?: string;
        /** A Gitea pull request branch reference. */
        base?: {
          /** Branch label including the repository owner. */
          label?: string;
          /** Branch reference name. */
          ref?: string;
          /** Commit SHA the branch points to. */
          sha?: string;
          /** Numeric ID of the repository the branch belongs to. */
          repo_id?: number;
          /** Full repository name the branch belongs to. */
          repo_name?: string;
          /** Numeric ID of the repository owner. */
          user_id?: number;
          /** Username of the repository owner. */
          user_name?: string;
          [key: string]: unknown;
        };
        /** A Gitea pull request branch reference. */
        head?: {
          /** Branch label including the repository owner. */
          label?: string;
          /** Branch reference name. */
          ref?: string;
          /** Commit SHA the branch points to. */
          sha?: string;
          /** Numeric ID of the repository the branch belongs to. */
          repo_id?: number;
          /** Full repository name the branch belongs to. */
          repo_name?: string;
          /** Numeric ID of the repository owner. */
          user_id?: number;
          /** Username of the repository owner. */
          user_name?: string;
          [key: string]: unknown;
        };
        /** Whether the pull request can be merged. */
        mergeable?: boolean;
        /** Whether the pull request has been merged. */
        merged?: boolean;
        /** Mergeable state of the pull request. */
        mergeable_state?: string;
        /** SHA of the merge commit when merged. */
        merge_commit_sha?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        /** Timestamp when the pull request was closed. */
        closed_at?: string | null;
        /** Timestamp when the pull request was merged. */
        merged_at?: string | null;
        /** A Gitea user record. */
        user?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** A Gitea user record. */
        assignee?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the pull request. */
        assignees?: Array<{
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the pull request. */
        labels?: Array<{
          /** Numeric label ID. */
          id?: number;
          /** Label name. */
          name?: string;
          /** Hex color value configured for the label. */
          color?: string;
          /** Description configured for the label. */
          description?: string | null;
          /** Whether the label is exclusive. */
          exclusive?: boolean;
          /** Whether the label is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
        /** A Gitea milestone. */
        milestone?: {
          /** Numeric milestone ID. */
          id?: number;
          /** Milestone title. */
          title?: string;
          /** Current milestone state. */
          state?: string;
          /** Milestone description. */
          description?: string | null;
          /** Due date of the milestone. */
          due_on?: string | null;
          /** Timestamp when the milestone was closed. */
          closed_at?: string | null;
          [key: string]: unknown;
        } | null;
        /** A compact Gitea repository record. */
        repository?: {
          /** Numeric repository ID. */
          id?: number;
          /** Repository name. */
          name?: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update the head branch of a Gitea pull request to the latest base branch. */
    "gitea.update_pull_request_branch": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Pull request number within the repository.
         * @exclusiveMinimum 0
         */
        pullRequestNumber: number;
        /** Update style. */
        style?: "merge" | "rebase";
      };
      output: {
        /** Whether the operation succeeded. */
        ok: boolean;
      };
    };
    /** Update a release of a Gitea repository. */
    "gitea.update_release": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the release.
         * @exclusiveMinimum 0
         */
        releaseId: number;
        /** New git tag associated with the release. */
        tagName?: string;
        /** New display title of the release. */
        name?: string;
        /** New release notes or description. */
        body?: string;
        /** New target commitish of the release. */
        targetCommitish?: string;
        /** Whether the release should be a draft. */
        draft?: boolean;
        /** Whether the release should be a prerelease. */
        prerelease?: boolean;
      };
      output: {
        /** Numeric release ID. */
        id?: number;
        /** Git tag associated with the release. */
        tag_name?: string;
        /** Release title. */
        name?: string;
        /** Release notes. */
        body?: string | null;
        /** Whether the release is a draft. */
        draft?: boolean;
        /** Whether the release is a prerelease. */
        prerelease?: boolean;
        /** Target commitish of the release. */
        target_commitish?: string;
        /** HTML URL of the release. */
        html_url?: string;
        /** API URL of the release. */
        url?: string;
        /** Tarball download URL. */
        tarball_url?: string;
        /** Zipball download URL. */
        zipball_url?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp when the release was published. */
        published_at?: string | null;
        /** A Gitea user record. */
        author?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Files attached to the release. */
        assets?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Update settings of a Gitea repository. */
    "gitea.update_repository": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** New name of the repository. */
        name?: string;
        /** New description of the repository. */
        description?: string;
        /** A URL with more information about the repository. */
        website?: string;
        /** Whether the repository should be private. */
        private?: boolean;
        /** Whether the repository should be a template repository. */
        template?: boolean;
        /** Whether the repository should be archived. */
        archived?: boolean;
        /** New default branch of the repository. */
        defaultBranch?: string;
        /** Default merge style of the repository. */
        defaultMergeStyle?: "merge" | "rebase" | "rebase-merge" | "squash" | "fast-forward-only";
        /** Whether to delete the pull request branch after merge by default. */
        defaultDeleteBranchAfterMerge?: boolean;
        /** Whether maintainers can edit pull requests by default. */
        defaultAllowMaintainerEdit?: boolean;
        /** Whether the issues unit is enabled. */
        hasIssues?: boolean;
        /** Whether the pull requests unit is enabled. */
        hasPullRequests?: boolean;
        /** Whether the projects unit is enabled. */
        hasProjects?: boolean;
        /** Whether the wiki unit is enabled. */
        hasWiki?: boolean;
        /** Whether the actions unit is enabled. */
        hasActions?: boolean;
        /** Whether the packages unit is enabled. */
        hasPackages?: boolean;
        /** Whether the releases unit is enabled. */
        hasReleases?: boolean;
        /** Whether merging with merge commits is allowed. */
        allowMergeCommits?: boolean;
        /** Whether rebase merging is allowed. */
        allowRebase?: boolean;
        /** Whether rebase with explicit merge commits is allowed. */
        allowRebaseExplicit?: boolean;
        /** Whether updating the pull request branch by rebase is allowed. */
        allowRebaseUpdate?: boolean;
        /** Whether squash merging is allowed. */
        allowSquashMerge?: boolean;
        /** Whether fast-forward-only merging is allowed. */
        allowFastForwardOnlyMerge?: boolean;
        /** Whether marking a pull request as merged manually is allowed. */
        allowManualMerge?: boolean;
        /** Whether manual merge should be autodetected. */
        autodetectManualMerge?: boolean;
        /** Whether whitespace conflicts are ignored. */
        ignoreWhitespaceConflicts?: boolean;
        /** Whether to prune remote-tracking references when mirroring. */
        enablePrune?: boolean;
        /** Mirror interval, for example 8h30m0s. */
        mirrorInterval?: string;
      };
      output: {
        /** Numeric repository ID. */
        id?: number;
        /** Repository name. */
        name?: string;
        /** Full repository name including owner. */
        full_name?: string;
        /** Whether the repository is private. */
        private?: boolean;
        /** HTML URL of the repository. */
        html_url?: string;
        /** HTTPS clone URL of the repository. */
        clone_url?: string;
        /** SSH clone URL of the repository. */
        ssh_url?: string;
        /** Repository description. */
        description?: string | null;
        /** Default branch of the repository. */
        default_branch?: string;
        /** A Gitea user record. */
        owner?: {
          /** Numeric user ID. */
          id?: number;
          /** Username of the Gitea account. */
          login?: string;
          /** Full display name of the user. */
          full_name?: string;
          /** Email address of the user when visible. */
          email?: string;
          /** Avatar URL of the user. */
          avatar_url?: string;
          /** HTML URL of the user profile. */
          html_url?: string;
          /** Preferred language of the user. */
          language?: string;
          /** Profile location of the user. */
          location?: string;
          /** Website configured on the user profile. */
          website?: string;
          /** Profile description or bio of the user. */
          description?: string;
          /** Visibility setting of the user profile. */
          visibility?: string;
          /** Whether the user is a site administrator. */
          is_admin?: boolean;
          /** Whether the user account is restricted. */
          restricted?: boolean;
          /** Whether the user account is active. */
          active?: boolean;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          created?: string;
          /** Timestamp in ISO 8601 / RFC 3339 format. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Whether the repository is a fork. */
        fork?: boolean;
        /** Whether the repository is a mirror. */
        mirror?: boolean;
        /** Whether the repository is archived. */
        archived?: boolean;
        /** Whether the repository is empty. */
        empty?: boolean;
        /** Whether issues are enabled. */
        has_issues?: boolean;
        /** Whether pull requests are enabled. */
        has_pull_requests?: boolean;
        /** Whether projects are enabled. */
        has_projects?: boolean;
        /** Whether wiki is enabled. */
        has_wiki?: boolean;
        /** Whether actions are enabled. */
        has_actions?: boolean;
        /** Open issue count. */
        open_issues_count?: number;
        /** Star count. */
        stars_count?: number;
        /** Watcher count. */
        watchers_count?: number;
        /** Fork count. */
        forks_count?: number;
        /** Repository size in kilobytes. */
        size?: number;
        /** Primary language of the repository. */
        language?: string;
        /** Topics configured on the repository. */
        topics?: Array<string>;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Update a webhook of a Gitea repository. */
    "gitea.update_repository_hook": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Numeric ID of the webhook.
         * @exclusiveMinimum 0
         */
        hookId: number;
        /** Configuration of the hook. */
        config?: {
          /**
           * URL the hook sends requests to.
           * @minLength 1
           */
          url?: string;
          /** Content type of the request body. */
          content_type?: "json" | "form";
          /** Secret used to sign hook requests. */
          secret?: string;
          /** Whether to skip TLS verification. Use 'true' or 'false'. */
          insecure_ssl?: string;
        };
        /** Events that trigger the hook. */
        events?: Array<string>;
        /** Whether the hook is active. */
        active?: boolean;
        /** Branch filter pattern of the hook. */
        branchFilter?: string;
        /** Authorization header to include in hook requests. */
        authorizationHeader?: string;
      };
      output: {
        /** Numeric hook ID. */
        id?: number;
        /** Hook type (gitea, slack, discord, etc.). */
        type?: string;
        /** Human-readable hook name. */
        name?: string | null;
        /** Whether the hook is active. */
        active?: boolean;
        /** Events that trigger the hook. */
        events?: Array<string>;
        /** A Gitea API object. */
        config?: Record<string, unknown>;
        /** Branch filter pattern of the hook. */
        branch_filter?: string | null;
        /** Authorization header included in hook requests. */
        authorization_header?: string | null;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        created_at?: string;
        /** Timestamp in ISO 8601 / RFC 3339 format. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Replace all topics of a Gitea repository. */
    "gitea.update_repository_topics": {
      input: {
        /**
         * Owner of the repository.
         * @minLength 1
         */
        owner: string;
        /**
         * Name of the repository.
         * @minLength 1
         */
        repo: string;
        /** New list of topics for the repository. */
        topics: Array<string>;
      };
      output: {
        /** Topics of the repository. */
        topics: Array<string>;
      };
    };
  }
}
