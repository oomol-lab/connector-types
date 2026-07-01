import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel an in-progress Hex project run. */
    "hex.cancel_run": {
      input: {
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /**
         * Unique ID for a run of a Hex project.
         * @format uuid
         */
        runId: string;
      };
      output: {
        /** Whether the cancellation request succeeded. */
        success: boolean;
      };
    };
    /** Get metadata for a single Hex project by project ID. */
    "hex.get_project": {
      input: {
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /** Whether to include sharing information in the response. */
        includeSharing?: boolean;
      };
      output: {
        /** Hex project metadata. */
        project: Record<string, unknown>;
        /** Raw Hex response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the status and metadata for a specific Hex project run. */
    "hex.get_run_status": {
      input: {
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /**
         * Unique ID for a run of a Hex project.
         * @format uuid
         */
        runId: string;
        /** Whether to request expanded run statistics from Hex. */
        enableExpandedStats?: boolean;
      };
      output: {
        /**
         * Unique ID for a run of a Hex project.
         * @format uuid
         */
        runId: string;
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /** Hex project run status. */
        status: "PENDING" | "RUNNING" | "ERRORED" | "COMPLETED" | "KILLED" | "UNABLE_TO_ALLOCATE_KERNEL";
        /** Hex project run metadata. */
        run: Record<string, unknown>;
        /** Raw Hex response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List API-triggered runs for a Hex project, optionally filtered by status. */
    "hex.list_project_runs": {
      input: {
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /**
         * Number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of runs to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Hex project run status. */
        statusFilter?: "PENDING" | "RUNNING" | "ERRORED" | "COMPLETED" | "KILLED" | "UNABLE_TO_ALLOCATE_KERNEL";
      };
      output: {
        /** Project runs returned by Hex. */
        runs: Array<Record<string, unknown>>;
        /** Next page URL or token returned by Hex. */
        nextPage: string | null;
        /** Previous page URL or token returned by Hex. */
        previousPage: string | null;
        /** Trace ID returned by Hex. */
        traceId: string | null;
        /** Raw Hex response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Hex projects visible to the connected token, with pagination and common project filters. */
    "hex.list_projects": {
      input: {
        /**
         * Number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by Hex.
         * @minLength 1
         */
        after?: string;
        /**
         * Pagination cursor returned by Hex.
         * @minLength 1
         */
        before?: string;
        /** Field used to sort Hex projects. */
        sortBy?: "CREATED_AT" | "LAST_EDITED_AT" | "LAST_PUBLISHED_AT";
        /** Sort direction accepted by Hex. */
        sortDirection?: "ASC" | "DESC";
        /**
         * Project statuses to include.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * Project categories to include.
         * @minItems 1
         */
        categories?: Array<string>;
        /**
         * Owner email address used to filter projects.
         * @format email
         */
        ownerEmail?: string;
        /**
         * Creator email address used to filter projects.
         * @format email
         */
        creatorEmail?: string;
        /**
         * Collection ID used to filter projects.
         * @minLength 1
         */
        collectionId?: string;
        /** Whether to include sharing information for each project. */
        includeSharing?: boolean;
        /** Whether to include archived projects. */
        includeArchived?: boolean;
        /** Whether to include trashed projects. */
        includeTrashed?: boolean;
        /** Whether to include component projects. */
        includeComponents?: boolean;
      };
      output: {
        /** Projects returned by Hex. */
        values: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Hex. */
        pagination: Record<string, unknown> | null;
        /** Raw Hex response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Trigger a run of the latest published version of a Hex project. */
    "hex.run_project": {
      input: {
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /** Input parameters for the Hex project run, keyed by project variable name. */
        inputParams?: Record<string, unknown>;
        /**
         * Notifications to send when the run completes.
         * @minItems 1
         */
        notifications?: Array<{
          /**
           * Notification type, such as slack, user, or group.
           * @minLength 1
           */
          type: string;
          /**
           * Notification recipient identifier.
           * @minLength 1
           */
          recipient: string;
        }>;
        /** Whether to validate run inputs without executing the project. */
        dryRun?: boolean;
        /** Whether to update the cached state of the published app after a successful run. */
        updatePublishedResults?: boolean;
        /** Whether to use cached SQL results when available. */
        useCachedSqlResults?: boolean;
        /**
         * Saved view ID to use for project run inputs.
         * @format uuid
         */
        viewId?: string;
        /**
         * Feature flag configuration override for the run.
         * @minLength 1
         */
        flagConfigOverride?: string;
      };
      output: {
        /**
         * Unique ID for a run of a Hex project.
         * @format uuid
         */
        runId: string;
        /**
         * Unique ID for a Hex project.
         * @format uuid
         */
        projectId: string;
        /**
         * URL to view the run in Hex.
         * @format uri
         */
        runUrl: string | null;
        /**
         * API URL to check the run status.
         * @format uri
         */
        runStatusUrl: string | null;
        /** Trace ID returned by Hex. */
        traceId: string | null;
        /** Project version used by the run. */
        projectVersion: number | null;
        /** Notifications returned by Hex. */
        notifications: Array<unknown> | null;
        /** Raw Hex response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
