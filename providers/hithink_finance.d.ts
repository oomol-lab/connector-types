import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download the full A-share ten-year daily-price Parquet dataset and upload it to transit storage. */
    "hithink_finance.export_full_market_daily_history": {
      input: Record<string, never>;
      output: {
        /** The persistent Parquet file. */
        file: {
          /** File name of the exported Parquet dataset. */
          name: string;
          /** MIME type of the exported file. */
          mimetype: string;
          /**
           * Transit URL of the exported file.
           * @format uri
           */
          s3url: string;
        };
        /**
         * ISO 8601 expiration time of the temporary upstream URL used for the download.
         * @format date-time
         */
        sourceExpiresAt: string;
      };
    };
    /** Download the full A-share adjustment-event Parquet dataset and upload it to transit storage. */
    "hithink_finance.export_market_adjustment_factors": {
      input: Record<string, never>;
      output: {
        /** The persistent Parquet file. */
        file: {
          /** File name of the exported Parquet dataset. */
          name: string;
          /** MIME type of the exported file. */
          mimetype: string;
          /**
           * Transit URL of the exported file.
           * @format uri
           */
          s3url: string;
        };
        /**
         * ISO 8601 expiration time of the temporary upstream URL used for the download.
         * @format date-time
         */
        sourceExpiresAt: string;
      };
    };
    /** Download the latest ten trading days of A-share daily-price data and upload it to transit storage. */
    "hithink_finance.export_recent_market_daily_history": {
      input: Record<string, never>;
      output: {
        /** The persistent Parquet file. */
        file: {
          /** File name of the exported Parquet dataset. */
          name: string;
          /** MIME type of the exported file. */
          mimetype: string;
          /**
           * Transit URL of the exported file.
           * @format uri
           */
          s3url: string;
        };
        /**
         * ISO 8601 expiration time of the temporary upstream URL used for the download.
         * @format date-time
         */
        sourceExpiresAt: string;
      };
    };
    /** Get dividend and bonus-share adjustment events for one A-share security. */
    "hithink_finance.get_adjustment_factors": {
      input: {
        /**
         * Complete A-share code including the market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Optional first ex-dividend date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * Optional last ex-dividend date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** Complete Tonghuashun security code. */
        thscode: string;
        /** Security code without the market suffix. */
        ticker: string;
        /** Corporate-action adjustment events ordered from newest to oldest. */
        item: Array<{
          /** Security code without the market suffix. */
          ticker?: string;
          /** Ex-dividend or ex-rights date in milliseconds. */
          ex_date_ms?: number;
          /** Pre-tax cash dividend per share. */
          dividend_per_share?: number;
          /** Bonus-share ratio per share. */
          per_share_bonus?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the Tonghuashun short-term opening-auction benchmark for one date. */
    "hithink_finance.get_auction_short_term_benchmark": {
      input: {
        /**
         * Trading date in YYYY-MM-DD format; omit for today in Shanghai.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Response assembly time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Trading date represented by the benchmark. */
        date: string;
        /** Trading date at Shanghai midnight in milliseconds. */
        date_ms: number;
        /** Securities included in the auction benchmark. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get live or final opening-auction snapshots for selected A-share securities. */
    "hithink_finance.get_auction_snapshot": {
      input: {
        /**
         * Complete A-share codes to query.
         * @minItems 1
         * @maxItems 100
         */
        thscodes: Array<string>;
        /** Auction stage to query. */
        stage?: "live" | "final";
      };
      output: {
        /** Response assembly time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Auction phase reported by Tonghuashun. */
        auction_phase: string;
        /** Readiness or suspension status of the auction data. */
        data_status: string;
        /** Number of auction rows returned. */
        total: number;
        /** Opening-auction rows for the requested securities. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get recent consolidated balance sheets for one A-share company. */
    "hithink_finance.get_balance_sheets": {
      input: {
        /**
         * Complete A-share code including the market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Financial statement reporting cadence. */
        period?: "annual" | "quarterly";
        /**
         * Number of recent reporting periods to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** Inclusive statement window start in milliseconds. */
        startTimeMs?: number;
        /** Inclusive statement window end in milliseconds. */
        endTimeMs?: number;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Financial statement rows ordered from newest to oldest. */
        item: Array<{
          /** Complete Tonghuashun security code. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Reporting cadence for the statement. */
          period?: string;
          /** Reporting period end as a Unix timestamp in milliseconds. */
          period_end_ms?: number;
          /** Report date as a Unix timestamp in milliseconds. */
          report_date_ms?: number;
          /** Fiscal year represented by the statement. */
          fiscal_year?: number;
          /** Fiscal period label returned by Tonghuashun. */
          fiscal_period?: string;
          /** Currency code for monetary fields. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get recent consolidated cash-flow statements for one A-share company. */
    "hithink_finance.get_cash_flow_statements": {
      input: {
        /**
         * Complete A-share code including the market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Financial statement reporting cadence. */
        period?: "annual" | "quarterly";
        /**
         * Number of recent reporting periods to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** Inclusive statement window start in milliseconds. */
        startTimeMs?: number;
        /** Inclusive statement window end in milliseconds. */
        endTimeMs?: number;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Financial statement rows ordered from newest to oldest. */
        item: Array<{
          /** Complete Tonghuashun security code. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Reporting cadence for the statement. */
          period?: string;
          /** Reporting period end as a Unix timestamp in milliseconds. */
          period_end_ms?: number;
          /** Report date as a Unix timestamp in milliseconds. */
          report_date_ms?: number;
          /** Fiscal year represented by the statement. */
          fiscal_year?: number;
          /** Fiscal period label returned by Tonghuashun. */
          fiscal_period?: string;
          /** Currency code for monetary fields. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the Tonghuashun Dragon-Tiger list for all, institutional, or hot-money activity. */
    "hithink_finance.get_dragon_tiger_list": {
      input: {
        /** Dragon-Tiger board type. */
        boardType?: "all" | "org" | "hot_money";
        /**
         * Trading date in YYYY-MM-DD format; omit for the latest date.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Dragon-Tiger board type returned by Tonghuashun. */
        board_type: string;
        /** Trading date represented by the list. */
        trade_date: string;
        /** Total number of returned records. */
        count: number;
        /** Number of distinct stocks in the list. */
        stock_count: number;
        /** Stock-level Dragon-Tiger records. */
        stock_items: Array<Record<string, unknown>>;
        /** Hot-money records when included by the board type. */
        hot_money_items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get growth, profitability, solvency, operation, and cash-flow indicators for one report. */
    "hithink_finance.get_financial_indicators": {
      input: {
        /**
         * Complete A-share code including the market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Reporting period in YYYY-N format, where N is 1 through 4.
         * @minLength 1
         */
        report: string;
      };
      output: {
        /** Complete Tonghuashun security code. */
        thscode: string;
        /** Reporting period identifier in YYYY-N format. */
        report: string;
        /** Growth, profitability, solvency, operation, and cash-flow groups. */
        abilities: Array<{
          /** Financial-analysis category identifier. */
          ability?: string;
          /** Financial indicators in this category. */
          indicators?: Array<{
            /** Tonghuashun financial indicator identifier. */
            index_id?: string;
            /** Indicator value as returned by the upstream service. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get disclosed stock, bond, deposit, and other asset allocation for one public fund. */
    "hithink_finance.get_fund_asset_allocation": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get disclosed balance sheets for one public fund. */
    "hithink_finance.get_fund_balance_sheets": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get disclosed historical bond holdings for one fund report period. */
    "hithink_finance.get_fund_bond_holdings_history": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Report type returned by the corresponding report-dates action.
         * @minLength 1
         */
        reportType: string;
        /**
         * Report end date returned by the corresponding report-dates action.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get profile and scale information for one fund company. */
    "hithink_finance.get_fund_company": {
      input: {
        /**
         * Fund company ID returned by the fund profile action.
         * @minLength 1
         */
        companyId: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get Tonghuashun diagnostic dimensions and peer comparisons for one public fund. */
    "hithink_finance.get_fund_diagnostics": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get dividend history and dividend summary data for one public fund. */
    "hithink_finance.get_fund_dividends": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get fixed-range drawdown data for one public fund. */
    "hithink_finance.get_fund_drawdowns": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the disclosed financial indicators for one public fund. */
    "hithink_finance.get_fund_financial_indicators": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the latest institutional, personal, and staff holder structure for one public fund. */
    "hithink_finance.get_fund_holder_structure": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Share-class disclosure scope. */
        mergeScope?: "all" | "merged" | "separate";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the latest periodically disclosed major holdings for one public fund. */
    "hithink_finance.get_fund_holdings": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get disclosed income statements for one public fund. */
    "hithink_finance.get_fund_income_statements": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the periodically disclosed industry allocation for one public fund. */
    "hithink_finance.get_fund_industry_allocation": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get profile, resume, returns, and radar comparisons for one fund manager. */
    "hithink_finance.get_fund_manager": {
      input: {
        /**
         * Fund manager ID returned by the fund profile action.
         * @minLength 1
         */
        managerId: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get awards, major assets, and investment history for one fund manager. */
    "hithink_finance.get_fund_manager_experience": {
      input: {
        /**
         * Fund manager ID returned by the fund profile action.
         * @minLength 1
         */
        managerId: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get investment ideas and industry preferences for one fund manager. */
    "hithink_finance.get_fund_manager_investment_style": {
      input: {
        /**
         * Fund manager ID returned by the fund profile action.
         * @minLength 1
         */
        managerId: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get one fund manager's return, peer return, and benchmark return series for a fixed range. */
    "hithink_finance.get_fund_manager_performance": {
      input: {
        /**
         * Fund manager ID returned by the fund profile action.
         * @minLength 1
         */
        managerId: string;
        /** Fixed manager performance range. */
        range: "month" | "tmonth" | "year" | "nowyear" | "now";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get up to five years of daily market history for one ETF. */
    "hithink_finance.get_fund_market_history": {
      input: {
        /**
         * Complete ETF code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Inclusive history start in milliseconds. */
        startTimeMs: number;
        /** Inclusive history end in milliseconds. */
        endTimeMs: number;
      };
      output: {
        /** Latest upstream price-bar time in milliseconds. */
        timestamp: number;
        /** Complete ETF code represented by the series. */
        thscode: string;
        /** Price-bar interval, currently 1d. */
        interval: string;
        /** Daily ETF price bars. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the latest exchange-market snapshot for one ETF or LOF. */
    "hithink_finance.get_fund_market_snapshot": {
      input: {
        /**
         * Complete ETF or LOF code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the latest or fixed-range unit and adjusted NAV series for one public fund. */
    "hithink_finance.get_fund_nav": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Fixed NAV history range. */
        range?: "week" | "month" | "tmonth" | "hyear" | "year" | "twoyear" | "tyear" | "fyear";
        /**
         * NAV series to return.
         * @minItems 1
         * @maxItems 2
         */
        navTypes?: Array<"unit" | "adj">;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get historical daily performance indicators for one public fund over a window of up to five years. */
    "hithink_finance.get_fund_performance_indicators": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Inclusive indicator-history start in milliseconds. */
        startTimeMs: number;
        /** Inclusive indicator-history end in milliseconds. */
        endTimeMs: number;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the basic profile, company, managers, rules, and fees for one public fund. */
    "hithink_finance.get_fund_profile": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get fixed-range returns, peer averages, and peer ranks for one public fund. */
    "hithink_finance.get_fund_returns": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get disclosed historical stock holdings for one fund report period. */
    "hithink_finance.get_fund_stock_holdings_history": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Report type returned by the corresponding report-dates action.
         * @minLength 1
         */
        reportType: string;
        /**
         * Report end date returned by the corresponding report-dates action.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get up to ten top disclosed holders for one public fund. */
    "hithink_finance.get_fund_top_holders": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Maximum holders to return.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
      };
      output: {
        /** Latest report time in milliseconds. */
        timestamp: number;
        /** Holder limit applied by Tonghuashun. */
        limit: number;
        /** Top disclosed fund holders. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the Tonghuashun hot-stock ranking for one date in the latest year. */
    "hithink_finance.get_hot_stock_history": {
      input: {
        /**
         * Natural date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
      };
      output: {
        /** Date represented by this ranking. */
        date: string;
        /** Date at Shanghai midnight in milliseconds. */
        date_ms: number;
        /** Stocks in the historical ranking. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get one A-share security's hot-stock rank trend over a date range. */
    "hithink_finance.get_hot_stock_rank_trend": {
      input: {
        /**
         * Complete A-share code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * First date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * Last date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Rows returned for this market-special-data query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get recent consolidated income statements for one A-share company. */
    "hithink_finance.get_income_statements": {
      input: {
        /**
         * Complete A-share code including the market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Financial statement reporting cadence. */
        period?: "annual" | "quarterly";
        /**
         * Number of recent reporting periods to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** Inclusive statement window start in milliseconds. */
        startTimeMs?: number;
        /** Inclusive statement window end in milliseconds. */
        endTimeMs?: number;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Financial statement rows ordered from newest to oldest. */
        item: Array<{
          /** Complete Tonghuashun security code. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Reporting cadence for the statement. */
          period?: string;
          /** Reporting period end as a Unix timestamp in milliseconds. */
          period_end_ms?: number;
          /** Report date as a Unix timestamp in milliseconds. */
          report_date_ms?: number;
          /** Fiscal year represented by the statement. */
          fiscal_year?: number;
          /** Fiscal period label returned by Tonghuashun. */
          fiscal_period?: string;
          /** Currency code for monetary fields. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the current constituents of one Tonghuashun sector or standard index. */
    "hithink_finance.get_index_constituents": {
      input: {
        /**
         * Complete index or sector code including the market suffix.
         * @minLength 1
         */
        thscode: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Current index constituents. */
        item: Array<{
          /** Complete constituent security code. */
          thscode?: string;
          /** Constituent code without the market suffix. */
          ticker?: string;
          /** Constituent security name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get daily historical prices for one index or sector over a specified window. */
    "hithink_finance.get_index_history": {
      input: {
        /**
         * Complete index or sector code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /** Inclusive history start as a Unix timestamp in milliseconds. */
        startTimeMs: number;
        /** Inclusive history end as a Unix timestamp in milliseconds. */
        endTimeMs: number;
      };
      output: {
        /** Latest available price-bar time in milliseconds. */
        timestamp: number;
        /** Historical daily price bars. */
        item: Array<{
          /** Trading date as a Unix timestamp in milliseconds. */
          date_ms?: number;
          /** Opening price. */
          open_price?: number | null;
          /** Highest price. */
          high_price?: number | null;
          /** Lowest price. */
          low_price?: number | null;
          /** Closing price. */
          close_price?: number | null;
          /** Trading volume in shares. */
          volume?: number | null;
          /** Trading turnover in the original currency. */
          turnover?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the latest market snapshot for a limited set of indexes or sectors. */
    "hithink_finance.get_index_snapshot": {
      input: {
        /**
         * Complete Tonghuashun security codes to query.
         * @minItems 1
         */
        thscodes: Array<string>;
      };
      output: {
        /** Latest available upstream data time in milliseconds. */
        timestamp: number | null;
        /** Number of instruments represented by the upstream result. */
        total: number;
        /** Latest market snapshot rows. */
        item: Array<{
          /** Complete Tonghuashun security code. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Latest traded price in the original currency. */
          last_price?: number | null;
          /** Price change from the previous close. */
          price_change?: number | null;
          /** Percentage change from the previous close. */
          price_change_ratio_pct?: number | null;
          /** Opening price for the trading day. */
          open_price?: number | null;
          /** Highest price for the trading day. */
          high_price?: number | null;
          /** Lowest price for the trading day. */
          low_price?: number | null;
          /** Previous closing price. */
          prev_price?: number | null;
          /** Trading volume in shares. */
          volume?: number | null;
          /** Trading turnover in the original currency. */
          turnover?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the fixed 30-trading-day Tonghuashun consecutive-limit-up ladder. */
    "hithink_finance.get_limit_up_ladder": {
      input: Record<string, never>;
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Window dates and board-cap metadata. */
        window: Record<string, unknown>;
        /** Daily consecutive-limit-up ladder rows. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get today's anomaly explanations for up to 50 selected A-share securities. */
    "hithink_finance.get_stock_anomalies": {
      input: {
        /**
         * Complete A-share codes to query.
         * @minItems 1
         * @maxItems 50
         */
        thscodes: Array<string>;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Rows returned for this market-special-data query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get daily historical prices for one A-share security over a specified window. */
    "hithink_finance.get_stock_history": {
      input: {
        /**
         * Complete A-share code including the .SH, .SZ, or .BJ suffix.
         * @minLength 1
         */
        thscode: string;
        /** Inclusive history start as a Unix timestamp in milliseconds. */
        startTimeMs: number;
        /** Inclusive history end as a Unix timestamp in milliseconds. */
        endTimeMs: number;
        /** Price adjustment method. */
        adjust?: "none" | "forward" | "backward";
        /**
         * Pagination offset for the historical series.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Latest available price-bar time in milliseconds. */
        timestamp: number;
        /** Historical daily price bars. */
        item: Array<{
          /** Trading date as a Unix timestamp in milliseconds. */
          date_ms?: number;
          /** Opening price. */
          open_price?: number | null;
          /** Highest price. */
          high_price?: number | null;
          /** Lowest price. */
          low_price?: number | null;
          /** Closing price. */
          close_price?: number | null;
          /** Trading volume in shares. */
          volume?: number | null;
          /** Trading turnover in the original currency. */
          turnover?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get selected-security or paginated all-market A-share snapshots. */
    "hithink_finance.get_stock_snapshot": {
      input: {
        /**
         * Complete A-share codes for selected-security mode.
         * @minItems 1
         */
        thscodes?: Array<string>;
        /**
         * Maximum stocks in an all-market page.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Number of all-market stocks to skip before this page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Latest available upstream data time in milliseconds. */
        timestamp: number | null;
        /** Number of instruments represented by the upstream result. */
        total: number;
        /** Latest market snapshot rows. */
        item: Array<{
          /** Complete Tonghuashun security code. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Latest traded price in the original currency. */
          last_price?: number | null;
          /** Price change from the previous close. */
          price_change?: number | null;
          /** Percentage change from the previous close. */
          price_change_ratio_pct?: number | null;
          /** Opening price for the trading day. */
          open_price?: number | null;
          /** Highest price for the trading day. */
          high_price?: number | null;
          /** Lowest price for the trading day. */
          low_price?: number | null;
          /** Previous closing price. */
          prev_price?: number | null;
          /** Trading volume in shares. */
          volume?: number | null;
          /** Trading turnover in the original currency. */
          turnover?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the latest fixed set of valuation ratios for up to 100 A-share securities. */
    "hithink_finance.get_valuation_snapshot": {
      input: {
        /**
         * Complete A-share codes to query.
         * @minItems 1
         * @maxItems 100
         */
        thscodes: Array<string>;
      };
      output: {
        /** Latest available upstream valuation time in milliseconds. */
        timestamp: number | null;
        /** Number of valuation rows returned. */
        total: number;
        /** Valuation rows in requested security order. */
        item: Array<{
          /** Complete Tonghuashun security code. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Security name when available. */
          name?: string | null;
          /** Trailing twelve-month price-to-earnings ratio. */
          pe_ttm?: number | null;
          /** Most recent quarter price-to-earnings ratio. */
          pe_mrq?: number | null;
          /** Most recent quarter price-to-book ratio. */
          pb_mrq?: number | null;
          /** Trailing twelve-month price-to-sales ratio. */
          ps_ttm?: number | null;
          /** Trailing twelve-month price-to-cash-flow ratio. */
          pcf_ttm?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List valid bond-holdings report periods for one public fund. */
    "hithink_finance.list_fund_bond_report_dates": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Optional report type used to narrow available dates.
         * @minLength 1
         */
        reportType?: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List public fund news metadata using the upstream opaque cursor. */
    "hithink_finance.list_fund_news": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Maximum articles to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque cursor returned by the previous page.
         * @minLength 1
         */
        offset?: string;
      };
      output: {
        /** Data-ready time in milliseconds. */
        timestamp: number;
        /** Article limit applied by Tonghuashun. */
        limit: number;
        /** Opaque cursor for the next page when present. */
        offset: string | null;
        /** Whether another page is available. */
        has_more: boolean;
        /** Fund news metadata rows. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List active or upcoming public-fund offerings. */
    "hithink_finance.list_fund_offerings": {
      input: {
        /** Offering subscription status. */
        subscriptionStatus: "active" | "upcoming";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List valid stock-holdings report periods for one public fund. */
    "hithink_finance.list_fund_stock_report_dates": {
      input: {
        /** Fund market type. */
        fundType: "otc" | "exchange" | "reits";
        /**
         * Complete fund code including its market suffix.
         * @minLength 1
         */
        thscode: string;
        /**
         * Optional report type used to narrow available dates.
         * @minLength 1
         */
        reportType?: string;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp?: number;
        /** Fund data rows returned for this query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the current Tonghuashun hot-stock ranking. */
    "hithink_finance.list_hot_stocks": {
      input: {
        /** Ranking period. */
        period?: "day" | "hour";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Rows returned for this market-special-data query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List stocks that touched their limit-up price and subsequently reopened. */
    "hithink_finance.list_limit_break_stocks": {
      input: {
        /** Trading date at Shanghai midnight in milliseconds. */
        dateMs?: number;
        /**
         * One-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of stocks per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** Field used to sort the pool. */
        sortField?: "price_change_ratio_pct" | "open_times" | "last_price" | "turnover_ratio_pct" | "turnover";
        /** Sort direction. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Pagination information for a market pool. */
        pagination: {
          /** Total number of matching stocks. */
          total: number;
          /** Total number of available pages. */
          pages: number;
          /** Page size applied by Tonghuashun. */
          size: number;
          /** Current one-based page number. */
          page: number;
          [key: string]: unknown;
        };
        /** Stocks in the requested market pool page. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List stocks in the Tonghuashun A-share limit-down pool. */
    "hithink_finance.list_limit_down_stocks": {
      input: {
        /** Trading date at Shanghai midnight in milliseconds. */
        dateMs?: number;
        /**
         * One-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of stocks per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** Field used to sort the pool. */
        sortField?: "last_limit_time" | "first_limit_time" | "last_price" | "price_change_ratio_pct" | "turnover_ratio_pct";
        /** Sort direction. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Pagination information for a market pool. */
        pagination: {
          /** Total number of matching stocks. */
          total: number;
          /** Total number of available pages. */
          pages: number;
          /** Page size applied by Tonghuashun. */
          size: number;
          /** Current one-based page number. */
          page: number;
          [key: string]: unknown;
        };
        /** Stocks in the requested market pool page. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List stocks in the Tonghuashun limit-up and consecutive-limit-up pool. */
    "hithink_finance.list_limit_up_stocks": {
      input: {
        /** Trading date at Shanghai midnight in milliseconds. */
        dateMs?: number;
        /**
         * One-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of stocks per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** Field used to sort the pool. */
        sortField?: "last_price" | "continue_day_cnt" | "seal_money" | "limit_up_time";
        /** Sort direction. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Pagination information for a market pool. */
        pagination: {
          /** Total number of matching stocks. */
          total: number;
          /** Total number of available pages. */
          pages: number;
          /** Page size applied by Tonghuashun. */
          size: number;
          /** Current one-based page number. */
          page: number;
          [key: string]: unknown;
        };
        /** Stocks in the requested market pool page. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the current Tonghuashun skyrocketing-stock ranking. */
    "hithink_finance.list_skyrocketing_stocks": {
      input: {
        /** Ranking period. */
        period?: "day" | "hour";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Rows returned for this market-special-data query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List today's A-share anomaly explanations with optional anomaly-tag filters. */
    "hithink_finance.list_stock_anomalies": {
      input: {
        /**
         * Anomaly tags combined with OR semantics.
         * @minItems 1
         */
        tagCodes?: Array<"LIMIT_UP" | "LIMIT_DOWN" | "SHARP_RISE" | "SHARP_FALL" | "RAPID_RALLY" | "RAPID_DECLINE">;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Rows returned for this market-special-data query. */
        item: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List Tonghuashun concepts, regions, special indexes, or industry sectors. */
    "hithink_finance.list_ths_indexes": {
      input: {
        /** Index or sector category to list. */
        tag?: "cn_concept" | "region" | "tszs" | "industry";
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Indexes or sectors in the selected category. */
        item: Array<{
          /** Complete index or sector code. */
          thscode?: string;
          /** Index or sector display name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a bounded page of Tonghuashun instruments by exchange and asset category. */
    "hithink_finance.list_tickers": {
      input: {
        /**
         * Exchange suffixes used to filter the code table.
         * @minItems 1
         */
        exchanges?: Array<"SH" | "SZ" | "BJ">;
        /**
         * Asset categories used to filter the code table.
         * @minItems 1
         */
        assetTypes?: Array<"a-share" | "a-share-index" | "forex" | "fund-otc" | "fund-etf" | "fund-lof" | "fund-reits">;
        /**
         * Maximum instruments to return in this page.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Number of instruments to skip before this page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Financial instruments matching the request. */
        item: Array<{
          /** Complete Tonghuashun security code including the market suffix. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Display name of the financial instrument. */
          name?: string;
          /** Exchange suffix when the instrument has one. */
          exchange?: string | null;
          /** Asset category returned by Tonghuashun. */
          asset_type?: string;
          /** Currency code for the instrument. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List A-share trading days in the service's latest one-year window. */
    "hithink_finance.list_trading_days": {
      input: Record<string, never>;
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Trading days ordered from oldest to newest. */
        item: Array<{
          /** Trading date as a Unix timestamp in milliseconds. */
          date_ms?: number;
          /** Trading date in YYYYMMDD format. */
          date?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Tonghuashun instruments by code or Chinese or English name. */
    "hithink_finance.search_tickers": {
      input: {
        /**
         * Code, ticker, Chinese name, or English name to search for.
         * @minLength 1
         */
        query: string;
        /** Optional exchange filter. */
        exchange?: "SH" | "SZ" | "BJ";
        /**
         * Optional asset categories used to narrow the search.
         * @minItems 1
         */
        assetTypes?: Array<"a-share" | "a-share-index" | "forex" | "fund-otc" | "fund-etf" | "fund-lof" | "fund-reits">;
        /**
         * Maximum number of matches to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Data-ready time as a Unix timestamp in milliseconds. */
        timestamp: number;
        /** Financial instruments matching the request. */
        item: Array<{
          /** Complete Tonghuashun security code including the market suffix. */
          thscode?: string;
          /** Security code without the market suffix. */
          ticker?: string;
          /** Display name of the financial instrument. */
          name?: string;
          /** Exchange suffix when the instrument has one. */
          exchange?: string | null;
          /** Asset category returned by Tonghuashun. */
          asset_type?: string;
          /** Currency code for the instrument. */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
