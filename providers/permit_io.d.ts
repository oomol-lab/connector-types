import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Assign a Permit.io role to a user. */
    "permit_io.assign_role": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The user id or key receiving the role.
         * @minLength 1
         */
        user: string;
        /**
         * The role id or key to assign or remove.
         * @minLength 1
         */
        role: string;
        /**
         * The tenant id or key that scopes the role.
         * @minLength 1
         */
        tenant?: string;
        /**
         * The resource instance id, or resource_type:resource_instance key, that scopes the role.
         * @minLength 1
         */
        resource_instance?: string;
      };
      output: {
        /**
         * The role assignment id.
         * @minLength 1
         */
        id?: string;
        /**
         * The assigned user key.
         * @minLength 1
         */
        user?: string;
        /**
         * The assigned role key.
         * @minLength 1
         */
        role?: string;
        /**
         * The tenant key that scopes the assignment.
         * @minLength 1
         */
        tenant?: string;
        /**
         * The resource instance key that scopes the assignment.
         * @minLength 1
         */
        resource_instance?: string;
        /**
         * The assigned user id.
         * @minLength 1
         */
        user_id?: string;
        /**
         * The assigned role id.
         * @minLength 1
         */
        role_id?: string;
        /**
         * The tenant id that scopes the assignment.
         * @minLength 1
         */
        tenant_id?: string;
        /**
         * The organization id containing the assignment.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the assignment.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the assignment.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The assignment creation timestamp.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a tenant in a Permit.io environment. */
    "permit_io.create_tenant": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The URL-friendly key Permit.io uses to identify the tenant.
         * @minLength 1
         */
        key: string;
        /**
         * The descriptive tenant name.
         * @minLength 1
         */
        name: string;
        /** The longer tenant description. */
        description?: string;
        /** Arbitrary tenant attributes used by attribute-based policies. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /**
         * The unique tenant key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io tenant id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the tenant.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the tenant.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the tenant.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The tenant name.
         * @minLength 1
         */
        name?: string;
        /** The tenant description. */
        description?: string;
        /** The tenant's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The tenant creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The tenant update timestamp.
         * @format date-time
         */
        updated_at?: string;
        /**
         * The timestamp of the tenant's latest permission check.
         * @format date-time
         */
        last_action_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create a user in a Permit.io environment. */
    "permit_io.create_user": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The unique key Permit.io uses to identify the user.
         * @minLength 1
         */
        key: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /** Arbitrary user attributes used by attribute-based policies. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /**
         * The unique user key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io user id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the user.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the user.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the user.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /** The user's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The user creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The user update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Permit.io tenant by id or key. */
    "permit_io.delete_tenant": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The Permit.io tenant id or key.
         * @minLength 1
         */
        tenantId: string;
      };
      output: {
        /** Whether Permit.io accepted the operation. */
        ok: boolean;
      };
    };
    /** Delete a Permit.io user by id or key. */
    "permit_io.delete_user": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The Permit.io user id or key.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Whether Permit.io accepted the operation. */
        ok: boolean;
      };
    };
    /** Retrieve a Permit.io tenant by id or key. */
    "permit_io.get_tenant": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The Permit.io tenant id or key.
         * @minLength 1
         */
        tenantId: string;
      };
      output: {
        /**
         * The unique tenant key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io tenant id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the tenant.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the tenant.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the tenant.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The tenant name.
         * @minLength 1
         */
        name?: string;
        /** The tenant description. */
        description?: string;
        /** The tenant's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The tenant creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The tenant update timestamp.
         * @format date-time
         */
        updated_at?: string;
        /**
         * The timestamp of the tenant's latest permission check.
         * @format date-time
         */
        last_action_at?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Permit.io user by id or key. */
    "permit_io.get_user": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The Permit.io user id or key.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /**
         * The unique user key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io user id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the user.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the user.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the user.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /** The user's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The user creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The user update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** List role assignments in a Permit.io environment. */
    "permit_io.list_role_assignments": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * Only return assignments for this user id or key.
         * @minLength 1
         */
        user?: string;
        /**
         * Only return assignments granting this role id or key.
         * @minLength 1
         */
        role?: string;
        /**
         * Only return assignments in this tenant id or key.
         * @minLength 1
         */
        tenant?: string;
        /**
         * Only return assignments for this resource type.
         * @minLength 1
         */
        resource?: string;
        /**
         * Only return assignments for this resource instance.
         * @minLength 1
         */
        resourceInstance?: string;
        /** Whether to include full user, tenant, and role details. */
        detailed?: boolean;
        /**
         * The page number to retrieve, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Permit.io role assignments. */
        data: Array<{
          /**
           * The role assignment id.
           * @minLength 1
           */
          id?: string;
          /**
           * The assigned user key.
           * @minLength 1
           */
          user?: string;
          /**
           * The assigned role key.
           * @minLength 1
           */
          role?: string;
          /**
           * The tenant key that scopes the assignment.
           * @minLength 1
           */
          tenant?: string;
          /**
           * The resource instance key that scopes the assignment.
           * @minLength 1
           */
          resource_instance?: string;
          /**
           * The assigned user id.
           * @minLength 1
           */
          user_id?: string;
          /**
           * The assigned role id.
           * @minLength 1
           */
          role_id?: string;
          /**
           * The tenant id that scopes the assignment.
           * @minLength 1
           */
          tenant_id?: string;
          /**
           * The organization id containing the assignment.
           * @minLength 1
           */
          organization_id?: string;
          /**
           * The project id containing the assignment.
           * @minLength 1
           */
          project_id?: string;
          /**
           * The environment id containing the assignment.
           * @minLength 1
           */
          environment_id?: string;
          /**
           * The assignment creation timestamp.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total_count: number;
        /** The number of pages containing matching records. */
        page_count?: number;
      };
    };
    /** List tenants in a Permit.io environment. */
    "permit_io.list_tenants": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * Text to search for in tenant names or keys.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number to retrieve, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: Array<{
        /**
         * The unique tenant key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io tenant id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the tenant.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the tenant.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the tenant.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The tenant name.
         * @minLength 1
         */
        name?: string;
        /** The tenant description. */
        description?: string;
        /** The tenant's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The tenant creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The tenant update timestamp.
         * @format date-time
         */
        updated_at?: string;
        /**
         * The timestamp of the tenant's latest permission check.
         * @format date-time
         */
        last_action_at?: string;
        [key: string]: unknown;
      }>;
    };
    /** List users in a Permit.io environment. */
    "permit_io.list_users": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * Text to search for in user email addresses.
         * @minLength 1
         */
        search?: string;
        /**
         * Only return users assigned this role id or key.
         * @minLength 1
         */
        role?: string;
        /**
         * The page number to retrieve, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Permit.io users. */
        data: Array<{
          /**
           * The unique user key.
           * @minLength 1
           */
          key?: string;
          /**
           * The Permit.io user id.
           * @minLength 1
           */
          id?: string;
          /**
           * The organization id containing the user.
           * @minLength 1
           */
          organization_id?: string;
          /**
           * The project id containing the user.
           * @minLength 1
           */
          project_id?: string;
          /**
           * The environment id containing the user.
           * @minLength 1
           */
          environment_id?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /**
           * The user's first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The user's last name.
           * @minLength 1
           */
          last_name?: string;
          /** The user's arbitrary authorization attributes. */
          attributes?: Record<string, unknown>;
          /**
           * The user creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The user update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total_count: number;
        /** The number of pages containing matching records. */
        page_count?: number;
      };
    };
    /** Remove a Permit.io role assignment from a user. */
    "permit_io.unassign_role": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The user id or key receiving the role.
         * @minLength 1
         */
        user: string;
        /**
         * The role id or key to assign or remove.
         * @minLength 1
         */
        role: string;
        /**
         * The tenant id or key that scopes the role.
         * @minLength 1
         */
        tenant?: string;
        /**
         * The resource instance id, or resource_type:resource_instance key, that scopes the role.
         * @minLength 1
         */
        resource_instance?: string;
      };
      output: {
        /** Whether Permit.io accepted the operation. */
        ok: boolean;
      };
    };
    /** Partially update a Permit.io tenant. */
    "permit_io.update_tenant": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The Permit.io tenant id or key.
         * @minLength 1
         */
        tenantId: string;
        /**
         * The descriptive tenant name.
         * @minLength 1
         */
        name?: string;
        /** The longer tenant description. */
        description?: string;
        /** Arbitrary tenant attributes used by attribute-based policies. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /**
         * The unique tenant key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io tenant id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the tenant.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the tenant.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the tenant.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The tenant name.
         * @minLength 1
         */
        name?: string;
        /** The tenant description. */
        description?: string;
        /** The tenant's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The tenant creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The tenant update timestamp.
         * @format date-time
         */
        updated_at?: string;
        /**
         * The timestamp of the tenant's latest permission check.
         * @format date-time
         */
        last_action_at?: string;
        [key: string]: unknown;
      };
    };
    /** Partially update a Permit.io user. */
    "permit_io.update_user": {
      input: {
        /**
         * The Permit.io project id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The Permit.io environment id or key. Required when the connected API key is not environment-scoped.
         * @minLength 1
         */
        environmentId?: string;
        /**
         * The Permit.io user id or key.
         * @minLength 1
         */
        userId: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /** Arbitrary user attributes used by attribute-based policies. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /**
         * The unique user key.
         * @minLength 1
         */
        key?: string;
        /**
         * The Permit.io user id.
         * @minLength 1
         */
        id?: string;
        /**
         * The organization id containing the user.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The project id containing the user.
         * @minLength 1
         */
        project_id?: string;
        /**
         * The environment id containing the user.
         * @minLength 1
         */
        environment_id?: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /** The user's arbitrary authorization attributes. */
        attributes?: Record<string, unknown>;
        /**
         * The user creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The user update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
  }
}
