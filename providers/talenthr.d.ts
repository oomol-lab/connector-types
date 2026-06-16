import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Change a TalentHR employee's user role to Employee or HR-Manager using the official employee role endpoints. */
    "talenthr.change_employee_role": {
      input: {
        /**
         * The TalentHR employee ID whose role should be changed.
         * @exclusiveMinimum 0
         */
        employeeId: number;
        /** The TalentHR role to assign to the employee. */
        role: "employee" | "hr_manager";
      };
      output: {
        /** Whether TalentHR reported that the operation succeeded. */
        success: boolean;
        /**
         * The TalentHR employee ID returned by the role change endpoint.
         * @exclusiveMinimum 0
         */
        employeeId: number;
        /** The TalentHR role to assign to the employee. */
        role: "employee" | "hr_manager";
        /** Raw TalentHR response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
