import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an asset amount into another fiat or cryptocurrency using CoinMarketCap pricing. */
    "coinmarketcap.convert_price": {
      input: {
        /**
         * Amount of the source asset to convert.
         * @minimum 1e-8
         */
        amount: number;
        /**
         * CoinMarketCap ID of the source asset.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Ticker symbol of the source asset.
         * @minLength 1
         */
        symbol?: string;
        /**
         * Target currency symbol used for conversion.
         * @minLength 1
         */
        convert?: string;
        /**
         * CoinMarketCap ID of the target currency used instead of convert.
         * @minLength 1
         */
        convert_id?: string;
        /**
         * Historical timestamp or date to use for conversion, when supported by the API plan.
         * @minLength 1
         */
        time?: string;
      };
      output: {
        /** CoinMarketCap response status metadata. */
        status: {
          /**
           * Timestamp when CoinMarketCap generated the response.
           * @minLength 1
           */
          timestamp: string;
          /** CoinMarketCap error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCap, or null when the request succeeded. */
          error_message?: string | null;
          /** Time spent by CoinMarketCap processing the request. */
          elapsed: number;
          /** API credits consumed by the request. */
          credit_count: number;
          /** Additional notice returned by CoinMarketCap when present. */
          notice?: string;
        };
        /** Price conversion result. */
        data: {
          /** CoinMarketCap identifier of the source asset. */
          id: number;
          /**
           * Source asset name.
           * @minLength 1
           */
          name: string;
          /**
           * Source asset ticker symbol.
           * @minLength 1
           */
          symbol: string;
          /** Input amount that was converted. */
          amount: number;
          /**
           * Timestamp of the price used for conversion.
           * @minLength 1
           */
          last_updated: string;
          /** Mapping of target currency to converted quote. */
          quote: Record<string, {
              /** Converted value for the requested amount. */
              price: number;
              /**
               * Timestamp of the converted quote.
               * @minLength 1
               */
              last_updated: string;
            }>;
        };
      };
    };
    /** Retrieve CoinMarketCap asset IDs, symbols, and slugs for cryptocurrency discovery. */
    "coinmarketcap.get_cryptocurrency_map": {
      input: {
        /**
         * Comma-separated CoinMarketCap asset IDs to filter by.
         * @minLength 1
         */
        id?: string;
        /**
         * Comma-separated listing statuses to include, such as active or inactive.
         * @minLength 1
         */
        listing_status?: string;
        /**
         * Comma-separated asset slugs to filter by.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated asset symbols to filter by.
         * @minLength 1
         */
        symbol?: string;
        /**
         * Comma-separated auxiliary fields to include, such as platform or first_historical_data.
         * @minLength 1
         */
        aux?: string;
        /** Field used to sort the response. */
        sort?: "id" | "cmc_rank";
        /**
         * 1-based offset of the first item to return.
         * @minimum 1
         */
        start?: number;
        /**
         * Maximum number of assets to return.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
      };
      output: {
        /** CoinMarketCap response status metadata. */
        status: {
          /**
           * Timestamp when CoinMarketCap generated the response.
           * @minLength 1
           */
          timestamp: string;
          /** CoinMarketCap error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCap, or null when the request succeeded. */
          error_message?: string | null;
          /** Time spent by CoinMarketCap processing the request. */
          elapsed: number;
          /** API credits consumed by the request. */
          credit_count: number;
          /** Additional notice returned by CoinMarketCap when present. */
          notice?: string;
        };
        /** Ordered list of CoinMarketCap asset mappings. */
        data: Array<{
          /** CoinMarketCap cryptocurrency identifier. */
          id: number;
          /**
           * Asset name.
           * @minLength 1
           */
          name: string;
          /**
           * Asset ticker symbol.
           * @minLength 1
           */
          symbol: string;
          /**
           * Asset slug.
           * @minLength 1
           */
          slug: string;
          /** Current market capitalization rank. */
          rank?: number | null;
          /** Whether the asset is active, using CoinMarketCap flags. */
          is_active: number;
          /** Internal CoinMarketCap listing status code. */
          status?: number;
          /** Timestamp of the first available historical data point. */
          first_historical_data?: string;
          /** Timestamp of the last available historical data point. */
          last_historical_data?: string;
          /** Parent platform for token assets when present. */
          platform?: {
            /** CoinMarketCap platform identifier. */
            id: number;
            /**
             * Platform name.
             * @minLength 1
             */
            name: string;
            /**
             * Platform symbol.
             * @minLength 1
             */
            symbol: string;
            /**
             * Platform slug.
             * @minLength 1
             */
            slug: string;
            /**
             * Token contract address on the platform.
             * @minLength 1
             */
            token_address: string;
          } | null;
        }>;
      };
    };
    /** Retrieve plan limits and usage details for the current CoinMarketCap API key. */
    "coinmarketcap.get_key_info": {
      input: Record<string, never>;
      output: {
        /** CoinMarketCap response status metadata. */
        status: {
          /**
           * Timestamp when CoinMarketCap generated the response.
           * @minLength 1
           */
          timestamp: string;
          /** CoinMarketCap error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCap, or null when the request succeeded. */
          error_message?: string | null;
          /** Time spent by CoinMarketCap processing the request. */
          elapsed: number;
          /** API credits consumed by the request. */
          credit_count: number;
          /** Additional notice returned by CoinMarketCap when present. */
          notice?: string;
        };
        /** CoinMarketCap API key details. */
        data: {
          /** Plan information for the current API key. */
          plan: {
            /** Monthly credit limit available to the API key. */
            credit_limit_monthly: number;
            /**
             * Human-readable interval until the monthly credit limit resets.
             * @minLength 1
             */
            credit_limit_monthly_reset: string;
            /**
             * Timestamp when the monthly credit limit resets.
             * @minLength 1
             */
            credit_limit_monthly_reset_timestamp: string;
            /** Maximum number of requests allowed per minute. */
            rate_limit_minute: number;
          };
          /** Current API key usage metrics. */
          usage: {
            /** Usage for the current minute bucket. */
            current_minute: {
              /** Credits used within the reported period. */
              credits_used?: number;
              /** Credits remaining within the reported period. */
              credits_left?: number;
              /** Requests already made within the reported minute bucket. */
              requests_made?: number;
              /** Requests remaining within the reported minute bucket. */
              requests_left?: number;
            };
            /** Usage for the current day bucket. */
            current_day: {
              /** Credits used within the reported period. */
              credits_used?: number;
              /** Credits remaining within the reported period. */
              credits_left?: number;
              /** Requests already made within the reported minute bucket. */
              requests_made?: number;
              /** Requests remaining within the reported minute bucket. */
              requests_left?: number;
            };
            /** Usage for the current month bucket. */
            current_month: {
              /** Credits used within the reported period. */
              credits_used?: number;
              /** Credits remaining within the reported period. */
              credits_left?: number;
              /** Requests already made within the reported minute bucket. */
              requests_made?: number;
              /** Requests remaining within the reported minute bucket. */
              requests_left?: number;
            };
          };
        };
      };
    };
    /** Retrieve the latest quotes for one or more cryptocurrencies by id, symbol, or slug. */
    "coinmarketcap.get_latest_cryptocurrency_quotes": {
      input: {
        /**
         * Comma-separated CoinMarketCap asset IDs to query.
         * @minLength 1
         */
        id?: string;
        /**
         * Comma-separated asset symbols to query.
         * @minLength 1
         */
        symbol?: string;
        /**
         * Comma-separated asset slugs to query.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated quote currency symbols to convert into.
         * @minLength 1
         */
        convert?: string;
        /**
         * Comma-separated CoinMarketCap IDs of quote currencies to convert into.
         * @minLength 1
         */
        convert_id?: string;
        /** Whether invalid identifiers should be silently skipped by CoinMarketCap. */
        skip_invalid?: boolean;
        /**
         * Comma-separated auxiliary asset fields to include.
         * @minLength 1
         */
        aux?: string;
      };
      output: {
        /** CoinMarketCap response status metadata. */
        status: {
          /**
           * Timestamp when CoinMarketCap generated the response.
           * @minLength 1
           */
          timestamp: string;
          /** CoinMarketCap error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCap, or null when the request succeeded. */
          error_message?: string | null;
          /** Time spent by CoinMarketCap processing the request. */
          elapsed: number;
          /** API credits consumed by the request. */
          credit_count: number;
          /** Additional notice returned by CoinMarketCap when present. */
          notice?: string;
        };
        /** Mapping of requested identifiers to latest asset quotes. */
        data: Record<string, {
            /** CoinMarketCap cryptocurrency identifier. */
            id: number;
            /**
             * Asset name.
             * @minLength 1
             */
            name: string;
            /**
             * Asset ticker symbol.
             * @minLength 1
             */
            symbol: string;
            /**
             * Asset slug.
             * @minLength 1
             */
            slug: string;
            /** Current market capitalization rank. */
            cmc_rank?: number;
            /** Number of known market pairs for the asset. */
            num_market_pairs?: number;
            /** Estimated circulating supply. */
            circulating_supply?: number | null;
            /** Reported total supply. */
            total_supply?: number | null;
            /** Reported maximum supply. */
            max_supply?: number | null;
            /** Whether the asset is active. */
            is_active?: number;
            /** Whether the asset is fiat. */
            is_fiat?: number;
            /** Timestamp when the asset was added to CoinMarketCap. */
            date_added?: string;
            /** Classification tags for the asset. */
            tags?: Array<string> | null;
            /** Parent platform for token assets when present. */
            platform?: {
              /** CoinMarketCap platform identifier. */
              id: number;
              /**
               * Platform name.
               * @minLength 1
               */
              name: string;
              /**
               * Platform symbol.
               * @minLength 1
               */
              symbol: string;
              /**
               * Platform slug.
               * @minLength 1
               */
              slug: string;
              /**
               * Token contract address on the platform.
               * @minLength 1
               */
              token_address: string;
            } | null;
            /** Mapping of conversion currency to quote metrics. */
            quote: Record<string, {
                /** Latest converted price. */
                price?: number | null;
                /** Rolling 24-hour traded volume. */
                volume_24h?: number | null;
                /** Percentage change of the 24-hour traded volume. */
                volume_change_24h?: number | null;
                /** Percentage price change over the past hour. */
                percent_change_1h?: number | null;
                /** Percentage price change over the past 24 hours. */
                percent_change_24h?: number | null;
                /** Percentage price change over the past 7 days. */
                percent_change_7d?: number | null;
                /** Percentage price change over the past 30 days. */
                percent_change_30d?: number | null;
                /** Percentage price change over the past 60 days. */
                percent_change_60d?: number | null;
                /** Percentage price change over the past 90 days. */
                percent_change_90d?: number | null;
                /** Current market capitalization. */
                market_cap?: number | null;
                /** Percentage dominance of the total market capitalization. */
                market_cap_dominance?: number | null;
                /** Fully diluted market capitalization. */
                fully_diluted_market_cap?: number | null;
                /** Total value locked when available. */
                tvl?: number | null;
                /** Timestamp of the returned quote. */
                last_updated?: string | null;
                [key: string]: unknown;
              }>;
          }>;
      };
    };
    /** Retrieve the latest global cryptocurrency market metrics and quote aggregates. */
    "coinmarketcap.get_latest_global_metrics_quotes": {
      input: {
        /**
         * Quote currency symbol to convert the metrics into.
         * @minLength 1
         */
        convert?: string;
        /**
         * CoinMarketCap quote currency ID used instead of convert.
         * @minLength 1
         */
        convert_id?: string;
      };
      output: {
        /** CoinMarketCap response status metadata. */
        status: {
          /**
           * Timestamp when CoinMarketCap generated the response.
           * @minLength 1
           */
          timestamp: string;
          /** CoinMarketCap error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCap, or null when the request succeeded. */
          error_message?: string | null;
          /** Time spent by CoinMarketCap processing the request. */
          elapsed: number;
          /** API credits consumed by the request. */
          credit_count: number;
          /** Additional notice returned by CoinMarketCap when present. */
          notice?: string;
        };
        /** Latest global cryptocurrency market metrics. */
        data: {
          /** Number of active cryptocurrencies tracked by CoinMarketCap. */
          active_cryptocurrencies?: number;
          /** Total number of cryptocurrencies tracked by CoinMarketCap. */
          total_cryptocurrencies?: number;
          /** Number of active market pairs. */
          active_market_pairs?: number;
          /** Number of active exchanges. */
          active_exchanges?: number;
          /** Total number of tracked exchanges. */
          total_exchanges?: number;
          /** Ethereum market cap dominance. */
          eth_dominance?: number;
          /** Bitcoin market cap dominance. */
          btc_dominance?: number;
          /** Ethereum market cap dominance reported for yesterday. */
          eth_dominance_yesterday?: number;
          /** Bitcoin market cap dominance reported for yesterday. */
          btc_dominance_yesterday?: number;
          /** Mapping of conversion currency to quote metrics. */
          quote: Record<string, {
              /** Latest converted price. */
              price?: number | null;
              /** Rolling 24-hour traded volume. */
              volume_24h?: number | null;
              /** Percentage change of the 24-hour traded volume. */
              volume_change_24h?: number | null;
              /** Percentage price change over the past hour. */
              percent_change_1h?: number | null;
              /** Percentage price change over the past 24 hours. */
              percent_change_24h?: number | null;
              /** Percentage price change over the past 7 days. */
              percent_change_7d?: number | null;
              /** Percentage price change over the past 30 days. */
              percent_change_30d?: number | null;
              /** Percentage price change over the past 60 days. */
              percent_change_60d?: number | null;
              /** Percentage price change over the past 90 days. */
              percent_change_90d?: number | null;
              /** Current market capitalization. */
              market_cap?: number | null;
              /** Percentage dominance of the total market capitalization. */
              market_cap_dominance?: number | null;
              /** Fully diluted market capitalization. */
              fully_diluted_market_cap?: number | null;
              /** Total value locked when available. */
              tvl?: number | null;
              /** Timestamp of the returned quote. */
              last_updated?: string | null;
              [key: string]: unknown;
            }>;
          /** Timestamp when the global metrics were updated. */
          last_updated?: string;
        };
      };
    };
    /** Retrieve the latest cryptocurrency listings ordered by CoinMarketCap ranking and filters. */
    "coinmarketcap.list_latest_cryptocurrency_listings": {
      input: {
        /**
         * 1-based offset of the first item to return.
         * @minimum 1
         */
        start?: number;
        /**
         * Maximum number of assets to return.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Minimum asset price filter.
         * @minimum 0
         */
        price_min?: number;
        /**
         * Maximum asset price filter.
         * @minimum 0
         */
        price_max?: number;
        /**
         * Minimum market capitalization filter.
         * @minimum 0
         */
        market_cap_min?: number;
        /**
         * Maximum market capitalization filter.
         * @minimum 0
         */
        market_cap_max?: number;
        /**
         * Minimum 24-hour traded volume filter.
         * @minimum 0
         */
        volume_24h_min?: number;
        /**
         * Maximum 24-hour traded volume filter.
         * @minimum 0
         */
        volume_24h_max?: number;
        /**
         * Minimum circulating supply filter.
         * @minimum 0
         */
        circulating_supply_min?: number;
        /**
         * Maximum circulating supply filter.
         * @minimum 0
         */
        circulating_supply_max?: number;
        /** Minimum 24-hour percentage change filter. */
        percent_change_24h_min?: number;
        /** Maximum 24-hour percentage change filter. */
        percent_change_24h_max?: number;
        /**
         * Quote currency symbol to convert the listings into.
         * @minLength 1
         */
        convert?: string;
        /**
         * CoinMarketCap quote currency ID used instead of convert.
         * @minLength 1
         */
        convert_id?: string;
        /** Field used to sort the returned listings. */
        sort?: "market_cap" | "price" | "volume_24h" | "percent_change_24h" | "name";
        /** Sort direction used by CoinMarketCap. */
        sort_dir?: "asc" | "desc";
        /** Asset type filter used by CoinMarketCap. */
        cryptocurrency_type?: "all" | "coins" | "tokens";
        /**
         * Comma-separated asset tags to filter by.
         * @minLength 1
         */
        tag?: string;
        /**
         * Comma-separated auxiliary asset fields to include.
         * @minLength 1
         */
        aux?: string;
      };
      output: {
        /** CoinMarketCap response status metadata. */
        status: {
          /**
           * Timestamp when CoinMarketCap generated the response.
           * @minLength 1
           */
          timestamp: string;
          /** CoinMarketCap error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCap, or null when the request succeeded. */
          error_message?: string | null;
          /** Time spent by CoinMarketCap processing the request. */
          elapsed: number;
          /** API credits consumed by the request. */
          credit_count: number;
          /** Additional notice returned by CoinMarketCap when present. */
          notice?: string;
        };
        /** Ordered list of latest cryptocurrency listings. */
        data: Array<{
          /** CoinMarketCap cryptocurrency identifier. */
          id: number;
          /**
           * Asset name.
           * @minLength 1
           */
          name: string;
          /**
           * Asset ticker symbol.
           * @minLength 1
           */
          symbol: string;
          /**
           * Asset slug.
           * @minLength 1
           */
          slug: string;
          /** Current market capitalization rank. */
          cmc_rank?: number;
          /** Number of known market pairs for the asset. */
          num_market_pairs?: number;
          /** Estimated circulating supply. */
          circulating_supply?: number | null;
          /** Reported total supply. */
          total_supply?: number | null;
          /** Reported maximum supply. */
          max_supply?: number | null;
          /** Timestamp when the asset was added to CoinMarketCap. */
          date_added?: string;
          /** Classification tags for the asset. */
          tags?: Array<string>;
          /** Parent platform for token assets when present. */
          platform?: {
            /** CoinMarketCap platform identifier. */
            id: number;
            /**
             * Platform name.
             * @minLength 1
             */
            name: string;
            /**
             * Platform symbol.
             * @minLength 1
             */
            symbol: string;
            /**
             * Platform slug.
             * @minLength 1
             */
            slug: string;
            /**
             * Token contract address on the platform.
             * @minLength 1
             */
            token_address: string;
          } | null;
          /** Mapping of conversion currency to quote metrics. */
          quote: Record<string, {
              /** Latest converted price. */
              price?: number | null;
              /** Rolling 24-hour traded volume. */
              volume_24h?: number | null;
              /** Percentage change of the 24-hour traded volume. */
              volume_change_24h?: number | null;
              /** Percentage price change over the past hour. */
              percent_change_1h?: number | null;
              /** Percentage price change over the past 24 hours. */
              percent_change_24h?: number | null;
              /** Percentage price change over the past 7 days. */
              percent_change_7d?: number | null;
              /** Percentage price change over the past 30 days. */
              percent_change_30d?: number | null;
              /** Percentage price change over the past 60 days. */
              percent_change_60d?: number | null;
              /** Percentage price change over the past 90 days. */
              percent_change_90d?: number | null;
              /** Current market capitalization. */
              market_cap?: number | null;
              /** Percentage dominance of the total market capitalization. */
              market_cap_dominance?: number | null;
              /** Fully diluted market capitalization. */
              fully_diluted_market_cap?: number | null;
              /** Total value locked when available. */
              tvl?: number | null;
              /** Timestamp of the returned quote. */
              last_updated?: string | null;
              [key: string]: unknown;
            }>;
        }>;
      };
    };
  }
}
