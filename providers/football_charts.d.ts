import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get upcoming fixtures for a league with kickoff times, match slugs, and calibrated Dixon-Coles model probabilities across match result, over/under goal lines, and both-teams-to-score markets. */
    "football_charts.get_fixtures": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
      };
      output: {
        /** The competition key. */
        league?: string;
        /** Number of upcoming fixtures in the active window. */
        count?: number;
        /** Explanation when no fixtures are scheduled in the immediate window. */
        note?: string | null;
        /** Next scheduled fixture date when the immediate window is empty. */
        next_fixture_date?: string | null;
        /** Upcoming matches ordered by kickoff time. */
        matches?: Array<{
          /** Match slug accepted by get_match. */
          slug?: string;
          /** Home team name. */
          home_team?: string;
          /** Away team name. */
          away_team?: string;
          /** Scheduled date in YYYY-MM-DD format (UTC). */
          match_date?: string | null;
          /** Scheduled kickoff time in HH:MM format (UTC). */
          time?: string | null;
          /** Match status code. */
          status?: string | null;
          /** Competition key. */
          league?: string | null;
          /** Country name. */
          country?: string | null;
          /** Competition display name. */
          real_league_name?: string | null;
          /** Dixon-Coles baseline model output. */
          model_predictions?: {
            /** Dixon-Coles v2 model block. */
            dc_v2?: {
              /** Model version identifier. */
              model?: string | null;
              /** Calibrated model probabilities in the 0 to 1 range. Draw probability equals 1 minus home minus away. */
              calibrated?: {
                /** Home win probability. */
                home?: number | null;
                /** Away win probability. */
                away?: number | null;
                /** Both teams to score probability. */
                btts_yes?: number | null;
                /** Probability of more than 0.5 total goals. */
                "over_0.5"?: number | null;
                /** Probability of more than 1.5 total goals. */
                "over_1.5"?: number | null;
                /** Probability of more than 2.5 total goals. */
                "over_2.5"?: number | null;
                /** Probability of more than 3.5 total goals. */
                "over_3.5"?: number | null;
                /** Probability of more than 4.5 total goals. */
                "over_4.5"?: number | null;
                /** Probability of more than 0.5 first-half goals. */
                "ht_over_0.5"?: number | null;
                /** Probability of more than 1.5 first-half goals. */
                "ht_over_1.5"?: number | null;
                /** Expected goals for the home side. */
                expected_home_goals?: number | null;
                /** Expected goals for the away side. */
                expected_away_goals?: number | null;
                /** Expected first-half goals. */
                expected_ht_goals?: number | null;
                [key: string]: unknown;
              } | null;
              /** Last match date included in the model fit. */
              data_through?: string | null;
              /** Timestamp when probabilities were computed. */
              computed_at?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Canonical match prediction page URL. */
          url?: string | null;
          [key: string]: unknown;
        }>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get goals scored across 15-minute match intervals (0-15 through 90+) for every team in a league season, including peak scoring periods, late-goal share, and first-half share. Optionally filter by team name substring. */
    "football_charts.get_goal_timing": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
        /**
         * Season identifier returned by list_leagues, such as 2026-2027 for winter-calendar leagues or 2026 for summer-calendar leagues. Omit for the current season.
         * @pattern ^\d{4}(-\d{4})?$
         */
        season?: string;
        /**
         * Case-insensitive team name substring used to filter rows, such as Arsenal or Flamengo.
         * @minLength 1
         * @pattern \S
         */
        team?: string;
      };
      output: {
        /** The competition key. */
        league?: string | null;
        /** The resolved season identifier. */
        season?: string | null;
        /** Ordered match interval labels. */
        time_bins?: Array<string>;
        /** Per-team goal timing rows. */
        data?: Array<{
          /** Team display name. */
          team?: string;
          /** Total goals scored in the season. */
          total?: number | null;
          /** Goals scored per interval label. */
          bins?: Record<string, number>;
          /** Interval label(s) with the highest goal count. */
          peak_bins?: Array<string>;
          /** Goals scored in the peak interval(s). */
          peak_goals?: number | null;
          /** Percentage of goals scored from minute 75 onward. */
          late_share_pct?: number | null;
          /** Percentage of goals scored in the first half. */
          first_half_pct?: number | null;
          [key: string]: unknown;
        }>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the standings table for a league season, including form, expected points, luck category, and goal averages. Supports ordering by points (classic), over/under-performance (luck), or goals scored (goals). */
    "football_charts.get_league_table": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
        /**
         * Season identifier returned by list_leagues, such as 2026-2027 for winter-calendar leagues or 2026 for summer-calendar leagues. Omit for the current season.
         * @pattern ^\d{4}(-\d{4})?$
         */
        season?: string;
        /**
         * Table ordering mode: classic (points), luck (points minus expected points), or goals (goals scored).
         * @default "classic"
         */
        view?: "classic" | "luck" | "goals";
      };
      output: {
        /** The competition key. */
        league?: string;
        /** The resolved season identifier. */
        season?: string;
        /** Whether the season is in_season or finished. */
        season_state?: string | null;
        /** The current season identifier for the league. */
        current_season?: string | null;
        /** The applied table ordering mode. */
        view?: string;
        /** Standings rows in rank order. */
        table?: Array<{
          /** Team display name. */
          team?: string;
          /** Current table position. */
          position?: number | null;
          /** Matches played. */
          played?: number | null;
          /** Matches won. */
          won?: number | null;
          /** Matches drawn. */
          drawn?: number | null;
          /** Matches lost. */
          lost?: number | null;
          /** Goals scored. */
          goals_for?: number | null;
          /** Goals conceded. */
          goals_against?: number | null;
          /** Goal difference. */
          goal_difference?: number | null;
          /** Total points. */
          points?: number | null;
          /** Five-match form string, such as WWDLW. */
          last_5_form?: string | null;
          /** Points earned across the last five matches. */
          last_5_points?: number | null;
          /** Expected points estimated from underlying performance. */
          expected_points?: number | null;
          /** Actual points minus expected points. */
          luck_difference?: number | null;
          /** Performance classification: lucky, fair, or unlucky. */
          luck_category?: string | null;
          /** Table rank ordered by expected points. */
          expected_position?: number | null;
          [key: string]: unknown;
        }>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get full details and calibrated Dixon-Coles probabilities for one match identified by its slug (country/league-slug/YYYY-MM-DD-home-vs-away). */
    "football_charts.get_match": {
      input: {
        /**
         * Match slug in country/league-slug/YYYY-MM-DD-home-vs-away format, as returned by get_fixtures.
         * @pattern ^[a-z0-9-]+/[a-z0-9-]+/\d{4}-\d{2}-\d{2}-[a-z0-9-]+$
         */
        slug: string;
      };
      output: {
        /** Match details, scores, and model probabilities. */
        match?: {
          /** Match slug. */
          slug?: string | null;
          /** Competition key. */
          league?: string | null;
          /** Competition display name. */
          real_league_name?: string | null;
          /** Country name. */
          country?: string | null;
          /** Season identifier. */
          season?: string | null;
          /** Match date in YYYY-MM-DD format (UTC). */
          match_date?: string | null;
          /** Kickoff time in HH:MM format (UTC). */
          time?: string | null;
          /** Home team name. */
          home_team?: string | null;
          /** Away team name. */
          away_team?: string | null;
          /** Match status, such as scheduled or ft. */
          match_status?: string | null;
          /** Home team full-time goals. */
          home_score?: number | null;
          /** Away team full-time goals. */
          away_score?: number | null;
          /** Half-time score. */
          ht_result?: string | null;
          /** Dixon-Coles baseline model output. */
          model_predictions?: {
            /** Dixon-Coles v2 model block. */
            dc_v2?: {
              /** Model version identifier. */
              model?: string | null;
              /** Calibrated model probabilities in the 0 to 1 range. Draw probability equals 1 minus home minus away. */
              calibrated?: {
                /** Home win probability. */
                home?: number | null;
                /** Away win probability. */
                away?: number | null;
                /** Both teams to score probability. */
                btts_yes?: number | null;
                /** Probability of more than 0.5 total goals. */
                "over_0.5"?: number | null;
                /** Probability of more than 1.5 total goals. */
                "over_1.5"?: number | null;
                /** Probability of more than 2.5 total goals. */
                "over_2.5"?: number | null;
                /** Probability of more than 3.5 total goals. */
                "over_3.5"?: number | null;
                /** Probability of more than 4.5 total goals. */
                "over_4.5"?: number | null;
                /** Probability of more than 0.5 first-half goals. */
                "ht_over_0.5"?: number | null;
                /** Probability of more than 1.5 first-half goals. */
                "ht_over_1.5"?: number | null;
                /** Expected goals for the home side. */
                expected_home_goals?: number | null;
                /** Expected goals for the away side. */
                expected_away_goals?: number | null;
                /** Expected first-half goals. */
                expected_ht_goals?: number | null;
                [key: string]: unknown;
              } | null;
              /** Last match date included in the model fit. */
              data_through?: string | null;
              /** Timestamp when probabilities were computed. */
              computed_at?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get finished matches for a league season in chronological order with full-time and half-time scores, first-goal minute, and kickoff timestamps. Optionally filter by team name substring. */
    "football_charts.get_results": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
        /**
         * Season identifier returned by list_leagues, such as 2026-2027 for winter-calendar leagues or 2026 for summer-calendar leagues. Omit for the current season.
         * @pattern ^\d{4}(-\d{4})?$
         */
        season?: string;
        /**
         * Case-insensitive team name substring used to filter rows, such as Arsenal or Flamengo.
         * @minLength 1
         * @pattern \S
         */
        team?: string;
      };
      output: {
        /** The competition key. */
        league?: string;
        /** The resolved season identifier. */
        season?: string;
        /** Whether the season is in_season or finished. */
        season_state?: string | null;
        /** The current season identifier for the league. */
        current_season?: string | null;
        /** Number of finished matches returned. */
        count?: number;
        /** Finished matches. */
        matches?: Array<{
          /** Match date in YYYY-MM-DD format (UTC). */
          date?: string | null;
          /** Kickoff time in HH:MM format (UTC). */
          time?: string | null;
          /** ISO 8601 UTC kickoff timestamp. */
          kickoff_utc?: string | null;
          /** Home team name. */
          homeTeam?: string;
          /** Away team name. */
          awayTeam?: string;
          /** Full-time score formatted as home:away. */
          score?: string | null;
          /** Half-time score formatted as home:away. */
          ht_result?: string | null;
          /** Minute of the first goal, or null if goalless. */
          first_goal_time?: number | null;
          /** Stoppage-time minutes on the first goal. */
          first_goal_time_extra?: number | null;
          /** Whether the match finished 0:0. */
          goalless?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the daily 10,000-run Monte Carlo season projection for a league, returning each team's title, top-four, and relegation (bottom-three) probabilities, mean projected points, 10th-to-90th percentile points range, and finishing-position matrix. */
    "football_charts.get_season_projection": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
      };
      output: {
        /** Simulation summary and per-team probabilities. */
        projection?: {
          /** Competition key. */
          league?: string | null;
          /** Projected season identifier. */
          season?: string | null;
          /** Simulation run date. */
          run_date?: string | null;
          /** Number of Monte Carlo simulation runs. */
          n_sims?: number | null;
          /** Remaining scheduled fixtures. */
          scheduled_remaining?: number | null;
          /** Expected remaining fixtures in the season. */
          expected_remaining?: number | null;
          /** Projected outcomes keyed by team name. */
          teams?: Record<string, {
              /** Probability of winning the league title (0 to 1). */
              title?: number | null;
              /** Probability of finishing in the top four (0 to 1). */
              top4?: number | null;
              /** Probability of finishing in the bottom three (0 to 1). */
              bottom3?: number | null;
              /** Current points. */
              pts_now?: number | null;
              /** Matches played so far. */
              played?: number | null;
              /** Current goal difference. */
              gd_now?: number | null;
              /** Mean simulated final points. */
              mean_pts?: number | null;
              /** 10th percentile final points. */
              p10_pts?: number | null;
              /** 90th percentile final points. */
              p90_pts?: number | null;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        } | null;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a single team's season profile in a league, including its standings row, full match log, 15-minute goal-timing breakdown, first-goal distribution, and per-match statistical averages where covered. */
    "football_charts.get_team": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
        /**
         * Lowercase hyphenated team slug within the league, such as arsenal or manchester-city.
         * @pattern ^[a-z0-9-]+$
         */
        team: string;
        /**
         * Season identifier returned by list_leagues, such as 2026-2027 for winter-calendar leagues or 2026 for summer-calendar leagues. Omit for the current season.
         * @pattern ^\d{4}(-\d{4})?$
         */
        season?: string;
      };
      output: {
        /** Team display name. */
        team?: string | null;
        /** Team slug. */
        slug?: string | null;
        /** Competition key. */
        league?: string | null;
        /** Resolved season identifier. */
        season?: string | null;
        /** One team standings row. */
        ranking?: {
          /** Team display name. */
          team?: string;
          /** Current table position. */
          position?: number | null;
          /** Matches played. */
          played?: number | null;
          /** Matches won. */
          won?: number | null;
          /** Matches drawn. */
          drawn?: number | null;
          /** Matches lost. */
          lost?: number | null;
          /** Goals scored. */
          goals_for?: number | null;
          /** Goals conceded. */
          goals_against?: number | null;
          /** Goal difference. */
          goal_difference?: number | null;
          /** Total points. */
          points?: number | null;
          /** Five-match form string, such as WWDLW. */
          last_5_form?: string | null;
          /** Points earned across the last five matches. */
          last_5_points?: number | null;
          /** Expected points estimated from underlying performance. */
          expected_points?: number | null;
          /** Actual points minus expected points. */
          luck_difference?: number | null;
          /** Performance classification: lucky, fair, or unlucky. */
          luck_category?: string | null;
          /** Table rank ordered by expected points. */
          expected_position?: number | null;
          [key: string]: unknown;
        } | null;
        /** Team match log for the season. */
        matches?: Array<Record<string, unknown>>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the public calibration track record of the Football Charts probability model over settled matches, including overall hit rate, Brier score, reliability buckets, and recent scored predictions. */
    "football_charts.get_track_record": {
      input: {
        /**
         * Lookback window in days (1 to 365). Defaults to 90.
         * @maximum 365
         * @exclusiveMinimum 0
         * @default 90
         */
        days?: number;
      };
      output: {
        /** Aggregated calibration metrics, reliability buckets, and recent settled predictions. */
        track_record?: Record<string, unknown>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** List all 98 football leagues covered across 44 countries with their competition key, display name, country, and available season strings. */
    "football_charts.list_leagues": {
      input: Record<string, never>;
      output: {
        /** Number of leagues returned. */
        count?: number;
        /** Season coverage window for the active tier. */
        season_window?: string | null;
        /** Covered competitions ordered by key. */
        leagues?: Array<{
          /** Competition key passed to other actions. */
          league?: string;
          /** Competition display name. */
          name?: string;
          /** Country or confederation name. */
          country?: string;
          /** Available season strings, newest first. */
          seasons?: Array<string>;
          /** Canonical league hub page on football-charts.com. */
          url?: string | null;
          [key: string]: unknown;
        }>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** List all teams competing in a league season in standings order with their slugs and summary records. */
    "football_charts.list_teams": {
      input: {
        /**
         * Competition key returned by list_leagues, such as premier, spain1, germany1, brazil1, sweden1 or wgermany1.
         * @pattern ^[a-z0-9_-]+$
         */
        league: string;
        /**
         * Season identifier returned by list_leagues, such as 2026-2027 for winter-calendar leagues or 2026 for summer-calendar leagues. Omit for the current season.
         * @pattern ^\d{4}(-\d{4})?$
         */
        season?: string;
      };
      output: {
        /** The competition key. */
        league?: string | null;
        /** The resolved season identifier. */
        season?: string | null;
        /** Teams in the league season. */
        teams?: Array<Record<string, unknown>>;
        /** Data attribution notice. */
        attribution?: string | null;
        /** Canonical football-charts.com page displaying the same dataset. */
        source_url?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
