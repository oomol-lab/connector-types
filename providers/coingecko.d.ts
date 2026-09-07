import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get coin metadata and optional market data, tickers and seven-day sparkline. */
    "coingecko.get_coin": {
      input: {
        /**
         * Coin ID.
         * *refers to [`/coins/list`](/reference/coins-list)
         * @minLength 1
         */
        id: string;
        /**
         * Include all localized languages in the response.
         * Default: true
         */
        localization?: boolean;
        /**
         * Include tickers data.
         * Default: true
         */
        tickers?: boolean;
        /**
         * Include market data.
         * Default: true
         */
        market_data?: boolean;
        /**
         * Include sparkline 7-day data.
         * Default: false
         */
        sparkline?: boolean;
        /**
         * Include categories details.
         * Default: false
         */
        include_categories_details?: boolean;
        /**
         * Set to `symbol` to display DEX pair base and target as symbols.
         * Default: `contract_address`
         */
        dex_pair_format?: "contract_address" | "symbol";
      };
      output: {
        /** CoinGecko coin ID. */
        id: string;
        /** Coin ticker symbol. */
        symbol: string;
        /** Coin name. */
        name: string;
        /** Market prices, capitalization, volume and other metrics. */
        market_data?: Record<string, unknown>;
        /** Coin trading pairs. */
        tickers?: Array<Record<string, unknown>>;
        /** Localized coin descriptions by language. */
        description?: Record<string, string>;
        [key: string]: unknown;
      };
    };
    /** Resolve CoinGecko coin details and coin ID from an asset platform ID and token contract address. */
    "coingecko.get_coin_by_contract": {
      input: {
        /**
         * CoinGecko asset platform ID, such as ethereum. Use list_asset_platforms; this is not an onchain network ID.
         * @minLength 1
         */
        asset_platform_id: string;
        /**
         * The contract address of token.
         * @minLength 1
         */
        contract_address: string;
      };
      output: {
        /** CoinGecko coin ID. */
        id?: string;
        /** Coin name. */
        name?: string;
        /** Coin ticker symbol. */
        symbol?: string;
        /** Platform contract addresses and decimal precision. */
        detail_platforms?: Record<string, unknown>;
        /** Coin market metrics across currencies. */
        market_data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a coin market snapshot at 00:00 UTC on a specified date, not that day's closing price. Demo history is limited to 365 days; paid historical access depends on plan. */
    "coingecko.get_coin_history": {
      input: {
        /**
         * Coin ID.
         * *refers to [`/coins/list`](/reference/coins-list).
         * @minLength 1
         */
        id: string;
        /**
         * The date of data snapshot.
         * Format: `YYYY-MM-DD`
         * @format date
         */
        date: string;
        /**
         * Include all the localized languages in response.
         * Default: true
         */
        localization?: boolean;
      };
      output: {
        /** CoinGecko coin ID. */
        id: string;
        /** Coin name. */
        name: string;
        /** Coin ticker symbol. */
        symbol: string;
        /** Historical market metrics by currency when available. */
        market_data?: {
          /** Historical price by currency. */
          current_price?: Record<string, number | null>;
          /** Historical market capitalization by currency. */
          market_cap?: Record<string, number | null>;
          /** Historical 24-hour volume by currency. */
          total_volume?: Record<string, number | null>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get coin OHLC candles without volume. Timestamps are candle close times in UNIX milliseconds. Demo supports up to 365 days with automatic granularity; max and explicit hourly/daily intervals require paid access. */
    "coingecko.get_coin_ohlc": {
      input: (unknown) & (unknown);
      output: {
        /** OHLC candles without per-candle volume. */
        candles: Array<[number, number, number, number, number]>;
      };
    };
    /** Get global cryptocurrency market capitalization, trading volume and market share. */
    "coingecko.get_global_market_data": {
      input: Record<string, never>;
      output: {
        /** Global market metrics. */
        data?: {
          /** Number of active cryptocurrencies. */
          active_cryptocurrencies?: number;
          /** Number of active markets. */
          markets?: number;
          /** Market capitalization by quote currency. */
          total_market_cap?: Record<string, number>;
          /** Trading volume by quote currency. */
          total_volume?: Record<string, number>;
          /** Market share percentage by cryptocurrency symbol. */
          market_cap_percentage?: Record<string, number>;
          /** Last update time as a UNIX timestamp in seconds. */
          updated_at?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get historical price, market capitalization and volume series by number of days. Historical access and interval availability depend on your CoinGecko plan. */
    "coingecko.get_market_chart": {
      input: {
        /**
         * Coin ID.
         * *refers to [`/coins/list`](/reference/coins-list).
         * @minLength 1
         */
        id: string;
        /**
         * Target currency of market data.
         * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
         * @minLength 1
         */
        vs_currency: string;
        /**
         * Data up to number of days ago.
         * You may use any integer or `max` for number of days.
         */
        days: number | "max";
        /** Data interval, leave empty for auto granularity. */
        interval?: "5m" | "hourly" | "daily";
        /** Decimal place for currency price value. */
        precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
      };
      output: {
        /** Historical prices in the quote currency. */
        prices?: Array<Array<number | null>>;
        /** Historical market capitalizations in the quote currency. */
        market_caps?: Array<Array<number | null>>;
        /** Historical 24-hour trading volumes in the quote currency. */
        total_volumes?: Array<Array<number | null>>;
        [key: string]: unknown;
      };
    };
    /** Get historical price, market capitalization and volume series within a date or UNIX timestamp range. Historical access and interval availability depend on your CoinGecko plan. */
    "coingecko.get_market_chart_range": {
      input: {
        /**
         * Coin ID.
         * *refers to [`/coins/list`](/reference/coins-list).
         * @minLength 1
         */
        id: string;
        /**
         * Target currency of market data.
         * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
         * @minLength 1
         */
        vs_currency: string;
        /**
         * Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
         * **Use ISO date string for best compatibility.**
         * @minLength 1
         */
        from: string;
        /**
         * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
         * **Use ISO date string for best compatibility.**
         * @minLength 1
         */
        to: string;
        /** Data interval, leave empty for auto granularity. */
        interval?: "5m" | "hourly" | "daily";
        /** Decimal place for currency price value. */
        precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
      };
      output: {
        /** Historical prices in the quote currency. */
        prices?: Array<Array<number | null>>;
        /** Historical market capitalizations in the quote currency. */
        market_caps?: Array<Array<number | null>>;
        /** Historical 24-hour trading volumes in the quote currency. */
        total_volumes?: Array<Array<number | null>>;
        [key: string]: unknown;
      };
    };
    /** Get prices, reserves and activity for one explicitly selected DEX pool, with optional token and DEX resources, composition and volume breakdown. */
    "coingecko.get_onchain_pool": {
      input: {
        /**
         * GeckoTerminal network ID, such as eth. Use list_onchain_networks; this is not a CoinGecko asset platform ID.
         * @minLength 1
         */
        network: string;
        /**
         * Pool address.
         * @minLength 1
         */
        pool_address: string;
        /**
         * Attributes to include, comma-separated if more than one.
         * Available values: `base_token`, `quote_token`, `dex`
         * @minLength 1
         */
        include?: string;
        /**
         * Include volume breakdown.
         * Default: `false`
         */
        include_volume_breakdown?: boolean;
        /**
         * Include pool composition.
         * Default: `false`
         */
        include_composition?: boolean;
      };
      output: {
        /** GeckoTerminal JSON:API resource. */
        data: {
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Pool prices, liquidity and activity; decimal strings are preserved. */
          attributes: {
            /** Pool contract address. */
            address: string;
            /** Pool name. */
            name: string;
            /** Pool creation time. */
            pool_created_at?: string | null;
            /** Base token USD price as a decimal string. */
            base_token_price_usd?: string | null;
            /** Quote token USD price as a decimal string. */
            quote_token_price_usd?: string | null;
            /** Pool reserve value in USD as a decimal string. */
            reserve_in_usd?: string | null;
            /** Fully diluted valuation in USD as a decimal string. */
            fdv_usd?: string | null;
            /** Verified market capitalization in USD; may be null and is never replaced with FDV. */
            market_cap_usd?: string | null;
            /** USD trading volume by timeframe. */
            volume_usd?: Record<string, string | null>;
            /** Price percentage changes by timeframe. */
            price_change_percentage?: Record<string, string | null>;
            /** Trade counts by timeframe. */
            transactions?: Record<string, Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get token price, supply, volume and token reserve value across pools, with optional top pools. Prices follow the upstream selected pool; unavailable market capitalization remains null. */
    "coingecko.get_onchain_token": {
      input: {
        /**
         * GeckoTerminal network ID, such as eth. Use list_onchain_networks; this is not a CoinGecko asset platform ID.
         * @minLength 1
         */
        network: string;
        /**
         * Token contract address.
         * @minLength 1
         */
        token_address: string;
        /** Attributes to include. */
        include?: "top_pools";
        /**
         * Include pool composition.
         * Default: `false`
         */
        include_composition?: boolean;
        /**
         * Include token data from inactive pools using the most recent swap.
         * Default: `false`
         */
        include_inactive_source?: boolean;
      };
      output: {
        /** GeckoTerminal JSON:API resource. */
        data: {
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Token market attributes from GeckoTerminal. */
          attributes: {
            /** Token contract address. */
            address: string;
            /** Token name. */
            name: string;
            /** Token symbol. */
            symbol: string;
            /** Token decimal precision. */
            decimals?: number;
            /** CoinGecko coin ID if the token is listed. */
            coingecko_coin_id?: string | null;
            /** Raw total token supply as a decimal string. */
            total_supply?: string | null;
            /** Total supply adjusted for token decimals. */
            normalized_total_supply?: string | null;
            /** Token USD price from the upstream selected pool as a decimal string. */
            price_usd?: string | null;
            /** Fully diluted valuation in USD as a decimal string. */
            fdv_usd?: string | null;
            /** Verified market capitalization in USD; may be null and is never replaced with FDV. */
            market_cap_usd?: string | null;
            /** USD value of this token's reserves across pools, not the sum of both sides of every pool. */
            total_reserve_in_usd?: string | null;
            /** USD trading volume by timeframe. */
            volume_usd?: Record<string, string | null>;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get token project metadata and available GeckoTerminal verification, holder and authority signals. Field availability varies by network and does not constitute a safety assessment. */
    "coingecko.get_onchain_token_info": {
      input: {
        /**
         * GeckoTerminal network ID, such as eth. Use list_onchain_networks; this is not a CoinGecko asset platform ID.
         * @minLength 1
         */
        network: string;
        /**
         * Token contract address.
         * @minLength 1
         */
        token_address: string;
      };
      output: {
        /** GeckoTerminal JSON:API resource. */
        data: {
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Token metadata and upstream verification signals; availability varies by network. */
          attributes: {
            /** Token contract address. */
            address: string;
            /** Token name. */
            name: string;
            /** Token symbol. */
            symbol: string;
            /** CoinGecko coin ID if the token is listed. */
            coingecko_coin_id?: string | null;
            /** Project website URLs supplied by upstream metadata. */
            websites?: Array<string>;
            /** Upstream token description. */
            description?: string | null;
            /** GeckoTerminal score, not a safety guarantee. */
            gt_score?: number | null;
            /** Whether GeckoTerminal marks this token as verified. */
            gt_verified?: boolean;
            /** Available holder counts and distribution, which may include exchange and treasury wallets. */
            holders?: Record<string, unknown> | null;
            /** Upstream mint authority status. */
            mint_authority?: string | null;
            /** Upstream freeze authority status. */
            freeze_authority?: string | null;
            /** Upstream honeypot signal; unknown is not equivalent to false. */
            is_honeypot?: boolean | string | null;
            /** Developer wallet address when available. */
            developer_address?: string | null;
            /** Developer percentage of total supply as a decimal string. */
            developer_holding_percentage?: string | null;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get OHLCV candles for an explicit pool and token direction. Timestamps are UNIX seconds. Empty intervals are omitted unless requested. Each request covers at most six months; accessible history depends on plan and pool tracking. Second timeframes require eligible paid access. */
    "coingecko.get_pool_ohlcv": {
      input: (unknown) & (unknown) & (unknown) & (unknown);
      output: {
        /** GeckoTerminal JSON:API resource. */
        data: {
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** OHLCV response attributes. */
          attributes: {
            /** Pool candles, retaining the upstream order and empty-interval behavior. */
            ohlcv_list?: Array<[number, number, number, number, number, number]>;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get current coin prices by ID, name or symbol, with optional market metrics. At least one selector is required; CoinGecko prioritizes IDs, then names, then symbols. */
    "coingecko.get_prices": {
      input: Record<string, unknown>;
      output: {
        /** Coin selectors mapped to quotes; include_tokens=all may return an array of token quotes for each symbol. */
        prices: Record<string, Record<string, unknown> | Array<Record<string, unknown>>>;
      };
    };
    /** Get global average prices and optional metrics for CoinGecko-listed tokens by asset platform and contract addresses. Supports up to 515 addresses per request. */
    "coingecko.get_token_prices": {
      input: {
        /**
         * CoinGecko asset platform ID, such as ethereum. Use list_asset_platforms; this is not an onchain network ID.
         * @minLength 1
         */
        asset_platform_id: string;
        /**
         * Token contract addresses, comma-separated if querying more than 1 token
         * @minLength 1
         */
        contract_addresses: string;
        /**
         * Target currency of coins, comma-separated if querying more than 1 currency.
         * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
         * @minLength 1
         */
        vs_currencies: string;
        /**
         * Include market capitalization.
         * Default: false
         */
        include_market_cap?: boolean;
        /**
         * Include 24-hour trading volume.
         * Default: false
         */
        include_24hr_vol?: boolean;
        /**
         * Include 24-hour change percentage.
         * Default: false
         */
        include_24hr_change?: boolean;
        /**
         * Include last updated price time as a UNIX timestamp.
         * Default: false
         */
        include_last_updated_at?: boolean;
        /** Decimal places for currency price value */
        precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
      };
      output: {
        /** Contract addresses mapped to currency prices and optional metrics. */
        prices: Record<string, Record<string, unknown>>;
      };
    };
    /** Get trending coins, NFTs and categories by CoinGecko search volume over the last 24 hours. The show_max option requires an eligible plan. */
    "coingecko.get_trending": {
      input: {
        /**
         * Show max number of results available for the given type.
         * Available values: `coins`, `nfts`, `categories`
         * e.g. `coins` or `coins,nfts,categories`
         * @minLength 1
         */
        show_max?: string;
      };
      output: {
        /** Trending coins, each wrapped in an item field. */
        coins?: Array<{
          /** Trending coin data. */
          item?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Trending NFT collections. */
        nfts?: Array<Record<string, unknown>>;
        /** Trending categories. */
        categories?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List CoinGecko asset platform IDs for contract-address lookups. These differ from onchain network IDs. */
    "coingecko.list_asset_platforms": {
      input: {
        /** Apply relevant filters to results. */
        filter?: "nft";
      };
      output: {
        /** Asset platforms for contract-address queries. */
        platforms: Array<{
          /** CoinGecko asset platform ID. */
          id?: string;
          /** Platform name. */
          name?: string;
          /** Chainlist numeric chain ID, when available. */
          chain_identifier?: number | null;
          /** CoinGecko ID of the platform native coin. */
          native_coin_id?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List CoinGecko category market capitalization, 24-hour changes and volume. Use returned category IDs with list_coin_markets. */
    "coingecko.list_category_markets": {
      input: {
        /**
         * Sort results by field.
         * Default: `market_cap_desc`
         */
        order?: "market_cap_desc" | "market_cap_asc" | "name_desc" | "name_asc" | "market_cap_change_24h_desc" | "market_cap_change_24h_asc";
      };
      output: {
        /** Categories ordered as requested. */
        categories: Array<{
          /** Category ID accepted by list_coin_markets. */
          id: string;
          /** Category name. */
          name: string;
          /** Category market capitalization in USD. */
          market_cap: number | null;
          /** Category market capitalization percentage change in 24 hours. */
          market_cap_change_24h: number | null;
          /** Category trading volume in USD over 24 hours. */
          volume_24h: number | null;
          /** Coin IDs of the top three coins. */
          top_3_coins_id?: Array<string>;
          /** Time the category metrics were updated. */
          updated_at: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List paginated coin prices, market capitalization, volume and price changes. Plan-specific filters are enforced by CoinGecko. */
    "coingecko.list_coin_markets": {
      input: {
        /**
         * Target currency of coins and market data.
         * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
         * @minLength 1
         */
        vs_currency: string;
        /**
         * Coins' IDs, comma-separated if querying more than 1 coin.
         * *refers to [`/coins/list`](/reference/coins-list)
         * @minLength 1
         */
        ids?: string;
        /**
         * Coins' names, comma-separated if querying more than 1 coin.
         * @minLength 1
         */
        names?: string;
        /**
         * Coins' symbols, comma-separated if querying more than 1 coin.
         * @minLength 1
         */
        symbols?: string;
        /**
         * For `symbols` lookups, specify `all` to include all matching tokens.
         * Default `top` returns top-ranked tokens by market cap or volume.
         */
        include_tokens?: "top" | "all";
        /**
         * Filter based on coins' category.
         * *refers to [`/coins/categories/list`](/reference/coins-categories-list)
         * @minLength 1
         */
        category?: string;
        /**
         * Sort result by field.
         * Default: market_cap_desc
         */
        order?: "market_cap_asc" | "market_cap_desc" | "volume_asc" | "volume_desc" | "id_asc" | "id_desc";
        /**
         * Total results per page.
         * Default: 100
         * Valid values: 1...250
         * @minimum 1
         * @maximum 250
         */
        per_page?: number;
        /**
         * Page through results.
         * Default: 1
         * @minimum 1
         */
        page?: number;
        /**
         * Include sparkline 7-day data.
         * Default: false
         */
        sparkline?: boolean;
        /**
         * Include price change percentage timeframe, comma-separated if querying more than 1 timeframe.
         * Valid values: `1h`, `24h`, `7d`, `14d`, `30d`, `200d`, `1y`
         * @minLength 1
         */
        price_change_percentage?: string;
        /**
         * Language background.
         * Default: en
         */
        locale?: "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "vi" | "zh" | "zh-tw";
        /** Decimal places for currency price value */
        precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
        /**
         * Include rehypothecated tokens in results. When true, returns `market_cap_rank_with_rehypothecated` field.
         * Default: false
         */
        include_rehypothecated?: boolean;
      };
      output: {
        /** Coin markets in the requested order. */
        coins: Array<{
          /** CoinGecko coin ID. */
          id: string;
          /** Coin ticker symbol. */
          symbol: string;
          /** Coin name. */
          name: string;
          /** Current price in the requested quote currency. */
          current_price?: number | null;
          /** Market capitalization in the quote currency. */
          market_cap?: number | null;
          /** Market capitalization rank. */
          market_cap_rank?: number | null;
          /** Trading volume in the quote currency. */
          total_volume?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a page of up to 100 CEX and DEX tickers for a coin, with exchange filters and optional 2-percent orderbook depth. Quotes are market observations, not execution guarantees. */
    "coingecko.list_coin_tickers": {
      input: {
        /**
         * Coin ID.
         * *refers to [`/coins/list`](/reference/coins-list)
         * @minLength 1
         */
        id: string;
        /**
         * Exchange ID.
         * *refers to [`/exchanges/list`](/reference/exchanges-list)
         * @minLength 1
         */
        exchange_ids?: string;
        /**
         * Include exchange logo.
         * Default: false
         */
        include_exchange_logo?: boolean;
        /**
         * Page through results
         * @minimum 1
         */
        page?: number;
        /**
         * Sort the order of responses.
         * Default: trust_score_desc
         */
        order?: "trust_score_desc" | "trust_score_asc" | "volume_desc" | "volume_asc";
        /**
         * Include 2% orderbook depth, i.e. `cost_to_move_up_usd` and `cost_to_move_down_usd`.
         * Default: false
         */
        depth?: boolean;
        /**
         * Set to `symbol` to display DEX pair base and target as symbols.
         * Default: `contract_address`
         */
        dex_pair_format?: "contract_address" | "symbol";
      };
      output: {
        /** Coin name. */
        name?: string;
        /** Up to 100 tickers in the requested page. */
        tickers?: Array<{
          /** Base token symbol or contract address. */
          base: string;
          /** Quote token symbol or contract address. */
          target: string;
          /** Exchange name, identifier and market metadata. */
          market: Record<string, unknown>;
          /** Last traded price in the target currency. */
          last: number;
          /** Trading volume reported for this ticker. */
          volume: number;
          /** Bid-ask spread percentage. */
          bid_ask_spread_percentage?: number | null;
          /** CoinGecko ticker trust score. */
          trust_score?: string | null;
          /** Whether the ticker is anomalous. */
          is_anomaly?: boolean;
          /** Whether the ticker is stale. */
          is_stale?: boolean;
          /** Time of the last trade. */
          last_traded_at?: string | null;
          /** USD cost to move the orderbook up by 2 percent when depth is requested. */
          cost_to_move_up_usd?: number | null;
          /** USD cost to move the orderbook down by 2 percent when depth is requested. */
          cost_to_move_down_usd?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List CoinGecko coin IDs, symbols and names, optionally including platform contract addresses. */
    "coingecko.list_coins": {
      input: {
        /**
         * Include platform and token's contract addresses.
         * Default: false
         */
        include_platform?: boolean;
        /**
         * Filter by status of coins.
         * Default: active
         */
        status?: "active" | "inactive";
      };
      output: {
        /** Supported coins. */
        coins: Array<{
          /** CoinGecko coin ID. */
          id: string;
          /** Coin ticker symbol. */
          symbol: string;
          /** Coin name. */
          name: string;
          /** Asset platform IDs mapped to contract addresses. */
          platforms?: Record<string, string | null>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a page of GeckoTerminal network IDs and their CoinGecko asset platform mappings. Use network IDs such as eth for onchain actions. */
    "coingecko.list_onchain_networks": {
      input: {
        /**
         * Page through results.
         * Default value: 1
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Networks in the requested page. */
        data: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Network identifiers and names. */
          attributes: {
            /** Network name. */
            name?: string;
            /** Corresponding CoinGecko asset platform ID, distinct from the onchain network ID. */
            coingecko_asset_platform_id?: string | null;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the latest 300 trades within the past 24 hours for a pool, optionally filtered by USD volume and token direction. This is not complete transaction history or a complete capital-flow dataset. */
    "coingecko.list_pool_trades": {
      input: {
        /**
         * GeckoTerminal network ID, such as eth. Use list_onchain_networks; this is not a CoinGecko asset platform ID.
         * @minLength 1
         */
        network: string;
        /**
         * Pool contract address.
         * @minLength 1
         */
        pool_address: string;
        /**
         * Filter trades by trade volume in USD greater than this value.
         * Default value: 0
         * @minimum 0
         */
        trade_volume_in_usd_greater_than?: number;
        /**
         * Return trades for token, use this to invert the chart.
         * Available values: `base`, `quote`, or token address.
         * Default: `base`
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Recent pool trades, limited by upstream retention. */
        data: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Recent pool trade, preserving original token amounts and prices. */
          attributes: {
            /** Block number. */
            block_number: number;
            /** Transaction hash. */
            tx_hash: string;
            /** Transaction sender address. */
            tx_from_address: string;
            /** Sent token contract address. */
            from_token_address: string;
            /** Received token contract address. */
            to_token_address: string;
            /** Sent token amount as a decimal string. */
            from_token_amount: string;
            /** Received token amount as a decimal string. */
            to_token_amount: string;
            /** Trade volume in USD as a decimal string. */
            volume_in_usd: string;
            /** Trade block time as an ISO timestamp. */
            block_timestamp: string;
            /** Trade direction, buy or sell, relative to the requested token. */
            kind: string;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List supported quote currencies for CoinGecko price and market queries. */
    "coingecko.list_supported_currencies": {
      input: Record<string, never>;
      output: {
        /** Currency IDs accepted by price endpoints. */
        currencies: Array<string>;
      };
    };
    /** List up to 20 pools for a token per page, with sorting and related resources. The default sort combines 24-hour volume and liquidity; pages beyond 10 require Analyst or above. */
    "coingecko.list_token_pools": {
      input: {
        /**
         * GeckoTerminal network ID, such as eth. Use list_onchain_networks; this is not a CoinGecko asset platform ID.
         * @minLength 1
         */
        network: string;
        /**
         * Token contract address.
         * @minLength 1
         */
        token_address: string;
        /**
         * Attributes to include, comma-separated if more than one.
         * Available values: `base_token`, `quote_token`, `dex`
         * @minLength 1
         */
        include?: string;
        /**
         * Include tokens from inactive pools using the most recent swap.
         * Default: `false`
         */
        include_inactive_source?: boolean;
        /**
         * Page through results.
         * Default value: 1
         * @minimum 1
         */
        page?: number;
        /**
         * Sort the pools by field.
         * Default: `h24_volume_usd_liquidity_desc`
         */
        sort?: "h24_volume_usd_liquidity_desc" | "h24_tx_count_desc" | "h24_volume_usd_desc";
        /**
         * Include GeckoTerminal community data (sentiment votes, suspicious reports).
         * Default: `false`
         */
        include_gt_community_data?: boolean;
      };
      output: {
        /** Pools for the requested token. */
        data: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Pool prices, liquidity and activity; decimal strings are preserved. */
          attributes: {
            /** Pool contract address. */
            address: string;
            /** Pool name. */
            name: string;
            /** Pool creation time. */
            pool_created_at?: string | null;
            /** Base token USD price as a decimal string. */
            base_token_price_usd?: string | null;
            /** Quote token USD price as a decimal string. */
            quote_token_price_usd?: string | null;
            /** Pool reserve value in USD as a decimal string. */
            reserve_in_usd?: string | null;
            /** Fully diluted valuation in USD as a decimal string. */
            fdv_usd?: string | null;
            /** Verified market capitalization in USD; may be null and is never replaced with FDV. */
            market_cap_usd?: string | null;
            /** USD trading volume by timeframe. */
            volume_usd?: Record<string, string | null>;
            /** Price percentage changes by timeframe. */
            price_change_percentage?: Record<string, string | null>;
            /** Trade counts by timeframe. */
            transactions?: Record<string, Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search coins, categories, exchanges and NFTs listed on CoinGecko. */
    "coingecko.search": {
      input: {
        /**
         * Search query
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** Matching coins. */
        coins: Array<Record<string, unknown>>;
        /** Matching exchanges. */
        exchanges: Array<Record<string, unknown>>;
        /** Legacy ICO search results. */
        icos?: Array<unknown>;
        /** Matching categories. */
        categories: Array<Record<string, unknown>>;
        /** Matching NFTs. */
        nfts: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search DEX pools by pool address, token address, name or symbol, optionally filtered by network. Returns up to 20 pools per page; pages beyond 10 require Analyst or above. */
    "coingecko.search_onchain_pools": {
      input: {
        /**
         * Search query: pool contract address, token name, token symbol, or token contract address.
         * @minLength 1
         */
        query?: string;
        /**
         * GeckoTerminal network ID, such as eth. Use list_onchain_networks; this is not a CoinGecko asset platform ID.
         * @minLength 1
         */
        network?: string;
        /**
         * Attributes to include, comma-separated if more than one.
         * Available values: `base_token`, `quote_token`, `dex`
         * @minLength 1
         */
        include?: string;
        /**
         * Page through results.
         * Default value: 1
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Pools matching the search. */
        data: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Pool prices, liquidity and activity; decimal strings are preserved. */
          attributes: {
            /** Pool contract address. */
            address: string;
            /** Pool name. */
            name: string;
            /** Pool creation time. */
            pool_created_at?: string | null;
            /** Base token USD price as a decimal string. */
            base_token_price_usd?: string | null;
            /** Quote token USD price as a decimal string. */
            quote_token_price_usd?: string | null;
            /** Pool reserve value in USD as a decimal string. */
            reserve_in_usd?: string | null;
            /** Fully diluted valuation in USD as a decimal string. */
            fdv_usd?: string | null;
            /** Verified market capitalization in USD; may be null and is never replaced with FDV. */
            market_cap_usd?: string | null;
            /** USD trading volume by timeframe. */
            volume_usd?: Record<string, string | null>;
            /** Price percentage changes by timeframe. */
            price_change_percentage?: Record<string, string | null>;
            /** Trade counts by timeframe. */
            transactions?: Record<string, Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources requested using include. */
        included?: Array<{
          /** Resource identifier. */
          id: string;
          /** Resource type. */
          type: string;
          /** Included resource attributes. */
          attributes: Record<string, unknown>;
          /** Related resource identifiers, such as tokens, pools, networks and DEXes. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional upstream response metadata. */
        meta?: Record<string, unknown>;
        /** Upstream response links, when provided. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
