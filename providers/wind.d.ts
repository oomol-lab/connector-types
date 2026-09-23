import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download a Wind Alice report or spreadsheet with the connected API Key and return a transferable file URL. Accepts official Alice file URLs or project-relative references from an analysis result. */
    "wind.download_alice_report": {
      input: {
        /**
         * Attachment URL or /project/ file reference returned by Alice. Absolute URLs must use an official Alice file host.
         * @minLength 1
         * @pattern \S
         */
        fileUrl: string;
        /**
         * Latest server-issued analysis context identifier, required for project-relative references.
         * @minLength 1
         * @pattern \S
         */
        contextId?: string;
        /**
         * Optional file name for the transferred report; omit to use the URL file name.
         * @minLength 1
         * @pattern \S
         */
        fileName?: string;
      };
      output: {
        /** Transferable URL of the downloaded file. */
        fileUrl: string;
        /** Name of the downloaded file. */
        fileName: string;
        /** Media type returned by Wind, or application/octet-stream when absent. */
        mimeType: string;
      };
    };
    /** Query bond profiles and instrument attributes. */
    "wind.get_bond_basicinfo": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query bond issuer financial statements and ratios. */
    "wind.get_bond_financial_data": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query bond issuer profiles and information. */
    "wind.get_bond_issuer_info": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query bond market prices, yields and valuations. */
    "wind.get_bond_market_data": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Search company announcements, annual reports and regulatory disclosures; not media news. */
    "wind.get_company_announcements": {
      input: {
        /**
         * Natural-language search containing the entity or topic, document type and date range.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** Maximum number of relevant documents or passages; upstream defaults to 5. */
        topK?: number;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Compute cross-entity aggregates, weighted averages, rankings and composite financial indicators; use dedicated tools for quotes and entity screening. */
    "wind.get_financial_data": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Search financial news by topic, entity and date; not issuer announcements or brokerage research reports. */
    "wind.get_financial_news": {
      input: {
        /**
         * Natural-language search containing the entity or topic, document type and date range.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** Maximum number of relevant documents or passages; upstream defaults to 5. */
        topK?: number;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query fund management company profiles and business information. */
    "wind.get_fund_company_info": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query fund financial statements and financial indicators. */
    "wind.get_fund_financials": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query fund holder structure and ownership information. */
    "wind.get_fund_holders": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query fund portfolio holdings and asset allocation by reporting period. */
    "wind.get_fund_holdings": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query fund profiles, managers and product information. */
    "wind.get_fund_info": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get historical ETF or LOF OHLCV bars over an explicit date range. */
    "wind.get_fund_kline": {
      input: {
        /**
         * Exact Wind instrument name or code; do not guess exchange suffixes.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        beginDate: string;
        /**
         * Inclusive end date in YYYY-MM-DD format; must not precede beginDate.
         * @format date
         */
        endDate: string;
        /** Bar interval; defaults to daily bars. */
        period?: "1min" | "5min" | "10min" | "15min" | "30min" | "60min" | "120min" | "240min" | "1d" | "1w" | "1mo" | "1y" | "1q" | "6mo";
        /** Number of records within the date range: positive from the start, negative from the end, or zero for all records. */
        count?: number;
        /** Price adjustment: 0 for forward, 1 for backward, 2 for unadjusted; upstream defaults to 0. */
        adjustment?: "0" | "1" | "2";
        /** Include suspended trading data; upstream defaults to true. */
        includeSuspended?: boolean;
        /**
         * Optional price adjustment reference date in YYYY-MM-DD format.
         * @format date
         */
        adjustmentDate?: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query fund performance, returns and related evaluation metrics. */
    "wind.get_fund_performance": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get current exchange-traded fund price indicators for up to 50 funds; not historical time series. */
    "wind.get_fund_price_indicators": {
      input: {
        /**
         * One to 50 Wind names or codes separated by commas.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Comma-separated exact Wind indicator names. Omit for default fields. Consult the official stock, fund or index indicator reference at https://github.com/Wind-Alice/AliceMarket/tree/main/skills/wind-mcp-skill/references before specifying fields; preserve the returned units. Total market value 1 excludes restricted shares, while total market value 2 includes them.
         * @minLength 1
         * @pattern \S
         */
        indexes?: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get minute-level ETF or LOF quotes; omit dates for the latest trading day. */
    "wind.get_fund_quote": {
      input: {
        /**
         * Exact Wind instrument name or code; do not guess exchange suffixes.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Start date in YYYY-MM-DD format; required when endDate is supplied.
         * @format date
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format; defaults to the latest trading day.
         * @format date
         */
        endDate?: string;
        /** Number of records within the date range: positive from the start, negative from the end, or zero for all records. */
        count?: number;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query index profiles, publishers, base dates and constituents. */
    "wind.get_index_basicinfo": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query index or sector valuation and constituent-weighted fundamental metrics. */
    "wind.get_index_fundamentals": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get historical index OHLCV bars over an explicit date range. */
    "wind.get_index_kline": {
      input: {
        /**
         * Exact Wind instrument name or code; do not guess exchange suffixes.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        beginDate: string;
        /**
         * Inclusive end date in YYYY-MM-DD format; must not precede beginDate.
         * @format date
         */
        endDate: string;
        /** Bar interval; defaults to daily bars. */
        period?: "1min" | "5min" | "10min" | "15min" | "30min" | "60min" | "120min" | "240min" | "1d" | "1w" | "1mo" | "1y" | "1q" | "6mo";
        /** Number of records within the date range: positive from the start, negative from the end, or zero for all records. */
        count?: number;
        /** Price adjustment: 0 for forward, 1 for backward, 2 for unadjusted; upstream defaults to 0. */
        adjustment?: "0" | "1" | "2";
        /** Include suspended trading data; upstream defaults to true. */
        includeSuspended?: boolean;
        /**
         * Optional price adjustment reference date in YYYY-MM-DD format.
         * @format date
         */
        adjustmentDate?: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get current price indicators for up to 50 indices; not historical time series. */
    "wind.get_index_price_indicators": {
      input: {
        /**
         * One to 50 Wind names or codes separated by commas.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Comma-separated exact Wind indicator names. Omit for default fields. Consult the official stock, fund or index indicator reference at https://github.com/Wind-Alice/AliceMarket/tree/main/skills/wind-mcp-skill/references before specifying fields; preserve the returned units. Total market value 1 excludes restricted shares, while total market value 2 includes them.
         * @minLength 1
         * @pattern \S
         */
        indexes?: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get minute-level index quotes; omit dates for the latest trading day. */
    "wind.get_index_quote": {
      input: {
        /**
         * Exact Wind instrument name or code; do not guess exchange suffixes.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Start date in YYYY-MM-DD format; required when endDate is supplied.
         * @format date
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format; defaults to the latest trading day.
         * @format date
         */
        endDate?: string;
        /** Number of records within the date range: positive from the start, negative from the end, or zero for all records. */
        count?: number;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query index or sector technical indicators and rolling returns. */
    "wind.get_index_technicals": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query stock risk metrics such as beta, volatility, Sharpe ratio and maximum drawdown. */
    "wind.get_risk_metrics": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query stock identity, listing, industry and company profile information. */
    "wind.get_stock_basicinfo": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query stock capital structure, major shareholders and institutional holdings. */
    "wind.get_stock_equity_holders": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query structured corporate actions, dividends, financing, shareholder and regulatory events; not announcement text. */
    "wind.get_stock_events": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query stock financial statements, ratios and valuation indicators by reporting or trading date. */
    "wind.get_stock_fundamentals": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get historical stock OHLCV bars over an explicit date range. */
    "wind.get_stock_kline": {
      input: {
        /**
         * Exact Wind instrument name or code; do not guess exchange suffixes.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        beginDate: string;
        /**
         * Inclusive end date in YYYY-MM-DD format; must not precede beginDate.
         * @format date
         */
        endDate: string;
        /** Bar interval; defaults to daily bars. */
        period?: "1min" | "5min" | "10min" | "15min" | "30min" | "60min" | "120min" | "240min" | "1d" | "1w" | "1mo" | "1y" | "1q" | "6mo";
        /** Number of records within the date range: positive from the start, negative from the end, or zero for all records. */
        count?: number;
        /** Price adjustment: 0 for forward, 1 for backward, 2 for unadjusted; upstream defaults to 0. */
        adjustment?: "0" | "1" | "2";
        /** Include suspended trading data; upstream defaults to true. */
        includeSuspended?: boolean;
        /**
         * Optional price adjustment reference date in YYYY-MM-DD format.
         * @format date
         */
        adjustmentDate?: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get current stock price, valuation and market indicators for up to 50 stocks; not historical time series. */
    "wind.get_stock_price_indicators": {
      input: {
        /**
         * One to 50 Wind names or codes separated by commas.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Comma-separated exact Wind indicator names. Omit for default fields. Consult the official stock, fund or index indicator reference at https://github.com/Wind-Alice/AliceMarket/tree/main/skills/wind-mcp-skill/references before specifying fields; preserve the returned units. Total market value 1 excludes restricted shares, while total market value 2 includes them.
         * @minLength 1
         * @pattern \S
         */
        indexes?: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Get minute-level stock quotes; omit dates for the latest trading day, and prefer K-line bars for long ranges. */
    "wind.get_stock_quote": {
      input: {
        /**
         * Exact Wind instrument name or code; do not guess exchange suffixes.
         * @minLength 1
         * @pattern \S
         */
        windcode: string;
        /**
         * Start date in YYYY-MM-DD format; required when endDate is supplied.
         * @format date
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format; defaults to the latest trading day.
         * @format date
         */
        endDate?: string;
        /** Number of records within the date range: positive from the start, negative from the end, or zero for all records. */
        count?: number;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Query stock technical indicators, rolling returns and technical patterns. */
    "wind.get_stock_technicals": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Discover current Wind tools and their live input and output schemas in one financial data domain. */
    "wind.list_tools": {
      input: {
        /** Official Wind financial data domain. */
        domain: "stock_data" | "fund_data" | "index_data" | "bond_data" | "financial_docs" | "economic_data" | "analytics_data";
      };
      output: {
        /** Available tools with their official schemas and metadata. */
        tools: Array<{
          /** Exact upstream tool name. */
          name?: string;
          /** Official tool description. */
          description?: string;
          /** Official JSON Schema for tool arguments. */
          inputSchema?: Record<string, unknown>;
          /** Official JSON Schema for tool results when provided. */
          outputSchema?: Record<string, unknown>;
          /** Official tool behavior hints. */
          annotations?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve Wind EDB time series by question or indicator codes, using a date range or observation count. */
    "wind.query_economic_indicator_data": {
      input: Record<string, unknown>;
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Resubscribe to an existing Wind Alice task after interruption without starting a new analysis. Returns within a 120-second subscription window. Retain previous window results and any error.data.partialResult because Wind does not guarantee prior output replay. */
    "wind.resume_alice_analysis": {
      input: {
        /**
         * Task identifier returned by a previous Alice result or error.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /**
         * Context identifier returned with the task; use the latest server-issued value.
         * @minLength 1
         * @pattern \S
         */
        contextId: string;
      };
      output: {
        /** Server task identifier to use when resuming this analysis. */
        taskId: string;
        /** Server context identifier to use when resuming this analysis. */
        contextId: string;
        /** Task state reported by Alice, or unknown if no task state was provided. Stream closure alone does not mean completion. */
        state: string;
        /** Whether Alice explicitly reported the completed task state. */
        completed: boolean;
        /** Original agentResult values received in this subscription window. Retain these before resuming; previous output replay is not guaranteed. */
        results: Array<unknown>;
        /** Report attachments parsed from Alice declarations, or result links when declarations contain no usable files. */
        files: Array<{
          /** Report file name. */
          name: string;
          /** Original absolute URL or project-relative file reference. Pass this value and contextId to download_alice_report. */
          fileUrl: string;
        }>;
      };
    };
    /** Run Wind Alice financial research, company memos, earnings reviews, peer comparisons, fact checks, fund analysis, macro and credit research. Returns within a 120-second subscription window with results and recovery identifiers; analysis may continue and consume Wind credits. If completed is false, retain this window and resume the same task instead of submitting again. */
    "wind.run_alice_analysis": {
      input: {
        /**
         * The user's original question, including companies, reporting periods and research requirements. Preserve its language and wording.
         * @minLength 1
         * @pattern \S
         */
        prompt: string;
        /**
         * Official Alice skill name in Chinese or English; omit for automatic routing. Known English names: Inflation Bond Strategy; Macro Data Interpretation; Thematic Stock Screening; Bond Rate Outlook; Credit Analysis; Fund Compare; Fund Screening & Investment Advisory; Investment Idea Generation; Company One-Page Investment Memo; Stock DD List; Global Share Quarterly Earnings Review; Market Sizing & Strategic Modeling; Comps Analysis; Fact Check. Newly published official names may also be supplied.
         * @minLength 1
         * @pattern \S
         */
        skill?: string;
      };
      output: {
        /** Server task identifier to use when resuming this analysis. */
        taskId: string;
        /** Server context identifier to use when resuming this analysis. */
        contextId: string;
        /** Task state reported by Alice, or unknown if no task state was provided. Stream closure alone does not mean completion. */
        state: string;
        /** Whether Alice explicitly reported the completed task state. */
        completed: boolean;
        /** Original agentResult values received in this subscription window. Retain these before resuming; previous output replay is not guaranteed. */
        results: Array<unknown>;
        /** Report attachments parsed from Alice declarations, or result links when declarations contain no usable files. */
        files: Array<{
          /** Report file name. */
          name: string;
          /** Original absolute URL or project-relative file reference. Pass this value and contextId to download_alice_report. */
          fileUrl: string;
        }>;
      };
    };
    /** Find Wind EDB economic indicators and their metadata; does not return time-series values. */
    "wind.search_economic_indicator": {
      input: {
        /**
         * Natural-language description of economic indicators to find; do not include extraction dates or conversion parameters.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Screen funds using natural-language conditions without requiring a specific fund. */
    "wind.search_funds": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
    /** Screen A-share, Hong Kong and US stocks using natural-language conditions. */
    "wind.search_stocks": {
      input: {
        /**
         * Natural-language request including the entity, metrics and reporting date or window; for screening, provide conditions instead of an entity.
         * @minLength 1
         * @pattern \S
         */
        question: string;
      };
      output: {
        /** Provider-defined data parsed from a single JSON text result, or the original MCP content envelope when no single JSON result exists. */
        result: unknown;
      };
    };
  }
}
