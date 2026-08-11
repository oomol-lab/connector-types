import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List pending ProcessPlan tasks assigned to the current API token user. */
    "processplan.list_my_pending_tasks": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        take?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** A ProcessPlan list filter expression. */
        filter?: string;
      };
      output: {
        /** The pending tasks assigned to the current user. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** List ProcessPlan process instances, optionally limited to one template and status. */
    "processplan.list_process_instances": {
      input: {
        /**
         * The process template ID whose instances should be listed.
         * @minLength 1
         */
        processTemplateId?: string;
        /** The process instance status to list, or all for the unfiltered list endpoint. */
        status?: "all" | "pending" | "completed";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        take?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** A ProcessPlan list filter expression. */
        filter?: string;
      };
      output: {
        /** The matching process instances. */
        processInstances: Array<Record<string, unknown>>;
      };
    };
    /** List ProcessPlan process templates that the current user can start. */
    "processplan.list_process_templates": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        take?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** A ProcessPlan list filter expression. */
        filter?: string;
      };
      output: {
        /** The process templates available to start. */
        processTemplates: Array<Record<string, unknown>>;
      };
    };
    /** Start a ProcessPlan process from a template and optionally populate its fields. */
    "processplan.start_process": {
      input: {
        /**
         * The ProcessPlan process template ID to start.
         * @minLength 1
         */
        processTemplateId: string;
        /** Initial process field values keyed by the field names configured in ProcessPlan. */
        fields?: Record<string, unknown>;
      };
      output: {
        /** A ProcessPlan object whose documented fields depend on the configured process template. */
        processInstance: Record<string, unknown>;
      };
    };
  }
}
