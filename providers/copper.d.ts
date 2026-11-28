import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one person record by ID in Copper CRM. */
    "copper.get_person": {
      input: {
        /**
         * Copper person ID.
         * @minimum 1
         */
        personId: number;
      };
      output: {
        /** Copper CRM API object. */
        person: Record<string, unknown>;
      };
    };
    /** Search people records in Copper CRM. */
    "copper.search_people": {
      input: {
        /**
         * Optional person name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional 1-based page number.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** Copper records. */
        people: Array<Record<string, unknown>>;
      };
    };
  }
}
