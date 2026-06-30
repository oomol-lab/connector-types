import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Axiom dataset. */
    "axiom.create_dataset": {
      input: {
        /**
         * The unique Axiom dataset name.
         * @minLength 1
         */
        name: string;
        /** The dataset description. */
        description?: string;
        /**
         * The edge deployment assigned to the dataset.
         * @minLength 1
         */
        edgeDeployment?: string;
        /** The Axiom dataset kind. */
        kind?: "otel:metrics:v1" | "otel:traces:v1" | "otel:logs:v1" | "axiom:events:v1";
        /** The number of days Axiom should retain data in the dataset. */
        retentionDays?: number;
        /** Whether the dataset should use a retention period. */
        useRetentionPeriod?: boolean;
        /**
         * Optional referrer slug sent as the create dataset query parameter.
         * @minLength 1
         */
        referrer?: string;
      };
      output: {
        /** An Axiom dataset resource. */
        dataset: {
          /** Whether the dataset can accept writes with the current token. */
          canWrite?: boolean;
          /** The RFC3339-formatted time when the dataset was created. */
          created?: string;
          /** The dataset description. */
          description?: string;
          /** The edge deployment assigned to the dataset. */
          edgeDeployment?: string;
          /** The Axiom dataset ID. */
          id?: string;
          /** The Axiom dataset kind. */
          kind?: string;
          /** Map fields configured on the dataset. */
          mapFields?: Array<string>;
          /** The unique Axiom dataset name. */
          name?: string;
          /** The number of days Axiom retains data in the dataset. */
          retentionDays?: number;
          /** The organization ID that shared this dataset when applicable. */
          sharedByOrg?: string;
          /** The RFC3339-formatted time when the dataset was last updated. */
          updatedAt?: string;
          /** Whether the dataset uses a retention period. */
          useRetentionPeriod?: boolean;
          /** The display name of the dataset creator. */
          who?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete an Axiom dataset by ID or unique name. */
    "axiom.delete_dataset": {
      input: {
        /**
         * The Axiom dataset ID or unique dataset name.
         * @minLength 1
         */
        dataset_id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get an Axiom dataset by ID or unique name. */
    "axiom.get_dataset": {
      input: {
        /**
         * The Axiom dataset ID or unique dataset name.
         * @minLength 1
         */
        dataset_id: string;
      };
      output: {
        /** An Axiom dataset resource. */
        dataset: {
          /** Whether the dataset can accept writes with the current token. */
          canWrite?: boolean;
          /** The RFC3339-formatted time when the dataset was created. */
          created?: string;
          /** The dataset description. */
          description?: string;
          /** The edge deployment assigned to the dataset. */
          edgeDeployment?: string;
          /** The Axiom dataset ID. */
          id?: string;
          /** The Axiom dataset kind. */
          kind?: string;
          /** Map fields configured on the dataset. */
          mapFields?: Array<string>;
          /** The unique Axiom dataset name. */
          name?: string;
          /** The number of days Axiom retains data in the dataset. */
          retentionDays?: number;
          /** The organization ID that shared this dataset when applicable. */
          sharedByOrg?: string;
          /** The RFC3339-formatted time when the dataset was last updated. */
          updatedAt?: string;
          /** Whether the dataset uses a retention period. */
          useRetentionPeriod?: boolean;
          /** The display name of the dataset creator. */
          who?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Axiom datasets visible to the current token. */
    "axiom.list_datasets": {
      input: Record<string, never>;
      output: {
        /** The datasets returned by Axiom. */
        datasets: Array<{
          /** Whether the dataset can accept writes with the current token. */
          canWrite?: boolean;
          /** The RFC3339-formatted time when the dataset was created. */
          created?: string;
          /** The dataset description. */
          description?: string;
          /** The edge deployment assigned to the dataset. */
          edgeDeployment?: string;
          /** The Axiom dataset ID. */
          id?: string;
          /** The Axiom dataset kind. */
          kind?: string;
          /** Map fields configured on the dataset. */
          mapFields?: Array<string>;
          /** The unique Axiom dataset name. */
          name?: string;
          /** The number of days Axiom retains data in the dataset. */
          retentionDays?: number;
          /** The organization ID that shared this dataset when applicable. */
          sharedByOrg?: string;
          /** The RFC3339-formatted time when the dataset was last updated. */
          updatedAt?: string;
          /** Whether the dataset uses a retention period. */
          useRetentionPeriod?: boolean;
          /** The display name of the dataset creator. */
          who?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Run an Axiom Processing Language query through the global API endpoint. */
    "axiom.run_apl_query": {
      input: {
        /**
         * The APL query string to execute.
         * @minLength 1
         */
        apl: string;
        /** The Axiom query result format. */
        format?: "legacy" | "tabular";
        /** Whether Axiom should bypass cached query results. */
        nocache?: boolean;
        /**
         * The saved query result kind.
         * @minLength 1
         */
        saveAsKind?: string;
        /**
         * The associated dataset name when saving query results.
         * @minLength 1
         */
        dataset_name?: string;
        /**
         * The query cursor returned by a previous Axiom query.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The query end time as RFC3339 or a relative time expression.
         * @minLength 1
         */
        endTime?: string;
        /** Whether the query response should include cursors. */
        includeCursor?: boolean;
        /** Axiom query options passed through to the APL API. */
        queryOptions?: Record<string, unknown>;
        /**
         * The query start time as RFC3339 or a relative time expression.
         * @minLength 1
         */
        startTime?: string;
        /** Variables inserted into the APL query. */
        variables?: Record<string, Record<string, unknown>>;
      };
      output: {
        /** The raw Axiom query result. */
        result: Record<string, unknown>;
        /** The dataset names included in the query result. */
        datasetNames: Array<string>;
        /** The Axiom query result format. */
        format: string;
        /** The Axiom query execution status. */
        status: {
          /** The number of blocks served from cache. */
          blocksCached?: number;
          /** The number of blocks examined by the query. */
          blocksExamined?: number;
          /** The number of blocks matched by the query. */
          blocksMatched?: number;
          /** The Axiom cache status code for the query. */
          cacheStatus?: number;
          /** The query elapsed time in nanoseconds. */
          elapsedTime?: number;
          /** Whether Axiom returned a partial query result. */
          isPartial?: boolean;
          /** The latest block time scanned by the query. */
          maxBlockTime?: string;
          /** The maximum cursor returned by the query. */
          maxCursor?: string;
          /** The earliest block time scanned by the query. */
          minBlockTime?: string;
          /** The minimum cursor returned by the query. */
          minCursor?: string;
          /** The number of groups produced by the query. */
          numGroups?: number;
          /** The number of rows examined by the query. */
          rowsExamined?: number;
          /** The number of rows matched by the query. */
          rowsMatched?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
