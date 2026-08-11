import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach one Faktoora document to an empty project. */
    "faktoora.attach_project_document": {
      input: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        projectId: string;
        /**
         * The Faktoora document UUID.
         * @format uuid
         */
        documentId: string;
        /** The type of Faktoora document to attach or detach. */
        documentType: "invoice" | "invoiceincoming" | "letter" | "offer" | "reminder" | "orderconfirmation";
      };
      output: {
        /**
         * The project-document link UUID.
         * @format uuid
         */
        id: string;
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        projectId: string;
        /**
         * The Faktoora document UUID.
         * @format uuid
         */
        documentId: string;
        /** The type of Faktoora document to attach or detach. */
        documentType: "invoice" | "invoiceincoming" | "letter" | "offer" | "reminder" | "orderconfirmation";
        [key: string]: unknown;
      };
    };
    /** Create a Faktoora project. */
    "faktoora.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description?: string | null;
        /** The place associated with the project. */
        place?: string | null;
        /** The estimated completion time returned by Faktoora. */
        eta?: string | null;
        /**
         * The estimated project duration in minutes.
         * @minimum 0
         */
        estMinutes?: number | null;
        /** The project currency code. */
        currency?: string | null;
        /**
         * The project status.
         * @minLength 1
         */
        status?: string | null;
        /**
         * The Faktoora customer UUID.
         * @format uuid
         */
        customerId?: string | null;
      };
      output: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        id: string;
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description?: string | null;
        /** The place associated with the project. */
        place?: string | null;
        /** The estimated completion time returned by Faktoora. */
        eta?: string | null;
        /**
         * The estimated project duration in minutes.
         * @minimum 0
         */
        estMinutes?: number | null;
        /** The project currency code. */
        currency?: string | null;
        /**
         * The project status.
         * @minLength 1
         */
        status?: string | null;
        /**
         * The Faktoora customer UUID.
         * @format uuid
         */
        customerId?: string | null;
        /** The customer linked to the project. */
        customer?: Record<string, unknown> | null;
        /** The document linked to the project. */
        document?: Record<string, unknown> | null;
        /** When the project was created. */
        createdAt?: string;
        /** When the project was last updated. */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a Faktoora project without deleting its attached document. */
    "faktoora.delete_project": {
      input: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        projectId: string;
      };
      output: {
        /** Whether Faktoora deleted the project. */
        succeed: boolean;
      };
    };
    /** Detach one Faktoora document from a project. */
    "faktoora.detach_project_document": {
      input: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        projectId: string;
        /**
         * The Faktoora document UUID.
         * @format uuid
         */
        documentId: string;
        /** The type of Faktoora document to attach or detach. */
        documentType: "invoice" | "invoiceincoming" | "letter" | "offer" | "reminder" | "orderconfirmation";
      };
      output: {
        /** Whether Faktoora detached the document. */
        succeed: boolean;
      };
    };
    /** Retrieve a Faktoora project by UUID. */
    "faktoora.get_project": {
      input: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        projectId: string;
      };
      output: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        id: string;
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description?: string | null;
        /** The place associated with the project. */
        place?: string | null;
        /** The estimated completion time returned by Faktoora. */
        eta?: string | null;
        /**
         * The estimated project duration in minutes.
         * @minimum 0
         */
        estMinutes?: number | null;
        /** The project currency code. */
        currency?: string | null;
        /**
         * The project status.
         * @minLength 1
         */
        status?: string | null;
        /**
         * The Faktoora customer UUID.
         * @format uuid
         */
        customerId?: string | null;
        /** The customer linked to the project. */
        customer?: Record<string, unknown> | null;
        /** The document linked to the project. */
        document?: Record<string, unknown> | null;
        /** When the project was created. */
        createdAt?: string;
        /** When the project was last updated. */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** List Faktoora projects with pagination, filtering, and sorting. */
    "faktoora.list_projects": {
      input: {
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of projects to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Text to match against project names and descriptions.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Project statuses to include.
         * @minItems 1
         */
        status?: Array<string>;
        /**
         * Customer UUIDs whose projects should be included.
         * @minItems 1
         */
        customerId?: Array<string>;
        /** The project field used to sort results. */
        sort?: "name" | "createdAt" | "updatedAt";
        /** The project sort direction. */
        order?: "asc" | "desc";
      };
      output: {
        /** The projects on the requested page. */
        data: Array<{
          /**
           * The Faktoora project UUID.
           * @format uuid
           */
          id: string;
          /**
           * The project name.
           * @minLength 1
           */
          name: string;
          /** The project description. */
          description?: string | null;
          /** The place associated with the project. */
          place?: string | null;
          /** The estimated completion time returned by Faktoora. */
          eta?: string | null;
          /**
           * The estimated project duration in minutes.
           * @minimum 0
           */
          estMinutes?: number | null;
          /** The project currency code. */
          currency?: string | null;
          /**
           * The project status.
           * @minLength 1
           */
          status?: string | null;
          /**
           * The Faktoora customer UUID.
           * @format uuid
           */
          customerId?: string | null;
          /** The customer linked to the project. */
          customer?: Record<string, unknown> | null;
          /** The document linked to the project. */
          document?: Record<string, unknown> | null;
          /** When the project was created. */
          createdAt?: string;
          /** When the project was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Faktoora. */
        meta: {
          /**
           * The current page number.
           * @exclusiveMinimum 0
           */
          page: number;
          /**
           * The number of projects requested per page.
           * @exclusiveMinimum 0
           */
          perPage: number;
          /**
           * The total number of matching projects.
           * @minimum 0
           */
          totalItems: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a Faktoora project. */
    "faktoora.update_project": {
      input: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        projectId: string;
        /**
         * The project name.
         * @minLength 1
         */
        name?: string;
        /** The project description. */
        description?: string | null;
        /** The place associated with the project. */
        place?: string | null;
        /** The estimated completion time returned by Faktoora. */
        eta?: string | null;
        /**
         * The estimated project duration in minutes.
         * @minimum 0
         */
        estMinutes?: number | null;
        /** The project currency code. */
        currency?: string | null;
        /**
         * The project status.
         * @minLength 1
         */
        status?: string | null;
        /**
         * The Faktoora customer UUID.
         * @format uuid
         */
        customerId?: string | null;
      };
      output: {
        /**
         * The Faktoora project UUID.
         * @format uuid
         */
        id: string;
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description?: string | null;
        /** The place associated with the project. */
        place?: string | null;
        /** The estimated completion time returned by Faktoora. */
        eta?: string | null;
        /**
         * The estimated project duration in minutes.
         * @minimum 0
         */
        estMinutes?: number | null;
        /** The project currency code. */
        currency?: string | null;
        /**
         * The project status.
         * @minLength 1
         */
        status?: string | null;
        /**
         * The Faktoora customer UUID.
         * @format uuid
         */
        customerId?: string | null;
        /** The customer linked to the project. */
        customer?: Record<string, unknown> | null;
        /** The document linked to the project. */
        document?: Record<string, unknown> | null;
        /** When the project was created. */
        createdAt?: string;
        /** When the project was last updated. */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
  }
}
