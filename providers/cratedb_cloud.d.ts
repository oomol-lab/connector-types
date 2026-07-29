import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return one CrateDB Cloud cluster by ID. */
    "cratedb_cloud.get_cluster": {
      input: {
        /**
         * The CrateDB Cloud resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized CrateDB Cloud cluster. */
        cluster: {
          /** The cluster ID. */
          id: string;
          /** The cluster name. */
          name: string | null;
          /** The number of cluster nodes. */
          numNodes: number | null;
          /** The CrateDB version running on the cluster. */
          crateVersion: string | null;
          /** The project ID that owns the cluster. */
          projectId: string | null;
          /** The default database username when returned. */
          username: string | null;
          /** Whether the cluster is suspended. */
          suspended: boolean | null;
          /** The cluster fully qualified domain name. */
          fqdn: string | null;
          /** The cluster URL when returned. */
          url: string | null;
          /** The cluster release channel. */
          channel: string | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Return the CrateDB Cloud user associated with the connected API key. */
    "cratedb_cloud.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A normalized CrateDB Cloud user. */
        user: {
          /** The CrateDB Cloud user UID when returned. */
          uid: string | null;
          /** The user email address. */
          email: string | null;
          /** The user username. */
          username: string | null;
          /** The user display name. */
          name: string | null;
          /** The user's current organization ID when returned. */
          organizationId: string | null;
          /** The user status. */
          status: string | null;
          /** Whether the user is marked as a CrateDB Cloud superuser. */
          isSuperuser: boolean | null;
          /** The identity provider value when returned. */
          idp: string | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Return one CrateDB Cloud organization by ID. */
    "cratedb_cloud.get_organization": {
      input: {
        /**
         * The CrateDB Cloud organization ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized CrateDB Cloud organization. */
        organization: {
          /** The organization ID. */
          id: string;
          /** The organization name. */
          name: string | null;
          /** The organization plan type. */
          planType: string | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Return one CrateDB Cloud project by ID. */
    "cratedb_cloud.get_project": {
      input: {
        /**
         * The CrateDB Cloud project ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized CrateDB Cloud project. */
        project: {
          /** The project ID. */
          id: string;
          /** The project name. */
          name: string | null;
          /** The project region. */
          region: string | null;
          /** The organization ID that owns the project. */
          organizationId: string | null;
          /** The project backup location object when returned. */
          backupLocation: unknown;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List CrateDB Cloud clusters, optionally scoped to one organization or filtered by project. */
    "cratedb_cloud.list_clusters": {
      input: {
        /**
         * The CrateDB Cloud organization ID.
         * @minLength 1
         */
        organizationId?: string;
        /**
         * The CrateDB Cloud project ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** The clusters returned by CrateDB Cloud. */
        clusters: Array<{
          /** The cluster ID. */
          id: string;
          /** The cluster name. */
          name: string | null;
          /** The number of cluster nodes. */
          numNodes: number | null;
          /** The CrateDB version running on the cluster. */
          crateVersion: string | null;
          /** The project ID that owns the cluster. */
          projectId: string | null;
          /** The default database username when returned. */
          username: string | null;
          /** Whether the cluster is suspended. */
          suspended: boolean | null;
          /** The cluster fully qualified domain name. */
          fqdn: string | null;
          /** The cluster URL when returned. */
          url: string | null;
          /** The cluster release channel. */
          channel: string | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List CrateDB Cloud organizations visible to the connected API key. */
    "cratedb_cloud.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The organizations returned by CrateDB Cloud. */
        organizations: Array<{
          /** The organization ID. */
          id: string;
          /** The organization name. */
          name: string | null;
          /** The organization plan type. */
          planType: string | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List available CrateDB Cloud products, optionally filtered by product kind. */
    "cratedb_cloud.list_products": {
      input: {
        /**
         * Optional CrateDB Cloud product kind used to filter available products.
         * @minLength 1
         */
        kind?: string;
      };
      output: {
        /** The products returned by CrateDB Cloud. */
        products: Array<{
          /** The product kind. */
          kind: string | null;
          /** The product name. */
          name: string;
          /** The product tier. */
          tier: string | null;
          /** The product description. */
          description: string | null;
          /** The product scale summary. */
          scaleSummary: string | null;
          /** The CPU core count from the product specs. */
          vcpuCores: number | null;
          /** The RAM size in bytes from the product specs. */
          ramBytes: number | null;
          /** The minimum storage size in bytes. */
          minStorageBytes: number | null;
          /** The maximum storage size in bytes. */
          maxStorageBytes: number | null;
          /** The product price per DTU minute when returned. */
          pricePerDtuMinute: number | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List CrateDB Cloud projects, optionally scoped to one organization. */
    "cratedb_cloud.list_projects": {
      input: {
        /**
         * The CrateDB Cloud organization ID.
         * @minLength 1
         */
        organizationId?: string;
      };
      output: {
        /** The projects returned by CrateDB Cloud. */
        projects: Array<{
          /** The project ID. */
          id: string;
          /** The project name. */
          name: string | null;
          /** The project region. */
          region: string | null;
          /** The organization ID that owns the project. */
          organizationId: string | null;
          /** The project backup location object when returned. */
          backupLocation: unknown;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List CrateDB Cloud regions, optionally scoped to one organization. */
    "cratedb_cloud.list_regions": {
      input: {
        /**
         * The CrateDB Cloud organization ID.
         * @minLength 1
         */
        organizationId?: string;
      };
      output: {
        /** The regions returned by CrateDB Cloud. */
        regions: Array<{
          /** The region name. */
          name: string;
          /** The region description. */
          description: string | null;
          /** The organization ID for organization-specific regions. */
          organizationId: string | null;
          /** Whether this region is an edge region. */
          isEdgeRegion: boolean | null;
          /** The region status when returned. */
          status: string | null;
          /** The raw CrateDB Cloud object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
