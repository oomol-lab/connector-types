import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current AIsa account, key, and go-to-market credit balances. */
    "aisa.get_credits_balance": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List Kalshi prediction markets with live quotes, settlement rules, and pagination. */
    "aisa.get_kalshi_markets": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         * @maximum 1000
         */
        limit?: number;
        /** The pagination cursor returned by the previous response. */
        cursor?: string;
        /** Comma-separated Kalshi market tickers to retrieve. */
        tickers?: string;
        /** A Kalshi event ticker used to filter markets. */
        eventTicker?: string;
        /** A Kalshi series ticker used to filter markets. */
        seriesTicker?: string;
        /** Keywords to find in market titles and descriptions. */
        search?: string;
        /** The Kalshi market status to return. */
        status?: "unopened" | "open" | "paused" | "closed" | "settled";
        /** Return markets created after this Unix timestamp. */
        minCreatedTimestamp?: number;
        /** Return markets created before this Unix timestamp. */
        maxCreatedTimestamp?: number;
        /** Return markets updated after this Unix timestamp. */
        minUpdatedTimestamp?: number;
        /** Return markets closing after this Unix timestamp. */
        minCloseTimestamp?: number;
        /** Return markets closing before this Unix timestamp. */
        maxCloseTimestamp?: number;
        /** Return markets settled after this Unix timestamp. */
        minSettledTimestamp?: number;
        /** Return markets settled before this Unix timestamp. */
        maxSettledTimestamp?: number;
        /** How to filter multivariate-event markets. */
        multivariateEventFilter?: "only" | "exclude";
      };
      output: {
        /** The cursor for the next page when more markets are available. */
        cursor?: string;
        /** The Kalshi markets matching the filters. */
        markets: Array<Record<string, unknown>>;
      };
    };
    /** List executed Kalshi trades with prices, size, side, and pagination. */
    "aisa.get_kalshi_trades": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         * @maximum 1000
         */
        limit?: number;
        /** The pagination cursor returned by the previous response. */
        cursor?: string;
        /** The Kalshi market ticker to filter by. */
        ticker?: string;
        /** Return trades executed after this Unix timestamp. */
        minTimestamp?: number;
        /** Return trades executed before this Unix timestamp. */
        maxTimestamp?: number;
        /** Whether to return only block trades or only non-block trades. */
        isBlockTrade?: boolean;
      };
      output: {
        /** The cursor for the next page when more trades are available. */
        cursor?: string;
        /** The executed Kalshi trades matching the filters. */
        trades: Array<Record<string, unknown>>;
      };
    };
    /** Get one wallet's Polymarket split, merge, and redemption activity. */
    "aisa.get_polymarket_activity": {
      input: {
        /**
         * The wallet address whose Polymarket activity should be returned.
         * @pattern ^0x[0-9a-fA-F]{40}$
         */
        user: string;
        /** Return activity at or after this Unix timestamp. */
        startTimestamp?: number;
        /** Return activity at or before this Unix timestamp. */
        endTimestamp?: number;
        /** The Polymarket market slug to filter by. */
        marketSlug?: string;
        /** The Polymarket condition ID to filter by. */
        conditionId?: string;
        /**
         * The maximum number of activity records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The pagination key returned by the previous response. */
        paginationKey?: string;
      };
      output: {
        /** The wallet activity records matching the filters. */
        activities: Array<Record<string, unknown>>;
        /** Pagination metadata, including the next pagination key when available. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Polymarket events and their related prediction markets. */
    "aisa.get_polymarket_events": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /** A comma-separated list of fields used to order the results. */
        order?: string;
        /** Whether to sort the results in ascending order. */
        ascending?: boolean;
        /** The Polymarket event IDs to return. */
        ids?: Array<number>;
        /** The Polymarket event slugs to return. */
        slugs?: Array<string>;
        /** The Polymarket tag ID to filter by. */
        tagId?: number;
        /** The Polymarket tag slug to filter by. */
        tagSlug?: string;
        /** Whether to return active or inactive events. */
        active?: boolean;
        /** Whether to return archived or unarchived events. */
        archived?: boolean;
        /** Whether to return featured or non-featured events. */
        featured?: boolean;
        /** Whether to return closed or open events. */
        closed?: boolean;
        /** The minimum event liquidity. */
        minLiquidity?: number;
        /** The maximum event liquidity. */
        maxLiquidity?: number;
        /** The minimum event volume. */
        minVolume?: number;
        /** The maximum event volume. */
        maxVolume?: number;
        /**
         * Return events starting after this ISO timestamp.
         * @format date-time
         */
        minStartDate?: string;
        /**
         * Return events starting before this ISO timestamp.
         * @format date-time
         */
        maxStartDate?: string;
        /**
         * Return events ending after this ISO timestamp.
         * @format date-time
         */
        minEndDate?: string;
        /**
         * Return events ending before this ISO timestamp.
         * @format date-time
         */
        maxEndDate?: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List Polymarket questions with outcome prices, liquidity, volume, and date filters. */
    "aisa.get_polymarket_markets": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /** A comma-separated list of fields used to order the results. */
        order?: string;
        /** Whether to sort the results in ascending order. */
        ascending?: boolean;
        /** The Polymarket market IDs to return. */
        ids?: Array<number>;
        /** The Polymarket market slugs to return. */
        slugs?: Array<string>;
        /** The CLOB token IDs to filter by. */
        clobTokenIds?: Array<string>;
        /** The condition IDs to filter by. */
        conditionIds?: Array<string>;
        /** The minimum total market volume. */
        minVolume?: number;
        /** The maximum total market volume. */
        maxVolume?: number;
        /**
         * Return markets starting after this ISO timestamp.
         * @format date-time
         */
        minStartDate?: string;
        /**
         * Return markets starting before this ISO timestamp.
         * @format date-time
         */
        maxStartDate?: string;
        /**
         * Return markets ending after this ISO timestamp.
         * @format date-time
         */
        minEndDate?: string;
        /**
         * Return markets ending before this ISO timestamp.
         * @format date-time
         */
        maxEndDate?: string;
        /** The Polymarket tag ID to filter by. */
        tagId?: number;
        /** Whether to return closed or open markets. */
        closed?: boolean;
        /** Whether to include tag metadata in each market. */
        includeTag?: boolean;
      };
      output: Array<Record<string, unknown>>;
    };
    /** Get AIsa request, token, value, and charged usage in daily buckets. */
    "aisa.get_usage": {
      input: {
        /**
         * The usage window start as a positive Unix timestamp.
         * @minimum 1
         */
        startTimestamp: number;
        /**
         * The usage window end as a Unix timestamp; defaults to the current time.
         * @minimum 1
         */
        endTimestamp?: number;
      };
      output: Record<string, unknown>;
    };
  }
}
