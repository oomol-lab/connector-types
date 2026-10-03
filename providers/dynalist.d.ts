import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a node to the configured Dynalist inbox. Configure an inbox before calling this action. */
    "dynalist.add_to_inbox": {
      input: {
        /**
         * The zero-based position; -1 appends at the end.
         * @minimum -1
         */
        index?: number;
        /** The node title. */
        content?: string;
        /** The node note. */
        note?: string;
        /** Whether the node is checked. */
        checked?: boolean;
        /** Whether the node has a checkbox. */
        checkbox?: boolean;
        /**
         * The heading level; 0 disables headings.
         * @minimum 0
         * @maximum 3
         */
        heading?: number;
        /**
         * The color label; 0 removes the label.
         * @minimum 0
         * @maximum 6
         */
        color?: number;
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /**
         * The Dynalist ID.
         * @minLength 1
         */
        file_id?: string;
        /**
         * The Dynalist ID.
         * @minLength 1
         */
        node_id?: string;
        /**
         * The zero-based position; -1 appends at the end.
         * @minimum -1
         */
        index?: number;
        [key: string]: unknown;
      };
    };
    /** Get Dynalist document versions. Inaccessible or missing documents are omitted. */
    "dynalist.check_for_updates": {
      input: {
        /** The document IDs to check. */
        file_ids: Array<string>;
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /** Document IDs mapped to current versions. */
        versions?: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Insert, edit, move, or delete Dynalist nodes in a batch. Content edits replace the supplied fields. */
    "dynalist.edit_document": {
      input: {
        /**
         * The Dynalist ID.
         * @minLength 1
         */
        file_id: string;
        /**
         * The changes in execution order.
         * @minItems 1
         */
        changes: Array<{
          /** The change operation. */
          action: "insert";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          parent_id: string;
          /**
           * The zero-based position; -1 appends at the end.
           * @minimum -1
           */
          index: number;
          /** The node title. */
          content: string;
          /** The node note. */
          note?: string;
          /** Whether the node is checked. */
          checked?: boolean;
          /** Whether the node has a checkbox. */
          checkbox?: boolean;
          /**
           * The heading level; 0 disables headings.
           * @minimum 0
           * @maximum 3
           */
          heading?: number;
          /**
           * The color label; 0 removes the label.
           * @minimum 0
           * @maximum 6
           */
          color?: number;
        } | {
          /** The change operation. */
          action: "edit";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          node_id: string;
          /** The node title. */
          content?: string;
          /** The node note. */
          note?: string;
          /** Whether the node is checked. */
          checked?: boolean;
          /** Whether the node has a checkbox. */
          checkbox?: boolean;
          /**
           * The heading level; 0 disables headings.
           * @minimum 0
           * @maximum 3
           */
          heading?: number;
          /**
           * The color label; 0 removes the label.
           * @minimum 0
           * @maximum 6
           */
          color?: number;
        } | {
          /** The change operation. */
          action: "move";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          node_id: string;
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          parent_id: string;
          /**
           * The zero-based position; -1 appends at the end.
           * @minimum -1
           */
          index: number;
        } | {
          /** The change operation. */
          action: "delete";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          node_id: string;
        }>;
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /** Whether each requested change succeeded, in request order. */
        results?: Array<boolean>;
        /** The newly inserted node IDs in request order. */
        new_node_ids?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Create, rename, or move Dynalist documents and folders in a batch. Inspect results for partial failures. */
    "dynalist.edit_files": {
      input: {
        /**
         * The changes in execution order.
         * @minItems 1
         */
        changes: Array<{
          /** The change operation. */
          action: "create";
          /** The file type. */
          type: "document" | "folder";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          parent_id: string;
          /**
           * The zero-based position; -1 appends at the end.
           * @minimum -1
           */
          index: number;
          /** The file title. */
          title?: string;
        } | {
          /** The change operation. */
          action: "edit";
          /** The file type. */
          type: "document" | "folder";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          file_id: string;
          /** The file title. */
          title: string;
        } | {
          /** The change operation. */
          action: "move";
          /** The file type. */
          type: "document" | "folder";
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          file_id: string;
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          parent_id: string;
          /**
           * The zero-based position; -1 appends at the end.
           * @minimum -1
           */
          index: number;
        }>;
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /** Whether each requested change succeeded, in request order. */
        results?: Array<boolean>;
        /** The successfully created file IDs in request order. */
        created?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Read a Dynalist inbox preference. */
    "dynalist.get_preference": {
      input: {
        /** The preference key. */
        key: "inbox_location" | "inbox_move_position";
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /** The preference key. */
        key?: "inbox_location" | "inbox_move_position";
        /** The preference value. */
        value?: string;
        [key: string]: unknown;
      };
    };
    /** List all Dynalist documents and folders. */
    "dynalist.list_files": {
      input: Record<string, never>;
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /**
         * The Dynalist ID.
         * @minLength 1
         */
        root_file_id?: string;
        /** The documents and folders. */
        files?: Array<{
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          id?: string;
          /** The file title. */
          title?: string;
          /** The file type. */
          type?: "document" | "folder";
          /** The permission level: 0 none, 1 read, 2 edit, 3 manage, 4 owner. */
          permission?: number;
          /** Whether the folder is collapsed. */
          collapsed?: boolean;
          /** The child IDs. */
          children?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read a Dynalist document and its nodes. */
    "dynalist.read_document": {
      input: {
        /**
         * The Dynalist ID.
         * @minLength 1
         */
        file_id: string;
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        /**
         * The Dynalist ID.
         * @minLength 1
         */
        file_id?: string;
        /** The file title. */
        title?: string;
        /** The document version. */
        version?: number;
        /** The document nodes. */
        nodes?: Array<{
          /**
           * The Dynalist ID.
           * @minLength 1
           */
          id?: string;
          /** The node title. */
          content?: string;
          /** The node note. */
          note?: string;
          /** Whether the node is checked. */
          checked?: boolean;
          /** Whether the node has a checkbox. */
          checkbox?: boolean;
          /**
           * The heading level; 0 disables headings.
           * @minimum 0
           * @maximum 3
           */
          heading?: number;
          /**
           * The color label; 0 removes the label.
           * @minimum 0
           * @maximum 6
           */
          color?: number;
          /** The child IDs. */
          children?: Array<string>;
          /** The creation time in Unix milliseconds. */
          created?: number;
          /** The modification time in Unix milliseconds. */
          modified?: number;
          /** Whether the node is collapsed. */
          collapsed?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Set the Dynalist inbox location or insertion position. */
    "dynalist.set_preference": {
      input: {
        /** The preference key. */
        key: "inbox_location";
        /** The inbox file ID, optionally followed by /node ID. */
        value: string;
      } | {
        /** The preference key. */
        key: "inbox_move_position";
        /** The insertion position. */
        value: "top" | "bottom";
      };
      output: {
        /** The Dynalist result code; OK indicates success. */
        _code?: string;
        /** The Dynalist result message. */
        _msg?: string;
        [key: string]: unknown;
      };
    };
  }
}
