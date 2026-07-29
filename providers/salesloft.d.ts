import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch a Salesloft account by ID or GUID. */
    "salesloft.get_account": {
      input: {
        /**
         * The Salesloft resource ID or GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Salesloft resource object returned by the API. */
        account: Record<string, unknown>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
    /** Fetch a Salesloft cadence by ID or GUID. */
    "salesloft.get_cadence": {
      input: {
        /**
         * The Salesloft resource ID or GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Salesloft resource object returned by the API. */
        cadence: Record<string, unknown>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
    /** Fetch information about the authenticated Salesloft user. */
    "salesloft.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Salesloft resource object returned by the API. */
        user: Record<string, unknown>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
    /** Fetch a Salesloft person by ID or GUID. */
    "salesloft.get_person": {
      input: {
        /**
         * The Salesloft resource ID or GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Salesloft resource object returned by the API. */
        person: Record<string, unknown>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
    /** List Salesloft accounts with optional paging, sorting, and filters. */
    "salesloft.list_accounts": {
      input: {
        /**
         * The Salesloft page number to fetch. The minimum page is 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to fetch per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The Salesloft field name to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The Salesloft sort direction. */
        sortDirection?: "ASC" | "DESC";
        /** Salesloft query filters keyed by official filter name. Nested objects are encoded as bracket query parameters, such as industry[_starts_with]. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** The Salesloft accounts returned by the API. */
        accounts: Array<Record<string, unknown>>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
    /** List Salesloft cadences with optional paging, sorting, and filters. */
    "salesloft.list_cadences": {
      input: {
        /**
         * The Salesloft page number to fetch. The minimum page is 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to fetch per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The Salesloft field name to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The Salesloft sort direction. */
        sortDirection?: "ASC" | "DESC";
        /** Salesloft query filters keyed by official filter name. Nested objects are encoded as bracket query parameters, such as industry[_starts_with]. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** The Salesloft cadences returned by the API. */
        cadences: Array<Record<string, unknown>>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
    /** List Salesloft people with optional paging, sorting, and filters. */
    "salesloft.list_people": {
      input: {
        /**
         * The Salesloft page number to fetch. The minimum page is 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to fetch per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The Salesloft field name to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The Salesloft sort direction. */
        sortDirection?: "ASC" | "DESC";
        /** Salesloft query filters keyed by official filter name. Nested objects are encoded as bracket query parameters, such as industry[_starts_with]. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** The Salesloft people returned by the API. */
        people: Array<Record<string, unknown>>;
        /** The Salesloft metadata object returned with list responses. */
        metadata: Record<string, unknown> | null;
      };
    };
  }
}
