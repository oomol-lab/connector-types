import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current Seqera user profile and default workspace information. */
    "seqera.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Seqera user profile. */
        user: {
          /**
           * The Seqera numeric user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The email address of the current Seqera user. */
          email?: string;
          /** The first name of the current Seqera user. */
          firstName?: string;
          /** The last name of the current Seqera user. */
          lastName?: string;
          /** The organization name associated with the current Seqera user. */
          organization?: string;
          /** The Seqera username of the current user. */
          userName?: string;
          /** The avatar URL of the current Seqera user. */
          avatar?: string;
          /** The timestamp when the Seqera user was created. */
          dateCreated?: string;
          /** The timestamp of the most recent access by the Seqera user. */
          lastAccess?: string;
          [key: string]: unknown;
        };
        /**
         * The default workspace ID configured for the current Seqera user.
         * @exclusiveMinimum 0
         */
        defaultWorkspaceId?: number;
        /** Whether the current Seqera user still needs to grant product consent. */
        needConsent?: boolean;
      };
    };
    /** Retrieve one Seqera pipeline by pipeline ID. */
    "seqera.get_pipeline": {
      input: {
        /**
         * The Seqera numeric pipeline ID.
         * @exclusiveMinimum 0
         */
        pipelineId: number;
        /**
         * The workspace ID used to resolve the pipeline in a workspace context.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /**
         * The source workspace numeric ID used when resolving shared resources.
         * @exclusiveMinimum 0
         */
        sourceWorkspaceId?: number;
        /** Additional pipeline attributes to include in the response. */
        attributes?: Array<"labels" | "optimized" | "computeEnv">;
      };
      output: {
        /** The requested Seqera pipeline. */
        pipeline: {
          /**
           * The Seqera numeric pipeline ID.
           * @exclusiveMinimum 0
           */
          pipelineId?: number;
          /** The pipeline name. */
          name?: string;
          /** The pipeline description. */
          description?: string;
          /** The Git repository URL associated with the pipeline. */
          repository?: string;
          /** The pipeline visibility value returned by Seqera. */
          visibility?: string;
          /**
           * The workspace ID that owns the pipeline.
           * @exclusiveMinimum 0
           */
          workspaceId?: number;
          /** The workspace name that owns the pipeline. */
          workspaceName?: string;
          /**
           * The organization ID that owns the pipeline.
           * @exclusiveMinimum 0
           */
          orgId?: number;
          /** The organization name that owns the pipeline. */
          orgName?: string;
          /**
           * The user ID of the pipeline owner.
           * @exclusiveMinimum 0
           */
          userId?: number;
          /** The username of the pipeline owner. */
          userName?: string;
          /** The optimization identifier, when present. */
          optimizationId?: string;
          /** The optimization status reported by Seqera. */
          optimizationStatus?: string;
          /** The optimization targets reported by Seqera. */
          optimizationTargets?: string;
          /** The pipeline labels returned when the labels attribute is requested. */
          labels?: Array<Record<string, unknown>>;
          /** The compute environment summary returned when the computeEnv attribute is requested. */
          computeEnv?: Record<string, unknown>;
          /** The current pipeline version summary. */
          version?: {
            /** The Seqera pipeline version ID. */
            id?: string;
            /** The pipeline version name. */
            name?: string;
            /** The content hash of the pipeline version. */
            hash?: string;
            /** Whether this version is the default pipeline version. */
            isDefault?: boolean;
            /** Whether this version is still a draft version. */
            isDraftVersion?: boolean;
            /** The timestamp when the pipeline version was created. */
            dateCreated?: string;
            /** The timestamp when the pipeline version was last updated. */
            lastUpdated?: string;
            [key: string]: unknown;
          };
          /** The icon URL associated with the pipeline, when present. */
          icon?: string;
          /** Whether the pipeline has been marked as deleted. */
          deleted?: boolean;
          /** The timestamp when the pipeline was last updated. */
          lastUpdated?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Seqera workflow run by workflow ID. */
    "seqera.get_workflow": {
      input: {
        /**
         * The Seqera workflow ID.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The workspace ID used to resolve the workflow in a workspace context.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /** Additional workflow attributes to include in the response. */
        attributes?: Array<"labels" | "optimized" | "messages" | "minimal" | "pipelineInfo">;
      };
      output: {
        /** The requested Seqera workflow. */
        workflow: {
          /**
           * The Seqera workflow ID.
           * @minLength 1
           */
          id?: string;
          /** The workflow run name. */
          runName?: string;
          /** The workflow status reported by Seqera. */
          status?: "SUBMITTED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | "UNKNOWN";
          /** The Git repository URL used for the workflow run. */
          repository?: string;
          /** The Git revision used for the workflow run. */
          revision?: string;
          /** The launch identifier associated with the workflow. */
          launchId?: string;
          /** The Nextflow project name associated with the workflow. */
          projectName?: string;
          /** The Nextflow profile string used for the workflow. */
          profile?: string;
          /** The Nextflow session ID. */
          sessionId?: string;
          /** The workflow start timestamp. */
          start?: string;
          /** The workflow submission timestamp. */
          submit?: string;
          /** The workflow completion timestamp. */
          complete?: string;
          /** The workflow duration in milliseconds. */
          duration?: number;
          /** Whether the workflow completed successfully. */
          success?: boolean;
          /** The workflow error message, when present. */
          errorMessage?: string;
          /** The Seqera username that launched the workflow. */
          userName?: string;
          /** The workflow work directory. */
          workDir?: string;
          /** The workflow launch directory. */
          launchDir?: string;
          /** Whether the workflow has been deleted. */
          deleted?: boolean;
          [key: string]: unknown;
        };
        /** The workflow progress summary returned by Seqera, when available. */
        progress?: {
          /** The number of pending tasks. */
          pending?: number;
          /** The number of submitted tasks. */
          submitted?: number;
          /** The number of running tasks. */
          running?: number;
          /** The number of succeeded tasks. */
          succeeded?: number;
          /** The number of failed tasks. */
          failed?: number;
          /** The number of aborted tasks. */
          aborted?: number;
          /** The number of cached tasks. */
          cached?: number;
          [key: string]: unknown;
        };
        /** The pipeline information returned by Seqera, when available. */
        pipelineInfo?: {
          /**
           * The pipeline ID referenced by the workflow.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The workspace ID that owns the referenced pipeline.
           * @exclusiveMinimum 0
           */
          workspaceId?: number;
          /** The minimal pipeline version information referenced by the workflow. */
          version?: {
            /** The Seqera pipeline version ID. */
            id?: string;
            /** The pipeline version name. */
            name?: string;
            /** The content hash of the pipeline version. */
            hash?: string;
            /** Whether this version is the default pipeline version. */
            isDefault?: boolean;
            /** Whether this version is still a draft version. */
            isDraftVersion?: boolean;
            /** The timestamp when the pipeline version was created. */
            dateCreated?: string;
            /** The timestamp when the pipeline version was last updated. */
            lastUpdated?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The workflow labels returned by Seqera, when available. */
        labels?: Array<Record<string, unknown>>;
        /** Informational messages returned by Seqera for the workflow. */
        messages?: Array<string>;
        /** Whether Seqera marked the workflow as optimized. */
        optimized?: boolean;
        /**
         * The organization ID associated with the workflow.
         * @exclusiveMinimum 0
         */
        orgId?: number;
        /** The organization name associated with the workflow. */
        orgName?: string;
        /**
         * The workspace ID associated with the workflow.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /** The workspace name associated with the workflow. */
        workspaceName?: string;
        /** The job information object returned by Seqera. */
        jobInfo?: Record<string, unknown>;
        /** The compute platform summary returned by Seqera. */
        platform?: Record<string, unknown>;
      };
    };
    /** Retrieve one Seqera workspace by organization ID and workspace ID. */
    "seqera.get_workspace": {
      input: {
        /**
         * The Seqera numeric organization ID.
         * @exclusiveMinimum 0
         */
        orgId: number;
        /**
         * The Seqera numeric workspace ID.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
      };
      output: {
        /** The requested Seqera workspace. */
        workspace: {
          /**
           * The Seqera numeric workspace ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The workspace name. */
          name?: string;
          /** The fully qualified workspace name. */
          fullName?: string;
          /** The workspace description. */
          description?: string;
          /** The workspace visibility value returned by Seqera. */
          visibility?: string;
          /** The timestamp when the workspace was created. */
          dateCreated?: string;
          /** The timestamp when the workspace was last updated. */
          lastUpdated?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Launch a Seqera workflow from a pipeline repository or registered pipeline. */
    "seqera.launch_workflow": {
      input: {
        /**
         * The workspace ID used to launch the workflow in a workspace context.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /**
         * The source workspace numeric ID used when resolving shared resources.
         * @exclusiveMinimum 0
         */
        sourceWorkspaceId?: number;
        /**
         * The pipeline repository name or URL to launch.
         * @minLength 1
         */
        pipeline: string;
        /**
         * The compute environment ID used for the launch.
         * @minLength 1
         */
        computeEnvId?: string;
        /**
         * The work directory configured for the workflow launch.
         * @minLength 1
         */
        workDir?: string;
        /**
         * The Git revision used for the workflow launch.
         * @minLength 1
         */
        revision?: string;
        /**
         * The run name assigned to the workflow launch.
         * @minLength 1
         */
        runName?: string;
        /** The Nextflow config profiles applied to the launch. */
        configProfiles?: Array<string>;
        /**
         * The workflow parameters payload encoded as text.
         * @minLength 1
         */
        paramsText?: string;
        /**
         * Additional Nextflow config text applied to the launch.
         * @minLength 1
         */
        configText?: string;
        /**
         * The alternative main script path used for the launch.
         * @minLength 1
         */
        mainScript?: string;
        /**
         * The Nextflow entry workflow name used for the launch.
         * @minLength 1
         */
        entryName?: string;
        /** Whether Seqera should pull the latest pipeline revision before launching. */
        pullLatest?: boolean;
        /** Whether Seqera should resume a compatible previous workflow execution. */
        resume?: boolean;
        /** Whether the workflow should run in Nextflow stub mode. */
        stubRun?: boolean;
        /** The user secret names attached to the launch. */
        userSecrets?: Array<string>;
        /** The workspace secret names attached to the launch. */
        workspaceSecrets?: Array<string>;
      };
      output: {
        /**
         * The workflow ID created by the Seqera launch request.
         * @minLength 1
         */
        workflowId: string;
      };
    };
    /** List Seqera pipelines in the current user context or a specific workspace. */
    "seqera.list_pipelines": {
      input: {
        /**
         * The workspace ID used to list pipelines within a workspace context.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /**
         * The maximum number of records to return.
         * @minimum 0
         */
        max?: number;
        /**
         * The zero-based offset of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /** The Seqera pipeline sort field. */
        sortBy?: "CREATED" | "MODIFIED" | "NAME";
        /** The Seqera pipeline sort direction. */
        sortDir?: "ASCENDING" | "DESCENDING";
        /**
         * A free-text search term used to filter pipelines.
         * @minLength 1
         */
        search?: string;
        /**
         * The visibility filter value used to filter pipelines.
         * @minLength 1
         */
        visibility?: string;
        /** Additional pipeline attributes to include in the response. */
        attributes?: Array<"labels" | "optimized" | "computeEnv">;
      };
      output: {
        /** The pipelines returned by Seqera. */
        pipelines: Array<{
          /**
           * The Seqera numeric pipeline ID.
           * @exclusiveMinimum 0
           */
          pipelineId?: number;
          /** The pipeline name. */
          name?: string;
          /** The pipeline description. */
          description?: string;
          /** The Git repository URL associated with the pipeline. */
          repository?: string;
          /** The pipeline visibility value returned by Seqera. */
          visibility?: string;
          /**
           * The workspace ID that owns the pipeline.
           * @exclusiveMinimum 0
           */
          workspaceId?: number;
          /** The workspace name that owns the pipeline. */
          workspaceName?: string;
          /**
           * The organization ID that owns the pipeline.
           * @exclusiveMinimum 0
           */
          orgId?: number;
          /** The organization name that owns the pipeline. */
          orgName?: string;
          /**
           * The user ID of the pipeline owner.
           * @exclusiveMinimum 0
           */
          userId?: number;
          /** The username of the pipeline owner. */
          userName?: string;
          /** The optimization identifier, when present. */
          optimizationId?: string;
          /** The optimization status reported by Seqera. */
          optimizationStatus?: string;
          /** The optimization targets reported by Seqera. */
          optimizationTargets?: string;
          /** The pipeline labels returned when the labels attribute is requested. */
          labels?: Array<Record<string, unknown>>;
          /** The compute environment summary returned when the computeEnv attribute is requested. */
          computeEnv?: Record<string, unknown>;
          /** The current pipeline version summary. */
          version?: {
            /** The Seqera pipeline version ID. */
            id?: string;
            /** The pipeline version name. */
            name?: string;
            /** The content hash of the pipeline version. */
            hash?: string;
            /** Whether this version is the default pipeline version. */
            isDefault?: boolean;
            /** Whether this version is still a draft version. */
            isDraftVersion?: boolean;
            /** The timestamp when the pipeline version was created. */
            dateCreated?: string;
            /** The timestamp when the pipeline version was last updated. */
            lastUpdated?: string;
            [key: string]: unknown;
          };
          /** The icon URL associated with the pipeline, when present. */
          icon?: string;
          /** Whether the pipeline has been marked as deleted. */
          deleted?: boolean;
          /** The timestamp when the pipeline was last updated. */
          lastUpdated?: string;
          [key: string]: unknown;
        }>;
        /** The total number of pipelines available for the current query. */
        totalSize?: number;
      };
    };
    /** List the workspaces and organizations visible to the current Seqera user. */
    "seqera.list_user_workspaces": {
      input: {
        /**
         * The numeric user ID whose workspace memberships should be listed.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** The workspaces and organizations visible to the user. */
        orgsAndWorkspaces: Array<{
          /**
           * The Seqera numeric organization ID.
           * @exclusiveMinimum 0
           */
          orgId: number;
          /** The name of the organization that owns the workspace. */
          orgName?: string;
          /** The Seqera organization type. */
          orgType?: string;
          /** The organization logo URL, when available. */
          orgLogoUrl?: string;
          /**
           * The Seqera numeric workspace ID.
           * @exclusiveMinimum 0
           */
          workspaceId: number;
          /** The workspace name. */
          workspaceName?: string;
          /** The fully qualified workspace name in Seqera. */
          workspaceFullName?: string;
          /** The workspace visibility value returned by Seqera. */
          visibility?: string;
          /** The roles granted to the current user in the workspace. */
          roles?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Seqera workflow runs in the current user context or a specific workspace. */
    "seqera.list_workflows": {
      input: {
        /**
         * The workspace ID used to list workflows within a workspace context.
         * @exclusiveMinimum 0
         */
        workspaceId?: number;
        /**
         * The maximum number of records to return.
         * @minimum 0
         */
        max?: number;
        /**
         * The zero-based offset of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * A free-text search term used to filter workflows.
         * @minLength 1
         */
        search?: string;
        /** Whether Seqera should include the total workflow count in the response. */
        includeTotalSize?: boolean;
        /** Additional workflow attributes to include in the response. */
        attributes?: Array<"labels" | "optimized" | "messages" | "minimal" | "pipelineInfo">;
      };
      output: {
        /** The workflows returned by Seqera. */
        workflows: Array<{
          /** The Seqera workflow summary. */
          workflow: {
            /**
             * The Seqera workflow ID.
             * @minLength 1
             */
            id?: string;
            /** The workflow run name. */
            runName?: string;
            /** The workflow status reported by Seqera. */
            status?: "SUBMITTED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | "UNKNOWN";
            /** The Git repository URL used for the workflow run. */
            repository?: string;
            /** The Git revision used for the workflow run. */
            revision?: string;
            /** The launch identifier associated with the workflow. */
            launchId?: string;
            /** The Nextflow project name associated with the workflow. */
            projectName?: string;
            /** The Nextflow profile string used for the workflow. */
            profile?: string;
            /** The Nextflow session ID. */
            sessionId?: string;
            /** The workflow start timestamp. */
            start?: string;
            /** The workflow submission timestamp. */
            submit?: string;
            /** The workflow completion timestamp. */
            complete?: string;
            /** The workflow duration in milliseconds. */
            duration?: number;
            /** Whether the workflow completed successfully. */
            success?: boolean;
            /** The workflow error message, when present. */
            errorMessage?: string;
            /** The Seqera username that launched the workflow. */
            userName?: string;
            /** The workflow work directory. */
            workDir?: string;
            /** The workflow launch directory. */
            launchDir?: string;
            /** Whether the workflow has been deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The workflow progress summary returned by Seqera, when requested. */
          progress?: {
            /** The number of pending tasks. */
            pending?: number;
            /** The number of submitted tasks. */
            submitted?: number;
            /** The number of running tasks. */
            running?: number;
            /** The number of succeeded tasks. */
            succeeded?: number;
            /** The number of failed tasks. */
            failed?: number;
            /** The number of aborted tasks. */
            aborted?: number;
            /** The number of cached tasks. */
            cached?: number;
            [key: string]: unknown;
          };
          /** The pipeline information returned by Seqera, when requested. */
          pipelineInfo?: {
            /**
             * The pipeline ID referenced by the workflow.
             * @exclusiveMinimum 0
             */
            id?: number;
            /**
             * The workspace ID that owns the referenced pipeline.
             * @exclusiveMinimum 0
             */
            workspaceId?: number;
            /** The minimal pipeline version information referenced by the workflow. */
            version?: {
              /** The Seqera pipeline version ID. */
              id?: string;
              /** The pipeline version name. */
              name?: string;
              /** The content hash of the pipeline version. */
              hash?: string;
              /** Whether this version is the default pipeline version. */
              isDefault?: boolean;
              /** Whether this version is still a draft version. */
              isDraftVersion?: boolean;
              /** The timestamp when the pipeline version was created. */
              dateCreated?: string;
              /** The timestamp when the pipeline version was last updated. */
              lastUpdated?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The workflow labels returned when the labels attribute is requested. */
          labels?: Array<Record<string, unknown>>;
          /** Whether Seqera marked the workflow as optimized. */
          optimized?: boolean;
          /** Whether the current user starred the workflow. */
          starred?: boolean;
          /**
           * The organization ID associated with the workflow.
           * @exclusiveMinimum 0
           */
          orgId?: number;
          /** The organization name associated with the workflow. */
          orgName?: string;
          /**
           * The workspace ID associated with the workflow.
           * @exclusiveMinimum 0
           */
          workspaceId?: number;
          /** The workspace name associated with the workflow. */
          workspaceName?: string;
        }>;
        /** The total number of workflows available for the current query. */
        totalSize?: number;
        /** Whether more workflows remain beyond the current response window. */
        hasMore?: boolean;
      };
    };
  }
}
