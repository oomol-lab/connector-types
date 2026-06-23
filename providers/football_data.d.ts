import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one football-data.org match by identifier. */
    "football_data.get_match": {
      input: {
        /**
         * The football-data.org match identifier.
         * @exclusiveMinimum 0
         */
        matchId: number;
      };
      output: {
        /** The match returned by football-data.org. */
        match: Record<string, unknown>;
        /** The raw football-data.org response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get football-data.org standings for a competition such as WC. */
    "football_data.get_standings": {
      input: {
        /**
         * The football-data.org competition code, such as WC for the World Cup.
         * @minLength 1
         */
        competition: string;
        /**
         * The season year used by football-data.org.
         * @minimum 1930
         */
        season?: number;
      };
      output: {
        /** The filters returned by football-data.org. */
        filters: Record<string, unknown>;
        /** A competition returned by football-data.org. */
        competition: {
          /** The competition ID. */
          id?: number;
          /** The competition name. */
          name?: string;
          /** The competition code. */
          code?: string;
          /** The competition type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The season returned by football-data.org. */
        season: Record<string, unknown>;
        /** The standings tables returned by football-data.org. */
        standings: Array<Record<string, unknown>>;
        /** The raw football-data.org response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List football-data.org matches across visible competitions with optional date, status, and competition filters. */
    "football_data.list_all_matches": {
      input: {
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** The football-data.org match status filter. */
        status?: "SCHEDULED" | "LIVE" | "IN_PLAY" | "PAUSED" | "FINISHED" | "POSTPONED" | "SUSPENDED" | "CANCELED";
        /**
         * Competition codes used to filter matches, such as WC.
         * @minItems 1
         */
        competitions?: Array<string>;
      };
      output: {
        /** The number of matches returned. */
        count: number;
        /** The filters returned by football-data.org. */
        filters: Record<string, unknown>;
        /** The result set metadata returned by football-data.org. */
        resultSet: Record<string, unknown>;
        /** The matches returned by football-data.org. */
        matches: Array<Record<string, unknown>>;
        /** The raw football-data.org response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List football competitions visible to the connected football-data.org API token. */
    "football_data.list_competitions": {
      input: Record<string, never>;
      output: {
        /** The number of competitions returned. */
        count: number;
        /** The competitions returned by football-data.org. */
        competitions: Array<{
          /** The competition ID. */
          id?: number;
          /** The competition name. */
          name?: string;
          /** The competition code. */
          code?: string;
          /** The competition type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The raw football-data.org response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List football-data.org matches for a competition such as WC, with optional season, date, status, stage, and group filters. */
    "football_data.list_matches": {
      input: {
        /**
         * The football-data.org competition code, such as WC for the World Cup.
         * @minLength 1
         */
        competition: string;
        /**
         * The season year used by football-data.org.
         * @minimum 1930
         */
        season?: number;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** The football-data.org match status filter. */
        status?: "SCHEDULED" | "LIVE" | "IN_PLAY" | "PAUSED" | "FINISHED" | "POSTPONED" | "SUSPENDED" | "CANCELED";
        /**
         * The football-data.org stage filter.
         * @minLength 1
         */
        stage?: string;
        /**
         * The football-data.org group filter.
         * @minLength 1
         */
        group?: string;
      };
      output: {
        /** The number of matches returned. */
        count: number;
        /** The filters returned by football-data.org. */
        filters: Record<string, unknown>;
        /** A competition returned by football-data.org. */
        competition: {
          /** The competition ID. */
          id?: number;
          /** The competition name. */
          name?: string;
          /** The competition code. */
          code?: string;
          /** The competition type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The matches returned by football-data.org. */
        matches: Array<Record<string, unknown>>;
        /** The raw football-data.org response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List football-data.org teams for a competition such as WC. */
    "football_data.list_teams": {
      input: {
        /**
         * The football-data.org competition code, such as WC for the World Cup.
         * @minLength 1
         */
        competition: string;
        /**
         * The season year used by football-data.org.
         * @minimum 1930
         */
        season?: number;
      };
      output: {
        /** The number of teams returned. */
        count: number;
        /** A competition returned by football-data.org. */
        competition: {
          /** The competition ID. */
          id?: number;
          /** The competition name. */
          name?: string;
          /** The competition code. */
          code?: string;
          /** The competition type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The season returned by football-data.org. */
        season: Record<string, unknown>;
        /** The teams returned by football-data.org. */
        teams: Array<Record<string, unknown>>;
        /** The raw football-data.org response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
