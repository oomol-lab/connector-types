import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Stop all active MetaTraderAPI sessions for the authenticated account. */
    "metatraderapi.close_all_sessions": {
      input: Record<string, never>;
      output: {
        /** The provider response for the session operation. */
        result: Record<string, unknown>;
      };
    };
    /** Get balance, equity, margin, leverage, currency, and other account information. */
    "metatraderapi.get_account_info": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The current MetaTrader account information. */
        accountInfo: {
          /** The current account balance as a decimal string. */
          balance?: string;
          /** The current account equity as a decimal string. */
          equity?: string;
          /** The margin currently in use as a decimal string. */
          margin?: string;
          /** The currently available margin as a decimal string. */
          free_margin?: string;
          /** The current margin level as a decimal string, when available. */
          margin_level?: string | null;
          /** The account leverage. */
          leverage?: number;
          /** The account currency code. */
          currency?: string;
          /**
           * The current broker server time.
           * @format date-time
           */
          server_time?: string;
          /** The current account profit as a decimal string. */
          profit?: string;
          /** The current account credit as a decimal string. */
          credit?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current equity, balance, profit, and currency for a session. */
    "metatraderapi.get_equity": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The current MetaTrader equity information. */
        equity: {
          /** The current account equity as a decimal string. */
          equity?: string;
          /** The current account balance as a decimal string. */
          balance?: string;
          /** The current account profit as a decimal string. */
          profit?: string;
          /** The account currency code. */
          currency?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current margin and free-margin information for a session. */
    "metatraderapi.get_margin": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The current MetaTrader margin information. */
        margin: {
          /** The margin currently in use as a decimal string. */
          margin?: string;
          /** The currently available margin as a decimal string. */
          free_margin?: string;
          /** The current margin level as a decimal string, when available. */
          margin_level?: string | null;
          /** The account currency code. */
          currency?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the activity, health, and MetaTrader connection status of a session. */
    "metatraderapi.get_session_status": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The current MetaTraderAPI session status. */
        status: {
          /** The provider session identifier. */
          session_id?: string;
          /** Whether the session is active. */
          is_active?: boolean;
          /** Whether the session is healthy. */
          is_healthy?: boolean;
          /** Whether the session is connected to the broker. */
          mt5_connected?: boolean;
          /** The current MetaTrader subprocess status. */
          subprocess_status?: string;
          /** The MetaTrader subprocess identifier, when available. */
          subprocess_pid?: number | null;
          /**
           * When the session was last active.
           * @format date-time
           */
          last_activity?: string;
          /** The latest connection error, when present. */
          connection_error?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get current prices, spread, contract size, and volume limits for a symbol. */
    "metatraderapi.get_symbol": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
        /**
         * The trading symbol name to inspect, such as EURUSD.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** Detailed information about a trading symbol. */
        symbol: {
          /** The symbol name. */
          symbol?: string;
          /** The symbol description. */
          description?: string;
          /** The current bid price. */
          bid?: number;
          /** The current ask price. */
          ask?: number;
          /** The current spread in points. */
          spread?: number;
          /** The number of decimal places used by the symbol. */
          digits?: number;
          /** The symbol contract size. */
          trade_contract_size?: number;
          /** The minimum supported trade volume. */
          min_volume?: number;
          /** The maximum supported trade volume. */
          max_volume?: number;
          /** The supported increment between trade volumes. */
          volume_step?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List executed deals from the MetaTrader account history. */
    "metatraderapi.list_deals": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
        /**
         * The first date to include, in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * The last date to include, in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** The number of days before today to include when dateFrom is not provided. */
        daysBack?: number;
      };
      output: {
        /** The executed deals returned by MetaTraderAPI. */
        deals: Array<{
          /** The deal ticket. */
          ticket?: number;
          /** The related order ticket. */
          order?: number;
          /** The deal execution time. */
          time?: string;
          /** The deal type. */
          type?: string;
          /** The deal entry direction. */
          entry?: string;
          /** The MetaTrader magic number associated with the deal. */
          magic?: number;
          /** The related position identifier. */
          position_id?: number;
          /** The reason the deal was created. */
          reason?: string;
          /** The executed volume. */
          volume?: number;
          /** The execution price. */
          price?: number;
          /** The deal commission. */
          commission?: number;
          /** The deal swap amount. */
          swap?: number;
          /** The deal profit or loss. */
          profit?: number;
          /** The traded symbol. */
          symbol?: string;
          /** The deal comment. */
          comment?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List historical MetaTrader orders, including canceled and expired orders. */
    "metatraderapi.list_history_orders": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
        /**
         * The first date to include, in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * The last date to include, in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** The number of days before today to include when dateFrom is not provided. */
        daysBack?: number;
      };
      output: {
        /** The historical orders returned by MetaTraderAPI. */
        orders: Array<{
          /** The order ticket. */
          ticket?: number;
          /** When the order was created. */
          time_setup?: string;
          /** When the order completed. */
          time_done?: string;
          /** The order type. */
          type?: string;
          /** The final order state. */
          state?: string;
          /** The MetaTrader magic number associated with the order. */
          magic?: number;
          /** The related position identifier. */
          position_id?: number;
          /** The reason the order was created. */
          reason?: string;
          /** The order's initial volume. */
          volume_initial?: number;
          /** The order's remaining volume. */
          volume_current?: number;
          /** The requested opening price. */
          price_open?: number;
          /** The current or final price. */
          price_current?: number;
          /** The stop-loss price, when set. */
          sl?: number | null;
          /** The take-profit price, when set. */
          tp?: number | null;
          /** The traded symbol. */
          symbol?: string;
          /** The order comment. */
          comment?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List pending orders for a MetaTraderAPI session. */
    "metatraderapi.list_orders": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The pending orders returned by MetaTraderAPI. */
        orders: Array<Record<string, unknown>>;
      };
    };
    /** List current open positions for a MetaTraderAPI session. */
    "metatraderapi.list_positions": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The open positions returned by MetaTraderAPI. */
        positions: Array<Record<string, unknown>>;
      };
    };
    /** List all active MetaTraderAPI sessions for the authenticated account. */
    "metatraderapi.list_sessions": {
      input: Record<string, never>;
      output: {
        /** The active sessions available to the authenticated MetaTraderAPI account. */
        sessions: Array<{
          /** The provider session identifier. */
          session_id?: string;
          /** The connected MetaTrader account identifier. */
          account_id?: string;
          /** The connected broker server. */
          server?: string;
          /** The connected MetaTrader platform. */
          platform?: string;
          /** Whether the session is active. */
          is_active?: boolean;
          /** Whether the session is healthy. */
          is_healthy?: boolean;
          /** When the session started. */
          started_at?: string;
          /** When the session was last active. */
          last_activity?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List trading symbols available to a MetaTraderAPI session. */
    "metatraderapi.list_symbols": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The symbol names returned by MetaTraderAPI. */
        symbols: Array<string>;
      };
    };
    /** Ping a MetaTraderAPI session to check whether it is responsive. */
    "metatraderapi.ping_session": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The MetaTraderAPI session ping result. */
        ping: {
          /** Whether the ping succeeded. */
          success?: boolean;
          /** The provider ping message. */
          message?: string;
          /** The provider timestamp for the ping response. */
          timestamp?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Start a MetaTraderAPI session connected to an MT4 or MT5 trading account. */
    "metatraderapi.start_session": {
      input: {
        /**
         * The MetaTrader trading account login identifier.
         * @minLength 1
         * @maxLength 50
         */
        accountId: string;
        /**
         * The password for the MetaTrader trading account.
         * @minLength 1
         * @maxLength 100
         */
        password: string;
        /**
         * The broker server name or address used by the trading account.
         * @minLength 1
         * @maxLength 100
         */
        server: string;
        /**
         * The MetaTrader platform used by the trading account.
         * @default "MT5"
         */
        platform: "MT4" | "MT5";
      };
      output: {
        /** A MetaTraderAPI session returned after connection. */
        session: {
          /** The provider record identifier for the session. */
          id?: number;
          /** The provider session identifier. */
          session_id?: string;
          /**
           * When the session started.
           * @format date-time
           */
          started_at?: string;
          /**
           * When the session was last active.
           * @format date-time
           */
          last_activity?: string;
          /**
           * When the session ended, when available.
           * @format date-time
           */
          ended_at?: string | null;
          /** Whether the session is active. */
          is_active?: boolean;
          /** The MetaTrader subprocess identifier, when available. */
          subprocess_pid?: number | null;
          /** The current MetaTrader subprocess status. */
          subprocess_status?: string;
          /** Whether the session is connected to the broker. */
          mt5_connected?: boolean;
          /** The MetaTrader account connected to a session. */
          account_info?: {
            /** The provider record identifier for the account. */
            id?: number;
            /** The MetaTrader account identifier. */
            account_id?: string;
            /** The account broker name. */
            broker?: string;
            /** The MetaTrader platform used by the account. */
            platform?: "MT4" | "MT5";
            /** The broker server used by the account. */
            server?: string;
            /** Whether the account is active. */
            is_active?: boolean;
            /**
             * When the provider account record was created.
             * @format date-time
             */
            created_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Stop one active MetaTraderAPI session. */
    "metatraderapi.stop_session": {
      input: {
        /**
         * The MetaTraderAPI session identifier returned by start_session.
         * @minLength 1
         * @pattern \S
         */
        sessionId: string;
      };
      output: {
        /** The provider response for the session operation. */
        result: Record<string, unknown>;
      };
    };
  }
}
