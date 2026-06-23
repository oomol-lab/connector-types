import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Rentman contact by numeric ID. */
    "rentman.get_contact": {
      input: {
        /**
         * The numeric Rentman item ID to retrieve.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Rentman item record. */
        item: Record<string, unknown>;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Rentman contact person by numeric ID. */
    "rentman.get_contact_person": {
      input: {
        /**
         * The numeric Rentman item ID to retrieve.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Rentman item record. */
        item: Record<string, unknown>;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Rentman equipment item by numeric ID. */
    "rentman.get_equipment": {
      input: {
        /**
         * The numeric Rentman item ID to retrieve.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Rentman item record. */
        item: Record<string, unknown>;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Rentman project by numeric ID. */
    "rentman.get_project": {
      input: {
        /**
         * The numeric Rentman item ID to retrieve.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Rentman item record. */
        item: Record<string, unknown>;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rentman contact persons with optional fields, sorting, pagination, expansion, and filters. */
    "rentman.list_contact_persons": {
      input: {
        /** Comma-separated Rentman field names to include in each item. */
        fields?: string;
        /** Comma-separated Rentman sort fields, such as +id or -displayname. */
        sort?: string;
        /**
         * Maximum number of items to return. Rentman allows 1 to 1500.
         * @minimum 1
         * @maximum 1500
         */
        limit?: number;
        /**
         * Number of items to skip when using offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** Opaque Rentman cursor token from a previous page URL. */
        cursor?: string;
        /** Comma-separated linked fields to expand, using Rentman's expand syntax. */
        expand?: string;
        /** Additional Rentman filter query parameters. Keys may include operators such as distance[lte]. */
        filters?: Record<string, string>;
      };
      output: {
        /** Rentman items returned by the collection endpoint. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of items in this response.
         * @minimum 0
         */
        itemCount: number;
        /**
         * The maximum number of items requested or returned.
         * @minimum 0
         */
        limit: number;
        /**
         * The number of items skipped in this response.
         * @minimum 0
         */
        offset: number;
        /** The full Rentman next page URL, or null when no next page is available. */
        nextPageUrl: string | null;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rentman contacts with optional fields, sorting, pagination, expansion, and filters. */
    "rentman.list_contacts": {
      input: {
        /** Comma-separated Rentman field names to include in each item. */
        fields?: string;
        /** Comma-separated Rentman sort fields, such as +id or -displayname. */
        sort?: string;
        /**
         * Maximum number of items to return. Rentman allows 1 to 1500.
         * @minimum 1
         * @maximum 1500
         */
        limit?: number;
        /**
         * Number of items to skip when using offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** Opaque Rentman cursor token from a previous page URL. */
        cursor?: string;
        /** Comma-separated linked fields to expand, using Rentman's expand syntax. */
        expand?: string;
        /** Additional Rentman filter query parameters. Keys may include operators such as distance[lte]. */
        filters?: Record<string, string>;
      };
      output: {
        /** Rentman items returned by the collection endpoint. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of items in this response.
         * @minimum 0
         */
        itemCount: number;
        /**
         * The maximum number of items requested or returned.
         * @minimum 0
         */
        limit: number;
        /**
         * The number of items skipped in this response.
         * @minimum 0
         */
        offset: number;
        /** The full Rentman next page URL, or null when no next page is available. */
        nextPageUrl: string | null;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rentman equipment with optional fields, sorting, pagination, expansion, and filters. */
    "rentman.list_equipment": {
      input: {
        /** Comma-separated Rentman field names to include in each item. */
        fields?: string;
        /** Comma-separated Rentman sort fields, such as +id or -displayname. */
        sort?: string;
        /**
         * Maximum number of items to return. Rentman allows 1 to 1500.
         * @minimum 1
         * @maximum 1500
         */
        limit?: number;
        /**
         * Number of items to skip when using offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** Opaque Rentman cursor token from a previous page URL. */
        cursor?: string;
        /** Comma-separated linked fields to expand, using Rentman's expand syntax. */
        expand?: string;
        /** Additional Rentman filter query parameters. Keys may include operators such as distance[lte]. */
        filters?: Record<string, string>;
      };
      output: {
        /** Rentman items returned by the collection endpoint. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of items in this response.
         * @minimum 0
         */
        itemCount: number;
        /**
         * The maximum number of items requested or returned.
         * @minimum 0
         */
        limit: number;
        /**
         * The number of items skipped in this response.
         * @minimum 0
         */
        offset: number;
        /** The full Rentman next page URL, or null when no next page is available. */
        nextPageUrl: string | null;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Rentman projects with optional fields, sorting, pagination, expansion, and filters. */
    "rentman.list_projects": {
      input: {
        /** Comma-separated Rentman field names to include in each item. */
        fields?: string;
        /** Comma-separated Rentman sort fields, such as +id or -displayname. */
        sort?: string;
        /**
         * Maximum number of items to return. Rentman allows 1 to 1500.
         * @minimum 1
         * @maximum 1500
         */
        limit?: number;
        /**
         * Number of items to skip when using offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** Opaque Rentman cursor token from a previous page URL. */
        cursor?: string;
        /** Comma-separated linked fields to expand, using Rentman's expand syntax. */
        expand?: string;
        /** Additional Rentman filter query parameters. Keys may include operators such as distance[lte]. */
        filters?: Record<string, string>;
      };
      output: {
        /** Rentman items returned by the collection endpoint. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of items in this response.
         * @minimum 0
         */
        itemCount: number;
        /**
         * The maximum number of items requested or returned.
         * @minimum 0
         */
        limit: number;
        /**
         * The number of items skipped in this response.
         * @minimum 0
         */
        offset: number;
        /** The full Rentman next page URL, or null when no next page is available. */
        nextPageUrl: string | null;
        /** Raw Rentman response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
