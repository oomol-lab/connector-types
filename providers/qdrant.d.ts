import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Qdrant Cloud collection with one unnamed dense vector configuration. */
    "qdrant.create_collection": {
      input: {
        /**
         * The Qdrant collection name. The names `.` and `..` are not supported.
         * @minLength 1
         */
        collectionName: string;
        /**
         * The dense vector dimension.
         * @exclusiveMinimum 0
         */
        vectorSize: number;
        /** The distance function used by the collection. */
        distance: "Cosine" | "Euclid" | "Dot" | "Manhattan";
      };
      output: {
        /** Whether Qdrant created the collection. */
        created: boolean;
      };
    };
    /** Retrieve configuration and status information for one Qdrant collection. */
    "qdrant.get_collection": {
      input: {
        /**
         * The Qdrant collection name. The names `.` and `..` are not supported.
         * @minLength 1
         */
        collectionName: string;
      };
      output: {
        /** A Qdrant collection description. */
        collection: {
          /** The collection status. */
          status: unknown;
          /** The collection optimizer status. */
          optimizer_status: unknown;
          /**
           * The approximate indexed vector count.
           * @minimum 0
           */
          indexed_vectors_count?: number | null;
          /**
           * The approximate point count.
           * @minimum 0
           */
          points_count?: number | null;
          /**
           * The number of collection segments.
           * @minimum 0
           */
          segments_count: number;
          /** The collection configuration. */
          config: Record<string, unknown>;
          /** The collection payload index schema. */
          payload_schema: Record<string, unknown>;
          /** Collection warnings. */
          warnings?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one point by numeric ID or UUID from a Qdrant collection. */
    "qdrant.get_point": {
      input: {
        /**
         * The Qdrant collection name. The names `.` and `..` are not supported.
         * @minLength 1
         */
        collectionName: string;
        /** A Qdrant numeric or UUID point ID. */
        id: number | string;
      };
      output: {
        /** A Qdrant point record. */
        point: {
          /** A Qdrant numeric or UUID point ID. */
          id: number | string;
          /** A JSON object stored with the point. */
          payload?: Record<string, unknown> | null;
          /**
           * A dense unnamed vector.
           * @minItems 1
           */
          vector?: Array<number> | null;
          /** The Qdrant shard key when present. */
          shard_key?: unknown;
          /** The Qdrant order value when present. */
          order_value?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** List the Qdrant collections visible to the authenticated API key. */
    "qdrant.list_collections": {
      input: Record<string, never>;
      output: {
        /** The visible Qdrant collections. */
        collections: Array<{
          /**
           * The collection name.
           * @minLength 1
           */
          name: string;
        }>;
      };
    };
    /** Search a dense-vector Qdrant collection with an optional payload filter. */
    "qdrant.query_points": {
      input: {
        /**
         * The Qdrant collection name. The names `.` and `..` are not supported.
         * @minLength 1
         */
        collectionName: string;
        /**
         * A dense unnamed vector.
         * @minItems 1
         */
        vector: Array<number>;
        /** A Qdrant filter. Nested conditions are validated by Qdrant. */
        filter?: {
          /** Conditions that must match. */
          must?: unknown;
          /** Conditions that must not match. */
          must_not?: unknown;
          /** Conditions where at least one should match. */
          should?: unknown;
          /** Conditions where at least `min_count` entries must match. */
          min_should?: {
            /** The Qdrant filter conditions to evaluate. */
            conditions: Array<unknown>;
            /**
             * The minimum number of conditions that must match.
             * @minimum 0
             */
            min_count: number;
          };
          [key: string]: unknown;
        };
        /**
         * The connector page size, from 1 to 1,000 points.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Whether to include point payloads. */
        withPayload?: boolean;
        /** Whether to include point vectors. */
        withVector?: boolean;
        /**
         * The number of matching points to skip.
         * @minimum 0
         */
        offset?: number;
        /** The minimum score a result must have. */
        scoreThreshold?: number;
      };
      output: {
        /** The scored points returned by Qdrant. */
        points: Array<{
          /** A Qdrant numeric or UUID point ID. */
          id: number | string;
          /**
           * The point version.
           * @minimum 0
           */
          version: number;
          /** The similarity score. */
          score: number;
          /** A JSON object stored with the point. */
          payload?: Record<string, unknown> | null;
          /**
           * A dense unnamed vector.
           * @minItems 1
           */
          vector?: Array<number> | null;
          /** The Qdrant shard key when present. */
          shard_key?: unknown;
          /** The Qdrant order value when present. */
          order_value?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read one page of points from a Qdrant collection with an optional payload filter. */
    "qdrant.scroll_points": {
      input: {
        /**
         * The Qdrant collection name. The names `.` and `..` are not supported.
         * @minLength 1
         */
        collectionName: string;
        /** A Qdrant numeric or UUID point ID. */
        offset?: number | string;
        /** A Qdrant filter. Nested conditions are validated by Qdrant. */
        filter?: {
          /** Conditions that must match. */
          must?: unknown;
          /** Conditions that must not match. */
          must_not?: unknown;
          /** Conditions where at least one should match. */
          should?: unknown;
          /** Conditions where at least `min_count` entries must match. */
          min_should?: {
            /** The Qdrant filter conditions to evaluate. */
            conditions: Array<unknown>;
            /**
             * The minimum number of conditions that must match.
             * @minimum 0
             */
            min_count: number;
          };
          [key: string]: unknown;
        };
        /**
         * The connector page size, from 1 to 1,000 points.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Whether to include point payloads. */
        withPayload?: boolean;
        /** Whether to include point vectors. */
        withVector?: boolean;
      };
      output: {
        /** The point records returned by Qdrant. */
        points: Array<{
          /** A Qdrant numeric or UUID point ID. */
          id: number | string;
          /** A JSON object stored with the point. */
          payload?: Record<string, unknown> | null;
          /**
           * A dense unnamed vector.
           * @minItems 1
           */
          vector?: Array<number> | null;
          /** The Qdrant shard key when present. */
          shard_key?: unknown;
          /** The Qdrant order value when present. */
          order_value?: unknown;
          [key: string]: unknown;
        }>;
        /** A Qdrant numeric or UUID point ID. */
        nextOffset: number | string | null;
        /** Whether there is no next page. */
        complete: boolean;
      };
    };
    /** Insert or replace dense-vector points in a Qdrant collection and wait for the write to commit. */
    "qdrant.upsert_points": {
      input: {
        /**
         * The Qdrant collection name. The names `.` and `..` are not supported.
         * @minLength 1
         */
        collectionName: string;
        /**
         * The points to upsert in one connector request, limited to 1,000 points.
         * @minItems 1
         * @maxItems 1000
         */
        points: Array<{
          /** A Qdrant numeric or UUID point ID. */
          id: number | string;
          /**
           * A dense unnamed vector.
           * @minItems 1
           */
          vector: Array<number>;
          /** A JSON object stored with the point. */
          payload?: Record<string, unknown>;
        }>;
      };
      output: {
        /**
         * The Qdrant operation ID when returned, within the JavaScript safe-integer range.
         * @minimum 0
         */
        operationId: number | null;
        /** The Qdrant write status. */
        status: "acknowledged" | "completed" | "wait_timeout";
      };
    };
  }
}
