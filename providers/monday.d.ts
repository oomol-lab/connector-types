import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Activate a monday Workform so it starts accepting submissions. */
    "monday.activate_form": {
      input: {
        /**
         * The unique token that identifies the form.
         * @minLength 1
         */
        formToken: string;
      };
      output: {
        /** The form token that was activated. */
        formToken: string;
        /** Whether the form is now active. */
        active: boolean;
      };
    };
    /** Add monday teams to a board as subscribers or owners. */
    "monday.add_teams_to_board": {
      input: {
        /** The board that should receive the teams. */
        board_id: string | number;
        /**
         * The membership role that monday should assign on the board.
         * @default "subscriber"
         */
        kind?: "owner" | "subscriber";
        /**
         * The teams that should be added to the board.
         * @minItems 1
         */
        team_ids: Array<string | number | -1>;
      };
      output: {
        /** The teams returned by monday after the mutation. */
        teams: Array<{
          /** The monday team identifier. */
          id: string;
          /** The monday team name. */
          name?: string;
          /** The monday team avatar URL. */
          picture_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Add monday users to a board as subscribers or owners. */
    "monday.add_users_to_board": {
      input: {
        /** The board that should receive the users. */
        board_id: string | number;
        /**
         * The membership role that monday should assign on the board.
         * @default "subscriber"
         */
        kind?: "owner" | "subscriber";
        /**
         * The users that should be added to the board.
         * @minItems 1
         */
        user_ids: Array<string | number>;
      };
      output: {
        /** The users returned by monday after the mutation. */
        users: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Archive a monday board. */
    "monday.archive_board": {
      input: {
        /** The board identifier to archive. */
        board_id: string | number;
      };
      output: {
        /** The archived monday board identifier. */
        archivedBoardId: string;
      };
    };
    /** Archive a monday item. */
    "monday.archive_item": {
      input: {
        /** The monday item that should be archived. */
        item_id: string | number;
      };
      output: {
        /** The archived monday item identifier. */
        archivedItemId: string;
      };
    };
    /** Assign users to a monday department on an enterprise account. */
    "monday.assign_department_members": {
      input: {
        /** The department that should receive the members. */
        department_id: string | number;
        /**
         * The users that should be assigned to the department.
         * @minItems 1
         */
        user_ids: Array<string | number>;
      };
      output: {
        /** The users that monday assigned successfully. */
        successfulUsers: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The users that monday could not assign. */
        failedUsers: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Change a monday item's position on the same board. */
    "monday.change_item_position": {
      input: {
        /** The monday item that should be repositioned. */
        item_id: string | number;
        /** The target group where monday should place the item. */
        group_id?: string | number;
        /** Whether monday should place the item at the top of the target group. */
        group_top?: boolean;
        /** The item on the same board that monday should position against. */
        relative_to?: string | number;
        /** Where to place the item relative to another item. */
        position_relative_method?: "before_at" | "after_at";
      };
      output: {
        /** The monday item returned by the create_item mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Change multiple monday column values in one mutation using the official JSON payload shape. */
    "monday.change_multiple_column_values": {
      input: {
        /** The board that contains the item to update. */
        board_id: string | number;
        /** The item whose columns should be updated. */
        item_id: string | number;
        /** The updated column values. */
        column_values: string | Record<string, unknown>;
        /** Whether monday should create missing status or dropdown labels. */
        create_labels_if_missing?: boolean;
      };
      output: {
        /** The monday item returned by the column value mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Change a monday column value using the official simple string mutation. */
    "monday.change_simple_column_value": {
      input: {
        /** The board that contains the item to update. */
        board_id: string | number;
        /** The item whose column value should be updated. */
        item_id: string | number;
        /**
         * The column identifier to update.
         * @minLength 1
         */
        column_id: string;
        /** The new simple string value for the column. */
        value: string;
        /** Whether monday should create missing status or dropdown labels. */
        create_labels_if_missing?: boolean;
      };
      output: {
        /** The monday item returned by the column value mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Clear department assignments from monday users on an enterprise account. */
    "monday.clear_users_department": {
      input: {
        /**
         * The users whose department assignment should be cleared.
         * @minItems 1
         */
        user_ids: Array<string | number>;
      };
      output: {
        /** The users whose department assignment was cleared. */
        clearedUsers: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a monday board with the official create_board mutation. */
    "monday.create_board": {
      input: {
        /**
         * The title of the new board.
         * @minLength 1
         */
        board_name: string;
        /** The visibility type of the new board. */
        board_kind: "private" | "public" | "share";
        /** The workspace that should own the new board. */
        workspace_id?: string | number;
        /** Whether the new board should be created empty. */
        empty?: boolean;
      };
      output: {
        /** The monday board returned by the create_board mutation. */
        board: {
          /** The monday board identifier. */
          id: string;
          /** The monday board name. */
          name?: string;
          /** The monday board state. */
          state?: string;
          /** The monday board kind. */
          board_kind?: string;
          /** The user's permissions on the board. */
          permissions?: string;
          /** The monday board description. */
          description?: string;
          /** The monday board communication summary. */
          communication?: string;
          /** The monday board item nickname. */
          item_nickname?: string;
          /** The monday board URL. */
          url?: string;
          /** The workspace that contains the board. */
          workspace?: {
            /** The monday workspace identifier. */
            id: string;
            /** The monday workspace name. */
            name?: string;
            /** The monday workspace kind. */
            kind?: string;
            /** The monday workspace state. */
            state?: string;
            /** The monday workspace description. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday column on an existing board. */
    "monday.create_column": {
      input: {
        /** The board where the column should be created. */
        board_id: string | number;
        /**
         * The title of the new column.
         * @minLength 1
         */
        title: string;
        /**
         * The monday column type to create.
         * @minLength 1
         */
        column_type: string;
        /**
         * The optional custom identifier of the new column.
         * @minLength 1
         */
        id?: string;
        /**
         * The optional description of the new column.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** The monday column returned by the create_column mutation. */
        column: {
          /** The monday column identifier. */
          id: string;
          /** The monday column title. */
          title?: string;
          /** The monday column type. */
          type?: string;
          /** The monday column description. */
          description?: string;
          /** Whether the monday column is archived. */
          archived?: boolean;
          /** The monday column revision value. */
          revision?: string;
          /** The monday column width in pixels. */
          width?: number;
          /** The monday column settings payload. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday dashboard with the official dashboard mutation. */
    "monday.create_dashboard": {
      input: {
        /**
         * The title of the dashboard to create.
         * @minLength 1
         */
        name: string;
        /** The workspace that should own the dashboard. */
        workspace_id: string | number;
        /**
         * The boards that should feed the dashboard.
         * @minItems 1
         */
        board_ids: Array<string | number>;
        /** The visibility level of the dashboard. */
        kind?: "PUBLIC" | "PRIVATE";
        /** The folder that should contain the dashboard. */
        board_folder_id?: string | number;
      };
      output: {
        /** The dashboard returned by monday. */
        dashboard: {
          /** The monday dashboard identifier. */
          id: string;
          /** The monday dashboard name. */
          name?: string;
          /** The workspace that owns the dashboard. */
          workspace_id?: string;
          /** The visibility level of the dashboard. */
          kind?: "PUBLIC" | "PRIVATE";
          /** The folder that contains the dashboard. */
          board_folder_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday department on an enterprise account. */
    "monday.create_department": {
      input: {
        /** The department data passed to monday. */
        data: {
          /**
           * The department name.
           * @minLength 1
           */
          name: string;
          /**
           * The number of seats reserved for the department.
           * @minimum 0
           */
          reserved_seats?: number;
        };
      };
      output: {
        /** The department returned by monday. */
        department: {
          /** The monday department identifier. */
          id: string;
          /** The monday department name. */
          name: string;
          /** The number of seats reserved for the department. */
          reserved_seats: number;
          /** The number of seats assigned to the department. */
          assigned_seats: number;
          /** The users assigned to the department. */
          members: Array<{
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The users who own the department. */
          owners: Array<{
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Create a monday doc in a workspace or document column location. */
    "monday.create_doc": {
      input: {
        /** The official monday create_doc location object. */
        location: Record<string, unknown>;
      };
      output: {
        /** The monday doc returned by the create_doc mutation. */
        doc: {
          /** The monday document identifier. */
          id: string;
          /** The monday document object identifier. */
          object_id?: string;
          /** The monday document name. */
          name?: string;
          /** The monday document kind. */
          doc_kind?: string;
          /** The monday document creation time. */
          created_at?: string;
          /** The monday document update time. */
          updated_at?: string;
          /** The monday document URL. */
          url?: string;
          /** The monday document relative URL. */
          relative_url?: string;
          /** The monday document folder identifier. */
          doc_folder_id?: string;
          /** The monday document settings payload. */
          settings?: Record<string, unknown>;
          /** The user who created the document. */
          created_by?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday Workform and its destination responses board. */
    "monday.create_form": {
      input: {
        /** The workspace where monday should create the form. */
        destination_workspace_id: string | number;
        /** The folder where monday should create the form. */
        destination_folder_id?: string | number;
        /**
         * The folder name where monday should create the form.
         * @minLength 1
         */
        destination_folder_name?: string;
        /** The board visibility for the responses board. */
        board_kind?: "private" | "public" | "share";
        /**
         * The name of the responses board that monday should create.
         * @minLength 1
         */
        destination_name?: string;
        /**
         * The users who should own the responses board.
         * @minItems 1
         */
        board_owner_ids?: Array<string | number>;
        /**
         * The teams that should own the responses board.
         * @minItems 1
         */
        board_owner_team_ids?: Array<string | number>;
        /**
         * The users who should subscribe to the responses board.
         * @minItems 1
         */
        board_subscriber_ids?: Array<string | number>;
        /**
         * The teams that should subscribe to the responses board.
         * @minItems 1
         */
        board_subscriber_teams_ids?: Array<string | number>;
      };
      output: {
        /** The created form returned by monday. */
        form: {
          /** The board that will receive form submissions. */
          boardId: string;
          /** The unique token used to access the form. */
          token: string;
        };
      };
    };
    /** Create a monday group on an existing board. */
    "monday.create_group": {
      input: {
        /** The board where the group should be created. */
        board_id: string | number;
        /**
         * The title of the new group.
         * @minLength 1
         */
        group_name: string;
      };
      output: {
        /** The monday group returned by the create_group mutation. */
        group: {
          /** The monday group identifier. */
          id: string;
          /** The monday group title. */
          title?: string;
          /** The monday group color. */
          color?: string;
          /** The monday group position. */
          position?: string;
          /** Whether the monday group is archived. */
          archived?: boolean;
          /** Whether the monday group is deleted. */
          deleted?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday item on a board, optionally setting column values and position. */
    "monday.create_item": {
      input: {
        /** The board where the item should be created. */
        board_id: string | number;
        /**
         * The group where the item should be created.
         * @minLength 1
         */
        group_id?: string;
        /**
         * The new item's name.
         * @minLength 1
         */
        item_name: string;
        /** The column values for the new item. */
        column_values?: string | Record<string, unknown>;
        /** Whether monday should create missing status or dropdown labels. */
        create_labels_if_missing?: boolean;
        /** The item whose position should anchor the newly created item. */
        relative_to?: string | number;
        /** Where to place the item relative to another item. */
        position_relative_method?: "before_at" | "after_at";
      };
      output: {
        /** The monday item returned by the create_item mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday subitem under an existing parent item. */
    "monday.create_subitem": {
      input: {
        /** The parent item where the subitem should be created. */
        parent_item_id: string | number;
        /**
         * The new subitem name.
         * @minLength 1
         */
        item_name: string;
        /** The column values for the new subitem. */
        column_values?: string | Record<string, unknown>;
        /** Whether monday should create missing status or dropdown labels. */
        create_labels_if_missing?: boolean;
      };
      output: {
        /** The monday item returned by the create_item mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a monday update on an item or as a reply to an existing update. */
    "monday.create_update": {
      input: {
        /** The item that should receive the update. */
        item_id?: string | number;
        /** The parent update that should receive the reply. */
        parent_id?: string | number;
        /**
         * The content of the update.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** The monday update returned by the create_update mutation. */
        update: {
          /** The monday update identifier. */
          id: string;
          /** The monday update body. */
          body?: string;
          /** The monday update creation time. */
          created_at?: string;
          /** The monday update edit time. */
          edited_at?: string;
          /** The monday update update time. */
          updated_at?: string;
          /** The user who created the update. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Deactivate a monday Workform so it stops accepting submissions. */
    "monday.deactivate_form": {
      input: {
        /**
         * The unique token that identifies the form.
         * @minLength 1
         */
        formToken: string;
      };
      output: {
        /** The form token that was deactivated. */
        formToken: string;
        /** Whether the form is now active. */
        active: boolean;
      };
    };
    /** Delete a monday board. */
    "monday.delete_board": {
      input: {
        /** The board identifier to delete. */
        board_id: string | number;
      };
      output: {
        /** The deleted monday board identifier. */
        deletedBoardId: string;
      };
    };
    /** Delete a monday column from an existing board. */
    "monday.delete_column": {
      input: {
        /** The board that contains the column to delete. */
        board_id: string | number;
        /**
         * The identifier of the column to delete.
         * @minLength 1
         */
        column_id: string;
      };
      output: {
        /** The deleted monday column identifier. */
        deletedColumnId: string;
      };
    };
    /** Delete a monday dashboard. */
    "monday.delete_dashboard": {
      input: {
        /** The dashboard identifier to delete. */
        id: string | number;
      };
      output: {
        /** The dashboard identifier that was deleted. */
        deletedDashboardId: string;
        /** Whether monday confirmed the dashboard deletion. */
        success: boolean;
      };
    };
    /** Delete a monday department on an enterprise account. */
    "monday.delete_department": {
      input: {
        /** The department identifier to delete. */
        department_id: string | number;
      };
      output: {
        /** The department identifier that was deleted. */
        deletedDepartmentId: string;
      };
    };
    /** Delete an existing monday doc. */
    "monday.delete_doc": {
      input: {
        /** The unique identifier of the document to delete. */
        docId: string | number;
      };
      output: {
        /** The deleted monday document identifier. */
        deletedDocId: string;
        /** Whether monday confirmed the document deletion. */
        success?: boolean;
      };
    };
    /** Delete a monday group from an existing board. */
    "monday.delete_group": {
      input: {
        /** The board that contains the group to delete. */
        board_id: string | number;
        /**
         * The group identifier to delete.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** The deleted monday group identifier. */
        deletedGroupId: string;
      };
    };
    /** Delete a monday item. */
    "monday.delete_item": {
      input: {
        /** The monday item that should be deleted. */
        item_id: string | number;
      };
      output: {
        /** The deleted monday item identifier. */
        deletedItemId: string;
      };
    };
    /** Remove monday user subscribers from a board. */
    "monday.delete_subscribers_from_board": {
      input: {
        /** The board that should remove the subscribers. */
        board_id: string | number;
        /**
         * The users that should be removed from the board.
         * @minItems 1
         */
        user_ids: Array<string | number>;
      };
      output: {
        /** The users removed from the board. */
        users: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Remove monday team subscribers from a board. */
    "monday.delete_teams_from_board": {
      input: {
        /** The board that should remove the teams. */
        board_id: string | number;
        /**
         * The teams that should be removed from the board.
         * @minItems 1
         */
        team_ids: Array<string | number>;
      };
      output: {
        /** The teams removed from the board. */
        teams: Array<{
          /** The monday team identifier. */
          id: string;
          /** The monday team name. */
          name?: string;
          /** The monday team avatar URL. */
          picture_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete an existing monday update. */
    "monday.delete_update": {
      input: {
        /** The update identifier to delete. */
        id: string | number;
      };
      output: {
        /** The deleted monday update identifier. */
        deletedUpdateId: string;
      };
    };
    /** Duplicate a monday item. */
    "monday.duplicate_item": {
      input: {
        /** The board that contains the item to duplicate. */
        board_id: string | number;
        /** The monday item that should be duplicated. */
        item_id: string | number;
        /** Whether monday should duplicate the item's updates. */
        with_updates?: boolean;
      };
      output: {
        /** The monday item returned by the create_item mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Edit an existing monday update. */
    "monday.edit_update": {
      input: {
        /** The update identifier to edit. */
        id: string | number;
        /**
         * The updated body content.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** The monday update returned by the edit_update mutation. */
        update: {
          /** The monday update identifier. */
          id: string;
          /** The monday update body. */
          body?: string;
          /** The monday update creation time. */
          created_at?: string;
          /** The monday update edit time. */
          edited_at?: string;
          /** The monday update update time. */
          updated_at?: string;
          /** The user who created the update. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Find monday items on a board by matching explicit column values. */
    "monday.find_items_by_column_values": {
      input: {
        /** The board where matching items should be searched. */
        board_id: string | number;
        /**
         * The list of column filters to apply.
         * @minItems 1
         */
        columns?: Array<{
          /**
           * The monday column identifier to filter by.
           * @minLength 1
           */
          column_id: string;
          /**
           * The monday column values to match.
           * @minItems 1
           */
          column_values: Array<string>;
        }>;
        /**
         * The opaque monday pagination cursor.
         * @minLength 1
         */
        cursor?: string;
        /** How monday should scope hierarchy matches in the results. */
        hierarchy_scope_config?: "allItems" | "parentItems";
        /**
         * The maximum number of matching items to return.
         * @minimum 1
         * @maximum 500
         */
        limit: number;
      };
      output: {
        /** The cursor for the next page, or null when the result set is exhausted. */
        cursor: string | null;
        /** The monday items returned in this page. */
        items: Array<{
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve the user and team memberships configured on a monday board. */
    "monday.get_board_memberships": {
      input: {
        /** The board whose memberships should be retrieved. */
        board_id: string | number;
        /**
         * The number of team memberships to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of team memberships to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The board whose memberships were queried. */
        board: {
          /** The monday board identifier. */
          id: string;
          /** The monday board name. */
          name?: string;
          /** The monday board state. */
          state?: string;
          /** The monday board kind. */
          board_kind?: string;
          /** The user's permissions on the board. */
          permissions?: string;
          /** The monday board description. */
          description?: string;
          /** The monday board communication summary. */
          communication?: string;
          /** The monday board item nickname. */
          item_nickname?: string;
          /** The monday board URL. */
          url?: string;
          /** The workspace that contains the board. */
          workspace?: {
            /** The monday workspace identifier. */
            id: string;
            /** The monday workspace name. */
            name?: string;
            /** The monday workspace kind. */
            kind?: string;
            /** The monday workspace state. */
            state?: string;
            /** The monday workspace description. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The user owners of the board. */
        owners: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The user subscribers of the board. */
        subscribers: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The team owners of the board. */
        teamOwners: Array<{
          /** The monday team identifier. */
          id: string;
          /** The monday team name. */
          name?: string;
          /** The monday team avatar URL. */
          picture_url?: string;
          [key: string]: unknown;
        }>;
        /** The team subscribers of the board. */
        teamSubscribers: Array<{
          /** The monday team identifier. */
          id: string;
          /** The monday team name. */
          name?: string;
          /** The monday team avatar URL. */
          picture_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve the monday user associated with the current personal API token. */
    "monday.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The monday user associated with the current API token. */
        user: {
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a monday Workform by its unique form token. */
    "monday.get_form": {
      input: {
        /**
         * The unique token that identifies the form.
         * @minLength 1
         */
        formToken: string;
      };
      output: {
        /** The form returned by monday. */
        form: {
          /** The form identifier. */
          id: string;
          /** The unique token used to access the form. */
          token: string;
          /** Whether the form is active. */
          active: boolean;
          /** The form title. */
          title: string;
          /** The user who owns the form. */
          ownerId?: string;
          /** Whether the form was created with AI assistance. */
          builtWithAI: boolean;
          /** The form description. */
          description?: string;
          /** Whether the form collects anonymous responses. */
          isAnonymous: boolean;
          /** The form type. */
          type?: string;
          /** The form feature settings. */
          features?: Record<string, unknown>;
          /** The form appearance settings. */
          appearance?: Record<string, unknown>;
          /** The form accessibility settings. */
          accessibility?: Record<string, unknown>;
          /** The tags attached to the form. */
          tags?: Array<{
            /** The form tag identifier. */
            id: string;
            /** The form tag name. */
            name: string;
            /** The form tag value. */
            value?: string;
            /** The board column mapped to the tag. */
            columnId: string;
          }>;
          /** The questions shown in the form. */
          questions?: Array<{
            /** The form question identifier. */
            id: string;
            /** The form question type. */
            type?: string;
            /** Whether the question is visible. */
            visible: boolean;
            /** The form question title. */
            title: string;
            /** The form question description. */
            description?: string;
            /** Whether the question is required. */
            required: boolean;
            /** The question settings payload. */
            settings?: Record<string, unknown>;
            /** The selectable options for the question. */
            options?: Array<{
              /** The label for the form question option. */
              label: string;
            }>;
            /** The conditional visibility rules for the question. */
            showIfRules?: Record<string, unknown> | null;
          }>;
        };
      };
    };
    /** Retrieve specific monday items by ID. */
    "monday.get_items": {
      input: {
        /**
         * The monday item identifiers to retrieve.
         * @minItems 1
         */
        ids: Array<string | number>;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The 1-based page number of items to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Whether to order the results from newest to oldest. */
        newest_first?: boolean;
        /** Whether to exclude inactive, deleted, and descendant items. */
        exclude_nonactive?: boolean;
      };
      output: {
        /** The monday items returned by the query. */
        items: Array<{
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve a filtered page of monday board items using the official items_page query. */
    "monday.get_items_page": {
      input: {
        /** The unique identifier of the board to query. */
        board_id: string | number;
        /**
         * The maximum number of items to return on one page.
         * @minimum 1
         * @maximum 500
         */
        limit: number;
        /**
         * The opaque monday pagination cursor.
         * @minLength 1
         */
        cursor?: string;
        /** How monday should scope hierarchy matches in the results. */
        hierarchy_scope_config?: "allItems" | "parentItems";
        /** The official monday items_page query_params object. */
        query_params?: Record<string, unknown>;
      };
      output: {
        /** The cursor for the next page, or null when the result set is exhausted. */
        cursor: string | null;
        /** The monday items returned in this page. */
        items: Array<{
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve the next page of monday items from an items_page cursor. */
    "monday.get_next_items_page": {
      input: {
        /**
         * The opaque monday pagination cursor.
         * @minLength 1
         */
        cursor: string;
        /**
         * The maximum number of items to return in the next page.
         * @minimum 1
         * @maximum 500
         */
        limit: number;
      };
      output: {
        /** The cursor for the next page, or null when the result set is exhausted. */
        cursor: string | null;
        /** The monday items returned in this page. */
        items: Array<{
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List board-scoped monday activity logs. */
    "monday.list_activity_logs": {
      input: {
        /** The board whose activity logs should be retrieved. */
        board_id: string | number;
        /** The column filters to apply to the activity log query. */
        column_ids?: Array<string>;
        /**
         * The inclusive start timestamp filter.
         * @minLength 1
         */
        from?: string;
        /** The group filters to apply to the activity log query. */
        group_ids?: Array<string>;
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        item_ids?: Array<string | number>;
        /**
         * The number of logs to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of logs to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The inclusive end timestamp filter.
         * @minLength 1
         */
        to?: string;
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        user_ids?: Array<string | number>;
      };
      output: {
        /** The activity log entries returned for the board. */
        activityLogs: Array<{
          /** The monday activity log identifier. */
          id: string;
          /** The event name recorded by monday. */
          event: string;
          /** The entity type affected by the event. */
          entity: string;
          /** The event data payload serialized by monday. */
          data: string;
          /** The user who triggered the event. */
          user_id: string;
          /** The monday account identifier. */
          account_id: string;
          /** The activity log creation timestamp. */
          created_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve one or more monday assets by asset ID. */
    "monday.list_assets": {
      input: {
        /**
         * The monday asset identifiers to retrieve.
         * @minItems 1
         */
        ids: Array<string | number>;
      };
      output: {
        /** The monday assets returned by the query. */
        assets: Array<{
          /** The monday asset identifier. */
          id: string;
          /** The monday asset name. */
          name?: string;
          /** The monday asset URL. */
          url?: string;
          /** The monday asset public URL. */
          public_url?: string;
          /** The monday asset file extension. */
          file_extension?: string;
          /** The monday asset file size in bytes. */
          file_size?: number;
          /** The monday asset creation time. */
          created_at?: string;
          /** The monday asset thumbnail URL. */
          url_thumbnail?: string;
          /** The user who uploaded the asset. */
          uploaded_by?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List account-level monday audit logs on enterprise accounts. */
    "monday.list_audit_logs": {
      input: {
        /**
         * The number of audit logs to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of audit logs to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The audit event filters to apply. */
        events?: Array<string>;
        /** The user whose audit logs should be returned. */
        user_id?: string | number;
        /**
         * The IP address filter to apply.
         * @minLength 1
         */
        ip_address?: string;
        /**
         * The inclusive start timestamp filter.
         * @minLength 1
         */
        start_time?: string;
        /**
         * The inclusive end timestamp filter.
         * @minLength 1
         */
        end_time?: string;
      };
      output: {
        /** The audit log entries returned by monday. */
        auditLogs: Array<{
          /** The audit log timestamp. */
          timestamp: string;
          /** The monday account identifier. */
          account_id?: string;
          /** The audit event name. */
          event: string;
          /** The audit log slug. */
          slug?: string;
          /** The source IP address. */
          ip_address?: string;
          /** The user agent string. */
          user_agent?: string;
          /** The client application name. */
          client_name?: string;
          /** The client application version. */
          client_version?: string;
          /** The operating system name. */
          os_name?: string;
          /** The operating system version. */
          os_version?: string;
          /** The device name. */
          device_name?: string;
          /** The device type. */
          device_type?: string;
          /** The user tied to the audit event. */
          user?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The audit event metadata payload. */
          activity_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by monday. */
        pagination?: {
          /** The current page number. */
          page: number;
          /** The requested page size. */
          page_size: number;
          /** Whether more pages are available. */
          has_more_pages: boolean;
          /** The next page number, if available. */
          next_page_number?: number;
        };
      };
    };
    /** List the columns for a specific monday board. */
    "monday.list_board_columns": {
      input: {
        /** The unique identifier of the board whose columns to list. */
        board_id: string | number;
      };
      output: {
        /** The monday board columns. */
        columns: Array<{
          /** The monday column identifier. */
          id: string;
          /** The monday column title. */
          title?: string;
          /** The monday column type. */
          type?: string;
          /** The monday column description. */
          description?: string;
          /** Whether the monday column is archived. */
          archived?: boolean;
          /** The monday column revision value. */
          revision?: string;
          /** The monday column width in pixels. */
          width?: number;
          /** The monday column settings payload. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday boards with official pagination and board-level filters. */
    "monday.list_boards": {
      input: {
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        ids?: Array<string | number>;
        /**
         * The number of boards to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of boards to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The board state filter. */
        state?: "active" | "all" | "archived" | "deleted";
        /** The board visibility type. */
        board_kind?: "private" | "public" | "share";
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        workspace_ids?: Array<string | number>;
      };
      output: {
        /** The monday boards returned by the query. */
        boards: Array<{
          /** The monday board identifier. */
          id: string;
          /** The monday board name. */
          name?: string;
          /** The monday board state. */
          state?: string;
          /** The monday board kind. */
          board_kind?: string;
          /** The user's permissions on the board. */
          permissions?: string;
          /** The monday board description. */
          description?: string;
          /** The monday board communication summary. */
          communication?: string;
          /** The monday board item nickname. */
          item_nickname?: string;
          /** The monday board URL. */
          url?: string;
          /** The workspace that contains the board. */
          workspace?: {
            /** The monday workspace identifier. */
            id: string;
            /** The monday workspace name. */
            name?: string;
            /** The monday workspace kind. */
            kind?: string;
            /** The monday workspace state. */
            state?: string;
            /** The monday workspace description. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday departments on enterprise accounts. */
    "monday.list_departments": {
      input: {
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        ids?: Array<string | number>;
      };
      output: {
        /** The departments returned by monday. */
        departments: Array<{
          /** The monday department identifier. */
          id: string;
          /** The monday department name. */
          name: string;
          /** The number of seats reserved for the department. */
          reserved_seats: number;
          /** The number of seats assigned to the department. */
          assigned_seats: number;
          /** The users assigned to the department. */
          members: Array<{
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The users who own the department. */
          owners: Array<{
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        }>;
      };
    };
    /** List monday docs by document, object, or workspace identifiers. */
    "monday.list_docs": {
      input: {
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        ids?: Array<string | number>;
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        object_ids?: Array<string | number>;
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        workspace_ids?: Array<string | number>;
        /**
         * The number of docs to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of docs to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The order in which monday should return documents. */
        order_by?: "created_at" | "used_at";
      };
      output: {
        /** The monday docs returned by the query. */
        docs: Array<{
          /** The monday document identifier. */
          id: string;
          /** The monday document object identifier. */
          object_id?: string;
          /** The monday document name. */
          name?: string;
          /** The monday document kind. */
          doc_kind?: string;
          /** The monday document creation time. */
          created_at?: string;
          /** The monday document update time. */
          updated_at?: string;
          /** The monday document URL. */
          url?: string;
          /** The monday document relative URL. */
          relative_url?: string;
          /** The monday document folder identifier. */
          doc_folder_id?: string;
          /** The monday document settings payload. */
          settings?: Record<string, unknown>;
          /** The user who created the document. */
          created_by?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the groups for a specific monday board. */
    "monday.list_groups": {
      input: {
        /** The unique identifier of the board whose groups to list. */
        board_id: string | number;
        /**
         * A non-empty list of strings.
         * @minItems 1
         */
        group_ids?: Array<string>;
      };
      output: {
        /** The monday groups returned by the query. */
        groups: Array<{
          /** The monday group identifier. */
          id: string;
          /** The monday group title. */
          title?: string;
          /** The monday group color. */
          color?: string;
          /** The monday group position. */
          position?: string;
          /** Whether the monday group is archived. */
          archived?: boolean;
          /** Whether the monday group is deleted. */
          deleted?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday subitems for one or more parent items. */
    "monday.list_subitems_by_parent": {
      input: {
        /**
         * The parent monday item identifiers to inspect.
         * @minItems 1
         */
        parent_item_ids: Array<string | number>;
      };
      output: {
        /** The monday parent items with nested subitems. */
        parentItems: Array<{
          /** The parent monday item identifier. */
          id: string;
          /** The parent monday item name. */
          name?: string;
          /** The subitems that belong to the parent item. */
          subitems: Array<{
            /** The monday item identifier. */
            id: string;
            /** The monday item name. */
            name?: string;
            /** The monday item state. */
            state?: string;
            /** The monday item URL. */
            url?: string;
            /** The monday item creation time. */
            created_at?: string;
            /** The monday item update time. */
            updated_at?: string;
            /** The parent item of a monday subitem. */
            parent_item?: {
              /** The parent monday item identifier. */
              id: string;
              /** The parent monday item name. */
              name?: string;
              [key: string]: unknown;
            };
            /** The group that contains the item. */
            group?: {
              /** The monday group identifier. */
              id: string;
              /** The monday group title. */
              title?: string;
              /** The monday group color. */
              color?: string;
              /** The monday group position. */
              position?: string;
              /** Whether the monday group is archived. */
              archived?: boolean;
              /** Whether the monday group is deleted. */
              deleted?: boolean;
              [key: string]: unknown;
            };
            /** The board that contains the item. */
            board?: {
              /** The monday board identifier. */
              id: string;
              /** The monday board name. */
              name?: string;
              /** The monday board state. */
              state?: string;
              /** The monday board kind. */
              board_kind?: string;
              /** The user's permissions on the board. */
              permissions?: string;
              /** The monday board description. */
              description?: string;
              /** The monday board communication summary. */
              communication?: string;
              /** The monday board item nickname. */
              item_nickname?: string;
              /** The monday board URL. */
              url?: string;
              /** The workspace that contains the board. */
              workspace?: {
                /** The monday workspace identifier. */
                id: string;
                /** The monday workspace name. */
                name?: string;
                /** The monday workspace kind. */
                kind?: string;
                /** The monday workspace state. */
                state?: string;
                /** The monday workspace description. */
                description?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** The user who created the item. */
            creator?: {
              /** The monday user identifier. */
              id: string;
              /** The monday user name. */
              name?: string;
              /** The monday user email address. */
              email?: string;
              /** Whether the monday user is enabled. */
              enabled?: boolean;
              /** Whether the monday user is a guest. */
              is_guest?: boolean;
              /** The monday user creation date. */
              created_at?: string;
              /** The account that owns the user. */
              account?: {
                /** The monday account identifier. */
                id: string;
                /** The monday account name. */
                name?: string;
                /** The monday account slug. */
                slug?: string;
                /** The monday account tier. */
                tier?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** The monday item column values. */
            column_values?: Array<{
              /** The monday column identifier. */
              id?: string;
              /** The rendered monday column text value. */
              text?: string | null;
              /** The monday column type. */
              type?: string;
              /** The raw monday column JSON value. */
              value?: string | null;
              [key: string]: unknown;
            }>;
            /** The nested subitems of a monday item. */
            subitems?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the members of a specific monday team. */
    "monday.list_team_members": {
      input: {
        /** The unique identifier of the team whose members to list. */
        team_id: string | number;
      };
      output: {
        /** The monday team members returned by the query. */
        teamMembers: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday teams with official filters and pagination. */
    "monday.list_teams": {
      input: {
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        ids?: Array<string | number>;
        /**
         * The number of teams to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of teams to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The monday teams returned by the query. */
        teams: Array<{
          /** The monday team identifier. */
          id: string;
          /** The monday team name. */
          name?: string;
          /** The monday team avatar URL. */
          picture_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday replies for updates on one or more boards. */
    "monday.list_update_replies": {
      input: {
        /**
         * The monday board identifiers whose replies should be listed.
         * @minItems 1
         */
        board_ids: Array<string | number>;
        /**
         * The inclusive lower timestamp bound for reply creation.
         * @minLength 1
         */
        created_at_from?: string;
        /**
         * The inclusive upper timestamp bound for reply creation.
         * @minLength 1
         */
        created_at_to?: string;
        /**
         * The maximum number of replies to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The 1-based page number of replies to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The monday replies returned by the query. */
        replies: Array<{
          /** The monday reply identifier. */
          id: string;
          /** The monday reply body. */
          body?: string;
          /** The monday reply creation time. */
          created_at?: string;
          /** The monday reply edit time. */
          edited_at?: string;
          /** The monday reply kind. */
          kind?: string;
          /** The user who created the reply. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday updates with optional date filtering. */
    "monday.list_updates": {
      input: {
        /**
         * The number of updates to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The inclusive start date for filtering updates.
         * @minLength 1
         */
        from_date?: string;
        /**
         * The inclusive end date for filtering updates.
         * @minLength 1
         */
        to_date?: string;
      };
      output: {
        /** The monday updates returned by the query. */
        updates: Array<{
          /** The monday update identifier. */
          id: string;
          /** The monday update body. */
          body?: string;
          /** The monday update creation time. */
          created_at?: string;
          /** The monday update edit time. */
          edited_at?: string;
          /** The monday update update time. */
          updated_at?: string;
          /** The user who created the update. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday users with official root-level filters and pagination. */
    "monday.list_users": {
      input: {
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        ids?: Array<string | number>;
        /**
         * A non-empty list of strings.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * A fuzzy name filter for monday users.
         * @minLength 1
         */
        name?: string;
        /**
         * The number of users to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of users to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The monday users returned by the query. */
        users: Array<{
          /** The monday user identifier. */
          id: string;
          /** The monday user name. */
          name?: string;
          /** The monday user email address. */
          email?: string;
          /** Whether the monday user is enabled. */
          enabled?: boolean;
          /** Whether the monday user is a guest. */
          is_guest?: boolean;
          /** The monday user creation date. */
          created_at?: string;
          /** The account that owns the user. */
          account?: {
            /** The monday account identifier. */
            id: string;
            /** The monday account name. */
            name?: string;
            /** The monday account slug. */
            slug?: string;
            /** The monday account tier. */
            tier?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List monday workspaces with official filters and pagination. */
    "monday.list_workspaces": {
      input: {
        /**
         * A non-empty list of monday identifiers.
         * @minItems 1
         */
        ids?: Array<string | number>;
        /** The workspace visibility type. */
        kind?: "open" | "closed";
        /**
         * The number of workspaces to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The 1-based page number of workspaces to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The workspace state filter. */
        state?: "active" | "all" | "archived" | "deleted";
        /** The workspace sort order. */
        order_by?: "created_at";
      };
      output: {
        /** The monday workspaces returned by the query. */
        workspaces: Array<{
          /** The monday workspace identifier. */
          id: string;
          /** The monday workspace name. */
          name?: string;
          /** The monday workspace kind. */
          kind?: string;
          /** The monday workspace state. */
          state?: string;
          /** The monday workspace description. */
          description?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Move a monday item to another board and target group. */
    "monday.move_item_to_board": {
      input: {
        /** The monday item that should be moved. */
        item_id: string | number;
        /** The target board identifier. */
        board_id: string | number;
        /** The target group identifier on the destination board. */
        group_id: string | number;
        /** The mapping between source board columns and target board columns. */
        columns_mapping?: Array<{
          /** The source column identifier. */
          source: string | number;
          /** The target column identifier. */
          target?: string | number;
        }>;
        /** The mapping between source subitem columns and target subitem columns. */
        subitems_columns_mapping?: Array<{
          /** The source subitem column identifier. */
          source: string | number;
          /** The target subitem column identifier. */
          target?: string | number;
        }>;
      };
      output: {
        /** The monday item returned by the create_item mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Move a monday item to another group on the same board. */
    "monday.move_item_to_group": {
      input: {
        /** The monday item that should be moved. */
        item_id: string | number;
        /**
         * The target group identifier.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** The monday item returned by the create_item mutation. */
        item: {
          /** The monday item identifier. */
          id: string;
          /** The monday item name. */
          name?: string;
          /** The monday item state. */
          state?: string;
          /** The monday item URL. */
          url?: string;
          /** The monday item creation time. */
          created_at?: string;
          /** The monday item update time. */
          updated_at?: string;
          /** The parent item of a monday subitem. */
          parent_item?: {
            /** The parent monday item identifier. */
            id: string;
            /** The parent monday item name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The group that contains the item. */
          group?: {
            /** The monday group identifier. */
            id: string;
            /** The monday group title. */
            title?: string;
            /** The monday group color. */
            color?: string;
            /** The monday group position. */
            position?: string;
            /** Whether the monday group is archived. */
            archived?: boolean;
            /** Whether the monday group is deleted. */
            deleted?: boolean;
            [key: string]: unknown;
          };
          /** The board that contains the item. */
          board?: {
            /** The monday board identifier. */
            id: string;
            /** The monday board name. */
            name?: string;
            /** The monday board state. */
            state?: string;
            /** The monday board kind. */
            board_kind?: string;
            /** The user's permissions on the board. */
            permissions?: string;
            /** The monday board description. */
            description?: string;
            /** The monday board communication summary. */
            communication?: string;
            /** The monday board item nickname. */
            item_nickname?: string;
            /** The monday board URL. */
            url?: string;
            /** The workspace that contains the board. */
            workspace?: {
              /** The monday workspace identifier. */
              id: string;
              /** The monday workspace name. */
              name?: string;
              /** The monday workspace kind. */
              kind?: string;
              /** The monday workspace state. */
              state?: string;
              /** The monday workspace description. */
              description?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The user who created the item. */
          creator?: {
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The monday item column values. */
          column_values?: Array<{
            /** The monday column identifier. */
            id?: string;
            /** The rendered monday column text value. */
            text?: string | null;
            /** The monday column type. */
            type?: string;
            /** The raw monday column JSON value. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** The nested subitems of a monday item. */
          subitems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Replace a monday item description using markdown content. */
    "monday.set_item_description_content": {
      input: {
        /** The monday item whose description should be replaced. */
        item_id: string | number;
        /**
         * The markdown content that should replace the current description.
         * @minLength 1
         */
        markdown: string;
      };
      output: {
        /** Whether monday accepted the markdown replacement request. */
        success: boolean;
        /** The monday error message when the markdown import fails. */
        error: string | null;
        /** The monday document block identifiers created from the markdown content. */
        blockIds: Array<string>;
      };
    };
    /** Update a monday board attribute with the official update_board mutation. */
    "monday.update_board": {
      input: {
        /** The board identifier to update. */
        board_id: string | number;
        /** The monday board attribute to update. */
        board_attribute: "communication" | "description" | "item_nickname" | "name";
        /**
         * The new value for the selected board attribute.
         * @minLength 1
         */
        new_value: string;
      };
      output: {
        /** The monday board metadata returned by update_board. */
        board: {
          /** The monday board identifier. */
          id: string;
          /** The monday board name. */
          name?: string;
          /** The monday board state. */
          state?: string;
          /** The monday board kind. */
          board_kind?: string;
          /** The user's permissions on the board. */
          permissions?: string;
          /** The monday board description. */
          description?: string;
          /** The monday board communication summary. */
          communication?: string;
          /** The monday board item nickname. */
          item_nickname?: string;
          /** The monday board URL. */
          url?: string;
          /** The workspace that contains the board. */
          workspace?: {
            /** The monday workspace identifier. */
            id: string;
            /** The monday workspace name. */
            name?: string;
            /** The monday workspace kind. */
            kind?: string;
            /** The monday workspace state. */
            state?: string;
            /** The monday workspace description. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update a monday column with the official update_column mutation. */
    "monday.update_column": {
      input: {
        /** The board that contains the column to update. */
        board_id: string | number;
        /**
         * The identifier of the column to update.
         * @minLength 1
         */
        id: string;
        /**
         * The current revision of the column.
         * @minLength 1
         */
        revision: string;
        /**
         * The updated monday column type.
         * @minLength 1
         */
        column_type: string;
        /**
         * The updated title of the column.
         * @minLength 1
         */
        title?: string;
        /**
         * The updated description of the column.
         * @minLength 1
         */
        description?: string;
        /**
         * The updated column width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
      };
      output: {
        /** The monday column returned by the update_column mutation. */
        column: {
          /** The monday column identifier. */
          id: string;
          /** The monday column title. */
          title?: string;
          /** The monday column type. */
          type?: string;
          /** The monday column description. */
          description?: string;
          /** Whether the monday column is archived. */
          archived?: boolean;
          /** The monday column revision value. */
          revision?: string;
          /** The monday column width in pixels. */
          width?: number;
          /** The monday column settings payload. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a monday dashboard with the official dashboard mutation. */
    "monday.update_dashboard": {
      input: {
        /** The dashboard identifier to update. */
        id: string | number;
        /**
         * The updated dashboard title.
         * @minLength 1
         */
        name?: string;
        /** The workspace that should own the dashboard after the update. */
        workspace_id?: string | number;
        /** The visibility level of the dashboard. */
        kind?: "PUBLIC" | "PRIVATE";
        /** The folder that should contain the dashboard after the update. */
        board_folder_id?: string | number;
      };
      output: {
        /** The dashboard returned by monday after the update. */
        dashboard: {
          /** The monday dashboard identifier. */
          id: string;
          /** The monday dashboard name. */
          name?: string;
          /** The workspace that owns the dashboard. */
          workspace_id?: string;
          /** The visibility level of the dashboard. */
          kind?: "PUBLIC" | "PRIVATE";
          /** The folder that contains the dashboard. */
          board_folder_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a monday department on an enterprise account. */
    "monday.update_department": {
      input: {
        /** The department identifier to update. */
        department_id: string | number;
        /** The department fields to update. */
        data: {
          /**
           * The updated department name.
           * @minLength 1
           */
          name?: string;
          /**
           * The updated number of reserved seats for the department.
           * @minimum 0
           */
          reserved_seats?: number;
        };
      };
      output: {
        /** The department returned by monday. */
        department: {
          /** The monday department identifier. */
          id: string;
          /** The monday department name. */
          name: string;
          /** The number of seats reserved for the department. */
          reserved_seats: number;
          /** The number of seats assigned to the department. */
          assigned_seats: number;
          /** The users assigned to the department. */
          members: Array<{
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The users who own the department. */
          owners: Array<{
            /** The monday user identifier. */
            id: string;
            /** The monday user name. */
            name?: string;
            /** The monday user email address. */
            email?: string;
            /** Whether the monday user is enabled. */
            enabled?: boolean;
            /** Whether the monday user is a guest. */
            is_guest?: boolean;
            /** The monday user creation date. */
            created_at?: string;
            /** The account that owns the user. */
            account?: {
              /** The monday account identifier. */
              id: string;
              /** The monday account name. */
              name?: string;
              /** The monday account slug. */
              slug?: string;
              /** The monday account tier. */
              tier?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Update the name of an existing monday doc. */
    "monday.update_doc_name": {
      input: {
        /** The unique identifier of the document to rename. */
        docId: string | number;
        /**
         * The updated document name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The updated monday document name. */
        updatedDocName: string;
      };
    };
    /** Update an existing monday group attribute. */
    "monday.update_group": {
      input: {
        /** The board that contains the group to update. */
        board_id: string | number;
        /**
         * The group identifier to update.
         * @minLength 1
         */
        group_id: string;
        /** The monday group attribute to update. */
        group_attribute: "color" | "position" | "relative_position_after" | "relative_position_before" | "title";
        /**
         * The new value for the selected group attribute.
         * @minLength 1
         */
        new_value: string;
      };
      output: {
        /** The monday group returned by the update_group mutation. */
        group: {
          /** The monday group identifier. */
          id: string;
          /** The monday group title. */
          title?: string;
          /** The monday group color. */
          color?: string;
          /** The monday group position. */
          position?: string;
          /** Whether the monday group is archived. */
          archived?: boolean;
          /** Whether the monday group is deleted. */
          deleted?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
