import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach an external URL to a Trello card. */
    "trello.add_card_attachment_url": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * URL to attach to the card.
         * @format uri
         */
        url: string;
        /**
         * Attachment display name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** A Trello card attachment returned by the REST API. */
        attachment: {
          /** Trello attachment ID. */
          id?: string;
          /** Attachment name. */
          name?: string;
          /**
           * Attachment URL.
           * @format uri
           */
          url?: string;
          /** Attachment size in bytes. */
          bytes?: number | null;
          /**
           * Attachment creation timestamp in ISO 8601 format.
           * @format date-time
           */
          date?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Add a comment action to a Trello card. */
    "trello.add_card_comment": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Comment text to add to the card.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** A Trello action returned by the REST API. */
        action: {
          /** Trello action ID. */
          id?: string;
          /** Trello action type. */
          type?: string;
          /** Action data returned by Trello. */
          data?: Record<string, unknown>;
          /**
           * Action creation timestamp in ISO 8601 format.
           * @format date-time
           */
          date?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Add a Trello label to a card. */
    "trello.add_card_label": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Trello label ID to add.
         * @minLength 1
         */
        labelId: string;
      };
      output: {
        /** Whether Trello accepted the mutation. */
        success: boolean;
      };
    };
    /** Assign a Trello member to a card. */
    "trello.add_card_member": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Trello member ID to assign.
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** Whether Trello accepted the mutation. */
        success: boolean;
      };
    };
    /** Add a check item to a Trello checklist. */
    "trello.add_checkitem": {
      input: {
        /**
         * Trello checklist ID.
         * @minLength 1
         */
        checklistId: string;
        /**
         * Check item name.
         * @minLength 1
         */
        name: string;
        /** List position. Use top, bottom, or a numeric position. */
        position?: "top" | "bottom" | number;
        /** Whether the new check item should be created as complete. */
        checked?: boolean;
      };
      output: {
        /** A Trello checklist item returned by the REST API. */
        checkItem: {
          /** Trello check item ID. */
          id?: string;
          /** Check item name. */
          name?: string;
          /** Check item state. */
          state?: "complete" | "incomplete";
          /** Check item position in the checklist. */
          position?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Archive a Trello card. */
    "trello.archive_card": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
      };
      output: {
        /** A normalized Trello card returned by the REST API. */
        card: {
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Archive a Trello list. */
    "trello.archive_list": {
      input: {
        /**
         * Trello list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** A normalized Trello list returned by the REST API. */
        list: {
          /** Trello list ID. */
          id?: string;
          /** Trello board ID that owns the list. */
          boardId?: string;
          /** List name. */
          name?: string;
          /** Whether the list is closed. */
          closed?: boolean;
          /** List position on the board. */
          position?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Trello board. */
    "trello.create_board": {
      input: {
        /**
         * Board name.
         * @minLength 1
         */
        name: string;
        /** Board description. */
        description?: string;
        /** Whether Trello should create default lists on the board. */
        defaultLists?: boolean;
        /** Board visibility preference. */
        permissionLevel?: "org" | "private" | "public";
      };
      output: {
        /** A normalized Trello board returned by the REST API. */
        board: {
          /** Trello board ID. */
          id?: string;
          /** Board name. */
          name?: string;
          /** Board description. */
          description?: string;
          /**
           * Public Trello board URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello board URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the board is closed. */
          closed?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Trello card in a list. */
    "trello.create_card": {
      input: {
        /**
         * Trello list ID that will contain the new card.
         * @minLength 1
         */
        listId: string;
        /**
         * Card name.
         * @minLength 1
         */
        name: string;
        /** Card description. */
        description?: string;
        /**
         * Card due date in ISO 8601 format.
         * @format date-time
         */
        due?: string | null;
        /** Card position. Use top, bottom, or a numeric position. */
        position?: "top" | "bottom" | number;
        /**
         * Trello member IDs to assign to the card.
         * @minItems 1
         */
        memberIds?: Array<string>;
        /**
         * Trello label IDs to assign to the card.
         * @minItems 1
         */
        labelIds?: Array<string>;
      };
      output: {
        /** A normalized Trello card returned by the REST API. */
        card: {
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Trello checklist on a card. */
    "trello.create_checklist": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Checklist name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Trello checklist returned by the REST API. */
        checklist: {
          /** Trello checklist ID. */
          id?: string;
          /** Trello card ID that owns the checklist. */
          cardId?: string;
          /** Checklist name. */
          name?: string;
          /** Checklist items returned by Trello. */
          checkItems?: Array<{
            /** Trello check item ID. */
            id?: string;
            /** Check item name. */
            name?: string;
            /** Check item state. */
            state?: "complete" | "incomplete";
            /** Check item position in the checklist. */
            position?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Trello list on a board. */
    "trello.create_list": {
      input: {
        /**
         * Trello board ID that will own the list.
         * @minLength 1
         */
        boardId: string;
        /**
         * List name.
         * @minLength 1
         */
        name: string;
        /** List position. Use top, bottom, or a numeric position. */
        position?: "top" | "bottom" | number;
      };
      output: {
        /** A normalized Trello list returned by the REST API. */
        list: {
          /** Trello list ID. */
          id?: string;
          /** Trello board ID that owns the list. */
          boardId?: string;
          /** List name. */
          name?: string;
          /** Whether the list is closed. */
          closed?: boolean;
          /** List position on the board. */
          position?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Trello board by ID. */
    "trello.get_board": {
      input: {
        /**
         * Trello board ID.
         * @minLength 1
         */
        boardId: string;
        /**
         * Comma-joined Trello fields to request from the REST API.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** A normalized Trello board returned by the REST API. */
        board: {
          /** Trello board ID. */
          id?: string;
          /** Board name. */
          name?: string;
          /** Board description. */
          description?: string;
          /**
           * Public Trello board URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello board URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the board is closed. */
          closed?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Trello card by ID or short link. */
    "trello.get_card": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Comma-joined Trello fields to request from the REST API.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** A normalized Trello card returned by the REST API. */
        card: {
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Trello member, defaulting to the authenticated member. */
    "trello.get_member": {
      input: {
        /**
         * Trello member ID or the me shortcut. Defaults to me.
         * @minLength 1
         */
        memberId?: string;
        /**
         * Comma-joined Trello fields to request from the REST API.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** A normalized Trello member returned by the REST API. */
        member: {
          /** Trello member ID. */
          id?: string;
          /** Trello username. */
          username?: string;
          /** Display name for the Trello member. */
          fullName?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Trello cards on a board. */
    "trello.list_board_cards": {
      input: {
        /**
         * Trello board ID.
         * @minLength 1
         */
        boardId: string;
        /** Card filter passed to Trello. */
        filter?: "all" | "closed" | "none" | "open" | "visible";
        /**
         * Comma-joined Trello fields to request from the REST API.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Trello cards. */
        cards: Array<{
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Trello labels on a board. */
    "trello.list_board_labels": {
      input: {
        /**
         * Trello board ID.
         * @minLength 1
         */
        boardId: string;
      };
      output: {
        /** Trello labels. */
        labels: Array<Record<string, unknown>>;
      };
    };
    /** List Trello lists on a board. */
    "trello.list_board_lists": {
      input: {
        /**
         * Trello board ID.
         * @minLength 1
         */
        boardId: string;
        /** List filter passed to Trello. */
        filter?: "all" | "closed" | "none" | "open";
      };
      output: {
        /** Trello lists. */
        lists: Array<{
          /** Trello list ID. */
          id?: string;
          /** Trello board ID that owns the list. */
          boardId?: string;
          /** List name. */
          name?: string;
          /** Whether the list is closed. */
          closed?: boolean;
          /** List position on the board. */
          position?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Trello members on a board. */
    "trello.list_board_members": {
      input: {
        /**
         * Trello board ID.
         * @minLength 1
         */
        boardId: string;
        /**
         * Comma-joined Trello fields to request from the REST API.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Trello members. */
        members: Array<{
          /** Trello member ID. */
          id?: string;
          /** Trello username. */
          username?: string;
          /** Display name for the Trello member. */
          fullName?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Trello checklists on a card. */
    "trello.list_card_checklists": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
      };
      output: {
        /** Trello checklists. */
        checklists: Array<{
          /** Trello checklist ID. */
          id?: string;
          /** Trello card ID that owns the checklist. */
          cardId?: string;
          /** Checklist name. */
          name?: string;
          /** Checklist items returned by Trello. */
          checkItems?: Array<{
            /** Trello check item ID. */
            id?: string;
            /** Check item name. */
            name?: string;
            /** Check item state. */
            state?: "complete" | "incomplete";
            /** Check item position in the checklist. */
            position?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List comment actions on a Trello card. */
    "trello.list_card_comments": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Maximum number of comment actions to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** Trello comment actions. */
        comments: Array<{
          /** Trello action ID. */
          id?: string;
          /** Trello action type. */
          type?: string;
          /** Action data returned by Trello. */
          data?: Record<string, unknown>;
          /**
           * Action creation timestamp in ISO 8601 format.
           * @format date-time
           */
          date?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Trello boards visible to a member. */
    "trello.list_member_boards": {
      input: {
        /**
         * Trello member ID or the me shortcut. Defaults to me.
         * @minLength 1
         */
        memberId?: string;
        /**
         * Comma-joined Trello fields to request from the REST API.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Board filter passed to Trello. */
        filter?: "all" | "closed" | "members" | "open" | "organization" | "public" | "starred";
      };
      output: {
        /** Trello boards. */
        boards: Array<{
          /** Trello board ID. */
          id?: string;
          /** Board name. */
          name?: string;
          /** Board description. */
          description?: string;
          /**
           * Public Trello board URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello board URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the board is closed. */
          closed?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Move a Trello card to another list. */
    "trello.move_card": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Destination Trello list ID.
         * @minLength 1
         */
        listId: string;
        /** Card position. Use top, bottom, or a numeric position. */
        position?: "top" | "bottom" | number;
      };
      output: {
        /** A normalized Trello card returned by the REST API. */
        card: {
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Remove a Trello label from a card. */
    "trello.remove_card_label": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Trello label ID to remove.
         * @minLength 1
         */
        labelId: string;
      };
      output: {
        /** Whether Trello accepted the mutation. */
        success: boolean;
      };
    };
    /** Remove a Trello member from a card. */
    "trello.remove_card_member": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Trello member ID to remove.
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** Whether Trello accepted the mutation. */
        success: boolean;
      };
    };
    /** Search Trello cards, boards, members, and organizations. */
    "trello.search": {
      input: {
        /**
         * Search query sent to Trello.
         * @minLength 1
         */
        query: string;
        /**
         * Trello model types to search.
         * @minItems 1
         */
        modelTypes?: Array<"actions" | "boards" | "cards" | "members" | "organizations">;
        /**
         * Maximum number of cards to return.
         * @minimum 1
         * @maximum 1000
         */
        cardsLimit?: number;
        /**
         * Maximum number of boards to return.
         * @minimum 1
         * @maximum 1000
         */
        boardsLimit?: number;
        /**
         * Maximum number of members to return.
         * @minimum 1
         * @maximum 1000
         */
        membersLimit?: number;
      };
      output: {
        /** Search results returned by Trello. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Update a Trello card by ID or short link. */
    "trello.update_card": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Card name.
         * @minLength 1
         */
        name?: string;
        /** Card description. */
        description?: string;
        /**
         * Card due date in ISO 8601 format.
         * @format date-time
         */
        due?: string | null;
        /** Card position. Use top, bottom, or a numeric position. */
        position?: "top" | "bottom" | number;
        /**
         * Trello member IDs to assign to the card.
         * @minItems 1
         */
        memberIds?: Array<string>;
        /**
         * Trello label IDs to assign to the card.
         * @minItems 1
         */
        labelIds?: Array<string>;
        /**
         * Trello list ID to move the card into.
         * @minLength 1
         */
        listId?: string;
        /** Whether the card should be closed. */
        closed?: boolean;
        /** Whether the card due date should be marked complete. */
        dueComplete?: boolean;
      };
      output: {
        /** A normalized Trello card returned by the REST API. */
        card: {
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Trello check item state on a card. */
    "trello.update_checkitem_state": {
      input: {
        /**
         * Trello card ID or short link.
         * @minLength 1
         */
        cardId: string;
        /**
         * Trello check item ID.
         * @minLength 1
         */
        checkItemId: string;
        /** New check item state. */
        state: "complete" | "incomplete";
      };
      output: {
        /** A normalized Trello card returned by the REST API. */
        card: {
          /** Trello card ID. */
          id?: string;
          /** Trello board ID that owns the card. */
          boardId?: string;
          /** Trello list ID that contains the card. */
          listId?: string;
          /** Card name. */
          name?: string;
          /** Card description. */
          description?: string;
          /**
           * Public Trello card URL.
           * @format uri
           */
          url?: string;
          /**
           * Short Trello card URL.
           * @format uri
           */
          shortUrl?: string;
          /** Whether the card is closed. */
          closed?: boolean;
          /**
           * Card due date in ISO 8601 format.
           * @format date-time
           */
          due?: string | null;
          /** Whether the card due date is marked complete. */
          dueComplete?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Trello list name or position. */
    "trello.update_list": {
      input: {
        /**
         * Trello list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * List name.
         * @minLength 1
         */
        name?: string;
        /** List position. Use top, bottom, or a numeric position. */
        position?: "top" | "bottom" | number;
      };
      output: {
        /** A normalized Trello list returned by the REST API. */
        list: {
          /** Trello list ID. */
          id?: string;
          /** Trello board ID that owns the list. */
          boardId?: string;
          /** List name. */
          name?: string;
          /** Whether the list is closed. */
          closed?: boolean;
          /** List position on the board. */
          position?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
