import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Luno account balances, optionally filtered by asset code. */
    "luno.get_balances": {
      input: {
        /**
         * The asset codes to include, such as XBT or ETH.
         * @minItems 1
         */
        assets?: Array<string>;
      };
      output: {
        /** The returned account balances. */
        balance: Array<{
          /** The account identifier. */
          account_id?: string;
          /** The account asset code. */
          asset?: string;
          /** The total balance as a decimal string. */
          balance?: string;
          /** The account label. */
          name?: string;
          /** The reserved balance as a decimal string. */
          reserved?: string;
          /** The unconfirmed balance as a decimal string. */
          unconfirmed?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one Luno order by its order identifier. */
    "luno.get_order": {
      input: {
        /**
         * The Luno order identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The order identifier. */
        order_id?: string;
        /** The order market pair. */
        pair?: string;
        /** The current order state. */
        state?: string;
        /** The order side or type. */
        type?: string;
        /** A Unix timestamp in milliseconds. */
        creation_timestamp?: number;
        /** A Unix timestamp in milliseconds. */
        completed_timestamp?: number;
        /** A Unix timestamp in milliseconds. */
        expiration_timestamp?: number;
        /** The base amount as a decimal string. */
        base?: string;
        /** The counter amount as a decimal string. */
        counter?: string;
        /** The base-currency fee as a decimal string. */
        fee_base?: string;
        /** The counter-currency fee as a decimal string. */
        fee_counter?: string;
        /** The limit price as a decimal string. */
        limit_price?: string;
        /** The limit volume as a decimal string. */
        limit_volume?: string;
        /** The order time-in-force policy. */
        time_in_force?: string;
        [key: string]: unknown;
      };
    };
    /** Get the latest Luno ticker indicators for one currency pair. */
    "luno.get_ticker": {
      input: {
        /**
         * The Luno market pair, such as XBTZAR or ETHXBT.
         * @minLength 1
         */
        pair: string;
      };
      output: {
        /** The lowest current ask price as a decimal string. */
        ask?: string;
        /** The highest current bid price as a decimal string. */
        bid?: string;
        /** The latest trade price as a decimal string. */
        last_trade?: string;
        /** The market currency pair. */
        pair?: string;
        /** The rolling 24-hour traded volume as a decimal string. */
        rolling_24_hour_volume?: string;
        /** The current market status. */
        status?: string;
        /** A Unix timestamp in milliseconds. */
        timestamp?: number;
        [key: string]: unknown;
      };
    };
    /** Get the best 100 aggregated Luno bid and ask levels for one currency pair. */
    "luno.get_top_order_book": {
      input: {
        /**
         * The Luno market pair, such as XBTZAR or ETHXBT.
         * @minLength 1
         */
        pair: string;
      };
      output: {
        /** Ask levels sorted by ascending price. */
        asks: Array<{
          /** A decimal value represented as a string to preserve precision. */
          price: string;
          /** A decimal value represented as a string to preserve precision. */
          volume: string;
        }>;
        /** Bid levels sorted by descending price. */
        bids: Array<{
          /** A decimal value represented as a string to preserve precision. */
          price: string;
          /** A decimal value represented as a string to preserve precision. */
          volume: string;
        }>;
        /** A Unix timestamp in milliseconds. */
        timestamp: number;
      };
    };
    /** List recently placed Luno orders with optional state, pair, and time filters. */
    "luno.list_orders": {
      input: {
        /** The Luno order state. */
        state?: "PENDING" | "COMPLETE";
        /**
         * The Luno market pair, such as XBTZAR or ETHXBT.
         * @minLength 1
         */
        pair?: string;
        /** A Unix timestamp in milliseconds. */
        created_before?: number;
        /**
         * The maximum number of orders to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The returned Luno orders. */
        orders: Array<{
          /** The order identifier. */
          order_id?: string;
          /** The order market pair. */
          pair?: string;
          /** The current order state. */
          state?: string;
          /** The order side or type. */
          type?: string;
          /** A Unix timestamp in milliseconds. */
          creation_timestamp?: number;
          /** A Unix timestamp in milliseconds. */
          completed_timestamp?: number;
          /** A Unix timestamp in milliseconds. */
          expiration_timestamp?: number;
          /** The base amount as a decimal string. */
          base?: string;
          /** The counter amount as a decimal string. */
          counter?: string;
          /** The base-currency fee as a decimal string. */
          fee_base?: string;
          /** The counter-currency fee as a decimal string. */
          fee_counter?: string;
          /** The limit price as a decimal string. */
          limit_price?: string;
          /** The limit volume as a decimal string. */
          limit_volume?: string;
          /** The order time-in-force policy. */
          time_in_force?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List up to 100 recent public Luno trades for one currency pair. */
    "luno.list_recent_trades": {
      input: {
        /**
         * The Luno market pair, such as XBTZAR or ETHXBT.
         * @minLength 1
         */
        pair: string;
        /** Only return trades after this Unix timestamp in milliseconds, which cannot be more than 24 hours ago. */
        since?: number;
      };
      output: {
        /** The returned market trades. */
        trades: Array<{
          /** The trade price as a decimal string. */
          price?: string;
          /** The market trade sequence number. */
          sequence?: number;
          /** A Unix timestamp in milliseconds. */
          timestamp?: number;
          /** The trade volume as a decimal string. */
          volume?: string;
          /** Whether the market taker was buying. */
          is_buy?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List latest Luno ticker indicators for active currency pairs. */
    "luno.list_tickers": {
      input: {
        /**
         * The market pairs to include. Omit to return all active pairs.
         * @minItems 1
         */
        pairs?: Array<string>;
      };
      output: {
        /** The returned market tickers. */
        tickers: Array<{
          /** The lowest current ask price as a decimal string. */
          ask?: string;
          /** The highest current bid price as a decimal string. */
          bid?: string;
          /** The latest trade price as a decimal string. */
          last_trade?: string;
          /** The market currency pair. */
          pair?: string;
          /** The rolling 24-hour traded volume as a decimal string. */
          rolling_24_hour_volume?: string;
          /** The current market status. */
          status?: string;
          /** A Unix timestamp in milliseconds. */
          timestamp?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
