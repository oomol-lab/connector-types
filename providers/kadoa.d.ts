import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Materialize all matching Kadoa workflow records and return a temporary signed download URL. */
    "kadoa.export_workflow_data": {
      input: {
        /**
         * The unique identifier of the Kadoa workflow.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The optional workflow run identifier.
         * @minLength 1
         */
        runId?: string;
        /**
         * Structured filters to apply to workflow records.
         * @minItems 1
         */
        filters?: Array<{
          /**
           * The workflow schema field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The Kadoa comparison operator to apply.
           * @minLength 1
           */
          operator: string;
          /** The value to compare with the workflow field. */
          value: unknown;
        }>;
        /**
         * The workflow field used to sort records.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * The sort direction for workflow records.
         * @default "asc"
         */
        order?: "asc" | "desc";
        /**
         * Specific workflow record identifiers to include.
         * @minItems 1
         */
        rowIds?: Array<string>;
        /**
         * The file format for the materialized workflow export.
         * @default "csv"
         */
        format?: "csv" | "json" | "parquet";
      };
      output: {
        /** The Kadoa workflow identifier. */
        workflowId: string;
        /** The workflow run identifier exported by Kadoa. */
        runId: string;
        /**
         * The timestamp when the exported workflow run was executed.
         * @format date-time
         */
        executedAt?: string;
        /** The generated export format. */
        format: "csv" | "json" | "parquet";
        /**
         * The number of records in the export.
         * @minimum 0
         */
        rowCount: number;
        /**
         * The signed self-authenticating download URL.
         * @format uri
         */
        url: string;
        /**
         * The timestamp when the signed download URL expires.
         * @format date-time
         */
        expiresAt: string;
      };
    };
    /** Get the current configuration and execution status of a Kadoa workflow. */
    "kadoa.get_workflow": {
      input: {
        /**
         * The unique identifier of the Kadoa workflow.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /** The unique Kadoa workflow identifier. */
        id?: string;
        /** The workflow name. */
        name?: string;
        /** The workflow description. */
        description?: string;
        /** The persisted workflow lifecycle state. */
        state?: string;
        /** The computed workflow state shown to users. */
        displayState?: string;
        /** The latest workflow execution state. */
        runState?: string;
        /**
         * The timestamp when the workflow was created.
         * @format date-time
         */
        createdAt?: string;
        /** The total number of records extracted by the latest run. */
        totalRecords?: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve a bounded JSON page of extracted records from the latest or a specific Kadoa workflow run. */
    "kadoa.get_workflow_data": {
      input: {
        /**
         * The unique identifier of the Kadoa workflow.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The optional workflow run identifier.
         * @minLength 1
         */
        runId?: string;
        /**
         * Structured filters to apply to workflow records.
         * @minItems 1
         */
        filters?: Array<{
          /**
           * The workflow schema field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The Kadoa comparison operator to apply.
           * @minLength 1
           */
          operator: string;
          /** The value to compare with the workflow field. */
          value: unknown;
        }>;
        /**
         * The workflow field used to sort records.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * The sort direction for workflow records.
         * @default "asc"
         */
        order?: "asc" | "desc";
        /**
         * Specific workflow record identifiers to include.
         * @minItems 1
         */
        rowIds?: Array<string>;
        /**
         * The one-based result page.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * The positive number of records to return on this page.
         * @minimum 1
         * @default 25
         */
        limit?: number;
        /** Whether Kadoa should include data-validation anomalies for each record. */
        includeAnomalies?: boolean;
      };
      output: {
        /** The Kadoa workflow identifier. */
        workflowId: string;
        /** The workflow run identifier used for the result. */
        runId?: string | null;
        /**
         * The timestamp when the selected workflow run was executed.
         * @format date-time
         */
        executedAt?: string | null;
        /** The extracted records defined by the workflow schema. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Kadoa. */
        pagination: {
          /**
           * The total number of matching records.
           * @minimum 0
           */
          totalCount: number;
          /**
           * The current result page.
           * @minimum 0
           */
          page: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * The page size used for the request.
           * @minimum 0
           */
          limit: number;
        };
      };
    };
    /** List Kadoa workflows with pagination and optional lifecycle, execution, and scheduling filters. */
    "kadoa.list_workflows": {
      input: {
        /**
         * A search term matched against workflow names or identifiers.
         * @minLength 1
         */
        search?: string;
        /**
         * The number of workflows to skip.
         * @minimum 0
         * @default 0
         */
        skip?: number;
        /**
         * The maximum number of workflows to return.
         * @minimum 1
         * @default 25
         */
        limit?: number;
        /** The persisted Kadoa workflow state to match. */
        state?: "ACTIVE" | "DRAFT" | "PAUSED" | "PREVIEW" | "QUEUED" | "SETUP" | "COMPLIANCE_REVIEW" | "COMPLIANCE_REJECTED" | "NOT_SUPPORTED" | "ERROR" | "DELETED";
        /** The latest Kadoa workflow run state to match. */
        runState?: "FAILED" | "FINISHED" | "RUNNING";
        /** The computed Kadoa workflow display state to match. */
        displayState?: "ACTIVE" | "DRAFT" | "PAUSED" | "PREVIEW" | "FAILED" | "RUNNING" | "VALIDATING" | "PENDING_START" | "COMPLIANCE_REVIEW" | "COMPLIANCE_REJECTED";
        /** Whether to return only monitored or unmonitored workflows. */
        monitoring?: boolean;
        /** The workflow update interval to match. */
        updateInterval?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | "REAL_TIME";
        /** The workflow scheduling mode to match. */
        scheduleType?: "RUN_ONCE" | "RECURRING";
        /** Whether deleted workflows should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** The workflows matching the request. */
        workflows: Array<{
          /** The unique Kadoa workflow identifier. */
          id?: string;
          /** The workflow name. */
          name?: string;
          /** The workflow description. */
          description?: string;
          /** The persisted workflow lifecycle state. */
          state?: string;
          /** The computed workflow state shown to users. */
          displayState?: string;
          /** The latest workflow execution state. */
          runState?: string;
          /**
           * The timestamp when the workflow was created.
           * @format date-time
           */
          createdAt?: string;
          /** Tags associated with the workflow. */
          tags?: Array<string>;
          /** The total number of records extracted by the latest run. */
          totalRecords?: number;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Kadoa. */
        pagination: {
          /**
           * The total number of matching records.
           * @minimum 0
           */
          totalCount: number;
          /**
           * The current result page.
           * @minimum 0
           */
          page: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * The page size used for the request.
           * @minimum 0
           */
          limit: number;
        };
      };
    };
  }
}
