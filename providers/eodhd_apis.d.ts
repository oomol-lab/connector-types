import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get historical end-of-day price data for an EODHD ticker. */
    "eodhd_apis.get_eod": {
      input: {
        /**
         * Ticker with exchange code, such as AAPL.US.
         * @minLength 1
         */
        ticker: string;
        /**
         * Inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** EODHD historical price period. */
        period?: "d" | "w" | "m";
        /** EODHD last-value filter for historical price data. */
        filter?: "last_date" | "last_open" | "last_high" | "last_low" | "last_close" | "last_volume";
      };
      output: {
        /** Historical price rows returned by EODHD. */
        rows: Array<{
          /** Price row date. */
          date?: string | null;
          /** Open price. */
          open?: number | null;
          /** High price. */
          high?: number | null;
          /** Low price. */
          low?: number | null;
          /** Close price. */
          close?: number | null;
          /** Adjusted close price. */
          adjusted_close?: number | null;
          /** Trading volume. */
          volume?: number | null;
          [key: string]: unknown;
        }>;
        /** Scalar last-value response returned when an EOD filter is used. */
        value: string | number | null;
        /** The raw object returned by EODHD. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Map between EODHD ticker symbols and security identifiers. */
    "eodhd_apis.get_id_mapping": {
      input: {
        /**
         * Ticker symbol filter, such as AAPL.US.
         * @minLength 1
         */
        filterSymbol?: string;
        /**
         * Exchange code filter, such as US.
         * @minLength 1
         */
        filterExchange?: string;
        /**
         * ISIN identifier filter.
         * @minLength 1
         */
        filterIsin?: string;
        /**
         * FIGI identifier filter.
         * @minLength 1
         */
        filterFigi?: string;
        /**
         * LEI identifier filter.
         * @minLength 1
         */
        filterLei?: string;
        /**
         * CUSIP identifier filter.
         * @minLength 1
         */
        filterCusip?: string;
        /**
         * CIK identifier filter.
         * @minLength 1
         */
        filterCik?: string;
        /**
         * Number of records per page.
         * @exclusiveMinimum 0
         */
        pageLimit?: number;
        /**
         * Pagination offset.
         * @minimum 0
         */
        pageOffset?: number;
      };
      output: {
        /** Security identifier mappings returned by EODHD. */
        mappings: Array<{
          /** Ticker symbol. */
          Code?: string | null;
          /** Exchange code. */
          Exchange?: string | null;
          /** Company or instrument name. */
          Name?: string | null;
          /** ISIN identifier. */
          ISIN?: string | null;
          /** FIGI identifier. */
          FIGI?: string | null;
          /** LEI identifier. */
          LEI?: string | null;
          /** CUSIP identifier. */
          CUSIP?: string | null;
          /** CIK identifier. */
          CIK?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get macroeconomic indicator time series for a country from EODHD. */
    "eodhd_apis.get_macro_indicators": {
      input: {
        /**
         * ISO 3166-1 alpha-3 country code, such as USA.
         * @minLength 3
         * @maxLength 3
         */
        country: string;
        /** Macroeconomic indicator code supported by EODHD. */
        indicator?: "real_interest_rate" | "population_total" | "population_growth_annual" | "inflation_consumer_prices_annual" | "consumer_price_index" | "gdp_current_usd" | "gdp_per_capita_usd" | "gdp_growth_annual" | "debt_percent_gdp" | "net_trades_goods_services" | "inflation_gdp_deflator_annual" | "agriculture_value_added_percent_gdp" | "industry_value_added_percent_gdp" | "services_value_added_percent_gdp" | "exports_of_goods_services_percent_gdp" | "imports_of_goods_services_percent_gdp" | "gross_capital_formation_percent_gdp" | "net_migration" | "gni_usd" | "gni_per_capita_usd" | "gni_ppp_usd" | "gni_per_capita_ppp_usd" | "income_share_lowest_twenty" | "life_expectancy" | "fertility_rate" | "prevalence_hiv_total" | "co2_emissions_tons_per_capita" | "surface_area_km" | "poverty_poverty_lines_percent_population" | "revenue_excluding_grants_percent_gdp" | "cash_surplus_deficit_percent_gdp" | "startup_procedures_register" | "market_cap_domestic_companies_percent_gdp" | "mobile_subscriptions_per_hundred" | "internet_users_per_hundred" | "high_technology_exports_percent_total" | "merchandise_trade_percent_gdp" | "total_debt_service_percent_gni" | "unemployment_total_percent";
      };
      output: {
        /** Macro indicator rows returned by EODHD. */
        indicators: Array<{
          /** ISO alpha-3 country code. */
          CountryCode?: string | null;
          /** Country name. */
          CountryName?: string | null;
          /** Indicator display name. */
          Indicator?: string | null;
          /** Observation date. */
          Date?: string | null;
          /** Observation period. */
          Period?: string | null;
          /** Observed indicator value. */
          Value?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get delayed real-time quote data for one or more EODHD symbols. */
    "eodhd_apis.get_real_time_quote": {
      input: {
        /**
         * Primary ticker with exchange code, such as AAPL.US.
         * @minLength 1
         */
        ticker: string;
        /**
         * Additional ticker symbols to include in the quote request.
         * @minItems 1
         */
        additionalTickers?: Array<string>;
        /**
         * Exchange code filter, such as US.
         * @minLength 1
         */
        exchange?: string;
      };
      output: {
        /** Quote rows returned by EODHD. */
        quotes: Array<{
          /** Ticker code returned by EODHD. */
          code?: string | null;
          /** Unix timestamp for the quote. */
          timestamp?: number | null;
          /** GMT offset reported by EODHD. */
          gmtoffset?: number | null;
          /** Open price returned by EODHD. */
          open?: number | null;
          /** High price returned by EODHD. */
          high?: number | null;
          /** Low price returned by EODHD. */
          low?: number | null;
          /** Close price returned by EODHD. */
          close?: number | null;
          /** Volume returned by EODHD. */
          volume?: number | null;
          /** Previous close value returned by EODHD. */
          previousClose?: number | null;
          /** Absolute price change returned by EODHD. */
          change?: number | null;
          /** Percentage price change returned by EODHD. */
          change_p?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get EODHD account details and API usage for the authenticated user. */
    "eodhd_apis.get_user_info": {
      input: Record<string, never>;
      output: {
        /** Authenticated EODHD user details. */
        user: {
          /** User name returned by EODHD. */
          name: string | null;
          /** User email returned by EODHD. */
          email: string | null;
          /** Subscription plan type. */
          subscriptionType: string | null;
          /** Payment method summary. */
          paymentMethod: string | null;
          /** API requests used in the current period. */
          apiRequests: number | null;
          /** Date of the current API request count. */
          apiRequestsDate: string | null;
          /** Daily API request limit. */
          dailyRateLimit: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get US Treasury yield curve rates from EODHD. */
    "eodhd_apis.get_ust_yield_rates": {
      input: {
        /**
         * Inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /**
         * Year filter for Treasury yield rates.
         * @exclusiveMinimum 0
         */
        filterYear?: number;
        /**
         * Number of records per page.
         * @exclusiveMinimum 0
         */
        pageLimit?: number;
        /**
         * Pagination offset.
         * @minimum 0
         */
        pageOffset?: number;
      };
      output: {
        /** US Treasury yield curve rows returned by EODHD. */
        rates: Array<{
          /** Yield rate date. */
          date?: string | null;
          /** One-month constant maturity rate. */
          "1_month"?: number | null;
          /** Two-month constant maturity rate. */
          "2_months"?: number | null;
          /** Three-month constant maturity rate. */
          "3_months"?: number | null;
          /** Four-month constant maturity rate. */
          "4_months"?: number | null;
          /** Six-month constant maturity rate. */
          "6_months"?: number | null;
          /** One-year constant maturity rate. */
          "1_year"?: number | null;
          /** Two-year constant maturity rate. */
          "2_years"?: number | null;
          /** Three-year constant maturity rate. */
          "3_years"?: number | null;
          /** Five-year constant maturity rate. */
          "5_years"?: number | null;
          /** Seven-year constant maturity rate. */
          "7_years"?: number | null;
          /** Ten-year constant maturity rate. */
          "10_years"?: number | null;
          /** Twenty-year constant maturity rate. */
          "20_years"?: number | null;
          /** Thirty-year constant maturity rate. */
          "30_years"?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List exchanges supported by EODHD. */
    "eodhd_apis.list_exchanges": {
      input: Record<string, never>;
      output: {
        /** Supported exchange rows returned by EODHD. */
        exchanges: Array<{
          /** Exchange display name. */
          Name?: string | null;
          /** Exchange code. */
          Code?: string | null;
          /** Operating market identifier code. */
          OperatingMIC?: string | null;
          /** Exchange country. */
          Country?: string | null;
          /** Exchange currency. */
          Currency?: string | null;
          /** ISO 3166-1 alpha-2 country code. */
          CountryISO2?: string | null;
          /** ISO 3166-1 alpha-3 country code. */
          CountryISO3?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search EODHD instruments by ticker, company name, or ISIN. */
    "eodhd_apis.search_instruments": {
      input: {
        /**
         * Search query such as a ticker, company name, or ISIN.
         * @minLength 1
         */
        query: string;
        /** Security type used to filter EODHD instrument search results. */
        type?: "all" | "stock" | "etf" | "fund" | "bond" | "index" | "crypto";
        /**
         * Exchange code used to filter search results.
         * @minLength 1
         */
        exchange?: string;
        /** Whether to return only bond results. */
        bondsOnly?: boolean;
        /**
         * Maximum number of search results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Instrument search results returned by EODHD. */
        results: Array<{
          /** Ticker code returned by EODHD. */
          Code?: string | null;
          /** Exchange code returned by EODHD. */
          Exchange?: string | null;
          /** Instrument or company name returned by EODHD. */
          Name?: string | null;
          /** Instrument type returned by EODHD. */
          Type?: string | null;
          /** Country returned by EODHD. */
          Country?: string | null;
          /** Currency returned by EODHD. */
          Currency?: string | null;
          /** ISIN identifier returned by EODHD. */
          ISIN?: string | null;
          /** Previous close value returned by EODHD. */
          previousClose?: number | null;
          /** Previous close date returned by EODHD. */
          previousCloseDate?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
