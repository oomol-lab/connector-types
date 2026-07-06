import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Freshsales contact from a JSON contact payload. */
    "freshsales.create_contact": {
      input: {
        /** Freshsales contact fields, including custom_field and related account payloads accepted by the API. */
        contact: Record<string, unknown>;
      };
      output: {
        /** Freshsales contact payload. */
        contact: Record<string, unknown>;
      };
    };
    /** Delete a Freshsales contact by ID. */
    "freshsales.delete_contact": {
      input: {
        /**
         * Freshsales contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** Whether Freshsales accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Get one Freshsales contact by ID. */
    "freshsales.get_contact": {
      input: {
        /**
         * Freshsales contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * Freshsales include values to expand on a contact response.
         * @minItems 1
         */
        include?: Array<"sales_activities" | "owner" | "creater" | "updater" | "source" | "campaign" | "tasks" | "appointments" | "notes" | "deals" | "sales_accounts" | "territory">;
      };
      output: {
        /** Freshsales contact payload. */
        contact: Record<string, unknown>;
      };
    };
    /** List Freshsales contact filters used to discover contact view IDs. */
    "freshsales.list_contact_filters": {
      input: Record<string, never>;
      output: {
        /** Freshsales contact filters available to the current API key. */
        filters: Array<Record<string, unknown>>;
      };
    };
    /** List Freshsales contacts from a saved contact view. */
    "freshsales.list_contacts": {
      input: {
        /**
         * Freshsales contact view ID returned by list_contact_filters.
         * @exclusiveMinimum 0
         */
        viewId: number;
        /**
         * One-based Freshsales page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Freshsales contacts returned for the requested view page. */
        contacts: Array<Record<string, unknown>>;
        /** Whether another Freshsales contacts page is likely available. */
        hasMore: boolean;
        /**
         * Next Freshsales page number when another page is available.
         * @exclusiveMinimum 0
         */
        nextPage: number | null;
      };
    };
    /** Update a Freshsales contact by ID. */
    "freshsales.update_contact": {
      input: {
        /**
         * Freshsales contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /** Freshsales contact fields, including custom_field and related account payloads accepted by the API. */
        contact: Record<string, unknown>;
      };
      output: {
        /** Freshsales contact payload. */
        contact: Record<string, unknown>;
      };
    };
  }
}
