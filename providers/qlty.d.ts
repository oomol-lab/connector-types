import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Qlty user associated with the API token. */
    "qlty.get_authenticated_user": {
      input: Record<string, never>;
      output: {
        /** A Qlty authenticated user. */
        user: {
          /** The Qlty user ID. */
          id?: string;
          /** The user's login. */
          login?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's avatar URL. */
          avatarUrl?: string;
          /** The upstream provider profile URL. */
          providerUrl?: string;
          /** The user creation timestamp. */
          createdAt?: string;
          /** The user update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Qlty project by workspace owner and project key or ID. */
    "qlty.get_project": {
      input: {
        /**
         * Repository owner login or Qlty workspace ID. Must be at least 3 characters.
         * @minLength 3
         */
        ownerKeyOrId: string;
        /**
         * Repository name or Qlty project ID. Must be at least 3 characters.
         * @minLength 3
         */
        keyOrId: string;
      };
      output: {
        /** A Qlty project. */
        project: {
          /** The Qlty project ID. */
          id?: string;
          /** The Qlty workspace ID that owns the project. */
          workspaceId?: string;
          /** The upstream provider repository URL. */
          providerUrl?: string;
          /** The repository name. */
          key?: string;
          /** The key of the workspace that owns the project. */
          workspaceKey?: string;
          [key: string]: unknown;
        };
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the latest Qlty metric values for a project's default branch. */
    "qlty.get_project_metrics": {
      input: {
        /**
         * Repository owner login or Qlty workspace ID. Must be at least 3 characters.
         * @minLength 3
         */
        ownerKeyOrId: string;
        /**
         * Repository name or Qlty project ID. Must be at least 3 characters.
         * @minLength 3
         */
        projectKeyOrId: string;
      };
      output: {
        /** The project metrics returned by Qlty. */
        metrics: Array<{
          /** The metric key. */
          key?: string;
          /** The metric display name. */
          name?: string;
          /** The metric description. */
          description?: string;
          /** The metric category. */
          category?: string;
          /** The latest metric value. */
          value?: number | string;
          /** Whether higher values are worse for this metric. */
          inverted?: boolean;
          /** How the metric value should be interpreted. */
          valueType?: string;
          [key: string]: unknown;
        }>;
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Qlty API rate-limit status for the API token. */
    "qlty.get_rate_limit_status": {
      input: Record<string, never>;
      output: {
        /** The Qlty rate-limit resources object. */
        resources: Record<string, unknown>;
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Qlty workspace by key or ID. */
    "qlty.get_workspace": {
      input: {
        /**
         * Qlty workspace key or ID. Must be at least 3 characters.
         * @minLength 3
         */
        keyOrId: string;
      };
      output: {
        /** A Qlty workspace. */
        workspace: {
          /** The Qlty workspace ID. */
          id?: string;
          /** The Qlty workspace key. */
          key?: string;
          /** The workspace avatar URL. */
          avatarUrl?: string;
          /** The upstream provider workspace URL. */
          providerUrl?: string;
          /** The workspace creation timestamp. */
          createdAt?: string;
          /** The workspace update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Qlty issues for a project with optional category, level, status, and tool filters. */
    "qlty.list_issues": {
      input: {
        /**
         * Repository owner login or Qlty workspace ID. Must be at least 3 characters.
         * @minLength 3
         */
        ownerKeyOrId: string;
        /**
         * Repository name or Qlty project ID. Must be at least 3 characters.
         * @minLength 3
         */
        projectKeyOrId: string;
        /**
         * Maximum number of items to return. Qlty accepts 1-100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** issue categories to include. */
        category?: "bug" | "vulnerability" | "structure" | "duplication" | "security_hotspot" | "performance" | "documentation" | "type_check" | "style" | "anti_pattern" | "accessibility" | "dead_code" | "lint" | "secret" | "dependency_alert" | Array<"bug" | "vulnerability" | "structure" | "duplication" | "security_hotspot" | "performance" | "documentation" | "type_check" | "style" | "anti_pattern" | "accessibility" | "dead_code" | "lint" | "secret" | "dependency_alert">;
        /** issue levels to include. */
        level?: "high" | "medium" | "low" | "note" | "fmt" | Array<"high" | "medium" | "low" | "note" | "fmt">;
        /** issue statuses to include. */
        status?: "open" | "ignored" | Array<"open" | "ignored">;
        /** tool names to include. */
        tool?: string | Array<string>;
      };
      output: {
        /** The issues returned by Qlty. */
        issues: Array<{
          /** The Qlty issue ID. */
          id?: string;
          /** The stable fingerprint for the issue. */
          fingerprint?: string;
          /** The tool that reported the issue. */
          tool?: string;
          /** The rule key reported by the tool. */
          ruleKey?: string;
          /** The issue message. */
          message?: string;
          /** The Qlty issue category. */
          category?: string;
          /** The Qlty issue level. */
          level?: string;
          /** The Qlty issue status. */
          status?: string;
          /** The documentation URL for the rule when available. */
          documentationUrl?: string;
          /** A Qlty issue location. */
          location?: {
            /** The source file path for the issue. */
            path?: string;
            /** The starting line number for the issue. */
            startLine?: number;
            /** The ending line number for the issue. */
            endLine?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether Qlty has more issues after this page. */
        hasMore: boolean;
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Qlty projects associated with a workspace or repository owner. */
    "qlty.list_projects": {
      input: {
        /**
         * Repository owner login or Qlty workspace ID. Must be at least 3 characters.
         * @minLength 3
         */
        ownerKeyOrId: string;
        /**
         * Maximum number of items to return. Qlty accepts 1-100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The projects returned by Qlty. */
        projects: Array<{
          /** The Qlty project ID. */
          id?: string;
          /** The Qlty workspace ID that owns the project. */
          workspaceId?: string;
          /** The upstream provider repository URL. */
          providerUrl?: string;
          /** The repository name. */
          key?: string;
          /** The key of the workspace that owns the project. */
          workspaceKey?: string;
          [key: string]: unknown;
        }>;
        /** Whether Qlty has more projects after this page. */
        hasMore: boolean;
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Qlty workspaces accessible to the API token. */
    "qlty.list_workspaces": {
      input: {
        /**
         * Maximum number of items to return. Qlty accepts 1-100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The workspaces returned by Qlty. */
        workspaces: Array<{
          /** The Qlty workspace ID. */
          id?: string;
          /** The Qlty workspace key. */
          key?: string;
          /** The workspace avatar URL. */
          avatarUrl?: string;
          /** The upstream provider workspace URL. */
          providerUrl?: string;
          /** The workspace creation timestamp. */
          createdAt?: string;
          /** The workspace update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Whether Qlty has more workspaces after this page. */
        hasMore: boolean;
        /** The raw Qlty API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
