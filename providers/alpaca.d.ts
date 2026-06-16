import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Alpaca Trading API account details for the connected paper or live account. */
    "alpaca.get_account": {
      input: Record<string, never>;
      output: {
        /** One raw object returned by Alpaca. */
        account: Record<string, unknown>;
      };
    };
    /** Get Alpaca account configuration values. */
    "alpaca.get_account_config": {
      input: Record<string, never>;
      output: {
        /** One raw object returned by Alpaca. */
        configuration: Record<string, unknown>;
      };
    };
    /** Get Alpaca account equity and profit/loss time series. */
    "alpaca.get_account_portfolio_history": {
      input: {
        /**
         * Duration such as 1D, 1W, 1M, or 1A.
         * @minLength 1
         * @pattern \S
         */
        period?: string;
        /**
         * Time window size such as 1Min, 5Min, 15Min, 1H, or 1D.
         * @minLength 1
         * @pattern \S
         */
        timeframe?: string;
        /** Intraday reporting mode. */
        intradayReporting?: "market_hours" | "extended_hours" | "continuous";
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        start?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        end?: string;
        /** Profit and loss reset mode. */
        pnlReset?: "no_reset" | "per_day";
        /**
         * A non-empty list of Alpaca cashflow type codes.
         * @minItems 1
         */
        cashflowTypes?: Array<string>;
      };
      output: {
        /** One raw object returned by Alpaca. */
        portfolioHistory: Record<string, unknown>;
      };
    };
    /** Get one Alpaca asset by symbol or asset ID. */
    "alpaca.get_asset": {
      input: {
        /**
         * Asset symbol or asset ID.
         * @minLength 1
         * @pattern \S
         */
        symbolOrAssetId: string;
      };
      output: {
        /** One raw object returned by Alpaca. */
        asset: Record<string, unknown>;
      };
    };
    /** Get historical OHLC crypto bars from Alpaca Market Data API. */
    "alpaca.get_crypto_bars": {
      input: {
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols: Array<string>;
        /**
         * Bar aggregation timeframe such as 1Min, 1Hour, or 1Day.
         * @minLength 1
         * @pattern \S
         */
        timeframe: string;
        /** Crypto market-data location. */
        location?: "us" | "us-1" | "eu-1";
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        start?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        end?: string;
        /**
         * Maximum number of data points to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** Sort data in ascending or descending order. */
        sort?: "asc" | "desc";
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** A raw object map returned by Alpaca. */
        bars: Record<string, unknown>;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        nextPageToken?: string;
      };
    };
    /** Get latest crypto snapshots from Alpaca Market Data API. */
    "alpaca.get_crypto_snapshots": {
      input: {
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols: Array<string>;
        /** Crypto latest market-data location. */
        location?: "us" | "us-1" | "us-2" | "eu-1" | "bs-1";
      };
      output: {
        /** A raw object map returned by Alpaca. */
        snapshots: Record<string, unknown>;
      };
    };
    /** Get Alpaca Trading API US market calendar days. */
    "alpaca.get_market_calendar": {
      input: {
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        start?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        end?: string;
        /** Meaning of the start and end dates. */
        dateType?: "TRADING" | "SETTLEMENT";
      };
      output: {
        /** Market calendar days returned by Alpaca. */
        calendar: Array<Record<string, unknown>>;
      };
    };
    /** Get Alpaca Trading API US market clock information. */
    "alpaca.get_market_clock": {
      input: Record<string, never>;
      output: {
        /** One raw object returned by Alpaca. */
        clock: Record<string, unknown>;
      };
    };
    /** Get one Alpaca option contract by contract symbol or ID. */
    "alpaca.get_option_contract": {
      input: {
        /**
         * Option contract symbol or ID.
         * @minLength 1
         * @pattern \S
         */
        symbolOrId: string;
      };
      output: {
        /** One raw object returned by Alpaca. */
        optionContract: Record<string, unknown>;
      };
    };
    /** Get one Alpaca order by order ID or client order ID. */
    "alpaca.get_order": {
      input: {
        /**
         * Alpaca order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * Client order ID assigned when the order was submitted.
         * @minLength 1
         * @pattern \S
         */
        clientOrderId?: string;
      };
      output: {
        /** One raw object returned by Alpaca. */
        order: Record<string, unknown>;
      };
    };
    /** Get one open Alpaca position by symbol or asset ID. */
    "alpaca.get_position": {
      input: {
        /**
         * Position symbol or asset ID.
         * @minLength 1
         * @pattern \S
         */
        symbolOrAssetId: string;
      };
      output: {
        /** One raw object returned by Alpaca. */
        position: Record<string, unknown>;
      };
    };
    /** Get historical OHLC stock bars from Alpaca Market Data API. */
    "alpaca.get_stock_bars": {
      input: {
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols: Array<string>;
        /**
         * Bar aggregation timeframe such as 1Min, 1Hour, or 1Day.
         * @minLength 1
         * @pattern \S
         */
        timeframe: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        start?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        end?: string;
        /**
         * Maximum number of data points to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Stock adjustment mode such as raw, split, dividend, or all.
         * @minLength 1
         * @pattern \S
         */
        adjustment?: string;
        /** Stock data feed. */
        feed?: "iex" | "sip" | "boats" | "otc";
        /** Sort data in ascending or descending order. */
        sort?: "asc" | "desc";
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /**
         * As-of date used for stock symbol mapping.
         * @format date
         */
        asof?: string;
        /**
         * Currency for returned prices.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
      };
      output: {
        /** A raw object map returned by Alpaca. */
        bars: Record<string, unknown>;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        nextPageToken?: string;
      };
    };
    /** Get latest stock snapshots from Alpaca Market Data API. */
    "alpaca.get_stock_snapshots": {
      input: {
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols: Array<string>;
        /** Stock market-data feed. */
        feed?: "delayed_sip" | "iex" | "otc" | "sip" | "boats" | "overnight";
        /**
         * Currency for returned prices.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
      };
      output: {
        /** A raw object map returned by Alpaca. */
        snapshots: Record<string, unknown>;
      };
    };
    /** Get one Alpaca watchlist by watchlist ID or user-defined name. */
    "alpaca.get_watchlist": {
      input: {
        /**
         * Alpaca watchlist ID.
         * @minLength 1
         * @pattern \S
         */
        watchlistId?: string;
        /**
         * User-defined Alpaca watchlist name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
      };
      output: {
        /** One raw object returned by Alpaca. */
        watchlist: Record<string, unknown>;
      };
    };
    /** List Alpaca account activities with optional type, category, date, and pagination filters. */
    "alpaca.list_account_activities": {
      input: {
        /**
         * A non-empty list of Alpaca activity type codes.
         * @minItems 1
         */
        activityTypes?: Array<string>;
        /** Activity category filter. */
        category?: "trade_activity" | "non_trade_activity";
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        date?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        until?: string;
        /** Sort data in ascending or descending order. */
        direction?: "asc" | "desc";
        /**
         * Maximum number of account activities to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** Account activities returned by Alpaca. */
        activities: Array<Record<string, unknown>>;
      };
    };
    /** List Alpaca assets with optional status, asset class, and attribute filters. */
    "alpaca.list_assets": {
      input: {
        /** Asset status filter. Omit this field to include all statuses. */
        status?: "active" | "inactive";
        /** Asset class filter. */
        assetClass?: "us_equity" | "us_option" | "crypto" | "ipo";
        /**
         * Asset attributes to include. Assets with any listed attribute are returned.
         * @minItems 1
         */
        attributes?: Array<"ptp_no_exception" | "ptp_with_exception" | "ipo" | "has_options" | "options_late_close" | "fractional_eh_enabled" | "overnight_tradable" | "overnight_halted">;
      };
      output: {
        /** Assets returned by Alpaca. */
        assets: Array<Record<string, unknown>>;
      };
    };
    /** List Alpaca corporate actions for symbols, CUSIPs, types, or IDs. */
    "alpaca.list_corporate_actions": {
      input: {
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols?: Array<string>;
        /**
         * A non-empty list of CUSIPs.
         * @minItems 1
         */
        cusips?: Array<string>;
        /**
         * A non-empty list of corporate action types.
         * @minItems 1
         */
        types?: Array<"reverse_split" | "forward_split" | "unit_split" | "cash_dividend" | "stock_dividend" | "spin_off" | "cash_merger" | "stock_merger" | "stock_and_cash_merger" | "redemption" | "name_change" | "worthless_removal" | "rights_distribution" | "partial_call" | "reorganization">;
        /** Corporate action region filter. */
        region?: "us" | "non_us" | "all";
        /**
         * Inclusive interval start date.
         * @format date
         */
        start?: string;
        /**
         * Inclusive interval end date.
         * @format date
         */
        end?: string;
        /**
         * A non-empty list of IDs.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Maximum number of corporate actions to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /** Sort data in ascending or descending order. */
        sort?: "asc" | "desc";
      };
      output: {
        /** One raw object returned by Alpaca. */
        corporateActions: Record<string, unknown>;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        nextPageToken?: string;
      };
    };
    /** List latest Alpaca news articles across stocks and crypto. */
    "alpaca.list_news": {
      input: {
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols?: Array<string>;
        /**
         * Maximum number of news articles to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** Whether article content should be included when available. */
        includeContent?: boolean;
        /** Whether articles without content should be excluded. */
        excludeContentless?: boolean;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        start?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        end?: string;
        /** Sort data in ascending or descending order. */
        sort?: "asc" | "desc";
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** News articles returned by Alpaca. */
        news: Array<Record<string, unknown>>;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        nextPageToken?: string;
      };
    };
    /** List Alpaca option contracts with optional underlying and contract filters. */
    "alpaca.list_option_contracts": {
      input: {
        /**
         * A non-empty list of underlying symbols.
         * @minItems 1
         */
        underlyingSymbols?: Array<string>;
        /** Whether deliverables should be included in the response. */
        showDeliverables?: boolean;
        /** Option contract status filter. */
        status?: "active" | "inactive";
        /**
         * Exact expiration date filter.
         * @format date
         */
        expirationDate?: string;
        /**
         * Minimum expiration date filter.
         * @format date
         */
        expirationDateGte?: string;
        /**
         * Maximum expiration date filter.
         * @format date
         */
        expirationDateLte?: string;
        /**
         * Root symbol filter.
         * @minLength 1
         * @pattern \S
         */
        rootSymbol?: string;
        /** Option contract type filter. */
        type?: "call" | "put";
        /** Option contract exercise style filter. */
        style?: "american" | "european";
        /** Minimum strike price filter. */
        strikePriceGte?: number;
        /** Maximum strike price filter. */
        strikePriceLte?: number;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /**
         * Maximum number of data points to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** Whether to filter by penny price increment eligibility. */
        ppind?: boolean;
      };
      output: {
        /** Option contracts returned by Alpaca. */
        optionContracts: Array<Record<string, unknown>>;
        /**
         * Pagination token returned by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        nextPageToken?: string;
      };
    };
    /** List Alpaca orders for the connected account with optional filters. */
    "alpaca.list_orders": {
      input: {
        /** Order status filter. */
        status?: "open" | "closed" | "all";
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * A date or RFC-3339 timestamp accepted by Alpaca.
         * @minLength 1
         * @pattern \S
         */
        until?: string;
        /** Sort data in ascending or descending order. */
        direction?: "asc" | "desc";
        /** Whether nested multi-leg orders should be included. */
        nested?: boolean;
        /**
         * A non-empty list of symbols.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** Orders returned by Alpaca. */
        orders: Array<Record<string, unknown>>;
      };
    };
    /** List open positions for the connected Alpaca trading account. */
    "alpaca.list_positions": {
      input: Record<string, never>;
      output: {
        /** Open positions returned by Alpaca. */
        positions: Array<Record<string, unknown>>;
      };
    };
    /** List Alpaca watchlists registered under the connected trading account. */
    "alpaca.list_watchlists": {
      input: Record<string, never>;
      output: {
        /** Watchlists returned by Alpaca. */
        watchlists: Array<Record<string, unknown>>;
      };
    };
  }
}
