import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Plane work item in a project. */
    "plane.create_work_item": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /** Plane user IDs assigned to the work item. */
        assignees?: Array<string>;
        /** Plane label IDs attached to the work item. */
        labels?: Array<string>;
        /**
         * Plane work item type ID.
         * @minLength 1
         */
        type_id?: string;
        /**
         * Parent work item ID.
         * @minLength 1
         */
        parent?: string;
        /**
         * Deletion timestamp.
         * @minLength 1
         */
        deleted_at?: string;
        /** Story point value. */
        point?: number;
        /**
         * Work item title.
         * @minLength 1
         */
        name: string;
        /** Work item description in HTML. */
        description_html?: string;
        /** Plain-text work item description. */
        description_stripped?: string;
        /** Work item priority. */
        priority?: "urgent" | "high" | "medium" | "low" | "none";
        /**
         * Work item start date.
         * @minLength 1
         */
        start_date?: string;
        /**
         * Work item target date.
         * @minLength 1
         */
        target_date?: string;
        /** Plane sequence ID. */
        sequence_id?: number;
        /** Sort order value. */
        sort_order?: number;
        /**
         * Completion timestamp.
         * @minLength 1
         */
        completed_at?: string;
        /**
         * Archive timestamp.
         * @minLength 1
         */
        archived_at?: string;
        /**
         * Last activity timestamp.
         * @minLength 1
         */
        last_activity_at?: string;
        /** Whether the work item is a draft. */
        is_draft?: boolean;
        /**
         * External system source name.
         * @minLength 1
         */
        external_source?: string;
        /**
         * External system identifier.
         * @minLength 1
         */
        external_id?: string;
        /**
         * Plane user ID that created the work item.
         * @minLength 1
         */
        created_by?: string;
        /**
         * Plane state ID.
         * @minLength 1
         */
        state?: string;
        /**
         * Plane estimate point ID.
         * @minLength 1
         */
        estimate_point?: string;
        /**
         * Plane work item type.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** Raw Plane resource object returned by the API. Top-level wrapper fields are normalized by the connector. */
        item: Record<string, unknown>;
      };
    };
    /** Delete a Plane work item by ID. */
    "plane.delete_work_item": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Plane resource ID.
         * @minLength 1
         */
        work_item_id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Retrieve the authenticated Plane user's profile. */
    "plane.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Raw Plane resource object returned by the API. Top-level wrapper fields are normalized by the connector. */
        item: Record<string, unknown>;
      };
    };
    /** Retrieve a Plane project by ID. */
    "plane.get_project": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
      };
      output: {
        /** Raw Plane resource object returned by the API. Top-level wrapper fields are normalized by the connector. */
        item: Record<string, unknown>;
      };
    };
    /** Retrieve a Plane work item by ID. */
    "plane.get_work_item": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Plane resource ID.
         * @minLength 1
         */
        work_item_id: string;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated related fields to expand in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Field to order by. Prefix with '-' for descending order.
         * @minLength 1
         */
        order_by?: string;
        /**
         * External system identifier for lookup validation.
         * @minLength 1
         */
        external_id?: string;
        /**
         * External system source name for lookup validation.
         * @minLength 1
         */
        external_source?: string;
      };
      output: {
        /** Raw Plane resource object returned by the API. Top-level wrapper fields are normalized by the connector. */
        item: Record<string, unknown>;
      };
    };
    /** List labels for a Plane project. */
    "plane.list_labels": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Pagination cursor returned by a previous Plane list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of results to request per page. Plane allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated related fields to expand in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Field to order by. Prefix with '-' for descending order.
         * @minLength 1
         */
        order_by?: string;
      };
      output: {
        /** Cursor for the next page. */
        next_cursor?: string;
        /** Cursor for the previous page. */
        prev_cursor?: string;
        /** Whether another page exists after this response. */
        next_page_results?: boolean;
        /** Whether another page exists before this response. */
        prev_page_results?: boolean;
        /** Number of resources in this page. */
        count?: number;
        /** Estimated total page count. */
        total_pages?: number;
        /** Estimated total resource count. */
        total_results?: number;
        /** Plane resources returned in this page. */
        results: Array<Record<string, unknown>>;
        /** Grouping field applied by Plane. */
        grouped_by?: string;
        /** Secondary grouping field applied by Plane. */
        sub_grouped_by?: string;
        /** Total count returned by Plane when available. */
        total_count?: number;
        /** Additional statistics returned by Plane when available. */
        extra_stats?: Record<string, unknown>;
      };
    };
    /** List members of a Plane project. */
    "plane.list_project_members": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Pagination cursor returned by a previous Plane list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of results to request per page. Plane allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated related fields to expand in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Field to order by. Prefix with '-' for descending order.
         * @minLength 1
         */
        order_by?: string;
      };
      output: {
        /** Plane project members. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** List Plane projects in a workspace. */
    "plane.list_projects": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Pagination cursor returned by a previous Plane list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of results to request per page. Plane allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated related fields to expand in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Field to order by. Prefix with '-' for descending order.
         * @minLength 1
         */
        order_by?: string;
      };
      output: {
        /** Cursor for the next page. */
        next_cursor?: string;
        /** Cursor for the previous page. */
        prev_cursor?: string;
        /** Whether another page exists after this response. */
        next_page_results?: boolean;
        /** Whether another page exists before this response. */
        prev_page_results?: boolean;
        /** Number of resources in this page. */
        count?: number;
        /** Estimated total page count. */
        total_pages?: number;
        /** Estimated total resource count. */
        total_results?: number;
        /** Plane resources returned in this page. */
        results: Array<Record<string, unknown>>;
        /** Grouping field applied by Plane. */
        grouped_by?: string;
        /** Secondary grouping field applied by Plane. */
        sub_grouped_by?: string;
        /** Total count returned by Plane when available. */
        total_count?: number;
        /** Additional statistics returned by Plane when available. */
        extra_stats?: Record<string, unknown>;
      };
    };
    /** List workflow states for a Plane project. */
    "plane.list_states": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Pagination cursor returned by a previous Plane list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of results to request per page. Plane allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated related fields to expand in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Field to order by. Prefix with '-' for descending order.
         * @minLength 1
         */
        order_by?: string;
      };
      output: {
        /** Cursor for the next page. */
        next_cursor?: string;
        /** Cursor for the previous page. */
        prev_cursor?: string;
        /** Whether another page exists after this response. */
        next_page_results?: boolean;
        /** Whether another page exists before this response. */
        prev_page_results?: boolean;
        /** Number of resources in this page. */
        count?: number;
        /** Estimated total page count. */
        total_pages?: number;
        /** Estimated total resource count. */
        total_results?: number;
        /** Plane resources returned in this page. */
        results: Array<Record<string, unknown>>;
        /** Grouping field applied by Plane. */
        grouped_by?: string;
        /** Secondary grouping field applied by Plane. */
        sub_grouped_by?: string;
        /** Total count returned by Plane when available. */
        total_count?: number;
        /** Additional statistics returned by Plane when available. */
        extra_stats?: Record<string, unknown>;
      };
    };
    /** List Plane work items in a project with pagination and optional filters. */
    "plane.list_work_items": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * External system identifier for filtering work items.
         * @minLength 1
         */
        external_id?: string;
        /**
         * External system source name for filtering work items.
         * @minLength 1
         */
        external_source?: string;
        /**
         * Pagination cursor returned by a previous Plane list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of results to request per page. Plane allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated related fields to expand in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Field to order by. Prefix with '-' for descending order.
         * @minLength 1
         */
        order_by?: string;
      };
      output: {
        /** Cursor for the next page. */
        next_cursor?: string;
        /** Cursor for the previous page. */
        prev_cursor?: string;
        /** Whether another page exists after this response. */
        next_page_results?: boolean;
        /** Whether another page exists before this response. */
        prev_page_results?: boolean;
        /** Number of resources in this page. */
        count?: number;
        /** Estimated total page count. */
        total_pages?: number;
        /** Estimated total resource count. */
        total_results?: number;
        /** Plane resources returned in this page. */
        results: Array<Record<string, unknown>>;
        /** Grouping field applied by Plane. */
        grouped_by?: string;
        /** Secondary grouping field applied by Plane. */
        sub_grouped_by?: string;
        /** Total count returned by Plane when available. */
        total_count?: number;
        /** Additional statistics returned by Plane when available. */
        extra_stats?: Record<string, unknown>;
      };
    };
    /** Update a Plane work item by ID. */
    "plane.update_work_item": {
      input: {
        /**
         * Plane workspace slug, such as my-team from https://app.plane.so/my-team/projects/.
         * @minLength 1
         */
        workspace_slug: string;
        /**
         * Plane project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Plane resource ID.
         * @minLength 1
         */
        work_item_id: string;
        /** Plane user IDs assigned to the work item. */
        assignees?: Array<string>;
        /** Plane label IDs attached to the work item. */
        labels?: Array<string>;
        /**
         * Plane work item type ID.
         * @minLength 1
         */
        type_id?: string;
        /**
         * Parent work item ID.
         * @minLength 1
         */
        parent?: string;
        /**
         * Deletion timestamp.
         * @minLength 1
         */
        deleted_at?: string;
        /** Story point value. */
        point?: number;
        /**
         * Work item title.
         * @minLength 1
         */
        name?: string;
        /** Work item description in HTML. */
        description_html?: string;
        /** Plain-text work item description. */
        description_stripped?: string;
        /** Work item priority. */
        priority?: "urgent" | "high" | "medium" | "low" | "none";
        /**
         * Work item start date.
         * @minLength 1
         */
        start_date?: string;
        /**
         * Work item target date.
         * @minLength 1
         */
        target_date?: string;
        /** Plane sequence ID. */
        sequence_id?: number;
        /** Sort order value. */
        sort_order?: number;
        /**
         * Completion timestamp.
         * @minLength 1
         */
        completed_at?: string;
        /**
         * Archive timestamp.
         * @minLength 1
         */
        archived_at?: string;
        /**
         * Last activity timestamp.
         * @minLength 1
         */
        last_activity_at?: string;
        /** Whether the work item is a draft. */
        is_draft?: boolean;
        /**
         * External system source name.
         * @minLength 1
         */
        external_source?: string;
        /**
         * External system identifier.
         * @minLength 1
         */
        external_id?: string;
        /**
         * Plane user ID that created the work item.
         * @minLength 1
         */
        created_by?: string;
        /**
         * Plane state ID.
         * @minLength 1
         */
        state?: string;
        /**
         * Plane estimate point ID.
         * @minLength 1
         */
        estimate_point?: string;
        /**
         * Plane work item type.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** Raw Plane resource object returned by the API. Top-level wrapper fields are normalized by the connector. */
        item: Record<string, unknown>;
      };
    };
  }
}
