import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Coinbase Advanced Trade brokerage account by UUID. */
    "coinbase.get_account": {
      input: {
        /**
         * Brokerage account UUID returned by Coinbase.
         * @minLength 1
         */
        account_uuid: string;
      };
      output: {
        /** The brokerage account returned by Coinbase. */
        account: Record<string, unknown>;
      };
    };
    /** List Coinbase Advanced Trade brokerage accounts that the connected API key can access. */
    "coinbase.list_accounts": {
      input: {
        /**
         * Maximum number of accounts to return per page.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Pagination cursor returned by Coinbase from a previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Ordered brokerage accounts returned by Coinbase. */
        accounts: Array<Record<string, unknown>>;
        /** Whether more accounts are available after this page. */
        has_next: boolean;
        /** Cursor returned by Coinbase for the next page, when present. */
        cursor: string;
        /** Number of accounts returned in this page. */
        size: number;
      };
    };
  }
}
