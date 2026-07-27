import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Buildkite build by build number. */
    "buildkite.cancel_build": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        pipeline_slug: string;
        /**
         * The pipeline-local Buildkite build number.
         * @exclusiveMinimum 0
         */
        number: number;
      };
      output: {
        /** Unique identifier of the Buildkite build. */
        id: string;
        /** GraphQL identifier of the Buildkite build. */
        graphql_id?: string;
        /** Canonical API URL of the build. */
        url: string;
        /** Buildkite web URL of the build. */
        web_url: string;
        /**
         * Pipeline-local build number.
         * @exclusiveMinimum 0
         */
        number: number;
        /** Current Buildkite build state. */
        state: string;
        /** Whether the build is blocked waiting on a block step. */
        blocked: boolean;
        /** Reason provided when the build was canceled, when present. */
        cancel_reason?: string | null;
        /** Commit message or custom build message. */
        message?: string | null;
        /** Git commit SHA, ref, or tag associated with the build. */
        commit: string;
        /** Git branch associated with the build. */
        branch: string;
        /** Environment variables attached to the build. */
        env?: Record<string, unknown>;
        /** How the build was triggered. */
        source: string;
        /** User that created the build. */
        creator?: {
          /** Unique identifier of the Buildkite user. */
          id: string;
          /** GraphQL identifier of the Buildkite user. */
          graphql_id?: string;
          /** Display name of the Buildkite user. */
          name: string;
          /**
           * Email address of the Buildkite user.
           * @format email
           */
          email: string;
          /** Avatar URL of the Buildkite user, when present. */
          avatar_url?: string;
          /** Timestamp when the user account was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Jobs that belong to the build. */
        jobs?: Array<{
          /** Unique identifier of the Buildkite job. */
          id: string;
          /** GraphQL identifier of the Buildkite job. */
          graphql_id?: string;
          /** Job type reported by Buildkite. */
          type: string;
          /** Display name of the job, when present. */
          name?: string | null;
          /** Step key of the job, when present. */
          step_key?: string | null;
          /** Current Buildkite job state. */
          state: string;
          /** Buildkite web URL of the job, when present. */
          web_url?: string;
          /** API URL of the job log, when present. */
          log_url?: string;
          /** API URL of the raw job log, when present. */
          raw_log_url?: string;
          /** Command executed by the job, when present. */
          command?: string | null;
          /** Timestamp when the job was created. */
          created_at?: string;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          scheduled_at: string | null;
          /** Timestamp when the job became runnable, or null when not available. */
          runnable_at?: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          started_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          finished_at: string | null;
          [key: string]: unknown;
        }>;
        /** Timestamp when the build was created. */
        created_at: string;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        scheduled_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        started_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        finished_at: string | null;
        /** Metadata attached to the build. */
        meta_data?: Record<string, unknown>;
        /** Pull request metadata attached to the build, when present. */
        pull_request?: Record<string, unknown>;
        /** Pipeline summary that owns the build. */
        pipeline?: {
          /** Unique identifier of the Buildkite pipeline. */
          id: string;
          /** GraphQL identifier of the Buildkite pipeline. */
          graphql_id?: string;
          /** Canonical API URL of the pipeline. */
          url: string;
          /** Buildkite web URL of the pipeline. */
          web_url: string;
          /** Display name of the pipeline. */
          name: string;
          /** Description of the pipeline, when present. */
          description?: string | null;
          /**
           * The Buildkite pipeline slug.
           * @minLength 1
           */
          slug: string;
          /** Source code repository URL configured for the pipeline. */
          repository: string;
          /** Branch filter pattern for the pipeline, when present. */
          branch_configuration?: string | null;
          /** Default branch configured for the pipeline. */
          default_branch?: string;
          /** Whether intermediate queued builds on the same branch are skipped. */
          skip_queued_branch_builds?: boolean;
          /** Branch filter for skip queued builds behavior, when present. */
          skip_queued_branch_builds_filter?: string | null;
          /** Whether running builds on the same branch are canceled when a new build is created. */
          cancel_running_branch_builds?: boolean;
          /** Branch filter for cancel running builds behavior, when present. */
          cancel_running_branch_builds_filter?: string | null;
          /** Whether rebuilds are allowed for this pipeline, when present. */
          allow_rebuilds?: boolean;
          /** Source control provider settings. */
          provider?: {
            /** Source control provider identifier. */
            id: string;
            /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
            webhook_url?: string;
            /** Provider-specific source control settings. */
            settings?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** API URL for builds that belong to this pipeline. */
          builds_url: string;
          /** Buildkite status badge URL for the pipeline. */
          badge_url?: string;
          /** User that created the pipeline. */
          created_by?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the pipeline was created. */
          created_at: string;
          /** Timestamp when the pipeline was archived, or null when active. */
          archived_at?: string | null;
          /** Environment variables configured on the pipeline. */
          env?: Record<string, unknown>;
          /** Number of currently scheduled builds for the pipeline. */
          scheduled_builds_count?: number;
          /** Number of currently running builds for the pipeline. */
          running_builds_count?: number;
          /** Number of currently scheduled jobs for the pipeline. */
          scheduled_jobs_count?: number;
          /** Number of currently running jobs for the pipeline. */
          running_jobs_count?: number;
          /** Number of jobs currently waiting for agents. */
          waiting_jobs_count?: number;
          /** Visibility of the pipeline, when present. */
          visibility?: "private" | "public";
          /** Step configurations for non-YAML pipelines, when present. */
          steps?: Array<Record<string, unknown>>;
          /** YAML pipeline configuration, when the API response includes it. */
          configuration?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a new Buildkite build for a pipeline. */
    "buildkite.create_build": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        pipeline_slug: string;
        /**
         * The ref, SHA, or tag to build.
         * @minLength 1
         */
        commit: string;
        /**
         * The branch the build commit belongs to.
         * @minLength 1
         */
        branch: string;
        /** Custom message for the build, when provided. */
        message?: string;
        /** Optional build author metadata. */
        author?: {
          /**
           * Name of the user to attribute the build to.
           * @minLength 1
           */
          name: string;
          /**
           * Email address of the user to attribute the build to.
           * @format email
           */
          email: string;
        };
        /** Environment variables to make available to the build. */
        env?: Record<string, string>;
        /** Metadata values to attach to the build. */
        meta_data?: Record<string, unknown>;
        /** Whether the agent should perform a fresh checkout. */
        clean_checkout?: boolean;
        /** Whether the build should ignore pipeline-level branch filters. */
        ignore_pipeline_branch_filters?: boolean;
        /**
         * Pull request number for a pull request build.
         * @exclusiveMinimum 0
         */
        pull_request_id?: number;
        /**
         * Base branch for a pull request build.
         * @minLength 1
         */
        pull_request_base_branch?: string;
        /**
         * Repository URL of the pull request build source.
         * @minLength 1
         */
        pull_request_repository?: string;
        /**
         * Labels assigned to the pull request build.
         * @minItems 1
         */
        pull_request_labels?: Array<string>;
      };
      output: {
        /** Unique identifier of the Buildkite build. */
        id: string;
        /** GraphQL identifier of the Buildkite build. */
        graphql_id?: string;
        /** Canonical API URL of the build. */
        url: string;
        /** Buildkite web URL of the build. */
        web_url: string;
        /**
         * Pipeline-local build number.
         * @exclusiveMinimum 0
         */
        number: number;
        /** Current Buildkite build state. */
        state: string;
        /** Whether the build is blocked waiting on a block step. */
        blocked: boolean;
        /** Reason provided when the build was canceled, when present. */
        cancel_reason?: string | null;
        /** Commit message or custom build message. */
        message?: string | null;
        /** Git commit SHA, ref, or tag associated with the build. */
        commit: string;
        /** Git branch associated with the build. */
        branch: string;
        /** Environment variables attached to the build. */
        env?: Record<string, unknown>;
        /** How the build was triggered. */
        source: string;
        /** User that created the build. */
        creator?: {
          /** Unique identifier of the Buildkite user. */
          id: string;
          /** GraphQL identifier of the Buildkite user. */
          graphql_id?: string;
          /** Display name of the Buildkite user. */
          name: string;
          /**
           * Email address of the Buildkite user.
           * @format email
           */
          email: string;
          /** Avatar URL of the Buildkite user, when present. */
          avatar_url?: string;
          /** Timestamp when the user account was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Jobs that belong to the build. */
        jobs?: Array<{
          /** Unique identifier of the Buildkite job. */
          id: string;
          /** GraphQL identifier of the Buildkite job. */
          graphql_id?: string;
          /** Job type reported by Buildkite. */
          type: string;
          /** Display name of the job, when present. */
          name?: string | null;
          /** Step key of the job, when present. */
          step_key?: string | null;
          /** Current Buildkite job state. */
          state: string;
          /** Buildkite web URL of the job, when present. */
          web_url?: string;
          /** API URL of the job log, when present. */
          log_url?: string;
          /** API URL of the raw job log, when present. */
          raw_log_url?: string;
          /** Command executed by the job, when present. */
          command?: string | null;
          /** Timestamp when the job was created. */
          created_at?: string;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          scheduled_at: string | null;
          /** Timestamp when the job became runnable, or null when not available. */
          runnable_at?: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          started_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          finished_at: string | null;
          [key: string]: unknown;
        }>;
        /** Timestamp when the build was created. */
        created_at: string;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        scheduled_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        started_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        finished_at: string | null;
        /** Metadata attached to the build. */
        meta_data?: Record<string, unknown>;
        /** Pull request metadata attached to the build, when present. */
        pull_request?: Record<string, unknown>;
        /** Pipeline summary that owns the build. */
        pipeline?: {
          /** Unique identifier of the Buildkite pipeline. */
          id: string;
          /** GraphQL identifier of the Buildkite pipeline. */
          graphql_id?: string;
          /** Canonical API URL of the pipeline. */
          url: string;
          /** Buildkite web URL of the pipeline. */
          web_url: string;
          /** Display name of the pipeline. */
          name: string;
          /** Description of the pipeline, when present. */
          description?: string | null;
          /**
           * The Buildkite pipeline slug.
           * @minLength 1
           */
          slug: string;
          /** Source code repository URL configured for the pipeline. */
          repository: string;
          /** Branch filter pattern for the pipeline, when present. */
          branch_configuration?: string | null;
          /** Default branch configured for the pipeline. */
          default_branch?: string;
          /** Whether intermediate queued builds on the same branch are skipped. */
          skip_queued_branch_builds?: boolean;
          /** Branch filter for skip queued builds behavior, when present. */
          skip_queued_branch_builds_filter?: string | null;
          /** Whether running builds on the same branch are canceled when a new build is created. */
          cancel_running_branch_builds?: boolean;
          /** Branch filter for cancel running builds behavior, when present. */
          cancel_running_branch_builds_filter?: string | null;
          /** Whether rebuilds are allowed for this pipeline, when present. */
          allow_rebuilds?: boolean;
          /** Source control provider settings. */
          provider?: {
            /** Source control provider identifier. */
            id: string;
            /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
            webhook_url?: string;
            /** Provider-specific source control settings. */
            settings?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** API URL for builds that belong to this pipeline. */
          builds_url: string;
          /** Buildkite status badge URL for the pipeline. */
          badge_url?: string;
          /** User that created the pipeline. */
          created_by?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the pipeline was created. */
          created_at: string;
          /** Timestamp when the pipeline was archived, or null when active. */
          archived_at?: string | null;
          /** Environment variables configured on the pipeline. */
          env?: Record<string, unknown>;
          /** Number of currently scheduled builds for the pipeline. */
          scheduled_builds_count?: number;
          /** Number of currently running builds for the pipeline. */
          running_builds_count?: number;
          /** Number of currently scheduled jobs for the pipeline. */
          scheduled_jobs_count?: number;
          /** Number of currently running jobs for the pipeline. */
          running_jobs_count?: number;
          /** Number of jobs currently waiting for agents. */
          waiting_jobs_count?: number;
          /** Visibility of the pipeline, when present. */
          visibility?: "private" | "public";
          /** Step configurations for non-YAML pipelines, when present. */
          steps?: Array<Record<string, unknown>>;
          /** YAML pipeline configuration, when the API response includes it. */
          configuration?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a single Buildkite build by organization, pipeline slug, and build number. */
    "buildkite.get_build": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        pipeline_slug: string;
        /**
         * The pipeline-local Buildkite build number.
         * @exclusiveMinimum 0
         */
        number: number;
        /** Whether retried job executions should be included in each build. */
        include_retried_jobs?: boolean;
        /** Whether Buildkite Test Engine data should be included in the build response. */
        include_test_engine?: boolean;
      };
      output: {
        /** Unique identifier of the Buildkite build. */
        id: string;
        /** GraphQL identifier of the Buildkite build. */
        graphql_id?: string;
        /** Canonical API URL of the build. */
        url: string;
        /** Buildkite web URL of the build. */
        web_url: string;
        /**
         * Pipeline-local build number.
         * @exclusiveMinimum 0
         */
        number: number;
        /** Current Buildkite build state. */
        state: string;
        /** Whether the build is blocked waiting on a block step. */
        blocked: boolean;
        /** Reason provided when the build was canceled, when present. */
        cancel_reason?: string | null;
        /** Commit message or custom build message. */
        message?: string | null;
        /** Git commit SHA, ref, or tag associated with the build. */
        commit: string;
        /** Git branch associated with the build. */
        branch: string;
        /** Environment variables attached to the build. */
        env?: Record<string, unknown>;
        /** How the build was triggered. */
        source: string;
        /** User that created the build. */
        creator?: {
          /** Unique identifier of the Buildkite user. */
          id: string;
          /** GraphQL identifier of the Buildkite user. */
          graphql_id?: string;
          /** Display name of the Buildkite user. */
          name: string;
          /**
           * Email address of the Buildkite user.
           * @format email
           */
          email: string;
          /** Avatar URL of the Buildkite user, when present. */
          avatar_url?: string;
          /** Timestamp when the user account was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Jobs that belong to the build. */
        jobs?: Array<{
          /** Unique identifier of the Buildkite job. */
          id: string;
          /** GraphQL identifier of the Buildkite job. */
          graphql_id?: string;
          /** Job type reported by Buildkite. */
          type: string;
          /** Display name of the job, when present. */
          name?: string | null;
          /** Step key of the job, when present. */
          step_key?: string | null;
          /** Current Buildkite job state. */
          state: string;
          /** Buildkite web URL of the job, when present. */
          web_url?: string;
          /** API URL of the job log, when present. */
          log_url?: string;
          /** API URL of the raw job log, when present. */
          raw_log_url?: string;
          /** Command executed by the job, when present. */
          command?: string | null;
          /** Timestamp when the job was created. */
          created_at?: string;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          scheduled_at: string | null;
          /** Timestamp when the job became runnable, or null when not available. */
          runnable_at?: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          started_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          finished_at: string | null;
          [key: string]: unknown;
        }>;
        /** Timestamp when the build was created. */
        created_at: string;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        scheduled_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        started_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        finished_at: string | null;
        /** Metadata attached to the build. */
        meta_data?: Record<string, unknown>;
        /** Pull request metadata attached to the build, when present. */
        pull_request?: Record<string, unknown>;
        /** Pipeline summary that owns the build. */
        pipeline?: {
          /** Unique identifier of the Buildkite pipeline. */
          id: string;
          /** GraphQL identifier of the Buildkite pipeline. */
          graphql_id?: string;
          /** Canonical API URL of the pipeline. */
          url: string;
          /** Buildkite web URL of the pipeline. */
          web_url: string;
          /** Display name of the pipeline. */
          name: string;
          /** Description of the pipeline, when present. */
          description?: string | null;
          /**
           * The Buildkite pipeline slug.
           * @minLength 1
           */
          slug: string;
          /** Source code repository URL configured for the pipeline. */
          repository: string;
          /** Branch filter pattern for the pipeline, when present. */
          branch_configuration?: string | null;
          /** Default branch configured for the pipeline. */
          default_branch?: string;
          /** Whether intermediate queued builds on the same branch are skipped. */
          skip_queued_branch_builds?: boolean;
          /** Branch filter for skip queued builds behavior, when present. */
          skip_queued_branch_builds_filter?: string | null;
          /** Whether running builds on the same branch are canceled when a new build is created. */
          cancel_running_branch_builds?: boolean;
          /** Branch filter for cancel running builds behavior, when present. */
          cancel_running_branch_builds_filter?: string | null;
          /** Whether rebuilds are allowed for this pipeline, when present. */
          allow_rebuilds?: boolean;
          /** Source control provider settings. */
          provider?: {
            /** Source control provider identifier. */
            id: string;
            /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
            webhook_url?: string;
            /** Provider-specific source control settings. */
            settings?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** API URL for builds that belong to this pipeline. */
          builds_url: string;
          /** Buildkite status badge URL for the pipeline. */
          badge_url?: string;
          /** User that created the pipeline. */
          created_by?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the pipeline was created. */
          created_at: string;
          /** Timestamp when the pipeline was archived, or null when active. */
          archived_at?: string | null;
          /** Environment variables configured on the pipeline. */
          env?: Record<string, unknown>;
          /** Number of currently scheduled builds for the pipeline. */
          scheduled_builds_count?: number;
          /** Number of currently running builds for the pipeline. */
          running_builds_count?: number;
          /** Number of currently scheduled jobs for the pipeline. */
          scheduled_jobs_count?: number;
          /** Number of currently running jobs for the pipeline. */
          running_jobs_count?: number;
          /** Number of jobs currently waiting for agents. */
          waiting_jobs_count?: number;
          /** Visibility of the pipeline, when present. */
          visibility?: "private" | "public";
          /** Step configurations for non-YAML pipelines, when present. */
          steps?: Array<Record<string, unknown>>;
          /** YAML pipeline configuration, when the API response includes it. */
          configuration?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Inspect the current Buildkite API access token, including scopes and owner summary. */
    "buildkite.get_current_access_token": {
      input: Record<string, never>;
      output: {
        /** Unique identifier of the API access token. */
        uuid: string;
        /** Granted scopes for the current API access token. */
        scopes: Array<string>;
        /** Description configured for the current API access token, when present. */
        description?: string;
        /** Timestamp when the current API access token was created, when present. */
        created_at?: string;
        /** Summary of the user account that owns the token. */
        user?: {
          /**
           * Email address of the token owner.
           * @format email
           */
          email: string;
          /** Display name of the token owner. */
          name: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the Buildkite user account that owns the current API access token. */
    "buildkite.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Unique identifier of the Buildkite user. */
        id: string;
        /** GraphQL identifier of the Buildkite user. */
        graphql_id?: string;
        /** Display name of the Buildkite user. */
        name: string;
        /**
         * Email address of the Buildkite user.
         * @format email
         */
        email: string;
        /** Avatar URL of the Buildkite user, when present. */
        avatar_url?: string;
        /** Timestamp when the user account was created. */
        created_at: string;
      };
    };
    /** Get a single Buildkite organization by slug. */
    "buildkite.get_organization": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
      };
      output: {
        /** Unique identifier of the Buildkite organization. */
        id: string;
        /** GraphQL identifier of the Buildkite organization. */
        graphql_id?: string;
        /** Canonical API URL of the organization. */
        url: string;
        /** Buildkite web URL of the organization. */
        web_url: string;
        /** Display name of the organization. */
        name: string;
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        slug: string;
        /** API URL for the organization's pipelines. */
        pipelines_url: string;
        /** API URL for the organization's agents. */
        agents_url: string;
        /** API URL for the organization's custom emojis. */
        emojis_url: string;
        /** Timestamp when the organization was created. */
        created_at: string;
        [key: string]: unknown;
      };
    };
    /** Get a single Buildkite pipeline by organization and pipeline slug. */
    "buildkite.get_pipeline": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        pipeline_slug: string;
      };
      output: {
        /** Unique identifier of the Buildkite pipeline. */
        id: string;
        /** GraphQL identifier of the Buildkite pipeline. */
        graphql_id?: string;
        /** Canonical API URL of the pipeline. */
        url: string;
        /** Buildkite web URL of the pipeline. */
        web_url: string;
        /** Display name of the pipeline. */
        name: string;
        /** Description of the pipeline, when present. */
        description?: string | null;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        slug: string;
        /** Source code repository URL configured for the pipeline. */
        repository: string;
        /** Branch filter pattern for the pipeline, when present. */
        branch_configuration?: string | null;
        /** Default branch configured for the pipeline. */
        default_branch?: string;
        /** Whether intermediate queued builds on the same branch are skipped. */
        skip_queued_branch_builds?: boolean;
        /** Branch filter for skip queued builds behavior, when present. */
        skip_queued_branch_builds_filter?: string | null;
        /** Whether running builds on the same branch are canceled when a new build is created. */
        cancel_running_branch_builds?: boolean;
        /** Branch filter for cancel running builds behavior, when present. */
        cancel_running_branch_builds_filter?: string | null;
        /** Whether rebuilds are allowed for this pipeline, when present. */
        allow_rebuilds?: boolean;
        /** Source control provider settings. */
        provider?: {
          /** Source control provider identifier. */
          id: string;
          /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
          webhook_url?: string;
          /** Provider-specific source control settings. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** API URL for builds that belong to this pipeline. */
        builds_url: string;
        /** Buildkite status badge URL for the pipeline. */
        badge_url?: string;
        /** User that created the pipeline. */
        created_by?: {
          /** Unique identifier of the Buildkite user. */
          id: string;
          /** GraphQL identifier of the Buildkite user. */
          graphql_id?: string;
          /** Display name of the Buildkite user. */
          name: string;
          /**
           * Email address of the Buildkite user.
           * @format email
           */
          email: string;
          /** Avatar URL of the Buildkite user, when present. */
          avatar_url?: string;
          /** Timestamp when the user account was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Timestamp when the pipeline was created. */
        created_at: string;
        /** Timestamp when the pipeline was archived, or null when active. */
        archived_at?: string | null;
        /** Environment variables configured on the pipeline. */
        env?: Record<string, unknown>;
        /** Number of currently scheduled builds for the pipeline. */
        scheduled_builds_count?: number;
        /** Number of currently running builds for the pipeline. */
        running_builds_count?: number;
        /** Number of currently scheduled jobs for the pipeline. */
        scheduled_jobs_count?: number;
        /** Number of currently running jobs for the pipeline. */
        running_jobs_count?: number;
        /** Number of jobs currently waiting for agents. */
        waiting_jobs_count?: number;
        /** Visibility of the pipeline, when present. */
        visibility?: "private" | "public";
        /** Step configurations for non-YAML pipelines, when present. */
        steps?: Array<Record<string, unknown>>;
        /** YAML pipeline configuration, when the API response includes it. */
        configuration?: string;
        [key: string]: unknown;
      };
    };
    /** List builds across all pipelines in a Buildkite organization. */
    "buildkite.list_builds_for_organization": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * How many results to return per page.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Only return builds for this branch.
         * @minLength 1
         */
        branch?: string;
        /**
         * Only return builds for this full commit SHA.
         * @minLength 1
         */
        commit?: string;
        /** Only return builds created on or after this ISO 8601 timestamp. */
        created_from?: string;
        /** Only return builds created before this ISO 8601 timestamp. */
        created_to?: string;
        /** Only return builds finished on or after this ISO 8601 timestamp. */
        finished_from?: string;
        /** Only return builds in this Buildkite state. */
        state?: "creating" | "scheduled" | "running" | "passed" | "failing" | "failed" | "blocked" | "canceling" | "canceled" | "skipped" | "not_run" | "finished";
        /** Whether retried job executions should be included in each build. */
        include_retried_jobs?: boolean;
      };
      output: {
        /** Buildkite builds returned by the request. */
        builds: Array<{
          /** Unique identifier of the Buildkite build. */
          id: string;
          /** GraphQL identifier of the Buildkite build. */
          graphql_id?: string;
          /** Canonical API URL of the build. */
          url: string;
          /** Buildkite web URL of the build. */
          web_url: string;
          /**
           * Pipeline-local build number.
           * @exclusiveMinimum 0
           */
          number: number;
          /** Current Buildkite build state. */
          state: string;
          /** Whether the build is blocked waiting on a block step. */
          blocked: boolean;
          /** Reason provided when the build was canceled, when present. */
          cancel_reason?: string | null;
          /** Commit message or custom build message. */
          message?: string | null;
          /** Git commit SHA, ref, or tag associated with the build. */
          commit: string;
          /** Git branch associated with the build. */
          branch: string;
          /** Environment variables attached to the build. */
          env?: Record<string, unknown>;
          /** How the build was triggered. */
          source: string;
          /** User that created the build. */
          creator?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Jobs that belong to the build. */
          jobs?: Array<{
            /** Unique identifier of the Buildkite job. */
            id: string;
            /** GraphQL identifier of the Buildkite job. */
            graphql_id?: string;
            /** Job type reported by Buildkite. */
            type: string;
            /** Display name of the job, when present. */
            name?: string | null;
            /** Step key of the job, when present. */
            step_key?: string | null;
            /** Current Buildkite job state. */
            state: string;
            /** Buildkite web URL of the job, when present. */
            web_url?: string;
            /** API URL of the job log, when present. */
            log_url?: string;
            /** API URL of the raw job log, when present. */
            raw_log_url?: string;
            /** Command executed by the job, when present. */
            command?: string | null;
            /** Timestamp when the job was created. */
            created_at?: string;
            /** Timestamp in ISO 8601 format, or null when the value is not set. */
            scheduled_at: string | null;
            /** Timestamp when the job became runnable, or null when not available. */
            runnable_at?: string | null;
            /** Timestamp in ISO 8601 format, or null when the value is not set. */
            started_at: string | null;
            /** Timestamp in ISO 8601 format, or null when the value is not set. */
            finished_at: string | null;
            [key: string]: unknown;
          }>;
          /** Timestamp when the build was created. */
          created_at: string;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          scheduled_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          started_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          finished_at: string | null;
          /** Metadata attached to the build. */
          meta_data?: Record<string, unknown>;
          /** Pull request metadata attached to the build, when present. */
          pull_request?: Record<string, unknown>;
          /** Pipeline summary that owns the build. */
          pipeline?: {
            /** Unique identifier of the Buildkite pipeline. */
            id: string;
            /** GraphQL identifier of the Buildkite pipeline. */
            graphql_id?: string;
            /** Canonical API URL of the pipeline. */
            url: string;
            /** Buildkite web URL of the pipeline. */
            web_url: string;
            /** Display name of the pipeline. */
            name: string;
            /** Description of the pipeline, when present. */
            description?: string | null;
            /**
             * The Buildkite pipeline slug.
             * @minLength 1
             */
            slug: string;
            /** Source code repository URL configured for the pipeline. */
            repository: string;
            /** Branch filter pattern for the pipeline, when present. */
            branch_configuration?: string | null;
            /** Default branch configured for the pipeline. */
            default_branch?: string;
            /** Whether intermediate queued builds on the same branch are skipped. */
            skip_queued_branch_builds?: boolean;
            /** Branch filter for skip queued builds behavior, when present. */
            skip_queued_branch_builds_filter?: string | null;
            /** Whether running builds on the same branch are canceled when a new build is created. */
            cancel_running_branch_builds?: boolean;
            /** Branch filter for cancel running builds behavior, when present. */
            cancel_running_branch_builds_filter?: string | null;
            /** Whether rebuilds are allowed for this pipeline, when present. */
            allow_rebuilds?: boolean;
            /** Source control provider settings. */
            provider?: {
              /** Source control provider identifier. */
              id: string;
              /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
              webhook_url?: string;
              /** Provider-specific source control settings. */
              settings?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** API URL for builds that belong to this pipeline. */
            builds_url: string;
            /** Buildkite status badge URL for the pipeline. */
            badge_url?: string;
            /** User that created the pipeline. */
            created_by?: {
              /** Unique identifier of the Buildkite user. */
              id: string;
              /** GraphQL identifier of the Buildkite user. */
              graphql_id?: string;
              /** Display name of the Buildkite user. */
              name: string;
              /**
               * Email address of the Buildkite user.
               * @format email
               */
              email: string;
              /** Avatar URL of the Buildkite user, when present. */
              avatar_url?: string;
              /** Timestamp when the user account was created. */
              created_at?: string;
              [key: string]: unknown;
            };
            /** Timestamp when the pipeline was created. */
            created_at: string;
            /** Timestamp when the pipeline was archived, or null when active. */
            archived_at?: string | null;
            /** Environment variables configured on the pipeline. */
            env?: Record<string, unknown>;
            /** Number of currently scheduled builds for the pipeline. */
            scheduled_builds_count?: number;
            /** Number of currently running builds for the pipeline. */
            running_builds_count?: number;
            /** Number of currently scheduled jobs for the pipeline. */
            scheduled_jobs_count?: number;
            /** Number of currently running jobs for the pipeline. */
            running_jobs_count?: number;
            /** Number of jobs currently waiting for agents. */
            waiting_jobs_count?: number;
            /** Visibility of the pipeline, when present. */
            visibility?: "private" | "public";
            /** Step configurations for non-YAML pipelines, when present. */
            steps?: Array<Record<string, unknown>>;
            /** YAML pipeline configuration, when the API response includes it. */
            configuration?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Buildkite. */
        links: {
          /** URL of the next page returned in the Buildkite Link header, or null. */
          next: string | null;
          /** URL of the previous page returned in the Buildkite Link header, or null. */
          prev: string | null;
          /** URL of the first page returned in the Buildkite Link header, or null. */
          first: string | null;
          /** URL of the last page returned in the Buildkite Link header, or null. */
          last: string | null;
        };
      };
    };
    /** List builds for a single Buildkite pipeline. */
    "buildkite.list_builds_for_pipeline": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        pipeline_slug: string;
        /**
         * The page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * How many results to return per page.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Only return builds for this branch.
         * @minLength 1
         */
        branch?: string;
        /**
         * Only return builds for this full commit SHA.
         * @minLength 1
         */
        commit?: string;
        /** Only return builds created on or after this ISO 8601 timestamp. */
        created_from?: string;
        /** Only return builds created before this ISO 8601 timestamp. */
        created_to?: string;
        /** Only return builds finished on or after this ISO 8601 timestamp. */
        finished_from?: string;
        /** Only return builds in this Buildkite state. */
        state?: "creating" | "scheduled" | "running" | "passed" | "failing" | "failed" | "blocked" | "canceling" | "canceled" | "skipped" | "not_run" | "finished";
        /** Whether retried job executions should be included in each build. */
        include_retried_jobs?: boolean;
      };
      output: {
        /** Buildkite builds returned by the request. */
        builds: Array<{
          /** Unique identifier of the Buildkite build. */
          id: string;
          /** GraphQL identifier of the Buildkite build. */
          graphql_id?: string;
          /** Canonical API URL of the build. */
          url: string;
          /** Buildkite web URL of the build. */
          web_url: string;
          /**
           * Pipeline-local build number.
           * @exclusiveMinimum 0
           */
          number: number;
          /** Current Buildkite build state. */
          state: string;
          /** Whether the build is blocked waiting on a block step. */
          blocked: boolean;
          /** Reason provided when the build was canceled, when present. */
          cancel_reason?: string | null;
          /** Commit message or custom build message. */
          message?: string | null;
          /** Git commit SHA, ref, or tag associated with the build. */
          commit: string;
          /** Git branch associated with the build. */
          branch: string;
          /** Environment variables attached to the build. */
          env?: Record<string, unknown>;
          /** How the build was triggered. */
          source: string;
          /** User that created the build. */
          creator?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Jobs that belong to the build. */
          jobs?: Array<{
            /** Unique identifier of the Buildkite job. */
            id: string;
            /** GraphQL identifier of the Buildkite job. */
            graphql_id?: string;
            /** Job type reported by Buildkite. */
            type: string;
            /** Display name of the job, when present. */
            name?: string | null;
            /** Step key of the job, when present. */
            step_key?: string | null;
            /** Current Buildkite job state. */
            state: string;
            /** Buildkite web URL of the job, when present. */
            web_url?: string;
            /** API URL of the job log, when present. */
            log_url?: string;
            /** API URL of the raw job log, when present. */
            raw_log_url?: string;
            /** Command executed by the job, when present. */
            command?: string | null;
            /** Timestamp when the job was created. */
            created_at?: string;
            /** Timestamp in ISO 8601 format, or null when the value is not set. */
            scheduled_at: string | null;
            /** Timestamp when the job became runnable, or null when not available. */
            runnable_at?: string | null;
            /** Timestamp in ISO 8601 format, or null when the value is not set. */
            started_at: string | null;
            /** Timestamp in ISO 8601 format, or null when the value is not set. */
            finished_at: string | null;
            [key: string]: unknown;
          }>;
          /** Timestamp when the build was created. */
          created_at: string;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          scheduled_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          started_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          finished_at: string | null;
          /** Metadata attached to the build. */
          meta_data?: Record<string, unknown>;
          /** Pull request metadata attached to the build, when present. */
          pull_request?: Record<string, unknown>;
          /** Pipeline summary that owns the build. */
          pipeline?: {
            /** Unique identifier of the Buildkite pipeline. */
            id: string;
            /** GraphQL identifier of the Buildkite pipeline. */
            graphql_id?: string;
            /** Canonical API URL of the pipeline. */
            url: string;
            /** Buildkite web URL of the pipeline. */
            web_url: string;
            /** Display name of the pipeline. */
            name: string;
            /** Description of the pipeline, when present. */
            description?: string | null;
            /**
             * The Buildkite pipeline slug.
             * @minLength 1
             */
            slug: string;
            /** Source code repository URL configured for the pipeline. */
            repository: string;
            /** Branch filter pattern for the pipeline, when present. */
            branch_configuration?: string | null;
            /** Default branch configured for the pipeline. */
            default_branch?: string;
            /** Whether intermediate queued builds on the same branch are skipped. */
            skip_queued_branch_builds?: boolean;
            /** Branch filter for skip queued builds behavior, when present. */
            skip_queued_branch_builds_filter?: string | null;
            /** Whether running builds on the same branch are canceled when a new build is created. */
            cancel_running_branch_builds?: boolean;
            /** Branch filter for cancel running builds behavior, when present. */
            cancel_running_branch_builds_filter?: string | null;
            /** Whether rebuilds are allowed for this pipeline, when present. */
            allow_rebuilds?: boolean;
            /** Source control provider settings. */
            provider?: {
              /** Source control provider identifier. */
              id: string;
              /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
              webhook_url?: string;
              /** Provider-specific source control settings. */
              settings?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** API URL for builds that belong to this pipeline. */
            builds_url: string;
            /** Buildkite status badge URL for the pipeline. */
            badge_url?: string;
            /** User that created the pipeline. */
            created_by?: {
              /** Unique identifier of the Buildkite user. */
              id: string;
              /** GraphQL identifier of the Buildkite user. */
              graphql_id?: string;
              /** Display name of the Buildkite user. */
              name: string;
              /**
               * Email address of the Buildkite user.
               * @format email
               */
              email: string;
              /** Avatar URL of the Buildkite user, when present. */
              avatar_url?: string;
              /** Timestamp when the user account was created. */
              created_at?: string;
              [key: string]: unknown;
            };
            /** Timestamp when the pipeline was created. */
            created_at: string;
            /** Timestamp when the pipeline was archived, or null when active. */
            archived_at?: string | null;
            /** Environment variables configured on the pipeline. */
            env?: Record<string, unknown>;
            /** Number of currently scheduled builds for the pipeline. */
            scheduled_builds_count?: number;
            /** Number of currently running builds for the pipeline. */
            running_builds_count?: number;
            /** Number of currently scheduled jobs for the pipeline. */
            scheduled_jobs_count?: number;
            /** Number of currently running jobs for the pipeline. */
            running_jobs_count?: number;
            /** Number of jobs currently waiting for agents. */
            waiting_jobs_count?: number;
            /** Visibility of the pipeline, when present. */
            visibility?: "private" | "public";
            /** Step configurations for non-YAML pipelines, when present. */
            steps?: Array<Record<string, unknown>>;
            /** YAML pipeline configuration, when the API response includes it. */
            configuration?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Buildkite. */
        links: {
          /** URL of the next page returned in the Buildkite Link header, or null. */
          next: string | null;
          /** URL of the previous page returned in the Buildkite Link header, or null. */
          prev: string | null;
          /** URL of the first page returned in the Buildkite Link header, or null. */
          first: string | null;
          /** URL of the last page returned in the Buildkite Link header, or null. */
          last: string | null;
        };
      };
    };
    /** List Buildkite organizations accessible to the current API token. */
    "buildkite.list_organizations": {
      input: {
        /**
         * The page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * How many results to return per page.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
      };
      output: {
        /** Buildkite organizations returned by the request. */
        organizations: Array<{
          /** Unique identifier of the Buildkite organization. */
          id: string;
          /** GraphQL identifier of the Buildkite organization. */
          graphql_id?: string;
          /** Canonical API URL of the organization. */
          url: string;
          /** Buildkite web URL of the organization. */
          web_url: string;
          /** Display name of the organization. */
          name: string;
          /**
           * The Buildkite organization slug.
           * @minLength 1
           */
          slug: string;
          /** API URL for the organization's pipelines. */
          pipelines_url: string;
          /** API URL for the organization's agents. */
          agents_url: string;
          /** API URL for the organization's custom emojis. */
          emojis_url: string;
          /** Timestamp when the organization was created. */
          created_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Buildkite. */
        links: {
          /** URL of the next page returned in the Buildkite Link header, or null. */
          next: string | null;
          /** URL of the previous page returned in the Buildkite Link header, or null. */
          prev: string | null;
          /** URL of the first page returned in the Buildkite Link header, or null. */
          first: string | null;
          /** URL of the last page returned in the Buildkite Link header, or null. */
          last: string | null;
        };
      };
    };
    /** List Buildkite pipelines for an organization. */
    "buildkite.list_pipelines": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * How many results to return per page.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Only return pipelines whose name contains this case-insensitive value.
         * @minLength 1
         */
        name?: string;
        /**
         * Only return pipelines whose repository URL contains this case-insensitive value.
         * @minLength 1
         */
        repository?: string;
      };
      output: {
        /** Buildkite pipelines returned by the request. */
        pipelines: Array<{
          /** Unique identifier of the Buildkite pipeline. */
          id: string;
          /** GraphQL identifier of the Buildkite pipeline. */
          graphql_id?: string;
          /** Canonical API URL of the pipeline. */
          url: string;
          /** Buildkite web URL of the pipeline. */
          web_url: string;
          /** Display name of the pipeline. */
          name: string;
          /** Description of the pipeline, when present. */
          description?: string | null;
          /**
           * The Buildkite pipeline slug.
           * @minLength 1
           */
          slug: string;
          /** Source code repository URL configured for the pipeline. */
          repository: string;
          /** Branch filter pattern for the pipeline, when present. */
          branch_configuration?: string | null;
          /** Default branch configured for the pipeline. */
          default_branch?: string;
          /** Whether intermediate queued builds on the same branch are skipped. */
          skip_queued_branch_builds?: boolean;
          /** Branch filter for skip queued builds behavior, when present. */
          skip_queued_branch_builds_filter?: string | null;
          /** Whether running builds on the same branch are canceled when a new build is created. */
          cancel_running_branch_builds?: boolean;
          /** Branch filter for cancel running builds behavior, when present. */
          cancel_running_branch_builds_filter?: string | null;
          /** Whether rebuilds are allowed for this pipeline, when present. */
          allow_rebuilds?: boolean;
          /** Source control provider settings. */
          provider?: {
            /** Source control provider identifier. */
            id: string;
            /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
            webhook_url?: string;
            /** Provider-specific source control settings. */
            settings?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** API URL for builds that belong to this pipeline. */
          builds_url: string;
          /** Buildkite status badge URL for the pipeline. */
          badge_url?: string;
          /** User that created the pipeline. */
          created_by?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the pipeline was created. */
          created_at: string;
          /** Timestamp when the pipeline was archived, or null when active. */
          archived_at?: string | null;
          /** Environment variables configured on the pipeline. */
          env?: Record<string, unknown>;
          /** Number of currently scheduled builds for the pipeline. */
          scheduled_builds_count?: number;
          /** Number of currently running builds for the pipeline. */
          running_builds_count?: number;
          /** Number of currently scheduled jobs for the pipeline. */
          scheduled_jobs_count?: number;
          /** Number of currently running jobs for the pipeline. */
          running_jobs_count?: number;
          /** Number of jobs currently waiting for agents. */
          waiting_jobs_count?: number;
          /** Visibility of the pipeline, when present. */
          visibility?: "private" | "public";
          /** Step configurations for non-YAML pipelines, when present. */
          steps?: Array<Record<string, unknown>>;
          /** YAML pipeline configuration, when the API response includes it. */
          configuration?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Buildkite. */
        links: {
          /** URL of the next page returned in the Buildkite Link header, or null. */
          next: string | null;
          /** URL of the previous page returned in the Buildkite Link header, or null. */
          prev: string | null;
          /** URL of the first page returned in the Buildkite Link header, or null. */
          first: string | null;
          /** URL of the last page returned in the Buildkite Link header, or null. */
          last: string | null;
        };
      };
    };
    /** Rebuild a Buildkite build by build number. */
    "buildkite.rebuild_build": {
      input: {
        /**
         * The Buildkite organization slug.
         * @minLength 1
         */
        org_slug: string;
        /**
         * The Buildkite pipeline slug.
         * @minLength 1
         */
        pipeline_slug: string;
        /**
         * The pipeline-local Buildkite build number.
         * @exclusiveMinimum 0
         */
        number: number;
      };
      output: {
        /** Unique identifier of the Buildkite build. */
        id: string;
        /** GraphQL identifier of the Buildkite build. */
        graphql_id?: string;
        /** Canonical API URL of the build. */
        url: string;
        /** Buildkite web URL of the build. */
        web_url: string;
        /**
         * Pipeline-local build number.
         * @exclusiveMinimum 0
         */
        number: number;
        /** Current Buildkite build state. */
        state: string;
        /** Whether the build is blocked waiting on a block step. */
        blocked: boolean;
        /** Reason provided when the build was canceled, when present. */
        cancel_reason?: string | null;
        /** Commit message or custom build message. */
        message?: string | null;
        /** Git commit SHA, ref, or tag associated with the build. */
        commit: string;
        /** Git branch associated with the build. */
        branch: string;
        /** Environment variables attached to the build. */
        env?: Record<string, unknown>;
        /** How the build was triggered. */
        source: string;
        /** User that created the build. */
        creator?: {
          /** Unique identifier of the Buildkite user. */
          id: string;
          /** GraphQL identifier of the Buildkite user. */
          graphql_id?: string;
          /** Display name of the Buildkite user. */
          name: string;
          /**
           * Email address of the Buildkite user.
           * @format email
           */
          email: string;
          /** Avatar URL of the Buildkite user, when present. */
          avatar_url?: string;
          /** Timestamp when the user account was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Jobs that belong to the build. */
        jobs?: Array<{
          /** Unique identifier of the Buildkite job. */
          id: string;
          /** GraphQL identifier of the Buildkite job. */
          graphql_id?: string;
          /** Job type reported by Buildkite. */
          type: string;
          /** Display name of the job, when present. */
          name?: string | null;
          /** Step key of the job, when present. */
          step_key?: string | null;
          /** Current Buildkite job state. */
          state: string;
          /** Buildkite web URL of the job, when present. */
          web_url?: string;
          /** API URL of the job log, when present. */
          log_url?: string;
          /** API URL of the raw job log, when present. */
          raw_log_url?: string;
          /** Command executed by the job, when present. */
          command?: string | null;
          /** Timestamp when the job was created. */
          created_at?: string;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          scheduled_at: string | null;
          /** Timestamp when the job became runnable, or null when not available. */
          runnable_at?: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          started_at: string | null;
          /** Timestamp in ISO 8601 format, or null when the value is not set. */
          finished_at: string | null;
          [key: string]: unknown;
        }>;
        /** Timestamp when the build was created. */
        created_at: string;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        scheduled_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        started_at: string | null;
        /** Timestamp in ISO 8601 format, or null when the value is not set. */
        finished_at: string | null;
        /** Metadata attached to the build. */
        meta_data?: Record<string, unknown>;
        /** Pull request metadata attached to the build, when present. */
        pull_request?: Record<string, unknown>;
        /** Pipeline summary that owns the build. */
        pipeline?: {
          /** Unique identifier of the Buildkite pipeline. */
          id: string;
          /** GraphQL identifier of the Buildkite pipeline. */
          graphql_id?: string;
          /** Canonical API URL of the pipeline. */
          url: string;
          /** Buildkite web URL of the pipeline. */
          web_url: string;
          /** Display name of the pipeline. */
          name: string;
          /** Description of the pipeline, when present. */
          description?: string | null;
          /**
           * The Buildkite pipeline slug.
           * @minLength 1
           */
          slug: string;
          /** Source code repository URL configured for the pipeline. */
          repository: string;
          /** Branch filter pattern for the pipeline, when present. */
          branch_configuration?: string | null;
          /** Default branch configured for the pipeline. */
          default_branch?: string;
          /** Whether intermediate queued builds on the same branch are skipped. */
          skip_queued_branch_builds?: boolean;
          /** Branch filter for skip queued builds behavior, when present. */
          skip_queued_branch_builds_filter?: string | null;
          /** Whether running builds on the same branch are canceled when a new build is created. */
          cancel_running_branch_builds?: boolean;
          /** Branch filter for cancel running builds behavior, when present. */
          cancel_running_branch_builds_filter?: string | null;
          /** Whether rebuilds are allowed for this pipeline, when present. */
          allow_rebuilds?: boolean;
          /** Source control provider settings. */
          provider?: {
            /** Source control provider identifier. */
            id: string;
            /** Pipeline webhook URL, or an empty string when Buildkite does not expose it. */
            webhook_url?: string;
            /** Provider-specific source control settings. */
            settings?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** API URL for builds that belong to this pipeline. */
          builds_url: string;
          /** Buildkite status badge URL for the pipeline. */
          badge_url?: string;
          /** User that created the pipeline. */
          created_by?: {
            /** Unique identifier of the Buildkite user. */
            id: string;
            /** GraphQL identifier of the Buildkite user. */
            graphql_id?: string;
            /** Display name of the Buildkite user. */
            name: string;
            /**
             * Email address of the Buildkite user.
             * @format email
             */
            email: string;
            /** Avatar URL of the Buildkite user, when present. */
            avatar_url?: string;
            /** Timestamp when the user account was created. */
            created_at?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the pipeline was created. */
          created_at: string;
          /** Timestamp when the pipeline was archived, or null when active. */
          archived_at?: string | null;
          /** Environment variables configured on the pipeline. */
          env?: Record<string, unknown>;
          /** Number of currently scheduled builds for the pipeline. */
          scheduled_builds_count?: number;
          /** Number of currently running builds for the pipeline. */
          running_builds_count?: number;
          /** Number of currently scheduled jobs for the pipeline. */
          scheduled_jobs_count?: number;
          /** Number of currently running jobs for the pipeline. */
          running_jobs_count?: number;
          /** Number of jobs currently waiting for agents. */
          waiting_jobs_count?: number;
          /** Visibility of the pipeline, when present. */
          visibility?: "private" | "public";
          /** Step configurations for non-YAML pipelines, when present. */
          steps?: Array<Record<string, unknown>>;
          /** YAML pipeline configuration, when the API response includes it. */
          configuration?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
