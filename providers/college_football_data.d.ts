import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get CollegeFootballData account information including patron level and remaining calls. */
    "college_football_data.get_info": {
      input: Record<string, never>;
      output: {
        /** The authenticated CollegeFootballData account information. */
        info: {
          /** The Patreon subscription level reported by the API. */
          patronLevel: number | null;
          /** The number of API calls remaining in the current rate-limit window. */
          remainingCalls: number | null;
        } | null;
      };
    };
    /** List college football conferences from CollegeFootballData. */
    "college_football_data.list_conferences": {
      input: Record<string, never>;
      output: {
        /** The conferences returned by CollegeFootballData. */
        conferences: Array<Record<string, unknown>>;
      };
    };
    /** List college football games and results from CollegeFootballData by year, game id, and optional filters. */
    "college_football_data.list_games": {
      input: {
        /**
         * The optional college football season year.
         * @minimum 1869
         */
        year?: number;
        /**
         * The optional season week filter.
         * @exclusiveMinimum 0
         */
        week?: number;
        /** The season segment to query. */
        seasonType?: "regular" | "postseason";
        /** The NCAA division classification filter. */
        classification?: "fbs" | "fcs" | "ii" | "iii";
        /**
         * The optional school name filter.
         * @minLength 1
         */
        team?: string;
        /**
         * The optional home school name filter.
         * @minLength 1
         */
        home?: string;
        /**
         * The optional away school name filter.
         * @minLength 1
         */
        away?: string;
        /**
         * The optional conference abbreviation filter.
         * @minLength 1
         */
        conference?: string;
        /**
         * The CollegeFootballData game identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
      };
      output: {
        /** The games returned by CollegeFootballData. */
        games: Array<Record<string, unknown>>;
      };
    };
    /** List college football teams from CollegeFootballData with optional year and conference filters. */
    "college_football_data.list_teams": {
      input: {
        /**
         * The college football season year.
         * @minimum 1869
         */
        year?: number;
        /**
         * The optional conference abbreviation filter.
         * @minLength 1
         */
        conference?: string;
      };
      output: {
        /** The teams returned by CollegeFootballData. */
        teams: Array<Record<string, unknown>>;
      };
    };
    /** List college football venues from CollegeFootballData. */
    "college_football_data.list_venues": {
      input: Record<string, never>;
      output: {
        /** The venues returned by CollegeFootballData. */
        venues: Array<Record<string, unknown>>;
      };
    };
  }
}
