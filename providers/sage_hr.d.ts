import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single active Sage HR employee by ID. */
    "sage_hr.get_employee": {
      input: {
        /**
         * The Sage HR employee ID.
         * @exclusiveMinimum 0
         */
        employeeId: number;
        /** Whether Sage HR should include team_history records in employee responses. */
        includeTeamHistory?: boolean;
        /** Whether Sage HR should include employment_status_history records in employee responses. */
        includeEmploymentStatusHistory?: boolean;
        /** Whether Sage HR should include position_history records in employee responses. */
        includePositionHistory?: boolean;
      };
      output: {
        /** A Sage HR active employee object. */
        employee: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a single terminated Sage HR employee by ID. */
    "sage_hr.get_terminated_employee": {
      input: {
        /**
         * The Sage HR employee ID.
         * @exclusiveMinimum 0
         */
        employeeId: number;
      };
      output: {
        /** A Sage HR terminated employee object. */
        terminatedEmployee: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List active employees in Sage HR with optional pagination and history expansions. */
    "sage_hr.list_employees": {
      input: {
        /**
         * The Sage HR page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Whether Sage HR should include team_history records in employee responses. */
        includeTeamHistory?: boolean;
        /** Whether Sage HR should include employment_status_history records in employee responses. */
        includeEmploymentStatusHistory?: boolean;
        /** Whether Sage HR should include position_history records in employee responses. */
        includePositionHistory?: boolean;
      };
      output: {
        /** The active employees returned by Sage HR. */
        employees: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Sage HR. */
        meta: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List positions in Sage HR with optional pagination. */
    "sage_hr.list_positions": {
      input: {
        /**
         * The Sage HR page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The positions returned by Sage HR. */
        positions: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Sage HR. */
        meta: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List teams in Sage HR with optional pagination. */
    "sage_hr.list_teams": {
      input: {
        /**
         * The Sage HR page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The teams returned by Sage HR. */
        teams: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Sage HR. */
        meta: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List terminated employees in Sage HR with optional pagination and history expansions. */
    "sage_hr.list_terminated_employees": {
      input: {
        /**
         * The Sage HR page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Whether Sage HR should include team_history records in employee responses. */
        includeTeamHistory?: boolean;
        /** Whether Sage HR should include employment_status_history records in employee responses. */
        includeEmploymentStatusHistory?: boolean;
        /** Whether Sage HR should include position_history records in employee responses. */
        includePositionHistory?: boolean;
      };
      output: {
        /** The terminated employees returned by Sage HR. */
        terminatedEmployees: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Sage HR. */
        meta: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List termination reasons configured in Sage HR with optional pagination. */
    "sage_hr.list_termination_reasons": {
      input: {
        /**
         * The Sage HR page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The termination reasons returned by Sage HR. */
        terminationReasons: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Sage HR. */
        meta: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Sage HR time off requests with optional date range and pagination filters. */
    "sage_hr.list_time_off_requests": {
      input: {
        /**
         * The Sage HR page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Start date for the time off request range. Sage HR expects YYYY-MM-DD; when from and to are both provided, the range must be less than 65 days.
         * @format date
         */
        from?: string;
        /**
         * End date for the time off request range. Sage HR expects YYYY-MM-DD; when from and to are both provided, the range must be less than 65 days.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The time off requests returned by Sage HR. */
        timeOffRequests: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Sage HR. */
        meta: Record<string, unknown>;
        /** The raw Sage HR API response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
