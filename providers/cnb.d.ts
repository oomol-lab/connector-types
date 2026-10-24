import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a repository issue with optional labels, assignees, dates and priority. Requires repo-issue:rw. */
    "cnb.create_issue": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** Markdown body content. */
        body?: string;
        /** Issue priority. */
        priority?: "-2P" | "-1P" | "P0" | "P1" | "P2" | "P3";
        /** Issue start date, for example 2026-01-01. */
        start_date?: string;
        /** Issue end date, for example 2026-12-31. */
        end_date?: string;
        /** Whether the issue is private. */
        invisible?: boolean;
        /** Whether work mode is enabled. */
        work_mode?: boolean;
        /**
         * Issue assignee names, at most 8.
         * @maxItems 8
         */
        assignees?: Array<string>;
        /**
         * Issue label names, at most 10.
         * @maxItems 10
         */
        labels?: Array<string>;
      };
      output: {
        /** Issue or pull request number. */
        number?: string;
        /** Issue or pull request title. */
        title?: string;
        /** Current state returned by CNB. */
        state?: string;
        /** Issue priority. */
        priority?: string;
        /** Reason for the current issue state. */
        state_reason?: string;
        /** Markdown body content. */
        body?: string;
        [key: string]: unknown;
      };
    };
    /** Add a comment to an issue. Requires repo-notes:rw. */
    "cnb.create_issue_comment": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request number as a decimal string.
         * @pattern ^[0-9]+$
         */
        number: string;
        /**
         * Comment content.
         * @minLength 1
         * @pattern \S
         */
        body: string;
        /** Whether work mode is enabled. */
        work_mode?: boolean;
      };
      output: {
        /** Comment ID. */
        id?: string;
        /** Comment content. */
        body?: string;
        /** Comment creation time. */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a pull request from a source branch into a target branch. Requires repo-pr:rw. */
    "cnb.create_pull_request": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** Markdown body content. */
        body?: string;
        /**
         * Source branch name.
         * @minLength 1
         * @pattern \S
         */
        head: string;
        /**
         * Target branch name.
         * @minLength 1
         * @pattern \S
         */
        base: string;
        /**
         * Source repository path for a cross-repository pull request.
         * @minLength 1
         * @pattern \S
         */
        head_repo?: string;
      };
      output: {
        /** Issue or pull request number. */
        number?: string;
        /** Issue or pull request title. */
        title?: string;
        /** Markdown body content. */
        body?: string;
        /** Current state returned by CNB. */
        state?: string;
        /** Whether the pull request has been merged. */
        is_merged?: boolean;
        /** Current mergeability state. */
        mergeable_state?: string;
        /** Source branch information. */
        head?: Record<string, unknown>;
        /** Target branch information. */
        base?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the current state and pipeline progress of an existing build. Requires repo-cnb-trigger:r. */
    "cnb.get_build_status": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Build serial number.
         * @minLength 1
         * @pattern \S
         */
        sn: string;
      };
      output: {
        /** Build status. */
        status?: string;
        /** Pipeline states keyed by pipeline ID. */
        pipelinesStatus?: Record<string, {
            /** Pipeline ID. */
            id?: string;
            /** Pipeline name. */
            name?: string;
            /** Pipeline status. */
            status?: string;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get an issue with its full description and metadata. Requires repo-issue:r. */
    "cnb.get_issue": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request number as a decimal string.
         * @pattern ^[0-9]+$
         */
        number: string;
      };
      output: {
        /** Issue or pull request number. */
        number?: string;
        /** Issue or pull request title. */
        title?: string;
        /** Current state returned by CNB. */
        state?: string;
        /** Issue priority. */
        priority?: string;
        /** Reason for the current issue state. */
        state_reason?: string;
        /** Markdown body content. */
        body?: string;
        [key: string]: unknown;
      };
    };
    /** Get pull request details and mergeability information. Requires repo-pr:r. */
    "cnb.get_pull_request": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request number as a decimal string.
         * @pattern ^[0-9]+$
         */
        number: string;
      };
      output: {
        /** Issue or pull request number. */
        number?: string;
        /** Issue or pull request title. */
        title?: string;
        /** Markdown body content. */
        body?: string;
        /** Current state returned by CNB. */
        state?: string;
        /** Whether the pull request has been merged. */
        is_merged?: boolean;
        /** Current mergeability state. */
        mergeable_state?: string;
        /** Source branch information. */
        head?: Record<string, unknown>;
        /** Target branch information. */
        base?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get repository information. Requires repo-basic-info:r. */
    "cnb.get_repository": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
      };
      output: {
        /** Repository ID. */
        id?: string;
        /** Repository name. */
        name?: string;
        /** Full repository path. */
        path?: string;
        /** Repository web URL. */
        web_url?: string;
        /** Repository description. */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** List pipeline build history, filtered by branch, event, commit or status. Requires repo-cnb-history:r. */
    "cnb.list_builds": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Builds per page, at most 100; defaults to 30.
         * @minimum 1
         * @maximum 100
         * @default 30
         */
        page_size?: number;
        /** Start date in YYYY-MM-DD format. */
        createTime?: string;
        /** End date in YYYY-MM-DD format. */
        endTime?: string;
        /** Build event, for example push. */
        event?: string;
        /** Commit SHA. */
        sha?: string;
        /** Build serial number. */
        sn?: string;
        /** Source branch name. */
        sourceRef?: string;
        /** Target branch name. */
        targetRef?: string;
        /** Build status filter. */
        status?: "pending" | "success" | "error" | "cancel";
        /** Build user ID. */
        userId?: string;
        /** Build username. */
        userName?: string;
      };
      output: {
        /** Build records on this page. */
        data?: Array<{
          /** Build serial number. */
          sn?: string;
          /** Build status. */
          status?: string;
          /** Commit SHA. */
          sha?: string;
          /** Build log URL. */
          buildLogUrl?: string;
          [key: string]: unknown;
        }>;
        /** Total number of builds matching the filters. */
        total?: number;
        /** Current timestamp returned by CNB. */
        timestamp?: number;
        [key: string]: unknown;
      };
    };
    /** List issue comments. Requires repo-notes:r. Increase page until an empty page is returned. */
    "cnb.list_issue_comments": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request number as a decimal string.
         * @pattern ^[0-9]+$
         */
        number: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page.
         * @minimum 1
         * @default 10
         */
        page_size?: number;
        /** Comment sort order; a leading minus means descending. */
        sort?: "created" | "updated" | "-created" | "-updated";
      };
      output: {
        /** Comments on this page. */
        items: Array<{
          /** Comment ID. */
          id?: string;
          /** Comment content. */
          body?: string;
          /** Comment creation time. */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List and filter repository issues. Requires repo-issue:r. Increase page until an empty page is returned. */
    "cnb.list_issues": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of issues per page, at most 100.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        page_size?: number;
        /** Issue or pull request state. */
        state?: "open" | "closed";
        /** Search issue titles and content. */
        keyword?: string;
        /** Comma-separated priorities: -2P, -1P, P0, P1, P2, P3. */
        priority?: string;
        /** Comma-separated label names. */
        labels?: string;
        /** Match any or all supplied values. */
        labels_operator?: "contains_any" | "contains_all";
        /** Comma-separated author names. */
        authors?: string;
        /** Comma-separated assignee names; use - for unassigned. */
        assignees?: string;
        /** Start of the update date range, for example 2026-01-01. */
        updated_time_begin?: string;
        /** End of the update date range, for example 2026-12-31. */
        updated_time_end?: string;
        /** Start of the issue closure date range. */
        close_time_begin?: string;
        /** End of the issue closure date range. */
        close_time_end?: string;
        /** Issue sort field; a leading minus means descending. */
        order_by?: "created_at" | "-created_at" | "-updated_at" | "-last_acted_at";
      };
      output: {
        /** Issues on this page. */
        items: Array<{
          /** Issue or pull request number. */
          number?: string;
          /** Issue or pull request title. */
          title?: string;
          /** Current state returned by CNB. */
          state?: string;
          /** Issue priority. */
          priority?: string;
          /** Reason for the current issue state. */
          state_reason?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List repository pull requests with filters. Requires repo-pr:r. Increase page until an empty page is returned. */
    "cnb.list_pull_requests": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page.
         * @minimum 1
         * @default 10
         */
        page_size?: number;
        /** Pull request state filter; CNB defaults to open. */
        state?: "open" | "closed" | "all";
        /** Comma-separated author names. */
        authors?: string;
        /** Comma-separated assignee names; use - for unassigned. */
        assignees?: string;
        /** Comma-separated label names. */
        labels?: string;
        /** Match any or all supplied values. */
        assignees_operator?: "contains_any" | "contains_all";
        /** Match any or all supplied values. */
        labels_operator?: "contains_any" | "contains_all";
        /** Comma-separated reviewer names; use - for no reviewer. */
        reviewers?: string;
        /** Match any or all supplied values. */
        reviewers_operator?: "contains_any" | "contains_all";
        /** Target branch name. */
        base_ref?: string;
        /** Start of the update date range, for example 2026-01-01. */
        updated_time_begin?: string;
        /** End of the update date range, for example 2026-12-31. */
        updated_time_end?: string;
        /** Pull request sort field; a leading minus means descending. */
        order_by?: "created_at" | "-created_at" | "-updated_at";
      };
      output: {
        /** Pull requests on this page. */
        items: Array<{
          /** Issue or pull request number. */
          number?: string;
          /** Issue or pull request title. */
          title?: string;
          /** Markdown body content. */
          body?: string;
          /** Current state returned by CNB. */
          state?: string;
          /** Whether the pull request has been merged. */
          is_merged?: boolean;
          /** Current mergeability state. */
          mergeable_state?: string;
          /** Source branch information. */
          head?: Record<string, unknown>;
          /** Target branch information. */
          base?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List repositories accessible to the current user. Requires account-engage:r. The default minimum role is Guest; increase page until an empty page is returned. */
    "cnb.list_repositories": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page.
         * @minimum 1
         * @default 10
         */
        page_size?: number;
        /** Filter repositories by name. */
        search?: string;
        /** Repository visibility. */
        filter_type?: "private" | "public" | "secret";
        /**
         * Minimum repository role; defaults to Guest to include all accessible repositories.
         * @default "Guest"
         */
        role?: "Guest" | "Reporter" | "Developer" | "Master" | "Owner";
        /** Comma-separated repository flags: KnowledgeBase, NPC, Skills. */
        flags?: string;
        /** How multiple repository flags are matched. */
        flags_match?: "intersection" | "union";
        /** Repository status. */
        status?: "active" | "archived";
        /** Repository sort field. */
        order_by?: "created_at" | "last_updated_at" | "stars" | "slug_path" | "forks";
        /** Whether to sort in descending order. */
        desc?: boolean;
      };
      output: {
        /** Repositories on this page. */
        items: Array<{
          /** Repository ID. */
          id?: string;
          /** Repository name. */
          name?: string;
          /** Full repository path. */
          path?: string;
          /** Repository web URL. */
          web_url?: string;
          /** Repository description. */
          description?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update issue content, dates, visibility, priority or workflow state. Supply state and state_reason together. Requires repo-issue:rw. */
    "cnb.update_issue": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request number as a decimal string.
         * @pattern ^[0-9]+$
         */
        number: string;
        /**
         * Issue or pull request title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** Markdown body content. */
        body?: string;
        /** Issue priority. */
        priority?: "-2P" | "-1P" | "P0" | "P1" | "P2" | "P3";
        /** Issue start date, for example 2026-01-01. */
        start_date?: string;
        /** Issue end date, for example 2026-12-31. */
        end_date?: string;
        /** Whether the issue is private. */
        invisible?: boolean;
        /** Issue or pull request state. */
        state?: "open" | "closed";
        /** Issue state reason; use reopened with open, completed or not_planned with closed. */
        state_reason?: "completed" | "not_planned" | "reopened";
      };
      output: {
        /** Issue or pull request number. */
        number?: string;
        /** Issue or pull request title. */
        title?: string;
        /** Current state returned by CNB. */
        state?: string;
        /** Issue priority. */
        priority?: string;
        /** Reason for the current issue state. */
        state_reason?: string;
        /** Markdown body content. */
        body?: string;
        [key: string]: unknown;
      };
    };
    /** Update a pull request title, description or open/closed workflow state. Requires repo-pr:rw. */
    "cnb.update_pull_request": {
      input: {
        /**
         * Repository path without .git, including parent organizations, for example team/project.
         * @minLength 1
         * @pattern \S
         */
        repo: string;
        /**
         * Issue or pull request number as a decimal string.
         * @pattern ^[0-9]+$
         */
        number: string;
        /**
         * Issue or pull request title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** Markdown body content. */
        body?: string;
        /** Issue or pull request state. */
        state?: "open" | "closed";
      };
      output: {
        /** Issue or pull request number. */
        number?: string;
        /** Issue or pull request title. */
        title?: string;
        /** Markdown body content. */
        body?: string;
        /** Current state returned by CNB. */
        state?: string;
        /** Whether the pull request has been merged. */
        is_merged?: boolean;
        /** Current mergeability state. */
        mergeable_state?: string;
        /** Source branch information. */
        head?: Record<string, unknown>;
        /** Target branch information. */
        base?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
