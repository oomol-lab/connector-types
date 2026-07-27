import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get historical issue creator counts for a GitHub repository. */
    "ossinsight.get_issue_creators_history": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * The time interval of the returned history points.
         * @default "month"
         */
        per?: "day" | "week" | "month";
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Issue creator history returned by OSS Insight. */
        history: Array<{
          /** The history point date returned by OSS Insight. */
          date: string;
          /** The cumulative issue creator count for the date. */
          issue_creators: number;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** Get historical pull request creator counts for a GitHub repository. */
    "ossinsight.get_pull_request_creators_history": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * The time interval of the returned history points.
         * @default "month"
         */
        per?: "day" | "week" | "month";
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Pull request creator history returned by OSS Insight. */
        history: Array<{
          /** The history point date returned by OSS Insight. */
          date: string;
          /** The cumulative pull request creator count for the date. */
          pull_request_creators: number;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** Get the historical stargazer count for a GitHub repository. */
    "ossinsight.get_stargazers_history": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * The time interval of the returned history points.
         * @default "month"
         */
        per?: "day" | "week" | "month";
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Historical stargazer counts returned by OSS Insight. */
        history: Array<{
          /** The history point date returned by OSS Insight. */
          date: string;
          /** The cumulative stargazer count for the date. */
          stargazers: number;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List repositories in an OSS Insight collection. */
    "ossinsight.list_collection_repos": {
      input: {
        /** The OSS Insight collection ID. */
        collection_id: string | number;
      };
      output: {
        /** Repositories returned by OSS Insight. */
        repositories: Array<{
          /** The GitHub repository ID. */
          repo_id: string;
          /** The repository name in owner/repo format. */
          repo_name: string;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List all OSS Insight repository collections. */
    "ossinsight.list_collections": {
      input: Record<string, never>;
      output: {
        /** Collections returned by OSS Insight. */
        collections: Array<{
          /** The OSS Insight collection ID. */
          id: string;
          /** The OSS Insight collection name. */
          name: string;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List hot OSS Insight collections with representative repositories. */
    "ossinsight.list_hot_collections": {
      input: Record<string, never>;
      output: {
        /** Hot collections returned by OSS Insight. */
        collections: Array<{
          /** The OSS Insight collection ID. */
          id: string;
          /** The OSS Insight collection name. */
          name: string;
          /** The number of repositories in the collection. */
          repos: number | null;
          /** The GitHub repository ID for the representative hot repo. */
          repo_id: string;
          /** The representative hot repository name in owner/repo format. */
          repo_name: string;
          /** The repository rank in the current period. */
          repo_current_period_rank: number | null;
          /** The repository rank in the previous period. */
          repo_past_period_rank: number | null;
          /** The repository rank change between periods. */
          repo_rank_changes: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List countries or regions of issue creators for a GitHub repository. */
    "ossinsight.list_issue_creator_countries": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Whether to exclude rows with unknown country or organization information.
         * @default true
         */
        exclude_unknown?: boolean;
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Issue creator countries or regions returned by OSS Insight. */
        countries: Array<{
          /** The country or region code of issue creators, or null when unknown. */
          country_code: string | null;
          /** The number of issue creators in this country or region. */
          issue_creators: number;
          /** The share of issue creators represented by this country or region. */
          percentage: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List organizations of issue creators for a GitHub repository. */
    "ossinsight.list_issue_creator_organizations": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Whether to exclude rows with unknown country or organization information.
         * @default true
         */
        exclude_unknown?: boolean;
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Issue creator organizations returned by OSS Insight. */
        organizations: Array<{
          /** The GitHub organization name, or null when unknown. */
          org_name: string | null;
          /** The number of issue creators in this organization. */
          issue_creators: number;
          /** The share of issue creators represented by this organization. */
          percentage: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List issue creators for a GitHub repository. */
    "ossinsight.list_issue_creators": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * The OSS Insight sort option for the creator list endpoint.
         * @minLength 1
         * @default "issues-desc"
         */
        sort?: string;
        /**
         * Whether to exclude bot accounts.
         * @default true
         */
        exclude_bots?: boolean;
        /**
         * The 1-based page number to fetch.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * The number of rows to fetch per page.
         * @minimum 1
         * @default 30
         */
        page_size?: number;
      };
      output: {
        /** Issue creators returned by OSS Insight. */
        creators: Array<{
          /** The GitHub user ID. */
          id: string;
          /** The GitHub login. */
          login: string;
          /** The GitHub user display name, or null when unknown. */
          name: string | null;
          /** The number of issues created by this user. */
          issues: number | null;
          /** The first issue open timestamp for this user. */
          first_issue_opened_at: string | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List countries or regions of pull request creators for a GitHub repository. */
    "ossinsight.list_pull_request_creator_countries": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Whether to exclude rows with unknown country or organization information.
         * @default true
         */
        exclude_unknown?: boolean;
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Pull request creator countries or regions returned by OSS Insight. */
        countries: Array<{
          /** The country or region code of pull request creators, or null when unknown. */
          country_code: string | null;
          /** The number of pull request creators in this country or region. */
          pull_request_creators: number;
          /** The share of pull request creators represented by this country or region. */
          percentage: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List organizations of pull request creators for a GitHub repository. */
    "ossinsight.list_pull_request_creator_organizations": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Whether to exclude rows with unknown country or organization information.
         * @default true
         */
        exclude_unknown?: boolean;
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Pull request creator organizations returned by OSS Insight. */
        organizations: Array<{
          /** The GitHub organization name, or null when unknown. */
          org_name: string | null;
          /** The number of pull request creators in this organization. */
          pull_request_creators: number;
          /** The share of pull request creators represented by this organization. */
          percentage: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List pull request creators for a GitHub repository. */
    "ossinsight.list_pull_request_creators": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * The OSS Insight sort option for the creator list endpoint.
         * @minLength 1
         * @default "prs-desc"
         */
        sort?: string;
        /**
         * Whether to exclude bot accounts.
         * @default true
         */
        exclude_bots?: boolean;
        /**
         * The 1-based page number to fetch.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * The number of rows to fetch per page.
         * @minimum 1
         * @default 30
         */
        page_size?: number;
      };
      output: {
        /** Pull request creators returned by OSS Insight. */
        creators: Array<{
          /** The GitHub user ID. */
          id: string;
          /** The GitHub login. */
          login: string;
          /** The GitHub user display name, or null when unknown. */
          name: string | null;
          /** The number of pull requests created by this user. */
          prs: number | null;
          /** The first pull request open timestamp for this user. */
          first_pr_opened_at: string | null;
          /** The first pull request merge timestamp for this user. */
          first_pr_merged_at: string | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List countries or regions of stargazers for a GitHub repository. */
    "ossinsight.list_stargazer_countries": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Whether to exclude rows with unknown country or organization information.
         * @default true
         */
        exclude_unknown?: boolean;
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Countries or regions of stargazers returned by OSS Insight. */
        countries: Array<{
          /** The country or region code of stargazers, or null when unknown. */
          country_code: string | null;
          /** The number of stargazers in this country or region. */
          stargazers: number;
          /** The share of stargazers represented by this country or region. */
          percentage: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List organizations of stargazers for a GitHub repository. */
    "ossinsight.list_stargazer_organizations": {
      input: {
        /**
         * The owner of the GitHub repository.
         * @minLength 1
         */
        owner: string;
        /**
         * The name of the GitHub repository.
         * @minLength 1
         */
        repo: string;
        /**
         * Whether to exclude rows with unknown country or organization information.
         * @default true
         */
        exclude_unknown?: boolean;
        /**
         * The start date of the time range.
         * @default "2000-01-01"
         */
        from?: string;
        /**
         * The end date of the time range.
         * @default "2099-01-01"
         */
        to?: string;
      };
      output: {
        /** Stargazer organizations returned by OSS Insight. */
        organizations: Array<{
          /** The GitHub organization name, or null when unknown. */
          org_name: string | null;
          /** The number of stargazers in this organization. */
          stargazers: number;
          /** The share of stargazers represented by this organization. */
          percentage: number | null;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** List recently trending GitHub repositories from OSS Insight. */
    "ossinsight.list_trending_repos": {
      input: {
        /**
         * The time period used to calculate trending repositories.
         * @default "past_24_hours"
         */
        period?: "past_24_hours" | "past_week" | "past_month";
        /**
         * The programming language filter. Use All to include every language.
         * @minLength 1
         * @default "All"
         */
        language?: string;
      };
      output: {
        /** Trending repositories returned by OSS Insight. */
        repositories: Array<{
          /** The GitHub repository ID. */
          repo_id: string;
          /** The full repository name in owner/repo format. */
          repo_name: string;
          /** The repository primary programming language, or null when unknown. */
          primary_language: string | null;
          /** The repository description, or null when not available. */
          description: string | null;
          /** The repository star count. */
          stars: number | null;
          /** The repository fork count. */
          forks: number | null;
          /** The number of pull requests used by the trending score. */
          pull_requests: number | null;
          /** The number of pushes used by the trending score. */
          pushes: number | null;
          /** The OSS Insight trending score. */
          total_score: number | null;
          /** Contributor logins returned by OSS Insight. */
          contributor_logins: Array<string>;
          /** OSS Insight collection names returned for the repository. */
          collection_names: Array<string>;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** Rank repositories in an OSS Insight collection by issue growth. */
    "ossinsight.rank_collection_repos_by_issues": {
      input: {
        /** The OSS Insight collection ID. */
        collection_id: string | number;
        /**
         * The OSS Insight collection ranking period, such as past_7_days or past_28_days.
         * @minLength 1
         * @default "past_28_days"
         */
        period?: string;
      };
      output: {
        /** Repository issue-growth rankings returned by OSS Insight. */
        rankings: Array<{
          /** The GitHub repository ID. */
          repo_id: string;
          /** The repository name in owner/repo format. */
          repo_name: string;
          /** The metric growth in the current period. */
          current_period_growth: number;
          /** The repository rank in the current period. */
          current_period_rank: number;
          /** The metric growth in the previous period. */
          past_period_growth: number;
          /** The repository rank in the previous period. */
          past_period_rank: number;
          /** The period-over-period metric growth percentage. */
          growth_pop: number;
          /** The period-over-period rank change. */
          rank_pop: number;
          /** The repository total metric value. */
          total: number;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** Rank repositories in an OSS Insight collection by pull request growth. */
    "ossinsight.rank_collection_repos_by_pull_requests": {
      input: {
        /** The OSS Insight collection ID. */
        collection_id: string | number;
        /**
         * The OSS Insight collection ranking period, such as past_7_days or past_28_days.
         * @minLength 1
         * @default "past_28_days"
         */
        period?: string;
      };
      output: {
        /** Repository pull-request-growth rankings returned by OSS Insight. */
        rankings: Array<{
          /** The GitHub repository ID. */
          repo_id: string;
          /** The repository name in owner/repo format. */
          repo_name: string;
          /** The metric growth in the current period. */
          current_period_growth: number;
          /** The repository rank in the current period. */
          current_period_rank: number;
          /** The metric growth in the previous period. */
          past_period_growth: number;
          /** The repository rank in the previous period. */
          past_period_rank: number;
          /** The period-over-period metric growth percentage. */
          growth_pop: number;
          /** The period-over-period rank change. */
          rank_pop: number;
          /** The repository total metric value. */
          total: number;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
    /** Rank repositories in an OSS Insight collection by star growth. */
    "ossinsight.rank_collection_repos_by_stars": {
      input: {
        /** The OSS Insight collection ID. */
        collection_id: string | number;
        /**
         * The OSS Insight collection ranking period, such as past_7_days or past_28_days.
         * @minLength 1
         * @default "past_28_days"
         */
        period?: string;
      };
      output: {
        /** Repository star-growth rankings returned by OSS Insight. */
        rankings: Array<{
          /** The GitHub repository ID. */
          repo_id: string;
          /** The repository name in owner/repo format. */
          repo_name: string;
          /** The metric growth in the current period. */
          current_period_growth: number;
          /** The repository rank in the current period. */
          current_period_rank: number;
          /** The metric growth in the previous period. */
          past_period_growth: number;
          /** The repository rank in the previous period. */
          past_period_rank: number;
          /** The period-over-period metric growth percentage. */
          growth_pop: number;
          /** The period-over-period rank change. */
          rank_pop: number;
          /** The repository total metric value. */
          total: number;
        }>;
        /** SQL metadata returned by OSS Insight. */
        metadata: {
          /** The SQL columns returned by the upstream endpoint. */
          columns: Array<{
            /** The column name returned by OSS Insight. */
            col: string;
            /** The SQL data type of the column. */
            data_type: string;
            /** Whether the column can be null. */
            nullable: boolean;
          }>;
          /** The SQL execution result returned by the upstream endpoint. */
          result: {
            /** The OSS Insight result code. */
            code: number;
            /** The OSS Insight result message. */
            message: string;
            /** The query start timestamp in milliseconds. */
            start_ms: number;
            /** The query end timestamp in milliseconds. */
            end_ms: number;
            /** The query latency text returned by OSS Insight. */
            latency: string;
            /** The number of rows returned. */
            row_count: number;
            /** The number of affected rows. */
            row_affect: number;
            /** The row limit applied by OSS Insight. */
            limit: number;
          };
        };
      };
    };
  }
}
