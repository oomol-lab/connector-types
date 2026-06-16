import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one TiDB Cloud API key by access key. */
    "tidb.get_api_key": {
      input: {
        /** The public access key value of the TiDB Cloud API key to fetch. */
        accessKey: string;
      };
      output: {
        /** The API key resource name. */
        name?: string | null;
        /** The public access key value. */
        accessKey: string;
        /** The display name of the API key. */
        displayName?: string | null;
        /** The role assigned to the API key. */
        role?: string | null;
        /** The masked secret key value returned by TiDB Cloud. */
        secretKey?: string | null;
      };
    };
    /** Fetch one TiDB Cloud Starter or Essential branch by branch ID. */
    "tidb.get_branch": {
      input: {
        /** The TiDB Cloud Starter or Essential cluster ID. */
        clusterId: string;
        /** The TiDB Cloud branch ID to fetch. */
        branchId: string;
        /** The detail level for the branch response. */
        view?: "BASIC" | "FULL";
      };
      output: {
        /** The branch resource name, if returned by TiDB Cloud. */
        name?: string;
        /** The branch ID, if returned by TiDB Cloud. */
        branchId?: string;
        /** The user-defined branch display name, if returned. */
        displayName?: string;
        /** The cluster ID to which the branch belongs. */
        clusterId?: string;
        /** The parent branch ID, if returned by TiDB Cloud. */
        parentId?: string;
        /** The current branch state, if returned by TiDB Cloud. */
        state?: string;
        /** The branch creation timestamp, if returned. */
        createTime?: string;
        /** The branch update timestamp, if returned. */
        updateTime?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one TiDB Cloud Starter, Essential, or Dedicated cluster by ID. */
    "tidb.get_cluster": {
      input: {
        /** The TiDB Cloud API family to query. */
        apiFamily: "starter_essential" | "dedicated";
        /** The TiDB Cloud cluster ID to fetch. */
        clusterId: string;
        /** The detail level for Starter and Essential clusters. */
        view?: "BASIC" | "FULL";
      };
      output: {
        /** The cluster resource name, if returned by TiDB Cloud. */
        name?: string;
        /** The TiDB Cloud cluster ID. */
        clusterId?: string;
        /** The user-defined display name of the cluster, if returned. */
        displayName?: string;
        /** The current cluster state, if returned by TiDB Cloud. */
        state?: string;
        /** The TiDB version of the cluster, if returned. */
        version?: string;
        /** The region ID for a Dedicated cluster, if returned. */
        regionId?: string;
        /** The TiDB Cloud region payload returned by the API. */
        region?: {
          /** The region resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The region identifier, if returned by TiDB Cloud. */
          regionId?: string;
          /** The display name of the region, if returned by TiDB Cloud. */
          displayName?: string;
          /** The cloud provider where the region is located, if returned. */
          cloudProvider?: string;
          [key: string]: unknown;
        };
        /** The cloud provider where the cluster is located, if returned. */
        cloudProvider?: string;
        /** The service plan for a Starter or Essential instance, if returned. */
        servicePlan?: string;
        /** The labels returned by TiDB Cloud. */
        labels?: Record<string, string> | null;
        /** The cluster creation timestamp, if returned by TiDB Cloud. */
        createTime?: string;
        /** The cluster update timestamp, if returned by TiDB Cloud. */
        updateTime?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one TiDB Cloud Starter or Essential export task. */
    "tidb.get_export": {
      input: {
        /** The TiDB Cloud Starter or Essential cluster ID. */
        clusterId: string;
        /** The TiDB Cloud export task ID to fetch. */
        exportId: string;
      };
      output: {
        /** The export task resource name, if returned by TiDB Cloud. */
        name?: string;
        /** The export task ID, if returned by TiDB Cloud. */
        exportId?: string;
        /** The cluster ID for the export task. */
        clusterId?: string;
        /** The display name of the export task, if returned. */
        displayName?: string;
        /** The current export task state, if returned by TiDB Cloud. */
        state?: string;
        /** The export task creation timestamp, if returned. */
        createTime?: string;
        /** The export task update timestamp, if returned. */
        updateTime?: string | null;
        /** The export task completion timestamp, if returned. */
        completeTime?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch one TiDB Cloud Starter, Essential, or Dedicated import task. */
    "tidb.get_import": {
      input: {
        /** The TiDB Cloud API family to query. */
        apiFamily: "starter_essential" | "dedicated";
        /** The TiDB Cloud cluster ID that contains the import task. */
        clusterId: string;
        /** The TiDB Cloud import task ID to fetch. */
        importId: string;
      };
      output: {
        /** The import task resource name, if returned by TiDB Cloud. */
        name?: string;
        /** The import task ID, if returned by TiDB Cloud. */
        importId?: string;
        /** The deprecated import task ID field, if returned by TiDB Cloud. */
        id?: string;
        /** The target cluster ID for the import task. */
        clusterId?: string;
        /** The current import task state, if returned by TiDB Cloud. */
        state?: string;
        /** The import task completion percentage, if returned. */
        completePercent?: number;
        /** The import task creation timestamp, if returned. */
        createTime?: string;
        /** The import task completion timestamp, if returned. */
        completeTime?: string | null;
        /** The import task message, if returned by TiDB Cloud. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one TiDB Cloud Dedicated node spec by region, component type, and key. */
    "tidb.get_node_spec": {
      input: {
        /** The TiDB Cloud region ID to query, such as aws-us-east-1. */
        regionId: string;
        /** The TiDB Dedicated component type to query. */
        componentType: "TIKV" | "TIDB" | "TIFLASH" | "PD";
        /** The TiDB Cloud node spec key to fetch, such as 8C32G. */
        nodeSpecKey: string;
        /** The project ID used to fetch node spec details. */
        projectId?: string;
        /** The cluster ID used to fetch node spec details. */
        clusterId?: string;
      };
      output: {
        /** The node spec resource name, if returned by TiDB Cloud. */
        name?: string;
        /** The region ID where the node spec is available. */
        regionId?: string;
        /** The TiDB component type for this node spec. */
        componentType?: string;
        /** The node spec key, such as 8C32G. */
        nodeSpecKey?: string;
        /** The display name of the node spec, if returned. */
        displayName?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch one TiDB Cloud Dedicated region by region ID. */
    "tidb.get_region": {
      input: {
        /** The TiDB Cloud region ID to fetch, such as aws-us-east-1. */
        regionId: string;
        /** The project ID used to fetch region details. */
        projectId?: string;
      };
      output: {
        /** The region resource name, if returned by TiDB Cloud. */
        name?: string;
        /** The region identifier, if returned by TiDB Cloud. */
        regionId?: string;
        /** The display name of the region, if returned by TiDB Cloud. */
        displayName?: string;
        /** The cloud provider where the region is located, if returned. */
        cloudProvider?: string;
        [key: string]: unknown;
      };
    };
    /** List TiDB Cloud API keys visible to the connected organization API key. */
    "tidb.list_api_keys": {
      input: {
        /** The project ID used to filter API keys. */
        projectId?: number;
        /**
         * The maximum number of API keys to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous list_api_keys response. */
        pageToken?: string;
      };
      output: {
        /** The API keys returned by TiDB Cloud. */
        apiKeys: Array<{
          /** The API key resource name. */
          name?: string | null;
          /** The public access key value. */
          accessKey: string;
          /** The display name of the API key. */
          displayName?: string | null;
          /** The role assigned to the API key. */
          role?: string | null;
          /** The masked secret key value returned by TiDB Cloud. */
          secretKey?: string | null;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
      };
    };
    /** List TiDB Cloud console audit logs for security and change tracking. */
    "tidb.list_audit_logs": {
      input: {
        /**
         * The maximum number of audit logs to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous list_audit_logs response. */
        pageToken?: string;
        /**
         * Return audit logs created on or after this timestamp.
         * @format date-time
         */
        startTime?: string;
        /**
         * Return audit logs created before or at this timestamp.
         * @format date-time
         */
        endTime?: string;
        /** The TiDB Cloud audit event type filter. */
        auditEventTypes?: string;
        /** The search keyword used to filter audit logs. */
        keyword?: string;
      };
      output: {
        /** The audit logs returned by TiDB Cloud. */
        auditLogs: Array<{
          /** The audit log ID, if returned by TiDB Cloud. */
          id?: string;
          /** The audit event type, if returned by TiDB Cloud. */
          eventType?: string;
          /** The operation result, if returned by TiDB Cloud. */
          result?: string;
          /** The email address of the user who performed the operation. */
          operationEmail?: string;
          /** The operation start timestamp, if returned by TiDB Cloud. */
          startTime?: string;
          /** The operation end timestamp, if returned by TiDB Cloud. */
          endTime?: string;
          /** The related project ID, if returned by TiDB Cloud. */
          projectId?: string;
          /** The related cluster ID, if returned by TiDB Cloud. */
          clusterId?: string;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List TiDB Cloud Starter or Essential branches for a cluster. */
    "tidb.list_branches": {
      input: {
        /** The TiDB Cloud Starter or Essential cluster ID whose branches to list. */
        clusterId: string;
        /**
         * The maximum number of branches to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous list_branches response. */
        pageToken?: string;
      };
      output: {
        /** The branches returned by TiDB Cloud. */
        branches: Array<{
          /** The branch resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The branch ID, if returned by TiDB Cloud. */
          branchId?: string;
          /** The user-defined branch display name, if returned. */
          displayName?: string;
          /** The cluster ID to which the branch belongs. */
          clusterId?: string;
          /** The parent branch ID, if returned by TiDB Cloud. */
          parentId?: string;
          /** The current branch state, if returned by TiDB Cloud. */
          state?: string;
          /** The branch creation timestamp, if returned. */
          createTime?: string;
          /** The branch update timestamp, if returned. */
          updateTime?: string;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List TiDB Cloud Starter, Essential, or Dedicated clusters. */
    "tidb.list_clusters": {
      input: {
        /** The TiDB Cloud API family to query. */
        apiFamily: "starter_essential" | "dedicated";
        /** The project ID used to filter Dedicated clusters. */
        projectId?: string;
        /** The Dedicated cluster IDs to include. */
        clusterIds?: Array<string>;
        /** The Dedicated region IDs to include. */
        regionIds?: Array<string>;
        /** The Dedicated cluster states to include. */
        clusterStates?: Array<string>;
        /** The Google AIP filter expression for Starter and Essential clusters. */
        filter?: string;
        /**
         * The maximum number of clusters to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous list_clusters response. */
        pageToken?: string;
        /** The number of clusters to skip before returning results. */
        skip?: number;
      };
      output: {
        /** The clusters returned by TiDB Cloud. */
        clusters: Array<{
          /** The cluster resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The TiDB Cloud cluster ID. */
          clusterId?: string;
          /** The user-defined display name of the cluster, if returned. */
          displayName?: string;
          /** The current cluster state, if returned by TiDB Cloud. */
          state?: string;
          /** The TiDB version of the cluster, if returned. */
          version?: string;
          /** The region ID for a Dedicated cluster, if returned. */
          regionId?: string;
          /** The TiDB Cloud region payload returned by the API. */
          region?: {
            /** The region resource name, if returned by TiDB Cloud. */
            name?: string;
            /** The region identifier, if returned by TiDB Cloud. */
            regionId?: string;
            /** The display name of the region, if returned by TiDB Cloud. */
            displayName?: string;
            /** The cloud provider where the region is located, if returned. */
            cloudProvider?: string;
            [key: string]: unknown;
          };
          /** The cloud provider where the cluster is located, if returned. */
          cloudProvider?: string;
          /** The service plan for a Starter or Essential instance, if returned. */
          servicePlan?: string;
          /** The labels returned by TiDB Cloud. */
          labels?: Record<string, string> | null;
          /** The cluster creation timestamp, if returned by TiDB Cloud. */
          createTime?: string;
          /** The cluster update timestamp, if returned by TiDB Cloud. */
          updateTime?: string;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List TiDB Cloud Starter or Essential export tasks. */
    "tidb.list_exports": {
      input: {
        /** The TiDB Cloud Starter or Essential cluster ID whose tasks to list. */
        clusterId: string;
        /**
         * The maximum number of tasks to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous task list response. */
        pageToken?: string;
        /** The official TiDB Cloud sorting expression, such as createTime desc. */
        orderBy?: string;
      };
      output: {
        /** The export tasks returned by TiDB Cloud. */
        exports: Array<{
          /** The export task resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The export task ID, if returned by TiDB Cloud. */
          exportId?: string;
          /** The cluster ID for the export task. */
          clusterId?: string;
          /** The display name of the export task, if returned. */
          displayName?: string;
          /** The current export task state, if returned by TiDB Cloud. */
          state?: string;
          /** The export task creation timestamp, if returned. */
          createTime?: string;
          /** The export task update timestamp, if returned. */
          updateTime?: string | null;
          /** The export task completion timestamp, if returned. */
          completeTime?: string | null;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List TiDB Cloud Starter, Essential, or Dedicated import tasks. */
    "tidb.list_imports": {
      input: {
        /** The TiDB Cloud API family to query. */
        apiFamily: "starter_essential" | "dedicated";
        /** The TiDB Cloud cluster ID whose tasks should be listed. */
        clusterId: string;
        /**
         * The maximum number of tasks to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous task list response. */
        pageToken?: string;
        /** The official TiDB Cloud sorting expression, such as createTime desc. */
        orderBy?: string;
      };
      output: {
        /** The import tasks returned by TiDB Cloud. */
        imports: Array<{
          /** The import task resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The import task ID, if returned by TiDB Cloud. */
          importId?: string;
          /** The deprecated import task ID field, if returned by TiDB Cloud. */
          id?: string;
          /** The target cluster ID for the import task. */
          clusterId?: string;
          /** The current import task state, if returned by TiDB Cloud. */
          state?: string;
          /** The import task completion percentage, if returned. */
          completePercent?: number;
          /** The import task creation timestamp, if returned. */
          createTime?: string;
          /** The import task completion timestamp, if returned. */
          completeTime?: string | null;
          /** The import task message, if returned by TiDB Cloud. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List TiDB Cloud Dedicated node specs available in a region. */
    "tidb.list_node_specs": {
      input: {
        /** The TiDB Cloud region ID to query, such as aws-us-east-1. */
        regionId: string;
        /** The TiDB Dedicated component type to query. */
        componentType?: "TIKV" | "TIDB" | "TIFLASH" | "PD";
        /** The project ID used to filter available node specs. */
        projectId?: string;
        /** The cluster ID used to filter available node specs. */
        clusterId?: string;
        /**
         * The maximum number of node specs to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous list_node_specs response. */
        pageToken?: string;
        /** The number of node specs to skip before returning results. */
        skip?: number;
      };
      output: {
        /** The node specs returned by TiDB Cloud. */
        nodeSpecs: Array<{
          /** The node spec resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The region ID where the node spec is available. */
          regionId?: string;
          /** The TiDB component type for this node spec. */
          componentType?: string;
          /** The node spec key, such as 8C32G. */
          nodeSpecKey?: string;
          /** The display name of the node spec, if returned. */
          displayName?: string;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List TiDB Cloud regions available to the connected organization API key. */
    "tidb.list_regions": {
      input: {
        /** The TiDB Cloud API family to query. */
        apiFamily: "starter_essential" | "dedicated";
        /** The cloud provider used to filter Dedicated regions. */
        cloudProvider?: string;
        /** The project ID used to list Dedicated regions. */
        projectId?: string;
        /**
         * The maximum number of regions to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token from a previous list_regions response. */
        pageToken?: string;
        /** The number of regions to skip before returning results. */
        skip?: number;
      };
      output: {
        /** The regions returned by TiDB Cloud. */
        regions: Array<{
          /** The region resource name, if returned by TiDB Cloud. */
          name?: string;
          /** The region identifier, if returned by TiDB Cloud. */
          regionId?: string;
          /** The display name of the region, if returned by TiDB Cloud. */
          displayName?: string;
          /** The cloud provider where the region is located, if returned. */
          cloudProvider?: string;
          [key: string]: unknown;
        }>;
        /** The token to retrieve the next page of results, if one is available. */
        nextPageToken: string | null;
        /** The total number of matching records, if returned by TiDB. */
        totalSize: number | null;
      };
    };
    /** List cloud providers available for TiDB Cloud Dedicated clusters. */
    "tidb.show_cloud_providers": {
      input: {
        /** The project ID used to filter available cloud providers. */
        projectId?: string;
      };
      output: {
        /** The cloud provider identifiers returned by TiDB Cloud. */
        cloudProviders: Array<"aws" | "gcp" | "azure" | "alicloud">;
      };
    };
    /** List TiDB Cloud Dedicated node quotas for the organization. */
    "tidb.show_node_quota": {
      input: Record<string, never>;
      output: {
        /** The Dedicated component quotas returned by TiDB Cloud. */
        componentQuotas: Array<{
          /** The component type for this quota. */
          componentType?: string;
          /** The maximum number of nodes allowed for the component. */
          quota?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
