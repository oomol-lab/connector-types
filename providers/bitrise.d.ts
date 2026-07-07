import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Bitrise build by app slug and build slug. */
    "bitrise.get_build": {
      input: {
        /**
         * Bitrise app slug.
         * @minLength 1
         */
        appSlug: string;
        /**
         * Bitrise build slug.
         * @minLength 1
         */
        buildSlug: string;
      };
      output: {
        /** Bitrise build returned by the API. */
        build: {
          /** Bitrise build slug. */
          slug?: string;
          /** Bitrise build number. */
          build_number?: number;
          /** Git branch for the build. */
          branch?: string;
          /** Git tag for the build. */
          tag?: string;
          /** Git commit hash for the build. */
          commit_hash?: string;
          /** Git commit message for the build. */
          commit_message?: string;
          /** Numeric Bitrise build status. */
          status?: number;
          /** Human-readable Bitrise build status. */
          status_text?: string;
          /** Workflow triggered for the build. */
          triggered_workflow?: string;
          /** Timestamp when Bitrise triggered the build. */
          triggered_at?: string;
          /** Timestamp when Bitrise finished the build. */
          finished_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Bitrise apps available to the authenticated account. */
    "bitrise.list_apps": {
      input: {
        /** Application sort order. */
        sortBy?: "last_build_at" | "created_at";
        /**
         * Pagination cursor returned by Bitrise in paging.next.
         * @minLength 1
         */
        next?: string;
        /**
         * Maximum number of items to return. Bitrise allows up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Filter apps by title.
         * @minLength 1
         */
        title?: string;
        /**
         * Filter apps by project type, such as ios or android.
         * @minLength 1
         */
        projectType?: string;
      };
      output: {
        /** Apps returned by Bitrise. */
        apps: Array<{
          /** Bitrise app slug. */
          slug?: string;
          /** Bitrise app title. */
          title?: string;
          /** Bitrise project type. */
          project_type?: string;
          /** Repository owner name. */
          repo_owner?: string;
          /** Repository slug. */
          repo_slug?: string;
          /** Repository URL. */
          repo_url?: string;
          /** Git provider connected to the app. */
          provider?: string;
          /** Whether the app is disabled. */
          is_disabled?: boolean;
          /** Whether the app is public. */
          is_public?: boolean;
          [key: string]: unknown;
        }>;
        /** Bitrise pagination metadata. */
        paging?: {
          /** Cursor to pass as the next input parameter when another page exists. */
          next?: string;
          /** Maximum number of items in this page. */
          page_item_limit?: number;
          /** Total number of items across all pages. */
          total_item_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List builds for a Bitrise app with optional filters and pagination. */
    "bitrise.list_builds": {
      input: {
        /**
         * Bitrise app slug.
         * @minLength 1
         */
        appSlug: string;
        /** Build sort order. */
        sortBy?: "running_first" | "created_at";
        /**
         * Filter builds by branch.
         * @minLength 1
         */
        branch?: string;
        /**
         * Filter builds by workflow name.
         * @minLength 1
         */
        workflow?: string;
        /**
         * Filter builds by commit message.
         * @minLength 1
         */
        commitMessage?: string;
        /** Build trigger event type filter. */
        triggerEventType?: "push" | "pull-request" | "tag";
        /**
         * Filter builds by pull request ID.
         * @minimum 1
         */
        pullRequestId?: number;
        /**
         * Filter builds by build number.
         * @minimum 1
         */
        buildNumber?: number;
        /** Return builds triggered after this Unix timestamp. */
        after?: number;
        /** Return builds triggered before this Unix timestamp. */
        before?: number;
        /**
         * Filter builds by status: 0 not finished, 1 successful, 2 failed, 3 aborted with failure, 4 aborted with success.
         * @minimum 0
         * @maximum 4
         */
        status?: number;
        /** Whether to return pipeline builds. */
        isPipelineBuild?: boolean;
        /**
         * Pagination cursor returned by Bitrise in paging.next.
         * @minLength 1
         */
        next?: string;
        /**
         * Maximum number of items to return. Bitrise allows up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Builds returned by Bitrise. */
        builds: Array<{
          /** Bitrise build slug. */
          slug?: string;
          /** Bitrise build number. */
          build_number?: number;
          /** Git branch for the build. */
          branch?: string;
          /** Git tag for the build. */
          tag?: string;
          /** Git commit hash for the build. */
          commit_hash?: string;
          /** Git commit message for the build. */
          commit_message?: string;
          /** Numeric Bitrise build status. */
          status?: number;
          /** Human-readable Bitrise build status. */
          status_text?: string;
          /** Workflow triggered for the build. */
          triggered_workflow?: string;
          /** Timestamp when Bitrise triggered the build. */
          triggered_at?: string;
          /** Timestamp when Bitrise finished the build. */
          finished_at?: string;
          [key: string]: unknown;
        }>;
        /** Bitrise pagination metadata. */
        paging?: {
          /** Cursor to pass as the next input parameter when another page exists. */
          next?: string;
          /** Maximum number of items in this page. */
          page_item_limit?: number;
          /** Total number of items across all pages. */
          total_item_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Trigger a Bitrise build or pipeline for an app. */
    "bitrise.trigger_build": {
      input: {
        /**
         * Bitrise app slug.
         * @minLength 1
         */
        appSlug: string;
        /**
         * Git branch to build.
         * @minLength 1
         */
        branch?: string;
        /**
         * Bitrise workflow ID to trigger.
         * @minLength 1
         */
        workflowId?: string;
        /**
         * Bitrise pipeline ID to trigger.
         * @minLength 1
         */
        pipelineId?: string;
        /**
         * Git commit hash to build.
         * @minLength 1
         */
        commitHash?: string;
        /**
         * Git tag to build.
         * @minLength 1
         */
        tag?: string;
        /**
         * Destination branch for pull request builds.
         * @minLength 1
         */
        branchDest?: string;
        /**
         * Pull request ID for pull request builds.
         * @minimum 1
         */
        pullRequestId?: number;
        /** Whether Bitrise should skip posting Git status updates. */
        skipGitStatusReport?: boolean;
        /**
         * Machine type ID to run the build on.
         * @minLength 1
         */
        machineTypeId?: string;
        /**
         * Stack identifier to run the build on.
         * @minLength 1
         */
        stack?: string;
        /** Build priority. */
        priority?: number;
        /**
         * Environment variables for the triggered build.
         * @minItems 1
         */
        environments?: Array<{
          /**
           * Environment variable name.
           * @minLength 1
           */
          key: string;
          /** Environment variable value. */
          value: string;
          /** Whether Bitrise should expand this environment variable. */
          isExpand?: boolean;
        }>;
      };
      output: {
        /** Bitrise build trigger response. */
        trigger: {
          /** Bitrise trigger response message. */
          message?: string;
          /** Build or pipeline trigger results. */
          results?: Array<{
            /** Build number created by Bitrise. */
            build_number?: number;
            /** Build slug created by Bitrise. */
            build_slug?: string;
            /** URL for the triggered build. */
            build_url?: string;
            /** Bitrise trigger result message. */
            message?: string;
            /** Bitrise trigger result status. */
            status?: string;
            /** Pipeline triggered by Bitrise. */
            triggered_pipeline?: string;
            /** Workflow triggered by Bitrise. */
            triggered_workflow?: string;
            [key: string]: unknown;
          }>;
          /** Bitrise response service identifier. */
          service?: string;
          /** Bitrise trigger response slug. */
          slug?: string;
          /** Bitrise trigger response status. */
          status?: string;
          /** Deprecated build number returned by Bitrise. */
          build_number?: number;
          /** Deprecated build slug returned by Bitrise. */
          build_slug?: string;
          /** Deprecated build URL returned by Bitrise. */
          build_url?: string;
          /** Deprecated triggered workflow returned by Bitrise. */
          triggered_workflow?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
