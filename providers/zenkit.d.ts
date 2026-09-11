import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an entry in a Zenkit collection with collection-defined field values. */
    "zenkit.create_entry": {
      input: {
        /**
         * The numeric ID of the collection that will contain the entry.
         * @exclusiveMinimum 0
         */
        listId: number;
        /** Collection field values keyed by the Zenkit field UUID and business data key. */
        data: Record<string, unknown>;
        /** The entry sort position as a number, or highest or lowest. */
        sortOrder?: string | number;
      };
      output: {
        /** The raw object returned by Zenkit. */
        entry: Record<string, unknown>;
      };
    };
    /** Delete an entry from a Zenkit collection. */
    "zenkit.delete_entry": {
      input: {
        /** The collection numeric ID, short ID, UUID, or name. */
        listId: string | number;
        /** The entry numeric ID, short ID, UUID, or name. */
        entryId: string | number;
      };
      output: {
        /** Whether Zenkit accepted the delete operation. */
        deleted: boolean;
        /** The response payload returned by Zenkit, if any. */
        response: unknown;
      };
    };
    /** Get one entry from a Zenkit collection. */
    "zenkit.get_entry": {
      input: {
        /** The collection numeric ID, short ID, UUID, or name. */
        listId: string | number;
        /** The entry numeric ID, short ID, UUID, or name. */
        entryId: string | number;
      };
      output: {
        /** The raw object returned by Zenkit. */
        entry: Record<string, unknown>;
      };
    };
    /** Get a Zenkit collection by its numeric ID, short ID, UUID, or name. */
    "zenkit.get_list": {
      input: {
        /** The collection numeric ID, short ID, UUID, or name. */
        listId: string | number;
      };
      output: {
        /** The raw object returned by Zenkit. */
        resource: Record<string, unknown>;
      };
    };
    /** Get a Zenkit workspace by its numeric ID, short ID, UUID, or name. */
    "zenkit.get_workspace": {
      input: {
        /** The workspace numeric ID, short ID, UUID, or name. */
        workspaceId: string | number;
      };
      output: {
        /** The raw object returned by Zenkit. */
        resource: Record<string, unknown>;
      };
    };
    /** List all Zenkit workspaces and collections accessible to the connected user. */
    "zenkit.list_workspaces_and_lists": {
      input: Record<string, never>;
      output: {
        /** The workspaces returned by Zenkit, including their nested lists. */
        workspaces: Array<Record<string, unknown>>;
      };
    };
    /** Search entries across the connected user's Zenkit collections. */
    "zenkit.search_entries": {
      input: {
        /**
         * The text to search for.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of entries to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Collection numeric IDs that Zenkit should search first. */
        preferredListIds?: Array<number>;
        /** Entry UUIDs to exclude from the search results. */
        excludeEntryUuids?: Array<string>;
        /** Whether to search archived entries. */
        searchInArchive?: boolean;
        /** Whether to include collections related to the results. */
        includeRelatedLists?: boolean;
        /** Whether to include workspaces related to the results. */
        includeRelatedWorkspaces?: boolean;
        /** Whether to include collection field definitions related to the results. */
        includeRelatedListElements?: boolean;
      };
      output: {
        /** The raw object returned by Zenkit. */
        results: Record<string, unknown>;
      };
    };
    /** Update collection-defined field values on a Zenkit entry. */
    "zenkit.update_entry": {
      input: {
        /**
         * The numeric ID of the collection containing the entry.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The numeric ID of the entry to update.
         * @exclusiveMinimum 0
         */
        entryId: number;
        /** Collection field values keyed by the Zenkit field UUID and business data key. */
        data: Record<string, unknown>;
        /** The Zenkit update action used for array-valued fields when required by the field type. */
        updateAction?: string;
      };
      output: {
        /** The raw object returned by Zenkit. */
        entry: Record<string, unknown>;
      };
    };
  }
}
