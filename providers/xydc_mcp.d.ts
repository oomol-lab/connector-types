import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current XYDC MCP tool with JSON arguments matching its live schema. Calls may consume Credits. Each successful generate_category_insight_resource call costs 500 Credits, including existing resources; reuse the returned resource and do not blindly retry generation. Connector waits at most 55 seconds for generation. A timeout does not confirm upstream cancellation or prevent charges; the result may be unknown. Do not automatically retry generation after a timeout. */
    "xydc_mcp.call_tool": {
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
    /** Generate a category insight resource for a user-confirmed marketplace and category. XYDC waits up to five minutes and rebuilds failed resources internally. Each independent successful call costs 500 Credits, including existing-resource hits. Reuse resourceId for subsequent queries; do not blindly retry. Connector waits at most 55 seconds for generation. A timeout does not confirm upstream cancellation or prevent charges; the result may be unknown. Do not automatically retry generation after a timeout. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.generate_category_insight_resource": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get daily newly observed advertising campaigns for one ASIN. This does not establish whether existing campaigns stopped, decreased, were deleted or remain active. Use traffic trends for traffic changes. */
    "xydc_mcp.get_asin_ad_change_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily BSR category-ranking trends for one ASIN. Supports US, CA, MX, BR, UK, DE, FR, ES, IT and JP; this is not keyword ranking. */
    "xydc_mcp.get_asin_bsr_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get product titles, prices, currencies, star ratings, rating counts, images and Amazon links for up to 100 ASINs sharing one marketplace. */
    "xydc_mcp.get_asin_info": {
      input: {
        /**
         * Up to 100 ASINs sharing the same country. Split larger requests into batches.
         * @maxItems 100
         */
        asins: Array<string>;
        /** Marketplace country code, such as US, UK or DE. */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily changes to one ASIN title and main image, including current and previous values. Use get_asin_info_trends for prices, ratings and promotions. */
    "xydc_mcp.get_asin_info_change_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily rating counts, stars, displayed/list/deal/Prime prices, coupons, promotions and subscription offers for one ASIN. Longer date ranges cost more. */
    "xydc_mcp.get_asin_info_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily keyword counts and distributions for ASINs sharing one marketplace. Covers organic/advertising, ranking bands, head/long-tail and acquisition-rate groups. Keyword-count growth does not prove traffic growth. */
    "xydc_mcp.get_asin_keyword_count_trends": {
      input: {
        /** ASINs sharing a single marketplace; per-ASIN countries are not supported. */
        asins: Array<string>;
        /** Marketplace country code shared by all ASINs. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get hourly rankings of one ASIN for one keyword on one day. Supports US, UK and DE; use daily trends for multiple days. */
    "xydc_mcp.get_asin_keyword_rank_hourly": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: "US" | "UK" | "DE";
        /** Date in YYYY-MM-DD format. */
        date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Keyword. */
        keyword: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily rankings of one ASIN for one keyword over a date range. */
    "xydc_mcp.get_asin_keyword_rank_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Keyword. */
        keyword: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily organic, advertising and placement-level traffic for one ASIN and keyword. */
    "xydc_mcp.get_asin_keyword_traffic_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Keyword. */
        keyword: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Reverse-search keywords bringing rankings and traffic to one ASIN in the latest seven-day snapshot. Use daily or monthly tools for historical dates. */
    "xydc_mcp.get_asin_keywords": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get historical daily reverse-search keywords, rankings and traffic for one ASIN over a date range. */
    "xydc_mcp.get_asin_keywords_daily": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get historical monthly reverse-search keywords, rankings and traffic for one ASIN over a month range. */
    "xydc_mcp.get_asin_keywords_monthly": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get monthly order counts for one ASIN over an explicit month range. Use get_asin_orders_last_30_days for recent orders. */
    "xydc_mcp.get_asin_order_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End month in YYYY-MM format. */
        end_month: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start month in YYYY-MM format. */
        start_month: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get recent order counts for one or more ASINs, measured over the last 30 days. */
    "xydc_mcp.get_asin_orders_last_30_days": {
      input: {
        /**
         * Up to 100 ASINs sharing the same country. Split larger requests into batches.
         * @maxItems 100
         */
        asins: Array<string>;
        /** Marketplace country code, such as US, UK or DE. */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the latest seven-day organic, advertising and total traffic scores and period-over-period changes for one or more ASINs. */
    "xydc_mcp.get_asin_traffic": {
      input: {
        /** ASIN list. */
        asins: Array<string>;
        /** Marketplace country code, such as US, UK or DE. */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily organic, advertising and placement-level traffic-score trends for one ASIN. */
    "xydc_mcp.get_asin_traffic_trends": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End date in YYYY-MM-DD format. */
        end_date: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start date in YYYY-MM-DD format. */
        start_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get monthly organic, advertising and placement-level traffic-score trends for one ASIN. */
    "xydc_mcp.get_asin_traffic_trends_monthly": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** End month in YYYY-MM format. */
        end_month: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Start month in YYYY-MM format. */
        start_month: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get weekly organic, advertising and placement-level traffic-score trends for one ASIN. Weeks run Monday through Sunday. */
    "xydc_mcp.get_asin_traffic_trends_weekly": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code, such as US, UK or DE. */
        country: string;
        /** Any date in the final week, in YYYY-MM-DD format; expanded to Sunday. Weeks run Monday through Sunday. */
        end_week: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Any date in the first week, in YYYY-MM-DD format; expanded to Monday. Weeks run Monday through Sunday. */
        start_week: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the parent ASIN, child ASINs and variation attributes for one ASIN. */
    "xydc_mcp.get_asin_variations": {
      input: {
        /** ASIN. */
        asin: string;
        /** Marketplace country code. */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get category brand market-size lists and complete trends, with monthly or last-30-day periods, price bands, rankings, sorting and pagination. Costs 5 Credits per 5 returned brands. newRelease sorts by descending sales and does not filter new brands; rankingType overrides orders. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_brand_market_size": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Monthly or last 30 days only. Monthly requires startDate, defaults cycle to monthly and allows an endDate in the same month. Alternatively use period=last30days without dates and cycle omitted or daily. Dates use the marketplace time zone. */
        cycleFilter: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly" | "daily";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /** Rolling reporting period, used instead of explicit dates. */
          period?: "last30days";
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** At most one order when rankingType is absent. Ignored when rankingType is provided. */
        orders?: Array<{
          /** Sort direction. */
          direction: "asc" | "desc";
          /** Field to sort by. */
          field: "sales" | "salesRevenue" | "salesRatio" | "price" | "stars";
        }>;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
        /**
         * Price band to query.
         * @default "allPrice"
         */
        priceType?: "allPrice" | "lowPrice" | "midPrice" | "highPrice";
        /** For this brand endpoint, newRelease means descending sales, not a new-brand filter. Providing rankingType overrides orders. */
        rankingType?: "sales" | "salesRevenue" | "surge" | "newRelease";
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get complete historical monthly sales trends and existing last-30-day summaries for specified brands; month-range filtering is unsupported. Cost: ceil((maximum historical months + 1) / 6) times requested brand count times 2 Credits. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_brand_sales_trends": {
      input: {
        /**
         * Brand names to include.
         * @minItems 1
         */
        brands: Array<string>;
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Price band to query.
         * @default "allPrice"
         */
        priceType?: "allPrice" | "lowPrice" | "midPrice" | "highPrice";
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category keyword summary, distribution and complete trends for one calendar month and an explicit correlationType. Omit the month for the latest available keyword month. Costs 5 Credits including trends; yearly, daily and rolling periods are unsupported. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_keyword_analysis": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /** Keyword relevance level. */
        correlationType: "high" | "medium" | "low";
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** One calendar month only. Omit cycleFilter or startDate for the latest available keyword month in this marketplace; an explicit month cannot be later. cycle defaults to monthly. endDate requires an explicit startDate in the same month and does not restrict individual days. Rolling periods are unsupported. Included trends cover the full history. Dates use the marketplace time zone. */
        cycleFilter?: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category keywords for one calendar month, with correlation, brand, range, text and pagination filters. Omit the month for the latest available keyword month. Includes full historical trends unless includeTrend=false. Costs 1 Credit per 20 keywords. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_keywords": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** One calendar month only. Omit cycleFilter or startDate for the latest available keyword month in this marketplace; an explicit month cannot be later. cycle defaults to monthly. endDate requires an explicit startDate in the same month and does not restrict individual days. Rolling periods are unsupported. Included trends cover the full history. Dates use the marketplace time zone. */
        cycleFilter?: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Categorical list filters. */
        filters?: {
          /** Brand names to include. */
          brands?: Array<string>;
          /** Keyword relevance levels to include. */
          correlationTypes?: Array<"high" | "medium" | "low">;
        };
        /**
         * Whether to include complete historical trends.
         * @default true
         */
        includeTrend?: boolean;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
        /** Optional list search term. Omit to disable text filtering. */
        query?: string;
        /** Ranges on the same field are ORed; different fields are ANDed. Each range needs at least one bound and min must not exceed max. Put both bounds of a continuous range in the same item. Omitted bounds are unbounded. Inclusion rules are described on each field. All keyword bounds must be nonnegative. */
        rangeFilters?: {
          /** Half-open interval [min,max): includes min, excludes max. */
          adjustedClickConversionRate?: Array<{
            /** A nonnegative finite decimal string, such as 0 or 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A nonnegative finite decimal string, such as 0 or 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          cpc?: Array<{
            /** A nonnegative finite decimal string, such as 0 or 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A nonnegative finite decimal string, such as 0 or 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          organicRotationRate?: Array<{
            /** A nonnegative finite decimal string, such as 0 or 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A nonnegative finite decimal string, such as 0 or 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Closed interval [min,max]: includes both bounds. */
          searchFrequencyRank?: Array<{
            /**
             * Upper range bound.
             * @minimum 0
             */
            max?: number;
            /**
             * Lower range bound.
             * @minimum 0
             */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          searchTermCompetitiveDifficulty?: Array<{
            /**
             * Upper range bound.
             * @minimum 0
             */
            max?: number;
            /**
             * Lower range bound.
             * @minimum 0
             */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          searchVolume?: Array<{
            /**
             * Upper range bound.
             * @minimum 0
             */
            max?: number;
            /**
             * Lower range bound.
             * @minimum 0
             */
            min?: number;
          }>;
        };
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get complete historical monthly category sales trends across all price bands and existing last-30-day summaries. Month-range filtering is unsupported. Costs 5 Credits per 6 historical months; last-30-day summaries add no charge. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_market_size_trends": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category new-release opportunity summary, list, full trends and periods. Costs 5 Credits per 6 trend months; lists and periods add no charge. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_new_release_opportunity_trends": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Monthly requires startDate and allows an endDate in the same month. Alternatively use period=last30days without dates and cycle omitted or daily. */
        cycleFilter: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly" | "daily";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /** Rolling reporting period, used instead of explicit dates. */
          period?: "last30days";
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Price band to query.
         * @default "allPrice"
         */
        priceType?: "allPrice" | "lowPrice" | "midPrice" | "highPrice";
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category new-release rankings for required reportPeriod: YYYY-MM, YYYY, last30days or last12months. Set rangeFilters.streetDays explicitly: there is no default listing-age limit, so unfiltered results are not necessarily new products. Costs 5 Credits per 5 representative ASINs. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_new_release_ranking": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Categorical list filters. */
        filters?: {
          /** Brand names to include. */
          brands?: Array<string>;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** List sorting rules. */
        orders?: Array<{
          /** Sort direction. */
          direction: "asc" | "desc";
          /** Field to sort by. */
          field: "sales" | "revenue" | "price" | "ratings" | "stars" | "salesMom" | "salesYoy" | "trafficScore" | "organicTrafficScoreRatio" | "height" | "length" | "width" | "weight";
        }>;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
        /** Optional list search term. Omit to disable text filtering. */
        query?: string;
        /** Ranges on the same field are ORed; different fields are ANDed. Each range needs at least one bound and min must not exceed max. Put both bounds of a continuous range in the same item. Omitted bounds are unbounded. Inclusion rules are described on each field. Listing age uses streetDays; there is no legacy streetSince default filter. */
        rangeFilters?: {
          /** Half-open interval [min,max): includes min, excludes max. */
          height?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          length?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          organicTrafficScoreRatio?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          price?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          ratings?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          revenue?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          sales?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          salesMom?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          salesYoy?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          stars?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max). New-release rankings have no default listing-age cutoff: omitting this filter retains all active candidates. Specify the streetDays range matching the user goal. */
          streetDays?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          trafficScore?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          weight?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          width?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
        };
        /**
         * Required reporting period: YYYY-MM for a full calendar month, YYYY for a full calendar year, or last30days / last12months. Uses the marketplace time zone. Daily dates, date ranges and cycleFilter are unsupported. Calendar years always span January 1 through December 31, including the current year.
         * @pattern ^((000[1-9]|00[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})(-(0[1-9]|1[0-2]))?|last30days|last12months)$
         */
        reportPeriod: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get low, middle and high price-band analysis and full trends, with period prices, brands, representative ASINs, ratings and subranges. Historical trends do not contain monthly price boundaries. Costs 5 Credits per 6 distinct months across all bands. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_price_segment_trends": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** One calendar month with cycle=monthly and both startDate/endDate, or period=last30days without dates. */
        cycleFilter: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly" | "daily";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /** Rolling reporting period, used instead of explicit dates. */
          period?: "last30days";
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get representative ASINs and complete trends for a category or price band, with rankings, sorting and pagination. last12months only supports all price bands. Costs 5 Credits per 5 representative ASINs; rankingType overrides orders. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_primary_asins": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Monthly/yearly rankings require cycle=monthly/yearly and startDate/endDate within the same calendar month/year. Alternatively use only period=last30days/last12months. Dates use the marketplace time zone. last12months requires priceType omitted or allPrice. Do not combine last30days with cycle=yearly. */
        cycleFilter: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly" | "yearly" | "daily";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /** Rolling reporting period, used instead of explicit dates. */
          period?: "last30days" | "last12months";
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** List sorting rules. */
        orders?: Array<{
          /** Sort direction. */
          direction: "asc" | "desc";
          /** Field to sort by. */
          field: "sales" | "salesRevenue" | "salesRatio" | "price" | "stars" | "streetDate";
        }>;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @maximum 10000
         * @default 20
         */
        pageSize?: number;
        /**
         * For period=last12months, omit priceType or use allPrice; lowPrice, midPrice and highPrice are unsupported.
         * @default "allPrice"
         */
        priceType?: "allPrice" | "lowPrice" | "midPrice" | "highPrice";
        /** Ranking preset, overriding explicit orders where documented. */
        rankingType?: "sales" | "salesRevenue" | "surge" | "newRelease";
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get combined category star-rating and rating-count distributions and complete trends for a calendar month or the last 30 days. Costs 5 Credits per successful call. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_review_analysis": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** One calendar month with both startDate/endDate and cycle defaulting to monthly, or period=last30days without dates. daily is only valid with last30days. */
        cycleFilter: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly" | "daily";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /** Rolling reporting period, used instead of explicit dates. */
          period?: "last30days";
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Price band to query.
         * @default "allPrice"
         */
        priceType?: "allPrice" | "lowPrice" | "midPrice" | "highPrice";
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category sales rankings aggregated by primaryAsin for required reportPeriod: YYYY-MM, YYYY, last30days or last12months, with brand/range filters, sorting and pagination. Costs 5 Credits per 5 returned representative ASINs, rounded up. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_sales_ranking": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Categorical list filters. */
        filters?: {
          /** Brand names to include. */
          brands?: Array<string>;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** List sorting rules. */
        orders?: Array<{
          /** Sort direction. */
          direction: "asc" | "desc";
          /** Field to sort by. */
          field: "sales" | "revenue" | "price" | "ratings" | "stars" | "salesMom" | "salesYoy" | "trafficScore" | "organicTrafficScoreRatio" | "height" | "length" | "width" | "weight";
        }>;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
        /** Optional list search term. Omit to disable text filtering. */
        query?: string;
        /** Ranges on the same field are ORed; different fields are ANDed. Each range needs at least one bound and min must not exceed max. Put both bounds of a continuous range in the same item. Omitted bounds are unbounded. Inclusion rules are described on each field. Listing age uses streetDays; there is no legacy streetSince default filter. */
        rangeFilters?: {
          /** Half-open interval [min,max): includes min, excludes max. */
          height?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          length?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          organicTrafficScoreRatio?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          price?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          ratings?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          revenue?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          sales?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          salesMom?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          salesYoy?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          stars?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          streetDays?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          trafficScore?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          weight?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          width?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
        };
        /**
         * Required reporting period: YYYY-MM for a full calendar month, YYYY for a full calendar year, or last30days / last12months. Uses the marketplace time zone. Daily dates, date ranges and cycleFilter are unsupported. Calendar years always span January 1 through December 31, including the current year.
         * @pattern ^((000[1-9]|00[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})(-(0[1-9]|1[0-2]))?|last30days|last12months)$
         */
        reportPeriod: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category seasonality, peak/off seasons, sales comparisons and forecasts. Both nonseasonal and indeterminate results use isSeasonal=false with empty analysis; request failures are errors. Costs 5 Credits per successful call. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_seasonality": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get category surging-product rankings for required reportPeriod: YYYY-MM, YYYY, last30days or last12months, with growth rules, filtering and sorting. Costs 5 Credits per 5 representative ASINs. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_category_surging_ranking": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Categorical list filters. */
        filters?: {
          /** Brand names to include. */
          brands?: Array<string>;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** List sorting rules. */
        orders?: Array<{
          /** Sort direction. */
          direction: "asc" | "desc";
          /** Field to sort by. */
          field: "sales" | "revenue" | "price" | "ratings" | "stars" | "salesMom" | "salesYoy" | "trafficScore" | "organicTrafficScoreRatio" | "height" | "length" | "width" | "weight";
        }>;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
        /** Optional list search term. Omit to disable text filtering. */
        query?: string;
        /** Ranges on the same field are ORed; different fields are ANDed. Each range needs at least one bound and min must not exceed max. Put both bounds of a continuous range in the same item. Omitted bounds are unbounded. Inclusion rules are described on each field. Listing age uses streetDays; there is no legacy streetSince default filter. */
        rangeFilters?: {
          /** Half-open interval [min,max): includes min, excludes max. */
          height?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          length?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          organicTrafficScoreRatio?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          price?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          ratings?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          revenue?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          sales?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          salesMom?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          salesYoy?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          stars?: Array<{
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            max?: string;
            /** A finite decimal string, such as 12.50. Either min or max may be provided alone. */
            min?: string;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          streetDays?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          trafficScore?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          weight?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
          /** Half-open interval [min,max): includes min, excludes max. */
          width?: Array<{
            /** Upper range bound. */
            max?: number;
            /** Lower range bound. */
            min?: number;
          }>;
        };
        /**
         * Required reporting period: YYYY-MM for a full calendar month, YYYY for a full calendar year, or last30days / last12months. Uses the marketplace time zone. Daily dates, date ranges and cycleFilter are unsupported. Calendar years always span January 1 through December 31, including the current year.
         * @pattern ^((000[1-9]|00[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})(-(0[1-9]|1[0-2]))?|last30days|last12months)$
         */
        reportPeriod: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get weekly ABA search-volume trends for up to 100 keywords and at most 52 calendar weeks. ABA weeks run Sunday through Saturday, unlike ASIN traffic weeks. */
    "xydc_mcp.get_keyword_aba_trends": {
      input: {
        /** Marketplace country code. */
        country: string;
        /** Any date in the final week, in YYYY-MM-DD format; expanded to Saturday. Weeks run Sunday through Saturday. */
        end_week: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Up to 100 keywords sharing the same country. Split larger requests into batches.
         * @maxItems 100
         */
        keywords: Array<string>;
        /** Any date in the first week, in YYYY-MM-DD format; expanded to Sunday. Weeks run Sunday through Saturday. */
        start_week: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Replay hourly advertising placements for one keyword on one day in US, UK or DE, returning up to 24 hours of placement competition. */
    "xydc_mcp.get_keyword_advertising_replay": {
      input: {
        /** Marketplace country code: US, UK or DE only. */
        country: "US" | "UK" | "DE";
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /** Keyword. */
        keyword: string;
        /** Report date in YYYY-MM-DD format. */
        report_date: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get monthly ASIN competition, rankings and traffic for one keyword over a month range. */
    "xydc_mcp.get_keyword_analysis_monthly": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Reverse-search competing ASINs and their rankings and traffic for one keyword in the latest seven-day snapshot. */
    "xydc_mcp.get_keyword_asin_analysis": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the latest weekly search volume, ABA ranking, competition difficulty and suggested bids for up to 100 keywords in one marketplace. */
    "xydc_mcp.get_keyword_info": {
      input: {
        /** Marketplace country code. */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Up to 100 keywords sharing the same country. Split larger requests into batches.
         * @maxItems 100
         */
        keywords: Array<string>;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Compare latest seven-day keyword coverage, rankings and traffic across up to 20 ASINs when the user requests comparison or keyword-library building. Do not silently combine independent ASIN queries. */
    "xydc_mcp.get_multi_asin_keyword_comparison": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Compare historical monthly keyword coverage, rankings and traffic across up to 20 ASINs for comparison or keyword-library building. */
    "xydc_mcp.get_multi_asin_keyword_comparison_monthly": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get latest seven-day keywords across all children of one parent. Supply one child ASIN; XYDC resolves its parent. Use only for an explicitly requested parent-level analysis. */
    "xydc_mcp.get_parent_asin_keywords": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get historical monthly keywords across all children of one parent. Supply one child ASIN; XYDC resolves its parent. Use only for an explicitly requested parent-level analysis. */
    "xydc_mcp.get_parent_asin_keywords_monthly": {
      input: (unknown);
      output: {
        /** XYDC business status, billed Credits and data. */
        result: {
          /** Upstream business status code. */
          status: number;
          /**
           * Credits consumed by this call.
           * @minimum 0
           */
          cost_credits: number;
          /** Tool data or structured upstream error details. */
          data: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get children and complete trends for one representative primaryAsin string, with reporting periods, price bands and pagination. Costs 5 Credits per 20 child ASINs. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.get_primary_asin_children": {
      input: {
        /**
         * The category ID confirmed by the user.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Monthly/yearly rankings require cycle=monthly/yearly and startDate/endDate within the same calendar month/year. Alternatively use only period=last30days/last12months. Dates use the marketplace time zone. */
        cycleFilter: {
          /** Calendar aggregation cycle. */
          cycle?: "monthly" | "yearly" | "daily";
          /**
           * End date in YYYY-MM-DD format.
           * @minLength 1
           */
          endDate?: string;
          /** Rolling reporting period, used instead of explicit dates. */
          period?: "last30days" | "last12months";
          /**
           * Start date in YYYY-MM-DD format.
           * @minLength 1
           */
          startDate?: string;
        };
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * Page number starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of records per page.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
        /**
         * Price band to query.
         * @default "allPrice"
         */
        priceType?: "allPrice" | "lowPrice" | "midPrice" | "highPrice";
        /**
         * One representative ASIN string. Arrays and multiple subjects are unsupported.
         * @minLength 1
         */
        primaryAsin: string;
        /**
         * A usable resource ID returned by resource generation. Reuse it throughout the same task.
         * @minLength 1
         */
        resourceId: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Discover the current XYDC MCP tools, behavior annotations, and live input schemas before choosing a tool to call. */
    "xydc_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected XYDC account. */
        tools: Array<{
          /**
           * The exact XYDC MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by XYDC MCP. */
          description?: string;
          /** MCP hints supplied by XYDC about the tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify XYDC data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive updates. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with external entities. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by XYDC MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Read the official XYDC category insight workflow before a category analysis: marketplace and category confirmation, resource generation, reuse, reporting periods, pagination and Credits. */
    "xydc_mcp.read_category_insight_guide": {
      input: Record<string, never>;
      output: {
        /** Guide content returned by XYDC. */
        contents: Array<{
          /** Resource URI. */
          uri?: string;
          /** Content MIME type. */
          mimeType?: string;
          /** The current official workflow guide. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Submit a missing-capability feedback event to XYDC when requested by the user. This records product feedback, not Amazon data, and should not be used for ordinary input errors. Redact sensitive information before submission. */
    "xydc_mcp.report_missing_xiyou_capability": {
      input: {
        /** Why current tools cannot meet the need or require an impractical tool chain. Do not include the original user prompt. */
        current_blocker: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary: string;
        /** The missing XYDC capability: describe the missing analysis, data or automation steps. */
        missing_capability: string;
        /** Suggested name for a future tool. */
        suggested_tool_name?: string;
        /** Names of MCP tools already tried without meeting the need. */
        tried_tools?: Array<string>;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Capability feedback confirmation returned by XYDC. */
        result: {
          /** Whether the feedback was recorded. */
          ok: boolean;
          /** Feedback event identifier. */
          event_id: string;
          /** Feedback confirmation message. */
          message: string;
          [key: string]: unknown;
        };
      };
    };
    /** Search Amazon categories by keyword or ASIN, returning paths, representative-ASIN counts, availability and existing translations. Free. Present candidates and obtain user confirmation before generating a category resource, even for one candidate. Read xydc_mcp.read_category_insight_guide before the first category insight task. */
    "xydc_mcp.search_market_insight_categories": {
      input: {
        /**
         * The Amazon marketplace explicitly selected by the user, such as US, UK or DE. Do not assume a marketplace.
         * @minLength 1
         */
        country: string;
        /** Optional purpose of this tool call and how it helps the current task. Describe only this step, without repeating the complete task, analysis plan or conclusions. Redact sensitive information before sending. */
        intent_summary?: string;
        /**
         * A keyword or one ASIN; XYDC detects the query type automatically.
         * @minLength 1
         */
        query: string;
        /** Optional original user request for the current task, preserving the wording, subjects, dates and constraints after redacting sensitive information. Keep it consistent within the same task; do not replace it with a subtask, inferred plan or summary. Preserve public ASINs, keywords, marketplaces and dates; redact account details, contacts, credentials and sensitive URL parameters before sending to XYDC. */
        user_task?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
  }
}
