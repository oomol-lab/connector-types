import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Gangtise A-share company indicator values as a time series or a single-date cross section. */
    "gangtise.get_company_indicators": {
      input: ({
        /** The official indicator query shape to use. */
        mode: "time_series" | "cross_section";
        /**
         * The exact Gangtise indicator codes to query.
         * @minItems 1
         */
        indicatorCodes: Array<string>;
        /**
         * The exact A-share security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first value date; required for time_series mode and ignored for cross_section.
         * @format date
         */
        startDate?: string;
        /**
         * The last value date for time_series mode or the observation date for cross_section mode.
         * @format date
         */
        endDate: string;
        /**
         * The calendar used by time-series queries.
         * @default "TD"
         */
        calendarType?: "TD" | "CD";
        /**
         * The official Gangtise indicator scale value.
         * @minLength 1
         * @pattern \S
         * @default "0"
         */
        scale?: string;
        /**
         * Per-indicator parameter values discovered through search_company_indicators.
         * @minItems 1
         */
        indicatorParameters?: Array<{
          /**
           * The indicator code these parameters apply to.
           * @minLength 1
           * @pattern \S
           */
          indicatorCode: string;
          /** The parameter keys and values accepted by the official indicator. */
          parameters: Record<string, unknown>;
        }>;
      }) & ({
        /** The time-series query mode. */
        mode: "time_series";
        /**
         * The first value date for the time series.
         * @format date
         */
        startDate: string;
        [key: string]: unknown;
      } | {
        /** The cross-section query mode. */
        mode: "cross_section";
        [key: string]: unknown;
      });
      output: {
        /** The query mode used for this result. */
        mode: "time_series" | "cross_section";
        /** The normalized indicator values. */
        rows: Array<{
          /** The value date, or null when unavailable. */
          date: string | null;
          /**
           * The Gangtise security code.
           * @minLength 1
           */
          securityCode: string;
          /** The security name, or null when unavailable. */
          securityName: string | null;
          /**
           * The Gangtise indicator code.
           * @minLength 1
           */
          indicatorCode: string;
          /** The indicator name, or null when unavailable. */
          indicatorName: string | null;
          /** The indicator value, or null when unavailable. */
          value: number | string | null;
        }>;
        /**
         * The number of upstream value cells returned.
         * @minimum 0
         */
        cellCount: number;
        /**
         * The estimated Gangtise points charged for the returned cells.
         * @minimum 0
         */
        estimatedPoints: number;
      };
    };
    /** Get Gangtise unadjusted daily K-line market data for exact security codes in one supported market. */
    "gangtise.get_daily_kline": {
      input: {
        /** The Gangtise market to query. */
        market: "a_share" | "hong_kong" | "united_states" | "index";
        /**
         * The exact Gangtise security codes valid for the selected market.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first trading date to include.
         * @format date
         */
        startDate: string;
        /**
         * The last trading date to include.
         * @format date
         */
        endDate: string;
        /**
         * The maximum number of rows to return.
         * @minimum 1
         * @maximum 10000
         * @default 5000
         */
        limit?: number;
      };
      output: {
        /** The Gangtise market to query. */
        market: "a_share" | "hong_kong" | "united_states" | "index";
        /** The returned daily K-line rows. */
        rows: Array<{
          /** The Gangtise security code for this row. */
          securityCode: string | null;
          /** The trading date returned by Gangtise. */
          tradeDate: string | null;
          /** The opening price, or null when unavailable. */
          open: number | string | null;
          /** The highest price, or null when unavailable. */
          high: number | string | null;
          /** The lowest price, or null when unavailable. */
          low: number | string | null;
          /** The closing price, or null when unavailable. */
          close: number | string | null;
          /** The previous closing price, or null when unavailable. */
          preClose: number | string | null;
          /** The absolute price change, or null when unavailable. */
          change: number | string | null;
          /** The percentage price change, or null when unavailable. */
          pctChange: number | string | null;
          /** The trading volume, or null when unavailable. */
          volume: number | string | null;
          /** The trading amount, or null when unavailable. */
          amount: number | string | null;
        }>;
      };
    };
    /** Get Gangtise broker-consensus earnings forecasts for exact security codes. */
    "gangtise.get_earnings_forecast": {
      input: {
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first forecast update date to include.
         * @format date
         */
        startDate: string;
        /**
         * The last forecast update date to include.
         * @format date
         */
        endDate: string;
        /**
         * The consensus forecast fields to return.
         * @minItems 1
         * @maxItems 9
         */
        consensusFields?: Array<"netIncome" | "netIncomeYoy" | "eps" | "pe" | "bps" | "pb" | "peg" | "roe" | "ps">;
      };
      output: {
        /** The consensus forecast rows. */
        rows: Array<{
          /**
           * The Gangtise security code.
           * @minLength 1
           */
          securityCode: string;
          /** The security name, or null when unavailable. */
          securityName: string | null;
          /**
           * The forecast update date.
           * @minLength 1
           */
          updateDate: string;
          /**
           * The fiscal year covered by this forecast.
           * @minLength 1
           */
          forecastYear: string;
          /** The forecast net income, or null when unavailable. */
          netIncome: number | string | null;
          /** The forecast year-over-year net income growth, or null when unavailable. */
          netIncomeYoy: number | string | null;
          /** The forecast earnings per share, or null when unavailable. */
          eps: number | string | null;
          /** The forecast price-to-earnings ratio, or null when unavailable. */
          pe: number | string | null;
          /** The forecast book value per share, or null when unavailable. */
          bps: number | string | null;
          /** The forecast price-to-book ratio, or null when unavailable. */
          pb: number | string | null;
          /** The forecast PEG ratio, or null when unavailable. */
          peg: number | string | null;
          /** The forecast return on equity, or null when unavailable. */
          roe: number | string | null;
          /** The forecast price-to-sales ratio, or null when unavailable. */
          ps: number | string | null;
        }>;
      };
    };
    /** Get Gangtise income statements, balance sheets, or cash-flow statements for exact security codes. */
    "gangtise.get_financial_statements": {
      input: ({
        /** The Gangtise company financial market to query. */
        market: "a_share" | "hong_kong" | "united_states";
        /** The financial statement to retrieve. */
        statement: "income" | "balance_sheet" | "cash_flow";
        /**
         * Whether values are accumulated or single-quarter values.
         * @default "accumulated"
         */
        granularity?: "accumulated" | "quarterly";
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first report date to include.
         * @format date
         */
        startDate?: string;
        /**
         * The last report date to include.
         * @format date
         */
        endDate?: string;
        /**
         * The fiscal years to include.
         * @minItems 1
         */
        fiscalYears?: Array<string>;
        /**
         * The report periods to include.
         * @minItems 1
         */
        periods?: Array<"Q0" | "Q1" | "Q2" | "Q3" | "Q4">;
        /**
         * The report consolidation types to include.
         * @minItems 1
         */
        reportTypes?: Array<"consolidated" | "consolidatedRestated" | "standalone" | "standaloneRestated">;
        /**
         * The official financial statement fields to return.
         * @minItems 1
         */
        fields?: Array<string>;
      }) & ({
        /** The A-share market. */
        market: "a_share";
        /** A statement with quarterly support. */
        statement: "income" | "cash_flow";
        /** A supported A-share statement granularity. */
        granularity: "accumulated" | "quarterly";
        [key: string]: unknown;
      } | {
        /** The A-share market. */
        market: "a_share";
        /** The balance-sheet statement. */
        statement: "balance_sheet";
        /** The accumulated report granularity. */
        granularity: "accumulated";
        [key: string]: unknown;
      } | {
        /** A market that supports accumulated statements only. */
        market: "hong_kong" | "united_states";
        /** A supported company financial statement. */
        statement: "income" | "balance_sheet" | "cash_flow";
        /** The accumulated report granularity. */
        granularity: "accumulated";
        [key: string]: unknown;
      });
      output: {
        /** The Gangtise company financial market to query. */
        market: "a_share" | "hong_kong" | "united_states";
        /** The returned statement type. */
        statement: "income" | "balance_sheet" | "cash_flow";
        /** The returned report granularity. */
        granularity: "accumulated" | "quarterly";
        /** The returned statement rows. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Get historical A-share daily small, medium, large, extra-large, total, and main-fund net inflows. */
    "gangtise.get_fund_flow": {
      input: {
        /**
         * The exact A-share security codes, or the official aShares token for the full market.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first trading date to include.
         * @format date
         */
        startDate: string;
        /**
         * The last trading date to include.
         * @format date
         */
        endDate: string;
        /**
         * The maximum number of rows to return.
         * @minimum 1
         * @maximum 10000
         * @default 5000
         */
        limit?: number;
      };
      output: {
        /** The returned fund-flow rows. */
        rows: Array<{
          /** The Gangtise security code for this row. */
          securityCode: string | null;
          /** The trading date returned by Gangtise. */
          tradeDate: string | null;
          /** The small-order net inflow, or null when unavailable. */
          smallNetInflow: number | string | null;
          /** The medium-order net inflow, or null when unavailable. */
          mediumNetInflow: number | string | null;
          /** The large-order net inflow, or null when unavailable. */
          largeNetInflow: number | string | null;
          /** The extra-large-order net inflow, or null when unavailable. */
          xlargeNetInflow: number | string | null;
          /** The total net inflow, or null when unavailable. */
          totalNetInflow: number | string | null;
          /** The main-fund net inflow, or null when unavailable. */
          mainNetInflow: number | string | null;
        }>;
      };
    };
    /** Get a company's main-business revenue and profitability breakdown by product, industry, or region. */
    "gangtise.get_main_business_breakdown": {
      input: {
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first report date to include.
         * @format date
         */
        startDate: string;
        /**
         * The last report date to include.
         * @format date
         */
        endDate: string;
        /** The business breakdown dimension. */
        breakdown: "product" | "industry" | "region";
        /** The optional report period filter. */
        period?: "interim" | "annual";
      };
      output: {
        /** The main-business breakdown rows. */
        rows: Array<{
          /**
           * The Gangtise security code.
           * @minLength 1
           */
          securityCode: string;
          /** The security name, or null when unavailable. */
          securityName: string | null;
          /** The dimension used for this row. */
          breakdown: "product" | "industry" | "region";
          /** The reporting period name, or null when unavailable. */
          periodName: string | null;
          /** The reporting period end date, or null when unavailable. */
          periodEndDate: string | null;
          /** The product, industry, or region name. */
          categoryName: string | null;
          /** The operating revenue, or null when unavailable. */
          opRevenue: number | string | null;
          /** The year-over-year operating revenue growth, or null when unavailable. */
          opRevenueYoy: number | string | null;
          /** The operating revenue contribution ratio, or null when unavailable. */
          opRevenueRatio: number | string | null;
          /** The operating cost, or null when unavailable. */
          opCost: number | string | null;
          /** The year-over-year operating cost growth, or null when unavailable. */
          opCostYoy: number | string | null;
          /** The operating cost contribution ratio, or null when unavailable. */
          opCostRatio: number | string | null;
          /** The gross profit, or null when unavailable. */
          grossProfit: number | string | null;
          /** The year-over-year gross profit growth, or null when unavailable. */
          grossProfitYoy: number | string | null;
          /** The gross profit contribution ratio, or null when unavailable. */
          grossProfitRatio: number | string | null;
          /** The gross margin, or null when unavailable. */
          grossMargin: number | string | null;
          /** The year-over-year gross margin growth, or null when unavailable. */
          grossMarginYoy: number | string | null;
          /** The gross margin contribution ratio, or null when unavailable. */
          grossMarginRatio: number | string | null;
        }>;
      };
    };
    /** Get historical minute K-line data for one or more exact A-share security codes. */
    "gangtise.get_minute_kline": {
      input: {
        /**
         * The exact A-share security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first timestamp to include, using YYYY-MM-DD HH:mm:ss or an accepted official timestamp format.
         * @minLength 1
         * @pattern \S
         */
        startTime: string;
        /**
         * The last timestamp to include, using YYYY-MM-DD HH:mm:ss or an accepted official timestamp format.
         * @minLength 1
         * @pattern \S
         */
        endTime: string;
        /**
         * The maximum number of rows requested per security.
         * @minimum 1
         * @maximum 10000
         * @default 5000
         */
        limit?: number;
      };
      output: {
        /** The returned minute K-line rows. */
        rows: Array<{
          /** The Gangtise security code for this row. */
          securityCode: string | null;
          /** The minute timestamp returned by Gangtise. */
          tradeTime: string | null;
          /** The opening price, or null when unavailable. */
          open: number | string | null;
          /** The highest price, or null when unavailable. */
          high: number | string | null;
          /** The lowest price, or null when unavailable. */
          low: number | string | null;
          /** The closing price, or null when unavailable. */
          close: number | string | null;
          /** The absolute price change, or null when unavailable. */
          change: number | string | null;
          /** The percentage price change, or null when unavailable. */
          pctChange: number | string | null;
          /** The trading volume, or null when unavailable. */
          volume: number | string | null;
          /** The trading amount, or null when unavailable. */
          amount: number | string | null;
        }>;
      };
    };
    /** Get current Gangtise market snapshots for one or more exact security codes. */
    "gangtise.get_realtime_quotes": {
      input: {
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
      };
      output: {
        /** The returned real-time quotes. */
        quotes: Array<{
          /** The Gangtise security code for this quote. */
          securityCode: string | null;
          /** The exchange identifier returned by Gangtise. */
          exchange: string | null;
          /** The trading date returned by Gangtise. */
          tradeDate: string | null;
          /** The quote time returned by Gangtise. */
          tradeTime: string | null;
          /** The latest price, or null when unavailable. */
          latestPrice: number | string | null;
          /** The opening price, or null when unavailable. */
          open: number | string | null;
          /** The highest price, or null when unavailable. */
          high: number | string | null;
          /** The lowest price, or null when unavailable. */
          low: number | string | null;
          /** The previous closing price, or null when unavailable. */
          preClose: number | string | null;
          /** The absolute price change, or null when unavailable. */
          change: number | string | null;
          /** The percentage price change, or null when unavailable. */
          pctChange: number | string | null;
          /** The trading volume, or null when unavailable. */
          volume: number | string | null;
          /** The trading amount, or null when unavailable. */
          amount: number | string | null;
          /** The trading amplitude, or null when unavailable. */
          amplitude: number | string | null;
        }>;
      };
    };
    /** Get the top ten shareholders or top ten floating shareholders for exact security codes. */
    "gangtise.get_top_shareholders": {
      input: {
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /** The shareholder table to retrieve. */
        holderType: "top10" | "top10Float";
        /**
         * The first report date to include.
         * @format date
         */
        startDate?: string;
        /**
         * The last report date to include.
         * @format date
         */
        endDate?: string;
        /**
         * The fiscal years to include.
         * @minItems 1
         */
        fiscalYears?: Array<string>;
        /**
         * The report periods to include.
         * @minItems 1
         */
        periods?: Array<"q1" | "interim" | "q3" | "annual" | "latest">;
      };
      output: {
        /** The top-shareholder rows. */
        rows: Array<{
          /**
           * The Gangtise security code.
           * @minLength 1
           */
          securityCode: string;
          /** The requested shareholder table. */
          holderType: "top10" | "top10Float";
          /** The report period, or null when unavailable. */
          reportPeriod: string | null;
          /** The shareholder rank, or null when unavailable. */
          rank: number | string | null;
          /** The shareholder name, or null when unavailable. */
          shareholderName: string | null;
          /** The shareholder type, or null when unavailable. */
          shareholderType: string | null;
          /** The number of shares held, or null when unavailable. */
          holdingNum: number | string | null;
          /** The holding percentage, or null when unavailable. */
          holdingPct: number | string | null;
          /** The holding change amount, or null when unavailable. */
          chgNum: number | string | null;
          /** The holding change percentage, or null when unavailable. */
          chgPct: number | string | null;
          /** The share category, or null when unavailable. */
          shareCategory: string | null;
        }>;
      };
    };
    /** Get Gangtise valuation metrics and their percentile ranks over a requested date range. */
    "gangtise.get_valuation_metrics": {
      input: {
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities: Array<string>;
        /**
         * The first valuation date to include.
         * @format date
         */
        startDate: string;
        /**
         * The last valuation date to include.
         * @format date
         */
        endDate: string;
        /**
         * The valuation indicators to retrieve.
         * @minItems 1
         * @maxItems 6
         */
        indicators?: Array<"peTtm" | "psTtm" | "pbMrq" | "peg" | "pcfTtm" | "em">;
        /**
         * The maximum rows requested for each security and indicator.
         * @minimum 1
         * @maximum 10000
         * @default 2000
         */
        limit?: number;
      };
      output: {
        /** The valuation observations. */
        rows: Array<{
          /**
           * The Gangtise security code.
           * @minLength 1
           */
          securityCode: string;
          /**
           * The official Gangtise valuation indicator code.
           * @minLength 1
           */
          indicator: string;
          /** The valuation observation date, or null when unavailable. */
          tradeDate: string | null;
          /** The valuation metric value, or null when unavailable. */
          value: number | string | null;
          /** The metric percentile within the requested range, or null when unavailable. */
          percentileRank: number | string | null;
        }>;
      };
    };
    /** Search Gangtise company announcement indexes without downloading source files. */
    "gangtise.search_announcements": {
      input: {
        /** The announcement market to query. */
        market: "a_share" | "hong_kong" | "united_states";
        /**
         * The announcement keyword to search for.
         * @minLength 1
         * @pattern \S
         */
        keyword?: string;
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities?: Array<string>;
        /**
         * The first publication date to include.
         * @format date
         */
        startDate?: string;
        /**
         * The last publication date to include.
         * @format date
         */
        endDate?: string;
        /**
         * Whether to search titles or full text.
         * @default "title"
         */
        searchType?: "title" | "full_text";
        /**
         * How to rank the returned results.
         * @default "relevance"
         */
        rankType?: "relevance" | "latest";
        /**
         * The zero-based result offset.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The matching research items. */
        results: Array<{
          /**
           * The Gangtise resource identifier.
           * @minLength 1
           */
          id: string;
          /** The research-content type. */
          type: "report" | "meeting_summary" | "announcement";
          /**
           * The resource title.
           * @minLength 1
           */
          title: string;
          /** The publication time, or null when unavailable. */
          publishedAt: string | null;
          /** The publisher or source, or null when unavailable. */
          source: string | null;
          /** The author, or null when unavailable. */
          author: string | null;
          /** The resource summary, or null when unavailable. */
          summary: string | null;
          /** The extracted highlights, or null when unavailable. */
          highlights: string | null;
          /** The official resource URL, or null when unavailable. */
          url: string | null;
          /** The page count, or null when unavailable. */
          pageCount: number | null;
          /** The securities associated with this result. */
          securities: Array<{
            /** The Gangtise security code, or null when unavailable. */
            code: string | null;
            /** The security name, or null when unavailable. */
            name: string | null;
          }>;
        }>;
        /** The next offset when another page may exist, otherwise null. */
        nextOffset: number | null;
        /** The upstream total result count, or null when unavailable. */
        total: number | null;
      };
    };
    /** Search Gangtise A-share company indicators before requesting time-series or cross-section values. */
    "gangtise.search_company_indicators": {
      input: {
        /**
         * A specific indicator keyword such as close price or ROE.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The maximum number of indicator matches to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The matching company indicators. */
        indicators: Array<{
          /**
           * The indicator code required by indicator data requests.
           * @minLength 1
           */
          indicatorCode: string;
          /**
           * The human-readable indicator name.
           * @minLength 1
           */
          indicatorName: string;
          /** The indicator description, or null when unavailable. */
          description: string | null;
          /** The search relevance score, or null when unavailable. */
          score: number | null;
          /** The supported market and security scopes. */
          scopeList: Array<Record<string, unknown>>;
          /** The optional or required parameters accepted by this indicator. */
          parameterList: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Search Gangtise meeting and research summaries without downloading source files. */
    "gangtise.search_meeting_summaries": {
      input: {
        /**
         * The keyword to search for.
         * @minLength 1
         * @pattern \S
         */
        keyword?: string;
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities?: Array<string>;
        /**
         * The first publication date to include.
         * @format date
         */
        startDate?: string;
        /**
         * The last publication date to include.
         * @format date
         */
        endDate?: string;
        /**
         * Whether to search titles or full text.
         * @default "title"
         */
        searchType?: "title" | "full_text";
        /**
         * The zero-based result offset.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The matching research items. */
        results: Array<{
          /**
           * The Gangtise resource identifier.
           * @minLength 1
           */
          id: string;
          /** The research-content type. */
          type: "report" | "meeting_summary" | "announcement";
          /**
           * The resource title.
           * @minLength 1
           */
          title: string;
          /** The publication time, or null when unavailable. */
          publishedAt: string | null;
          /** The publisher or source, or null when unavailable. */
          source: string | null;
          /** The author, or null when unavailable. */
          author: string | null;
          /** The resource summary, or null when unavailable. */
          summary: string | null;
          /** The extracted highlights, or null when unavailable. */
          highlights: string | null;
          /** The official resource URL, or null when unavailable. */
          url: string | null;
          /** The page count, or null when unavailable. */
          pageCount: number | null;
          /** The securities associated with this result. */
          securities: Array<{
            /** The Gangtise security code, or null when unavailable. */
            code: string | null;
            /** The security name, or null when unavailable. */
            name: string | null;
          }>;
        }>;
        /** The next offset when another page may exist, otherwise null. */
        nextOffset: number | null;
        /** The upstream total result count, or null when unavailable. */
        total: number | null;
      };
    };
    /** Search Gangtise domestic broker research reports without downloading report files. */
    "gangtise.search_reports": {
      input: {
        /**
         * The keyword to search for.
         * @minLength 1
         * @pattern \S
         */
        keyword?: string;
        /**
         * The exact Gangtise security codes to query.
         * @minItems 1
         */
        securities?: Array<string>;
        /**
         * The first publication date to include.
         * @format date
         */
        startDate?: string;
        /**
         * The last publication date to include.
         * @format date
         */
        endDate?: string;
        /**
         * Whether to search titles or full text.
         * @default "title"
         */
        searchType?: "title" | "full_text";
        /**
         * How to rank the returned results.
         * @default "relevance"
         */
        rankType?: "relevance" | "latest";
        /**
         * The zero-based result offset.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The matching research items. */
        results: Array<{
          /**
           * The Gangtise resource identifier.
           * @minLength 1
           */
          id: string;
          /** The research-content type. */
          type: "report" | "meeting_summary" | "announcement";
          /**
           * The resource title.
           * @minLength 1
           */
          title: string;
          /** The publication time, or null when unavailable. */
          publishedAt: string | null;
          /** The publisher or source, or null when unavailable. */
          source: string | null;
          /** The author, or null when unavailable. */
          author: string | null;
          /** The resource summary, or null when unavailable. */
          summary: string | null;
          /** The extracted highlights, or null when unavailable. */
          highlights: string | null;
          /** The official resource URL, or null when unavailable. */
          url: string | null;
          /** The page count, or null when unavailable. */
          pageCount: number | null;
          /** The securities associated with this result. */
          securities: Array<{
            /** The Gangtise security code, or null when unavailable. */
            code: string | null;
            /** The security name, or null when unavailable. */
            name: string | null;
          }>;
        }>;
        /** The next offset when another page may exist, otherwise null. */
        nextOffset: number | null;
        /** The upstream total result count, or null when unavailable. */
        total: number | null;
      };
    };
    /** Search Gangtise securities by name, code, abbreviation, or pinyin before requesting market data. */
    "gangtise.search_securities": {
      input: {
        /**
         * The security name, code, abbreviation, or pinyin keyword to search for.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * Optional security categories to include in the search.
         * @minItems 1
         * @maxItems 4
         */
        categories?: Array<"stock" | "dr" | "index" | "fund">;
        /**
         * The maximum number of matches to request.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        top?: number;
      };
      output: {
        /** The matching securities. */
        results: Array<{
          /**
           * The Gangtise security code used by data endpoints.
           * @minLength 1
           */
          code: string;
          /**
           * The security name returned by Gangtise.
           * @minLength 1
           */
          name: string;
          /** The Gangtise security category, or null when omitted. */
          category: string | null;
          /** The upstream search match score, or null when omitted. */
          matchScore: number | null;
        }>;
      };
    };
  }
}
