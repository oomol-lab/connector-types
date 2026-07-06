import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Kandji blueprint by ID. */
    "kandji.get_blueprint": {
      input: {
        /**
         * The unique identifier of the Kandji blueprint to retrieve.
         * @format uuid
         */
        blueprintId: string;
      };
      output: {
        /** A normalized Kandji blueprint record. */
        blueprint: {
          /** The blueprint ID. */
          id: string;
          /** The blueprint name. */
          name: string;
          /** A string value returned by Kandji when present. */
          type: string | null;
          /** A string value returned by Kandji when present. */
          description: string | null;
          /** An integer value returned by Kandji when present. */
          computersCount: number | null;
          /** The raw blueprint object returned by Kandji. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Kandji directory user by ID. */
    "kandji.get_user": {
      input: {
        /**
         * The unique identifier of the Kandji directory user to retrieve.
         * @format uuid
         */
        userId: string;
      };
      output: {
        /** A normalized Kandji directory user record. */
        user: {
          /** The user ID. */
          id: string;
          /** A string value returned by Kandji when present. */
          email: string | null;
          /** A string value returned by Kandji when present. */
          name: string | null;
          /** A boolean value returned by Kandji when present. */
          active: boolean | null;
          /** A boolean value returned by Kandji when present. */
          archived: boolean | null;
          /** An integer value returned by Kandji when present. */
          deviceCount: number | null;
          /** The raw user object returned by Kandji. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Kandji blueprints with optional ID, name, and pagination filters. */
    "kandji.list_blueprints": {
      input: {
        /**
         * A Kandji UUID value.
         * @format uuid
         */
        id?: string;
        /**
         * Blueprint IDs used to filter results.
         * @minItems 1
         */
        idIn?: Array<string>;
        /**
         * The blueprint name used to filter results.
         * @minLength 1
         */
        name?: string;
        /**
         * The maximum number of blueprint records to return.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
        /**
         * The zero-based offset used for Kandji blueprint pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** An integer value returned by Kandji when present. */
        count: number | null;
        /** Pagination links returned by Kandji. */
        pagination: {
          /** The URL for the next page, or null when no next page exists. */
          next: string | null;
          /** The URL for the previous page, or null when no previous page exists. */
          previous: string | null;
        };
        /** The blueprints returned by Kandji. */
        blueprints: Array<{
          /** The blueprint ID. */
          id: string;
          /** The blueprint name. */
          name: string;
          /** A string value returned by Kandji when present. */
          type: string | null;
          /** A string value returned by Kandji when present. */
          description: string | null;
          /** An integer value returned by Kandji when present. */
          computersCount: number | null;
          /** The raw blueprint object returned by Kandji. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Kandji directory users with optional filters and cursor pagination. */
    "kandji.list_users": {
      input: {
        /**
         * Return users with email addresses containing this value.
         * @minLength 1
         */
        email?: string;
        /**
         * A Kandji UUID value.
         * @format uuid
         */
        id?: string;
        /**
         * A Kandji UUID value.
         * @format uuid
         */
        integrationId?: string;
        /** Whether to return archived or non-archived users. */
        archived?: boolean;
        /**
         * The opaque pagination cursor returned by a previous Kandji response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of user records to return per page.
         * @minimum 1
         * @maximum 300
         */
        sizePerPage?: number;
      };
      output: {
        /** Pagination links returned by Kandji. */
        pagination: {
          /** The URL for the next page, or null when no next page exists. */
          next: string | null;
          /** The URL for the previous page, or null when no previous page exists. */
          previous: string | null;
        };
        /** The users returned by Kandji. */
        users: Array<{
          /** The user ID. */
          id: string;
          /** A string value returned by Kandji when present. */
          email: string | null;
          /** A string value returned by Kandji when present. */
          name: string | null;
          /** A boolean value returned by Kandji when present. */
          active: boolean | null;
          /** A boolean value returned by Kandji when present. */
          archived: boolean | null;
          /** An integer value returned by Kandji when present. */
          deviceCount: number | null;
          /** The raw user object returned by Kandji. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
