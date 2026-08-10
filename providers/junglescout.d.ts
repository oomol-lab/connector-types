import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve weekly historical exact-search-volume estimates for one Amazon keyword. */
    "junglescout.get_historical_search_volume": {
      input: {
        /** Amazon marketplace code supported by Jungle Scout. */
        marketplace: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
        /**
         * Keyword to retrieve historical search volume for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Start date in YYYY-MM-DD format.
         * @format date
         */
        start_date: string;
        /**
         * End date in YYYY-MM-DD format.
         * @format date
         */
        end_date: string;
      };
      output: {
        /** Resources returned by Jungle Scout. */
        data: Array<{
          /** Jungle Scout JSON:API resource identifier. */
          id: string;
          /** Jungle Scout JSON:API resource type. */
          type: string;
          /** Official Jungle Scout historical search-volume attributes. */
          attributes: {
            /**
             * Start date of the estimate period.
             * @format date
             */
            estimate_start_date?: string | null;
            /**
             * End date of the estimate period.
             * @format date
             */
            estimate_end_date?: string | null;
            /** Exact search volume estimated for the period. */
            estimated_exact_search_volume?: number;
            [key: string]: unknown;
          };
        }>;
        /** Pagination metadata returned by Jungle Scout. */
        meta?: {
          /** Total number of matching items. */
          total_items?: number;
          [key: string]: unknown;
        };
        /** JSON:API pagination links returned by Jungle Scout. */
        links?: {
          /** URL for the current page. */
          self?: string;
          /** URL for the next page, or null when no page remains. */
          next?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve keywords that rank for up to 10 Amazon ASINs, including volume, trend, bid, relevance, and rank data. */
    "junglescout.get_keywords_by_asin": {
      input: {
        /** Amazon marketplace code supported by Jungle Scout. */
        marketplace: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
        /**
         * Amazon ASINs to compare, with the first ASIN used as primary.
         * @minItems 1
         * @maxItems 10
         */
        asins: Array<string>;
        /** Whether to include ASIN variants; Jungle Scout defaults to true. */
        include_variants?: boolean;
        /** Keyword sort field; a leading minus sign selects descending order. */
        sort?: "name" | "-name" | "dominant_category" | "-dominant_category" | "monthly_trend" | "-monthly_trend" | "quarterly_trend" | "-quarterly_trend" | "monthly_search_volume_exact" | "-monthly_search_volume_exact" | "monthly_search_volume_broad" | "-monthly_search_volume_broad" | "recommended_promotions" | "-recommended_promotions" | "sp_brand_ad_bid" | "-sp_brand_ad_bid" | "ppc_bid_broad" | "-ppc_bid_broad" | "ppc_bid_exact" | "-ppc_bid_exact" | "ease_of_ranking_score" | "-ease_of_ranking_score" | "relevancy_score" | "-relevancy_score" | "organic_product_count" | "-organic_product_count";
        /**
         * Number of keyword results per page; defaults to 50.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Pagination cursor returned by Jungle Scout.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Minimum exact-match monthly search volume.
         * @minimum 0
         */
        min_monthly_search_volume_exact?: number;
        /**
         * Maximum exact-match monthly search volume.
         * @minimum 0
         */
        max_monthly_search_volume_exact?: number;
        /**
         * Minimum broad-match monthly search volume.
         * @minimum 0
         */
        min_monthly_search_volume_broad?: number;
        /**
         * Maximum broad-match monthly search volume.
         * @minimum 0
         */
        max_monthly_search_volume_broad?: number;
        /**
         * Minimum keyword word count.
         * @minimum 0
         */
        min_word_count?: number;
        /**
         * Maximum keyword word count.
         * @minimum 0
         */
        max_word_count?: number;
        /**
         * Minimum organic product count.
         * @minimum 0
         */
        min_organic_product_count?: number;
        /**
         * Maximum organic product count.
         * @minimum 0
         */
        max_organic_product_count?: number;
      };
      output: {
        /** Resources returned by Jungle Scout. */
        data: Array<{
          /** Jungle Scout JSON:API resource identifier. */
          id: string;
          /** Jungle Scout JSON:API resource type. */
          type: string;
          /** Official Jungle Scout keyword result attributes; additional documented fields are preserved. */
          attributes: {
            /** Amazon marketplace code. */
            country?: string | null;
            /** Keyword or phrase. */
            name?: string | null;
            /** Primary ASIN used for a reverse lookup. */
            primary_asin?: string | null;
            /** Thirty-day keyword performance trend. */
            monthly_trend?: number | null;
            /** Ninety-day keyword performance trend. */
            quarterly_trend?: number | null;
            /** Exact-match searches in the past 30 days. */
            monthly_search_volume_exact?: number | null;
            /** Broad-match searches in the past 30 days. */
            monthly_search_volume_broad?: number | null;
            /** Dominant Amazon category among top results. */
            dominant_category?: string | null;
            /** Organic product count. */
            organic_product_count?: number | null;
            /** Sponsored product count. */
            sponsored_product_count?: number | null;
            /** Keyword relevancy score. */
            relevancy_score?: number | null;
            [key: string]: unknown;
          };
        }>;
        /** Pagination metadata returned by Jungle Scout. */
        meta?: {
          /** Total number of matching items. */
          total_items?: number;
          [key: string]: unknown;
        };
        /** JSON:API pagination links returned by Jungle Scout. */
        links?: {
          /** URL for the current page. */
          self?: string;
          /** URL for the next page, or null when no page remains. */
          next?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve related Amazon keywords from a search term with volume, trend, bid, relevance, and competition data. */
    "junglescout.get_keywords_by_keyword": {
      input: {
        /** Amazon marketplace code supported by Jungle Scout. */
        marketplace: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
        /**
         * Keyword or phrase to search for.
         * @minLength 1
         */
        search_terms: string;
        /**
         * Dominant Amazon categories to include; omit to search all categories.
         * @minItems 1
         */
        categories?: Array<string>;
        /** Keyword sort field; a leading minus sign selects descending order. */
        sort?: "name" | "-name" | "dominant_category" | "-dominant_category" | "monthly_trend" | "-monthly_trend" | "quarterly_trend" | "-quarterly_trend" | "monthly_search_volume_exact" | "-monthly_search_volume_exact" | "monthly_search_volume_broad" | "-monthly_search_volume_broad" | "recommended_promotions" | "-recommended_promotions" | "sp_brand_ad_bid" | "-sp_brand_ad_bid" | "ppc_bid_broad" | "-ppc_bid_broad" | "ppc_bid_exact" | "-ppc_bid_exact" | "ease_of_ranking_score" | "-ease_of_ranking_score" | "relevancy_score" | "-relevancy_score" | "organic_product_count" | "-organic_product_count";
        /**
         * Number of keyword results per page; defaults to 50.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Pagination cursor returned by Jungle Scout.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Minimum exact-match monthly search volume.
         * @minimum 0
         */
        min_monthly_search_volume_exact?: number;
        /**
         * Maximum exact-match monthly search volume.
         * @minimum 0
         */
        max_monthly_search_volume_exact?: number;
        /**
         * Minimum broad-match monthly search volume.
         * @minimum 0
         */
        min_monthly_search_volume_broad?: number;
        /**
         * Maximum broad-match monthly search volume.
         * @minimum 0
         */
        max_monthly_search_volume_broad?: number;
        /**
         * Minimum keyword word count.
         * @minimum 0
         */
        min_word_count?: number;
        /**
         * Maximum keyword word count.
         * @minimum 0
         */
        max_word_count?: number;
        /**
         * Minimum organic product count.
         * @minimum 0
         */
        min_organic_product_count?: number;
        /**
         * Maximum organic product count.
         * @minimum 0
         */
        max_organic_product_count?: number;
      };
      output: {
        /** Resources returned by Jungle Scout. */
        data: Array<{
          /** Jungle Scout JSON:API resource identifier. */
          id: string;
          /** Jungle Scout JSON:API resource type. */
          type: string;
          /** Official Jungle Scout keyword result attributes; additional documented fields are preserved. */
          attributes: {
            /** Amazon marketplace code. */
            country?: string | null;
            /** Keyword or phrase. */
            name?: string | null;
            /** Primary ASIN used for a reverse lookup. */
            primary_asin?: string | null;
            /** Thirty-day keyword performance trend. */
            monthly_trend?: number | null;
            /** Ninety-day keyword performance trend. */
            quarterly_trend?: number | null;
            /** Exact-match searches in the past 30 days. */
            monthly_search_volume_exact?: number | null;
            /** Broad-match searches in the past 30 days. */
            monthly_search_volume_broad?: number | null;
            /** Dominant Amazon category among top results. */
            dominant_category?: string | null;
            /** Organic product count. */
            organic_product_count?: number | null;
            /** Sponsored product count. */
            sponsored_product_count?: number | null;
            /** Keyword relevancy score. */
            relevancy_score?: number | null;
            [key: string]: unknown;
          };
        }>;
        /** Pagination metadata returned by Jungle Scout. */
        meta?: {
          /** Total number of matching items. */
          total_items?: number;
          [key: string]: unknown;
        };
        /** JSON:API pagination links returned by Jungle Scout. */
        links?: {
          /** URL for the current page. */
          self?: string;
          /** URL for the next page, or null when no page remains. */
          next?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve daily estimated Amazon unit sales for one ASIN over a date range. */
    "junglescout.get_sales_estimates": {
      input: {
        /** Amazon marketplace code supported by Jungle Scout. */
        marketplace: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
        /**
         * A 10-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Start date in YYYY-MM-DD format.
         * @format date
         */
        start_date: string;
        /**
         * End date in YYYY-MM-DD format and before the current date.
         * @format date
         */
        end_date: string;
      };
      output: {
        /** Resources returned by Jungle Scout. */
        data: Array<{
          /** Jungle Scout JSON:API resource identifier. */
          id: string;
          /** Jungle Scout JSON:API resource type. */
          type: string;
          /** Official Jungle Scout sales estimate attributes. */
          attributes: {
            /** Parent ASIN, or null for a standalone product. */
            parent_asin?: string | null;
            /** Whether the queried ASIN is a parent. */
            is_parent?: boolean | null;
            /** Whether the queried ASIN is a variant. */
            is_variant?: boolean | null;
            /** Whether the queried ASIN is standalone. */
            is_standalone?: boolean | null;
            /** Daily sales estimates. */
            data?: Array<{
              /**
               * Estimate date.
               * @format date
               */
              date?: string;
              /** Estimated units sold on this date. */
              estimated_units_sold?: number;
              /** Last known price for this date. */
              last_known_price?: number | null;
              [key: string]: unknown;
            }>;
            /** Variant ASINs when the queried ASIN is a parent. */
            variants?: Array<string> | null;
            [key: string]: unknown;
          };
        }>;
        /** Pagination metadata returned by Jungle Scout. */
        meta?: {
          /** Total number of matching items. */
          total_items?: number;
          [key: string]: unknown;
        };
        /** JSON:API pagination links returned by Jungle Scout. */
        links?: {
          /** URL for the current page. */
          self?: string;
          /** URL for the next page, or null when no page remains. */
          next?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Amazon keyword share of voice by brand, including organic, sponsored, and top-ASIN conversion data. */
    "junglescout.get_share_of_voice": {
      input: {
        /** Amazon marketplace code supported by Jungle Scout. */
        marketplace: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
        /**
         * Keyword to analyze.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Share-of-voice data for one keyword. */
        data: {
          /** Jungle Scout JSON:API resource identifier. */
          id: string;
          /** Jungle Scout JSON:API resource type. */
          type: string;
          /** Official Jungle Scout share-of-voice attributes; brand and top-ASIN details are preserved. */
          attributes: {
            /** Exact-match search volume over 30 days. */
            estimated_30_day_search_volume?: number;
            /** Median suggested exact-match bid. */
            exact_suggested_bid_median?: number | null;
            /** Number of ASINs included in the result. */
            product_count?: number;
            /**
             * Timestamp when Jungle Scout refreshed the data.
             * @format date-time
             */
            updated_at?: string;
            /** Brand share-of-voice results. */
            brands?: Array<{
              /** Brand name. */
              brand?: string | null;
              /** Organic and sponsored products for the brand. */
              combined_products?: number | null;
              /** Weighted combined share of voice. */
              combined_weighted_sov?: number | null;
              /** Basic combined share of voice. */
              combined_basic_sov?: number | null;
              [key: string]: unknown;
            }>;
            /** Top ASIN click and conversion results. */
            top_asins?: Array<{
              /** Amazon ASIN. */
              asin?: string | null;
              /** Product name. */
              name?: string | null;
              /** Product brand. */
              brand?: string | null;
              /** Customer clicks in the modeled period. */
              clicks?: number | null;
              /** Purchases in the modeled period. */
              conversions?: number | null;
              /** Conversions divided by clicks. */
              conversion_rate?: number | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** Search the Jungle Scout Amazon product database by category, keywords, price, demand, revenue, rating, seller, and listing-quality filters. */
    "junglescout.search_products": {
      input: {
        /** Amazon marketplace code supported by Jungle Scout. */
        marketplace: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
        /** Product sort field; a leading minus sign selects descending order. */
        sort?: "name" | "-name" | "category" | "-category" | "revenue" | "-revenue" | "sales" | "-sales" | "price" | "-price" | "rank" | "-rank" | "reviews" | "-reviews" | "lqs" | "-lqs" | "sellers" | "-sellers";
        /** Whether to collapse product results so only parent ASINs are returned. */
        collapse_by_parent?: boolean;
        /**
         * Number of products per page; defaults to 50.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Pagination cursor returned by Jungle Scout.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Product size tiers to include.
         * @minItems 1
         */
        product_tiers?: Array<"oversize" | "standard">;
        /**
         * Seller fulfillment types to include.
         * @minItems 1
         */
        seller_types?: Array<"amz" | "fba" | "fbm">;
        /**
         * Amazon categories to include.
         * @minItems 1
         */
        categories?: Array<string>;
        /**
         * Title keywords or ASINs to include.
         * @minItems 1
         * @maxItems 100
         */
        include_keywords?: Array<string>;
        /**
         * Title keywords or ASINs to exclude.
         * @minItems 1
         * @maxItems 100
         */
        exclude_keywords?: Array<string>;
        /** Whether to exclude top brands. */
        exclude_top_brands?: boolean;
        /** Whether to exclude unavailable products. */
        exclude_unavailable_products?: boolean;
        /** Minimum product price. */
        min_price?: number;
        /** Maximum product price. */
        max_price?: number;
        /** Minimum product price less FBA fees. */
        min_net?: number;
        /** Maximum product price less FBA fees. */
        max_net?: number;
        /** Minimum best-seller rank. */
        min_rank?: number;
        /** Maximum best-seller rank. */
        max_rank?: number;
        /** Minimum estimated monthly sales. */
        min_sales?: number;
        /** Maximum estimated monthly sales. */
        max_sales?: number;
        /** Minimum estimated monthly revenue. */
        min_revenue?: number;
        /** Maximum estimated monthly revenue. */
        max_revenue?: number;
        /** Minimum review count. */
        min_reviews?: number;
        /** Maximum review count. */
        max_reviews?: number;
        /**
         * Minimum star rating.
         * @minimum 1
         * @maximum 5
         */
        min_rating?: number;
        /**
         * Maximum star rating.
         * @minimum 1
         * @maximum 5
         */
        max_rating?: number;
        /** Minimum product weight in pounds. */
        min_weight?: number;
        /** Maximum product weight in pounds. */
        max_weight?: number;
        /** Minimum seller count. */
        min_sellers?: number;
        /** Maximum seller count. */
        max_sellers?: number;
        /**
         * Minimum listing quality score.
         * @minimum 1
         * @maximum 10
         */
        min_lqs?: number;
        /**
         * Maximum listing quality score.
         * @minimum 1
         * @maximum 10
         */
        max_lqs?: number;
        /**
         * Earliest product update date.
         * @format date
         */
        min_updated_at?: string;
        /**
         * Latest product update date.
         * @format date
         */
        max_updated_at?: string;
      };
      output: {
        /** Resources returned by Jungle Scout. */
        data: Array<{
          /** Jungle Scout JSON:API resource identifier. */
          id: string;
          /** Jungle Scout JSON:API resource type. */
          type: string;
          /** Official Jungle Scout product database attributes; additional documented fields are preserved. */
          attributes: {
            /** Last known Amazon listing title. */
            title?: string | null;
            /** Last known product price. */
            price?: number | null;
            /** Last known review count. */
            reviews?: number | null;
            /** Main Amazon category. */
            category?: string | null;
            /**
             * Amazon product rating.
             * @minimum 1
             * @maximum 5
             */
            rating?: number | null;
            /** Main Amazon product image URL. */
            image_url?: string | null;
            /** Parent ASIN, or null for a standalone product. */
            parent_asin?: string | null;
            /** Product brand. */
            brand?: string | null;
            /** Product rank. */
            product_rank?: number | null;
            /** Estimated revenue over the past 30 days. */
            approximate_30_day_revenue?: number | null;
            /** Estimated units sold over the past 30 days. */
            approximate_30_day_units_sold?: number | null;
            /** Whether the product is currently available. */
            is_available?: boolean;
            /** Whether the product is a parent ASIN. */
            is_parent?: boolean | null;
            /** Whether the product is a variant ASIN. */
            is_variant?: boolean | null;
            /** Whether the product is a standalone ASIN. */
            is_standalone?: boolean | null;
            /** Timestamp when Jungle Scout last updated the product. */
            updated_at?: string | null;
            [key: string]: unknown;
          };
        }>;
        /** Pagination metadata returned by Jungle Scout. */
        meta?: {
          /** Total number of matching items. */
          total_items?: number;
          [key: string]: unknown;
        };
        /** JSON:API pagination links returned by Jungle Scout. */
        links?: {
          /** URL for the current page. */
          self?: string;
          /** URL for the next page, or null when no page remains. */
          next?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
