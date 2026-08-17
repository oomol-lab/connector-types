import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List SportsDataIO athletes for a competition. */
    "sportsdata.list_athletes": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
      };
      output: {
        /** The athletes returned by SportsDataIO. */
        athletes: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO competitions for a sport. */
    "sportsdata.list_competitions": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
      };
      output: {
        /** The competitions returned by SportsDataIO. */
        competitions: Array<Record<string, unknown>>;
      };
    };
    /** List final SportsDataIO event results for a competition on a UTC date. */
    "sportsdata.list_event_results_by_date": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
        /**
         * The UTC calendar date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
      };
      output: {
        /** The final event results returned by SportsDataIO. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO scheduled events for a competition on a UTC date. */
    "sportsdata.list_event_schedule_by_date": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
        /**
         * The UTC calendar date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
      };
      output: {
        /** The scheduled events returned by SportsDataIO. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO scheduled events for a competition phase. */
    "sportsdata.list_event_schedule_by_phase": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
        /**
         * The SportsDataIO phase identifier.
         * @minimum 1
         */
        phaseId: number;
      };
      output: {
        /** The scheduled events returned by SportsDataIO. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List live and final SportsDataIO event results for a competition on a UTC date. */
    "sportsdata.list_live_event_results_by_date": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
        /**
         * The UTC calendar date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
      };
      output: {
        /** The live and final event results returned by SportsDataIO. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO phases for a competition season. */
    "sportsdata.list_phases": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
        /**
         * The SportsDataIO season identifier.
         * @minimum 1
         */
        seasonId: number;
      };
      output: {
        /** The phases returned by SportsDataIO. */
        phases: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO seasons for a competition. */
    "sportsdata.list_seasons": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
      };
      output: {
        /** The seasons returned by SportsDataIO. */
        seasons: Array<Record<string, unknown>>;
      };
    };
    /** List sports available in the SportsDataIO Global Sports API. */
    "sportsdata.list_sports": {
      input: Record<string, never>;
      output: {
        /** The sports returned by SportsDataIO. */
        sports: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO teams active in a competition season. */
    "sportsdata.list_teams": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
        /**
         * The SportsDataIO season identifier.
         * @minimum 1
         */
        seasonId: number;
      };
      output: {
        /** The teams returned by SportsDataIO. */
        teams: Array<Record<string, unknown>>;
      };
    };
    /** List SportsDataIO venues used by a competition. */
    "sportsdata.list_venues": {
      input: {
        /**
         * The SportsDataIO sport slug, such as soccer or tennis.
         * @minLength 1
         */
        sport: string;
        /**
         * The SportsDataIO competition slug within the selected sport.
         * @minLength 1
         */
        competition: string;
      };
      output: {
        /** The venues returned by SportsDataIO. */
        venues: Array<Record<string, unknown>>;
      };
    };
  }
}
