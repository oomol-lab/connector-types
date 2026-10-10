import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Memento Database entry using existing library field IDs. */
    "memento_database.create_entry": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
        /** The entry fields. Use field IDs from get_library and values matching their field types. */
        fields: Array<{
          /** The field ID defined in the library. */
          id: number;
          /** The JSON value accepted by the library field type. */
          value: unknown;
        }>;
      };
      output: {
        /** The entry ID. */
        id: string;
        /** The entry author. */
        author?: string;
        /** The entry creation timestamp. */
        createdTime?: string;
        /** The entry modification timestamp. */
        modifiedTime?: string;
        /** The entry revision. */
        revision?: number;
        /** The entry status. */
        status?: string;
        /** The entry size reported by Memento Database. */
        size?: number;
        /** The entry fields. Use field IDs from get_library and values matching their field types. */
        fields?: Array<{
          /** The field ID defined in the library. */
          id: number;
          /** The JSON value accepted by the library field type. */
          value: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a Memento Database entry from a library. */
    "memento_database.delete_entry": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
        /**
         * The entry ID returned by Memento Database.
         * @minLength 1
         */
        entryId: string;
      };
      output: {
        /** Whether the upstream deletion request succeeded. */
        success: boolean;
      };
    };
    /** Get a single Memento Database entry and its field values. */
    "memento_database.get_entry": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
        /**
         * The entry ID returned by Memento Database.
         * @minLength 1
         */
        entryId: string;
      };
      output: {
        /** The entry ID. */
        id: string;
        /** The entry author. */
        author?: string;
        /** The entry creation timestamp. */
        createdTime?: string;
        /** The entry modification timestamp. */
        modifiedTime?: string;
        /** The entry revision. */
        revision?: number;
        /** The entry status. */
        status?: string;
        /** The entry size reported by Memento Database. */
        size?: number;
        /** The entry fields. Use field IDs from get_library and values matching their field types. */
        fields?: Array<{
          /** The field ID defined in the library. */
          id: number;
          /** The JSON value accepted by the library field type. */
          value: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get a Memento Database library and its field definitions before editing entries. */
    "memento_database.get_library": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
      };
      output: {
        /** The library ID. */
        id: string;
        /** The library name. */
        name: string;
        /** The library owner. */
        owner?: string;
        /** The library creation timestamp. */
        createdTime?: string;
        /** The library modification timestamp. */
        modifiedTime?: string;
        /** The library revision. */
        revision?: number;
        /** The library size reported by Memento Database. */
        size?: number;
        /** The library field definitions. */
        fields?: Array<{
          /** The field ID defined in the library. */
          id: number;
          /** The library field type. */
          type: string;
          /** The library field name. */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List one page of Memento Database entries, optionally starting at a library revision. */
    "memento_database.list_entries": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
        /**
         * The maximum number of entries per page. The upstream default is 50.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The nextPageToken from the previous response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * Comma-separated field IDs or *all. Defaults to *all to include field values.
         * @minLength 1
         */
        fields?: string;
        /** Return entries updated or created at or after this revision. */
        startRevision?: number;
      };
      output: {
        /** The entries in this response page. */
        entries: Array<{
          /** The entry ID. */
          id: string;
          /** The entry author. */
          author?: string;
          /** The entry creation timestamp. */
          createdTime?: string;
          /** The entry modification timestamp. */
          modifiedTime?: string;
          /** The entry revision. */
          revision?: number;
          /** The entry status. */
          status?: string;
          /** The entry size reported by Memento Database. */
          size?: number;
          /** The entry fields. Use field IDs from get_library and values matching their field types. */
          fields?: Array<{
            /** The field ID defined in the library. */
            id: number;
            /** The JSON value accepted by the library field type. */
            value: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The continuation token, when another page is available. */
        nextPageToken?: string;
        /** The library revision returned with the page. */
        revision?: number;
        [key: string]: unknown;
      };
    };
    /** List the Memento Database libraries accessible to the connected account. */
    "memento_database.list_libraries": {
      input: Record<string, never>;
      output: {
        /** The library metadata list. */
        libraries: Array<{
          /** The library ID. */
          id: string;
          /** The library name. */
          name: string;
          /** The library owner. */
          owner?: string;
          /** The library creation timestamp. */
          createdTime?: string;
          /** The library modification timestamp. */
          modifiedTime?: string;
          /** The library revision. */
          revision?: number;
          /** The library size reported by Memento Database. */
          size?: number;
          /** The library field definitions. */
          fields?: Array<{
            /** The field ID defined in the library. */
            id: number;
            /** The library field type. */
            type: string;
            /** The library field name. */
            name: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search one page of Memento Database entries using a text query. */
    "memento_database.search_entries": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
        /**
         * The search query. Pass plain text; the connector URL-encodes it.
         * @minLength 1
         */
        q: string;
        /**
         * The nextPageToken from the previous response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * Comma-separated field IDs or *all. Defaults to *all to include field values.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The entries in this response page. */
        entries: Array<{
          /** The entry ID. */
          id: string;
          /** The entry author. */
          author?: string;
          /** The entry creation timestamp. */
          createdTime?: string;
          /** The entry modification timestamp. */
          modifiedTime?: string;
          /** The entry revision. */
          revision?: number;
          /** The entry status. */
          status?: string;
          /** The entry size reported by Memento Database. */
          size?: number;
          /** The entry fields. Use field IDs from get_library and values matching their field types. */
          fields?: Array<{
            /** The field ID defined in the library. */
            id: number;
            /** The JSON value accepted by the library field type. */
            value: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The continuation token, when another page is available. */
        nextPageToken?: string;
        /** The total number of matching entries. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** Update fields of an existing Memento Database entry. */
    "memento_database.update_entry": {
      input: {
        /**
         * The library ID returned by list_libraries.
         * @minLength 1
         */
        libraryId: string;
        /**
         * The entry ID returned by Memento Database.
         * @minLength 1
         */
        entryId: string;
        /** The entry fields. Use field IDs from get_library and values matching their field types. */
        fields: Array<{
          /** The field ID defined in the library. */
          id: number;
          /** The JSON value accepted by the library field type. */
          value: unknown;
        }>;
      };
      output: {
        /** The entry ID. */
        id: string;
        /** The entry author. */
        author?: string;
        /** The entry creation timestamp. */
        createdTime?: string;
        /** The entry modification timestamp. */
        modifiedTime?: string;
        /** The entry revision. */
        revision?: number;
        /** The entry status. */
        status?: string;
        /** The entry size reported by Memento Database. */
        size?: number;
        /** The entry fields. Use field IDs from get_library and values matching their field types. */
        fields?: Array<{
          /** The field ID defined in the library. */
          id: number;
          /** The JSON value accepted by the library field type. */
          value: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
