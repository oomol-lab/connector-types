import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a deploy key for a Convex deployment. */
    "convex.create_deploy_key": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The deployKey value. */
        deployKey: string;
      };
    };
    /** Create a new deployment in a Convex project. */
    "convex.create_deployment": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /** The type value. */
        type: "dev" | "prod" | "preview";
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        class?: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        region?: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        reference?: string;
        /** The isDefault value. */
        isDefault?: boolean;
        /** The expiresAt value. */
        expiresAt?: number | null;
      };
      output: {
        /** A Convex deployment. */
        deployment: {
          /** The kind value. */
          kind?: string;
          /** The name value. */
          name: string;
          /** The deploymentType value. */
          deploymentType: string;
          /** The projectId value. */
          projectId: number;
          /** The createTime value. */
          createTime: number;
          /** The deploymentUrl value. */
          deploymentUrl?: string;
          /** The reference value. */
          reference?: string | null;
          /** The region value. */
          region?: string | null;
          /** The isDefault value. */
          isDefault?: boolean;
          /** The previewIdentifier value. */
          previewIdentifier?: string | null;
          /** The dashboardEditConfirmation value. */
          dashboardEditConfirmation?: boolean | null;
          /** The lastDeployTime value. */
          lastDeployTime?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Convex project on a team, optionally provisioning an initial dev or prod deployment. */
    "convex.create_project": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        team_id: number;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        projectName: string;
        /** The deploymentType value. */
        deploymentType?: "dev" | "prod";
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deploymentClass?: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deploymentRegion?: string;
      };
      output: {
        /** The projectId value. */
        projectId: number;
        /** The deploymentName value. */
        deploymentName?: string | null;
        /** The deploymentUrl value. */
        deploymentUrl?: string | null;
      };
    };
    /** Remove a custom domain from a Convex deployment. */
    "convex.delete_custom_domain": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The success value. */
        success: boolean;
      };
    };
    /** Delete a deploy key for a Convex deployment. */
    "convex.delete_deploy_key": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The success value. */
        success: boolean;
      };
    };
    /** Delete a Convex deployment and all of its data. */
    "convex.delete_deployment": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
      };
      output: {
        /** The success value. */
        success: boolean;
      };
    };
    /** Delete a Convex project and all of its deployments. */
    "convex.delete_project": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        project_id: number;
      };
      output: {
        /** The success value. */
        success: boolean;
      };
    };
    /** Execute multiple Convex queries against a deployment and return results in the same order. */
    "convex.execute_query_batch": {
      input: {
        /**
         * The queries value.
         * @minItems 1
         */
        queries: Array<{
          /**
           * Schema for nonEmptyString.
           * @minLength 1
           */
          path: string;
          /**
           * Schema for optionalArgsSchema.
           * @default {}
           */
          args?: Record<string, unknown>;
          /** The format value. */
          format?: "json";
        }>;
        /**
         * The deployment_url value.
         * @format uri
         */
        deployment_url?: string;
      };
      output: {
        /** The results value. */
        results: Array<{
          /** The status value. */
          status: "success" | "error";
          /** The value value. */
          value?: unknown;
          /** The logLines value. */
          logLines?: Array<string>;
          /** The errorMessage value. */
          errorMessage?: string;
          /** The errorData value. */
          errorData?: unknown;
        }>;
      };
    };
    /** Get a cloud deployment by deployment name. */
    "convex.get_deployment": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
      };
      output: {
        /** A Convex deployment. */
        deployment: {
          /** The kind value. */
          kind?: string;
          /** The name value. */
          name: string;
          /** The deploymentType value. */
          deploymentType: string;
          /** The projectId value. */
          projectId: number;
          /** The createTime value. */
          createTime: number;
          /** The deploymentUrl value. */
          deploymentUrl?: string;
          /** The reference value. */
          reference?: string | null;
          /** The region value. */
          region?: string | null;
          /** The isDefault value. */
          isDefault?: boolean;
          /** The previewIdentifier value. */
          previewIdentifier?: string | null;
          /** The dashboardEditConfirmation value. */
          dashboardEditConfirmation?: boolean | null;
          /** The lastDeployTime value. */
          lastDeployTime?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Convex project by numeric project ID. */
    "convex.get_project_by_id": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        project_id: number;
      };
      output: {
        /** A Convex project. */
        project: {
          /** The id value. */
          id: number;
          /** The name value. */
          name: string;
          /** The slug value. */
          slug: string;
          /** The teamId value. */
          teamId: number;
          /** The teamSlug value. */
          teamSlug: string;
          /** The createTime value. */
          createTime: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Convex project by team identifier or slug plus project slug. */
    "convex.get_project_by_slug": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        team_id_or_slug: string;
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        project_slug: string;
      };
      output: {
        /** A Convex project. */
        project: {
          /** The id value. */
          id: number;
          /** The name value. */
          name: string;
          /** The slug value. */
          slug: string;
          /** The teamId value. */
          teamId: number;
          /** The teamSlug value. */
          teamSlug: string;
          /** The createTime value. */
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
          /** The type value. */
          type: "teamToken" | "projectToken";
          /** The name value. */
          name: string;
          /** The createTime value. */
          createTime: number;
          /** The teamId value. */
          teamId?: number;
          /** The projectId value. */
          projectId?: number;
        };
      };
    };
    /** List custom domains configured for a Convex deployment. */
    "convex.list_custom_domains": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
      };
      output: {
        /** The customDomains value. */
        customDomains: Array<{
          /** The domain value. */
          domain: string;
          /** The deploymentName value. */
          deploymentName: string;
          /** The requestDestination value. */
          requestDestination: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List deploy keys for a Convex deployment. */
    "convex.list_deploy_keys": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
      };
      output: {
        /** The deployKeys value. */
        deployKeys: Array<{
          /** The name value. */
          name: string;
          /** The creationTime value. */
          creationTime: number;
          /** The creator value. */
          creator?: number;
          /** The lastUsedTime value. */
          lastUsedTime?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List available deployment classes for a Convex team. */
    "convex.list_deployment_classes": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        team_id: number;
      };
      output: {
        /** The items value. */
        items: Array<{
          /** The type value. */
          type: string;
          /** The available value. */
          available: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List available deployment regions for a Convex team. */
    "convex.list_deployment_regions": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        team_id: number;
      };
      output: {
        /** The items value. */
        items: Array<{
          /** The name value. */
          name: string;
          /** The displayName value. */
          displayName: string;
          /** The available value. */
          available: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List deployments for a Convex project. */
    "convex.list_deployments": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /** The includeLocal value. */
        includeLocal?: boolean;
        /** The isDefault value. */
        isDefault?: boolean;
        /** The deploymentType value. */
        deploymentType?: "dev" | "prod" | "preview";
      };
      output: {
        /** The deployments value. */
        deployments: Array<{
          /** The kind value. */
          kind?: string;
          /** The name value. */
          name: string;
          /** The deploymentType value. */
          deploymentType: string;
          /** The projectId value. */
          projectId: number;
          /** The createTime value. */
          createTime: number;
          /** The deploymentUrl value. */
          deploymentUrl?: string;
          /** The reference value. */
          reference?: string | null;
          /** The region value. */
          region?: string | null;
          /** The isDefault value. */
          isDefault?: boolean;
          /** The previewIdentifier value. */
          previewIdentifier?: string | null;
          /** The dashboardEditConfirmation value. */
          dashboardEditConfirmation?: boolean | null;
          /** The lastDeployTime value. */
          lastDeployTime?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all Convex projects for a team. */
    "convex.list_projects": {
      input: {
        /**
         * Schema for positiveInteger.
         * @exclusiveMinimum 0
         */
        team_id: number;
      };
      output: {
        /** The projects value. */
        projects: Array<{
          /** The id value. */
          id: number;
          /** The name value. */
          name: string;
          /** The slug value. */
          slug: string;
          /** The teamId value. */
          teamId: number;
          /** The teamSlug value. */
          teamSlug: string;
          /** The createTime value. */
          createTime: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Execute a Convex action through the deployment HTTP API. */
    "convex.run_action": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        path: string;
        /**
         * Schema for optionalArgsSchema.
         * @default {}
         */
        args?: Record<string, unknown>;
        /** The format value. */
        format?: "json";
        /**
         * The deployment_url value.
         * @format uri
         */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          /** The status value. */
          status: "success" | "error";
          /** The value value. */
          value?: unknown;
          /** The logLines value. */
          logLines?: Array<string>;
          /** The errorMessage value. */
          errorMessage?: string;
          /** The errorData value. */
          errorData?: unknown;
        };
      };
    };
    /** Execute an arbitrary Convex function through `/api/run/{functionIdentifier}` using a slash-separated identifier. */
    "convex.run_function": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        functionIdentifier: string;
        /**
         * Schema for optionalArgsSchema.
         * @default {}
         */
        args?: Record<string, unknown>;
        /** The format value. */
        format?: "json";
        /**
         * The deployment_url value.
         * @format uri
         */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          /** The status value. */
          status: "success" | "error";
          /** The value value. */
          value?: unknown;
          /** The logLines value. */
          logLines?: Array<string>;
          /** The errorMessage value. */
          errorMessage?: string;
          /** The errorData value. */
          errorData?: unknown;
        };
      };
    };
    /** Execute a Convex mutation through the deployment HTTP API. */
    "convex.run_mutation": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        path: string;
        /**
         * Schema for optionalArgsSchema.
         * @default {}
         */
        args?: Record<string, unknown>;
        /** The format value. */
        format?: "json";
        /**
         * The deployment_url value.
         * @format uri
         */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          /** The status value. */
          status: "success" | "error";
          /** The value value. */
          value?: unknown;
          /** The logLines value. */
          logLines?: Array<string>;
          /** The errorMessage value. */
          errorMessage?: string;
          /** The errorData value. */
          errorData?: unknown;
        };
      };
    };
    /** Execute a Convex query through the deployment HTTP API. */
    "convex.run_query": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        path: string;
        /**
         * Schema for optionalArgsSchema.
         * @default {}
         */
        args?: Record<string, unknown>;
        /** The format value. */
        format?: "json";
        /**
         * The deployment_url value.
         * @format uri
         */
        deployment_url?: string;
      };
      output: {
        /** A Convex HTTP API function execution result. */
        result: {
          /** The status value. */
          status: "success" | "error";
          /** The value value. */
          value?: unknown;
          /** The logLines value. */
          logLines?: Array<string>;
          /** The errorMessage value. */
          errorMessage?: string;
          /** The errorData value. */
          errorData?: unknown;
        };
      };
    };
    /** Update mutable Convex deployment properties. */
    "convex.update_deployment": {
      input: {
        /**
         * Schema for nonEmptyString.
         * @minLength 1
         */
        deployment_name: string;
        /**
         * The reference value.
         * @minLength 1
         */
        reference?: string | null;
        /** The dashboard_edit_confirmation value. */
        dashboard_edit_confirmation?: boolean | null;
        /** The expiresAt value. */
        expiresAt?: number | null;
      };
      output: {
        /** The success value. */
        success: boolean;
      };
    };
  }
}
