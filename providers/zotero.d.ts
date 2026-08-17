import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one collection in a Zotero user or group library. */
    "zotero.create_collection": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The name of the new Zotero collection.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The parent collection key, or false for a root collection. */
        parentCollection?: string | false;
      };
      output: {
        /** A Zotero collection resource with stable identity fields and provider-defined metadata. */
        collection: {
          /**
           * The Zotero collection key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero collection version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero collection. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the collection. */
          meta?: Record<string, unknown>;
          /** The editable Zotero collection data. */
          data: {
            /**
             * The Zotero collection key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero collection version.
             * @minimum 0
             */
            version: number;
            /** The collection name. */
            name: string;
            /** The parent collection key, or false for a root collection. */
            parentCollection: string | false;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The Zotero library version assigned by the write, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** Create one bibliographic item in a Zotero user or group library. */
    "zotero.create_item": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /** The editable Zotero JSON for a new item. Fields beyond itemType depend on the item type. */
        item: {
          /**
           * The Zotero item type to create.
           * @minLength 1
           * @pattern \S
           */
          itemType: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A Zotero item resource with stable identity fields and provider-defined metadata. */
        item: {
          /**
           * The Zotero item key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero item version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero item. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the Zotero item. */
          meta?: Record<string, unknown>;
          /** The editable Zotero item data. */
          data: {
            /**
             * The Zotero item key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero item version.
             * @minimum 0
             */
            version: number;
            /**
             * The Zotero item type.
             * @minLength 1
             */
            itemType: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The Zotero library version assigned by the write, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** Delete one Zotero collection at a known version. */
    "zotero.delete_collection": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The key of the Zotero collection to delete.
         * @minLength 8
         * @maxLength 8
         */
        collectionKey: string;
        /**
         * The current collection version used for concurrency control.
         * @minimum 0
         */
        version: number;
      };
      output: {
        /**
         * The key of the deleted Zotero collection.
         * @minLength 8
         * @maxLength 8
         */
        collectionKey: string;
        /** Whether Zotero accepted the collection deletion. */
        deleted: boolean;
        /** The Zotero library version assigned by the deletion, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** Delete one Zotero item at a known version. */
    "zotero.delete_item": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The key of the Zotero item to delete.
         * @minLength 8
         * @maxLength 8
         */
        itemKey: string;
        /**
         * The current item version used for concurrency control.
         * @minimum 0
         */
        version: number;
      };
      output: {
        /**
         * The key of the deleted Zotero item.
         * @minLength 8
         * @maxLength 8
         */
        itemKey: string;
        /** Whether Zotero accepted the item deletion. */
        deleted: boolean;
        /** The Zotero library version assigned by the deletion, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** Retrieve one collection from a Zotero user or group library. */
    "zotero.get_collection": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The key of the Zotero collection to retrieve.
         * @minLength 8
         * @maxLength 8
         */
        collectionKey: string;
      };
      output: {
        /** A Zotero collection resource with stable identity fields and provider-defined metadata. */
        collection: {
          /**
           * The Zotero collection key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero collection version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero collection. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the collection. */
          meta?: Record<string, unknown>;
          /** The editable Zotero collection data. */
          data: {
            /**
             * The Zotero collection key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero collection version.
             * @minimum 0
             */
            version: number;
            /** The collection name. */
            name: string;
            /** The parent collection key, or false for a root collection. */
            parentCollection: string | false;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * The current Zotero collection version.
         * @minimum 0
         */
        version: number;
      };
    };
    /** Retrieve one item from a Zotero user or group library. */
    "zotero.get_item": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The key of the Zotero item to retrieve.
         * @minLength 8
         * @maxLength 8
         */
        itemKey: string;
      };
      output: {
        /** A Zotero item resource with stable identity fields and provider-defined metadata. */
        item: {
          /**
           * The Zotero item key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero item version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero item. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the Zotero item. */
          meta?: Record<string, unknown>;
          /** The editable Zotero item data. */
          data: {
            /**
             * The Zotero item key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero item version.
             * @minimum 0
             */
            version: number;
            /**
             * The Zotero item type.
             * @minLength 1
             */
            itemType: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * The current Zotero item version.
         * @minimum 0
         */
        version: number;
      };
    };
    /** List collections in a Zotero user or group library. */
    "zotero.list_collections": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The maximum number of objects to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based index of the first object to return.
         * @minimum 0
         */
        start?: number;
        /** Whether to return only collections that do not have a parent collection. */
        topLevelOnly?: boolean;
      };
      output: {
        /** The matching Zotero collections. */
        collections: Array<{
          /**
           * The Zotero collection key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero collection version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero collection. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the collection. */
          meta?: Record<string, unknown>;
          /** The editable Zotero collection data. */
          data: {
            /**
             * The Zotero collection key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero collection version.
             * @minimum 0
             */
            version: number;
            /** The collection name. */
            name: string;
            /** The parent collection key, or false for a root collection. */
            parentCollection: string | false;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching Zotero collections.
         * @minimum 0
         */
        totalResults: number;
        /** The start index for the next page, or null at the end. */
        nextStart: number | null;
        /** The Zotero library version returned for this page, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** List Zotero groups accessible to the user connected by the current API key. */
    "zotero.list_groups": {
      input: {
        /**
         * The maximum number of objects to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based index of the first object to return.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** The Zotero groups accessible to the connected user. */
        groups: Array<{
          /**
           * The numeric Zotero group ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The current Zotero group metadata version.
           * @minimum 0
           */
          version: number;
          /** The links returned for the Zotero group. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the Zotero group. */
          meta?: Record<string, unknown>;
          /** The Zotero group data. */
          data: {
            /**
             * The numeric Zotero group ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The current Zotero group metadata version.
             * @minimum 0
             */
            version: number;
            /** The Zotero group name. */
            name: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching Zotero groups.
         * @minimum 0
         */
        totalResults: number;
        /** The start index for the next page, or null at the end. */
        nextStart: number | null;
      };
    };
    /** List or search items in a Zotero user or group library. */
    "zotero.list_items": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The maximum number of objects to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based index of the first object to return.
         * @minimum 0
         */
        start?: number;
        /**
         * The collection whose items should be returned.
         * @minLength 8
         * @maxLength 8
         */
        collectionKey?: string;
        /** Whether to return only top-level items and omit child notes or attachments. */
        topLevelOnly?: boolean;
        /**
         * The Zotero quick-search phrase.
         * @minLength 1
         * @pattern \S
         */
        q?: string;
        /** The Zotero quick-search mode. */
        qmode?: "titleCreatorYear" | "everything";
        /**
         * The Zotero item-type search expression.
         * @minLength 1
         * @pattern \S
         */
        itemType?: string;
        /**
         * The Zotero tag search expression.
         * @minLength 1
         * @pattern \S
         */
        tag?: string;
        /**
         * Return only items modified after this Zotero library version.
         * @minimum 0
         */
        since?: number;
        /** Whether to include matching items in the trash. */
        includeTrashed?: boolean;
        /** The Zotero item field used to sort the result list. */
        sort?: "dateAdded" | "dateModified" | "title" | "creator" | "itemType" | "date" | "publisher" | "publicationTitle" | "journalAbbreviation" | "language" | "accessDate" | "libraryCatalog" | "callNumber" | "rights" | "addedBy";
        /** The Zotero item sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The matching Zotero items. */
        items: Array<{
          /**
           * The Zotero item key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero item version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero item. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the Zotero item. */
          meta?: Record<string, unknown>;
          /** The editable Zotero item data. */
          data: {
            /**
             * The Zotero item key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero item version.
             * @minimum 0
             */
            version: number;
            /**
             * The Zotero item type.
             * @minLength 1
             */
            itemType: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching Zotero items.
         * @minimum 0
         */
        totalResults: number;
        /** The start index for the next page, or null at the end. */
        nextStart: number | null;
        /** The Zotero library version returned for this page, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** Replace the editable fields of one Zotero collection at a known version. */
    "zotero.update_collection": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The key of the Zotero collection to update.
         * @minLength 8
         * @maxLength 8
         */
        collectionKey: string;
        /**
         * The current collection version used for concurrency control.
         * @minimum 0
         */
        version: number;
        /**
         * The complete collection name to save.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The parent collection key, or false for a root collection. */
        parentCollection: string | false;
      };
      output: {
        /** A Zotero collection resource with stable identity fields and provider-defined metadata. */
        collection: {
          /**
           * The Zotero collection key.
           * @minLength 8
           * @maxLength 8
           */
          key: string;
          /**
           * The current Zotero collection version.
           * @minimum 0
           */
          version: number;
          /** The Zotero library metadata attached to an item or collection. */
          library?: {
            /** The type of Zotero library. */
            type: "user" | "group";
            /**
             * The numeric Zotero library ID.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The display name of the Zotero library. */
            name: string;
            [key: string]: unknown;
          };
          /** The links returned for the Zotero collection. */
          links?: Record<string, unknown>;
          /** The computed metadata returned for the collection. */
          meta?: Record<string, unknown>;
          /** The editable Zotero collection data. */
          data: {
            /**
             * The Zotero collection key.
             * @minLength 8
             * @maxLength 8
             */
            key: string;
            /**
             * The current Zotero collection version.
             * @minimum 0
             */
            version: number;
            /** The collection name. */
            name: string;
            /** The parent collection key, or false for a root collection. */
            parentCollection: string | false;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The Zotero collection version assigned by the write, or null when absent. */
        libraryVersion: number | null;
      };
    };
    /** Partially update one Zotero item at a known version. */
    "zotero.update_item": {
      input: {
        /** The Zotero library type. Omit it to use the connected user's library. */
        libraryType?: "user" | "group";
        /**
         * The numeric Zotero user or group library ID. User libraries default to the connected user's ID.
         * @exclusiveMinimum 0
         */
        libraryId?: number;
        /**
         * The key of the Zotero item to update.
         * @minLength 8
         * @maxLength 8
         */
        itemKey: string;
        /**
         * The current item version used for concurrency control.
         * @minimum 0
         */
        version: number;
        /** The editable Zotero fields to patch. Omitted properties remain unchanged; arrays replace the complete upstream list. */
        changes: Record<string, unknown>;
      };
      output: {
        /**
         * The key of the updated Zotero item.
         * @minLength 8
         * @maxLength 8
         */
        itemKey: string;
        /** Whether Zotero accepted the item update. */
        updated: boolean;
        /** The Zotero item version assigned by the update, or null when absent. */
        libraryVersion: number | null;
      };
    };
  }
}
