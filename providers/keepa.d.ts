import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find recently changed Amazon products with Keepa deal filters and bounded pagination. */
    "keepa.find_deals": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Keepa price or rank type whose change defines the deal. */
        priceType: "AMAZON" | "NEW" | "USED" | "SALES" | "COLLECTIBLE" | "REFURBISHED" | "NEW_FBM_SHIPPING" | "LIGHTNING_DEAL" | "WAREHOUSE" | "NEW_FBA" | "BUY_BOX_SHIPPING" | "USED_NEW_SHIPPING" | "USED_VERY_GOOD_SHIPPING" | "USED_GOOD_SHIPPING" | "USED_ACCEPTABLE_SHIPPING" | "REFURBISHED_SHIPPING" | "BUY_BOX_USED_SHIPPING" | "PRIME_EXCL";
        /**
         * Zero-based deal result page; each page contains at most 150 deals.
         * @minimum 0
         */
        page?: number;
        /**
         * Change interval: 0 for one day, 1 for one week, 2 for one month, or 3 for 90 days.
         * @minimum 0
         * @maximum 3
         */
        dateRange?: number;
        /**
         * Amazon category node IDs to include.
         * @minItems 1
         */
        includeCategories?: Array<number>;
        /**
         * Amazon category node IDs to exclude.
         * @minItems 1
         */
        excludeCategories?: Array<number>;
        /**
         * Inclusive two-value range.
         * @minItems 2
         * @maxItems 2
         */
        currentRange?: [number, number];
        /**
         * Inclusive two-value range.
         * @minItems 2
         * @maxItems 2
         */
        deltaRange?: [number, number];
        /**
         * Inclusive two-value range.
         * @minItems 2
         * @maxItems 2
         */
        deltaPercentRange?: [number, number];
        /**
         * Inclusive two-value range.
         * @minItems 2
         * @maxItems 2
         */
        salesRankRange?: [number, number];
        /**
         * Inclusive two-value range.
         * @minItems 2
         * @maxItems 2
         */
        deltaLastRange?: [number, number];
        /**
         * Case-insensitive title keywords that must all appear in the product title.
         * @minLength 1
         */
        titleSearch?: string;
        /**
         * Minimum product rating multiplied by 10.
         * @minimum 0
         * @maximum 50
         */
        minimumRating?: number;
        /** Deal result sorting rule. */
        sortBy?: "newest" | "absolute_delta" | "sales_rank" | "percentage_delta";
        /** Whether to invert Keepa's default sort direction; newest cannot be inverted. */
        invertSort?: boolean;
        /** Whether the selected price must be the lowest value since tracking began. */
        isLowestEver?: boolean;
        /** Whether the selected price must be the lowest value in the past 90 days. */
        isLowest90Days?: boolean;
        /** Whether the selected price must be the lowest of all New offers. */
        isLowestOffer?: boolean;
        /** Whether to include only products that returned to stock in the past 24 hours. */
        isBackInStock?: boolean;
        /** Whether to include only products that went out of stock in the past 24 hours. */
        isOutOfStock?: boolean;
        /** Whether to exclude products without reviews. */
        hasReviews?: boolean;
        /** Whether to include only Prime Exclusive products. */
        isPrimeExclusive?: boolean;
        /** Whether products must have an offer sold and fulfilled by Amazon. */
        mustHaveAmazonOffer?: boolean;
        /** Whether products must not have an offer sold and fulfilled by Amazon. */
        mustNotHaveAmazonOffer?: boolean;
        /** Whether the selected value must be the highest since tracking began. */
        isHighest?: boolean;
        /** Return one randomly chosen variation per matching family. */
        singleVariation?: boolean;
        /** Include only products whose price rose in the selected interval. */
        isRisers?: boolean;
        /** Exclude adult items when true. */
        filterErotic?: boolean;
        /** Amazon Warehouse condition codes. */
        warehouseConditions?: Array<number>;
        /** Values for the official material deal attribute filter. */
        material?: Array<string>;
        /** Values for the official type deal attribute filter. */
        type?: Array<string>;
        /** Values for the official manufacturer deal attribute filter. */
        manufacturer?: Array<string>;
        /** Values for the official brand deal attribute filter. */
        brand?: Array<string>;
        /** Values for the official model deal attribute filter. */
        model?: Array<string>;
        /** Values for the official color deal attribute filter. */
        color?: Array<string>;
        /** Values for the official size deal attribute filter. */
        size?: Array<string>;
        /** Values for the official unitType deal attribute filter. */
        unitType?: Array<string>;
        /** Values for the official scent deal attribute filter. */
        scent?: Array<string>;
        /** Values for the official itemForm deal attribute filter. */
        itemForm?: Array<string>;
        /** Values for the official pattern deal attribute filter. */
        pattern?: Array<string>;
        /** Values for the official style deal attribute filter. */
        style?: Array<string>;
        /** Values for the official itemTypeKeyword deal attribute filter. */
        itemTypeKeyword?: Array<string>;
        /** Values for the official targetAudienceKeyword deal attribute filter. */
        targetAudienceKeyword?: Array<string>;
        /** Values for the official edition deal attribute filter. */
        edition?: Array<string>;
        /** Values for the official format deal attribute filter. */
        format?: Array<string>;
        /** Values for the official author deal attribute filter. */
        author?: Array<string>;
        /** Values for the official binding deal attribute filter. */
        binding?: Array<string>;
        /** Values for the official languages deal attribute filter. */
        languages?: Array<string>;
        /** Values for the official brandStoreName deal attribute filter. */
        brandStoreName?: Array<string>;
        /** Values for the official brandStoreUrlName deal attribute filter. */
        brandStoreUrlName?: Array<string>;
        /** Values for the official websiteDisplayGroup deal attribute filter. */
        websiteDisplayGroup?: Array<string>;
        /** Values for the official websiteDisplayGroupName deal attribute filter. */
        websiteDisplayGroupName?: Array<string>;
        /** Values for the official salesRankDisplayGroup deal attribute filter. */
        salesRankDisplayGroup?: Array<string>;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Deal records returned by Keepa. */
        deals: Array<{
          /** Amazon ASIN. */
          asin?: string | null;
          /** Amazon product title. */
          title?: string | null;
          [key: string]: unknown;
        }>;
        /** Root category IDs represented in the results. */
        categoryIds: Array<number>;
        /** Root category names represented in the results. */
        categoryNames: Array<string>;
        /** Deal counts aligned with categoryIds and categoryNames. */
        categoryCount: Array<number>;
        /** The complete Keepa deals response object. */
        raw: Record<string, unknown>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Find Amazon ASINs with Keepa Product Finder filters using official ProductFinderRequest field names. */
    "keepa.find_products": {
      input: {
        /** Amazon marketplace code using Keepa's official AmazonLocale names. */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX" | "BR";
        /** Official Keepa ProductFinderRequest fields. Unknown official fields are preserved for forward compatibility. */
        filters: {
          /**
           * Case-insensitive product title search text.
           * @minLength 1
           */
          title?: string;
          /**
           * Brands to include.
           * @minItems 1
           */
          brand?: Array<string>;
          /**
           * Manufacturers to include.
           * @minItems 1
           */
          manufacturer?: Array<string>;
          /**
           * Amazon category node IDs to include.
           * @minItems 1
           */
          categories_include?: Array<number>;
          /**
           * Amazon category node IDs to exclude.
           * @minItems 1
           */
          categories_exclude?: Array<number>;
          /**
           * Buy Box seller IDs to include.
           * @minItems 1
           */
          buyBoxSellerId?: Array<string>;
          /** Minimum current Amazon price in the marketplace's smallest currency unit. */
          current_AMAZON_gte?: number;
          /** Maximum current Amazon price in the marketplace's smallest currency unit. */
          current_AMAZON_lte?: number;
          /** Minimum current Marketplace New price in the marketplace's smallest currency unit. */
          current_NEW_gte?: number;
          /** Maximum current Marketplace New price in the marketplace's smallest currency unit. */
          current_NEW_lte?: number;
          /** Minimum current New Buy Box price including shipping in the marketplace's smallest currency unit. */
          current_BUY_BOX_SHIPPING_gte?: number;
          /** Maximum current New Buy Box price including shipping in the marketplace's smallest currency unit. */
          current_BUY_BOX_SHIPPING_lte?: number;
          /** Minimum current sales rank. */
          current_SALES_gte?: number;
          /** Maximum current sales rank. */
          current_SALES_lte?: number;
          /**
           * Minimum product rating multiplied by 10.
           * @minimum 0
           * @maximum 50
           */
          current_RATING_gte?: number;
          /**
           * Maximum product rating multiplied by 10.
           * @minimum 0
           * @maximum 50
           */
          current_RATING_lte?: number;
          /**
           * Minimum current review count.
           * @minimum 0
           */
          current_COUNT_REVIEWS_gte?: number;
          /**
           * Maximum current review count.
           * @minimum 0
           */
          current_COUNT_REVIEWS_lte?: number;
          /**
           * Minimum estimated monthly sold count.
           * @minimum 0
           */
          monthlySold_gte?: number;
          /**
           * Maximum estimated monthly sold count.
           * @minimum 0
           */
          monthlySold_lte?: number;
          /**
           * Minimum total offer count.
           * @minimum 0
           */
          totalOfferCount_gte?: number;
          /**
           * Maximum total offer count.
           * @minimum 0
           */
          totalOfferCount_lte?: number;
          /** Whether products must have review data. */
          hasReviews?: boolean;
          /** Whether the current Amazon price must be the lowest value since tracking began. */
          isLowest_AMAZON?: boolean;
          /** Whether the current Marketplace New price must be the lowest value since tracking began. */
          isLowest_NEW?: boolean;
          /** Whether to include only Prime Exclusive products. */
          isPrimeExclusive?: boolean;
          /** Whether products must include A+ content. */
          hasAPlus?: boolean;
          /** Whether products must include a main video. */
          hasMainVideo?: boolean;
          /**
           * Product Finder sort rules in priority order.
           * @minItems 1
           */
          sort?: Array<[string, "asc" | "desc"]>;
          /**
           * Zero-based Product Finder result page.
           * @minimum 0
           */
          page?: number;
          /**
           * Number of ASINs requested per Product Finder page, from 50 to 10000.
           * @minimum 50
           * @maximum 10000
           */
          perPage?: number;
          [key: string]: unknown;
        };
        /** Include charged, query-wide Search Insights statistics. */
        includeSearchInsights?: boolean;
      };
      output: {
        /** Amazon marketplace code using Keepa's official AmazonLocale names. */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX" | "BR";
        /** Matching Amazon ASINs. */
        asins: Array<string>;
        /** Estimated total number of matching products. */
        totalResults: number | null;
        /** Query-wide Search Insights returned when requested. */
        searchInsights: Record<string, unknown> | null;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Find seller IDs by official Seller Finder criteria without fetching seller profiles. */
    "keepa.find_sellers": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Official Seller Finder selection fields; other official filters are preserved. */
        filters: {
          /**
           * Text query for seller discovery.
           * @minLength 1
           */
          search?: string;
          /**
           * Seller display name to match.
           * @minLength 1
           */
          sellerName?: string;
          /**
           * Registered business name to match.
           * @minLength 1
           */
          businessName?: string;
          /** Seller business country codes. */
          addressCountry?: Array<string>;
          /** Minimum current seller rating percentage. */
          currentRating_gte?: number;
          /** Minimum current seller rating count. */
          currentRatingCount_gte?: number;
          /** Minimum observed storefront ASIN count. */
          totalStorefrontAsins_gte?: number;
          /** Brands sold by the merchant. */
          brands?: Array<string>;
          /** Root category IDs to include. */
          rootCategories_include?: Array<number>;
          /** Seller IDs whose listing competitors should be found. */
          competitorSellerIds?: Array<string>;
          /**
           * Zero-based seller result page.
           * @minimum 0
           */
          page?: number;
          /** Seller IDs per page; zero means 100, otherwise from 50 to 10000. */
          perPage?: 0 | number;
          /**
           * Up to three seller sort rules.
           * @maxItems 3
           */
          sort?: Array<[string, "asc" | "desc"]>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Ordered seller IDs in this upstream result page. */
        sellerIds: Array<string>;
        /** Total sellers matched across pages. */
        totalResults: number | null;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Retrieve Keepa's ordered Amazon best-seller ASIN list for a category node or website display group. */
    "keepa.get_best_sellers": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Amazon category node ID or Keepa website display group name. */
        category: number | string;
        /** Sales-rank averaging interval: 0, 30, 90 or 180 days. */
        range?: 0 | 30 | 90 | 180;
        /**
         * Historical month from 1 to 12; requires year.
         * @minimum 1
         * @maximum 12
         */
        month?: number;
        /** Four-digit year for a historical month; requires month. */
        year?: number;
        /** Return all variations instead of one representative. */
        variations?: boolean;
        /** Use subcategory rank instead of primary rank. */
        sublist?: boolean;
        /**
         * Zero-based offset into this response's full upstream list.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum entries returned; null returns all remaining entries.
         * @exclusiveMinimum 0
         */
        limit?: number | null;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Amazon category node ID resolved by Keepa. */
        categoryId: number | null;
        /** Best-seller list update time in Keepa Time minutes. */
        lastUpdate: number | null;
        /** Ordered Amazon ASINs, starting with the product having the lowest sales rank. */
        asins: Array<string>;
        /**
         * Number of entries in this upstream response.
         * @minimum 0
         */
        totalAvailable: number;
        /**
         * Number of entries in this response window.
         * @minimum 0
         */
        returnedCount: number;
        /** Whether this upstream response contains more entries after the window. */
        hasMore: boolean;
        /**
         * Next local offset, when more entries exist.
         * @minimum 0
         */
        nextOffset: number | null;
        /** Keepa bestSellersList metadata without the full ASIN list. */
        raw: Record<string, unknown>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Get lightning deals for a required ASIN, avoiding the costly full-list request. */
    "keepa.get_lightning_deal": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * A 10-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /** Official Keepa lightning deal state. */
        state?: "AVAILABLE" | "WAITLIST" | "SOLDOUT" | "WAITLISTFULL" | "EXPIRED" | "SUPPRESSED";
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Lightning deal objects. */
        lightningDeals: Array<Record<string, unknown>>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Get seller IDs ordered by rating count, with a local result window; each window fetches and pays for the full upstream list. */
    "keepa.get_most_rated_sellers": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * Zero-based offset into this response's full upstream list.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum entries returned; null returns all remaining entries.
         * @exclusiveMinimum 0
         */
        limit?: number | null;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Seller IDs ordered by rating count. */
        sellerIds: Array<string>;
        /**
         * Number of entries in this upstream response.
         * @minimum 0
         */
        totalAvailable: number;
        /**
         * Number of entries in this response window.
         * @minimum 0
         */
        returnedCount: number;
        /** Whether this upstream response contains more entries after the window. */
        hasMore: boolean;
        /**
         * Next local offset, when more entries exist.
         * @minimum 0
         */
        nextOffset: number | null;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Retrieve named Keepa price, rank, offer-count, rating, review, monthly-sales, and coupon history for Amazon ASINs. */
    "keepa.get_product_history": {
      input: {
        /** Amazon marketplace code using Keepa's official AmazonLocale names. */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX" | "BR";
        /**
         * Amazon ASINs to request.
         * @minItems 1
         * @maxItems 100
         */
        asins?: Array<string>;
        /**
         * Limit all returned history to the most recent number of 24-hour periods.
         * @exclusiveMinimum 0
         */
        days?: number;
        /**
         * Keepa CSV history series to include in `series`; this does not suppress monthlySoldHistory, couponHistory, or salesRankHistory when Keepa returns them.
         * @minItems 1
         */
        historyTypes?: Array<"AMAZON" | "NEW" | "USED" | "SALES" | "LISTPRICE" | "COLLECTIBLE" | "REFURBISHED" | "NEW_FBM_SHIPPING" | "LIGHTNING_DEAL" | "WAREHOUSE" | "NEW_FBA" | "COUNT_NEW" | "COUNT_USED" | "COUNT_REFURBISHED" | "COUNT_COLLECTIBLE" | "EXTRA_INFO_UPDATES" | "RATING" | "COUNT_REVIEWS" | "BUY_BOX_SHIPPING" | "USED_NEW_SHIPPING" | "USED_VERY_GOOD_SHIPPING" | "USED_GOOD_SHIPPING" | "USED_ACCEPTABLE_SHIPPING" | "COLLECTIBLE_NEW_SHIPPING" | "COLLECTIBLE_VERY_GOOD_SHIPPING" | "COLLECTIBLE_GOOD_SHIPPING" | "COLLECTIBLE_ACCEPTABLE_SHIPPING" | "REFURBISHED_SHIPPING" | "EBAY_NEW_SHIPPING" | "EBAY_USED_SHIPPING" | "TRADE_IN" | "RENT" | "BUY_BOX_USED_SHIPPING" | "PRIME_EXCL" | "COUNT_NEW_FBA" | "COUNT_NEW_FBM">;
        /**
         * UPC, EAN, GTIN, or ISBN-13 codes; keep leading zeroes.
         * @minItems 1
         * @maxItems 100
         */
        codes?: Array<string>;
        /**
         * Maximum products returned for each product code.
         * @exclusiveMinimum 0
         */
        codeLimit?: number;
        /**
         * Number of recent days used for Keepa summary statistics at no additional token cost.
         * @exclusiveMinimum 0
         */
        statsDays?: number;
        /** UTC statistics interval. */
        statsRange?: {
          /** Interval start, as ISO 8601 UTC text or Unix milliseconds. */
          start: string | number;
          /** Interval end, as ISO 8601 UTC text or Unix milliseconds. */
          end: string | number;
        };
        /**
         * Refresh when older than these hours; zero forces refresh and -1 disables refresh.
         * @minimum -1
         */
        updateHours?: number;
        /**
         * Number of marketplace offers to include; values from 20 through 100 may increase token cost and limit the request to 20 ASINs.
         * @minimum 20
         * @maximum 100
         */
        offers?: number;
        /** Whether to omit historical offers when offers are requested, reducing response size. */
        onlyLiveOffers?: boolean;
        /** Whether to include Keepa buy box data; this may consume two additional tokens per product when offers are not requested. */
        includeBuyBox?: boolean;
        /** Whether to include existing rating and review-count history in the product payload. */
        includeRating?: boolean;
        /** Whether to include existing product video metadata. */
        includeVideos?: boolean;
        /** Whether to include existing A+ content. */
        includeAPlus?: boolean;
        /** Whether to include stock history with requested offers; may cost extra tokens. */
        includeStock?: boolean;
        /** Whether to include historical and out-of-stock variations; may cost extra tokens. */
        includeHistoricalVariations?: boolean;
      };
      output: {
        /** Amazon marketplace code using Keepa's official AmazonLocale names. */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX" | "BR";
        /** Whether price integers remain in the marketplace's smallest currency unit. */
        priceValuesUseMinorUnits: true;
        /** Products and normalized histories returned by Keepa. */
        products: Array<{
          /** Amazon ASIN. */
          asin: string;
          /** Amazon product title. */
          title: string | null;
          /** Product brand. */
          brand: string | null;
          /** Named Keepa history series. */
          series: Array<{
            /** Official Keepa Product.CsvType name. */
            type: "AMAZON" | "NEW" | "USED" | "SALES" | "LISTPRICE" | "COLLECTIBLE" | "REFURBISHED" | "NEW_FBM_SHIPPING" | "LIGHTNING_DEAL" | "WAREHOUSE" | "NEW_FBA" | "COUNT_NEW" | "COUNT_USED" | "COUNT_REFURBISHED" | "COUNT_COLLECTIBLE" | "EXTRA_INFO_UPDATES" | "RATING" | "COUNT_REVIEWS" | "BUY_BOX_SHIPPING" | "USED_NEW_SHIPPING" | "USED_VERY_GOOD_SHIPPING" | "USED_GOOD_SHIPPING" | "USED_ACCEPTABLE_SHIPPING" | "COLLECTIBLE_NEW_SHIPPING" | "COLLECTIBLE_VERY_GOOD_SHIPPING" | "COLLECTIBLE_GOOD_SHIPPING" | "COLLECTIBLE_ACCEPTABLE_SHIPPING" | "REFURBISHED_SHIPPING" | "EBAY_NEW_SHIPPING" | "EBAY_USED_SHIPPING" | "TRADE_IN" | "RENT" | "BUY_BOX_USED_SHIPPING" | "PRIME_EXCL" | "COUNT_NEW_FBA" | "COUNT_NEW_FBM";
            /** Official Keepa Product.CsvType array index. */
            index: number;
            /** Unit interpretation for values in this series; lower sales-rank values indicate better rank. */
            unit: "minor_currency_unit" | "sales_rank" | "count" | "rating_tenths" | "metadata";
            /** Whether each raw point contains a separate shipping value after the main value. */
            includesShipping: boolean;
            /** Chronological history points. */
            points: Array<{
              /** Original Keepa Time value in minutes. */
              keepaTime: number;
              /**
               * UTC timestamp converted from Keepa Time.
               * @format date-time
               */
              timestamp: string;
              /** History value; price values use the marketplace's smallest currency unit and -1 represents no offer. */
              value: number;
              /** Shipping amount in the marketplace's smallest currency unit when this history type records it separately. */
              shipping: number | null;
            }>;
          }>;
          /** Historical Amazon bought-in-past-month values returned by Keepa. */
          monthlySoldHistory: Array<{
            /** Original Keepa Time value in minutes. */
            keepaTime: number;
            /**
             * UTC timestamp converted from Keepa Time.
             * @format date-time
             */
            timestamp: string;
            /** Amazon's bought-in-past-month value observed by Keepa; this is not a sales estimate. */
            value: number;
          }>;
          /** Historical coupon observations returned by Keepa. */
          couponHistory: Array<{
            /** Original Keepa Time value in minutes. */
            keepaTime: number;
            /**
             * UTC timestamp converted from Keepa Time.
             * @format date-time
             */
            timestamp: string;
            /** One-time coupon discount: zero means unavailable, positive values use the marketplace's smallest currency unit, and negative values are percentage discounts. */
            oneTimeCoupon: number;
            /** Subscribe-and-Save coupon discount: zero means unavailable, positive values use the marketplace's smallest currency unit, and negative values are percentage discounts. */
            subscribeAndSaveCoupon: number;
          }>;
          /** Sales-rank histories grouped by Amazon subcategory. */
          salesRankHistory: Array<{
            /** Amazon subcategory node ID. */
            categoryId: number;
            /** Chronological sales-rank observations; lower values indicate better rank. */
            points: Array<{
              /** Original Keepa Time value in minutes. */
              keepaTime: number;
              /**
               * UTC timestamp converted from Keepa Time.
               * @format date-time
               */
              timestamp: string;
              /** Amazon sales rank; lower values indicate better rank. */
              value: number;
            }>;
          }>;
          /** The complete Keepa product object including raw history arrays. */
          raw: Record<string, unknown>;
        }>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Retrieve current Keepa product metadata and named statistics for one or more Amazon ASINs. */
    "keepa.get_product_snapshot": {
      input: {
        /** Amazon marketplace code using Keepa's official AmazonLocale names. */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX" | "BR";
        /**
         * Amazon ASINs to request.
         * @minItems 1
         * @maxItems 100
         */
        asins?: Array<string>;
        /**
         * UPC, EAN, GTIN, or ISBN-13 codes; keep leading zeroes.
         * @minItems 1
         * @maxItems 100
         */
        codes?: Array<string>;
        /**
         * Maximum products returned for each product code.
         * @exclusiveMinimum 0
         */
        codeLimit?: number;
        /**
         * Number of recent days used for Keepa summary statistics at no additional token cost.
         * @exclusiveMinimum 0
         */
        statsDays?: number;
        /** UTC statistics interval. */
        statsRange?: {
          /** Interval start, as ISO 8601 UTC text or Unix milliseconds. */
          start: string | number;
          /** Interval end, as ISO 8601 UTC text or Unix milliseconds. */
          end: string | number;
        };
        /**
         * Refresh when older than these hours; zero forces refresh and -1 disables refresh.
         * @minimum -1
         */
        updateHours?: number;
        /**
         * Number of marketplace offers to include; values from 20 through 100 may increase token cost and limit the request to 20 ASINs.
         * @minimum 20
         * @maximum 100
         */
        offers?: number;
        /** Whether to omit historical offers when offers are requested, reducing response size. */
        onlyLiveOffers?: boolean;
        /** Whether to include Keepa buy box data; this may consume two additional tokens per product when offers are not requested. */
        includeBuyBox?: boolean;
        /** Whether to include existing rating and review-count history in the product payload. */
        includeRating?: boolean;
        /** Whether to include existing product video metadata. */
        includeVideos?: boolean;
        /** Whether to include existing A+ content. */
        includeAPlus?: boolean;
        /** Whether to include stock history with requested offers; may cost extra tokens. */
        includeStock?: boolean;
        /** Whether to include historical and out-of-stock variations; may cost extra tokens. */
        includeHistoricalVariations?: boolean;
      };
      output: {
        /** Amazon marketplace code using Keepa's official AmazonLocale names. */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX" | "BR";
        /** Whether price integers remain in the marketplace's smallest currency unit. */
        priceValuesUseMinorUnits: true;
        /** Products returned by Keepa. */
        products: Array<{
          /** Amazon ASIN. */
          asin: string;
          /** Keepa Amazon locale identifier. */
          domainId: number | null;
          /** Amazon product title. */
          title: string | null;
          /** Product brand. */
          brand: string | null;
          /** Product manufacturer. */
          manufacturer: string | null;
          /** Amazon product group. */
          productGroup: string | null;
          /** Parent ASIN when this product is a variation. */
          parentAsin: string | null;
          /** Root Amazon category node identifier. */
          rootCategory: number | null;
          /** Amazon category node identifiers assigned to the product. */
          categories: Array<number>;
          /** Resolved Amazon image URLs derived from Keepa image metadata. */
          imageUrls: Array<string>;
          /** Estimated monthly sold count when available. */
          monthlySold: number | null;
          /** Last product update in Keepa Time minutes. */
          lastUpdate: number | null;
          /** Named Keepa product statistics. */
          stats: {
            /** Values keyed by official Keepa Product.CsvType name. */
            current: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average30Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average90Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average180Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average365Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            atIntervalStart: Record<string, number | null>;
            /** Boolean values keyed by official Keepa Product.CsvType name. */
            isLowestEver: Record<string, boolean>;
            /** Boolean values keyed by official Keepa Product.CsvType name. */
            isLowest90Days: Record<string, boolean>;
            /** The complete Keepa stats object. */
            raw: Record<string, unknown>;
          } | null;
          /** The complete Keepa product object. */
          raw: Record<string, unknown>;
        }>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Retrieve compact Keepa marketplace seller profiles, ratings, category statistics, brands, and competitors. */
    "keepa.get_seller_snapshot": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * Amazon marketplace seller IDs.
         * @minItems 1
         * @maxItems 100
         */
        sellerIds: Array<string>;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Seller profiles returned by Keepa. */
        sellers: Array<{
          /** Amazon seller ID. */
          sellerId?: string;
          /** Amazon seller display name. */
          sellerName?: string | null;
          /** Current seller rating percentage. */
          currentRating?: number | null;
          /** Rating counts for the last 30, 90, and 365 days and lifetime. */
          ratingCount?: Array<number> | null;
          /** Whether Keepa has observed current FBA listings. */
          hasFba?: boolean | null;
          /** Whether Keepa identifies the seller as shipping from China. */
          shipsFromChina?: boolean | null;
          /** The complete Keepa seller object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Inspect one seller's observed storefront ASINs and aligned last-seen times; the list can be incomplete. */
    "keepa.get_seller_storefront": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * One Amazon seller ID.
         * @minLength 1
         */
        sellerId: string;
        /**
         * Zero-based offset into this response's full upstream list.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum entries returned; null returns all remaining entries.
         * @exclusiveMinimum 0
         */
        limit?: number | null;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Seller profile without full storefront arrays. */
        seller: Record<string, unknown> | null;
        /** Observed ASIN and last-seen pairs. */
        items: Array<{
          /** Amazon ASIN. */
          asin: string;
          /** Last observed Keepa Time minute. */
          lastSeen: number | null;
        }>;
        /**
         * Number of entries in this upstream response.
         * @minimum 0
         */
        totalAvailable: number;
        /**
         * Number of entries in this response window.
         * @minimum 0
         */
        returnedCount: number;
        /** Whether this upstream response contains more entries after the window. */
        hasMore: boolean;
        /**
         * Next local offset, when more entries exist.
         * @minimum 0
         */
        nextOffset: number | null;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Retrieve Keepa token availability and refill information without consuming tokens. */
    "keepa.get_token_status": {
      input: Record<string, never>;
      output: {
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** List lightning deals with a local result window; Keepa charges 500 tokens for each full upstream request, regardless of window size. */
    "keepa.list_lightning_deals": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Official Keepa lightning deal state. */
        state?: "AVAILABLE" | "WAITLIST" | "SOLDOUT" | "WAITLISTFULL" | "EXPIRED" | "SUPPRESSED";
        /**
         * Zero-based offset into this response's full upstream list.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum entries returned; null returns all remaining entries.
         * @exclusiveMinimum 0
         */
        limit?: number | null;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Lightning deals in this local window. */
        lightningDeals: Array<Record<string, unknown>>;
        /**
         * Number of entries in this upstream response.
         * @minimum 0
         */
        totalAvailable: number;
        /**
         * Number of entries in this response window.
         * @minimum 0
         */
        returnedCount: number;
        /** Whether this upstream response contains more entries after the window. */
        hasMore: boolean;
        /**
         * Next local offset, when more entries exist.
         * @minimum 0
         */
        nextOffset: number | null;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Look up up to ten Amazon category IDs and optionally their parent tree; ID zero lists roots. */
    "keepa.lookup_categories": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * Category IDs, or a sole zero to list roots.
         * @minItems 1
         * @maxItems 10
         */
        categoryIds: Array<number>;
        /** Include parent categories up to the root. */
        includeParents?: boolean;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Matched categories. */
        categories: Array<{
          /** Amazon category node identifier. */
          catId?: number | null;
          /** Keepa Amazon locale identifier. */
          domainId?: number | null;
          /** Amazon category name. */
          name?: string | null;
          /** Parent category node identifier. */
          parent?: number | null;
          /** Child category node identifiers. */
          children?: Array<number> | null;
          /** Estimated product count. */
          productCount?: number | null;
          /** Estimated distinct seller count. */
          sellerCount?: number | null;
          [key: string]: unknown;
        }>;
        /** Parent categories when requested. */
        categoryParents: Array<{
          /** Amazon category node identifier. */
          catId?: number | null;
          /** Keepa Amazon locale identifier. */
          domainId?: number | null;
          /** Amazon category name. */
          name?: string | null;
          /** Parent category node identifier. */
          parent?: number | null;
          /** Child category node identifiers. */
          children?: Array<number> | null;
          /** Estimated product count. */
          productCount?: number | null;
          /** Estimated distinct seller count. */
          sellerCount?: number | null;
          [key: string]: unknown;
        }>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Search Keepa Amazon categories by name so category IDs can be used in product and best-seller queries. */
    "keepa.search_categories": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * Space-separated category keywords; each keyword must contain at least three characters.
         * @minLength 1
         */
        term: string;
        /** Whether Keepa should include the parent tree for each category. */
        includeParents?: boolean;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Matching categories. */
        categories: Array<{
          /** Amazon category node identifier. */
          catId?: number | null;
          /** Keepa Amazon locale identifier. */
          domainId?: number | null;
          /** Amazon category name. */
          name?: string | null;
          /** Parent category node identifier. */
          parent?: number | null;
          /** Child category node identifiers. */
          children?: Array<number> | null;
          /** Estimated product count. */
          productCount?: number | null;
          /** Estimated distinct seller count. */
          sellerCount?: number | null;
          [key: string]: unknown;
        }>;
        /** Parent categories returned when requested. */
        categoryParents: Array<{
          /** Amazon category node identifier. */
          catId?: number | null;
          /** Keepa Amazon locale identifier. */
          domainId?: number | null;
          /** Amazon category name. */
          name?: string | null;
          /** Parent category node identifier. */
          parent?: number | null;
          /** Child category node identifiers. */
          children?: Array<number> | null;
          /** Estimated product count. */
          productCount?: number | null;
          /** Estimated distinct seller count. */
          sellerCount?: number | null;
          [key: string]: unknown;
        }>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
    /** Search Amazon products by keyword in Amazon result order, without fetching more details. */
    "keepa.search_products": {
      input: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /**
         * Amazon product search terms.
         * @minLength 1
         */
        term: string;
        /** Return only ordered ASINs instead of product objects. */
        asinsOnly?: boolean;
        /**
         * Recent days for free product statistics.
         * @exclusiveMinimum 0
         */
        statsDays?: number;
        /** UTC statistics interval. */
        statsRange?: {
          /** Interval start, as ISO 8601 UTC text or Unix milliseconds. */
          start: string | number;
          /** Interval end, as ISO 8601 UTC text or Unix milliseconds. */
          end: string | number;
        };
        /**
         * Refresh threshold in hours; zero can cost extra tokens.
         * @minimum 0
         */
        updateHours?: number;
        /** Include available product price history. */
        includeHistory?: boolean;
        /** Include existing rating and review history, possibly at extra cost. */
        includeRating?: boolean;
      };
      output: {
        /** Amazon marketplace supported by this Keepa endpoint (Brazil is unavailable). */
        marketplace: "US" | "GB" | "DE" | "FR" | "JP" | "CA" | "IT" | "ES" | "IN" | "MX";
        /** Ordered matching ASINs. */
        asins: Array<string>;
        /** Product objects when ASIN-only mode is disabled. */
        products: Array<{
          /** Amazon ASIN. */
          asin: string;
          /** Keepa Amazon locale identifier. */
          domainId: number | null;
          /** Amazon product title. */
          title: string | null;
          /** Product brand. */
          brand: string | null;
          /** Product manufacturer. */
          manufacturer: string | null;
          /** Amazon product group. */
          productGroup: string | null;
          /** Parent ASIN when this product is a variation. */
          parentAsin: string | null;
          /** Root Amazon category node identifier. */
          rootCategory: number | null;
          /** Amazon category node identifiers assigned to the product. */
          categories: Array<number>;
          /** Resolved Amazon image URLs derived from Keepa image metadata. */
          imageUrls: Array<string>;
          /** Estimated monthly sold count when available. */
          monthlySold: number | null;
          /** Last product update in Keepa Time minutes. */
          lastUpdate: number | null;
          /** Named Keepa product statistics. */
          stats: {
            /** Values keyed by official Keepa Product.CsvType name. */
            current: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average30Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average90Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average180Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            average365Days: Record<string, number | null>;
            /** Values keyed by official Keepa Product.CsvType name. */
            atIntervalStart: Record<string, number | null>;
            /** Boolean values keyed by official Keepa Product.CsvType name. */
            isLowestEver: Record<string, boolean>;
            /** Boolean values keyed by official Keepa Product.CsvType name. */
            isLowest90Days: Record<string, boolean>;
            /** The complete Keepa stats object. */
            raw: Record<string, unknown>;
          } | null;
          /** The complete Keepa product object. */
          raw: Record<string, unknown>;
        }>;
        /** Keepa request and token-budget metadata. */
        meta: {
          /** Keepa server response time in Unix epoch milliseconds. */
          timestamp: number | null;
          /** Tokens remaining after this request. */
          tokensLeft: number | null;
          /** Milliseconds until Keepa next refills tokens. */
          refillInMs: number | null;
          /** Number of Keepa tokens refilled per minute. */
          refillRatePerMinute: number | null;
          /** Tokens consumed by this request. */
          tokensConsumed: number | null;
          /** Server-side processing time in milliseconds. */
          processingTimeMs: number | null;
        };
      };
    };
  }
}
