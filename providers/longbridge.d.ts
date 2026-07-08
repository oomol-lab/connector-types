import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Longbridge A/H premium K-line records for a dual-listed security. */
    "longbridge.ah_premium": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The A/H premium K-line period.
         * @minLength 1
         * @pattern \S
         */
        period: string;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        count: number;
      };
      output: {
        /** The premiums object returned by Longbridge. */
        premiums: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge intraday A/H premium records for a dual-listed security. */
    "longbridge.ah_premium_intraday": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The premiums object returned by Longbridge. */
        premiums: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge quote change and anomaly records. */
    "longbridge.anomaly": {
      input: {
        /** The Longbridge market code. */
        market: "HK" | "US" | "CN" | "SG";
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
      };
      output: {
        /** The changes records returned by Longbridge. */
        changes: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List top Longbridge broker holdings for a security. */
    "longbridge.broker_holding": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The broker holding period. */
        period: "rct_1" | "rct_5" | "rct_20" | "rct_60";
      };
      output: {
        /** The holdings object returned by Longbridge. */
        holdings: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List daily Longbridge broker holding history for a broker and security. */
    "longbridge.broker_holding_daily": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The broker participant number.
         * @minLength 1
         * @pattern \S
         */
        brokerId: string;
      };
      output: {
        /** The history object returned by Longbridge. */
        history: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get detailed Longbridge broker holdings for a security. */
    "longbridge.broker_holding_detail": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The detail object returned by Longbridge. */
        detail: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge business segment data for a security. */
    "longbridge.business_segments": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The segments object returned by Longbridge. */
        segments: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge business segment history for a security. */
    "longbridge.business_segments_history": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Longbridge report period. */
        report?: "af" | "saf" | "q1" | "q2" | "q3" | "qf" | "3q";
        /**
         * The business segment category filter.
         * @minLength 1
         * @pattern \S
         */
        category?: string;
      };
      output: {
        /** The segments object returned by Longbridge. */
        segments: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge buyback data for a security. */
    "longbridge.buyback": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The buyback object returned by Longbridge. */
        buyback: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge company overview and profile data for a security. */
    "longbridge.company": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The profile object returned by Longbridge. */
        profile: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge financial consensus estimates for a security. */
    "longbridge.consensus": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The consensus object returned by Longbridge. */
        consensus: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge index constituents. */
    "longbridge.constituent": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The constituents object returned by Longbridge. */
        constituents: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge corporate actions for a security. */
    "longbridge.corp_action": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The actions object returned by Longbridge. */
        actions: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge dividend history for a security. */
    "longbridge.dividend": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
        /** The dividend year. */
        year?: number;
      };
      output: {
        /** The dividends records returned by Longbridge. */
        dividends: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get detailed Longbridge dividend information for a security. */
    "longbridge.dividend_detail": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The dividend object returned by Longbridge. */
        dividend: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Estimate the maximum Longbridge buy quantity for a security without submitting an order. */
    "longbridge.estimate_max_buy_quantity": {
      input: {
        /**
         * The Longbridge security symbol to estimate.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Longbridge order type used for buy quantity estimates. */
        orderType: "LO" | "ELO" | "MO" | "LIT" | "MIT" | "TSLPAMT" | "TSMAMT" | "TSMPCT" | "UnknownOrderType" | "AO" | "ALO" | "ODD" | "TSLPPCT" | "SLO";
        /** The Longbridge order side. */
        side: "UnknownSide" | "Buy" | "Sell";
        /**
         * The limit or trigger price, when required by the order type.
         * @minLength 1
         * @pattern \S
         */
        price?: string;
        /**
         * The settlement currency override, such as USD or HKD.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
        /** The Longbridge trade market code. */
        market?: "UnknownMarket" | "DE" | "JP" | "SH" | "SZ" | "UK" | "AU" | "HK" | "SG" | "US";
        /** Whether to allow fractional share quantities in the estimate. */
        fractionalShares?: boolean;
        /**
         * The original order ID when estimating for an order modification scenario.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
      };
      output: {
        /** The maximum buy quantity estimate returned by Longbridge. */
        estimate: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge exchange rates for supported currencies. */
    "longbridge.exchange_rate": {
      input: Record<string, never>;
      output: {
        /** The rates object returned by Longbridge. */
        rates: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge company executives and board members for a security. */
    "longbridge.executive": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The executives object returned by Longbridge. */
        executives: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge finance calendar events. */
    "longbridge.finance_calendar": {
      input: {
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        startDate: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate?: string;
        /**
         * Longbridge finance calendar categories.
         * @minItems 1
         */
        categories: Array<"report" | "financial" | "dividend" | "split" | "merge" | "ipo" | "macrodata" | "closed" | "meeting">;
        /** Longbridge symbols to filter by. */
        symbols?: Array<string>;
        /** The Longbridge market code. */
        market?: "HK" | "US" | "CN" | "SG";
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        count?: number;
        /** Macro calendar importance levels. */
        star?: Array<number>;
      };
      output: {
        /** The calendar object returned by Longbridge. */
        calendar: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge financial report data for a security. */
    "longbridge.financial_report": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The financial statement kind. */
        kind?: "IS" | "BS" | "CF" | "ALL";
        /** The Longbridge report period. */
        period?: "af" | "saf" | "q1" | "q2" | "q3" | "qf" | "3q";
      };
      output: {
        /** The report object returned by Longbridge. */
        report: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the latest Longbridge financial report summary for a security. */
    "longbridge.financial_report_latest": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The report object returned by Longbridge. */
        report: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge earnings snapshot data for a security. */
    "longbridge.financial_report_snapshot": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Longbridge report period. */
        report?: "af" | "saf" | "q1" | "q2" | "q3" | "qf" | "3q";
        /** The fiscal year to query. */
        fiscalYear?: number;
        /** The fiscal quarter to query. */
        fiscalPeriod?: "1" | "2" | "3" | "4";
      };
      output: {
        /** The snapshot object returned by Longbridge. */
        snapshot: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge company financial statement data for a security. */
    "longbridge.financial_statement": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The financial statement kind. */
        kind?: "IS" | "BS" | "CF" | "ALL";
        /** The Longbridge report period. */
        period?: "af" | "saf" | "q1" | "q2" | "q3" | "qf" | "3q";
      };
      output: {
        /** The statement object returned by Longbridge. */
        statement: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge EPS forecast data for a security. */
    "longbridge.forecast_eps": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The forecast object returned by Longbridge. */
        forecast: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge funds and ETFs holding a security. */
    "longbridge.fund_holder": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The holders object returned by Longbridge. */
        holders: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current Longbridge market sentiment temperature for a market. */
    "longbridge.get_market_temperature": {
      input: {
        /** The Longbridge market code. */
        market: "HK" | "US" | "CN" | "SG";
      };
      output: {
        /** The current market temperature snapshot returned by Longbridge. */
        temperature: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Longbridge order detail record by order ID. */
    "longbridge.get_order_detail": {
      input: {
        /**
         * The Longbridge order ID to query.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** The order detail returned by Longbridge. */
        order: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge industry peer securities for a security. */
    "longbridge.industry_peers": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Longbridge market code. */
        market: "HK" | "US" | "CN" | "SG";
      };
      output: {
        /** The peers object returned by Longbridge. */
        peers: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge industry peer valuation comparison for a security. */
    "longbridge.industry_valuation": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The comparison currency.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
      };
      output: {
        /** The valuation object returned by Longbridge. */
        valuation: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge industry valuation distribution for a security. */
    "longbridge.industry_valuation_dist": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The distribution object returned by Longbridge. */
        distribution: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the latest Longbridge institution analyst rating summary for a security. */
    "longbridge.institution_rating": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The rating object returned by Longbridge. */
        rating: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge institution analyst rating detail for a security. */
    "longbridge.institution_rating_detail": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The rating object returned by Longbridge. */
        rating: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge institution analyst rating history for a security. */
    "longbridge.institution_rating_history": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The ratings object returned by Longbridge. */
        ratings: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge institution rating industry rank for a security. */
    "longbridge.institution_rating_industry_rank": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The rank object returned by Longbridge. */
        rank: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge institutional views for a security. */
    "longbridge.institutional_views": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The views object returned by Longbridge. */
        views: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge investor relations records for a security. */
    "longbridge.invest_relation": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** The relations object returned by Longbridge. */
        relations: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
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
    /** List Longbridge account cash flow records visible to the connected OAuth user. */
    "longbridge.list_cash_flow": {
      input: {
        /** A Unix timestamp in seconds. */
        startTime?: number;
        /** A Unix timestamp in seconds. */
        endTime?: number;
        /** The Longbridge business type filter. */
        businessType?: number;
        /**
         * Longbridge symbols to filter by.
         * @minItems 1
         * @maxItems 100
         */
        symbols?: Array<string>;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records per page.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The cash flow records returned by Longbridge. */
        cashFlows: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge regulatory filings and disclosure documents for a symbol. */
    "longbridge.list_filings": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The filing records returned by Longbridge. */
        filings: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge fund positions visible to the connected OAuth user. */
    "longbridge.list_fund_positions": {
      input: {
        /**
         * Longbridge symbols to filter by.
         * @minItems 1
         * @maxItems 100
         */
        symbols?: Array<string>;
      };
      output: {
        /** The fund position groups returned by Longbridge. */
        positionGroups: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List historical Longbridge execution records visible to the connected OAuth user. */
    "longbridge.list_history_executions": {
      input: {
        /** A Unix timestamp in seconds. */
        startAt?: number;
        /** A Unix timestamp in seconds. */
        endAt?: number;
        /**
         * The Longbridge order ID to filter by.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * The Longbridge security symbol to filter by.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The historical execution records returned by Longbridge. */
        executions: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List historical Longbridge orders visible to the connected OAuth user. */
    "longbridge.list_history_orders": {
      input: {
        /** A Unix timestamp in seconds. */
        startAt?: number;
        /** A Unix timestamp in seconds. */
        endAt?: number;
        /**
         * The Longbridge security symbol to filter by.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
        /** The Longbridge trade market code. */
        market?: "UnknownMarket" | "DE" | "JP" | "SH" | "SZ" | "UK" | "AU" | "HK" | "SG" | "US";
        /** The Longbridge order side. */
        side?: "UnknownSide" | "Buy" | "Sell";
        /**
         * Longbridge order statuses to filter by.
         * @minItems 1
         */
        statuses?: Array<"NotReported" | "VarietiesNotReported" | "FilledStatus" | "WaitToNew" | "ReplacedStatus" | "PartialFilledStatus" | "CanceledStatus" | "ExpiredStatus" | "UnknownOrderStatus" | "RejectedStatus" | "PartialWithdrawal" | "ReplacedNotReported" | "ProtectedNotReported" | "NewStatus" | "WaitToReplace" | "PendingReplaceStatus" | "PendingCancelStatus" | "WaitToCancel">;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records per page.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The historical order records returned by Longbridge. */
        orders: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List historical Longbridge market sentiment temperature values for a market and date range. */
    "longbridge.list_market_temperature": {
      input: {
        /** The Longbridge market code. */
        market: "HK" | "US" | "CN" | "SG";
        /**
         * The start date in YYYYMMDD format.
         * @minLength 1
         * @pattern \S
         */
        startDate: string;
        /**
         * The end date in YYYYMMDD format.
         * @minLength 1
         * @pattern \S
         */
        endDate: string;
      };
      output: {
        /** The historical market temperature records returned by Longbridge. */
        temperatures: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge news articles for a symbol. */
    "longbridge.list_news": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The news records returned by Longbridge. */
        news: Array<Record<string, unknown>>;
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
    /** List today's Longbridge execution records visible to the connected OAuth user. */
    "longbridge.list_today_executions": {
      input: {
        /**
         * The Longbridge order ID to filter by.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * The Longbridge security symbol to filter by.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
      };
      output: {
        /** Today's execution records returned by Longbridge. */
        executions: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List today's Longbridge orders visible to the connected OAuth user. */
    "longbridge.list_today_orders": {
      input: {
        /**
         * The Longbridge security symbol to filter by.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
        /** The Longbridge trade market code. */
        market?: "UnknownMarket" | "DE" | "JP" | "SH" | "SZ" | "UK" | "AU" | "HK" | "SG" | "US";
        /** The Longbridge order side. */
        side?: "UnknownSide" | "Buy" | "Sell";
        /**
         * Longbridge order statuses to filter by.
         * @minItems 1
         */
        statuses?: Array<"NotReported" | "VarietiesNotReported" | "FilledStatus" | "WaitToNew" | "ReplacedStatus" | "PartialFilledStatus" | "CanceledStatus" | "ExpiredStatus" | "UnknownOrderStatus" | "RejectedStatus" | "PartialWithdrawal" | "ReplacedNotReported" | "ProtectedNotReported" | "NewStatus" | "WaitToReplace" | "PendingReplaceStatus" | "PendingCancelStatus" | "WaitToCancel">;
        /**
         * The Longbridge order ID to filter by.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records per page.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** Today's order records returned by Longbridge. */
        orders: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge watchlist groups for the connected OAuth user. */
    "longbridge.list_watchlist_groups": {
      input: Record<string, never>;
      output: {
        /** The watchlist groups returned by Longbridge. */
        groups: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge market trading status for supported markets. */
    "longbridge.market_status": {
      input: Record<string, never>;
      output: {
        /** The status object returned by Longbridge. */
        status: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge market stock events. */
    "longbridge.market_stock_events": {
      input: {
        /** Markets to filter market stock events by. */
        markets?: Array<"HK" | "US" | "CN" | "SG">;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Longbridge stock event sort code: 0 time, 1 change, 2 hot. */
        sort?: number;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date?: string;
      };
      output: {
        /** The events object returned by Longbridge. */
        events: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge news articles for a symbol. */
    "longbridge.news": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The news records returned by Longbridge. */
        news: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge operating metrics for a security. */
    "longbridge.operating": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Longbridge report period. */
        report?: "af" | "saf" | "q1" | "q2" | "q3" | "qf" | "3q";
      };
      output: {
        /** The metrics object returned by Longbridge. */
        metrics: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge real-time option volume statistics for an underlying security. */
    "longbridge.option_volume": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The volume object returned by Longbridge. */
        volume: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge historical daily option volume statistics for an underlying security. */
    "longbridge.option_volume_daily": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Unix timestamp pagination anchor. */
        timestamp?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** The volume object returned by Longbridge. */
        volume: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge portfolio profit and loss analysis summary. */
    "longbridge.profit_analysis": {
      input: {
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        startDate?: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate?: string;
      };
      output: {
        /** The analysis object returned by Longbridge. */
        analysis: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge portfolio profit and loss analysis grouped by market. */
    "longbridge.profit_analysis_by_market": {
      input: {
        /** The Longbridge market code. */
        market?: "HK" | "US" | "CN" | "SG";
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        startDate?: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate?: string;
        /**
         * The currency code.
         * @minLength 1
         * @pattern \S
         */
        currency?: string;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The analysis object returned by Longbridge. */
        analysis: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge portfolio profit and loss detail for a security. */
    "longbridge.profit_analysis_detail": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        startDate?: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate?: string;
      };
      output: {
        /** The detail object returned by Longbridge. */
        detail: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge portfolio profit and loss flow records for a security. */
    "longbridge.profit_analysis_flows": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The 1-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
        /** Whether to include derivative records. */
        derivative?: boolean;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        startDate?: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate?: string;
      };
      output: {
        /** The flows object returned by Longbridge. */
        flows: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge portfolio profit and loss analysis sublist records. */
    "longbridge.profit_analysis_sublist": {
      input: {
        /** The profit/loss grouping filter. */
        profitOrLoss?: "all" | "profit" | "loss";
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        startDate?: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate?: string;
      };
      output: {
        /** The items object returned by Longbridge. */
        items: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge market ranking categories. */
    "longbridge.rank_categories": {
      input: Record<string, never>;
      output: {
        /** The categories object returned by Longbridge. */
        categories: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge ranked securities for a market ranking category. */
    "longbridge.rank_list": {
      input: {
        /**
         * The Longbridge ranking category key.
         * @minLength 1
         * @pattern \S
         */
        key: string;
        /** Whether to include article context. */
        needArticle?: boolean;
        /** The Longbridge market code. */
        market?: "HK" | "US" | "CN" | "SG";
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The securities records returned by Longbridge. */
        securities: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge screener indicator definitions. */
    "longbridge.screener_indicators": {
      input: Record<string, never>;
      output: {
        /** The indicators object returned by Longbridge. */
        indicators: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge recommended screener strategies. */
    "longbridge.screener_recommend_strategies": {
      input: {
        /** The Longbridge market code. */
        market: "HK" | "US" | "CN" | "SG";
      };
      output: {
        /** The strategies object returned by Longbridge. */
        strategies: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Longbridge securities with screener filters. */
    "longbridge.screener_search": {
      input: {
        /** The Longbridge market code. */
        market?: "HK" | "US" | "CN" | "SG";
        /** Longbridge screener filter conditions. */
        filters?: Array<Record<string, unknown>>;
        /** Alternative Longbridge screener filter conditions. */
        conditions?: Array<Record<string, unknown>>;
        /** Longbridge screener return fields. */
        returns?: Array<string>;
        /** Additional Longbridge screener return fields. */
        extraReturns?: Array<string>;
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * The screener return field key to sort by.
         * @minLength 1
         * @pattern \S
         */
        sortByKey?: string;
        /**
         * The zero-based return field index used for sorting.
         * @minimum 0
         */
        sortBy?: number;
        /** The Longbridge sort order code. */
        sortOrder?: number;
      };
      output: {
        /** The results records returned by Longbridge. */
        results: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Longbridge screener strategy by ID. */
    "longbridge.screener_strategy": {
      input: {
        /**
         * The Longbridge screener strategy ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The strategy object returned by Longbridge. */
        strategy: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge saved screener strategies for the connected user. */
    "longbridge.screener_user_strategies": {
      input: {
        /** The Longbridge market code. */
        market: "HK" | "US" | "CN" | "SG";
      };
      output: {
        /** The strategies object returned by Longbridge. */
        strategies: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge shareholder records for a security. */
    "longbridge.shareholder": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The shareholder range filter.
         * @minLength 1
         * @pattern \S
         */
        range?: string;
        /**
         * The shareholder sort field.
         * @minLength 1
         * @pattern \S
         */
        sortField?: string;
        /** The shareholder sort order. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The shareholders object returned by Longbridge. */
        shareholders: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge shareholder holding detail for a security and shareholder object. */
    "longbridge.shareholder_detail": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The Longbridge shareholder object ID. */
        objectId: number;
      };
      output: {
        /** The shareholder object returned by Longbridge. */
        shareholder: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge top shareholder records for a security. */
    "longbridge.shareholder_top": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The shareholders object returned by Longbridge. */
        shareholders: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge short margin information for the connected account. */
    "longbridge.short_margin": {
      input: Record<string, never>;
      output: {
        /** The margin object returned by Longbridge. */
        margin: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge short interest records for a US or HK security. */
    "longbridge.short_positions": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The pagination timestamp returned by Longbridge. */
        lastTimestamp?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** The positions records returned by Longbridge. */
        positions: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge short sale trade records for a US or HK security. */
    "longbridge.short_trades": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /** The pagination timestamp returned by Longbridge. */
        lastTimestamp?: number;
        /**
         * The number of records to request.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** The trades records returned by Longbridge. */
        trades: Array<Record<string, unknown>>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge stock rating history records for a security. */
    "longbridge.stock_rating_history": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The history object returned by Longbridge. */
        history: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge stock rating records for a security. */
    "longbridge.stock_ratings": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The ratings object returned by Longbridge. */
        ratings: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge trade statistics for a security. */
    "longbridge.trade_stats": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The statistics object returned by Longbridge. */
        statistics: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge valuation metrics for a security. */
    "longbridge.valuation": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The valuation indicator, such as pe, pb, or ps.
         * @minLength 1
         * @pattern \S
         */
        indicator?: string;
        /**
         * The valuation range code.
         * @minLength 1
         * @pattern \S
         */
        range?: string;
      };
      output: {
        /** The valuation object returned by Longbridge. */
        valuation: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Compare Longbridge valuation metrics between a security and optional peers. */
    "longbridge.valuation_comparison": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The comparison currency.
         * @minLength 1
         * @pattern \S
         */
        currency: string;
        /**
         * The peer symbols to compare against.
         * @minItems 1
         */
        comparisonSymbols?: Array<string>;
      };
      output: {
        /** The comparison object returned by Longbridge. */
        comparison: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** List Longbridge historical valuation detail data for a security. */
    "longbridge.valuation_history": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * The valuation indicator, such as pe, pb, or ps.
         * @minLength 1
         * @pattern \S
         */
        indicator?: string;
      };
      output: {
        /** The history object returned by Longbridge. */
        history: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Longbridge valuation rank data for a security. */
    "longbridge.valuation_rank": {
      input: {
        /**
         * The Longbridge security symbol, such as AAPL.US or 700.HK.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
        /**
         * A date string in YYYYMMDD format.
         * @pattern ^\d{8}$
         */
        startDate?: string;
        /**
         * A date string in YYYYMMDD format.
         * @pattern ^\d{8}$
         */
        endDate?: string;
      };
      output: {
        /** The rank object returned by Longbridge. */
        rank: Record<string, unknown>;
        /** The raw object returned by Longbridge. */
        raw: Record<string, unknown>;
      };
    };
  }
}
