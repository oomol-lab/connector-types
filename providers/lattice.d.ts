import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Lattice user associated with the configured API key. */
    "lattice.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Lattice user object. */
        user: Record<string, unknown>;
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Lattice department by ID. */
    "lattice.get_department": {
      input: {
        /**
         * The Lattice department ID.
         * @minLength 1
         */
        departmentId: string;
      };
      output: {
        /** A Lattice department object. */
        department: Record<string, unknown>;
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Lattice goal by ID. */
    "lattice.get_goal": {
      input: {
        /**
         * The Lattice goal ID.
         * @minLength 1
         */
        goalId: string;
      };
      output: {
        /** A Lattice goal object. */
        goal: Record<string, unknown>;
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Lattice user by ID. */
    "lattice.get_user": {
      input: {
        /**
         * The Lattice user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** A Lattice user object. */
        user: Record<string, unknown>;
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lattice departments with optional cursor pagination. */
    "lattice.list_departments": {
      input: {
        /**
         * The maximum number of Lattice objects to return. Lattice supports 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque Lattice cursor to continue after.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** The Lattice departments returned by the API. */
        departments: Array<Record<string, unknown>>;
        /** Cursor pagination metadata returned by Lattice. */
        meta: {
          /** Whether more objects are available after this page. */
          hasMore: boolean;
          /** The cursor to use for the next page when present. */
          endingCursor: string | null;
        };
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lattice goals with optional cursor pagination and state filtering. */
    "lattice.list_goals": {
      input: {
        /**
         * The maximum number of Lattice objects to return. Lattice supports 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque Lattice cursor to continue after.
         * @minLength 1
         */
        startingAfter?: string;
        /** The Lattice goal state filter. */
        state?: "active" | "ended";
      };
      output: {
        /** The Lattice goals returned by the API. */
        goals: Array<Record<string, unknown>>;
        /** Cursor pagination metadata returned by Lattice. */
        meta: {
          /** Whether more objects are available after this page. */
          hasMore: boolean;
          /** The cursor to use for the next page when present. */
          endingCursor: string | null;
        };
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lattice tags with optional cursor pagination. */
    "lattice.list_tags": {
      input: {
        /**
         * The maximum number of Lattice objects to return. Lattice supports 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque Lattice cursor to continue after.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** The Lattice tags returned by the API. */
        tags: Array<Record<string, unknown>>;
        /** Cursor pagination metadata returned by Lattice. */
        meta: {
          /** Whether more objects are available after this page. */
          hasMore: boolean;
          /** The cursor to use for the next page when present. */
          endingCursor: string | null;
        };
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lattice users with optional cursor pagination and status filtering. */
    "lattice.list_users": {
      input: {
        /**
         * The maximum number of Lattice objects to return. Lattice supports 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque Lattice cursor to continue after.
         * @minLength 1
         */
        startingAfter?: string;
        /** The Lattice user status filter. Use null_string to request all users. */
        status?: "active" | "inactive" | "created" | "invited" | "null_string";
      };
      output: {
        /** The Lattice users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** Cursor pagination metadata returned by Lattice. */
        meta: {
          /** Whether more objects are available after this page. */
          hasMore: boolean;
          /** The cursor to use for the next page when present. */
          endingCursor: string | null;
        };
        /** The raw Lattice API response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
