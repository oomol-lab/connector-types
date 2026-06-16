import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the earliest available historical timestamp for an instrument at a given interval. */
    "twelve_data.earliest_timestamp": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The interval between two consecutive time-series points.
         * @minLength 1
         */
        interval: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) of the exchange.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The output timezone, such as Exchange, UTC, or an IANA timezone name.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The earliest available datetime for the instrument. */
        datetime: string;
        /** The earliest datetime converted to Unix time. */
        unixTime: number;
      };
    };
    /** Fetch the end-of-day close price for a specific instrument. */
    "twelve_data.eod": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) under ISO 10383.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The country where the instrument is traded, using a country name or alpha code.
         * @minLength 1
         */
        country?: string;
        /**
         * The asset class of the instrument.
         * @minLength 1
         */
        type?: string;
        /**
         * A specific date to request, such as 2021-10-27, today, or yesterday.
         * @minLength 1
         */
        date?: string;
        /** Whether to include pre-market and post-market data when supported. */
        prepost?: boolean;
        /**
         * The number of decimal places for floating values.
         * @minimum 0
         * @maximum 11
         */
        dp?: number;
      };
      output: {
        /** The instrument symbol. */
        symbol: string;
        /** The exchange where the instrument is traded. */
        exchange: string;
        /** The Market Identifier Code (MIC) of the exchange. */
        micCode?: string;
        /** The trading currency of the instrument. */
        currency?: string;
        /** The end-of-day datetime returned by Twelve Data. */
        datetime: string;
        /** The end-of-day close price. */
        close: string;
      };
    };
    /** List equity exchanges and their timezone and access metadata. */
    "twelve_data.exchanges": {
      input: {
        /**
         * The asset class to filter exchanges by.
         * @minLength 1
         */
        type?: string;
        /**
         * The exchange name to filter by.
         * @minLength 1
         */
        name?: string;
        /**
         * The Market Identifier Code (MIC) to filter by.
         * @minLength 1
         */
        code?: string;
        /**
         * The country name or alpha code to filter exchanges by.
         * @minLength 1
         */
        country?: string;
        /** Whether to include plan availability metadata for each exchange. */
        showPlan?: boolean;
      };
      output: {
        /** The matching exchanges. */
        data: Array<{
          /** The official title of the exchange. */
          title: string;
          /** The short exchange name. */
          name: string;
          /** The Market Identifier Code (MIC) of the exchange. */
          code: string;
          /** The country where the exchange is located. */
          country: string;
          /** The timezone of the exchange. */
          timezone: string;
          /** The plan availability for the exchange. */
          access?: {
            /** The overall access tier for the symbol or exchange. */
            global: string;
            /** The individual plan required for the symbol or exchange. */
            plan: string;
            /** The business plan required for the symbol or exchange. */
            planBusiness: string;
          };
        }>;
      };
    };
    /** List available forex pairs with base and quote currency metadata. */
    "twelve_data.forex_pairs": {
      input: {
        /**
         * The forex pair symbol to filter by.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The base currency code to filter by.
         * @minLength 1
         */
        currencyBase?: string;
        /**
         * The quote currency code to filter by.
         * @minLength 1
         */
        currencyQuote?: string;
      };
      output: {
        /** The matching forex pairs. */
        data: Array<{
          /** The forex pair symbol. */
          symbol: string;
          /** The group of the forex pair. */
          currencyGroup: string;
          /** The ISO 4217 base currency. */
          currencyBase: string;
          /** The ISO 4217 quote currency. */
          currencyQuote: string;
        }>;
      };
    };
    /** Fetch the top gaining or losing instruments for a market family such as stocks, forex, or crypto. */
    "twelve_data.market_movers": {
      input: {
        /**
         * The market family, such as stocks, forex, or crypto.
         * @minLength 1
         */
        market: string;
        /**
         * The direction of the snapshot, such as gainers or losers.
         * @minLength 1
         */
        direction?: string;
        /**
         * The number of market mover rows to return.
         * @minimum 1
         * @maximum 50
         */
        outputSize?: number;
        /**
         * The country name or alpha code, applicable to non-currency markets.
         * @minLength 1
         */
        country?: string;
        /** A minimum last price threshold for returned instruments. */
        priceGreaterThan?: number;
        /**
         * The number of decimal places for floating values.
         * @minimum 0
         * @maximum 11
         */
        dp?: number;
      };
      output: {
        /** The ranked market mover rows. */
        values: Array<{
          /** The instrument symbol. */
          symbol: string;
          /** The instrument name. */
          name: string;
          /** The exchange where the instrument is traded. */
          exchange: string;
          /** The Market Identifier Code (MIC) of the exchange. */
          micCode?: string;
          /** The latest update time of the market mover row. */
          datetime: string;
          /** The latest price for the instrument. */
          last: number;
          /** The highest price for the instrument today. */
          high: number;
          /** The lowest price for the instrument today. */
          low: number;
          /** The trading volume for the instrument today. */
          volume?: number;
          /** The absolute price change versus the previous day. */
          change: number;
          /** The percentage change versus the previous day. */
          percentChange: number;
        }>;
      };
    };
    /** List the current open or closed state of exchanges together with timing data. */
    "twelve_data.market_state": {
      input: {
        /**
         * The exchange name to filter by.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) to filter by.
         * @minLength 1
         */
        code?: string;
        /**
         * The country name or alpha code to filter exchanges by.
         * @minLength 1
         */
        country?: string;
      };
      output: Array<{
        /** The exchange name. */
        name: string;
        /** The Market Identifier Code (MIC) of the exchange. */
        code: string;
        /** The country where the exchange is located. */
        country: string;
        /** Whether the exchange is currently open. */
        isMarketOpen: boolean;
        /** The elapsed time since the market opened. */
        timeAfterOpen: string;
        /** The remaining time until the market opens. */
        timeToOpen: string;
        /** The remaining time until the market closes. */
        timeToClose: string;
      }>;
    };
    /** Fetch the latest available market price for a specific instrument. */
    "twelve_data.price": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) under ISO 10383.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The country where the instrument is traded, using a country name or alpha code.
         * @minLength 1
         */
        country?: string;
        /**
         * The asset class of the instrument.
         * @minLength 1
         */
        type?: string;
        /** Whether to include pre-market and post-market data when supported. */
        prepost?: boolean;
        /**
         * The number of decimal places for floating values.
         * @minimum 0
         * @maximum 11
         */
        dp?: number;
      };
      output: {
        /** The latest available price for the instrument. */
        price: string;
      };
    };
    /** Fetch the company profile for an instrument, including sector and contact fields. */
    "twelve_data.profile": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) of the exchange.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The country where the instrument is traded, using a country name or alpha code.
         * @minLength 1
         */
        country?: string;
      };
      output: {
        /** The ticker symbol of the company. */
        symbol: string;
        /** The company name. */
        name: string;
        /** The exchange where the company is listed. */
        exchange: string;
        /** The Market Identifier Code (MIC) of the exchange. */
        micCode?: string;
        /** The sector where the company operates. */
        sector?: string;
        /** The industry where the company operates. */
        industry?: string;
        /** The number of company employees. */
        employees?: number;
        /** The company website. */
        website?: string;
        /** The business description of the company. */
        description?: string;
        /** The issue type of the stock. */
        type?: string;
        /** The chief executive officer of the company. */
        ceo?: string;
        /** The primary street address of the company. */
        address?: string;
        /** The secondary address line of the company. */
        address2?: string;
        /** The city of the company headquarters. */
        city?: string;
        /** The postal code of the company headquarters. */
        zip?: string;
        /** The state of the company headquarters. */
        state?: string;
        /** The country of the company headquarters. */
        country?: string;
        /** The public phone number of the company. */
        phone?: string;
      };
    };
    /** Fetch a real-time quote snapshot with price, change, volume, and 52-week range fields. */
    "twelve_data.quote": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) under ISO 10383.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The country where the instrument is traded, using a country name or alpha code.
         * @minLength 1
         */
        country?: string;
        /**
         * The asset class of the instrument.
         * @minLength 1
         */
        type?: string;
        /**
         * The interval of the quote.
         * @minLength 1
         */
        interval?: string;
        /**
         * The number of periods used to calculate the average volume.
         * @minimum 1
         */
        volumeTimePeriod?: number;
        /** Whether to include pre-market and post-market data when supported. */
        prepost?: boolean;
        /** Whether to return the quote for the closed day. */
        eod?: boolean;
        /**
         * The number of hours used to calculate rolling change.
         * @minimum 1
         * @maximum 168
         */
        rollingPeriod?: number;
        /**
         * The number of decimal places for floating values.
         * @minimum 0
         * @maximum 11
         */
        dp?: number;
        /**
         * The output timezone, such as Exchange, UTC, or an IANA timezone name.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The instrument symbol. */
        symbol: string;
        /** The instrument name. */
        name: string;
        /** The exchange where the instrument is traded. */
        exchange: string;
        /** The Market Identifier Code (MIC) of the exchange. */
        micCode?: string;
        /** The trading currency of the instrument. */
        currency?: string;
        /** The datetime of the quote in the requested timezone. */
        datetime: string;
        /** The Unix timestamp of the returned bar. */
        timestamp: number;
        /** The Unix timestamp of the last minute candle. */
        lastQuoteAt?: number;
        /** The opening price of the returned bar. */
        open: string;
        /** The highest price of the returned bar. */
        high: string;
        /** The lowest price of the returned bar. */
        low: string;
        /** The closing price of the returned bar. */
        close: string;
        /** The trading volume of the returned bar. */
        volume?: string;
        /** The close price of the previous bar. */
        previousClose?: string;
        /** The absolute change versus the previous close. */
        change?: string;
        /** The percentage change versus the previous close. */
        percentChange?: string;
        /** The average volume for the requested volume time period. */
        averageVolume?: string;
        /** The 1-day rolling percentage change. */
        rolling1dChange?: string;
        /** The 7-day rolling percentage change. */
        rolling7dChange?: string;
        /** The rolling percentage change for the requested rolling period. */
        rollingChange?: string;
        /** Whether the market is currently open. */
        isMarketOpen?: boolean;
        /** The 52-week low and high range metrics. */
        fiftyTwoWeek?: {
          /** The 52-week low price. */
          low: string;
          /** The 52-week high price. */
          high: string;
          /** The absolute change from the 52-week low. */
          lowChange: string;
          /** The absolute change from the 52-week high. */
          highChange: string;
          /** The percentage change from the 52-week low. */
          lowChangePercent: string;
          /** The percentage change from the 52-week high. */
          highChangePercent: string;
          /** The formatted 52-week price range. */
          range: string;
        };
        /** The change between the regular close and the latest extended price. */
        extendedChange?: string;
        /** The percentage change between the regular close and the latest extended price. */
        extendedPercentChange?: string;
        /** The latest extended trading price. */
        extendedPrice?: string;
        /** The Unix timestamp of the latest extended trading price. */
        extendedTimestamp?: number;
      };
    };
    /** List stock symbols and metadata from the Twelve Data stock catalog with optional filters. */
    "twelve_data.stocks": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) under ISO 10383.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The country where the instrument is traded, using a country name or alpha code.
         * @minLength 1
         */
        country?: string;
        /**
         * The asset class of the instrument.
         * @minLength 1
         */
        type?: string;
        /**
         * The CIK identifier of the instrument.
         * @minLength 1
         */
        cik?: string;
        /** Whether to include plan availability metadata for each stock. */
        showPlan?: boolean;
        /** Whether to include delisted identifiers. */
        includeDelisted?: boolean;
      };
      output: {
        /** The matching stock catalog entries. */
        data: Array<{
          /** The stock symbol. */
          symbol: string;
          /** The full stock name. */
          name: string;
          /** The ISO 4217 trading currency. */
          currency: string;
          /** The exchange where the stock is traded. */
          exchange: string;
          /** The Market Identifier Code (MIC) of the exchange. */
          micCode: string;
          /** The country where the exchange is located. */
          country: string;
          /** The issue type of the stock. */
          type: string;
          /** The Financial Instrument Global Identifier (FIGI). */
          figiCode: string;
          /** The Classification of Financial Instruments (CFI) code. */
          cfiCode: string;
          /** The International Securities Identification Number (ISIN). */
          isin?: string;
          /** The CUSIP identifier of the stock. */
          cusip?: string;
          /** The plan availability for the stock. */
          access?: {
            /** The overall access tier for the symbol or exchange. */
            global: string;
            /** The individual plan required for the symbol or exchange. */
            plan: string;
            /** The business plan required for the symbol or exchange. */
            planBusiness: string;
          };
        }>;
      };
    };
    /** Search financial instruments by symbol or name and return the most relevant matches. */
    "twelve_data.symbol_search": {
      input: {
        /**
         * The text to search, such as a symbol, ISIN, FIGI, or a partial instrument name.
         * @minLength 1
         */
        symbol: string;
        /**
         * The maximum number of matches to return.
         * @minimum 1
         * @maximum 120
         */
        outputSize?: number;
        /** Whether to include plan availability metadata for each matching instrument. */
        showPlan?: boolean;
      };
      output: {
        /** The ordered list of symbol search matches. */
        data: Array<{
          /** The matched instrument symbol. */
          symbol: string;
          /** The matched instrument name. */
          instrumentName: string;
          /** The exchange where the instrument is traded. */
          exchange: string;
          /** The Market Identifier Code (MIC) of the exchange. */
          micCode: string;
          /** The timezone where the exchange is located. */
          exchangeTimezone: string;
          /** The matched instrument type. */
          instrumentType: string;
          /** The country of the matched exchange. */
          country: string;
          /** The trading currency of the matched instrument. */
          currency: string;
          /** The plan availability for the matched instrument. */
          access?: {
            /** The overall access tier for the symbol or exchange. */
            global: string;
            /** The individual plan required for the symbol or exchange. */
            plan: string;
            /** The business plan required for the symbol or exchange. */
            planBusiness: string;
          };
        }>;
      };
    };
    /** Fetch historical OHLCV time-series data with metadata for a specific instrument and interval. */
    "twelve_data.time_series": {
      input: {
        /**
         * The symbol ticker of the instrument.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The Financial Instrument Global Identifier (FIGI) of the instrument.
         * @minLength 1
         */
        figi?: string;
        /**
         * The International Securities Identification Number (ISIN) of the instrument.
         * @minLength 1
         */
        isin?: string;
        /**
         * The CUSIP identifier of the instrument to request.
         * @minLength 1
         */
        cusip?: string;
        /**
         * The exchange where the instrument is traded.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The Market Identifier Code (MIC) under ISO 10383.
         * @minLength 1
         */
        micCode?: string;
        /**
         * The country where the instrument is traded, using a country name or alpha code.
         * @minLength 1
         */
        country?: string;
        /**
         * The asset class of the instrument.
         * @minLength 1
         */
        type?: string;
        /**
         * The interval between two consecutive time-series points.
         * @minLength 1
         */
        interval: string;
        /**
         * The maximum number of time-series points to return.
         * @minimum 1
         * @maximum 5000
         */
        outputSize?: number;
        /** Whether to include pre-market and post-market data when supported. */
        prepost?: boolean;
        /**
         * The number of decimal places for floating values.
         * @minimum 0
         * @maximum 11
         */
        dp?: number;
        /**
         * The sorting order of the output.
         * @minLength 1
         */
        order?: string;
        /**
         * The output timezone, such as Exchange, UTC, or an IANA timezone name.
         * @minLength 1
         */
        timezone?: string;
        /**
         * An exact date or a human-readable value such as today or yesterday.
         * @minLength 1
         */
        date?: string;
        /**
         * The starting date or datetime for the historical selection window.
         * @minLength 1
         */
        startDate?: string;
        /**
         * The ending date or datetime for the historical selection window.
         * @minLength 1
         */
        endDate?: string;
        /** Whether to include the previous bar close price in each returned value. */
        previousClose?: boolean;
        /**
         * The adjusting mode for prices.
         * @minLength 1
         */
        adjust?: string;
      };
      output: {
        /** The time series metadata. */
        meta: {
          /** The instrument symbol. */
          symbol: string;
          /** The interval between two consecutive data points. */
          interval: string;
          /** The trading currency of the instrument. */
          currency?: string;
          /** The timezone of the exchange. */
          exchangeTimezone?: string;
          /** The exchange where the instrument is traded. */
          exchange?: string;
          /** The Market Identifier Code (MIC) of the exchange. */
          micCode?: string;
          /** The asset class of the instrument. */
          type?: string;
        };
        /** The chronological time series values. */
        values: Array<{
          /** The datetime when the bar was opened. */
          datetime: string;
          /** The opening price of the bar. */
          open: string;
          /** The highest price of the bar. */
          high: string;
          /** The lowest price of the bar. */
          low: string;
          /** The closing price of the bar. */
          close: string;
          /** The trading volume of the bar. */
          volume?: string;
          /** The previous bar close when previousClose is requested. */
          previousClose?: string;
        }>;
      };
    };
  }
}
