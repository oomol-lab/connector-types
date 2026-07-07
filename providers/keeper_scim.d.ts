import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Keeper SCIM group by ID. */
    "keeper_scim.get_group": {
      input: {
        /**
         * Keeper SCIM resource ID returned by the Users or Groups endpoint.
         * @minLength 1
         */
        id: string;
        /**
         * SCIM attributes to exclude, sent as a comma-separated list. Keeper documents this for the members attribute on group queries.
         * @minItems 1
         */
        excludedAttributes?: Array<string>;
      };
      output: {
        /** Keeper SCIM group resource. Keeper represents groups as teams. */
        group: {
          /** Keeper team ID returned by SCIM. */
          id?: string;
          /** Display name of the Keeper team. */
          displayName?: string;
          /** Provisioning client identifier for the group. */
          externalId?: string;
          /** Members returned for the group. */
          members?: Array<Record<string, unknown>>;
          /** SCIM metadata returned for the group. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the Keeper SCIM service provider configuration for the connected node. */
    "keeper_scim.get_service_provider_config": {
      input: Record<string, never>;
      output: {
        /** ServiceProviderConfig object returned by Keeper SCIM. */
        config: Record<string, unknown>;
      };
    };
    /** Get one Keeper SCIM user by ID. */
    "keeper_scim.get_user": {
      input: {
        /**
         * Keeper SCIM resource ID returned by the Users or Groups endpoint.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Keeper SCIM user resource. */
        user: {
          /** Keeper SCIM user ID. */
          id?: string;
          /** SCIM username, usually the user's email address. */
          userName?: string;
          /** Display name returned for the user. */
          displayName?: string;
          /** Whether the user is active in Keeper. */
          active?: boolean;
          /** Provisioning client identifier for the user. */
          externalId?: string;
          /** Email entries returned for the user. */
          emails?: Array<Record<string, unknown>>;
          /** Group memberships returned for the user. */
          groups?: Array<Record<string, unknown>>;
          /** SCIM metadata returned for the user. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Keeper SCIM groups with optional pagination and excluded member attributes. */
    "keeper_scim.list_groups": {
      input: {
        /**
         * One-based index of the first SCIM result to return.
         * @exclusiveMinimum 0
         */
        startIndex?: number;
        /**
         * Maximum number of SCIM resources to return.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * SCIM attributes to exclude, sent as a comma-separated list. Keeper documents this for the members attribute on group queries.
         * @minItems 1
         */
        excludedAttributes?: Array<string>;
      };
      output: {
        /** Groups returned in this page. */
        groups: Array<{
          /** Keeper team ID returned by SCIM. */
          id?: string;
          /** Display name of the Keeper team. */
          displayName?: string;
          /** Provisioning client identifier for the group. */
          externalId?: string;
          /** Members returned for the group. */
          members?: Array<Record<string, unknown>>;
          /** SCIM metadata returned for the group. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * Total matching SCIM resources across all pages.
         * @minimum 0
         */
        totalResults: number;
        /**
         * One-based index of the first SCIM result to return.
         * @exclusiveMinimum 0
         */
        startIndex: number;
        /**
         * Number of resources returned in this page.
         * @minimum 0
         */
        itemsPerPage: number;
        /** SCIM schema URIs returned for the list response. */
        schemas: Array<string>;
        /** Raw Keeper SCIM list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Keeper SCIM users with optional SCIM filter and pagination. */
    "keeper_scim.list_users": {
      input: {
        /**
         * One-based index of the first SCIM result to return.
         * @exclusiveMinimum 0
         */
        startIndex?: number;
        /**
         * Maximum number of SCIM resources to return.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * SCIM user filter, such as id eq "user_id".
         * @minLength 1
         */
        filter?: string;
      };
      output: {
        /** Users returned in this page. */
        users: Array<{
          /** Keeper SCIM user ID. */
          id?: string;
          /** SCIM username, usually the user's email address. */
          userName?: string;
          /** Display name returned for the user. */
          displayName?: string;
          /** Whether the user is active in Keeper. */
          active?: boolean;
          /** Provisioning client identifier for the user. */
          externalId?: string;
          /** Email entries returned for the user. */
          emails?: Array<Record<string, unknown>>;
          /** Group memberships returned for the user. */
          groups?: Array<Record<string, unknown>>;
          /** SCIM metadata returned for the user. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * Total matching SCIM resources across all pages.
         * @minimum 0
         */
        totalResults: number;
        /**
         * One-based index of the first SCIM result to return.
         * @exclusiveMinimum 0
         */
        startIndex: number;
        /**
         * Number of resources returned in this page.
         * @minimum 0
         */
        itemsPerPage: number;
        /** SCIM schema URIs returned for the list response. */
        schemas: Array<string>;
        /** Raw Keeper SCIM list response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
