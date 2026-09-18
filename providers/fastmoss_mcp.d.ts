import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Use when the user has a video_id and wants ad spend, ROAS, play, engagement, follower, and commerce performance over a date range. */
    "fastmoss_mcp.ad_data_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Video ID; use video_search first if only a title/creator is known. */
          video_id: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants active ad creatives or needs to filter ads by country, category, landing page, spend, ROAS, plays, or run days. Returns ad, creator, shop, products, and performance sections. */
    "fastmoss_mcp.ad_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Ad type: 1 TikTok Shop commerce ad, 2 non-commerce/planting ad. */
          ad_type?: number;
          /** Level-1 product category ID. */
          category_l1_id?: number;
          /** Level-2 product category ID. */
          category_l2_id?: number;
          /** Level-3 product category ID. */
          category_l3_id?: number;
          /** Estimated ad spend range in the form {"min": number, "max": number}. */
          estimated_ad_spend_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Search keywords for ad caption, product, creator, or shop clues. */
          keywords?: string;
          /** Last-seen ad date range in the form {"start_date": "YYYY-MM-DD", "end_date": "YYYY-MM-DD"}. */
          last_seen_ad_date_range?: {
            /** End date, YYYY-MM-DD. */
            end_date?: string;
            /** Start date, YYYY-MM-DD. */
            start_date?: string;
          };
          /** Range for the number of days the ad was observed as active, in the form {"min": number, "max": number}. */
          observed_active_days_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Video play-count range in the form {"min": number, "max": number}. */
          play_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Country or region code where the ad is detected, e.g. US, ID, VN. */
          region?: string;
          /** ROAS range in the form {"min": number, "max": number}. */
          roas_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Video publish-date range in the form {"start_date": "YYYY-MM-DD", "end_date": "YYYY-MM-DD"}. */
          video_create_date_range?: {
            /** End date, YYYY-MM-DD. */
            end_date?: string;
            /** Start date, YYYY-MM-DD. */
            start_date?: string;
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
    /** Use when the user wants agency creator structure, follower tiers, and individual collaborators. Returns distributions and a paginated creator list. */
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
    /** Use for agency product-category and price-band structure. Use agency_product_list for individual products. */
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
    /** Use when the user wants individual products promoted through an agency. Supports category, price, period, sorting, and pagination. */
    "fastmoss_mcp.agency_product_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Unique MCN agency ID; use agency_search first when only the agency name is known. */
          agency_id: string;
          /** Inclusive product-price upper bound; currency follows the agency market. */
          maximum_price?: number;
          /** Inclusive product-price lower bound; currency follows the agency market. */
          minimum_price?: number;
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
    /** Use when the user wants an agency profile, historical performance, and recent 7/28/90-day data overview. */
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
    /** Use when the user wants leading MCN agencies in a market. Returns weekly or monthly agency rankings and period performance. */
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
    /** Use when the user has an agency name or market clue but no agency_id. Returns matching agencies and recent 7-day performance. */
    "fastmoss_mcp.agency_search": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Agency-name keyword, maximum 120 characters. */
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
    /** Use when the user wants agency collaborating-shop totals and individual shop performance. */
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
    /** Use when the user wants a creator video-vs-live selling split and main promoted categories. */
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
    /** Use when the user asks about creator follower, engagement, or commerce trends. Select field_type; returns daily series and period totals. */
    "fastmoss_mcp.creator_data_trends": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type?: number;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Metric: follower_change/play/like/comment/collect_count/share/units_sold/gmv; video_*=video commerce, live_*=live commerce, showcase_*=showcase commerce. */
          field_type: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants to check whether a creator audience matches a target market. Returns age, gender, location, and top segments. */
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
    /** Use when the user wants a creator showcase product list. Returns product GMV, units sold, category, price, commission, shop info, and time_range_days. */
    "fastmoss_mcp.creator_product_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: string;
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
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
    /** Use when the user wants a creator snapshot or partnership check. Returns profile and performance_overview; GMV/rankings are mostly historical cumulative, so use creator_search day28_gmv for current activity. */
    "fastmoss_mcp.creator_profile_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Language. Default EN_US, optional ZH_CN. */
          lang?: string;
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants top ecommerce creators. Returns creator and ranking_metrics; date_value is returned as YYYY-Www for weekly rankings. */
    "fastmoss_mcp.creator_rank_top_ecommerce": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Account type parameter. */
          account_type?: number;
          /** Creator category ID. */
          creator_category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Ecommerce type parameter. */
          ecommerce_type?: number;
          /** Product category ID. */
          product_category_id?: number;
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
    /** Use when the user wants fast-growing creators. Returns creator and growth_metrics; date_value is returned as YYYY-Www for weekly rankings. */
    "fastmoss_mcp.creator_rank_top_growth": {
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
    /** Use when the user wants creators with ecommerce potential. Returns creator, potential_metrics, and audience_summary; date_value is returned as YYYY-Www for weekly rankings. */
    "fastmoss_mcp.creator_rank_top_potential": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category path from level 1 to level 3, e.g. [100, 200, 300]. */
          category_path?: Array<unknown>;
          /** Creator category ID. */
          creator_category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
          /** Ecommerce type parameter. */
          ecommerce_type?: number;
          /** Follower age: 1=18-24, 2=25-34, 3=35+. */
          follower_age_type?: Record<string, unknown>;
          /** Follower count range: {"min": number, "max": number}. */
          follower_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Follower gender type parameter. */
          follower_gender_type?: number;
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
    /** Use when the user has no UID and provides a nickname, keyword, niche, or region. Returns creator, commerce_summary, and audience_summary; day28_gmv is the key current-activity metric for tiering; has_email as a boolean, not the email address itself. */
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
          /** Follower gender type parameter. */
          follower_gender_type?: number;
          /** Follower count range: {"min": number, "max": number}. */
          follower_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Is ecommerce creator parameter. */
          is_ecommerce_creator?: boolean;
          /** Is mcn creator parameter. */
          is_mcn_creator?: boolean;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Creator UID, when known. If only a handle or nickname is known, omit this field and use keywords in this action. */
          uid?: string;
          /** Unique id. */
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
    /** Use when the user wants creator content direction, tags, and selling videos. Returns video_tag_summary and video_list with interaction_rate_percent and linked_products so the model does not confuse video performance with product performance. */
    "fastmoss_mcp.creator_video_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Sort options. */
          orderby?: Array<unknown>;
          /** Page number. Default 1, max 10. */
          page?: number;
          /** Page size. Default 10, max 10. */
          pagesize?: number;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Type parameter. */
          type?: string;
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          uid: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use after first-time login or authorization to verify auth and show the account's current FastMoss MCP credit usage summary. Takes no arguments. */
    "fastmoss_mcp.credit_usage_summary": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the AI needs FastMoss detail-page links. Takes no arguments and returns product, creator, shop, video, and live URL templates. */
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
    /** Use when the user wants one live session info, creator, key performance, and category breakdown. */
    "fastmoss_mcp.live_detail_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Live room ID; use live_search first if only a title/host/shop is known. */
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
    /** Use when the user wants products sold in a live session or high GMV/units within this live session. Returns live_units_sold, live_gmv, commission_rate_percent, sales_timeline only when pagesize <= 10, and shop_cumulative_units_sold. */
    "fastmoss_mcp.live_products_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Product category ID; omit it to include all categories. Passing 1 also means all. */
          category_id?: number;
          /** Live room ID; use live_search first if only a title/host/shop is known. */
          room_id: string;
          /** Shop seller_id; omit it to include all shops. Passing 1 also means all. */
          seller_id?: string;
        };
        /** Language. Default EN_US, optional ZH_CN. */
        lang?: string;
        /** Sort options; only the first sort rule takes effect. Fields: units_sold, gmv. */
        orderby?: Array<unknown>;
        /**
         * Page number. Default 1, max 10.
         * @minimum 1
         * @maximum 10
         */
        page?: number;
        /**
         * Page size. Default 10, max 10; timeline snapshots are returned only when pagesize <= 10.
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
    /** Use when the user has no room_id and provides a live title, host, or shop. Returns live, creator, and performance_summary. */
    "fastmoss_mcp.live_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Creator category ID. */
          creator_category?: number;
          /** Follower count range: {"min": number, "max": number}. */
          follower_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Live type: 1 shop live, 2 creator live. */
          live_type?: number;
          /** Product category ID. */
          product_category?: number;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Live room ID, when known. If only a title, host or shop is known, omit this field and use keywords in this action. */
          room_id?: string;
          /** Sold range range in the form {"min": number, "max": number}. */
          sold_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Start time parameter. */
          start_time: number;
          /** Viewer range range in the form {"min": number, "max": number}. */
          viewer_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
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
    /** Use when the user wants category size, growth, competition, or opportunity. analysis_type basic_metrics returns category, scale_metrics, growth_metrics, concentration_metrics; sales_trends returns trend_series; price_distribution returns sales_price_distribution with left-open right-closed price bands and sub_category_units_sold_total. */
    "fastmoss_mcp.market_category_analysis": {
      input: {
        /** Analysis type parameter. */
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
    /** Use when the user wants category sales contribution by creator follower_tier. Returns creator_count, category_gmv, gmv_share_percent, units_sold, and avg_creator_gmv. */
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
          /** Sold type parameter. */
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
    /** Use when the user wants category ranking, growth, or concentration. Returns ranking_scope and ranked_categories; no category_id means level-1 category ranking, and a level-1 category_id means level-2 subcategory ranking. */
    "fastmoss_mcp.market_category_ranking": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Parent category ID; omit it or set -100 for level-1 ranking, or pass a level-1 category for level-2 ranking. */
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
        /** Sort options. Only the first sort rule takes effect. Use ranking fields such as category_units_sold. */
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
    /** Use when the user needs the product category tree or category levels. Prefer search_category_by_words for natural-language category terms. */
    "fastmoss_mcp.product_category_info": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants who sells a product or the creator structure. Returns creator_summary with follower_tier_distribution and creator_category_distribution, plus linked_creators with creator, product_contribution, creator_cumulative_performance, and audience_summary. */
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
    /** Use when the user wants product basics, shop, price, rating, logistics, images, or ad status. Returns product and shop; detail_url points to TikTok. */
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
    /** Use when the user asks about product ads, spend, ROAS, or daily paid-traffic changes. Returns ad_performance_summary and daily_ad_performance_trend; ad_gmv is ad-attributed. */
    "fastmoss_mcp.product_investment": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants product channel attribution, lifecycle/momentum, or ad-vs-organic structure. Returns period_summary, daily_trend, ads_distribution, channel_distribution, and content_distribution. */
    "fastmoss_mcp.product_overview": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Product ID; use product_search first if only a product name is known. */
          product_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants recently listed hot products. Returns FastMoss new-product ranking, first_3d_gmv/units_sold, and total_gmv/units_sold; new means listed within 30 days. */
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
          /** Whether it is cross-border. */
          is_cross_border?: boolean;
          /** Whether it is fully managed. */
          is_fully_managed?: boolean;
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
    /** Use when the user wants bestsellers or top products. Returns period_gmv/units_sold, total_gmv/units_sold, and units_sold_growth_rate_percent. */
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
    /** Use when the user wants product reviews or buyer feedback. Returns review list and count; supports time_range_days and rating/create_time/review_id sorting. */
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
    /** Use when the user wants a product GMV/units trend or traction check. Returns period_summary and daily_trend with period_gmv, period_units_sold, daily_gmv, and daily_units_sold. */
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
    /** Use when the user has no product_id and provides a name, keyword, price band, category, bestseller clue, or new-product clue. Returns product, sales_summary, distribution_summary, and shop. */
    "fastmoss_mcp.product_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category path from level 1 to level 3, e.g. [100, 200, 300]. */
          category_path?: Array<unknown>;
          /** Commission-rate range: {"min": number, "max": number}. */
          commission_rate_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Creator count range range in the form {"min": number, "max": number}. */
          creator_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Last-28-day GMV range; maps to day28_sale_amount. */
          day28_gmv_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Last-28-day units-sold range; maps to day28_sold_count. */
          day28_units_sold_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Last-7-day GMV range; maps to day7_sale_amount. */
          day7_gmv_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Last-7-day units-sold range; maps to day7_sold_count. */
          day7_units_sold_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Product price range: {"min": number, "max": number}. */
          floor_price_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Whether it is cross-border. */
          is_cross_border?: boolean;
          /** Is free shipping parameter. */
          is_free_shipping?: boolean;
          /** Whether it is fully managed. */
          is_fully_managed?: boolean;
          /** Is local warehouse parameter. */
          is_local_warehouse?: boolean;
          /** Is new listed parameter. */
          is_new_listed?: boolean;
          /** Whether it is fully managed. */
          is_sshop?: boolean;
          /** Is top selling parameter. */
          is_top_selling?: boolean;
          /** Product ID, when known. If only a product name is known, omit this field and use keywords in this action. */
          product_id?: string;
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Shop type: 1 local, 2 cross-border; deprecated. */
          shop_type?: number;
          /** Total GMV range; maps to sale_amount. */
          total_gmv_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Units sold range range in the form {"min": number, "max": number}. */
          units_sold_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
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
    /** Use when the user wants SKU sales share, inventory share, or SKU health. Returns SKU-level sales and inventory shares. */
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
    /** Use when the user wants videos selling a product, high-play videos, or paid-vs-organic video traffic. Filter with is_ad; returns GMV, plays, video_desc, and fastmoss_url. */
    "fastmoss_mcp.product_video_list": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Creation/publish time range: {"min": unix_timestamp, "max": unix_timestamp}. */
          create_time_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Whether it uses ad traffic. */
          is_ad?: boolean;
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
    /** Use when the user knows a product/category term but does not have the category_id yet. Returns matched TikTok product category IDs and Chinese category paths. */
    "fastmoss_mcp.search_category_by_words": {
      input: {
        /** Max deduplicated candidates. Default 15. */
        max_total_results?: number;
        /** Product or category terms, string or array; map natural-language category clues into category_id. */
        query: string | Array<string>;
        /** Candidate categories per keyword. Default 5. */
        top_k?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user asks about FastMoss rules, features, terms, or operations rather than real-time business data. Returns knowledge snippets and documents. */
    "fastmoss_mcp.search_fastmoss_documents": {
      input: {
        /** Feature terms, terminology, rule questions, or operation questions; string or array. */
        query: string | Array<string>;
        /** Optional source file; use it to narrow the search scope and reduce noise. */
        source_file?: string;
        /** Knowledge snippets per query. Default 5. */
        top_k?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants a shop snapshot, store type, rating, or profile. Returns cumulative GMV/units, ranks, age, product count, and creator/video/live counts. */
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
    /** Use when the user wants shop collaborators, creator tiers, or video-vs-live selling structure. Returns creator list and distributions. */
    "fastmoss_mcp.shop_creator_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Selling mode: 1 video, 2 live. */
          author_product_type?: number;
          /** Follower count range: {"min": number, "max": number}. */
          follower_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Units sold range: {"min": number, "max": number}. */
          sold_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
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
    /** Use when the user wants recent shop GMV, units, creator, live, video, or active-product trends. Returns daily trends. */
    "fastmoss_mcp.shop_data_trends": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user asks about shop ads, spend, ROAS, ad GMV, or promoted assets. Returns ad estimates and daily changes. */
    "fastmoss_mcp.shop_investment_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants shop live performance, shop-live vs affiliate-live structure, or live sessions. */
    "fastmoss_mcp.shop_live_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Live type: 0 all, 1 shop live, 2 affiliate live. */
          is_shop?: number;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
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
    /** Use when the user wants shop categories, price bands, product mix, or product details. Returns distributions and product list. */
    "fastmoss_mcp.shop_product_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Listing age in days, commonly 7/14/28/90. */
          listing_time_range_days?: number;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
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
    /** Use when the user wants top shops in a market or category. Returns shop ranking and ecommerce metrics. */
    "fastmoss_mcp.shop_rank_top_selling": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Ranking period: day, week, or month; MCN agency rankings support only week/month. */
          date_type: string;
          /** Completed period only: yesterday YYYY-MM-DD, last week YYYY-ww or YYYY-Www, last month YYYY-MM; do not use the current period. */
          date_value: string;
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
    /** Use when the user wants shop sales by short video, live, product card, creator, or self-operated channels. Returns channel_distribution and content_distribution. */
    "fastmoss_mcp.shop_sale_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user has no seller_id and provides a shop name, keyword, or region. Returns matching shops. */
    "fastmoss_mcp.shop_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Brand name parameter. */
          brand_name?: string;
          /** Category ID; confirm category first if only a category name is known. */
          category_id?: number;
          /** Creator count range: {"min": number, "max": number}. */
          creator_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          creator_uid?: string;
          /** Creator unique id. */
          creator_unique_id?: string;
          /** Whether it is fully managed. */
          is_fully_managed?: boolean;
          /** Is local parameter. */
          is_local?: boolean;
          /** Rating range range in the form {"min": number, "max": number}. */
          rating_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Country or region code, e.g. US, UK, ID. */
          region?: string;
          /** Shop seller_id, when known. If only a shop name is known, omit this field and use filter.shop_name or keywords in this action. */
          seller_id?: string;
          /** Shop name parameter. */
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
    /** Use when the user wants shop selling videos, video performance, or ad status. */
    "fastmoss_mcp.shop_video_analysis": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Whether it uses ad traffic. */
          is_ad?: boolean;
          /** Video publish age in days, commonly 7/28/90. */
          publish_time_range_days?: number;
          /** Shop seller_id; use shop_search first if only a shop name is known. */
          seller_id: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
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
    /** Use when the user wants one video play, like, comment, or share trends. Returns daily interaction trends. */
    "fastmoss_mcp.video_data_trends": {
      input: {
        /** Filter parameters. */
        filter: {
          /** End date, YYYY-MM-DD. */
          end_date?: string;
          /** Start date, YYYY-MM-DD. */
          start_date?: string;
          /** Days: 7/14/28/90; recent=28; -1=cumulative. */
          time_range_days?: number;
          /** Video ID; use video_search first if only a title/creator is known. */
          video_id: string;
        };
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected FastMoss account. */
        result: unknown;
      };
    };
    /** Use when the user wants one video basics, plays, engagement, interaction rate, IPM, and linked products. */
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
    /** Use when the user wants video subtitles or line-by-line spoken copy. Returns start/end time and text; empty subtitles can fall back to video_desc. */
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
    /** Use when the user has no video_id and provides video keywords, title, or creator. Returns matching videos. */
    "fastmoss_mcp.video_search": {
      input: {
        /** Filter parameters. */
        filter?: {
          /** Creation/publish time range: {"min": unix_timestamp, "max": unix_timestamp}. */
          create_time_range: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Creator category ID. */
          creator_category_id?: number;
          /** Creator UID; use creator_search first if only a handle/nickname is known. */
          creator_uid?: number;
          /** Creator unique id. */
          creator_unique_id?: string;
          /** Digg count range range in the form {"min": number, "max": number}. */
          digg_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Follower count range: {"min": number, "max": number}. */
          follower_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Interact rate range range in the form {"min": number, "max": number}. */
          interact_rate_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
          };
          /** Is ecommerce parameter. */
          is_ecommerce?: boolean;
          /** Play count range range in the form {"min": number, "max": number}. */
          play_count_range?: {
            /** Maximum value. */
            max?: number;
            /** Minimum value. */
            min?: number;
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
