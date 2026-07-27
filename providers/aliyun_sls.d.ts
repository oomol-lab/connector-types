import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query the time distribution of matching logs in one Simple Log Service Logstore. */
    "aliyun_sls.get_histograms": {
      input: {
        /**
         * The regional Simple Log Service endpoint, such as cn-hangzhou.log.aliyuncs.com. Omit it to use the endpoint configured on the federated connection.
         * @minLength 1
         */
        endpoint?: string;
        /**
         * The Simple Log Service Project name.
         * @minLength 3
         * @maxLength 63
         */
        project: string;
        /**
         * The Simple Log Service Logstore name.
         * @minLength 1
         */
        logstore: string;
        /**
         * The inclusive start of the query interval as a Unix timestamp in seconds. Simple Log Service evaluates [from, to).
         * @minimum 0
         */
        from: number;
        /**
         * The exclusive end of the query interval as a Unix timestamp in seconds. It must be greater than from.
         * @minimum 0
         */
        to: number;
        /** An optional Simple Log Service search or analytic statement. */
        query?: string;
      };
      output: {
        /** The regional endpoint queried by this action. */
        endpoint: string;
        /** The Project queried by this action. */
        project: string;
        /** The Logstore queried by this action. */
        logstore: string;
        /** The overall Simple Log Service histogram query progress. */
        progress: string;
        /**
         * The total number of matching logs across the returned intervals.
         * @minimum 0
         */
        count: number;
        /** The stable histogram intervals returned by Simple Log Service. */
        histograms: Array<{
          /**
           * The inclusive interval start as a Unix timestamp in seconds.
           * @minimum 0
           */
          from: number;
          /**
           * The exclusive interval end as a Unix timestamp in seconds.
           * @minimum 0
           */
          to: number;
          /**
           * The number of matching logs in this interval.
           * @minimum 0
           */
          count: number;
          /** The query progress for this interval. */
          progress: string;
        }>;
      };
    };
    /** List Logstores in one Simple Log Service Project. */
    "aliyun_sls.list_logstores": {
      input: {
        /**
         * The regional Simple Log Service endpoint, such as cn-hangzhou.log.aliyuncs.com. Omit it to use the endpoint configured on the federated connection.
         * @minLength 1
         */
        endpoint?: string;
        /**
         * The Simple Log Service Project name.
         * @minLength 3
         * @maxLength 63
         */
        project: string;
        /**
         * The zero-based offset at which to start the page.
         * @minimum 0
         * @default 0
         */
        offset: number;
        /**
         * The number of Logstores to return. The maximum is 500.
         * @minimum 1
         * @maximum 500
         * @default 200
         */
        size: number;
        /**
         * A fuzzy Logstore name filter.
         * @minLength 1
         */
        logstoreName?: string;
      };
      output: {
        /** The regional endpoint queried by this action. */
        endpoint: string;
        /** The Project containing the returned Logstores. */
        project: string;
        /**
         * The number of Logstores returned in this page.
         * @minimum 0
         */
        count: number;
        /**
         * The total number of matching Logstores reported for this result.
         * @minimum 0
         */
        total: number;
        /** The matching Logstore names. */
        logstores: Array<string>;
      };
    };
    /** List Projects visible through one Alibaba Cloud Simple Log Service regional endpoint. */
    "aliyun_sls.list_projects": {
      input: {
        /**
         * The regional Simple Log Service endpoint, such as cn-hangzhou.log.aliyuncs.com. Omit it to use the endpoint configured on the federated connection.
         * @minLength 1
         */
        endpoint?: string;
        /**
         * The zero-based offset at which to start the page.
         * @minimum 0
         * @default 0
         */
        offset: number;
        /**
         * The number of Projects to return. The maximum is 500.
         * @minimum 1
         * @maximum 500
         * @default 100
         */
        size: number;
        /**
         * A fuzzy Project name filter.
         * @minLength 1
         */
        projectName?: string;
        /**
         * An Alibaba Cloud resource group ID filter.
         * @minLength 1
         */
        resourceGroupId?: string;
      };
      output: {
        /** The regional endpoint queried by this action. */
        endpoint: string;
        /**
         * The number of Projects returned in this page.
         * @minimum 0
         */
        count: number;
        /**
         * The total number of matching Projects reported for this result.
         * @minimum 0
         */
        total: number;
        /** The matching Projects. */
        projects: Array<{
          /** The regional endpoint from which this Project was returned. */
          endpoint: string;
          /** The Project name. */
          projectName: string;
          /** The Alibaba Cloud region that owns the Project. */
          region: string;
          /** The Project description. */
          description: string;
          /** The Project status. */
          status: string;
          /** The Project creation time returned by Simple Log Service. */
          createTime: string;
          /** The Project last modification time returned by Simple Log Service. */
          lastModifyTime: string;
          /** The Alibaba Cloud resource group ID, or null when absent. */
          resourceGroupId: string | null;
          /** The Project data redundancy type, or null when absent. */
          dataRedundancyType: string | null;
          /** Whether the Project recycle bin is enabled, or null when absent. */
          recycleBinEnabled: boolean | null;
          /** The Project public endpoint, or null when absent. */
          internetEndpoint: string | null;
          /** The Project internal endpoint, or null when absent. */
          internalEndpoint: string | null;
        }>;
      };
    };
    /** List all Projects from explicitly supplied Simple Log Service regional endpoints with bounded concurrency and optional partial-failure results. */
    "aliyun_sls.list_projects_across_regions": {
      input: {
        /**
         * The 1 to 50 distinct regional endpoints to query.
         * @minItems 1
         * @maxItems 50
         */
        endpoints: Array<string>;
        /**
         * A fuzzy Project name filter applied in every region.
         * @minLength 1
         */
        projectName?: string;
        /**
         * An Alibaba Cloud resource group ID filter applied in every region.
         * @minLength 1
         */
        resourceGroupId?: string;
        /**
         * Whether successful regions should be returned when another region fails.
         * @default false
         */
        allowPartial: boolean;
      };
      output: {
        /** Projects deduplicated by region and Project name. */
        projects: Array<{
          /** The regional endpoint from which this Project was returned. */
          endpoint: string;
          /** The Project name. */
          projectName: string;
          /** The Alibaba Cloud region that owns the Project. */
          region: string;
          /** The Project description. */
          description: string;
          /** The Project status. */
          status: string;
          /** The Project creation time returned by Simple Log Service. */
          createTime: string;
          /** The Project last modification time returned by Simple Log Service. */
          lastModifyTime: string;
          /** The Alibaba Cloud resource group ID, or null when absent. */
          resourceGroupId: string | null;
          /** The Project data redundancy type, or null when absent. */
          dataRedundancyType: string | null;
          /** Whether the Project recycle bin is enabled, or null when absent. */
          recycleBinEnabled: boolean | null;
          /** The Project public endpoint, or null when absent. */
          internetEndpoint: string | null;
          /** The Project internal endpoint, or null when absent. */
          internalEndpoint: string | null;
        }>;
        /**
         * The number of unique Projects returned.
         * @minimum 0
         */
        total: number;
        /** The regional endpoints queried successfully. */
        regions: Array<{
          /** The regional endpoint that was queried. */
          endpoint: string;
          /**
           * The number of unique Projects returned from this endpoint.
           * @minimum 0
           */
          count: number;
        }>;
        /** Regional endpoints that failed when allowPartial is true. */
        failures: Array<{
          /** The regional endpoint that failed. */
          endpoint: string;
          /** The normalized HTTP-style error status. */
          status: number;
          /** The failure message returned by the connector or Simple Log Service. */
          message: string;
        }>;
        /** Whether every supplied regional endpoint completed successfully. */
        complete: boolean;
      };
    };
    /** Query logs from one Simple Log Service Logstore with the GetLogs API. */
    "aliyun_sls.query_logs": {
      input: {
        /**
         * The regional Simple Log Service endpoint, such as cn-hangzhou.log.aliyuncs.com. Omit it to use the endpoint configured on the federated connection.
         * @minLength 1
         */
        endpoint?: string;
        /**
         * The Simple Log Service Project name.
         * @minLength 3
         * @maxLength 63
         */
        project: string;
        /**
         * The Simple Log Service Logstore name.
         * @minLength 1
         */
        logstore: string;
        /**
         * The inclusive start of the query interval as a Unix timestamp in seconds. Simple Log Service evaluates [from, to).
         * @minimum 0
         */
        from: number;
        /**
         * The exclusive end of the query interval as a Unix timestamp in seconds. It must be greater than from.
         * @minimum 0
         */
        to: number;
        /** An optional Simple Log Service search or analytic statement. */
        query?: string;
        /**
         * The zero-based offset at which to start the page.
         * @minimum 0
         * @default 0
         */
        offset: number;
        /**
         * The maximum number of logs to return. Simple Log Service accepts 0 to 100.
         * @minimum 0
         * @maximum 100
         * @default 100
         */
        line: number;
        /**
         * Whether search results should be returned newest first.
         * @default false
         */
        reverse: boolean;
        /**
         * Whether to use the Simple Log Service Exclusive SQL feature.
         * @default false
         */
        powerSql: boolean;
      };
      output: {
        /** The regional endpoint queried by this action. */
        endpoint: string;
        /** The Project queried by this action. */
        project: string;
        /** The Logstore queried by this action. */
        logstore: string;
        /** The Simple Log Service query progress, such as Complete or Incomplete. */
        progress: string;
        /**
         * The number of log entries returned.
         * @minimum 0
         */
        count: number;
        /** The number of rows processed by the query, or null when unavailable. */
        processedRows: number | null;
        /** The provider-reported query duration, or null when unavailable. */
        elapsedMilliseconds: number | null;
        /** Whether the query included an analytic statement, or null when unavailable. */
        hasSql: boolean | null;
        /** The returned log entries. */
        logs: Array<Record<string, unknown>>;
      };
    };
  }
}
