import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Investoday MCP tool with JSON arguments after checking its live schema and behavior annotations. */
    "investoday_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Run the Investoday entity recognition operation. */
    "investoday_mcp.entity_recognition": {
      input: {
        /**
         * Natural-language input to analyze Accepted by Investoday for entity_recognition.
         * @minLength 1
         * @example "贵州茅台怎么样？"
         */
        input: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Generate chart with Investoday. */
    "investoday_mcp.generate_chart": {
      input: {
        /**
         * Serialized ECharts options Accepted by Investoday for generate_chart.
         * @minLength 1
         * @example "{\"xAxis\":{\"type\":\"category\",\"data\":[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]},\"yAxis\":{\"type\":\"value\"},\"series\":[{\"data\":[120,200,150,80,70,110,130],\"type\":\"bar\"}]}"
         */
        options: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Generate nex chart with Investoday. */
    "investoday_mcp.generate_nex_chart": {
      input: {
        /**
         * Serialized ECharts options Accepted by Investoday for generate_nex_chart.
         * @minLength 1
         * @example " {\"xAxis\":{\"type\":\"category\",\"data\":[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]},\"yAxis\":{\"type\":\"value\"},\"series\":[{\"data\":[120,200,150,80,70,110,130],\"type\":\"bar\"}]}"
         */
        options: string;
        /**
         * Record identifier Accepted by Investoday for generate_nex_chart.
         * @minLength 1
         * @example "nex-line-bar"
         */
        id: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get announcement content data from Investoday. */
    "investoday_mcp.get_announcement_content": {
      input: {
        /**
         * Announcement identifier Accepted by Investoday for get_announcement_content.
         * @example 9128035
         */
        announcementId: number;
        /**
         * Requested content length Accepted by Investoday for get_announcement_content.
         * @minimum 1
         * @maximum 2000
         * @example 2000
         */
        contentLength?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get chain bond issuers data from Investoday. */
    "investoday_mcp.get_chain_bond_issuers": {
      input: {
        /**
         * Company name Accepted by Investoday for get_chain_bond_issuers.
         * @minLength 1
         * @example "广东粤运交通股份有限公司"
         */
        companyName: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get chain industry info data from Investoday. */
    "investoday_mcp.get_chain_industry_info": {
      input: {
        /**
         * Industry name Accepted by Investoday for get_chain_industry_info.
         * @minLength 1
         * @example "商品化工"
         */
        industryName?: string;
        /**
         * Industry code Accepted by Investoday for get_chain_industry_info.
         * @minLength 1
         * @example "CSF_15101010"
         */
        industryCode?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get chain pro relation data from Investoday. */
    "investoday_mcp.get_chain_pro_relation": {
      input: {
        /**
         * Product code Accepted by Investoday for get_chain_pro_relation.
         * @minLength 1
         * @example "P0007786"
         */
        productCode?: string;
        /**
         * Number of records per page Accepted by Investoday for get_chain_pro_relation.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_chain_pro_relation.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Product name Accepted by Investoday for get_chain_pro_relation.
         * @minLength 1
         * @example "红茶"
         */
        productName?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get chain product info data from Investoday. */
    "investoday_mcp.get_chain_product_info": {
      input: {
        /**
         * Product code Accepted by Investoday for get_chain_product_info.
         * @minLength 1
         * @example "P0007784"
         */
        productCode?: string;
        /**
         * Product name Accepted by Investoday for get_chain_product_info.
         * @minLength 1
         * @example "白茶"
         */
        productName?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get chain sec basic info data from Investoday. */
    "investoday_mcp.get_chain_sec_basic_info": {
      input: {
        /**
         * Stock codes Accepted by Investoday for get_chain_sec_basic_info.
         * @example ["000001","600519"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for get_chain_sec_basic_info.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_chain_sec_basic_info.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get China trade calender list data from Investoday. */
    "investoday_mcp.get_cn_trade_calender_list": {
      input: {
        /**
         * Analysis cycle Accepted by Investoday for get_cn_trade_calender_list.
         * @example "Y1"
         */
        cycle: "M1" | "M3" | "M6" | "Y1";
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get company profiles data from Investoday. */
    "investoday_mcp.get_company_profiles": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get concept realtime quote data from Investoday. */
    "investoday_mcp.get_concept_realtime_quote": {
      input: {
        /**
         * Concept type Accepted by Investoday for get_concept_realtime_quote.
         * @minLength 1
         * @example "jy"
         */
        conceptType: string;
        /**
         * Concept code Accepted by Investoday for get_concept_realtime_quote.
         * @minLength 1
         * @example "14060061"
         */
        conceptCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get concept stock realtime quote data from Investoday. */
    "investoday_mcp.get_concept_stock_realtime_quote": {
      input: {
        /**
         * Column used to sort the result Accepted by Investoday for get_concept_stock_realtime_quote.
         * @minLength 1
         * @example "changeRatio"
         */
        sortColumn?: string;
        /**
         * Concept type Accepted by Investoday for get_concept_stock_realtime_quote.
         * @example "jy"
         */
        conceptType: "jy" | "cls";
        /**
         * Concept code Accepted by Investoday for get_concept_stock_realtime_quote.
         * @minLength 1
         * @example "14060061"
         */
        conceptCode: string;
        /**
         * Number of records per page Accepted by Investoday for get_concept_stock_realtime_quote.
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_concept_stock_realtime_quote.
         * @example 1
         */
        page?: number;
        /**
         * Sort order Accepted by Investoday for get_concept_stock_realtime_quote.
         * @example "desc"
         */
        order?: "asc" | "desc";
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get financial health history data from Investoday. */
    "investoday_mcp.get_fin_health_history": {
      input: {
        /** Investoday query type Accepted by Investoday for get_fin_health_history. */
        type: "1" | "2";
        /**
         * Stock code Accepted by Investoday for get_fin_health_history.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund award records data from Investoday. */
    "investoday_mcp.get_fund_award_records": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund basic info data from Investoday. */
    "investoday_mcp.get_fund_basic_info": {
      input: {
        /**
         * Fund codes Accepted by Investoday for get_fund_basic_info.
         * @example ["000001","000006"]
         */
        fundCodes?: Array<string>;
        /**
         * Fund code Accepted by Investoday for get_fund_basic_info.
         * @minLength 1
         * @example "000001"
         */
        fundCode?: string;
        /**
         * Number of records per page Accepted by Investoday for get_fund_basic_info.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_fund_basic_info.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund categories data from Investoday. */
    "investoday_mcp.get_fund_categories": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund code assoc data from Investoday. */
    "investoday_mcp.get_fund_code_assoc": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund company evals data from Investoday. */
    "investoday_mcp.get_fund_company_evals": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund listings record data from Investoday. */
    "investoday_mcp.get_fund_listings_record": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund manager basic info data from Investoday. */
    "investoday_mcp.get_fund_manager_basic_info": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund peer average metric data from Investoday. */
    "investoday_mcp.get_fund_peer_avg_metric": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund performance attribution data from Investoday. */
    "investoday_mcp.get_fund_performance_attribution": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get fund quote realtime data from Investoday. */
    "investoday_mcp.get_fund_quote_realtime": {
      input: {
        /**
         * Fund code Accepted by Investoday for get_fund_quote_realtime.
         * @minLength 1
         * @example "159001"
         */
        fundCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get Hong Kong stock basic info data from Investoday. */
    "investoday_mcp.get_hk_stock_basic_info": {
      input: {
        /**
         * Stock codes Accepted by Investoday for get_hk_stock_basic_info.
         * @example ["00001","00004"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for get_hk_stock_basic_info.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_hk_stock_basic_info.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get Hong Kong stock name change data from Investoday. */
    "investoday_mcp.get_hk_stock_name_change": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_hk_stock_name_change.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get Hong Kong stock range change data from Investoday. */
    "investoday_mcp.get_hk_stock_range_change": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_hk_stock_range_change.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get Hong Kong stock transfers data from Investoday. */
    "investoday_mcp.get_hk_stock_transfers": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_hk_stock_transfers.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get Hong Kong stock turnrate data from Investoday. */
    "investoday_mcp.get_hk_stock_turnrate": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_hk_stock_turnrate.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get Hong Kong stock valuations data from Investoday. */
    "investoday_mcp.get_hk_stock_valuations": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_hk_stock_valuations.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get index basic info data from Investoday. */
    "investoday_mcp.get_index_basic_info": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get index range gains data from Investoday. */
    "investoday_mcp.get_index_range_gains": {
      input: {
        /**
         * Index code Accepted by Investoday for get_index_range_gains.
         * @minLength 1
         * @example "000300"
         */
        indexCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get index realtime quotes data from Investoday. */
    "investoday_mcp.get_index_realtime_quotes": {
      input: {
        /**
         * Index codes Accepted by Investoday for get_index_realtime_quotes.
         * @minItems 1
         * @example ["000001","399006"]
         */
        indexCodes: Array<string>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get index valuation data from Investoday. */
    "investoday_mcp.get_index_valuation": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get industry financial overview data from Investoday. */
    "investoday_mcp.get_industry_financial_overview": {
      input: {
        /**
         * Industry code Accepted by Investoday for get_industry_financial_overview.
         * @minLength 1
         * @example "640000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get industry market stats data from Investoday. */
    "investoday_mcp.get_industry_market_stats": {
      input: {
        /**
         * Industry code Accepted by Investoday for get_industry_market_stats.
         * @minLength 1
         * @example "640000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get industry realtime quote data from Investoday. */
    "investoday_mcp.get_industry_realtime_quote": {
      input: {
        /**
         * Industry code Accepted by Investoday for get_industry_realtime_quote.
         * @minLength 1
         * @example "330000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get industry stock realtime quote data from Investoday. */
    "investoday_mcp.get_industry_stock_realtime_quote": {
      input: {
        /**
         * Column used to sort the result Accepted by Investoday for get_industry_stock_realtime_quote.
         * @minLength 1
         * @example "changeRatio"
         */
        sortColumn?: string;
        /**
         * Number of records per page Accepted by Investoday for get_industry_stock_realtime_quote.
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_industry_stock_realtime_quote.
         * @example 1
         */
        page?: number;
        /**
         * Industry code Accepted by Investoday for get_industry_stock_realtime_quote.
         * @minLength 1
         * @example "740000"
         */
        industryCode: string;
        /**
         * Sort order Accepted by Investoday for get_industry_stock_realtime_quote.
         * @example "desc"
         */
        order?: "asc" | "desc";
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get current market breadth, including rising, falling and limit-up or limit-down stock counts. */
    "investoday_mcp.get_market_change_ratio_status": {
      input: Record<string, never>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get report earnings forecast rating data from Investoday. */
    "investoday_mcp.get_report_earnings_forecast_rating": {
      input: {
        /**
         * Number of records per page Accepted by Investoday for get_report_earnings_forecast_rating.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_report_earnings_forecast_rating.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for get_report_earnings_forecast_rating.
         * @minLength 1
         * @example "000001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock fundamentals data from Investoday. */
    "investoday_mcp.get_stk_fundamentals": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock investment risks data from Investoday. */
    "investoday_mcp.get_stk_investment_risks": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock sw industry returns data from Investoday. */
    "investoday_mcp.get_stk_sw_idu_returns": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock unwind sig stat data from Investoday. */
    "investoday_mcp.get_stk_unwind_sig_stat": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get basic information for one or multiple Shanghai, Shenzhen or Beijing stocks. */
    "investoday_mcp.get_stock_basic_info": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock business themes data from Investoday. */
    "investoday_mcp.get_stock_business_themes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock financial subitem score data from Investoday. */
    "investoday_mcp.get_stock_fin_subitem_score": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_fin_subitem_score.
         * @minLength 1
         * @example "600519"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance growth ability data from Investoday. */
    "investoday_mcp.get_stock_finance_growth_ability": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_finance_growth_ability.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance growth ability historical data from Investoday. */
    "investoday_mcp.get_stock_finance_growth_ability_hist": {
      input: {
        /** Investoday query type Accepted by Investoday for get_stock_finance_growth_ability_hist. */
        type: "1" | "2";
        /**
         * Stock code Accepted by Investoday for get_stock_finance_growth_ability_hist.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance industry compare data from Investoday. */
    "investoday_mcp.get_stock_finance_industry_compare": {
      input: {
        /** Investoday query type Accepted by Investoday for get_stock_finance_industry_compare. */
        type: "indu1" | "indu2" | "indu3";
        /**
         * Stock code Accepted by Investoday for get_stock_finance_industry_compare.
         * @minLength 1
         */
        stockCode: string;
        /** Search keyword Accepted by Investoday for get_stock_finance_industry_compare. */
        key: "f2030" | "f2040" | "f2050" | "f2060" | "f2070" | "f2080" | "f2090" | "f2100" | "f2190" | "f2200" | "f2210" | "f2220" | "f2230" | "f2240" | "f2180Ext" | "f2250" | "f2260" | "f2270" | "f2280" | "f2290" | "f2300Ext2" | "f2310" | "f2320" | "f2330" | "f2340" | "f2350" | "f2370" | "f2380" | "f2390" | "f2440Ext2" | "f2450Ext2" | "f2460Ext2" | "f2470" | "f2480";
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance profit ability data from Investoday. */
    "investoday_mcp.get_stock_finance_profit_ability": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_finance_profit_ability.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance profit ability historical data from Investoday. */
    "investoday_mcp.get_stock_finance_profit_ability_hist": {
      input: {
        /** Investoday query type Accepted by Investoday for get_stock_finance_profit_ability_hist. */
        type: "1" | "2";
        /**
         * Stock code Accepted by Investoday for get_stock_finance_profit_ability_hist.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance strength data from Investoday. */
    "investoday_mcp.get_stock_finance_strength": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_finance_strength.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance valuation data from Investoday. */
    "investoday_mcp.get_stock_finance_valuation": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_finance_valuation.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock finance valuation historical data from Investoday. */
    "investoday_mcp.get_stock_finance_valuation_hist": {
      input: {
        /** Investoday query type Accepted by Investoday for get_stock_finance_valuation_hist. */
        type: "1" | "2";
        /**
         * Stock code Accepted by Investoday for get_stock_finance_valuation_hist.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock financial strength ext historical data from Investoday. */
    "investoday_mcp.get_stock_financial_strength_ext_hist": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_financial_strength_ext_hist.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock former names data from Investoday. */
    "investoday_mcp.get_stock_former_names": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock industries data from Investoday. */
    "investoday_mcp.get_stock_industries": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock margin requirement data from Investoday. */
    "investoday_mcp.get_stock_margin_requirement": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock margin securities data from Investoday. */
    "investoday_mcp.get_stock_margin_securities": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock prospects data from Investoday. */
    "investoday_mcp.get_stock_prospects": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get the latest realtime quote for one Shanghai, Shenzhen or Beijing stock. */
    "investoday_mcp.get_stock_quote_realtime": {
      input: {
        /**
         * Stock code, for example 002594.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock quote realtime ext data from Investoday. */
    "investoday_mcp.get_stock_quote_rt_ext": {
      input: {
        /**
         * Column used to sort the result Accepted by Investoday for get_stock_quote_rt_ext.
         * @example "changeRatio"
         */
        sortColumn: "changeRatio" | "limitUpTime" | "limitDownTime";
        /**
         * Stock codes Accepted by Investoday for get_stock_quote_rt_ext.
         * @example ["000001"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for get_stock_quote_rt_ext.
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for get_stock_quote_rt_ext.
         * @example 1
         */
        page?: number;
        /**
         * Sort order Accepted by Investoday for get_stock_quote_rt_ext.
         * @minLength 1
         * @example "asc"
         */
        order?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock realtime fund flow data from Investoday. */
    "investoday_mcp.get_stock_realtime_fund_flow": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_realtime_fund_flow.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock realtime quote merge data from Investoday. */
    "investoday_mcp.get_stock_realtime_quote_merge": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_realtime_quote_merge.
         * @minLength 1
         * @example "600839"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock rights issues data from Investoday. */
    "investoday_mcp.get_stock_rights_issues": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock score data from Investoday. */
    "investoday_mcp.get_stock_score": {
      input: {
        /**
         * Stock code Accepted by Investoday for get_stock_score.
         * @minLength 1
         * @example "000001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock valuation indicators including market capitalization, PE, PB and PS over a date range. */
    "investoday_mcp.get_stock_val_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get trade special date data from Investoday. */
    "investoday_mcp.get_trade_special_date": {
      input: {
        /**
         * Trading date in YYYY-MM-DD format Accepted by Investoday for get_trade_special_date.
         * @minLength 1
         * @format date
         * @example "2025-05-19"
         */
        tradeDate?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Check whether trade date with Investoday. */
    "investoday_mcp.is_trade_date": {
      input: {
        /**
         * Trading date in YYYY-MM-DD format Accepted by Investoday for is_trade_date.
         * @minLength 1
         * @example "2025-12-22"
         */
        tDate: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry financial indicator sol average data from Investoday. */
    "investoday_mcp.list__idu_fin_ind_sol_avg": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List announcements data from Investoday. */
    "investoday_mcp.list_announcements": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_announcements.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_announcements.
         * @minLength 1
         * @format date
         * @example "2020-01-02"
         */
        endDate?: string;
        /**
         * Announcement identifier Accepted by Investoday for list_announcements.
         * @example 9128035
         */
        announcementId?: number;
        /**
         * Number of records per page Accepted by Investoday for list_announcements.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Title keyword Accepted by Investoday for list_announcements.
         * @minLength 1
         * @example "贵州茅台利润大涨"
         */
        title?: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_announcements.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_announcements.
         * @minLength 1
         * @example "000001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List bonds basic data from Investoday. */
    "investoday_mcp.list_bonds_basic": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List bonds coupons data from Investoday. */
    "investoday_mcp.list_bonds_coupons": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List bonds ratings data from Investoday. */
    "investoday_mcp.list_bonds_ratings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List bonds yield curve data from Investoday. */
    "investoday_mcp.list_bonds_yield_curve": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_bonds_yield_curve.
         * @minLength 1
         * @format date
         * @example "2026-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_bonds_yield_curve.
         * @minLength 1
         * @format date
         * @example "2026-08-12"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_bonds_yield_curve.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_bonds_yield_curve.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Yield curve code Accepted by Investoday for list_bonds_yield_curve.
         * @example "CNYYC"
         */
        curveCode: "CNYYC" | "USDYC";
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List convertible bond basic data from Investoday. */
    "investoday_mcp.list_cb_basic": {
      input: {
        /**
         * Convertible bond codes Accepted by Investoday for list_cb_basic.
         * @example ["110059","113052"]
         */
        cbCodes?: Array<string>;
        /**
         * Convertible bond code Accepted by Investoday for list_cb_basic.
         * @minLength 1
         * @example "110059"
         */
        cbCode?: string;
        /**
         * Number of records per page Accepted by Investoday for list_cb_basic.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_cb_basic.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List convertible bond daily data from Investoday. */
    "investoday_mcp.list_cb_daily": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List convertible bond plans data from Investoday. */
    "investoday_mcp.list_cb_plans": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List convertible bond valuation data from Investoday. */
    "investoday_mcp.list_cb_valuation": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List chain com main pro data from Investoday. */
    "investoday_mcp.list_chain_com_main_pro": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_chain_com_main_pro.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_chain_com_main_pro.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Stock codes Accepted by Investoday for list_chain_com_main_pro.
         * @example ["600519","000001"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for list_chain_com_main_pro.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Product codes Accepted by Investoday for list_chain_com_main_pro.
         * @example ["P0007786","P0007806"]
         */
        productCodes?: Array<string>;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_chain_com_main_pro.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List chain pro indicator maps data from Investoday. */
    "investoday_mcp.list_chain_pro_ind_maps": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_chain_pro_ind_maps.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_chain_pro_ind_maps.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Stock codes Accepted by Investoday for list_chain_pro_ind_maps.
         * @minItems 1
         * @example ["000001","600519"]
         */
        stockCodes: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for list_chain_pro_ind_maps.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_chain_pro_ind_maps.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List concept etf mapping data from Investoday. */
    "investoday_mcp.list_concept_etf_mapping": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List concept hold fund data from Investoday. */
    "investoday_mcp.list_concept_hold_fund": {
      input: {
        /**
         * Concept codes Accepted by Investoday for list_concept_hold_fund.
         * @example ["CLS80457","CLS82591"]
         */
        conceptCodes?: Array<string>;
        /**
         * Concept code Accepted by Investoday for list_concept_hold_fund.
         * @minLength 1
         * @example "CLS82591"
         */
        conceptCode?: string;
        /**
         * Number of records per page Accepted by Investoday for list_concept_hold_fund.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_concept_hold_fund.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List concept hold fund batch data from Investoday. */
    "investoday_mcp.list_concept_hold_fund_batch": {
      input: {
        /**
         * Whether to limit results to exchange-traded funds Accepted by Investoday for list_concept_hold_fund_batch.
         * @example true
         */
        isETF?: boolean;
        /**
         * Concept codes Accepted by Investoday for list_concept_hold_fund_batch.
         * @minItems 1
         */
        conceptCodes: Array<string>;
        /**
         * Result matching type Accepted by Investoday for list_concept_hold_fund_batch.
         * @example 1
         */
        matchType: 1 | 2 | 3;
        /**
         * Threshold value Accepted by Investoday for list_concept_hold_fund_batch.
         * @example 40
         */
        threshold: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List concept real quote data from Investoday. */
    "investoday_mcp.list_concept_real_quote": {
      input: {
        /**
         * Column used to sort the result Accepted by Investoday for list_concept_real_quote.
         * @minLength 1
         * @example "changeRatio"
         */
        sortColumn: string;
        /**
         * Concept type Accepted by Investoday for list_concept_real_quote.
         * @example 1
         */
        conceptType: 1 | 2;
        /** Concept codes Accepted by Investoday for list_concept_real_quote. */
        conceptCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for list_concept_real_quote.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_concept_real_quote.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Sort order Accepted by Investoday for list_concept_real_quote.
         * @minLength 1
         * @example "desc"
         */
        order?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List concepts data from Investoday. */
    "investoday_mcp.list_concepts": {
      input: {
        /**
         * Concept name Accepted by Investoday for list_concepts.
         * @minLength 1
         * @example "次新股"
         */
        conceptName?: string;
        /**
         * Number of records per page Accepted by Investoday for list_concepts.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_concepts.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List currency yield history data from Investoday. */
    "investoday_mcp.list_currency_yield_history": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List economic China cpi data from Investoday. */
    "investoday_mcp.list_economic_cn_cpi": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_economic_cn_cpi.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_economic_cn_cpi.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_economic_cn_cpi.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_economic_cn_cpi.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List economic China ppi data from Investoday. */
    "investoday_mcp.list_economic_cn_ppi": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_economic_cn_ppi.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_economic_cn_ppi.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_economic_cn_ppi.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_economic_cn_ppi.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List entity related news data from Investoday. */
    "investoday_mcp.list_entity_related_news": {
      input: {
        /**
         * Sentiment classification Accepted by Investoday for list_entity_related_news.
         * @example 1
         */
        sentiment?: 1 | 2 | 3 | 4 | 5;
        /**
         * Concept code Accepted by Investoday for list_entity_related_news.
         * @minLength 1
         * @example "CLS81936"
         */
        conceptCode?: string;
        /**
         * Number of records per page Accepted by Investoday for list_entity_related_news.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Start time in YYYY-MM-DD HH:mm:ss format Accepted by Investoday for list_entity_related_news.
         * @minLength 1
         * @example "2020-01-01 08:00:00"
         */
        beginTime?: string;
        /**
         * End time in YYYY-MM-DD HH:mm:ss format Accepted by Investoday for list_entity_related_news.
         * @minLength 1
         * @example "2025-02-01 08:00:00"
         */
        endTime?: string;
        /**
         * Title keyword Accepted by Investoday for list_entity_related_news.
         * @minLength 1
         * @example "人工智能"
         */
        title?: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_entity_related_news.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * News category Accepted by Investoday for list_entity_related_news.
         * @example 1
         */
        newsType?: 1 | 2 | 3 | 4;
        /**
         * News importance level Accepted by Investoday for list_entity_related_news.
         * @example 1
         */
        newsLevel?: 1 | 2;
        /**
         * Stock code Accepted by Investoday for list_entity_related_news.
         * @minLength 1
         * @example "600839"
         */
        stockCode?: string;
        /**
         * Industry code Accepted by Investoday for list_entity_related_news.
         * @minLength 1
         * @example "370000"
         */
        industryCode?: string;
        /**
         * Minimum relevance score Accepted by Investoday for list_entity_related_news.
         * @minimum 1
         * @maximum 5
         * @example 1
         */
        minRelevance?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List etf constituent stks data from Investoday. */
    "investoday_mcp.list_etf_constituent_stks": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List etf sub red lists data from Investoday. */
    "investoday_mcp.list_etf_sub_red_lists": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator cash coll quarterly data from Investoday. */
    "investoday_mcp.list_fin_ind_cash_coll_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator cash collect data from Investoday. */
    "investoday_mcp.list_fin_ind_cash_collect": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator operating data from Investoday. */
    "investoday_mcp.list_fin_ind_operating": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator operating quarterly data from Investoday. */
    "investoday_mcp.list_fin_ind_operating_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator profit data from Investoday. */
    "investoday_mcp.list_fin_ind_profit": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator profit quarterly data from Investoday. */
    "investoday_mcp.list_fin_ind_profit_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator profit ttm data from Investoday. */
    "investoday_mcp.list_fin_ind_profit_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator solvency data from Investoday. */
    "investoday_mcp.list_fin_ind_solvency": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator solvency quarterly data from Investoday. */
    "investoday_mcp.list_fin_ind_solvency_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List financial indicator solvency ttm data from Investoday. */
    "investoday_mcp.list_fin_ind_solvency_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund adjusted navs data from Investoday. */
    "investoday_mcp.list_fund_adj_navs": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund adjusted quotes data from Investoday. */
    "investoday_mcp.list_fund_adj_quotes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund all data from Investoday. */
    "investoday_mcp.list_fund_all": {
      input: {
        /**
         * Number of records per page Accepted by Investoday for list_fund_all.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_fund_all.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund announcements data from Investoday. */
    "investoday_mcp.list_fund_announcements": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_fund_announcements.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * Fund codes Accepted by Investoday for list_fund_announcements.
         * @minItems 1
         * @example ["000001","000004"]
         */
        fundCodes: Array<string>;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_fund_announcements.
         * @minLength 1
         * @format date
         * @example "2020-01-02"
         */
        endDate?: string;
        /**
         * Announcement identifier Accepted by Investoday for list_fund_announcements.
         * @example 9128035
         */
        announcementID?: number;
        /**
         * Number of records per page Accepted by Investoday for list_fund_announcements.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Title keyword Accepted by Investoday for list_fund_announcements.
         * @minLength 1
         * @example "贵州茅台利润大涨"
         */
        title?: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_fund_announcements.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund current manager returns data from Investoday. */
    "investoday_mcp.list_fund_current_manager_returns": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund daily quotes data from Investoday. */
    "investoday_mcp.list_fund_daily_quotes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund dividend distributions data from Investoday. */
    "investoday_mcp.list_fund_dividend_distributions": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund fee structures data from Investoday. */
    "investoday_mcp.list_fund_fee_structures": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund financial indicators data from Investoday. */
    "investoday_mcp.list_fund_fin_inds": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund financial indicators quarterly data from Investoday. */
    "investoday_mcp.list_fund_fin_inds_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund flow data from Investoday. */
    "investoday_mcp.list_fund_flow": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund hold industry data from Investoday. */
    "investoday_mcp.list_fund_hold_industry": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund hold structures data from Investoday. */
    "investoday_mcp.list_fund_hold_structures": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund holdings performance data from Investoday. */
    "investoday_mcp.list_fund_holdings_perf": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund index ret corr data from Investoday. */
    "investoday_mcp.list_fund_idx_ret_corr": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund invest targets data from Investoday. */
    "investoday_mcp.list_fund_invest_targets": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund margin trade data from Investoday. */
    "investoday_mcp.list_fund_margin_trade": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund manager historical per data from Investoday. */
    "investoday_mcp.list_fund_mgr_hist_per": {
      input: {
        /**
         * Number of records per page Accepted by Investoday for list_fund_mgr_hist_per.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Fund manager name Accepted by Investoday for list_fund_mgr_hist_per.
         * @minLength 1
         * @example "张三"
         */
        fundManagerName?: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_fund_mgr_hist_per.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund manager performance data from Investoday. */
    "investoday_mcp.list_fund_mgr_perf": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund manager returns data from Investoday. */
    "investoday_mcp.list_fund_mgr_returns": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_fund_mgr_returns.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_fund_mgr_returns.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_fund_mgr_returns.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Fund manager name Accepted by Investoday for list_fund_mgr_returns.
         * @minLength 1
         * @example "000001"
         */
        fundManagerName: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_fund_mgr_returns.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund nav history data from Investoday. */
    "investoday_mcp.list_fund_nav_history": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund oscillator indicators data from Investoday. */
    "investoday_mcp.list_fund_oscillator_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund performance benchmarks data from Investoday. */
    "investoday_mcp.list_fund_perf_benchmarks": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund portfolio asset holdings data from Investoday. */
    "investoday_mcp.list_fund_portfolio_asset_holdings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund portfolio bond holdings data from Investoday. */
    "investoday_mcp.list_fund_portfolio_bond_holdings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund portfolio stock holdings data from Investoday. */
    "investoday_mcp.list_fund_portfolio_stock_holdings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund price volume indicators data from Investoday. */
    "investoday_mcp.list_fund_price_volume_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund return rate data from Investoday. */
    "investoday_mcp.list_fund_return_rate": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund share splits data from Investoday. */
    "investoday_mcp.list_fund_share_splits": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund shares data from Investoday. */
    "investoday_mcp.list_fund_shares": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund strength trend indicators data from Investoday. */
    "investoday_mcp.list_fund_strength_trend_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List fund tech indicators data from Investoday. */
    "investoday_mcp.list_fund_tech_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List futures kline minute data from Investoday. */
    "investoday_mcp.list_futures_kline_minute": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_futures_kline_minute.
         * @minLength 1
         * @format date
         * @example "2026-07-23"
         */
        beginDate?: string;
        /**
         * Futures contract code Accepted by Investoday for list_futures_kline_minute.
         * @minLength 1
         * @example "CHINA50"
         */
        futureCode?: string;
        /**
         * K-line period Accepted by Investoday for list_futures_kline_minute.
         * @example -2
         */
        klinePeriod?: number;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_futures_kline_minute.
         * @minLength 1
         * @format date
         * @example "2026-07-23"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_futures_kline_minute.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_futures_kline_minute.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List gover bond yield data from Investoday. */
    "investoday_mcp.list_gover_bond_yield": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_gover_bond_yield.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_gover_bond_yield.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_gover_bond_yield.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_gover_bond_yield.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock adjusted quotes data from Investoday. */
    "investoday_mcp.list_hk_stock_adjusted_quotes": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_adjusted_quotes.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_adjusted_quotes.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_adjusted_quotes.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_adjusted_quotes.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_adjusted_quotes.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock balance sheet data from Investoday. */
    "investoday_mcp.list_hk_stock_balance_sheet": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_balance_sheet.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_balance_sheet.
         * @minLength 1
         * @format date
         * @example "2025-03-30"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_balance_sheet.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_balance_sheet.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_balance_sheet.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock capital changes data from Investoday. */
    "investoday_mcp.list_hk_stock_capital_changes": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_capital_changes.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_capital_changes.
         * @minLength 1
         * @format date
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_capital_changes.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_capital_changes.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_capital_changes.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock cash flows data from Investoday. */
    "investoday_mcp.list_hk_stock_cash_flows": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_cash_flows.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_cash_flows.
         * @minLength 1
         * @format date
         * @example "2025-03-30"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_cash_flows.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_cash_flows.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_cash_flows.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock dividends data from Investoday. */
    "investoday_mcp.list_hk_stock_dividends": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_dividends.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_dividends.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_dividends.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_dividends.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_dividends.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock income statements data from Investoday. */
    "investoday_mcp.list_hk_stock_income_statements": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_income_statements.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_income_statements.
         * @minLength 1
         * @format date
         * @example "2025-03-30"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_income_statements.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_income_statements.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_income_statements.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock oscillator indicators data from Investoday. */
    "investoday_mcp.list_hk_stock_oscillator_indicators": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_oscillator_indicators.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_oscillator_indicators.
         * @minLength 1
         * @format date
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_oscillator_indicators.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_oscillator_indicators.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_oscillator_indicators.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock price volume indicators data from Investoday. */
    "investoday_mcp.list_hk_stock_price_volume_indicators": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_price_volume_indicators.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_price_volume_indicators.
         * @minLength 1
         * @format date
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_price_volume_indicators.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_price_volume_indicators.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_price_volume_indicators.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List Hong Kong stock strength trend indicators data from Investoday. */
    "investoday_mcp.list_hk_stock_strength_trend_indicators": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_strength_trend_indicators.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_hk_stock_strength_trend_indicators.
         * @minLength 1
         * @format date
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_hk_stock_strength_trend_indicators.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_hk_stock_strength_trend_indicators.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_hk_stock_strength_trend_indicators.
         * @minLength 1
         * @example "00001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry concept mappings data from Investoday. */
    "investoday_mcp.list_idu_concept_mappings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry turnover rates data from Investoday. */
    "investoday_mcp.list_idu_turnover_rates": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_idu_turnover_rates.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_idu_turnover_rates.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_idu_turnover_rates.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_idu_turnover_rates.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Industry code Accepted by Investoday for list_idu_turnover_rates.
         * @minLength 1
         * @example "640000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index industry exposure data from Investoday. */
    "investoday_mcp.list_idx_idu_exposure": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List indicator real quote v2 data from Investoday. */
    "investoday_mcp.list_ind_real_quote_v2": {
      input: {
        /**
         * Column used to sort the result Accepted by Investoday for list_ind_real_quote_v2.
         * @minLength 1
         * @example "changeRatio"
         */
        sortColumn: string;
        /**
         * Industry classification type Accepted by Investoday for list_ind_real_quote_v2.
         * @minLength 1
         * @example "SW"
         */
        industryType?: string;
        /**
         * Industry classification level Accepted by Investoday for list_ind_real_quote_v2.
         * @example 1
         */
        industryLevel?: number;
        /**
         * Number of records per page Accepted by Investoday for list_ind_real_quote_v2.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /** Industry codes Accepted by Investoday for list_ind_real_quote_v2. */
        industryCodes?: Array<string>;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_ind_real_quote_v2.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Sort order Accepted by Investoday for list_ind_real_quote_v2.
         * @minLength 1
         * @example "desc"
         */
        order?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index finance data from Investoday. */
    "investoday_mcp.list_index_finance": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index oscillator indicators data from Investoday. */
    "investoday_mcp.list_index_oscillator_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index price volume indicators data from Investoday. */
    "investoday_mcp.list_index_price_volume_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index quote barch data from Investoday. */
    "investoday_mcp.list_index_quote_barch": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index sample data from Investoday. */
    "investoday_mcp.list_index_sample": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_index_sample.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_index_sample.
         * @minLength 1
         * @format date
         * @example "2026-07-31"
         */
        endDate?: string;
        /**
         * Index code Accepted by Investoday for list_index_sample.
         * @minLength 1
         * @example "000300"
         */
        indexCode?: string;
        /**
         * Number of records per page Accepted by Investoday for list_index_sample.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_index_sample.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Index codes Accepted by Investoday for list_index_sample.
         * @example ["000300","000905"]
         */
        indexCodes?: Array<string>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index strength trend indicators data from Investoday. */
    "investoday_mcp.list_index_strength_trend_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List index technical indicators data from Investoday. */
    "investoday_mcp.list_index_technical_indicators": {
      input: {
        /**
         * Index code Accepted by Investoday for list_index_technical_indicators.
         * @minLength 1
         * @example "000001"
         */
        indexCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industries data from Investoday. */
    "investoday_mcp.list_industries": {
      input: {
        /**
         * Industry name Accepted by Investoday for list_industries.
         * @minLength 1
         * @example "煤炭"
         */
        industryName?: string;
        /**
         * Industry classification type Accepted by Investoday for list_industries.
         * @example "INDUS4_CL"
         */
        industryType?: "INDUS2_CL" | "INDUS3_CL" | "INDUS4_CL" | "INDUS5_CL" | "INDUS6_CL" | "INDUS8_CL";
        /**
         * Number of records per page Accepted by Investoday for list_industries.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_industries.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Industry code Accepted by Investoday for list_industries.
         * @minLength 1
         * @example "740000"
         */
        industryCode?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry etf mapping data from Investoday. */
    "investoday_mcp.list_industry_etf_mapping": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry excess alph data from Investoday. */
    "investoday_mcp.list_industry_excess_alph": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_industry_excess_alph.
         * @minLength 1
         * @format date
         * @example "2026-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_industry_excess_alph.
         * @minLength 1
         * @format date
         * @example "2026-07-31"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_industry_excess_alph.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_industry_excess_alph.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Industry code Accepted by Investoday for list_industry_excess_alph.
         * @minLength 1
         * @example "640000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry financial ttm data from Investoday. */
    "investoday_mcp.list_industry_fin_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry forecasts data from Investoday. */
    "investoday_mcp.list_industry_forecasts": {
      input: {
        /**
         * Industry code Accepted by Investoday for list_industry_forecasts.
         * @minLength 1
         * @example "640000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry hold fund data from Investoday. */
    "investoday_mcp.list_industry_hold_fund": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry hold fund batch data from Investoday. */
    "investoday_mcp.list_industry_hold_fund_batch": {
      input: {
        /**
         * Whether to limit results to exchange-traded funds Accepted by Investoday for list_industry_hold_fund_batch.
         * @example true
         */
        isETF?: boolean;
        /**
         * Result matching type Accepted by Investoday for list_industry_hold_fund_batch.
         * @example 1
         */
        matchType: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Threshold value Accepted by Investoday for list_industry_hold_fund_batch.
         * @example 40
         */
        threshold: number;
        /**
         * Industry codes Accepted by Investoday for list_industry_hold_fund_batch.
         * @minItems 1
         * @example ["640000","740000"]
         */
        industryCodes: Array<string>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry pros index data from Investoday. */
    "investoday_mcp.list_industry_pros_idx": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_industry_pros_idx.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_industry_pros_idx.
         * @minLength 1
         * @format date
         * @example "2026-08-18"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_industry_pros_idx.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_industry_pros_idx.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Industry code Accepted by Investoday for list_industry_pros_idx.
         * @minLength 1
         * @example "740000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry prosperity index data from Investoday. */
    "investoday_mcp.list_industry_prosperity_index": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_industry_prosperity_index.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_industry_prosperity_index.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_industry_prosperity_index.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_industry_prosperity_index.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Industry code Accepted by Investoday for list_industry_prosperity_index.
         * @minLength 1
         * @example "740000"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry quote data from Investoday. */
    "investoday_mcp.list_industry_quote": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry rotation data from Investoday. */
    "investoday_mcp.list_industry_rotation": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_industry_rotation.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_industry_rotation.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_industry_rotation.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_industry_rotation.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Industry code Accepted by Investoday for list_industry_rotation.
         * @minLength 1
         * @example "002594"
         */
        industryCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List industry valuation indicator data from Investoday. */
    "investoday_mcp.list_industry_val_ind": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro equity valuation data from Investoday. */
    "investoday_mcp.list_macro_equity_val": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_equity_val.
         * @minLength 1
         * @format date
         * @example "2024-01-01"
         */
        beginDate?: string;
        /**
         * Market name Accepted by Investoday for list_macro_equity_val.
         * @example "United States"
         */
        marketName?: "United States" | "Canada" | "United Kingdom" | "France" | "Germany" | "Italy" | "South Korea" | "India" | "Japan" | "China" | "Hong Kong" | "Taiwan" | "Australia" | "Global Equity Markets";
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_equity_val.
         * @minLength 1
         * @format date
         * @example "2026-08-14"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_macro_equity_val.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_equity_val.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro exch rates data from Investoday. */
    "investoday_mcp.list_macro_exch_rates": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_exch_rates.
         * @minLength 1
         * @format date
         * @example "2024-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_exch_rates.
         * @minLength 1
         * @format date
         * @example "2024-12-31"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_macro_exch_rates.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /** Currency code Accepted by Investoday for list_macro_exch_rates. */
        currencyCode?: Array<"AED" | "AUD" | "CAD" | "CHF" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "JPY" | "KRW" | "MOP" | "MXN" | "MYR" | "NOK" | "NZD" | "PLN" | "RUB" | "SEK" | "SGD" | "THB" | "TRY" | "USD" | "ZAR">;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_exch_rates.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro fiscal exp data from Investoday. */
    "investoday_mcp.list_macro_fiscal_exp": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_fiscal_exp.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_fiscal_exp.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_fiscal_exp.
         * @example [110002480,110002481]
         */
        indCodes?: Array<110002480 | 110002481>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_fiscal_exp.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_fiscal_exp.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro fixed asset data from Investoday. */
    "investoday_mcp.list_macro_fixed_asset": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_fixed_asset.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_fixed_asset.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_fixed_asset.
         * @example [110115280,110114485]
         */
        indCodes?: Array<110115280 | 110114485 | 110114484 | 110114483 | 110114481 | 110114479 | 110114672>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_fixed_asset.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_fixed_asset.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro goods trade data from Investoday. */
    "investoday_mcp.list_macro_goods_trade": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_goods_trade.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_goods_trade.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_goods_trade.
         * @example [110081729,110127295]
         */
        indCodes?: Array<110081729 | 110081749 | 110183587 | 110183586 | 110127295 | 110006286 | 110183585 | 110183584 | 110005221 | 110005222 | 110183583 | 110183582 | 210032348 | 210032347>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_goods_trade.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_goods_trade.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro re invest data from Investoday. */
    "investoday_mcp.list_macro_re_invest": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_re_invest.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_re_invest.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_re_invest.
         * @example [110116170,110116171]
         */
        indCodes?: Array<110116170 | 110116171 | 110116448 | 110116449 | 110116444 | 110116445 | 110116442 | 110116443>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_re_invest.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_re_invest.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro retail area data from Investoday. */
    "investoday_mcp.list_macro_retail_area": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_retail_area.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_retail_area.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_retail_area.
         * @example [110232455,110232456]
         */
        indCodes?: Array<110232455 | 110232456 | 110232460 | 110232459 | 110232462 | 110232461 | 110232468 | 110232466>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_retail_area.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_retail_area.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro rmb credit data from Investoday. */
    "investoday_mcp.list_macro_rmb_credit": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_rmb_credit.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_rmb_credit.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_rmb_credit.
         * @example [191000657,191000660]
         */
        indCodes?: Array<191000657 | 701013601 | 191000654 | 701013594 | 701013595 | 191000664 | 701013597 | 701013598 | 701013600 | 191000652 | 701013603 | 701013602 | 191000668 | 191000669 | 191000665 | 110138331 | 110138333 | 191000660 | 110232974 | 110233159 | 701013616 | 110255549 | 110255550 | 701013617 | 110233153 | 110255552 | 110233154 | 110233148 | 110233152 | 110255554 | 701013622 | 701013623 | 701013624 | 110255557 | 110111032 | 110242346 | 191000667 | 191000677 | 191000672 | 110138330>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_rmb_credit.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_rmb_credit.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro soc financial data from Investoday. */
    "investoday_mcp.list_macro_soc_fin": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_soc_fin.
         * @minLength 1
         * @format date
         * @example "2023-01-31"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_soc_fin.
         * @minLength 1
         * @format date
         * @example "2023-09-30"
         */
        endDate?: string;
        /**
         * Industry codes Accepted by Investoday for list_macro_soc_fin.
         * @example [150000075,150000076]
         */
        indCodes?: Array<150000075 | 150000076 | 150000077 | 150000664 | 150000665 | 150000666 | 150000667 | 150008052 | 150000668 | 150008054 | 150008055>;
        /**
         * Number of records per page Accepted by Investoday for list_macro_soc_fin.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_soc_fin.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List macro spot quotes data from Investoday. */
    "investoday_mcp.list_macro_spot_quotes": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_macro_spot_quotes.
         * @minLength 1
         * @format date
         * @example "2026-01-01"
         */
        beginDate?: string;
        /**
         * Spot instrument code Accepted by Investoday for list_macro_spot_quotes.
         * @minLength 1
         * @example "SPOT001"
         */
        spotCode?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_macro_spot_quotes.
         * @minLength 1
         * @format date
         * @example "2026-08-14"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_macro_spot_quotes.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_macro_spot_quotes.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List money market repo in data from Investoday. */
    "investoday_mcp.list_money_market_repo_in": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_money_market_repo_in.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_money_market_repo_in.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_money_market_repo_in.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_money_market_repo_in.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List money supplies data from Investoday. */
    "investoday_mcp.list_money_supplies": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_money_supplies.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_money_supplies.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_money_supplies.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_money_supplies.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List news data from Investoday. */
    "investoday_mcp.list_news": {
      input: {
        /**
         * Sentiment classification Accepted by Investoday for list_news.
         * @example 1
         */
        sentiment?: 1 | 2 | 3 | 4 | 5;
        /**
         * Number of records per page Accepted by Investoday for list_news.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Start time in YYYY-MM-DD HH:mm:ss format Accepted by Investoday for list_news.
         * @minLength 1
         * @example "2020-01-01 08:00:00"
         */
        beginTime?: string;
        /**
         * End time in YYYY-MM-DD HH:mm:ss format Accepted by Investoday for list_news.
         * @minLength 1
         * @example "2025-02-01 08:00:00"
         */
        endTime?: string;
        /**
         * Title keyword Accepted by Investoday for list_news.
         * @minLength 1
         * @example "人工智能"
         */
        title?: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_news.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * News category Accepted by Investoday for list_news.
         * @example 1
         */
        newsType?: 1 | 2 | 3 | 4;
        /**
         * News importance level Accepted by Investoday for list_news.
         * @example 1
         */
        newsLevel?: 1 | 2;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List per share indicators data from Investoday. */
    "investoday_mcp.list_per_share_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List per share indicators quarterly data from Investoday. */
    "investoday_mcp.list_per_share_indicators_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List performance benchmark quote data from Investoday. */
    "investoday_mcp.list_perf_benchmark_quote": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List portfolio fund holdings data from Investoday. */
    "investoday_mcp.list_portfolio_fund_holdings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List report institutions data from Investoday. */
    "investoday_mcp.list_report_institutions": {
      input: {
        /**
         * Research institution name Accepted by Investoday for list_report_institutions.
         * @minLength 1
         * @example "高盛"
         */
        institutionName?: string;
        /**
         * Number of records per page Accepted by Investoday for list_report_institutions.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_report_institutions.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Find research reports by stock, industry, institution or category, with optional keywords and publication dates. */
    "investoday_mcp.list_report_research": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List report stock forecast ratings data from Investoday. */
    "investoday_mcp.list_report_stock_forecast_ratings": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_report_stock_forecast_ratings.
         * @minLength 1
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_report_stock_forecast_ratings.
         * @minLength 1
         * @example "2025-05-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_report_stock_forecast_ratings.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_report_stock_forecast_ratings.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_report_stock_forecast_ratings.
         * @minLength 1
         * @example "000001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List report vector search data from Investoday. */
    "investoday_mcp.list_report_vector-search": {
      input: {
        /**
         * Maximum number of best matches to return Accepted by Investoday for list_report_vector-search.
         * @example 3
         */
        topK?: number;
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_report_vector-search.
         * @minLength 1
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * Research institution code Accepted by Investoday for list_report_vector-search.
         * @minLength 1
         * @example "37"
         */
        institutionCode?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_report_vector-search.
         * @minLength 1
         * @example "2021-01-01"
         */
        endDate?: string;
        /**
         * Natural-language query text Accepted by Investoday for list_report_vector-search.
         * @minLength 1
         * @example "新能源汽车"
         */
        query: string;
        /**
         * Category code Accepted by Investoday for list_report_vector-search.
         * @example "000100"
         */
        categoryCode?: "000100" | "000200" | "000300" | "000400" | "000500" | "000700" | "000800" | "000900" | "001000" | "001100" | "001200" | "001210" | "001300" | "001400" | "001500" | "001600" | "001700" | "001900";
        /**
         * Stock code Accepted by Investoday for list_report_vector-search.
         * @minLength 1
         * @example "002594"
         */
        stockCode?: string;
        /**
         * Industry code Accepted by Investoday for list_report_vector-search.
         * @minLength 1
         * @example "740000"
         */
        industryCode?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List research sentiment data from Investoday. */
    "investoday_mcp.list_research_sentiment": {
      input: {
        /**
         * Sentiment classification Accepted by Investoday for list_research_sentiment.
         * @example 1
         */
        sentiment?: 1 | 2 | 3 | 4 | 5;
        /**
         * Concept code Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "CLS81936"
         */
        conceptCode?: string;
        /**
         * Number of records per page Accepted by Investoday for list_research_sentiment.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Category code Accepted by Investoday for list_research_sentiment.
         * @example "000100"
         */
        categoryCode?: "000100" | "000200" | "000300" | "000400" | "000500" | "000700" | "000800" | "000900" | "001000" | "001100" | "001200" | "001210" | "001300" | "001400" | "001500" | "001600" | "001700" | "001900";
        /**
         * Title keyword Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "宏观"
         */
        title?: string;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_research_sentiment.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "000001"
         */
        stockCode?: string;
        /**
         * Industry code Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "370000"
         */
        industryCode?: string;
        /**
         * Minimum relevance score Accepted by Investoday for list_research_sentiment.
         * @minimum 1
         * @maximum 6
         * @example 1
         */
        minRelevance?: number;
        /**
         * Research institution code Accepted by Investoday for list_research_sentiment.
         * @example 142
         */
        institutionCode?: number;
        /**
         * Globally unique record identifier Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "0236EC2B-2416-455E-BF82-E4ED96E91DB0"
         */
        guid?: string;
        /**
         * Start time in YYYY-MM-DD HH:mm:ss format Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "2020-01-01 08:00:00"
         */
        beginTime?: string;
        /**
         * End time in YYYY-MM-DD HH:mm:ss format Accepted by Investoday for list_research_sentiment.
         * @minLength 1
         * @example "2025-01-02 08:00:00"
         */
        endTime?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List social financing sto data from Investoday. */
    "investoday_mcp.list_social_financing_sto": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_social_financing_sto.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_social_financing_sto.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_social_financing_sto.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_social_financing_sto.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List soctk strength trend indicators data from Investoday. */
    "investoday_mcp.list_soctk_strength_trend_indicators": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_soctk_strength_trend_indicators.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_soctk_strength_trend_indicators.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_soctk_strength_trend_indicators.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_soctk_strength_trend_indicators.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_soctk_strength_trend_indicators.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock balan sheet pit data from Investoday. */
    "investoday_mcp.list_stk_balan_sheet_pit": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock balance sht ttm data from Investoday. */
    "investoday_mcp.list_stk_balance_sht_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock consultations data from Investoday. */
    "investoday_mcp.list_stk_consultations": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stk_consultations.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stk_consultations.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_stk_consultations.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stk_consultations.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_stk_consultations.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock dragon tiger broke details data from Investoday. */
    "investoday_mcp.list_stk_dragon_tiger_broke_details": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock dupont analysis data from Investoday. */
    "investoday_mcp.list_stk_dupont_analysis": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock financial indicator sw rnk quarterly data from Investoday. */
    "investoday_mcp.list_stk_fin_ind_sw_rnk_q": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minLength 1
         * @format date
         * @example "2025-03-30"
         */
        endDate?: string;
        /**
         * Stock codes Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minItems 1
         * @example ["000001","600519"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minLength 1
         * @example "002594"
         */
        stockCode?: string;
        /**
         * Industry code Accepted by Investoday for list_stk_fin_ind_sw_rnk_q.
         * @minLength 1
         * @example "640000"
         */
        industryCode?: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock income state pit data from Investoday. */
    "investoday_mcp.list_stk_income_state_pit": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock tech signals data from Investoday. */
    "investoday_mcp.list_stk_tech_signals": {
      input: {
        /**
         * Query date in YYYY-MM-DD format Accepted by Investoday for list_stk_tech_signals.
         * @minLength 1
         * @example "2026-07-13"
         */
        date: string;
        /**
         * Technical signal matching mode Accepted by Investoday for list_stk_tech_signals.
         * @minimum 1
         * @maximum 2
         * @example 1
         */
        signalMatchMode?: 1 | 2;
        /**
         * Stock codes Accepted by Investoday for list_stk_tech_signals.
         * @example ["000001","600519"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for list_stk_tech_signals.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stk_tech_signals.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Technical signal codes Accepted by Investoday for list_stk_tech_signals.
         * @minItems 1
         * @example [606,801,807,1018]
         */
        signalCodes: Array<101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 201 | 202 | 203 | 204 | 205 | 206 | 301 | 302 | 303 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 601 | 602 | 603 | 604 | 605 | 606 | 607 | 701 | 702 | 703 | 704 | 705 | 706 | 801 | 802 | 803 | 804 | 805 | 806 | 807 | 808 | 901 | 902 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008 | 1009 | 1010 | 1011 | 1012 | 1013 | 1014 | 1015 | 1016 | 1017 | 1018 | 1019 | 1020 | 1021 | 1022 | 1023 | 1024 | 1025 | 1026 | 1027 | 1028 | 1029 | 1030>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock trend structure data from Investoday. */
    "investoday_mcp.list_stk_trend_structure": {
      input: {
        /**
         * Query date in YYYY-MM-DD format Accepted by Investoday for list_stk_trend_structure.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        date: string;
        /**
         * Analysis cycle type Accepted by Investoday for list_stk_trend_structure.
         * @example 1
         */
        cycleType: 1 | 2 | 3;
        /**
         * Minimum trend score Accepted by Investoday for list_stk_trend_structure.
         * @minLength 1
         * @example "60"
         */
        minTrendScore?: string;
        /**
         * Number of records per page Accepted by Investoday for list_stk_trend_structure.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stk_trend_structure.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Result matching mode Accepted by Investoday for list_stk_trend_structure.
         * @example "2"
         */
        matchMode?: "1" | "2";
        /**
         * Technical signal codes Accepted by Investoday for list_stk_trend_structure.
         * @minItems 1
         * @example [1,2,3]
         */
        signalCodes: Array<1 | 2 | 3 | 4 | 5 | 6>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock unwind signal de data from Investoday. */
    "investoday_mcp.list_stk_unwind_signal_de": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock absorption mergers data from Investoday. */
    "investoday_mcp.list_stock_absorption_mergers": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Get forward-adjusted daily stock prices over a date range, including batch queries and pagination. */
    "investoday_mcp.list_stock_adjusted_quotes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock all data from Investoday. */
    "investoday_mcp.list_stock_all": {
      input: {
        /**
         * Number of records per page Accepted by Investoday for list_stock_all.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_all.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock arbitration cases data from Investoday. */
    "investoday_mcp.list_stock_arbitration_cases": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock audit opinion data from Investoday. */
    "investoday_mcp.list_stock_audit_opinion": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock balance sheet data from Investoday. */
    "investoday_mcp.list_stock_balance_sheet": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock balance sheet quarterly data from Investoday. */
    "investoday_mcp.list_stock_balance_sheet_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock block trades data from Investoday. */
    "investoday_mcp.list_stock_block_trades": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock capital changes data from Investoday. */
    "investoday_mcp.list_stock_capital_changes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock cash flows data from Investoday. */
    "investoday_mcp.list_stock_cash_flows": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock cash flows pit data from Investoday. */
    "investoday_mcp.list_stock_cash_flows_pit": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock cash flows quarterly data from Investoday. */
    "investoday_mcp.list_stock_cash_flows_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock cash flows ttm data from Investoday. */
    "investoday_mcp.list_stock_cash_flows_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock concept classifications data from Investoday. */
    "investoday_mcp.list_stock_concept_classifications": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stock_concept_classifications.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stock_concept_classifications.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_stock_concept_classifications.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_concept_classifications.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_stock_concept_classifications.
         * @minLength 1
         * @example "000001"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock core mgmt changes data from Investoday. */
    "investoday_mcp.list_stock_core_mgmt_changes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock daily fund flows data from Investoday. */
    "investoday_mcp.list_stock_daily_fund_flows": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock dcf result data from Investoday. */
    "investoday_mcp.list_stock_dcf_result": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock dragon tiger details data from Investoday. */
    "investoday_mcp.list_stock_dragon_tiger_details": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock earnings bulletins data from Investoday. */
    "investoday_mcp.list_stock_earnings_bulletins": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock esg rating data from Investoday. */
    "investoday_mcp.list_stock_esg_rating": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock executive shareholding change data from Investoday. */
    "investoday_mcp.list_stock_executive_shareholding_change": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock financial derivative indicators data from Investoday. */
    "investoday_mcp.list_stock_fin_derivative_inds": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock financial derivative indicators quarterly data from Investoday. */
    "investoday_mcp.list_stock_fin_derivative_inds_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock financial derivative indicators ttm data from Investoday. */
    "investoday_mcp.list_stock_fin_derivative_inds_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock financial indicator grow quarterly data from Investoday. */
    "investoday_mcp.list_stock_fin_ind_grow_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock financial indicator growth data from Investoday. */
    "investoday_mcp.list_stock_fin_ind_growth": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock freeze details data from Investoday. */
    "investoday_mcp.list_stock_freeze_details": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock fund flow s data from Investoday. */
    "investoday_mcp.list_stock_fund_flow_s": {
      input: {
        /**
         * Query date in YYYY-MM-DD format Accepted by Investoday for list_stock_fund_flow_s.
         * @minLength 1
         * @format date
         * @example "2026-07-10"
         */
        date: string;
        /**
         * Minimum amount filter Accepted by Investoday for list_stock_fund_flow_s.
         * @minimum 0
         * @example 1000
         */
        minAmount?: number;
        /**
         * Number of records per page Accepted by Investoday for list_stock_fund_flow_s.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Maximum amount filter Accepted by Investoday for list_stock_fund_flow_s.
         * @minimum 0
         * @example 20000
         */
        maxAmount?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_fund_flow_s.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Result matching mode Accepted by Investoday for list_stock_fund_flow_s.
         * @minimum 1
         * @maximum 2
         * @example 1
         */
        matchMode?: 1 | 2;
        /**
         * Technical signal codes Accepted by Investoday for list_stock_fund_flow_s.
         * @minItems 1
         * @example [101,203,401]
         */
        signalCodes: Array<101 | 102 | 201 | 202 | 203 | 204 | 205 | 206 | 301 | 302 | 303 | 304 | 401 | 402 | 403 | 404>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock growth op revs data from Investoday. */
    "investoday_mcp.list_stock_growth_op_revs": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock holder cnt data from Investoday. */
    "investoday_mcp.list_stock_holder_cnt": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock income statement quarterly data from Investoday. */
    "investoday_mcp.list_stock_income_statement_q": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock income statement ttm data from Investoday. */
    "investoday_mcp.list_stock_income_statement_ttm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock income statements data from Investoday. */
    "investoday_mcp.list_stock_income_statements": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock inst research data from Investoday. */
    "investoday_mcp.list_stock_inst_research": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock institutional holdings stats data from Investoday. */
    "investoday_mcp.list_stock_institutional_holdings_stats": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock limit up down data from Investoday. */
    "investoday_mcp.list_stock_limit_up_down": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock major contracts data from Investoday. */
    "investoday_mcp.list_stock_major_contracts": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock major sup cust data from Investoday. */
    "investoday_mcp.list_stock_major_sup_cust": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock management dirs data from Investoday. */
    "investoday_mcp.list_stock_management_dirs": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock margin trade data from Investoday. */
    "investoday_mcp.list_stock_margin_trade": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock margin trade totals data from Investoday. */
    "investoday_mcp.list_stock_margin_trade_totals": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stock_margin_trade_totals.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stock_margin_trade_totals.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_stock_margin_trade_totals.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_margin_trade_totals.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock market indicator data mining data from Investoday. */
    "investoday_mcp.list_stock_market_ind_dm": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock offerings data from Investoday. */
    "investoday_mcp.list_stock_offerings": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock op reviews data from Investoday. */
    "investoday_mcp.list_stock_op_reviews": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stock_op_reviews.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stock_op_reviews.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Number of records per page Accepted by Investoday for list_stock_op_reviews.
         * @minimum 1
         * @maximum 5
         * @example 5
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_op_reviews.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Stock code Accepted by Investoday for list_stock_op_reviews.
         * @minLength 1
         * @example "002594"
         */
        stockCode: string;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock oscillator indicators data from Investoday. */
    "investoday_mcp.list_stock_oscillator_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock performance metrics data from Investoday. */
    "investoday_mcp.list_stock_performance_metrics": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock pledge details data from Investoday. */
    "investoday_mcp.list_stock_pledge_details": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock price pattern data from Investoday. */
    "investoday_mcp.list_stock_price_pattern": {
      input: {
        /**
         * Query date in YYYY-MM-DD format Accepted by Investoday for list_stock_price_pattern.
         * @minLength 1
         * @format date
         * @example "2026-07-10"
         */
        date: string;
        /**
         * Analysis cycle type Accepted by Investoday for list_stock_price_pattern.
         * @example 2
         */
        cycleType: 1 | 2 | 3;
        /**
         * Status codes Accepted by Investoday for list_stock_price_pattern.
         * @minItems 1
         * @example [1,2]
         */
        statusCodes: Array<1 | 2 | 3>;
        /**
         * Price-pattern codes Accepted by Investoday for list_stock_price_pattern.
         * @minItems 1
         * @example [1,5,7]
         */
        patternCodes: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>;
        /**
         * Number of records per page Accepted by Investoday for list_stock_price_pattern.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_price_pattern.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock price volume indicators data from Investoday. */
    "investoday_mcp.list_stock_price_volume_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock related transactions data from Investoday. */
    "investoday_mcp.list_stock_related_transactions": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock report schema data from Investoday. */
    "investoday_mcp.list_stock_report_schema": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock repurchase plans data from Investoday. */
    "investoday_mcp.list_stock_repurchase_plans": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock share adjusted factors data from Investoday. */
    "investoday_mcp.list_stock_share_adj_factors": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock special notices data from Investoday. */
    "investoday_mcp.list_stock_special_notices": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock strength trend indicators data from Investoday. */
    "investoday_mcp.list_stock_strength_trend_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock tender offers data from Investoday. */
    "investoday_mcp.list_stock_tender_offers": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock top10 circulating shareh data from Investoday. */
    "investoday_mcp.list_stock_top10_circulating_shareh": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock turnover rates data from Investoday. */
    "investoday_mcp.list_stock_turnover_rates": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock unadjusted quotes data from Investoday. */
    "investoday_mcp.list_stock_unadjusted_quotes": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock up down list data from Investoday. */
    "investoday_mcp.list_stock_up_down_list": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stock_up_down_list.
         * @minLength 1
         * @format date
         * @example "2020-01-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stock_up_down_list.
         * @minLength 1
         * @format date
         * @example "2025-01-01"
         */
        endDate?: string;
        /**
         * Limit-up or limit-down filter Accepted by Investoday for list_stock_up_down_list.
         * @example 1
         */
        limitFlag: 1 | -1 | 0;
        /**
         * Number of records per page Accepted by Investoday for list_stock_up_down_list.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_up_down_list.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock valuation factors data from Investoday. */
    "investoday_mcp.list_stock_val_factors": {
      input: {
        /**
         * Start date in YYYY-MM-DD format Accepted by Investoday for list_stock_val_factors.
         * @minLength 1
         * @format date
         * @example "2026-07-01"
         */
        beginDate?: string;
        /**
         * End date in YYYY-MM-DD format Accepted by Investoday for list_stock_val_factors.
         * @minLength 1
         * @format date
         * @example "2026-07-31"
         */
        endDate?: string;
        /**
         * Stock codes Accepted by Investoday for list_stock_val_factors.
         * @example ["000001","600519"]
         */
        stockCodes?: Array<string>;
        /**
         * Number of records per page Accepted by Investoday for list_stock_val_factors.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_val_factors.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock violation penalt data from Investoday. */
    "investoday_mcp.list_stock_violation_penalt": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock vol indicators data from Investoday. */
    "investoday_mcp.list_stock_vol_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stock volume price data from Investoday. */
    "investoday_mcp.list_stock_volume_price": {
      input: {
        /**
         * Query date in YYYY-MM-DD format Accepted by Investoday for list_stock_volume_price.
         * @minLength 1
         * @format date
         * @example "2026-07-10"
         */
        date: string;
        /**
         * Analysis cycle type Accepted by Investoday for list_stock_volume_price.
         * @minimum 1
         * @maximum 3
         * @example 2
         */
        cycleType: 1 | 2 | 3;
        /**
         * Price feedback values Accepted by Investoday for list_stock_volume_price.
         * @example ["positive","strong_positive"]
         */
        priceFeedbacks?: Array<"strong_positive" | "positive" | "flat" | "negative" | "strong_negative">;
        /**
         * Number of records per page Accepted by Investoday for list_stock_volume_price.
         * @minimum 1
         * @maximum 500
         * @example 10
         */
        pageSize?: number;
        /**
         * Minimum volume-price score Accepted by Investoday for list_stock_volume_price.
         * @minimum 0
         * @maximum 100
         * @example 60
         */
        minVolumePriceScore?: number;
        /**
         * Page number, starting at 1 Accepted by Investoday for list_stock_volume_price.
         * @minimum 1
         * @example 1
         */
        pageNum?: number;
        /**
         * Result matching mode Accepted by Investoday for list_stock_volume_price.
         * @minimum 1
         * @maximum 2
         * @example 1
         */
        matchMode?: 1 | 2;
        /**
         * Technical signal codes Accepted by Investoday for list_stock_volume_price.
         * @example [1,2,5]
         */
        signalCodes?: Array<1 | 2 | 3 | 4 | 5>;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stocks dividends data from Investoday. */
    "investoday_mcp.list_stocks_dividends": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stocks public offering place data from Investoday. */
    "investoday_mcp.list_stocks_public_offering_place": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List stocks rights issue res data from Investoday. */
    "investoday_mcp.list_stocks_rights_issue_res": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** List subscription redemption status data from Investoday. */
    "investoday_mcp.list_subscription_redemption_status": {
      input: Record<string, unknown>;
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Discover the current Investoday financial market data and research MCP tools with their live input schemas. */
    "investoday_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Investoday MCP account. */
        tools: Array<{
          /**
           * The exact Investoday MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Investoday MCP. */
          description?: string;
          /** MCP hints supplied by Investoday about a tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Investoday. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Investoday MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Search securities, funds, indices, industries and concepts by name or code. */
    "investoday_mcp.search": {
      input: {
        /** Search keyword, such as a company name or security code. */
        key?: string;
        /**
         * Comma-separated search types: 11 A-shares, 12 indices, 13 ETF benchmarks, 21 funds, 22 ETFs, 23 LOFs, 27 fund managers, 28 fund companies, 29 fund themes, 31 Hong Kong stocks, 71/72 Shenwan level 1/2 industries, 81/82 Juyuan/Cailian concepts.
         * @minLength 1
         */
        type: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * Records per page, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
    /** Search announcement passages by meaning, optionally filtering by stock, announcement ID and publication dates. */
    "investoday_mcp.search_announcements": {
      input: {
        /**
         * Natural-language text describing the announcement information to find.
         * @minLength 1
         */
        query: string;
        /** Optional stock code. */
        stockCode?: string;
        /** Optional announcement ID. */
        announcementId?: number;
        /** Publication start date or timestamp, as accepted by Investoday. */
        beginDate?: string;
        /** Publication end date or timestamp, as accepted by Investoday. */
        endDate?: string;
        /** Number of matching passages to return. */
        topK?: number;
      };
      output: {
        /** Structured code/data financial data or the original MCP content envelope, including unknown upstream fields and pagination metadata. */
        result: unknown;
      };
    };
  }
}
