import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Apply many Elasticsearch document writes in one bulk request. Each operation names its own index, and per-operation failures are reported in the response instead of failing the whole request. */
    "elasticsearch.bulk_index_documents": {
      input: {
        /**
         * The document writes to apply in order.
         * @minItems 1
         * @maxItems 1000
         */
        operations: Array<{
          /** The bulk action to apply for this document. */
          action: "index" | "create" | "update" | "delete";
          /**
           * The index this operation targets.
           * @minLength 1
           */
          indexName: string;
          /**
           * The document identifier. Required for delete operations and optional otherwise.
           * @minLength 1
           */
          documentId?: string;
          /** The document body. Required for index, create, and update operations, and ignored for delete. */
          document?: Record<string, unknown>;
        }>;
        /**
         * Whether to refresh the affected shards before returning: true refreshes immediately, wait_for waits for the next scheduled refresh, and false skips refreshing.
         * @default "false"
         */
        refresh?: "true" | "false" | "wait_for";
      };
      output: {
        /** The bulk duration in milliseconds, or null when unavailable. */
        took: number | null;
        /** Whether at least one operation failed. */
        errors: boolean;
        /**
         * The number of operations that succeeded.
         * @minimum 0
         */
        successCount: number;
        /**
         * The number of operations that failed.
         * @minimum 0
         */
        failureCount: number;
        /** The per-operation outcomes in request order. */
        items: Array<{
          /** The bulk action that was applied. */
          action: string;
          /** The index the operation targeted. */
          index: string;
          /** The document identifier assigned or used by the operation. */
          id: string;
          /** The HTTP status code for this operation, or null when unavailable. */
          status: number | null;
          /** The Elasticsearch result for this operation, or null when unavailable. */
          result: string | null;
          /** The failure reason, or null when the operation succeeded. */
          error: string | null;
        }>;
      };
    };
    /** Count Elasticsearch documents matching a query without returning any hits, which is cheaper than a search when only the size of a result set matters. */
    "elasticsearch.count_documents": {
      input: {
        /**
         * The index or index pattern to count documents in.
         * @minLength 1
         */
        indexName: string;
        /**
         * A free-text query_string query.
         * @minLength 1
         */
        query?: string;
        /**
         * Exact term filters for specific field values.
         * @minItems 1
         */
        termFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** The exact value to match in a term query. */
          value: string | number | boolean;
        }>;
        /**
         * Range filters for fields.
         * @minItems 1
         */
        rangeFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match values greater than this value. */
          gt?: string | number;
          /** Match values greater than or equal to this value. */
          gte?: string | number;
          /** Match values less than this value. */
          lt?: string | number;
          /** Match values less than or equal to this value. */
          lte?: string | number;
        }>;
        /** A time-based range filter for timestamp fields. */
        timeFilter?: {
          /**
           * The timestamp field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match timestamps greater than this ISO 8601 value. */
          gt?: string;
          /** Match timestamps greater than or equal to this ISO 8601 value. */
          gte?: string;
          /** Match timestamps less than this ISO 8601 value. */
          lt?: string;
          /** Match timestamps less than or equal to this ISO 8601 value. */
          lte?: string;
        };
      };
      output: {
        /**
         * The index the count ran against.
         * @minLength 1
         */
        indexName: string;
        /**
         * The number of documents matching the query.
         * @minimum 0
         */
        count: number;
        /** The number of shards that answered the count, or null when unavailable. */
        successfulShards: number | null;
        /** The number of shards that failed the count, or null when unavailable. */
        failedShards: number | null;
      };
    };
    /** Create one Elasticsearch index with explicit mappings, settings, and aliases. */
    "elasticsearch.create_index": {
      input: {
        /**
         * The exact name of the index to create.
         * @minLength 1
         */
        indexName: string;
        /** The mapping definition for the new index, such as a properties object. */
        mappings?: Record<string, unknown>;
        /** The index settings for the new index, such as number_of_shards and number_of_replicas. */
        settings?: Record<string, unknown>;
        /** The aliases to attach to the new index, keyed by alias name. */
        aliases?: Record<string, unknown>;
      };
      output: {
        /**
         * The created index name.
         * @minLength 1
         */
        indexName: string;
        /** Whether Elasticsearch acknowledged the index creation. */
        acknowledged: boolean;
        /** Whether the required number of shard copies started before the request returned. */
        shardsAcknowledged: boolean;
      };
    };
    /** Delete Elasticsearch documents matching a query. This destroys data and cannot be undone, so a bounded maxDocs and at least one of query, termFilters, rangeFilters, or timeFilter are required, the index name must be exact, and _all is rejected. That makes it impossible to empty an entire index by accident. The action waits for the deletion to finish, and a large maxDocs can outlast that wait: a timeout does not cancel the deletion, which keeps running on the cluster with no task id to poll, so a retry after a timeout deletes a further batch. */
    "elasticsearch.delete_by_query": {
      input: {
        /**
         * The exact index to delete documents from. Wildcards, comma-separated lists, and _all are rejected.
         * @minLength 1
         */
        indexName: string;
        /**
         * The maximum number of documents this request may delete. Elasticsearch stops once the limit is reached.
         * @exclusiveMinimum 0
         */
        maxDocs: number;
        /**
         * A free-text query_string query.
         * @minLength 1
         */
        query?: string;
        /**
         * Exact term filters for specific field values.
         * @minItems 1
         */
        termFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** The exact value to match in a term query. */
          value: string | number | boolean;
        }>;
        /**
         * Range filters for fields.
         * @minItems 1
         */
        rangeFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match values greater than this value. */
          gt?: string | number;
          /** Match values greater than or equal to this value. */
          gte?: string | number;
          /** Match values less than this value. */
          lt?: string | number;
          /** Match values less than or equal to this value. */
          lte?: string | number;
        }>;
        /** A time-based range filter for timestamp fields. */
        timeFilter?: {
          /**
           * The timestamp field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match timestamps greater than this ISO 8601 value. */
          gt?: string;
          /** Match timestamps greater than or equal to this ISO 8601 value. */
          gte?: string;
          /** Match timestamps less than this ISO 8601 value. */
          lt?: string;
          /** Match timestamps less than or equal to this ISO 8601 value. */
          lte?: string;
        };
        /**
         * Whether to abort on the first version conflict or keep processing the remaining documents.
         * @default "abort"
         */
        conflicts?: "abort" | "proceed";
        /**
         * Whether to refresh the affected shards after the deletion completes.
         * @default false
         */
        refresh?: boolean;
      };
      output: {
        /**
         * The index the deletion ran against.
         * @minLength 1
         */
        indexName: string;
        /** The request duration in milliseconds, or null when unavailable. */
        took: number | null;
        /** Whether the request timed out, or null when unavailable. */
        timedOut: boolean | null;
        /** The number of documents matched by the query, or null when unavailable. */
        total: number | null;
        /** The number of documents deleted, or null when unavailable. */
        deleted: number | null;
        /** The number of batches processed, or null when unavailable. */
        batches: number | null;
        /** The number of version conflicts encountered, or null when unavailable. */
        versionConflicts: number | null;
        /** The failures reported by Elasticsearch, as readable messages. */
        failures: Array<string>;
      };
    };
    /** Delete one Elasticsearch document by id. A missing document returns a not_found result instead of raising an error. */
    "elasticsearch.delete_document": {
      input: {
        /**
         * The index that holds the document.
         * @minLength 1
         */
        indexName: string;
        /**
         * The identifier of the document to delete.
         * @minLength 1
         */
        documentId: string;
        /**
         * Whether to refresh the affected shards before returning: true refreshes immediately, wait_for waits for the next scheduled refresh, and false skips refreshing.
         * @default "false"
         */
        refresh?: "true" | "false" | "wait_for";
      };
      output: {
        /** The index the delete targeted. */
        index: string;
        /** The document identifier that was requested. */
        id: string;
        /** The Elasticsearch delete result, such as deleted or not_found. */
        result: string;
        /** The document version, or null when unavailable. */
        version: number | null;
      };
    };
    /** Permanently delete one or more Elasticsearch indices by exact name. This destroys data and cannot be undone, so wildcards, comma-separated lists, and _all are rejected, and expectedCount must equal the number of names supplied. */
    "elasticsearch.delete_index": {
      input: {
        /**
         * The exact index names to delete. Wildcards and _all are rejected.
         * @minItems 1
         * @maxItems 100
         */
        indices: Array<string>;
        /**
         * The number of indices the caller expects to delete. It must equal the length of indices, so a mistyped request fails instead of deleting the wrong data.
         * @exclusiveMinimum 0
         */
        expectedCount: number;
        /**
         * Whether to ignore index names that do not exist instead of failing.
         * @default false
         */
        ignoreUnavailable?: boolean;
      };
      output: {
        /** Whether Elasticsearch acknowledged the deletion. */
        acknowledged: boolean;
        /** The index names that were submitted for deletion. */
        deletedIndices: Array<string>;
      };
    };
    /** Get detailed Elasticsearch cluster health including shard counts and an optional per-index breakdown. */
    "elasticsearch.get_cluster_health": {
      input: {
        /**
         * A comma-separated list of index names or wildcard expressions to limit the returned indices.
         * @minLength 1
         */
        index?: string;
        /**
         * How much detail to return in the health response.
         * @default "cluster"
         */
        level?: "cluster" | "indices" | "shards";
      };
      output: {
        /** The cluster name. */
        clusterName: string;
        /** The overall cluster health status. */
        status: string;
        /** Whether the health request timed out before the cluster stabilized. */
        timedOut: boolean;
        /** The number of nodes in the cluster. */
        numberOfNodes: number;
        /** The number of data nodes in the cluster. */
        numberOfDataNodes: number;
        /** The number of active primary shards. */
        activePrimaryShards: number;
        /** The number of active shards including replicas. */
        activeShards: number;
        /** The number of shards being relocated. */
        relocatingShards: number;
        /** The number of shards being initialized. */
        initializingShards: number;
        /** The number of unassigned shards. */
        unassignedShards: number;
        /** The number of unassigned shards whose allocation is delayed. */
        delayedUnassignedShards: number;
        /** The number of cluster-level tasks waiting to be executed. */
        numberOfPendingTasks: number;
        /** The percentage of shards that are active, or null when unavailable. */
        activeShardsPercent: number | null;
        /** The per-index health breakdown, or null when level is cluster. */
        indices: Array<{
          /** The index name. */
          index: string;
          /** The index health status. */
          status: string;
          /** The number of primary shards configured for the index. */
          numberOfShards: number;
          /** The number of replicas configured for the index. */
          numberOfReplicas: number;
          /** The number of active primary shards. */
          activePrimaryShards: number;
          /** The number of active shards including replicas. */
          activeShards: number;
          /** The number of relocating shards. */
          relocatingShards: number;
          /** The number of initializing shards. */
          initializingShards: number;
          /** The number of unassigned shards. */
          unassignedShards: number;
        }> | null;
      };
    };
    /** List Elasticsearch cluster nodes with uptime, heap, disk, and role information. Node uptime is what makes the cumulative counters from get_index_stats interpretable. */
    "elasticsearch.get_cluster_nodes": {
      input: Record<string, never>;
      output: {
        /** The cluster name, or null when unavailable. */
        clusterName: string | null;
        /** The nodes in the cluster, sorted by name. */
        nodes: Array<{
          /** The node identifier. */
          id: string;
          /** The node name. */
          name: string;
          /** The node host address, or null when unavailable. */
          host: string | null;
          /** The roles assigned to the node. */
          roles: Array<string>;
          /** The node JVM uptime in milliseconds, or null when unavailable. */
          uptimeMs: number | null;
          /** The percentage of JVM heap in use, or null when unavailable. */
          heapUsedPercent: number | null;
          /** The percentage of CPU in use on the node, or null when unavailable. */
          cpuPercent: number | null;
          /** The total file system size in bytes, or null when unavailable. */
          diskTotalBytes: number | null;
          /** The free file system space in bytes, or null when unavailable. */
          diskFreeBytes: number | null;
        }>;
      };
    };
    /** Get one Elasticsearch document by id. A missing document returns found as false instead of raising an error. */
    "elasticsearch.get_document": {
      input: {
        /**
         * The index that holds the document.
         * @minLength 1
         */
        indexName: string;
        /**
         * The identifier of the document to read.
         * @minLength 1
         */
        documentId: string;
        /**
         * Specific source fields to return instead of the whole document.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The index that was queried. */
        index: string;
        /** The document identifier that was requested. */
        id: string;
        /** Whether the document exists. */
        found: boolean;
        /** The document version, or null when the document is missing. */
        version: number | null;
        /** The document source, or null when the document is missing. */
        source: Record<string, unknown> | null;
      };
    };
    /** Get mappings, settings, aliases, and field statistics for one Elasticsearch index. */
    "elasticsearch.get_index_schema": {
      input: {
        /**
         * The Elasticsearch index name.
         * @minLength 1
         */
        indexName: string;
      };
      output: {
        /**
         * The resolved index name.
         * @minLength 1
         */
        indexName: string;
        /** The index schema payload returned by Elasticsearch. */
        schema: {
          /** Aliases configured for the index. */
          aliases: Record<string, unknown>;
          /** Mappings configured for the index. */
          mappings: Record<string, unknown>;
          /** Settings configured for the index. */
          settings: Record<string, unknown>;
        };
        /** Statistics derived from the index mappings. */
        statistics: {
          /**
           * The total number of mapped fields.
           * @minimum 0
           */
          totalFields: number;
          /** A count of mapped fields by Elasticsearch field type. */
          fieldTypes: Record<string, number>;
        };
      };
    };
    /** Get document, store, search, get, and indexing statistics for Elasticsearch indices. Counters such as searchQueryTotal are cumulative since each node started rather than a time window, so compare them against the node uptime in counterWindow before concluding that a zero means the index is never queried. */
    "elasticsearch.get_index_stats": {
      input: {
        /**
         * A comma-separated list of index names or wildcard expressions to limit the returned indices.
         * @minLength 1
         */
        index?: string;
        /**
         * Whether to also fetch node uptime so the cumulative counters can be interpreted.
         * @default true
         */
        includeCounterWindow?: boolean;
      };
      output: {
        /** The per-index statistics. */
        indices: Array<{
          /** The index name. */
          index: string;
          /** The index health status, or null when unavailable. */
          health: string | null;
          /** The index open or closed status, or null when unavailable. */
          status: string | null;
          /** The index UUID, or null when unavailable. */
          uuid: string | null;
          /** The number of live documents in the index, or null when unavailable. */
          docsCount: number | null;
          /** The number of deleted documents not yet merged away, or null when unavailable. */
          docsDeleted: number | null;
          /** The total store size in bytes across all shard copies, or null when unavailable. */
          storeSizeBytes: number | null;
          /** The cumulative number of search queries since node start, or null when unavailable. */
          searchQueryTotal: number | null;
          /** The cumulative search query time in milliseconds, or null when unavailable. */
          searchQueryTimeMs: number | null;
          /** The cumulative number of search fetch phases, or null when unavailable. */
          searchFetchTotal: number | null;
          /** The cumulative number of get-by-id requests, or null when unavailable. */
          getTotal: number | null;
          /** The cumulative get-by-id time in milliseconds, or null when unavailable. */
          getTimeMs: number | null;
          /** The cumulative number of indexing operations, or null when unavailable. */
          indexingIndexTotal: number | null;
          /** The cumulative number of delete operations, or null when unavailable. */
          indexingDeleteTotal: number | null;
        }>;
        /** Node uptime context for the cumulative counters, or null when it was not requested. */
        counterWindow: {
          /** An explanation of how the cumulative counters should be read. */
          note: string;
          /** The cluster nodes and how long each has been running. */
          nodes: Array<{
            /** The node name. */
            name: string;
            /** The node JVM uptime in milliseconds, or null when unavailable. */
            uptimeMs: number | null;
          }>;
        } | null;
      };
    };
    /** Get the state and progress of one Elasticsearch task, such as a reindex started by the reindex action. */
    "elasticsearch.get_task": {
      input: {
        /**
         * The task identifier returned when the task was submitted.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The task identifier that was polled. */
        taskId: string;
        /** The normalized task state. */
        state: "running" | "completed" | "failed";
        /** Whether Elasticsearch reports the task as finished. */
        completed: boolean;
        /** The Elasticsearch action the task runs, or null when unavailable. */
        action: string | null;
        /** The human-readable task description, or null when unavailable. */
        description: string | null;
        /** The task start time in epoch milliseconds, or null when unavailable. */
        startTimeMs: number | null;
        /** How long the task has been running in milliseconds, or null when unavailable. */
        runningTimeMs: number | null;
        /** The progress counters reported by the task. */
        progress: {
          /** The total number of documents to process, or null when unknown. */
          total: number | null;
          /** The number of documents created, or null when unknown. */
          created: number | null;
          /** The number of documents updated, or null when unknown. */
          updated: number | null;
          /** The number of documents deleted, or null when unknown. */
          deleted: number | null;
          /** The number of batches processed, or null when unknown. */
          batches: number | null;
          /** The number of version conflicts encountered, or null when unknown. */
          versionConflicts: number | null;
          /** The number of documents skipped as no-ops, or null when unknown. */
          noops: number | null;
        };
        /** The failures reported by the task, as readable messages. */
        failures: Array<string>;
      };
    };
    /** Index or replace one document in an Elasticsearch index. Supplying documentId replaces that document, while omitting it lets Elasticsearch generate an id. */
    "elasticsearch.index_document": {
      input: {
        /**
         * The index to write the document into.
         * @minLength 1
         */
        indexName: string;
        /** The document body to index. */
        document: Record<string, unknown>;
        /**
         * The identifier to write the document under. Elasticsearch generates one when this is omitted.
         * @minLength 1
         */
        documentId?: string;
        /**
         * Whether to overwrite an existing document (index) or fail when the id already exists (create).
         * @default "index"
         */
        opType?: "index" | "create";
        /**
         * Whether to refresh the affected shards before returning: true refreshes immediately, wait_for waits for the next scheduled refresh, and false skips refreshing.
         * @default "false"
         */
        refresh?: "true" | "false" | "wait_for";
      };
      output: {
        /** The index the document was written to. */
        index: string;
        /** The identifier of the written document. */
        id: string;
        /** The Elasticsearch write result, such as created or updated. */
        result: string;
        /** The document version, or null when unavailable. */
        version: number | null;
        /** The number of shard copies that acknowledged the write, or null when unavailable. */
        successfulShards: number | null;
        /** The number of shard copies that failed the write, or null when unavailable. */
        failedShards: number | null;
      };
    };
    /** List Elasticsearch aliases and the indices behind them, optionally filtered by alias or index pattern. */
    "elasticsearch.list_aliases": {
      input: {
        /**
         * An alias name or wildcard pattern to filter by.
         * @minLength 1
         */
        alias?: string;
        /**
         * A comma-separated list of index names or wildcard expressions to limit the returned indices.
         * @minLength 1
         */
        index?: string;
      };
      output: {
        /** One row per alias and index pair. */
        aliases: Array<{
          /** The alias name. */
          alias: string;
          /** The index the alias points at. */
          index: string;
          /** Whether this index is the write index for the alias, or null when not configured. */
          isWriteIndex: boolean | null;
          /** The alias filter query, or null when the alias has no filter. */
          filter: Record<string, unknown> | null;
          /** The alias index routing value, or null when not configured. */
          indexRouting: string | null;
          /** The alias search routing value, or null when not configured. */
          searchRouting: string | null;
        }>;
      };
    };
    /** List Elasticsearch indices visible to the connected user. */
    "elasticsearch.list_indices": {
      input: {
        /**
         * A comma-separated list of index names or wildcard expressions to limit the returned indices.
         * @minLength 1
         */
        index?: string;
        /** Filter indices by health status. */
        health?: "green" | "yellow" | "red";
        /**
         * A comma-separated list of cat indices columns to sort by, such as index or docs.count:desc.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * The comma-separated wildcard expansion modes for index patterns.
         * @minLength 1
         */
        expandWildcards?: string;
        /**
         * Whether to return only primary shard information.
         * @default false
         */
        includePrimaryShardsOnly?: boolean;
      };
      output: {
        /** The list of Elasticsearch index summaries. */
        indices: Array<{
          /** The index name. */
          index: string;
          /** The index health status, or null when unavailable. */
          health: string | null;
          /** The index open or closed status, or null when unavailable. */
          status: string | null;
          /** The index UUID, or null when unavailable. */
          uuid: string | null;
          /** The number of primary shards, or null when unavailable. */
          primaryShards: string | null;
          /** The number of replica shards, or null when unavailable. */
          replicaShards: string | null;
          /** The number of documents in the index, or null when unavailable. */
          docsCount: string | null;
          /** The number of deleted documents in the index, or null when unavailable. */
          docsDeleted: string | null;
          /** The total index store size, or null when unavailable. */
          storeSize: string | null;
          /** The primary shard store size, or null when unavailable. */
          primaryStoreSize: string | null;
          /** The index creation timestamp, or null when unavailable. */
          creationDate: string | null;
          /** The index creation date string, or null when unavailable. */
          creationDateString: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Elasticsearch shard placement, state, and size, optionally limited to an index pattern or a shard state. */
    "elasticsearch.list_shards": {
      input: {
        /**
         * A comma-separated list of index names or wildcard expressions to limit the returned indices.
         * @minLength 1
         */
        index?: string;
        /**
         * A comma-separated list of cat shards columns to sort by, such as index or store:desc.
         * @minLength 1
         */
        sortBy?: string;
        /** Only return shards in this state. */
        state?: "STARTED" | "INITIALIZING" | "RELOCATING" | "UNASSIGNED";
      };
      output: {
        /** The shard rows returned by Elasticsearch. */
        shards: Array<{
          /** The index the shard belongs to, or null when unavailable. */
          index: string | null;
          /** The shard number, or null when unavailable. */
          shard: string | null;
          /** Whether the shard is a primary (p) or replica (r), or null when unavailable. */
          prirep: string | null;
          /** The shard state, or null when unavailable. */
          state: string | null;
          /** The number of documents in the shard, or null when unavailable. */
          docs: string | null;
          /** The shard store size, or null when unavailable. */
          store: string | null;
          /** The node hosting the shard, or null when unassigned. */
          node: string | null;
          /** Why the shard is unassigned, or null when the shard is assigned. */
          unassignedReason: string | null;
        }>;
      };
    };
    /** Check whether the Elasticsearch cluster is reachable and return its health status. */
    "elasticsearch.ping_cluster": {
      input: Record<string, never>;
      output: {
        /** Whether the cluster health endpoint returned successfully. */
        isRunning: boolean;
        /** The HTTP status code returned by Elasticsearch. */
        statusCode: number;
        /** The cluster health status, or null when unavailable. */
        status: string | null;
        /** The Elasticsearch cluster name, or null when unavailable. */
        clusterName: string | null;
        /** A human-readable summary of the cluster status. */
        message: string;
      };
    };
    /** Search an Elasticsearch index with text queries, filters, pagination, sorting, and aggregations. */
    "elasticsearch.query_index": {
      input: {
        /**
         * The Elasticsearch index name.
         * @minLength 1
         */
        indexName: string;
        /**
         * A free-text query_string query.
         * @minLength 1
         */
        query?: string;
        /**
         * The starting offset for search pagination.
         * @minimum 0
         * @default 0
         */
        from?: number;
        /**
         * The number of search results to return, capped at 1000.
         * @minimum 1
         * @maximum 1000
         * @default 10
         */
        size?: number;
        /**
         * Specific document source fields to return.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Whether to request highlights for the search query.
         * @default false
         */
        highlight?: boolean;
        /**
         * Sort order for search results.
         * @minItems 1
         */
        sort?: Array<{
          /**
           * The field to sort by.
           * @minLength 1
           */
          field: string;
          /**
           * The sort order for this field.
           * @default "asc"
           */
          order?: "asc" | "desc";
        }>;
        /**
         * Exact term filters for specific field values.
         * @minItems 1
         */
        termFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** The exact value to match in a term query. */
          value: string | number | boolean;
        }>;
        /**
         * Range filters for fields.
         * @minItems 1
         */
        rangeFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match values greater than this value. */
          gt?: string | number;
          /** Match values greater than or equal to this value. */
          gte?: string | number;
          /** Match values less than this value. */
          lt?: string | number;
          /** Match values less than or equal to this value. */
          lte?: string | number;
        }>;
        /** A time-based range filter for timestamp fields. */
        timeFilter?: {
          /**
           * The timestamp field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match timestamps greater than this ISO 8601 value. */
          gt?: string;
          /** Match timestamps greater than or equal to this ISO 8601 value. */
          gte?: string;
          /** Match timestamps less than this ISO 8601 value. */
          lt?: string;
          /** Match timestamps less than or equal to this ISO 8601 value. */
          lte?: string;
        };
        /**
         * Aggregations to compute alongside the search hits.
         * @minItems 1
         */
        aggregations?: Array<{
          /**
           * The aggregation name, used as the key in the aggregations output.
           * @minLength 1
           */
          name: string;
          /** The aggregation type to run. */
          type: "terms" | "date_histogram" | "stats" | "cardinality" | "min" | "max" | "avg" | "sum" | "value_count";
          /**
           * The document field to aggregate on.
           * @minLength 1
           */
          field: string;
          /**
           * The maximum number of buckets to return. Only used by terms aggregations.
           * @minimum 1
           * @maximum 1000
           * @default 10
           */
          size?: number;
          /**
           * The bucket interval for date_histogram aggregations, such as 1d or month. Required when type is date_histogram.
           * @minLength 1
           */
          interval?: string;
          /**
           * Whether the date_histogram interval is a calendar interval or a fixed interval.
           * @default "calendar"
           */
          intervalType?: "calendar" | "fixed";
          /**
           * The bucket sort order by document count. Only used by terms aggregations.
           * @default "desc"
           */
          order?: "asc" | "desc";
        }>;
      };
      output: {
        /**
         * The queried index name.
         * @minLength 1
         */
        indexName: string;
        /**
         * The total number of matching documents.
         * @minimum 0
         */
        totalHits: number;
        /** The normalized search hits. */
        hits: Array<{
          /** The index that contains the hit. */
          index: string;
          /** The document identifier. */
          id: string;
          /** The search score, or null when Elasticsearch omits it. */
          score: number | null;
          /** The document source payload. */
          source: Record<string, unknown>;
          /** Highlighted snippets keyed by field name. */
          highlight?: Record<string, Array<string>>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the search response. */
        pagination: {
          /**
           * The starting offset used for this search.
           * @minimum 0
           */
          from: number;
          /**
           * The requested page size.
           * @exclusiveMinimum 0
           */
          size: number;
          /**
           * The number of hits returned in this page.
           * @minimum 0
           */
          returned: number;
          /** Whether more hits likely exist after this page. */
          hasMore: boolean;
        };
        /** The search duration in milliseconds, or null when unavailable. */
        took: number | null;
        /** Whether the search timed out, or null when unavailable. */
        timedOut: boolean | null;
        /** The maximum score in the page, or null when unavailable. */
        maxScore: number | null;
        /** Aggregation results returned by Elasticsearch, when present. */
        aggregations?: Array<{
          /** The aggregation name. */
          name: string;
          /** The raw aggregation result. */
          result: Record<string, unknown>;
        }>;
      };
    };
    /** Start an Elasticsearch reindex from one index to another and return a task id to poll with get_task. The copy runs in the background, so this action returns before the data has moved. */
    "elasticsearch.reindex": {
      input: {
        /**
         * The index or index pattern to copy documents from.
         * @minLength 1
         */
        sourceIndex: string;
        /**
         * The index to copy documents into.
         * @minLength 1
         */
        destIndex: string;
        /**
         * A free-text query_string query.
         * @minLength 1
         */
        query?: string;
        /**
         * Exact term filters for specific field values.
         * @minItems 1
         */
        termFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** The exact value to match in a term query. */
          value: string | number | boolean;
        }>;
        /**
         * Range filters for fields.
         * @minItems 1
         */
        rangeFilters?: Array<{
          /**
           * The field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match values greater than this value. */
          gt?: string | number;
          /** Match values greater than or equal to this value. */
          gte?: string | number;
          /** Match values less than this value. */
          lt?: string | number;
          /** Match values less than or equal to this value. */
          lte?: string | number;
        }>;
        /** A time-based range filter for timestamp fields. */
        timeFilter?: {
          /**
           * The timestamp field to filter on.
           * @minLength 1
           */
          field: string;
          /** Match timestamps greater than this ISO 8601 value. */
          gt?: string;
          /** Match timestamps greater than or equal to this ISO 8601 value. */
          gte?: string;
          /** Match timestamps less than this ISO 8601 value. */
          lt?: string;
          /** Match timestamps less than or equal to this ISO 8601 value. */
          lte?: string;
        };
        /**
         * The maximum number of documents to copy. All documents are copied when omitted.
         * @exclusiveMinimum 0
         */
        maxDocs?: number;
        /** Whether to overwrite documents that already exist in the destination (index) or skip them as conflicts (create). */
        opType?: "index" | "create";
        /**
         * Whether to abort on the first version conflict or keep processing the remaining documents.
         * @default "abort"
         */
        conflicts?: "abort" | "proceed";
        /**
         * The throttle applied to the reindex, in requests per second.
         * @exclusiveMinimum 0
         */
        requestsPerSecond?: number;
      };
      output: {
        /** The task identifier to poll with get_task. */
        taskId: string;
        /** The index documents are copied from. */
        sourceIndex: string;
        /** The index documents are copied into. */
        destIndex: string;
      };
    };
    /** Atomically add or remove Elasticsearch alias assignments in a single request, which is how an alias is switched between indices without downtime. This action cannot delete an index; use delete_index for that. */
    "elasticsearch.update_aliases": {
      input: {
        /**
         * The alias changes to apply atomically.
         * @minItems 1
         * @maxItems 100
         */
        actions: Array<{
          /** Whether to add or remove the alias assignment. */
          type: "add" | "remove";
          /**
           * The index or index pattern the alias assignment applies to. Patterns are useful when removing an alias from every index behind it.
           * @minLength 1
           */
          index: string;
          /**
           * The alias name.
           * @minLength 1
           */
          alias: string;
          /** Whether this index becomes the write index for the alias. Only used when type is add. */
          isWriteIndex?: boolean;
          /** A query that restricts the documents visible through the alias. Only used when type is add. */
          filter?: Record<string, unknown>;
          /**
           * The routing value used for indexing through the alias. Only used when type is add.
           * @minLength 1
           */
          indexRouting?: string;
          /**
           * The routing value used for searching through the alias. Only used when type is add.
           * @minLength 1
           */
          searchRouting?: string;
        }>;
      };
      output: {
        /** Whether Elasticsearch acknowledged the alias changes. */
        acknowledged: boolean;
        /**
         * The number of alias changes submitted in the request.
         * @minimum 0
         */
        appliedActions: number;
      };
    };
    /** Add or update field mappings on an existing Elasticsearch index. Existing field types cannot be changed in place, so incompatible changes require a new index and a reindex. */
    "elasticsearch.update_index_mappings": {
      input: {
        /**
         * The index whose mappings are updated.
         * @minLength 1
         */
        indexName: string;
        /** The field mappings to add or update, keyed by field name. */
        properties: Record<string, unknown>;
        /** How Elasticsearch should treat fields that are not mapped explicitly. */
        dynamic?: "true" | "false" | "strict" | "runtime";
      };
      output: {
        /**
         * The index whose mappings were updated.
         * @minLength 1
         */
        indexName: string;
        /** Whether Elasticsearch acknowledged the mapping update. */
        acknowledged: boolean;
      };
    };
  }
}
