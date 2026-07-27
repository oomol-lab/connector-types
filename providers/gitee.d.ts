import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current authenticated Gitee user profile. */
    "gitee.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Gitee user ID. */
        id?: number;
        /** The Gitee username. */
        login?: string;
        /** The user's display name when set. */
        name?: string | null;
        /** The user's email address when visible. */
        email?: string | null;
        /** The user's avatar URL. */
        avatar_url?: string;
        /** The user's Gitee profile URL. */
        html_url?: string;
        /** The user's biography when set. */
        bio?: string | null;
        /** The number of public repositories. */
        public_repos?: number;
        /** The user's follower count. */
        followers?: number;
        /** The number of users followed by this user. */
        following?: number;
        /** The account creation timestamp. */
        created_at?: string;
        /** The account update timestamp. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Gitee repository by namespace owner and repository path. */
    "gitee.get_repository": {
      input: {
        /**
         * The repository namespace path.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository path.
         * @minLength 1
         */
        repo: string;
      };
      output: {
        /** The Gitee repository ID. */
        id?: number;
        /** The repository name including its namespace. */
        full_name?: string;
        /** The human-readable repository name. */
        human_name?: string;
        /** The repository path. */
        path?: string;
        /** The repository name. */
        name?: string;
        /** The repository description when set. */
        description?: string | null;
        /** Whether the repository is private. */
        private?: boolean;
        /** Whether the repository is public. */
        public?: boolean;
        /** Whether the repository is internally visible. */
        internal?: boolean;
        /** Whether the repository is a fork. */
        fork?: boolean;
        /** The repository web URL. */
        html_url?: string;
        /** The repository SSH clone URL. */
        ssh_url?: string;
        /** The default branch name. */
        default_branch?: string;
        /** The primary repository language when detected. */
        language?: string | null;
        /** The number of forks. */
        forks_count?: number;
        /** The number of stars. */
        stargazers_count?: number;
        /** The number of watchers. */
        watchers_count?: number;
        /** The number of open issues. */
        open_issues_count?: number;
        /** The repository creation timestamp. */
        created_at?: string;
        /** The repository update timestamp. */
        updated_at?: string;
        /** The most recent push timestamp when the repository has commits. */
        pushed_at?: string | null;
        /** A Gitee user record. */
        owner?: {
          /** The Gitee user ID. */
          id?: number;
          /** The Gitee username. */
          login?: string;
          /** The user's display name when set. */
          name?: string | null;
          /** The user's email address when visible. */
          email?: string | null;
          /** The user's avatar URL. */
          avatar_url?: string;
          /** The user's Gitee profile URL. */
          html_url?: string;
          /** The user's biography when set. */
          bio?: string | null;
          /** The number of public repositories. */
          public_repos?: number;
          /** The user's follower count. */
          followers?: number;
          /** The number of users followed by this user. */
          following?: number;
          /** The account creation timestamp. */
          created_at?: string;
          /** The account update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List repositories visible to the authenticated Gitee user. */
    "gitee.list_my_repositories": {
      input: {
        /** Filter repositories by visibility. */
        visibility?: "private" | "public" | "all";
        /**
         * Search repositories by keyword.
         * @minLength 1
         */
        q?: string;
        /** Sort repositories by a Gitee-supported field. */
        sort?: "created" | "updated" | "pushed" | "full_name";
        /** Sort direction. */
        direction?: "asc" | "desc";
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of repositories per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Repositories returned by Gitee. */
        repositories: Array<{
          /** The Gitee repository ID. */
          id?: number;
          /** The repository name including its namespace. */
          full_name?: string;
          /** The human-readable repository name. */
          human_name?: string;
          /** The repository path. */
          path?: string;
          /** The repository name. */
          name?: string;
          /** The repository description when set. */
          description?: string | null;
          /** Whether the repository is private. */
          private?: boolean;
          /** Whether the repository is public. */
          public?: boolean;
          /** Whether the repository is internally visible. */
          internal?: boolean;
          /** Whether the repository is a fork. */
          fork?: boolean;
          /** The repository web URL. */
          html_url?: string;
          /** The repository SSH clone URL. */
          ssh_url?: string;
          /** The default branch name. */
          default_branch?: string;
          /** The primary repository language when detected. */
          language?: string | null;
          /** The number of forks. */
          forks_count?: number;
          /** The number of stars. */
          stargazers_count?: number;
          /** The number of watchers. */
          watchers_count?: number;
          /** The number of open issues. */
          open_issues_count?: number;
          /** The repository creation timestamp. */
          created_at?: string;
          /** The repository update timestamp. */
          updated_at?: string;
          /** The most recent push timestamp when the repository has commits. */
          pushed_at?: string | null;
          /** A Gitee user record. */
          owner?: {
            /** The Gitee user ID. */
            id?: number;
            /** The Gitee username. */
            login?: string;
            /** The user's display name when set. */
            name?: string | null;
            /** The user's email address when visible. */
            email?: string | null;
            /** The user's avatar URL. */
            avatar_url?: string;
            /** The user's Gitee profile URL. */
            html_url?: string;
            /** The user's biography when set. */
            bio?: string | null;
            /** The number of public repositories. */
            public_repos?: number;
            /** The user's follower count. */
            followers?: number;
            /** The number of users followed by this user. */
            following?: number;
            /** The account creation timestamp. */
            created_at?: string;
            /** The account update timestamp. */
            updated_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
  }
}
