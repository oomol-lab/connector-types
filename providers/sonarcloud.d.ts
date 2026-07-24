import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read selected code-health measures for a SonarQube Cloud component. */
    "sonarcloud.get_component_measures": {
      input: {
        /**
         * The project or component key to inspect.
         * @minLength 1
         */
        componentKey: string;
        /**
         * The metric keys to return.
         * @minItems 1
         */
        metricKeys: Array<string>;
        /** Optional branch key to inspect. */
        branch?: string;
        /** Optional pull request identifier to inspect. */
        pullRequest?: string;
        /** Whether to include metric definitions in addition to metric values. */
        includeMetricDetails?: boolean;
      };
      output: {
        /** The measured SonarQube component. */
        component: {
          /** The component key. */
          key: string;
          /** The component display name. */
          name: string;
          /** The SonarQube component qualifier. */
          qualifier: string;
          /** The component language key, or null when it is not language-specific. */
          language: string | null;
          /** The component path, or null when unavailable. */
          path: string | null;
          /** The requested metric values. */
          measures: Array<{
            /** The metric key. */
            metric: string;
            /** The overall metric value, or null when only period values are available. */
            value: string | null;
            /** Whether this is the metric's best value, or null when unspecified. */
            bestValue: boolean | null;
            /** The new-code period values returned for this metric. */
            periods: Array<{
              /** The period index. */
              index: number;
              /** The metric value within this period. */
              value: string;
              /** Whether this is the metric's best value, or null when unspecified. */
              bestValue: boolean | null;
            }>;
          }>;
        };
        /** Metric definitions returned when includeMetricDetails is enabled. */
        metrics: Array<{
          /** The metric key. */
          key: string;
          /** The metric display name. */
          name: string;
          /** The metric description, or null when unavailable. */
          description: string | null;
          /** The metric domain, or null when unavailable. */
          domain: string | null;
          /** The SonarQube metric value type. */
          type: string;
          /** Whether higher values are better, or null when unspecified. */
          higherValuesAreBetter: boolean | null;
          /** Whether the metric is qualitative, or null when unspecified. */
          qualitative: boolean | null;
          /** Whether the metric is hidden, or null when unspecified. */
          hidden: boolean | null;
        }>;
        /** The active new-code periods returned for the component. */
        periods: Array<{
          /** The period index. */
          index: number;
          /** The period mode, or null when unavailable. */
          mode: string | null;
          /** The period start timestamp, or null when unavailable. */
          date: string | null;
          /** The period parameter, or null when unavailable. */
          parameter: string | null;
        }>;
      };
    };
    /** List projects visible in a SonarQube Cloud organization. */
    "sonarcloud.list_projects": {
      input: {
        /**
         * The organization key whose projects should be returned.
         * @minLength 1
         */
        organization: string;
        /** Optional text matched against project names and keys. */
        query?: string;
        /**
         * Optional project keys used to restrict the result.
         * @minItems 1
         * @maxItems 1000
         */
        projectKeys?: Array<string>;
        /** Optional date or timestamp used to return projects last analyzed before that value. */
        analyzedBefore?: string;
        /** Whether to return only provisioned projects. */
        provisionedOnly?: boolean;
        /**
         * The 1-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** Pagination metadata returned by SonarQube Cloud. */
        paging: {
          /** The 1-based page number returned by SonarQube Cloud. */
          pageIndex: number;
          /** The page size returned by SonarQube Cloud. */
          pageSize: number;
          /** The total number of matching records. */
          total: number;
        };
        /** The projects returned for this page. */
        projects: Array<{
          /** The organization key that owns the project. */
          organization: string;
          /** The unique project key. */
          key: string;
          /** The project display name. */
          name: string;
          /** The SonarQube component qualifier for the project. */
          qualifier: string;
          /** The project visibility. */
          visibility: string;
          /** The timestamp of the latest analysis, or null when the project has not been analyzed. */
          lastAnalysisDate: string | null;
          /** The source revision from the latest analysis, or null when unavailable. */
          revision: string | null;
        }>;
      };
    };
    /** Search and filter code issues across SonarQube Cloud projects. */
    "sonarcloud.search_issues": {
      input: {
        /**
         * The project keys whose issues should be searched.
         * @minItems 1
         */
        projectKeys: Array<string>;
        /** Optional branch key to search. */
        branch?: string;
        /** Optional pull request identifier to search. */
        pullRequest?: string;
        /**
         * Optional current issue statuses to include.
         * @minItems 1
         */
        issueStatuses?: Array<"OPEN" | "CONFIRMED" | "FALSE_POSITIVE" | "ACCEPTED" | "FIXED">;
        /**
         * Optional impact severities to include.
         * @minItems 1
         */
        impactSeverities?: Array<"INFO" | "LOW" | "MEDIUM" | "HIGH" | "BLOCKER">;
        /**
         * Optional software qualities to include.
         * @minItems 1
         */
        softwareQualities?: Array<"MAINTAINABILITY" | "RELIABILITY" | "SECURITY">;
        /** Whether to return only assigned or only unassigned issues. */
        assigned?: boolean;
        /**
         * Optional assignee logins to include. Use __me__ for the connected user.
         * @minItems 1
         */
        assignees?: Array<string>;
        /** Optional inclusive lower bound for the issue creation date. */
        createdAfter?: string;
        /** Optional inclusive upper bound for the issue creation date. */
        createdBefore?: string;
        /**
         * Optional programming language keys to include.
         * @minItems 1
         */
        languages?: Array<string>;
        /**
         * Optional issue tags to include.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether to return resolved or unresolved issues. */
        resolved?: boolean;
        /**
         * The 1-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** Pagination metadata returned by SonarQube Cloud. */
        paging: {
          /** The 1-based page number returned by SonarQube Cloud. */
          pageIndex: number;
          /** The page size returned by SonarQube Cloud. */
          pageSize: number;
          /** The total number of matching records. */
          total: number;
        };
        /** The issues returned for this page. */
        issues: Array<{
          /** The unique issue key. */
          key: string;
          /** The project key containing the issue. */
          project: string;
          /** The component key containing the issue. */
          component: string;
          /** The coding rule key that raised the issue. */
          rule: string;
          /** The current issue status. */
          status: string;
          /** The issue message. */
          message: string;
          /** The source line containing the issue, or null when unavailable. */
          line: number | null;
          /** The login of the assigned user, or null when the issue is unassigned. */
          assignee: string | null;
          /** The source-control author, or null when unavailable. */
          author: string | null;
          /** The remediation effort, or null when unavailable. */
          effort: string | null;
          /** The issue creation timestamp, or null when unavailable. */
          creationDate: string | null;
          /** The issue update timestamp, or null when unavailable. */
          updateDate: string | null;
          /** The clean-code attribute assigned to the issue, or null when unavailable. */
          cleanCodeAttribute: string | null;
          /** The clean-code attribute category, or null when unavailable. */
          cleanCodeAttributeCategory: string | null;
          /** The tags assigned to the issue. */
          tags: Array<string>;
          /** The software-quality impacts reported for the issue. */
          impacts: Array<{
            /** The affected software quality. */
            softwareQuality: string;
            /** The impact severity. */
            severity: string;
          }>;
        }>;
      };
    };
  }
}
