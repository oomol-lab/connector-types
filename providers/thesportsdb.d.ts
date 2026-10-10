import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a TheSportsDB league schedule for a specific season. */
    "thesportsdb.get_league_season_schedule": {
      input: {
        /**
         * The numeric TheSportsDB entity ID, returned by search or list actions.
         * @pattern ^[0-9]+$
         */
        id: string;
        /**
         * The season returned by list_related, such as 2025-2026 or 2025.
         * @minLength 1
         */
        season: string;
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Get current TheSportsDB live scores for all sports, one sport or a league ID. */
    "thesportsdb.get_livescores": {
      input: {
        /**
         * Use all, a sport such as soccer, or a numeric league ID. Defaults to all.
         * @minLength 1
         * @default "all"
         */
        filter?: string;
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Get upcoming or previous events for a league, team or venue. TheSportsDB controls the result limit. */
    "thesportsdb.get_schedule": {
      input: {
        /** The entity whose events to retrieve. */
        entity: "league" | "team" | "venue";
        /**
         * The numeric TheSportsDB entity ID, returned by search or list actions.
         * @pattern ^[0-9]+$
         */
        id: string;
        /** Retrieve upcoming events or previous results. */
        direction: "next" | "previous";
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Get the full current season schedule for a TheSportsDB team. */
    "thesportsdb.get_team_season_schedule": {
      input: {
        /**
         * The numeric TheSportsDB entity ID, returned by search or list actions.
         * @pattern ^[0-9]+$
         */
        id: string;
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List the countries, sports or leagues supported by TheSportsDB. */
    "thesportsdb.list_catalog": {
      input: {
        /** The catalog to retrieve. */
        catalog: "countries" | "sports" | "leagues";
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List teams or seasons in a league, or players in a team, using TheSportsDB IDs. */
    "thesportsdb.list_related": {
      input: {
        /** Retrieve teams or seasons for a league ID, or players for a team ID. */
        collection: "teams" | "seasons" | "players";
        /**
         * The numeric TheSportsDB entity ID, returned by search or list actions.
         * @pattern ^[0-9]+$
         */
        id: string;
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Look up a TheSportsDB league, team, player, event or venue by ID. */
    "thesportsdb.lookup_entity": {
      input: {
        /** The kind of sports entity. */
        entity: "league" | "team" | "player" | "event" | "venue";
        /**
         * The numeric TheSportsDB entity ID, returned by search or list actions.
         * @pattern ^[0-9]+$
         */
        id: string;
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Search TheSportsDB leagues, teams, players, events or venues by name. Requires a Premium API key. */
    "thesportsdb.search_entities": {
      input: {
        /** The kind of sports entity. */
        entity: "league" | "team" | "player" | "event" | "venue";
        /**
         * The name to search for. Spaces are converted to underscores.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** Records returned by TheSportsDB, or an empty array when no records match. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
