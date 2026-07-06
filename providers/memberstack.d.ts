import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a free Memberstack plan to an existing member. */
    "memberstack.add_free_plan": {
      input: {
        /**
         * The Memberstack member ID.
         * @minLength 1
         */
        id: string;
        /**
         * The free plan ID. Free plan IDs start with pln_.
         * @minLength 1
         */
        planId: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success: true;
      };
    };
    /** Create a Memberstack member with email, optional password, free plans, custom fields, metadata, JSON data, and login redirect. */
    "memberstack.create_member": {
      input: {
        /**
         * The member's unique email address.
         * @format email
         */
        email: string;
        /**
         * The member password. Required unless the app uses passwordless authentication.
         * @minLength 1
         */
        password?: string;
        /** Free plans to assign during creation. */
        plans?: Array<{
          /**
           * The free plan ID to assign or remove. Free plan IDs start with pln_.
           * @minLength 1
           */
          planId: string;
        }>;
        /** Custom fields to store on the member. */
        customFields?: Record<string, unknown>;
        /** Metadata to store on the member. */
        metaData?: Record<string, unknown>;
        /** JSON data to store on the member. */
        json?: Record<string, unknown>;
        /**
         * The URL or path where the member is redirected after login.
         * @minLength 1
         */
        loginRedirect?: string;
      };
      output: {
        /** A Memberstack member object. */
        data: {
          /** The Memberstack member ID. */
          id?: string;
          /** The member authentication details returned by Memberstack. */
          auth?: {
            /** The member's email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The ISO timestamp when the member was created. */
          createdAt?: string;
          /** The ISO timestamp when the member last logged in. */
          lastLogin?: string | null;
          /** Whether the member's email is verified. */
          verified?: boolean;
          /** Custom fields stored on the member. */
          customFields?: Record<string, unknown>;
          /** Metadata stored on the member. */
          metaData?: Record<string, unknown>;
          /** JSON data stored on the member. */
          json?: Record<string, unknown>;
          /** Permissions assigned to the member. */
          permissions?: Array<string>;
          /** The URL or path where the member is redirected after login. */
          loginRedirect?: string;
          /** The Stripe customer ID when present. */
          stripeCustomerId?: string | null;
          /** The member profile image URL when present. */
          profileImage?: string | null;
          /** Plan connections for the member. */
          planConnections?: Array<{
            /** The plan connection ID. */
            id?: string;
            /** Whether the plan connection is active. */
            active?: boolean;
            /** The plan connection status. */
            status?: string;
            /** The connected plan ID. */
            planId?: string;
            /** The connected plan name. */
            planName?: string;
            /** The connected plan type. */
            type?: string;
            /** Payment details for the plan connection when present. */
            payment?: unknown;
            [key: string]: unknown;
          }>;
          /** Team memberships embedded with include=teams. */
          teams?: Array<{
            /** The team ID. */
            id?: string;
            /** The member's role on the team. */
            role?: string;
            /** The ISO timestamp when the team was created. */
            createdAt?: string;
            /** The team invite token. */
            inviteToken?: string;
            /** The current number of members on the team. */
            currentTeamMemberCount?: number;
            /** The maximum number of members allowed on the team. */
            maxTeamMembers?: number | null;
            /** The owner plan details returned for a team membership. */
            plan?: {
              /** The team owner plan ID. */
              id?: string;
              /** The team owner plan name. */
              name?: string;
              /** The team invite signup link. */
              teamAccountInviteSignupLink?: string;
              /** The team upgrade link. */
              teamAccountUpgradeLink?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a Memberstack member with optional Stripe customer and subscription cleanup flags. */
    "memberstack.delete_member": {
      input: {
        /**
         * The Memberstack member ID to delete.
         * @minLength 1
         */
        id: string;
        /** Whether to delete the associated Stripe customer. */
        deleteStripeCustomer?: boolean;
        /** Whether to cancel associated Stripe subscriptions. */
        cancelStripeSubscriptions?: boolean;
      };
      output: {
        /** The deleted member identifier. */
        data: {
          /** The deleted Memberstack member ID. */
          id: string;
        };
      };
    };
    /** Retrieve one Memberstack member by member ID or email address, optionally embedding team memberships. */
    "memberstack.get_member": {
      input: {
        /**
         * The Memberstack member ID or email address.
         * @minLength 1
         */
        idOrEmail: string;
        /** Whether to request embedded team memberships with include=teams. */
        includeTeams?: boolean;
      };
      output: {
        /** A Memberstack member object. */
        data: {
          /** The Memberstack member ID. */
          id?: string;
          /** The member authentication details returned by Memberstack. */
          auth?: {
            /** The member's email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The ISO timestamp when the member was created. */
          createdAt?: string;
          /** The ISO timestamp when the member last logged in. */
          lastLogin?: string | null;
          /** Whether the member's email is verified. */
          verified?: boolean;
          /** Custom fields stored on the member. */
          customFields?: Record<string, unknown>;
          /** Metadata stored on the member. */
          metaData?: Record<string, unknown>;
          /** JSON data stored on the member. */
          json?: Record<string, unknown>;
          /** Permissions assigned to the member. */
          permissions?: Array<string>;
          /** The URL or path where the member is redirected after login. */
          loginRedirect?: string;
          /** The Stripe customer ID when present. */
          stripeCustomerId?: string | null;
          /** The member profile image URL when present. */
          profileImage?: string | null;
          /** Plan connections for the member. */
          planConnections?: Array<{
            /** The plan connection ID. */
            id?: string;
            /** Whether the plan connection is active. */
            active?: boolean;
            /** The plan connection status. */
            status?: string;
            /** The connected plan ID. */
            planId?: string;
            /** The connected plan name. */
            planName?: string;
            /** The connected plan type. */
            type?: string;
            /** Payment details for the plan connection when present. */
            payment?: unknown;
            [key: string]: unknown;
          }>;
          /** Team memberships embedded with include=teams. */
          teams?: Array<{
            /** The team ID. */
            id?: string;
            /** The member's role on the team. */
            role?: string;
            /** The ISO timestamp when the team was created. */
            createdAt?: string;
            /** The team invite token. */
            inviteToken?: string;
            /** The current number of members on the team. */
            currentTeamMemberCount?: number;
            /** The maximum number of members allowed on the team. */
            maxTeamMembers?: number | null;
            /** The owner plan details returned for a team membership. */
            plan?: {
              /** The team owner plan ID. */
              id?: string;
              /** The team owner plan name. */
              name?: string;
              /** The team invite signup link. */
              teamAccountInviteSignupLink?: string;
              /** The team upgrade link. */
              teamAccountUpgradeLink?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List Memberstack members with cursor pagination and optional JSON-field inclusion. */
    "memberstack.list_members": {
      input: {
        /** The endCursor after which listing should start. */
        after?: number;
        /** The member sort order. */
        order?: "ASC" | "DESC";
        /**
         * Alias for limit. If supplied, Memberstack gives it precedence.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /**
         * The maximum number of members to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether to include each member's json field in the response. */
        includeJSON?: boolean;
      };
      output: {
        /** The total number of members. */
        totalCount: number;
        /** The cursor to pass as after when fetching the next page. */
        endCursor: number;
        /** Whether more members are available. */
        hasNextPage: boolean;
        /** The members returned for this page. */
        data: Array<{
          /** The Memberstack member ID. */
          id?: string;
          /** The member authentication details returned by Memberstack. */
          auth?: {
            /** The member's email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The ISO timestamp when the member was created. */
          createdAt?: string;
          /** The ISO timestamp when the member last logged in. */
          lastLogin?: string | null;
          /** Whether the member's email is verified. */
          verified?: boolean;
          /** Custom fields stored on the member. */
          customFields?: Record<string, unknown>;
          /** Metadata stored on the member. */
          metaData?: Record<string, unknown>;
          /** JSON data stored on the member. */
          json?: Record<string, unknown>;
          /** Permissions assigned to the member. */
          permissions?: Array<string>;
          /** The URL or path where the member is redirected after login. */
          loginRedirect?: string;
          /** The Stripe customer ID when present. */
          stripeCustomerId?: string | null;
          /** The member profile image URL when present. */
          profileImage?: string | null;
          /** Plan connections for the member. */
          planConnections?: Array<{
            /** The plan connection ID. */
            id?: string;
            /** Whether the plan connection is active. */
            active?: boolean;
            /** The plan connection status. */
            status?: string;
            /** The connected plan ID. */
            planId?: string;
            /** The connected plan name. */
            planName?: string;
            /** The connected plan type. */
            type?: string;
            /** Payment details for the plan connection when present. */
            payment?: unknown;
            [key: string]: unknown;
          }>;
          /** Team memberships embedded with include=teams. */
          teams?: Array<{
            /** The team ID. */
            id?: string;
            /** The member's role on the team. */
            role?: string;
            /** The ISO timestamp when the team was created. */
            createdAt?: string;
            /** The team invite token. */
            inviteToken?: string;
            /** The current number of members on the team. */
            currentTeamMemberCount?: number;
            /** The maximum number of members allowed on the team. */
            maxTeamMembers?: number | null;
            /** The owner plan details returned for a team membership. */
            plan?: {
              /** The team owner plan ID. */
              id?: string;
              /** The team owner plan name. */
              name?: string;
              /** The team invite signup link. */
              teamAccountInviteSignupLink?: string;
              /** The team upgrade link. */
              teamAccountUpgradeLink?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Remove a free Memberstack plan from an existing member. */
    "memberstack.remove_free_plan": {
      input: {
        /**
         * The Memberstack member ID.
         * @minLength 1
         */
        id: string;
        /**
         * The free plan ID. Free plan IDs start with pln_.
         * @minLength 1
         */
        planId: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success: true;
      };
    };
    /** Partially update a Memberstack member's email, custom fields, metadata, JSON data, login redirect, verified status, or profile image. */
    "memberstack.update_member": {
      input: {
        /**
         * The Memberstack member ID to update.
         * @minLength 1
         */
        id: string;
        /**
         * The updated member email address.
         * @format email
         */
        email?: string;
        /** Custom fields to shallow-merge into the member. */
        customFields?: Record<string, unknown>;
        /** Metadata to shallow-merge into the member. */
        metaData?: Record<string, unknown>;
        /** JSON data to replace on the member. */
        json?: Record<string, unknown>;
        /**
         * The updated URL or path where the member is redirected after login.
         * @minLength 1
         */
        loginRedirect?: string;
        /** Whether the member's email should be marked verified. */
        verified?: boolean;
        /**
         * The updated member profile image URL.
         * @format uri
         */
        profileImage?: string;
      };
      output: {
        /** A Memberstack member object. */
        data: {
          /** The Memberstack member ID. */
          id?: string;
          /** The member authentication details returned by Memberstack. */
          auth?: {
            /** The member's email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The ISO timestamp when the member was created. */
          createdAt?: string;
          /** The ISO timestamp when the member last logged in. */
          lastLogin?: string | null;
          /** Whether the member's email is verified. */
          verified?: boolean;
          /** Custom fields stored on the member. */
          customFields?: Record<string, unknown>;
          /** Metadata stored on the member. */
          metaData?: Record<string, unknown>;
          /** JSON data stored on the member. */
          json?: Record<string, unknown>;
          /** Permissions assigned to the member. */
          permissions?: Array<string>;
          /** The URL or path where the member is redirected after login. */
          loginRedirect?: string;
          /** The Stripe customer ID when present. */
          stripeCustomerId?: string | null;
          /** The member profile image URL when present. */
          profileImage?: string | null;
          /** Plan connections for the member. */
          planConnections?: Array<{
            /** The plan connection ID. */
            id?: string;
            /** Whether the plan connection is active. */
            active?: boolean;
            /** The plan connection status. */
            status?: string;
            /** The connected plan ID. */
            planId?: string;
            /** The connected plan name. */
            planName?: string;
            /** The connected plan type. */
            type?: string;
            /** Payment details for the plan connection when present. */
            payment?: unknown;
            [key: string]: unknown;
          }>;
          /** Team memberships embedded with include=teams. */
          teams?: Array<{
            /** The team ID. */
            id?: string;
            /** The member's role on the team. */
            role?: string;
            /** The ISO timestamp when the team was created. */
            createdAt?: string;
            /** The team invite token. */
            inviteToken?: string;
            /** The current number of members on the team. */
            currentTeamMemberCount?: number;
            /** The maximum number of members allowed on the team. */
            maxTeamMembers?: number | null;
            /** The owner plan details returned for a team membership. */
            plan?: {
              /** The team owner plan ID. */
              id?: string;
              /** The team owner plan name. */
              name?: string;
              /** The team invite signup link. */
              teamAccountInviteSignupLink?: string;
              /** The team upgrade link. */
              teamAccountUpgradeLink?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Verify a Memberstack member JWT and return the decoded token payload. */
    "memberstack.verify_member_token": {
      input: {
        /**
         * The JWT token issued to a Memberstack member.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** The decoded token payload returned by Memberstack. */
        data: {
          /** The member ID from the token. */
          id?: string;
          /** The token type. */
          type?: string;
          /** The issued-at Unix timestamp. */
          iat?: number;
          /** The expiration Unix timestamp. */
          exp?: number;
          /** The token audience. */
          aud?: string;
          /** The token issuer. */
          iss?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
