import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one contact by ID in Keap. */
    "keap.get_contact": {
      input: {
        /**
         * Keap contact ID.
         * @minimum 1
         */
        contactId: number;
      };
      output: {
        /** Keap API object. */
        contact: Record<string, unknown>;
      };
    };
    /** List contacts in the connected Keap CRM account. */
    "keap.list_contacts": {
      input: {
        /**
         * Maximum contacts to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Keap records. */
        contacts: Array<Record<string, unknown>>;
        /** Total contact count. */
        count: number;
      };
    };
  }
}
