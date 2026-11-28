import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List events owned by an Eventbrite organization. */
    "eventbrite.list_organization_events": {
      input: {
        /**
         * Eventbrite organization ID.
         * @minLength 1
         */
        organizationId: string;
        /**
         * Optional event status filter (e.g. live, draft, ended).
         * @minLength 1
         */
        status?: string;
        /**
         * Optional pagination continuation token.
         * @minLength 1
         */
        continuation?: string;
      };
      output: {
        /** Eventbrite records. */
        events: Array<Record<string, unknown>>;
        /** Eventbrite API object. */
        pagination: Record<string, unknown>;
      };
    };
    /** List organizations accessible to the connected Eventbrite user. */
    "eventbrite.list_organizations": {
      input: {
        /**
         * Optional pagination continuation token.
         * @minLength 1
         */
        continuation?: string;
      };
      output: {
        /** Eventbrite records. */
        organizations: Array<Record<string, unknown>>;
        /** Eventbrite API object. */
        pagination: Record<string, unknown>;
      };
    };
  }
}
