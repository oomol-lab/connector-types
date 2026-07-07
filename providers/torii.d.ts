import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Torii app by app identifier. */
    "torii.get_app": {
      input: {
        /**
         * The Torii app identifier.
         * @maximum 2147483647
         * @exclusiveMinimum 0
         */
        appId: number;
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
        /** Whether to include the aggregated license summary for the app. */
        includeLicenses?: boolean;
      };
      output: {
        /** A Torii app object. */
        app: {
          /** The Torii app identifier. */
          id?: number;
          /** The app name. */
          name?: string;
          /** The app lifecycle state. */
          state?: string;
          /** The app URL. */
          url?: string;
          /** The app category. */
          category?: string;
          [key: string]: unknown;
        };
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Torii contract by contract identifier. */
    "torii.get_contract": {
      input: {
        /**
         * The Torii contract identifier.
         * @maximum 2147483647
         * @exclusiveMinimum 0
         */
        contractId: number;
        /** The Torii contracts API version header to send. */
        apiVersion?: "1.0" | "1.1";
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** A Torii contract object. */
        contract: {
          /** The Torii contract identifier. */
          id?: number;
          /** The Torii app identifier linked to the contract. */
          idApp?: number;
          /** The contract name. */
          name?: string;
          /** The contract status. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Torii organization profile for the current API key. */
    "torii.get_organization": {
      input: Record<string, never>;
      output: {
        /** A Torii organization object. */
        organization: {
          /** The Torii organization identifier. */
          id?: number;
          /** The organization company name. */
          companyName?: string;
          /** The organization domain. */
          domain?: string;
          /** The organization creation timestamp. */
          creationTime?: string;
          [key: string]: unknown;
        };
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Torii user by user identifier. */
    "torii.get_user": {
      input: {
        /**
         * The Torii user identifier.
         * @maximum 2147483647
         * @exclusiveMinimum 0
         */
        userId: number;
      };
      output: {
        /** A Torii user object. */
        user: {
          /** The Torii user identifier. */
          id?: number;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's primary email address. */
          email?: string;
          /** The user's lifecycle status. */
          lifecycleStatus?: string;
          [key: string]: unknown;
        };
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Torii apps with optional search, filters, and cursor pagination. */
    "torii.list_apps": {
      input: {
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * A free-text search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A comma-separated list of fields to sort by, suffixed with :asc or :desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        size?: number;
        /**
         * The Torii nextCursor value returned from the previous page.
         * @minLength 1
         */
        cursor?: string;
        /** Torii aggregation configuration. */
        aggs?: string | Record<string, unknown> | Array<Record<string, unknown>>;
        /** Torii filters expression. */
        filters?: string | Record<string, unknown> | Array<Record<string, unknown>>;
        /** Whether to include aggregated license summaries for each app. */
        includeLicenses?: boolean;
      };
      output: {
        /** The apps returned by Torii. */
        apps: Array<{
          /** The Torii app identifier. */
          id?: number;
          /** The app name. */
          name?: string;
          /** The app lifecycle state. */
          state?: string;
          /** The app URL. */
          url?: string;
          /** The app category. */
          category?: string;
          [key: string]: unknown;
        }>;
        /** The number of results returned in this response. */
        count: number | null;
        /** The total number of matching results. */
        total: number | null;
        /** The cursor for the next result page, or null when there are no more results. */
        nextCursor: string | null;
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Torii contracts with optional API version, filters, and pagination. */
    "torii.list_contracts": {
      input: {
        /** The Torii contracts API version header to send. */
        apiVersion?: "1.0" | "1.1";
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * A free-text search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A comma-separated list of fields to sort by, suffixed with :asc or :desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        size?: number;
        /**
         * The Torii nextCursor value returned from the previous page.
         * @minLength 1
         */
        cursor?: string;
        /** Torii aggregation configuration. */
        aggs?: string | Record<string, unknown> | Array<Record<string, unknown>>;
        /** Torii filters expression. */
        filters?: string | Record<string, unknown> | Array<Record<string, unknown>>;
        /** Exact-match Torii contract filters keyed by contract field or custom field system key. */
        filterFields?: Record<string, unknown>;
      };
      output: {
        /** The contracts returned by Torii. */
        contracts: Array<{
          /** The Torii contract identifier. */
          id?: number;
          /** The Torii app identifier linked to the contract. */
          idApp?: number;
          /** The contract name. */
          name?: string;
          /** The contract status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The number of results returned in this response. */
        count: number | null;
        /** The total number of matching results. */
        total: number | null;
        /** The cursor for the next result page, or null when there are no more results. */
        nextCursor: string | null;
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List recognized Torii expense transactions with optional filters and pagination. */
    "torii.list_transactions": {
      input: {
        /**
         * The Torii app identifier to filter transactions by.
         * @maximum 2147483647
         * @exclusiveMinimum 0
         */
        idApp?: number;
        /**
         * The transaction source to filter by.
         * @minLength 1
         */
        source?: string;
        /**
         * A free-text search query for transaction descriptions.
         * @minLength 1
         * @maxLength 800
         */
        q?: string;
        /**
         * A comma-separated list of Torii transaction mapping statuses.
         * @minLength 1
         */
        mappingStatus?: string;
        /**
         * A comma-separated list of fields to sort by, suffixed with :asc or :desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        size?: number;
        /**
         * The Torii nextCursor value returned from the previous page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The transactions returned by Torii. */
        transactions: Array<{
          /** The Torii transaction identifier. */
          id?: number;
          /** The Torii app identifier linked to the transaction. */
          idApp?: number;
          /** The transaction date. */
          transactionDate?: string;
          /** The transaction amount object. */
          amount?: Record<string, unknown>;
          /** The transaction source. */
          source?: string;
          /** The transaction description. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The number of results returned in this response. */
        count: number | null;
        /** The total number of matching results. */
        total: number | null;
        /** The cursor for the next result page, or null when there are no more results. */
        nextCursor: string | null;
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Torii users with optional filters, search, and cursor pagination. */
    "torii.list_users": {
      input: {
        /**
         * The user email address to filter by.
         * @format email
         */
        email?: string;
        /** The user lifecycle status to filter by. */
        lifecycleStatus?: "active" | "offboarding" | "offboarded";
        /** Whether to filter users deleted in identity sources. */
        isDeletedInIdentitySources?: boolean;
        /** Whether to filter external users. */
        isExternal?: boolean;
        /**
         * The first name to filter by.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The last name to filter by.
         * @minLength 1
         */
        lastName?: string;
        /**
         * A comma-separated list of up to 50 Torii user identifiers.
         * @minLength 1
         */
        idUsers?: string;
        /** The Torii users view to query. */
        view?: "currentEmployees" | "pastEmployees" | "allEmployees" | "currentUsers" | "pastUsers" | "allUsers" | "currentNonHumanUsers" | "pastNonHumanUsers" | "allNonHumanUsers" | "externalUsers";
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * A free-text search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A comma-separated list of fields to sort by, suffixed with :asc or :desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        size?: number;
        /**
         * The Torii nextCursor value returned from the previous page.
         * @minLength 1
         */
        cursor?: string;
        /** Torii aggregation configuration. */
        aggs?: string | Record<string, unknown> | Array<Record<string, unknown>>;
        /** Torii filters expression. */
        filters?: string | Record<string, unknown> | Array<Record<string, unknown>>;
      };
      output: {
        /** The users returned by Torii. */
        users: Array<{
          /** The Torii user identifier. */
          id?: number;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's primary email address. */
          email?: string;
          /** The user's lifecycle status. */
          lifecycleStatus?: string;
          [key: string]: unknown;
        }>;
        /** The number of results returned in this response. */
        count: number | null;
        /** The total number of matching results. */
        total: number | null;
        /** The cursor for the next result page, or null when there are no more results. */
        nextCursor: string | null;
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Torii regular workflows for the organization. */
    "torii.list_workflows": {
      input: {
        /** The workflow type to query. Torii currently supports regular. */
        type?: "regular";
      };
      output: {
        /** The workflows returned by Torii. */
        workflows: Array<{
          /** The Torii workflow identifier. */
          id?: number;
          /** The workflow schema version. */
          version?: string;
          /** The workflow name. */
          name?: string;
          /** The workflow type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The raw Torii response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
