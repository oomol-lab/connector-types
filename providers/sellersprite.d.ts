import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve current-month SellerSprite API usage for initialized purchased modules. */
    "sellersprite.get_api_usage": {
      input: Record<string, never>;
      output: {
        /** Raw current-month per-module usage payload returned by SellerSprite because the provider does not publish a stable nested schema. */
        usage: unknown;
      };
    };
    /** Retrieve SellerSprite product, listing, category, rating, seller, and variation details for an Amazon ASIN. */
    "sellersprite.get_asin_detail": {
      input: {
        /** Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Amazon ASIN to retrieve.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
      };
      output: {
        /** Amazon ASIN returned by SellerSprite. */
        asin: string;
        /** Amazon product URL. */
        asinUrl?: string | null;
        /** Listing date in epoch milliseconds. */
        availableDate?: number | null;
        /** SellerSprite badges associated with the product. */
        badge?: {
          /** Best Seller badge value. */
          bestSeller?: string | null;
          /** Amazon's Choice badge value. */
          amazonChoice?: string | null;
          /** New Release badge value. */
          newRelease?: string | null;
          /** Whether the product has A+ content. */
          ebc?: string | null;
          /** Whether the product has a video. */
          video?: string | null;
          [key: string]: unknown;
        } | null;
        /** Product brand. */
        brand?: string | null;
        /** Amazon brand URL. */
        brandUrl?: string | null;
        /** Amazon BSR category identifier. */
        bsrId?: string | null;
        /** Amazon BSR category label. */
        bsrLabel?: string | null;
        /** Amazon Best Sellers Rank. */
        bsrRank?: number | null;
        /** SellerSprite record creation time in epoch milliseconds. */
        createdTime?: number | null;
        /** Product dimensions text. */
        dimensions?: string | null;
        /** First rating date in epoch milliseconds. */
        firstRatingDate?: number | null;
        /** Product image URL. */
        imageUrl?: string | null;
        /** SellerSprite listing quality score. */
        lqs?: number | null;
        /** Amazon category node identifier. */
        nodeId?: number | string | null;
        /** Amazon category node path. */
        nodeIdPath?: string | null;
        /** Amazon category label path. */
        nodeLabelPath?: string | null;
        /** Localized Amazon category label path. */
        nodeLabelPathLocale?: string | null;
        /** Parent ASIN. */
        parent?: string | null;
        /** Current product price. */
        price?: number | null;
        /** Prime price, or -1 when unavailable. */
        primePrice?: number | null;
        /** Seller delivery fee, or -1 when unavailable. */
        deliveryPrice?: number | null;
        /** Current coupon text. */
        coupon?: string | null;
        /** Customer question count. */
        questions?: number | null;
        /** Average product rating. */
        rating?: number | null;
        /** Product rating count. */
        ratings?: number | null;
        /** Product review count. */
        reviews?: number | null;
        /** Variation rating count. */
        variantRatings?: number | null;
        /** Variation review count. */
        variantReviews?: number | null;
        /** Buy Box seller identifier. */
        sellerId?: string | null;
        /** Buy Box seller name. */
        sellerName?: string | null;
        /** Fulfillment method. */
        fulfillment?: string | null;
        /** Seller count. */
        sellers?: number | null;
        /** Variation attribute strings. */
        skuList?: Array<string> | null;
        /** Amazon marketplace code. */
        marketplace?: string | null;
        /** Amazon product title. */
        title?: string | null;
        /** Amazon feature bullets. */
        features?: Array<string> | null;
        /** JSON-formatted product overview text. */
        overviews?: string | null;
        /** SellerSprite update time in epoch milliseconds. */
        updatedTime?: number | null;
        /** Product variations returned by SellerSprite. */
        variationList?: Array<{
          /** Variation ASIN. */
          asin?: string | null;
          /** Variation attribute text. */
          attribute?: string | null;
          [key: string]: unknown;
        }> | null;
        /** Variation count. */
        variations?: number | null;
        /** Product weight text. */
        weight?: string | null;
        /** Large product image URL. */
        zoomImageUrl?: string | null;
        /** Amazon subcategory ranks. */
        subcategories?: Array<{
          /** Amazon subcategory code. */
          code?: string | null;
          /** Product rank in the subcategory. */
          rank?: number | null;
          /** Amazon subcategory label. */
          label?: string | null;
          [key: string]: unknown;
        }> | null;
        [key: string]: unknown;
      };
    };
    /** Query SellerSprite competitor products with sales, revenue, ranking, pricing, and seller estimates. */
    "sellersprite.lookup_competitors": {
      input: {
        /** Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Historical month in YYYYMM format.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * Brand name used to filter competitor products.
         * @minLength 1
         */
        brand?: string;
        /**
         * Seller name used to filter competitor products.
         * @minLength 1
         */
        sellerName?: string;
        /**
         * ASINs used to select competitor products.
         * @minItems 1
         * @maxItems 40
         */
        asins?: Array<string>;
        /**
         * Amazon category node path used to filter products.
         * @minLength 1
         */
        nodeIdPath?: string;
        /** Whether nodeIdPath is matched exactly instead of including descendant categories. */
        nodeIdPathEqual?: boolean;
        /**
         * Keyword used to filter competitor products.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Keyword match type: 1 for phrase, 2 for broad, or 3 for exact.
         * @minimum 1
         * @maximum 3
         */
        matchType?: number;
        /** Variation handling: N includes variation ASINs and Y excludes them. */
        variation?: "N" | "Y";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite sort settings. */
        order?: {
          /**
           * SellerSprite field name used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether results are sorted in descending order. */
          desc?: boolean;
        };
      };
      output: {
        /** Total number of result pages. */
        pages: number;
        /** Current result page. */
        page: number;
        /** Number of requested results per page. */
        size: number;
        /** Total number of matching results. */
        total: number;
        /** SellerSprite query duration in milliseconds. */
        took?: number | null;
        /** Sort settings echoed by SellerSprite. */
        order?: Record<string, unknown> | null;
        /** Products returned on this page. */
        items: Array<{
          /** Amazon ASIN. */
          asin?: string | null;
          /** Product brand. */
          brand?: string | null;
          /** Amazon brand URL. */
          brandUrl?: string | null;
          /** Product image URL. */
          imageUrl?: string | null;
          /** Amazon product title. */
          title?: string | null;
          /** Parent ASIN. */
          parent?: string | null;
          /** Amazon category node identifier. */
          nodeId?: number | string | null;
          /** Amazon category node path. */
          nodeIdPath?: string | null;
          /** Amazon category label path. */
          nodeLabelPath?: string | null;
          /** Amazon BSR category identifier. */
          bsrId?: string | null;
          /** Amazon Best Sellers Rank. */
          bsr?: number | null;
          /** BSR growth rate. */
          bsrCr?: number | null;
          /** BSR growth amount. */
          bsrCv?: number | null;
          /** Estimated monthly parent-product sales volume. */
          units?: number | null;
          /** Estimated monthly sales growth rate. */
          unitsGr?: number | null;
          /** Estimated recent child-ASIN sales volume. */
          amzUnit?: number | null;
          /** Estimated child-ASIN sales revenue. */
          amzSales?: number | null;
          /** Child-ASIN estimate update time in epoch milliseconds. */
          amzUnitDate?: number | null;
          /** Estimated monthly parent-product revenue. */
          revenue?: number | null;
          /** Current product price. */
          price?: number | null;
          /** Average product price. */
          averagePrice?: number | null;
          /** Prime price, or -1 when unavailable. */
          primePrice?: number | null;
          /** Estimated gross margin percentage. */
          profit?: number | null;
          /** Estimated FBA fee. */
          fba?: number | null;
          /** Product rating count. */
          ratings?: number | null;
          /** Estimated review rate. */
          ratingsRate?: number | null;
          /** Average product rating. */
          rating?: number | null;
          /** Monthly rating-count growth. */
          ratingsCv?: number | null;
          /** New ratings in the recent period. */
          ratingDelta?: number | null;
          /** SellerSprite listing quality score. */
          lqs?: number | null;
          /** Listing date in epoch milliseconds. */
          availableDate?: number | null;
          /** Fulfillment method. */
          fulfillment?: string | null;
          /** Variation count. */
          variations?: number | null;
          /** Seller count. */
          sellers?: number | null;
          /** Buy Box seller identifier. */
          sellerId?: string | null;
          /** Buy Box seller name. */
          sellerName?: string | null;
          /** Buy Box seller country code. */
          sellerNation?: string | null;
          /** Product weight text. */
          weight?: string | null;
          /** Product dimensions text. */
          dimension?: string | null;
          /** SellerSprite dimension type. */
          dimensionsType?: string | null;
          /** Package dimensions text. */
          pkgDimensions?: string | null;
          /** SellerSprite package dimension type. */
          pkgDimensionType?: string | null;
          /** Package weight text. */
          pkgWeight?: string | null;
          /** Variation attribute text. */
          sku?: string | null;
          /** Seller delivery fee, or -1 when unavailable. */
          deliveryPrice?: number | null;
          /** SellerSprite badges associated with the product. */
          badge?: {
            /** Best Seller badge value. */
            bestSeller?: string | null;
            /** Amazon's Choice badge value. */
            amazonChoice?: string | null;
            /** New Release badge value. */
            newRelease?: string | null;
            /** Whether the product has A+ content. */
            ebc?: string | null;
            /** Whether the product has a video. */
            video?: string | null;
            [key: string]: unknown;
          } | null;
          /** Amazon subcategory ranks. */
          subcategories?: Array<{
            /** Amazon subcategory code. */
            code?: string | null;
            /** Product rank in the subcategory. */
            rank?: number | null;
            /** Amazon subcategory label. */
            label?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Research Amazon products in SellerSprite using product, sales, revenue, ranking, review, category, and seller filters. */
    "sellersprite.research_products": {
      input: {
        /** Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Historical month in YYYYMM format.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * Keyword used to filter products.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Seller names to include.
         * @minLength 1
         */
        includeSellers?: string;
        /**
         * Seller names to exclude.
         * @minLength 1
         */
        excludeSellers?: string;
        /**
         * Keyword match type: 1 for phrase, 2 for broad, or 3 for exact.
         * @minimum 1
         * @maximum 3
         */
        matchType?: number;
        /**
         * Keywords to exclude.
         * @minLength 1
         */
        excludeKeywords?: string;
        /** Minimum product price. */
        minPrice?: number;
        /** Maximum product price. */
        maxPrice?: number;
        /** Minimum average rating. */
        minRating?: number;
        /** Maximum average rating. */
        maxRating?: number;
        /** Minimum rating count. */
        minRatings?: number;
        /** Maximum rating count. */
        maxRatings?: number;
        /** Minimum monthly rating-count growth. */
        minRatingsCv?: number;
        /** Maximum monthly rating-count growth. */
        maxRatingsCv?: number;
        /** Minimum seller count. */
        minSellers?: number;
        /** Maximum seller count. */
        maxSellers?: number;
        /** Minimum estimated gross margin percentage. */
        minProfit?: number;
        /** Maximum estimated gross margin percentage. */
        maxProfit?: number;
        /** Minimum BSR filter value. */
        minBsr?: number;
        /** Maximum BSR filter value. */
        maxBsr?: number;
        /** Minimum BSR growth amount. */
        minBsrCv?: number;
        /** Maximum BSR growth amount. */
        maxBsrCv?: number;
        /** Minimum BSR growth rate. */
        minBsrCr?: number;
        /** Maximum BSR growth rate. */
        maxBsrCr?: number;
        /** Minimum estimated monthly parent-product sales volume. */
        minUnits?: number;
        /** Maximum estimated monthly parent-product sales volume. */
        maxUnits?: number;
        /** Minimum estimated monthly child-ASIN sales volume. */
        minAmzUnit?: number;
        /** Maximum estimated monthly child-ASIN sales volume. */
        maxAmzUnit?: number;
        /** Minimum estimated monthly revenue. */
        minRevenue?: number;
        /** Maximum estimated monthly revenue. */
        maxRevenue?: number;
        /** Minimum estimated monthly revenue growth rate. */
        minRevenueCr?: number;
        /** Maximum estimated monthly revenue growth rate. */
        maxRevenueCr?: number;
        /** Minimum estimated monthly sales growth rate. */
        minUnitsCr?: number;
        /** Maximum estimated monthly sales growth rate. */
        maxUnitsCr?: number;
        /**
         * Weight unit used by minWeights and maxWeights.
         * @minLength 1
         */
        weightUnit?: string;
        /** Minimum product weight. */
        minWeights?: number;
        /** Maximum product weight. */
        maxWeights?: number;
        /** Minimum variation count. */
        minVariations?: number;
        /** Maximum variation count. */
        maxVariations?: number;
        /** Whether the filter is enabled. */
        filterSub?: "Y";
        /** Minimum subcategory BSR used when filterSub is Y. */
        minSubBsrRank?: number;
        /** Maximum subcategory BSR used when filterSub is Y. */
        maxSubBsrRank?: number;
        /**
         * Brand names to include.
         * @minLength 1
         */
        includeBrands?: string;
        /**
         * Brand names to exclude.
         * @minLength 1
         */
        excludeBrands?: string;
        /**
         * Amazon category node paths used to filter products.
         * @minItems 1
         */
        nodeIdPaths?: Array<string>;
        /** Whether category paths are matched exactly instead of including descendants. */
        nodeIdPathEqual?: boolean;
        /** Listing age bucket in months. */
        availableMonth?: 1 | 3 | 6 | 12 | 24;
        /**
         * Comma-separated SellerSprite product dimension type codes.
         * @minLength 1
         */
        dimensionType?: string;
        /** Minimum estimated FBA fee. */
        minFba?: number;
        /** Maximum estimated FBA fee. */
        maxFba?: number;
        /** Minimum SellerSprite listing quality score. */
        minLqs?: number;
        /** Maximum SellerSprite listing quality score. */
        maxLqs?: number;
        /**
         * Comma-separated seller country codes.
         * @minLength 1
         */
        sellerNation?: string;
        /** Whether the filter is enabled. */
        badgeBS?: "Y";
        /** Whether the filter is enabled. */
        badgeAC?: "Y";
        /** Whether the filter is enabled. */
        badgeNR?: "Y";
        /**
         * Comma-separated fulfillment methods such as AMZ, FBA, or FBM.
         * @minLength 1
         */
        fulfillment?: string;
        /** Variation handling: N includes variation ASINs and Y excludes them. */
        variation?: "N" | "Y";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite sort settings. */
        order?: {
          /**
           * SellerSprite field name used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether results are sorted in descending order. */
          desc?: boolean;
        };
      };
      output: {
        /** Total number of result pages. */
        pages: number;
        /** Current result page. */
        page: number;
        /** Number of requested results per page. */
        size: number;
        /** Total number of matching results. */
        total: number;
        /** SellerSprite query duration in milliseconds. */
        took?: number | null;
        /** Sort settings echoed by SellerSprite. */
        order?: Record<string, unknown> | null;
        /** Products returned on this page. */
        items: Array<{
          /** Amazon ASIN. */
          asin?: string | null;
          /** Product brand. */
          brand?: string | null;
          /** Amazon brand URL. */
          brandUrl?: string | null;
          /** Product image URL. */
          imageUrl?: string | null;
          /** Amazon product title. */
          title?: string | null;
          /** Parent ASIN. */
          parent?: string | null;
          /** Amazon category node identifier. */
          nodeId?: number | string | null;
          /** Amazon category node path. */
          nodeIdPath?: string | null;
          /** Amazon category label path. */
          nodeLabelPath?: string | null;
          /** Amazon BSR category identifier. */
          bsrId?: string | null;
          /** Amazon Best Sellers Rank. */
          bsr?: number | null;
          /** BSR growth rate. */
          bsrCr?: number | null;
          /** BSR growth amount. */
          bsrCv?: number | null;
          /** Estimated monthly parent-product sales volume. */
          units?: number | null;
          /** Estimated monthly sales growth rate. */
          unitsGr?: number | null;
          /** Estimated recent child-ASIN sales volume. */
          amzUnit?: number | null;
          /** Estimated child-ASIN sales revenue. */
          amzSales?: number | null;
          /** Child-ASIN estimate update time in epoch milliseconds. */
          amzUnitDate?: number | null;
          /** Estimated monthly parent-product revenue. */
          revenue?: number | null;
          /** Current product price. */
          price?: number | null;
          /** Average product price. */
          averagePrice?: number | null;
          /** Prime price, or -1 when unavailable. */
          primePrice?: number | null;
          /** Estimated gross margin percentage. */
          profit?: number | null;
          /** Estimated FBA fee. */
          fba?: number | null;
          /** Product rating count. */
          ratings?: number | null;
          /** Estimated review rate. */
          ratingsRate?: number | null;
          /** Average product rating. */
          rating?: number | null;
          /** Monthly rating-count growth. */
          ratingsCv?: number | null;
          /** New ratings in the recent period. */
          ratingDelta?: number | null;
          /** SellerSprite listing quality score. */
          lqs?: number | null;
          /** Listing date in epoch milliseconds. */
          availableDate?: number | null;
          /** Fulfillment method. */
          fulfillment?: string | null;
          /** Variation count. */
          variations?: number | null;
          /** Seller count. */
          sellers?: number | null;
          /** Buy Box seller identifier. */
          sellerId?: string | null;
          /** Buy Box seller name. */
          sellerName?: string | null;
          /** Buy Box seller country code. */
          sellerNation?: string | null;
          /** Product weight text. */
          weight?: string | null;
          /** Product dimensions text. */
          dimension?: string | null;
          /** SellerSprite dimension type. */
          dimensionsType?: string | null;
          /** Package dimensions text. */
          pkgDimensions?: string | null;
          /** SellerSprite package dimension type. */
          pkgDimensionType?: string | null;
          /** Package weight text. */
          pkgWeight?: string | null;
          /** Variation attribute text. */
          sku?: string | null;
          /** Seller delivery fee, or -1 when unavailable. */
          deliveryPrice?: number | null;
          /** SellerSprite badges associated with the product. */
          badge?: {
            /** Best Seller badge value. */
            bestSeller?: string | null;
            /** Amazon's Choice badge value. */
            amazonChoice?: string | null;
            /** New Release badge value. */
            newRelease?: string | null;
            /** Whether the product has A+ content. */
            ebc?: string | null;
            /** Whether the product has a video. */
            video?: string | null;
            [key: string]: unknown;
          } | null;
          /** Amazon subcategory ranks. */
          subcategories?: Array<{
            /** Amazon subcategory code. */
            code?: string | null;
            /** Product rank in the subcategory. */
            rank?: number | null;
            /** Amazon subcategory label. */
            label?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Find Amazon search traffic keywords, natural ranks, advertising ranks, and traffic estimates for an ASIN with SellerSprite. */
    "sellersprite.reverse_asin_keywords": {
      input: {
        /** Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Amazon ASIN to reverse-search.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Keyword text used to filter the reverse-ASIN results.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Historical month in YYYYMM format; omit for the latest 30 days.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * SellerSprite exposure-position types used to filter results.
         * @minItems 1
         */
        badges?: Array<string>;
        /**
         * SellerSprite traffic-share classifications used to filter results.
         * @minItems 1
         */
        trafficKeywordTypes?: Array<string>;
        /**
         * SellerSprite conversion classifications used to filter results.
         * @minItems 1
         */
        conversionKeywordTypes?: Array<string>;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite sort settings. */
        order?: {
          /**
           * SellerSprite field name used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether results are sorted in descending order. */
          desc?: boolean;
        };
      };
      output: {
        /** Amazon marketplace code. */
        marketplace: string;
        /** Amazon ASIN. */
        asin: string;
        /** Total number of matching traffic keywords. */
        total: number;
        /** Traffic keywords returned on this page. */
        items: Array<{
          /** Traffic keyword. */
          keyword?: string | null;
          /** Chinese keyword translation. */
          keywordCn?: string | null;
          /** Estimated monthly Amazon search volume. */
          searches?: number | null;
          /** Number of products in the keyword results. */
          products?: number | null;
          /** Estimated monthly purchase count. */
          purchases?: number | null;
          /** Estimated purchase rate. */
          purchaseRate?: number | null;
          /** Suggested phrase-match PPC bid. */
          bid?: number | null;
          /** Maximum suggested PPC bid. */
          bidMax?: number | null;
          /** Minimum suggested PPC bid. */
          bidMin?: number | null;
          /** Search exposure position types. */
          badges?: Array<string> | null;
          /** Natural or advertising search position. */
          rankPosition?: {
            /** Search results page. */
            page?: number | null;
            /** Number of results on the search page. */
            pageSize?: number | null;
            /** Position within the search page. */
            index?: number | null;
            /** Overall position in the search results. */
            position?: number | null;
            /** Ranking update time in epoch milliseconds. */
            updatedTime?: number | null;
            [key: string]: unknown;
          } | null;
          /** Natural or advertising search position. */
          adPosition?: {
            /** Search results page. */
            page?: number | null;
            /** Number of results on the search page. */
            pageSize?: number | null;
            /** Position within the search page. */
            index?: number | null;
            /** Overall position in the search results. */
            position?: number | null;
            /** Ranking update time in epoch milliseconds. */
            updatedTime?: number | null;
            [key: string]: unknown;
          } | null;
          /** Amazon ABA search frequency rank. */
          searchesRank?: number | null;
          /** ABA rank period start in epoch milliseconds. */
          searchesRankTimeFrom?: number | null;
          /** ABA rank period end in epoch milliseconds. */
          searchesRankTimeTo?: number | null;
          /** Advertising competitors seen in the last day. */
          latest1daysAds?: number | null;
          /** Advertising competitors seen in the last seven days. */
          latest7daysAds?: number | null;
          /** Advertising competitors seen in the last thirty days. */
          latest30daysAds?: number | null;
          /** Estimated search-volume-to-product ratio. */
          supplyDemandRatio?: number | null;
          /** Estimated share of product exposure from the keyword. */
          trafficPercentage?: number | null;
          /** SellerSprite traffic-share classification. */
          trafficKeywordType?: string | null;
          /** SellerSprite conversion classification. */
          conversionKeywordType?: string | null;
          /** Estimated weekly product exposure from the keyword. */
          calculatedWeeklySearches?: number | null;
          /** Total keyword search-result impressions. */
          impressions?: number | null;
          /** Total keyword search-result clicks. */
          clicks?: number | null;
          /** Natural traffic share. */
          naturalRatio?: number | null;
          /** Advertising traffic share. */
          adRatio?: number | null;
          /** Keyword update time in epoch milliseconds. */
          updatedTime?: number | null;
          [key: string]: unknown;
        }>;
        /** High-frequency word statistics. */
        stats?: Array<{
          /** High-frequency word. */
          keywords?: string | null;
          /** Number of matching keywords. */
          total?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
