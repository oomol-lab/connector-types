import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return one MongoDB Atlas cluster by project ID and cluster name. */
    "mongo_db_atlas_administration.get_cluster": {
      input: {
        /**
         * The MongoDB Atlas project ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /**
         * The MongoDB Atlas cluster name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
      };
      output: {
        /** A normalized MongoDB Atlas cluster. */
        cluster: {
          /** The MongoDB Atlas cluster ID when returned. */
          id: string | null;
          /** The MongoDB Atlas cluster name. */
          name: string;
          /** The MongoDB Atlas project ID associated with the cluster. */
          groupId: string | null;
          /** The Atlas cluster type when returned. */
          clusterType: string | null;
          /** The MongoDB version reported for the cluster. */
          mongoDBVersion: string | null;
          /** The Atlas cluster state name. */
          stateName: string | null;
          /** Whether the cluster is paused when Atlas returned the field. */
          paused: boolean | null;
          /** The backing cloud provider name when returned. */
          providerName: string | null;
          /** The backing provider name for tenant clusters when returned. */
          backingProviderName: string | null;
          /** The Atlas instance size name when returned. */
          instanceSizeName: string | null;
          /** The primary region name when returned. */
          regionName: string | null;
          /** The raw MongoDB Atlas cluster object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Return one MongoDB Atlas project by project ID. */
    "mongo_db_atlas_administration.get_project": {
      input: {
        /**
         * The MongoDB Atlas project ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
      };
      output: {
        /** A normalized MongoDB Atlas project. */
        project: {
          /** The MongoDB Atlas project ID. */
          id: string;
          /** The MongoDB Atlas project name. */
          name: string | null;
          /** The organization ID that owns the project. */
          orgId: string | null;
          /** The project creation timestamp when Atlas returned it. */
          createdAt: string | null;
          /** The Atlas region usage restriction value when returned. */
          regionUsageRestrictions: string | null;
          /** The raw MongoDB Atlas project object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List MongoDB Atlas clusters in one project. */
    "mongo_db_atlas_administration.list_clusters": {
      input: {
        /**
         * The MongoDB Atlas project ID.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /**
         * The page number to request from MongoDB Atlas.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of items to request per page.
         * @minimum 1
         * @maximum 500
         */
        itemsPerPage?: number;
        /** Whether MongoDB Atlas should include the total item count when supported. */
        includeCount?: boolean;
      };
      output: {
        /** The MongoDB Atlas clusters returned for this page. */
        clusters: Array<{
          /** The MongoDB Atlas cluster ID when returned. */
          id: string | null;
          /** The MongoDB Atlas cluster name. */
          name: string;
          /** The MongoDB Atlas project ID associated with the cluster. */
          groupId: string | null;
          /** The Atlas cluster type when returned. */
          clusterType: string | null;
          /** The MongoDB version reported for the cluster. */
          mongoDBVersion: string | null;
          /** The Atlas cluster state name. */
          stateName: string | null;
          /** Whether the cluster is paused when Atlas returned the field. */
          paused: boolean | null;
          /** The backing cloud provider name when returned. */
          providerName: string | null;
          /** The backing provider name for tenant clusters when returned. */
          backingProviderName: string | null;
          /** The Atlas instance size name when returned. */
          instanceSizeName: string | null;
          /** The primary region name when returned. */
          regionName: string | null;
          /** The raw MongoDB Atlas cluster object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by MongoDB Atlas. */
        meta: {
          /** The HATEOAS links returned by MongoDB Atlas. */
          links: Array<Record<string, unknown>>;
          /** The total number of matching items when Atlas returned it. */
          totalCount: number | null;
        };
      };
    };
    /** List MongoDB Atlas projects visible to the connected API key. */
    "mongo_db_atlas_administration.list_projects": {
      input: {
        /**
         * The page number to request from MongoDB Atlas.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of items to request per page.
         * @minimum 1
         * @maximum 500
         */
        itemsPerPage?: number;
        /** Whether MongoDB Atlas should include the total item count when supported. */
        includeCount?: boolean;
      };
      output: {
        /** The MongoDB Atlas projects returned for this page. */
        projects: Array<{
          /** The MongoDB Atlas project ID. */
          id: string;
          /** The MongoDB Atlas project name. */
          name: string | null;
          /** The organization ID that owns the project. */
          orgId: string | null;
          /** The project creation timestamp when Atlas returned it. */
          createdAt: string | null;
          /** The Atlas region usage restriction value when returned. */
          regionUsageRestrictions: string | null;
          /** The raw MongoDB Atlas project object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by MongoDB Atlas. */
        meta: {
          /** The HATEOAS links returned by MongoDB Atlas. */
          links: Array<Record<string, unknown>>;
          /** The total number of matching items when Atlas returned it. */
          totalCount: number | null;
        };
      };
    };
  }
}
