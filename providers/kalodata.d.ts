import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Kalodata analytics for one TikTok product category. */
    "kalodata.get_category": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /** The reporting period supported by Kalodata category endpoints. */
        dateRange: "last7Day" | "last30Day" | "last90Day" | "last180Day" | "last365Day";
        /**
         * The TikTok product category identifier.
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** The TikTok product category details returned by Kalodata. */
        detail: Record<string, unknown>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** Get Kalodata analytics for one TikTok creator. */
    "kalodata.get_creator": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /**
         * The TikTok creator identifier.
         * @minLength 1
         */
        creatorId: string;
        /**
         * Only attribute revenue from these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /**
         * Only attribute revenue from products sold by this shop.
         * @minLength 1
         */
        shopId?: string;
        /** Whether to request additional creator information. */
        needExtra?: boolean;
      };
      output: {
        /** The TikTok creator details returned by Kalodata. */
        detail: Record<string, unknown>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** Get Kalodata analytics for one TikTok livestream. */
    "kalodata.get_livestream": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /**
         * The TikTok livestream identifier.
         * @minLength 1
         */
        livestreamId: string;
        /** Whether to request additional livestream information. */
        needExtra?: boolean;
      };
      output: {
        /** The TikTok livestream details returned by Kalodata. */
        detail: Record<string, unknown>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** Get Kalodata analytics for one TikTok product. */
    "kalodata.get_product": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /**
         * The TikTok product identifier.
         * @minLength 1
         */
        productId: string;
        /** The image mode: 0 omits images, 1 returns official URLs, and 2 returns Kalodata-hosted URLs when available. */
        needImage?: 0 | 1 | 2;
        /** Whether to request additional product information. */
        needExtra?: boolean;
      };
      output: {
        /** The TikTok product details returned by Kalodata. */
        detail: Record<string, unknown>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** Get Kalodata analytics for one TikTok shop. */
    "kalodata.get_shop": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /**
         * The TikTok shop identifier.
         * @minLength 1
         */
        shopId: string;
        /**
         * Only attribute revenue from these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /** Whether to request additional shop information. */
        needExtra?: boolean;
      };
      output: {
        /** The TikTok shop details returned by Kalodata. */
        detail: Record<string, unknown>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** Get Kalodata analytics for one TikTok video. */
    "kalodata.get_video": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /**
         * The TikTok video identifier.
         * @minLength 1
         */
        videoId: string;
        /** Whether to request additional video information. */
        needExtra?: boolean;
      };
      output: {
        /** The TikTok video details returned by Kalodata. */
        detail: Record<string, unknown>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** List TikTok product categories ranked by Kalodata analytics and optional filters. */
    "kalodata.list_categories": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /** The reporting period supported by Kalodata category endpoints. */
        dateRange: "last7Day" | "last30Day" | "last90Day" | "last180Day" | "last365Day";
        /** The field and direction used to sort the category ranking. */
        sortField: {
          /** The response field used to sort the category ranking. */
          field: "revenue" | "revenue_growth_rate" | "top3_shop_revenue_ratio" | "average_revenue" | "rank" | "category_id" | "category_name";
          /** The sort direction. */
          type: "ASC" | "DESC";
        };
        /**
         * The number of records to return, from 5 through 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Only include these categories and their subcategories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /** The category level to return. */
        categoryLevel?: 1 | 2 | 3;
        /**
         * The category revenue range in the requested currency. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        revenueRange?: string;
      };
      output: {
        /** The ranked records returned by Kalodata. */
        items: Array<Record<string, unknown>>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** List TikTok creators ranked by Kalodata analytics and optional filters. */
    "kalodata.list_creators": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /** The field and direction used to sort the ranking. */
        sortField: {
          /** The response field used to sort the ranking. */
          field: "revenue" | "revenue_growth_rate" | "content_views" | "creator_followers" | "sales_volumn" | "video_revenue" | "live_revenue" | "creator_id" | "creator_nickname" | "creator_handle";
          /** The sort direction. */
          type: "ASC" | "DESC";
        };
        /**
         * The number of records to return, from 5 through 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Only include creators earning revenue in these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /**
         * Only include creators collaborating with this shop.
         * @minLength 1
         */
        shopId?: string;
        /**
         * Only include creators who promoted this product.
         * @minLength 1
         */
        productId?: string;
        /**
         * The creator revenue range in the requested currency. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        revenueRange?: string;
        /** The creator affiliation type. */
        creatorType?: "BELONGED_TO_SELLER" | "INDEPENDENT";
        /**
         * The creator follower-count range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        followersRange?: string;
        /** The creator engagement-rate bucket. */
        engagementRate?: "LOW" | "MEDIUM" | "HIGH";
        /**
         * A keyword used to search creators.
         * @minLength 1
         */
        keyword?: string;
        /** The image mode: 0 omits images, 1 returns official URLs, and 2 returns Kalodata-hosted URLs when available. */
        needImage?: 0 | 1 | 2;
        /** Whether to include category information. */
        needCategory?: 0 | 1;
        /** Whether to include third-level category information. */
        needTertiaryCategory?: 0 | 1;
      };
      output: {
        /** The ranked records returned by Kalodata. */
        items: Array<Record<string, unknown>>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** List TikTok livestreams ranked by Kalodata analytics and optional filters. */
    "kalodata.list_livestreams": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /** The field and direction used to sort the ranking. */
        sortField: {
          /** The response field used to sort the ranking. */
          field: "revenue" | "unit_price" | "views" | "livestream_start_time" | "livestream_end_time" | "livestream_duration" | "livestream_id" | "livestream_title" | "creator_id" | "creator_handle";
          /** The sort direction. */
          type: "ASC" | "DESC";
        };
        /**
         * The number of records to return, from 5 through 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Only include livestreams in these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /**
         * Only include livestreams promoting this shop.
         * @minLength 1
         */
        shopId?: string;
        /**
         * Only include livestreams hosted by this creator.
         * @minLength 1
         */
        creatorId?: string;
        /**
         * Only include livestreams promoting this product.
         * @minLength 1
         */
        productId?: string;
        /**
         * The host follower-count range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        followersRange?: string;
        /**
         * A keyword used to search livestreams.
         * @minLength 1
         */
        keyword?: string;
      };
      output: {
        /** The ranked records returned by Kalodata. */
        items: Array<Record<string, unknown>>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** List TikTok products ranked by Kalodata analytics and optional filters. */
    "kalodata.list_products": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /** The field and direction used to sort the ranking. */
        sortField: {
          /** The response field used to sort the ranking. */
          field: "revenue" | "commission_rate" | "revenue_growth_rate" | "sales_volumn" | "unit_price" | "launch_date" | "live_revenue" | "video_revenue" | "showcase_revenue" | "product_id" | "product_name";
          /** The sort direction. */
          type: "ASC" | "DESC";
        };
        /**
         * The number of records to return, from 5 through 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Only include products in these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /**
         * Only include products from this shop.
         * @minLength 1
         */
        shopId?: string;
        /**
         * Only include products promoted by this creator.
         * @minLength 1
         */
        creatorId?: string;
        /**
         * Only include products mounted on this video.
         * @minLength 1
         */
        videoId?: string;
        /**
         * Only include products mounted in this livestream.
         * @minLength 1
         */
        livestreamId?: string;
        /**
         * The product revenue range in the requested currency. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        revenueRange?: string;
        /** Whether to return affiliate or non-affiliate products. */
        isAffiliate?: 0 | 1;
        /**
         * The affiliate commission-rate range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        commissionRate?: string;
        /** Whether to return fully managed or self-fulfilled TikTok Shop products. */
        isTtsProduct?: 0 | 1;
        /**
         * The product price range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        unitPriceRange?: string;
        /** Whether to include products without sales in the reporting period. */
        needAll?: boolean;
        /** The product delivery mode. */
        deliveryType?: "local" | "global";
        /** The product age filter in days. */
        launchDate?: "<3" | "<7" | ">30";
        /** The image mode: 0 omits images, 1 returns official URLs, and 2 returns Kalodata-hosted URLs when available. */
        needImage?: 0 | 1 | 2;
        /**
         * A keyword used to search products.
         * @minLength 1
         */
        keyword?: string;
        /** Whether to request additional product information. */
        needExtra?: boolean;
      };
      output: {
        /** The ranked records returned by Kalodata. */
        items: Array<Record<string, unknown>>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** List TikTok shops ranked by Kalodata analytics and optional filters. */
    "kalodata.list_shops": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /** The field and direction used to sort the ranking. */
        sortField: {
          /** The response field used to sort the ranking. */
          field: "revenue" | "sales_volumn" | "revenue_growth_rate" | "unit_price" | "shop_type" | "affiliate_revenue" | "self_promotion_revenue" | "shopping_mall_revenue" | "on_sell_product_count" | "rank" | "shop_id" | "shop_name";
          /** The sort direction. */
          type: "ASC" | "DESC";
        };
        /**
         * The number of records to return, from 5 through 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Only include shops selling in these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /**
         * The shop revenue range in the requested currency. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        revenueRange?: string;
        /** The shop ownership type. */
        shopType?: "BRAND" | "RETAILER";
        /**
         * A keyword used to search shop names.
         * @minLength 1
         */
        keyword?: string;
        /** The image mode: 0 omits images, 1 returns official URLs, and 2 returns Kalodata-hosted URLs when available. */
        needImage?: 0 | 1 | 2;
        /** Whether to include category information. */
        needCategory?: 0 | 1;
        /**
         * The average product-price range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        unitPriceRange?: string;
      };
      output: {
        /** The ranked records returned by Kalodata. */
        items: Array<Record<string, unknown>>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
    /** List TikTok videos ranked by Kalodata analytics and optional filters. */
    "kalodata.list_videos": {
      input: {
        /** The TikTok Shop market to query. */
        region: "US" | "BR" | "MX" | "ID" | "JP" | "MY" | "PH" | "SG" | "TH" | "VN" | "GB" | "ES" | "DE" | "FR" | "IT";
        /** The language used for localized response fields. */
        language: "zh-CN" | "en-US" | "id-ID" | "th-TH" | "vi-VN" | "es-ES" | "ja-JP" | "pt-BR" | "ko-KR" | "fr-FR";
        /** The currency used for revenue and price fields. */
        currency: "CNY" | "USD" | "IDR" | "VND" | "THB" | "MYR" | "JPY" | "PHP" | "GBP" | "SGD" | "MXN" | "EUR" | "BRL";
        /**
         * The reporting period: lastDay, last7Day, last30Day, a date range no longer than 30 days, or a natural month.
         * @minLength 1
         */
        dateRange: string;
        /** The field and direction used to sort the ranking. */
        sortField: {
          /** The response field used to sort the ranking. */
          field: "revenue" | "views" | "revenue_growth_rate" | "ads_roas" | "video_id" | "video_title" | "belonged_creator_id" | "belonged_creator_handle";
          /** The sort direction. */
          type: "ASC" | "DESC";
        };
        /**
         * The number of records to return, from 5 through 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Only include videos in these categories.
         * @minItems 1
         */
        categoryIds?: Array<string>;
        /**
         * Only include videos promoting products from this shop.
         * @minLength 1
         */
        shopId?: string;
        /**
         * Only include videos published by this creator.
         * @minLength 1
         */
        creatorId?: string;
        /**
         * Only include videos promoting this product.
         * @minLength 1
         */
        productId?: string;
        /**
         * The revenue range in the requested currency. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        revenueRange?: string;
        /**
         * The creator follower-count range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        followersRange?: string;
        /**
         * The estimated advertising ROAS range. Accepts a single value, a closed range, or an open-ended range.
         * @minLength 1
         */
        adsRoas?: string;
        /**
         * A keyword used to search video titles.
         * @minLength 1
         */
        keyword?: string;
        /** Whether to return only AI or non-AI videos. */
        isAiVideo?: 0 | 1;
      };
      output: {
        /** The ranked records returned by Kalodata. */
        items: Array<Record<string, unknown>>;
        /** Whether Kalodata served the response from its cache. */
        cached?: boolean;
      };
    };
  }
}
