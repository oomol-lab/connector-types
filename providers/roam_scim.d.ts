import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Roam SCIM group with optional initial members. */
    "roam_scim.create_group": {
      input: {
        /**
         * The Roam SCIM group displayName value.
         * @minLength 1
         * @maxLength 64
         */
        displayName: string;
        /** Roam Person IDs to include as SCIM group members. */
        memberIds?: Array<string>;
      };
      output: {
        /** A Roam SCIM group resource. */
        group: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Address ID returned as the SCIM group id. */
          id?: string;
          /** The group displayName returned by Roam SCIM. */
          displayName?: string;
          /** Members returned for the group. */
          members?: Array<{
            /** The Roam Person ID for this group member. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a Roam SCIM user from name, email, and optional role metadata. */
    "roam_scim.create_user": {
      input: {
        /**
         * The user's primary email address. Roam uses this as both userName and emails[0].value.
         * @format email
         */
        email: string;
        /**
         * The user's SCIM name.givenName value.
         * @minLength 1
         */
        givenName: string;
        /**
         * The user's SCIM name.familyName value.
         * @minLength 1
         */
        familyName: string;
        /**
         * The optional external identifier used to correlate this user with an identity provider.
         * @minLength 1
         */
        externalId?: string;
        /** Whether the Roam user should be active. Set false to archive access. */
        active?: boolean;
        /** The Roam Administration role assigned through the SCIM extension. */
        role?: "User" | "Admin";
      };
      output: {
        /** A Roam SCIM user resource. */
        user: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Person ID returned as the SCIM user id. */
          id?: string;
          /** The SCIM userName returned by Roam, usually the primary email. */
          userName?: string;
          /** The externalId returned by Roam SCIM when present. */
          externalId?: string;
          /** The SCIM name object returned for a Roam user. */
          name?: {
            /** The givenName returned for the user. */
            givenName?: string;
            /** The familyName returned for the user. */
            familyName?: string;
            [key: string]: unknown;
          };
          /** The display name returned by Roam SCIM. */
          displayName?: string;
          /** Email objects returned for the user. */
          emails?: Array<{
            /** The email value returned by Roam SCIM. */
            value?: string;
            /** The email type returned by Roam SCIM. */
            type?: string;
            /** Whether this email is the primary SCIM email. */
            primary?: boolean;
            [key: string]: unknown;
          }>;
          /** Whether the Roam user is active. */
          active?: boolean;
          /** The Roam SCIM user role extension object. */
          "urn:ro.am:params:scim:schemas:extension:roam:2.0:User"?: {
            /** The Roam Administration role assigned through the SCIM extension. */
            role?: "User" | "Admin";
            [key: string]: unknown;
          };
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Archive a Roam SCIM group by Roam Address ID. */
    "roam_scim.delete_group": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
        /** Whether the resource archive request completed. */
        archived: boolean;
      };
    };
    /** Archive a Roam SCIM user by Roam Person ID. */
    "roam_scim.delete_user": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
        /** Whether the resource archive request completed. */
        archived: boolean;
      };
    };
    /** Get one Roam SCIM group by Roam Address ID. */
    "roam_scim.get_group": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Roam SCIM group resource. */
        group: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Address ID returned as the SCIM group id. */
          id?: string;
          /** The group displayName returned by Roam SCIM. */
          displayName?: string;
          /** Members returned for the group. */
          members?: Array<{
            /** The Roam Person ID for this group member. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the Roam SCIM service provider configuration. */
    "roam_scim.get_service_provider_config": {
      input: Record<string, never>;
      output: {
        /** The raw SCIM object returned by Roam. */
        config: Record<string, unknown>;
      };
    };
    /** Get one Roam SCIM user by Roam Person ID. */
    "roam_scim.get_user": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Roam SCIM user resource. */
        user: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Person ID returned as the SCIM user id. */
          id?: string;
          /** The SCIM userName returned by Roam, usually the primary email. */
          userName?: string;
          /** The externalId returned by Roam SCIM when present. */
          externalId?: string;
          /** The SCIM name object returned for a Roam user. */
          name?: {
            /** The givenName returned for the user. */
            givenName?: string;
            /** The familyName returned for the user. */
            familyName?: string;
            [key: string]: unknown;
          };
          /** The display name returned by Roam SCIM. */
          displayName?: string;
          /** Email objects returned for the user. */
          emails?: Array<{
            /** The email value returned by Roam SCIM. */
            value?: string;
            /** The email type returned by Roam SCIM. */
            type?: string;
            /** Whether this email is the primary SCIM email. */
            primary?: boolean;
            [key: string]: unknown;
          }>;
          /** Whether the Roam user is active. */
          active?: boolean;
          /** The Roam SCIM user role extension object. */
          "urn:ro.am:params:scim:schemas:extension:roam:2.0:User"?: {
            /** The Roam Administration role assigned through the SCIM extension. */
            role?: "User" | "Admin";
            [key: string]: unknown;
          };
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Roam SCIM groups with optional pagination. */
    "roam_scim.list_groups": {
      input: {
        /**
         * A SCIM filter expression accepted by Roam SCIM.
         * @minLength 1
         */
        filter?: string;
        /**
         * The one-based SCIM startIndex pagination value.
         * @exclusiveMinimum 0
         */
        startIndex?: number;
        /**
         * The maximum number of SCIM resources to return.
         * @minimum 0
         */
        count?: number;
      };
      output: {
        /** Groups returned in this page. */
        groups: Array<{
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Address ID returned as the SCIM group id. */
          id?: string;
          /** The group displayName returned by Roam SCIM. */
          displayName?: string;
          /** Members returned for the group. */
          members?: Array<{
            /** The Roam Person ID for this group member. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** SCIM schema URNs returned by Roam. */
        schemas: Array<string>;
        /**
         * Total matching SCIM resources across all pages.
         * @minimum 0
         */
        totalResults: number;
        /**
         * The one-based SCIM startIndex returned for this page.
         * @minimum 0
         */
        startIndex: number;
        /**
         * The number of SCIM resources returned in this page.
         * @minimum 0
         */
        itemsPerPage: number;
        /** The raw SCIM object returned by Roam. */
        raw: Record<string, unknown>;
      };
    };
    /** List Roam SCIM users with optional SCIM filtering and pagination. */
    "roam_scim.list_users": {
      input: {
        /**
         * A SCIM filter expression accepted by Roam SCIM.
         * @minLength 1
         */
        filter?: string;
        /**
         * The one-based SCIM startIndex pagination value.
         * @exclusiveMinimum 0
         */
        startIndex?: number;
        /**
         * The maximum number of SCIM resources to return.
         * @minimum 0
         */
        count?: number;
      };
      output: {
        /** Users returned in this page. */
        users: Array<{
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Person ID returned as the SCIM user id. */
          id?: string;
          /** The SCIM userName returned by Roam, usually the primary email. */
          userName?: string;
          /** The externalId returned by Roam SCIM when present. */
          externalId?: string;
          /** The SCIM name object returned for a Roam user. */
          name?: {
            /** The givenName returned for the user. */
            givenName?: string;
            /** The familyName returned for the user. */
            familyName?: string;
            [key: string]: unknown;
          };
          /** The display name returned by Roam SCIM. */
          displayName?: string;
          /** Email objects returned for the user. */
          emails?: Array<{
            /** The email value returned by Roam SCIM. */
            value?: string;
            /** The email type returned by Roam SCIM. */
            type?: string;
            /** Whether this email is the primary SCIM email. */
            primary?: boolean;
            [key: string]: unknown;
          }>;
          /** Whether the Roam user is active. */
          active?: boolean;
          /** The Roam SCIM user role extension object. */
          "urn:ro.am:params:scim:schemas:extension:roam:2.0:User"?: {
            /** The Roam Administration role assigned through the SCIM extension. */
            role?: "User" | "Admin";
            [key: string]: unknown;
          };
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** SCIM schema URNs returned by Roam. */
        schemas: Array<string>;
        /**
         * Total matching SCIM resources across all pages.
         * @minimum 0
         */
        totalResults: number;
        /**
         * The one-based SCIM startIndex returned for this page.
         * @minimum 0
         */
        startIndex: number;
        /**
         * The number of SCIM resources returned in this page.
         * @minimum 0
         */
        itemsPerPage: number;
        /** The raw SCIM object returned by Roam. */
        raw: Record<string, unknown>;
      };
    };
    /** Fully replace a Roam SCIM group display name and member list. */
    "roam_scim.replace_group": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Roam SCIM group displayName value.
         * @minLength 1
         * @maxLength 64
         */
        displayName: string;
        /** Roam Person IDs to include as SCIM group members. */
        memberIds?: Array<string>;
      };
      output: {
        /** A Roam SCIM group resource. */
        group: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Address ID returned as the SCIM group id. */
          id?: string;
          /** The group displayName returned by Roam SCIM. */
          displayName?: string;
          /** Members returned for the group. */
          members?: Array<{
            /** The Roam Person ID for this group member. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Fully replace supported attributes for a Roam SCIM user. */
    "roam_scim.replace_user": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The user's primary email address. Roam uses this as both userName and emails[0].value.
         * @format email
         */
        email: string;
        /**
         * The user's SCIM name.givenName value.
         * @minLength 1
         */
        givenName: string;
        /**
         * The user's SCIM name.familyName value.
         * @minLength 1
         */
        familyName: string;
        /**
         * The optional external identifier used to correlate this user with an identity provider.
         * @minLength 1
         */
        externalId?: string;
        /** Whether the Roam user should be active. Set false to archive access. */
        active?: boolean;
        /** The Roam Administration role assigned through the SCIM extension. */
        role?: "User" | "Admin";
      };
      output: {
        /** A Roam SCIM user resource. */
        user: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Person ID returned as the SCIM user id. */
          id?: string;
          /** The SCIM userName returned by Roam, usually the primary email. */
          userName?: string;
          /** The externalId returned by Roam SCIM when present. */
          externalId?: string;
          /** The SCIM name object returned for a Roam user. */
          name?: {
            /** The givenName returned for the user. */
            givenName?: string;
            /** The familyName returned for the user. */
            familyName?: string;
            [key: string]: unknown;
          };
          /** The display name returned by Roam SCIM. */
          displayName?: string;
          /** Email objects returned for the user. */
          emails?: Array<{
            /** The email value returned by Roam SCIM. */
            value?: string;
            /** The email type returned by Roam SCIM. */
            type?: string;
            /** Whether this email is the primary SCIM email. */
            primary?: boolean;
            [key: string]: unknown;
          }>;
          /** Whether the Roam user is active. */
          active?: boolean;
          /** The Roam SCIM user role extension object. */
          "urn:ro.am:params:scim:schemas:extension:roam:2.0:User"?: {
            /** The Roam Administration role assigned through the SCIM extension. */
            role?: "User" | "Admin";
            [key: string]: unknown;
          };
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Archive or reactivate a Roam SCIM user by replacing the active flag. */
    "roam_scim.set_user_active": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
        /** Whether the Roam user should be active. Set false to archive access. */
        active: boolean;
      };
      output: {
        /** A Roam SCIM user resource. */
        user: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Person ID returned as the SCIM user id. */
          id?: string;
          /** The SCIM userName returned by Roam, usually the primary email. */
          userName?: string;
          /** The externalId returned by Roam SCIM when present. */
          externalId?: string;
          /** The SCIM name object returned for a Roam user. */
          name?: {
            /** The givenName returned for the user. */
            givenName?: string;
            /** The familyName returned for the user. */
            familyName?: string;
            [key: string]: unknown;
          };
          /** The display name returned by Roam SCIM. */
          displayName?: string;
          /** Email objects returned for the user. */
          emails?: Array<{
            /** The email value returned by Roam SCIM. */
            value?: string;
            /** The email type returned by Roam SCIM. */
            type?: string;
            /** Whether this email is the primary SCIM email. */
            primary?: boolean;
            [key: string]: unknown;
          }>;
          /** Whether the Roam user is active. */
          active?: boolean;
          /** The Roam SCIM user role extension object. */
          "urn:ro.am:params:scim:schemas:extension:roam:2.0:User"?: {
            /** The Roam Administration role assigned through the SCIM extension. */
            role?: "User" | "Admin";
            [key: string]: unknown;
          };
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Patch Roam SCIM group members with add, remove, or replace semantics. */
    "roam_scim.update_group_members": {
      input: {
        /**
         * The Roam SCIM resource ID.
         * @minLength 1
         */
        id: string;
        /** The SCIM PATCH operation to apply to the members attribute. */
        operation: "add" | "remove" | "replace";
        /**
         * Roam Person IDs to add, remove, or replace in a SCIM group.
         * @minItems 1
         */
        memberIds: Array<string>;
      };
      output: {
        /** A Roam SCIM group resource. */
        group: {
          /** SCIM schema URNs returned by Roam. */
          schemas?: Array<string>;
          /** The Roam Address ID returned as the SCIM group id. */
          id?: string;
          /** The group displayName returned by Roam SCIM. */
          displayName?: string;
          /** Members returned for the group. */
          members?: Array<{
            /** The Roam Person ID for this group member. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** SCIM metadata returned for the resource. */
          meta?: {
            /** The SCIM resource location URL. */
            location?: string;
            /** The SCIM resource type. */
            resourceType?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
