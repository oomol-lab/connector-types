import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find TikTok video signals related to an Amazon ASIN and marketplace. Results do not establish Amazon sales attribution. */
    "kolsprite_mcp.asin_analysis_video": {
      input: {
        /**
         * Amazon marketplace code, such as US or GB.
         * @minLength 1
         */
        market: string;
        /**
         * Amazon product ASIN.
         * @minLength 1
         */
        asin: string;
        /** TikTok region code; defaults to US, or to market for ASIN analysis. */
        region?: string;
        /**
         * Page number, starting at 1. Page number multiplied by page size must not exceed 1000.
         * @minimum 1
         * @default 1
         */
        page_num?: number;
        /**
         * Results per page, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Paginated search results. */
        data: {
          /** Total matching records. */
          total?: number;
          /** Current page number. */
          pageNum?: number;
          /** Results per page. */
          pageSize?: number;
          /** Matching records. */
          list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Extract captions from a video URL through KOLSprite. Set is_southeast_asia for Southeast Asian videos. */
    "kolsprite_mcp.caption_extract_url": {
      input: {
        /**
         * Video URL for KOLSprite to fetch.
         * @minLength 1
         */
        url: string;
        /**
         * Whether the video is from Southeast Asia; defaults to false.
         * @default false
         */
        is_southeast_asia?: boolean;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Caption text. */
        data: string;
        [key: string]: unknown;
      };
    };
    /** List creator categories and their values for creator_search. */
    "kolsprite_mcp.creator_category_list": {
      input: Record<string, never>;
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Category records. */
        data: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search TikTok creators by keyword, audience, engagement, and sales. Query creator_category_list or product_category_list before selecting a category. */
    "kolsprite_mcp.creator_search": {
      input: {
        /** Search keyword. */
        keyword?: string;
        /** Search mode: N for nickname (creators) or ID (products and shops), K for keyword. */
        search_type?: "N" | "K";
        /** TikTok region code; defaults to US, or to market for ASIN analysis. */
        region?: string;
        /**
         * One creator category value returned by creator_category_list.
         * @maxItems 1
         */
        category_list?: Array<string>;
        /**
         * One product category ID returned by product_category_list.
         * @maxItems 1
         */
        product_category_list?: Array<string>;
        /** Lower bound for follower count. */
        fans_cnt_from?: number;
        /** Upper bound for follower count. */
        fans_cnt_to?: number;
        /** Lower bound for follower growth rate. */
        fans_gr_from?: number;
        /** Upper bound for follower growth rate. */
        fans_gr_to?: number;
        /** Lower bound for engagement rate. */
        interact_from?: number;
        /** Upper bound for engagement rate. */
        interact_to?: number;
        /** Lower bound for average likes. */
        avg_like_from?: number;
        /** Upper bound for average likes. */
        avg_like_to?: number;
        /** Lower bound for video views (average views for creator searches). */
        play_cnt_from?: number;
        /** Upper bound for video views (average views for creator searches). */
        play_cnt_to?: number;
        /** Lower bound for video count. */
        video_cnt_from?: number;
        /** Upper bound for video count. */
        video_cnt_to?: number;
        /** Lower bound for product count. */
        product_cnt_from?: number;
        /** Upper bound for product count. */
        product_cnt_to?: number;
        /** Lower bound for sales volume. */
        sales_volume_from?: number;
        /** Upper bound for sales volume. */
        sales_volume_to?: number;
        /** Upstream sort field. */
        order_field?: string;
        /** Sort direction: 0 descending, 1 ascending. */
        order_type?: 0 | 1;
        /**
         * Page number, starting at 1. Page number multiplied by page size must not exceed 1000.
         * @minimum 1
         * @default 1
         */
        page_num?: number;
        /**
         * Results per page, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Paginated search results. */
        data: {
          /** Total matching records. */
          total?: number;
          /** Current page number. */
          pageNum?: number;
          /** Results per page. */
          pageSize?: number;
          /** Matching records. */
          list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the product category tree used by product, shop, video, and creator searches. */
    "kolsprite_mcp.product_category_list": {
      input: Record<string, never>;
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Category records. */
        data: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List creators promoting a TikTok Shop product, with optional contact availability and sorting filters. */
    "kolsprite_mcp.product_related_creator": {
      input: {
        /**
         * TikTok Shop product ID.
         * @minLength 1
         */
        product_id: string;
        /** TikTok region code; defaults to US, or to market for ASIN analysis. */
        region?: string;
        /** Filter contact availability: 1 with contact details, 0 without. */
        contact_exist?: 0 | 1;
        /** Upstream sort field. */
        order_field?: string;
        /** Sort direction: 0 descending, 1 ascending. */
        order_type?: 0 | 1;
        /**
         * Page number, starting at 1. Page number multiplied by page size must not exceed 1000.
         * @minimum 1
         * @default 1
         */
        page_num?: number;
        /**
         * Results per page, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Paginated search results. */
        data: {
          /** Total matching records. */
          total?: number;
          /** Current page number. */
          pageNum?: number;
          /** Results per page. */
          pageSize?: number;
          /** Matching records. */
          list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search TikTok Shop products by keyword, price, sales, ratings, and category. Query product_category_list for category IDs. */
    "kolsprite_mcp.product_search": {
      input: {
        /** Search keyword. */
        keyword?: string;
        /** Search mode: N for nickname (creators) or ID (products and shops), K for keyword. */
        search_type?: "N" | "K";
        /** TikTok region code; defaults to US, or to market for ASIN analysis. */
        region?: string;
        /**
         * One product category ID returned by product_category_list.
         * @maxItems 1
         */
        cat_ids?: Array<string>;
        /** Keywords to exclude. */
        exclude_keyword?: string;
        /** Fulfillment type: fbt for managed fulfillment, pop for merchant operations. */
        ft?: "fbt" | "pop";
        /** Logistics type: local or crossborder. */
        lt?: "local" | "crossborder";
        /** TikTok Shop ID. */
        shop_id?: string;
        /** Lower bound for price. */
        price_from?: number;
        /** Upper bound for price. */
        price_to?: number;
        /** Lower bound for rating. */
        rating_from?: number;
        /** Upper bound for rating. */
        rating_to?: number;
        /** Lower bound for review count. */
        reviews_from?: number;
        /** Upper bound for review count. */
        reviews_to?: number;
        /** Lower bound for sales volume. */
        sales_volume_from?: number;
        /** Upper bound for sales volume. */
        sales_volume_to?: number;
        /** Lower bound for sales volume in the last 7 days. */
        sales_volume_lst7d_from?: number;
        /** Upper bound for sales volume in the last 7 days. */
        sales_volume_lst7d_to?: number;
        /** Lower bound for sales volume in the last 30 days. */
        sales_volume_lst30d_from?: number;
        /** Upper bound for sales volume in the last 30 days. */
        sales_volume_lst30d_to?: number;
        /** Lower bound for sales revenue in the last 30 days. */
        sales_lst30d_from?: number;
        /** Upper bound for sales revenue in the last 30 days. */
        sales_lst30d_to?: number;
        /** Lower bound for sales volume growth rate over 7 days. */
        sales_volume_gr7d_from?: number;
        /** Upper bound for sales volume growth rate over 7 days. */
        sales_volume_gr7d_to?: number;
        /** Lower bound for sales volume growth rate over 30 days. */
        sales_volume_gr30d_from?: number;
        /** Upper bound for sales volume growth rate over 30 days. */
        sales_volume_gr30d_to?: number;
        /** Lower bound for promoting creator count. */
        influencer_from?: number;
        /** Upper bound for promoting creator count. */
        influencer_to?: number;
        /** Lower bound for video count. */
        videos_from?: number;
        /** Upper bound for video count. */
        videos_to?: number;
        /**
         * Lower bound for listing date (yyyy-mm-dd).
         * @format date
         */
        listing_date_from?: string;
        /**
         * Upper bound for listing date (yyyy-mm-dd).
         * @format date
         */
        listing_date_to?: string;
        /** Upstream sort field. */
        order_field?: string;
        /** Sort direction: 0 descending, 1 ascending. */
        order_type?: 0 | 1;
        /**
         * Page number, starting at 1. Page number multiplied by page size must not exceed 1000.
         * @minimum 1
         * @default 1
         */
        page_num?: number;
        /**
         * Results per page, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Paginated search results. */
        data: {
          /** Total matching records. */
          total?: number;
          /** Current page number. */
          pageNum?: number;
          /** Results per page. */
          pageSize?: number;
          /** Matching records. */
          list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search TikTok Shop stores by keyword, category, ratings, sales, and operating model. */
    "kolsprite_mcp.shop_search": {
      input: {
        /** Search keyword. */
        keyword?: string;
        /** Search mode: N for nickname (creators) or ID (products and shops), K for keyword. */
        search_type?: "N" | "K";
        /** TikTok region code; defaults to US, or to market for ASIN analysis. */
        region?: string;
        /**
         * One shop category ID returned by product_category_list.
         * @maxItems 1
         */
        category?: Array<string>;
        /** Upstream seller type. */
        shop_type?: string;
        /** Upstream operating model. */
        service_type?: string;
        /** Lower bound for price. */
        price_from?: number;
        /** Upper bound for price. */
        price_to?: number;
        /** Lower bound for rating. */
        rating_from?: number;
        /** Upper bound for rating. */
        rating_to?: number;
        /** Lower bound for listed product count. */
        products_from?: number;
        /** Upper bound for listed product count. */
        products_to?: number;
        /** Lower bound for sales volume. */
        sales_volume_from?: number;
        /** Upper bound for sales volume. */
        sales_volume_to?: number;
        /** Lower bound for sales volume in the last 30 days. */
        sales_volume_lst30d_from?: number;
        /** Upper bound for sales volume in the last 30 days. */
        sales_volume_lst30d_to?: number;
        /** Lower bound for sales volume growth rate over 30 days. */
        sales_volume_gr30d_from?: number;
        /** Upper bound for sales volume growth rate over 30 days. */
        sales_volume_gr30d_to?: number;
        /** Lower bound for promoting creator count. */
        influencer_from?: number;
        /** Upper bound for promoting creator count. */
        influencer_to?: number;
        /** Lower bound for video count. */
        videos_from?: number;
        /** Upper bound for video count. */
        videos_to?: number;
        /** Upstream sort field. */
        order_field?: string;
        /** Sort direction: 0 descending, 1 ascending. */
        order_type?: 0 | 1;
        /**
         * Page number, starting at 1. Page number multiplied by page size must not exceed 1000.
         * @minimum 1
         * @default 1
         */
        page_num?: number;
        /**
         * Results per page, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Paginated search results. */
        data: {
          /** Total matching records. */
          total?: number;
          /** Current page number. */
          pageNum?: number;
          /** Results per page. */
          pageSize?: number;
          /** Matching records. */
          list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search TikTok videos by keyword, IDs, engagement, sales, dates, and linked products or shops. */
    "kolsprite_mcp.video_search": {
      input: {
        /** Search keyword. */
        keyword?: string;
        /** TikTok region code; defaults to US, or to market for ASIN analysis. */
        region?: string;
        /**
         * Up to 50 TikTok video IDs.
         * @maxItems 50
         */
        video_ids?: Array<string>;
        /** Upstream video type. */
        video_type?: string;
        /** Whether the video promotes a product. */
        product?: boolean;
        /** TikTok Shop product ID. */
        product_id?: string;
        /** TikTok Shop ID. */
        shop_id?: string;
        /**
         * One product category ID returned by product_category_list.
         * @maxItems 1
         */
        product_category_list?: Array<string>;
        /** Lower bound for video views (average views for creator searches). */
        play_cnt_from?: number;
        /** Upper bound for video views (average views for creator searches). */
        play_cnt_to?: number;
        /** Lower bound for like count. */
        like_cnt_from?: number;
        /** Upper bound for like count. */
        like_cnt_to?: number;
        /** Lower bound for engagement rate. */
        interact_from?: number;
        /** Upper bound for engagement rate. */
        interact_to?: number;
        /** Lower bound for price. */
        price_from?: number;
        /** Upper bound for price. */
        price_to?: number;
        /** Lower bound for sales volume. */
        sales_volume_from?: number;
        /** Upper bound for sales volume. */
        sales_volume_to?: number;
        /** Lower bound for sales volume in the last 30 days. */
        sales_volume_lst30d_from?: number;
        /** Upper bound for sales volume in the last 30 days. */
        sales_volume_lst30d_to?: number;
        /** Lower bound for sales revenue in the last 30 days. */
        sales_lst30d_from?: number;
        /** Upper bound for sales revenue in the last 30 days. */
        sales_lst30d_to?: number;
        /** Lower bound for video duration in seconds. */
        seconds_from?: number;
        /** Upper bound for video duration in seconds. */
        seconds_to?: number;
        /**
         * Lower bound for publication date (yyyy-mm-dd).
         * @format date
         */
        pub_date_from?: string;
        /**
         * Upper bound for publication date (yyyy-mm-dd).
         * @format date
         */
        pub_date_to?: string;
        /** Upstream sort field. */
        order_field?: string;
        /** Sort direction: 0 descending, 1 ascending. */
        order_type?: 0 | 1;
        /**
         * Page number, starting at 1. Page number multiplied by page size must not exceed 1000.
         * @minimum 1
         * @default 1
         */
        page_num?: number;
        /**
         * Results per page, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Upstream business status code. */
        code?: string;
        /** Upstream message. */
        message?: string;
        /** Upstream success flag. */
        success?: boolean;
        /** Paginated search results. */
        data: {
          /** Total matching records. */
          total?: number;
          /** Current page number. */
          pageNum?: number;
          /** Results per page. */
          pageSize?: number;
          /** Matching records. */
          list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
