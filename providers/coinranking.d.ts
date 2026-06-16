import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get detailed information for a single coin from Coinranking. */
    "coinranking.get_coin_details": {
      input: {
        /**
         * Coin UUID returned by Coinranking.
         * @minLength 1
         */
        uuid: string;
        /**
         * Reference currency UUID used to price the returned coin.
         * @minLength 1
         */
        referenceCurrencyUuid?: string;
        /** Time period used for change and historical market data. */
        timePeriod?: "1h" | "3h" | "12h" | "24h" | "7d" | "30d" | "3m" | "1y" | "3y" | "5y";
      };
      output: {
        /** Detailed coin payload returned by Coinranking. */
        coin: Record<string, unknown>;
      };
    };
    /** Get historical price points for a single coin from Coinranking. */
    "coinranking.get_coin_price_history": {
      input: {
        /**
         * Coin UUID returned by Coinranking.
         * @minLength 1
         */
        uuid: string;
        /**
         * Reference currency UUID used to price the historical points.
         * @minLength 1
         */
        referenceCurrencyUuid?: string;
        /** Time period used for change and historical market data. */
        timePeriod?: "1h" | "3h" | "12h" | "24h" | "7d" | "30d" | "3m" | "1y" | "3y" | "5y";
      };
      output: {
        /**
         * Price change percentage over the requested time period.
         * @minLength 1
         */
        change: string;
        /** Historical price points for the coin. */
        history: Array<{
          /**
           * Historical price returned by Coinranking.
           * @minLength 1
           */
          price?: string;
          /** Unix timestamp for the historical price point. */
          timestamp: number;
        }>;
      };
    };
    /** Get global cryptocurrency market statistics from Coinranking. */
    "coinranking.get_global_stats": {
      input: Record<string, never>;
      output: {
        /** Global market statistics returned by Coinranking. */
        stats: Record<string, unknown>;
      };
    };
    /** List reference currencies supported by Coinranking. */
    "coinranking.get_reference_currencies": {
      input: Record<string, never>;
      output: {
        /** Reference currencies returned by Coinranking. */
        currencies: Array<{
          /**
           * Unique identifier of the reference currency.
           * @minLength 1
           */
          uuid?: string;
          /**
           * Reference currency type returned by Coinranking.
           * @minLength 1
           */
          type?: string;
          /**
           * Reference currency symbol.
           * @minLength 1
           */
          symbol?: string;
          /**
           * Reference currency display name.
           * @minLength 1
           */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List coins from Coinranking with optional filtering, sorting, and pagination. */
    "coinranking.list_coins": {
      input: {
        /**
         * Maximum number of coins to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of leading results to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search string used to filter the returned coins.
         * @minLength 1
         */
        search?: string;
        /** Field used to sort the returned coins. */
        orderBy?: "marketCap" | "price" | "change" | "24hVolume" | "listedAt";
        /** Sort direction applied to the ordered result set. */
        orderDirection?: "asc" | "desc";
        /**
         * Reference currency UUID used to price the returned coins.
         * @minLength 1
         */
        referenceCurrencyUuid?: string;
        /** Time period used for change and historical market data. */
        timePeriod?: "1h" | "3h" | "12h" | "24h" | "7d" | "30d" | "3m" | "1y" | "3y" | "5y";
      };
      output: {
        /** List statistics returned by Coinranking. */
        stats: {
          /** Total number of matching coins when present. */
          total?: number;
          [key: string]: unknown;
        };
        /** Ordered list of coins returned by Coinranking. */
        coins: Array<{
          /**
           * Unique identifier of the coin.
           * @minLength 1
           */
          uuid?: string;
          /**
           * Ticker symbol of the coin.
           * @minLength 1
           */
          symbol?: string;
          /**
           * Name of the coin.
           * @minLength 1
           */
          name?: string;
          /**
           * Current price returned by Coinranking.
           * @minLength 1
           */
          price?: string;
          /**
           * Market capitalization returned by Coinranking.
           * @minLength 1
           */
          marketCap?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Coinranking suggestions by keyword and return grouped entity matches. */
    "coinranking.search_suggestions": {
      input: {
        /**
         * Search query used for Coinranking suggestions.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** Grouped search suggestion payload returned by Coinranking. */
        results: {
          /** Coin suggestions matched by the query. */
          coins: Array<{
            /**
             * Unique identifier returned by Coinranking.
             * @minLength 1
             */
            uuid?: string;
            /**
             * Display name returned by Coinranking.
             * @minLength 1
             */
            name?: string;
            /**
             * Ticker or short symbol returned by Coinranking.
             * @minLength 1
             */
            symbol?: string;
            /**
             * String price returned by Coinranking when present.
             * @minLength 1
             */
            price?: string;
            /**
             * Icon URL returned by Coinranking when present.
             * @minLength 1
             */
            iconUrl?: string;
            [key: string]: unknown;
          }>;
          /** Exchange suggestions matched by the query. */
          exchanges: Array<Record<string, unknown>>;
          /** Market suggestions matched by the query. */
          markets: Array<Record<string, unknown>>;
          /** Fiat currency suggestions matched by the query. */
          fiat: Array<Record<string, unknown>>;
        };
      };
    };
  }
}
