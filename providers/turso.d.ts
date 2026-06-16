import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Turso database in one organization and group. */
    "turso.create_database": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
        /**
         * The Turso database name.
         * @minLength 1
         */
        name: string;
        /**
         * The Turso group where the database should be created.
         * @minLength 1
         */
        group: string;
      };
      output: {
        /** A normalized Turso Platform API resource. */
        database: {
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Turso group in one organization with a primary location. */
    "turso.create_group": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
        /**
         * The Turso group name.
         * @minLength 1
         */
        name: string;
        /**
         * The primary Turso location code for the group.
         * @minLength 1
         */
        location: string;
        /** The extensions to enable for new databases in the group. */
        extensions?: "all" | Array<string>;
      };
      output: {
        /** A normalized Turso Platform API resource. */
        group: {
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a Turso database from one organization. */
    "turso.delete_database": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
        /**
         * The Turso database name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether the connector finished the delete request successfully. */
        deleted: boolean;
      };
    };
    /** Retrieve one Turso database by name within an organization. */
    "turso.get_database": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
        /**
         * The Turso database name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A normalized Turso Platform API resource. */
        database: {
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Turso group by name within an organization. */
    "turso.get_group": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
        /**
         * The Turso group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A normalized Turso Platform API resource. */
        group: {
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Turso organization by slug. */
    "turso.get_organization": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
      };
      output: {
        /** A normalized Turso Platform API resource. */
        organization: {
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Turso databases for one organization. */
    "turso.list_databases": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
      };
      output: {
        /** The Turso databases belonging to the organization. */
        databases: Array<{
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Turso groups for one organization. */
    "turso.list_groups": {
      input: {
        /**
         * The organization slug used in the Turso API path.
         * @minLength 1
         */
        organizationSlug: string;
      };
      output: {
        /** The Turso groups belonging to the organization. */
        groups: Array<{
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List available Turso locations that can host groups. */
    "turso.list_locations": {
      input: Record<string, never>;
      output: {
        /** The available Turso locations. */
        locations: Array<{
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List organizations visible to the current Turso Platform API token. */
    "turso.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The organizations visible to the current API token. */
        organizations: Array<{
          /** The resource slug when Turso returns one. */
          slug?: string;
          /** The resource name when Turso returns one. */
          name?: string;
          /** The resource type when Turso returns one. */
          type?: string;
          /** The location code when Turso returns one. */
          location?: string;
          /** The UUID when Turso returns one. */
          uuid?: string;
          /** The group name when Turso returns one. */
          group?: string;
          /** The database hostname when Turso returns one. */
          hostname?: string;
          /** The location code when Turso returns one. */
          code?: string;
          /** The raw Turso resource object returned by the Platform API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
