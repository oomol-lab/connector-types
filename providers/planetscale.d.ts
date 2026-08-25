import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a branch in a PlanetScale database. */
    "planetscale.create_branch": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        database: string;
        /**
         * PlanetScale branch name.
         * @minLength 1
         */
        name: string;
        /**
         * Parent branch name; the database default is used when omitted.
         * @minLength 1
         */
        parentBranch?: string;
        /**
         * Region slug; the database default is used when omitted.
         * @minLength 1
         */
        region?: string;
        /** Whether deletion protection is enabled for the new branch. */
        deletionProtected?: boolean;
      };
      output: {
        /**
         * Branch ID.
         * @minLength 1
         */
        id: string;
        /**
         * Branch name.
         * @minLength 1
         */
        name: string;
        /** Whether the branch is ready to serve queries. */
        ready: boolean;
        /** Whether this is a production branch. */
        production: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a MySQL or PostgreSQL database in a PlanetScale organization. */
    "planetscale.create_database": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        name: string;
        /** Database engine kind. */
        kind?: "mysql" | "postgresql";
        /**
         * Region slug; PlanetScale uses the organization default when omitted.
         * @minLength 1
         */
        region?: string;
        /**
         * PlanetScale cluster size name, such as PS_10.
         * @minLength 1
         */
        clusterSize: string;
        /** Number of replicas; use 0 for non-HA or 2 or more for HA. */
        replicas?: 0 | number;
        /**
         * PostgreSQL major version; ignored for MySQL databases.
         * @minLength 1
         */
        majorVersion?: string;
      };
      output: {
        /**
         * Database ID.
         * @minLength 1
         */
        id: string;
        /**
         * Database name.
         * @minLength 1
         */
        name: string;
        /** Whether the database is ready for use. */
        ready: boolean;
        /**
         * Default branch name.
         * @minLength 1
         */
        default_branch: string;
        [key: string]: unknown;
      };
    };
    /** Delete a PlanetScale database branch, optionally including descendants. */
    "planetscale.delete_branch": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        database: string;
        /**
         * PlanetScale branch name.
         * @minLength 1
         */
        branch: string;
        /** Whether to recursively delete descendant branches. */
        deleteDescendants?: boolean;
      };
      output: {
        /** Whether PlanetScale accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Delete a PlanetScale database. */
    "planetscale.delete_database": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        database: string;
      };
      output: {
        /** Whether PlanetScale accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Get one PlanetScale database branch. */
    "planetscale.get_branch": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        database: string;
        /**
         * PlanetScale branch name.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /**
         * Branch ID.
         * @minLength 1
         */
        id: string;
        /**
         * Branch name.
         * @minLength 1
         */
        name: string;
        /** Whether the branch is ready to serve queries. */
        ready: boolean;
        /** Whether this is a production branch. */
        production: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one PlanetScale database by organization and database name. */
    "planetscale.get_database": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        database: string;
      };
      output: {
        /**
         * Database ID.
         * @minLength 1
         */
        id: string;
        /**
         * Database name.
         * @minLength 1
         */
        name: string;
        /** Whether the database is ready for use. */
        ready: boolean;
        /**
         * Default branch name.
         * @minLength 1
         */
        default_branch: string;
        [key: string]: unknown;
      };
    };
    /** Get one PlanetScale organization by name. */
    "planetscale.get_organization": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
      };
      output: {
        /**
         * Organization ID.
         * @minLength 1
         */
        id: string;
        /**
         * Organization name slug.
         * @minLength 1
         */
        name: string;
        [key: string]: unknown;
      };
    };
    /** List branches in a PlanetScale database. */
    "planetscale.list_branches": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * PlanetScale database name slug.
         * @minLength 1
         */
        database: string;
        /**
         * Search term used to filter branches by name.
         * @minLength 1
         */
        query?: string;
        /** Filter branches by production status. */
        production?: boolean;
        /** Filter branches by safe-migrations status. */
        safeMigrations?: boolean;
        /** Branch creation-time order. */
        order?: "asc" | "desc";
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of resources per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Current page number. */
        current_page: number;
        /** Next page number, or null on the last page. */
        next_page: number | null;
        /** Total number of matching resources. */
        total_count: number;
        /** Total number of pages. */
        total_pages: number;
        /** Branches on this page. */
        data: Array<{
          /**
           * Branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Branch name.
           * @minLength 1
           */
          name: string;
          /** Whether the branch is ready to serve queries. */
          ready: boolean;
          /** Whether this is a production branch. */
          production: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List databases in a PlanetScale organization. */
    "planetscale.list_databases": {
      input: {
        /**
         * PlanetScale organization name slug.
         * @minLength 1
         */
        organization: string;
        /**
         * Search term used to filter databases by name.
         * @minLength 1
         */
        query?: string;
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of resources per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Current page number. */
        current_page: number;
        /** Next page number, or null on the last page. */
        next_page: number | null;
        /** Total number of matching resources. */
        total_count: number;
        /** Total number of pages. */
        total_pages: number;
        /** Databases on this page. */
        data: Array<{
          /**
           * Database ID.
           * @minLength 1
           */
          id: string;
          /**
           * Database name.
           * @minLength 1
           */
          name: string;
          /** Whether the database is ready for use. */
          ready: boolean;
          /**
           * Default branch name.
           * @minLength 1
           */
          default_branch: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List PlanetScale organizations available to the connected service token. */
    "planetscale.list_organizations": {
      input: {
        /**
         * Page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of resources per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /**
         * Response type; PlanetScale returns list for paginated responses.
         * @minLength 1
         */
        type: string;
        /** Current page number. */
        current_page: number;
        /** Maximum number of resources per page. */
        per_page: number;
        /** Next page number, or null on the last page. */
        next_page: number | null;
        /** Next page URL, or null on the last page. */
        next_page_url: string | null;
        /** Previous page number, or null on the first page. */
        prev_page: number | null;
        /** Previous page URL, or null on the first page. */
        prev_page_url: string | null;
        /** Organizations on this page. */
        data: Array<{
          /**
           * Organization ID.
           * @minLength 1
           */
          id: string;
          /**
           * Organization name slug.
           * @minLength 1
           */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
