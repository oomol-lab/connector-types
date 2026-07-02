import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for the authenticated Runscope account. */
    "runscope.get_account": {
      input: Record<string, never>;
      output: {
        /** A Runscope account object. */
        account: {
          /** The Runscope user identifier. */
          id?: string;
          /** The Runscope user UUID. */
          uuid?: string;
          /**
           * The Runscope user email address.
           * @format email
           */
          email?: string;
          /** The Runscope user name. */
          name?: string;
          /** The Unix timestamp when the account was created. */
          created_at?: number;
          /** Teams associated with the Runscope account. */
          teams?: Array<{
            /** The team identifier. */
            id?: string;
            /** The team UUID. */
            uuid?: string;
            /** The team name. */
            name?: string;
            /** Whether this team has a paid plan. */
            is_paying_team?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a Runscope API Monitoring bucket. */
    "runscope.get_bucket": {
      input: {
        /**
         * The Runscope bucket key from the API Monitoring project.
         * @minLength 1
         */
        bucketKey: string;
      };
      output: {
        /** A Runscope bucket object. */
        bucket: {
          /** The bucket key. */
          key?: string;
          /** The bucket name. */
          name?: string;
          /** Whether this bucket is the default bucket. */
          default?: boolean;
          /** Whether SSL verification is enabled for this bucket. */
          verify_ssl?: boolean;
          /** The number of tests in the bucket. */
          tests_count?: number;
          /** A Runscope team object. */
          team?: {
            /** The team identifier. */
            id?: string;
            /** The team UUID. */
            uuid?: string;
            /** The team name. */
            name?: string;
            /** Whether this team has a paid plan. */
            is_paying_team?: boolean;
            [key: string]: unknown;
          };
          /** The bucket creation time. */
          created_at?: string;
          /**
           * The bucket trigger URL.
           * @format uri
           */
          trigger_url?: string;
          /**
           * The bucket tests URL.
           * @format uri
           */
          tests_url?: string;
          /** Whether this bucket is private. */
          is_private?: boolean;
          [key: string]: unknown;
        };
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a Runscope API Monitoring test. */
    "runscope.get_test": {
      input: {
        /**
         * The Runscope bucket key from the API Monitoring project.
         * @minLength 1
         */
        bucketKey: string;
        /**
         * The Runscope test UUID.
         * @format uuid
         */
        testId: string;
      };
      output: {
        /** A Runscope API Monitoring test object. */
        test: {
          /** The test identifier. */
          id?: string;
          /** The test UUID. */
          uuid?: string;
          /** The test name. */
          name?: string;
          /** The test description. */
          description?: string;
          /** The default environment UUID for this test. */
          default_environment_id?: string;
          /**
           * The test trigger URL.
           * @format uri
           */
          trigger_url?: string;
          /** The test creation time. */
          created_at?: string;
          /** The most recent Runscope test result. */
          last_run?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List Runscope API Monitoring buckets accessible to the authenticated account. */
    "runscope.list_buckets": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Buckets returned by Runscope. */
        buckets: Array<{
          /** The bucket key. */
          key?: string;
          /** The bucket name. */
          name?: string;
          /** Whether this bucket is the default bucket. */
          default?: boolean;
          /** Whether SSL verification is enabled for this bucket. */
          verify_ssl?: boolean;
          /** The number of tests in the bucket. */
          tests_count?: number;
          /** A Runscope team object. */
          team?: {
            /** The team identifier. */
            id?: string;
            /** The team UUID. */
            uuid?: string;
            /** The team name. */
            name?: string;
            /** Whether this team has a paid plan. */
            is_paying_team?: boolean;
            [key: string]: unknown;
          };
          /** The bucket creation time. */
          created_at?: string;
          /**
           * The bucket trigger URL.
           * @format uri
           */
          trigger_url?: string;
          /**
           * The bucket tests URL.
           * @format uri
           */
          tests_url?: string;
          /** Whether this bucket is private. */
          is_private?: boolean;
          [key: string]: unknown;
        }>;
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List shared Runscope environments in a bucket. */
    "runscope.list_environments": {
      input: {
        /**
         * The Runscope bucket key from the API Monitoring project.
         * @minLength 1
         */
        bucketKey: string;
      };
      output: {
        /** Shared environments returned by Runscope. */
        environments: Array<{
          /** The environment UUID. */
          id?: string;
          /** The environment name. */
          name?: string;
          /** The owning test UUID, or null for shared environments. */
          test_id?: string | null;
          /** Whether SSL verification is enabled for this environment. */
          verify_ssl?: boolean;
          /** Whether Runscope preserves cookies between requests. */
          preserve_cookies?: boolean;
          /** Runscope regions enabled for this environment. */
          regions?: Array<string>;
          /** Initial environment variables keyed by variable name. */
          initial_variables?: Record<string, string>;
          /** Default headers keyed by header name. */
          headers?: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List recent Runscope API Monitoring results for a test. */
    "runscope.list_test_results": {
      input: {
        /**
         * The Runscope bucket key from the API Monitoring project.
         * @minLength 1
         */
        bucketKey: string;
        /**
         * The Runscope test UUID.
         * @format uuid
         */
        testId: string;
        /**
         * The maximum number of test results to return.
         * @minimum 1
         * @maximum 50
         */
        count?: number;
        /** A Unix timestamp filter accepted by Runscope. */
        before?: number;
        /** A Unix timestamp filter accepted by Runscope. */
        since?: number;
      };
      output: {
        /** Test results returned by Runscope. */
        results: Array<{
          /** The test run identifier. */
          test_run_id?: string;
          /** The test UUID. */
          test_id?: string;
          /** The bucket key where the test resides. */
          bucket_key?: string;
          /** The overall test result. */
          result?: "pass" | "fail";
          /** How the test run was triggered. */
          source?: string;
          /** The region where the test ran. */
          region?: string;
          /** The Unix timestamp when the test run started. */
          started_at?: number;
          /** The Unix timestamp when the test run finished. */
          finished_at?: number;
          /** The number of HTTP requests executed. */
          requests_executed?: number;
          /** The number of assertions defined. */
          assertions_defined?: number;
          /** The number of assertions that failed. */
          assertions_failed?: number;
          /** The number of assertions that passed. */
          assertions_passed?: number;
          /** The environment UUID used for this test run. */
          environment_id?: string;
          /** The environment name used for this test run. */
          environment_name?: string;
          /** The test name. */
          test_name?: string;
          /**
           * The URL to view this test run.
           * @format uri
           */
          test_run_url?: string;
          /** The user who triggered the test run. */
          run_by?: string;
          [key: string]: unknown;
        }>;
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List Runscope API Monitoring tests in a bucket. */
    "runscope.list_tests": {
      input: {
        /**
         * The Runscope bucket key from the API Monitoring project.
         * @minLength 1
         */
        bucketKey: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Tests returned by Runscope. */
        tests: Array<{
          /** The test identifier. */
          id?: string;
          /** The test UUID. */
          uuid?: string;
          /** The test name. */
          name?: string;
          /** The test description. */
          description?: string;
          /** The default environment UUID for this test. */
          default_environment_id?: string;
          /**
           * The test trigger URL.
           * @format uri
           */
          trigger_url?: string;
          /** The test creation time. */
          created_at?: string;
          /** The most recent Runscope test result. */
          last_run?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The Runscope response metadata. */
        meta: {
          /** The Runscope response status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Runscope response envelope. */
        raw: Record<string, unknown>;
      };
    };
  }
}
