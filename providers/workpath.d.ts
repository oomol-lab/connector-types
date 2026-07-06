import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Workpath goal by its unique identifier. */
    "workpath.get_goal": {
      input: {
        /**
         * The unique Workpath goal identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Workpath goal object. */
        goal: Record<string, unknown>;
      };
    };
    /** Get one Workpath key result by its unique identifier using the official convenience endpoint. */
    "workpath.get_goal_key_result": {
      input: {
        /**
         * The unique Workpath key result identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Workpath key result object. */
        keyResult: Record<string, unknown>;
      };
    };
    /** Get one Workpath team by its unique identifier. */
    "workpath.get_team": {
      input: {
        /**
         * The unique Workpath team identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Workpath team object. */
        team: Record<string, unknown>;
      };
    };
    /** Get one Workpath user by their unique identifier. */
    "workpath.get_user": {
      input: {
        /**
         * The unique Workpath user identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Workpath user object. */
        user: Record<string, unknown>;
      };
    };
    /** List all key results associated with a specific Workpath goal. */
    "workpath.list_goal_key_results": {
      input: {
        /**
         * The unique Workpath goal identifier.
         * @exclusiveMinimum 0
         */
        goalId: number;
      };
      output: {
        /** The Workpath key results returned for the goal. */
        keyResults: Array<Record<string, unknown>>;
      };
    };
    /** List Workpath goals visible to the API client, optionally filtered by an overlapping date range. */
    "workpath.list_goals": {
      input: {
        /**
         * The Workpath page number to request. Workpath returns the first page when omitted.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return goals whose start and target dates overlap this start date. Must be passed with endDate.
         * @format date
         */
        startDate?: string;
        /**
         * Return goals whose start and target dates overlap this end date. Must be passed with startDate.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The Workpath goals returned for the requested page. */
        goals: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Workpath response headers. */
        pagination: {
          /** The Workpath page number returned in the response headers. */
          page: number | null;
          /** The maximum number of items per page returned by Workpath. */
          limit: number | null;
          /** The total number of pages reported by Workpath. */
          pageCount: number | null;
          /** The total number of items reported by Workpath. */
          itemCount: number | null;
          /** The URL for the next page, or null when no next page is present. */
          nextPage: string | null;
          /** The raw Link header returned by Workpath, or null when absent. */
          link: string | null;
        };
      };
    };
    /** List Workpath teams visible to the API client. */
    "workpath.list_teams": {
      input: {
        /**
         * The Workpath page number to request. Workpath returns the first page when omitted.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Workpath teams returned for the requested page. */
        teams: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Workpath response headers. */
        pagination: {
          /** The Workpath page number returned in the response headers. */
          page: number | null;
          /** The maximum number of items per page returned by Workpath. */
          limit: number | null;
          /** The total number of pages reported by Workpath. */
          pageCount: number | null;
          /** The total number of items reported by Workpath. */
          itemCount: number | null;
          /** The URL for the next page, or null when no next page is present. */
          nextPage: string | null;
          /** The raw Link header returned by Workpath, or null when absent. */
          link: string | null;
        };
      };
    };
    /** List Workpath users visible to the API client. */
    "workpath.list_users": {
      input: {
        /**
         * The Workpath page number to request. Workpath returns the first page when omitted.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Workpath users returned for the requested page. */
        users: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Workpath response headers. */
        pagination: {
          /** The Workpath page number returned in the response headers. */
          page: number | null;
          /** The maximum number of items per page returned by Workpath. */
          limit: number | null;
          /** The total number of pages reported by Workpath. */
          pageCount: number | null;
          /** The total number of items reported by Workpath. */
          itemCount: number | null;
          /** The URL for the next page, or null when no next page is present. */
          nextPage: string | null;
          /** The raw Link header returned by Workpath, or null when absent. */
          link: string | null;
        };
      };
    };
  }
}
