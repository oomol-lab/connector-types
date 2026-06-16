import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch account details for the authenticated Breathe account. */
    "breathe.get_account": {
      input: Record<string, never>;
      output: {
        /** Breathe account record. */
        account: Record<string, unknown>;
        /** Raw Breathe response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one employee from Breathe by employee ID. */
    "breathe.get_employee": {
      input: {
        /**
         * ID of the Breathe employee to fetch.
         * @minimum 1
         */
        employeeId: number;
      };
      output: {
        /** Breathe employee record. */
        employee: Record<string, unknown>;
        /** Raw Breathe response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List company departments from Breathe. */
    "breathe.list_departments": {
      input: {
        /**
         * Page of results to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** Breathe department record. */
        departments: Array<Record<string, unknown>>;
        /** Raw Breathe response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List employees from Breathe with optional pagination and role filters. */
    "breathe.list_employees": {
      input: {
        /**
         * Page of results to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @minimum 1
         */
        perPage?: number;
        /** Type of employees to return. */
        filter?: "hr" | "line_manager" | "either" | "neither";
        /** Whether to return leave requests where rotacloud is not excluded from integration. */
        rotacloud?: boolean;
      };
      output: {
        /** Breathe employee record. */
        employees: Array<Record<string, unknown>>;
        /** Raw Breathe response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List company locations from Breathe. */
    "breathe.list_locations": {
      input: Record<string, never>;
      output: {
        /** Breathe location record. */
        locations: Array<Record<string, unknown>>;
        /** Raw Breathe response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
