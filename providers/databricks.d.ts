import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Databricks job run by run ID. */
    "databricks.cancel_run": {
      input: {
        /**
         * The Databricks run ID.
         * @exclusiveMinimum 0
         */
        runId: number;
      };
      output: {
        /** The cancelled Databricks run ID. */
        runId: number;
        /** Whether the Databricks cancel request was accepted. */
        cancelled: boolean;
      };
    };
    /** Create a Databricks cluster from a raw official clusters create payload and return the new cluster ID. */
    "databricks.create_cluster": {
      input: {
        /** The raw Databricks clusters/create payload. */
        cluster: Record<string, unknown>;
      };
      output: {
        /** The created Databricks cluster ID. */
        clusterId: string;
      };
    };
    /** Create a Databricks job from a raw official Jobs API settings object and return the new job ID. */
    "databricks.create_job": {
      input: {
        /** The raw Databricks Jobs API create payload. */
        settings: Record<string, unknown>;
      };
      output: {
        /** The created Databricks job ID. */
        jobId: number;
      };
    };
    /** Create a Databricks workspace repo that links a Git remote into the connected workspace. */
    "databricks.create_repo": {
      input: {
        /** The Git repository URL. */
        url: string;
        /** The Databricks workspace path for the repo. */
        path?: string;
        /** The Databricks Git provider name. */
        provider?: string;
        /** The Git branch to check out after creation. */
        branch?: string;
        /** The Git tag to check out after creation. */
        tag?: string;
        /** The Databricks sparse-checkout configuration. */
        sparseCheckout?: Record<string, unknown>;
      };
      output: {
        /** The Databricks repo object. */
        repo: Record<string, unknown>;
      };
    };
    /** Create a Databricks secret scope with an optional backend configuration and initial manager principal. */
    "databricks.create_secret_scope": {
      input: {
        /**
         * The Databricks secret scope name.
         * @minLength 1
         */
        scope: string;
        /** The Databricks secret scope backend type. */
        scopeBackendType?: "DATABRICKS" | "AZURE_KEYVAULT";
        /** The Azure Key Vault configuration for Databricks secret scopes. */
        backendAzureKeyvault?: Record<string, unknown>;
        /** The Databricks initial MANAGE principal for the secret scope. */
        initialManagePrincipal?: string;
      };
      output: {
        /** The Databricks secret scope that was created. */
        scope: string;
        /** Whether the Databricks create-scope request was accepted. */
        created: boolean;
      };
    };
    /** Delete a Databricks job by ID. */
    "databricks.delete_job": {
      input: {
        /**
         * The Databricks job ID.
         * @exclusiveMinimum 0
         */
        jobId: number;
      };
      output: {
        /** The deleted Databricks job ID. */
        jobId: number;
        /** Whether the Databricks job delete request was accepted. */
        deleted: boolean;
      };
    };
    /** Delete a Databricks workspace repo by repo ID. */
    "databricks.delete_repo": {
      input: {
        /** The Databricks repo ID. */
        repoId: string | number;
      };
      output: {
        /** The Databricks repo ID that was deleted. */
        repoId: string;
        /** Whether the Databricks repo delete request was accepted. */
        deleted: boolean;
      };
    };
    /** Delete one Databricks secret value from a Databricks secret scope. */
    "databricks.delete_secret": {
      input: {
        /**
         * The Databricks secret scope name.
         * @minLength 1
         */
        scope: string;
        /**
         * The Databricks secret key name.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The Databricks secret scope that owned the secret. */
        scope: string;
        /** The Databricks secret key that was deleted. */
        key: string;
        /** Whether the Databricks delete-secret request was accepted. */
        deleted: boolean;
      };
    };
    /** Delete a Databricks secret scope by scope name. */
    "databricks.delete_secret_scope": {
      input: {
        /**
         * The Databricks secret scope name.
         * @minLength 1
         */
        scope: string;
      };
      output: {
        /** The Databricks secret scope that was deleted. */
        scope: string;
        /** Whether the Databricks delete-scope request was accepted. */
        deleted: boolean;
      };
    };
    /** Edit an existing Databricks cluster by cluster ID using a raw official clusters edit payload. */
    "databricks.edit_cluster": {
      input: {
        /**
         * The Databricks cluster ID.
         * @minLength 1
         */
        clusterId: string;
        /** The raw Databricks clusters/edit payload. */
        cluster: Record<string, unknown>;
      };
      output: {
        /** The edited Databricks cluster ID. */
        clusterId: string;
        /** Whether the Databricks edit request was accepted. */
        edited: boolean;
      };
    };
    /** Get one Databricks cluster by cluster ID. */
    "databricks.get_cluster": {
      input: {
        /**
         * The Databricks cluster ID.
         * @minLength 1
         */
        clusterId: string;
      };
      output: {
        /** The Databricks cluster object. */
        cluster: Record<string, unknown>;
      };
    };
    /** Get the current Databricks workspace principal profile for the connected personal access token. */
    "databricks.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Databricks current-user profile. */
        user: Record<string, unknown>;
      };
    };
    /** Get one Databricks job, including its current settings and optional continuation page token. */
    "databricks.get_job": {
      input: {
        /**
         * The Databricks job ID.
         * @exclusiveMinimum 0
         */
        jobId: number;
        /** A page token returned by a previous Databricks response. */
        pageToken?: string;
      };
      output: {
        /** The Databricks job object. */
        job: Record<string, unknown>;
        /** The next page token, when present. */
        nextPageToken?: string;
      };
    };
    /** Get one Databricks job run by run ID. */
    "databricks.get_run_by_id": {
      input: {
        /**
         * The Databricks run ID.
         * @exclusiveMinimum 0
         */
        runId: number;
      };
      output: {
        /** The Databricks run object. */
        run: Record<string, unknown>;
      };
    };
    /** Get the output payload for one Databricks run, including notebook output or error details when available. */
    "databricks.get_run_output": {
      input: {
        /**
         * The Databricks run ID.
         * @exclusiveMinimum 0
         */
        runId: number;
      };
      output: {
        /** The Databricks run output object. */
        runOutput: Record<string, unknown>;
      };
    };
    /** List Databricks cluster node types that are available in the connected workspace region. */
    "databricks.list_cluster_node_types": {
      input: Record<string, never>;
      output: {
        /** The Databricks node type objects. */
        nodeTypes: Array<Record<string, unknown>>;
      };
    };
    /** List Databricks Runtime and Spark versions that can be used when creating or editing clusters. */
    "databricks.list_cluster_spark_versions": {
      input: Record<string, never>;
      output: {
        /** The Databricks Spark version objects. */
        versions: Array<Record<string, unknown>>;
      };
    };
    /** List Databricks cluster availability zones for the connected workspace when the API is supported. */
    "databricks.list_cluster_zones": {
      input: Record<string, never>;
      output: {
        /** The Databricks availability zones. */
        zones: Array<string>;
        /** The default Databricks availability zone. */
        defaultZone?: string;
      };
    };
    /** List Databricks clusters with optional paging, filtering, and sorting controls from the official clusters API. */
    "databricks.list_clusters": {
      input: {
        /**
         * The maximum number of clusters to return.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /** A page token returned by a previous Databricks response. */
        pageToken?: string;
        /** The raw Databricks clusters filter payload. */
        filterBy?: Record<string, unknown>;
        /** The raw Databricks clusters sort payload. */
        sortBy?: Record<string, unknown>;
      };
      output: {
        /** The returned Databricks clusters. */
        clusters: Array<Record<string, unknown>>;
        /** The next page token, when present. */
        nextPageToken?: string;
        /** The previous page token, when present. */
        prevPageToken?: string;
      };
    };
    /** List Databricks jobs in the connected workspace with optional pagination, name filtering, and task expansion. */
    "databricks.list_jobs": {
      input: {
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based offset for paginated results.
         * @minimum 0
         */
        offset?: number;
        /** Filters jobs by name prefix. */
        name?: string;
        /** Whether to include expanded task payloads when Databricks supports it. */
        expandTasks?: boolean;
        /** A page token returned by a previous Databricks response. */
        pageToken?: string;
      };
      output: {
        /** The returned Databricks jobs. */
        jobs: Array<Record<string, unknown>>;
        /** Whether more jobs are available. */
        hasMore?: boolean;
        /** The next page token, when present. */
        nextPageToken?: string;
        /** The previous page token, when present. */
        prevPageToken?: string;
      };
    };
    /** List Databricks job runs with optional job, state, time-range, and pagination filters. */
    "databricks.list_runs": {
      input: {
        /**
         * The Databricks job ID.
         * @exclusiveMinimum 0
         */
        jobId?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based offset for paginated results.
         * @minimum 0
         */
        offset?: number;
        /** Filters results by Databricks run type. */
        runType?: string;
        /** Whether to return only active runs. */
        activeOnly?: boolean;
        /** Whether to return only completed runs. */
        completedOnly?: boolean;
        /** Whether to include expanded task details in each run. */
        expandTasks?: boolean;
        /** Filters runs that started at or after this Unix-millis timestamp. */
        startTimeFrom?: number;
        /** Filters runs that started at or before this Unix-millis timestamp. */
        startTimeTo?: number;
      };
      output: {
        /** The returned Databricks runs. */
        runs: Array<Record<string, unknown>>;
        /** Whether more runs are available. */
        hasMore?: boolean;
        /** The next page token, when present. */
        nextPageToken?: string;
      };
    };
    /** List Databricks secret scopes in the connected workspace. */
    "databricks.list_secret_scopes": {
      input: Record<string, never>;
      output: {
        /** The Databricks secret scopes. */
        scopes: Array<Record<string, unknown>>;
      };
    };
    /** List Databricks secret metadata rows in one secret scope. */
    "databricks.list_secrets": {
      input: {
        /**
         * The Databricks secret scope name.
         * @minLength 1
         */
        scope: string;
      };
      output: {
        /** The Databricks secret metadata rows. */
        secrets: Array<Record<string, unknown>>;
      };
    };
    /** Permanently delete a Databricks cluster by cluster ID. */
    "databricks.permanent_delete_cluster": {
      input: {
        /**
         * The Databricks cluster ID.
         * @minLength 1
         */
        clusterId: string;
      };
      output: {
        /** The deleted Databricks cluster ID. */
        clusterId: string;
        /** Whether the Databricks delete request was accepted. */
        deleted: boolean;
      };
    };
    /** Create or overwrite a Databricks secret value inside one Databricks secret scope. */
    "databricks.put_secret": {
      input: {
        /**
         * The Databricks secret scope name.
         * @minLength 1
         */
        scope: string;
        /**
         * The Databricks secret key name.
         * @minLength 1
         */
        key: string;
        /** The UTF-8 secret value to store in Databricks. */
        stringValue?: string;
        /** The bytes secret value to store in Databricks. */
        bytesValue?: string;
      };
      output: {
        /** The Databricks secret scope that received the secret. */
        scope: string;
        /** The Databricks secret key that was stored. */
        key: string;
        /** Whether the Databricks put-secret request was accepted. */
        updated: boolean;
      };
    };
    /** Trigger an immediate run for a Databricks job with optional parameter maps and idempotency token. */
    "databricks.run_now_job": {
      input: {
        /**
         * The Databricks job ID.
         * @exclusiveMinimum 0
         */
        jobId: number;
        /** The job-level parameter map for this run. */
        jobParameters?: Record<string, string>;
        /** The notebook parameters for notebook tasks. */
        notebookParams?: Record<string, string>;
        /** The named Python parameters for Python wheel tasks. */
        pythonNamedParams?: Record<string, string>;
        /** The positional Python task arguments. */
        pythonParams?: Array<string>;
        /** The positional JAR task arguments. */
        jarParams?: Array<string>;
        /** The Spark submit arguments. */
        sparkSubmitParams?: Array<string>;
        /** A token used to deduplicate repeated run-now requests. */
        idempotencyToken?: string;
      };
      output: {
        /** The created Databricks run ID. */
        runId: number;
        /** The ordinal number of this run within the job, when returned. */
        numberInJob?: number;
      };
    };
    /** Start a terminated Databricks cluster by cluster ID. */
    "databricks.start_cluster": {
      input: {
        /**
         * The Databricks cluster ID.
         * @minLength 1
         */
        clusterId: string;
      };
      output: {
        /** The started Databricks cluster ID. */
        clusterId: string;
        /** Whether the Databricks start request was accepted. */
        started: boolean;
      };
    };
    /** Submit a one-time Databricks run from a raw official Jobs API submit payload and return the run ID. */
    "databricks.submit_run": {
      input: {
        /** The raw Databricks jobs/runs/submit payload. */
        run: Record<string, unknown>;
      };
      output: {
        /** The created Databricks run ID. */
        runId: number;
      };
    };
    /** Update an existing Databricks job by ID using the official partial-update payload fields. */
    "databricks.update_job_by_id": {
      input: {
        /**
         * The Databricks job ID.
         * @exclusiveMinimum 0
         */
        jobId: number;
        /** The partial Databricks job settings to apply. */
        newSettings?: Record<string, unknown>;
        /** The job settings fields to remove. */
        fieldsToRemove?: Array<string>;
      };
      output: {
        /** The updated Databricks job ID. */
        jobId: number;
        /** Whether the Databricks job update request was accepted. */
        updated: boolean;
      };
    };
    /** Update a Databricks workspace repo by switching branch or tag, or by changing sparse-checkout settings. */
    "databricks.update_repo": {
      input: {
        /** The Databricks repo ID. */
        repoId: string | number;
        /** The Git branch to check out. */
        branch?: string;
        /** The Git tag to check out. */
        tag?: string;
        /** The Databricks sparse-checkout configuration. */
        sparseCheckout?: Record<string, unknown>;
      };
      output: {
        /** The Databricks repo object. */
        repo: Record<string, unknown>;
      };
    };
    /** Delete a Databricks workspace object or directory by absolute path. */
    "databricks.workspace_delete": {
      input: {
        /**
         * The absolute Databricks workspace path.
         * @minLength 1
         */
        path: string;
        /** Whether to recursively delete a Databricks workspace directory. */
        recursive?: boolean;
      };
      output: {
        /** The Databricks workspace path that was deleted. */
        path: string;
        /** Whether the Databricks delete request was accepted. */
        deleted: boolean;
      };
    };
    /** Export one Databricks workspace object as base64 content or direct text content, depending on the export mode. */
    "databricks.workspace_export": {
      input: {
        /**
         * The absolute Databricks workspace path.
         * @minLength 1
         */
        path: string;
        /** The Databricks workspace export format. */
        format?: "SOURCE" | "HTML" | "JUPYTER" | "DBC" | "R_MARKDOWN" | "AUTO";
        /** Whether Databricks should return direct file content instead of JSON. */
        directDownload?: boolean;
      };
      output: {
        /** The exported Databricks content. */
        content?: string;
        /** The Databricks export file type. */
        fileType?: string;
        /** Whether the response content came from a direct-download export. */
        directDownload?: boolean;
        /** The response content type for direct-download exports. */
        contentType?: string;
      };
    };
    /** Get metadata for one Databricks workspace object by absolute path. */
    "databricks.workspace_get_status": {
      input: {
        /**
         * The absolute Databricks workspace path.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** The Databricks workspace object metadata. */
        object: Record<string, unknown>;
      };
    };
    /** Import base64 content into the Databricks workspace at an absolute path. */
    "databricks.workspace_import": {
      input: {
        /**
         * The absolute Databricks workspace path.
         * @minLength 1
         */
        path: string;
        /** The base64-encoded Databricks workspace content to import. */
        content: string;
        /** The Databricks workspace import format. */
        format?: "SOURCE" | "HTML" | "JUPYTER" | "DBC" | "R_MARKDOWN" | "AUTO";
        /** The notebook language required by some Databricks SOURCE imports. */
        language?: "PYTHON" | "SQL" | "SCALA" | "R";
        /** Whether to overwrite an existing Databricks workspace object. */
        overwrite?: boolean;
      };
      output: {
        /** The Databricks workspace path that was imported. */
        path: string;
        /** Whether the Databricks import request was accepted. */
        imported: boolean;
      };
    };
    /** List the direct Databricks workspace objects under a workspace path. */
    "databricks.workspace_list": {
      input: {
        /**
         * The absolute Databricks workspace path.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** The returned Databricks workspace objects. */
        objects: Array<Record<string, unknown>>;
      };
    };
    /** Create a Databricks workspace directory, including any missing parent directories. */
    "databricks.workspace_mkdirs": {
      input: {
        /**
         * The absolute Databricks workspace path.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** The Databricks directory path that was created. */
        path: string;
        /** Whether the Databricks mkdirs request was accepted. */
        created: boolean;
      };
    };
  }
}
