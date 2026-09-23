import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get account assets, cash, buying power and margin balances in the requested currency. */
    "futunn.get_account_funds": {
      input: {
        /**
         * Trading account ID returned by list_accounts, kept as a decimal string.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /**
         * Display currency, for example USD or HKD; ignored by account types that do not support conversion.
         * @minLength 1
         */
        currency: string;
      };
      output: {
        /** Account balances; monetary amounts retain upstream decimal strings. */
        funds: {
          /** Total net assets. */
          total_assets?: string;
          /** Cash balance. */
          cash?: string;
          /** Maximum buying power. */
          power?: string;
          /** Display currency. */
          currency?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get current-day capital inflow and outflow distribution by order size. */
    "futunn.get_capital_distribution": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** Cumulative intraday inflow and outflow in local currency. */
        distribution: {
          /** Inflow for super orders. */
          capital_in_super?: number;
          /** Inflow for big orders. */
          capital_in_big?: number;
          /** Inflow for mid orders. */
          capital_in_mid?: number;
          /** Inflow for small orders. */
          capital_in_small?: number;
          /** Outflow for super orders. */
          capital_out_super?: number;
          /** Outflow for big orders. */
          capital_out_big?: number;
          /** Outflow for mid orders. */
          capital_out_mid?: number;
          /** Outflow for small orders. */
          capital_out_small?: number;
          /** Update timestamp in milliseconds. */
          update_time?: number;
          [key: string]: unknown;
        } | null;
        /** Whether the provider explicitly reported no_data for a valid security. */
        noData: boolean;
      };
    };
    /** Get intraday capital flow by order size and trading session. */
    "futunn.get_capital_flow": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
        /** Trading session; default NORMAL. */
        section?: "NORMAL" | "FULL" | "PREMARKET" | "AFTERHOURS";
      };
      output: {
        /** Time-ordered capital flow observations. */
        flows: Array<{
          /** Observation timestamp in milliseconds. */
          capital_flow_item_time?: number;
          /** Net inflow in the security local currency; negative means outflow. */
          in_flow?: number;
          /** Net inflow from super-large orders. */
          super_in_flow?: number;
          /** Net inflow from large orders. */
          big_in_flow?: number;
          /** Net inflow from medium orders. */
          mid_in_flow?: number;
          /** Net inflow from small orders. */
          sml_in_flow?: number;
          [key: string]: unknown;
        }>;
        /** Last valid data timestamp in milliseconds. */
        lastValidTime: number | null;
      };
    };
    /** Get daily, weekly or monthly capital flows; move end earlier to retrieve preceding data. */
    "futunn.get_capital_flow_history": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
        /** Aggregation period; default DAY. */
        periodType?: "DAY" | "WEEK" | "MONTH";
        /**
         * Inclusive date in YYYY-MM-DD format.
         * @format date
         */
        start?: string;
        /**
         * Inclusive date in YYYY-MM-DD format.
         * @format date
         */
        end?: string;
        /**
         * Maximum observations; default 365, maximum 1000.
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
      };
      output: {
        /** Time-ordered capital flow observations. */
        flows: Array<{
          /** Observation timestamp in milliseconds. */
          capital_flow_item_time?: number;
          /** Net inflow in the security local currency; negative means outflow. */
          in_flow?: number;
          /** Net inflow from super-large orders. */
          super_in_flow?: number;
          /** Net inflow from large orders. */
          big_in_flow?: number;
          /** Net inflow from medium orders. */
          mid_in_flow?: number;
          /** Net inflow from small orders. */
          sml_in_flow?: number;
          [key: string]: unknown;
        }>;
        /** Pagination metadata from the response envelope; null when omitted. */
        pagination: {
          /** Whether more results are available. */
          has_more?: boolean;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get financial statements or key metrics by reporting period. */
    "futunn.get_financial_statements": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
        /** 1=income statement, 2=balance sheet, 3=cash flow, 4=key metrics; default 1. */
        statementType?: 1 | 2 | 3 | 4;
        /** Financial period code: 1=Q1, 2=H1, 3=Q3, 4=Q4, 5=cumulative H1, 6=cumulative Q3, 7=annual, 10=latest; defaults vary by endpoint. */
        financialType?: number;
        /** Report currency code, for example USD or CNY; omit for the native currency. */
        currencyCode?: string;
        /** Opaque next-page cursor; omit for the first page. */
        nextKey?: string;
        /**
         * Page size; default 10, maximum 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Financial reports; empty when no data is available. */
        reports: Array<{
          /** Financial reporting period. */
          period_text?: string;
          /** Report currency code, for example USD or CNY; omit for the native currency. */
          currency_code?: string;
          /** Financial statement fields. */
          item_list?: Array<{
            /** Financial field ID. */
            field_id?: number;
            /** Financial field display name. */
            display_name?: string;
            /** Reported financial value. */
            data?: number;
            /** amount for monetary values or percent for percentages. */
            value_type?: string;
            /** Year-over-year percentage change. */
            yoy?: number;
            /** Quarter-over-quarter percentage change. */
            qoq?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata from the response envelope; null when omitted. */
        pagination: {
          /** Whether more results are available. */
          has_more?: boolean;
          /** Opaque next-page cursor; omit for the first page. */
          next_key?: string;
          [key: string]: unknown;
        } | null;
        /** Whether the provider explicitly reported no_data for a valid security. */
        noData: boolean;
      };
    };
    /** Get a page of historical candlesticks, retaining the next-page timestamp and volume precision. */
    "futunn.get_history_kline": {
      input: {
        /**
         * Security code with market prefix, for example US.AAPL or HK.00700.
         * @minLength 1
         */
        symbol: string;
        /**
         * Date in YYYY-MM-DD format in the market timezone.
         * @format date
         */
        start?: string;
        /**
         * End date in YYYY-MM-DD format, or the previous nextTime converted to a string for pagination.
         * @minLength 1
         */
        end: string;
        /** Candlestick interval: 1=1min, 2=day, 3=week, 4=month, 5=year, 6=5min, 7=15min, 8=30min, 9=60min. Default 2. */
        ktype?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        /** Price adjustment: 0=none, 1=forward (default), 2=backward. */
        autype?: 0 | 1 | 2;
        /**
         * Number of bars requested; default and maximum 370.
         * @minimum 1
         * @maximum 370
         */
        num?: number;
        /** Extended session: 0=default, 1=US pre/after market, 2=US overnight. */
        extendedTime?: 0 | 1 | 2;
      };
      output: {
        /** Historical candlesticks in upstream order. */
        bars: Array<{
          /** Candlestick timestamp in milliseconds. */
          time_key?: number;
          /** Opening price. */
          open?: number;
          /** Closing price. */
          close?: number;
          /** Highest price. */
          high?: number;
          /** Lowest price. */
          low?: number;
          /** Trading volume before applying volumePrecision. */
          volume?: number;
          [key: string]: unknown;
        }>;
        /** Next page end timestamp in milliseconds, or null when absent. */
        nextTime: number | null;
        /** Divide bar volumes by 10 to this power; null when the provider omits precision. */
        volumePrecision: number | null;
      };
    };
    /** Get real-time market snapshots and valuation metrics for up to 400 securities. */
    "futunn.get_market_snapshot": {
      input: {
        /**
         * Security codes to query.
         * @minItems 1
         * @maxItems 400
         */
        symbols: Array<string>;
      };
      output: {
        /** Market snapshots with prices, volume, valuation and category-specific fields. */
        snapshots: Array<{
          /**
           * Security code with market prefix, for example US.AAPL or HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Latest traded price. */
          last_price?: number;
          /** Quote update timestamp in milliseconds. */
          update_time?: number;
          /** Trading volume in shares or contracts. */
          volume?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get trading-session states for a batch of securities. */
    "futunn.get_market_state": {
      input: {
        /**
         * Securities to query, up to 400.
         * @minItems 1
         * @maxItems 400
         */
        symbols: Array<string>;
        /** Include US pre-market and after-hours sessions. */
        includePreAfterMarket?: boolean;
        /** Include US overnight sessions. */
        includeOvernight?: boolean;
        /** Expand cryptocurrency records by broker. */
        includeCryptoBrokers?: boolean;
      };
      output: {
        /** States matched to requested securities. */
        states: Array<{
          /**
           * Security code including market prefix, for example HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Market state such as open, closed or pre-market. */
          market_state?: string;
          /** Trading session details. */
          trade_section?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get historical employee counts and per-employee financial metrics. */
    "futunn.get_operational_efficiency": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
        /**
         * Page size; default 10, maximum 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** 7=annual reports (default), 102=all cumulative quarterly reports. */
        financialType?: 7 | 102;
        /** Report currency code, for example USD or CNY; omit for the native currency. */
        currencyCode?: string;
        /** Opaque next-page cursor; omit for the first page. */
        nextKey?: string;
      };
      output: {
        /** Efficiency metrics in the reported currency. */
        efficiency: {
          /** Report currency code, for example USD or CNY; omit for the native currency. */
          currency_code?: string;
          /** Reporting-period employee counts and per-employee metrics. */
          item_list?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata from the response envelope; null when omitted. */
        pagination: {
          /** Whether more results are available. */
          has_more?: boolean;
          /** Opaque next-page cursor; omit for the first page. */
          next_key?: string;
          [key: string]: unknown;
        } | null;
        /** Whether the provider explicitly reported no_data for a valid security. */
        noData: boolean;
      };
    };
    /** Get details of fewer than 50 orders from the same exchange. */
    "futunn.get_order_details": {
      input: {
        /**
         * Trading account ID as a decimal string.
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /** Exchange shared by all requested orders. */
        exchange: "US" | "SEHK" | "SGX" | "SSE" | "SZSE" | "JP" | "CA" | "CME" | "CBOT" | "NYMEX" | "COMEX" | "CBOE" | "HKFE" | "KR" | "BMS" | "BMD" | "ASX";
        /**
         * Order IDs from the same exchange.
         * @minItems 1
         * @maxItems 49
         */
        orderIds: Array<string>;
      };
      output: {
        /** Order details. */
        orders: Array<{
          /** Order ID. */
          order_id?: string;
          /**
           * Security code including market prefix, for example HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Order status. */
          order_status?: string;
          /** Quantity as a decimal string. */
          qty?: string;
          /** Price as a decimal string. */
          price?: string;
          /** Creation timestamp in microseconds. */
          create_time?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get revenue composition by product, industry, region or business. */
    "futunn.get_revenue_breakdown": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
        /** Financial period end timestamp in seconds; 0 selects the latest period. */
        date?: number;
        /** Financial period selector; default 0. */
        financialType?: number;
        /** Report currency code, for example USD or CNY; omit for the native currency. */
        currencyCode?: string;
      };
      output: {
        /** Revenue breakdown with available period choices. */
        revenue: {
          /** Financial reporting period. */
          period?: string;
          /** Report currency code, for example USD or CNY; omit for the native currency. */
          currency_code?: string;
          /** Revenue composition dimensions and items. */
          breakdown_list?: Array<Record<string, unknown>>;
          /** Available period dates in seconds and financial type codes. */
          screen_date_list?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
        /** Whether the provider explicitly reported no_data for a valid security. */
        noData: boolean;
      };
    };
    /** Get basic security information, including listing date and lot size. */
    "futunn.get_security_info": {
      input: {
        /**
         * Securities to query, up to 400.
         * @minItems 1
         * @maxItems 400
         */
        symbols: Array<string>;
      };
      output: {
        /** Resolved security profiles. */
        securities: Array<{
          /**
           * Security code including market prefix, for example HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Security name. */
          name?: string;
          /** Board lot size or contract multiplier. */
          lot_size?: number;
          /** Provider security identifier. */
          stock_id?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get PE, PB or PS valuation history and market or sector comparisons. */
    "futunn.get_valuation": {
      input: {
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        symbol: string;
        /** 1=PE (default), 2=PB, 3=PS. */
        valuationType?: 1 | 2 | 3;
        /** History span: 1=3mo, 2=6mo, 3=1yr, 4=3yr, 5=since May 2019, 6=5yr, 7=10yr, 8=2yr, 9=20yr, 10=30yr. */
        intervalType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
      };
      output: {
        /** Valuation trends, distributions and growth analysis. */
        valuation: {
          /** Current, historical and forward valuation metrics. */
          trend?: Record<string, unknown>;
          /** Provider record with additional fields preserved. */
          market_distribution?: Record<string, unknown>;
          /** Provider record with additional fields preserved. */
          plate_distribution?: Record<string, unknown>;
          /** Provider record with additional fields preserved. */
          profit_growth_rate?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List trading accounts authorized by the connected user. */
    "futunn.list_accounts": {
      input: Record<string, never>;
      output: {
        /** Authorized accounts; numeric account_id values are returned as lossless decimal strings. */
        accounts: Array<{
          /** Trading account ID as a lossless decimal string. */
          account_id?: string;
          /** Broker identifier. */
          security_firm?: string;
          /** Account type, such as cash or margin. */
          acc_type?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List historical execution fills filtered by update time in microseconds. */
    "futunn.list_history_deals": {
      input: {
        /**
         * Trading account ID as a decimal string.
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /** Trading market; HKCC denotes China Stock Connect. */
        market: "NONE" | "HK" | "US" | "SG" | "HKCC" | "CA" | "FUTURES" | "JP" | "KR" | "MY" | "AU";
        /** Opaque page flag; omit or use an empty string for the first page. */
        pageFlag?: string;
        /**
         * Page size; default 50, range 10-50.
         * @minimum 10
         * @maximum 50
         */
        pageSize?: number;
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        code?: string;
        /**
         * Unix timestamp in microseconds as a decimal string; 0 uses the provider 90-day default window.
         * @pattern ^[0-9]+$
         */
        start?: string;
        /**
         * Unix timestamp in microseconds as a decimal string; 0 uses the provider 90-day default window.
         * @pattern ^[0-9]+$
         */
        end?: string;
      };
      output: {
        /** Returned account records in provider order. */
        deals: Array<{
          /** Case-sensitive base58 fill ID; preserve exactly. */
          deal_id?: string;
          /** Order ID. */
          order_id?: string;
          /** Quantity as a decimal string. */
          qty?: string;
          /** Price as a decimal string. */
          price?: string;
          /** Creation timestamp in microseconds. */
          create_time?: number;
          [key: string]: unknown;
        }>;
        /** Next-page flag; null when omitted. */
        pageFlag: string | null;
        /** True means this batch is complete; null means the provider omitted the flag. */
        completed: boolean | null;
      };
    };
    /** List historical orders filtered by creation time in microseconds. */
    "futunn.list_history_orders": {
      input: {
        /**
         * Trading account ID as a decimal string.
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /** Trading market; HKCC denotes China Stock Connect. */
        market: "NONE" | "HK" | "US" | "SG" | "HKCC" | "CA" | "FUTURES" | "JP" | "KR" | "MY" | "AU";
        /** Opaque page flag; omit or use an empty string for the first page. */
        pageFlag?: string;
        /**
         * Page size; default 50, range 10-100.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Security code including market prefix, for example HK.00700.
         * @minLength 1
         */
        code?: string;
        /**
         * Unix timestamp in microseconds as a decimal string; 0 uses the provider 90-day default window.
         * @pattern ^[0-9]+$
         */
        start?: string;
        /**
         * Unix timestamp in microseconds as a decimal string; 0 uses the provider 90-day default window.
         * @pattern ^[0-9]+$
         */
        end?: string;
      };
      output: {
        /** Returned account records in provider order. */
        orders: Array<{
          /** Order ID. */
          order_id?: string;
          /**
           * Security code including market prefix, for example HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Order status. */
          order_status?: string;
          /** Quantity as a decimal string. */
          qty?: string;
          /** Price as a decimal string. */
          price?: string;
          /** Creation timestamp in microseconds. */
          create_time?: number;
          [key: string]: unknown;
        }>;
        /** Next-page flag; null when omitted. */
        pageFlag: string | null;
        /** True means this batch is complete; null means the provider omitted the flag. */
        completed: boolean | null;
      };
    };
    /** List recent orders, including pending orders and orders filled or cancelled in the last 24 hours. */
    "futunn.list_open_orders": {
      input: {
        /**
         * Trading account ID as a decimal string.
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /** Trading market; HKCC denotes China Stock Connect. */
        market: "NONE" | "HK" | "US" | "SG" | "HKCC" | "CA" | "FUTURES" | "JP" | "KR" | "MY" | "AU";
        /** Opaque page flag; omit or use an empty string for the first page. */
        pageFlag?: string;
        /**
         * Page size; default 50, range 10-100.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Returned account records in provider order. */
        orders: Array<{
          /** Order ID. */
          order_id?: string;
          /**
           * Security code including market prefix, for example HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Order status. */
          order_status?: string;
          /** Quantity as a decimal string. */
          qty?: string;
          /** Price as a decimal string. */
          price?: string;
          /** Creation timestamp in microseconds. */
          create_time?: number;
          [key: string]: unknown;
        }>;
        /** Next-page flag; null when omitted. */
        pageFlag: string | null;
        /** True means this batch is complete; null means the provider omitted the flag. */
        completed: boolean | null;
      };
    };
    /** List account positions, optionally filtered by security code and profit/loss ratio. */
    "futunn.list_positions": {
      input: {
        /**
         * Trading account ID returned by list_accounts, kept as a decimal string.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /**
         * Security code with market prefix, for example US.AAPL or HK.00700.
         * @minLength 1
         */
        code?: string;
        /** Minimum profit/loss percentage as a decimal string, for example 10. */
        plRatioMin?: string;
        /** Maximum profit/loss percentage as a decimal string, for example 20. */
        plRatioMax?: string;
      };
      output: {
        /** Positions with upstream quantities, prices and profit/loss decimal strings. */
        positions: Array<{
          /**
           * Security code with market prefix, for example US.AAPL or HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Security name. */
          stock_name?: string;
          /** Position quantity as a decimal string. */
          qty?: string;
          /** Position cost price as a decimal string. */
          cost_price?: string;
          /** Whether the cost price is valid. */
          cost_price_valid?: boolean;
          /** Profit or loss as a decimal string. */
          pl_val?: string;
          /** Whether the profit or loss value is valid. */
          pl_val_valid?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List today's execution fills for a trading account. */
    "futunn.list_today_deals": {
      input: {
        /**
         * Trading account ID as a decimal string.
         * @pattern ^[0-9]+$
         */
        accountId: string;
        /** Trading market; HKCC denotes China Stock Connect. */
        market: "NONE" | "HK" | "US" | "SG" | "HKCC" | "CA" | "FUTURES" | "JP" | "KR" | "MY" | "AU";
        /** Opaque page flag; omit or use an empty string for the first page. */
        pageFlag?: string;
        /**
         * Page size; default 50, range 10-100.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Returned account records in provider order. */
        deals: Array<{
          /** Case-sensitive base58 fill ID; preserve exactly. */
          deal_id?: string;
          /** Order ID. */
          order_id?: string;
          /** Quantity as a decimal string. */
          qty?: string;
          /** Price as a decimal string. */
          price?: string;
          /** Creation timestamp in microseconds. */
          create_time?: number;
          [key: string]: unknown;
        }>;
        /** Next-page flag; null when omitted. */
        pageFlag: string | null;
        /** True means this batch is complete; null means the provider omitted the flag. */
        completed: boolean | null;
      };
    };
    /** List trading days for a market within an inclusive date range. */
    "futunn.list_trading_days": {
      input: {
        /** Market to query. */
        market: "HK" | "US" | "SH" | "SZ" | "BJ" | "SG" | "JP" | "KR" | "CA" | "AU" | "JP_FUTURE" | "SG_FUTURE";
        /**
         * Date in YYYY-MM-DD format in the market timezone.
         * @format date
         */
        start: string;
        /**
         * Date in YYYY-MM-DD format in the market timezone.
         * @format date
         */
        end: string;
      };
      output: {
        /** Trading dates with session type and trading seconds. */
        tradingDays: Array<{
          /**
           * Date in YYYY-MM-DD format in the market timezone.
           * @format date
           */
          time?: string;
          /** Session type, such as WHOLE or MORNING. */
          trade_date_type?: string;
          /** Total trading seconds in the session. */
          trade_second?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Screen securities with combined market, financial and technical conditions. */
    "futunn.screen_stocks": {
      input: {
        /** Combined screening conditions. */
        screenQueries: Array<{
          /** Official simple_field_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          simple_field_query: Record<string, unknown>;
        } | {
          /** Official plate_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          plate_query: Record<string, unknown>;
        } | {
          /** Official simple_property_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          simple_property_query: Record<string, unknown>;
        } | {
          /** Official cumulative_property_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          cumulative_property_query: Record<string, unknown>;
        } | {
          /** Official financial_property_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          financial_property_query: Record<string, unknown>;
        } | {
          /** Official indicator_positional_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          indicator_positional_query: Record<string, unknown>;
        } | {
          /** Official indicator_pattern_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          indicator_pattern_query: Record<string, unknown>;
        } | {
          /** Official featured_property_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          featured_property_query: Record<string, unknown>;
        } | {
          /** Official broker_holdings_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          broker_holdings_query: Record<string, unknown>;
        } | {
          /** Official kline_shape_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          kline_shape_query: Record<string, unknown>;
        } | {
          /** Official option_query payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          option_query: Record<string, unknown>;
        }>;
        /** Factors to return in matching order. */
        retrieveQueries?: Array<{
          /** Official basic_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          basic_property: Record<string, unknown>;
        } | {
          /** Official simple_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          simple_property: Record<string, unknown>;
        } | {
          /** Official cumulative_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          cumulative_property: Record<string, unknown>;
        } | {
          /** Official financial_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          financial_property: Record<string, unknown>;
        } | {
          /** Official featured_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          featured_property: Record<string, unknown>;
        } | {
          /** Official indicator_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          indicator_property: Record<string, unknown>;
        } | {
          /** Official broker_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          broker_property: Record<string, unknown>;
        } | {
          /** Official kline_shape_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          kline_shape_property: Record<string, unknown>;
        } | {
          /** Official option_property payload. Preserve provider field IDs, periods and multiplier-scaled ranges. */
          option_property: Record<string, unknown>;
        }>;
        /** Sort direction and exactly one supported factor. */
        sort?: {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          simple_property: Record<string, unknown>;
        } | {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          cumulative_property: Record<string, unknown>;
        } | {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          financial_property: Record<string, unknown>;
        } | {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          featured_property: Record<string, unknown>;
        };
        /** Ordered multi-factor sorting; do not combine with sort. */
        sorts?: Array<{
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          simple_property: Record<string, unknown>;
        } | {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          cumulative_property: Record<string, unknown>;
        } | {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          financial_property: Record<string, unknown>;
        } | {
          /** 1=ascending, 2=descending, 3=absolute ascending, 4=absolute descending. */
          direction: 1 | 2 | 3 | 4;
          /** Official sort factor, including name and any required period. */
          featured_property: Record<string, unknown>;
        }>;
        /** Opaque next-page cursor; omit for the first page. */
        nextKey?: string;
        /**
         * Page size; default 200, maximum 300.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
        /** Security IDs for watchlist mode 1. */
        watchlistStockIds?: Array<number>;
        /** Security IDs for holdings mode 2. */
        holdingStockIds?: Array<number>;
        /** 0=all securities, 1=watchlist, 2=holdings. */
        userStockListMode?: 0 | 1 | 2;
      };
      output: {
        /** Matched securities; results align with retrieveQueries and retain provider-scaled values. */
        items: Array<{
          /**
           * Security code including market prefix, for example HK.00700.
           * @minLength 1
           */
          code?: string;
          /** Security name. */
          name?: string;
          /** Returned factor values and type information. */
          results?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata from the response envelope; null when omitted. */
        pagination: {
          /** Whether more results are available. */
          has_more?: boolean;
          /** Opaque next-page cursor; omit for the first page. */
          next_key?: string;
          /** Total matching records when provided. */
          total?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Search community discussions, topics and live streams by keyword. */
    "futunn.search_community": {
      input: {
        /**
         * Search keyword, company name, ticker or topic.
         * @minLength 1
         */
        keyword: string;
        /**
         * Number of results; default 10, maximum 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** Content type: 1=news/discussion, 2=announcement/topic, 3=report/live stream; omit for all. */
        type?: 1 | 2 | 3;
        /** Sort: 1=reads/popularity, 2=latest. */
        sortType?: 1 | 2;
        /** Content language. */
        language?: "zh-CN" | "zh-HK" | "en" | "ja";
      };
      output: {
        /** Matching content items. */
        items: Array<{
          /** Title; news titles may contain em highlight tags. */
          title?: string;
          /** Content link. */
          url?: string;
          /** Publication timestamp in seconds. */
          publish_time?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search news, announcements and research reports by keyword. */
    "futunn.search_news": {
      input: {
        /**
         * Search keyword, company name, ticker or topic.
         * @minLength 1
         */
        keyword: string;
        /**
         * Number of results; default 10, maximum 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** Content type: 1=news/discussion, 2=announcement/topic, 3=report/live stream; omit for all. */
        type?: 1 | 2 | 3;
        /** Sort: 1=reads/popularity, 2=latest. */
        sortType?: 1 | 2;
        /** Content language. */
        language?: "zh-CN" | "zh-HK" | "en" | "ja";
      };
      output: {
        /** Matching content items. */
        items: Array<{
          /** Title; news titles may contain em highlight tags. */
          title?: string;
          /** Content link. */
          url?: string;
          /** Publication timestamp in seconds. */
          publish_time?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
