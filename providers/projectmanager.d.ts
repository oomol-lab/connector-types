import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a ProjectManager project by its unique identifier. */
    "projectmanager.get_project": {
      input: {
        /**
         * The unique identifier of the Project to retrieve.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** One ProjectManager object returned by the API. */
        item: Record<string, unknown>;
        /** The raw ProjectManager response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Query ProjectManager projects with optional OData parameters. */
    "projectmanager.list_projects": {
      input: {
        /** The number of records to return. */
        top?: number;
        /** The number of records to skip before returning records. */
        skip?: number;
        /**
         * The OData filter expression to apply.
         * @minLength 1
         */
        filter?: string;
        /**
         * The OData order expression to apply.
         * @minLength 1
         */
        orderby?: string;
        /**
         * The related data to include in the response.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** The objects returned by ProjectManager. */
        items: Array<Record<string, unknown>>;
        /** The raw ProjectManager response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Query ProjectManager tasks with optional OData parameters. */
    "projectmanager.list_tasks": {
      input: {
        /** The number of records to return. */
        top?: number;
        /** The number of records to skip before returning records. */
        skip?: number;
        /**
         * The OData filter expression to apply.
         * @minLength 1
         */
        filter?: string;
        /**
         * The OData order expression to apply.
         * @minLength 1
         */
        orderby?: string;
        /**
         * The related data to include in the response.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** The objects returned by ProjectManager. */
        items: Array<Record<string, unknown>>;
        /** The raw ProjectManager response payload. */
        raw?: Record<string, unknown>;
      };
    };
  }
}
