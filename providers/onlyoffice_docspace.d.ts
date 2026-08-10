import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current user associated with the connected ONLYOFFICE DocSpace API key. */
    "onlyoffice_docspace.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A resource returned by ONLYOFFICE DocSpace. */
        user: Record<string, unknown>;
      };
    };
    /** List file and subfolder metadata in an ONLYOFFICE DocSpace folder or room. */
    "onlyoffice_docspace.get_folder_contents": {
      input: {
        /**
         * The numeric folder or room ID to inspect.
         * @exclusiveMinimum 0
         */
        folderId: number;
        /**
         * Maximum number of entries to return.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * Zero-based index from which to start returning entries.
         * @minimum 0
         */
        startIndex?: number;
      };
      output: {
        /** File metadata returned for the folder. */
        files: Array<Record<string, unknown>>;
        /** Subfolder metadata returned for the folder. */
        folders: Array<Record<string, unknown>>;
        /** A resource returned by ONLYOFFICE DocSpace. */
        current: Record<string, unknown> | null;
        /** Pagination metadata returned by ONLYOFFICE DocSpace. */
        pagination: {
          /** Number of resources in this response. */
          count: number | null;
          /** Total number of matching resources when reported. */
          total: number | null;
          /** Start index used for this response when reported. */
          startIndex: number | null;
        };
      };
    };
    /** Get information about one ONLYOFFICE DocSpace room. */
    "onlyoffice_docspace.get_room": {
      input: {
        /**
         * The numeric room ID to retrieve.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** A resource returned by ONLYOFFICE DocSpace. */
        room: Record<string, unknown>;
      };
    };
    /** Get one ONLYOFFICE DocSpace user by user ID. */
    "onlyoffice_docspace.get_user": {
      input: {
        /**
         * The user ID to retrieve.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** A resource returned by ONLYOFFICE DocSpace. */
        user: Record<string, unknown>;
      };
    };
    /** List rooms available to the connected ONLYOFFICE DocSpace API key. */
    "onlyoffice_docspace.list_rooms": {
      input: {
        /**
         * Maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * Zero-based index from which to start returning resources.
         * @minimum 0
         */
        startIndex?: number;
        /**
         * Text used to filter matching resources.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Rooms returned by ONLYOFFICE DocSpace. */
        rooms: Array<Record<string, unknown>>;
        /** Pagination metadata returned by ONLYOFFICE DocSpace. */
        pagination: {
          /** Number of resources in this response. */
          count: number | null;
          /** Total number of matching resources when reported. */
          total: number | null;
          /** Start index used for this response when reported. */
          startIndex: number | null;
        };
      };
    };
    /** List users in the connected ONLYOFFICE DocSpace portal. */
    "onlyoffice_docspace.list_users": {
      input: Record<string, never>;
      output: {
        /** Users returned by ONLYOFFICE DocSpace. */
        users: Array<Record<string, unknown>>;
        /** Pagination metadata returned by ONLYOFFICE DocSpace. */
        pagination: {
          /** Number of resources in this response. */
          count: number | null;
          /** Total number of matching resources when reported. */
          total: number | null;
          /** Start index used for this response when reported. */
          startIndex: number | null;
        };
      };
    };
  }
}
