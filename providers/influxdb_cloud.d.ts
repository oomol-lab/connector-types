import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one InfluxDB Cloud Serverless bucket by ID. */
    "influxdb_cloud.get_bucket": {
      input: {
        /**
         * The InfluxDB bucket ID.
         * @minLength 1
         */
        bucketId: string;
      };
      output: {
        /** An InfluxDB Cloud bucket. */
        bucket: Record<string, unknown>;
      };
    };
    /** List InfluxDB Cloud Serverless buckets visible to the connected API token. */
    "influxdb_cloud.list_buckets": {
      input: {
        /**
         * Maximum number of buckets to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of buckets to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Bucket ID after which to begin the page.
         * @minLength 1
         */
        after?: string;
        /**
         * Return only buckets with this exact name.
         * @minLength 1
         */
        name?: string;
        /**
         * Return only the bucket with this ID.
         * @minLength 1
         */
        id?: string;
      };
      output: {
        /** Buckets returned by InfluxDB Cloud. */
        buckets: Array<Record<string, unknown>>;
        /** Pagination and resource links returned by InfluxDB Cloud. */
        links: Record<string, unknown>;
      };
    };
    /** Query an InfluxDB Cloud Serverless bucket with the v1-compatible InfluxQL HTTP API. */
    "influxdb_cloud.query_influxql": {
      input: {
        /**
         * Bucket name mapped to the InfluxDB v1 database parameter.
         * @minLength 1
         */
        database: string;
        /**
         * InfluxQL query to execute.
         * @minLength 1
         */
        query: string;
        /**
         * Optional retention policy name for the database-retention policy mapping.
         * @minLength 1
         */
        retentionPolicy?: string;
        /** Optional timestamp precision for unix epoch results. */
        epoch?: "ns" | "us" | "ms" | "s" | "m" | "h";
      };
      output: {
        /** InfluxQL statement results. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Synchronously write line protocol data to an InfluxDB Cloud Serverless bucket. */
    "influxdb_cloud.write_line_protocol": {
      input: {
        /**
         * Bucket name mapped to the InfluxDB v1 database parameter.
         * @minLength 1
         */
        database: string;
        /**
         * One or more newline-delimited line protocol points.
         * @minLength 1
         */
        lineProtocol: string;
        /**
         * Optional retention policy name.
         * @minLength 1
         */
        retentionPolicy?: string;
        /** Timestamp precision used by the line protocol body. */
        precision?: "ns" | "us" | "ms" | "s";
      };
      output: {
        /** Whether at least one point was written. */
        written: boolean;
        /** Whether InfluxDB rejected some points from the batch. */
        partial: boolean;
        /** Details about points rejected from a partially successful line protocol write. */
        rejected: Record<string, unknown> | null;
      };
    };
  }
}
