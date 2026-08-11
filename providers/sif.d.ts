import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Sif MCP Amazon analysis tool with JSON arguments after discovering its live input schema. */
    "sif.call_tool": {
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
    /** Discover the current Sif Amazon analysis tools and their live input schemas before choosing a tool to call. */
    "sif.list_tools": {
      input: Record<string, never>;
      output: {
        /** Business tools currently exposed to the connected Sif account. */
        tools: Array<{
          /**
           * The exact Sif MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current JSON Schema for the tool arguments, supplied by Sif MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Analyze and filter a keyword's Top-100 competitor pool by price, review threshold, sales, and competitive posture. Costs 3 Sif points. */
    "sif.market_discover_competitors": {
      input: {
        /**
         * A keyword to analyze.
         * @minLength 1
         */
        keyword: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /**
         * The caller's ASIN. Sif excludes it and narrows results to its competing price range.
         * @minLength 1
         */
        my_asin?: string;
        /**
         * The maximum number of competitors to return, from 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        max_results?: number;
        /** The minimum competitor price used to narrow the result. */
        price_min?: number;
        /** The maximum competitor price used to narrow the result. */
        price_max?: number;
        /**
         * The maximum competitor review count used to narrow the result.
         * @minimum 0
         */
        max_reviews?: number;
        /** The competitive posture label used to narrow the result. */
        posture_filter?: "自然权威型" | "广告依赖型" | "品牌型" | "曝光高销量低型" | "混合型";
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Reverse-map an ASIN to search terms where it occupies an ABA Top-3 position. Costs 2 Sif points. */
    "sif.market_get_asin_aba_footprint": {
      input: {
        /**
         * An Amazon Standard Identification Number (ASIN).
         * @minLength 1
         */
        asin: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /**
         * The maximum number of keyword records to retrieve, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        topN?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Analyze an ASIN's keyword traffic contribution, organic and paid dependence, rank stability, and health signals. Costs 3 Sif points. */
    "sif.market_get_asin_keyword_signals": {
      input: {
        /**
         * An Amazon Standard Identification Number (ASIN).
         * @minLength 1
         */
        asin: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /** Whether to use Sif's listing-search scope. */
        listingSearch?: boolean;
        /** The analysis time type. */
        time_type?: "lately" | "week" | "month";
        /**
         * The recent-day count, Sunday week date, or first-of-month date matching time_type.
         * @minLength 1
         */
        time_value?: string;
        /**
         * The maximum number of keywords to return, from 1 to 300.
         * @minimum 1
         * @maximum 300
         */
        topN?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Get product-positioning profiles such as price, rating, reviews, BSR, brand, listing age, variants, and dimensions for up to 20 ASINs. Costs 2 Sif points per input ASIN. */
    "sif.market_get_asin_profile": {
      input: {
        /**
         * One to twenty ASINs, including parent ASINs.
         * @minItems 1
         * @maxItems 20
         */
        asins: Array<string>;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Analyze a keyword's traffic-share leaders, ABA Top-3 concentration, market accessibility, and optional ASIN competitive position. Costs 2 Sif points. */
    "sif.market_get_keyword_competition": {
      input: {
        /**
         * A keyword to analyze.
         * @minLength 1
         */
        keyword: string;
        /**
         * An Amazon Standard Identification Number (ASIN).
         * @minLength 1
         */
        asin?: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /** The analysis time type. */
        time_type?: "all" | "week" | "month";
        /**
         * The Sunday date for week analysis or first-of-month date for month analysis.
         * @minLength 1
         */
        time_value?: string;
        /** Whether to include rank-evolution data. */
        rank_evolution?: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Diagnose demand lifecycle and seasonal timing for up to 20 keywords. Costs 2 Sif points. */
    "sif.market_get_keyword_demand": {
      input: {
        /**
         * One to twenty keywords to analyze.
         * @minItems 1
         * @maxItems 20
         */
        keywords: Array<string>;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Get raw historical ABA search volume, rank, and Top-3 click and conversion concentration for up to 10 keywords. Costs 1 Sif point. */
    "sif.market_get_keyword_history": {
      input: {
        /**
         * One to ten keywords to compare.
         * @minItems 1
         * @maxItems 10
         */
        keywords: Array<string>;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /** The time granularity. Sif defaults to week when omitted. */
        granularity?: "week" | "month";
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Discover the leading ASIN competitors across a keyword root using ABA buyer click behavior. Costs 2 Sif points. */
    "sif.market_get_keyword_root_competitors": {
      input: {
        /**
         * A keyword root. Sif also analyzes modifier variants that start with this value.
         * @minLength 1
         */
        keyword_root: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /**
         * The maximum number of competitors to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        topN?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Compare exact-keyword demand with aggregate keyword-root demand to assess market size and demand concentration. Costs 3 Sif points. */
    "sif.market_get_keyword_root_trend": {
      input: {
        /**
         * A keyword to analyze.
         * @minLength 1
         */
        keyword: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /** The time granularity. Sif defaults to week when omitted. */
        granularity?: "week" | "month";
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Rank keyword-root variants by demand and click-concentration opportunity signals. Costs 3 Sif points. */
    "sif.market_screen_keyword_opportunities": {
      input: {
        /**
         * A keyword root. Sif also analyzes modifier variants that start with this value.
         * @minLength 1
         */
        keyword_root: string;
        /**
         * The Amazon marketplace code, such as US, UK, DE, or JP. Sif defaults to US when omitted.
         * @minLength 1
         */
        country?: string;
        /**
         * The maximum number of opportunity keywords to return, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        topN?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
  }
}
