import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Minerstat coin profitability and market data, optionally filtered by ticker or mining algorithm. */
    "minerstat.list_coins": {
      input: {
        /**
         * Comma-separated coin tickers to return, for example BTC,BCH,BSV.
         * @minLength 1
         */
        list?: string;
        /**
         * Comma-separated mining algorithms to return, for example SHA-256,Scrypt.
         * @minLength 1
         */
        algo?: string;
      };
      output: {
        /** Coin records returned by Minerstat. */
        coins: Array<{
          /** The unique Minerstat coin identifier. */
          id?: string;
          /** The coin ticker symbol. */
          coin?: string;
          /** The coin name. */
          name?: string;
          /** The Minerstat record type, such as coin or pool. */
          type?: string;
          /** The mining algorithm used by the coin. */
          algorithm?: string;
          /** The network hashrate in hashes per second, or null when unavailable. */
          network_hashrate?: number | null;
          /** The current mining difficulty, or null when unavailable. */
          difficulty?: number | null;
          /** The estimated reward for one hash per second over one hour, or null when unavailable. */
          reward?: number | null;
          /** The reward currency unit, or null when unavailable. */
          reward_unit?: string | null;
          /** The block reward amount, or null when unavailable. */
          reward_block?: number | null;
          /** The current price in US dollars, or null when unavailable. */
          price?: number | null;
          /** The last 24-hour trading volume in US dollars, or null when unavailable. */
          volume?: number | null;
          /** The Unix timestamp when Minerstat last updated the coin record. */
          updated?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Minerstat GPU and ASIC benchmark data, optionally filtered by hardware type or brand. */
    "minerstat.list_hardware": {
      input: {
        /** The hardware category to return. */
        type?: "gpu" | "asic";
        /**
         * The hardware brand or manufacturer to return, for example nvidia or antminer.
         * @minLength 1
         */
        brand?: string;
      };
      output: {
        /** Mining hardware records returned by Minerstat. */
        hardware: Array<{
          /** The unique Minerstat hardware identifier. */
          id?: string;
          /** The mining hardware model name. */
          name?: string;
          /** The Minerstat URL slug for the hardware model. */
          url?: string;
          /** The hardware category, such as gpu or asic. */
          type?: string;
          /** The hardware brand or manufacturer. */
          brand?: string;
          /** Benchmark data keyed by mining algorithm name. */
          algorithms?: Record<string, {
              /** The estimated algorithm hashrate in hashes per second, or null when unavailable. */
              hashrate?: number | null;
              /** The estimated algorithm power consumption in watts, or null when unavailable. */
              power?: number | null;
              [key: string]: unknown;
            }>;
          /** Provider-defined hardware specifications such as clocks, memory, release date, or power. */
          specs?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Minerstat mining pools and supported-coin terms, optionally filtered by coin or pool type. */
    "minerstat.list_pools": {
      input: {
        /**
         * The supported coin symbol to return, for example BTC or ETH.
         * @minLength 1
         */
        coin?: string;
        /**
         * The pool category to return, for example multipool.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** Mining pool records returned by Minerstat. */
        pools: Array<{
          /** The unique Minerstat pool identifier. */
          id?: string;
          /** The mining pool name. */
          name?: string;
          /** The Minerstat URL slug for the pool. */
          url?: string;
          /** The pool description. */
          description?: string;
          /** The pool website URL. */
          website?: string;
          /** The year the pool was founded. */
          founded?: number | string;
          /** The pool category, such as pool or multipool. */
          type?: string;
          /** Pool terms keyed by supported coin symbol. */
          coins?: Record<string, {
              /** The mining algorithm used for the coin, or null when unavailable. */
              algorithm?: string | null;
              /** The minimum payout threshold, or null when unavailable. */
              payoutThreshold?: string | number | null;
              /** The pool reward distribution method, or null when unavailable. */
              rewardMethod?: string | null;
              /** The pool fee, or null when unavailable. */
              fee?: string | number | null;
              /** Whether the pool supports anonymous mining for the coin. */
              anonymous?: boolean | null;
              /** Whether the pool requires registration for the coin. */
              registration?: boolean | null;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
