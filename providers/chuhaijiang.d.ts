import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a TikTok Shop product from Chuhaijiang with product, shop, pricing, sales, and category details. */
    "chuhaijiang.get_product": {
      input: {
        /**
         * The TikTok product ID returned by Chuhaijiang.
         * @minLength 1
         */
        product_id: string;
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * Optional related sections to include in the product detail.
         * @maxItems 2
         */
        include?: Array<"channel" | "core">;
      };
      output: {
        /** The TikTok product record, including documented product, shop, pricing, sales, and category fields. */
        product: Record<string, unknown>;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok Shop products most heavily promoted by creators, videos, and live streams in Chuhaijiang. */
    "chuhaijiang.list_most_promoted_products": {
      input: {
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * TikTok product category ID used to filter the ranking.
         * @minLength 1
         */
        category?: string;
        /** Seller type: 1 for overseas, 2 for local, 3 for brand, or 4 for non-brand. */
        seller_type?: "1" | "2" | "3" | "4";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of ranking results per page, up to 20.
         * @minimum 1
         * @maximum 20
         */
        page_size?: number;
        /**
         * Statistics date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** Statistics period used by the ranking. */
        granularity: "daily" | "weekly" | "monthly";
        /** Product field used to sort the promotion ranking. */
        sort_field?: "interval_gmv" | "interval_sold_count" | "live_count" | "live_user_count" | "related_creator_count" | "video_play_count";
        /** Direction used to sort the promotion ranking. */
        sort_direction?: "asc" | "desc";
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List recently launched TikTok Shop products that are quickly gaining sales in Chuhaijiang. */
    "chuhaijiang.list_new_arrival_products": {
      input: {
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * TikTok product category ID used to filter the ranking.
         * @minLength 1
         */
        category?: string;
        /** Seller type: 1 for overseas, 2 for local, 3 for brand, or 4 for non-brand. */
        seller_type?: "1" | "2" | "3" | "4";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of ranking results per page, up to 20.
         * @minimum 1
         * @maximum 20
         */
        page_size?: number;
        /**
         * Earliest product listing date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        listed_from?: string;
        /**
         * Latest product listing date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        listed_to?: string;
        /** Chuhaijiang product status option used to filter results. */
        product_status?: "1" | "2" | "3" | "4";
        /** Product field used to sort the new-arrival ranking. */
        sort_field?: "gmv_3d" | "sold_count_3d" | "total_gmv" | "total_sold_count";
        /** Direction used to sort the new-arrival ranking. */
        sort_direction?: "asc" | "desc";
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok creators associated with a product in Chuhaijiang. */
    "chuhaijiang.list_product_creators": {
      input: {
        /**
         * The TikTok product ID returned by Chuhaijiang.
         * @minLength 1
         */
        product_id: string;
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 10.
         * @minimum 1
         * @maximum 10
         */
        page_size?: number;
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok live streams associated with a product in Chuhaijiang. */
    "chuhaijiang.list_product_lives": {
      input: {
        /**
         * The TikTok product ID returned by Chuhaijiang.
         * @minLength 1
         */
        product_id: string;
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 10.
         * @minimum 1
         * @maximum 10
         */
        page_size?: number;
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok Shop reviews associated with a product in Chuhaijiang. */
    "chuhaijiang.list_product_reviews": {
      input: {
        /**
         * The TikTok product ID returned by Chuhaijiang.
         * @minLength 1
         */
        product_id: string;
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 10.
         * @minimum 1
         * @maximum 10
         */
        page_size?: number;
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok videos associated with a product in Chuhaijiang. */
    "chuhaijiang.list_product_videos": {
      input: {
        /**
         * The TikTok product ID returned by Chuhaijiang.
         * @minLength 1
         */
        product_id: string;
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 10.
         * @minimum 1
         * @maximum 10
         */
        page_size?: number;
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok products similar to a selected product in Chuhaijiang. */
    "chuhaijiang.list_similar_products": {
      input: {
        /**
         * The TikTok product ID returned by Chuhaijiang.
         * @minLength 1
         */
        product_id: string;
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 10.
         * @minimum 1
         * @maximum 10
         */
        page_size?: number;
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** List TikTok Shop products ranked by sales for a selected market and statistics period in Chuhaijiang. */
    "chuhaijiang.list_top_selling_products": {
      input: {
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * TikTok product category ID used to filter the ranking.
         * @minLength 1
         */
        category?: string;
        /** Seller type: 1 for overseas, 2 for local, 3 for brand, or 4 for non-brand. */
        seller_type?: "1" | "2" | "3" | "4";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of ranking results per page, up to 20.
         * @minimum 1
         * @maximum 20
         */
        page_size?: number;
        /**
         * Statistics date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        date: string;
        /** Statistics period used by the ranking. */
        granularity: "daily" | "weekly" | "monthly";
        /** Product field used to sort the sales ranking. */
        sort_field?: "gmv_growth_rate" | "interval_gmv" | "interval_sold_count" | "sold_count_growth_rate" | "total_gmv" | "total_sold_count";
        /** Direction used to sort the sales ranking. */
        sort_direction?: "asc" | "desc";
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
    /** Search TikTok Shop products in Chuhaijiang by market, keyword, category, price, rating, sales, shipping, and sort order. */
    "chuhaijiang.search_products": {
      input: {
        /** TikTok Shop market country code. */
        country: "br" | "de" | "es" | "fr" | "gb" | "id" | "it" | "jp" | "mx" | "my" | "ph" | "sg" | "th" | "us" | "vn";
        /**
         * Keyword used to search product names and related text.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Numeric TikTok product category ID, available from the l1_category field in search results.
         * @minLength 1
         */
        category?: string;
        /** Seller type accepted by Chuhaijiang, such as "1" for overseas non-brand, "2" for local, "3" for brand, "4" for non-brand, or "local" as shown in the official example. */
        seller_type?: string;
        /**
         * Minimum product price in US dollars.
         * @minimum 0
         */
        min_price?: number;
        /**
         * Maximum product price in US dollars.
         * @minimum 0
         */
        max_price?: number;
        /**
         * Minimum product rating.
         * @minimum 0
         * @maximum 5
         */
        min_rating?: number;
        /**
         * Maximum product rating.
         * @minimum 0
         * @maximum 5
         */
        max_rating?: number;
        /**
         * Minimum product sales during the last 7 days.
         * @minimum 0
         */
        min_sold_7d?: number;
        /**
         * Maximum product sales during the last 7 days.
         * @minimum 0
         */
        max_sold_7d?: number;
        /**
         * Minimum product sales during the last 30 days.
         * @minimum 0
         */
        min_sold_30d?: number;
        /**
         * Maximum product sales during the last 30 days.
         * @minimum 0
         */
        max_sold_30d?: number;
        /** Whether to return only products with free shipping. */
        free_shipping?: boolean;
        /** Product field used to sort search results. */
        sort_field?: "daily_sold" | "gmv_30d" | "gmv_7d" | "price" | "rating" | "sold_30d" | "sold_7d";
        /** Direction used to sort search results. */
        sort_direction?: "asc" | "desc";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 10.
         * @minimum 1
         * @maximum 10
         */
        page_size?: number;
      };
      output: {
        /** Records returned by Chuhaijiang for this page. */
        items: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Chuhaijiang. */
        totalCount: number;
        /** Chuhaijiang request identifier used for support and tracing. */
        requestId: string;
        /** Credits consumed and remaining after the request. */
        usage?: {
          /** Credits consumed by this request. */
          creditsCost: number;
          /** Credits remaining after this request. */
          creditsBalance: number;
        };
      };
    };
  }
}
