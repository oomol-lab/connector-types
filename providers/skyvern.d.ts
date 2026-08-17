import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel one active Skyvern task or workflow run. */
    "skyvern.cancel_run": {
      input: {
        /**
         * The task or workflow run identifier to cancel.
         * @minLength 1
         * @pattern \S
         */
        runId: string;
      };
      output: {
        /** The Skyvern run identifier sent for cancellation. */
        runId: string;
        /** Whether Skyvern accepted the cancellation request. */
        canceled: boolean;
      };
    };
    /** Get the current state, output, hosted files, screenshots, and recording URLs for one Skyvern run. */
    "skyvern.get_run": {
      input: {
        /**
         * The task or workflow run identifier.
         * @minLength 1
         * @pattern \S
         */
        runId: string;
      };
      output: {
        /** A normalized Skyvern run with stable lifecycle fields and provider-defined result data. */
        run: {
          /** The unique Skyvern task or workflow run identifier. */
          runId: string;
          /** The current lifecycle status of the run. */
          status: "created" | "queued" | "running" | "paused" | "timed_out" | "failed" | "terminated" | "completed" | "canceled";
          /** The Skyvern engine or workflow type used for this run. */
          runType: string;
          /** The provider-defined structured or textual run output. */
          output?: unknown;
          /** The reason the run failed or terminated. */
          failureReason?: string | null;
          /**
           * The timestamp when Skyvern created the run.
           * @format date-time
           */
          createdAt: string;
          /**
           * The timestamp when Skyvern last modified the run.
           * @format date-time
           */
          modifiedAt?: string;
          /**
           * The timestamp when execution started.
           * @format date-time
           */
          startedAt?: string | null;
          /**
           * The timestamp when execution finished.
           * @format date-time
           */
          finishedAt?: string | null;
          /**
           * The provider-hosted recording URL for the run.
           * @format uri
           */
          recordingUrl?: string | null;
          /** Provider-hosted screenshot URLs in reverse chronological order. */
          screenshotUrls?: Array<string>;
          /** Metadata and provider-hosted URLs for files downloaded during the run. */
          downloadedFiles?: Array<{
            /**
             * The provider-hosted URL used to access the downloaded file.
             * @format uri
             */
            url: string;
            [key: string]: unknown;
          }>;
          /**
           * The Skyvern application URL for viewing this run.
           * @format uri
           */
          appUrl?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Skyvern task and workflow runs with pagination and optional status, type, or text filters. */
    "skyvern.list_runs": {
      input: {
        /**
         * The one-based results page to retrieve.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * The number of runs to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The run statuses to include. */
        statuses?: Array<"created" | "queued" | "running" | "paused" | "timed_out" | "failed" | "terminated" | "completed" | "canceled">;
        /**
         * A case-insensitive substring to search for.
         * @minLength 3
         */
        searchKey?: string;
        /** The task or workflow run types to include. */
        runTypes?: Array<"task_v1" | "task_v2" | "task_v3" | "workflow_run" | "openai_cua" | "anthropic_cua" | "ui_tars" | "yutori_navigator">;
      };
      output: {
        /** The runs returned for this page. */
        runs: Array<{
          /** The unique Skyvern run identifier. */
          runId: string;
          /** The current lifecycle status reported by Skyvern. */
          status: string;
          /** The Skyvern task or workflow run type. */
          runType: string;
          /**
           * The timestamp when Skyvern created the run.
           * @format date-time
           */
          createdAt: string;
          /** The optional title of the run. */
          title?: string | null;
          /**
           * The timestamp when execution started.
           * @format date-time
           */
          startedAt?: string | null;
          /**
           * The timestamp when execution finished.
           * @format date-time
           */
          finishedAt?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Start a high-level Skyvern browser automation task and return a run ID that can be polled until completion. */
    "skyvern.run_task": {
      input: {
        /**
         * The goal or task Skyvern should accomplish.
         * @minLength 1
         * @pattern \S
         */
        prompt: string;
        /**
         * The optional starting URL for the browser task.
         * @format uri
         */
        url?: string;
        /** The Skyvern engine that should run the task. */
        engine?: "skyvern-1.0" | "skyvern-2.0" | "skyvern-3.0" | "openai-cua" | "anthropic-cua" | "ui-tars" | "yutori-navigator";
        /**
         * An optional title for identifying the task.
         * @minLength 1
         */
        title?: string;
        /** An optional JSON Schema or provider-supported extraction schema for consistent output. */
        dataExtractionSchema?: Record<string, unknown> | Array<unknown> | string;
        /** The maximum number of browser steps Skyvern may execute before failing the task. */
        maxSteps?: number;
        /**
         * The optional HTTPS endpoint Skyvern should notify after completion.
         * @format uri
         */
        webhookUrl?: string;
        /**
         * An existing Skyvern browser session identifier to continue using.
         * @minLength 1
         */
        browserSessionId?: string;
        /**
         * An existing Skyvern browser profile identifier to reuse.
         * @minLength 1
         */
        browserProfileId?: string;
        /** Whether to start with an empty browser and ignore saved browser memory. */
        startFreshBrowser?: boolean;
      };
      output: {
        /** A normalized Skyvern run with stable lifecycle fields and provider-defined result data. */
        run: {
          /** The unique Skyvern task or workflow run identifier. */
          runId: string;
          /** The current lifecycle status of the run. */
          status: "created" | "queued" | "running" | "paused" | "timed_out" | "failed" | "terminated" | "completed" | "canceled";
          /** The Skyvern engine or workflow type used for this run. */
          runType: string;
          /** The provider-defined structured or textual run output. */
          output?: unknown;
          /** The reason the run failed or terminated. */
          failureReason?: string | null;
          /**
           * The timestamp when Skyvern created the run.
           * @format date-time
           */
          createdAt: string;
          /**
           * The timestamp when Skyvern last modified the run.
           * @format date-time
           */
          modifiedAt?: string;
          /**
           * The timestamp when execution started.
           * @format date-time
           */
          startedAt?: string | null;
          /**
           * The timestamp when execution finished.
           * @format date-time
           */
          finishedAt?: string | null;
          /**
           * The provider-hosted recording URL for the run.
           * @format uri
           */
          recordingUrl?: string | null;
          /** Provider-hosted screenshot URLs in reverse chronological order. */
          screenshotUrls?: Array<string>;
          /** Metadata and provider-hosted URLs for files downloaded during the run. */
          downloadedFiles?: Array<{
            /**
             * The provider-hosted URL used to access the downloaded file.
             * @format uri
             */
            url: string;
            [key: string]: unknown;
          }>;
          /**
           * The Skyvern application URL for viewing this run.
           * @format uri
           */
          appUrl?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
