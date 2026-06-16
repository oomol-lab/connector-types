import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
        id: number;
        /** Issue number within the repository. */
        number: number;
        /** Issue title. */
        title: string;
        /** Issue body. */
        body?: string | null;
        /** Issue state. */
        state: string;
        /** HTML URL of the issue. */
        html_url: string;
        /** API URL of the issue. */
        url?: string;
        /** Number of comments on the issue. */
        comments?: number;
        /** Timestamp when the issue was created. */
        created_at?: string;
        /** Timestamp when the issue was last updated. */
        updated_at?: string;
        /** Timestamp when the issue was closed. */
        closed_at?: string | null;
        /** Issue due date. */
        due_date?: string | null;
        /** Git reference associated with the issue. */
        ref?: string | null;
        /** Whether the issue is locked. */
        is_locked?: boolean;
        /** Author of the issue. */
        user?: {
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Primary assignee of the issue. */
        assignee?: {
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the issue. */
        assignees?: Array<{
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the issue. */
        labels?: Array<{
          /** Numeric label ID. */
          id: number;
          /** Label name. */
          name: string;
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
        /** Milestone attached to the issue. */
        milestone?: {
          /** Numeric milestone ID. */
          id: number;
          /** Milestone title. */
          title: string;
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
        /** Compact repository metadata echoed on the issue. */
        repository?: {
          /** Numeric repository ID. */
          id: number;
          /** Repository name. */
          name: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        /** Pull request metadata when the issue is a pull request. */
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
        id: number;
        /** Comment body. */
        body: string;
        /** HTML URL of the comment. */
        html_url?: string;
        /** API URL of the parent issue. */
        issue_url?: string;
        /** API URL of the related pull request. */
        pull_request_url?: string | null;
        /** Timestamp when the comment was created. */
        created_at?: string;
        /** Timestamp when the comment was last updated. */
        updated_at?: string;
        /** Author of the comment. */
        user?: {
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Attachments included with the comment. */
        assets?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the current authenticated Gitea user profile. */
    "gitea.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Numeric user ID. */
        id: number;
        /** Username of the Gitea account. */
        login: string;
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
        /** Timestamp when the user was created. */
        created?: string;
        /** Timestamp of the last login. */
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
        id: number;
        /** Issue number within the repository. */
        number: number;
        /** Issue title. */
        title: string;
        /** Issue body. */
        body?: string | null;
        /** Issue state. */
        state: string;
        /** HTML URL of the issue. */
        html_url: string;
        /** API URL of the issue. */
        url?: string;
        /** Number of comments on the issue. */
        comments?: number;
        /** Timestamp when the issue was created. */
        created_at?: string;
        /** Timestamp when the issue was last updated. */
        updated_at?: string;
        /** Timestamp when the issue was closed. */
        closed_at?: string | null;
        /** Issue due date. */
        due_date?: string | null;
        /** Git reference associated with the issue. */
        ref?: string | null;
        /** Whether the issue is locked. */
        is_locked?: boolean;
        /** Author of the issue. */
        user?: {
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        };
        /** Primary assignee of the issue. */
        assignee?: {
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        } | null;
        /** Assignees of the issue. */
        assignees?: Array<{
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
          last_login?: string;
          [key: string]: unknown;
        }>;
        /** Labels attached to the issue. */
        labels?: Array<{
          /** Numeric label ID. */
          id: number;
          /** Label name. */
          name: string;
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
        /** Milestone attached to the issue. */
        milestone?: {
          /** Numeric milestone ID. */
          id: number;
          /** Milestone title. */
          title: string;
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
        /** Compact repository metadata echoed on the issue. */
        repository?: {
          /** Numeric repository ID. */
          id: number;
          /** Repository name. */
          name: string;
          /** Repository owner name. */
          owner?: string;
          /** Full repository name including owner. */
          full_name?: string;
          [key: string]: unknown;
        };
        /** Pull request metadata when the issue is a pull request. */
        pull_request?: Record<string, unknown>;
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
        id: number;
        /** Repository name. */
        name: string;
        /** Full repository name including owner. */
        full_name: string;
        /** Whether the repository is private. */
        private: boolean;
        /** HTML URL of the repository. */
        html_url: string;
        /** HTTPS clone URL of the repository. */
        clone_url?: string;
        /** SSH clone URL of the repository. */
        ssh_url?: string;
        /** Repository description. */
        description?: string | null;
        /** Default branch of the repository. */
        default_branch?: string;
        /** Repository owner. */
        owner?: {
          /** Numeric user ID. */
          id: number;
          /** Username of the Gitea account. */
          login: string;
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
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp of the last login. */
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
        /** Timestamp when the repository was created. */
        created_at?: string;
        /** Timestamp when the repository was updated. */
        updated_at?: string;
        [key: string]: unknown;
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
        /** Only return comments updated after this timestamp. */
        since?: string;
        /** Only return comments updated before this timestamp. */
        before?: string;
      };
      output: {
        /** Comments returned by the request. */
        comments: Array<{
          /** Numeric comment ID. */
          id: number;
          /** Comment body. */
          body: string;
          /** HTML URL of the comment. */
          html_url?: string;
          /** API URL of the parent issue. */
          issue_url?: string;
          /** API URL of the related pull request. */
          pull_request_url?: string | null;
          /** Timestamp when the comment was created. */
          created_at?: string;
          /** Timestamp when the comment was last updated. */
          updated_at?: string;
          /** Author of the comment. */
          user?: {
            /** Numeric user ID. */
            id: number;
            /** Username of the Gitea account. */
            login: string;
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
            /** Timestamp when the user was created. */
            created?: string;
            /** Timestamp of the last login. */
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
    /** List repositories owned by the authenticated Gitea user. */
    "gitea.list_my_repositories": {
      input: {
        /**
         * Page number of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Repositories returned by the request. */
        repositories: Array<{
          /** Numeric repository ID. */
          id: number;
          /** Repository name. */
          name: string;
          /** Full repository name including owner. */
          full_name: string;
          /** Whether the repository is private. */
          private: boolean;
          /** HTML URL of the repository. */
          html_url: string;
          /** HTTPS clone URL of the repository. */
          clone_url?: string;
          /** SSH clone URL of the repository. */
          ssh_url?: string;
          /** Repository description. */
          description?: string | null;
          /** Default branch of the repository. */
          default_branch?: string;
          /** Repository owner. */
          owner?: {
            /** Numeric user ID. */
            id: number;
            /** Username of the Gitea account. */
            login: string;
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
            /** Timestamp when the user was created. */
            created?: string;
            /** Timestamp of the last login. */
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
          /** Timestamp when the repository was created. */
          created_at?: string;
          /** Timestamp when the repository was updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching repositories from the x-total-count header when available. */
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
        /** Only return issues updated after this timestamp. */
        since?: string;
        /** Only return issues updated before this timestamp. */
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
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Issues returned by the request. */
        issues: Array<{
          /** Numeric issue ID. */
          id: number;
          /** Issue number within the repository. */
          number: number;
          /** Issue title. */
          title: string;
          /** Issue body. */
          body?: string | null;
          /** Issue state. */
          state: string;
          /** HTML URL of the issue. */
          html_url: string;
          /** API URL of the issue. */
          url?: string;
          /** Number of comments on the issue. */
          comments?: number;
          /** Timestamp when the issue was created. */
          created_at?: string;
          /** Timestamp when the issue was last updated. */
          updated_at?: string;
          /** Timestamp when the issue was closed. */
          closed_at?: string | null;
          /** Issue due date. */
          due_date?: string | null;
          /** Git reference associated with the issue. */
          ref?: string | null;
          /** Whether the issue is locked. */
          is_locked?: boolean;
          /** Author of the issue. */
          user?: {
            /** Numeric user ID. */
            id: number;
            /** Username of the Gitea account. */
            login: string;
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
            /** Timestamp when the user was created. */
            created?: string;
            /** Timestamp of the last login. */
            last_login?: string;
            [key: string]: unknown;
          };
          /** Primary assignee of the issue. */
          assignee?: {
            /** Numeric user ID. */
            id: number;
            /** Username of the Gitea account. */
            login: string;
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
            /** Timestamp when the user was created. */
            created?: string;
            /** Timestamp of the last login. */
            last_login?: string;
            [key: string]: unknown;
          } | null;
          /** Assignees of the issue. */
          assignees?: Array<{
            /** Numeric user ID. */
            id: number;
            /** Username of the Gitea account. */
            login: string;
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
            /** Timestamp when the user was created. */
            created?: string;
            /** Timestamp of the last login. */
            last_login?: string;
            [key: string]: unknown;
          }>;
          /** Labels attached to the issue. */
          labels?: Array<{
            /** Numeric label ID. */
            id: number;
            /** Label name. */
            name: string;
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
          /** Milestone attached to the issue. */
          milestone?: {
            /** Numeric milestone ID. */
            id: number;
            /** Milestone title. */
            title: string;
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
          /** Compact repository metadata echoed on the issue. */
          repository?: {
            /** Numeric repository ID. */
            id: number;
            /** Repository name. */
            name: string;
            /** Repository owner name. */
            owner?: string;
            /** Full repository name including owner. */
            full_name?: string;
            [key: string]: unknown;
          };
          /** Pull request metadata when the issue is a pull request. */
          pull_request?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Total number of matching issues from the x-total-count header when available. */
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
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Whether the search request succeeded. */
        ok: boolean;
        /** Repositories returned by the search. */
        repositories: Array<{
          /** Numeric repository ID. */
          id: number;
          /** Repository name. */
          name: string;
          /** Full repository name including owner. */
          full_name: string;
          /** Whether the repository is private. */
          private: boolean;
          /** HTML URL of the repository. */
          html_url: string;
          /** HTTPS clone URL of the repository. */
          clone_url?: string;
          /** SSH clone URL of the repository. */
          ssh_url?: string;
          /** Repository description. */
          description?: string | null;
          /** Default branch of the repository. */
          default_branch?: string;
          /** Repository owner. */
          owner?: {
            /** Numeric user ID. */
            id: number;
            /** Username of the Gitea account. */
            login: string;
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
            /** Timestamp when the user was created. */
            created?: string;
            /** Timestamp of the last login. */
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
          /** Timestamp when the repository was created. */
          created_at?: string;
          /** Timestamp when the repository was updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching repositories from the x-total-count header when available. */
        total_count?: number;
      };
    };
  }
}
