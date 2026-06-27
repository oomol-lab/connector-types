import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Checkly check by ID. */
    "checkly.get_check": {
      input: {
        /**
         * Checkly check identifier.
         * @minLength 1
         */
        checkId: string;
        /** Whether to include check dependencies in the response. */
        includeDependencies?: boolean;
        /** Whether group settings should be applied to the check. */
        applyGroupSettings?: boolean;
      };
      output: {
        /** Checkly check returned by the Public API. */
        check: {
          /** Checkly check ID. */
          id?: string;
          /** Checkly check type filter. */
          checkType?: "AGENTIC" | "API" | "BROWSER" | "HEARTBEAT" | "ICMP" | "MULTI_STEP" | "TCP" | "PLAYWRIGHT" | "TRACEROUTE" | "URL" | "DNS";
          /** Checkly check name. */
          name?: string;
          /** Whether the check is activated. */
          activated?: boolean;
          /** Whether the check is muted. */
          muted?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Checkly check result by ID. */
    "checkly.get_check_result": {
      input: {
        /**
         * Checkly check identifier.
         * @minLength 1
         */
        checkId: string;
        /**
         * Checkly check result identifier.
         * @minLength 1
         */
        checkResultId: string;
      };
      output: {
        /** Checkly check result returned by the Public API. */
        result: {
          /** Checkly result ID. */
          id?: string;
          /** The name of the check. */
          name?: string;
          /** The ID of the check. */
          checkId?: string;
          /** Whether any failure occurred during this check run. */
          hasFailures?: boolean;
          /** Whether Checkly reported backend errors for this check run. */
          hasErrors?: boolean;
          /** Whether the check run was degraded. */
          isDegraded?: boolean;
          /** Whether the run was cancelled before completion. */
          isCancelled?: boolean;
          /** Whether the response time exceeded the configured maximum. */
          overMaxResponseTime?: boolean;
          /** Data center location for this check result. */
          runLocation?: string;
          /** Timestamp when the check run started. */
          startedAt?: string;
          /** Timestamp when the check run stopped. */
          stoppedAt?: string;
          /** Timestamp when Checkly created the result. */
          created_at?: string;
          /** Measured check response time. */
          responseTime?: number;
          /** Numeric check run ID. */
          checkRunId?: number;
          /** Number of retry attempts for this result. */
          attempts?: number;
          /** Check result type filter. */
          resultType?: "FINAL" | "ATTEMPT" | "ALL";
          /** Sequence ID grouping related check attempts. */
          sequenceId?: string;
          /** OpenTelemetry trace ID associated with this result. */
          traceId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve current status details for one Checkly check. */
    "checkly.get_check_status": {
      input: {
        /**
         * Checkly check identifier.
         * @minLength 1
         */
        checkId: string;
      };
      output: {
        /** Current Checkly check status. */
        status: {
          /** The name of the check. */
          name?: string;
          /** The ID of the check this status belongs to. */
          checkId?: string;
          /** Whether the check is currently failing. */
          hasFailures?: boolean;
          /** Whether Checkly reported backend errors for this check. */
          hasErrors?: boolean;
          /** Whether the check is currently degraded. */
          isDegraded?: boolean;
          /** Longest recorded response time for the check. */
          longestRun?: number;
          /** Shortest recorded response time for the check. */
          shortestRun?: number;
          /** Location where the check last ran. */
          lastRunLocation?: string;
          /** Most recent check run ID. */
          lastCheckRunId?: string;
          /** Days remaining before the current SSL certificate expires. */
          sslDaysRemaining?: number;
          /** Timestamp when Checkly created the status record. */
          created_at?: string;
          /** Timestamp when Checkly last updated the status record. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve details for the Checkly account attached to the API key. */
    "checkly.get_current_account": {
      input: Record<string, never>;
      output: {
        /** Checkly account details returned by the Public API. */
        account: {
          /**
           * Checkly account ID.
           * @minLength 1
           */
          id?: string;
          /** Checkly account name. */
          name?: string;
          /** Default runtime ID for the Checkly account. */
          runtimeId?: string;
          /** Checkly plan identifier. */
          plan?: string;
          /** Human-readable Checkly plan name. */
          planDisplayName?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List recent Checkly results for one check. */
    "checkly.list_check_results": {
      input: {
        /**
         * Checkly check identifier.
         * @minLength 1
         */
        checkId: string;
        /**
         * Maximum number of check results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Lower UNIX timestamp boundary for returned results.
         * @minLength 1
         */
        from?: string;
        /**
         * Upper UNIX timestamp boundary for returned results.
         * @minLength 1
         */
        to?: string;
        /**
         * Checkly data center location used to filter results.
         * @minLength 1
         */
        location?: string;
        /** Checkly check type filter. */
        checkType?: "AGENTIC" | "API" | "BROWSER" | "HEARTBEAT" | "ICMP" | "MULTI_STEP" | "TCP" | "PLAYWRIGHT" | "TRACEROUTE" | "URL" | "DNS";
        /** Whether to return only results with failures. */
        hasFailures?: boolean;
        /** Check result type filter. */
        resultType?: "FINAL" | "ATTEMPT" | "ALL";
      };
      output: {
        /** Check results returned by Checkly. */
        results: Array<{
          /** Checkly result ID. */
          id?: string;
          /** The name of the check. */
          name?: string;
          /** The ID of the check. */
          checkId?: string;
          /** Whether any failure occurred during this check run. */
          hasFailures?: boolean;
          /** Whether Checkly reported backend errors for this check run. */
          hasErrors?: boolean;
          /** Whether the check run was degraded. */
          isDegraded?: boolean;
          /** Whether the run was cancelled before completion. */
          isCancelled?: boolean;
          /** Whether the response time exceeded the configured maximum. */
          overMaxResponseTime?: boolean;
          /** Data center location for this check result. */
          runLocation?: string;
          /** Timestamp when the check run started. */
          startedAt?: string;
          /** Timestamp when the check run stopped. */
          stoppedAt?: string;
          /** Timestamp when Checkly created the result. */
          created_at?: string;
          /** Measured check response time. */
          responseTime?: number;
          /** Numeric check run ID. */
          checkRunId?: number;
          /** Number of retry attempts for this result. */
          attempts?: number;
          /** Check result type filter. */
          resultType?: "FINAL" | "ATTEMPT" | "ALL";
          /** Sequence ID grouping related check attempts. */
          sequenceId?: string;
          /** OpenTelemetry trace ID associated with this result. */
          traceId?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List current statuses for Checkly checks. */
    "checkly.list_check_statuses": {
      input: Record<string, never>;
      output: {
        /** Current statuses returned by Checkly. */
        statuses: Array<{
          /** The name of the check. */
          name?: string;
          /** The ID of the check this status belongs to. */
          checkId?: string;
          /** Whether the check is currently failing. */
          hasFailures?: boolean;
          /** Whether Checkly reported backend errors for this check. */
          hasErrors?: boolean;
          /** Whether the check is currently degraded. */
          isDegraded?: boolean;
          /** Longest recorded response time for the check. */
          longestRun?: number;
          /** Shortest recorded response time for the check. */
          shortestRun?: number;
          /** Location where the check last ran. */
          lastRunLocation?: string;
          /** Most recent check run ID. */
          lastCheckRunId?: string;
          /** Days remaining before the current SSL certificate expires. */
          sslDaysRemaining?: number;
          /** Timestamp when Checkly created the status record. */
          created_at?: string;
          /** Timestamp when Checkly last updated the status record. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Checkly checks with optional type, tag, status, and search filters. */
    "checkly.list_checks": {
      input: {
        /**
         * Maximum number of checks to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Filter API checks by a string contained in the checked URL.
         * @minLength 1
         */
        apiCheckUrlFilterPattern?: string;
        /**
         * Tags used to filter checks.
         * @minItems 1
         */
        tag?: Array<string>;
        /** Checkly check type filter. */
        checkType?: "AGENTIC" | "API" | "BROWSER" | "HEARTBEAT" | "ICMP" | "MULTI_STEP" | "TCP" | "PLAYWRIGHT" | "TRACEROUTE" | "URL" | "DNS";
        /**
         * Case-insensitive partial name search.
         * @minLength 1
         */
        search?: string;
        /** Current check status filter. */
        status?: "passing" | "failing" | "degraded";
        /** Whether group settings should be applied to returned checks. */
        applyGroupSettings?: boolean;
      };
      output: {
        /** Checks returned by Checkly. */
        checks: Array<{
          /** Checkly check ID. */
          id?: string;
          /** Checkly check type filter. */
          checkType?: "AGENTIC" | "API" | "BROWSER" | "HEARTBEAT" | "ICMP" | "MULTI_STEP" | "TCP" | "PLAYWRIGHT" | "TRACEROUTE" | "URL" | "DNS";
          /** Checkly check name. */
          name?: string;
          /** Whether the check is activated. */
          activated?: boolean;
          /** Whether the check is muted. */
          muted?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
