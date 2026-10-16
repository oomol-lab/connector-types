import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read a video's advertising spend, ROAS and engagement over a date range. */
    "fastmoss_mcp.ad_data_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Video ID; use video_search first if only a title/creator is known. */
          video_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search advertisements by category, spend, ROAS and activity dates. */
    "fastmoss_mcp.ad_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Ad type: 1 TikTok Shop commerce ad, 2 non-commerce/planting ad. */
          ad_type?: number;
          /** Level 1 category ID. */
          category_l1_id?: number;
          /** Level 2 category ID. */
          category_l2_id?: number;
          /** Level 3 category ID. */
          category_l3_id?: number;
          /** Estimated advertising spend range. */
          estimated_ad_spend_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Search keywords: product, shop, creator, video, live, or category terms. */
          keywords?: string;
          /** Last observed advertising date range. */
          last_seen_ad_date_range?: {
            /** Start date, YYYY-MM-DD. */
            start_date?: string;
            /** End date, YYYY-MM-DD. */
            end_date?: string;
          };
          /** Observed active-day count range. */
          observed_active_days_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Video play-count range. */
          play_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Return on advertising spend range. */
          roas_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Video creation date range. */
          video_create_date_range?: {
            /** Start date, YYYY-MM-DD. */
            start_date?: string;
            /** End date, YYYY-MM-DD. */
            end_date?: string;
          };
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze creators associated with an MCN agency. */
    "fastmoss_mcp.agency_creator_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Unique MCN agency ID; use agency_search first when only the agency name is known. */
          agency_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze an MCN agency's product performance. */
    "fastmoss_mcp.agency_product_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Unique MCN agency ID; use agency_search first when only the agency name is known. */
          agency_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** List an MCN agency's products by category and price. */
    "fastmoss_mcp.agency_product_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Unique MCN agency ID; use agency_search first when only the agency name is known. */
          agency_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Product category ID. */
          product_category_id?: number;
          /** Minimum product price. */
          minimum_price?: number;
          /** Maximum product price. */
          maximum_price?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read an MCN agency's profile and performance overview. */
    "fastmoss_mcp.agency_profile_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Unique MCN agency ID; use agency_search first when only the agency name is known. */
          agency_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank MCN agencies for a completed week or month. */
    "fastmoss_mcp.agency_rank_top": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type?: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value?: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search MCN agencies by name and region. */
    "fastmoss_mcp.agency_search": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Agency name or search keyword. */
          search_keyword?: string;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze shops associated with an MCN agency. */
    "fastmoss_mcp.agency_shop_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Unique MCN agency ID; use agency_search first when only the agency name is known. */
          agency_id: string;
          /** Product category ID. */
          product_category_id?: number;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Call any current FastMoss MCP tool after inspecting list_tools. Arguments must match the live schema. Calls may consume FastMoss Credits; inspect behavior annotations before invoking newly added tools. */
    "fastmoss_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** Arguments matching the selected tool's live input schema. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a creator's commerce performance summary. */
    "fastmoss_mcp.creator_cargo_summary": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a creator's metric trends over a date range. */
    "fastmoss_mcp.creator_data_trends": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Date period selector. */
          date_type?: number;
          /** Metric: follower_change/play/like/comment/collect_count/share/units_sold/gmv; video_*=video commerce, live_*=live commerce, showcase_*=showcase commerce. */
          field_type: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a creator's audience demographics and distribution. */
    "fastmoss_mcp.creator_fans_distribution": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** List products promoted by a creator and their sales performance. */
    "fastmoss_mcp.creator_product_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: string;
        };
        /** Sort options. Only the first sort rule takes effect. Fields: units_sold, gmv, commission_rate_percent. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a creator's profile and account overview. */
    "fastmoss_mcp.creator_profile_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
          /** Language. Default EN_US, optional ZH_CN. */
          lang?: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank commerce creators for a completed period. */
    "fastmoss_mcp.creator_rank_top_ecommerce": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Creator category ID. */
          creator_category_id?: number;
          /** Product category ID. */
          product_category_id?: number;
          /** Account type filter. */
          account_type?: number;
          /** Commerce type filter. */
          ecommerce_type?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank creators by growth for a completed period. */
    "fastmoss_mcp.creator_rank_top_growth": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Verification type: 1 regular creators, 2 Blue V creators. */
          verify_type?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank promising creators by category and audience for a completed period. */
    "fastmoss_mcp.creator_rank_top_potential": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Category path from level 1 to level 3, e.g. [100, 200, 300]. */
          category_path?: Array<unknown>;
          /** Creator category ID. */
          creator_category_id?: number;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Commerce type filter. */
          ecommerce_type?: number;
          /** Audience age filter accepted by FastMoss. */
          follower_age_type?: Record<string, unknown>;
          /** Follower count range. */
          follower_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Audience gender filter. */
          follower_gender_type?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search creators by identity, category, audience and commerce activity. */
    "fastmoss_mcp.creator_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Creator type: 1 personal, 2 shop. */
          creator_type?: number;
          /** Follower age: 1=18-24, 2=25-34, 3=35+. */
          follower_age_type?: number;
          /** Audience gender filter. */
          follower_gender_type?: number;
          /** Follower count range. */
          follower_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Whether the creator participates in commerce. */
          is_ecommerce_creator?: boolean;
          /** Whether the creator belongs to an MCN agency. */
          is_mcn_creator?: boolean;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid?: string;
          /** Creator handle. */
          unique_id?: string;
          /** Verification type: 1 regular creators, 2 Blue V creators. */
          verify_type?: number;
        };
        /** Search keywords: product, shop, creator, video, live, or category terms. */
        keywords?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a creator's videos over a date range. */
    "fastmoss_mcp.creator_video_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Sort options. */
          orderby?: Array<unknown>;
          /** Page number. Default 1, max 10. */
          page?: number;
          /** Page size. Default 10, max 10. */
          pagesize?: number;
          /** Video analysis type. */
          type?: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read the connected account's FastMoss Credits usage. */
    "fastmoss_mcp.credit_usage_summary": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read FastMoss detail-page URL examples for research results. */
    "fastmoss_mcp.fastmoss_detail_url_examples": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Discover current FastMoss MCP tools, live argument schemas and behavior annotations for TikTok Shop product, creator, shop, advertising, agency and market research. */
    "fastmoss_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools available to the connected FastMoss account. */
        tools: Array<{
          /**
           * The exact tool name.
           * @minLength 1
           */
          name: string;
          /** The current official tool description. */
          description?: string;
          /** Official MCP behavior annotations. */
          annotations?: Record<string, unknown>;
          /** The current JSON Schema for tool arguments. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Analyze a live session's audience and commerce performance. */
    "fastmoss_mcp.live_detail_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Live room ID. */
          room_id: string;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** List products promoted in a live session. */
    "fastmoss_mcp.live_products_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Live room ID. */
          room_id: string;
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id?: string;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search live sessions by start time, audience and commerce performance. */
    "fastmoss_mcp.live_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Creator category ID. */
          creator_category?: number;
          /** Follower count range. */
          follower_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Live type: 1 shop live, 2 creator live. */
          live_type?: number;
          /** Product category ID. */
          product_category?: number;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Live room ID. */
          room_id?: string;
          /** Units sold range. */
          sold_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Live-session start time. */
          start_time: number;
          /** Viewer count range. */
          viewer_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
        };
        /** Search keywords: product, shop, creator, video, live, or category terms. */
        keywords?: string;
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a market category by region and period. */
    "fastmoss_mcp.market_category_analysis": {
      input: {
        /** Category analysis type. */
        analysis_type: string;
        /** Filter parameters. */
        filter: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type?: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value?: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read the creator sales matrix for a market category. */
    "fastmoss_mcp.market_category_author_sales_matrix": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value?: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Sales metric selector. */
          sold_type?: number;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank market categories by performance for a completed period. */
    "fastmoss_mcp.market_category_ranking": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type?: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value?: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read the product category tree. Use search_category_by_words to resolve category names. */
    "fastmoss_mcp.product_category_info": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze the creators selling a product, including audience and sales contributions. */
    "fastmoss_mcp.product_creator_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a product's price, shop, ratings, logistics and media. */
    "fastmoss_mcp.product_detail_info": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a product's advertising spend, ROAS and paid-traffic trends. */
    "fastmoss_mcp.product_investment": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a product's sales channels, momentum and paid-versus-organic performance. */
    "fastmoss_mcp.product_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank recently listed products by sales performance in a completed period. */
    "fastmoss_mcp.product_rank_new_listed": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Whether it is cross-border. */
          is_cross_border?: boolean;
          /** Whether it is fully managed. */
          is_fully_managed?: boolean;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank bestselling products in a market or category for a completed period. */
    "fastmoss_mcp.product_rank_top_selling": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read one page of product reviews and buyer feedback. */
    "fastmoss_mcp.product_review_list": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read daily product GMV and units sold for a selected period. */
    "fastmoss_mcp.product_sales_trend": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Find products by keyword, category, price, sales and fulfilment filters. */
    "fastmoss_mcp.product_search": {
      input: {
        /** Search keywords: product, shop, creator, video, live, or category terms. */
        keywords?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
        /** Filter parameters. */
        filter?: {
          /** Category path from level 1 to level 3, e.g. [100, 200, 300]. */
          category_path?: Array<unknown>;
          /** Product ID; use product_search first if only a product name is known. */
          product_id?: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Shop type: 1 local, 2 cross-border; deprecated. */
          shop_type?: number;
          /** Commission rate range. */
          commission_rate_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Promoting creator count range. */
          creator_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** GMV range over the last 28 days. */
          day28_gmv_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Units sold range over the last 28 days. */
          day28_units_sold_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** GMV range over the last 7 days. */
          day7_gmv_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Units sold range over the last 7 days. */
          day7_units_sold_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Minimum product price range. */
          floor_price_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Cumulative GMV range. */
          total_gmv_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Units sold range. */
          units_sold_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Whether it is cross-border. */
          is_cross_border?: boolean;
          /** Whether it is fully managed. */
          is_fully_managed?: boolean;
          /** Whether shipping is free. */
          is_free_shipping?: boolean;
          /** Whether fulfilment uses a local warehouse. */
          is_local_warehouse?: boolean;
          /** Whether the product was recently listed. */
          is_new_listed?: boolean;
          /** Whether it is fully managed. */
          is_sshop?: boolean;
          /** Whether the product is a bestseller. */
          is_top_selling?: boolean;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read product SKU sales and inventory shares. */
    "fastmoss_mcp.product_sku": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** List videos promoting a product, optionally filtered by publish time and ad traffic. */
    "fastmoss_mcp.product_video_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Creation or publish time range in Unix timestamps. */
          create_time_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Whether it uses ad traffic. */
          is_ad?: boolean;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Resolve category names or keywords to FastMoss category IDs. */
    "fastmoss_mcp.search_category_by_words": {
      input: {
        /** Search query or queries. */
        query: string | Array<string>;
        /** Maximum total results. */
        max_total_results?: number;
        /** Number of matches per query. */
        top_k?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search FastMoss documentation for metrics, filters and research guidance. */
    "fastmoss_mcp.search_fastmoss_documents": {
      input: {
        /** Search query or queries. */
        query: string | Array<string>;
        /** Documentation source file filter. */
        source_file?: string;
        /** Number of matches per query. */
        top_k?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a shop's profile and basic information. */
    "fastmoss_mcp.shop_base_info": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze creators promoting a shop's products. */
    "fastmoss_mcp.shop_creator_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Selling mode: 1 video, 2 live. */
          author_product_type?: number;
          /** Follower count range. */
          follower_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Units sold range. */
          sold_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a shop's performance trends over a date range. */
    "fastmoss_mcp.shop_data_trends": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a shop's advertising investment over a date range. */
    "fastmoss_mcp.shop_investment_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze live sessions associated with a shop. */
    "fastmoss_mcp.shop_live_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Live type: 0 all, 1 shop live, 2 affiliate live. */
          is_shop?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a shop's products by category and listing age. */
    "fastmoss_mcp.shop_product_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Product listing age in days. */
          listing_time_range_days?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Rank shops by sales for a completed period. */
    "fastmoss_mcp.shop_rank_top_selling": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Whether it is cross-border. */
          is_cross_border?: boolean;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Shop type: 1 brand shop, 2 retail shop. */
          shop_type?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a shop's sales over a date range. */
    "fastmoss_mcp.shop_sale_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search shops by name, region, category and creator relationships. */
    "fastmoss_mcp.shop_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Brand name. */
          brand_name?: string;
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Creator count range. */
          creator_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Creator UID. */
          creator_uid?: string;
          /** Creator handle. */
          creator_unique_id?: string;
          /** Whether it is fully managed. */
          is_fully_managed?: boolean;
          /** Whether the shop is local. */
          is_local?: boolean;
          /** Shop rating range. */
          rating_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id?: string;
          /** Shop name. */
          shop_name?: string;
        };
        /** Search keywords: product, shop, creator, video, live, or category terms. */
        keywords?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze videos promoting a shop's products. */
    "fastmoss_mcp.shop_video_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Whether it uses ad traffic. */
          is_ad?: boolean;
          /** Video publish age in days. */
          publish_time_range_days?: number;
        };
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read a video's performance trends over a date range. */
    "fastmoss_mcp.video_data_trends": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Video ID; use video_search first if only a title/creator is known. */
          video_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Analyze a video's engagement and commerce performance. */
    "fastmoss_mcp.video_detail_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Video ID; use video_search first if only a title/creator is known. */
          video_id: string;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Read the script or transcript of a video. */
    "fastmoss_mcp.video_script_info": {
      input: {
        /** Video ID; use video_search first if only a title/creator is known. */
        video_id: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Search videos by creation time, creator, engagement and commerce activity. */
    "fastmoss_mcp.video_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Creation or publish time range in Unix timestamps. */
          create_time_range: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Creator category ID. */
          creator_category_id?: number;
          /** Creator UID. */
          creator_uid?: number;
          /** Creator handle. */
          creator_unique_id?: string;
          /** Like count range. */
          digg_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Follower count range. */
          follower_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Engagement rate range. */
          interact_rate_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Whether the video promotes products. */
          is_ecommerce?: boolean;
          /** Video play-count range. */
          play_count_range?: {
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
          };
          /** Product category ID. */
          product_category_id?: number;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
        };
        /** Search keywords: product, shop, creator, video, live, or category terms. */
        keywords?: string;
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
        /** Sort options. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10.
         * @minimum 1
         * @maximum 10
         */
        pagesize?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
  }
}
