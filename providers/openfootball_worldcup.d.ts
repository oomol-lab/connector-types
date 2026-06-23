import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List World Cup groups from the public OpenFootball JSON dataset. */
    "openfootball_worldcup.list_groups": {
      input: {
        /**
         * The World Cup season year to read from OpenFootball.
         * @minimum 1930
         */
        season: number;
      };
      output: {
        /** The OpenFootball tournament wrapper. */
        tournament: {
          /** The tournament name returned by OpenFootball. */
          name: string;
        };
        /** The groups returned by OpenFootball. */
        groups: Array<{
          /** The group name. */
          name: string;
          /** The teams in the group. */
          teams: Array<string>;
        }>;
        /**
         * The source URL used to fetch the dataset.
         * @format uri
         */
        sourceUrl: string;
      };
    };
    /** List World Cup matches from the public OpenFootball JSON dataset. This community dataset is not a real-time or official results source. */
    "openfootball_worldcup.list_matches": {
      input: {
        /**
         * The World Cup season year to read from OpenFootball.
         * @minimum 1930
         */
        season: number;
      };
      output: {
        /** The OpenFootball tournament wrapper. */
        tournament: {
          /** The tournament name returned by OpenFootball. */
          name: string;
        };
        /** The matches returned by OpenFootball. */
        matches: Array<{
          /** The match round or matchday. */
          round?: string;
          /**
           * The match date.
           * @format date
           */
          date?: string;
          /** The local or UTC-offset match time. */
          time?: string;
          /** The first team name. */
          team1?: string;
          /** The second team name. */
          team2?: string;
          /** The group name when this is a group-stage match. */
          group?: string;
          /** The host city or ground label. */
          ground?: string;
          /** The goals scored by the first team. */
          goals1?: Array<{
            /** The scorer name. */
            name?: string;
            /** The goal minute. */
            minute?: string;
            /** Whether the goal was a penalty. */
            penalty?: boolean;
            /** Whether the goal was an own goal. */
            owngoal?: boolean;
            [key: string]: unknown;
          }>;
          /** The goals scored by the second team. */
          goals2?: Array<{
            /** The scorer name. */
            name?: string;
            /** The goal minute. */
            minute?: string;
            /** Whether the goal was a penalty. */
            penalty?: boolean;
            /** Whether the goal was an own goal. */
            owngoal?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * The source URL used to fetch the dataset.
         * @format uri
         */
        sourceUrl: string;
      };
    };
    /** List World Cup qualification playoff matches from the public OpenFootball JSON dataset when a season publishes playoff files. */
    "openfootball_worldcup.list_qualification_playoffs": {
      input: {
        /**
         * The World Cup season year to read from OpenFootball.
         * @minimum 1930
         */
        season: number;
      };
      output: {
        /** The OpenFootball tournament wrapper. */
        tournament: {
          /** The tournament name returned by OpenFootball. */
          name: string;
        };
        /** The qualification playoff matches returned by OpenFootball. */
        matches: Array<{
          /** The match round or matchday. */
          round?: string;
          /**
           * The match date.
           * @format date
           */
          date?: string;
          /** The local or UTC-offset match time. */
          time?: string;
          /** The first team name. */
          team1?: string;
          /** The second team name. */
          team2?: string;
          /** The group name when this is a group-stage match. */
          group?: string;
          /** The host city or ground label. */
          ground?: string;
          /** The goals scored by the first team. */
          goals1?: Array<{
            /** The scorer name. */
            name?: string;
            /** The goal minute. */
            minute?: string;
            /** Whether the goal was a penalty. */
            penalty?: boolean;
            /** Whether the goal was an own goal. */
            owngoal?: boolean;
            [key: string]: unknown;
          }>;
          /** The goals scored by the second team. */
          goals2?: Array<{
            /** The scorer name. */
            name?: string;
            /** The goal minute. */
            minute?: string;
            /** Whether the goal was a penalty. */
            penalty?: boolean;
            /** Whether the goal was an own goal. */
            owngoal?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * The source URL used to fetch the dataset.
         * @format uri
         */
        sourceUrl: string;
      };
    };
    /** List World Cup squads from the public OpenFootball JSON dataset when a season publishes squad files. */
    "openfootball_worldcup.list_squads": {
      input: {
        /**
         * The World Cup season year to read from OpenFootball.
         * @minimum 1930
         */
        season: number;
      };
      output: {
        /** The squads returned by OpenFootball. */
        squads: Array<{
          /** The team name. */
          name?: string;
          /** The FIFA team code. */
          fifa_code?: string;
          /** The group letter. */
          group?: string;
          /** The squad players returned by OpenFootball. */
          players?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The source URL used to fetch the dataset.
         * @format uri
         */
        sourceUrl: string;
      };
    };
    /** List World Cup stadiums from the public OpenFootball JSON dataset. */
    "openfootball_worldcup.list_stadiums": {
      input: {
        /**
         * The World Cup season year to read from OpenFootball.
         * @minimum 1930
         */
        season: number;
      };
      output: {
        /** The OpenFootball tournament wrapper. */
        tournament: {
          /** The tournament name returned by OpenFootball. */
          name: string;
        };
        /** The stadiums returned by OpenFootball. */
        stadiums: Array<{
          /** The host city label. */
          city?: string;
          /** The city timezone label. */
          timezone?: string;
          /** The lowercase country code. */
          cc?: string;
          /** The stadium name. */
          name?: string;
          /** The stadium capacity. */
          capacity?: number;
          /** The stadium coordinates. */
          coords?: string;
          [key: string]: unknown;
        }>;
        /**
         * The source URL used to fetch the dataset.
         * @format uri
         */
        sourceUrl: string;
      };
    };
    /** List World Cup teams from the public OpenFootball JSON dataset. */
    "openfootball_worldcup.list_teams": {
      input: {
        /**
         * The World Cup season year to read from OpenFootball.
         * @minimum 1930
         */
        season: number;
      };
      output: {
        /** The teams returned by OpenFootball. */
        teams: Array<{
          /** The team name. */
          name?: string;
          /** The FIFA team code. */
          fifa_code?: string;
          /** The group letter. */
          group?: string;
          /** The confederation code. */
          confed?: string;
          /** The continent name. */
          continent?: string;
          [key: string]: unknown;
        }>;
        /**
         * The source URL used to fetch the dataset.
         * @format uri
         */
        sourceUrl: string;
      };
    };
  }
}
