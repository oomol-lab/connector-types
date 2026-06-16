import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve analyst estimate rows for one stock symbol. */
    "financial_modeling_prep.get_analyst_estimates": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The zero-based result page to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of analyst estimate rows to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The analyst estimate rows. */
        estimates: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the latest quote for a commodity, cryptocurrency, forex pair, or index. */
    "financial_modeling_prep.get_asset_quote": {
      input: {
        /** The market data asset family to quote. */
        assetType: "commodity" | "crypto" | "forex" | "index";
        /**
         * The asset symbol to quote, such as BTCUSD, EURUSD, GCUSD, or ^GSPC.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** A row returned by Financial Modeling Prep. */
        quote: Record<string, unknown>;
      };
    };
    /** Retrieve balance sheet statement rows for one stock symbol from Financial Modeling Prep. */
    "financial_modeling_prep.get_balance_sheet_statement": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of statement rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The balance sheet statement rows. */
        statements: Array<{
          /** The stock ticker symbol. */
          symbol?: string;
          /** The statement date in YYYY-MM-DD format. */
          date?: string;
          /** The statement period returned by Financial Modeling Prep. */
          period?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve Financial Modeling Prep market calendar rows. */
    "financial_modeling_prep.get_calendar": {
      input: {
        /** The market calendar to retrieve. */
        type: "earnings" | "dividends" | "splits" | "ipos" | "economic";
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The market calendar rows. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve cash flow statement rows for one stock symbol from Financial Modeling Prep. */
    "financial_modeling_prep.get_cash_flow_statement": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of statement rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The cash flow statement rows. */
        statements: Array<{
          /** The stock ticker symbol. */
          symbol?: string;
          /** The statement date in YYYY-MM-DD format. */
          date?: string;
          /** The statement period returned by Financial Modeling Prep. */
          period?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve company executive rows for one stock symbol. */
    "financial_modeling_prep.get_company_executives": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The executive rows returned by Financial Modeling Prep. */
        executives: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve company note rows for one stock symbol. */
    "financial_modeling_prep.get_company_notes": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The company note rows returned by Financial Modeling Prep. */
        notes: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve peer companies for one stock symbol. */
    "financial_modeling_prep.get_company_peers": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The peer rows returned by Financial Modeling Prep. */
        peers: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the company profile for one stock symbol from Financial Modeling Prep. */
    "financial_modeling_prep.get_company_profile": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** A company profile object returned by Financial Modeling Prep. */
        profile: {
          /** The stock ticker symbol. */
          symbol?: string;
          /** The company name. */
          companyName?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve company profile rows by CIK from Financial Modeling Prep. */
    "financial_modeling_prep.get_company_profile_by_cik": {
      input: {
        /**
         * The company CIK to query.
         * @minLength 1
         */
        cik: string;
      };
      output: {
        /** The company profile rows. */
        profiles: Array<{
          /** The stock ticker symbol. */
          symbol?: string;
          /** The company name. */
          companyName?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve senate or house trading disclosure rows. */
    "financial_modeling_prep.get_congressional_trades": {
      input: {
        /** The congressional trading disclosure chamber to retrieve. */
        chamber: "senate" | "house";
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The representative or senator name to query.
         * @minLength 1
         */
        name?: string;
        /**
         * The zero-based result page to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of trading disclosure rows to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The congressional trading disclosure rows. */
        trades: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve discounted cash flow valuation rows for one stock symbol. */
    "financial_modeling_prep.get_dcf": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The discounted cash flow rows. */
        valuations: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve economic indicator rows such as GDP, CPI, or unemployment. */
    "financial_modeling_prep.get_economic_indicators": {
      input: {
        /**
         * The economic indicator name, such as GDP.
         * @minLength 1
         */
        name: string;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The economic indicator rows. */
        indicators: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve enterprise value rows for one stock symbol. */
    "financial_modeling_prep.get_enterprise_values": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of enterprise value rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The enterprise value rows. */
        values: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve ETF holding rows for one ETF symbol. */
    "financial_modeling_prep.get_etf_holdings": {
      input: {
        /**
         * The ETF symbol to query, such as SPY.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The ETF holding rows. */
        holdings: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve financial ratios for one stock symbol. */
    "financial_modeling_prep.get_financial_ratios": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of ratio rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The financial ratio rows. */
        ratios: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve financial score rows for one stock symbol. */
    "financial_modeling_prep.get_financial_scores": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The financial score rows. */
        scores: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve financial statement growth rows for income, balance sheet, cash flow, or combined financial statements. */
    "financial_modeling_prep.get_financial_statement_growth": {
      input: {
        /** The growth statement family to retrieve. */
        statementType: "income" | "balance_sheet" | "cash_flow" | "financial";
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of growth rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The financial statement growth rows. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve historical daily OHLCV prices for one stock symbol from Financial Modeling Prep. */
    "financial_modeling_prep.get_historical_prices": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The stock ticker symbol returned by Financial Modeling Prep. */
        symbol: string;
        /** The historical daily OHLCV rows. */
        historical: Array<{
          /** The trading date in YYYY-MM-DD format. */
          date: string;
          /** The opening price for the trading day. */
          open: number;
          /** The highest price for the trading day. */
          high: number;
          /** The lowest price for the trading day. */
          low: number;
          /** The closing price for the trading day. */
          close: number;
          /** The adjusted closing price for the trading day. */
          adjClose: number;
          /** The trading volume for the trading day. */
          volume: number;
        }>;
      };
    };
    /** Retrieve income statement rows for one stock symbol from Financial Modeling Prep. */
    "financial_modeling_prep.get_income_statement": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of statement rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The income statement rows. */
        statements: Array<{
          /** The stock ticker symbol. */
          symbol?: string;
          /** The statement date in YYYY-MM-DD format. */
          date?: string;
          /** The statement period returned by Financial Modeling Prep. */
          period?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve latest or searched insider trading disclosure rows. */
    "financial_modeling_prep.get_insider_trades": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The reporting owner CIK to query.
         * @minLength 1
         */
        reportingCik?: string;
        /**
         * The insider transaction type to query.
         * @minLength 1
         */
        transactionType?: string;
        /**
         * The zero-based result page to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of insider trade rows to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The insider trading disclosure rows. */
        trades: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve intraday OHLCV prices for one stock symbol. */
    "financial_modeling_prep.get_intraday_prices": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The intraday interval to retrieve. */
        interval: "1min" | "5min" | "15min" | "30min" | "1hour" | "4hour";
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The intraday OHLCV rows. */
        prices: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve key financial metrics for one stock symbol. */
    "financial_modeling_prep.get_key_metrics": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The financial statement period to retrieve. */
        period?: "annual" | "quarter";
        /**
         * The maximum number of metric rows to return.
         * @minimum 1
         * @maximum 120
         */
        limit?: number;
      };
      output: {
        /** The key metric rows. */
        metrics: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve latest market capitalization rows for one stock symbol. */
    "financial_modeling_prep.get_market_cap": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The market capitalization rows. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the current biggest gainers, losers, or most active stocks from Financial Modeling Prep. */
    "financial_modeling_prep.get_market_movers": {
      input: {
        /** The market mover list to retrieve from Financial Modeling Prep. */
        type: "gainers" | "losers" | "actives";
      };
      output: {
        /** The stock quote rows in the requested market mover list. */
        movers: Array<{
          /** The stock ticker symbol. */
          symbol?: string;
          /** The company or security name. */
          name?: string;
          /** The latest price returned by Financial Modeling Prep. */
          price?: number;
          /** The latest absolute price change. */
          change?: number;
          /** The latest price change percentage. */
          changesPercentage?: number;
          /** The lowest price during the current trading day. */
          dayLow?: number;
          /** The highest price during the current trading day. */
          dayHigh?: number;
          /** The 52-week high price. */
          yearHigh?: number;
          /** The 52-week low price. */
          yearLow?: number;
          /** The latest market capitalization. */
          marketCap?: number;
          /** The latest trading volume. */
          volume?: number;
          /** The average trading volume. */
          avgVolume?: number;
          /** The exchange returned by Financial Modeling Prep. */
          exchange?: string;
          /** The opening price for the current trading day. */
          open?: number;
          /** The previous close price. */
          previousClose?: number;
          /** The quote timestamp returned by Financial Modeling Prep. */
          timestamp?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve sector or industry market performance snapshot rows. */
    "financial_modeling_prep.get_market_performance": {
      input: {
        /** The market performance snapshot to retrieve. */
        type: "sector_performance" | "industry_performance" | "sector_pe" | "industry_pe";
      };
      output: {
        /** The market performance rows. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve latest or symbol-filtered Financial Modeling Prep news. */
    "financial_modeling_prep.get_news": {
      input: {
        /** The Financial Modeling Prep news feed to retrieve. */
        type: "general" | "press_releases" | "stock" | "crypto" | "forex";
        /**
         * A comma-separated list of symbols for symbol-specific news.
         * @minLength 1
         */
        symbols?: string;
        /**
         * The zero-based result page to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of news rows to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The news rows. */
        news: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the latest quote for one stock symbol from Financial Modeling Prep. */
    "financial_modeling_prep.get_quote": {
      input: {
        /**
         * The stock ticker symbol to quote, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** A normalized stock quote row. */
        quote: {
          /** The stock ticker symbol. */
          symbol?: string;
          /** The company or security name. */
          name?: string;
          /** The latest price returned by Financial Modeling Prep. */
          price?: number;
          /** The latest absolute price change. */
          change?: number;
          /** The latest price change percentage. */
          changesPercentage?: number;
          /** The lowest price during the current trading day. */
          dayLow?: number;
          /** The highest price during the current trading day. */
          dayHigh?: number;
          /** The 52-week high price. */
          yearHigh?: number;
          /** The 52-week low price. */
          yearLow?: number;
          /** The latest market capitalization. */
          marketCap?: number;
          /** The latest trading volume. */
          volume?: number;
          /** The average trading volume. */
          avgVolume?: number;
          /** The exchange returned by Financial Modeling Prep. */
          exchange?: string;
          /** The opening price for the current trading day. */
          open?: number;
          /** The previous close price. */
          previousClose?: number;
          /** The quote timestamp returned by Financial Modeling Prep. */
          timestamp?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the latest compact quote for one stock symbol. */
    "financial_modeling_prep.get_quote_short": {
      input: {
        /**
         * The stock ticker symbol to quote, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** A row returned by Financial Modeling Prep. */
        quote: Record<string, unknown>;
      };
    };
    /** Retrieve rating snapshot, historical rating, or historical grade rows. */
    "financial_modeling_prep.get_ratings": {
      input: {
        /** The ratings or grades endpoint to retrieve. */
        type: "ratings_snapshot" | "ratings_historical" | "grades" | "grades_historical" | "grades_summary" | "grades_consensus";
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /**
         * The maximum number of rating rows to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The rating or grade rows. */
        ratings: Array<Record<string, unknown>>;
      };
    };
    /** Search SEC filing rows by symbol, CIK, or form type. */
    "financial_modeling_prep.get_sec_filings": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The company CIK to query.
         * @minLength 1
         */
        cik?: string;
        /**
         * The SEC form type to query, such as 10-K.
         * @minLength 1
         */
        formType?: string;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
        /**
         * The zero-based result page to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of filing rows to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The SEC filing rows. */
        filings: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve shares float rows for one stock symbol. */
    "financial_modeling_prep.get_shares_float": {
      input: {
        /**
         * The stock ticker symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The shares float rows. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve technical indicator rows for one symbol. */
    "financial_modeling_prep.get_technical_indicator": {
      input: {
        /** The technical indicator endpoint to retrieve from Financial Modeling Prep. */
        indicator: "sma" | "ema" | "wma" | "dema" | "tema" | "rsi" | "standarddeviation" | "williams" | "adx";
        /**
         * The symbol to query, such as AAPL.
         * @minLength 1
         */
        symbol: string;
        /**
         * The look-back period length for the indicator.
         * @minimum 1
         * @maximum 500
         */
        periodLength?: number;
        /** The chart timeframe for the technical indicator calculation. */
        timeframe?: "1min" | "5min" | "15min" | "30min" | "1hour" | "4hour" | "1day";
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The technical indicator rows. */
        values: Array<Record<string, unknown>>;
      };
    };
    /** List Financial Modeling Prep directory rows such as stocks, ETFs, and exchanges. */
    "financial_modeling_prep.list_directory": {
      input: {
        /** The directory list to retrieve. */
        type: "stocks" | "financial_symbols" | "financial_statement_symbols" | "cik" | "symbol_changes" | "etfs" | "actively_trading" | "exchanges" | "sectors" | "industries" | "countries";
      };
      output: {
        /** The directory rows. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Search companies with Financial Modeling Prep screener filters. */
    "financial_modeling_prep.search_company_screener": {
      input: {
        /**
         * Only include companies above this market cap.
         * @minimum 1
         */
        marketCapMoreThan?: number;
        /**
         * Only include companies below this market cap.
         * @minimum 1
         */
        marketCapLowerThan?: number;
        /** Only include companies above this share price. */
        priceMoreThan?: number;
        /** Only include companies below this share price. */
        priceLowerThan?: number;
        /** Only include companies above this beta. */
        betaMoreThan?: number;
        /** Only include companies below this beta. */
        betaLowerThan?: number;
        /**
         * Only include companies above this volume.
         * @minimum 1
         */
        volumeMoreThan?: number;
        /**
         * Only include companies below this volume.
         * @minimum 1
         */
        volumeLowerThan?: number;
        /** Only include companies above this dividend value. */
        dividendMoreThan?: number;
        /** Only include companies below this dividend value. */
        dividendLowerThan?: number;
        /** Whether to include only ETFs. */
        isEtf?: boolean;
        /** Whether to include only funds. */
        isFund?: boolean;
        /**
         * The sector filter.
         * @minLength 1
         */
        sector?: string;
        /**
         * The industry filter.
         * @minLength 1
         */
        industry?: string;
        /**
         * The country filter.
         * @minLength 1
         */
        country?: string;
        /** The exchange filter supported by Financial Modeling Prep. */
        exchange?: "AMEX" | "ASX" | "EURONEXT" | "NASDAQ" | "NYSE" | "TSX";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The matching company rows. */
        companies: Array<Record<string, unknown>>;
      };
    };
    /** Search Financial Modeling Prep securities by company or security name. */
    "financial_modeling_prep.search_names": {
      input: {
        /**
         * The company or security name fragment to search for.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The exchange filter supported by Financial Modeling Prep. */
        exchange?: "AMEX" | "ASX" | "EURONEXT" | "NASDAQ" | "NYSE" | "TSX";
      };
      output: {
        /** The matching securities. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Search Financial Modeling Prep stock symbols by ticker fragment or company name. */
    "financial_modeling_prep.search_symbols": {
      input: {
        /**
         * The ticker fragment or company name to search for.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The exchange filter supported by Financial Modeling Prep. */
        exchange?: "AMEX" | "ASX" | "EURONEXT" | "NASDAQ" | "NYSE" | "TSX";
      };
      output: {
        /** The matching stock symbols. */
        results: Array<{
          /** The stock ticker symbol. */
          symbol: string;
          /** The company or security name. */
          name: string;
          /** The trading currency. */
          currency: string;
          /** The stock exchange display name. */
          stockExchange: string;
          /** The exchange short code. */
          exchangeShortName: string;
        }>;
      };
    };
  }
}
