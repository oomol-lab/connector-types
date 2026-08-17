import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a test in a PractiTest project. */
    "practitest.create_test": {
      input: {
        /**
         * The PractiTest project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The test name.
         * @minLength 1
         */
        name: string;
        /**
         * The author user ID; omit for a personal token unless impersonation is enabled.
         * @minLength 1
         */
        authorId?: string;
        /** The test description. */
        description?: string;
        /** The PractiTest test type. */
        testType?: "ScriptedTest" | "ApiTest" | "FireCracker" | "xBotTest" | "EggplantTest" | "BDDTest";
        /**
         * The assigned user or group ID.
         * @minLength 1
         */
        assignedToId?: string;
        /** The assignee type. */
        assignedToType?: "user" | "group";
        /**
         * The planned execution date and time.
         * @format date-time
         */
        plannedExecution?: string;
        /**
         * The test workflow status.
         * @minLength 1
         */
        status?: string;
        /** The test version. */
        version?: string;
        /** The test priority. */
        priority?: string;
        /** The test duration estimate. */
        durationEstimate?: string;
        /** PractiTest custom field keys and values. */
        customFields?: Record<string, unknown>;
        /** PractiTest automation information fields. */
        automatedFields?: Record<string, unknown>;
        /** Tags assigned to the test. */
        tags?: Array<string>;
        /**
         * Scripted steps to create with the test.
         * @minItems 1
         */
        steps?: Array<{
          /**
           * The step name, up to 255 characters.
           * @minLength 1
           * @maxLength 255
           */
          name: string;
          /** The step description. */
          description?: string;
          /** The expected step results. */
          expectedResults?: string;
        }>;
      };
      output: {
        /** A PractiTest JSON:API resource. */
        test: {
          /**
           * The PractiTest resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The PractiTest resource type.
           * @minLength 1
           */
          type?: string;
          /** The attributes returned by PractiTest for this resource. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a test from a PractiTest project. */
    "practitest.delete_test": {
      input: {
        /**
         * The PractiTest project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The PractiTest test ID, not its display ID.
         * @minLength 1
         */
        testId: string;
      };
      output: {
        /** Whether the test deletion succeeded. */
        deleted: boolean;
        /**
         * The deleted PractiTest test ID.
         * @minLength 1
         */
        testId: string;
      };
    };
    /** Retrieve a PractiTest project by ID. */
    "practitest.get_project": {
      input: {
        /**
         * The PractiTest project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A PractiTest JSON:API resource. */
        project: {
          /**
           * The PractiTest resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The PractiTest resource type.
           * @minLength 1
           */
          type?: string;
          /** The attributes returned by PractiTest for this resource. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a PractiTest test by ID. */
    "practitest.get_test": {
      input: {
        /**
         * The PractiTest project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The PractiTest test ID, not its display ID.
         * @minLength 1
         */
        testId: string;
        /** Whether to include linked entities. */
        relationships?: boolean;
      };
      output: {
        /** A PractiTest JSON:API resource. */
        test: {
          /**
           * The PractiTest resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The PractiTest resource type.
           * @minLength 1
           */
          type?: string;
          /** The attributes returned by PractiTest for this resource. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List projects available to the connected PractiTest token. */
    "practitest.list_projects": {
      input: {
        /**
         * The page number to retrieve, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The projects returned for this page. */
        projects: Array<{
          /**
           * The PractiTest resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The PractiTest resource type.
           * @minLength 1
           */
          type?: string;
          /** The attributes returned by PractiTest for this resource. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by PractiTest. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The next page number, or null on the last page. */
          nextPage?: number | null;
          /** The previous page number, or null on the first page. */
          previousPage?: number | null;
          /** The total number of pages. */
          totalPages: number;
          /** The total number of matching resources. */
          totalCount: number;
        };
      };
    };
    /** List and filter tests in a PractiTest project. */
    "practitest.list_tests": {
      input: {
        /**
         * The PractiTest project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The page number to retrieve, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Test Library filter ID.
         * @minLength 1
         */
        filterId?: string;
        /** The first-level auto-filter value. */
        autoFilterValue?: string;
        /** The second-level auto-filter value. */
        subAutoFilterValue?: string;
        /**
         * The user ID used by current-user filter criteria.
         * @minLength 1
         */
        filterUserId?: string;
        /**
         * Test display IDs to include.
         * @minItems 1
         */
        displayIds?: Array<string>;
        /** An exact, case-sensitive test name. */
        nameExact?: string;
        /** A case-insensitive substring of the test name. */
        nameLike?: string;
        /** Whether to include linked entities. */
        relationships?: boolean;
      };
      output: {
        /** The tests returned for this page. */
        tests: Array<{
          /**
           * The PractiTest resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The PractiTest resource type.
           * @minLength 1
           */
          type?: string;
          /** The attributes returned by PractiTest for this resource. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by PractiTest. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The next page number, or null on the last page. */
          nextPage?: number | null;
          /** The previous page number, or null on the first page. */
          previousPage?: number | null;
          /** The total number of pages. */
          totalPages: number;
          /** The total number of matching resources. */
          totalCount: number;
        };
      };
    };
    /** Update the documented attributes of a PractiTest test. */
    "practitest.update_test": {
      input: {
        /**
         * The PractiTest project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The PractiTest test ID, not its display ID.
         * @minLength 1
         */
        testId: string;
        /**
         * The test name.
         * @minLength 1
         */
        name?: string;
        /**
         * The author user ID; omit for a personal token unless impersonation is enabled.
         * @minLength 1
         */
        authorId?: string;
        /** The test description. */
        description?: string;
        /** The PractiTest test type. */
        testType?: "ScriptedTest" | "ApiTest" | "FireCracker" | "xBotTest" | "EggplantTest" | "BDDTest";
        /**
         * The assigned user or group ID.
         * @minLength 1
         */
        assignedToId?: string;
        /** The assignee type. */
        assignedToType?: "user" | "group";
        /**
         * The planned execution date and time.
         * @format date-time
         */
        plannedExecution?: string;
        /**
         * The test workflow status.
         * @minLength 1
         */
        status?: string;
        /** The test version. */
        version?: string;
        /** The test priority. */
        priority?: string;
        /** The test duration estimate. */
        durationEstimate?: string;
        /** PractiTest custom field keys and values. */
        customFields?: Record<string, unknown>;
        /** PractiTest automation information fields. */
        automatedFields?: Record<string, unknown>;
        /** Tags assigned to the test. */
        tags?: Array<string>;
      };
      output: {
        /** A PractiTest JSON:API resource. */
        test: {
          /**
           * The PractiTest resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The PractiTest resource type.
           * @minLength 1
           */
          type?: string;
          /** The attributes returned by PractiTest for this resource. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
