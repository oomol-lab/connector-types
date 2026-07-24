import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Talenox branch by branch ID. */
    "talenox.get_branch": {
      input: {
        /**
         * The Talenox branch ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Talenox branch object. */
        branch: Record<string, unknown>;
      };
    };
    /** Retrieve one Talenox employee by employee ID. */
    "talenox.get_employee": {
      input: {
        /**
         * The Talenox employee ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Talenox employee object. */
        employee: Record<string, unknown>;
      };
    };
    /** Retrieve one Talenox working day configuration by ID. */
    "talenox.get_working_day": {
      input: {
        /**
         * The Talenox working day ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Talenox working day object. */
        workingDay: Record<string, unknown>;
      };
    };
    /** Retrieve one Talenox working hour configuration by ID. */
    "talenox.get_working_hour": {
      input: {
        /**
         * The Talenox working hour ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Talenox working hour object. */
        workingHour: Record<string, unknown>;
      };
    };
    /** List all Talenox branches for the connected company. */
    "talenox.list_branches": {
      input: Record<string, never>;
      output: {
        /** The branches returned by Talenox. */
        branches: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the current Talenox company settings visible to the API token. */
    "talenox.list_company_settings": {
      input: Record<string, never>;
      output: {
        /** The company settings returned by Talenox. */
        companySettings: Record<string, unknown>;
      };
    };
    /** List all Talenox employees for the connected company. */
    "talenox.list_employees": {
      input: Record<string, never>;
      output: {
        /** The employees returned by Talenox. */
        employees: Array<Record<string, unknown>>;
      };
    };
    /** List all Talenox working day configurations. */
    "talenox.list_working_days": {
      input: Record<string, never>;
      output: {
        /** The working days returned by Talenox. */
        workingDays: Array<Record<string, unknown>>;
      };
    };
    /** List all Talenox working hour configurations. */
    "talenox.list_working_hours": {
      input: Record<string, never>;
      output: {
        /** The working hours returned by Talenox. */
        workingHours: Array<Record<string, unknown>>;
      };
    };
  }
}
