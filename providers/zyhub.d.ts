import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get current quotes for multiple target currencies against one base currency. */
    "zyhub.get_batch_forex_quotes": {
      input: {
        /**
         * The uppercase ISO 4217 base-currency code, such as USD.
         * @minLength 1
         * @pattern ^[A-Z]{3}$
         */
        baseCurrency: string;
        /**
         * Uppercase ISO 4217 target-currency codes, such as CNY and JPY.
         * @minItems 1
         */
        targetCurrencies: Array<string>;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get block trades for an A-share company. */
    "zyhub.get_block_trades": {
      input: {
        /**
         * The A-share symbol with an sh or sz prefix, such as sh600519.
         * @minLength 1
         * @pattern ^(sh|sz)[0-9]{6}$
         */
        symbol: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get Sina Finance profile and reference data for an A-share company. */
    "zyhub.get_company_profile": {
      input: {
        /**
         * The prefixed A-share symbol, such as sh688111.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get daily Sina Finance candlesticks for a stock or global index. */
    "zyhub.get_daily_kline": {
      input: {
        /** The market containing the requested instrument. */
        market: "cn" | "hk" | "us" | "gi";
        /**
         * The market-specific instrument symbol, such as sh688001 or AAPL.
         * @minLength 1
         */
        symbol: string;
        /** The price adjustment mode. */
        adjustment?: "qfq" | "hfq";
        /** Whether results are on or before, or on or after, the target date. */
        comparison?: "le" | "ge";
        /**
         * The target trading date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /**
         * The number of daily candlesticks to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get one A-share financial statement or indicator report for a reporting date. */
    "zyhub.get_financial_report": {
      input: {
        /**
         * The A-share symbol with an sh or sz prefix, such as sh600519.
         * @minLength 1
         * @pattern ^(sh|sz)[0-9]{6}$
         */
        symbol: string;
        /** The financial-report dataset to retrieve. */
        reportType: "income_statement" | "balance_sheet" | "cash_flow" | "key_indicators" | "special_indicators";
        /**
         * The reporting date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        reportDate: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the latest Sina Finance quote for a currency pair. */
    "zyhub.get_forex_quote": {
      input: {
        /**
         * The uppercase currency-pair code, such as USDCNY.
         * @minLength 1
         * @pattern ^[A-Z]+$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get a fund's asset allocation. */
    "zyhub.get_fund_asset_allocation": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get a fund's industry allocation and changes from the prior reporting period. */
    "zyhub.get_fund_industry_allocation": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the background and historical average return of a fund manager. */
    "zyhub.get_fund_manager": {
      input: {
        /**
         * The manager code returned by get_fund_profile.
         * @minLength 1
         */
        managerCode: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get core performance and risk metrics for a fund. */
    "zyhub.get_fund_metrics": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get historical unit and cumulative net values for a fund. */
    "zyhub.get_fund_net_values": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get a fund's profile, classification, manager, scale, and investment mandate. */
    "zyhub.get_fund_profile": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get cumulative returns and peer rankings for a fund. */
    "zyhub.get_fund_returns": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the major stock holdings of a fund. */
    "zyhub.get_fund_stock_holdings": {
      input: {
        /**
         * The six-digit fund code, such as 016128.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the latest quote for a domestic, global, or Chinese financial futures contract. */
    "zyhub.get_futures_quote": {
      input: {
        /** The futures market. */
        market: "domestic" | "global" | "financial";
        /**
         * The futures contract symbol, such as CHA50CFD.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get minute-level candlesticks for an A-share, index, or virtual sector. */
    "zyhub.get_intraday_kline": {
      input: {
        /**
         * The A-share, index, or virtual-sector symbol.
         * @minLength 1
         */
        symbol: string;
        /** The candlestick interval in minutes. */
        intervalMinutes: "1" | "3" | "5" | "10" | "15" | "30" | "60" | "90" | "120" | "180" | "240";
        /**
         * The number of candlesticks to return, up to 2000.
         * @minimum 1
         * @maximum 2000
         */
        limit: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get major corporate events for an A-share, Hong Kong, or US-listed company. */
    "zyhub.get_major_events": {
      input: {
        /** The market containing the company. */
        market: "cn" | "hk" | "us";
        /**
         * The market-specific stock symbol.
         * @minLength 1
         */
        symbol: string;
        /**
         * The number of results to return.
         * @minimum 1
         */
        limit: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get historical margin-financing and securities-lending data for an A-share. */
    "zyhub.get_margin_trading": {
      input: {
        /**
         * The A-share symbol with an sh or sz prefix, such as sh600519.
         * @minLength 1
         * @pattern ^(sh|sz)[0-9]{6}$
         */
        symbol: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the title, publication time, and body of one Sina Finance article. */
    "zyhub.get_news_article": {
      input: {
        /**
         * The article document ID returned by a news action.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get an A-share company's revenue, cost, and gross-margin composition. */
    "zyhub.get_revenue_composition": {
      input: {
        /**
         * The A-share symbol with an sh or sz prefix, such as sh600519.
         * @minLength 1
         * @pattern ^(sh|sz)[0-9]{6}$
         */
        symbol: string;
        /**
         * The optional reporting date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        reportDate?: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get and rank the constituents of an A-share index or virtual sector. */
    "zyhub.get_sector_constituents": {
      input: {
        /**
         * The index or virtual-sector symbol, such as sh000001.
         * @minLength 1
         */
        sectorSymbol: string;
        /**
         * Optional official response fields.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * The official field used to sort constituents.
         * @minLength 1
         */
        sortBy?: string;
        /** The sort direction. */
        sortDirection?: "asc" | "desc";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
        /** Whether to include newly listed stocks. */
        includeNewStocks?: boolean;
        /** Whether to include recently listed stocks. */
        includeRecentStocks?: boolean;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the Shenwan level-one, level-two, and level-three industries for an A-share. */
    "zyhub.get_stock_industry": {
      input: {
        /**
         * The six-digit A-share code without a market prefix.
         * @minLength 1
         * @pattern ^[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get the latest Sina Finance quote for a stock or global index. */
    "zyhub.get_stock_quote": {
      input: {
        /** The market containing the requested instrument. */
        market: "cn" | "hk" | "us" | "gi";
        /**
         * The market-specific instrument symbol, such as sh688001 or AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Get historical valuation data for an A-share, its industry, and the broad market. */
    "zyhub.get_valuation_history": {
      input: {
        /**
         * The A-share symbol with an sh or sz prefix, such as sh600519.
         * @minLength 1
         * @pattern ^(sh|sz)[0-9]{6}$
         */
        symbol: string;
        /** The historical period to retrieve. */
        period: "1y" | "3y" | "5y" | "10y" | "all";
        /** The valuation metric to retrieve. */
        metric: "pe_ttm" | "pb" | "pcf" | "dividend_yield" | "market_cap";
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List A-shares currently in the consecutive-limit-up pool. */
    "zyhub.list_consecutive_limit_up_stocks": {
      input: Record<string, never>;
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List available financial-report dates for an A-share company. */
    "zyhub.list_financial_report_dates": {
      input: {
        /**
         * The A-share symbol with an sh or sz prefix, such as sh600519.
         * @minLength 1
         * @pattern ^(sh|sz)[0-9]{6}$
         */
        symbol: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List the latest Sina Finance market flashes or page around a known document ID. */
    "zyhub.list_flash_news": {
      input: {
        /**
         * A flash document ID used as the pagination anchor.
         * @minLength 1
         */
        documentId?: string;
        /** Whether to list flashes after or before the anchor. */
        direction?: "after" | "before";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List daily or hourly popular stocks and funds. */
    "zyhub.list_hot_stocks": {
      input: {
        /** The popularity ranking period. */
        period: "day" | "hour";
        /**
         * The optional market filter, such as cn, hk, us, or fund.
         * @minLength 1
         */
        market?: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List the current A-share limit-up pool. */
    "zyhub.list_limit_up_stocks": {
      input: Record<string, never>;
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Rank A-share industries, concepts, or regions by market and fund-flow metrics. */
    "zyhub.list_sector_rankings": {
      input: {
        /** The sector classification to rank. */
        sectorType?: "all" | "shenwan_level_1" | "shenwan_level_2" | "shenwan_level_3" | "concept" | "region";
        /**
         * The official metric used to sort sectors, such as percent or rp_net.
         * @minLength 1
         */
        sortBy?: string;
        /** The sort direction. */
        sortDirection?: "asc" | "desc";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of sectors to return, up to 30.
         * @minimum 1
         * @maximum 30
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List Shanghai, Shenzhen, or Hong Kong Stock Connect holdings. */
    "zyhub.list_stock_connect_holdings": {
      input: {
        /** The Stock Connect channel. */
        channel: "hk" | "sz" | "sh";
        /** The field used to sort holdings. */
        sortBy: "hold_date" | "hold_num" | "hold_ratio" | "close" | "percent" | "cur_capital" | "day1_capital_chg" | "day5_capital_chg" | "day10_capital_chg" | "zf_60";
        /** The sort direction. */
        sortDirection: "asc" | "desc";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** List strong A-share concept, industry, or regional sectors. */
    "zyhub.list_strong_sectors": {
      input: {
        /** The board group used to filter stocks. */
        boardGroup?: "all" | "growth" | "other";
        /** The sector classification to return. */
        sectorType?: "concept" | "industry" | "region";
        /** Whether to exclude ST stocks. */
        excludeSt?: boolean;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Search Sina Finance market flashes by one or more keywords. */
    "zyhub.search_flash_news": {
      input: {
        /**
         * One to ten keywords to search for.
         * @minItems 1
         * @maxItems 10
         */
        keywords: Array<string>;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of flashes per page, up to 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Search Sina Finance news by one or more keywords. */
    "zyhub.search_news": {
      input: {
        /**
         * One to ten keywords to search for.
         * @minItems 1
         * @maxItems 10
         */
        keywords: Array<string>;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of news items to return per page.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Search news for one A-share, Hong Kong, or US-listed stock. */
    "zyhub.search_stock_news": {
      input: {
        /** The market containing the stock. */
        market: "cn" | "hk" | "us";
        /**
         * The market-specific stock symbol.
         * @minLength 1
         */
        symbol: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of news items per page, up to 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
    /** Search Sina Finance instrument symbols across one or more markets. */
    "zyhub.search_symbols": {
      input: {
        /**
         * Comma-separated Sina Finance market type codes, such as 11 for A shares or 31 for Hong Kong stocks.
         * @minLength 1
         */
        marketTypes: string;
        /**
         * The company name, ticker, or other text to search for.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The upstream JSON value or text returned by the selected ZYHub API. */
        response: unknown;
      };
    };
  }
}
