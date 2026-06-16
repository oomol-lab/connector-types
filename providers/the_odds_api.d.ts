import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get odds for one The Odds API event. */
    "the_odds_api.get_event_odds": {
      input: {
        /**
         * The sport key returned by The Odds API sports endpoint, or upcoming for the next live and upcoming games across all sports.
         * @minLength 1
         */
        sport: string;
        /**
         * The event ID returned by The Odds API.
         * @minLength 1
         */
        eventId: string;
        /**
         * Bookmaker regions to request, such as us, us2, uk, au, or eu.
         * @minItems 1
         */
        regions: Array<string>;
        /**
         * Betting market keys to request, such as h2h, spreads, or totals.
         * @minItems 1
         */
        markets?: Array<string>;
        /** Timestamp format returned by The Odds API. */
        dateFormat?: "iso" | "unix";
        /** Odds format returned by The Odds API. */
        oddsFormat?: "decimal" | "american";
        /**
         * Bookmaker keys used to filter event odds.
         * @minItems 1
         */
        bookmakers?: Array<string>;
        /** Whether bookmaker event, market, and betslip links are included. */
        includeLinks?: boolean;
        /** Whether source IDs are included when available. */
        includeSids?: boolean;
        /** Whether bet limits are included when available. */
        includeBetLimits?: boolean;
        /** Whether DFS multipliers are included when available. */
        includeMultipliers?: boolean;
      };
      output: {
        /** Single-event odds payload returned by The Odds API. */
        eventOdds: Record<string, unknown>;
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
    /** Get live and upcoming odds for a sport from The Odds API. */
    "the_odds_api.get_odds": {
      input: {
        /**
         * The sport key returned by The Odds API sports endpoint, or upcoming for the next live and upcoming games across all sports.
         * @minLength 1
         */
        sport: string;
        /**
         * Bookmaker regions to request, such as us, us2, uk, au, or eu.
         * @minItems 1
         */
        regions: Array<string>;
        /**
         * Betting market keys to request, such as h2h, spreads, or totals.
         * @minItems 1
         */
        markets?: Array<string>;
        /** Timestamp format returned by The Odds API. */
        dateFormat?: "iso" | "unix";
        /** Odds format returned by The Odds API. */
        oddsFormat?: "decimal" | "american";
        /**
         * Event IDs used to filter odds.
         * @minItems 1
         */
        eventIds?: Array<string>;
        /**
         * Bookmaker keys used to filter odds.
         * @minItems 1
         */
        bookmakers?: Array<string>;
        /**
         * ISO 8601 timestamp used by The Odds API to filter event commence time.
         * @minLength 1
         */
        commenceTimeFrom?: string;
        /**
         * ISO 8601 timestamp used by The Odds API to filter event commence time.
         * @minLength 1
         */
        commenceTimeTo?: string;
        /** Whether bookmaker event, market, and betslip links are included. */
        includeLinks?: boolean;
        /** Whether source IDs are included when available. */
        includeSids?: boolean;
        /** Whether bet limits are included when available. */
        includeBetLimits?: boolean;
        /** Whether home and away rotation numbers are included. */
        includeRotationNumbers?: boolean;
      };
      output: {
        /** Event odds returned by The Odds API. */
        odds: Array<Record<string, unknown>>;
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
    /** Get live and recent completed scores for a sport from The Odds API. */
    "the_odds_api.get_scores": {
      input: {
        /**
         * The sport key returned by The Odds API sports endpoint, or upcoming for the next live and upcoming games across all sports.
         * @minLength 1
         */
        sport: string;
        /**
         * Number of days in the past from which to return completed scores.
         * @minimum 0
         */
        daysFrom?: number;
        /** Timestamp format returned by The Odds API. */
        dateFormat?: "iso" | "unix";
        /**
         * Event IDs used to filter scores.
         * @minItems 1
         */
        eventIds?: Array<string>;
      };
      output: {
        /** Event scores returned by The Odds API. */
        scores: Array<Record<string, unknown>>;
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
    /** List recently seen market keys for one The Odds API event. */
    "the_odds_api.list_event_markets": {
      input: {
        /**
         * The sport key returned by The Odds API sports endpoint, or upcoming for the next live and upcoming games across all sports.
         * @minLength 1
         */
        sport: string;
        /**
         * The event ID returned by The Odds API.
         * @minLength 1
         */
        eventId: string;
        /**
         * Bookmaker regions to request, such as us, us2, uk, au, or eu.
         * @minItems 1
         */
        regions: Array<string>;
        /**
         * Bookmaker keys used to filter event markets.
         * @minItems 1
         */
        bookmakers?: Array<string>;
        /** Timestamp format returned by The Odds API. */
        dateFormat?: "iso" | "unix";
      };
      output: {
        /** Event market payload returned by The Odds API. */
        eventMarkets: {
          /** The event ID. */
          id?: string;
          /** The sport key for this event. */
          sport_key?: string;
          /** The sport title for this event. */
          sport_title?: string;
          /** The event commence time in the requested date format. */
          commence_time?: string | number;
          /** The home team name. */
          home_team?: string;
          /** The away team name. */
          away_team?: string;
          /** Bookmakers with recently seen markets for this event. */
          bookmakers?: Array<{
            /** The bookmaker key. */
            key?: string;
            /** The bookmaker title. */
            title?: string;
            /** Recently seen market keys for this bookmaker. */
            markets?: Array<{
              /** The market key. */
              key?: string;
              /** When this market was last seen by The Odds API. */
              last_update?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
    /** List live and upcoming events for a sport from The Odds API. */
    "the_odds_api.list_events": {
      input: {
        /**
         * The sport key returned by The Odds API sports endpoint, or upcoming for the next live and upcoming games across all sports.
         * @minLength 1
         */
        sport: string;
        /** Timestamp format returned by The Odds API. */
        dateFormat?: "iso" | "unix";
        /**
         * Event IDs used to filter events.
         * @minItems 1
         */
        eventIds?: Array<string>;
        /**
         * ISO 8601 timestamp used by The Odds API to filter event commence time.
         * @minLength 1
         */
        commenceTimeFrom?: string;
        /**
         * ISO 8601 timestamp used by The Odds API to filter event commence time.
         * @minLength 1
         */
        commenceTimeTo?: string;
        /** Whether home and away rotation numbers are included. */
        includeRotationNumbers?: boolean;
      };
      output: {
        /** Event objects returned by The Odds API. */
        events: Array<{
          /** The event ID. */
          id?: string;
          /** The sport key for this event. */
          sport_key?: string;
          /** The sport title for this event. */
          sport_title?: string;
          /** The event commence time in the requested date format. */
          commence_time?: string | number;
          /** The home team name. */
          home_team?: string;
          /** The away team name. */
          away_team?: string;
          [key: string]: unknown;
        }>;
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
    /** List participants for a sport from The Odds API. */
    "the_odds_api.list_participants": {
      input: {
        /**
         * The sport key returned by The Odds API sports endpoint, or upcoming for the next live and upcoming games across all sports.
         * @minLength 1
         */
        sport: string;
      };
      output: {
        /** Participant objects returned by The Odds API. */
        participants: Array<{
          /** The participant full name. */
          full_name?: string;
          [key: string]: unknown;
        }>;
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
    /** List sports supported by The Odds API. */
    "the_odds_api.list_sports": {
      input: {
        /** Whether to include both in-season and out-of-season sports. */
        all?: boolean;
      };
      output: {
        /** Sport objects returned by The Odds API. */
        sports: Array<{
          /** The sport key used in downstream requests. */
          key?: string;
          /** The sport group name. */
          group?: string;
          /** The sport title. */
          title?: string;
          /** The sport description. */
          description?: string;
          /** Whether the sport is currently in season. */
          active?: boolean;
          /** Whether the sport has outright markets. */
          has_outrights?: boolean;
          [key: string]: unknown;
        }>;
        /** The Odds API quota headers returned with the response, when available. */
        quota: {
          /** The x-requests-remaining response header value. */
          requestsRemaining?: string;
          /** The x-requests-used response header value. */
          requestsUsed?: string;
          /** The x-requests-last response header value. */
          requestsLast?: string;
        };
      };
    };
  }
}
