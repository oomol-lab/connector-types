import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Associate one or more Auth0 permissions with a role. */
    "auth0_management.add_permissions_to_role": {
      input: {
        /**
         * The Auth0 role ID, such as rol_abc123.
         * @minLength 1
         */
        roleId: string;
        /**
         * Auth0 permissions to associate with or remove from the role.
         * @minItems 1
         */
        permissions: Array<{
          /**
           * The Auth0 permission name, mapped to permission_name.
           * @minLength 1
           */
          permissionName: string;
          /**
           * The Auth0 resource server identifier, mapped to resource_server_identifier.
           * @minLength 1
           */
          resourceServerIdentifier: string;
        }>;
      };
      output: {
        /** Whether the Auth0 role update request completed successfully. */
        success: boolean;
      };
    };
    /** Assign one or more Auth0 roles to a user. */
    "auth0_management.assign_roles_to_user": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
        /**
         * Auth0 role IDs to assign or remove.
         * @minItems 1
         */
        roleIds: Array<string>;
      };
      output: {
        /** Whether the Auth0 role update request completed successfully. */
        success: boolean;
      };
    };
    /** Retrieve one Auth0 role by role ID. */
    "auth0_management.get_role": {
      input: {
        /**
         * The Auth0 role ID, such as rol_abc123.
         * @minLength 1
         */
        roleId: string;
      };
      output: {
        /** A raw Auth0 Management API object. */
        role: Record<string, unknown>;
      };
    };
    /** Retrieve one Auth0 user by user ID. */
    "auth0_management.get_user": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** A raw Auth0 Management API object. */
        user: Record<string, unknown>;
      };
    };
    /** List permissions granted by an Auth0 role. */
    "auth0_management.list_role_permissions": {
      input: {
        /**
         * The Auth0 role ID, such as rol_abc123.
         * @minLength 1
         */
        roleId: string;
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 permissions to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
      };
      output: {
        /** Auth0 permissions returned by the Management API. */
        permissions: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List users assigned to an Auth0 role with offset or checkpoint pagination. */
    "auth0_management.list_role_users": {
      input: {
        /**
         * The Auth0 role ID, such as rol_abc123.
         * @minLength 1
         */
        roleId: string;
        /**
         * Zero-based Auth0 page number for offset pagination.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 users to return per offset page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
        /**
         * Auth0 checkpoint pagination cursor.
         * @minLength 1
         */
        from?: string;
        /**
         * The number of Auth0 users to retrieve with checkpoint pagination.
         * @minimum 1
         * @maximum 100
         */
        take?: number;
      };
      output: {
        /** Auth0 users returned by the Management API. */
        users: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Auth0 roles with pagination and optional name filter. */
    "auth0_management.list_roles": {
      input: {
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 roles to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
        /**
         * A role name filter passed to Auth0 as name_filter.
         * @minLength 1
         */
        nameFilter?: string;
      };
      output: {
        /** Auth0 roles returned by the Management API. */
        roles: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Auth0 permissions granted to a user directly or through roles or groups. */
    "auth0_management.list_user_effective_permissions": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 permissions to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
      };
      output: {
        /** Auth0 permissions returned by the Management API. */
        permissions: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Auth0 roles granted to a user directly or through group membership. */
    "auth0_management.list_user_effective_roles": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
      };
      output: {
        /** Auth0 roles returned by the Management API. */
        roles: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List permissions directly assigned to an Auth0 user. */
    "auth0_management.list_user_permissions": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 permissions to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
      };
      output: {
        /** Auth0 permissions returned by the Management API. */
        permissions: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Auth0 roles assigned to a user. */
    "auth0_management.list_user_roles": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
      };
      output: {
        /** Auth0 roles returned by the Management API. */
        roles: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Auth0 users with pagination and optional Lucene search query. */
    "auth0_management.list_users": {
      input: {
        /**
         * Zero-based Auth0 page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Auth0 users to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Auth0 user search query in Lucene syntax.
         * @minLength 1
         */
        query?: string;
        /** Whether Auth0 should return a totals wrapper. */
        includeTotals?: boolean;
      };
      output: {
        /** Auth0 users returned by the Management API. */
        users: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** Remove one or more Auth0 permissions from a role. */
    "auth0_management.remove_permissions_from_role": {
      input: {
        /**
         * The Auth0 role ID, such as rol_abc123.
         * @minLength 1
         */
        roleId: string;
        /**
         * Auth0 permissions to associate with or remove from the role.
         * @minItems 1
         */
        permissions: Array<{
          /**
           * The Auth0 permission name, mapped to permission_name.
           * @minLength 1
           */
          permissionName: string;
          /**
           * The Auth0 resource server identifier, mapped to resource_server_identifier.
           * @minLength 1
           */
          resourceServerIdentifier: string;
        }>;
      };
      output: {
        /** Whether the Auth0 role update request completed successfully. */
        success: boolean;
      };
    };
    /** Remove one or more Auth0 roles from a user. */
    "auth0_management.remove_roles_from_user": {
      input: {
        /**
         * The Auth0 user ID, such as auth0|abc123.
         * @minLength 1
         */
        userId: string;
        /**
         * Auth0 role IDs to assign or remove.
         * @minItems 1
         */
        roleIds: Array<string>;
      };
      output: {
        /** Whether the Auth0 role update request completed successfully. */
        success: boolean;
      };
    };
    /** Search Auth0 users by email with the official users-by-email endpoint. */
    "auth0_management.search_users_by_email": {
      input: {
        /**
         * The email address to search for.
         * @minLength 1
         * @format email
         */
        email: string;
      };
      output: {
        /** Auth0 users returned by the Management API. */
        users: Array<Record<string, unknown>>;
        /** The raw Auth0 Management API list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
  }
}
