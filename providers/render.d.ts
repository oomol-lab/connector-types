import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the currently authenticated Render user profile. */
    "render.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * Email address of the authenticated Render user.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /** Display name of the authenticated Render user. */
        name: string;
      };
    };
    /** Get Render service details by service ID. */
    "render.get_service": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** Unique identifier of the service. */
        id: string;
        /** Name of the service. */
        name: string;
        /** Workspace ID that owns the service. */
        ownerId: string;
        /** Type of service on Render. */
        type: "static_site" | "web_service" | "private_service" | "background_worker" | "cron_job";
        /** Timestamp when the service was created. */
        createdAt: string;
        /** Dashboard URL for the service. */
        dashboardUrl: string;
        /** Timestamp when the service was last updated. */
        updatedAt: string;
        /** Suspension state reported by Render. */
        suspended: "suspended" | "not_suspended";
        /** Suspension reasons reported for the service. */
        suspenders: Array<"admin" | "billing" | "user" | "parent_service" | "stuck_crashlooping" | "hipaa_enablement" | "unknown">;
        /** Whether Render auto-deploys changes for the service. */
        autoDeploy: "yes" | "no";
        /** Notification setting when a deploy fails. */
        notifyOnFail: "default" | "notify" | "ignore";
        /** URL-friendly slug of the service. */
        slug: string;
        /** Service-specific configuration details. */
        serviceDetails: Record<string, unknown>;
        /** Repository root directory configured for the service. */
        rootDir: string;
        /** Git branch used by the service, when present. */
        branch?: string;
        /** Build filter configuration for the service, when present. */
        buildFilter?: Record<string, unknown>;
        /** Environment ID attached to the service, when present. */
        environmentId?: string;
        /** Docker image path used by the service, when present. */
        imagePath?: string;
        /** Registry credential summary used by the service, when present. */
        registryCredential?: Record<string, unknown>;
        /** Source repository URL for the service, when present. */
        repo?: string;
        [key: string]: unknown;
      };
    };
    /** List recent Render deploys for a service. */
    "render.list_deploys": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
        /**
         * Only return deploys with these statuses.
         * @minItems 1
         */
        status?: Array<"created" | "queued" | "build_in_progress" | "update_in_progress" | "live" | "deactivated" | "build_failed" | "update_failed" | "canceled" | "pre_deploy_in_progress" | "pre_deploy_failed">;
        /**
         * Pagination cursor returned by a previous Render response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Deploys returned by Render. */
        deploys: Array<{
          /** Unique identifier of the deploy. */
          id: string;
          /** Commit information attached to the deploy, when present. */
          commit?: Record<string, unknown>;
          /** Image information attached to the deploy, when present. */
          image?: Record<string, unknown>;
          /** Deploy status reported by Render. */
          status: "created" | "queued" | "build_in_progress" | "update_in_progress" | "live" | "deactivated" | "build_failed" | "update_failed" | "canceled" | "pre_deploy_in_progress" | "pre_deploy_failed";
          /** Event that triggered the deploy. */
          trigger: string;
          /** Timestamp when the deploy started, when present. */
          startedAt?: string;
          /** Timestamp when the deploy finished, when present. */
          finishedAt?: string;
          /** Timestamp when the deploy was created. */
          createdAt: string;
          /** Timestamp when the deploy was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page of deploys, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List Render services with optional workspace, type, and suspension filters. */
    "render.list_services": {
      input: {
        /**
         * Only return resources with one of these exact names.
         * @minItems 1
         */
        name?: Array<string>;
        /**
         * Only return services with these types.
         * @minItems 1
         */
        type?: Array<"static_site" | "web_service" | "private_service" | "background_worker" | "cron_job">;
        /**
         * Only return resources for one of these workspace IDs.
         * @minItems 1
         */
        ownerId?: Array<string>;
        /**
         * Only return services in one of these suspension states.
         * @minItems 1
         */
        suspended?: Array<"suspended" | "not_suspended">;
        /** Whether preview services should be included in the response. */
        includePreviews?: boolean;
        /**
         * Pagination cursor returned by a previous Render response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Services returned by Render. */
        services: Array<{
          /** Unique identifier of the service. */
          id: string;
          /** Name of the service. */
          name: string;
          /** Workspace ID that owns the service. */
          ownerId: string;
          /** Type of service on Render. */
          type: "static_site" | "web_service" | "private_service" | "background_worker" | "cron_job";
          /** Timestamp when the service was created. */
          createdAt: string;
          /** Dashboard URL for the service. */
          dashboardUrl: string;
          /** Timestamp when the service was last updated. */
          updatedAt: string;
          /** Suspension state reported by Render. */
          suspended: "suspended" | "not_suspended";
          /** Suspension reasons reported for the service. */
          suspenders: Array<"admin" | "billing" | "user" | "parent_service" | "stuck_crashlooping" | "hipaa_enablement" | "unknown">;
          /** Whether Render auto-deploys changes for the service. */
          autoDeploy: "yes" | "no";
          /** Notification setting when a deploy fails. */
          notifyOnFail: "default" | "notify" | "ignore";
          /** URL-friendly slug of the service. */
          slug: string;
          /** Service-specific configuration details. */
          serviceDetails: Record<string, unknown>;
          /** Repository root directory configured for the service. */
          rootDir: string;
          /** Git branch used by the service, when present. */
          branch?: string;
          /** Build filter configuration for the service, when present. */
          buildFilter?: Record<string, unknown>;
          /** Environment ID attached to the service, when present. */
          environmentId?: string;
          /** Docker image path used by the service, when present. */
          imagePath?: string;
          /** Registry credential summary used by the service, when present. */
          registryCredential?: Record<string, unknown>;
          /** Source repository URL for the service, when present. */
          repo?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page of services, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List Render workspaces available to the authenticated API key. */
    "render.list_workspaces": {
      input: {
        /**
         * Only return resources with one of these exact names.
         * @minItems 1
         */
        name?: Array<string>;
        /**
         * Only return workspaces owned by one of these email addresses.
         * @minItems 1
         */
        email?: Array<string>;
        /**
         * Pagination cursor returned by a previous Render response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Workspaces returned by Render. */
        workspaces: Array<{
          /** Unique identifier of the workspace. */
          id: string;
          /** Workspace display name. */
          name: string;
          /**
           * Primary email address of the workspace.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
          /** Workspace type. */
          type: "user" | "team";
          /** IP allow list entries configured for the workspace, when present. */
          ipAllowList?: Array<Record<string, unknown>>;
          /** Whether two-factor authentication is enabled for the workspace owner. */
          twoFactorAuthEnabled?: boolean;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page of workspaces, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** Restart a Render service. */
    "render.restart_service": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** Whether the lifecycle operation request was accepted. */
        ok: boolean;
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
        /** Lifecycle action requested. */
        action: "restart" | "suspend" | "resume";
      };
    };
    /** Resume a suspended Render service. */
    "render.resume_service": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** Whether the lifecycle operation request was accepted. */
        ok: boolean;
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
        /** Lifecycle action requested. */
        action: "restart" | "suspend" | "resume";
      };
    };
    /** Trigger a rollback to a previous deploy for a Render service. */
    "render.rollback_deploy": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
        /**
         * The unique identifier of the Render deploy.
         * @minLength 1
         */
        deployId: string;
      };
      output: {
        /** Unique identifier of the deploy. */
        id: string;
        /** Commit information attached to the deploy, when present. */
        commit?: Record<string, unknown>;
        /** Image information attached to the deploy, when present. */
        image?: Record<string, unknown>;
        /** Deploy status reported by Render. */
        status: "created" | "queued" | "build_in_progress" | "update_in_progress" | "live" | "deactivated" | "build_failed" | "update_failed" | "canceled" | "pre_deploy_in_progress" | "pre_deploy_failed";
        /** Event that triggered the deploy. */
        trigger: string;
        /** Timestamp when the deploy started, when present. */
        startedAt?: string;
        /** Timestamp when the deploy finished, when present. */
        finishedAt?: string;
        /** Timestamp when the deploy was created. */
        createdAt: string;
        /** Timestamp when the deploy was last updated. */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Suspend a Render service. */
    "render.suspend_service": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** Whether the lifecycle operation request was accepted. */
        ok: boolean;
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
        /** Lifecycle action requested. */
        action: "restart" | "suspend" | "resume";
      };
    };
    /** Trigger a new deploy for a Render service. */
    "render.trigger_deploy": {
      input: {
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
        /** Whether Render should clear the build cache before deploying. */
        clearCache?: boolean;
        /**
         * Specific Git commit SHA to deploy instead of the latest commit.
         * @minLength 1
         */
        commitId?: string;
        /**
         * Image URL to deploy for an image-backed service.
         * @minLength 1
         */
        imageUrl?: string;
        /** Deployment behavior to use when triggering a deploy. */
        deployMode?: "deploy_only" | "build_and_deploy";
      };
      output: {
        /** Unique identifier of the deploy. */
        id: string;
        /** Commit information attached to the deploy, when present. */
        commit?: Record<string, unknown>;
        /** Image information attached to the deploy, when present. */
        image?: Record<string, unknown>;
        /** Deploy status reported by Render. */
        status: "created" | "queued" | "build_in_progress" | "update_in_progress" | "live" | "deactivated" | "build_failed" | "update_failed" | "canceled" | "pre_deploy_in_progress" | "pre_deploy_failed";
        /** Event that triggered the deploy. */
        trigger: string;
        /** Timestamp when the deploy started, when present. */
        startedAt?: string;
        /** Timestamp when the deploy finished, when present. */
        finishedAt?: string;
        /** Timestamp when the deploy was created. */
        createdAt: string;
        /** Timestamp when the deploy was last updated. */
        updatedAt: string;
        [key: string]: unknown;
      } | {
        /** Whether the deploy request was accepted and queued. */
        queued: boolean;
        /**
         * The unique identifier of the Render service.
         * @minLength 1
         */
        serviceId: string;
      };
    };
  }
}
