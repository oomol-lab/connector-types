import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Paymo client from a JSON client payload. */
    "paymo.create_client": {
      input: {
        /** The Paymo client fields to create or update, such as name, email, phone, website, or address fields. */
        data: Record<string, unknown>;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        client: Record<string, unknown>;
      };
    };
    /** Create one Paymo project from a JSON project payload. */
    "paymo.create_project": {
      input: {
        /** The Paymo project fields to create or update, such as name, client_id, description, or workflow_id. */
        data: Record<string, unknown>;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        project: Record<string, unknown>;
      };
    };
    /** Create one Paymo task from a JSON task payload. */
    "paymo.create_task": {
      input: {
        /** The Paymo task fields to create or update, such as name, description, project_id, tasklist_id, users, complete, due_date, status_id, or priority. */
        data: Record<string, unknown>;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        task: Record<string, unknown>;
      };
    };
    /** Delete one Paymo client by ID. */
    "paymo.delete_client": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether the Paymo resource deletion request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete one Paymo project by ID. */
    "paymo.delete_project": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether the Paymo resource deletion request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete one Paymo task by ID. */
    "paymo.delete_task": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether the Paymo resource deletion request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get one Paymo client by ID. */
    "paymo.get_client": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The Paymo include expression for adding related content to the response.
         * @minLength 1
         */
        include?: string;
        /**
         * The Paymo partial_include expression for adding lightweight related content.
         * @minLength 1
         */
        partial_include?: string;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        client: Record<string, unknown>;
      };
    };
    /** Get the Paymo user associated with the current API key. */
    "paymo.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A raw Paymo resource object returned by the API. */
        user: Record<string, unknown>;
      };
    };
    /** Get one Paymo project by ID. */
    "paymo.get_project": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The Paymo include expression for adding related content to the response.
         * @minLength 1
         */
        include?: string;
        /**
         * The Paymo partial_include expression for adding lightweight related content.
         * @minLength 1
         */
        partial_include?: string;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        project: Record<string, unknown>;
      };
    };
    /** Get one Paymo task by ID. */
    "paymo.get_task": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The Paymo include expression for adding related content to the response.
         * @minLength 1
         */
        include?: string;
        /**
         * The Paymo partial_include expression for adding lightweight related content.
         * @minLength 1
         */
        partial_include?: string;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        task: Record<string, unknown>;
      };
    };
    /** List Paymo clients with optional where and include query parameters. */
    "paymo.list_clients": {
      input: {
        /**
         * The Paymo where filter expression to forward to the listing endpoint.
         * @minLength 1
         */
        where?: string;
        /**
         * The Paymo include expression for adding related content to the response.
         * @minLength 1
         */
        include?: string;
        /**
         * The Paymo partial_include expression for adding lightweight related content.
         * @minLength 1
         */
        partial_include?: string;
      };
      output: {
        /** The Paymo clients returned for this request. */
        clients: Array<Record<string, unknown>>;
      };
    };
    /** List Paymo projects with optional where and include query parameters. */
    "paymo.list_projects": {
      input: {
        /**
         * The Paymo where filter expression to forward to the listing endpoint.
         * @minLength 1
         */
        where?: string;
        /**
         * The Paymo include expression for adding related content to the response.
         * @minLength 1
         */
        include?: string;
        /**
         * The Paymo partial_include expression for adding lightweight related content.
         * @minLength 1
         */
        partial_include?: string;
      };
      output: {
        /** The Paymo projects returned for this request. */
        projects: Array<Record<string, unknown>>;
      };
    };
    /** List Paymo tasks with optional where and include query parameters. */
    "paymo.list_tasks": {
      input: {
        /**
         * The Paymo where filter expression to forward to the listing endpoint.
         * @minLength 1
         */
        where?: string;
        /**
         * The Paymo include expression for adding related content to the response.
         * @minLength 1
         */
        include?: string;
        /**
         * The Paymo partial_include expression for adding lightweight related content.
         * @minLength 1
         */
        partial_include?: string;
      };
      output: {
        /** The Paymo tasks returned for this request. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** Update one Paymo client by ID from a JSON client payload. */
    "paymo.update_client": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Paymo client fields to create or update, such as name, email, phone, website, or address fields. */
        data: Record<string, unknown>;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        client: Record<string, unknown>;
      };
    };
    /** Update one Paymo project by ID from a JSON project payload. */
    "paymo.update_project": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Paymo project fields to create or update, such as name, client_id, description, or workflow_id. */
        data: Record<string, unknown>;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        project: Record<string, unknown>;
      };
    };
    /** Update one Paymo task by ID from a JSON task payload. */
    "paymo.update_task": {
      input: {
        /**
         * The Paymo numeric resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Paymo task fields to create or update, such as name, description, project_id, tasklist_id, users, complete, due_date, status_id, or priority. */
        data: Record<string, unknown>;
      };
      output: {
        /** A raw Paymo resource object returned by the API. */
        task: Record<string, unknown>;
      };
    };
  }
}
