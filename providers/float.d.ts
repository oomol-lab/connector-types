import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Float accounts that can access the team. */
    "float.list_accounts": {
      input: {
        /**
         * The page number of the page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Float supports up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** Use people_id to include the linked Float person ID. */
        expand?: "people_id";
      };
      output: {
        /** Pagination metadata returned from Float response headers. */
        pagination: {
          /** The total number of items when Float returned it. */
          totalCount: number | null;
          /** The total number of pages when Float returned it. */
          pageCount: number | null;
          /** The current page number when Float returned it. */
          currentPage: number | null;
          /** The number of items per page when Float returned it. */
          perPage: number | null;
        };
        /** The accounts returned by Float. */
        accounts: Array<{
          /** The Float account ID. */
          accountId: number | null;
          /** The account name. */
          name: string | null;
          /** The account email address. */
          email: string | null;
          /** The high-level Float account permission type. */
          accountType: number | null;
          /** The granular Float account access value. */
          access: number | null;
          /** Whether the account is active, using Float's 1 or 0 value. */
          active: number | null;
          /** The linked Float person ID when expanded and present. */
          peopleId: number | null;
          /** The raw account object returned by Float. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Float allocations as tasks with optional schedule filters. */
    "float.list_allocations": {
      input: {
        /**
         * The page number of the page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Float supports up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * The Float client ID to filter allocations by.
         * @minimum 1
         */
        clientId?: number;
        /**
         * The Float project ID to filter allocations by.
         * @minimum 1
         */
        projectId?: number;
        /**
         * The Float phase ID to filter allocations by.
         * @minimum 1
         */
        phaseId?: number;
        /**
         * The Float project task ID to filter allocations by.
         * @minimum 1
         */
        projectTaskId?: number;
        /**
         * The Float person ID to filter allocations by.
         * @minimum 1
         */
        peopleId?: number;
        /**
         * The schedule start date in YYYY-MM-DD format.
         * @minLength 1
         * @pattern \S
         */
        startDate?: string;
        /**
         * The schedule end date in YYYY-MM-DD format.
         * @minLength 1
         * @pattern \S
         */
        endDate?: string;
        /** Filter active entities with 1 for active or 0 for archived. */
        billable?: 0 | 1;
        /** The Float allocation status value to filter by. */
        status?: 0 | 1 | 2 | 3 | 4;
        /**
         * An exact Float tag name to filter allocations by.
         * @minLength 1
         * @pattern \S
         */
        tagName?: string;
        /**
         * A Float modified timestamp or Unix timestamp filter.
         * @minLength 1
         * @pattern \S
         */
        modifiedSince?: string;
        /**
         * The Float fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Use task_days to include calculated allocation dates. */
        expand?: "task_days";
      };
      output: {
        /** Pagination metadata returned from Float response headers. */
        pagination: {
          /** The total number of items when Float returned it. */
          totalCount: number | null;
          /** The total number of pages when Float returned it. */
          pageCount: number | null;
          /** The current page number when Float returned it. */
          currentPage: number | null;
          /** The number of items per page when Float returned it. */
          perPage: number | null;
        };
        /** The allocations returned by Float. */
        allocations: Array<{
          /** The Float allocation task ID. */
          taskId: number | null;
          /** The project ID for this allocation. */
          projectId: number | null;
          /** The person ID for this allocation when present. */
          peopleId: number | null;
          /** The allocation start date. */
          startDate: string | null;
          /** The allocation end date. */
          endDate: string | null;
          /** The number of hours per day. */
          hours: number | null;
          /** The Float allocation status value. */
          status: number | null;
          /** Whether the allocation is billable, using Float's 1 or 0 value. */
          billable: number | null;
          /** The allocation name or note when present. */
          name: string | null;
          /** The raw allocation object returned by Float. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Float clients. */
    "float.list_clients": {
      input: {
        /**
         * The page number of the page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Float supports up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Pagination metadata returned from Float response headers. */
        pagination: {
          /** The total number of items when Float returned it. */
          totalCount: number | null;
          /** The total number of pages when Float returned it. */
          pageCount: number | null;
          /** The current page number when Float returned it. */
          currentPage: number | null;
          /** The number of items per page when Float returned it. */
          perPage: number | null;
        };
        /** The clients returned by Float. */
        clients: Array<{
          /** The Float client ID. */
          clientId: number | null;
          /** The client name. */
          name: string | null;
          /** The raw client object returned by Float. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Float people on the schedule with optional filters. */
    "float.list_people": {
      input: {
        /**
         * The page number of the page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Float supports up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** Filter active entities with 1 for active or 0 for archived. */
        active?: 0 | 1;
        /**
         * The Float department ID to filter people by.
         * @minimum 1
         */
        departmentId?: number;
        /**
         * An email address to filter people by exact match.
         * @minLength 1
         * @pattern \S
         */
        email?: string;
        /**
         * The Float people type ID to filter by.
         * @minimum 1
         */
        peopleTypeId?: number;
        /** Filter active entities with 1 for active or 0 for archived. */
        employeeType?: 0 | 1;
        /**
         * An exact Float tag name to filter people by.
         * @minLength 1
         * @pattern \S
         */
        tagName?: string;
        /**
         * A Float people field to sort by, prefix with - for descending.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * A Float modified timestamp or Unix timestamp filter.
         * @minLength 1
         * @pattern \S
         */
        modifiedSince?: string;
        /**
         * The Float fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Use accounts to include linked account data. */
        expand?: "accounts";
      };
      output: {
        /** Pagination metadata returned from Float response headers. */
        pagination: {
          /** The total number of items when Float returned it. */
          totalCount: number | null;
          /** The total number of pages when Float returned it. */
          pageCount: number | null;
          /** The current page number when Float returned it. */
          currentPage: number | null;
          /** The number of items per page when Float returned it. */
          perPage: number | null;
        };
        /** The people returned by Float. */
        people: Array<{
          /** The Float person ID. */
          peopleId: number | null;
          /** The person's full name. */
          name: string | null;
          /** The person's email address. */
          email: string | null;
          /** The person's job title. */
          jobTitle: string | null;
          /** The current department name when present. */
          departmentName: string | null;
          /** Whether the person is active, using Float's 1 or 0 value. */
          active: number | null;
          /** The date the person started when present. */
          startDate: string | null;
          /** The date the person finished when present. */
          endDate: string | null;
          /** The raw person object returned by Float. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Float projects with optional filters. */
    "float.list_projects": {
      input: {
        /**
         * The page number of the page of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Float supports up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** Filter active entities with 1 for active or 0 for archived. */
        active?: 0 | 1;
        /**
         * The Float client ID to filter projects by.
         * @minimum 1
         */
        clientId?: number;
        /**
         * An exact Float tag name to filter projects by.
         * @minLength 1
         * @pattern \S
         */
        tagName?: string;
        /**
         * A Float projects field to sort by, prefix with - for descending.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * A Float modified timestamp or Unix timestamp filter.
         * @minLength 1
         * @pattern \S
         */
        modifiedSince?: string;
        /**
         * The Float fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Pagination metadata returned from Float response headers. */
        pagination: {
          /** The total number of items when Float returned it. */
          totalCount: number | null;
          /** The total number of pages when Float returned it. */
          pageCount: number | null;
          /** The current page number when Float returned it. */
          currentPage: number | null;
          /** The number of items per page when Float returned it. */
          perPage: number | null;
        };
        /** The projects returned by Float. */
        projects: Array<{
          /** The Float project ID. */
          projectId: number | null;
          /** The project name. */
          name: string | null;
          /** The optional third-party project identifier. */
          projectCode: string | null;
          /** The ID of the project's client. */
          clientId: number | null;
          /** The Float project status value. */
          status: number | null;
          /** Whether the project is active, using Float's 1 or 0 value. */
          active: number | null;
          /** The project start date when present. */
          startDate: string | null;
          /** The project end date when present. */
          endDate: string | null;
          /** The raw project object returned by Float. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
