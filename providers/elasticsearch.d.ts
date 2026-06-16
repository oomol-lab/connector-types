import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
        includePrimaryShardsOnly: boolean;
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
    /** Search an Elasticsearch index with text queries, filters, pagination, and sorting. */
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
        from: number;
        /**
         * The number of search results to return, capped at 1000.
         * @minimum 1
         * @maximum 1000
         * @default 10
         */
        size: number;
        /**
         * Specific document source fields to return.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Whether to request highlights for the search query.
         * @default false
         */
        highlight: boolean;
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
          order: "asc" | "desc";
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
  }
}
