import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Papertrail saved event search. */
    "papertrail.create_saved_search": {
      input: {
        /**
         * The saved-search name.
         * @minLength 1
         */
        name: string;
        /**
         * The Papertrail event query to save.
         * @minLength 1
         */
        query: string;
        /**
         * The Papertrail group ID associated with the saved search.
         * @minimum 1
         */
        groupId?: number;
      };
      output: {
        /** A Papertrail saved search. */
        savedSearch: {
          /** The numeric saved-search ID. */
          id: number;
          /** The saved-search name. */
          name: string;
          /** The Papertrail event query stored by the saved search. */
          query: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a Papertrail saved search. */
    "papertrail.delete_saved_search": {
      input: {
        /**
         * The numeric Papertrail saved-search ID to delete.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The deletion confirmation returned by Papertrail. */
        message: string;
      };
    };
    /** List Papertrail groups and their current system membership. */
    "papertrail.list_groups": {
      input: Record<string, never>;
      output: {
        /** The groups configured in Papertrail. */
        groups: Array<{
          /** The numeric Papertrail resource ID. */
          id: number;
          /** The Papertrail resource name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List saved event searches in Papertrail. */
    "papertrail.list_saved_searches": {
      input: Record<string, never>;
      output: {
        /** The saved searches configured in Papertrail. */
        savedSearches: Array<{
          /** The numeric saved-search ID. */
          id: number;
          /** The saved-search name. */
          name: string;
          /** The Papertrail event query stored by the saved search. */
          query: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List systems registered in the Papertrail account. */
    "papertrail.list_systems": {
      input: Record<string, never>;
      output: {
        /** The systems registered in Papertrail. */
        systems: Array<{
          /** The numeric Papertrail resource ID. */
          id: number;
          /** The Papertrail resource name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Papertrail log events with optional resource and time boundaries. */
    "papertrail.search_events": {
      input: {
        /** The Papertrail event search query. Omit it to return recent events. */
        query?: string;
        /** The Papertrail system ID or unique system name used to limit results. */
        systemId?: string;
        /**
         * The Papertrail group ID used to limit results.
         * @minimum 1
         */
        groupId?: number;
        /** The oldest Papertrail event ID to examine. */
        minId?: string;
        /** The oldest UTC Unix timestamp to examine. */
        minTime?: number;
        /** The newest Papertrail event ID to examine. */
        maxId?: string;
        /** The newest UTC Unix timestamp to examine. */
        maxTime?: number;
        /**
         * The maximum number of events to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** Whether Papertrail should prioritize recent events for live-tail usage. */
        tail?: boolean;
      };
      output: {
        /** The matching Papertrail log events. */
        events: Array<Record<string, unknown>>;
        /** The lowest Papertrail event ID examined. */
        minId: string | null;
        /** The highest Papertrail event ID examined. */
        maxId: string | null;
        /** The oldest human-readable timestamp examined. */
        minTimeAt: string | null;
        /** The newest human-readable timestamp examined. */
        maxTimeAt: string | null;
      };
    };
    /** Replace the name, query, and optional group of a Papertrail saved search. */
    "papertrail.update_saved_search": {
      input: {
        /**
         * The numeric Papertrail saved-search ID to update.
         * @minimum 1
         */
        id: number;
        /**
         * The saved-search name.
         * @minLength 1
         */
        name: string;
        /**
         * The Papertrail event query to save.
         * @minLength 1
         */
        query: string;
        /**
         * The Papertrail group ID associated with the saved search.
         * @minimum 1
         */
        groupId?: number;
      };
      output: {
        /** A Papertrail saved search. */
        savedSearch: {
          /** The numeric saved-search ID. */
          id: number;
          /** The saved-search name. */
          name: string;
          /** The Papertrail event query stored by the saved search. */
          query: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
