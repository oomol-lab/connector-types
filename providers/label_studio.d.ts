import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Label Studio project with a title and optional labeling configuration. */
    "label_studio.create_project": {
      input: {
        /**
         * The project title.
         * @minLength 1
         */
        title: string;
        /**
         * The Label Studio labeling configuration XML.
         * @minLength 1
         */
        labelConfig?: string;
        /** The project description. */
        description?: string | null;
        /** The workspace ID for the new project. */
        workspace?: number;
        /** The project color value. */
        color?: string | null;
      };
      output: {
        /** A Label Studio project object. */
        project: {
          /** The Label Studio project ID. */
          id?: number;
          /** The project title. */
          title?: string;
          /** The project description. */
          description?: string | null;
          /** The project labeling configuration XML. */
          label_config?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Label Studio task from JSON task data. */
    "label_studio.create_task": {
      input: {
        /** The Label Studio project ID. */
        project?: number;
        /** The task data object formatted for the project label config. */
        data: Record<string, unknown>;
        /** Task metadata passed to ML backends. */
        meta?: Record<string, unknown> | null;
      };
      output: {
        /** A Label Studio task object. */
        task: {
          /** The Label Studio task ID. */
          id?: number;
          /** The Label Studio project ID. */
          project?: number;
          /** The task data object. */
          data?: Record<string, unknown>;
          /** The task metadata object. */
          meta?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Label Studio user associated with the connected API key. */
    "label_studio.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Label Studio user object. */
        user: {
          /** The user ID. */
          id?: number;
          /** The user name. */
          username?: string;
          /** The user email address. */
          email?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Label Studio project by ID. */
    "label_studio.get_project": {
      input: {
        /** The Label Studio project ID. */
        projectId: number;
        /**
         * The maximum number of project members to return.
         * @exclusiveMinimum 0
         */
        membersLimit?: number;
      };
      output: {
        /** A Label Studio project object. */
        project: {
          /** The Label Studio project ID. */
          id?: number;
          /** The project title. */
          title?: string;
          /** The project description. */
          description?: string | null;
          /** The project labeling configuration XML. */
          label_config?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Label Studio projects visible to the connected API key. */
    "label_studio.list_projects": {
      input: {
        /**
         * The page number within the paginated result set.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to return projects that belong to archived workspaces. */
        archived?: boolean;
        /** The pinned project filter. */
        filter?: "all" | "pinned_only" | "exclude_pinned";
        /** Comma-separated project IDs to include. */
        ids?: string;
        /** Comma-separated count fields to include in the response. */
        include?: string;
        /**
         * The maximum number of project members to return.
         * @exclusiveMinimum 0
         */
        membersLimit?: number;
        /** The project ordering expression. */
        ordering?: string;
        /** A search term for project title and description. */
        search?: string;
        /** The project state to filter by. */
        state?: string;
        /** A case-insensitive project title substring to filter by. */
        title?: string;
        /** The workspace ID to filter by. */
        workspace?: number;
      };
      output: {
        /** The total number of matching records when returned by Label Studio. */
        count: number;
        /** The URL of the next page when returned by Label Studio. */
        next: string | null;
        /** The URL of the previous page when returned by Label Studio. */
        previous: string | null;
        /** Projects returned by Label Studio. */
        projects: Array<{
          /** The Label Studio project ID. */
          id?: number;
          /** The project title. */
          title?: string;
          /** The project description. */
          description?: string | null;
          /** The project labeling configuration XML. */
          label_config?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Label Studio tasks, optionally filtered by project and Data Manager query. */
    "label_studio.list_tasks": {
      input: {
        /**
         * The page number within the paginated result set.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The task field detail mode. */
        fields?: "task_only" | "all";
        /** Comma-separated task fields to include. */
        include?: string;
        /** Whether to return only tasks that have annotations. */
        onlyAnnotated?: boolean;
        /** The Label Studio project ID. */
        project?: number;
        /** A JSON-encoded Label Studio Data Manager query. */
        query?: string;
        /** Whether to resolve task data URIs using cloud storage. */
        resolveUri?: boolean;
        /** Whether to return tasks for review. */
        review?: boolean;
        /** A JSON string of selected task IDs for review workflow. */
        selectedItems?: string;
        /** The Label Studio view ID. */
        view?: number;
      };
      output: {
        /** The total number of matching records when returned by Label Studio. */
        count: number;
        /** The URL of the next page when returned by Label Studio. */
        next: string | null;
        /** The URL of the previous page when returned by Label Studio. */
        previous: string | null;
        /** Tasks returned by Label Studio. */
        tasks: Array<{
          /** The Label Studio task ID. */
          id?: number;
          /** The Label Studio project ID. */
          project?: number;
          /** The task data object. */
          data?: Record<string, unknown>;
          /** The task metadata object. */
          meta?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
