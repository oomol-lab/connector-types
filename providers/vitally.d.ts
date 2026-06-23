import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Vitally account with an external ID, name, optional organization, and traits. */
    "vitally.create_account": {
      input: {
        /**
         * The unique account ID from your system.
         * @minLength 1
         */
        externalId: string;
        /**
         * The account name.
         * @minLength 1
         */
        name: string;
        /**
         * The Vitally-assigned organization ID to relate this account to.
         * @minLength 1
         */
        organizationId?: string;
        /** Vitally account traits keyed by trait name. Values are forwarded using Vitally's documented trait inference rules. */
        traits?: Record<string, unknown>;
      };
      output: {
        /** A raw Vitally account object returned by the REST API. */
        account: Record<string, unknown>;
      };
    };
    /** Delete a Vitally account by its Vitally ID or external ID. */
    "vitally.delete_account": {
      input: {
        /**
         * The Vitally account ID or the external ID supplied when creating it.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Vitally accepted the delete request. */
        deleted: boolean;
        /** The raw Vitally delete response payload. */
        raw: unknown;
      };
    };
    /** Get a Vitally account by its Vitally ID or external ID. */
    "vitally.get_account": {
      input: {
        /**
         * The Vitally account ID or the external ID supplied when creating it.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A raw Vitally account object returned by the REST API. */
        account: Record<string, unknown>;
      };
    };
    /** List Vitally accounts with optional status and cursor pagination filters. */
    "vitally.list_accounts": {
      input: {
        /**
         * The maximum number of accounts to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Vitally list response.
         * @minLength 1
         */
        from?: string;
        /** The account status filter. */
        status?: "active" | "churned" | "activeOrChurned";
      };
      output: {
        /** Vitally accounts in the current page. */
        accounts: Array<Record<string, unknown>>;
        /** The cursor for the next page, or null when there are no more pages. */
        next: string | null;
      };
    };
    /** Update a Vitally account name, organization relationship, or traits by Vitally ID or external ID. */
    "vitally.update_account": {
      input: {
        /**
         * The Vitally account ID or the external ID supplied when creating it.
         * @minLength 1
         */
        id: string;
        /**
         * The updated account name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Vitally organization ID or external ID, or null to remove the organization relationship.
         * @minLength 1
         */
        organizationId?: string | null;
        /** Vitally account traits keyed by trait name. Values are forwarded using Vitally's documented trait inference rules. */
        traits?: Record<string, unknown>;
      };
      output: {
        /** A raw Vitally account object returned by the REST API. */
        account: Record<string, unknown>;
      };
    };
  }
}
