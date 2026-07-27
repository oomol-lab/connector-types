import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current Octopus Deploy user for the connected API key. */
    "octopus_deploy.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A resource object returned by the Octopus Deploy API. */
        user: Record<string, unknown>;
        /** The raw Octopus Deploy current user response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one deployment inside an Octopus Deploy space by ID. */
    "octopus_deploy.get_deployment": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * The Octopus Deploy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A resource object returned by the Octopus Deploy API. */
        resource: Record<string, unknown>;
        /** The raw Octopus Deploy resource response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one environment inside an Octopus Deploy space by ID. */
    "octopus_deploy.get_environment": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * The Octopus Deploy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A resource object returned by the Octopus Deploy API. */
        resource: Record<string, unknown>;
        /** The raw Octopus Deploy resource response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one project inside an Octopus Deploy space by ID. */
    "octopus_deploy.get_project": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * The Octopus Deploy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A resource object returned by the Octopus Deploy API. */
        resource: Record<string, unknown>;
        /** The raw Octopus Deploy resource response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one release inside an Octopus Deploy space by ID. */
    "octopus_deploy.get_release": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * The Octopus Deploy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A resource object returned by the Octopus Deploy API. */
        resource: Record<string, unknown>;
        /** The raw Octopus Deploy resource response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one Octopus Deploy server task inside a space by ID. */
    "octopus_deploy.get_task": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * The Octopus Deploy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A resource object returned by the Octopus Deploy API. */
        resource: Record<string, unknown>;
        /** The raw Octopus Deploy resource response. */
        raw: Record<string, unknown>;
      };
    };
    /** List deployments inside an Octopus Deploy space with optional filters. */
    "octopus_deploy.list_deployments": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * Optional Octopus Deploy filter values.
         * @minItems 1
         */
        channels?: Array<string>;
        /**
         * Optional Octopus Deploy filter values.
         * @minItems 1
         */
        environments?: Array<string>;
        /**
         * Optional Octopus Deploy resource IDs used to filter the collection.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Optional partial name used by Octopus Deploy collection filters.
         * @minLength 1
         */
        partialName?: string;
        /**
         * Optional Octopus Deploy filter values.
         * @minItems 1
         */
        projects?: Array<string>;
        /**
         * Number of items to skip. Defaults to zero.
         * @minimum 0
         */
        skip?: number;
        /**
         * Number of items to take. Defaults to the Octopus API default.
         * @exclusiveMinimum 0
         */
        take?: number;
        /**
         * Optional Octopus Deploy task state filter.
         * @minLength 1
         */
        taskState?: string;
        /**
         * Optional Octopus Deploy filter values.
         * @minItems 1
         */
        tenants?: Array<string>;
      };
      output: {
        /** Resources returned by Octopus Deploy. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by an Octopus Deploy collection endpoint. */
        pagination: {
          /** Total matching resources reported by Octopus Deploy. */
          totalResults?: number;
          /** Number of items included per page. */
          itemsPerPage?: number;
          /** Number of pages reported by Octopus Deploy. */
          numberOfPages?: number;
          /** Last page number reported by Octopus Deploy. */
          lastPageNumber?: number;
          /** Pagination links returned by Octopus Deploy. */
          links?: Record<string, unknown>;
        };
        /** The raw Octopus Deploy collection response. */
        raw: Record<string, unknown>;
      };
    };
    /** List environments inside an Octopus Deploy space. */
    "octopus_deploy.list_environments": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * Optional Octopus Deploy resource IDs used to filter the collection.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Optional partial name used by Octopus Deploy collection filters.
         * @minLength 1
         */
        partialName?: string;
        /**
         * Number of items to skip. Defaults to zero.
         * @minimum 0
         */
        skip?: number;
        /**
         * Number of items to take. Defaults to the Octopus API default.
         * @exclusiveMinimum 0
         */
        take?: number;
      };
      output: {
        /** Resources returned by Octopus Deploy. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by an Octopus Deploy collection endpoint. */
        pagination: {
          /** Total matching resources reported by Octopus Deploy. */
          totalResults?: number;
          /** Number of items included per page. */
          itemsPerPage?: number;
          /** Number of pages reported by Octopus Deploy. */
          numberOfPages?: number;
          /** Last page number reported by Octopus Deploy. */
          lastPageNumber?: number;
          /** Pagination links returned by Octopus Deploy. */
          links?: Record<string, unknown>;
        };
        /** The raw Octopus Deploy collection response. */
        raw: Record<string, unknown>;
      };
    };
    /** List projects inside an Octopus Deploy space. */
    "octopus_deploy.list_projects": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * Optional Octopus Deploy resource IDs used to filter the collection.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Optional partial name used by Octopus Deploy collection filters.
         * @minLength 1
         */
        partialName?: string;
        /**
         * Number of items to skip. Defaults to zero.
         * @minimum 0
         */
        skip?: number;
        /**
         * Number of items to take. Defaults to the Octopus API default.
         * @exclusiveMinimum 0
         */
        take?: number;
      };
      output: {
        /** Resources returned by Octopus Deploy. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by an Octopus Deploy collection endpoint. */
        pagination: {
          /** Total matching resources reported by Octopus Deploy. */
          totalResults?: number;
          /** Number of items included per page. */
          itemsPerPage?: number;
          /** Number of pages reported by Octopus Deploy. */
          numberOfPages?: number;
          /** Last page number reported by Octopus Deploy. */
          lastPageNumber?: number;
          /** Pagination links returned by Octopus Deploy. */
          links?: Record<string, unknown>;
        };
        /** The raw Octopus Deploy collection response. */
        raw: Record<string, unknown>;
      };
    };
    /** List releases inside an Octopus Deploy space. */
    "octopus_deploy.list_releases": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /**
         * Number of items to skip. Defaults to zero.
         * @minimum 0
         */
        skip?: number;
        /**
         * Number of items to take. Defaults to the Octopus API default.
         * @exclusiveMinimum 0
         */
        take?: number;
      };
      output: {
        /** Resources returned by Octopus Deploy. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by an Octopus Deploy collection endpoint. */
        pagination: {
          /** Total matching resources reported by Octopus Deploy. */
          totalResults?: number;
          /** Number of items included per page. */
          itemsPerPage?: number;
          /** Number of pages reported by Octopus Deploy. */
          numberOfPages?: number;
          /** Last page number reported by Octopus Deploy. */
          lastPageNumber?: number;
          /** Pagination links returned by Octopus Deploy. */
          links?: Record<string, unknown>;
        };
        /** The raw Octopus Deploy collection response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Octopus Deploy spaces visible to the connected API key. */
    "octopus_deploy.list_spaces": {
      input: {
        /**
         * Optional Octopus Deploy resource IDs used to filter the collection.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Optional exact space name to match.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional partial name used by Octopus Deploy collection filters.
         * @minLength 1
         */
        partialName?: string;
        /**
         * Number of items to skip. Defaults to zero.
         * @minimum 0
         */
        skip?: number;
        /**
         * Number of items to take. Defaults to the Octopus API default.
         * @exclusiveMinimum 0
         */
        take?: number;
      };
      output: {
        /** Resources returned by Octopus Deploy. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by an Octopus Deploy collection endpoint. */
        pagination: {
          /** Total matching resources reported by Octopus Deploy. */
          totalResults?: number;
          /** Number of items included per page. */
          itemsPerPage?: number;
          /** Number of pages reported by Octopus Deploy. */
          numberOfPages?: number;
          /** Last page number reported by Octopus Deploy. */
          lastPageNumber?: number;
          /** Pagination links returned by Octopus Deploy. */
          links?: Record<string, unknown>;
        };
        /** The raw Octopus Deploy collection response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Octopus Deploy server tasks inside a space with optional filters. */
    "octopus_deploy.list_tasks": {
      input: {
        /**
         * The Octopus Deploy space identifier, ID, or slug.
         * @minLength 1
         */
        spaceIdentifier: string;
        /** Whether to return only active server tasks. */
        active?: boolean;
        /**
         * Optional task batch identifier filter.
         * @minLength 1
         */
        batch?: string;
        /**
         * Optional task description filter.
         * @minLength 1
         */
        description?: string;
        /**
         * Optional environment ID filter.
         * @minLength 1
         */
        environment?: string;
        /**
         * Optional lower bound for task completion time.
         * @format date-time
         */
        fromCompletedDate?: string;
        /**
         * Optional lower bound for task queue time.
         * @format date-time
         */
        fromQueueDate?: string;
        /**
         * Optional lower bound for task start time.
         * @format date-time
         */
        fromStartDate?: string;
        /** Whether to return tasks with pending interruptions. */
        hasPendingInterruptions?: boolean;
        /** Whether to return tasks with pending preconditions. */
        hasPendingPreconditions?: boolean;
        /** Whether to return tasks with warnings or errors. */
        hasWarningsOrErrors?: boolean;
        /**
         * Optional Octopus Deploy resource IDs used to filter the collection.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Optional Octopus Deploy filter values.
         * @minItems 1
         */
        name?: Array<string>;
        /**
         * Optional Octopus server node filter.
         * @minLength 1
         */
        node?: string;
        /**
         * Optional partial name used by Octopus Deploy collection filters.
         * @minLength 1
         */
        partialName?: string;
        /**
         * Optional project ID filter.
         * @minLength 1
         */
        project?: string;
        /**
         * Optional runbook ID filter.
         * @minLength 1
         */
        runbook?: string;
        /** Whether to return running tasks. */
        running?: boolean;
        /**
         * Number of items to skip. Defaults to zero.
         * @minimum 0
         */
        skip?: number;
        /**
         * Optional Octopus Deploy filter values.
         * @minItems 1
         */
        states?: Array<string>;
        /**
         * Number of items to take. Defaults to the Octopus API default.
         * @exclusiveMinimum 0
         */
        take?: number;
        /**
         * Optional tenant ID filter.
         * @minLength 1
         */
        tenant?: string;
        /**
         * Optional tenant tag filter.
         * @minLength 1
         */
        tenantTag?: string;
        /**
         * Optional upper bound for task completion time.
         * @format date-time
         */
        toCompletedDate?: string;
        /**
         * Optional upper bound for task queue time.
         * @format date-time
         */
        toQueueDate?: string;
        /**
         * Optional upper bound for task start time.
         * @format date-time
         */
        toStartDate?: string;
      };
      output: {
        /** Resources returned by Octopus Deploy. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by an Octopus Deploy collection endpoint. */
        pagination: {
          /** Total matching resources reported by Octopus Deploy. */
          totalResults?: number;
          /** Number of items included per page. */
          itemsPerPage?: number;
          /** Number of pages reported by Octopus Deploy. */
          numberOfPages?: number;
          /** Last page number reported by Octopus Deploy. */
          lastPageNumber?: number;
          /** Pagination links returned by Octopus Deploy. */
          links?: Record<string, unknown>;
        };
        /** The raw Octopus Deploy collection response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
