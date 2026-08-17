import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Miro board. */
    "miro.create_board": {
      input: {
        /**
         * Board name.
         * @minLength 1
         * @maxLength 60
         */
        name: string;
        /**
         * Board description.
         * @maxLength 300
         */
        description?: string;
        /**
         * Team where the board will be created.
         * @minLength 1
         */
        teamId?: string;
        /**
         * Project or space where the board will be created.
         * @minLength 1
         */
        projectId?: string;
        /** Additional provider fields returned by Miro. */
        policy?: Record<string, unknown>;
      };
      output: {
        /** A Miro board. */
        board: {
          /** Miro board identifier. */
          id?: string;
          /** Miro resource type. */
          type?: string;
          /** Miro board name. */
          name?: string;
          /** Miro board description. */
          description?: string;
          /** URL for opening the board in Miro. */
          viewLink?: string;
          /** When the board was created. */
          createdAt?: string;
          /** When the board was last modified. */
          modifiedAt?: string;
          /** A Miro user reference. */
          createdBy?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** A Miro user reference. */
          modifiedBy?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** A Miro user reference. */
          owner?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** Additional provider fields returned by Miro. */
          policy?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a sticky note on a Miro board. */
    "miro.create_sticky_note": {
      input: {
        /**
         * Unique identifier of the Miro board.
         * @minLength 1
         */
        boardId: string;
        /** Miro sticky note data. */
        data: {
          /**
           * Text or supported HTML displayed by the sticky note.
           * @minLength 1
           * @maxLength 6000
           */
          content: string;
          /** Sticky note shape. */
          shape?: "square" | "rectangle";
          [key: string]: unknown;
        };
        /** Provider-native Miro item style fields. */
        style?: {
          /** Text color. */
          color?: string;
          /** Item fill color. */
          fillColor?: string;
          /**
           * Fill opacity from 0 to 1.
           * @minimum 0
           * @maximum 1
           */
          fillOpacity?: number;
          /** Font family used by a text item. */
          fontFamily?: string;
          /**
           * Font size used by a text item.
           * @exclusiveMinimum 0
           */
          fontSize?: number;
          /** Horizontal text alignment. */
          textAlign?: "left" | "center" | "right";
          /** Vertical text alignment. */
          textAlignVertical?: "top" | "middle" | "bottom";
          [key: string]: unknown;
        };
        /** Position of the item on the board. */
        position?: {
          /** Horizontal coordinate relative to the origin. */
          x?: number;
          /** Vertical coordinate relative to the origin. */
          y?: number;
          /** Coordinate origin used by Miro. */
          origin?: "center";
          [key: string]: unknown;
        };
        /** Geometry of the Miro sticky note. */
        geometry?: {
          /**
           * Item width.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * Item height.
           * @exclusiveMinimum 0
           */
          height?: number;
          /** Clockwise item rotation in degrees. */
          rotation?: number;
          [key: string]: unknown;
        };
        /** Optional parent frame for the item. */
        parent?: {
          /**
           * Identifier of the parent frame.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A Miro board item. */
        item: {
          /** Miro item identifier. */
          id?: string;
          /** Miro item type. */
          type?: string;
          /** Additional provider fields returned by Miro. */
          data?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          style?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          position?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          geometry?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          parent?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a text item on a Miro board. */
    "miro.create_text": {
      input: {
        /**
         * Unique identifier of the Miro board.
         * @minLength 1
         */
        boardId: string;
        /** Miro item data. */
        data: {
          /**
           * Text or HTML content displayed by the item.
           * @minLength 1
           * @maxLength 6000
           */
          content: string;
          [key: string]: unknown;
        };
        /** Provider-native Miro item style fields. */
        style?: {
          /** Text color. */
          color?: string;
          /** Item fill color. */
          fillColor?: string;
          /**
           * Fill opacity from 0 to 1.
           * @minimum 0
           * @maximum 1
           */
          fillOpacity?: number;
          /** Font family used by a text item. */
          fontFamily?: string;
          /**
           * Font size used by a text item.
           * @exclusiveMinimum 0
           */
          fontSize?: number;
          /** Horizontal text alignment. */
          textAlign?: "left" | "center" | "right";
          /** Vertical text alignment. */
          textAlignVertical?: "top" | "middle" | "bottom";
          [key: string]: unknown;
        };
        /** Position of the item on the board. */
        position?: {
          /** Horizontal coordinate relative to the origin. */
          x?: number;
          /** Vertical coordinate relative to the origin. */
          y?: number;
          /** Coordinate origin used by Miro. */
          origin?: "center";
          [key: string]: unknown;
        };
        /** Geometry of the Miro text item. */
        geometry?: {
          /**
           * Text item width.
           * @exclusiveMinimum 0
           */
          width?: number;
          /** Clockwise text item rotation in degrees. */
          rotation?: number;
        };
        /** Optional parent frame for the item. */
        parent?: {
          /**
           * Identifier of the parent frame.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A Miro board item. */
        item: {
          /** Miro item identifier. */
          id?: string;
          /** Miro item type. */
          type?: string;
          /** Additional provider fields returned by Miro. */
          data?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          style?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          position?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          geometry?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          parent?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Miro board by ID. */
    "miro.get_board": {
      input: {
        /**
         * Unique identifier of the Miro board.
         * @minLength 1
         */
        boardId: string;
      };
      output: {
        /** A Miro board. */
        board: {
          /** Miro board identifier. */
          id?: string;
          /** Miro resource type. */
          type?: string;
          /** Miro board name. */
          name?: string;
          /** Miro board description. */
          description?: string;
          /** URL for opening the board in Miro. */
          viewLink?: string;
          /** When the board was created. */
          createdAt?: string;
          /** When the board was last modified. */
          modifiedAt?: string;
          /** A Miro user reference. */
          createdBy?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** A Miro user reference. */
          modifiedBy?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** A Miro user reference. */
          owner?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** Additional provider fields returned by Miro. */
          policy?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one item from a Miro board. */
    "miro.get_item": {
      input: {
        /**
         * Unique identifier of the Miro board.
         * @minLength 1
         */
        boardId: string;
        /**
         * Unique identifier of the Miro board item.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** A Miro board item. */
        item: {
          /** Miro item identifier. */
          id?: string;
          /** Miro item type. */
          type?: string;
          /** Additional provider fields returned by Miro. */
          data?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          style?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          position?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          geometry?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          parent?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Miro boards visible to the connected user. */
    "miro.list_boards": {
      input: {
        /**
         * Return boards visible in this Miro team.
         * @minLength 1
         */
        teamId?: string;
        /**
         * Return boards in this Miro project or space.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Search text matched against board names and descriptions.
         * @maxLength 500
         */
        query?: string;
        /**
         * Return boards owned by this Miro user ID.
         * @minLength 1
         */
        owner?: string;
        /**
         * Maximum number of boards to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based offset of the first board to return.
         * @minimum 0
         */
        offset?: number;
        /** Miro board sort order. */
        sort?: "default" | "last_modified" | "last_opened" | "last_created" | "alphabetically";
      };
      output: {
        /** Boards returned by Miro. */
        boards: Array<{
          /** Miro board identifier. */
          id?: string;
          /** Miro resource type. */
          type?: string;
          /** Miro board name. */
          name?: string;
          /** Miro board description. */
          description?: string;
          /** URL for opening the board in Miro. */
          viewLink?: string;
          /** When the board was created. */
          createdAt?: string;
          /** When the board was last modified. */
          modifiedAt?: string;
          /** A Miro user reference. */
          createdBy?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** A Miro user reference. */
          modifiedBy?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** A Miro user reference. */
          owner?: {
            /** Miro user identifier. */
            id?: string;
            /** Miro user display name. */
            name?: string;
            /** Miro resource type. */
            type?: string;
            [key: string]: unknown;
          };
          /** Additional provider fields returned by Miro. */
          policy?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Offset pagination returned by Miro. */
        pagination: {
          /** Requested page size. */
          limit: number;
          /** Zero-based offset. */
          offset: number;
          /** Number of boards returned. */
          size: number;
        };
      };
    };
    /** List items on a Miro board. */
    "miro.list_items": {
      input: {
        /**
         * Unique identifier of the Miro board.
         * @minLength 1
         */
        boardId: string;
        /**
         * Maximum number of items to return.
         * @minimum 10
         * @maximum 50
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by Miro.
         * @minLength 1
         */
        cursor?: string;
        /** Miro item type. */
        type?: string;
      };
      output: {
        /** Items returned by Miro. */
        items: Array<{
          /** Miro item identifier. */
          id?: string;
          /** Miro item type. */
          type?: string;
          /** Additional provider fields returned by Miro. */
          data?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          style?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          position?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          geometry?: Record<string, unknown>;
          /** Additional provider fields returned by Miro. */
          parent?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Cursor pagination returned by Miro. */
        pagination: {
          /** Cursor for the next page. */
          cursor: string | null;
        };
      };
    };
  }
}
