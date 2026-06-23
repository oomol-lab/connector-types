import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a dynamic record in a Zixflow collection. */
    "zixflow.create_collection_record": {
      input: {
        /**
         * The unique identifier of the collection.
         * @minLength 1
         */
        collectionId: string;
        /** A dynamic Zixflow collection record with fields defined by the collection attributes. */
        record: Record<string, unknown>;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The unique identifier of the created collection record. */
        recordId: string;
        /** A dynamic Zixflow collection record with fields defined by the collection attributes. */
        record: Record<string, unknown>;
      };
    };
    /** Create a dynamic entry in a Zixflow list. */
    "zixflow.create_list_entry": {
      input: {
        /**
         * The unique identifier of the list.
         * @minLength 1
         */
        listId: string;
        /** A dynamic Zixflow list entry with fields defined by the list attributes. */
        entry: Record<string, unknown>;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The unique identifier of the created list entry. */
        entryId: string;
        /** A dynamic Zixflow list entry with fields defined by the list attributes. */
        entry: Record<string, unknown>;
      };
    };
    /** Delete a dynamic record from a Zixflow collection. */
    "zixflow.delete_collection_record": {
      input: {
        /**
         * The unique identifier of the collection.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The unique identifier of the collection record.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
      };
    };
    /** Delete a dynamic entry from a Zixflow list. */
    "zixflow.delete_list_entry": {
      input: {
        /**
         * The unique identifier of the list.
         * @minLength 1
         */
        listId: string;
        /**
         * The unique identifier of the list entry.
         * @minLength 1
         */
        entryId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
      };
    };
    /** Get one Zixflow collection by ID. */
    "zixflow.get_collection": {
      input: {
        /**
         * The unique identifier of the collection.
         * @minLength 1
         */
        collectionId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** A Zixflow collection. */
        collection: {
          /** The unique identifier of the collection. */
          _id: string;
          /** The collection name. */
          name: string;
          /** The collection slug. */
          slug: string;
          /** The collection type such as people, company, deals, or custom. */
          collectionType: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one dynamic record from a Zixflow collection. */
    "zixflow.get_collection_record": {
      input: {
        /**
         * The unique identifier of the collection.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The unique identifier of the collection record.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** A dynamic Zixflow collection record with fields defined by the collection attributes. */
        record: Record<string, unknown>;
      };
    };
    /** Get one Zixflow list by ID. */
    "zixflow.get_list": {
      input: {
        /**
         * The unique identifier of the list.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** A Zixflow list. */
        list: {
          /** The unique identifier of the list. */
          _id: string;
          /** The list name. */
          name: string;
          /** The list slug. */
          slug: string;
          /** The unique identifier of the collection backing this list. */
          collectionId: string;
          /** Whether the list allows duplicate records. */
          duplicationAllowed: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one dynamic entry from a Zixflow list. */
    "zixflow.get_list_entry": {
      input: {
        /**
         * The unique identifier of the list.
         * @minLength 1
         */
        listId: string;
        /**
         * The unique identifier of the list entry.
         * @minLength 1
         */
        entryId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** A dynamic Zixflow list entry with fields defined by the list attributes. */
        entry: Record<string, unknown>;
      };
    };
    /** Get one Zixflow workspace member by ID. */
    "zixflow.get_workspace_member": {
      input: {
        /**
         * The unique identifier of the workspace member.
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** A Zixflow workspace member. */
        member: {
          /** The unique identifier of the workspace member. */
          _id: string;
          [key: string]: unknown;
        };
      };
    };
    /** List system and custom collections in the Zixflow workspace. */
    "zixflow.list_collections": {
      input: Record<string, never>;
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The collections returned by Zixflow. */
        collections: Array<{
          /** The unique identifier of the collection. */
          _id: string;
          /** The collection name. */
          name: string;
          /** The collection slug. */
          slug: string;
          /** The collection type such as people, company, deals, or custom. */
          collectionType: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Zixflow lists in the workspace. */
    "zixflow.list_lists": {
      input: Record<string, never>;
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The lists returned by Zixflow. */
        lists: Array<{
          /** The unique identifier of the list. */
          _id: string;
          /** The list name. */
          name: string;
          /** The list slug. */
          slug: string;
          /** The unique identifier of the collection backing this list. */
          collectionId: string;
          /** Whether the list allows duplicate records. */
          duplicationAllowed: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List members in the Zixflow workspace. */
    "zixflow.list_workspace_members": {
      input: Record<string, never>;
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The workspace members returned by Zixflow. */
        members: Array<{
          /** The unique identifier of the workspace member. */
          _id: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Query records from a Zixflow collection using the official filter and paging body. */
    "zixflow.query_collection_records": {
      input: {
        /**
         * The unique identifier of the collection.
         * @minLength 1
         */
        collectionId: string;
        /** Filter criteria accepted by Zixflow. */
        filter: Record<string, unknown>;
        /** Sort criteria accepted by Zixflow. */
        sort: Array<Record<string, unknown>>;
        /**
         * Maximum number of records or entries to return.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * Number of records or entries to skip before returning results.
         * @minimum 0
         */
        offset: number;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The collection records returned by Zixflow. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Query entries from a Zixflow list using the official filter and paging body. */
    "zixflow.query_list_entries": {
      input: {
        /**
         * The unique identifier of the list.
         * @minLength 1
         */
        listId: string;
        /** Filter criteria accepted by Zixflow. */
        filter: Record<string, unknown>;
        /** Sort criteria accepted by Zixflow. */
        sort: Array<Record<string, unknown>>;
        /**
         * Maximum number of records or entries to return.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * Number of records or entries to skip before returning results.
         * @minimum 0
         */
        offset: number;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
        /** The list entries returned by Zixflow. */
        entries: Array<Record<string, unknown>>;
      };
    };
    /** Update a dynamic record in a Zixflow collection. */
    "zixflow.update_collection_record": {
      input: {
        /**
         * The unique identifier of the collection.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The unique identifier of the collection record.
         * @minLength 1
         */
        recordId: string;
        /** A dynamic Zixflow collection record with fields defined by the collection attributes. */
        record: Record<string, unknown>;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
      };
    };
    /** Update a dynamic entry in a Zixflow list. */
    "zixflow.update_list_entry": {
      input: {
        /**
         * The unique identifier of the list.
         * @minLength 1
         */
        listId: string;
        /**
         * The unique identifier of the list entry.
         * @minLength 1
         */
        entryId: string;
        /** A dynamic Zixflow list entry with fields defined by the list attributes. */
        entry: Record<string, unknown>;
      };
      output: {
        /** Whether Zixflow reports the request as successful. */
        status: boolean;
        /** The human-readable message returned by Zixflow. */
        message: string;
      };
    };
  }
}
