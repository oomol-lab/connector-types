import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Kaggle competitions with optional group, category, search, and pagination filters. */
    "kaggle.list_competitions": {
      input: {
        /** Competition group filter. */
        group?: "general" | "entered" | "inClass";
        /** Competition category filter. */
        category?: "all" | "featured" | "research" | "recruitment" | "gettingStarted" | "masters" | "playground";
        /** Competition sort order. */
        sortBy?: "grouped" | "prize" | "earliestDeadline" | "latestDeadline" | "numberOfTeams" | "recentlyCreated";
        /**
         * One-based page number for Kaggle list endpoints.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of Kaggle records to request for a page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Kaggle page token from a previous response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * Search query used to filter Kaggle resources.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Competition objects returned by Kaggle. */
        competitions: Array<Record<string, unknown>>;
        /**
         * Token for retrieving the next Kaggle page when one is returned.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
    /** List Kaggle datasets with optional search, ownership, type, license, tag, and size filters. */
    "kaggle.list_datasets": {
      input: {
        /** Dataset sort order. */
        sortBy?: "hottest" | "votes" | "updated" | "active" | "published";
        /** Dataset file type filter. */
        fileType?: "all" | "csv" | "sqlite" | "json" | "bigQuery" | "parquet";
        /** Dataset license family filter. */
        license?: "all" | "cc" | "gpl" | "odb" | "other";
        /**
         * Tag identifiers to filter Kaggle datasets by.
         * @minItems 1
         */
        tagIds?: Array<string>;
        /**
         * Search query used to filter Kaggle resources.
         * @minLength 1
         */
        search?: string;
        /** Whether to return only datasets owned by the connected Kaggle account. */
        mine?: boolean;
        /**
         * Kaggle username or organization slug to filter datasets by.
         * @minLength 1
         */
        user?: string;
        /**
         * One-based page number for Kaggle list endpoints.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum dataset size in bytes.
         * @minimum 0
         */
        maxSize?: number;
        /**
         * Minimum dataset size in bytes.
         * @minimum 0
         */
        minSize?: number;
      };
      output: {
        /** Dataset objects returned by Kaggle. */
        datasets: Array<Record<string, unknown>>;
        /**
         * Token for retrieving the next Kaggle page when one is returned.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
    /** List Kaggle notebooks and scripts with optional search, source, language, type, and pagination filters. */
    "kaggle.list_kernels": {
      input: {
        /** Whether to return only kernels owned by the connected Kaggle account. */
        mine?: boolean;
        /**
         * One-based page number for Kaggle list endpoints.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of Kaggle records to request for a page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Search query used to filter Kaggle resources.
         * @minLength 1
         */
        search?: string;
        /**
         * Parent kernel ref in owner/kernel-slug format.
         * @minLength 1
         */
        parent?: string;
        /**
         * Competition slug used to filter kernels.
         * @minLength 1
         */
        competition?: string;
        /**
         * Dataset ref in owner/dataset-slug format.
         * @minLength 1
         */
        dataset?: string;
        /**
         * Kaggle username to filter kernels by.
         * @minLength 1
         */
        user?: string;
        /** Kernel language filter. */
        language?: "all" | "python" | "r" | "sqlite" | "julia";
        /** Kernel type filter. */
        kernelType?: "all" | "script" | "notebook";
        /** Kernel output type filter. */
        outputType?: "all" | "visualizations" | "data";
        /** Kernel sort order. */
        sortBy?: "hotness" | "commentCount" | "dateCreated" | "dateRun" | "relevance" | "scoreAscending" | "scoreDescending" | "viewCount" | "voteCount";
      };
      output: {
        /** Kernel objects returned by Kaggle. */
        kernels: Array<Record<string, unknown>>;
        /**
         * Token for retrieving the next Kaggle page when one is returned.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
    /** List Kaggle models with optional owner, search, sort, and pagination filters. */
    "kaggle.list_models": {
      input: {
        /**
         * Kaggle username or organization slug to filter models by.
         * @minLength 1
         */
        owner?: string;
        /** Model sort order. */
        sortBy?: "hotness" | "downloadCount" | "voteCount" | "notebookCount" | "createTime";
        /**
         * Search query used to filter Kaggle resources.
         * @minLength 1
         */
        search?: string;
        /**
         * Number of Kaggle records to request for a page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Kaggle page token from a previous response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Model objects returned by Kaggle. */
        models: Array<Record<string, unknown>>;
        /**
         * Token for retrieving the next Kaggle page when one is returned.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
  }
}
