import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Businessmap board in a workspace. */
    "businessmap.create_board": {
      input: {
        /**
         * The workspace ID to which the board belongs.
         * @minimum 1
         */
        workspace_id: number;
        /**
         * The name of the board.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The board description. */
        description?: string;
        /**
         * The board type. Businessmap uses 1 for Kanban board and 2 for AI Canvas.
         * @minimum 1
         * @maximum 2
         */
        type?: number;
      };
      output: {
        /** A raw Businessmap object returned by the API. */
        board: Record<string, unknown>;
      };
    };
    /** Create a Businessmap card using JSON card fields. */
    "businessmap.create_card": {
      input: {
        /**
         * The column ID where the card should be placed.
         * @minimum 1
         */
        column_id: number;
        /**
         * The lane ID where the card should be placed.
         * @minimum 1
         */
        lane_id: number;
        /**
         * The zero-based card position in the column.
         * @minimum 0
         */
        position?: number;
        /**
         * The timeline workflow track number.
         * @minimum 0
         */
        track?: number;
        /**
         * The planned start date in YYYY-MM-DD format.
         * @format date
         */
        planned_start_date?: string;
        /**
         * The planned end date in YYYY-MM-DD format.
         * @format date
         */
        planned_end_date?: string;
        /**
         * The actual start time as an ISO 8601 timestamp.
         * @format date-time
         */
        actual_start_time?: string;
        /**
         * The actual end time as an ISO 8601 timestamp.
         * @format date-time
         */
        actual_end_time?: string;
        /**
         * The card title.
         * @minLength 1
         */
        title: string;
        /** The card description. */
        description?: string;
        /**
         * The custom ID assigned to the card.
         * @minLength 1
         */
        custom_id?: string | null;
        /**
         * The user ID assigned as owner of the card.
         * @minimum 1
         */
        owner_user_id?: number | null;
        /**
         * The card type ID assigned to the card.
         * @minimum 1
         */
        type_id?: number | null;
        /** The size assigned to the card. */
        size?: number | null;
        /**
         * The Businessmap priority value.
         * @minimum 1
         * @maximum 250
         */
        priority?: number | null;
        /**
         * The card color in hexadecimal format.
         * @minLength 1
         */
        color?: string;
        /** The card deadline as accepted by Businessmap. */
        deadline?: string | null;
        /**
         * A caller-provided reference used to find the created card.
         * @minLength 1
         */
        reference?: string;
        /**
         * Tag IDs to add to the card.
         * @minItems 1
         */
        tag_ids_to_add?: Array<number>;
        /**
         * Tag IDs to remove from the card.
         * @minItems 1
         */
        tag_ids_to_remove?: Array<number>;
        /**
         * Milestone IDs to add to the card.
         * @minItems 1
         */
        milestone_ids_to_add?: Array<number>;
        /**
         * Milestone IDs to remove from the card.
         * @minItems 1
         */
        milestone_ids_to_remove?: Array<number>;
        /**
         * User IDs to add as co-owners.
         * @minItems 1
         */
        co_owner_ids_to_add?: Array<number>;
        /**
         * User IDs to remove as co-owners.
         * @minItems 1
         */
        co_owner_ids_to_remove?: Array<number>;
        /**
         * User IDs to add as watchers.
         * @minItems 1
         */
        watcher_ids_to_add?: Array<number>;
        /**
         * User IDs to remove as watchers.
         * @minItems 1
         */
        watcher_ids_to_remove?: Array<number>;
        /**
         * Set to 1 for the current user to watch the card.
         * @minimum 0
         * @maximum 1
         */
        watch?: number;
        /**
         * Set to 1 to archive the card.
         * @minimum 0
         * @maximum 1
         */
        is_archived?: number;
        /**
         * Set to 1 to discard the card.
         * @minimum 0
         * @maximum 1
         */
        is_discarded?: number;
        /** Reason for exceeding a Businessmap limit during the write. */
        exceeding_reason?: string | null;
        /**
         * Reporter user ID when creating or updating on behalf of someone else.
         * @minimum 1
         */
        reporter_user_id?: number | null;
        /**
         * Reporter email when creating or updating on behalf of someone else.
         * @format email
         */
        reporter_email?: string | null;
      };
      output: {
        /** A raw Businessmap object returned by the API. */
        card: Record<string, unknown>;
      };
    };
    /** Permanently delete a Businessmap card. */
    "businessmap.delete_card": {
      input: {
        /**
         * The Businessmap card ID.
         * @minimum 1
         */
        card_id: number;
        /** Reason for exceeding a Businessmap limit during deletion. */
        exceeding_reason?: string | null;
      };
      output: {
        /** Whether Businessmap accepted the card delete request. */
        deleted: boolean;
      };
    };
    /** Retrieve a Businessmap board by ID. */
    "businessmap.get_board": {
      input: {
        /**
         * The Businessmap board ID.
         * @minimum 1
         */
        board_id: number;
      };
      output: {
        /** A raw Businessmap object returned by the API. */
        board: Record<string, unknown>;
      };
    };
    /** Retrieve a Businessmap card by ID. */
    "businessmap.get_card": {
      input: {
        /**
         * The Businessmap card ID.
         * @minimum 1
         */
        card_id: number;
      };
      output: {
        /** A raw Businessmap object returned by the API. */
        card: Record<string, unknown>;
      };
    };
    /** List Businessmap boards visible to the connected API key. */
    "businessmap.list_boards": {
      input: {
        /**
         * Board IDs to include.
         * @minItems 1
         */
        board_ids?: Array<number>;
        /**
         * Workspace IDs whose boards should be returned.
         * @minItems 1
         */
        workspace_ids?: Array<number>;
        /**
         * Set to 1 for archived boards or 0 for active boards.
         * @minimum 0
         * @maximum 1
         */
        is_archived?: number;
        /**
         * Set to 1 to return boards assigned to the current user.
         * @minimum 0
         * @maximum 1
         */
        if_assigned?: number;
        /**
         * Board fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Board relationships to expand.
         * @minItems 1
         */
        expand?: Array<"workflows" | "settings" | "structure" | "effective_cycle_time_column_ids" | "data_fields">;
      };
      output: {
        /** Boards returned by Businessmap. */
        boards: Array<Record<string, unknown>>;
      };
    };
    /** List Businessmap cards with common board, workflow, state, and date filters. */
    "businessmap.list_cards": {
      input: {
        /**
         * Card IDs to include.
         * @minItems 1
         */
        card_ids?: Array<number>;
        /**
         * Board IDs whose cards should be returned.
         * @minItems 1
         */
        board_ids?: Array<number>;
        /**
         * Workflow IDs whose cards should be returned.
         * @minItems 1
         */
        workflow_ids?: Array<number>;
        /** The Businessmap card state. */
        state?: "active" | "archived" | "discarded";
        /**
         * Earliest card creation date-time in Businessmap format, such as YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        created_from?: string;
        /**
         * Earliest card creation date in YYYY-MM-DD format.
         * @format date
         */
        created_from_date?: string;
        /**
         * Latest card creation date-time in Businessmap format, such as YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        created_to?: string;
        /**
         * Latest card creation date in YYYY-MM-DD format.
         * @format date
         */
        created_to_date?: string;
        /**
         * Earliest card modification date-time in Businessmap format, such as YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        last_modified_from?: string;
        /**
         * Earliest card modification date in YYYY-MM-DD format.
         * @format date
         */
        last_modified_from_date?: string;
        /**
         * Latest card modification date-time in Businessmap format, such as YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        last_modified_to?: string;
        /**
         * Latest card modification date in YYYY-MM-DD format.
         * @format date
         */
        last_modified_to_date?: string;
        /**
         * Set to 1 to return blocked cards or 0 for unblocked cards.
         * @minimum 0
         * @maximum 1
         */
        is_blocked?: number;
        /**
         * Custom card IDs to include.
         * @minItems 1
         */
        custom_ids?: Array<string>;
        /**
         * Owner user IDs to include.
         * @minItems 1
         */
        owner_user_ids?: Array<number>;
        /**
         * Card type IDs to include.
         * @minItems 1
         */
        type_ids?: Array<number>;
        /**
         * Businessmap card priority values to include.
         * @minItems 1
         */
        priorities?: Array<number>;
        /**
         * Card fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Card relationships to expand in the response.
         * @minItems 1
         */
        expand?: Array<string>;
        /**
         * The Businessmap results page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of cards to return per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Cards returned by Businessmap. */
        cards: Array<Record<string, unknown>>;
        /** Businessmap pagination metadata. */
        pagination?: {
          /** The total number of pages in the paginated result set. */
          all_pages?: number;
          /** The current result page. */
          current_page?: number;
          /** The number of results per page. */
          results_per_page?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List Businessmap workspaces visible to the connected API key. */
    "businessmap.list_workspaces": {
      input: {
        /**
         * Workspace IDs to include.
         * @minItems 1
         */
        workspace_ids?: Array<number>;
        /**
         * Workspace type. Businessmap uses 1 for Team Workspace and 2 for Management Workspace.
         * @minimum 1
         * @maximum 2
         */
        type?: number;
        /**
         * Set to 1 for archived workspaces or 0 for active workspaces.
         * @minimum 0
         * @maximum 1
         */
        is_archived?: number;
        /**
         * Set to 1 to return workspaces where the current user is a workspace manager.
         * @minimum 0
         * @maximum 1
         */
        if_workspace_manager?: number;
        /**
         * Set to 1 to return workspaces where the current user is assigned to boards.
         * @minimum 0
         * @maximum 1
         */
        if_assigned_to_boards?: number;
        /**
         * Board archive filter used when expand includes boards.
         * @minimum 0
         * @maximum 1
         */
        board_filter_is_archived?: number;
        /**
         * Board assignment filter used when expand includes boards.
         * @minimum 0
         * @maximum 1
         */
        board_filter_if_assigned?: number;
        /**
         * Workspace fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Workspace relationships to expand.
         * @minItems 1
         */
        expand?: Array<"boards">;
      };
      output: {
        /** Workspaces returned by Businessmap. */
        workspaces: Array<Record<string, unknown>>;
      };
    };
    /** Update a Businessmap board name, description, or archive state. */
    "businessmap.update_board": {
      input: {
        /**
         * The Businessmap board ID.
         * @minimum 1
         */
        board_id: number;
        /**
         * The updated board name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** The updated board description. */
        description?: string;
        /**
         * Set to 1 to archive the board or 0 to unarchive it.
         * @minimum 0
         * @maximum 1
         */
        is_archived?: number;
      };
      output: {
        /** A raw Businessmap object returned by the API. */
        board: Record<string, unknown>;
      };
    };
    /** Update a Businessmap card using JSON card fields. */
    "businessmap.update_card": {
      input: {
        /**
         * The Businessmap card ID.
         * @minimum 1
         */
        card_id: number;
        /**
         * The column ID where the card should be placed.
         * @minimum 1
         */
        column_id?: number;
        /**
         * The lane ID where the card should be placed.
         * @minimum 1
         */
        lane_id?: number;
        /**
         * The zero-based card position in the column.
         * @minimum 0
         */
        position?: number;
        /**
         * The timeline workflow track number.
         * @minimum 0
         */
        track?: number;
        /**
         * The planned start date in YYYY-MM-DD format.
         * @format date
         */
        planned_start_date?: string;
        /**
         * The planned end date in YYYY-MM-DD format.
         * @format date
         */
        planned_end_date?: string;
        /**
         * The actual start time as an ISO 8601 timestamp.
         * @format date-time
         */
        actual_start_time?: string;
        /**
         * The actual end time as an ISO 8601 timestamp.
         * @format date-time
         */
        actual_end_time?: string;
        /**
         * The card title.
         * @minLength 1
         */
        title?: string;
        /** The card description. */
        description?: string;
        /**
         * The custom ID assigned to the card.
         * @minLength 1
         */
        custom_id?: string | null;
        /**
         * The user ID assigned as owner of the card.
         * @minimum 1
         */
        owner_user_id?: number | null;
        /**
         * The card type ID assigned to the card.
         * @minimum 1
         */
        type_id?: number | null;
        /** The size assigned to the card. */
        size?: number | null;
        /**
         * The Businessmap priority value.
         * @minimum 1
         * @maximum 250
         */
        priority?: number | null;
        /**
         * The card color in hexadecimal format.
         * @minLength 1
         */
        color?: string;
        /** The card deadline as accepted by Businessmap. */
        deadline?: string | null;
        /**
         * A caller-provided reference used to find the created card.
         * @minLength 1
         */
        reference?: string;
        /**
         * Tag IDs to add to the card.
         * @minItems 1
         */
        tag_ids_to_add?: Array<number>;
        /**
         * Tag IDs to remove from the card.
         * @minItems 1
         */
        tag_ids_to_remove?: Array<number>;
        /**
         * Milestone IDs to add to the card.
         * @minItems 1
         */
        milestone_ids_to_add?: Array<number>;
        /**
         * Milestone IDs to remove from the card.
         * @minItems 1
         */
        milestone_ids_to_remove?: Array<number>;
        /**
         * User IDs to add as co-owners.
         * @minItems 1
         */
        co_owner_ids_to_add?: Array<number>;
        /**
         * User IDs to remove as co-owners.
         * @minItems 1
         */
        co_owner_ids_to_remove?: Array<number>;
        /**
         * User IDs to add as watchers.
         * @minItems 1
         */
        watcher_ids_to_add?: Array<number>;
        /**
         * User IDs to remove as watchers.
         * @minItems 1
         */
        watcher_ids_to_remove?: Array<number>;
        /**
         * Set to 1 for the current user to watch the card.
         * @minimum 0
         * @maximum 1
         */
        watch?: number;
        /**
         * Set to 1 to archive the card.
         * @minimum 0
         * @maximum 1
         */
        is_archived?: number;
        /**
         * Set to 1 to discard the card.
         * @minimum 0
         * @maximum 1
         */
        is_discarded?: number;
        /** Reason for exceeding a Businessmap limit during the write. */
        exceeding_reason?: string | null;
        /**
         * Reporter user ID when creating or updating on behalf of someone else.
         * @minimum 1
         */
        reporter_user_id?: number | null;
        /**
         * Reporter email when creating or updating on behalf of someone else.
         * @format email
         */
        reporter_email?: string | null;
      };
      output: {
        /** A raw Businessmap object returned by the API. */
        card: Record<string, unknown>;
      };
    };
  }
}
