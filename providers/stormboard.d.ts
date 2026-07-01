import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Stormboard profile associated with the provided API key. */
    "stormboard.get_profile": {
      input: Record<string, never>;
      output: {
        /** A Stormboard profile object. */
        profile: {
          /** The Stormboard user ID. */
          id?: number;
          /** The user's first name returned by Stormboard. */
          firstname?: string;
          /** The user's last name returned by Stormboard. */
          lastname?: string;
          /** The username returned by Stormboard. */
          username?: string;
          /** The email address returned by Stormboard. */
          email?: string;
          /** The user's team summary returned by Stormboard. */
          team?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the details and setup for one Stormboard Storm. */
    "stormboard.get_storm": {
      input: {
        /**
         * The Stormboard Storm ID.
         * @minimum 1
         */
        stormId: number;
      };
      output: {
        /** A Stormboard Storm record. */
        storm: {
          /** The Storm ID returned by Stormboard. */
          id?: number;
          /** The Storm title returned by Stormboard. */
          title?: string;
          /** Whether the Storm is closed when returned by Stormboard. */
          closed?: boolean;
          /** The Storm team summary returned by Stormboard. */
          team?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Check the current account's access level for one Stormboard Storm. */
    "stormboard.get_storm_access": {
      input: {
        /**
         * The Stormboard Storm ID.
         * @minimum 1
         */
        stormId: number;
      };
      output: {
        /** The access level returned by Stormboard. */
        access: {
          /** Whether the current account is an administrator in the Storm. */
          administrator: boolean;
          /** The access type returned by Stormboard, such as contributor or viewer. */
          type: string;
        };
      };
    };
    /** List line connectors in one Stormboard Storm. */
    "stormboard.list_storm_connectors": {
      input: {
        /**
         * The Stormboard Storm ID.
         * @minimum 1
         */
        stormId: number;
      };
      output: {
        /** Connectors returned by Stormboard. */
        connectors: Array<{
          /** The connector ID returned by Stormboard. */
          id?: number;
          /** The source idea ID returned by Stormboard. */
          from?: number;
          /** The target idea ID returned by Stormboard. */
          to?: number;
          /** The connector label returned by Stormboard. */
          label?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List ideas in one Stormboard Storm, optionally filtering by last modified timestamp. */
    "stormboard.list_storm_ideas": {
      input: {
        /**
         * The Stormboard Storm ID.
         * @minimum 1
         */
        stormId: number;
        /**
         * Only return ideas modified since this ISO 8601 timestamp, such as YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        lastModifiedMin?: string;
      };
      output: {
        /** Ideas returned by Stormboard. */
        ideas: Array<{
          /** The idea ID returned by Stormboard. */
          id?: number;
          /** The Stormboard idea type. */
          type?: string;
          /** The idea data returned by Stormboard. */
          data?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** List tags that have been created in one Stormboard Storm. */
    "stormboard.list_storm_tags": {
      input: {
        /**
         * The Stormboard Storm ID.
         * @minimum 1
         */
        stormId: number;
      };
      output: {
        /** Tags returned by Stormboard. */
        tags: Array<{
          /** The tag ID returned by Stormboard. */
          id?: number;
          /** The tag name returned by Stormboard. */
          name?: string;
          /** The tag type returned by Stormboard. */
          type?: string;
          /** The tag status returned by Stormboard. */
          status?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List participants in one Stormboard Storm. */
    "stormboard.list_storm_users": {
      input: {
        /**
         * The Stormboard Storm ID.
         * @minimum 1
         */
        stormId: number;
      };
      output: {
        /** Participants returned by Stormboard. */
        users: Array<{
          /** The participant first name returned by Stormboard. */
          firstname?: string;
          /** The participant last name returned by Stormboard. */
          lastname?: string;
          /** The participant email returned by Stormboard. */
          email?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Stormboard Storms visible to the current account with optional team, folder, status, title, ordering, and pagination filters. */
    "stormboard.list_storms": {
      input: {
        /**
         * Filter Storm results by a team ID.
         * @minimum 1
         */
        team?: number;
        /**
         * Filter Storm results by a dashboard folder ID.
         * @minimum 1
         */
        folder?: number;
        /**
         * Filter Storm results based on Storm title.
         * @minLength 1
         */
        needle?: string;
        /** Filter Storms by status. */
        status?: "active" | "open" | "closed";
        /**
         * Start the Storm list at this index.
         * @minimum 0
         */
        start?: number;
        /** Order Storm results by this value. */
        order?: "activity" | "alpha" | "frequency" | "starred";
        /**
         * The number of Storm results to return. Stormboard allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        results?: number;
      };
      output: {
        /** Whether Stormboard has more Storm results available. */
        hasMore: boolean;
        /** Storms returned by Stormboard. */
        storms: Array<{
          /** The Storm ID returned by Stormboard. */
          id?: number;
          /** The Storm title returned by Stormboard. */
          title?: string;
          /** Whether the Storm is closed when returned by Stormboard. */
          closed?: boolean;
          /** The Storm team summary returned by Stormboard. */
          team?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Stormboard template categories. */
    "stormboard.list_template_categories": {
      input: Record<string, never>;
      output: {
        /** Template categories returned by Stormboard. */
        categories: Array<{
          /**
           * The Stormboard template category ID.
           * @minLength 1
           */
          id?: string;
          /** The category name returned by Stormboard. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Stormboard templates, optionally limited to one template category. */
    "stormboard.list_templates": {
      input: {
        /**
         * The Stormboard template category ID.
         * @minLength 1
         */
        category?: string;
      };
      output: {
        /** Templates returned by Stormboard, grouped by template source. */
        templates: Record<string, unknown>;
      };
    };
  }
}
