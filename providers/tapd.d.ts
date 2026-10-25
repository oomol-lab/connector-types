import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count TAPD bugs matching the supplied project and filters. */
    "tapd.count_bugs": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, title, status, severity, current_owner, iteration_id, module, priority_label, created, modified, custom_field_* and custom_plan_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
      };
      output: {
        /**
         * Number of matching records.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count TAPD iterations matching the supplied project and filters. */
    "tapd.count_iterations": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, name, status, creator, startdate, enddate, workitem_type_id, plan_app_id, created, modified and custom_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
      };
      output: {
        /**
         * Number of matching records.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count TAPD stories matching the supplied project and filters. */
    "tapd.count_stories": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, name, status, owner, iteration_id, priority_label, created, modified, custom_field_* and custom_plan_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
      };
      output: {
        /**
         * Number of matching records.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count TAPD tasks matching the supplied project and filters. */
    "tapd.count_tasks": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, name, status, owner, story_id, iteration_id, priority_label, created, modified and custom_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
      };
      output: {
        /**
         * Number of matching records.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count TAPD wikis matching the supplied project and filters. */
    "tapd.count_wikis": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including name, modifier, creator, note, view_count, created and modified; id is supported only by list_wikis. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
      };
      output: {
        /**
         * Number of matching records.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Retrieve a TAPD project by its workspace ID. */
    "tapd.get_project": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
      };
      output: {
        /** TAPD project, including its ID, name and provider-defined fields. */
        project: Record<string, unknown>;
      };
    };
    /** Query one page of TAPD bugs. Filter by id to retrieve specific records. Continue with the next page until an empty page is returned. */
    "tapd.list_bugs": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, title, status, severity, current_owner, iteration_id, module, priority_label, created, modified, custom_field_* and custom_plan_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Records per page. Defaults to 30; maximum 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Comma-separated upstream field names to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Upstream sort expression, for example created desc. Do not URL-encode.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Records with the TAPD entity wrapper removed. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Query one page of TAPD iterations. Filter by id to retrieve specific records. Continue with the next page until an empty page is returned. */
    "tapd.list_iterations": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, name, status, creator, startdate, enddate, workitem_type_id, plan_app_id, created, modified and custom_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Records per page. Defaults to 30; maximum 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Comma-separated upstream field names to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Upstream sort expression, for example created desc. Do not URL-encode.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Records with the TAPD entity wrapper removed. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List all projects in a TAPD company. This endpoint does not paginate. */
    "tapd.list_projects": {
      input: {
        /**
         * TAPD company ID.
         * @minLength 1
         */
        company_id: string;
        /** Project categories, comma-separated: organization, product, project, mini_project or program. */
        category?: string;
        /**
         * Set to 1 to include custom project fields.
         * @minimum 0
         * @maximum 1
         */
        with_extends?: number;
      };
      output: {
        /** Records with the TAPD entity wrapper removed. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Query one page of TAPD stories. Filter by id to retrieve specific records. Continue with the next page until an empty page is returned. */
    "tapd.list_stories": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, name, status, owner, iteration_id, priority_label, created, modified, custom_field_* and custom_plan_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Records per page. Defaults to 30; maximum 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Comma-separated upstream field names to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Upstream sort expression, for example created desc. Do not URL-encode.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Records with the TAPD entity wrapper removed. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Query one page of TAPD tasks. Filter by id to retrieve specific records. Continue with the next page until an empty page is returned. */
    "tapd.list_tasks": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including id, name, status, owner, story_id, iteration_id, priority_label, created, modified and custom_field_*. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Records per page. Defaults to 30; maximum 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Comma-separated upstream field names to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Upstream sort expression, for example created desc. Do not URL-encode.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Records with the TAPD entity wrapper removed. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Query one page of TAPD wikis. Filter by id to retrieve specific records. Continue with the next page until an empty page is returned. */
    "tapd.list_wikis": {
      input: {
        /**
         * TAPD project ID, supplied as a string to preserve precision.
         * @minLength 1
         */
        workspace_id: string;
        /** Official TAPD query filters, including name, modifier, creator, note, view_count, created and modified; id is supported only by list_wikis. Values use upstream query syntax, such as comma-separated IDs or >2026-01-01 timestamps. Do not pre-encode values. Pagination, fields, order, workspace_id and format cannot be set here. */
        filters?: Record<string, string>;
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Records per page. Defaults to 30; maximum 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Comma-separated upstream field names to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Upstream sort expression, for example created desc. Do not URL-encode.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Records with the TAPD entity wrapper removed. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
