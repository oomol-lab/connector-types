import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Complete an active test run in a Qase project. */
    "qase.complete_run": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        runId: number;
      };
      output: {
        /** Whether the test run was completed. */
        completed: boolean;
      };
    };
    /** Create a test case in a Qase project. */
    "qase.create_case": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /**
         * The test case title.
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /** The test case description. */
        description?: string;
        /** Conditions that must be met before the test begins. */
        preconditions?: string;
        /** Conditions expected after the test finishes. */
        postconditions?: string;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        suiteId?: number;
        /** Whether the test case is manual. */
        isManual?: boolean;
        /** Whether a manual test case is planned for automation. */
        isToBeAutomated?: boolean;
        /** Tags to assign to the test case. */
        tags?: Array<string>;
      };
      output: {
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        caseId: number;
      };
    };
    /** Create a test run in a Qase project. */
    "qase.create_run": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /**
         * The test run title.
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /**
         * The test run description.
         * @maxLength 10000
         */
        description?: string;
        /** Whether the run includes every test case in the project. */
        includeAllCases?: boolean;
        /** The test case IDs to include. */
        caseIds?: Array<number>;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        environmentId?: number;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        milestoneId?: number;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        planId?: number;
        /** Tags to assign to the test run. */
        tags?: Array<string>;
      };
      output: {
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        runId: number;
      };
    };
    /** Retrieve one test case from a Qase project. */
    "qase.get_case": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        caseId: number;
      };
      output: {
        /** The requested Qase test case. */
        testCase: Record<string, unknown>;
      };
    };
    /** Retrieve a Qase project by its code. */
    "qase.get_project": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
      };
      output: {
        /** The requested Qase project. */
        project: Record<string, unknown>;
      };
    };
    /** Retrieve one test run from a Qase project. */
    "qase.get_run": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        runId: number;
      };
      output: {
        /** The requested Qase test run. */
        run: Record<string, unknown>;
      };
    };
    /** List test cases in a Qase project with common filters and pagination. */
    "qase.list_cases": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /** Text used to search test case titles. */
        search?: string;
        /**
         * The Qase entity ID.
         * @minimum 1
         */
        suiteId?: number;
        /** A comma-separated list of case statuses. */
        status?: string;
        /** A comma-separated list of case priorities. */
        priority?: string;
        /** A comma-separated list of case types. */
        type?: string;
        /**
         * The maximum number of entities to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of entities to skip.
         * @minimum 0
         * @maximum 100000
         */
        offset?: number;
      };
      output: {
        /**
         * The total number of available entities.
         * @minimum 0
         */
        total: number;
        /**
         * The number of entities matching the current filters.
         * @minimum 0
         */
        filtered: number;
        /**
         * The number of entities returned in this page.
         * @minimum 0
         */
        count: number;
        /** The entities returned in this page. */
        entities: Array<Record<string, unknown>>;
      };
    };
    /** List Qase projects accessible to the connected account. */
    "qase.list_projects": {
      input: {
        /**
         * The maximum number of entities to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of entities to skip.
         * @minimum 0
         * @maximum 100000
         */
        offset?: number;
      };
      output: {
        /**
         * The total number of available entities.
         * @minimum 0
         */
        total: number;
        /**
         * The number of entities matching the current filters.
         * @minimum 0
         */
        filtered: number;
        /**
         * The number of entities returned in this page.
         * @minimum 0
         */
        count: number;
        /** The entities returned in this page. */
        entities: Array<Record<string, unknown>>;
      };
    };
    /** List test runs in a Qase project with common filters and pagination. */
    "qase.list_runs": {
      input: {
        /**
         * The Qase project code.
         * @minLength 2
         * @maxLength 10
         */
        projectCode: string;
        /** Text used to search test run titles. */
        search?: string;
        /** A comma-separated list of run statuses. */
        status?: string;
        /**
         * The maximum number of entities to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of entities to skip.
         * @minimum 0
         * @maximum 100000
         */
        offset?: number;
      };
      output: {
        /**
         * The total number of available entities.
         * @minimum 0
         */
        total: number;
        /**
         * The number of entities matching the current filters.
         * @minimum 0
         */
        filtered: number;
        /**
         * The number of entities returned in this page.
         * @minimum 0
         */
        count: number;
        /** The entities returned in this page. */
        entities: Array<Record<string, unknown>>;
      };
    };
  }
}
