import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the current API account credit balance. */
    "surf.credit_balance": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** DEX Token OHLCV Price. */
    "surf.dex_token_price": {
      input: {
        /**
         * Chain the token lives on. Can be `ethereum`, `base`, `bsc`, `arbitrum`, `optimism`, `polygon`, `avalanche`, or `solana`.
         * @example "ethereum"
         */
        chain: "ethereum" | "base" | "bsc" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "solana";
        /**
         * Token contract address — 0x-prefixed hex (42 chars) for EVM chains, base58 for Solana. NOT a ticker symbol.
         * @example "0x6982508145454ce325ddbe47a25d4ec3d2311933"
         */
        address: string;
        /**
         * Candle bucket size. Sub-day intervals (`1m`-`4h`) are the typical choice for active DEX analysis. Default: "1h".
         * @example "1h"
         */
        interval?: "1m" | "5m" | "15m" | "30m" | "1h" | "4h" | "12h" | "1d" | "7d";
        /**
         * Window of historical data to return. `max` returns the largest allowed 1500-bar window for the selected interval. Ignored when both `from` and `to` are set. Default: "24h".
         * @example "24h"
         */
        time_range?: "1h" | "6h" | "12h" | "24h" | "7d" | "30d" | "90d" | "180d" | "365d" | "max";
        /**
         * Start of custom date range (Unix seconds or YYYY-MM-DD). Must be set together with `to`. Overrides `time_range` when set.
         * @example "2026-01-01"
         */
        from?: string;
        /**
         * End of custom date range (Unix seconds or YYYY-MM-DD). Must be set together with `from`. Overrides `time_range` when set.
         * @example "2026-01-02"
         */
        to?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Balance Sheet. */
    "surf.equity_balance_sheet": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /** Financial period Default: "annual". */
        period?: "quarterly" | "annual";
        /**
         * Inclusive latest period end date in YYYY-MM-DD format
         * @example "2024-12-31"
         */
        end_date?: string;
        /**
         * Maximum financial periods to return Default: 5.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Price Candles. */
    "surf.equity_candles": {
      input: {
        /**
         * US equity ticker symbol
         * @minLength 1
         * @maxLength 20
         * @example "AAPL"
         */
        symbol: string;
        /** Candle interval Default: "day". */
        interval?: "day" | "week" | "month" | "year";
        /**
         * Number of intervals represented by each candle Default: 1.
         * @minimum 1
         * @maximum 100
         */
        interval_multiplier?: number;
        /**
         * Inclusive start date in YYYY-MM-DD format; defaults to one year before end_date
         * @example "2025-01-01"
         */
        start_date?: string;
        /**
         * Inclusive end date in YYYY-MM-DD format; defaults to the current date in US Eastern time
         * @example "2025-12-31"
         */
        end_date?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Cash Flow. */
    "surf.equity_cash_flow": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /** Financial period Default: "annual". */
        period?: "quarterly" | "ytd" | "annual" | "ttm";
        /**
         * Inclusive latest period end date in YYYY-MM-DD format
         * @example "2024-12-31"
         */
        end_date?: string;
        /**
         * Maximum financial periods to return Default: 5.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Profile. */
    "surf.equity_company_profile": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** ETF Holdings. */
    "surf.equity_etf_holdings": {
      input: {
        /**
         * US-listed ETF or index-fund ticker symbol
         * @minLength 1
         * @maxLength 20
         * @example "SPY"
         */
        symbol: string;
        /**
         * Select the composition effective on or before this YYYY-MM-DD date; the response also includes its immediately previous snapshot
         * @example "2026-03-31"
         */
        as_of?: string;
        /** Filter holdings by instrument type */
        asset_class?: "equity" | "bond";
        /**
         * Maximum holdings to return Default: 50.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of holdings to skip Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity SEC Filings. */
    "surf.equity_filings": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Financial Metrics. */
    "surf.equity_financial_metrics": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /** Financial metric period Default: "ttm". */
        period?: "quarterly" | "annual" | "ttm";
        /**
         * Inclusive latest period end date in YYYY-MM-DD format
         * @example "2024-12-31"
         */
        end_date?: string;
        /**
         * Maximum financial periods to return Default: 5.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Income Statement. */
    "surf.equity_income_statement": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /** Financial period Default: "annual". */
        period?: "quarterly" | "ytd" | "annual" | "ttm";
        /**
         * Inclusive latest period end date in YYYY-MM-DD format
         * @example "2024-12-31"
         */
        end_date?: string;
        /**
         * Maximum financial periods to return Default: 5.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Latest Equity Filings. */
    "surf.equity_latest_filings": {
      input: {
        /**
         * Maximum filings to return Default: 4.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Latest Equity Financials. */
    "surf.equity_latest_financials": {
      input: {
        /**
         * Maximum companies to return Default: 4.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Optional minimum current market capitalization in USD; omit to disable this filter
         * @minimum 0
         */
        market_cap_min?: number | null;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Listings. */
    "surf.equity_listings": {
      input: {
        /**
         * Ticker used to resolve the issuer whose current verified stock listings are returned
         * @example "AAPL"
         */
        symbol: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Metadata. */
    "surf.equity_meta": {
      input: {
        /**
         * One or more comma-separated US stock or ETF ticker symbols; at most 20 unique symbols
         * @minLength 1
         * @maxLength 419
         * @example "AAPL,NVDA,SPY"
         */
        symbol: string;
        /** Include tokenized counterparts of each stock — issuer-minted crypto tokens tracking the equity, with their chains and contract addresses. Off by default: most symbols have none, and the payload grows with a 20-symbol request. */
        include_tokenized?: boolean;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Financial Overview. */
    "surf.equity_overview": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /** Financial period Default: "ttm". */
        period?: "quarterly" | "ytd" | "annual" | "ttm";
        /**
         * Inclusive latest period end date in YYYY-MM-DD format
         * @example "2024-12-31"
         */
        end_date?: string;
        /**
         * Maximum financial periods to return Default: 5.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Equity Segment Financials. */
    "surf.equity_segments": {
      input: {
        /**
         * US equity ticker symbol
         * @example "AAPL"
         */
        symbol: string;
        /** Financial period Default: "annual". */
        period?: "quarterly" | "annual";
        /** Optional statement family */
        statement_type?: "income" | "balance_sheet" | "cash_flow";
        /** Optional normalized metric code */
        metric_code?: string;
        /**
         * Optional provider dimension key
         * @pattern ^[a-z][a-z0-9_]*$
         */
        dimension_type?: string;
        /** Optional provider segment label */
        label?: string;
        /**
         * Inclusive period start
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        start_date?: string;
        /**
         * Inclusive period end
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        end_date?: string;
        /**
         * Maximum facts to return Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of facts to skip Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Historical Candles. */
    "surf.exchange_candles": {
      input: {
        /**
         * Exchange identifier
         * @example "bithumb"
         */
        exchange: "bithumb" | "upbit" | "hashkey" | "bitflyer" | "coinone" | "korbit";
        /**
         * Trading pair in base/quote form, e.g. BTC/KRW
         * @example "BTC/KRW"
         */
        pair: string;
        /**
         * Candle interval Default: "5m".
         * @example "5m"
         */
        interval?: "5m" | "4h" | "1w";
        /**
         * Start of time range. Accepts Unix seconds or date string
         * @example "2026-06-24T09:00:00Z"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds or date string
         * @example "2026-06-24T10:00:00Z"
         */
        to?: string;
        /**
         * Whether to include carry-forward candles for no-trade intervals. Defaults to true for continuous charts; set false for raw exchange-only candles. Default: true.
         * @example true
         */
        include_synthetic?: boolean;
        /**
         * Max number of candles to return. Weekly candles allow up to 300 rows for a 5-year chart; intraday intervals are capped at 100. Default: 100.
         * @minimum 1
         * @maximum 300
         * @example 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Market Coverage. */
    "surf.exchange_coverage": {
      input: {
        /**
         * Exchange identifier. When omitted, returns all supported exchanges.
         * @example "bithumb"
         */
        exchange?: "bithumb" | "upbit" | "hashkey" | "bitflyer" | "coinone" | "korbit";
        /**
         * Free-text search over pair, base currency, or quote currency
         * @example "BTC"
         */
        q?: string;
        /**
         * Quote currency filter
         * @example "KRW"
         */
        quote?: string;
        /**
         * Market type Default: "spot".
         * @example "spot"
         */
        type?: "spot";
        /**
         * Market status filter
         * @example "active"
         */
        status?: "active" | "inactive";
        /**
         * Market data coverage status filter
         * @example "covered"
         */
        data_status?: "covered" | "official_empty_all" | "official_empty_ticker" | "official_empty_5m" | "official_empty_weekly" | "stale_gt_7d" | "stale_30m_to_7d" | "recent_but_lt_min_ta_candles" | "missing_4h" | "missing_latest_ta";
        /**
         * Sort field Default: "pair".
         * @example "pair"
         */
        sort_by?: "pair" | "price" | "change_24h" | "volume_24h" | "technical_score" | "latest_candle_at" | "status";
        /**
         * Sort order Default: "asc".
         * @example "asc"
         */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Order Book Depth. */
    "surf.exchange_depth": {
      input: {
        /**
         * Trading pair (e.g. BTC/USDT)
         * @example "BTC/USDT"
         */
        pair: string;
        /**
         * Market type: spot for spot trading, swap/perpetual/perp for perpetual contracts Default: "spot".
         * @example "spot"
         */
        type?: "spot" | "swap" | "perpetual" | "perp";
        /**
         * Number of price levels (1-100) Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Exchange identifier. Note: hyperliquid uses USDC-settled perps (e.g. BTC/USDC:USDC); pass USDC-quoted pairs when querying hyperliquid. Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget" | "coinbase" | "kraken" | "gate" | "mexc" | "upbit" | "bitstamp" | "deribit" | "bitmex" | "bithumb" | "hyperliquid";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Funding Rate History. */
    "surf.exchange_funding_history": {
      input: {
        /**
         * Trading pair (e.g. BTC/USDT)
         * @example "BTC/USDT"
         */
        pair: string;
        /**
         * Start of time range. Accepts Unix seconds or date string (YYYY-MM-DD, ISO8601). Not all exchanges support historical queries; some only return recent data regardless of this value.
         * @example "2026-03-01"
         */
        from?: string;
        /**
         * Max number of records. For longer history, paginate using the last returned timestamp as the next from value. Default: 100.
         * @minimum 1
         * @maximum 500
         * @example 100
         */
        limit?: number;
        /**
         * Exchange identifier. Note: hyperliquid uses USDC-settled perps (e.g. BTC/USDC:USDC); pass USDC-quoted pairs when querying hyperliquid. Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget" | "gate" | "htx" | "mexc" | "bitfinex" | "bitmex" | "hyperliquid";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange OHLCV Candlesticks. */
    "surf.exchange_klines": {
      input: {
        /**
         * Trading pair (e.g. BTC/USDT)
         * @example "BTC/USDT"
         */
        pair: string;
        /**
         * Market type: spot for spot trading, swap/perpetual/perp for perpetual contracts Default: "spot".
         * @example "spot"
         */
        type?: "spot" | "swap" | "perpetual" | "perp";
        /**
         * Candle size — bucket duration for each returned OHLCV row. This endpoint uses `interval` only; it does NOT accept `time_range`. Use `from` + `limit` to control the window. Default: "1h".
         * @example "1h"
         */
        interval?: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
        /**
         * Start of time range. Accepts Unix seconds or date string (YYYY-MM-DD, ISO8601)
         * @example "2026-03-01"
         */
        from?: string;
        /**
         * Max number of candles to return. Exchange may cap lower (e.g. 200-1000). For longer ranges, paginate using the last returned timestamp as the next from value. Default: 100.
         * @minimum 1
         * @maximum 1000
         * @example 100
         */
        limit?: number;
        /**
         * Exchange identifier. Note: hyperliquid uses USDC-settled perps (e.g. BTC/USDC:USDC); pass USDC-quoted pairs when querying hyperliquid. Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget" | "coinbase" | "kraken" | "gate" | "htx" | "kucoin" | "mexc" | "upbit" | "bitfinex" | "bitstamp" | "deribit" | "bitmex" | "bithumb" | "hyperliquid";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Long/Short Ratio History. */
    "surf.exchange_long_short_ratio": {
      input: {
        /**
         * Trading pair (e.g. BTC/USDT)
         * @example "BTC/USDT"
         */
        pair: string;
        /**
         * Bucket size for each point in the series: `1h`, `4h`, or `1d`. This endpoint uses `interval` only; it does NOT accept `time_range`. Use `from` + `limit` to control the window. Default: "1h".
         * @example "1h"
         */
        interval?: "1h" | "4h" | "1d";
        /**
         * Start of time range. Accepts Unix seconds or date string (YYYY-MM-DD, ISO8601). Binance only retains the last 30 days of data; other exchanges may have different limits.
         * @example "2026-03-01"
         */
        from?: string;
        /**
         * Max number of records. For longer history, paginate using the last returned timestamp as the next from value. Default: 50.
         * @minimum 1
         * @maximum 500
         * @example 50
         */
        limit?: number;
        /**
         * Exchange identifier Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Trading Pairs. */
    "surf.exchange_markets": {
      input: {
        /**
         * Exchange identifier. Defaults to binance. Pass a specific venue to list that exchange only. Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget" | "coinbase" | "kraken" | "gate" | "htx" | "kucoin" | "mexc" | "upbit" | "bitfinex" | "bitstamp" | "deribit" | "bitmex" | "bithumb" | "hyperliquid";
        /**
         * Market type filter. Use perpetual or perp for perpetual contracts (alias for swap).
         * @example "spot"
         */
        type?: "spot" | "swap" | "future" | "option" | "perpetual" | "perp";
        /**
         * Filter by base currency
         * @example "ETH"
         */
        base?: string;
        /**
         * Filter by quote currency
         * @example "USDT"
         */
        quote?: string;
        /**
         * Fuzzy search in pair/base/quote
         * @example "ETH"
         */
        search?: string;
        /**
         * Max results Default: 100.
         * @minimum 1
         * @maximum 5000
         * @example 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Perpetual Contract Snapshot. */
    "surf.exchange_perp": {
      input: {
        /**
         * Trading pair (e.g. BTC/USDT). The swap settle suffix is added automatically from the quote currency, e.g. BTC/USDT:USDT or BTC/USDC:USDC.
         * @example "BTC/USDT"
         */
        pair: string;
        /**
         * Comma-separated fields to include: 'funding' (current funding rate), 'oi' (open interest). Defaults to all fields. Default: "funding,oi".
         * @example "funding,oi"
         */
        fields?: string;
        /**
         * Exchange identifier. Hyperliquid uses USDC-settled perps (e.g. BTC/USDC:USDC). Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget" | "htx" | "bitfinex" | "bitmex" | "hyperliquid";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Ticker Price. */
    "surf.exchange_price": {
      input: {
        /**
         * Trading pair (e.g. BTC/USDT)
         * @example "BTC/USDT"
         */
        pair: string;
        /**
         * Market type: spot for spot trading, swap/perpetual/perp for perpetual contracts Default: "spot".
         * @example "spot"
         */
        type?: "spot" | "swap" | "perpetual" | "perp";
        /**
         * Exchange identifier. Note: hyperliquid uses USDC-settled perps (e.g. BTC/USDC:USDC); pass USDC-quoted pairs when querying hyperliquid. Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "okx" | "bybit" | "bitget" | "coinbase" | "kraken" | "gate" | "htx" | "kucoin" | "mexc" | "upbit" | "bitfinex" | "bitstamp" | "deribit" | "bitmex" | "bithumb" | "hyperliquid";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fund Profile Detail. */
    "surf.fund_detail": {
      input: Record<string, unknown>;
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fund Portfolio. */
    "surf.fund_portfolio": {
      input: {
        /**
         * Surf fund UUID. PREFERRED — always use this when available from a previous response (e.g. id from /search/fund). Takes priority over q.
         * @example "ef3b6da9-283d-4080-b3c7-87b1b45924dc"
         */
        id?: string;
        /**
         * Fuzzy fund name search. Only use when 'id' is not available. May return unexpected results for ambiguous names.
         * @maxLength 100
         * @example "a16z"
         */
        q?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Filter by lead investor status. Omit or leave empty for all investments.
         * @example "true"
         */
        is_lead?: "true" | "false" | "";
        /**
         * Only include investments at or after this Unix timestamp (seconds)
         * @example 1704067200
         */
        invested_after?: number;
        /**
         * Only include investments before this Unix timestamp (seconds)
         * @example 1735689600
         */
        invested_before?: number;
        /**
         * Field to sort results by Default: "invested_at".
         * @example "recent_raise"
         */
        sort_by?: "invested_at" | "recent_raise" | "total_raise";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fund Ranking. */
    "surf.fund_ranking": {
      input: {
        /**
         * Ranking metric. Can be `tier` (lower is better) or `portfolio_count` (number of invested projects).
         * @example "tier"
         */
        metric: "tier" | "portfolio_count";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Account Portfolio. */
    "surf.hyperliquid_account": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Market Candles. */
    "surf.hyperliquid_candles": {
      input: {
        /**
         * Hyperliquid market id (for example BTC, kPEPE, xyz:GOLD, the canonical PURR/USDC spot pair, or an @index spot market).
         * @example "SOL"
         */
        symbol: string;
        /**
         * Candle granularity. Default: "4h".
         * @example "4h"
         */
        interval?: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
        /**
         * Window start (Unix seconds, an ISO datetime, or a bare UTC date).
         * @example "2026-05-16"
         */
        from: string;
        /**
         * Window end (Unix seconds, an ISO datetime, or a bare UTC date; a bare date means the end of that day).
         * @example "2026-05-19"
         */
        to: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fills. */
    "surf.hyperliquid_fills": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /**
         * Window start (Unix seconds or a date). With the default order=desc, results cover the window forward from this point and are capped at ~2000 of the earliest fills in range (narrow the range to see the most-recent fills). With order=asc this is the start of a complete-history walk: follow meta.next_cursor to page through every fill in the window with no cap.
         * @example "2026-03-01"
         */
        from?: string;
        /**
         * Window end (Unix seconds or a date), inclusive. Defaults to now. With order=desc, page back within the most-recent results by setting this to the oldest time you received (prefer to_ms for millisecond precision); with order=asc it bounds the walk.
         * @example "2026-03-01"
         */
        to?: string;
        /**
         * Window end in Unix milliseconds, for millisecond-precise desc paging: pass the time_ms of the oldest fill you received to fetch the next page. On its own the boundary is exclusive (fills AT to_ms are dropped), so when more than limit fills share one millisecond the remainder is skipped — pair it with to_fill_id to page losslessly through a boundary millisecond. Takes precedence over to (which is ignored when to_ms is set). Like to, it pages within the recent (~2000-fill) window. desc-only: rejected with order=asc (use cursor instead).
         * @minimum 0
         */
        to_ms?: number;
        /** Cursor tiebreak for to_ms: pass the fill_id of the oldest fill you received alongside its time_ms as to_ms. The next page then resumes strictly after that (time_ms, fill_id) pair — fills at the boundary millisecond with a lower fill_id are included instead of skipped, so paging never loses fills that share a millisecond. Requires to_ms; desc-only. Equivalent to following meta.next_cursor, which encodes the same position. An empty page can mean the window is exhausted (set from to reach older history), not that no older fills exist. */
        to_fill_id?: string;
        /** desc (default): newest first — the recent feed, or the earliest-anchored ~2000-fill slice when from is set. asc: oldest first, a complete-history walk from from (required) up to to — each page links the next via meta.next_cursor with no result cap, the reliable mode for full trade-history or PnL reconstruction. Default: "desc". */
        order?: "desc" | "asc";
        /** Opaque continuation token from a previous response's meta.next_cursor. It encodes the paging direction, position, and window, so pass it with only symbol and limit — combining it with from, to, to_ms, or to_fill_id is rejected with 400. */
        cursor?: string;
        /** Filter to one market (exact match, e.g. xyz:GOLD). Applied client-side: with order=desc it filters after the recent cap (pair it with from/to so older fills are not missed); with order=asc the cursor walk scans past non-matching fills, so a page may return fewer than limit items (or none) while meta.next_cursor still advances. */
        symbol?: string;
        /**
         * Page size (1-100). Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Trader Leaderboard. */
    "surf.hyperliquid_leaderboard": {
      input: {
        /** Window to rank over. Default all (data starts 2025-08-01). Default: "all". */
        time_range?: "1d" | "7d" | "30d" | "90d" | "all";
        /** Rank by this metric. Always sorted descending. Default: "total_pnl". */
        sort_by?: "total_pnl" | "win_rate" | "volume_traded";
        /**
         * Only traders with at least this many trades. Defaults to 5; pass 0 for the full population. Default: 5.
         * @minimum 0
         */
        min_trades?: number;
        /**
         * Only traders active at least this many days (0 = no filter). Default: 0.
         * @minimum 0
         */
        min_days_active?: number;
        /**
         * Only accounts at least this old, in days (0 = no filter). Default: 0.
         * @minimum 0
         */
        min_account_age_days?: number;
        /**
         * Only traders scoring at least this, 0-100 (0 = no filter). Default: 0.
         * @minimum 0
         * @maximum 100
         */
        min_human_score?: number;
        /** Market to rank within: main_dex (or omit) for the native market ONLY, or a builder market — one of: xyz, flx, vntl, hyna, km, abcd, cash, para, mkts. NOTE: the omit default differs from /trades/aggregate, where omitting dex aggregates across ALL markets. */
        dex?: "main_dex" | "xyz" | "flx" | "vntl" | "hyna" | "km" | "abcd" | "cash" | "para" | "mkts";
        /**
         * Results per page (1-100). Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Results to skip. Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Open & Recent Orders. */
    "surf.hyperliquid_orders": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /**
         * Max open orders returned (market makers can hold 1500+; open_total reports the pre-truncation count). Default: 500.
         * @minimum 1
         * @maximum 2000
         */
        open_limit?: number;
        /**
         * Max terminal orders returned, newest first (the upstream feed holds ~1000 post-collapse; historical_total reports the pre-truncation count). Default: 200.
         * @minimum 1
         * @maximum 2000
         */
        historical_limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Trading Performance. */
    "surf.hyperliquid_performance": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /** NOT SUPPORTED on /performance — returns 400 if set. The lifetime summary always spans ALL markets; market scoping lives on /trades/aggregate (dex=...). */
        dex?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Open Positions. */
    "surf.hyperliquid_positions": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /** Market scope: omit (or main_dex) for the native market, or a builder market — one of: xyz, flx, vntl, hyna, km, abcd, cash, para, mkts. */
        dex?: "main_dex" | "xyz" | "flx" | "vntl" | "hyna" | "km" | "abcd" | "cash" | "para" | "mkts";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Closed Trade Funding and Leverage. */
    "surf.hyperliquid_trade_context": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /** Hyperliquid perpetual market id, including a builder prefix for HIP-3 markets (for example xyz:GOLD). */
        symbol: string;
        /** Opening direction of the episode. */
        direction: "long" | "short";
        /**
         * Episode open time, Unix seconds, copied from GET /hyperliquid/trades.
         * @minimum 1
         */
        open_time: number;
        /**
         * Episode close time, Unix seconds, copied from GET /hyperliquid/trades.
         * @minimum 1
         */
        close_time: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Closed Trades. */
    "surf.hyperliquid_trades": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /** NOT SUPPORTED on /trades — returns 400 if set. Per-symbol slicing lives on /trades/aggregate (group_by=symbol) or client-side. */
        symbol?: string;
        /** NOT SUPPORTED on /trades — returns 400 if set. Per-direction slicing lives on /trades/aggregate (group_by=direction) or client-side. */
        direction?: "long" | "short";
        /** NOT SUPPORTED on /trades — returns 400 if set. Market scoping lives on /trades/aggregate (dex=...). */
        dex?: string;
        /**
         * Window start: Unix seconds, an ISO datetime (2026-03-01T12:00:00Z), or a bare date (= midnight UTC). Omit for the full history.
         * @example "2026-03-01"
         */
        from?: string;
        /**
         * Window end, inclusive: Unix seconds, an ISO datetime, or a bare date — a bare date means the END of that UTC day, so from=X&to=X covers the whole day X. Defaults to now.
         * @example "2026-03-01"
         */
        to?: string;
        /** Opaque continuation token from a previous response's meta.next_cursor. It encodes the window, position, and address, so pass it with only address + limit — and only with the address it was issued for. Tokens are single-use opaque values: identical requests mint different tokens that decode to the same position. */
        cursor?: string;
        /**
         * Page size (1-100). Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Closed Trades Aggregate. */
    "surf.hyperliquid_trades_aggregate": {
      input: {
        /** Wallet address: a 0x EVM address or an ENS name (e.g. vitalik.eth). Solana addresses are not supported. */
        address: string;
        /** Dimension to roll up by. day = UTC calendar day (the P&L calendar / equity-curve source); symbol = per market; direction = long vs short; size_bucket = notional-USD tiers; hold_bucket = holding-time tiers. Default: "day". */
        group_by?: "day" | "symbol" | "direction" | "size_bucket" | "hold_bucket";
        /**
         * Window start, bounds close_time: Unix seconds, an ISO datetime (2026-03-01T12:00:00Z), or a bare date (= midnight UTC). Omit for full history.
         * @example "2026-03-01"
         */
        from?: string;
        /**
         * Window end, inclusive, bounds close_time: Unix seconds, an ISO datetime, or a bare date — a bare date means the END of that UTC day, so from=X&to=X covers the whole day X. Defaults to now.
         * @example "2026-03-31"
         */
        to?: string;
        /** Market scope: main_dex for the native market only, omit to aggregate across ALL markets, or a builder market — one of: xyz, flx, vntl, hyna, km, abcd, cash, para, mkts. NOTE: the omit default differs from /leaderboard, where omitting dex means the native market only. */
        dex?: "main_dex" | "xyz" | "flx" | "vntl" | "hyna" | "km" | "abcd" | "cash" | "para" | "mkts";
        /** group_by=day only: emit a zero row for every no-trade UTC day in the window so the calendar is dense. Requires from (a bounded window); ignored for other group_by values. Default: false. */
        fill_gaps?: boolean;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Kalshi Events. */
    "surf.kalshi_events": {
      input: {
        /**
         * Event ticker identifier. When omitted, returns top active events by volume. Use GET /v1/search/prediction-market?platform=kalshi&q={keyword} to discover valid tickers.
         * @example "KXBTC2026250-27JAN01"
         */
        event_ticker?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Kalshi Markets. */
    "surf.kalshi_markets": {
      input: {
        /**
         * Market ticker identifier. When omitted, returns top active markets by volume. Use GET /v1/search/prediction-market?platform=kalshi&q={keyword} to discover valid tickers.
         * @example "KXBTC2026250-27JAN01-250000"
         */
        market_ticker?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Kalshi Open Interest History. */
    "surf.kalshi_open_interest": {
      input: {
        /**
         * Market ticker identifier. Use GET /v1/prediction-market/kalshi/markets or GET /v1/search/prediction-market?platform=kalshi&q={keyword} to discover valid tickers.
         * @example "KXBTC2026250-27JAN01-250000"
         */
        ticker: string;
        /**
         * Window of history to return: `7d`, `30d`, `90d`, `180d`, or `1y`. This endpoint uses `time_range` only — it does NOT accept `interval`. Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Kalshi Orderbook History. */
    "surf.kalshi_orderbooks": {
      input: {
        /**
         * Kalshi market ticker
         * @example "KXCITRINI-28JUL01"
         */
        ticker: string;
        /** Start time in Unix milliseconds. 0 means 7 days ago. */
        start_time?: number;
        /** End time in Unix milliseconds. 0 means current time. */
        end_time?: number;
        /**
         * Maximum number of snapshots to return Default: 100.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Base64 cursor for pagination */
        pagination_key?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream pagination metadata. */
        pagination?: Record<string, unknown>;
        /** Order book snapshots. */
        snapshots?: Array<unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Kalshi Price History. */
    "surf.kalshi_prices": {
      input: {
        /**
         * Market ticker identifier. Use GET /v1/prediction-market/kalshi/markets or GET /v1/search/prediction-market?platform=kalshi&q={keyword} to discover valid tickers.
         * @example "KXBTC2026250-27JAN01-250000"
         */
        ticker: string;
        /**
         * Window of history to return: `7d`, `30d`, `90d`, `180d`, or `1y`. Ignored when `interval=latest`. Distinct from `interval` (which sets bucket size within the window). Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
        /**
         * Bucket size for each point in the series: `1h` (hourly OHLC), `1d` (daily OHLC), or `latest` (single most-recent trade price). Distinct from `time_range` (window size). Default: "1d".
         * @example "1d"
         */
        interval?: "1h" | "1d" | "latest";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Kalshi Trades. */
    "surf.kalshi_trades": {
      input: {
        /**
         * Market ticker identifier. Use GET /v1/prediction-market/kalshi/markets or GET /v1/search/prediction-market?platform=kalshi&q={keyword} to discover valid tickers.
         * @example "KXBTC2026250-27JAN01-250000"
         */
        ticker: string;
        /** Filter by taker side: `yes` or `no` */
        taker_side?: "yes" | "no";
        /**
         * Minimum notional volume in USD (each contract = $1)
         * @minimum 0
         */
        min_amount?: number;
        /** Start of time range. Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`) */
        from?: string;
        /** End of time range. Accepts Unix seconds (`1706745600`) or date string (`2024-02-01`) */
        to?: string;
        /**
         * Field to sort results by Default: "timestamp".
         * @example "timestamp"
         */
        sort_by?: "timestamp" | "notional_volume_usd";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 50.
         * @minimum 1
         * @maximum 500
         * @example 50
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Kalshi Volume History. */
    "surf.kalshi_volumes": {
      input: {
        /**
         * Market ticker identifier. Use GET /v1/prediction-market/kalshi/markets or GET /v1/search/prediction-market?platform=kalshi&q={keyword} to discover valid tickers.
         * @example "KXBTC2026250-27JAN01-250000"
         */
        ticker: string;
        /**
         * Window of history to return: `7d`, `30d`, `90d`, `180d`, or `1y`. This endpoint uses `time_range` only — it does NOT accept `interval`. Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Listing Events. */
    "surf.listing": {
      input: {
        /**
         * Start date (YYYY-MM-DD or ISO 8601)
         * @example "2024-01-01"
         */
        from: string;
        /**
         * End date (defaults to now)
         * @example "2024-03-01"
         */
        to?: string;
        /**
         * Filter by token symbol
         * @example "BTC"
         */
        symbol?: string;
        /**
         * Filter by exchange name
         * @example "binance"
         */
        exchange?: string;
        /** Filter by product type Default: "all". */
        product?: "spot" | "margin" | "perp" | "pre_market_perp" | "all";
        /** Event type filter Default: "listing". */
        type?: "listing" | "delisting" | "cancelled" | "advanced" | "postponed";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** ETF Flow History. */
    "surf.market_etf": {
      input: {
        /**
         * Token symbol. Can be `BTC`, `ETH`, `XRP`, `SOL`, or `HYPE`.
         * @example "BTC"
         */
        symbol: "BTC" | "ETH" | "XRP" | "SOL" | "HYPE";
        /**
         * Field to sort results by Default: "timestamp".
         * @example "timestamp"
         */
        sort_by?: "flow_usd" | "timestamp";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Start of time range. Accepts Unix seconds or date string (YYYY-MM-DD)
         * @example "2026-01-01"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds or date string (YYYY-MM-DD)
         * @example "2026-03-01"
         */
        to?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Exchange Flow Exchanges. */
    "surf.market_exchange_flow_exchanges": {
      input: {
        /**
         * Token ticker symbol. Can be `BTC` or `ETH`.
         * @example "BTC"
         */
        symbol: "BTC" | "ETH";
        /**
         * Results per page Default: 100.
         * @minimum 1
         * @maximum 100
         * @example 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fear & Greed Index History. */
    "surf.market_fear_greed": {
      input: {
        /**
         * Start of time range. Accepts Unix seconds or date string (YYYY-MM-DD)
         * @example "2026-01-01"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds or date string (YYYY-MM-DD)
         * @example "2026-03-01"
         */
        to?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Futures Market Overview. */
    "surf.market_futures": {
      input: {
        /**
         * Field to sort results by Default: "volume_24h".
         * @example "volume_24h"
         */
        sort_by?: "open_interest" | "funding_rate" | "volume_24h" | "long_short_ratio";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Liquidation Chart. */
    "surf.market_liquidation_chart": {
      input: {
        /**
         * Token ticker symbol like `BTC` or `ETH`
         * @example "BTC"
         */
        symbol: string;
        /**
         * Candlestick interval — bucket size for each point in the liquidation chart series: `1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `4h`, `6h`, `8h`, `12h`, `1d`, or `1w`. This endpoint uses `interval` only; it does NOT accept `time_range`. Use `from`/`to` to bound the series. Default: "1h".
         * @example "1h"
         */
        interval?: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "4h" | "6h" | "8h" | "12h" | "1d" | "1w";
        /**
         * Exchange name. Can be `Binance`, `OKX`, `Bybit`, `Bitget`, `Hyperliquid`, `Gate`, `HTX`, `Bitmex`, `Bitfinex`, `CoinEx`, `Aster`, or `Lighter`. Default: "Binance".
         * @example "Binance"
         */
        exchange?: "Binance" | "OKX" | "Bybit" | "Bitget" | "Hyperliquid" | "Gate" | "HTX" | "Bitmex" | "Bitfinex" | "CoinEx" | "Aster" | "Lighter";
        /**
         * Results per page Default: 500.
         * @minimum 1
         * @maximum 4500
         * @example 500
         */
        limit?: number;
        /**
         * Start of time range. Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`)
         * @example "2024-01-01"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds (`1706745600`) or date string (`2024-02-01`)
         * @example "2024-02-01"
         */
        to?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Liquidation by Exchange. */
    "surf.market_liquidation_exchange_list": {
      input: {
        /**
         * Token ticker symbol like `BTC` or `ETH` Default: "BTC".
         * @example "BTC"
         */
        symbol?: string;
        /**
         * Window to aggregate over for the snapshot: `1h`, `4h`, `12h`, or `24h`. Returns a single snapshot (not a time-series). This endpoint uses `time_range` only — it does NOT accept `interval`. Default: "24h".
         * @example "24h"
         */
        time_range?: "1h" | "4h" | "12h" | "24h";
        /**
         * Field to sort results by Default: "liquidation_usd".
         * @example "liquidation_usd"
         */
        sort_by?: "liquidation_usd" | "long_liquidation_usd" | "short_liquidation_usd";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Large Liquidation Orders. */
    "surf.market_liquidation_order": {
      input: {
        /**
         * Exchange name. Can be `Binance`, `OKX`, `Bybit`, `Bitget`, `Hyperliquid`, `Gate`, `HTX`, `Bitmex`, `Bitfinex`, `CoinEx`, `Aster`, or `Lighter`. Default: "Binance".
         * @example "Binance"
         */
        exchange?: "Binance" | "OKX" | "Bybit" | "Bitget" | "Hyperliquid" | "Gate" | "HTX" | "Bitmex" | "Bitfinex" | "CoinEx" | "Aster" | "Lighter";
        /**
         * Token ticker symbol like `BTC` or `ETH` Default: "BTC".
         * @example "BTC"
         */
        symbol?: string;
        /**
         * Minimum liquidation amount in USD Default: "10000".
         * @example "10000"
         */
        min_amount?: string;
        /**
         * Filter by liquidation side. Omit to return both.
         * @example "long"
         */
        side?: "long" | "short";
        /** Field to sort results by Default: "timestamp". */
        sort_by?: "usd_value" | "timestamp" | "price";
        /** Sort order Default: "desc". */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * Start of time range (inclusive). Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`)
         * @example "2024-01-01"
         */
        from?: string;
        /**
         * End of time range, exclusive (returns rows strictly older than `to`). Accepts Unix seconds (`1706745600`) or date string (`2024-02-01`). To page backward, set this to the oldest returned `timestamp` + 1 and de-duplicate on `order_id`.
         * @example "2024-02-01"
         */
        to?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** On-Chain Indicator. */
    "surf.market_onchain_indicator": {
      input: {
        /**
         * Token ticker symbol. Can be `BTC` or `ETH`.
         * @example "BTC"
         */
        symbol: "BTC" | "ETH";
        /**
         * On-chain metric name. Can be `nupl`, `sopr`, `mvrv`, `puell-multiple`, `nvm`, `nvt`, `nvt-golden-cross`, or `exchange-flows/{inflow,outflow,netflow,reserve}`.
         * @example "nupl"
         */
        metric: "nupl" | "sopr" | "mvrv" | "puell-multiple" | "nvm" | "nvt" | "nvt-golden-cross" | "exchange-flows/inflow" | "exchange-flows/outflow" | "exchange-flows/netflow" | "exchange-flows/reserve";
        /**
         * Aggregation granularity. Default: "day".
         * @example "day"
         */
        granularity?: "day";
        /**
         * Start of time range. Accepts Unix seconds or date string (YYYY-MM-DD). Defaults to 90 days ago when omitted. Maximum range is 365 days. Responses are capped at about 100 data points; when meta.has_more is true, split from/to into smaller windows (about 90 days for daily data).
         * @example "2026-01-01"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds or date string (YYYY-MM-DD). Defaults to today when omitted. Maximum range is 365 days. Responses are capped at about 100 data points; when meta.has_more is true, split from/to into smaller windows (about 90 days for daily data).
         * @example "2026-03-01"
         */
        to?: string;
        /**
         * Curated exchange filter for exchange-flow metrics. Use /v1/market/exchange-flow/exchanges to list labels. Default: "all_exchange".
         * @example "all_exchange"
         */
        exchange?: "all_exchange" | "spot_exchange" | "derivative_exchange" | "coinbase_prime" | "binance" | "coinbase_advanced" | "okx" | "kraken" | "bybit" | "bitstamp" | "gemini" | "bitget" | "kucoin" | "bitfinex" | "gate_io" | "deribit" | "mexc" | "htx_global" | "bitflyer" | "coinone" | "bithumb" | "upbit" | "hashkey_exchange";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Options Market Data. */
    "surf.market_options": {
      input: {
        /**
         * Token symbol. Can be `BTC`, `ETH`, `SOL`, `XRP`, `BNB`, `DOGE`, `ADA`, or `AVAX`.
         * @example "BTC"
         */
        symbol: "BTC" | "ETH" | "SOL" | "XRP" | "BNB" | "DOGE" | "ADA" | "AVAX";
        /**
         * Field to sort results by Default: "volume_24h".
         * @example "volume_24h"
         */
        sort_by?: "open_interest" | "volume_24h";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Price History. */
    "surf.market_price": {
      input: {
        /**
         * Single token ticker symbol like `BTC`, `ETH`, or `SOL` (multi-symbol not supported)
         * @example "BTC"
         */
        symbol: string;
        /**
         * Window of historical data to return: `1d`, `7d`, `14d`, `30d`, `90d`, `180d`, `365d`, or `max`. Ignored when `from`/`to` are set. This endpoint uses `time_range` only — it does NOT accept `interval`; bucket granularity is chosen server-side based on the window size. Default: "30d".
         * @example "30d"
         */
        time_range?: "1d" | "7d" | "14d" | "30d" | "90d" | "180d" | "365d" | "max";
        /**
         * Start of custom date range (Unix timestamp or YYYY-MM-DD). Must be used together with `to`. Overrides `time_range` when set.
         * @example "2025-01-01"
         */
        from?: string;
        /**
         * End of custom date range (Unix timestamp or YYYY-MM-DD). Must be used together with `from`. Overrides `time_range` when set.
         * @example "2025-03-01"
         */
        to?: string;
        /**
         * Quote currency like `usd`, `eur`, or `btc` Default: "usd".
         * @example "usd"
         */
        currency?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** Resolved Surf project UUID. */
        project_id?: string;
        /** Statistics aggregated over the requested window. */
        summary?: Record<string, unknown>;
        /** Normalized queried ticker symbol. */
        symbol?: string;
        [key: string]: unknown;
      };
    };
    /** Technical Indicator. */
    "surf.market_price_indicator": {
      input: {
        /**
         * Technical indicator name. Can be `rsi`, `macd`, `ema`, `sma`, `bbands`, `stoch`, `adx`, `atr`, `cci`, `obv`, `vwap`, `dmi`, `ichimoku`, or `supertrend`.
         * @example "rsi"
         */
        indicator: "rsi" | "macd" | "ema" | "sma" | "bbands" | "stoch" | "adx" | "atr" | "cci" | "obv" | "vwap" | "dmi" | "ichimoku" | "supertrend";
        /**
         * Trading pair as `BTC/USDT` or bare symbol like `BTC`
         * @example "BTC"
         */
        symbol: string;
        /**
         * Candlestick interval — bucket size for each point in the indicator series: `1m`, `5m`, `15m`, `30m`, `1h`, `2h`, `4h`, `12h`, `1d`, or `1w`. This endpoint uses `interval` only; it does NOT accept `time_range`. Use `from`/`to` to bound the series. Default: "1d".
         * @example "1d"
         */
        interval?: "1m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "12h" | "1d" | "1w";
        /**
         * Exchange for price data. Can be `binance`, `bybit`, `coinbase`, or `kraken`. Default: "binance".
         * @example "binance"
         */
        exchange?: "binance" | "bybit" | "coinbase" | "kraken";
        /**
         * Start of time range. When set, returns time-series instead of latest value. Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`)
         * @example "2024-01-01"
         */
        from?: string;
        /**
         * End of time range. Defaults to now when from is set. Accepts Unix seconds (`1706745600`) or date string (`2024-02-01`)
         * @example "2024-02-01"
         */
        to?: string;
        /**
         * Indicator-specific options as comma-separated key:value pairs. Available options by indicator: `period` — lookback period for rsi (default 14), sma (default 20), ema (default 20), bbands (default 20), adx (default 14), atr (default 14), cci (default 20), dmi (default 14), stoch (default 14), supertrend (default 10). `stddev` — standard deviation for bbands (default 2). `multiplier` — multiplier for supertrend (default 3). `fast_period` — MACD fast EMA (default 12). `slow_period` — MACD slow EMA (default 26). `signal_period` — MACD signal smoothing (default 9). Examples: `period:7`, `period:200`, `fast_period:8,slow_period:21,signal_period:5`, `period:10,stddev:1.5`.
         * @example "period:7"
         */
        options?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Public Sale / Crowdsale. */
    "surf.market_public_sale": {
      input: {
        /**
         * Surf project UUID
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Project name or symbol for entity resolution
         * @example "bitcoin"
         */
        q?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Rankings. */
    "surf.market_ranking": {
      input: {
        /**
         * Field to sort by. `market_cap` sorts by total market capitalisation, `change_24h` sorts by 24-hour price change percentage (fetches top 250 by market cap then sorts client-side), `volume_24h` sorts by 24-hour trading volume. Default: "market_cap".
         * @example "market_cap"
         */
        sort_by?: "market_cap" | "change_24h" | "volume_24h";
        /**
         * Sort order: `desc` (default, highest first) or `asc` (lowest first). Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Optional token category filter. When provided, results are limited to coins in that category. Supported values: MEME, AI, AI_AGENTS, L1, L2, DEFI, GAMING, STABLECOIN, RWA, DEPIN, SOL_ECO, BASE_ECO, LST.
         * @example "MEME"
         */
        category?: "MEME" | "AI" | "AI_AGENTS" | "L1" | "L2" | "DEFI" | "GAMING" | "STABLECOIN" | "RWA" | "DEPIN" | "SOL_ECO" | "BASE_ECO" | "LST";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Generation Event. */
    "surf.market_tge": {
      input: {
        /**
         * Surf project UUID
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Project name or symbol for entity resolution
         * @example "bitcoin"
         */
        q?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Cross-Platform Daily Comparison (Polymarket <> Kalshi). */
    "surf.matching_market_daily": {
      input: {
        /**
         * Polymarket condition ID
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        polymarket_condition_id: string;
        /**
         * Kalshi market ticker
         * @example "KXBTC2026250-27JAN01-250000"
         */
        kalshi_market_ticker: string;
        /**
         * Window of daily data to return: `1d`, `7d`, `30d`, `90d`, `180d`, `1y`, or `all`. Bucket size is fixed at 1 day — this endpoint uses `time_range` only and does NOT accept `interval`. Default: "30d".
         * @example "30d"
         */
        time_range?: "1d" | "7d" | "30d" | "90d" | "180d" | "1y" | "all";
        /**
         * Maximum rows Default: 200.
         * @minimum 1
         * @maximum 10000
         * @example 200
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Cross-Platform Prediction Market Matcher (Polymarket <> Kalshi). */
    "surf.matching_market_pairs": {
      input: {
        /**
         * Filter by category
         * @example "politics"
         */
        category?: "crypto" | "culture" | "economics" | "financials" | "politics" | "stem" | "sports";
        /**
         * Filter by match type
         * @example "exact"
         */
        match_type?: "exact" | "related";
        /** Only return pairs where both markets are currently active Default: false. */
        active_only?: boolean;
        /**
         * Minimum confidence score (0-100) Default: 0.
         * @minimum 0
         * @maximum 100
         */
        min_confidence?: number;
        /** Find match for this Polymarket market */
        polymarket_condition_id?: string;
        /** Find match for this Kalshi market */
        kalshi_market_ticker?: string;
        /** Sort field Default: "confidence". */
        sort_by?: "confidence" | "polymarket_volume" | "kalshi_volume" | "spread_pct";
        /** Sort order Default: "desc". */
        order?: "asc" | "desc";
        /**
         * Maximum rows to return Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** News Article Detail. */
    "surf.news_detail": {
      input: {
        /**
         * Article ID (returned as id in feed/search results)
         * @example "e54e0ac4-1ef8-44d2-928e-52df465e2c81"
         */
        id: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Crypto News Feed. */
    "surf.news_feed": {
      input: {
        /**
         * Filter by news source
         * @example "coindesk"
         */
        source?: "coindesk" | "cointelegraph" | "theblock" | "decrypt" | "dlnews" | "blockbeats" | "bitcoincom" | "coinpedia" | "ambcrypto" | "cryptodaily" | "cryptopotato" | "phemex" | "panews" | "odaily" | "tradingview" | "chaincatcher" | "techflow";
        /**
         * Comma-separated project names to filter by
         * @example "bitcoin,ethereum"
         */
        project?: string;
        /**
         * Filter articles published on or after this time. Accepts Unix seconds or date string (2024-01-01)
         * @example "2024-01-01"
         */
        from?: string;
        /**
         * Filter articles published on or before this time. Accepts Unix seconds or date string (2024-02-01)
         * @example "2024-02-01"
         */
        to?: string;
        /**
         * Sort order: recency (newest first) or trending (deterministic newest-first alias until engagement ranking is available) Default: "recency".
         * @example "recency"
         */
        sort_by?: "recency" | "trending";
        /**
         * Results per page (max 50) Default: 20.
         * @minimum 1
         * @maximum 50
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Bridge Protocol Ranking. */
    "surf.onchain_bridge_ranking": {
      input: {
        /**
         * Window to aggregate bridge volume over: `7d`, `30d`, `90d`, `180d`, `1y`, or `all`. Returns a single ranked snapshot (not a time-series). This endpoint uses `time_range` only — it does NOT accept `interval`. Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y" | "all";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** DEX Protocol Activity. */
    "surf.onchain_dex_activity": {
      input: {
        /**
         * Chain to query.
         * @example "ethereum"
         */
        chain: "ethereum" | "base" | "bsc" | "arbitrum" | "tron";
        /**
         * DEX project name (e.g. `uniswap`, `pancakeswap`, `aerodrome`). Exactly one of `project` / `address` is required.
         * @example "uniswap"
         */
        project?: string;
        /**
         * A specific router/contract measured as `tx_to`. Exactly one of `project` / `address` is required.
         * @example "0x1111111254eeb25477b68fb85ed929f73a960582"
         */
        address?: string;
        /** Look-back window (hard 90d cap). Overridden by `from`/`to` when set. Default: "7d". */
        time_range?: "1d" | "7d" | "30d" | "90d";
        /**
         * Start of range — Unix seconds or YYYY-MM-DD. With `to`, the range may span at most 90 days.
         * @example "2025-01-01"
         */
        from?: string;
        /**
         * End of range — Unix seconds or YYYY-MM-DD. Without `from`, the window is `time_range` ending at `to`.
         * @example "2025-02-01"
         */
        to?: string;
        /** `total` = single aggregate; `day` = daily series (newest first). Default: "total". */
        group_by?: "total" | "day";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Current Gas Price. */
    "surf.onchain_gas_price": {
      input: {
        /**
         * Chain. Can be `ethereum`, `polygon`, `bsc`, `arbitrum`, `optimism`, `base`, `avalanche`, `fantom`, `linea`, or `cyber`.
         * @example "ethereum"
         */
        chain: "ethereum" | "polygon" | "bsc" | "arbitrum" | "optimism" | "base" | "avalanche" | "fantom" | "linea" | "cyber";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** On-Chain Table Schema. */
    "surf.onchain_schema": {
      input: {
        /**
         * Optional logical table name from the agent database. Use this to include bounded physical partition, ordering-key, and size metadata.
         * @example "polymarket_trades"
         */
        table?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Execute a read-only ClickHouse SELECT/WITH query against agent.<table> blockchain data. Discover tables with onchain_schema and filter large tables by block_date or block_number. Normalize address literals to lowercase without wrapping indexed address columns in lower(); use separate UNION ALL branches instead of OR for transfer from/to predicates. Resolve token symbols with search_token before querying contracts. The synchronous budget is 30 seconds; use prefer=respond-async and a stable idempotency_key for long queries. Do not automatically retry synchronous timeouts; submit an asynchronous job instead. */
    "surf.onchain_sql": {
      input: {
        /** Optional RFC 7240 preference. Include respond-async to submit this request as a durable asynchronous job and receive 202 Accepted. */
        prefer?: string;
        /**
         * Stable client-generated key used when Prefer includes respond-async. Reusing it returns the existing retained job.
         * @maxLength 200
         */
        idempotency_key?: string;
        /**
         * Maximum number of rows to return Default: 1000.
         * @minimum 1
         * @maximum 10000
         * @example 1000
         */
        max_rows?: number;
        /**
         * Send a JSON object with the sql field. Example: {"sql":"SELECT 1"}. Use GET /v1/onchain/schema for tables and columns. Transfer table amount is decimal-adjusted; amount_raw is the original base-unit value. Use single quotes for ClickHouse strings. Example: toDate('2026-04-07').
         * @example "SELECT block_date, project, symbol, apy, tvl_usd FROM agent.ethereum_yields_daily WHERE block_date >= today() - 7 ORDER BY apy DESC LIMIT 10"
         */
        sql: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: unknown;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** Asynchronous SQL job identifier, promoted from data.job_id. */
        job_id?: string;
        /** Asynchronous SQL job state, promoted from data.status. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel Asynchronous Blockchain SQL Job. */
    "surf.onchain_sql_job_cancel": {
      input: {
        /**
         * Asynchronous SQL job identifier
         * @format uuid
         */
        job_id: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** Asynchronous SQL job identifier, promoted from data.job_id. */
        job_id?: string;
        /** Asynchronous SQL job state, promoted from data.status. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Submit a read-only ClickHouse SELECT/WITH query as a durable asynchronous job. Use agent.<table> names, partition filters, and resolved contract addresses as for onchain_sql. A retained job is reused for the same idempotency key or equivalent normalized SQL and max_rows. Poll onchain_sql_job_get, then read onchain_sql_job_results; results are retained for 24 hours. */
    "surf.onchain_sql_job_create": {
      input: {
        /**
         * Stable client-generated key. Reusing it returns the existing job without starting another query.
         * @maxLength 200
         */
        idempotency_key?: string;
        /**
         * Maximum number of result rows to retain Default: 1000.
         * @minimum 1
         * @maximum 10000
         * @example 1000
         */
        max_rows?: number;
        /**
         * Exact read-only ClickHouse SQL to execute asynchronously. The submitted SQL and date range are preserved.
         * @example "SELECT block_date, project, symbol, apy FROM agent.ethereum_yields_daily WHERE block_date >= today() - 30 ORDER BY apy DESC"
         */
        sql: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** Asynchronous SQL job identifier, promoted from data.job_id. */
        job_id?: string;
        /** Asynchronous SQL job state, promoted from data.status. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Get Asynchronous Blockchain SQL Job. */
    "surf.onchain_sql_job_get": {
      input: {
        /**
         * Asynchronous SQL job identifier
         * @format uuid
         */
        job_id: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** Asynchronous SQL job identifier, promoted from data.job_id. */
        job_id?: string;
        /** Asynchronous SQL job state, promoted from data.status. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Download Asynchronous Blockchain SQL Results. */
    "surf.onchain_sql_job_results": {
      input: {
        /**
         * Asynchronous SQL job identifier
         * @format uuid
         */
        job_id: string;
        /** Result representation Default: "json". */
        format?: "json" | "csv";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** CSV result text when CSV format is requested. */
        csv?: string;
        [key: string]: unknown;
      };
    };
    /** Preflight Blockchain SQL Query. */
    "surf.onchain_sql_preflight": {
      input: {
        /**
         * Maximum result rows in the final server-bounded execution plan Default: 1000.
         * @minimum 1
         * @maximum 10000
         * @example 1000
         */
        max_rows?: number;
        /**
         * Read-only ClickHouse SELECT/WITH query to validate and estimate without executing it
         * @example "SELECT block_date, project, apy, tvl_usd FROM agent.ethereum_yields_daily WHERE block_date >= today() - 7 LIMIT 100"
         */
        sql: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query blockchain data with structured column, filter, and sort clauses. Discover agent.<table> sources with onchain_schema; always filter large tables by block_date. Resolve token symbols using search_token rather than filtering unindexed symbol columns. Transfer amount is decimal-adjusted, while amount_raw is in base units. */
    "surf.onchain_structured_query": {
      input: {
        /**
         * Columns to return. Omit to return all columns.
         * @example ["project","symbol","apy","tvl_usd"]
         */
        fields?: Array<string> | null;
        /** WHERE conditions (ANDed together) */
        filters?: Array<{
          /**
           * Column name to filter on like `block_number` or `from_address`
           * @example "block_number"
           */
          field: string;
          /**
           * Comparison operator: eq, neq, gt, gte, lt, lte, like, in, not_in. For `in`/`not_in`, value must be a JSON array
           * @example "eq"
           */
          op: string;
          /** Comparison value. Use a JSON array for `in`/`not_in` operators like `[21000000, 21000001]` */
          value: unknown;
        }> | null;
        /**
         * Max rows to return. Default 20, max 10000
         * @example 20
         */
        limit?: number;
        /**
         * Rows to skip for pagination. Default 0
         * @example 0
         */
        offset?: number;
        /** ORDER BY clauses */
        sort?: Array<{
          /**
           * Column name to sort by like `gas`, `block_number`, or `amount_usd`
           * @example "gas"
           */
          field: string;
          /**
           * Sort direction: asc (default) or desc
           * @example "desc"
           */
          order?: string;
        }> | null;
        /**
         * Fully-qualified table name like `agent.ethereum_yields_daily`. Use GET /v1/onchain/schema for available tables.
         * @example "agent.ethereum_yields_daily"
         */
        source: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Transaction Details by Hash. */
    "surf.onchain_tx": {
      input: {
        /**
         * Transaction hash (0x-prefixed hex)
         * @example "0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
         */
        hash: string;
        /**
         * Chain. Can be `ethereum`, `polygon`, `bsc`, `arbitrum`, `optimism`, `base`, `avalanche`, `fantom`, `linea`, or `cyber`.
         * @example "ethereum"
         */
        chain: "ethereum" | "polygon" | "bsc" | "arbitrum" | "optimism" | "base" | "avalanche" | "fantom" | "linea" | "cyber";
        /**
         * Comma-separated enrichments to attach. Currently valid: `labels` — adds `from_label` and `to_label` fields with entity information for the from/to addresses.
         * @example "labels"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Yield Pool Ranking. */
    "surf.onchain_yield_ranking": {
      input: {
        /**
         * Filter by protocol name like `lido`, `aave`, or `uniswap`
         * @example "aave"
         */
        project?: string;
        /**
         * Ranking metric: `apy` or `tvl_usd`. When sorted by `apy`, only pools with TVL >= $100k are included Default: "apy".
         * @example "apy"
         */
        sort_by?: "apy" | "tvl_usd";
        /**
         * Sort direction Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Events. */
    "surf.polymarket_events": {
      input: {
        /**
         * Polymarket event slug (identifies a multi-outcome question with several nested markets). Known World Cup match sibling slugs are expanded to the canonical match group. Discover slugs via /v1/search/prediction-market?platform=polymarket&q={keyword}. For a single Yes/No market, use /polymarket/markets with market_slug instead — this endpoint only accepts event_slug, not market_slug.
         * @example "what-price-will-bitcoin-hit-before-2027"
         */
        event_slug: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Leaderboard. */
    "surf.polymarket_leaderboard": {
      input: {
        /** Ranking metric Default: "pnl". */
        sort_by?: "pnl" | "volume" | "trade_count";
        /** Sort direction Default: "desc". */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Markets. */
    "surf.polymarket_markets": {
      input: {
        /**
         * Polymarket market slug (identifies a single Yes/No outcome). Discover slugs via /v1/search/prediction-market?platform=polymarket&q={keyword}. For a multi-outcome question (e.g. 'who wins the 2024 election'), use the /polymarket/events endpoint with event_slug instead.
         * @example "will-bitcoin-dip-to-45000-by-december-31-2026-674-923-755-971-998-525-926-245-316-517-544-589-965-923-986-841-815-224"
         */
        market_slug: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Open Interest History. */
    "surf.polymarket_open_interest": {
      input: {
        /**
         * Market condition identifier
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        condition_id: string;
        /**
         * Window of history to return: `7d`, `30d`, `90d`, `180d`, or `1y`. This endpoint uses `time_range` only — it does NOT accept `interval`. Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Orderbook History. */
    "surf.polymarket_orderbooks": {
      input: {
        /**
         * Token identifier
         * @example "73662070458561467734997715458900555626841827840002814944742182699282770895284"
         */
        token_id: string;
        /** Start time in Unix milliseconds. 0 means 7 days ago. */
        start_time?: number;
        /** End time in Unix milliseconds. 0 means current time. */
        end_time?: number;
        /**
         * Maximum number of snapshots to return Default: 100.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Base64 cursor for pagination */
        pagination_key?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream pagination metadata. */
        pagination?: Record<string, unknown>;
        /** Order book snapshots. */
        snapshots?: Array<unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Polymarket Wallet Positions. */
    "surf.polymarket_positions": {
      input: {
        /**
         * Polymarket proxy wallet address
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
         */
        address: string;
        /**
         * Results per page Default: 50.
         * @minimum 1
         * @maximum 100
         * @example 50
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket OHLCV Candlesticks. */
    "surf.polymarket_price_ohlcv": {
      input: {
        /**
         * Polymarket condition ID
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        condition_id: string;
        /**
         * Start time (Unix seconds). 0 means no lower bound. Cache aligns to 5-minute buckets, so two requests within the same bucket return the same cached result.
         * @minimum 0
         */
        start_time?: number;
        /**
         * End time (Unix seconds). 0 means current time. Cache aligns to 5-minute buckets, so two requests within the same bucket return the same cached result.
         * @minimum 0
         */
        end_time?: number;
        /**
         * Candle interval in minutes: 1=1min, 60=1hour, 1440=1day Default: 60.
         * @minimum 1
         * @maximum 1440
         */
        interval?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** OHLCV candles. */
        candles?: Array<unknown> | null;
        /** Market condition identifier. */
        condition_id?: string;
        /** Returned time interval. */
        interval?: number;
        [key: string]: unknown;
      };
    };
    /** Polymarket Price History. */
    "surf.polymarket_prices": {
      input: {
        /**
         * Market condition identifier
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        condition_id: string;
        /**
         * Window of history to return (how much data, from now backward): `7d`, `30d`, `90d`, `180d`, or `1y`. Ignored when `interval=latest`. Distinct from `interval` (which sets bucket size within this window). Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
        /**
         * Bucket size for each point in the returned series: `1h` (hourly), `1d` (daily), or `latest` (single most-recent snapshot). Distinct from `time_range` (which sets the window size). Default: "1d".
         * @example "1d"
         */
        interval?: "1h" | "1d" | "latest";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Smart Money. */
    "surf.polymarket_smart_money": {
      input: {
        /** positioning = aggregate smart wallet direction per market; trades = individual $10K+ trades with wallet metadata Default: "positioning". */
        view?: "positioning" | "trades";
        /** Filter to a specific market (omit to browse all) */
        condition_id?: string;
        /** Filter by category */
        category?: "crypto" | "culture" | "economics" | "financials" | "politics" | "stem" | "sports";
        /** Filter by net smart money direction (only for view=positioning) */
        direction?: "bullish" | "bearish" | "neutral";
        /** Trade size tier filter (only for view=trades) */
        whale_tier?: "whale" | "large" | "mega";
        /** Start time as Unix seconds or date string (only for view=trades) */
        from?: string;
        /** End time as Unix seconds or date string (only for view=trades) */
        to?: string;
        /** Sort field Default: "smart_wallets_involved". */
        sort_by?: "smart_wallets_involved" | "smart_buy_volume_usd" | "smart_sell_volume_usd" | "amount_usd" | "block_time";
        /** Sort direction Default: "desc". */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Trades. */
    "surf.polymarket_trades": {
      input: {
        /**
         * Market condition identifier
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        condition_id?: string;
        /** Wallet address — returns trades where the address is maker or taker */
        address?: string;
        /** Filter by activity type: `trade` (default, spot trades only), `redemption` (splits/merges/redemptions), or `all` (all activity). Use `redemption` or `all` to get non-trade wallet activity; `address` is required for these types. Default: "trade". */
        type?: "trade" | "redemption" | "all";
        /** Filter by outcome label: `Yes` or `No` */
        outcome_label?: "Yes" | "No";
        /**
         * Minimum trade amount in USD
         * @minimum 0
         */
        min_amount?: number;
        /** Start of time range. Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`) */
        from?: string;
        /** End of time range. Accepts Unix seconds (`1706745600`) or date string (`2024-02-01`) */
        to?: string;
        /**
         * Field to sort results by Default: "timestamp".
         * @example "timestamp"
         */
        sort_by?: "timestamp" | "notional_volume_usd";
        /**
         * Results per page Default: 50.
         * @minimum 1
         * @maximum 500
         * @example 50
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Polymarket Volume Split (YES/NO). */
    "surf.polymarket_volume_split": {
      input: {
        /**
         * Polymarket condition ID
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        condition_id: string;
        /** Time granularity for volume aggregation Default: "hour". */
        granularity?: "hour" | "day" | "week";
        /**
         * Start time (Unix seconds). 0 means no lower bound. Cache aligns to 5-minute buckets, so two requests within the same bucket return the same cached result.
         * @minimum 0
         */
        start_time?: number;
        /**
         * End time (Unix seconds). 0 means current time. Cache aligns to 5-minute buckets, so two requests within the same bucket return the same cached result.
         * @minimum 0
         */
        end_time?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Market condition identifier. */
        condition_id?: string;
        /** Number of returned data points. */
        data_points?: Array<unknown> | null;
        /** Returned window end time. */
        end_time?: number;
        /** Returned aggregation granularity. */
        granularity?: string;
        /** Returned window start time. */
        start_time?: number;
        [key: string]: unknown;
      };
    };
    /** Polymarket Volume History. */
    "surf.polymarket_volumes": {
      input: {
        /**
         * Market condition identifier (required if token_id not provided)
         * @example "0x6fefc0438c7598b23531457c8c60541990d0786bd4bd9dfc3eabc8d95c291092"
         */
        condition_id?: string;
        /** Token ID (alternative identifier, resolved to condition_id internally) */
        token_id?: string;
        /**
         * Window of history to return (how much data, from now backward): `7d`, `30d`, `90d`, `180d`, or `1y`. Distinct from `interval` (which sets bucket size within the window). Default: "30d".
         * @example "30d"
         */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
        /**
         * Bucket size for each point in the returned series: `1h` (hourly) or `1d` (daily). Distinct from `time_range` (which sets the window size). Default: "1d".
         * @example "1d"
         */
        interval?: "1h" | "1d";
        /** Aggregation granularity (alternative to interval). When provided, queries daily table with buy/sell volume breakdown. */
        granularity?: "day" | "week" | "month" | "year" | "all";
        /** Start time as Unix seconds (alternative to time_range) */
        start_time?: number;
        /** End time as Unix seconds (alternative to time_range) */
        end_time?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Current User Portfolio Wallets. */
    "surf.portfolio_wallets": {
      input: Record<string, never>;
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Prediction Market Analytics. */
    "surf.prediction_market_analytics": {
      input: {
        /** Category to analyze. Omit to get platform-wide totals across all categories. */
        category?: "crypto" | "culture" | "economics" | "financials" | "politics" | "stem" | "sports";
        /** Filter to one platform */
        platform?: "polymarket" | "kalshi";
        /** Window for category trends: `7d`, `30d`, `90d`, `180d`, or `1y`. Bucket size is fixed at 1 day — this endpoint uses `time_range` only and does NOT accept `interval`. Default: "30d". */
        time_range?: "7d" | "30d" | "90d" | "180d" | "1y";
        /**
         * Number of top markets to include Default: 10.
         * @minimum 1
         * @maximum 50
         */
        top_n?: number;
        /** Sort field for momentum markets Default: "volume_7d". */
        sort_by?: "volume_7d" | "whale_flow_net_7d" | "price_change_7d" | "oi_change_7d";
        /** Sort direction Default: "desc". */
        order?: "asc" | "desc";
        /**
         * Limit for momentum markets list Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset for momentum markets Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Market Correlations. */
    "surf.prediction_market_correlations": {
      input: {
        /** Category (correlations are within-category only) */
        category: "crypto" | "culture" | "economics" | "financials" | "politics" | "stem" | "sports";
        /** Filter to pairs involving this market */
        condition_id?: string;
        /** Minimum absolute correlation Default: 0.5. */
        min_correlation?: number;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Project AI News. */
    "surf.project_ai_news": {
      input: {
        /**
         * Surf project UUID. PREFERRED — always use this when available from a previous response (e.g. project_id from /fund/portfolio or id from /search/project). Takes priority over q.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Fuzzy entity name search. Only use when 'id' is not available. May return unexpected results for ambiguous names.
         * @example "ethereum"
         */
        q?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 50
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Language for AI-generated content Default: "en".
         * @example "en"
         */
        lang?: "en" | "zh" | "ja" | "kr";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Project DeFi Metrics. */
    "surf.project_defi_metrics": {
      input: {
        /**
         * Surf project UUID. PREFERRED — always use this when available from a previous response (e.g. project_id from /fund/portfolio or id from /search/project). Takes priority over q.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Fuzzy entity name search. Only use when 'id' is not available. May return unexpected results for ambiguous names.
         * @example "uniswap"
         */
        q?: string;
        /**
         * Metric to query. Can be `volume`, `fees` (or `fee` alias), `revenue`, `tvl`, or `users`. Defaults to tvl. Default: "tvl".
         * @example "tvl"
         */
        metric?: "volume" | "fee" | "fees" | "revenue" | "tvl" | "users";
        /**
         * Start of time range. Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`)
         * @example "2024-01-01"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds (`1706745600`) or date string (`2024-02-01`)
         * @example "2024-02-01"
         */
        to?: string;
        /**
         * Filter by chain. Can be `ethereum`, `polygon`, `bsc`, `arbitrum`, `optimism`, `base`, `avalanche`, `fantom`, or `solana`.
         * @example "ethereum"
         */
        chain?: "ethereum" | "polygon" | "bsc" | "arbitrum" | "optimism" | "base" | "avalanche" | "fantom" | "solana";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** DeFi Protocol Ranking. */
    "surf.project_defi_ranking": {
      input: {
        /**
         * Ranking metric. Can be `tvl`, `revenue`, `fees`, `volume`, or `users`.
         * @example "tvl"
         */
        metric: "tvl" | "revenue" | "fees" | "volume" | "users";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Aggregated Project Detail. */
    "surf.project_detail": {
      input: {
        /**
         * Surf project UUID. PREFERRED — always use this when available from a previous response (e.g. project_id from /fund/portfolio or id from /search/project). Takes priority over q.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Numeric X (Twitter) account ID. Resolves to the associated project.
         * @example "984188226826010624"
         */
        x_id?: string;
        /**
         * X (Twitter) handle without @. Resolves to the associated project via twitter account lookup.
         * @example "uniswap"
         */
        handle?: string;
        /**
         * Fuzzy entity name search. Only use when 'id' is not available. May return unexpected results for ambiguous names.
         * @example "ethereum"
         */
        q?: string;
        /**
         * Comma-separated sub-resources to include. Can be `overview`, `token_info`, `tokenomics`, `funding`, `team`, `contracts`, `social`, or `tge_status`. Default: "overview,token_info,tokenomics,funding,team,contracts,social,tge_status".
         * @example "overview,token_info,funding"
         */
        fields?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Project Pulse [Deprecated]. */
    "surf.project_pulse": {
      input: {
        /**
         * Surf project UUID. PREFERRED — always use this when available from a previous response (e.g. project_id from /fund/portfolio or id from /search/project). Takes priority over q.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Fuzzy entity name search. Only use when 'id' is not available. May return unexpected results for ambiguous names.
         * @example "ethereum"
         */
        q?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 50
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Language for AI-generated content Default: "en".
         * @example "en"
         */
        lang?: "en" | "zh" | "ja" | "kr";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Research crypto and equity markets with Surf Research 2.0 and return non-streaming Responses JSON. Use previous_response_id to continue a response chain. surf-2.0-instant favors latency; surf-2.0 supports optional nested reasoning.effort for deeper analysis, with higher latency and credit cost. */
    "surf.research": {
      input: {
        /** Surf research model. */
        model: "surf-2.0" | "surf-2.0-instant";
        /** Prompt text or a Responses-compatible array of input items. */
        input: string | Array<Record<string, unknown>>;
        /** System or developer instructions guiding the answer. */
        instructions?: string;
        /** Transport is normalized to non-streaming JSON; only false is accepted. */
        stream?: false;
        /** Additional response fields requested from the backend. */
        include?: Array<string>;
        /** Maximum generated output tokens. */
        max_output_tokens?: number;
        /** Client metadata; reserved Surf identity keys are ignored upstream. */
        metadata?: Record<string, unknown>;
        /** Previous response ID for continuing a response chain. */
        previous_response_id?: string;
        /** Reusable prompt configuration in Responses format. */
        prompt?: Record<string, unknown>;
        /** Responses reasoning configuration; omit for a fast single-pass answer. */
        reasoning?: {
          /** Reasoning effort; surf-2.0 latency and credit cost increase with effort. */
          effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh";
          [key: string]: unknown;
        };
      };
      output: {
        /** Response identifier. */
        id?: string;
        /** Response object type. */
        object?: string;
        /** Response creation timestamp in Unix seconds. */
        created_at?: number;
        /** Response generation status. */
        status?: string;
        /** Model used for the response. */
        model?: string;
        /** Responses output items, including messages and content. */
        output?: Array<Record<string, unknown>>;
        /** Generated answer text when supplied. */
        output_text?: string;
        /** Input, output, and total token usage. */
        usage?: Record<string, unknown>;
        /** Response metadata. */
        metadata?: Record<string, unknown>;
        /** Response error. */
        error?: unknown;
        /** Response incomplete details. */
        incomplete_details?: unknown;
        [key: string]: unknown;
      };
    };
    /** Airdrop Search. */
    "surf.search_airdrop": {
      input: {
        /**
         * Search keyword for coin name
         * @maxLength 100
         * @example "airdrop"
         */
        q?: string;
        /**
         * Comma-separated lifecycle phases. `active` = tasks open, can participate (POTENTIAL + CONFIRMED). `claimable` = eligible, can claim (SNAPSHOT + VERIFICATION + REWARD_AVAILABLE). `completed` = done (DISTRIBUTED). Defaults to `active,claimable` to show actionable airdrops. Default: "active,claimable".
         * @example "active"
         */
        phase?: string;
        /**
         * Filter by reward type
         * @example "airdrop"
         */
        reward_type?: "airdrop" | "points" | "whitelist" | "nft" | "role" | "ambassador";
        /**
         * Filter activities containing tasks of this type
         * @example "social"
         */
        task_type?: "social" | "bounty-platforms" | "testnet" | "mainnet" | "role" | "form" | "liquidity" | "mint-nft" | "game" | "trading" | "staking" | "depin" | "node" | "ambassador" | "hold" | "check-wallet" | "mint-domain" | "predictions" | "deploy";
        /**
         * Only return activities with currently OPEN tasks Default: false.
         * @example true
         */
        has_open?: boolean;
        /**
         * Field to sort results by Default: "last_status_update".
         * @example "last_status_update"
         */
        sort_by?: "total_raise" | "xscore" | "last_status_update";
        /**
         * Sort order Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Include full task list per activity Default: false.
         * @example true
         */
        include_tasks?: boolean;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Airdrop Activities. */
    "surf.search_airdrop_activities": {
      input: {
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Project Event Search. */
    "surf.search_events": {
      input: {
        /**
         * Surf project UUID. PREFERRED — always use this when available from a previous response (e.g. project_id from /fund/portfolio or id from /search/project). Takes priority over q.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Fuzzy entity name search. Only use when 'id' is not available. May return unexpected results for ambiguous names.
         * @example "ethereum"
         */
        q?: string;
        /**
         * Filter by event type. Can be `launch`, `upgrade`, `partnership`, `news`, `airdrop`, `listing`, or `twitter`.
         * @example "launch"
         */
        type?: "launch" | "upgrade" | "partnership" | "news" | "airdrop" | "listing" | "twitter";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fund Search. */
    "surf.search_fund": {
      input: {
        /**
         * Search keyword — fund name like `a16z`, `paradigm`, or `coinbase ventures`
         * @maxLength 100
         * @example "a16z"
         */
        q: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fundraising Event Search. */
    "surf.search_fundraising": {
      input: {
        /**
         * Optional project name, alias, symbol, title, or summary search query. When provided, the trimmed query must contain 2-100 Unicode characters.
         * @minLength 2
         * @maxLength 100
         * @example "elliptic"
         */
        q?: string;
        /**
         * Inclusive event-time lower bound. Accepts Unix seconds, YYYY-MM-DD, or RFC3339; date-only values start at 00:00:00 UTC.
         * @example "2026-07-01"
         */
        from?: string;
        /**
         * Inclusive event-time upper bound. Accepts Unix seconds, YYYY-MM-DD, or RFC3339; date-only values end at 23:59:59 UTC. Defaults to the current time.
         * @example "2026-07-10"
         */
        to?: string;
        /**
         * Filter by public source type: social or news.
         * @example "social"
         */
        source?: "social" | "news";
        /**
         * Display and search language. Missing translated fields fall back to English. ko is accepted as an alias for kr. Default: "en".
         * @example "en"
         */
        lang?: "en" | "zh" | "ja" | "kr" | "ko";
        /**
         * Minimum importance score from 1 to 5. Omit to include unscored events.
         * @minimum 1
         * @maximum 5
         * @example 3
         */
        min_importance?: number;
        /**
         * Sort by recency, query relevance, or importance. Relevance requires q. Default: "recency".
         * @example "recency"
         */
        sort_by?: "recency" | "relevance" | "importance";
        /**
         * Sort order. Relevance only supports desc. Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Results per page. Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset. The offset plus limit cannot exceed 10000. Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** News Article Search. */
    "surf.search_news": {
      input: {
        /**
         * Search keyword or phrase
         * @example "bitcoin ETF"
         */
        q: string;
        /**
         * Results per page Default: 10.
         * @minimum 1
         * @maximum 100
         * @example 10
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search Prediction Markets. */
    "surf.search_prediction_market": {
      input: {
        /** Polymarket condition ID for single-market lookup */
        condition_id?: string;
        /** Kalshi market ticker for single-market lookup */
        market_ticker?: string;
        /** Filter by platform (omit for both) */
        platform?: "polymarket" | "kalshi";
        /** Filter by Surf-curated category */
        category?: "crypto" | "culture" | "economics" | "financials" | "politics" | "stem" | "sports";
        /** Market status filter Default: "active". */
        status?: "active" | "closed" | "finalized";
        /** Sort field Default: "volume_7d". */
        sort_by?: "volume_1d" | "volume_7d" | "volume_30d" | "open_interest" | "trade_count_7d" | "days_to_resolution";
        /** Sort direction Default: "desc". */
        order?: "asc" | "desc";
        /** Filter by smart money direction (Polymarket only) */
        smart_money?: "bullish" | "bearish";
        /** Search markets by keyword in question text or ticker. Results include slug and event fields when available, but machine slugs are not searched. */
        q?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Project Search. */
    "surf.search_project": {
      input: {
        /**
         * Search keyword — project name or ticker like `uniswap`, `bitcoin`, or `ETH`
         * @maxLength 100
         * @example "bitcoin"
         */
        q: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Symbol Resolution. */
    "surf.search_token": {
      input: {
        /**
         * Exact token ticker symbol to resolve (case-insensitive), like `USDC` or `PEPE`. NOT a contract address, trading pair, or fuzzy token name.
         * @maxLength 50
         * @example "USDC"
         */
        q: string;
        /**
         * Restrict resolution to one supported chain. Omit to search all supported chains.
         * @example "solana"
         */
        chain?: "ethereum" | "base" | "bsc" | "arbitrum" | "solana" | "polygon" | "optimism" | "avalanche" | "fantom" | "tron" | "linea" | "mantle" | "blast" | "gnosis" | "zksync" | "scroll";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Wallet Search. */
    "surf.search_wallet": {
      input: {
        /**
         * Search keyword like `binance`, `vitalik.eth`, or `0xd8dA...`
         * @example "vitalik.eth"
         */
        q: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Web Search. */
    "surf.search_web": {
      input: {
        /**
         * Search query like `bitcoin price prediction 2026`
         * @example "bitcoin price prediction 2026"
         */
        q: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Comma-separated domain filter like `coindesk.com` or `cointelegraph.com`
         * @example "coindesk.com,cointelegraph.com"
         */
        site?: string;
        /**
         * When false (default), search returns title/url/description only — fast (~2-3s) URL discovery. Set true to also include full markdown content for each result (~5-30KB per result, ~10-15s for limit=5). Use true only when the caller needs page content inline and won't follow up with `/web/fetch`. Default: false.
         * @example false
         */
        include_content?: boolean;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Signal Detail. */
    "surf.signal_detail": {
      input: {
        /**
         * Surf token UUID. Pass exactly one of id or project_slug.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Project slug. Pass exactly one of id or project_slug.
         * @example "synapse"
         */
        project_slug?: string;
        /**
         * Window to compute signal score over: 24h or 7d. Default: "24h".
         * @example "24h"
         */
        time_range?: "24h" | "7d";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Signal Projects. */
    "surf.signal_projects": {
      input: {
        /**
         * Window to compute signal scores over: 24h or 7d. Returns a ranked snapshot, not a time-series. Default: "24h".
         * @example "24h"
         */
        time_range?: "24h" | "7d";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Signal Token Of The Day. */
    "surf.signal_token_of_the_day": {
      input: {
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Signal Token Of The Week. */
    "surf.signal_token_of_week": {
      input: {
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Project Mindshare Time Series. */
    "surf.social_mindshare": {
      input: {
        /**
         * Surf project UUID. Provide one of `id` or `q`.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Entity name to resolve like `uniswap`, `ethereum`, or `aave`. Provide one of `id` or `q`.
         * @example "uniswap"
         */
        q?: string;
        /**
         * Bucket size for each point in the returned time-series: `5m`, `1h`, `1d`, or `7d`. This is NOT a window — the default window is 30 days; pass `from`/`to` to bound the range. Not the same parameter as `time_range` (which does not exist on this endpoint). Note: when `include_tag_percents=true`, `5m` falls back to hourly data for the per-tag series (Argus has no 5m granularity for tag percentages).
         * @example "1d"
         */
        interval: "5m" | "1h" | "1d" | "7d";
        /**
         * Start timestamp. Accepts Unix seconds (1704067200) or date string (2024-01-01)
         * @example "1704067200"
         */
        from?: string;
        /**
         * End timestamp. Accepts Unix seconds (1706745600) or date string (2024-02-01)
         * @example "1706745600"
         */
        to?: string;
        /**
         * Set to `true` to additionally return per-tag mindshare percentage time-series in the `tag_percents` field. A project can belong to multiple tags; each tag returns its own sparse time-series (values are 0~100 percentages, not ratios). Default `false` — response shape is byte-identical to the legacy format. Default: false.
         * @example true
         */
        include_tag_percents?: boolean;
        /** Data lane: `x` (X/Twitter, default) or `binance_square` (Binance Square). Response shape is identical across sources. Default: "x". */
        source?: "x" | "binance_square";
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        /** Per-tag mindshare percentage series, present when requested. */
        tag_percents?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Token DEX Trade History. */
    "surf.token_dex_trades": {
      input: {
        /**
         * Token CONTRACT ADDRESS — 0x-prefixed hex (EVM chains only; Tron also accepts base58 `T...`). This is NOT a ticker symbol (e.g. do NOT pass `USDC` or `BTC`). To resolve a ticker symbol to a contract address, call GET /v1/search/token?q={symbol}&chain={chain} and use the `address` whose `chain` is supported by this endpoint. This endpoint has no `symbol` parameter.
         * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
         */
        address: string;
        /**
         * Chain. Can be `ethereum`, `base`, `bsc`, `arbitrum`, or `tron`. Default: "ethereum".
         * @example "ethereum"
         */
        chain?: "ethereum" | "base" | "bsc" | "arbitrum" | "tron";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Comma-separated enrichments to attach to each trade. Currently valid: `labels` — adds a `taker_label` field with entity information for the taker address.
         * @example "labels"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Holders. */
    "surf.token_holders": {
      input: {
        /**
         * Token CONTRACT ADDRESS — 0x-prefixed hex for EVM chains, base58 for Solana. This is NOT a ticker symbol (e.g. do NOT pass `USDC` or `BTC`). To resolve a ticker symbol to a contract address, call GET /v1/search/token?q={symbol}&chain={chain} and use the `address` whose `chain` is supported by this endpoint. This endpoint has no `symbol` parameter.
         * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
         */
        address: string;
        /**
         * Chain. Can be `ethereum`, `polygon`, `bsc`, `solana`, `avalanche`, `arbitrum`, `optimism`, or `base`.
         * @example "ethereum"
         */
        chain: "ethereum" | "polygon" | "bsc" | "solana" | "avalanche" | "arbitrum" | "optimism" | "base";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Comma-separated enrichments to attach to each holder. Currently valid: `labels` — adds a full `label` record alongside the flat `entity_name` / `entity_type` fields.
         * @example "labels"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Unlock Schedule. */
    "surf.token_tokenomics": {
      input: {
        /**
         * Surf project UUID. PREFERRED — always use this when available from a previous response. Takes priority over symbol.
         * @example "25c6612a-395c-4974-94eb-3b5f9f4b2ed7"
         */
        id?: string;
        /**
         * Token symbol like `ARB`, `OP`, or `APT`
         * @example "ARB"
         */
        symbol?: string;
        /**
         * Start of time range. Accepts Unix seconds (`1704067200`) or date string (`2024-01-01`)
         * @example "2024-01-01"
         */
        from?: string;
        /**
         * End of time range. Accepts Unix seconds (`1735689600`) or date string (`2025-01-01`)
         * @example "2025-01-01"
         */
        to?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Top Transfer Counterparties. */
    "surf.token_transfer_counterparties": {
      input: {
        /**
         * Token CONTRACT ADDRESS (0x-hex for EVM; Tron accepts base58 `T...` or 0x-hex). Not a ticker — resolve a symbol via GET /v1/search/token?q={symbol}&chain={chain} and use a returned address whose chain is supported by this endpoint.
         * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
         */
        address: string;
        /**
         * Chain the token contract is deployed on.
         * @example "ethereum"
         */
        chain: "ethereum" | "base" | "bsc" | "arbitrum" | "tron";
        /**
         * Ranking direction: `to` = top receivers, `from` = top senders.
         * @example "to"
         */
        direction: "to" | "from";
        /** Ranking key: `count` = transfer frequency, `amount` = decimal-adjusted token sum, `amount_usd` = USD value sum (USD lags ~3 days; unreliable for recent windows). Default: "count". */
        metric?: "count" | "amount" | "amount_usd";
        /** Look-back window (hard 90d cap). Default: "7d". */
        time_range?: "1d" | "7d" | "30d" | "90d";
        /**
         * Results per page. Default: 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination offset. Default: 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated enrichments. `labels` attaches an entity label per counterparty.
         * @example "labels"
         */
        include?: string;
        /**
         * Comma-separated entity categories to drop (best-effort): `cex`, `router`, `amm`, `bridge`. Results may be fewer than `limit` when top counterparties are infrastructure.
         * @example "cex,router"
         */
        exclude_labels?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Transfer Activity Summary. */
    "surf.token_transfer_stats": {
      input: {
        /**
         * Token CONTRACT ADDRESS (0x-hex for EVM; Tron accepts base58 `T...` or 0x-hex). Not a ticker — resolve a symbol via GET /v1/search/token?q={symbol}&chain={chain} and use a returned address whose chain is supported by this endpoint.
         * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
         */
        address: string;
        /**
         * Chain the token contract is deployed on.
         * @example "ethereum"
         */
        chain: "ethereum" | "base" | "bsc" | "arbitrum" | "tron";
        /** Look-back window (hard 90d cap). Default: "7d". */
        time_range?: "1d" | "7d" | "30d" | "90d";
        /**
         * Comma-separated extras. `series` adds a daily trend breakdown (volume only).
         * @example "series"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Token Transfer History. */
    "surf.token_transfers": {
      input: {
        /**
         * Token CONTRACT ADDRESS — 0x-prefixed hex for EVM chains, base58 for Solana. This is NOT a ticker symbol (e.g. do NOT pass `USDC` or `BTC`). To resolve a ticker symbol to a contract address, call GET /v1/search/token?q={symbol}&chain={chain} and use the `address` whose `chain` is supported by this endpoint. This endpoint has no `symbol` parameter.
         * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
         */
        address: string;
        /**
         * Chain. Can be `ethereum`, `base`, `solana`, `tron`, `bsc`, or `arbitrum`.
         * @example "ethereum"
         */
        chain: "ethereum" | "base" | "solana" | "tron" | "bsc" | "arbitrum";
        /**
         * Start of date range. Accepts Unix seconds or YYYY-MM-DD. Defaults to 7 days ago.
         * @example "2025-01-01"
         */
        from?: string;
        /**
         * End of date range. Accepts Unix seconds or YYYY-MM-DD. Defaults to today.
         * @example "2025-03-01"
         */
        to?: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Comma-separated enrichments to attach to each transfer. Currently valid: `labels` — adds `from_label` and `to_label` fields.
         * @example "labels"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Aggregated Wallet Detail. */
    "surf.wallet_detail": {
      input: {
        /**
         * Wallet address (0x hex for EVM, base58 for Solana)
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
         */
        address: string;
        /**
         * Chain filter for `tokens`, `nft`, and `approvals`. When omitted, inferred from address format: 0x addresses query all EVM chains, base58 addresses query Solana.
         * @example "ethereum"
         */
        chain?: "ethereum" | "polygon" | "bsc" | "avalanche" | "arbitrum" | "optimism" | "fantom" | "base" | "solana";
        /**
         * Comma-separated sub-resources to include. Valid: `balance`, `tokens`, `labels`, `nft`, `approvals`. The `active_chains` field is always returned. `approvals` is opt-in (not in default) as it triggers additional upstream calls. Default: "balance,tokens,labels,nft".
         * @example "balance,labels,approvals"
         */
        fields?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Wallet Transaction History. */
    "surf.wallet_history": {
      input: {
        /**
         * Wallet address — must be a raw 0x-prefixed hex address, not an ENS name
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
         */
        address: string;
        /**
         * Chain filter. Can be `ethereum`, `polygon`, `bsc`, `avalanche`, `arbitrum`, `optimism`, `fantom`, or `base`. Default: "ethereum".
         * @example "ethereum"
         */
        chain?: "ethereum" | "polygon" | "bsc" | "avalanche" | "arbitrum" | "optimism" | "fantom" | "base";
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset. This feed is cursor-paginated upstream and only the most recent ~1000 transactions are reachable; a larger offset returns an empty page with meta.empty_reason rather than an error. For deep history prefer the `before` cursor — its upstream cost is bounded by `limit` and independent of depth, whereas a large offset is emulated by walking the whole feed. Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Cursor for efficient deep pagination: return transactions strictly older than this Unix-seconds timestamp (exclusive). Pass the `timestamp` of the last item from the previous page; if items may share a second, pass that timestamp + 1 and de-duplicate on `tx_hash`. Unlike `offset` (which walks the feed), the number of upstream fetches is bounded by `limit` (DeBank returns up to 20 per page) and independent of how far back you page. Mutually exclusive with `offset`.
         * @minimum 0
         * @example 1704067200
         */
        before?: number;
        /**
         * Field to sort results by. The cursor-paginated upstream feed only supports `timestamp` correctly; unsupported values are rejected by the handler for correctness. Default: "timestamp".
         * @example "timestamp"
         */
        sort_by?: "timestamp" | "value";
        /**
         * Sort order. The cursor-paginated upstream feed only supports `desc` correctly; unsupported values are rejected by the handler for correctness. Default: "desc".
         * @example "desc"
         */
        order?: "asc" | "desc";
        /**
         * Comma-separated enrichments to attach to each item. Currently valid: `labels` — adds `from_label` and `to_label` fields with entity information for each counterparty address.
         * @example "labels"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Wallet Labels (Batch). */
    "surf.wallet_labels_batch": {
      input: {
        /**
         * Comma-separated wallet addresses to look up, max 100
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,0xdead"
         */
        addresses: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Wallet Net Worth History. */
    "surf.wallet_net_worth": {
      input: {
        /**
         * Wallet address — must be a raw 0x-prefixed hex address (EVM only). Solana and ENS names are not supported.
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
         */
        address: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Wallet DeFi Protocol Positions. */
    "surf.wallet_protocols": {
      input: {
        /**
         * Wallet address — must be a raw 0x-prefixed hex address, not an ENS name
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
         */
        address: string;
        /**
         * Results per page Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Wallet Transfer History. */
    "surf.wallet_transfers": {
      input: {
        /**
         * Wallet address — must be a raw address (0x-prefixed hex for EVM, base58 for Solana). ENS names like `vitalik.eth` are not supported; resolve to a 0x address first.
         * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
         */
        address: string;
        /**
         * Chain. Can be `ethereum`, `base`, `solana`, `tron`, `bsc`, or `arbitrum`. Default: "ethereum".
         * @example "ethereum"
         */
        chain?: "ethereum" | "base" | "solana" | "tron" | "bsc" | "arbitrum";
        /**
         * Filter by transfer direction relative to the queried wallet. `in` for incoming, `out` for outgoing. Omit for both directions.
         * @example "in"
         */
        flow?: "in" | "out";
        /**
         * Filter by token contract address. Use `0x0000000000000000000000000000000000000000` for native token transfers. Omit for all tokens.
         * @example "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
         */
        token?: string;
        /**
         * Results per page. Default 20, max 100. NOTE: Solana (`chain=solana`) is hard-capped at 40 per call by the upstream Solscan API — values above 40 return at most 40 items. Check `meta.has_more` and paginate with `offset` to fetch beyond the first page. Default: 20.
         * @minimum 1
         * @maximum 100
         * @example 20
         */
        limit?: number;
        /**
         * Pagination offset. For Solana, this maps to Solscan's 1-indexed `page` parameter (page = offset/page_size + 1). Default: 0.
         * @minimum 0
         * @example 0
         */
        offset?: number;
        /**
         * Comma-separated enrichments to attach to each transfer. Currently valid: `labels` — adds `from_label` and `to_label` fields with entity information for each counterparty address.
         * @example "labels"
         */
        include?: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Web Page Fetch. */
    "surf.web_fetch": {
      input: {
        /**
         * URL to fetch and parse
         * @example "https://ethereum.org"
         */
        url: string;
        /**
         * CSS selector to extract specific content
         * @example "article.main-content"
         */
        target_selector?: string;
        /**
         * CSS selector to remove unwanted elements
         * @example "nav,footer,.ads"
         */
        remove_selector?: string;
        /**
         * CSS selector to wait for before extracting
         * @example ".content-loaded"
         */
        wait_for_selector?: string;
        /**
         * Request timeout in milliseconds Default: 30000.
         * @minimum 1000
         * @maximum 60000
         * @example 5000
         */
        timeout?: number;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Record<string, unknown>;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** X Tweets by IDs. */
    "surf.x_tweets": {
      input: {
        /**
         * Comma-separated numeric tweet IDs, from 1 to 100 values; each ID must contain 1 to 19 digits without leading zeros
         * @minLength 1
         * @maxLength 1999
         * @pattern ^(0|[1-9][0-9]*)(,(0|[1-9][0-9]*))*$
         * @example "1228393702244134912"
         */
        ids: string;
      };
      output: {
        /** Response JSON Schema URL. */
        $schema?: string;
        /** Upstream result data, preserving all provider fields. */
        data?: Array<unknown> | null;
        /** Upstream response metadata, including pagination cursors, limits, and credits when supplied. */
        meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
