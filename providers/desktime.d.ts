import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a DeskTime project and optionally create an associated task. */
    "desktime.create_project": {
      input: {
        /**
         * The project name to create in DeskTime.
         * @minLength 1
         */
        project: string;
        /**
         * The optional task name to create under the new DeskTime project.
         * @minLength 1
         */
        task?: string;
      };
      output: {
        /** The raw JSON object returned by DeskTime. */
        data: Record<string, unknown>;
        /** A normalized DeskTime project. */
        project: {
          /** The DeskTime project ID when returned. */
          id: number | null;
          /** The DeskTime project name when returned. */
          name: string | null;
          /** The project creation date or timestamp returned by DeskTime. */
          createdAt: string | null;
          /** The tasks returned for the DeskTime project. */
          tasks: Array<{
            /** The DeskTime task ID when returned. */
            id: number | null;
            /** The DeskTime task name when returned. */
            name: string | null;
            /** The raw task object returned by DeskTime. */
            raw: Record<string, unknown>;
          }>;
          /** The raw project object returned by DeskTime. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve DeskTime company account settings and timezone information. */
    "desktime.get_company": {
      input: Record<string, never>;
      output: {
        /** The raw JSON object returned by DeskTime. */
        data: Record<string, unknown>;
      };
    };
    /** Retrieve DeskTime tracking data for one employee or the API key owner. */
    "desktime.get_employee": {
      input: {
        /**
         * The DeskTime employee ID. When omitted, DeskTime returns the API key owner's employee data.
         * @exclusiveMinimum 0
         */
        employeeId?: number;
        /**
         * The DeskTime date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** The raw JSON object returned by DeskTime. */
        data: Record<string, unknown>;
      };
    };
    /** Retrieve all DeskTime company employees with optional day or month tracking data. */
    "desktime.list_employees": {
      input: {
        /**
         * The DeskTime date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /** The DeskTime tracking period to return for employee data. */
        period?: "day" | "month";
      };
      output: {
        /** The raw JSON object returned by DeskTime. */
        data: Record<string, unknown>;
      };
    };
    /** List active DeskTime projects and their related tasks. */
    "desktime.list_projects": {
      input: Record<string, never>;
      output: {
        /** The raw JSON object returned by DeskTime. */
        data: Record<string, unknown>;
        /** The normalized active DeskTime projects. */
        projects: Array<{
          /** The DeskTime project ID when returned. */
          id: number | null;
          /** The DeskTime project name when returned. */
          name: string | null;
          /** The project creation date or timestamp returned by DeskTime. */
          createdAt: string | null;
          /** The tasks returned for the DeskTime project. */
          tasks: Array<{
            /** The DeskTime task ID when returned. */
            id: number | null;
            /** The DeskTime task name when returned. */
            name: string | null;
            /** The raw task object returned by DeskTime. */
            raw: Record<string, unknown>;
          }>;
          /** The raw project object returned by DeskTime. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
