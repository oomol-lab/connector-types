import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add the same Tuskr result to multiple test cases in a test run. */
    "tuskr.add_test_run_results": {
      input: {
        /**
         * Tuskr result status key, such as PASSED or FAILED.
         * @minLength 1
         */
        status: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testRun: string;
        /**
         * Test case IDs, keys, or names to update.
         * @minItems 1
         */
        testCases: Array<string>;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        assignedTo?: string;
        /**
         * Result comments.
         * @minLength 1
         */
        comments?: string;
        /**
         * Time spent in minutes.
         * @minimum 0
         */
        timeSpentInMinutes?: number;
        /** Custom fields keyed by Tuskr custom field key. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Provider-specific object returned by Tuskr. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Tuskr project. */
    "tuskr.create_project": {
      input: {
        /**
         * Name of the Tuskr project to create.
         * @minLength 1
         */
        name: string;
        /** Project team members keyed by user email. */
        team?: Record<string, string>;
        /** Tuskr active or archived status. */
        status?: "active" | "archived";
        /**
         * Project description.
         * @minLength 1
         */
        description?: string;
        /**
         * External ID to associate with the project.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Integration data to associate with the project.
         * @minLength 1
         */
        integrationData?: string;
        /**
         * Issue URL template for the project.
         * @minLength 1
         */
        issueUrlTemplate?: string;
        /**
         * Reference URL template for the project.
         * @minLength 1
         */
        referenceUrlTemplate?: string;
      };
      output: {
        /** Provider-specific object returned by Tuskr. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Tuskr test case in a project suite section. */
    "tuskr.create_test_case": {
      input: {
        /**
         * Name of the Tuskr test case to create.
         * @minLength 1
         */
        name: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        project: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testSuite: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testSuiteSection: string;
        /**
         * Test case description.
         * @minLength 1
         */
        description?: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testCaseType?: string;
        /**
         * Estimated execution time in minutes.
         * @minimum 0
         */
        estimatedTimeInMinutes?: number;
        /** Custom fields keyed by Tuskr custom field key. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Provider-specific object returned by Tuskr. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Tuskr test run. */
    "tuskr.create_test_run": {
      input: {
        /**
         * Name of the Tuskr test run to create.
         * @minLength 1
         */
        name: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        project: string;
        /** Which test cases to include in the run. */
        testCaseInclusionType: "ALL" | "SPECIFIC";
        /**
         * Test case IDs, keys, or names to include.
         * @minItems 1
         */
        testCases?: Array<string>;
        /**
         * Test run description.
         * @minLength 1
         */
        description?: string;
        /**
         * Test run deadline in YYYY-MM-DD format.
         * @format date
         */
        deadline?: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        assignedTo?: string;
      };
      output: {
        /** Provider-specific object returned by Tuskr. */
        raw: Record<string, unknown>;
      };
    };
    /** List Tuskr projects with optional filters. */
    "tuskr.list_projects": {
      input: {
        /**
         * Project name substring to filter by.
         * @minLength 1
         */
        name?: string;
        /** Tuskr active or archived status. */
        status?: "active" | "archived";
        /**
         * The 1-based page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Rows returned by Tuskr. */
        rows: Array<Record<string, unknown>>;
        /** Number of rows returned in this response. */
        count: number;
        /** Tuskr pagination metadata. */
        meta: {
          /** Total number of records matching the request. */
          total?: number;
          /** Total number of pages matching the request. */
          pages?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Tuskr test cases for a project. */
    "tuskr.list_test_cases": {
      input: {
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        project: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testSuite?: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testSuiteSection?: string;
        /**
         * Test case key substring to filter by.
         * @minLength 1
         */
        key?: string;
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        testCaseType?: string;
        /**
         * Test case name substring to filter by.
         * @minLength 1
         */
        name?: string;
        /** Custom fields keyed by Tuskr custom field key. */
        customFields?: Record<string, unknown>;
        /**
         * The 1-based page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Rows returned by Tuskr. */
        rows: Array<Record<string, unknown>>;
        /** Number of rows returned in this response. */
        count: number;
        /** Tuskr pagination metadata. */
        meta: {
          /** Total number of records matching the request. */
          total?: number;
          /** Total number of pages matching the request. */
          pages?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Tuskr test runs for a project. */
    "tuskr.list_test_runs": {
      input: {
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        project: string;
        /**
         * Test run name substring to filter by.
         * @minLength 1
         */
        name?: string;
        /**
         * Test run key substring to filter by.
         * @minLength 1
         */
        key?: string;
        /** Tuskr active or archived status. */
        status?: "active" | "archived";
        /**
         * Tuskr ID, key, name, or email accepted by the API.
         * @minLength 1
         */
        assignedTo?: string;
        /**
         * The 1-based page number to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Rows returned by Tuskr. */
        rows: Array<Record<string, unknown>>;
        /** Number of rows returned in this response. */
        count: number;
        /** Tuskr pagination metadata. */
        meta: {
          /** Total number of records matching the request. */
          total?: number;
          /** Total number of pages matching the request. */
          pages?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
