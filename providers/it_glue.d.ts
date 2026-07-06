import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one IT Glue configuration by ID, optionally scoped to one organization. */
    "it_glue.get_configuration": {
      input: {
        /**
         * The IT Glue numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The IT Glue organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Safe configuration relationships to include. Passwords, attachments, and tickets are intentionally not exposed in this first pass.
         * @minItems 1
         */
        include?: Array<"adapters_resources" | "configuration_interfaces" | "rmm_records" | "dnet_fa_remote_assets" | "user_resource_accesses" | "group_resource_accesses">;
      };
      output: {
        /** An IT Glue JSON:API resource object. */
        configuration: {
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one IT Glue contact by ID, optionally scoped to one organization. */
    "it_glue.get_contact": {
      input: {
        /**
         * The IT Glue numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The IT Glue organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Safe contact relationships to include. Passwords, attachments, and tickets are intentionally not exposed in this first pass.
         * @minItems 1
         */
        include?: Array<"location" | "distinct_remote_contacts" | "resource_fields" | "user_resource_accesses" | "group_resource_accesses">;
      };
      output: {
        /** An IT Glue JSON:API resource object. */
        contact: {
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one IT Glue organization by ID. */
    "it_glue.get_organization": {
      input: {
        /**
         * The IT Glue numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Safe organization relationships to include. Attachment payloads are intentionally not exposed in this first pass.
         * @minItems 1
         */
        include?: Array<"adapters_resources" | "rmm_companies">;
      };
      output: {
        /** An IT Glue JSON:API resource object. */
        organization: {
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one IT Glue user by ID. */
    "it_glue.get_user": {
      input: {
        /**
         * The IT Glue numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** An IT Glue JSON:API resource object. */
        user: {
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** List IT Glue configurations, optionally scoped to one organization, with filters and pagination. */
    "it_glue.list_configurations": {
      input: {
        /**
         * The 1-based IT Glue page number.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to return. IT Glue allows 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The IT Glue organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** The configuration sort field. */
        sort?: "name" | "-name" | "id" | "-id" | "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * Safe configuration relationships to include. Passwords, attachments, and tickets are intentionally not exposed in this first pass.
         * @minItems 1
         */
        include?: Array<"adapters_resources" | "configuration_interfaces" | "rmm_records" | "dnet_fa_remote_assets" | "user_resource_accesses" | "group_resource_accesses">;
        /**
         * Filter configurations by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter configurations by serial number.
         * @minLength 1
         */
        serialNumber?: string;
        /**
         * Filter configurations by asset tag.
         * @minLength 1
         */
        assetTag?: string;
        /**
         * Filter configurations by IT Glue configuration type ID.
         * @exclusiveMinimum 0
         */
        configurationTypeId?: number;
        /**
         * Filter configurations by IT Glue configuration status ID.
         * @exclusiveMinimum 0
         */
        configurationStatusId?: number;
        /** Filter configurations by archived status. */
        archived?: boolean;
      };
      output: {
        /** The IT Glue configurations returned by the API. */
        configurations: Array<{
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** List IT Glue contacts, optionally scoped to one organization, with filters and pagination. */
    "it_glue.list_contacts": {
      input: {
        /**
         * The 1-based IT Glue page number.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to return. IT Glue allows 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The IT Glue organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** The contact sort field. */
        sort?: "first_name" | "-first_name" | "last_name" | "-last_name" | "id" | "-id" | "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * Safe contact relationships to include. Passwords, attachments, and tickets are intentionally not exposed in this first pass.
         * @minItems 1
         */
        include?: Array<"location" | "distinct_remote_contacts" | "resource_fields" | "user_resource_accesses" | "group_resource_accesses">;
        /**
         * Filter contacts by first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Filter contacts by last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Filter contacts by title.
         * @minLength 1
         */
        title?: string;
        /**
         * Filter contacts by IT Glue contact type ID.
         * @exclusiveMinimum 0
         */
        contactTypeId?: number;
        /** Filter contacts by important status. */
        important?: boolean;
        /**
         * Filter contacts by primary email.
         * @minLength 1
         */
        primaryEmail?: string;
      };
      output: {
        /** The IT Glue contacts returned by the API. */
        contacts: Array<{
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** List organizations in an IT Glue account with optional filters and pagination. */
    "it_glue.list_organizations": {
      input: {
        /**
         * The 1-based IT Glue page number.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to return. IT Glue allows 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** The organization sort field. */
        sort?: "name" | "-name" | "id" | "-id" | "updated_at" | "-updated_at" | "organization_status_name" | "-organization_status_name" | "organization_type_name" | "-organization_type_name" | "created_at" | "-created_at" | "short_name" | "-short_name" | "my_glue_account_id" | "-my_glue_account_id";
        /**
         * Safe organization relationships to include. Attachment payloads are intentionally not exposed in this first pass.
         * @minItems 1
         */
        include?: Array<"adapters_resources" | "rmm_companies">;
        /**
         * Filter organizations by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter organizations by IT Glue organization type ID.
         * @exclusiveMinimum 0
         */
        organizationTypeId?: number;
        /**
         * Filter organizations by IT Glue organization status ID.
         * @exclusiveMinimum 0
         */
        organizationStatusId?: number;
        /** Filter organizations by primary status. */
        primary?: boolean;
        /**
         * An IT Glue date range string such as 2026-01-01,2026-01-07 or *,2026-01-07.
         * @minLength 1
         */
        createdAtRange?: string;
        /**
         * An IT Glue date range string such as 2026-01-01,2026-01-07 or *,2026-01-07.
         * @minLength 1
         */
        updatedAtRange?: string;
      };
      output: {
        /** The IT Glue organizations returned by the API. */
        organizations: Array<{
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
    /** List users in an IT Glue account with optional filters and pagination. */
    "it_glue.list_users": {
      input: {
        /**
         * The 1-based IT Glue page number.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to return. IT Glue allows 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** The user sort field. */
        sort?: "name" | "-name" | "email" | "-email" | "reputation" | "-reputation" | "id" | "-id" | "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * Filter users by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter users by email.
         * @minLength 1
         */
        email?: string;
        /**
         * Filter users by role name.
         * @minLength 1
         */
        roleName?: string;
      };
      output: {
        /** The IT Glue users returned by the API. */
        users: Array<{
          /** The resource ID returned by IT Glue. */
          id: string;
          /** The JSON:API resource type returned by IT Glue. */
          type: string;
          /** The resource attributes returned by IT Glue. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The JSON:API meta object returned by IT Glue. */
        meta: Record<string, unknown>;
        /** The JSON:API links object returned by IT Glue. */
        links: Record<string, unknown>;
        /** The raw JSON:API response envelope returned by IT Glue. */
        raw: Record<string, unknown>;
      };
    };
  }
}
