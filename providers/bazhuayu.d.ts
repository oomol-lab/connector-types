import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Copy a Bazhuayu task into a task group and return the new task ID. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.copy_task": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The destination Bazhuayu task group ID. Omit it to copy into the source task's current group.
         * @exclusiveMinimum 0
         */
        taskGroupId?: number;
      };
      output: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /** The copied task name, when returned by Bazhuayu. */
        taskName?: string;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Get API-addressable steps from Bazhuayu tasks so their action IDs can be used in parameter updates. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.get_task_actions": {
      input: {
        /**
         * The Bazhuayu task IDs.
         * @minItems 1
         */
        taskIds: Array<string>;
        /**
         * The task step types to return.
         * @minItems 1
         * @maxItems 3
         */
        actionTypes: Array<"LoopAction" | "NavigateAction" | "EnterTextAction">;
      };
      output: {
        /** The task step groups. */
        tasks: Array<{
          /**
           * The Bazhuayu task ID.
           * @minLength 1
           */
          taskId?: string;
          /** The matching task steps. */
          actions?: Array<{
            /** The task step type. */
            actionType?: string;
            /** The task step name. */
            name?: string;
            /** The task step ID used by update actions. */
            actionId?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Get a page of collected data from one Bazhuayu task execution batch. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.get_task_batch_data": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The Bazhuayu task execution batch number.
         * @minLength 1
         */
        lotNo: string;
        /** The data offset. Values less than or equal to 0 read from the beginning. */
        offset: number;
        /**
         * The number of records to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        size: number;
      };
      output: {
        /** The collected records. */
        records: Array<Record<string, unknown>>;
        /** The offset to use for the next page. */
        offset: number;
        /** The total number of records. */
        total: number;
        /** The number of records remaining after this page. */
        remaining: number;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Get a page of collected data from a Bazhuayu task using the offset returned by the previous page. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.get_task_data": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /** The data offset. Values less than or equal to 0 read from the beginning. */
        offset: number;
        /**
         * The number of records to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        size: number;
      };
      output: {
        /** The collected records. */
        records: Array<Record<string, unknown>>;
        /** The offset to use for the next page. */
        offset: number;
        /** The total number of records. */
        total: number;
        /** The number of records remaining after this page. */
        remaining: number;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Get account-wide counts for waiting, extracting, and finished Bazhuayu cloud tasks and subtasks. Requires an Enterprise plan. */
    "bazhuayu.get_task_stats": {
      input: Record<string, never>;
      output: {
        /** The account-wide task and subtask counts. */
        stats: {
          /** The number of extracting tasks. */
          extractingCount?: number;
          /** The number of waiting tasks. */
          waitingCount?: number;
          /** The number of finished tasks. */
          finishedCount?: number;
          /** The number of waiting subtasks. */
          waitingSubTaskCount?: number;
          /** The number of executing subtasks. */
          executingSubTaskCount?: number;
          [key: string]: unknown;
        };
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Get the latest execution status for Bazhuayu tasks. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.get_task_statuses": {
      input: {
        /**
         * The Bazhuayu task IDs.
         * @minItems 1
         */
        taskIds: Array<string>;
      };
      output: {
        /** The task status results. */
        tasks: Array<{
          /**
           * The Bazhuayu task ID.
           * @minLength 1
           */
          taskId?: string;
          /** The current task status. */
          status?: string;
          /** The number of records collected by this execution. */
          currentTotalExtractCount?: number;
          /** The task execution count. */
          executedTimes?: number;
          /** The number of subtasks. */
          subTaskCount?: number;
          /** The next scheduled execution time, when available. */
          nextExecuteTime?: string | null;
          /** The task start time, when available. */
          startExecuteTime?: string | null;
          /** The task execution start time, when available. */
          executingTime?: string | null;
          /** The task end time, when available. */
          endExecuteTime?: string | null;
          /** The task execution duration in seconds. */
          startExecuteTimeSeconds?: number;
          [key: string]: unknown;
        }>;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Get the next unexported records from a Bazhuayu task. Use this with mark_data_exported through only one sequential consumer per task because Bazhuayu acknowledgements are task-scoped. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.get_unexported_data": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The number of records to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        size: number;
      };
      output: {
        /** The unexported records. */
        records: Array<Record<string, unknown>>;
        /** The total number of unexported records. */
        total: number;
        /** The number of records returned by this request. */
        current: number;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** List the latest batch's Bazhuayu subtask statuses. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.list_subtask_statuses": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The number of subtasks to return per page.
         * @exclusiveMinimum 0
         */
        size: number;
      };
      output: {
        /** The subtask status results. */
        subtasks: Array<{
          /** The subtask ID. */
          subTaskId?: string;
          /** The current subtask status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** List the task groups available to the connected Bazhuayu account. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.list_task_groups": {
      input: Record<string, never>;
      output: {
        /** The available task groups. */
        taskGroups: Array<{
          /** The task group ID. */
          taskGroupId?: number;
          /** The task group name. */
          taskGroupName?: string;
          [key: string]: unknown;
        }>;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** List the Bazhuayu tasks in one task group. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.list_tasks": {
      input: {
        /**
         * The Bazhuayu task group ID.
         * @exclusiveMinimum 0
         */
        taskGroupId: number;
      };
      output: {
        /** The matching tasks. */
        tasks: Array<{
          /**
           * The Bazhuayu task ID.
           * @minLength 1
           */
          taskId?: string;
          /** The task name. */
          taskName?: string;
          [key: string]: unknown;
        }>;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Mark the current unexported data for a Bazhuayu task as exported. Call this only after a single sequential consumer has persisted the preceding get_unexported_data result. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.mark_data_exported": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Query Bazhuayu collection volume, execution, success-rate, and resource-usage metrics for the last three months. Requires a Flagship, Flagship+, Enterprise, or Team plan. */
    "bazhuayu.query_task_analytics": {
      input: {
        /**
         * The inclusive UTC start date in YYYY-MM-DD format.
         * @format date
         */
        start: string;
        /**
         * The inclusive UTC end date in YYYY-MM-DD format.
         * @format date
         */
        end: string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of analytics rows to return.
         * @minimum 1
         * @maximum 500
         * @default 20
         */
        pageSize?: number;
        /**
         * Optional task IDs to include.
         * @maxItems 100
         */
        taskIds?: Array<string>;
        /**
         * Optional team member names to include.
         * @maxItems 100
         */
        memberNames?: Array<string>;
        /** The collection method to include. */
        collectionMethod?: "Cloud" | "Local" | "All";
        /**
         * The time bucket used to aggregate analytics.
         * @default "Day"
         */
        timeGranularity?: "Day" | "Week" | "Month";
      };
      output: {
        /** The analytics rows. */
        items: Array<{
          /**
           * The Bazhuayu task ID.
           * @minLength 1
           */
          taskId?: string;
          /** The Bazhuayu user ID. */
          userId?: string;
          /** The task name, when available. */
          taskName?: string | null;
          /** The day, week, or month bucket key. */
          dayKey?: string;
          /** The week start date for weekly results. */
          weekStartDate?: string | null;
          /** The week end date for weekly results. */
          weekEndDate?: string | null;
          /** The collection method. */
          collectionMethod?: string;
          /** Provider-reported metrics for one task and period. */
          dataVolumeMetrics?: Record<string, unknown>;
          /** Provider-reported metrics for one task and period. */
          executionMetrics?: Record<string, unknown>;
          /** Provider-reported metrics for one task and period. */
          resourceUsageMetrics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching analytics rows. */
        total: number;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Start selected cloud subtasks for a Bazhuayu task. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.start_subtasks": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The Bazhuayu subtask IDs.
         * @minItems 1
         */
        subTaskIds: Array<string>;
      };
      output: {
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Start a Bazhuayu task on cloud workers and return its batch number. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.start_task": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The task execution batch number. */
        lotNo: string;
        /** The initial task execution status. */
        status: string;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Stop selected cloud subtasks for a Bazhuayu task. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.stop_subtasks": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The Bazhuayu subtask IDs.
         * @minItems 1
         */
        subTaskIds: Array<string>;
      };
      output: {
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Stop a running Bazhuayu cloud task. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.stop_task": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Replace or append the text or URL items used by one Bazhuayu loop step. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.update_loop_items": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The Bazhuayu loop step ID.
         * @minLength 1
         */
        actionId: string;
        /** The loop item type accepted by this endpoint. */
        loopType: "TextList" | "UrlList";
        /**
         * The replacement or appended loop items.
         * @minItems 1
         */
        loopItems: Array<string>;
        /** Whether to append the items instead of replacing the current list. */
        isAppend: boolean;
      };
      output: {
        /** The provider update result message. */
        message: string;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
    /** Update supported properties and loop items in a Bazhuayu task. Requires a Flagship+, Enterprise, or Team plan. */
    "bazhuayu.update_task_parameters": {
      input: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /** The task step property updates. */
        actions: Array<{
          /** The Bazhuayu task step type. */
          actionType: "LoopAction" | "NavigateAction" | "EnterTextAction";
          /**
           * The task step ID.
           * @minLength 1
           */
          actionId: string;
          /**
           * The properties to update.
           * @minItems 1
           */
          properties: Array<{
            /**
             * The Bazhuayu property name.
             * @minLength 1
             */
            name: string;
            /** The new property value. */
            value: string;
          }>;
        }>;
        /** The loop step updates. */
        loopItems: Array<{
          /**
           * The loop step ID.
           * @minLength 1
           */
          actionId: string;
          /** The loop item type. */
          loopType: "URLList" | "TextList";
          /**
           * The replacement or appended loop items.
           * @minItems 1
           */
          loopItems: Array<string>;
          /** Whether to append the items instead of replacing the current list. */
          isAppend: boolean;
        }>;
      };
      output: {
        /**
         * The Bazhuayu task ID.
         * @minLength 1
         */
        taskId: string;
        /** The updated task actions and loop items. */
        updatedParameters: Record<string, unknown>;
        /** The Bazhuayu request ID used for support and troubleshooting. */
        requestId: string;
      };
    };
  }
}
