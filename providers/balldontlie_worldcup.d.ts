import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one FIFA World Cup match from BALLDONTLIE. */
    "balldontlie_worldcup.get_match": {
      input: {
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId: number;
      };
      output: {
        /** The match returned by BALLDONTLIE. */
        match: Record<string, unknown>;
      };
    };
    /** List FIFA World Cup futures odds from BALLDONTLIE. */
    "balldontlie_worldcup.list_futures_odds": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The futures odds returned by BALLDONTLIE. */
        futuresOdds: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup average-position data from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_avg_positions": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The average-position rows returned by BALLDONTLIE. */
        avgPositions: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup match best-player data from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_best_players": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The match best-player rows returned by BALLDONTLIE. */
        bestPlayers: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup match events from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_events": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The match events returned by BALLDONTLIE. */
        events: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup match lineups from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_lineups": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The match lineups returned by BALLDONTLIE. */
        lineups: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup match momentum data from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_momentum": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The match momentum rows returned by BALLDONTLIE. */
        momentum: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup match shot maps from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_shots": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The match shots returned by BALLDONTLIE. */
        shots: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup team form data from BALLDONTLIE. */
    "balldontlie_worldcup.list_match_team_form": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The team form rows returned by BALLDONTLIE. */
        teamForm: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup matches from BALLDONTLIE for the selected season, optionally filtered by team. */
    "balldontlie_worldcup.list_matches": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The matches returned by BALLDONTLIE. */
        matches: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup betting odds from BALLDONTLIE. */
    "balldontlie_worldcup.list_odds": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The betting odds returned by BALLDONTLIE. */
        odds: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup player injuries from BALLDONTLIE. */
    "balldontlie_worldcup.list_player_injuries": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The player injuries returned by BALLDONTLIE. */
        playerInjuries: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup player match statistics from BALLDONTLIE. */
    "balldontlie_worldcup.list_player_match_stats": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The player match statistics returned by BALLDONTLIE. */
        playerMatchStats: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup player prop odds from BALLDONTLIE. */
    "balldontlie_worldcup.list_player_props": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The player prop odds returned by BALLDONTLIE. */
        playerProps: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup players from BALLDONTLIE. */
    "balldontlie_worldcup.list_players": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The players returned by BALLDONTLIE. */
        players: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup rosters from BALLDONTLIE. */
    "balldontlie_worldcup.list_rosters": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The rosters returned by BALLDONTLIE. */
        rosters: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup stadiums from BALLDONTLIE for the selected season. */
    "balldontlie_worldcup.list_stadiums": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The stadiums returned by BALLDONTLIE. */
        stadiums: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup standings from BALLDONTLIE for the selected season. */
    "balldontlie_worldcup.list_standings": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The standings rows returned by BALLDONTLIE. */
        standings: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup team match statistics from BALLDONTLIE. */
    "balldontlie_worldcup.list_team_match_stats": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The BALLDONTLIE match identifier.
         * @exclusiveMinimum 0
         */
        matchId?: number;
        /**
         * BALLDONTLIE match identifiers.
         * @minItems 1
         */
        matchIds?: Array<number>;
        /**
         * The BALLDONTLIE team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * BALLDONTLIE team identifiers.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * The BALLDONTLIE player identifier.
         * @exclusiveMinimum 0
         */
        playerId?: number;
        /**
         * BALLDONTLIE player identifiers.
         * @minItems 1
         */
        playerIds?: Array<number>;
        /**
         * Search text used by BALLDONTLIE to filter players.
         * @minLength 1
         */
        search?: string;
        /**
         * BALLDONTLIE injury status filters.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * BALLDONTLIE betting odds vendors.
         * @minItems 1
         */
        vendors?: Array<string>;
        /**
         * A BALLDONTLIE player prop market type.
         * @minLength 1
         */
        propType?: string;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The team match statistics returned by BALLDONTLIE. */
        teamMatchStats: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List FIFA World Cup teams from BALLDONTLIE for the selected season. */
    "balldontlie_worldcup.list_teams": {
      input: {
        /**
         * The FIFA World Cup season year, such as 2018, 2022, or 2026.
         * @minimum 2018
         */
        season?: number;
        /**
         * The page number to request from BALLDONTLIE.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page to request from BALLDONTLIE.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The teams returned by BALLDONTLIE. */
        teams: Array<Record<string, unknown>>;
        /** The BALLDONTLIE pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The next page number when available. */
          next_page?: number | null;
          /** The page size. */
          per_page?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
