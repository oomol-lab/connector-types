import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Longbridge account cash balances visible to the connected OAuth user. */
    "longbridge.list_account_cash": {
      input: {
        /**
         * The currency code to send to Longbridge, such as USD or HKD.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
      };
      output: {
        /** The account cash balance records returned by Longbridge. */
        balances: Array<{
          /** The account currency for this balance record. */
          currency?: string;
          /** The total cash amount returned by Longbridge. */
          total_cash?: string;
          /** The net asset amount returned by Longbridge. */
          net_assets?: string;
          /** The buying power returned by Longbridge. */
          buy_power?: string;
          /** Per-currency Longbridge cash detail records. */
          cash_infos?: Array<{
            /** The currency for this cash detail record. */
            currency?: string;
            /** The withdrawable cash amount returned by Longbridge. */
            withdraw_cash?: string;
            /** The available cash amount returned by Longbridge. */
            available_cash?: string;
            /** The frozen cash amount returned by Longbridge. */
            frozen_cash?: string;
            /** The settling cash amount returned by Longbridge. */
            settling_cash?: string;
            /** The redemption cash amount returned by Longbridge. */
            redemption_cash?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge tradable securities for a market and category. */
    "longbridge.list_securities": {
      input: {
        /** The Longbridge market code. */
        market: "US" | "HK";
        /**
         * The Longbridge security category filter, such as Overnight for US overnight-tradable securities.
         * @minLength 1
         * @pattern \S
         */
        category: string;
      };
      output: {
        /** The tradable securities returned by Longbridge. */
        securities: Array<{
          /** The Longbridge security symbol. */
          symbol?: string;
          /** The Simplified Chinese security name returned by Longbridge. */
          name_cn?: string;
          /** The Traditional Chinese security name returned by Longbridge. */
          name_hk?: string;
          /** The English security name returned by Longbridge. */
          name_en?: string;
          [key: string]: unknown;
        }>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge stock positions visible to the connected OAuth user. */
    "longbridge.list_stock_positions": {
      input: {
        /**
         * The Longbridge security symbols to filter by.
         * @minItems 1
         * @maxItems 100
         */
        symbols?: Array<string>;
      };
      output: {
        /** The stock position groups returned by Longbridge. */
        positionGroups: Array<{
          /** The Longbridge account channel for this group. */
          account_channel?: string;
          /** The stock positions in this account channel. */
          stock_info?: Array<{
            /** The Longbridge security symbol. */
            symbol?: string;
            /** The security name returned by Longbridge. */
            symbol_name?: string;
            /** The position currency. */
            currency?: string;
            /** The position quantity returned by Longbridge. */
            quantity?: string;
            /** The available quantity returned by Longbridge. */
            available_quantity?: string;
            /** The cost price returned by Longbridge. */
            cost_price?: string;
            /** The market code returned by Longbridge. */
            market?: string;
            /** The initial quantity returned by Longbridge. */
            init_quantity?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
  }
}
