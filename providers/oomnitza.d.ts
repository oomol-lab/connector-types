import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Oomnitza asset by ID. */
    "oomnitza.get_asset": {
      input: {
        /**
         * Oomnitza asset identifier.
         * @minLength 1
         */
        id: string;
        /** Whether deleted records should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** Oomnitza record with tenant-defined fields. */
        asset: Record<string, unknown>;
        /** Raw Oomnitza response payload. */
        raw: unknown;
      };
    };
    /** Retrieve one Oomnitza user by username. */
    "oomnitza.get_user": {
      input: {
        /**
         * Oomnitza username to retrieve.
         * @minLength 1
         */
        username: string;
        /** Whether deleted records should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** Oomnitza record with tenant-defined fields. */
        user: Record<string, unknown>;
        /** Raw Oomnitza response payload. */
        raw: unknown;
      };
    };
    /** Validate the Oomnitza connection and return the configured instance metadata. */
    "oomnitza.identify": {
      input: Record<string, never>;
      output: {
        /** Normalized Oomnitza instance base URL. */
        baseUrl: string;
        /** Oomnitza instance host. */
        host: string;
        /** Endpoint used to validate the API token. */
        validationEndpoint: string;
      };
    };
    /** List Oomnitza assets using the v3 assets endpoint. */
    "oomnitza.list_assets": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * Oomnitza API filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Oomnitza sort expression.
         * @minLength 1
         */
        sortBy?: string;
        /** Oomnitza field names to include in the response. */
        fields?: Array<string>;
        /** Whether deleted records should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** Oomnitza asset records. */
        assets: Array<Record<string, unknown>>;
        /** Raw Oomnitza response payload. */
        raw: unknown;
      };
    };
    /** List Oomnitza users using the v3 users endpoint. */
    "oomnitza.list_users": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * Oomnitza API filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Oomnitza sort expression.
         * @minLength 1
         */
        sortBy?: string;
        /** Oomnitza field names to include in the response. */
        fields?: Array<string>;
        /** Whether deleted records should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** Oomnitza user records. */
        users: Array<Record<string, unknown>>;
        /** Raw Oomnitza response payload. */
        raw: unknown;
      };
    };
  }
}
