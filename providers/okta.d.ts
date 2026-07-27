import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Assign an Okta user to an Okta-managed group. */
    "okta.add_user_to_group": {
      input: {
        /**
         * The Okta group ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /**
         * The Okta user ID, login, or login shortname accepted by the Users API.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** The Okta group ID. */
        groupId: string;
        /** The Okta user ID. */
        userId: string;
        /** Whether Okta accepted the membership assignment. */
        added: boolean;
      };
    };
    /** Create an Okta-managed group. */
    "okta.create_group": {
      input: {
        /** The Okta group profile. */
        profile: {
          /**
           * The Okta group name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The Okta group description. */
          description?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Okta group. */
        group: {
          /** The Okta group ID. */
          id: string;
          /** The Okta group type, such as OKTA_GROUP. */
          type: string | null;
          /** When Okta created the group. */
          created: string | null;
          /** When the group was last updated. */
          lastUpdated: string | null;
          /** When the group membership last changed. */
          lastMembershipUpdated: string | null;
          /** The Okta group object classes. */
          objectClass: Array<string>;
          /** The Okta group profile. */
          profile: Record<string, unknown>;
          /** The raw Okta group object. */
          raw: Record<string, unknown>;
        };
        /** The raw Okta group object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create an Okta user with profile, credentials, group assignments, and activation options. */
    "okta.create_user": {
      input: {
        /** Okta user profile fields, including required attributes and custom profile properties. */
        profile: Record<string, unknown>;
        /** Okta user credentials, such as password, recovery question, or authentication provider fields. */
        credentials?: Record<string, unknown>;
        /** Okta group IDs assigned during creation. */
        groupIds?: Array<string>;
        /**
         * Whether Okta should activate the user after creation.
         * @default true
         */
        activate?: boolean;
        /**
         * Whether the credentials specify an authentication provider for the user.
         * @default false
         */
        provider?: boolean;
        /** The password behavior for the user's next login. */
        nextLogin?: "changePassword";
      };
      output: {
        /** A normalized Okta user. */
        user: {
          /** The Okta user ID. */
          id: string;
          /** The Okta user status, such as ACTIVE or SUSPENDED. */
          status: string | null;
          /** When Okta created the user. */
          created: string | null;
          /** When Okta activated the user. */
          activated: string | null;
          /** When the user status last changed. */
          statusChanged: string | null;
          /** When the user last signed in. */
          lastLogin: string | null;
          /** When the user was last updated. */
          lastUpdated: string | null;
          /** When the user password last changed. */
          passwordChanged: string | null;
          /** The Okta user profile, including custom attributes. */
          profile: Record<string, unknown>;
          /** The raw Okta user object. */
          raw: Record<string, unknown>;
        };
        /** The raw Okta user object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete an Okta-managed group by ID. */
    "okta.delete_group": {
      input: {
        /**
         * The Okta group ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
      };
      output: {
        /** The deleted Okta group ID. */
        groupId: string;
        /** Whether Okta accepted the group deletion. */
        deleted: boolean;
      };
    };
    /** Deactivate an active Okta user, or permanently delete a user that is already deactivated. */
    "okta.delete_user": {
      input: {
        /**
         * The Okta user ID, login, or login shortname accepted by the Users API.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
        /** Whether Okta should send a deactivation email to the admin. */
        sendEmail?: boolean;
      };
      output: {
        /** The requested Okta user ID or login. */
        userId: string;
        /** Whether the request deactivated or permanently deleted the user. */
        result: "deactivated" | "deleted";
        /** Whether the user was permanently deleted. */
        deleted: boolean;
      };
    };
    /** Get one Okta group by ID. */
    "okta.get_group": {
      input: {
        /**
         * The Okta group ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
      };
      output: {
        /** A normalized Okta group. */
        group: {
          /** The Okta group ID. */
          id: string;
          /** The Okta group type, such as OKTA_GROUP. */
          type: string | null;
          /** When Okta created the group. */
          created: string | null;
          /** When the group was last updated. */
          lastUpdated: string | null;
          /** When the group membership last changed. */
          lastMembershipUpdated: string | null;
          /** The Okta group object classes. */
          objectClass: Array<string>;
          /** The Okta group profile. */
          profile: Record<string, unknown>;
          /** The raw Okta group object. */
          raw: Record<string, unknown>;
        };
        /** The raw Okta group object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Okta user by ID, login, or login shortname. */
    "okta.get_user": {
      input: {
        /**
         * The Okta user ID, login, or login shortname accepted by the Users API.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** A normalized Okta user. */
        user: {
          /** The Okta user ID. */
          id: string;
          /** The Okta user status, such as ACTIVE or SUSPENDED. */
          status: string | null;
          /** When Okta created the user. */
          created: string | null;
          /** When Okta activated the user. */
          activated: string | null;
          /** When the user status last changed. */
          statusChanged: string | null;
          /** When the user last signed in. */
          lastLogin: string | null;
          /** When the user was last updated. */
          lastUpdated: string | null;
          /** When the user password last changed. */
          passwordChanged: string | null;
          /** The Okta user profile, including custom attributes. */
          profile: Record<string, unknown>;
          /** The raw Okta user object. */
          raw: Record<string, unknown>;
        };
        /** The raw Okta user object. */
        raw: Record<string, unknown>;
      };
    };
    /** Activate, reactivate, deactivate, suspend, unsuspend, unlock, or expire an Okta user's password. */
    "okta.lifecycle_user": {
      input: {
        /**
         * The Okta user ID, login, or login shortname accepted by the Users API.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
        /** The lifecycle operation to perform. */
        operation: "activate" | "reactivate" | "deactivate" | "suspend" | "unsuspend" | "unlock" | "expire_password";
        /** Whether supported activation or deactivation operations should send email. */
        sendEmail?: boolean;
        /** For expire_password, whether Okta should expire the password and return a temporary password. */
        tempPassword?: boolean;
        /** When returning a temporary password, whether Okta should revoke the user's existing sessions. */
        revokeSessions?: boolean;
      };
      output: {
        /** The requested Okta user ID or login. */
        userId: string;
        /** The completed lifecycle operation. */
        operation: string;
        /** The Okta lifecycle response body, or null for an empty response. */
        result: Record<string, unknown> | null;
        /** The raw Okta lifecycle response body, or null for an empty response. */
        raw: Record<string, unknown> | null;
      };
    };
    /** List the users that are members of an Okta group. */
    "okta.list_group_users": {
      input: {
        /**
         * The Okta group ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /**
         * The maximum number of group members to return.
         * @exclusiveMinimum 0
         * @default 1000
         */
        limit?: number;
        /**
         * The opaque Okta pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
      };
      output: {
        /** The returned Okta users. */
        users: Array<{
          /** The Okta user ID. */
          id: string;
          /** The Okta user status, such as ACTIVE or SUSPENDED. */
          status: string | null;
          /** When Okta created the user. */
          created: string | null;
          /** When Okta activated the user. */
          activated: string | null;
          /** When the user status last changed. */
          statusChanged: string | null;
          /** When the user last signed in. */
          lastLogin: string | null;
          /** When the user was last updated. */
          lastUpdated: string | null;
          /** When the user password last changed. */
          passwordChanged: string | null;
          /** The Okta user profile, including custom attributes. */
          profile: Record<string, unknown>;
          /** The raw Okta user object. */
          raw: Record<string, unknown>;
        }>;
        /** The next Okta after cursor, or null for the final page. */
        nextAfter: string | null;
        /** The raw Okta user objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Okta groups with search, filtering, sorting, expansion, and cursor pagination. */
    "okta.list_groups": {
      input: {
        /**
         * The maximum number of groups to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * The opaque Okta pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * An Okta Groups API search expression.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * An Okta Groups API filter expression.
         * @minLength 1
         * @pattern \S
         */
        filter?: string;
        /**
         * A simple query that matches the Okta group name.
         * @minLength 1
         * @pattern \S
         */
        q?: string;
        /** Additional group metadata to include. */
        expand?: "stats" | "app";
        /**
         * The group property used to sort search results.
         * @minLength 1
         * @pattern \S
         */
        sortBy?: string;
        /**
         * The sort direction for an Okta search query.
         * @default "asc"
         */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The returned Okta groups. */
        groups: Array<{
          /** The Okta group ID. */
          id: string;
          /** The Okta group type, such as OKTA_GROUP. */
          type: string | null;
          /** When Okta created the group. */
          created: string | null;
          /** When the group was last updated. */
          lastUpdated: string | null;
          /** When the group membership last changed. */
          lastMembershipUpdated: string | null;
          /** The Okta group object classes. */
          objectClass: Array<string>;
          /** The Okta group profile. */
          profile: Record<string, unknown>;
          /** The raw Okta group object. */
          raw: Record<string, unknown>;
        }>;
        /** The next Okta after cursor, or null for the final page. */
        nextAfter: string | null;
        /** The raw Okta group objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Okta users with search, filtering, sorting, field projection, and cursor pagination. */
    "okta.list_users": {
      input: {
        /**
         * The maximum number of users to return.
         * @minimum 1
         * @maximum 200
         * @default 200
         */
        limit?: number;
        /**
         * The opaque Okta pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * An Okta Users API search expression.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * An Okta Users API filter expression.
         * @minLength 1
         * @pattern \S
         */
        filter?: string;
        /**
         * A simple prefix query for user first name, last name, or email.
         * @minLength 1
         * @pattern \S
         */
        q?: string;
        /**
         * The user property used to sort search results.
         * @minLength 1
         * @pattern \S
         */
        sortBy?: string;
        /**
         * The sort direction for an Okta search query.
         * @default "asc"
         */
        sortOrder?: "asc" | "desc";
        /**
         * A comma-separated projection of user properties to return.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The returned Okta users. */
        users: Array<{
          /** The Okta user ID. */
          id: string;
          /** The Okta user status, such as ACTIVE or SUSPENDED. */
          status: string | null;
          /** When Okta created the user. */
          created: string | null;
          /** When Okta activated the user. */
          activated: string | null;
          /** When the user status last changed. */
          statusChanged: string | null;
          /** When the user last signed in. */
          lastLogin: string | null;
          /** When the user was last updated. */
          lastUpdated: string | null;
          /** When the user password last changed. */
          passwordChanged: string | null;
          /** The Okta user profile, including custom attributes. */
          profile: Record<string, unknown>;
          /** The raw Okta user object. */
          raw: Record<string, unknown>;
        }>;
        /** The next Okta after cursor, or null for the final page. */
        nextAfter: string | null;
        /** The raw Okta user objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Unassign an Okta user from an Okta-managed group. */
    "okta.remove_user_from_group": {
      input: {
        /**
         * The Okta group ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /**
         * The Okta user ID, login, or login shortname accepted by the Users API.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** The Okta group ID. */
        groupId: string;
        /** The Okta user ID. */
        userId: string;
        /** Whether Okta accepted the membership removal. */
        removed: boolean;
      };
    };
    /** Replace an Okta-managed group's profile. */
    "okta.update_group": {
      input: {
        /**
         * The Okta group ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /** The Okta group profile. */
        profile: {
          /**
           * The Okta group name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The Okta group description. */
          description?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Okta group. */
        group: {
          /** The Okta group ID. */
          id: string;
          /** The Okta group type, such as OKTA_GROUP. */
          type: string | null;
          /** When Okta created the group. */
          created: string | null;
          /** When the group was last updated. */
          lastUpdated: string | null;
          /** When the group membership last changed. */
          lastMembershipUpdated: string | null;
          /** The Okta group object classes. */
          objectClass: Array<string>;
          /** The Okta group profile. */
          profile: Record<string, unknown>;
          /** The raw Okta group object. */
          raw: Record<string, unknown>;
        };
        /** The raw Okta group object. */
        raw: Record<string, unknown>;
      };
    };
    /** Partially update an Okta user's profile or credentials. */
    "okta.update_user": {
      input: {
        /**
         * The Okta user ID, login, or login shortname accepted by the Users API.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
        /** Okta user profile fields, including required attributes and custom profile properties. */
        profile?: Record<string, unknown>;
        /** Okta user credentials, such as password, recovery question, or authentication provider fields. */
        credentials?: Record<string, unknown>;
        /** Whether Okta should enforce password age and history policies. */
        strict?: boolean;
      };
      output: {
        /** A normalized Okta user. */
        user: {
          /** The Okta user ID. */
          id: string;
          /** The Okta user status, such as ACTIVE or SUSPENDED. */
          status: string | null;
          /** When Okta created the user. */
          created: string | null;
          /** When Okta activated the user. */
          activated: string | null;
          /** When the user status last changed. */
          statusChanged: string | null;
          /** When the user last signed in. */
          lastLogin: string | null;
          /** When the user was last updated. */
          lastUpdated: string | null;
          /** When the user password last changed. */
          passwordChanged: string | null;
          /** The Okta user profile, including custom attributes. */
          profile: Record<string, unknown>;
          /** The raw Okta user object. */
          raw: Record<string, unknown>;
        };
        /** The raw Okta user object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
