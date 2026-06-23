import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Supervisely user associated with the configured API token. */
    "supervisely.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Supervisely user object. */
        user: Record<string, unknown>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Supervisely dataset by ID. */
    "supervisely.get_dataset": {
      input: {
        /**
         * The Supervisely dataset ID to retrieve.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Supervisely dataset object. */
        dataset: Record<string, unknown>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Supervisely project by ID. */
    "supervisely.get_project": {
      input: {
        /**
         * The Supervisely project ID to retrieve.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Supervisely project object. */
        project: Record<string, unknown>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Supervisely datasets for a project. */
    "supervisely.list_datasets": {
      input: {
        /**
         * The one-based page number to request from Supervisely.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request from Supervisely.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * The Supervisely field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The sort direction for Supervisely list responses. */
        sortOrder?: "asc" | "desc";
        /** Supervisely filter conditions. */
        filter?: Array<{
          /**
           * The Supervisely field name to filter by.
           * @minLength 1
           */
          field?: string;
          /**
           * The Supervisely filter operator.
           * @minLength 1
           */
          operator?: string;
          /** The filter value sent to Supervisely. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        /** The Supervisely pagination mode to request. */
        paginationMode?: "page" | "token";
        /**
         * The cursor token used with token pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * The Supervisely project ID that owns the datasets.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** The total number of matching records when Supervisely returns it. */
        total: number | null;
        /** The number of records per page when Supervisely returns it. */
        perPage: number | null;
        /** The page count when Supervisely returns it. */
        pagesCount: number | null;
        /** A Supervisely dataset object. */
        items: Array<Record<string, unknown>>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Supervisely projects for a workspace. */
    "supervisely.list_projects": {
      input: {
        /**
         * The one-based page number to request from Supervisely.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request from Supervisely.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * The Supervisely field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The sort direction for Supervisely list responses. */
        sortOrder?: "asc" | "desc";
        /** Supervisely filter conditions. */
        filter?: Array<{
          /**
           * The Supervisely field name to filter by.
           * @minLength 1
           */
          field?: string;
          /**
           * The Supervisely filter operator.
           * @minLength 1
           */
          operator?: string;
          /** The filter value sent to Supervisely. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        /** The Supervisely pagination mode to request. */
        paginationMode?: "page" | "token";
        /**
         * The cursor token used with token pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * The Supervisely workspace ID that owns the projects.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
      };
      output: {
        /** The total number of matching records when Supervisely returns it. */
        total: number | null;
        /** The number of records per page when Supervisely returns it. */
        perPage: number | null;
        /** The page count when Supervisely returns it. */
        pagesCount: number | null;
        /** A Supervisely project object. */
        items: Array<Record<string, unknown>>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Supervisely teams accessible to the configured API token. */
    "supervisely.list_teams": {
      input: {
        /**
         * The one-based page number to request from Supervisely.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request from Supervisely.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * The Supervisely field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The sort direction for Supervisely list responses. */
        sortOrder?: "asc" | "desc";
        /** Supervisely filter conditions. */
        filter?: Array<{
          /**
           * The Supervisely field name to filter by.
           * @minLength 1
           */
          field?: string;
          /**
           * The Supervisely filter operator.
           * @minLength 1
           */
          operator?: string;
          /** The filter value sent to Supervisely. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        /** The Supervisely pagination mode to request. */
        paginationMode?: "page" | "token";
        /**
         * The cursor token used with token pagination.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The total number of matching records when Supervisely returns it. */
        total: number | null;
        /** The number of records per page when Supervisely returns it. */
        perPage: number | null;
        /** The page count when Supervisely returns it. */
        pagesCount: number | null;
        /** A Supervisely team object. */
        items: Array<Record<string, unknown>>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Supervisely workspaces for a team. */
    "supervisely.list_workspaces": {
      input: {
        /**
         * The one-based page number to request from Supervisely.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request from Supervisely.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * The Supervisely field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The sort direction for Supervisely list responses. */
        sortOrder?: "asc" | "desc";
        /** Supervisely filter conditions. */
        filter?: Array<{
          /**
           * The Supervisely field name to filter by.
           * @minLength 1
           */
          field?: string;
          /**
           * The Supervisely filter operator.
           * @minLength 1
           */
          operator?: string;
          /** The filter value sent to Supervisely. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        /** The Supervisely pagination mode to request. */
        paginationMode?: "page" | "token";
        /**
         * The cursor token used with token pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * The Supervisely team ID that owns the workspaces.
         * @exclusiveMinimum 0
         */
        teamId: number;
      };
      output: {
        /** The total number of matching records when Supervisely returns it. */
        total: number | null;
        /** The number of records per page when Supervisely returns it. */
        perPage: number | null;
        /** The page count when Supervisely returns it. */
        pagesCount: number | null;
        /** A Supervisely workspace object. */
        items: Array<Record<string, unknown>>;
        /** The raw Supervisely response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
