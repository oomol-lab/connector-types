import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List matches for a sales date, including fixture IDs and report availability. Omit date for the current sales day. */
    "qiuxiaoce.get_daily_digest": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /** Total matches. */
        total?: number;
        /** Report and data readiness counts. */
        summary?: Record<string, unknown>;
        /** Matches on the selected sales day. */
        matches?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read a fixture's kickoff, score, status and teams. */
    "qiuxiaoce.get_fixture": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Upstream detail fields, preserved without filtering. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read goals, cards and substitutions for a fixture. */
    "qiuxiaoce.get_fixture_events": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Fixture events. */
        events?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read announced starting lineups and substitutes for a fixture. */
    "qiuxiaoce.get_fixture_lineups": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Upstream detail fields, preserved without filtering. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read player-by-player post-match statistics for a fixture. */
    "qiuxiaoce.get_fixture_players": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Upstream detail fields, preserved without filtering. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read post-match technical statistics for a fixture. */
    "qiuxiaoce.get_fixture_stats": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Upstream detail fields, preserved without filtering. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read league details and current standings. */
    "qiuxiaoce.get_league": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Upstream detail fields, preserved without filtering. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read remaining credits, expiration and today's usage without consuming credits. */
    "qiuxiaoce.get_quota": {
      input: Record<string, never>;
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Credit balance and usage. */
        data?: {
          /** Remaining API credits. */
          credits_remaining?: number;
          /** Credit expiration reported by the provider. */
          expires_at?: string | null;
          /** Credits consumed today. */
          today_used?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read league standings for a season, defaulting to the latest available season. */
    "qiuxiaoce.get_standings": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        league: number;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
        /** League standings. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read a team's names, country, venue and founding information. */
    "qiuxiaoce.get_team": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Upstream detail fields, preserved without filtering. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find fixtures by date, date range, league, team, round, status or fixture ID. Use either date or from/to. */
    "qiuxiaoce.list_fixtures": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
        /** The provider entity ID returned by a discovery action. */
        league?: number;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
        /** The provider entity ID returned by a discovery action. */
        team?: number;
        /** Round name; requires league and season. */
        round?: string;
        /** Fixture status: not started, finished, or live. */
        status?: "NS" | "FT" | "LIVE";
        /** Most recent number of matches; requires team. */
        last?: number;
        /** Upcoming number of matches; requires team. */
        next?: number;
        /** The provider entity ID returned by a discovery action. */
        id?: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Number of returned fixtures. */
        count?: number;
        /** Matching fixtures. */
        fixtures?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List all league fixtures and scores for a season. */
    "qiuxiaoce.list_league_fixtures": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Season records returned by the provider. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List available season years before querying historical league data. */
    "qiuxiaoce.list_league_seasons": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Available season starting years. */
        data?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** List participating teams for a league season. */
    "qiuxiaoce.list_league_teams": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Season records returned by the provider. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read a league season's assist leaders. */
    "qiuxiaoce.list_league_top_assists": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Season records returned by the provider. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read a league season's top scorers. */
    "qiuxiaoce.list_league_top_scorers": {
      input: {
        /** The provider entity ID returned by a discovery action. */
        id: number;
        /** Season starting year. Omit to use the provider default season. */
        season?: number;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Season records returned by the provider. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List supported leagues, optionally searching by name or Chinese alias. */
    "qiuxiaoce.list_leagues": {
      input: {
        /** Optional league name keyword. */
        q?: string;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Matching leagues. */
        leagues?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search teams by name, including Chinese aliases. Verify the returned identity before selecting an ID. */
    "qiuxiaoce.search_teams": {
      input: {
        /**
         * Team name keyword, including Chinese aliases.
         * @minLength 1
         */
        search: string;
      };
      output: {
        /** Whether the provider reports success. */
        success?: boolean;
        /** Matching teams. */
        teams?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
