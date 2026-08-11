import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for the Vida account authenticated by the current API token. */
    "vida.get_account": {
      input: {
        /** A child account identifier used by partner or reseller tokens. */
        targetAccountId?: number;
      };
      output: {
        /** The Vida account identifier. */
        id?: number;
        /** The username associated with the Vida account. */
        username?: string;
        /** Additional account details returned by Vida. */
        details?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get current daily Vida call, text, and task usage counts. */
    "vida.get_daily_counts": {
      input: {
        /** A child account identifier used by partner or reseller tokens. */
        targetAccountId?: number;
      };
      output: {
        /** Whether Vida reports that the request succeeded. */
        success?: boolean;
        /** The current daily usage counters. */
        counts?: {
          /** The number of calls counted today. */
          calls?: number;
          /** The number of text messages counted today. */
          texts?: number;
          /** The number of tasks counted today. */
          tasks?: number;
          /** The calendar date for these usage counters. */
          date?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get one Vida task by its identifier. */
    "vida.get_task": {
      input: {
        /**
         * The Vida task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A child account identifier used by partner or reseller tokens. */
        targetAccountId?: number;
      };
      output: {
        /** Whether Vida reports that the request succeeded. */
        success?: boolean;
        /** One task returned by Vida. */
        task?: {
          /** The task identifier. */
          id?: string;
          /** The task type, such as call, text, email, or ping. */
          type?: string;
          /** The current task state. */
          state?: string;
          /** The destination targeted by the task. */
          target?: string;
          /** The Unix timestamp when the task was created. */
          createdAt?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Vida task counts grouped by state. */
    "vida.get_task_statistics": {
      input: {
        /** A child account identifier used by partner or reseller tokens. */
        targetAccountId?: number;
      };
      output: {
        /** Whether Vida reports that the request succeeded. */
        success?: boolean;
        /** The total number of tasks counted. */
        total?: number;
        /** Task counts keyed by Vida task state. */
        byState?: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** List Vida tasks with optional pagination, time, sorting, and correlation filters. */
    "vida.list_tasks": {
      input: {
        /**
         * The maximum number of tasks to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based number of tasks to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Only return tasks updated at or after this Unix timestamp.
         * @minimum 0
         */
        since?: number;
        /**
         * Only return tasks updated at or before this Unix timestamp.
         * @minimum 0
         */
        until?: number;
        /** The task field used for sorting. */
        sort?: "createdAt" | "updatedAt" | "scheduledFor";
        /** The task sort direction. */
        order?: "asc" | "desc";
        /**
         * An exact caller-defined task correlation identifier.
         * @minLength 1
         */
        externalTaskId?: string;
        /** A child account identifier used by partner or reseller tokens. */
        targetAccountId?: number;
      };
      output: {
        /** Whether Vida reports that the request succeeded. */
        success?: boolean;
        /** The total number of matching tasks. */
        total?: number;
        /** The tasks returned by Vida. */
        tasks?: Array<{
          /** The task identifier. */
          id?: string;
          /** The task type, such as call, text, email, or ping. */
          type?: string;
          /** The current task state. */
          state?: string;
          /** The destination targeted by the task. */
          target?: string;
          /** The Unix timestamp when the task was created. */
          createdAt?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
