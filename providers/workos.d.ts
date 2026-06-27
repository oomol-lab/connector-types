import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a WorkOS organization in the current environment. */
    "workos.create_organization": {
      input: {
        /**
         * The name of the organization.
         * @minLength 1
         */
        name: string;
        /** Whether the organization allows profiles from outside the organization to sign in. */
        allow_profiles_outside_organization?: boolean;
        /** Domains associated with the organization, including verification state. */
        domain_data?: Array<{
          /** The organization domain name. */
          domain?: string;
          /** The domain verification state. */
          state?: string;
          [key: string]: unknown;
        }>;
        /** Metadata key/value pairs associated with the resource. */
        metadata?: Record<string, unknown>;
        /**
         * An external identifier for the organization.
         * @minLength 1
         */
        external_id?: string;
      };
      output: {
        /** WorkOS organization object. */
        organization: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** Unique identifier of the organization. */
          id?: string;
          /** A descriptive name for the organization. */
          name?: string;
          /** Domains associated with the organization. */
          domains?: Array<Record<string, unknown>>;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** The external ID of the organization. */
          external_id?: string | null;
          /** The timestamp when the organization was created. */
          created_at?: string;
          /** The timestamp when the organization was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create an active WorkOS organization membership for a user and organization. */
    "workos.create_organization_membership": {
      input: {
        /**
         * The ID of the user.
         * @minLength 1
         */
        user_id: string;
        /**
         * The ID of the organization which the user belongs to.
         * @minLength 1
         */
        organization_id: string;
        /**
         * A single role identifier.
         * @minLength 1
         */
        role_slug?: string;
        /** Role identifiers to assign to the user. */
        role_slugs?: Array<string>;
      };
      output: {
        /** WorkOS organization membership object. */
        organization_membership: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the organization membership. */
          id?: string;
          /** The ID of the WorkOS user. */
          userId?: string;
          /** The ID of the WorkOS organization. */
          organizationId?: string;
          /** The name of the WorkOS organization. */
          organizationName?: string;
          /** The status of the organization membership. */
          status?: "active" | "inactive" | "pending";
          /** The timestamp when the organization membership was created. */
          createdAt?: string;
          /** The timestamp when the organization membership was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a WorkOS AuthKit user in the current environment. */
    "workos.create_user": {
      input: {
        /**
         * The email address of the user.
         * @format email
         */
        email: string;
        /**
         * The first name of the user.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The last name of the user.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The user's full name.
         * @minLength 1
         */
        name?: string;
        /** Whether the user's email address was previously verified. */
        email_verified?: boolean;
        /** Metadata key/value pairs associated with the resource. */
        metadata?: Record<string, unknown>;
        /**
         * The external identifier of the user.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The password to set for the user.
         * @minLength 1
         */
        password?: string;
      };
      output: {
        /** WorkOS user object. */
        user: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the user. */
          id?: string;
          /** The email address of the user. */
          email?: string;
          /** The first name of the user. */
          first_name?: string | null;
          /** The last name of the user. */
          last_name?: string | null;
          /** The user's full name. */
          name?: string | null;
          /** Whether the user's email has been verified. */
          email_verified?: boolean;
          /** The external ID of the user. */
          external_id?: string | null;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** An ISO 8601 timestamp for when the user was created. */
          created_at?: string;
          /** An ISO 8601 timestamp for when the user was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Deactivate an active WorkOS organization membership. */
    "workos.deactivate_organization_membership": {
      input: {
        /**
         * The unique ID of the organization membership.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** WorkOS organization membership object. */
        organization_membership: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the organization membership. */
          id?: string;
          /** The ID of the WorkOS user. */
          userId?: string;
          /** The ID of the WorkOS organization. */
          organizationId?: string;
          /** The name of the WorkOS organization. */
          organizationName?: string;
          /** The status of the organization membership. */
          status?: "active" | "inactive" | "pending";
          /** The timestamp when the organization membership was created. */
          createdAt?: string;
          /** The timestamp when the organization membership was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a WorkOS organization by ID. */
    "workos.get_organization": {
      input: {
        /**
         * Unique identifier of the organization.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** WorkOS organization object. */
        organization: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** Unique identifier of the organization. */
          id?: string;
          /** A descriptive name for the organization. */
          name?: string;
          /** Domains associated with the organization. */
          domains?: Array<Record<string, unknown>>;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** The external ID of the organization. */
          external_id?: string | null;
          /** The timestamp when the organization was created. */
          created_at?: string;
          /** The timestamp when the organization was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a WorkOS organization membership by ID. */
    "workos.get_organization_membership": {
      input: {
        /**
         * The unique ID of the organization membership.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** WorkOS organization membership object. */
        organization_membership: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the organization membership. */
          id?: string;
          /** The ID of the WorkOS user. */
          userId?: string;
          /** The ID of the WorkOS organization. */
          organizationId?: string;
          /** The name of the WorkOS organization. */
          organizationName?: string;
          /** The status of the organization membership. */
          status?: "active" | "inactive" | "pending";
          /** The timestamp when the organization membership was created. */
          createdAt?: string;
          /** The timestamp when the organization membership was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a WorkOS AuthKit user by ID. */
    "workos.get_user": {
      input: {
        /**
         * The unique ID of the user.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** WorkOS user object. */
        user: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the user. */
          id?: string;
          /** The email address of the user. */
          email?: string;
          /** The first name of the user. */
          first_name?: string | null;
          /** The last name of the user. */
          last_name?: string | null;
          /** The user's full name. */
          name?: string | null;
          /** Whether the user's email has been verified. */
          email_verified?: boolean;
          /** The external ID of the user. */
          external_id?: string | null;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** An ISO 8601 timestamp for when the user was created. */
          created_at?: string;
          /** An ISO 8601 timestamp for when the user was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List WorkOS organization memberships filtered by user, organization, or membership status. */
    "workos.list_organization_memberships": {
      input: {
        /**
         * An object ID that defines the cursor position before the requested page.
         * @minLength 1
         */
        before?: string;
        /**
         * An object ID that defines the cursor position after the requested page.
         * @minLength 1
         */
        after?: string;
        /**
         * Upper limit on the number of objects to return, between 1 and 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Order the results by creation time. */
        order?: "normal" | "desc" | "asc";
        /**
         * The ID of the organization which the user belongs to.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * The ID of the user.
         * @minLength 1
         */
        user_id?: string;
        /** Statuses to include in the membership list. */
        statuses?: Array<"active" | "inactive" | "pending">;
      };
      output: {
        /** Organization memberships returned by WorkOS. */
        organization_memberships: Array<{
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the organization membership. */
          id?: string;
          /** The ID of the WorkOS user. */
          userId?: string;
          /** The ID of the WorkOS organization. */
          organizationId?: string;
          /** The name of the WorkOS organization. */
          organizationName?: string;
          /** The status of the organization membership. */
          status?: "active" | "inactive" | "pending";
          /** The timestamp when the organization membership was created. */
          createdAt?: string;
          /** The timestamp when the organization membership was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** WorkOS pagination metadata returned for a list request. */
        list_metadata: {
          /** Cursor for the previous page when returned by WorkOS. */
          before?: string | null;
          /** Cursor for the next page when returned by WorkOS. */
          after?: string | null;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List WorkOS organizations with optional cursor, domain, and text filters. */
    "workos.list_organizations": {
      input: {
        /**
         * An object ID that defines the cursor position before the requested page.
         * @minLength 1
         */
        before?: string;
        /**
         * An object ID that defines the cursor position after the requested page.
         * @minLength 1
         */
        after?: string;
        /**
         * Upper limit on the number of objects to return, between 1 and 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Order the results by creation time. */
        order?: "normal" | "desc" | "asc";
        /** Domains to match against organizations. */
        domains?: Array<string>;
        /**
         * Search text matched against organization names.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Organizations returned by WorkOS. */
        organizations: Array<{
          /** Object type returned by WorkOS. */
          object?: string;
          /** Unique identifier of the organization. */
          id?: string;
          /** A descriptive name for the organization. */
          name?: string;
          /** Domains associated with the organization. */
          domains?: Array<Record<string, unknown>>;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** The external ID of the organization. */
          external_id?: string | null;
          /** The timestamp when the organization was created. */
          created_at?: string;
          /** The timestamp when the organization was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** WorkOS pagination metadata returned for a list request. */
        list_metadata: {
          /** Cursor for the previous page when returned by WorkOS. */
          before?: string | null;
          /** Cursor for the next page when returned by WorkOS. */
          after?: string | null;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List WorkOS AuthKit users with optional cursor and identity filters. */
    "workos.list_users": {
      input: {
        /**
         * An object ID that defines the cursor position before the requested page.
         * @minLength 1
         */
        before?: string;
        /**
         * An object ID that defines the cursor position after the requested page.
         * @minLength 1
         */
        after?: string;
        /**
         * Upper limit on the number of objects to return, between 1 and 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Order the results by creation time. */
        order?: "normal" | "desc" | "asc";
        /**
         * Filter users by the organization they are members of.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * Filter users by their email address.
         * @minLength 1
         */
        email?: string;
      };
      output: {
        /** Users returned by WorkOS. */
        users: Array<{
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the user. */
          id?: string;
          /** The email address of the user. */
          email?: string;
          /** The first name of the user. */
          first_name?: string | null;
          /** The last name of the user. */
          last_name?: string | null;
          /** The user's full name. */
          name?: string | null;
          /** Whether the user's email has been verified. */
          email_verified?: boolean;
          /** The external ID of the user. */
          external_id?: string | null;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** An ISO 8601 timestamp for when the user was created. */
          created_at?: string;
          /** An ISO 8601 timestamp for when the user was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** WorkOS pagination metadata returned for a list request. */
        list_metadata: {
          /** Cursor for the previous page when returned by WorkOS. */
          before?: string | null;
          /** Cursor for the next page when returned by WorkOS. */
          after?: string | null;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Reactivate an inactive WorkOS organization membership. */
    "workos.reactivate_organization_membership": {
      input: {
        /**
         * The unique ID of the organization membership.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** WorkOS organization membership object. */
        organization_membership: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the organization membership. */
          id?: string;
          /** The ID of the WorkOS user. */
          userId?: string;
          /** The ID of the WorkOS organization. */
          organizationId?: string;
          /** The name of the WorkOS organization. */
          organizationName?: string;
          /** The status of the organization membership. */
          status?: "active" | "inactive" | "pending";
          /** The timestamp when the organization membership was created. */
          createdAt?: string;
          /** The timestamp when the organization membership was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update properties of an existing WorkOS organization. */
    "workos.update_organization": {
      input: {
        /**
         * Unique identifier of the organization.
         * @minLength 1
         */
        id: string;
        /**
         * The name of the organization.
         * @minLength 1
         */
        name?: string;
        /** Whether the organization allows profiles from outside the organization to sign in. */
        allow_profiles_outside_organization?: boolean;
        /** Domains associated with the organization, including verification state. */
        domain_data?: Array<{
          /** The organization domain name. */
          domain?: string;
          /** The domain verification state. */
          state?: string;
          [key: string]: unknown;
        }>;
        /** Metadata key/value pairs associated with the resource. */
        metadata?: Record<string, unknown>;
        /**
         * An external identifier for the organization.
         * @minLength 1
         */
        external_id?: string;
      };
      output: {
        /** WorkOS organization object. */
        organization: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** Unique identifier of the organization. */
          id?: string;
          /** A descriptive name for the organization. */
          name?: string;
          /** Domains associated with the organization. */
          domains?: Array<Record<string, unknown>>;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** The external ID of the organization. */
          external_id?: string | null;
          /** The timestamp when the organization was created. */
          created_at?: string;
          /** The timestamp when the organization was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update roles on an existing WorkOS organization membership. */
    "workos.update_organization_membership": {
      input: {
        /**
         * The unique ID of the organization membership.
         * @minLength 1
         */
        id: string;
        /**
         * A single role identifier.
         * @minLength 1
         */
        role_slug?: string;
        /** Role identifiers to assign to the user. */
        role_slugs?: Array<string>;
      };
      output: {
        /** WorkOS organization membership object. */
        organization_membership: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the organization membership. */
          id?: string;
          /** The ID of the WorkOS user. */
          userId?: string;
          /** The ID of the WorkOS organization. */
          organizationId?: string;
          /** The name of the WorkOS organization. */
          organizationName?: string;
          /** The status of the organization membership. */
          status?: "active" | "inactive" | "pending";
          /** The timestamp when the organization membership was created. */
          createdAt?: string;
          /** The timestamp when the organization membership was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update properties of an existing WorkOS AuthKit user. */
    "workos.update_user": {
      input: {
        /**
         * The unique ID of the user.
         * @minLength 1
         */
        id: string;
        /**
         * The first name of the user.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The last name of the user.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The user's full name.
         * @minLength 1
         */
        name?: string;
        /** Whether the user's email address was previously verified. */
        email_verified?: boolean;
        /** Metadata key/value pairs associated with the resource. */
        metadata?: Record<string, unknown>;
        /**
         * The external identifier of the user.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The password to set for the user.
         * @minLength 1
         */
        password?: string;
      };
      output: {
        /** WorkOS user object. */
        user: {
          /** Object type returned by WorkOS. */
          object?: string;
          /** The unique ID of the user. */
          id?: string;
          /** The email address of the user. */
          email?: string;
          /** The first name of the user. */
          first_name?: string | null;
          /** The last name of the user. */
          last_name?: string | null;
          /** The user's full name. */
          name?: string | null;
          /** Whether the user's email has been verified. */
          email_verified?: boolean;
          /** The external ID of the user. */
          external_id?: string | null;
          /** Metadata key/value pairs associated with the resource. */
          metadata?: Record<string, unknown>;
          /** An ISO 8601 timestamp for when the user was created. */
          created_at?: string;
          /** An ISO 8601 timestamp for when the user was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw WorkOS response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
