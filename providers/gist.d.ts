import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether the authenticated GitHub user has starred a gist. */
    "gist.check_gist_starred": {
      input: {
        /**
         * The gist ID to inspect.
         * @minLength 1
         */
        gistId: string;
      };
      output: {
        /** Whether the authenticated user has starred the gist. */
        starred: boolean;
      };
    };
    /** Create a new GitHub gist. */
    "gist.create_gist": {
      input: {
        /** The description to store on the gist. */
        description?: string;
        /** Whether the gist should be publicly visible. */
        public?: boolean;
        /** The files to create in the gist, keyed by filename. */
        files: Record<string, {
            /** The text content for the new gist file. */
            content: string;
          }>;
      };
      output: {
        /** The unique identifier of the gist. */
        id: string;
        /** The API URL of the gist. */
        url?: string;
        /** The API URL for listing gist forks. */
        forks_url?: string;
        /** The API URL for listing gist commits. */
        commits_url?: string;
        /** The global node ID of the gist. */
        node_id?: string;
        /** The git pull URL for the gist. */
        git_pull_url?: string;
        /** The git push URL for the gist. */
        git_push_url?: string;
        /** The HTML URL of the gist. */
        html_url: string;
        /** The files contained in the gist, keyed by filename. */
        files: Record<string, {
            /** The filename of the gist file. */
            filename?: string | null;
            /** The MIME type of the file. */
            type?: string | null;
            /** The programming language of the file. */
            language?: string | null;
            /** The URL to the raw file content. */
            raw_url?: string | null;
            /** The file size in bytes. */
            size?: number | null;
            /** Whether the file content was truncated. */
            truncated?: boolean | null;
            /** The text content of the file. */
            content?: string | null;
            /** The encoding of the file content. */
            encoding?: string | null;
            [key: string]: unknown;
          }>;
        /** Whether the gist is publicly visible. */
        public: boolean;
        /** The creation timestamp of the gist. */
        created_at: string;
        /** The last updated timestamp of the gist. */
        updated_at: string;
        /** The description of the gist. */
        description?: string | null;
        /** The number of comments on the gist. */
        comments?: number;
        /** The API URL for listing gist comments. */
        comments_url?: string;
        /** Whether comments are enabled on the gist. */
        comments_enabled?: boolean;
        /** The owner of the gist. */
        owner?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        /** Schema for anyObject. */
        user?: Record<string, unknown> | null;
        /** Whether the gist content was truncated. */
        truncated?: boolean;
        /** The list of forks for the gist. */
        forks?: Array<Record<string, unknown>>;
        /** The commit history of the gist. */
        history?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a comment on a GitHub gist. */
    "gist.create_gist_comment": {
      input: {
        /**
         * The gist ID to comment on.
         * @minLength 1
         */
        gistId: string;
        /**
         * The comment body text.
         * @minLength 1
         */
        body: string;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The unique identifier of the comment. */
        id: number;
        /** The global node ID of the comment. */
        node_id?: string;
        /** The API URL of the comment. */
        url: string;
        /** The body text of the comment. */
        body?: string;
        /** The creation timestamp of the comment. */
        created_at?: string;
        /** The last updated timestamp of the comment. */
        updated_at?: string;
        /** The author's association with the gist repository. */
        author_association?: string;
        /** The user who posted the comment. */
        user?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Delete a GitHub gist. */
    "gist.delete_gist": {
      input: {
        /**
         * The gist ID to delete.
         * @minLength 1
         */
        gistId: string;
      };
      output: {
        /** Whether the gist was deleted successfully. */
        deleted: true;
      };
    };
    /** Delete a GitHub gist comment. */
    "gist.delete_gist_comment": {
      input: {
        /**
         * The gist ID that owns the comment.
         * @minLength 1
         */
        gistId: string;
        /**
         * The numeric gist comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
      };
      output: {
        /** Whether the gist comment was deleted successfully. */
        deleted: true;
      };
    };
    /** Fork a GitHub gist. */
    "gist.fork_gist": {
      input: {
        /**
         * The gist ID to fork.
         * @minLength 1
         */
        gistId: string;
      };
      output: {
        /** The unique identifier of the gist. */
        id: string;
        /** The API URL of the gist. */
        url?: string;
        /** The API URL for listing gist forks. */
        forks_url?: string;
        /** The API URL for listing gist commits. */
        commits_url?: string;
        /** The global node ID of the gist. */
        node_id?: string;
        /** The git pull URL for the gist. */
        git_pull_url?: string;
        /** The git push URL for the gist. */
        git_push_url?: string;
        /** The HTML URL of the gist. */
        html_url: string;
        /** The files contained in the gist, keyed by filename. */
        files: Record<string, {
            /** The filename of the gist file. */
            filename?: string | null;
            /** The MIME type of the file. */
            type?: string | null;
            /** The programming language of the file. */
            language?: string | null;
            /** The URL to the raw file content. */
            raw_url?: string | null;
            /** The file size in bytes. */
            size?: number | null;
            /** Whether the file content was truncated. */
            truncated?: boolean | null;
            /** The text content of the file. */
            content?: string | null;
            /** The encoding of the file content. */
            encoding?: string | null;
            [key: string]: unknown;
          }>;
        /** Whether the gist is publicly visible. */
        public: boolean;
        /** The creation timestamp of the gist. */
        created_at: string;
        /** The last updated timestamp of the gist. */
        updated_at: string;
        /** The description of the gist. */
        description?: string | null;
        /** The number of comments on the gist. */
        comments?: number;
        /** The API URL for listing gist comments. */
        comments_url?: string;
        /** Whether comments are enabled on the gist. */
        comments_enabled?: boolean;
        /** The owner of the gist. */
        owner?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        /** Schema for anyObject. */
        user?: Record<string, unknown> | null;
        /** Whether the gist content was truncated. */
        truncated?: boolean;
        /** The list of forks for the gist. */
        forks?: Array<Record<string, unknown>>;
        /** The commit history of the gist. */
        history?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub gist by id. */
    "gist.get_gist": {
      input: {
        /**
         * The gist ID to fetch.
         * @minLength 1
         */
        gistId: string;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The unique identifier of the gist. */
        id: string;
        /** The API URL of the gist. */
        url?: string;
        /** The API URL for listing gist forks. */
        forks_url?: string;
        /** The API URL for listing gist commits. */
        commits_url?: string;
        /** The global node ID of the gist. */
        node_id?: string;
        /** The git pull URL for the gist. */
        git_pull_url?: string;
        /** The git push URL for the gist. */
        git_push_url?: string;
        /** The HTML URL of the gist. */
        html_url: string;
        /** The files contained in the gist, keyed by filename. */
        files: Record<string, {
            /** The filename of the gist file. */
            filename?: string | null;
            /** The MIME type of the file. */
            type?: string | null;
            /** The programming language of the file. */
            language?: string | null;
            /** The URL to the raw file content. */
            raw_url?: string | null;
            /** The file size in bytes. */
            size?: number | null;
            /** Whether the file content was truncated. */
            truncated?: boolean | null;
            /** The text content of the file. */
            content?: string | null;
            /** The encoding of the file content. */
            encoding?: string | null;
            [key: string]: unknown;
          }>;
        /** Whether the gist is publicly visible. */
        public: boolean;
        /** The creation timestamp of the gist. */
        created_at: string;
        /** The last updated timestamp of the gist. */
        updated_at: string;
        /** The description of the gist. */
        description?: string | null;
        /** The number of comments on the gist. */
        comments?: number;
        /** The API URL for listing gist comments. */
        comments_url?: string;
        /** Whether comments are enabled on the gist. */
        comments_enabled?: boolean;
        /** The owner of the gist. */
        owner?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        /** Schema for anyObject. */
        user?: Record<string, unknown> | null;
        /** Whether the gist content was truncated. */
        truncated?: boolean;
        /** The list of forks for the gist. */
        forks?: Array<Record<string, unknown>>;
        /** The commit history of the gist. */
        history?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a GitHub gist comment by id. */
    "gist.get_gist_comment": {
      input: {
        /**
         * The gist ID that owns the comment.
         * @minLength 1
         */
        gistId: string;
        /**
         * The numeric gist comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The unique identifier of the comment. */
        id: number;
        /** The global node ID of the comment. */
        node_id?: string;
        /** The API URL of the comment. */
        url: string;
        /** The body text of the comment. */
        body?: string;
        /** The creation timestamp of the comment. */
        created_at?: string;
        /** The last updated timestamp of the comment. */
        updated_at?: string;
        /** The author's association with the gist repository. */
        author_association?: string;
        /** The user who posted the comment. */
        user?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get a specific revision of a GitHub gist. */
    "gist.get_gist_revision": {
      input: {
        /**
         * The gist ID that owns the revision.
         * @minLength 1
         */
        gistId: string;
        /**
         * The commit SHA for the revision to fetch.
         * @minLength 1
         */
        sha: string;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The unique identifier of the gist. */
        id: string;
        /** The API URL of the gist. */
        url?: string;
        /** The API URL for listing gist forks. */
        forks_url?: string;
        /** The API URL for listing gist commits. */
        commits_url?: string;
        /** The global node ID of the gist. */
        node_id?: string;
        /** The git pull URL for the gist. */
        git_pull_url?: string;
        /** The git push URL for the gist. */
        git_push_url?: string;
        /** The HTML URL of the gist. */
        html_url: string;
        /** The files contained in the gist, keyed by filename. */
        files: Record<string, {
            /** The filename of the gist file. */
            filename?: string | null;
            /** The MIME type of the file. */
            type?: string | null;
            /** The programming language of the file. */
            language?: string | null;
            /** The URL to the raw file content. */
            raw_url?: string | null;
            /** The file size in bytes. */
            size?: number | null;
            /** Whether the file content was truncated. */
            truncated?: boolean | null;
            /** The text content of the file. */
            content?: string | null;
            /** The encoding of the file content. */
            encoding?: string | null;
            [key: string]: unknown;
          }>;
        /** Whether the gist is publicly visible. */
        public: boolean;
        /** The creation timestamp of the gist. */
        created_at: string;
        /** The last updated timestamp of the gist. */
        updated_at: string;
        /** The description of the gist. */
        description?: string | null;
        /** The number of comments on the gist. */
        comments?: number;
        /** The API URL for listing gist comments. */
        comments_url?: string;
        /** Whether comments are enabled on the gist. */
        comments_enabled?: boolean;
        /** The owner of the gist. */
        owner?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        /** Schema for anyObject. */
        user?: Record<string, unknown> | null;
        /** Whether the gist content was truncated. */
        truncated?: boolean;
        /** The list of forks for the gist. */
        forks?: Array<Record<string, unknown>>;
        /** The commit history of the gist. */
        history?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List comments for a GitHub gist. */
    "gist.list_gist_comments": {
      input: {
        /**
         * The gist ID whose comments should be listed.
         * @minLength 1
         */
        gistId: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The comments posted on the gist. */
        comments: Array<{
          /** The unique identifier of the comment. */
          id: number;
          /** The global node ID of the comment. */
          node_id?: string;
          /** The API URL of the comment. */
          url: string;
          /** The body text of the comment. */
          body?: string;
          /** The creation timestamp of the comment. */
          created_at?: string;
          /** The last updated timestamp of the comment. */
          updated_at?: string;
          /** The author's association with the gist repository. */
          author_association?: string;
          /** The user who posted the comment. */
          user?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List commit history for a GitHub gist. */
    "gist.list_gist_commits": {
      input: {
        /**
         * The gist ID whose revision history should be listed.
         * @minLength 1
         */
        gistId: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The commit history entries for the gist. */
        commits: Array<{
          /** The commit SHA of the gist revision. */
          version: string;
          /** The timestamp when the commit was made. */
          committed_at?: string;
          /** The API URL of the commit. */
          url?: string;
          /** The change statistics for the commit. */
          change_status?: {
            /** The total number of lines changed. */
            total?: number;
            /** The number of lines added. */
            additions?: number;
            /** The number of lines deleted. */
            deletions?: number;
            [key: string]: unknown;
          };
          /** The user who made the commit. */
          user?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List forks for a GitHub gist. */
    "gist.list_gist_forks": {
      input: {
        /**
         * The gist ID whose forks should be listed.
         * @minLength 1
         */
        gistId: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The fork records for the gist. */
        forks: Array<{
          /** The unique identifier of the fork. */
          id: string;
          /** The API URL of the fork. */
          url?: string;
          /** The HTML URL of the fork. */
          html_url?: string;
          /** The creation timestamp of the fork. */
          created_at?: string;
          /** The last updated timestamp of the fork. */
          updated_at?: string;
          /** The user who created the fork. */
          user?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          /** The owner of the fork. */
          owner?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          /** The files in the forked gist. */
          files?: Record<string, {
              /** The filename of the gist file. */
              filename?: string | null;
              /** The MIME type of the file. */
              type?: string | null;
              /** The programming language of the file. */
              language?: string | null;
              /** The URL to the raw file content. */
              raw_url?: string | null;
              /** The file size in bytes. */
              size?: number | null;
              /** Whether the file content was truncated. */
              truncated?: boolean | null;
              /** The text content of the file. */
              content?: string | null;
              /** The encoding of the file content. */
              encoding?: string | null;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List gists visible to the authenticated GitHub user. */
    "gist.list_my_gists": {
      input: {
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The ISO 8601 timestamp to filter gists updated after this time.
         * @format date-time
         */
        since?: string;
      };
      output: {
        /** The visible gists for the authenticated user. */
        gists: Array<{
          /** The unique identifier of the gist. */
          id: string;
          /** The API URL of the gist. */
          url?: string;
          /** The API URL for listing gist forks. */
          forks_url?: string;
          /** The API URL for listing gist commits. */
          commits_url?: string;
          /** The global node ID of the gist. */
          node_id?: string;
          /** The git pull URL for the gist. */
          git_pull_url?: string;
          /** The git push URL for the gist. */
          git_push_url?: string;
          /** The HTML URL of the gist. */
          html_url: string;
          /** The files contained in the gist, keyed by filename. */
          files: Record<string, {
              /** The filename of the gist file. */
              filename?: string | null;
              /** The MIME type of the file. */
              type?: string | null;
              /** The programming language of the file. */
              language?: string | null;
              /** The URL to the raw file content. */
              raw_url?: string | null;
              /** The file size in bytes. */
              size?: number | null;
              /** Whether the file content was truncated. */
              truncated?: boolean | null;
              /** The text content of the file. */
              content?: string | null;
              /** The encoding of the file content. */
              encoding?: string | null;
              [key: string]: unknown;
            }>;
          /** Whether the gist is publicly visible. */
          public: boolean;
          /** The creation timestamp of the gist. */
          created_at: string;
          /** The last updated timestamp of the gist. */
          updated_at: string;
          /** The description of the gist. */
          description?: string | null;
          /** The number of comments on the gist. */
          comments?: number;
          /** The API URL for listing gist comments. */
          comments_url?: string;
          /** Whether comments are enabled on the gist. */
          comments_enabled?: boolean;
          /** The owner of the gist. */
          owner?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          /** Schema for anyObject. */
          user?: Record<string, unknown> | null;
          /** Whether the gist content was truncated. */
          truncated?: boolean;
          /** The list of forks for the gist. */
          forks?: Array<Record<string, unknown>>;
          /** The commit history of the gist. */
          history?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List recent public GitHub gists. */
    "gist.list_public_gists": {
      input: {
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The ISO 8601 timestamp to filter gists updated after this time.
         * @format date-time
         */
        since?: string;
      };
      output: {
        /** The public gists returned by GitHub. */
        gists: Array<{
          /** The unique identifier of the gist. */
          id: string;
          /** The API URL of the gist. */
          url?: string;
          /** The API URL for listing gist forks. */
          forks_url?: string;
          /** The API URL for listing gist commits. */
          commits_url?: string;
          /** The global node ID of the gist. */
          node_id?: string;
          /** The git pull URL for the gist. */
          git_pull_url?: string;
          /** The git push URL for the gist. */
          git_push_url?: string;
          /** The HTML URL of the gist. */
          html_url: string;
          /** The files contained in the gist, keyed by filename. */
          files: Record<string, {
              /** The filename of the gist file. */
              filename?: string | null;
              /** The MIME type of the file. */
              type?: string | null;
              /** The programming language of the file. */
              language?: string | null;
              /** The URL to the raw file content. */
              raw_url?: string | null;
              /** The file size in bytes. */
              size?: number | null;
              /** Whether the file content was truncated. */
              truncated?: boolean | null;
              /** The text content of the file. */
              content?: string | null;
              /** The encoding of the file content. */
              encoding?: string | null;
              [key: string]: unknown;
            }>;
          /** Whether the gist is publicly visible. */
          public: boolean;
          /** The creation timestamp of the gist. */
          created_at: string;
          /** The last updated timestamp of the gist. */
          updated_at: string;
          /** The description of the gist. */
          description?: string | null;
          /** The number of comments on the gist. */
          comments?: number;
          /** The API URL for listing gist comments. */
          comments_url?: string;
          /** Whether comments are enabled on the gist. */
          comments_enabled?: boolean;
          /** The owner of the gist. */
          owner?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          /** Schema for anyObject. */
          user?: Record<string, unknown> | null;
          /** Whether the gist content was truncated. */
          truncated?: boolean;
          /** The list of forks for the gist. */
          forks?: Array<Record<string, unknown>>;
          /** The commit history of the gist. */
          history?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List gists starred by the authenticated GitHub user. */
    "gist.list_starred_gists": {
      input: {
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The ISO 8601 timestamp to filter gists updated after this time.
         * @format date-time
         */
        since?: string;
      };
      output: {
        /** The gists starred by the authenticated user. */
        gists: Array<{
          /** The unique identifier of the gist. */
          id: string;
          /** The API URL of the gist. */
          url?: string;
          /** The API URL for listing gist forks. */
          forks_url?: string;
          /** The API URL for listing gist commits. */
          commits_url?: string;
          /** The global node ID of the gist. */
          node_id?: string;
          /** The git pull URL for the gist. */
          git_pull_url?: string;
          /** The git push URL for the gist. */
          git_push_url?: string;
          /** The HTML URL of the gist. */
          html_url: string;
          /** The files contained in the gist, keyed by filename. */
          files: Record<string, {
              /** The filename of the gist file. */
              filename?: string | null;
              /** The MIME type of the file. */
              type?: string | null;
              /** The programming language of the file. */
              language?: string | null;
              /** The URL to the raw file content. */
              raw_url?: string | null;
              /** The file size in bytes. */
              size?: number | null;
              /** Whether the file content was truncated. */
              truncated?: boolean | null;
              /** The text content of the file. */
              content?: string | null;
              /** The encoding of the file content. */
              encoding?: string | null;
              [key: string]: unknown;
            }>;
          /** Whether the gist is publicly visible. */
          public: boolean;
          /** The creation timestamp of the gist. */
          created_at: string;
          /** The last updated timestamp of the gist. */
          updated_at: string;
          /** The description of the gist. */
          description?: string | null;
          /** The number of comments on the gist. */
          comments?: number;
          /** The API URL for listing gist comments. */
          comments_url?: string;
          /** Whether comments are enabled on the gist. */
          comments_enabled?: boolean;
          /** The owner of the gist. */
          owner?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          /** Schema for anyObject. */
          user?: Record<string, unknown> | null;
          /** Whether the gist content was truncated. */
          truncated?: boolean;
          /** The list of forks for the gist. */
          forks?: Array<Record<string, unknown>>;
          /** The commit history of the gist. */
          history?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List public gists for a GitHub user. */
    "gist.list_user_gists": {
      input: {
        /**
         * The GitHub username whose public gists should be listed.
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
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The ISO 8601 timestamp to filter results updated after this time.
         * @format date-time
         */
        since?: string;
      };
      output: {
        /** The public gists for the requested user. */
        gists: Array<{
          /** The unique identifier of the gist. */
          id: string;
          /** The API URL of the gist. */
          url?: string;
          /** The API URL for listing gist forks. */
          forks_url?: string;
          /** The API URL for listing gist commits. */
          commits_url?: string;
          /** The global node ID of the gist. */
          node_id?: string;
          /** The git pull URL for the gist. */
          git_pull_url?: string;
          /** The git push URL for the gist. */
          git_push_url?: string;
          /** The HTML URL of the gist. */
          html_url: string;
          /** The files contained in the gist, keyed by filename. */
          files: Record<string, {
              /** The filename of the gist file. */
              filename?: string | null;
              /** The MIME type of the file. */
              type?: string | null;
              /** The programming language of the file. */
              language?: string | null;
              /** The URL to the raw file content. */
              raw_url?: string | null;
              /** The file size in bytes. */
              size?: number | null;
              /** Whether the file content was truncated. */
              truncated?: boolean | null;
              /** The text content of the file. */
              content?: string | null;
              /** The encoding of the file content. */
              encoding?: string | null;
              [key: string]: unknown;
            }>;
          /** Whether the gist is publicly visible. */
          public: boolean;
          /** The creation timestamp of the gist. */
          created_at: string;
          /** The last updated timestamp of the gist. */
          updated_at: string;
          /** The description of the gist. */
          description?: string | null;
          /** The number of comments on the gist. */
          comments?: number;
          /** The API URL for listing gist comments. */
          comments_url?: string;
          /** Whether comments are enabled on the gist. */
          comments_enabled?: boolean;
          /** The owner of the gist. */
          owner?: {
            /** The GitHub username of the gist owner. */
            login: string;
            /** The numeric user ID. */
            id: number;
            /** The global node ID of the user. */
            node_id?: string;
            /** The URL of the user avatar image. */
            avatar_url?: string;
            /** The HTML URL of the user profile. */
            html_url?: string;
            /** The API URL of the user. */
            url?: string;
            /** The account type of the user. */
            type?: string;
            /** Whether the user is a GitHub site administrator. */
            site_admin?: boolean;
            [key: string]: unknown;
          } | null;
          /** Schema for anyObject. */
          user?: Record<string, unknown> | null;
          /** Whether the gist content was truncated. */
          truncated?: boolean;
          /** The list of forks for the gist. */
          forks?: Array<Record<string, unknown>>;
          /** The commit history of the gist. */
          history?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Star a GitHub gist. */
    "gist.star_gist": {
      input: {
        /**
         * The gist ID to star.
         * @minLength 1
         */
        gistId: string;
      };
      output: {
        /** Whether the gist is now starred. */
        starred: true;
      };
    };
    /** Unstar a GitHub gist. */
    "gist.unstar_gist": {
      input: {
        /**
         * The gist ID to unstar.
         * @minLength 1
         */
        gistId: string;
      };
      output: {
        /** Whether the gist is now unstarred. */
        starred: false;
      };
    };
    /** Update a GitHub gist description or files. */
    "gist.update_gist": {
      input: {
        /**
         * The gist ID to update.
         * @minLength 1
         */
        gistId: string;
        /** The new gist description. */
        description?: string;
        /** Updated file entries keyed by filename. Use null to delete a file. */
        files?: Record<string, {
            /** The updated text content for the file. */
            content?: string;
            /** The new filename for the file. */
            filename?: string | null;
          } | null>;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The unique identifier of the gist. */
        id: string;
        /** The API URL of the gist. */
        url?: string;
        /** The API URL for listing gist forks. */
        forks_url?: string;
        /** The API URL for listing gist commits. */
        commits_url?: string;
        /** The global node ID of the gist. */
        node_id?: string;
        /** The git pull URL for the gist. */
        git_pull_url?: string;
        /** The git push URL for the gist. */
        git_push_url?: string;
        /** The HTML URL of the gist. */
        html_url: string;
        /** The files contained in the gist, keyed by filename. */
        files: Record<string, {
            /** The filename of the gist file. */
            filename?: string | null;
            /** The MIME type of the file. */
            type?: string | null;
            /** The programming language of the file. */
            language?: string | null;
            /** The URL to the raw file content. */
            raw_url?: string | null;
            /** The file size in bytes. */
            size?: number | null;
            /** Whether the file content was truncated. */
            truncated?: boolean | null;
            /** The text content of the file. */
            content?: string | null;
            /** The encoding of the file content. */
            encoding?: string | null;
            [key: string]: unknown;
          }>;
        /** Whether the gist is publicly visible. */
        public: boolean;
        /** The creation timestamp of the gist. */
        created_at: string;
        /** The last updated timestamp of the gist. */
        updated_at: string;
        /** The description of the gist. */
        description?: string | null;
        /** The number of comments on the gist. */
        comments?: number;
        /** The API URL for listing gist comments. */
        comments_url?: string;
        /** Whether comments are enabled on the gist. */
        comments_enabled?: boolean;
        /** The owner of the gist. */
        owner?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        /** Schema for anyObject. */
        user?: Record<string, unknown> | null;
        /** Whether the gist content was truncated. */
        truncated?: boolean;
        /** The list of forks for the gist. */
        forks?: Array<Record<string, unknown>>;
        /** The commit history of the gist. */
        history?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Update a GitHub gist comment. */
    "gist.update_gist_comment": {
      input: {
        /**
         * The gist ID that owns the comment.
         * @minLength 1
         */
        gistId: string;
        /**
         * The numeric gist comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
        /**
         * The updated comment body text.
         * @minLength 1
         */
        body: string;
        /** The media type format for the gist content. */
        mediaType?: "json" | "raw" | "base64";
      };
      output: {
        /** The unique identifier of the comment. */
        id: number;
        /** The global node ID of the comment. */
        node_id?: string;
        /** The API URL of the comment. */
        url: string;
        /** The body text of the comment. */
        body?: string;
        /** The creation timestamp of the comment. */
        created_at?: string;
        /** The last updated timestamp of the comment. */
        updated_at?: string;
        /** The author's association with the gist repository. */
        author_association?: string;
        /** The user who posted the comment. */
        user?: {
          /** The GitHub username of the gist owner. */
          login: string;
          /** The numeric user ID. */
          id: number;
          /** The global node ID of the user. */
          node_id?: string;
          /** The URL of the user avatar image. */
          avatar_url?: string;
          /** The HTML URL of the user profile. */
          html_url?: string;
          /** The API URL of the user. */
          url?: string;
          /** The account type of the user. */
          type?: string;
          /** Whether the user is a GitHub site administrator. */
          site_admin?: boolean;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
  }
}
