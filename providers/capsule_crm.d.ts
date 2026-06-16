import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Capsule CRM opportunity. */
    "capsule_crm.create_opportunity": {
      input: {
        /** The Capsule CRM opportunity payload to send. */
        opportunity: Record<string, unknown>;
      };
      output: {
        /** The Capsule CRM opportunity payload. */
        opportunity: Record<string, unknown>;
      };
    };
    /** Create a Capsule CRM party. */
    "capsule_crm.create_party": {
      input: {
        /** The Capsule CRM party payload to send. */
        party: Record<string, unknown>;
      };
      output: {
        /** The Capsule CRM party payload. */
        party: Record<string, unknown>;
      };
    };
    /** Create a Capsule CRM task. */
    "capsule_crm.create_task": {
      input: {
        /** The Capsule CRM task payload to send. */
        task: Record<string, unknown>;
      };
      output: {
        /** The Capsule CRM task payload. */
        task: Record<string, unknown>;
      };
    };
    /** Delete a Capsule CRM opportunity. */
    "capsule_crm.delete_opportunity": {
      input: {
        /**
         * The unique Capsule CRM opportunity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Capsule CRM accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a Capsule CRM party. */
    "capsule_crm.delete_party": {
      input: {
        /**
         * The unique Capsule CRM party ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Capsule CRM accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a Capsule CRM task. */
    "capsule_crm.delete_task": {
      input: {
        /**
         * The unique Capsule CRM task ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Capsule CRM accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Read the Capsule CRM user associated with the access token. */
    "capsule_crm.get_current_user": {
      input: {
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"party">;
      };
      output: {
        /** The Capsule CRM user payload. */
        user: Record<string, unknown>;
      };
    };
    /** Read one Capsule CRM opportunity by ID. */
    "capsule_crm.get_opportunity": {
      input: {
        /**
         * The unique Capsule CRM opportunity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Capsule CRM opportunity payload. */
        opportunity: Record<string, unknown>;
      };
    };
    /** Read one Capsule CRM party by ID. */
    "capsule_crm.get_party": {
      input: {
        /**
         * The unique Capsule CRM party ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Capsule CRM party payload. */
        party: Record<string, unknown>;
      };
    };
    /** Read one Capsule CRM task by ID. */
    "capsule_crm.get_task": {
      input: {
        /**
         * The unique Capsule CRM task ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Capsule CRM task payload. */
        task: Record<string, unknown>;
      };
    };
    /** List Capsule CRM task categories. */
    "capsule_crm.list_categories": {
      input: {
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
      };
      output: {
        /** The Capsule CRM categories returned by the API. */
        categories: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List countries supported by Capsule CRM. */
    "capsule_crm.list_countries": {
      input: Record<string, never>;
      output: {
        /** The Capsule CRM countries returned by the API. */
        countries: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List currencies supported by Capsule CRM. */
    "capsule_crm.list_currencies": {
      input: Record<string, never>;
      output: {
        /** The Capsule CRM currencies returned by the API. */
        currencies: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Capsule CRM opportunities with pagination, optional change filtering, and embeds. */
    "capsule_crm.list_opportunities": {
      input: {
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /**
         * Only include records changed after this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"tags" | "fields" | "party" | "milestone" | "missingImportantFields">;
      };
      output: {
        /** The Capsule CRM opportunities returned by the API. */
        opportunities: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Capsule CRM parties with pagination, optional change filtering, and embeds. */
    "capsule_crm.list_parties": {
      input: {
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /**
         * Only include records changed after this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"tags" | "fields" | "organisation" | "missingImportantFields">;
      };
      output: {
        /** The Capsule CRM parties returned by the API. */
        parties: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List milestones for a Capsule CRM pipeline. */
    "capsule_crm.list_pipeline_milestones": {
      input: {
        /**
         * The unique Capsule CRM pipeline ID.
         * @exclusiveMinimum 0
         */
        pipelineId: number;
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
      };
      output: {
        /** The Capsule CRM milestones returned by the API. */
        milestones: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Capsule CRM sales pipelines. */
    "capsule_crm.list_pipelines": {
      input: {
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /** Whether to include deleted or archived pipelines. */
        includeDeleted?: boolean;
      };
      output: {
        /** The Capsule CRM pipelines returned by the API. */
        pipelines: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List stages for a Capsule CRM board. */
    "capsule_crm.list_stages": {
      input: {
        /**
         * The unique Capsule CRM board ID used to list only board stages.
         * @exclusiveMinimum 0
         */
        boardId?: number;
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /** The Capsule CRM stage status filter. */
        status?: "active" | "archived" | "all";
        /** Whether to include stages from archived boards. */
        includeOnDeletedBoard?: boolean;
      };
      output: {
        /** The Capsule CRM stages returned by the API. */
        stages: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Capsule CRM tasks with pagination, status filtering, and embeds. */
    "capsule_crm.list_tasks": {
      input: {
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /** Task statuses to include. */
        status?: Array<"open" | "completed" | "pending">;
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"party" | "opportunity" | "kase" | "owner" | "nextTask">;
      };
      output: {
        /** The Capsule CRM tasks returned by the API. */
        tasks: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Capsule CRM users. */
    "capsule_crm.list_users": {
      input: {
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"party">;
      };
      output: {
        /** The Capsule CRM users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** Search Capsule CRM opportunities by query text. */
    "capsule_crm.search_opportunities": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        q: string;
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"tags" | "fields" | "party" | "milestone" | "missingImportantFields">;
      };
      output: {
        /** The Capsule CRM opportunities returned by the API. */
        opportunities: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** Search Capsule CRM parties by query text. */
    "capsule_crm.search_parties": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        q: string;
        /**
         * The page number of results to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 50
         */
        perPage?: number;
        /** Additional related resources to embed in the Capsule CRM response. */
        embed?: Array<"tags" | "fields" | "organisation" | "missingImportantFields">;
      };
      output: {
        /** The Capsule CRM parties returned by the API. */
        parties: Array<Record<string, unknown>>;
        /** Pagination metadata from Capsule CRM response headers. */
        pagination: Record<string, unknown>;
      };
    };
    /** Update a Capsule CRM opportunity. */
    "capsule_crm.update_opportunity": {
      input: {
        /**
         * The unique Capsule CRM opportunity ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Capsule CRM opportunity payload to send. */
        opportunity: Record<string, unknown>;
      };
      output: {
        /** The Capsule CRM opportunity payload. */
        opportunity: Record<string, unknown>;
      };
    };
    /** Update a Capsule CRM party. */
    "capsule_crm.update_party": {
      input: {
        /**
         * The unique Capsule CRM party ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Capsule CRM party payload to send. */
        party: Record<string, unknown>;
      };
      output: {
        /** The Capsule CRM party payload. */
        party: Record<string, unknown>;
      };
    };
    /** Update a Capsule CRM task. */
    "capsule_crm.update_task": {
      input: {
        /**
         * The unique Capsule CRM task ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Capsule CRM task payload to send. */
        task: Record<string, unknown>;
      };
      output: {
        /** The Capsule CRM task payload. */
        task: Record<string, unknown>;
      };
    };
  }
}
