import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Lucid SCIM org group or team by ID. */
    "lucid_scim.get_group": {
      input: {
        /**
         * Lucid SCIM group or team ID, such as lucid-group-1234.
         * @minLength 1
         */
        id: string;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        attributes?: Array<string>;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        excludedAttributes?: Array<string>;
      };
      output: {
        /** Lucid SCIM group or team resource. */
        group: {
          /** Lucid group or team ID returned by SCIM. */
          id?: string;
          /** Display name of the Lucid org group or team. */
          displayName?: string;
          /** Members returned for the group or team. */
          members?: Array<Record<string, unknown>>;
          /** SCIM metadata returned for the group or team. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the Lucid SCIM service provider configuration for the connected account. */
    "lucid_scim.get_service_provider_config": {
      input: Record<string, never>;
      output: {
        /** ServiceProviderConfig object returned by Lucid SCIM. */
        config: Record<string, unknown>;
      };
    };
    /** Get one Lucid SCIM user by ID. */
    "lucid_scim.get_user": {
      input: {
        /**
         * Lucid SCIM resource ID, such as lucid-1234.
         * @minLength 1
         */
        id: string;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        attributes?: Array<string>;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        excludedAttributes?: Array<string>;
      };
      output: {
        /** Lucid SCIM user resource. */
        user: {
          /** Lucid user ID returned by SCIM. */
          id?: string;
          /** SCIM username, usually the user's email address. */
          userName?: string;
          /** Display name returned for the user. */
          displayName?: string;
          /** Whether the user can authenticate to Lucid. */
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
    /** List Lucid SCIM org groups or teams with optional SCIM filter, pagination, and attributes. */
    "lucid_scim.list_groups": {
      input: {
        /**
         * One-based index of the first SCIM result to return.
         * @exclusiveMinimum 0
         */
        startIndex?: number;
        /**
         * Maximum number of SCIM resources to return.
         * @minimum 0
         */
        count?: number;
        /**
         * SCIM group filter. Lucid currently supports single displayName equality filters such as displayName eq "Engineering".
         * @minLength 1
         */
        filter?: string;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        attributes?: Array<string>;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        excludedAttributes?: Array<string>;
      };
      output: {
        /** Groups or teams returned in this page. */
        groups: Array<{
          /** Lucid group or team ID returned by SCIM. */
          id?: string;
          /** Display name of the Lucid org group or team. */
          displayName?: string;
          /** Members returned for the group or team. */
          members?: Array<Record<string, unknown>>;
          /** SCIM metadata returned for the group or team. */
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
        /** Raw Lucid SCIM list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lucid SCIM users with optional SCIM filter, pagination, and attributes. */
    "lucid_scim.list_users": {
      input: {
        /**
         * One-based index of the first SCIM result to return.
         * @exclusiveMinimum 0
         */
        startIndex?: number;
        /**
         * Maximum number of SCIM resources to return.
         * @minimum 0
         */
        count?: number;
        /**
         * SCIM user filter. Lucid recommends optimized attributes such as email, userName, displayName, or externalId.
         * @minLength 1
         */
        filter?: string;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        attributes?: Array<string>;
        /**
         * SCIM attributes to include or exclude, sent as a comma-separated list.
         * @minItems 1
         */
        excludedAttributes?: Array<string>;
      };
      output: {
        /** Users returned in this page. */
        users: Array<{
          /** Lucid user ID returned by SCIM. */
          id?: string;
          /** SCIM username, usually the user's email address. */
          userName?: string;
          /** Display name returned for the user. */
          displayName?: string;
          /** Whether the user can authenticate to Lucid. */
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
        /** Raw Lucid SCIM list response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
