import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a Tongdaxin MCP tool with arguments matching its input schema. */
    "tongdaxin.call_tool": {
      input: {
        /**
         * The exact Tongdaxin MCP tool to invoke.
         * @minLength 1
         * @pattern \S
         */
        toolName: string;
        /** JSON arguments matching the live inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Get Tongdaxin board profiles, returns, market statistics, industry chains, or important industry events. */
    "tongdaxin.get_board_and_industry_data": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The board or industry dataset to return. */
        section: "BOARD_BASIC_INFORMATION" | "BOARD_DETAIL" | "BOARD_STAGE_RETURN" | "BOARD_MARKET_STATISTICS" | "INDUSTRY_CHAIN" | "INDUSTRY_IMPORTANT_EVENTS";
        /**
         * The board return period accepted by Tongdaxin, such as 1m.
         * @minLength 1
         * @pattern \S
         */
        period?: string;
        /**
         * An optional title filter for important industry events.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
      };
      output: unknown;
    };
    /** Get Tongdaxin capital flow, northbound holdings, block trades, margin data, refinancing, limit analysis, or shareholder-change events. */
    "tongdaxin.get_capital_and_trading_data": {
      input: (unknown) & (unknown) & (unknown) & (unknown);
      output: unknown;
    };
    /** Get a Tongdaxin company overview, basic profile, issuance history, executives, or affiliates. */
    "tongdaxin.get_company_profile": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The company-profile section to return. */
        section: "OVERVIEW" | "BASIC_INFORMATION" | "ISSUANCE_AND_TRADING" | "EXECUTIVES" | "AFFILIATES" | "EMPLOYEE_STRUCTURE" | "EMPLOYEE_EFFICIENCY";
      };
      output: unknown;
    };
    /** Get Tongdaxin dividend, payout, yield, rights-issue, placement, or refinancing data. */
    "tongdaxin.get_dividends_and_financing": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The dividend or financing dataset to return. */
        section: "OVERVIEW" | "DIVIDEND_CHART" | "RIGHTS_ISSUE_PLAN" | "PLACEMENT_DETAIL" | "REFINANCING_PLAN" | "PAYOUT_HISTORY" | "YIELD_HISTORY" | "PAYOUT_RANK" | "YIELD_RANK" | "CASH_FINANCING_RATIO_RANK";
      };
      output: unknown;
    };
    /** Get structured A-share income statements, balance sheets, or cash-flow statements from Tongdaxin F10. */
    "tongdaxin.get_financial_statements": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The financial statement to return. */
        statement: "INCOME_STATEMENT" | "BALANCE_SHEET" | "CASH_FLOW_STATEMENT";
        /** Whether to use reporting-period or single-quarter figures. */
        reportView?: "REPORTING_PERIOD" | "SINGLE_QUARTER";
      };
      output: unknown;
    };
    /** Get Tongdaxin Hong Kong income statements, balance sheets, or cash-flow statements. */
    "tongdaxin.get_hk_financials": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The Hong Kong financial statement to return. */
        statement: "INCOME_STATEMENT" | "BALANCE_SHEET" | "CASH_FLOW_STATEMENT";
      };
      output: unknown;
    };
    /** Get Tongdaxin board-family, theme-library, event-driven, or information-overview data for a stock. */
    "tongdaxin.get_hot_topics": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The hot-topic dataset to return. */
        section: "BOARD_FAMILY" | "THEME_LIBRARY" | "EVENT_DRIVEN" | "INFORMATION_OVERVIEW";
      };
      output: unknown;
    };
    /** Get Tongdaxin institutional-holding periods, summaries, distributions, details, northbound holdings, or price comparisons. */
    "tongdaxin.get_institutional_holdings": {
      input: (unknown) & (unknown) & (unknown) & (unknown);
      output: unknown;
    };
    /** Get Tongdaxin historical OHLCV data for a security, index, board, or futures contract. */
    "tongdaxin.get_kline": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /**
         * The Tongdaxin market code returned by lookup_security for the selected instrument.
         * @minLength 1
         * @pattern \S
         */
        marketCode: string;
        /** The K-line period to request. */
        period: "5_SECONDS" | "1_MINUTE" | "5_MINUTES" | "15_MINUTES" | "30_MINUTES" | "1_HOUR" | "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY";
        /**
         * The number of K-line rows to return.
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
        /**
         * The zero-based backward offset used to page through history.
         * @minimum 0
         */
        offset?: number;
        /** The price adjustment method. */
        adjustment: "NONE" | "FORWARD" | "BACKWARD";
        /** Whether to include the issue price when Tongdaxin supplies it. */
        includeIpoPrice?: boolean;
      };
      output: {
        /** The instrument code returned by Tongdaxin. */
        code: string;
        /** The upstream K-line period identifier. */
        period: string | number;
        /** The returned OHLCV rows. */
        rows: Array<Record<string, unknown>>;
        /** Statistics calculated for the returned K-line interval. */
        statistics: Record<string, unknown>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Get a real-time Tongdaxin market snapshot with optional order-book, valuation, financial, and ranking data. */
    "tongdaxin.get_quotes": {
      input: (unknown);
      output: {
        /** Stable instrument identity and market metadata. */
        baseInformation: Record<string, unknown>;
        /** The current price, volume, amount, and session snapshot. */
        quote: Record<string, unknown>;
        /** Extended quote and valuation fields. */
        extendedInformation: Record<string, unknown>;
        /** The returned bid and ask levels. */
        orderBook: Array<Record<string, unknown>>;
        /** Professional market fields when requested. */
        professionalInformation: Record<string, unknown>;
        /** Financial and valuation fields when requested. */
        financialInformation: Record<string, unknown>;
        /** Statistical and ranking fields when requested. */
        statistics: Record<string, unknown>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Get Tongdaxin share-capital structure, historical changes, restricted-share unlocks, or stock buybacks. */
    "tongdaxin.get_share_capital": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The share-capital dataset to return. */
        section: "STRUCTURE" | "CHANGES" | "RESTRICTED_UNLOCKS" | "STOCK_BUYBACK";
      };
      output: unknown;
    };
    /** Get Tongdaxin controlling-shareholder, shareholder-count, ranking, or top-shareholder data. */
    "tongdaxin.get_shareholder_research": {
      input: {
        /**
         * The exact Tongdaxin security, board, index, or contract code without a market suffix.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** The shareholder dataset to return. */
        section: "CONTROLLING_SHAREHOLDER" | "SHAREHOLDER_COUNT" | "SHAREHOLDER_COUNT_RANK" | "TOP_FLOAT_SHAREHOLDERS" | "TOP_SHAREHOLDERS";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: unknown;
    };
    /** Get Tongdaxin valuation history, industry rankings, financial-sector indicators, or board valuation comparisons. */
    "tongdaxin.get_valuation_and_ranking": {
      input: (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown);
      output: unknown;
    };
    /** Discover the Tongdaxin MCP tools available to this connection with their live input schemas. */
    "tongdaxin.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Tongdaxin API Key. */
        tools: Array<{
          /**
           * The exact Tongdaxin MCP tool name to pass to call_tool.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The current tool description supplied by Tongdaxin MCP. */
          description?: string;
          /** MCP behavior hints supplied by Tongdaxin for a financial data tool. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Tongdaxin. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Tongdaxin MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Resolve a security, fund, index, futures contract, or option underlying to Tongdaxin codes and market parameters. */
    "tongdaxin.lookup_security": {
      input: {
        /**
         * The instrument name, abbreviation, alias, or code to resolve.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** The Tongdaxin market range to search. */
        market: "A_SHARE" | "HK_STOCK" | "HK_FUND" | "FUND" | "US_STOCK" | "INDEX" | "FUTURES" | "OPTION";
      };
      output: {
        /** The matching instruments returned by Tongdaxin. */
        matches: Array<{
          /** The exact Tongdaxin instrument code. */
          code: string;
          /** The normalized string market code accepted by market-data Actions. */
          marketCode: string;
          /** The instrument name returned by Tongdaxin. */
          name?: string;
          /** The Tongdaxin instrument-type label. */
          type?: string;
          /** Known names and aliases for the instrument. */
          aliases?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Query Tongdaxin valuation, financial, company, shareholder, market, concept, or industry-chain indicators for named entities. */
    "tongdaxin.query_indicators": {
      input: {
        /**
         * A single request containing both the named entity and the indicators or facts to return.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** The entity market or asset range. */
        market: "A_SHARE" | "INDEX" | "FUND";
      };
      output: {
        /** The provider-defined values returned by Tongdaxin. */
        data: Array<unknown>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Query Tongdaxin macroeconomic data such as GDP, CPI, PPI, social financing, money supply, interest rates, exchange rates, trade, employment, and population. */
    "tongdaxin.query_macro_data": {
      input: {
        /**
         * A five-part pipe-delimited query formatted as subject|start date|end date|keywords|context; dates must be concrete YYYYMMDD values.
         * @minLength 1
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** Whether the underlying Wenda request reported success. */
        ok: boolean | null;
        /** The structured query sent to Wenda, or null when omitted. */
        query: string | null;
        /** The provider-defined search rows returned by Wenda, or null when unavailable. */
        data: unknown;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Screen fund managers with natural-language experience, performance, product, or risk criteria. */
    "tongdaxin.screen_fund_managers": {
      input: {
        /**
         * Natural-language screening criteria covering technical, capital-flow, or fundamental conditions.
         * @minLength 1
         * @pattern \S
         */
        criteria: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The result summary, or null when Tongdaxin omits one. */
        summary: string | null;
        /** Pagination, range, and query metadata. */
        metadata: Record<string, unknown>;
        /** The ordered column headers for returned screening rows. */
        headers: Array<string>;
        /** The securities or entities matching the screening criteria. */
        data: Array<Record<string, unknown>>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Screen funds with natural-language performance, manager, risk, holding, or allocation criteria. */
    "tongdaxin.screen_funds": {
      input: {
        /**
         * Natural-language screening criteria covering technical, capital-flow, or fundamental conditions.
         * @minLength 1
         * @pattern \S
         */
        criteria: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The result summary, or null when Tongdaxin omits one. */
        summary: string | null;
        /** Pagination, range, and query metadata. */
        metadata: Record<string, unknown>;
        /** The ordered column headers for returned screening rows. */
        headers: Array<string>;
        /** The securities or entities matching the screening criteria. */
        data: Array<Record<string, unknown>>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Screen Hong Kong stocks with natural-language technical, capital-flow, and fundamental criteria. */
    "tongdaxin.screen_hk_stocks": {
      input: {
        /**
         * Natural-language screening criteria covering technical, capital-flow, or fundamental conditions.
         * @minLength 1
         * @pattern \S
         */
        criteria: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The result summary, or null when Tongdaxin omits one. */
        summary: string | null;
        /** Pagination, range, and query metadata. */
        metadata: Record<string, unknown>;
        /** The ordered column headers for returned screening rows. */
        headers: Array<string>;
        /** The securities or entities matching the screening criteria. */
        data: Array<Record<string, unknown>>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Screen indices with natural-language market, valuation, performance, or technical criteria. */
    "tongdaxin.screen_indices": {
      input: {
        /**
         * Natural-language screening criteria covering technical, capital-flow, or fundamental conditions.
         * @minLength 1
         * @pattern \S
         */
        criteria: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The result summary, or null when Tongdaxin omits one. */
        summary: string | null;
        /** Pagination, range, and query metadata. */
        metadata: Record<string, unknown>;
        /** The ordered column headers for returned screening rows. */
        headers: Array<string>;
        /** The securities or entities matching the screening criteria. */
        data: Array<Record<string, unknown>>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Screen A-share securities with natural-language technical, capital-flow, and fundamental criteria. */
    "tongdaxin.screen_stocks": {
      input: {
        /**
         * Natural-language screening criteria covering technical, capital-flow, or fundamental conditions.
         * @minLength 1
         * @pattern \S
         */
        criteria: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The result summary, or null when Tongdaxin omits one. */
        summary: string | null;
        /** Pagination, range, and query metadata. */
        metadata: Record<string, unknown>;
        /** The ordered column headers for returned screening rows. */
        headers: Array<string>;
        /** The securities or entities matching the screening criteria. */
        data: Array<Record<string, unknown>>;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Search Tongdaxin company announcements, regulatory filings, and periodic reports. */
    "tongdaxin.search_announcements": {
      input: Record<string, unknown>;
      output: {
        /** Whether the underlying Wenda request reported success. */
        ok: boolean | null;
        /** The structured query sent to Wenda, or null when omitted. */
        query: string | null;
        /** The provider-defined search rows returned by Wenda, or null when unavailable. */
        data: unknown;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Search current Tongdaxin financial news, market briefs, themes, and company-related information. */
    "tongdaxin.search_news": {
      input: Record<string, unknown>;
      output: {
        /** Whether the underlying Wenda request reported success. */
        ok: boolean | null;
        /** The structured query sent to Wenda, or null when omitted. */
        query: string | null;
        /** The provider-defined search rows returned by Wenda, or null when unavailable. */
        data: unknown;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
    /** Search Tongdaxin broker research, rating changes, target prices, and opinion summaries. */
    "tongdaxin.search_reports": {
      input: Record<string, unknown>;
      output: {
        /** Whether the underlying Wenda request reported success. */
        ok: boolean | null;
        /** The structured query sent to Wenda, or null when omitted. */
        query: string | null;
        /** The provider-defined search rows returned by Wenda, or null when unavailable. */
        data: unknown;
        /** The complete structured MCP tool result, preserved for fields not covered by the stable convenience fields. */
        result: unknown;
      };
    };
  }
}
