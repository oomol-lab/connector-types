import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel an in-progress Trigger.dev run. */
    "trigger_dev.cancel_run": {
      input: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        runId: string;
      };
      output: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Retrieve a Trigger.dev run by ID. */
    "trigger_dev.get_run": {
      input: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        runId: string;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve the execution result for a completed Trigger.dev run. */
    "trigger_dev.get_run_result": {
      input: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        runId: string;
      };
      output: Record<string, unknown>;
    };
    /** List Trigger.dev runs with optional status, task, version, and time filters. */
    "trigger_dev.list_runs": {
      input: {
        /**
         * Number of runs per page.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Run ID to start the next page after.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * Run ID to start the previous page before.
         * @minLength 1
         */
        pageBefore?: string;
        /**
         * Statuses to include in the run list.
         * @minItems 1
         */
        statuses?: Array<"PENDING_VERSION" | "QUEUED" | "EXECUTING" | "REATTEMPTING" | "FROZEN" | "COMPLETED" | "CANCELED" | "FAILED" | "CRASHED" | "INTERRUPTED" | "SYSTEM_FAILURE">;
        /**
         * Task identifiers to include in the run list.
         * @minItems 1
         */
        taskIdentifiers?: Array<string>;
        /**
         * Worker versions to include in the run list.
         * @minItems 1
         */
        versions?: Array<string>;
        /**
         * Only include runs created at or after this time.
         * @format date-time
         */
        createdFrom?: string;
        /**
         * Only include runs created at or before this time.
         * @format date-time
         */
        createdTo?: string;
        /**
         * Relative created-at period accepted by Trigger.dev, such as 1d.
         * @minLength 1
         */
        createdPeriod?: string;
        /**
         * Bulk action ID to filter by.
         * @minLength 1
         */
        bulkAction?: string;
        /**
         * Schedule ID to filter by.
         * @minLength 1
         */
        schedule?: string;
        /** Whether to include only test or non-test runs. */
        isTest?: boolean;
      };
      output: {
        /** Runs returned by Trigger.dev. */
        runs: Array<Record<string, unknown>>;
        /** Cursor pagination metadata returned by Trigger.dev. */
        pagination: Record<string, unknown>;
      };
    };
    /** Replay a Trigger.dev run with the same payload and options. */
    "trigger_dev.replay_run": {
      input: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        runId: string;
      };
      output: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Trigger a Trigger.dev task by task identifier. */
    "trigger_dev.trigger_task": {
      input: {
        /**
         * The Trigger.dev task identifier to execute.
         * @minLength 1
         */
        taskIdentifier: string;
        /** Any JSON value accepted by Trigger.dev. */
        payload?: unknown;
        /** Any JSON value accepted by Trigger.dev. */
        context?: unknown;
        /** Trigger.dev run options for a task trigger request. */
        options?: {
          /** Queue options for the triggered run. */
          queue?: {
            /**
             * Queue name.
             * @minLength 1
             */
            name: string;
            /**
             * Maximum concurrent executions for the queue.
             * @minimum 0
             * @maximum 1000
             */
            concurrencyLimit?: number;
          };
          /**
           * Concurrency scope key for this run.
           * @minLength 1
           */
          concurrencyKey?: string;
          /**
           * Idempotency key used to deduplicate triggered runs.
           * @minLength 1
           */
          idempotencyKey?: string;
          /** Time-to-live for the queued run. */
          ttl?: string | number;
          /**
           * Delay before the task executes, such as 1h or an ISO date-time.
           * @minLength 1
           */
          delay?: string;
          /**
           * Tags to attach to the run.
           * @minItems 1
           * @maxItems 10
           */
          tags?: Array<string>;
          /** Machine preset to use for this run. */
          machine?: "micro" | "small-1x" | "small-2x" | "medium-1x" | "medium-2x" | "large-1x" | "large-2x";
        };
      };
      output: {
        /**
         * The Trigger.dev run ID, prefixed with run_.
         * @minLength 1
         */
        id: string;
      };
    };
  }
}
