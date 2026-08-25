import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an item in an airfocus workspace. */
    "airfocus.create_item": {
      input: {
        /**
         * The airfocus workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The item name or title.
         * @minLength 1
         */
        name: string;
        /** Structured airfocus rich-text content using the provider's documented block format. */
        description?: Record<string, unknown>;
        /**
         * The status ID to assign to the item.
         * @format uuid
         */
        statusId?: string;
        /** Whether the item is archived. */
        archived?: boolean;
        /** User IDs assigned to the item. */
        assigneeUserIds?: Array<string>;
        /** User group IDs assigned to the item. */
        assigneeUserGroupIds?: Array<string>;
        /** Custom field values keyed by airfocus field ID. */
        fields?: Record<string, unknown>;
        /** The item order number used for sorting. */
        order?: number;
      };
      output: {
        /** The airfocus item returned by the API. */
        item: Record<string, unknown>;
      };
    };
    /** Permanently delete an item from an airfocus workspace. */
    "airfocus.delete_item": {
      input: {
        /**
         * The airfocus workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The airfocus item ID.
         * @format uuid
         */
        itemId: string;
      };
      output: {
        /** Whether the item was deleted successfully. */
        deleted: boolean;
        /**
         * The airfocus item ID.
         * @format uuid
         */
        itemId: string;
      };
    };
    /** Get one item from an airfocus workspace by ID. */
    "airfocus.get_item": {
      input: {
        /**
         * The airfocus workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The airfocus item ID.
         * @format uuid
         */
        itemId: string;
      };
      output: {
        /** The airfocus item returned by the API. */
        item: Record<string, unknown>;
      };
    };
    /** Get the profile associated with the connected airfocus personal access token. */
    "airfocus.get_profile": {
      input: Record<string, never>;
      output: {
        /** The airfocus user profile returned by the API. */
        profile: Record<string, unknown>;
      };
    };
    /** Get one airfocus workspace by ID. */
    "airfocus.get_workspace": {
      input: {
        /**
         * The airfocus workspace ID.
         * @format uuid
         */
        workspaceId: string;
      };
      output: {
        /** The airfocus workspace returned by the API. */
        workspace: Record<string, unknown>;
      };
    };
    /** Search items in an airfocus workspace with optional filter and sort criteria. */
    "airfocus.search_items": {
      input: {
        /**
         * The airfocus workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /** Whether to search archived items. */
        archived?: boolean;
        /** An airfocus search filter object following the provider's documented discriminator format. */
        filter?: Record<string, unknown>;
        /** An airfocus sort object following the provider's documented discriminator format. */
        sort?: Record<string, unknown>;
      };
      output: {
        /** Items matching the search query. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching items. */
        totalItems: number;
      };
    };
    /** Search airfocus workspaces with optional archived, filter, and sort criteria. */
    "airfocus.search_workspaces": {
      input: {
        /** Whether to search archived workspaces. */
        archived?: boolean;
        /** An airfocus search filter object following the provider's documented discriminator format. */
        filter?: Record<string, unknown>;
        /** An airfocus sort object following the provider's documented discriminator format. */
        sort?: Record<string, unknown>;
      };
      output: {
        /** Workspaces matching the search query. */
        workspaces: Array<Record<string, unknown>>;
        /** The total number of matching workspaces. */
        totalItems: number;
      };
    };
    /** Update the supplied fields of an existing airfocus item. */
    "airfocus.update_item": {
      input: {
        /**
         * The airfocus workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The airfocus item ID.
         * @format uuid
         */
        itemId: string;
        /**
         * The item name or title.
         * @minLength 1
         */
        name?: string;
        /** Structured airfocus rich-text content using the provider's documented block format. */
        description?: Record<string, unknown>;
        /**
         * The status ID to assign to the item.
         * @format uuid
         */
        statusId?: string;
        /** Whether the item is archived. */
        archived?: boolean;
        /** User IDs assigned to the item. */
        assigneeUserIds?: Array<string>;
        /** User group IDs assigned to the item. */
        assigneeUserGroupIds?: Array<string>;
        /** Custom field values keyed by airfocus field ID. */
        fields?: Record<string, unknown>;
        /** The item order number used for sorting. */
        order?: number;
      };
      output: {
        /** The airfocus item returned by the API. */
        item: Record<string, unknown>;
      };
    };
  }
}
