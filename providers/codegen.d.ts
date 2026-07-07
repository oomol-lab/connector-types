import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a single Codegen agent run status and result. */
    "codegen.get_agent_run": {
      input: {
        /**
         * The Codegen organization ID. Omit this field to use the organization ID saved with the credential.
         * @minimum 1
         */
        org_id?: number;
        /**
         * The Codegen agent run ID to retrieve.
         * @minimum 1
         */
        agent_run_id: number;
      };
      output: {
        /** A Codegen agent run. */
        agent_run: {
          /** The Codegen agent run ID. */
          id?: number;
          /** The Codegen organization ID that owns the agent run. */
          organization_id?: number;
          /** The current agent run status. */
          status?: string | null;
          /** The timestamp when the agent run was created. */
          created_at?: string | null;
          /**
           * The Codegen web URL for the agent run.
           * @format uri
           */
          web_url?: string | null;
          /** The final agent run result when available. */
          result?: string | null;
          /** The agent run summary when available. */
          summary?: string | null;
          /** The source type used to filter agent runs. */
          source_type?: "LOCAL" | "SLACK" | "GITHUB" | "GITHUB_CHECK_SUITE" | "GITHUB_PR_REVIEW" | "LINEAR" | "API" | "CHAT" | "JIRA" | "CLICKUP" | "MONDAY" | "SETUP_COMMANDS" | null;
          /** GitHub pull requests linked to the agent run. */
          github_pull_requests?: Array<{
            /** The Codegen pull request record ID. */
            id?: number;
            /** The pull request title. */
            title?: string | null;
            /**
             * The pull request URL.
             * @format uri
             */
            url?: string | null;
            /** The timestamp when the pull request record was created. */
            created_at?: string;
            /** The pull request head branch name. */
            head_branch_name?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Additional Codegen metadata for the agent run. */
          metadata?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Codegen user associated with the API token. */
    "codegen.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Codegen user. */
        user: {
          /** The Codegen user ID. */
          id?: number;
          /**
           * The user's email address.
           * @format email
           */
          email?: string | null;
          /** The user's GitHub user ID. */
          github_user_id?: string;
          /** The user's GitHub username. */
          github_username?: string;
          /**
           * The URL of the user's avatar image.
           * @format uri
           */
          avatar_url?: string | null;
          /** The user's full name. */
          full_name?: string | null;
          /** The user's organization role. */
          role?: string | null;
          /** Whether the user is an admin. */
          is_admin?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Codegen agent runs for an organization. */
    "codegen.list_agent_runs": {
      input: {
        /**
         * The Codegen organization ID. Omit this field to use the organization ID saved with the credential.
         * @minimum 1
         */
        org_id?: number;
        /**
         * Filter agent runs by the Codegen user ID that started them.
         * @minimum 1
         */
        user_id?: number | null;
        /** The source type used to filter agent runs. */
        source_type?: "LOCAL" | "SLACK" | "GITHUB" | "GITHUB_CHECK_SUITE" | "GITHUB_PR_REVIEW" | "LINEAR" | "API" | "CHAT" | "JIRA" | "CLICKUP" | "MONDAY" | "SETUP_COMMANDS" | null;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of items to return. Codegen allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Agent runs returned by Codegen. */
        agent_runs: Array<{
          /** The Codegen agent run ID. */
          id?: number;
          /** The Codegen organization ID that owns the agent run. */
          organization_id?: number;
          /** The current agent run status. */
          status?: string | null;
          /** The timestamp when the agent run was created. */
          created_at?: string | null;
          /**
           * The Codegen web URL for the agent run.
           * @format uri
           */
          web_url?: string | null;
          /** The final agent run result when available. */
          result?: string | null;
          /** The agent run summary when available. */
          summary?: string | null;
          /** The source type used to filter agent runs. */
          source_type?: "LOCAL" | "SLACK" | "GITHUB" | "GITHUB_CHECK_SUITE" | "GITHUB_PR_REVIEW" | "LINEAR" | "API" | "CHAT" | "JIRA" | "CLICKUP" | "MONDAY" | "SETUP_COMMANDS" | null;
          /** GitHub pull requests linked to the agent run. */
          github_pull_requests?: Array<{
            /** The Codegen pull request record ID. */
            id?: number;
            /** The pull request title. */
            title?: string | null;
            /**
             * The pull request URL.
             * @format uri
             */
            url?: string | null;
            /** The timestamp when the pull request record was created. */
            created_at?: string;
            /** The pull request head branch name. */
            head_branch_name?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Additional Codegen metadata for the agent run. */
          metadata?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Codegen. */
        pagination: {
          /** The total number of matching records. */
          total: number;
          /** The current result page. */
          page: number;
          /** The number of items in the page. */
          size: number;
          /** The total number of pages. */
          pages: number;
        };
      };
    };
    /** List Codegen organizations available to the authenticated API token. */
    "codegen.list_organizations": {
      input: {
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of items to return. Codegen allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Organizations returned by Codegen. */
        organizations: Array<{
          /** The Codegen organization ID. */
          id?: number;
          /** The organization name. */
          name?: string;
          /** The organization settings returned by Codegen. */
          settings?: {
            /** Whether Codegen can create pull requests for this organization. */
            enable_pr_creation?: boolean;
            /** Whether Codegen can detect rules for this organization. */
            enable_rules_detection?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Codegen. */
        pagination: {
          /** The total number of matching records. */
          total: number;
          /** The current result page. */
          page: number;
          /** The number of items in the page. */
          size: number;
          /** The total number of pages. */
          pages: number;
        };
      };
    };
    /** List repositories for a Codegen organization. */
    "codegen.list_repositories": {
      input: {
        /**
         * The Codegen organization ID. Omit this field to use the organization ID saved with the credential.
         * @minimum 1
         */
        org_id?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of items to return. Codegen allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Repositories returned by Codegen. */
        repositories: Array<{
          /** The Codegen repository ID. */
          id?: number;
          /** The repository name. */
          name?: string;
          /** The full repository name. */
          full_name?: string;
          /** The repository description. */
          description?: string | null;
          /** The GitHub repository ID. */
          github_id?: string;
          /** The Codegen organization ID that owns the repository. */
          organization_id?: number;
          /** The repository visibility. */
          visibility?: string | null;
          /** Whether the repository is archived. */
          archived?: boolean | null;
          /** The repository setup status in Codegen. */
          setup_status?: string;
          /** The primary repository language. */
          language?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Codegen. */
        pagination: {
          /** The total number of matching records. */
          total: number;
          /** The current result page. */
          page: number;
          /** The number of items in the page. */
          size: number;
          /** The total number of pages. */
          pages: number;
        };
      };
    };
    /** List users for a Codegen organization. */
    "codegen.list_users": {
      input: {
        /**
         * The Codegen organization ID. Omit this field to use the organization ID saved with the credential.
         * @minimum 1
         */
        org_id?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of items to return. Codegen allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Users returned by Codegen. */
        users: Array<{
          /** The Codegen user ID. */
          id?: number;
          /**
           * The user's email address.
           * @format email
           */
          email?: string | null;
          /** The user's GitHub user ID. */
          github_user_id?: string;
          /** The user's GitHub username. */
          github_username?: string;
          /**
           * The URL of the user's avatar image.
           * @format uri
           */
          avatar_url?: string | null;
          /** The user's full name. */
          full_name?: string | null;
          /** The user's organization role. */
          role?: string | null;
          /** Whether the user is an admin. */
          is_admin?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Codegen. */
        pagination: {
          /** The total number of matching records. */
          total: number;
          /** The current result page. */
          page: number;
          /** The number of items in the page. */
          size: number;
          /** The total number of pages. */
          pages: number;
        };
      };
    };
  }
}
