import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get extended information about a CockroachDB Cloud cluster. */
    "cockroach_labs.get_cluster": {
      input: {
        /**
         * CockroachDB Cloud cluster ID.
         * @minLength 1
         */
        clusterId: string;
      };
      output: {
        /** CockroachDB Cloud cluster record. */
        cluster: {
          /** CockroachDB Cloud cluster ID. */
          id?: string;
          /** CockroachDB Cloud cluster name. */
          name?: string;
          /** Cluster lifecycle state. */
          state?: string;
          /** Cluster cloud provider. */
          cloud_provider?: string;
          /** Cluster plan. */
          plan?: string;
          /** Cluster regions returned by CockroachDB Cloud. */
          regions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get information about the caller's CockroachDB Cloud organization. */
    "cockroach_labs.get_organization": {
      input: Record<string, never>;
      output: {
        /** CockroachDB Cloud organization information. */
        organization: {
          /** CockroachDB Cloud organization ID. */
          id?: string;
          /** CockroachDB Cloud organization label. */
          label?: string;
          /** CockroachDB Cloud organization name. */
          name?: string;
          /** Organization creation timestamp. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List cloud regions available for new CockroachDB Cloud clusters and nodes. */
    "cockroach_labs.list_available_regions": {
      input: {
        /** Cloud provider to filter by. */
        provider?: "GCP" | "AWS" | "AZURE";
        /** Whether to only show regions available for serverless clusters. */
        serverless?: boolean;
        /**
         * Opaque pagination page token returned by CockroachDB Cloud.
         * @minLength 1
         */
        page?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Read data as of this RFC 3339 timestamp when supported.
         * @format date-time
         */
        asOfTime?: string;
        /** Pagination sort order. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** Regions returned by CockroachDB Cloud. */
        regions: Array<{
          /** Cloud provider region name. */
          name?: string;
          /** Human-readable region location. */
          location?: string;
          /** Cloud provider for this region. */
          provider?: string;
          /** Whether this region supports serverless clusters. */
          serverless?: boolean;
          /** Distance in miles based on the caller IP address. */
          distance?: number;
          [key: string]: unknown;
        }>;
        /** CockroachDB Cloud keyset pagination metadata. */
        pagination: {
          /** Token for the next page when returned by CockroachDB Cloud. */
          nextPage?: string;
          /** Token for the previous page when returned by CockroachDB Cloud. */
          previousPage?: string;
        } | null;
      };
    };
    /** List nodes for a CockroachDB Cloud cluster. */
    "cockroach_labs.list_cluster_nodes": {
      input: {
        /**
         * CockroachDB Cloud cluster ID.
         * @minLength 1
         */
        clusterId: string;
        /**
         * Optional region name used to filter cluster nodes.
         * @minLength 1
         */
        regionName?: string;
        /**
         * Opaque pagination page token returned by CockroachDB Cloud.
         * @minLength 1
         */
        page?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Read data as of this RFC 3339 timestamp when supported.
         * @format date-time
         */
        asOfTime?: string;
        /** Pagination sort order. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** Nodes returned by CockroachDB Cloud. */
        nodes: Array<{
          /** Node name. */
          name?: string;
          /** Region where the node runs. */
          region_name?: string;
          /** Node status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** CockroachDB Cloud keyset pagination metadata. */
        pagination: {
          /** Token for the next page when returned by CockroachDB Cloud. */
          nextPage?: string;
          /** Token for the previous page when returned by CockroachDB Cloud. */
          previousPage?: string;
        } | null;
      };
    };
    /** List CockroachDB Cloud clusters in the organization. */
    "cockroach_labs.list_clusters": {
      input: {
        /** Whether to include deleted or failed clusters when allowed. */
        showInactive?: boolean;
        /** Field used to sort clusters. */
        sortBy?: "NAME" | "CREATED_AT" | "DELETED_AT";
        /**
         * Opaque pagination page token returned by CockroachDB Cloud.
         * @minLength 1
         */
        page?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Read data as of this RFC 3339 timestamp when supported.
         * @format date-time
         */
        asOfTime?: string;
        /** Pagination sort order. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** Clusters returned by CockroachDB Cloud. */
        clusters: Array<{
          /** CockroachDB Cloud cluster ID. */
          id?: string;
          /** CockroachDB Cloud cluster name. */
          name?: string;
          /** Cluster lifecycle state. */
          state?: string;
          /** Cluster cloud provider. */
          cloud_provider?: string;
          /** Cluster plan. */
          plan?: string;
          /** Cluster regions returned by CockroachDB Cloud. */
          regions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** CockroachDB Cloud keyset pagination metadata. */
        pagination: {
          /** Token for the next page when returned by CockroachDB Cloud. */
          nextPage?: string;
          /** Token for the previous page when returned by CockroachDB Cloud. */
          previousPage?: string;
        } | null;
      };
    };
    /** List databases for a CockroachDB Cloud cluster. */
    "cockroach_labs.list_databases": {
      input: {
        /**
         * CockroachDB Cloud cluster ID.
         * @minLength 1
         */
        clusterId: string;
        /**
         * Opaque pagination page token returned by CockroachDB Cloud.
         * @minLength 1
         */
        page?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Read data as of this RFC 3339 timestamp when supported.
         * @format date-time
         */
        asOfTime?: string;
        /** Pagination sort order. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** Databases returned by CockroachDB Cloud. */
        databases: Array<{
          /** Database name. */
          name?: string;
          /** Table count returned by CockroachDB Cloud when present. */
          table_count?: string;
          [key: string]: unknown;
        }>;
        /** CockroachDB Cloud keyset pagination metadata. */
        pagination: {
          /** Token for the next page when returned by CockroachDB Cloud. */
          nextPage?: string;
          /** Token for the previous page when returned by CockroachDB Cloud. */
          previousPage?: string;
        } | null;
      };
    };
    /** List SQL users for a CockroachDB Cloud cluster. */
    "cockroach_labs.list_sql_users": {
      input: {
        /**
         * CockroachDB Cloud cluster ID.
         * @minLength 1
         */
        clusterId: string;
        /**
         * Opaque pagination page token returned by CockroachDB Cloud.
         * @minLength 1
         */
        page?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Read data as of this RFC 3339 timestamp when supported.
         * @format date-time
         */
        asOfTime?: string;
        /** Pagination sort order. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** SQL users returned by CockroachDB Cloud. */
        users: Array<{
          /** SQL username. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** CockroachDB Cloud keyset pagination metadata. */
        pagination: {
          /** Token for the next page when returned by CockroachDB Cloud. */
          nextPage?: string;
          /** Token for the previous page when returned by CockroachDB Cloud. */
          previousPage?: string;
        } | null;
      };
    };
  }
}
