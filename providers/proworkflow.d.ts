import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one ProWorkflow project by ID. */
    "proworkflow.get_project": {
      input: {
        /**
         * The ProWorkflow project ID.
         * @minimum 1
         */
        projectId: number;
        /**
         * Comma-separated fields to return, including explicitly named sub-resources when needed.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The response status returned by ProWorkflow. */
        status: string;
        /** A ProWorkflow resource returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** Get one ProWorkflow project item by ID. */
    "proworkflow.get_project_item": {
      input: {
        /**
         * The ProWorkflow project item ID.
         * @minimum 1
         */
        itemId: number;
      };
      output: {
        /** The response status returned by ProWorkflow. */
        status: string;
        /** A ProWorkflow resource returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** List and search ProWorkflow project items with optional pagination and sorting. */
    "proworkflow.list_project_items": {
      input: {
        /**
         * Comma-separated response fields to request from ProWorkflow.
         * @minLength 1
         */
        fields?: string;
        /**
         * A fuzzy search term.
         * @minLength 1
         */
        q?: string;
        /** The ProWorkflow work-state filter. */
        status?: "active" | "complete" | "deleted" | "all";
        /** The result sort direction. */
        sortOrder?: "asc" | "desc";
        /**
         * The one-based page number. Provide pageSize with this field.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of results per page. Provide pageNumber with this field.
         * @minimum 1
         */
        pageSize?: number;
        /** Whether ProWorkflow should calculate the total result count. */
        includeTotalRows?: boolean;
        /** The project item field used for sorting. */
        sortBy?: "id" | "name" | "code" | "priority" | "startdate" | "duedate" | "completedate" | "status" | "sortorder";
        /**
         * A project ID or comma-separated project IDs to filter by.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** The response status returned by ProWorkflow. */
        status: string;
        /** Resources returned by ProWorkflow. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by ProWorkflow. */
        meta: Record<string, unknown>;
      };
    };
    /** List and search ProWorkflow projects with optional pagination and sorting. */
    "proworkflow.list_projects": {
      input: {
        /**
         * Comma-separated response fields to request from ProWorkflow.
         * @minLength 1
         */
        fields?: string;
        /**
         * A fuzzy search term.
         * @minLength 1
         */
        q?: string;
        /** The ProWorkflow work-state filter. */
        status?: "active" | "complete" | "deleted" | "all";
        /** The result sort direction. */
        sortOrder?: "asc" | "desc";
        /**
         * The one-based page number. Provide pageSize with this field.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of results per page. Provide pageNumber with this field.
         * @minimum 1
         */
        pageSize?: number;
        /** Whether ProWorkflow should calculate the total result count. */
        includeTotalRows?: boolean;
        /** The project field used for sorting. */
        sortBy?: "id" | "number" | "title" | "startdate" | "duedate" | "completedate" | "companyname" | "categoryname" | "priority";
        /**
         * A company ID or comma-separated company IDs to filter by.
         * @minLength 1
         */
        companyId?: string;
      };
      output: {
        /** The response status returned by ProWorkflow. */
        status: string;
        /** Resources returned by ProWorkflow. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by ProWorkflow. */
        meta: Record<string, unknown>;
      };
    };
    /** Update selected fields on a ProWorkflow project. */
    "proworkflow.update_project": {
      input: {
        /**
         * The ProWorkflow project ID.
         * @minimum 1
         */
        projectId: number;
        /**
         * The new project title.
         * @minLength 1
         */
        title?: string;
        /**
         * The new project number or reference code.
         * @minLength 1
         */
        number?: string;
        /** The new project description. */
        description?: string;
        /**
         * The new project start date.
         * @format date
         */
        startDate?: string;
        /**
         * The new project due date.
         * @format date
         */
        dueDate?: string;
        /**
         * The new project completion date.
         * @format date
         */
        completedDate?: string;
        /**
         * The new project priority ID.
         * @minimum 1
         */
        priorityId?: number;
        /**
         * The contact ID of the new project manager.
         * @minimum 1
         */
        managerId?: number;
        /**
         * The client company ID for the project.
         * @minimum 1
         */
        companyId?: number;
        /** Whether project notifications are enabled. */
        notification?: boolean;
      };
      output: {
        /** The response status returned by ProWorkflow. */
        status: string;
        /** The update result message returned by ProWorkflow. */
        message?: string;
        /** Additional update result data returned by ProWorkflow. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update selected fields on a ProWorkflow project item. */
    "proworkflow.update_project_item": {
      input: {
        /**
         * The ProWorkflow project item ID.
         * @minimum 1
         */
        itemId: number;
        /**
         * The new project item name.
         * @minLength 1
         */
        name?: string;
        /**
         * The new project item code.
         * @minLength 1
         */
        code?: string;
        /** The new project item description. */
        description?: string;
        /**
         * The new project item start date.
         * @format date
         */
        startDate?: string;
        /**
         * The new project item due date.
         * @format date
         */
        dueDate?: string;
        /**
         * The new project item completion date.
         * @format date
         */
        completedDate?: string;
        /** The new project item work state. */
        status?: "active" | "complete";
        /**
         * The new project item priority ID.
         * @minimum 1
         */
        priorityId?: number;
        /**
         * The manually recorded completion percentage.
         * @minimum 0
         * @maximum 100
         */
        percentComplete?: number;
      };
      output: {
        /** The response status returned by ProWorkflow. */
        status: string;
        /** The update result message returned by ProWorkflow. */
        message?: string;
        /** Additional update result data returned by ProWorkflow. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
