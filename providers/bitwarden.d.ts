import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Bitwarden organization collection. */
    "bitwarden.get_collection": {
      input: {
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Bitwarden organization collection. */
        collection: {
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /** The collection name. */
          name?: string;
          /** The external identifier linked to the collection. */
          externalId?: string | null;
          /** The groups associated with the collection. */
          groups?: Array<{
            /**
             * The Bitwarden resource identifier.
             * @format uuid
             */
            id?: string;
            /** Whether the association grants read-only access. */
            readOnly?: boolean;
            /** Whether passwords are hidden from members through this association. */
            hidePasswords?: boolean;
            /** Whether the association grants management access. */
            manage?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Bitwarden organization group. */
    "bitwarden.get_group": {
      input: {
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Bitwarden organization group. */
        group: {
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /** The group name. */
          name?: string;
          /** The external identifier linked to the group. */
          externalId?: string | null;
          /** The collections associated with the group. */
          collections?: Array<{
            /**
             * The Bitwarden resource identifier.
             * @format uuid
             */
            id?: string;
            /** Whether the association grants read-only access. */
            readOnly?: boolean;
            /** Whether passwords are hidden from members through this association. */
            hidePasswords?: boolean;
            /** Whether the association grants management access. */
            manage?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the member IDs associated with one Bitwarden organization group. */
    "bitwarden.get_group_member_ids": {
      input: {
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The associated member IDs. */
        memberIds: Array<string>;
      };
    };
    /** Get one Bitwarden organization member. */
    "bitwarden.get_member": {
      input: {
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Bitwarden organization member. */
        member: {
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /**
           * The member's identifier across Bitwarden.
           * @format uuid
           */
          userId?: string | null;
          /** The member's profile name. */
          name?: string | null;
          /**
           * The member's email address.
           * @format email
           */
          email?: string;
          /** The numeric Bitwarden organization role type. */
          type?: number;
          /** The numeric Bitwarden organization membership status. */
          status?: number;
          /** The external identifier linked to the member. */
          externalId?: string | null;
          /** Whether the member has two-step login enabled. */
          twoFactorEnabled?: boolean;
          /** Whether the member enrolled in organization password-reset assistance. */
          resetPasswordEnrolled?: boolean;
          /** The member identifier from the connected identity provider. */
          ssoExternalId?: string | null;
          /** The collections associated with the member. */
          collections?: Array<{
            /**
             * The Bitwarden resource identifier.
             * @format uuid
             */
            id?: string;
            /** Whether the association grants read-only access. */
            readOnly?: boolean;
            /** Whether passwords are hidden from members through this association. */
            hidePasswords?: boolean;
            /** Whether the association grants management access. */
            manage?: boolean;
            [key: string]: unknown;
          }>;
          /** The member's custom organization permissions. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List the group IDs associated with one Bitwarden organization member. */
    "bitwarden.get_member_group_ids": {
      input: {
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The associated group IDs. */
        groupIds: Array<string>;
      };
    };
    /** Get one Bitwarden organization policy by its numeric policy type. */
    "bitwarden.get_policy": {
      input: {
        /**
         * The numeric Bitwarden policy type.
         * @minimum 0
         * @maximum 22
         */
        type: number;
      };
      output: {
        /** A Bitwarden organization policy. */
        policy: {
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /** The numeric Bitwarden policy type. */
          type?: number;
          /** Whether the policy is enabled and enforced. */
          enabled?: boolean;
          /** The policy-specific configuration data. */
          data?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the organization's Bitwarden subscription capacity details. */
    "bitwarden.get_subscription": {
      input: Record<string, never>;
      output: {
        /** The Password Manager subscription. */
        passwordManager?: {
          /** The configured seat count. */
          seats?: number | null;
          /** The maximum seat count allowed through automatic scaling. */
          maxAutoScaleSeats?: number | null;
          /** The configured storage quantity. */
          storage?: number | null;
          /** The configured service-account count. */
          serviceAccounts?: number | null;
          /** The maximum service-account count allowed through automatic scaling. */
          maxAutoScaleServiceAccounts?: number | null;
          [key: string]: unknown;
        } | null;
        /** The Secrets Manager subscription. */
        secretsManager?: {
          /** The configured seat count. */
          seats?: number | null;
          /** The maximum seat count allowed through automatic scaling. */
          maxAutoScaleSeats?: number | null;
          /** The configured storage quantity. */
          storage?: number | null;
          /** The configured service-account count. */
          serviceAccounts?: number | null;
          /** The maximum service-account count allowed through automatic scaling. */
          maxAutoScaleServiceAccounts?: number | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List collections in the Bitwarden organization. */
    "bitwarden.list_collections": {
      input: {
        /**
         * The opaque cursor returned by a previous call to this list action.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The collections returned by Bitwarden. */
        collections: Array<{
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /** The collection name. */
          name?: string;
          /** The external identifier linked to the collection. */
          externalId?: string | null;
          /** The groups associated with the collection. */
          groups?: Array<{
            /**
             * The Bitwarden resource identifier.
             * @format uuid
             */
            id?: string;
            /** Whether the association grants read-only access. */
            readOnly?: boolean;
            /** Whether passwords are hidden from members through this association. */
            hidePasswords?: boolean;
            /** Whether the association grants management access. */
            manage?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no next page is available. */
        continuationToken: string | null;
      };
    };
    /** List Bitwarden organization audit events with optional filters and pagination. */
    "bitwarden.list_events": {
      input: {
        /**
         * The inclusive start time for the event range.
         * @format date-time
         */
        start?: string;
        /**
         * The inclusive end time for the event range.
         * @format date-time
         */
        end?: string;
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        actingUserId?: string | null;
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        itemId?: string | null;
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        secretId?: string | null;
        /**
         * The Bitwarden resource identifier.
         * @format uuid
         */
        projectId?: string | null;
        /**
         * The opaque cursor returned by a previous list_events call.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The audit events returned for this page. */
        events: Array<{
          /** The Bitwarden object type. */
          object?: string;
          /** The numeric Bitwarden event type. */
          type?: number;
          /**
           * The event time in RFC 3339 format.
           * @format date-time
           */
          date?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          actingUserId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          itemId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          collectionId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          groupId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          policyId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          memberId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          secretId?: string | null;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          projectId?: string | null;
          /** The IP address associated with the event. */
          ipAddress?: string | null;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no next page is available. */
        continuationToken: string | null;
      };
    };
    /** List groups in the Bitwarden organization. */
    "bitwarden.list_groups": {
      input: {
        /**
         * The opaque cursor returned by a previous call to this list action.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The groups returned by Bitwarden. */
        groups: Array<{
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /** The group name. */
          name?: string;
          /** The external identifier linked to the group. */
          externalId?: string | null;
          /** The collections associated with the group. */
          collections?: Array<{
            /**
             * The Bitwarden resource identifier.
             * @format uuid
             */
            id?: string;
            /** Whether the association grants read-only access. */
            readOnly?: boolean;
            /** Whether passwords are hidden from members through this association. */
            hidePasswords?: boolean;
            /** Whether the association grants management access. */
            manage?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no next page is available. */
        continuationToken: string | null;
      };
    };
    /** List members in the Bitwarden organization. */
    "bitwarden.list_members": {
      input: {
        /**
         * The opaque cursor returned by a previous call to this list action.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The members returned by Bitwarden. */
        members: Array<{
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /**
           * The member's identifier across Bitwarden.
           * @format uuid
           */
          userId?: string | null;
          /** The member's profile name. */
          name?: string | null;
          /**
           * The member's email address.
           * @format email
           */
          email?: string;
          /** The numeric Bitwarden organization role type. */
          type?: number;
          /** The numeric Bitwarden organization membership status. */
          status?: number;
          /** The external identifier linked to the member. */
          externalId?: string | null;
          /** Whether the member has two-step login enabled. */
          twoFactorEnabled?: boolean;
          /** Whether the member enrolled in organization password-reset assistance. */
          resetPasswordEnrolled?: boolean;
          /** The member identifier from the connected identity provider. */
          ssoExternalId?: string | null;
          /** The collections associated with the member. */
          collections?: Array<{
            /**
             * The Bitwarden resource identifier.
             * @format uuid
             */
            id?: string;
            /** Whether the association grants read-only access. */
            readOnly?: boolean;
            /** Whether passwords are hidden from members through this association. */
            hidePasswords?: boolean;
            /** Whether the association grants management access. */
            manage?: boolean;
            [key: string]: unknown;
          }>;
          /** The member's custom organization permissions. */
          permissions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no next page is available. */
        continuationToken: string | null;
      };
    };
    /** List policies in the Bitwarden organization. */
    "bitwarden.list_policies": {
      input: {
        /**
         * The opaque cursor returned by a previous call to this list action.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The policies returned by Bitwarden. */
        policies: Array<{
          /** The Bitwarden object type. */
          object?: string;
          /**
           * The Bitwarden resource identifier.
           * @format uuid
           */
          id?: string;
          /** The numeric Bitwarden policy type. */
          type?: number;
          /** Whether the policy is enabled and enforced. */
          enabled?: boolean;
          /** The policy-specific configuration data. */
          data?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no next page is available. */
        continuationToken: string | null;
      };
    };
  }
}
