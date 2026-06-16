import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a documented Alpha Vantage query function with raw JSON-facing parameters for advanced coverage. */
    "alpha_vantage.call_official_function": {
      input: {
        /** The official Alpha Vantage function name to call. */
        functionName: "TIME_SERIES_INTRADAY" | "TIME_SERIES_DAILY" | "TIME_SERIES_DAILY_ADJUSTED" | "TIME_SERIES_WEEKLY" | "TIME_SERIES_WEEKLY_ADJUSTED" | "TIME_SERIES_MONTHLY" | "TIME_SERIES_MONTHLY_ADJUSTED" | "GLOBAL_QUOTE" | "REALTIME_BULK_QUOTES" | "INDEX_DATA" | "INDEX_CATALOG" | "SYMBOL_SEARCH" | "MARKET_STATUS" | "CURRENCY_EXCHANGE_RATE" | "FX_INTRADAY" | "FX_DAILY" | "FX_WEEKLY" | "FX_MONTHLY" | "CRYPTO_INTRADAY" | "DIGITAL_CURRENCY_DAILY" | "DIGITAL_CURRENCY_WEEKLY" | "DIGITAL_CURRENCY_MONTHLY" | "OVERVIEW" | "ETF_PROFILE" | "INCOME_STATEMENT" | "BALANCE_SHEET" | "CASH_FLOW" | "EARNINGS" | "EARNINGS_ESTIMATES" | "SHARES_OUTSTANDING" | "LISTING_STATUS" | "EARNINGS_CALENDAR" | "IPO_CALENDAR" | "DIVIDENDS" | "SPLITS" | "INSIDER_TRANSACTIONS" | "INSTITUTIONAL_HOLDINGS" | "EARNINGS_CALL_TRANSCRIPT" | "HISTORICAL_OPTIONS" | "REALTIME_OPTIONS" | "REALTIME_PUT_CALL_RATIO" | "HISTORICAL_PUT_CALL_RATIO" | "REALTIME_VOLUME_OPEN_INTEREST_RATIO" | "HISTORICAL_VOLUME_OPEN_INTEREST_RATIO" | "NEWS_SENTIMENT" | "TOP_GAINERS_LOSERS" | "SECTOR" | "WTI" | "BRENT" | "NATURAL_GAS" | "COPPER" | "ALUMINUM" | "WHEAT" | "CORN" | "COTTON" | "SUGAR" | "COFFEE" | "ALL_COMMODITIES" | "GOLD_SILVER_SPOT" | "GOLD_SILVER_HISTORY" | "REAL_GDP" | "REAL_GDP_PER_CAPITA" | "TREASURY_YIELD" | "FEDERAL_FUNDS_RATE" | "CPI" | "INFLATION" | "RETAIL_SALES" | "DURABLES" | "UNEMPLOYMENT" | "NONFARM_PAYROLL" | "ANALYTICS_FIXED_WINDOW" | "ANALYTICS_SLIDING_WINDOW" | "SMA" | "EMA" | "WMA" | "DEMA" | "TEMA" | "TRIMA" | "KAMA" | "MAMA" | "VWAP" | "T3" | "MACD" | "MACDEXT" | "STOCH" | "STOCHF" | "RSI" | "STOCHRSI" | "WILLR" | "ADX" | "ADXR" | "APO" | "PPO" | "MOM" | "BOP" | "CCI" | "CMO" | "ROC" | "ROCR" | "AROON" | "AROONOSC" | "MFI" | "TRIX" | "ULTOSC" | "DX" | "MINUS_DI" | "PLUS_DI" | "MINUS_DM" | "PLUS_DM" | "BBANDS" | "MIDPOINT" | "MIDPRICE" | "SAR" | "TRANGE" | "ATR" | "NATR" | "AD" | "ADOSC" | "OBV" | "HT_TRENDLINE" | "HT_SINE" | "HT_TRENDMODE" | "HT_DCPERIOD" | "HT_DCPHASE" | "HT_PHASOR";
        /** Official Alpha Vantage query parameters excluding function and apikey. */
        parameters?: Record<string, string | number | boolean | null>;
        /** The expected response format. */
        responseFormat?: "json" | "text";
      };
      output: {
        /** The parsed JSON payload or raw text payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw annual and quarterly balance sheet data for a company. */
    "alpha_vantage.get_balance_sheet": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw annual and quarterly cash flow data for a company. */
    "alpha_vantage.get_cash_flow": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw commodity time series data from an Alpha Vantage commodity endpoint. */
    "alpha_vantage.get_commodity_data": {
      input: {
        /** The commodity endpoint to query. */
        commodity: "WTI" | "BRENT" | "NATURAL_GAS" | "COPPER" | "ALUMINUM" | "WHEAT" | "CORN" | "COTTON" | "SUGAR" | "COFFEE" | "ALL_COMMODITIES";
        /** The time interval to request. */
        interval?: "daily" | "weekly" | "monthly";
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw company overview and fundamental data for a stock symbol. */
    "alpha_vantage.get_company_overview": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw intraday OHLCV data for a cryptocurrency market pair. */
    "alpha_vantage.get_crypto_intraday": {
      input: {
        /**
         * The digital currency symbol, such as BTC.
         * @minLength 1
         */
        symbol: string;
        /**
         * The market currency, such as USD.
         * @minLength 1
         */
        market: string;
        /** The intraday interval between data points. */
        interval: "1min" | "5min" | "15min" | "30min" | "60min";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the raw realtime exchange rate for a currency pair. */
    "alpha_vantage.get_currency_exchange_rate": {
      input: {
        /**
         * The base currency code, such as USD or BTC.
         * @minLength 1
         */
        fromSymbol: string;
        /**
         * The quote currency code, such as EUR or USD.
         * @minLength 1
         */
        toSymbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw daily adjusted OHLCV, dividend, and split data for a stock symbol from Alpha Vantage. */
    "alpha_vantage.get_daily_adjusted_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
        /** The amount of historical data to return. Use compact for the latest 100 data points or full for the complete history. */
        outputSize?: "compact" | "full";
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the raw daily OHLCV time series for a single stock symbol from Alpha Vantage. */
    "alpha_vantage.get_daily_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
        /** The amount of historical data to return. Use compact for the latest 100 data points or full for the complete history. */
        outputSize?: "compact" | "full";
      };
      output: {
        /** The metadata returned for an Alpha Vantage time series response. */
        meta: {
          /** The Alpha Vantage time series family represented by this response. */
          seriesType: "daily" | "weekly" | "monthly";
          /** The summary text returned in the Meta Data block. */
          information: string;
          /** The ticker symbol that was queried. */
          symbol: string;
          /** The last refresh timestamp returned by Alpha Vantage. */
          lastRefreshed: string;
          /** The output size returned by Alpha Vantage when the endpoint exposes it. */
          outputSize?: string;
          /** The time zone returned in the Meta Data block. */
          timeZone: string;
        };
        /** The ordered list of OHLCV records. */
        values: Array<{
          /** The trading day associated with this OHLCV record. */
          timestamp: string;
          /** The open price for the period. */
          open: string;
          /** The high price for the period. */
          high: string;
          /** The low price for the period. */
          low: string;
          /** The close price for the period. */
          close: string;
          /** The traded volume for the period. */
          volume: string;
        }>;
      };
    };
    /** Retrieve raw daily historical time series data for a digital currency. */
    "alpha_vantage.get_digital_currency_daily": {
      input: {
        /**
         * The digital currency symbol, such as BTC.
         * @minLength 1
         */
        symbol: string;
        /**
         * The market currency, such as USD.
         * @minLength 1
         */
        market: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw monthly historical time series data for a digital currency. */
    "alpha_vantage.get_digital_currency_monthly": {
      input: {
        /**
         * The digital currency symbol, such as BTC.
         * @minLength 1
         */
        symbol: string;
        /**
         * The market currency, such as USD.
         * @minLength 1
         */
        market: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw weekly historical time series data for a digital currency. */
    "alpha_vantage.get_digital_currency_weekly": {
      input: {
        /**
         * The digital currency symbol, such as BTC.
         * @minLength 1
         */
        symbol: string;
        /**
         * The market currency, such as USD.
         * @minLength 1
         */
        market: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw historical and future dividend data for a stock symbol. */
    "alpha_vantage.get_dividends": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw annual and quarterly earnings data for a company. */
    "alpha_vantage.get_earnings": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw upcoming earnings calendar data as CSV. */
    "alpha_vantage.get_earnings_calendar": {
      input: {
        /**
         * The optional stock symbol used to filter the calendar.
         * @minLength 1
         */
        symbol?: string;
        /** The calendar horizon to request. */
        horizon?: "3month" | "6month" | "12month";
      };
      output: {
        /** The raw Alpha Vantage text or CSV payload. */
        data: string;
      };
    };
    /** Retrieve a raw earnings call transcript for a symbol, quarter, and fiscal year. */
    "alpha_vantage.get_earnings_call_transcript": {
      input: {
        /**
         * The stock symbol to query, such as IBM.
         * @minLength 1
         */
        symbol: string;
        /** The fiscal quarter to request. */
        quarter: "Q1" | "Q2" | "Q3" | "Q4";
        /** The fiscal year to request, such as 2024. */
        fiscalYear: number;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw analyst earnings estimates for a company. */
    "alpha_vantage.get_earnings_estimates": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw ETF profile and holdings data for an ETF symbol. */
    "alpha_vantage.get_etf_profile": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw daily forex OHLC data for a currency pair. */
    "alpha_vantage.get_fx_daily": {
      input: {
        /**
         * The base currency code, such as EUR.
         * @minLength 1
         */
        fromSymbol: string;
        /**
         * The quote currency code, such as USD.
         * @minLength 1
         */
        toSymbol: string;
        /** The amount of historical data to return. Use compact for the latest 100 data points or full for the complete history. */
        outputSize?: "compact" | "full";
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw intraday forex OHLC data for a currency pair. */
    "alpha_vantage.get_fx_intraday": {
      input: {
        /**
         * The base currency code, such as EUR.
         * @minLength 1
         */
        fromSymbol: string;
        /**
         * The quote currency code, such as USD.
         * @minLength 1
         */
        toSymbol: string;
        /** The intraday interval between data points. */
        interval: "1min" | "5min" | "15min" | "30min" | "60min";
        /** The amount of historical data to return. Use compact for the latest 100 data points or full for the complete history. */
        outputSize?: "compact" | "full";
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw monthly forex OHLC data for a currency pair. */
    "alpha_vantage.get_fx_monthly": {
      input: {
        /**
         * The base currency code, such as USD or BTC.
         * @minLength 1
         */
        fromSymbol: string;
        /**
         * The quote currency code, such as EUR or USD.
         * @minLength 1
         */
        toSymbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw weekly forex OHLC data for a currency pair. */
    "alpha_vantage.get_fx_weekly": {
      input: {
        /**
         * The base currency code, such as USD or BTC.
         * @minLength 1
         */
        fromSymbol: string;
        /**
         * The quote currency code, such as EUR or USD.
         * @minLength 1
         */
        toSymbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the latest end-of-day quote snapshot for a single stock symbol from Alpha Vantage. */
    "alpha_vantage.get_global_quote": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The ticker symbol returned by Alpha Vantage. */
        symbol: string;
        /** The opening price for the latest trading session. */
        open: string;
        /** The highest price for the latest trading session. */
        high: string;
        /** The lowest price for the latest trading session. */
        low: string;
        /** The latest available price. */
        price: string;
        /** The latest trading volume. */
        volume: string;
        /** The latest trading day in YYYY-MM-DD format returned by Alpha Vantage. */
        latestTradingDay: string;
        /** The previous closing price. */
        previousClose: string;
        /** The absolute price change versus the previous close. */
        change: string;
        /** The percentage price change versus the previous close. */
        changePercent: string;
      };
    };
    /** Retrieve raw historical options data for a stock symbol. */
    "alpha_vantage.get_historical_options": {
      input: {
        /**
         * The stock symbol to query, such as IBM.
         * @minLength 1
         */
        symbol: string;
        /**
         * The optional options contract date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw annual and quarterly income statement data for a company. */
    "alpha_vantage.get_income_statement": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw insider transaction data for a stock symbol. */
    "alpha_vantage.get_insider_transactions": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw institutional holding data for a stock symbol. */
    "alpha_vantage.get_institutional_holdings": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw intraday OHLCV time series data for a stock symbol from Alpha Vantage. */
    "alpha_vantage.get_intraday_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
        /** The intraday interval between data points. */
        interval: "1min" | "5min" | "15min" | "30min" | "60min";
        /** Whether to request adjusted intraday values. */
        adjusted?: boolean;
        /** Whether to include extended-hours trading data. */
        extendedHours?: boolean;
        /** The optional month in YYYY-MM format for historical intraday data. */
        month?: string;
        /** The amount of historical data to return. Use compact for the latest 100 data points or full for the complete history. */
        outputSize?: "compact" | "full";
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw upcoming IPO calendar data as CSV. */
    "alpha_vantage.get_ipo_calendar": {
      input: Record<string, never>;
      output: {
        /** The raw Alpha Vantage text or CSV payload. */
        data: string;
      };
    };
    /** Retrieve raw active or delisted listing status data as CSV. */
    "alpha_vantage.get_listing_status": {
      input: {
        /**
         * The optional listing status date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /** The listing state to request. */
        state?: "active" | "delisted";
      };
      output: {
        /** The raw Alpha Vantage text or CSV payload. */
        data: string;
      };
    };
    /** Retrieve raw macroeconomic indicator data from Alpha Vantage. */
    "alpha_vantage.get_macro_indicator": {
      input: {
        /** The macroeconomic indicator endpoint to query. */
        indicator: "REAL_GDP" | "REAL_GDP_PER_CAPITA" | "TREASURY_YIELD" | "FEDERAL_FUNDS_RATE" | "CPI" | "INFLATION" | "RETAIL_SALES" | "DURABLES" | "UNEMPLOYMENT" | "NONFARM_PAYROLL";
        /** The time interval to request where supported. */
        interval?: "daily" | "weekly" | "monthly" | "quarterly" | "annual" | "semiannual";
        /** The Treasury yield maturity to request. */
        maturity?: "3month" | "2year" | "5year" | "7year" | "10year" | "30year";
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the current open or closed status for major equity, forex, and cryptocurrency markets. */
    "alpha_vantage.get_market_status": {
      input: Record<string, never>;
      output: {
        /** The endpoint label returned by Alpha Vantage. */
        endpoint: string;
        /** The list of market status rows. */
        markets: Array<{
          /** The market type such as Equity, Forex, or Cryptocurrency. */
          marketType: string;
          /** The region for the market. */
          region: string;
          /** The primary exchanges covered by this market row. */
          primaryExchanges: string;
          /** The local market open time. */
          localOpen: string;
          /** The local market close time. */
          localClose: string;
          /** The current status such as open or closed. */
          currentStatus: string;
          /** Additional notes returned by Alpha Vantage for this market. */
          notes: string;
        }>;
      };
    };
    /** Retrieve raw monthly adjusted OHLCV and dividend data for a stock symbol from Alpha Vantage. */
    "alpha_vantage.get_monthly_adjusted_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the raw monthly OHLCV time series for a single stock symbol from Alpha Vantage. */
    "alpha_vantage.get_monthly_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The metadata returned for an Alpha Vantage time series response. */
        meta: {
          /** The Alpha Vantage time series family represented by this response. */
          seriesType: "daily" | "weekly" | "monthly";
          /** The summary text returned in the Meta Data block. */
          information: string;
          /** The ticker symbol that was queried. */
          symbol: string;
          /** The last refresh timestamp returned by Alpha Vantage. */
          lastRefreshed: string;
          /** The output size returned by Alpha Vantage when the endpoint exposes it. */
          outputSize?: string;
          /** The time zone returned in the Meta Data block. */
          timeZone: string;
        };
        /** The ordered list of OHLCV records. */
        values: Array<{
          /** The trading day associated with this OHLCV record. */
          timestamp: string;
          /** The open price for the period. */
          open: string;
          /** The high price for the period. */
          high: string;
          /** The low price for the period. */
          low: string;
          /** The close price for the period. */
          close: string;
          /** The traded volume for the period. */
          volume: string;
        }>;
      };
    };
    /** Retrieve raw live and historical market news and sentiment data. */
    "alpha_vantage.get_news_sentiment": {
      input: {
        /**
         * Comma-separated tickers or asset identifiers.
         * @minLength 1
         */
        tickers?: string;
        /**
         * Comma-separated Alpha Vantage news topics.
         * @minLength 1
         */
        topics?: string;
        /**
         * The start timestamp in YYYYMMDDTHHMM format.
         * @minLength 1
         */
        timeFrom?: string;
        /**
         * The end timestamp in YYYYMMDDTHHMM format.
         * @minLength 1
         */
        timeTo?: string;
        /** The article sort order. */
        sort?: "LATEST" | "EARLIEST" | "RELEVANCE";
        /**
         * The maximum number of articles to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw realtime bulk quotes for up to 100 stock symbols. */
    "alpha_vantage.get_realtime_bulk_quotes": {
      input: {
        /**
         * A comma-separated list of stock symbols, such as MSFT,AAPL,IBM.
         * @minLength 1
         */
        symbols: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw realtime options data for a stock symbol. */
    "alpha_vantage.get_realtime_options": {
      input: {
        /**
         * The stock symbol to query, such as IBM.
         * @minLength 1
         */
        symbol: string;
        /** Whether to include Greeks and implied volatility fields. */
        requireGreeks?: boolean;
        /**
         * The optional option contract identifier to request.
         * @minLength 1
         */
        contract?: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw realtime and historical sector performance data. */
    "alpha_vantage.get_sector_performance": {
      input: Record<string, never>;
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw historical split data for a stock symbol. */
    "alpha_vantage.get_splits": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw technical indicator data using an official Alpha Vantage indicator function. */
    "alpha_vantage.get_technical_indicator": {
      input: {
        /** The technical indicator function to query. */
        indicator: "SMA" | "EMA" | "WMA" | "DEMA" | "TEMA" | "TRIMA" | "KAMA" | "MAMA" | "VWAP" | "T3" | "MACD" | "MACDEXT" | "STOCH" | "STOCHF" | "RSI" | "STOCHRSI" | "WILLR" | "ADX" | "ADXR" | "APO" | "PPO" | "MOM" | "BOP" | "CCI" | "CMO" | "ROC" | "ROCR" | "AROON" | "AROONOSC" | "MFI" | "TRIX" | "ULTOSC" | "DX" | "MINUS_DI" | "PLUS_DI" | "MINUS_DM" | "PLUS_DM" | "BBANDS" | "MIDPOINT" | "MIDPRICE" | "SAR" | "TRANGE" | "ATR" | "NATR" | "AD" | "ADOSC" | "OBV" | "HT_TRENDLINE" | "HT_SINE" | "HT_TRENDMODE" | "HT_DCPERIOD" | "HT_DCPHASE" | "HT_PHASOR";
        /**
         * The equity symbol or currency pair to analyze.
         * @minLength 1
         */
        symbol: string;
        /** The time interval between data points. */
        interval: "1min" | "5min" | "15min" | "30min" | "60min" | "daily" | "weekly" | "monthly";
        /**
         * The number of periods used for the indicator calculation.
         * @minimum 1
         */
        timePeriod?: number;
        /** The price series to use for the calculation. */
        seriesType?: "close" | "open" | "high" | "low";
        /** The optional month in YYYY-MM format for intraday historical data. */
        month?: string;
        /**
         * The fast period parameter for supported indicators.
         * @minimum 1
         */
        fastPeriod?: number;
        /**
         * The slow period parameter for supported indicators.
         * @minimum 1
         */
        slowPeriod?: number;
        /**
         * The signal period parameter for supported indicators.
         * @minimum 1
         */
        signalPeriod?: number;
        /**
         * The fast K period parameter for supported indicators.
         * @minimum 1
         */
        fastKPeriod?: number;
        /**
         * The slow K period parameter for supported indicators.
         * @minimum 1
         */
        slowKPeriod?: number;
        /**
         * The slow D period parameter for supported indicators.
         * @minimum 1
         */
        slowDPeriod?: number;
        /** The slow K moving average type for supported indicators. */
        slowKMatype?: number;
        /** The slow D moving average type for supported indicators. */
        slowDMatype?: number;
        /**
         * The fast D period parameter for supported indicators.
         * @minimum 1
         */
        fastDPeriod?: number;
        /** The fast D moving average type for supported indicators. */
        fastDMatype?: number;
        /** The fast moving average type for supported indicators. */
        fastMatype?: number;
        /** The slow moving average type for supported indicators. */
        slowMatype?: number;
        /** The signal moving average type for supported indicators. */
        signalMatype?: number;
        /** The moving average type for supported indicators. */
        matype?: number;
        /**
         * The upper band standard deviation multiplier.
         * @minimum 1
         */
        nbdevup?: number;
        /**
         * The lower band standard deviation multiplier.
         * @minimum 1
         */
        nbdevdn?: number;
        /** The acceleration factor for supported indicators. */
        acceleration?: number;
        /** The maximum acceleration value for supported indicators. */
        maximum?: number;
        /** The response format requested from Alpha Vantage. */
        datatype?: "json" | "csv";
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the raw Alpha Vantage top gainers, losers, and most active stocks. */
    "alpha_vantage.get_top_gainers_losers": {
      input: Record<string, never>;
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve raw weekly adjusted OHLCV and dividend data for a stock symbol from Alpha Vantage. */
    "alpha_vantage.get_weekly_adjusted_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The parsed JSON payload or raw text/CSV payload returned by Alpha Vantage. */
        data: unknown;
      };
    };
    /** Retrieve the raw weekly OHLCV time series for a single stock symbol from Alpha Vantage. */
    "alpha_vantage.get_weekly_time_series": {
      input: {
        /**
         * The stock symbol to query, such as IBM or TSCO.LON.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The metadata returned for an Alpha Vantage time series response. */
        meta: {
          /** The Alpha Vantage time series family represented by this response. */
          seriesType: "daily" | "weekly" | "monthly";
          /** The summary text returned in the Meta Data block. */
          information: string;
          /** The ticker symbol that was queried. */
          symbol: string;
          /** The last refresh timestamp returned by Alpha Vantage. */
          lastRefreshed: string;
          /** The output size returned by Alpha Vantage when the endpoint exposes it. */
          outputSize?: string;
          /** The time zone returned in the Meta Data block. */
          timeZone: string;
        };
        /** The ordered list of OHLCV records. */
        values: Array<{
          /** The trading day associated with this OHLCV record. */
          timestamp: string;
          /** The open price for the period. */
          open: string;
          /** The high price for the period. */
          high: string;
          /** The low price for the period. */
          low: string;
          /** The close price for the period. */
          close: string;
          /** The traded volume for the period. */
          volume: string;
        }>;
      };
    };
    /** Search supported stocks, ETFs, and mutual funds by keyword and return the best matching symbols. */
    "alpha_vantage.search_symbols": {
      input: {
        /**
         * The company name, ticker fragment, or keyword to search for.
         * @minLength 1
         */
        keywords: string;
      };
      output: {
        /** The ordered list of matching symbols. */
        matches: Array<{
          /** The matched ticker symbol. */
          symbol: string;
          /** The full company or fund name. */
          name: string;
          /** The instrument type returned by Alpha Vantage. */
          type: string;
          /** The region where the instrument trades. */
          region: string;
          /** The local market open time. */
          marketOpen: string;
          /** The local market close time. */
          marketClose: string;
          /** The market timezone label returned by Alpha Vantage. */
          timezone: string;
          /** The trading currency. */
          currency: string;
          /** The string match score returned by Alpha Vantage. */
          matchScore: string;
        }>;
      };
    };
  }
}
