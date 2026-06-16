import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query the event stream for a specified football match, such as goals, red and yellow cards, substitutions, and VAR. */
    "api_sports.football_get_fixture_events": {
      input: {
        /**
         * Contest ID.
         * @exclusiveMinimum 0
         */
        fixture: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /**
         * Player ID.
         * @exclusiveMinimum 0
         */
        player?: number;
        /** Event or lineup filter type. */
        type?: string;
      };
      output: {
        /** List of match events. */
        events: Array<{
          /** The number of minutes when the event occurred, or null if none. */
          elapsed: number | null;
          /** The minute of added time, or null if none. */
          extra: number | null;
          /** The team the event belongs to. */
          team: {
            /**
             * Team ID.
             * @exclusiveMinimum 0
             */
            teamId: number;
            /** Team name. */
            name: string;
            /** Team logo address, null if not available. */
            logoUrl: string | null;
          };
          /** Main event player information. */
          player: {
            /** Participant ID, or null if none. */
            id: number | null;
            /** Participant name, or null if none. */
            name: string | null;
          };
          /** Assists or associated player information. */
          assist: {
            /** Participant ID, or null if none. */
            id: number | null;
            /** Participant name, or null if none. */
            name: string | null;
          };
          /** Event type, null if none. */
          type: string | null;
          /** Event details, or null if none. */
          detail: string | null;
          /** Event remarks, null if none. */
          comments: string | null;
        }>;
      };
    };
    /** Query the lineup, formation, starting lineup, substitutes and coaching information for a specified football game. */
    "api_sports.football_get_fixture_lineups": {
      input: {
        /**
         * Contest ID.
         * @exclusiveMinimum 0
         */
        fixture: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /**
         * Player ID.
         * @exclusiveMinimum 0
         */
        player?: number;
        /** Event or lineup filter type. */
        type?: string;
      };
      output: {
        /** Match lineup list. */
        lineups: Array<{
          /** Team information. */
          team: {
            /**
             * Team ID.
             * @exclusiveMinimum 0
             */
            teamId: number;
            /** Team name. */
            name: string;
            /** Team logo address, null if not available. */
            logoUrl: string | null;
          };
          /** Team formation, null if not available. */
          formation: string | null;
          /** Starting list of players. */
          startXI: Array<{
            /** Player ID, or null if none. */
            playerId: number | null;
            /** Player name, or null if none. */
            name: string | null;
            /** Jersey number, or null if not available. */
            number: number | null;
            /** Player position, null if none. */
            position: string | null;
            /** Formation grid coordinates, null if not available. */
            grid: string | null;
          }>;
          /** Substitute player list. */
          substitutes: Array<{
            /** Player ID, or null if none. */
            playerId: number | null;
            /** Player name, or null if none. */
            name: string | null;
            /** Jersey number, or null if not available. */
            number: number | null;
            /** Player position, null if none. */
            position: string | null;
            /** Formation grid coordinates, null if not available. */
            grid: string | null;
          }>;
          /** Coach information, null if not available. */
          coach: {
            /** Coach ID, or null if none. */
            id: number | null;
            /** Coach name, null if not available. */
            name: string | null;
            /** Coach avatar address, null if not available. */
            photoUrl: string | null;
          } | null;
        }>;
      };
    };
    /** Query the technical statistics of the specified football match, optionally returning the statistics of the first and second halves. */
    "api_sports.football_get_fixture_statistics": {
      input: {
        /**
         * Contest ID.
         * @exclusiveMinimum 0
         */
        fixture: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /** Statistical item type. */
        type?: string;
        /** Whether to return first and second half statistics. */
        half?: boolean;
      };
      output: {
        /** List of match statistics. */
        statistics: Array<{
          /** Team information. */
          team: {
            /**
             * Team ID.
             * @exclusiveMinimum 0
             */
            teamId: number;
            /** Team name. */
            name: string;
            /** Team logo address, null if not available. */
            logoUrl: string | null;
          };
          /** Full game statistics list. */
          statistics: Array<{
            /** Statistical item name. */
            type: string;
            /** The value of the statistical item, or null if there is none. */
            value: string | number | boolean | null;
          }>;
          /** First half statistics list. */
          statistics1h?: Array<{
            /** Statistical item name. */
            type: string;
            /** The value of the statistical item, or null if there is none. */
            value: string | number | boolean | null;
          }>;
          /** Second half statistics list. */
          statistics2h?: Array<{
            /** Statistical item name. */
            type: string;
            /** The value of the statistical item, or null if there is none. */
            value: string | number | boolean | null;
          }>;
        }>;
      };
    };
    /** Check official predictions and recommendations for selected football matches. */
    "api_sports.football_get_predictions": {
      input: {
        /**
         * Contest ID.
         * @exclusiveMinimum 0
         */
        fixture: number;
      };
      output: {
        /** Match prediction object. */
        prediction: Record<string, unknown>;
      };
    };
    /** Query the football standings for a specified season, and the results can be converged by league or team. */
    "api_sports.football_get_standings": {
      input: {
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league?: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season: number;
      };
      output: {
        /** Information about the league to which the standings belong. */
        league: {
          /**
           * League ID.
           * @exclusiveMinimum 0
           */
          leagueId: number;
          /** League name. */
          name: string;
          /** The country to which the league belongs, or null if not available. */
          country: string | null;
          /**
           * Season year.
           * @minimum 1000
           * @maximum 9999
           */
          season: number;
          /** Round name, null if not available. */
          round: string | null;
        };
        /** Scoreboard list. */
        tables: Array<Array<{
          /** Ranking. */
          rank: number;
          /** Team information. */
          team: {
            /**
             * Team ID.
             * @exclusiveMinimum 0
             */
            teamId: number;
            /** Team name. */
            name: string;
            /** Team logo address, null if not available. */
            logoUrl: string | null;
          };
          /** Points, null if none. */
          points: number | null;
          /** Goal difference, or null if not available. */
          goalsDiff: number | null;
          /** Group name, null if not available. */
          group: string | null;
          /** A string of recent achievements, or null if there is none. */
          form: string | null;
          /** Ranking change status, null if none. */
          status: string | null;
          /** Ranking description, null if not available. */
          description: string | null;
          /** Total results. */
          all: {
            /** The number of games played, or null if there are none. */
            played: number | null;
            /** Victory, or null if there is no win. */
            win: number | null;
            /** Flat field, or null if none. */
            draw: number | null;
            /** Negative field, null if not present. */
            lose: number | null;
            /** The number of goals scored, or null if none. */
            goalsFor: number | null;
            /** Number of goals conceded, null if not available. */
            goalsAgainst: number | null;
          };
          /** Home record. */
          home: {
            /** The number of games played, or null if there are none. */
            played: number | null;
            /** Victory, or null if there is no win. */
            win: number | null;
            /** Flat field, or null if none. */
            draw: number | null;
            /** Negative field, null if not present. */
            lose: number | null;
            /** The number of goals scored, or null if none. */
            goalsFor: number | null;
            /** Number of goals conceded, null if not available. */
            goalsAgainst: number | null;
          };
          /** Away record. */
          away: {
            /** The number of games played, or null if there are none. */
            played: number | null;
            /** Victory, or null if there is no win. */
            win: number | null;
            /** Flat field, or null if none. */
            draw: number | null;
            /** Negative field, null if not present. */
            lose: number | null;
            /** The number of goals scored, or null if none. */
            goalsFor: number | null;
            /** Number of goals conceded, null if not available. */
            goalsAgainst: number | null;
          };
          /** Update time, null if not available. */
          updatedAt: string | null;
        }>>;
      };
    };
    /** Query the overall statistical performance of a specified team in a certain league season. */
    "api_sports.football_get_team_statistics": {
      input: {
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team: number;
        /** Date in YYYY-MM-DD format. */
        date?: string;
      };
      output: {
        /** Team season statistics object. */
        teamStatistics: Record<string, unknown>;
      };
    };
    /** Check football schedules and scores by game, league, team, date, live status or time range. */
    "api_sports.football_list_fixtures": {
      input: {
        /**
         * Contest ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * One or more contest IDs, up to 20.
         * @minItems 1
         * @maxItems 20
         */
        ids?: Array<number>;
        /** Live match filters. */
        live?: "all" | Array<number>;
        /** Date in YYYY-MM-DD format. */
        date?: string;
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league?: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season?: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /**
         * The number of recent games.
         * @minimum 1
         * @maximum 20
         */
        last?: number;
        /**
         * number of games in the future.
         * @minimum 1
         * @maximum 20
         */
        next?: number;
        /** Starting date in the format YYYY-MM-DD. */
        from?: string;
        /** End date in YYYY-MM-DD format. */
        to?: string;
        /** Round name. */
        round?: string;
        /**
         * One or more game status short codes.
         * @minItems 1
         */
        status?: Array<string>;
        /**
         * Stadium ID.
         * @exclusiveMinimum 0
         */
        venue?: number;
        /** IANA time zone name. */
        timezone?: string;
      };
      output: {
        /** Competition list. */
        fixtures: Array<{
          /**
           * Contest ID.
           * @exclusiveMinimum 0
           */
          fixtureId: number;
          /** Game time. */
          date: string;
          /** Match timestamp. */
          timestamp: number;
          /** Game status information. */
          status: {
            /** Game status short code, null if not available. */
            short: string | null;
            /** Long text for match status, or null if none. */
            long: string | null;
            /** Number of minutes elapsed, or null if none. */
            elapsed: number | null;
          };
          /** Information about the league to which the match belongs. */
          league: {
            /**
             * League ID.
             * @exclusiveMinimum 0
             */
            leagueId: number;
            /** League name. */
            name: string;
            /** The country to which the league belongs, or null if not available. */
            country: string | null;
            /**
             * Season year.
             * @minimum 1000
             * @maximum 9999
             */
            season: number;
            /** Round name, null if not available. */
            round: string | null;
          };
          /** Home and away team information. */
          teams: {
            /** Home team information. */
            home: {
              /**
               * Team ID.
               * @exclusiveMinimum 0
               */
              teamId: number;
              /** Team name. */
              name: string;
              /** Team logo address, null if not available. */
              logoUrl: string | null;
              /** Whether the team won, or null if there is no result. */
              winner: boolean | null;
            };
            /** Away team information. */
            away: {
              /**
               * Team ID.
               * @exclusiveMinimum 0
               */
              teamId: number;
              /** Team name. */
              name: string;
              /** Team logo address, null if not available. */
              logoUrl: string | null;
              /** Whether the team won, or null if there is no result. */
              winner: boolean | null;
            };
          };
          /** Match live or final number of goals scored. */
          goals: {
            /** The number of goals scored by the home team, or null if none. */
            home: number | null;
            /** The number of goals scored by the away team, or null if not available. */
            away: number | null;
          };
          /** The game is divided into stages. */
          score: {
            /** Halftime score. */
            halftime: {
              /** Home team score, or null if none. */
              home: number | null;
              /** The away team's score, or null if not available. */
              away: number | null;
            };
            /** Full time score. */
            fulltime: {
              /** Home team score, or null if none. */
              home: number | null;
              /** The away team's score, or null if not available. */
              away: number | null;
            };
            /** Overtime score. */
            extratime: {
              /** Home team score, or null if none. */
              home: number | null;
              /** The away team's score, or null if not available. */
              away: number | null;
            };
            /** Penalty score. */
            penalty: {
              /** Home team score, or null if none. */
              home: number | null;
              /** The away team's score, or null if not available. */
              away: number | null;
            };
          };
        }>;
        /** Pagination information. */
        pagination: {
          /** Current page number. */
          current: number;
          /** Total number of pages. */
          total: number;
          /** The number of results in the current response. */
          results: number;
        };
      };
    };
    /** Check football injury information by game, league, team, player or date. */
    "api_sports.football_list_injuries": {
      input: {
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league?: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season?: number;
        /**
         * Contest ID.
         * @exclusiveMinimum 0
         */
        fixture?: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /**
         * Player ID.
         * @exclusiveMinimum 0
         */
        player?: number;
        /** Date in YYYY-MM-DD format. */
        date?: string;
        /**
         * One or more contest IDs, up to 20.
         * @minItems 1
         * @maxItems 20
         */
        ids?: Array<number>;
        /** IANA time zone name. */
        timezone?: string;
      };
      output: {
        /** Injury list. */
        injuries: Array<{
          /** Injured player information. */
          player: {
            /**
             * Player ID.
             * @exclusiveMinimum 0
             */
            playerId: number;
            /** Player name. */
            name: string;
            /** Player avatar address, null if not available. */
            photoUrl: string | null;
          };
          /** Injured team. */
          team: {
            /**
             * Team ID.
             * @exclusiveMinimum 0
             */
            teamId: number;
            /** Team name. */
            name: string;
            /** Team logo address, null if not available. */
            logoUrl: string | null;
          };
          /** Associated competition information. */
          fixture: {
            /**
             * Contest ID.
             * @exclusiveMinimum 0
             */
            fixtureId: number;
            /** Game time. */
            date: string;
          };
          /** Reason for injury, null if not available. */
          reason: string | null;
          /** Injury type, null if not available. */
          type: string | null;
        }>;
        /** Pagination information. */
        pagination: {
          /** Current page number. */
          current: number;
          /** Total number of pages. */
          total: number;
          /** The number of results in the current response. */
          results: number;
        };
      };
    };
    /** Query football leagues by league, country, season or search keyword and return the current available data coverage capabilities. */
    "api_sports.football_list_leagues": {
      input: {
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** League name. */
        name?: string;
        /** The name of the country to which the league belongs. */
        country?: string;
        /** The country code of the league. */
        code?: string;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season?: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /** League type. */
        type?: "league" | "cup";
        /** Whether to return only the current season league. */
        current?: boolean;
        /**
         * League or country search keywords.
         * @minLength 3
         */
        search?: string;
        /**
         * Number of recently added leagues.
         * @minimum 1
         */
        last?: number;
      };
      output: {
        /** League list. */
        leagues: Array<{
          /**
           * League ID.
           * @exclusiveMinimum 0
           */
          leagueId: number;
          /** League name. */
          name: string;
          /** League type, such as league or cup. */
          type: string;
          /** The name of the country to which the league belongs, or null if not available. */
          country: string | null;
          /** The country code of the league, or null if not available. */
          countryCode: string | null;
          /** League logo address, null if not available. */
          logoUrl: string | null;
          /** The current season year, or null if none. */
          currentSeason: number | null;
          /** The data coverage capabilities currently available to the league. */
          coverage: {
            /** Whether the league currently supports standings data. */
            standings?: boolean;
            /** Whether the league currently supports player statistics. */
            players?: boolean;
            /** Whether the league currently supports top scorer data. */
            topScorers?: boolean;
            /** Whether the league currently supports predictive data. */
            predictions?: boolean;
            /** Whether the league currently supports odds data. */
            odds?: boolean;
            /** Whether the league currently supports match event data. */
            events?: boolean;
            /** Whether the league currently supports match lineup data. */
            lineups?: boolean;
            /** Whether the league currently supports match statistics. */
            statisticsFixtures?: boolean;
            /** Whether the league currently supports player single-game statistics. */
            statisticsPlayers?: boolean;
            /** Whether the league currently supports injury statistics. */
            injuries?: boolean;
          };
        }>;
        /** Pagination information. */
        pagination: {
          /** Current page number. */
          current: number;
          /** Total number of pages. */
          total: number;
          /** The number of results in the current response. */
          results: number;
        };
      };
    };
    /** Search football player profiles by player ID, search keyword or pagination page number. */
    "api_sports.football_list_players_profiles": {
      input: {
        /**
         * Player ID.
         * @exclusiveMinimum 0
         */
        player?: number;
        /**
         * Player name search keyword.
         * @minLength 3
         */
        search?: string;
        /**
         * Pagination page number, starting from 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** List of player profiles. */
        players: Array<{
          /**
           * Player ID.
           * @exclusiveMinimum 0
           */
          playerId: number;
          /** Player name. */
          name: string;
          /** Player name, null if not available. */
          firstName: string | null;
          /** The player's last name, or null if none. */
          lastName: string | null;
          /** Player's age, or null if none. */
          age: number | null;
          /** Player nationality, null if not available. */
          nationality: string | null;
          /** Player avatar address, null if not available. */
          photoUrl: string | null;
          /** Player position on the field, null if not available. */
          position: string | null;
          /** Jersey number, or null if not available. */
          number: number | null;
        }>;
        /** Pagination information. */
        pagination: {
          /** Current page number. */
          current: number;
          /** Total number of pages. */
          total: number;
          /** The number of results in the current response. */
          results: number;
        };
      };
    };
    /** Query player season statistics by player, team or league, support paging and search. */
    "api_sports.football_list_players_statistics": {
      input: {
        /**
         * Player ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team?: number;
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league?: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season?: number;
        /**
         * Player name search keyword.
         * @minLength 4
         */
        search?: string;
        /**
         * Pagination page number, starting from 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** List of player season statistics. */
        players: Array<{
          /** Basic player information. */
          player: {
            /**
             * Player ID.
             * @exclusiveMinimum 0
             */
            playerId: number;
            /** Player name. */
            name: string;
            /** Player name, null if not available. */
            firstName: string | null;
            /** The player's last name, or null if none. */
            lastName: string | null;
            /** Player's age, or null if none. */
            age: number | null;
            /** Player nationality, null if not available. */
            nationality: string | null;
            /** Player avatar address, null if not available. */
            photoUrl: string | null;
          };
          /** Player season statistics list, retaining upstream statistical objects. */
          statistics: Array<Record<string, unknown>>;
        }>;
        /** Pagination information. */
        pagination: {
          /** Current page number. */
          current: number;
          /** Total number of pages. */
          total: number;
          /** The number of results in the current response. */
          results: number;
        };
      };
    };
    /** Query the current lineup of the specified team. */
    "api_sports.football_list_team_squad": {
      input: {
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        team: number;
      };
      output: {
        /** Team lineup list. */
        squad: Array<{
          /**
           * Player ID.
           * @exclusiveMinimum 0
           */
          playerId: number;
          /** Player name. */
          name: string;
          /** Player's age, or null if none. */
          age: number | null;
          /** Jersey number, or null if not available. */
          number: number | null;
          /** Player position, null if none. */
          position: string | null;
          /** Player avatar address, null if not available. */
          photoUrl: string | null;
        }>;
      };
    };
    /** Search football teams by league, season, country, stadium or search keyword. */
    "api_sports.football_list_teams": {
      input: {
        /**
         * Team ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Team name. */
        name?: string;
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league?: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season?: number;
        /** The name of the country to which the team belongs. */
        country?: string;
        /** Team code. */
        code?: string;
        /**
         * Stadium ID.
         * @exclusiveMinimum 0
         */
        venue?: number;
        /**
         * Team or country search keywords.
         * @minLength 3
         */
        search?: string;
      };
      output: {
        /** Team list. */
        teams: Array<{
          /**
           * Team ID.
           * @exclusiveMinimum 0
           */
          teamId: number;
          /** Team name. */
          name: string;
          /** Team code, or null if none. */
          code: string | null;
          /** The country to which the team belongs, or null if not available. */
          country: string | null;
          /** Whether it is a national team, or null if not. */
          national: boolean | null;
          /** Team logo address, null if not available. */
          logoUrl: string | null;
          /** Team home field information, null if not available. */
          venue: {
            /**
             * Stadium ID.
             * @exclusiveMinimum 0
             */
            venueId: number;
            /** Stadium name, or null if not available. */
            name: string | null;
            /** The city where the stadium is located, or null if not available. */
            city: string | null;
          } | null;
        }>;
        /** Pagination information. */
        pagination: {
          /** Current page number. */
          current: number;
          /** Total number of pages. */
          total: number;
          /** The number of results in the current response. */
          results: number;
        };
      };
    };
    /** Query the scorer list of the specified league season. */
    "api_sports.football_list_top_scorers": {
      input: {
        /**
         * League ID.
         * @exclusiveMinimum 0
         */
        league: number;
        /**
         * Season year, represented by a four-digit number.
         * @minimum 1000
         * @maximum 9999
         */
        season: number;
      };
      output: {
        /** Scorer list of players. */
        players: Array<{
          /** Basic player information. */
          player: {
            /**
             * Player ID.
             * @exclusiveMinimum 0
             */
            playerId: number;
            /** Player name. */
            name: string;
            /** Player name, null if not available. */
            firstName: string | null;
            /** The player's last name, or null if none. */
            lastName: string | null;
            /** Player's age, or null if none. */
            age: number | null;
            /** Player nationality, null if not available. */
            nationality: string | null;
            /** Player avatar address, null if not available. */
            photoUrl: string | null;
          };
          /** Player season statistics list, retaining upstream statistical objects. */
          statistics: Array<Record<string, unknown>>;
        }>;
      };
    };
  }
}
