import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Request cancellation of a pending or running task run, with an optional audit reason. */
    "komos.cancel_task_run": {
      input: {
        /**
         * UUID of the Komos task run.
         * @format uuid
         */
        runId: string;
        /**
         * Cancellation reason recorded for auditing.
         * @maxLength 1024
         */
        reason?: string;
      };
      output: {
        /** Run ID. */
        id: string;
        /** Run status: PENDING, RUNNING, COMPLETED, FAILED or CANCELLED. */
        status: string;
        /** Run creation, start and finish timestamps. */
        timestamps: Record<string, unknown>;
        /** Input values used by the task run. */
        inputs: Record<string, unknown>;
        /** Output values produced by the task run. */
        outputs: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a saved task including its definition and execution plan summary. */
    "komos.get_task": {
      input: {
        /**
         * UUID of the saved Komos task.
         * @format uuid
         */
        taskId: string;
      };
      output: {
        /** Saved task with its input and output definitions. */
        task: {
          /** Task ID. */
          id: string;
          /** Task name. */
          name: string;
          /** Task preparation status. */
          status: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest task run status and outputs, including terminal failures or cancellation. */
    "komos.get_task_run": {
      input: {
        /**
         * UUID of the Komos task run.
         * @format uuid
         */
        runId: string;
      };
      output: {
        /** Run ID. */
        id: string;
        /** Run status: PENDING, RUNNING, COMPLETED, FAILED or CANCELLED. */
        status: string;
        /** Run creation, start and finish timestamps. */
        timestamps: Record<string, unknown>;
        /** Input values used by the task run. */
        inputs: Record<string, unknown>;
        /** Output values produced by the task run. */
        outputs: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve ordered execution log entries for a task run. */
    "komos.get_task_run_logs": {
      input: {
        /**
         * UUID of the Komos task run.
         * @format uuid
         */
        runId: string;
      };
      output: {
        /** Run ID for these logs. */
        runId: string;
        /** Ordered execution log entries. */
        logEntries: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List runs across tasks with pagination, status and creation time filters. By default Komos returns runs from the last seven days. */
    "komos.list_runs": {
      input: {
        /**
         * Number of results per page; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of results to skip; defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * UUID of the saved Komos task.
         * @format uuid
         */
        taskId?: string;
        /** Run status to match. */
        status?: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /**
         * Return runs created after this ISO 8601 timestamp; defaults to seven days ago.
         * @format date-time
         */
        since?: string;
        /**
         * Return runs created before this ISO 8601 timestamp.
         * @format date-time
         */
        until?: string;
      };
      output: {
        /** Runs in this page. */
        runs: Array<{
          /** Run ID. */
          id: string;
          /** Run status: PENDING, RUNNING, COMPLETED, FAILED or CANCELLED. */
          status: string;
          /** Run creation, start and finish timestamps. */
          timestamps: Record<string, unknown>;
          /** Input values used by the task run. */
          inputs: Record<string, unknown>;
          /** Output values produced by the task run. */
          outputs: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Total number of matching results. */
        total: number;
        /** Page size returned by Komos. */
        limit: number;
        /** Offset returned by Komos. */
        offset: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve the 50 most recent runs for one saved task. This endpoint does not support pagination. */
    "komos.list_task_runs": {
      input: {
        /**
         * UUID of the saved Komos task.
         * @format uuid
         */
        taskId: string;
      };
      output: {
        /** Up to 50 recent runs. */
        runs: Array<{
          /** Run ID. */
          id: string;
          /** Run status: PENDING, RUNNING, COMPLETED, FAILED or CANCELLED. */
          status: string;
          /** Run creation, start and finish timestamps. */
          timestamps: Record<string, unknown>;
          /** Input values used by the task run. */
          inputs: Record<string, unknown>;
          /** Output values produced by the task run. */
          outputs: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List saved tasks with pagination, name search and preparation status filters. */
    "komos.list_tasks": {
      input: {
        /**
         * Number of results per page; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of results to skip; defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /** Case-insensitive substring of the task name. */
        search?: string;
        /** Task preparation status to match. */
        status?: "DRAFT" | "PROCESSING" | "NEEDS_REVIEW" | "READY" | "ERROR";
      };
      output: {
        /** Tasks in this page. */
        tasks: Array<{
          /** Task ID. */
          id: string;
          /** Task name. */
          name: string;
          /** Task preparation status. */
          status: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching results. */
        total: number;
        /** Page size returned by Komos. */
        limit: number;
        /** Offset returned by Komos. */
        offset: number;
        [key: string]: unknown;
      };
    };
    /** Queue a saved task with optional input overrides and an idempotency key. Wait for get_task_run to obtain final outputs. */
    "komos.queue_task_run": {
      input: {
        /**
         * UUID of the saved Komos task.
         * @format uuid
         */
        taskId: string;
        /** Input overrides; omitted values use the saved task defaults. */
        inputs?: Record<string, unknown>;
        /** Idempotency key unique per task and organization; reuse it to avoid duplicate runs. */
        clientRequestId?: string;
      };
      output: {
        /** Run ID. */
        id: string;
        /** Run status: PENDING, RUNNING, COMPLETED, FAILED or CANCELLED. */
        status: string;
        /** Run creation, start and finish timestamps. */
        timestamps: Record<string, unknown>;
        /** Input values used by the task run. */
        inputs: Record<string, unknown>;
        /** Output values produced by the task run. */
        outputs: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
