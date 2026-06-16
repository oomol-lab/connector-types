import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a new record or replace an existing Algolia record using its objectID. */
    "algolia.add_or_replace_record": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /** The Algolia record payload. */
        record: {
          /**
           * The Algolia record objectID.
           * @minLength 1
           */
          objectID: string;
          [key: string]: unknown;
        };
        /** Whether to forward the write operation to replicas. */
        forwardToReplicas?: boolean;
      };
      output: {
        /** The Algolia task identifier. */
        taskID: number;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID?: string;
        [key: string]: unknown;
      };
    };
    /** Browse records from a single Algolia index, optionally continuing with a cursor. */
    "algolia.browse_index": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /** The cursor returned by the previous browse response. */
        cursor?: string;
        /** An optional browse query string. */
        query?: string;
        /**
         * The filter expression using Algolia's SQL-like syntax.
         * @minLength 1
         */
        filters?: string;
        /** An Algolia filter expression in string or array form. */
        facetFilters?: string | Array<string | Array<string>>;
        /** An Algolia filter expression in string or array form. */
        numericFilters?: string | Array<string | Array<string>>;
        /** An Algolia filter expression in string or array form. */
        tagFilters?: string | Array<string | Array<string>>;
        /**
         * The record attributes to include in each hit.
         * @minItems 1
         */
        attributesToRetrieve?: Array<string>;
        /**
         * The number of hits to return per page.
         * @exclusiveMinimum 0
         */
        hitsPerPage?: number;
      };
      output: {
        /** The records returned by the browse request. */
        hits: Array<{
          /**
           * The Algolia record objectID.
           * @minLength 1
           */
          objectID?: string;
          [key: string]: unknown;
        }>;
        /** The cursor to continue browsing from the next page. */
        cursor?: string;
        /** The total number of matching records, when available. */
        nbHits?: number;
        /** The time the server took to process the request, in milliseconds. */
        processingTimeMS?: number;
        [key: string]: unknown;
      };
    };
    /** Delete Algolia records that match a filter expression. */
    "algolia.delete_records_by_filter": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /**
         * The filter expression used to select records to delete.
         * @minLength 1
         */
        filters: string;
      };
      output: {
        /** The Algolia task identifier. */
        taskID: number;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single record from an Algolia index by objectID. */
    "algolia.get_record": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID: string;
        /**
         * The record attributes to include in the response.
         * @minItems 1
         */
        attributesToRetrieve?: Array<string>;
      };
      output: {
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID?: string;
        [key: string]: unknown;
      };
    };
    /** List Algolia indices accessible to the current API key. */
    "algolia.list_indices": {
      input: {
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of hits to return per page.
         * @exclusiveMinimum 0
         */
        hitsPerPage?: number;
      };
      output: {
        /** The list of index summaries. */
        items: Array<{
          /** The Algolia index name. */
          name: string;
          /** The number of records in the index. */
          entries?: number;
          /** The size of the index data in bytes. */
          dataSize?: number;
          /** The total size of the index files in bytes. */
          fileSize?: number;
          /** The number of pending tasks for the index. */
          numberOfPendingTasks?: number;
          /** The primary index name, when this index is a replica. */
          primary?: string;
          /** The configured replica index names. */
          replicas?: Array<string>;
          /** Whether the index has a pending task. */
          pendingTask?: boolean;
          [key: string]: unknown;
        }>;
        /** The zero-based page number in the response. */
        page?: number;
        /** The total number of pages. */
        nbPages?: number;
        [key: string]: unknown;
      };
    };
    /** Save a single Algolia rule by objectID. */
    "algolia.save_rule": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /** The Algolia rule payload. */
        rule: {
          /**
           * The Algolia record objectID.
           * @minLength 1
           */
          objectID: string;
          [key: string]: unknown;
        };
        /** Whether to forward the write operation to replicas. */
        forwardToReplicas?: boolean;
      };
      output: {
        /** The Algolia task identifier. */
        taskID: number;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID?: string;
        [key: string]: unknown;
      };
    };
    /** Save a single Algolia synonym by objectID. */
    "algolia.save_synonym": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /** The Algolia synonym payload. */
        synonym: {
          /**
           * The Algolia record objectID.
           * @minLength 1
           */
          objectID: string;
          [key: string]: unknown;
        };
        /** Whether to forward the write operation to replicas. */
        forwardToReplicas?: boolean;
      };
      output: {
        /** The Algolia task identifier. */
        taskID: number;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID?: string;
        [key: string]: unknown;
      };
    };
    /** Search a single Algolia index with the most common search parameters. */
    "algolia.search_index": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /** The search query string. */
        query?: string;
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of hits to return per page.
         * @exclusiveMinimum 0
         */
        hitsPerPage?: number;
        /**
         * The filter expression using Algolia's SQL-like syntax.
         * @minLength 1
         */
        filters?: string;
        /** An Algolia filter expression in string or array form. */
        facetFilters?: string | Array<string | Array<string>>;
        /** An Algolia filter expression in string or array form. */
        numericFilters?: string | Array<string | Array<string>>;
        /** An Algolia filter expression in string or array form. */
        tagFilters?: string | Array<string | Array<string>>;
        /**
         * The facet names to retrieve.
         * @minItems 1
         */
        facets?: Array<string>;
        /**
         * The record attributes to include in each hit.
         * @minItems 1
         */
        attributesToRetrieve?: Array<string>;
        /**
         * The attributes to highlight in each hit.
         * @minItems 1
         */
        attributesToHighlight?: Array<string>;
        /**
         * The attributes to snippet in each hit.
         * @minItems 1
         */
        attributesToSnippet?: Array<string>;
        /** The geolocation point in `lat,lng` form. */
        aroundLatLng?: string;
        /** The geolocation radius restriction. */
        aroundRadius?: number | "all";
        /** Bounding box coordinates used to restrict the search area. */
        insideBoundingBox?: string | Array<number> | Array<Array<number>>;
        /** Polygon coordinates used to restrict the search area. */
        insidePolygon?: string | Array<number> | Array<Array<number>>;
        /** Whether to include click analytics information. */
        clickAnalytics?: boolean;
        /** Whether to send the search to Algolia analytics. */
        analytics?: boolean;
        /** Whether to include ranking information in the response. */
        getRankingInfo?: boolean;
        /** Whether to sum OR filter scores instead of taking the maximum. */
        sumOrFiltersScores?: boolean;
      };
      output: {
        /** The search hits returned by Algolia. */
        hits: Array<{
          /**
           * The Algolia record objectID.
           * @minLength 1
           */
          objectID?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching hits. */
        nbHits?: number;
        /** The zero-based page number in the response. */
        page?: number;
        /** The total number of pages. */
        nbPages?: number;
        /** The number of hits returned per page. */
        hitsPerPage?: number;
        /** The time the server took to process the request, in milliseconds. */
        processingTimeMS?: number;
        /** Whether the reported hit count is exhaustive. */
        exhaustiveNbHits?: boolean;
        /** The query used for the search. */
        query?: string;
        /** The URL-encoded request parameters. */
        params?: string;
        /** Facet counts returned by Algolia. */
        facets?: Record<string, unknown>;
        /** Facet statistics returned by Algolia. */
        facetStats?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Partially update an existing Algolia record by objectID. */
    "algolia.update_record_partially": {
      input: {
        /**
         * The Algolia index name.
         * @minLength 1
         */
        indexName: string;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID: string;
        /** The partial Algolia record attributes to update. */
        attributesToUpdate: Record<string, unknown>;
        /** Whether to create the record if it doesn't exist. */
        createIfNotExists?: boolean;
        /** Whether to forward the write operation to replicas. */
        forwardToReplicas?: boolean;
      };
      output: {
        /** The Algolia task identifier. */
        taskID: number;
        /**
         * The Algolia record objectID.
         * @minLength 1
         */
        objectID?: string;
        [key: string]: unknown;
      };
    };
  }
}
