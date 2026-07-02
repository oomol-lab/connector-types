import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for the user or service user associated with the Terraform API token. */
    "terraform.get_account_details": {
      input: Record<string, never>;
      output: {
        /** A normalized JSON:API resource returned by HCP Terraform. */
        user: {
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        };
      };
    };
    /** Get details for a single HCP Terraform organization by name. */
    "terraform.get_organization": {
      input: {
        /**
         * The HCP Terraform organization name.
         * @minLength 1
         * @pattern \S
         */
        organizationName: string;
      };
      output: {
        /** A normalized JSON:API resource returned by HCP Terraform. */
        organization: {
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        };
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
    /** Get HCP Terraform run details by run ID. */
    "terraform.get_run": {
      input: {
        /**
         * The HCP Terraform run ID.
         * @minLength 1
         * @pattern \S
         */
        runId: string;
      };
      output: {
        /** A normalized JSON:API resource returned by HCP Terraform. */
        run: {
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        };
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
    /** Get HCP Terraform workspace details by workspace ID. */
    "terraform.get_workspace_by_id": {
      input: {
        /**
         * The HCP Terraform workspace ID.
         * @minLength 1
         * @pattern \S
         */
        workspaceId: string;
      };
      output: {
        /** A normalized JSON:API resource returned by HCP Terraform. */
        workspace: {
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        };
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
    /** Get HCP Terraform workspace details by organization and workspace name. */
    "terraform.get_workspace_by_name": {
      input: {
        /**
         * The HCP Terraform organization name.
         * @minLength 1
         * @pattern \S
         */
        organizationName: string;
        /**
         * The HCP Terraform workspace name.
         * @minLength 1
         * @pattern \S
         */
        workspaceName: string;
      };
      output: {
        /** A normalized JSON:API resource returned by HCP Terraform. */
        workspace: {
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        };
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
    /** List HCP Terraform organizations visible to the authenticated token. */
    "terraform.list_organizations": {
      input: {
        /**
         * The 1-indexed page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The organizations returned by HCP Terraform. */
        organizations: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
        /** The JSON:API links object returned by HCP Terraform. */
        links: Record<string, unknown> | null;
        /** The JSON:API metadata object returned by HCP Terraform. */
        meta: Record<string, unknown> | null;
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
    /** List HCP Terraform runs for a workspace with optional filters. */
    "terraform.list_workspace_runs": {
      input: {
        /**
         * The HCP Terraform workspace ID.
         * @minLength 1
         * @pattern \S
         */
        workspaceId: string;
        /**
         * The 1-indexed page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The run operations to include.
         * @minItems 1
         */
        operations?: Array<"plan_only" | "plan_and_apply" | "save_plan" | "refresh_only" | "destroy" | "empty_apply" | "action_only">;
        /**
         * The run statuses to include.
         * @minItems 1
         */
        statuses?: Array<string>;
        /** The run status group filter value. */
        statusGroup?: "non_final" | "final" | "discardable";
        /**
         * The run sources to include.
         * @minItems 1
         */
        sources?: Array<"tfe-ui" | "tfe-api" | "tfe-configuration-version">;
      };
      output: {
        /** The runs returned by HCP Terraform. */
        runs: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
        /** The JSON:API links object returned by HCP Terraform. */
        links: Record<string, unknown> | null;
        /** The JSON:API metadata object returned by HCP Terraform. */
        meta: Record<string, unknown> | null;
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
    /** List HCP Terraform workspaces in an organization with optional pagination. */
    "terraform.list_workspaces": {
      input: {
        /**
         * The HCP Terraform organization name.
         * @minLength 1
         * @pattern \S
         */
        organizationName: string;
        /**
         * The 1-indexed page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The workspaces returned by HCP Terraform. */
        workspaces: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
        /** The JSON:API links object returned by HCP Terraform. */
        links: Record<string, unknown> | null;
        /** The JSON:API metadata object returned by HCP Terraform. */
        meta: Record<string, unknown> | null;
        /** The included JSON:API resources returned by HCP Terraform. */
        included: Array<{
          /** The JSON:API resource ID. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The JSON:API resource attributes returned by HCP Terraform. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships object returned by HCP Terraform. */
          relationships: Record<string, unknown> | null;
          /** The JSON:API links object returned by HCP Terraform. */
          links: Record<string, unknown> | null;
        }>;
      };
    };
  }
}
