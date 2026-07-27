import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List managed accounts visible to the configured JumpServer token. */
    "jumpserver.accounts_accounts_list": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Search text applied to fields supported by this JumpServer resource. */
        search?: string;
      };
      output: {
        /**
         * Total number of matching records.
         * @minimum 0
         */
        count: number;
        /** URL for the next page when one exists, or null. */
        next?: string | null;
        /** URL for the previous page when one exists, or null. */
        previous?: string | null;
        /** Matching JumpServer managed accounts. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List assets visible to the configured JumpServer token, with optional pagination and search. */
    "jumpserver.assets_assets_list": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Search text applied to fields supported by this JumpServer resource. */
        search?: string;
      };
      output: {
        /**
         * Total number of matching records.
         * @minimum 0
         */
        count: number;
        /** URL for the next page when one exists, or null. */
        next?: string | null;
        /** URL for the previous page when one exists, or null. */
        previous?: string | null;
        /** Matching JumpServer assets. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List asset nodes visible to the configured JumpServer token. */
    "jumpserver.assets_nodes_list": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Search text applied to fields supported by this JumpServer resource. */
        search?: string;
      };
      output: {
        /**
         * Total number of matching records.
         * @minimum 0
         */
        count: number;
        /** URL for the next page when one exists, or null. */
        next?: string | null;
        /** URL for the previous page when one exists, or null. */
        previous?: string | null;
        /** Matching JumpServer asset nodes. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List asset permission rules visible to the configured JumpServer token. */
    "jumpserver.perms_asset_permissions_list": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Search text applied to fields supported by this JumpServer resource. */
        search?: string;
      };
      output: {
        /**
         * Total number of matching records.
         * @minimum 0
         */
        count: number;
        /** URL for the next page when one exists, or null. */
        next?: string | null;
        /** URL for the previous page when one exists, or null. */
        previous?: string | null;
        /** Matching JumpServer asset permission rules. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List historical and active terminal sessions visible to the configured JumpServer token. */
    "jumpserver.terminal_sessions_list": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Search text applied to fields supported by this JumpServer resource. */
        search?: string;
      };
      output: {
        /**
         * Total number of matching records.
         * @minimum 0
         */
        count: number;
        /** URL for the next page when one exists, or null. */
        next?: string | null;
        /** URL for the previous page when one exists, or null. */
        previous?: string | null;
        /** Matching JumpServer terminal sessions. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List JumpServer users visible to the configured token. */
    "jumpserver.users_users_list": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Search text applied to fields supported by this JumpServer resource. */
        search?: string;
      };
      output: {
        /**
         * Total number of matching records.
         * @minimum 0
         */
        count: number;
        /** URL for the next page when one exists, or null. */
        next?: string | null;
        /** URL for the previous page when one exists, or null. */
        previous?: string | null;
        /** Matching JumpServer users. */
        results: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
