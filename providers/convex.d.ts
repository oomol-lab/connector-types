import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a deploy key for a Convex deployment. */
    "convex.create_deploy_key": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
        /** @minLength 1 */
        name: string;
      };
      output: {
        deployKey: string;
      };
    };
    /** Create a new deployment in a Convex project. */
    "convex.create_deployment": {
      input: {
        /** @exclusiveMinimum 0 */
        project_id: number;
        type: "dev" | "prod" | "preview";
        /** @minLength 1 */
        class?: string;
        /** @minLength 1 */
        region?: string;
        /** @minLength 1 */
        reference?: string;
        isDefault?: boolean;
        expiresAt?: number | null;
      };
      output: {
        /** A Convex deployment. */
        deployment: {
          kind?: string;
          name: string;
          deploymentType: string;
          projectId: number;
          createTime: number;
          deploymentUrl?: string;
          reference?: string | null;
          region?: string | null;
          isDefault?: boolean;
          previewIdentifier?: string | null;
          dashboardEditConfirmation?: boolean | null;
          lastDeployTime?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Convex project on a team, optionally provisioning an initial dev or prod deployment. */
    "convex.create_project": {
      input: {
        /** @exclusiveMinimum 0 */
        team_id: number;
        /** @minLength 1 */
        projectName: string;
        deploymentType?: "dev" | "prod";
        /** @minLength 1 */
        deploymentClass?: string;
        /** @minLength 1 */
        deploymentRegion?: string;
      };
      output: {
        projectId: number;
        deploymentName?: string | null;
        deploymentUrl?: string | null;
      };
    };
    /** Remove a custom domain from a Convex deployment. */
    "convex.delete_custom_domain": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
        /** @minLength 1 */
        domain: string;
      };
      output: {
        success: boolean;
      };
    };
    /** Delete a deploy key for a Convex deployment. */
    "convex.delete_deploy_key": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
        /** @minLength 1 */
        id: string;
      };
      output: {
        success: boolean;
      };
    };
    /** Delete a Convex deployment and all of its data. */
    "convex.delete_deployment": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
      };
      output: {
        success: boolean;
      };
    };
    /** Delete a Convex project and all of its deployments. */
    "convex.delete_project": {
      input: {
        /** @exclusiveMinimum 0 */
        project_id: number;
      };
      output: {
        success: boolean;
      };
    };
    /** Execute multiple Convex queries against a deployment and return results in the same order. */
    "convex.execute_query_batch": {
      input: {
        /** @minItems 1 */
        queries: Array<{
          /** @minLength 1 */
          path: string;
          /** @default {} */
          args: Record<string, unknown>;
          format?: "json";
        }>;
        /** @format uri */
        deployment_url?: string;
      };
      output: {
        results: Array<{
          status: "success" | "error";
          value?: unknown;
          logLines?: Array<string>;
          errorMessage?: string;
          errorData?: unknown;
        }>;
      };
    };
    /** Get a cloud deployment by deployment name. */
    "convex.get_deployment": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
      };
      output: {
        /** A Convex deployment. */
        deployment: {
          kind?: string;
          name: string;
          deploymentType: string;
          projectId: number;
          createTime: number;
          deploymentUrl?: string;
          reference?: string | null;
          region?: string | null;
          isDefault?: boolean;
          previewIdentifier?: string | null;
          dashboardEditConfirmation?: boolean | null;
          lastDeployTime?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Convex project by numeric project ID. */
    "convex.get_project_by_id": {
      input: {
        /** @exclusiveMinimum 0 */
        project_id: number;
      };
      output: {
        /** A Convex project. */
        project: {
          id: number;
          name: string;
          slug: string;
          teamId: number;
          teamSlug: string;
          createTime: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Convex project by team identifier or slug plus project slug. */
    "convex.get_project_by_slug": {
      input: {
        /** @minLength 1 */
        team_id_or_slug: string;
        /** @minLength 1 */
        project_slug: string;
      };
      output: {
        /** A Convex project. */
        project: {
          id: number;
          name: string;
          slug: string;
          teamId: number;
          teamSlug: string;
          createTime: number;
          [key: string]: unknown;
        };
      };
    };
    /** Return the current Convex token details so you can discover the authorized team or project context. */
    "convex.get_token_details": {
      input: Record<string, never>;
      output: {
        /** Normalized details for the current Convex token. */
        token: {
          type: "teamToken" | "projectToken";
          name: string;
          createTime: number;
          teamId?: number;
          projectId?: number;
        };
      };
    };
    /** List custom domains configured for a Convex deployment. */
    "convex.list_custom_domains": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
      };
      output: {
        customDomains: Array<{
          domain: string;
          deploymentName: string;
          requestDestination: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List deploy keys for a Convex deployment. */
    "convex.list_deploy_keys": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
      };
      output: {
        deployKeys: Array<{
          name: string;
          creationTime: number;
          creator?: number;
          lastUsedTime?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List available deployment classes for a Convex team. */
    "convex.list_deployment_classes": {
      input: {
        /** @exclusiveMinimum 0 */
        team_id: number;
      };
      output: {
        items: Array<{
          type: string;
          available: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List available deployment regions for a Convex team. */
    "convex.list_deployment_regions": {
      input: {
        /** @exclusiveMinimum 0 */
        team_id: number;
      };
      output: {
        items: Array<{
          name: string;
          displayName: string;
          available: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List deployments for a Convex project. */
    "convex.list_deployments": {
      input: {
        /** @exclusiveMinimum 0 */
        project_id: number;
        includeLocal?: boolean;
        isDefault?: boolean;
        deploymentType?: "dev" | "prod" | "preview";
      };
      output: {
        deployments: Array<{
          kind?: string;
          name: string;
          deploymentType: string;
          projectId: number;
          createTime: number;
          deploymentUrl?: string;
          reference?: string | null;
          region?: string | null;
          isDefault?: boolean;
          previewIdentifier?: string | null;
          dashboardEditConfirmation?: boolean | null;
          lastDeployTime?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all Convex projects for a team. */
    "convex.list_projects": {
      input: {
        /** @exclusiveMinimum 0 */
        team_id: number;
      };
      output: {
        projects: Array<{
          id: number;
          name: string;
          slug: string;
          teamId: number;
          teamSlug: string;
          createTime: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Execute a Convex action through the deployment HTTP API. */
    "convex.run_action": {
      input: {
        /** @minLength 1 */
        path: string;
        /** @default {} */
        args: Record<string, unknown>;
        format?: "json";
        /** @format uri */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          status: "success" | "error";
          value?: unknown;
          logLines?: Array<string>;
          errorMessage?: string;
          errorData?: unknown;
        };
      };
    };
    /** Execute an arbitrary Convex function through `/api/run/{functionIdentifier}` using a slash-separated identifier. */
    "convex.run_function": {
      input: {
        /** @minLength 1 */
        functionIdentifier: string;
        /** @default {} */
        args: Record<string, unknown>;
        format?: "json";
        /** @format uri */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          status: "success" | "error";
          value?: unknown;
          logLines?: Array<string>;
          errorMessage?: string;
          errorData?: unknown;
        };
      };
    };
    /** Execute a Convex mutation through the deployment HTTP API. */
    "convex.run_mutation": {
      input: {
        /** @minLength 1 */
        path: string;
        /** @default {} */
        args: Record<string, unknown>;
        format?: "json";
        /** @format uri */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          status: "success" | "error";
          value?: unknown;
          logLines?: Array<string>;
          errorMessage?: string;
          errorData?: unknown;
        };
      };
    };
    /** Execute a Convex query through the deployment HTTP API. */
    "convex.run_query": {
      input: {
        /** @minLength 1 */
        path: string;
        /** @default {} */
        args: Record<string, unknown>;
        format?: "json";
        /** @format uri */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          status: "success" | "error";
          value?: unknown;
          logLines?: Array<string>;
          errorMessage?: string;
          errorData?: unknown;
        };
      };
    };
    /** Update mutable Convex deployment properties. */
    "convex.update_deployment": {
      input: {
        /** @minLength 1 */
        deployment_name: string;
        reference?: string | null;
        dashboard_edit_confirmation?: boolean | null;
        expiresAt?: number | null;
      };
      output: {
        success: boolean;
      };
    };
  }
}
