import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Activate or publish an n8n workflow. */
    "n8n.activate_workflow": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The specific workflow version ID to activate.
         * @minLength 1
         */
        versionId?: string;
        /**
         * An optional name for the workflow version.
         * @minLength 1
         */
        name?: string;
        /**
         * An optional description for the workflow version.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The workflow name.
         * @minLength 1
         */
        name: string;
        /** Whether the workflow is active. */
        active?: boolean;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        /** Whether the workflow is archived. */
        isArchived?: boolean;
        /**
         * The current workflow version identifier.
         * @minLength 1
         */
        versionId?: string;
        /** The number of active trigger nodes in the workflow. */
        triggerCount?: number;
        /** Workflow nodes returned by n8n. */
        nodes: Array<Record<string, unknown>>;
        /** Workflow connections keyed by node name. */
        connections: Record<string, unknown>;
        /** Workflow settings returned by n8n. */
        settings: Record<string, unknown>;
        /** Tags attached to the workflow. */
        tags?: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Archive an n8n workflow. */
    "n8n.archive_workflow": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The workflow name.
         * @minLength 1
         */
        name: string;
        /** Whether the workflow is active. */
        active?: boolean;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        /** Whether the workflow is archived. */
        isArchived?: boolean;
        /**
         * The current workflow version identifier.
         * @minLength 1
         */
        versionId?: string;
        /** The number of active trigger nodes in the workflow. */
        triggerCount?: number;
        /** Workflow nodes returned by n8n. */
        nodes: Array<Record<string, unknown>>;
        /** Workflow connections keyed by node name. */
        connections: Record<string, unknown>;
        /** Workflow settings returned by n8n. */
        settings: Record<string, unknown>;
        /** Tags attached to the workflow. */
        tags?: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create an n8n data table with columns. */
    "n8n.create_data_table": {
      input: {
        /**
         * The data table name.
         * @minLength 1
         * @maxLength 128
         */
        name: string;
        /**
         * Columns to create in the table.
         * @minItems 1
         */
        columns: Array<{
          /**
           * The data table column name.
           * @minLength 1
           */
          name: string;
          /** The n8n data table column type accepted when creating a table. */
          type: "string" | "number" | "boolean" | "date" | "json";
        }>;
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The data table name.
         * @minLength 1
         */
        name: string;
        /** Columns in the data table. */
        columns: Array<{
          /**
           * The n8n data table column identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The data table column name.
           * @minLength 1
           */
          name: string;
          /**
           * The n8n data table identifier.
           * @minLength 1
           */
          dataTableId: string;
          /** The n8n data table column type. */
          type: "string" | "number" | "boolean" | "date";
          /** The zero-based column position. */
          index: number;
          [key: string]: unknown;
        }>;
        /** The project identifier that owns the data table. */
        projectId: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Add a column to an n8n data table. */
    "n8n.create_data_table_column": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /**
         * The data table column name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z][a-zA-Z0-9_]*$
         */
        name: string;
        /** The n8n data table column type. */
        type: "string" | "number" | "boolean" | "date";
        /**
         * The zero-based column position.
         * @minimum 0
         */
        index?: number;
      };
      output: {
        /**
         * The n8n data table column identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The data table column name.
         * @minLength 1
         */
        name: string;
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /** The n8n data table column type. */
        type: "string" | "number" | "boolean" | "date";
        /** The zero-based column position. */
        index: number;
        [key: string]: unknown;
      };
    };
    /** Create an n8n tag. */
    "n8n.create_tag": {
      input: {
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
      };
    };
    /** Create an n8n variable for workflow runtime configuration. */
    "n8n.create_variable": {
      input: {
        /**
         * The variable key.
         * @minLength 1
         */
        key: string;
        /** The variable value. */
        value: string;
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /**
         * The n8n variable identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The variable key.
         * @minLength 1
         */
        key: string;
        /** The variable value. */
        value: string;
        /** The variable type returned by n8n. */
        type?: string;
        /** The project identifier that owns the variable. */
        projectId?: string | null;
        /** The project that owns the variable when returned by n8n. */
        project?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Deactivate an n8n workflow. */
    "n8n.deactivate_workflow": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The workflow name.
         * @minLength 1
         */
        name: string;
        /** Whether the workflow is active. */
        active?: boolean;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        /** Whether the workflow is archived. */
        isArchived?: boolean;
        /**
         * The current workflow version identifier.
         * @minLength 1
         */
        versionId?: string;
        /** The number of active trigger nodes in the workflow. */
        triggerCount?: number;
        /** Workflow nodes returned by n8n. */
        nodes: Array<Record<string, unknown>>;
        /** Workflow connections keyed by node name. */
        connections: Record<string, unknown>;
        /** Workflow settings returned by n8n. */
        settings: Record<string, unknown>;
        /** Tags attached to the workflow. */
        tags?: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete an n8n data table. */
    "n8n.delete_data_table": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
      };
      output: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete a column from an n8n data table. */
    "n8n.delete_data_table_column": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /**
         * The n8n data table column identifier.
         * @minLength 1
         */
        columnId: string;
      };
      output: {
        /**
         * The n8n data table column identifier.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete an n8n tag. */
    "n8n.delete_tag": {
      input: {
        /**
         * The n8n tag identifier.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
      };
    };
    /** Delete an n8n variable. */
    "n8n.delete_variable": {
      input: {
        /**
         * The n8n variable identifier.
         * @minLength 1
         */
        variableId: string;
      };
      output: {
        /**
         * The n8n variable identifier.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Retrieve one n8n data table by ID. */
    "n8n.get_data_table": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
      };
      output: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The data table name.
         * @minLength 1
         */
        name: string;
        /** Columns in the data table. */
        columns: Array<{
          /**
           * The n8n data table column identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The data table column name.
           * @minLength 1
           */
          name: string;
          /**
           * The n8n data table identifier.
           * @minLength 1
           */
          dataTableId: string;
          /** The n8n data table column type. */
          type: "string" | "number" | "boolean" | "date";
          /** The zero-based column position. */
          index: number;
          [key: string]: unknown;
        }>;
        /** The project identifier that owns the data table. */
        projectId: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one n8n execution by ID. */
    "n8n.get_execution": {
      input: {
        /** The n8n execution identifier. */
        executionId: number;
        /** Whether to include detailed execution data. */
        includeData?: boolean;
        /** Whether to redact execution data in the response. */
        redactExecutionData?: boolean;
      };
      output: {
        /** The n8n execution identifier. */
        id: number;
        /** Detailed execution data included when requested. */
        data?: Record<string, unknown>;
        /** Whether the execution has finished. */
        finished?: boolean;
        /** An n8n execution mode. */
        mode?: "cli" | "error" | "integrated" | "internal" | "manual" | "retry" | "trigger" | "webhook" | "evaluation" | "chat";
        /** The original execution ID when this execution is a retry. */
        retryOf?: number | null;
        /** The successful retry execution ID when returned by n8n. */
        retrySuccessId?: number | null;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        startedAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        stoppedAt?: string | null;
        /** The workflow ID associated with the execution. */
        workflowId?: number | string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        waitTill?: string | null;
        /** Custom execution data returned by n8n. */
        customData?: Record<string, unknown>;
        /** An n8n execution status. */
        status?: "canceled" | "crashed" | "error" | "new" | "running" | "success" | "unknown" | "waiting";
        [key: string]: unknown;
      };
    };
    /** Get annotation tags attached to an n8n execution. */
    "n8n.get_execution_tags": {
      input: {
        /** The n8n execution identifier. */
        executionId: number;
      };
      output: {
        /** Tags attached to the resource after the operation. */
        tags: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
      };
    };
    /** Retrieve n8n insights summary metrics for a time range and project. */
    "n8n.get_insights_summary": {
      input: {
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        startDate?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        endDate?: string;
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** An n8n insight metric value. */
        total: {
          /** The metric value. */
          value: number;
          /** The metric deviation compared to the previous period. */
          deviation: number | null;
          /** The metric unit returned by n8n. */
          unit: string;
        };
        /** An n8n insight metric value. */
        failed: {
          /** The metric value. */
          value: number;
          /** The metric deviation compared to the previous period. */
          deviation: number | null;
          /** The metric unit returned by n8n. */
          unit: string;
        };
        /** An n8n insight metric value. */
        failureRate: {
          /** The metric value. */
          value: number;
          /** The metric deviation compared to the previous period. */
          deviation: number | null;
          /** The metric unit returned by n8n. */
          unit: string;
        };
        /** An n8n insight metric value. */
        timeSaved: {
          /** The metric value. */
          value: number;
          /** The metric deviation compared to the previous period. */
          deviation: number | null;
          /** The metric unit returned by n8n. */
          unit: string;
        };
        /** An n8n insight metric value. */
        averageRunTime: {
          /** The metric value. */
          value: number;
          /** The metric deviation compared to the previous period. */
          deviation: number | null;
          /** The metric unit returned by n8n. */
          unit: string;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one n8n workflow by ID. */
    "n8n.get_workflow": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
        /** Avoid retrieving pinned data. */
        excludePinnedData?: boolean;
      };
      output: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The workflow name.
         * @minLength 1
         */
        name: string;
        /** Whether the workflow is active. */
        active?: boolean;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        /** Whether the workflow is archived. */
        isArchived?: boolean;
        /**
         * The current workflow version identifier.
         * @minLength 1
         */
        versionId?: string;
        /** The number of active trigger nodes in the workflow. */
        triggerCount?: number;
        /** Workflow nodes returned by n8n. */
        nodes: Array<Record<string, unknown>>;
        /** Workflow connections keyed by node name. */
        connections: Record<string, unknown>;
        /** Workflow settings returned by n8n. */
        settings: Record<string, unknown>;
        /** Tags attached to the workflow. */
        tags?: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get tags attached to an n8n workflow. */
    "n8n.get_workflow_tags": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /** Tags attached to the resource after the operation. */
        tags: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
      };
    };
    /** Insert rows into an n8n data table. */
    "n8n.insert_data_table_rows": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /**
         * Rows to insert.
         * @minItems 1
         */
        data: Array<Record<string, unknown>>;
        /** How much data n8n should return after insertion. */
        returnType?: "count" | "id" | "all";
      };
      output: {
        /** The number of inserted rows. */
        count: number;
      } | {
        /** The row identifier generated by n8n. */
        id?: number;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      } | Array<unknown> | boolean;
    };
    /** List columns in an n8n data table. */
    "n8n.list_data_table_columns": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
      };
      output: Array<{
        /**
         * The n8n data table column identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The data table column name.
         * @minLength 1
         */
        name: string;
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /** The n8n data table column type. */
        type: "string" | "number" | "boolean" | "date";
        /** The zero-based column position. */
        index: number;
        [key: string]: unknown;
      }>;
    };
    /** List rows in an n8n data table with filters, search, and sorting. */
    "n8n.list_data_table_rows": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /** Structured n8n data table filter conditions. */
        filter?: {
          /** Whether all filters or any filter must match. */
          type?: "and" | "or";
          /**
           * Filter conditions.
           * @minItems 1
           */
          filters: Array<{
            /**
             * The column name to filter.
             * @minLength 1
             */
            columnName: string;
            /** The filter comparison condition. */
            condition: "eq" | "neq" | "like" | "ilike" | "gt" | "gte" | "lt" | "lte";
            /** The value to compare against. */
            value: unknown;
          }>;
        };
        /**
         * Sort format such as columnName:asc or columnName:desc.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * Search text across string columns.
         * @minLength 1
         */
        search?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The cursor returned by a previous n8n list response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Rows returned for the requested page. */
        data: Array<{
          /** The row identifier generated by n8n. */
          id?: number;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page when present. */
        nextCursor: string | null;
      };
    };
    /** List n8n data tables with optional filters and cursor pagination. */
    "n8n.list_data_tables": {
      input: {
        /** Filter conditions accepted by n8n. */
        filter?: Record<string, unknown>;
        /**
         * Sort format such as field:asc or field:desc.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The cursor returned by a previous n8n list response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Data tables returned for the requested page. */
        data: Array<{
          /**
           * The n8n data table identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The data table name.
           * @minLength 1
           */
          name: string;
          /** Columns in the data table. */
          columns: Array<{
            /**
             * The n8n data table column identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The data table column name.
             * @minLength 1
             */
            name: string;
            /**
             * The n8n data table identifier.
             * @minLength 1
             */
            dataTableId: string;
            /** The n8n data table column type. */
            type: "string" | "number" | "boolean" | "date";
            /** The zero-based column position. */
            index: number;
            [key: string]: unknown;
          }>;
          /** The project identifier that owns the data table. */
          projectId: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page when present. */
        nextCursor: string | null;
      };
    };
    /** List n8n executions with optional filters and cursor pagination. */
    "n8n.list_executions": {
      input: {
        /** Whether to include detailed execution data. */
        includeData?: boolean;
        /** Whether to redact execution data in the response. */
        redactExecutionData?: boolean;
        /** An n8n execution status. */
        status?: "canceled" | "crashed" | "error" | "new" | "running" | "success" | "unknown" | "waiting";
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        workflowId?: string;
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The cursor returned by a previous n8n list response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Executions returned for the requested page. */
        data: Array<{
          /** The n8n execution identifier. */
          id: number;
          /** Detailed execution data included when requested. */
          data?: Record<string, unknown>;
          /** Whether the execution has finished. */
          finished?: boolean;
          /** An n8n execution mode. */
          mode?: "cli" | "error" | "integrated" | "internal" | "manual" | "retry" | "trigger" | "webhook" | "evaluation" | "chat";
          /** The original execution ID when this execution is a retry. */
          retryOf?: number | null;
          /** The successful retry execution ID when returned by n8n. */
          retrySuccessId?: number | null;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          startedAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          stoppedAt?: string | null;
          /** The workflow ID associated with the execution. */
          workflowId?: number | string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          waitTill?: string | null;
          /** Custom execution data returned by n8n. */
          customData?: Record<string, unknown>;
          /** An n8n execution status. */
          status?: "canceled" | "crashed" | "error" | "new" | "running" | "success" | "unknown" | "waiting";
          [key: string]: unknown;
        }>;
        /** The cursor for the next page when present. */
        nextCursor: string | null;
      };
    };
    /** List n8n tags with cursor pagination. */
    "n8n.list_tags": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The cursor returned by a previous n8n list response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Tags returned for the requested page. */
        data: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
        /** The cursor for the next page when present. */
        nextCursor: string | null;
      };
    };
    /** List n8n variables with optional filters and cursor pagination. */
    "n8n.list_variables": {
      input: {
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        projectId?: string;
        /** Filter variables by state. */
        state?: "empty";
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The cursor returned by a previous n8n list response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Variables returned for the requested page. */
        data: Array<{
          /**
           * The n8n variable identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The variable key.
           * @minLength 1
           */
          key: string;
          /** The variable value. */
          value: string;
          /** The variable type returned by n8n. */
          type?: string;
          /** The project identifier that owns the variable. */
          projectId?: string | null;
          /** The project that owns the variable when returned by n8n. */
          project?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page when present. */
        nextCursor: string | null;
      };
    };
    /** List n8n workflows with optional filters and cursor pagination. */
    "n8n.list_workflows": {
      input: {
        /** Filter workflows by active state. */
        active?: boolean;
        /**
         * Filter workflows by a comma-separated set of tag names.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Filter workflows by name.
         * @minLength 1
         */
        name?: string;
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        projectId?: string;
        /** Avoid retrieving pinned data. */
        excludePinnedData?: boolean;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The cursor returned by a previous n8n list response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Workflows returned for the requested page. */
        data: Array<{
          /**
           * The n8n workflow identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workflow name.
           * @minLength 1
           */
          name: string;
          /** Whether the workflow is active. */
          active?: boolean;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
          /** Whether the workflow is archived. */
          isArchived?: boolean;
          /**
           * The current workflow version identifier.
           * @minLength 1
           */
          versionId?: string;
          /** The number of active trigger nodes in the workflow. */
          triggerCount?: number;
          /** Workflow nodes returned by n8n. */
          nodes: Array<Record<string, unknown>>;
          /** Workflow connections keyed by node name. */
          connections: Record<string, unknown>;
          /** Workflow settings returned by n8n. */
          settings: Record<string, unknown>;
          /** Tags attached to the workflow. */
          tags?: Array<{
            /**
             * An n8n resource identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The tag name.
             * @minLength 1
             */
            name: string;
            /**
             * An ISO 8601 timestamp returned by n8n.
             * @format date-time
             */
            createdAt?: string;
            /**
             * An ISO 8601 timestamp returned by n8n.
             * @format date-time
             */
            updatedAt?: string;
          }>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page when present. */
        nextCursor: string | null;
      };
    };
    /** Retry one n8n execution. */
    "n8n.retry_execution": {
      input: {
        /** The n8n execution identifier. */
        executionId: number;
        /** Whether to retry with the currently saved workflow instead of the workflow saved at execution time. */
        loadWorkflow?: boolean;
      };
      output: {
        /** The n8n execution identifier. */
        id: number;
        /** Detailed execution data included when requested. */
        data?: Record<string, unknown>;
        /** Whether the execution has finished. */
        finished?: boolean;
        /** An n8n execution mode. */
        mode?: "cli" | "error" | "integrated" | "internal" | "manual" | "retry" | "trigger" | "webhook" | "evaluation" | "chat";
        /** The original execution ID when this execution is a retry. */
        retryOf?: number | null;
        /** The successful retry execution ID when returned by n8n. */
        retrySuccessId?: number | null;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        startedAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        stoppedAt?: string | null;
        /** The workflow ID associated with the execution. */
        workflowId?: number | string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        waitTill?: string | null;
        /** Custom execution data returned by n8n. */
        customData?: Record<string, unknown>;
        /** An n8n execution status. */
        status?: "canceled" | "crashed" | "error" | "new" | "running" | "success" | "unknown" | "waiting";
        [key: string]: unknown;
      };
    };
    /** Stop one running n8n execution. */
    "n8n.stop_execution": {
      input: {
        /** The n8n execution identifier. */
        executionId: number;
      };
      output: {
        /** The n8n execution identifier. */
        id: number;
        /** Detailed execution data included when requested. */
        data?: Record<string, unknown>;
        /** Whether the execution has finished. */
        finished?: boolean;
        /** An n8n execution mode. */
        mode?: "cli" | "error" | "integrated" | "internal" | "manual" | "retry" | "trigger" | "webhook" | "evaluation" | "chat";
        /** The original execution ID when this execution is a retry. */
        retryOf?: number | null;
        /** The successful retry execution ID when returned by n8n. */
        retrySuccessId?: number | null;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        startedAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        stoppedAt?: string | null;
        /** The workflow ID associated with the execution. */
        workflowId?: number | string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        waitTill?: string | null;
        /** Custom execution data returned by n8n. */
        customData?: Record<string, unknown>;
        /** An n8n execution status. */
        status?: "canceled" | "crashed" | "error" | "new" | "running" | "success" | "unknown" | "waiting";
        [key: string]: unknown;
      };
    };
    /** Unarchive an n8n workflow. */
    "n8n.unarchive_workflow": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The workflow name.
         * @minLength 1
         */
        name: string;
        /** Whether the workflow is active. */
        active?: boolean;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        /** Whether the workflow is archived. */
        isArchived?: boolean;
        /**
         * The current workflow version identifier.
         * @minLength 1
         */
        versionId?: string;
        /** The number of active trigger nodes in the workflow. */
        triggerCount?: number;
        /** Workflow nodes returned by n8n. */
        nodes: Array<Record<string, unknown>>;
        /** Workflow connections keyed by node name. */
        connections: Record<string, unknown>;
        /** Workflow settings returned by n8n. */
        settings: Record<string, unknown>;
        /** Tags attached to the workflow. */
        tags?: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Rename an n8n data table. */
    "n8n.update_data_table": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /**
         * The new data table name.
         * @minLength 1
         * @maxLength 128
         */
        name: string;
      };
      output: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The data table name.
         * @minLength 1
         */
        name: string;
        /** Columns in the data table. */
        columns: Array<{
          /**
           * The n8n data table column identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The data table column name.
           * @minLength 1
           */
          name: string;
          /**
           * The n8n data table identifier.
           * @minLength 1
           */
          dataTableId: string;
          /** The n8n data table column type. */
          type: "string" | "number" | "boolean" | "date";
          /** The zero-based column position. */
          index: number;
          [key: string]: unknown;
        }>;
        /** The project identifier that owns the data table. */
        projectId: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Rename or reorder an n8n data table column. */
    "n8n.update_data_table_column": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /**
         * The n8n data table column identifier.
         * @minLength 1
         */
        columnId: string;
        /**
         * The data table column name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z][a-zA-Z0-9_]*$
         */
        name?: string;
        /**
         * The new zero-based column position.
         * @minimum 0
         */
        index?: number;
      };
      output: {
        /**
         * The n8n data table column identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The data table column name.
         * @minLength 1
         */
        name: string;
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /** The n8n data table column type. */
        type: "string" | "number" | "boolean" | "date";
        /** The zero-based column position. */
        index: number;
        [key: string]: unknown;
      };
    };
    /** Update rows in an n8n data table by filter. */
    "n8n.update_data_table_rows": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /** Structured n8n data table filter conditions. */
        filter: {
          /** Whether all filters or any filter must match. */
          type?: "and" | "or";
          /**
           * Filter conditions.
           * @minItems 1
           */
          filters: Array<{
            /**
             * The column name to filter.
             * @minLength 1
             */
            columnName: string;
            /** The filter comparison condition. */
            condition: "eq" | "neq" | "like" | "ilike" | "gt" | "gte" | "lt" | "lte";
            /** The value to compare against. */
            value: unknown;
          }>;
        };
        /** A data table row keyed by column name. */
        data: Record<string, unknown>;
        /** Whether n8n should return updated rows. */
        returnData?: boolean;
        /** Preview matching updates without persisting changes. */
        dryRun?: boolean;
      };
      output: {
        /** The number of inserted rows. */
        count: number;
      } | {
        /** The row identifier generated by n8n. */
        id?: number;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      } | Array<unknown> | boolean;
    };
    /** Replace annotation tags attached to an n8n execution. */
    "n8n.update_execution_tags": {
      input: {
        /** The n8n execution identifier. */
        executionId: number;
        /** Tag IDs to attach to the execution. */
        tagIds: Array<string>;
      };
      output: {
        /** Tags attached to the resource after the operation. */
        tags: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
      };
    };
    /** Update an n8n tag. */
    "n8n.update_tag": {
      input: {
        /**
         * The n8n tag identifier.
         * @minLength 1
         */
        tagId: string;
        /**
         * The updated tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * An n8n resource identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
      };
    };
    /** Update an n8n variable value. */
    "n8n.update_variable": {
      input: {
        /**
         * The n8n variable identifier.
         * @minLength 1
         */
        variableId: string;
        /**
         * The variable key.
         * @minLength 1
         */
        key: string;
        /** The variable value. */
        value: string;
      };
      output: {
        /**
         * The n8n variable identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The variable key.
         * @minLength 1
         */
        key: string;
        /** The variable value. */
        value: string;
        /** The variable type returned by n8n. */
        type?: string;
        /** The project identifier that owns the variable. */
        projectId?: string | null;
        /** The project that owns the variable when returned by n8n. */
        project?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Replace tags attached to an n8n workflow. */
    "n8n.update_workflow_tags": {
      input: {
        /**
         * The n8n workflow identifier.
         * @minLength 1
         */
        workflowId: string;
        /** Tag IDs to attach to the workflow. */
        tagIds: Array<string>;
      };
      output: {
        /** Tags attached to the resource after the operation. */
        tags: Array<{
          /**
           * An n8n resource identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           */
          name: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          createdAt?: string;
          /**
           * An ISO 8601 timestamp returned by n8n.
           * @format date-time
           */
          updatedAt?: string;
        }>;
      };
    };
    /** Upsert one row in an n8n data table by filter. */
    "n8n.upsert_data_table_row": {
      input: {
        /**
         * The n8n data table identifier.
         * @minLength 1
         */
        dataTableId: string;
        /** Structured n8n data table filter conditions. */
        filter: {
          /** Whether all filters or any filter must match. */
          type?: "and" | "or";
          /**
           * Filter conditions.
           * @minItems 1
           */
          filters: Array<{
            /**
             * The column name to filter.
             * @minLength 1
             */
            columnName: string;
            /** The filter comparison condition. */
            condition: "eq" | "neq" | "like" | "ilike" | "gt" | "gte" | "lt" | "lte";
            /** The value to compare against. */
            value: unknown;
          }>;
        };
        /** A data table row keyed by column name. */
        data: Record<string, unknown>;
        /** Whether n8n should return the upserted row. */
        returnData?: boolean;
        /** Preview the upsert without persisting changes. */
        dryRun?: boolean;
      };
      output: {
        /** The number of inserted rows. */
        count: number;
      } | {
        /** The row identifier generated by n8n. */
        id?: number;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        createdAt?: string;
        /**
         * An ISO 8601 timestamp returned by n8n.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      } | Array<unknown> | boolean;
    };
  }
}
