import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the currently authenticated CircleCI user profile. */
    "circleci.get_current_user": {
      input: Record<string, never>;
      output: {
        /** URL to the user's avatar on the VCS. */
        avatar_url: string | null;
        /** The unique ID of the user. */
        id: string;
        /** The VCS login of the current user. */
        login: string;
        /** The display name of the current user. */
        name: string;
        [key: string]: unknown;
      };
    };
    /** List artifacts for a CircleCI job. */
    "circleci.get_job_artifacts": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
        /**
         * The CircleCI job number.
         * @exclusiveMinimum 0
         */
        jobNumber: number;
      };
      output: {
        /** Artifacts returned by CircleCI. */
        items: Array<{
          /** The artifact path. */
          path: string;
          /** The node index that stored the artifact. */
          node_index: number;
          /** The artifact download URL. */
          url: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when there is no next page. */
        next_page_token: string | null;
        [key: string]: unknown;
      };
    };
    /** Get CircleCI job details by project slug and job number. */
    "circleci.get_job_details": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
        /**
         * The CircleCI job number.
         * @exclusiveMinimum 0
         */
        jobNumber: number;
      };
      output: {
        /** URL of the job in the CircleCI web UI. */
        web_url?: string;
        /** Project information for the job. */
        project?: {
          /** The unique ID of the job project. */
          id: string;
          /**
           * The CircleCI project slug for the job.
           * @minLength 1
           */
          slug: string;
          /** The job project name. */
          name: string;
          /** The repository URL for the job project. */
          external_url: string;
          [key: string]: unknown;
        };
        /** Parallel run statuses for the job. */
        parallel_runs?: Array<{
          /** The index of the parallel run. */
          index: number;
          /** The status of the parallel run. */
          status: string;
          [key: string]: unknown;
        }>;
        /** The time when the job started. */
        started_at?: string;
        /** The latest workflow that included the job. */
        latest_workflow?: {
          /** The unique ID of the latest workflow. */
          id: string;
          /** The name of the latest workflow. */
          name: string;
          [key: string]: unknown;
        };
        /** The CircleCI job name. */
        name: string;
        /** Executor information for the job. */
        executor?: {
          /** The CircleCI resource class name. */
          resource_class: string;
          /** The executor type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The number of parallel runs. */
        parallelism?: number;
        /** The current job status reported by CircleCI. */
        status: "success" | "running" | "not_run" | "failed" | "retried" | "queued" | "not_running" | "infrastructure_fail" | "timedout" | "on_hold" | "terminated-unknown" | "blocked" | "canceled" | "unauthorized";
        /** The CircleCI job number. */
        number: number;
        /** Pipeline information for the job. */
        pipeline?: {
          /**
           * The unique ID of the CircleCI pipeline.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a CircleCI pipeline by pipeline ID. */
    "circleci.get_pipeline": {
      input: {
        /**
         * The unique ID of the CircleCI pipeline.
         * @minLength 1
         */
        pipelineId: string;
      };
      output: {
        /**
         * The unique ID of the CircleCI pipeline.
         * @minLength 1
         */
        id: string;
        /** Errors attached to the pipeline. */
        errors: Array<{
          /** The pipeline error type. */
          type: string;
          /** The human-readable pipeline error message. */
          message: string;
          [key: string]: unknown;
        }>;
        /**
         * The CircleCI project slug for the pipeline.
         * @minLength 1
         */
        project_slug: string;
        /** The time when the pipeline was last updated. */
        updated_at?: string;
        /** The pipeline number. */
        number: number;
        /** Pipeline parameters returned by CircleCI. */
        trigger_parameters?: Record<string, unknown>;
        /** The current pipeline state reported by CircleCI. */
        state: "created" | "errored" | "setup-pending" | "setup" | "pending";
        /** The time when the pipeline was created. */
        created_at: string;
        /** Trigger metadata for the pipeline. */
        trigger?: {
          /** The trigger type. */
          type: string;
          /** The time when the trigger was received. */
          received_at: string;
          /** The actor that triggered the pipeline. */
          actor?: {
            /** The VCS login of the trigger actor. */
            login: string;
            /** URL to the actor avatar on the VCS. */
            avatar_url: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Version control metadata for the pipeline. */
        vcs?: {
          /** The VCS provider name. */
          provider_name: string;
          /** The origin repository URL for the trigger. */
          origin_repository_url?: string;
          /** The target repository URL for the pipeline. */
          target_repository_url: string;
          /** The branch used for the pipeline. */
          branch?: string;
          /** The code review ID, when present. */
          review_id?: string;
          /** The code review URL, when present. */
          review_url?: string;
          /** The VCS revision used for the pipeline. */
          revision: string | null;
          /** The tag used for the pipeline, when present. */
          tag?: string;
          /** The latest commit in the pipeline. */
          commit?: {
            /** The subject of the latest commit message. */
            subject: string | null;
            /** The body of the latest commit message. */
            body: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get CircleCI project details by project slug. */
    "circleci.get_project": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
      };
      output: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        slug: string;
        /** The project name. */
        name: string;
        /** The unique ID of the project. */
        id: string;
        /** The organization name that owns the project. */
        organization_name?: string;
        /** The organization slug that owns the project. */
        organization_slug?: string;
        /** The unique ID of the organization. */
        organization_id?: string;
        /** Version control information for the project. */
        vcs_info?: {
          /** Repository URL for the project source code. */
          vcs_url: string;
          /** The VCS provider reported by CircleCI. */
          provider: string;
          /** The default branch configured for the project. */
          default_branch: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get CircleCI Insights summary metrics for a workflow. */
    "circleci.get_workflow_summary": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
        /**
         * The CircleCI workflow name.
         * @minLength 1
         */
        workflowName: string;
        /** Whether to aggregate across all branches. */
        allBranches?: boolean;
        /**
         * The VCS branch name to scope the workflow summary to.
         * @minLength 1
         */
        branch?: string;
      };
      output: {
        /** Aggregated workflow metrics. */
        metrics: {
          /** The total number of workflow runs. */
          total_runs: number;
          /** The number of successful workflow runs. */
          successful_runs: number;
          /** The mean time to recovery in seconds. */
          mttr: number | null;
          /** The total credits consumed by the workflow. */
          total_credits_used: number | null;
          /** The number of failed workflow runs. */
          failed_runs: number;
          /** The workflow success rate. */
          success_rate: number;
          /** The number of workflow runs that completed in the reporting window. */
          completed_runs: number | null;
          /** The start time of the reporting window. */
          window_start: string;
          /** Duration metrics for the workflow. */
          duration_metrics: {
            /** The minimum workflow duration in seconds. */
            min: number | null;
            /** The mean workflow duration in seconds. */
            mean: number | null;
            /** The median workflow duration in seconds. */
            median: number | null;
            /** The 95th percentile workflow duration in seconds. */
            p95: number | null;
            /** The maximum workflow duration in seconds. */
            max: number | null;
            /** The standard deviation of workflow duration in seconds. */
            standard_deviation: number | null;
            [key: string]: unknown;
          };
          /** The end time of the reporting window. */
          window_end: string;
          /** The average number of workflow runs per day. */
          throughput: number;
          [key: string]: unknown;
        };
        /** Workflow trend metrics. */
        trends: {
          /** Trend for total workflow runs. */
          total_runs: number;
          /** Trend for failed workflow runs. */
          failed_runs: number;
          /** Trend for workflow success rate. */
          success_rate: number;
          /** Trend for workflow p95 duration. */
          p95_duration_secs: number;
          /** Trend for workflow median duration. */
          median_duration_secs: number;
          /** Trend for total credits used. */
          total_credits_used: number;
          /** Trend for mean time to recovery. */
          mttr: number;
          /** Trend for workflow throughput. */
          throughput: number;
          [key: string]: unknown;
        };
        /** Workflow names available for the project. */
        workflow_names: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get CircleCI Insights summary metrics for an organization. */
    "circleci.list_insights_summary": {
      input: {
        /**
         * Organization slug in the form `vcs-slug/org-name`.
         * @minLength 1
         */
        orgSlug: string;
        /** The reporting window used by CircleCI Insights. */
        reportingWindow?: "last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days";
      };
      output: {
        /** Organization-level summary data. */
        org_data: {
          /** Metrics aggregated for the organization. */
          metrics: {
            /** The total number of runs. */
            total_runs: number;
            /** The total run duration in seconds. */
            total_duration_secs: number;
            /** The total credits used. */
            total_credits_used: number;
            /** The success rate. */
            success_rate: number;
            /** The average number of runs per day. */
            throughput: number;
            [key: string]: unknown;
          };
          /** Trend metrics aggregated for the organization. */
          trends: {
            /** Trend for total runs. */
            total_runs: number;
            /** Trend for total duration in seconds. */
            total_duration_secs: number;
            /** Trend for total credits used. */
            total_credits_used: number;
            /** Trend for success rate. */
            success_rate: number;
            /** Trend for throughput. */
            throughput: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Project summary data across the organization. */
        org_project_data: Array<{
          /** The project name. */
          project_name: string;
          /** Project-level summary metrics. */
          metrics: {
            /** The total credits used by the project. */
            total_credits_used: number;
            /** The total duration in seconds for the project. */
            total_duration_secs: number;
            /** The total runs for the project. */
            total_runs: number;
            /** The project success rate. */
            success_rate: number;
            [key: string]: unknown;
          };
          /** Project-level trend metrics. */
          trends: {
            /** Trend for project credits used. */
            total_credits_used: number;
            /** Trend for project duration. */
            total_duration_secs: number;
            /** Trend for project runs. */
            total_runs: number;
            /** Trend for project success rate. */
            success_rate: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** All project names available in the organization, or null when unavailable. */
        all_projects: Array<string> | null;
        [key: string]: unknown;
      };
    };
    /** List CircleCI pipelines for a project. */
    "circleci.list_pipelines_for_project": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
        /**
         * The VCS branch name to filter by.
         * @minLength 1
         */
        branch?: string;
        /**
         * Pagination token returned by CircleCI.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The pipelines returned by CircleCI. */
        items: Array<{
          /**
           * The unique ID of the CircleCI pipeline.
           * @minLength 1
           */
          id: string;
          /** Errors attached to the pipeline. */
          errors: Array<{
            /** The pipeline error type. */
            type: string;
            /** The human-readable pipeline error message. */
            message: string;
            [key: string]: unknown;
          }>;
          /**
           * The CircleCI project slug for the pipeline.
           * @minLength 1
           */
          project_slug: string;
          /** The time when the pipeline was last updated. */
          updated_at?: string;
          /** The pipeline number. */
          number: number;
          /** Pipeline parameters returned by CircleCI. */
          trigger_parameters?: Record<string, unknown>;
          /** The current pipeline state reported by CircleCI. */
          state: "created" | "errored" | "setup-pending" | "setup" | "pending";
          /** The time when the pipeline was created. */
          created_at: string;
          /** Trigger metadata for the pipeline. */
          trigger?: {
            /** The trigger type. */
            type: string;
            /** The time when the trigger was received. */
            received_at: string;
            /** The actor that triggered the pipeline. */
            actor?: {
              /** The VCS login of the trigger actor. */
              login: string;
              /** URL to the actor avatar on the VCS. */
              avatar_url: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Version control metadata for the pipeline. */
          vcs?: {
            /** The VCS provider name. */
            provider_name: string;
            /** The origin repository URL for the trigger. */
            origin_repository_url?: string;
            /** The target repository URL for the pipeline. */
            target_repository_url: string;
            /** The branch used for the pipeline. */
            branch?: string;
            /** The code review ID, when present. */
            review_id?: string;
            /** The code review URL, when present. */
            review_url?: string;
            /** The VCS revision used for the pipeline. */
            revision: string | null;
            /** The tag used for the pipeline, when present. */
            tag?: string;
            /** The latest commit in the pipeline. */
            commit?: {
              /** The subject of the latest commit message. */
              subject: string | null;
              /** The body of the latest commit message. */
              body: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when there is no next page. */
        next_page_token: string | null;
        [key: string]: unknown;
      };
    };
    /** List masked CircleCI environment variables for a project. */
    "circleci.list_project_env_vars": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
      };
      output: {
        /** Environment variables returned by CircleCI. */
        items: Array<{
          /** The environment variable name. */
          name: string;
          /** The masked environment variable value returned by CircleCI. */
          value: string;
          /** The creation timestamp payload returned by CircleCI, when present. */
          "created-at"?: string;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when there is no next page. */
        next_page_token: string | null;
        [key: string]: unknown;
      };
    };
    /** List workflows for a CircleCI pipeline. */
    "circleci.list_workflows_by_pipeline": {
      input: {
        /**
         * The unique ID of the CircleCI pipeline.
         * @minLength 1
         */
        pipelineId: string;
        /**
         * Pagination token returned by CircleCI.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The workflows returned by CircleCI. */
        items: Array<{
          /**
           * The pipeline ID that owns the workflow.
           * @minLength 1
           */
          pipeline_id: string;
          /** The user ID that canceled the workflow. */
          canceled_by?: string;
          /** The unique ID of the workflow. */
          id: string;
          /** The workflow auto rerun number, when present. */
          auto_rerun_number?: number;
          /** The workflow name. */
          name: string;
          /**
           * The CircleCI project slug for the workflow.
           * @minLength 1
           */
          project_slug: string;
          /** The user ID associated with the workflow error. */
          errored_by?: string;
          /** Tag used by the workflow, when present. */
          tag?: string | null;
          /** The current workflow status reported by CircleCI. */
          status: "success" | "canceled" | "error" | "failed" | "failing" | "not_run" | "on_hold" | "running" | "unauthorized";
          /** The user ID that started the workflow. */
          started_by: string;
          /** The maximum number of auto reruns configured for the workflow. */
          max_auto_reruns?: number;
          /** The pipeline number that owns the workflow. */
          pipeline_number: number;
          /** The time when the workflow was created. */
          created_at: string;
          /** The time when the workflow stopped, or null. */
          stopped_at: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination token for the next page, or null when there is no next page. */
        next_page_token: string | null;
        [key: string]: unknown;
      };
    };
    /** Trigger a new CircleCI pipeline for a project. */
    "circleci.trigger_pipeline": {
      input: {
        /**
         * Project slug in the form `vcs-slug/org-name/repo-name`. GitHub App and GitLab projects may use an opaque CircleCI slug such as `circleci/<org-id>/<project-id>`.
         * @minLength 1
         */
        projectSlug: string;
        /**
         * The branch to trigger the pipeline on.
         * @minLength 1
         */
        branch?: string;
        /**
         * The tag to trigger the pipeline on.
         * @minLength 1
         */
        tag?: string;
        /** Pipeline parameters declared in `.circleci/config.yml`. */
        parameters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * The unique ID of the CircleCI pipeline.
         * @minLength 1
         */
        id: string;
        /** The current pipeline state reported by CircleCI. */
        state: "created" | "errored" | "setup-pending" | "setup" | "pending";
        /** The pipeline number. */
        number: number;
        /** The time when the pipeline was created. */
        created_at: string;
        [key: string]: unknown;
      };
    };
  }
}
