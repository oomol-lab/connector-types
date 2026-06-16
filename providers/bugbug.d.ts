import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details for a specific BugBug suite by ID. */
    "bugbug.get_suite": {
      input: {
        /**
         * UUID of the requested BugBug resource.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
      };
      output: {
        /**
         * UUID of the suite.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
        /** Name of the suite. */
        name: string | null;
        /** Number of tests currently linked to the suite. */
        testsCount: number;
        /** Tests linked to the suite. */
        tests: Array<Record<string, unknown>>;
        /** Whether newly created tests are automatically added to the suite. */
        autoAddNewTests: boolean;
        /** Automatic retry count configured for the suite. */
        autoRetry: number;
        /** Notes configured on the suite. */
        notes: string | null;
        /** Whether tests in the suite run in parallel. */
        runInParallel: boolean;
        /** Run profile UUID used by the suite. */
        runProfileId: string | null;
      };
    };
    /** Retrieve details for a specific BugBug test by ID. */
    "bugbug.get_test": {
      input: {
        /**
         * UUID of the requested BugBug resource.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
      };
      output: {
        /**
         * UUID of the test.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
        /** Name of the test. */
        name?: string;
        /** Group value returned by BugBug for the test. */
        groups: string;
        /** Notes configured on the test. */
        notes: string | null;
        /** Screen size type configured for the test. */
        screenSizeType: "desktop" | "mobile" | "custom";
      };
    };
    /** Retrieve the current status of a BugBug test run by ID. */
    "bugbug.get_test_run_status": {
      input: {
        /**
         * UUID of the requested BugBug resource.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
      };
      output: {
        /**
         * UUID of the test run.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
        /** Datetime when the test run status was last modified. */
        modified: string;
        /** Current BugBug test run status. */
        status: "auto_retrying" | "error" | "failed" | "initialized" | "passed" | "paused" | "queued" | "recording" | "running" | "skipped" | "stopped";
        /** BugBug web app URL for the test run. */
        webappUrl: string;
      };
    };
    /** List run profiles available for executing BugBug tests. */
    "bugbug.list_profiles": {
      input: {
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Results returned for the current page. */
        results: Array<{
          /**
           * UUID of the run profile.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /** Name of the run profile. */
          name: string;
          /** Whether this run profile is the default one. */
          isDefault?: boolean;
        }>;
      };
    };
    /** List suites available in the connected BugBug workspace. */
    "bugbug.list_suites": {
      input: {
        /** Field used to sort the list response. */
        ordering?: "-created" | "-name" | "created" | "name";
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * Search string used to filter results by name.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Results returned for the current page. */
        results: Array<{
          /**
           * UUID of the suite.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /** Name of the suite. */
          name: string | null;
          /** Number of tests currently linked to the suite. */
          testsCount: number;
        }>;
      };
    };
    /** List historical BugBug test runs with optional filters. */
    "bugbug.list_test_runs": {
      input: {
        /** Field used to sort test runs by start time. */
        ordering?: "-started" | "started";
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * Only include test runs started after this RFC3339 datetime.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        started_after?: string;
        /**
         * Only include test runs started before this RFC3339 datetime.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        started_before?: string;
        /** Only include test runs with the selected status. */
        status?: "auto_retrying" | "error" | "failed" | "initialized" | "passed" | "paused" | "queued" | "recording" | "running" | "skipped" | "stopped";
        /**
         * Only include test runs for this test UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        test_id?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Results returned for the current page. */
        results: Array<{
          /**
           * UUID of the test run.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /** Name of the executed test. */
          name?: string;
          /** Current BugBug test run status. */
          status: "auto_retrying" | "error" | "failed" | "initialized" | "passed" | "paused" | "queued" | "recording" | "running" | "skipped" | "stopped";
          /** Run mode used by the test run. */
          runMode?: string;
          /** Datetime when the test run started. */
          started?: string | null;
          /** Source that triggered the test run. */
          triggeredBy?: string;
          /** UUID of the executed test. */
          testId?: string | null;
          /** Duration string returned by BugBug. */
          duration?: string | null;
          /** Browser width used by the test run. */
          browserWidth?: number | null;
          /** Browser height used by the test run. */
          browserHeight?: number | null;
          /** BugBug web app URL for the test run. */
          webappUrl?: string;
        }>;
      };
    };
    /** List tests available in the connected BugBug workspace. */
    "bugbug.list_tests": {
      input: {
        /** Field used to sort the list response. */
        ordering?: "-created" | "-name" | "created" | "name";
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * Search string used to filter results by name.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Results returned for the current page. */
        results: Array<{
          /**
           * UUID of the test.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /** Name of the test. */
          name?: string;
        }>;
      };
    };
    /** Execute a BugBug test using the official RunTest request contract. */
    "bugbug.run_test": {
      input: {
        /**
         * UUID of the test to execute.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        testId: string;
        /** Optional BugBug run profile UUID used for execution. */
        runProfileId?: string | null;
        /** Optional variable overrides forwarded to BugBug. */
        variables?: Array<{
          /**
           * Variable key to override for the test run.
           * @minLength 1
           */
          key: string;
          /** Variable value to apply for the test run. */
          value?: string | null;
        }> | null;
      };
      output: {
        /**
         * UUID of the test run.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        id: string;
        /** Datetime when the test run status was last modified. */
        modified: string;
        /** Current BugBug test run status. */
        status: "auto_retrying" | "error" | "failed" | "initialized" | "passed" | "paused" | "queued" | "recording" | "running" | "skipped" | "stopped";
        /** BugBug web app URL for the test run. */
        webappUrl: string;
      };
    };
  }
}
