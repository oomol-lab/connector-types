import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Configure an existing Pinecone index. */
    "pinecone.configure_index": {
      input: {
        /**
         * The Pinecone index name. Index names must be unique within a project.
         * @minLength 1
         */
        name: string;
        /** Whether deletion protection is enabled. */
        deletionProtection?: "enabled" | "disabled";
        /** The replacement tags to set on the index. */
        tags?: Record<string, string>;
        /** A JSON object accepted or returned by Pinecone. */
        readCapacity?: Record<string, unknown>;
      };
      output: {
        /** A Pinecone index description. */
        index: {
          /** The index name. */
          name: string;
          /** The index host for data-plane operations. */
          host?: string;
          /** The vector dimension when present. */
          dimension?: number | null;
          /** The similarity metric used by the index. */
          metric?: string;
          /** The vector type stored by the index. */
          vector_type?: string;
          /** Whether deletion protection is enabled for the index. */
          deletion_protection?: string;
          /** A JSON object accepted or returned by Pinecone. */
          spec?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          status?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          tags?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Pinecone serverless index. */
    "pinecone.create_index": {
      input: {
        /**
         * The Pinecone index name. Index names must be unique within a project.
         * @minLength 1
         */
        name: string;
        /**
         * The vector dimension for dense indexes.
         * @minimum 1
         * @maximum 20000
         */
        dimension?: number;
        /** The similarity metric for the index. */
        metric?: "cosine" | "euclidean" | "dotproduct";
        /** The public cloud for a serverless index. */
        cloud: "aws" | "gcp" | "azure";
        /**
         * The cloud region where the serverless index is created.
         * @minLength 1
         */
        region: string;
        /** The index vector type. */
        vectorType?: "dense" | "sparse";
        /** Whether deletion protection is enabled. */
        deletionProtection?: "enabled" | "disabled";
        /** The tags to attach to the index. */
        tags?: Record<string, string>;
      };
      output: {
        /** A Pinecone index description. */
        index: {
          /** The index name. */
          name: string;
          /** The index host for data-plane operations. */
          host?: string;
          /** The vector dimension when present. */
          dimension?: number | null;
          /** The similarity metric used by the index. */
          metric?: string;
          /** The vector type stored by the index. */
          vector_type?: string;
          /** Whether deletion protection is enabled for the index. */
          deletion_protection?: string;
          /** A JSON object accepted or returned by Pinecone. */
          spec?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          status?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          tags?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Pinecone index by name. */
    "pinecone.delete_index": {
      input: {
        /**
         * The Pinecone index name. Index names must be unique within a project.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether Pinecone accepted the delete request. */
        accepted: boolean;
      };
    };
    /** Delete vectors from a Pinecone index namespace by IDs, filter, or deleteAll. */
    "pinecone.delete_vectors": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /**
         * The vector IDs to delete.
         * @minItems 1
         * @maxItems 1000
         */
        ids?: Array<string>;
        /**
         * The Pinecone namespace to read or write. Omit this field to use the default namespace.
         * @minLength 1
         */
        namespace?: string;
        /** The Pinecone metadata filter expression used to select records. */
        filter?: Record<string, unknown>;
        /** Whether to delete all records in the namespace. */
        deleteAll?: boolean;
      };
      output: {
        /** A JSON object accepted or returned by Pinecone. */
        raw: Record<string, unknown>;
      };
    };
    /** Describe one Pinecone index by name. */
    "pinecone.describe_index": {
      input: {
        /**
         * The Pinecone index name. Index names must be unique within a project.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Pinecone index description. */
        index: {
          /** The index name. */
          name: string;
          /** The index host for data-plane operations. */
          host?: string;
          /** The vector dimension when present. */
          dimension?: number | null;
          /** The similarity metric used by the index. */
          metric?: string;
          /** The vector type stored by the index. */
          vector_type?: string;
          /** Whether deletion protection is enabled for the index. */
          deletion_protection?: string;
          /** A JSON object accepted or returned by Pinecone. */
          spec?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          status?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          tags?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch Pinecone vectors by ID from one namespace. */
    "pinecone.fetch_vectors": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /**
         * The vector IDs to fetch.
         * @minItems 1
         * @maxItems 1000
         */
        ids: Array<string>;
        /**
         * The Pinecone namespace to read or write. Omit this field to use the default namespace.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** The vectors keyed by ID. */
        vectors: Record<string, {
            /** The vector identifier. */
            id: string;
            /**
             * The dense vector values.
             * @minItems 1
             * @maxItems 20000
             */
            values?: Array<number>;
            /** The sparse vector values and indices. */
            sparseValues?: {
              /**
               * The sparse vector indices.
               * @minItems 1
               * @maxItems 2048
               */
              indices: Array<number>;
              /**
               * The sparse vector values matching the indices array.
               * @minItems 1
               * @maxItems 2048
               */
              values: Array<number>;
            };
            /** The metadata object associated with a Pinecone record. */
            metadata?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
        /** The namespace returned by Pinecone. */
        namespace: string | null;
        /** The Pinecone usage object returned by the operation. */
        usage: Record<string, unknown> | null;
        /** A JSON object accepted or returned by Pinecone. */
        raw: Record<string, unknown>;
      };
    };
    /** Get statistics for a Pinecone index. */
    "pinecone.get_index_stats": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /** The Pinecone metadata filter expression used to select records. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** A JSON object accepted or returned by Pinecone. */
        stats: Record<string, unknown>;
      };
    };
    /** List Pinecone indexes in the authenticated project. */
    "pinecone.list_indexes": {
      input: Record<string, never>;
      output: {
        /** The indexes returned by Pinecone. */
        indexes: Array<{
          /** The index name. */
          name: string;
          /** The index host for data-plane operations. */
          host?: string;
          /** The vector dimension when present. */
          dimension?: number | null;
          /** The similarity metric used by the index. */
          metric?: string;
          /** The vector type stored by the index. */
          vector_type?: string;
          /** Whether deletion protection is enabled for the index. */
          deletion_protection?: string;
          /** A JSON object accepted or returned by Pinecone. */
          spec?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          status?: Record<string, unknown>;
          /** A JSON object accepted or returned by Pinecone. */
          tags?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List vector IDs in a Pinecone serverless index namespace. */
    "pinecone.list_vector_ids": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /**
         * The Pinecone namespace to read or write. Omit this field to use the default namespace.
         * @minLength 1
         */
        namespace?: string;
        /**
         * The ID prefix used to filter vector IDs.
         * @minLength 1
         */
        prefix?: string;
        /**
         * The maximum number of IDs to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The pagination token returned by a previous Pinecone response.
         * @minLength 1
         */
        paginationToken?: string;
      };
      output: {
        /** The vector ID objects returned by Pinecone. */
        vectors: Array<Record<string, unknown>>;
        /** A JSON object accepted or returned by Pinecone. */
        pagination: Record<string, unknown> | null;
        /** A JSON object accepted or returned by Pinecone. */
        raw: Record<string, unknown>;
      };
    };
    /** Search a Pinecone index namespace with a query vector. */
    "pinecone.query_vectors": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /**
         * The dense vector values.
         * @minItems 1
         * @maxItems 20000
         */
        values?: Array<number>;
        /** The sparse vector values and indices. */
        sparseValues?: {
          /**
           * The sparse vector indices.
           * @minItems 1
           * @maxItems 2048
           */
          indices: Array<number>;
          /**
           * The sparse vector values matching the indices array.
           * @minItems 1
           * @maxItems 2048
           */
          values: Array<number>;
        };
        /**
         * The vector ID to use as the query vector.
         * @minLength 1
         */
        id?: string;
        /**
         * The number of similar vectors to return.
         * @minimum 1
         * @maximum 10000
         */
        topK: number;
        /**
         * The Pinecone namespace to read or write. Omit this field to use the default namespace.
         * @minLength 1
         */
        namespace?: string;
        /** The Pinecone metadata filter expression used to select records. */
        filter?: Record<string, unknown>;
        /** Whether to include vector values in the response. */
        includeValues?: boolean;
        /** Whether to include vector metadata in the response. */
        includeMetadata?: boolean;
      };
      output: {
        /** The vector matches returned by Pinecone. */
        matches: Array<Record<string, unknown>>;
        /** The namespace returned by Pinecone. */
        namespace: string | null;
        /** The Pinecone usage object returned by the operation. */
        usage: Record<string, unknown> | null;
        /** A JSON object accepted or returned by Pinecone. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Pinecone vector or metadata-matched records in a namespace. */
    "pinecone.update_vector": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /**
         * The vector ID to update.
         * @minLength 1
         */
        id?: string;
        /**
         * The dense vector values.
         * @minItems 1
         * @maxItems 20000
         */
        values?: Array<number>;
        /** The sparse vector values and indices. */
        sparseValues?: {
          /**
           * The sparse vector indices.
           * @minItems 1
           * @maxItems 2048
           */
          indices: Array<number>;
          /**
           * The sparse vector values matching the indices array.
           * @minItems 1
           * @maxItems 2048
           */
          values: Array<number>;
        };
        /** The metadata object associated with a Pinecone record. */
        setMetadata?: Record<string, unknown>;
        /**
         * The Pinecone namespace to read or write. Omit this field to use the default namespace.
         * @minLength 1
         */
        namespace?: string;
        /** The Pinecone metadata filter expression used to select records. */
        filter?: Record<string, unknown>;
        /** Whether to count matching records without applying the update. */
        dryRun?: boolean;
      };
      output: {
        /**
         * The number of records matched when Pinecone returns a count.
         * @minimum 0
         */
        matchedRecords: number | null;
        /** A JSON object accepted or returned by Pinecone. */
        raw: Record<string, unknown>;
      };
    };
    /** Upsert dense or sparse vectors into a Pinecone index namespace. */
    "pinecone.upsert_vectors": {
      input: {
        /**
         * The full Pinecone index host URL used for data-plane operations, such as https://example.svc.us-east-1-aws.pinecone.io.
         * @format uri
         */
        indexHost: string;
        /**
         * The vectors to upsert.
         * @minItems 1
         * @maxItems 1000
         */
        vectors: Array<{
          /**
           * The vector identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The dense vector values.
           * @minItems 1
           * @maxItems 20000
           */
          values?: Array<number>;
          /** The sparse vector values and indices. */
          sparseValues?: {
            /**
             * The sparse vector indices.
             * @minItems 1
             * @maxItems 2048
             */
            indices: Array<number>;
            /**
             * The sparse vector values matching the indices array.
             * @minItems 1
             * @maxItems 2048
             */
            values: Array<number>;
          };
          /** The metadata object associated with a Pinecone record. */
          metadata?: Record<string, unknown>;
        }>;
        /**
         * The Pinecone namespace to read or write. Omit this field to use the default namespace.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /**
         * The number of vectors upserted.
         * @minimum 0
         */
        upsertedCount: number;
        /** A JSON object accepted or returned by Pinecone. */
        raw: Record<string, unknown>;
      };
    };
  }
}
