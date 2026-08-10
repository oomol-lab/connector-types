import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check a product image for copyright risk through LinkFox and Ruiguan. */
    "linkfox.check_copyright_risk": {
      input: {
        /**
         * A publicly accessible product image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
        /**
         * The maximum number of copyright matches.
         * @minimum 10
         * @maximum 200
         */
        topNumber: number;
        /** Whether to enable LinkFox radar infringement analysis. */
        enableRadar: boolean;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        results: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check a product image for design-patent risk through LinkFox and Ruiguan. */
    "linkfox.check_design_patent_risk": {
      input: {
        /**
         * A publicly accessible product image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
        /** The image retrieval mode. */
        queryMode?: "physical" | "line" | "hybrid";
        /**
         * The maximum number of design patent matches.
         * @minimum 1
         * @maximum 100
         */
        topNumber?: number;
        /**
         * Comma-separated patent jurisdiction codes.
         * @maxLength 1000
         */
        regions?: string;
        /**
         * The product title used as additional retrieval context.
         * @maxLength 1000
         */
        productTitle?: string;
        /**
         * The product description used as additional retrieval context.
         * @maxLength 1000
         */
        productDescription?: string;
        /** Whether to include valid, expired, or all patents. */
        patentStatus?: "1" | "0" | "1,0";
        /** Whether to enable AI infringement radar analysis. */
        enableRadar?: boolean;
        /** Comma-separated top-level Locarno classification codes. */
        topLoc?: string;
        /** The source-language code for non-English product text. */
        sourceLanguage?: string;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        results: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check a product for trademark, copyright, patent, and TRO risk through LinkFox and Maidalv. */
    "linkfox.check_product_tro_risk": {
      input: {
        /**
         * A publicly accessible main product image URL.
         * @maxLength 1000
         * @format uri
         */
        mainProductImage: string;
        /**
         * Public reference image URLs.
         * @maxItems 3
         */
        referenceImages?: Array<string>;
        /**
         * Additional public product image URLs.
         * @maxItems 5
         */
        otherProductImages?: Array<string>;
        /**
         * Public intellectual-property reference image URLs.
         * @maxItems 3
         */
        ipImages?: Array<string>;
        /**
         * Text from a similar product.
         * @maxLength 1000
         */
        referenceText?: string;
        /**
         * A concise product description or title.
         * @maxLength 1000
         */
        description?: string;
        /**
         * Intellectual-property keywords to investigate.
         * @maxItems 20
         */
        ipKeywords?: Array<string>;
        /** The legal report language. */
        language?: "zh" | "en";
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        results: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Check product text for trademark risk through LinkFox and Ruiguan. */
    "linkfox.check_text_trademark_risk": {
      input: {
        /**
         * The product title to inspect for trademark risk.
         * @maxLength 1000
         */
        productTitle: string;
        /** Comma-separated trademark jurisdiction codes. */
        regions?: string;
        /**
         * The maximum number of trademark matches.
         * @minimum 1
         * @maximum 500
         */
        limit: number;
        /**
         * Additional product copy to inspect.
         * @maxLength 1000
         */
        productText?: string;
      };
      output: {
        /**
         * The number of returned risk matches.
         * @minimum 0
         */
        total: number;
        /** The compliance risk matches. */
        results: Array<Record<string, unknown>>;
        /** The LinkFox detection identifier when provided. */
        detectId: string | null;
        /** The overall risk level when provided. */
        riskLevel: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Create an Amazon Ads authorization URL through LinkFox. */
    "linkfox.get_amazon_ads_authorization_url": {
      input: {
        /** The Amazon Ads region. */
        region: "NA" | "EU" | "FE";
        /**
         * A display name used to identify the authorized Ads account.
         * @minLength 1
         * @pattern \S
         */
        accountName: string;
      };
      output: {
        /**
         * The URL the user should open to authorize the Amazon account.
         * @format uri
         */
        authorizeUrl: string;
      };
    };
    /** Create or resume an Amazon Ads report and wait for a download URL. */
    "linkfox.get_amazon_ads_report": {
      input: {
        /**
         * The Amazon Ads profile identifier.
         * @exclusiveMinimum 0
         */
        profileId: number;
        /** The Amazon Ads region. */
        region: "NA" | "EU" | "FE";
        /** An existing Amazon Ads report identifier to resume. */
        reportId?: string;
        /** The official Amazon Ads report type identifier. */
        reportTypeId?: string;
        /** The Amazon Ads product for a new report. */
        adProduct?: "SPONSORED_PRODUCTS" | "SPONSORED_BRANDS" | "SPONSORED_DISPLAY";
        /**
         * The official report grouping dimensions.
         * @minItems 1
         */
        groupBy?: Array<string>;
        /**
         * The official report columns to include.
         * @minItems 1
         */
        columns?: Array<string>;
        /** The official Amazon Ads report filters. */
        filters?: Array<{
          /**
           * The official Amazon Ads report filter field.
           * @minLength 1
           */
          field: string;
          /**
           * The allowed values for the report filter.
           * @minItems 1
           */
          values: Array<string>;
        }>;
        /**
         * The inclusive report start date.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive report end date.
         * @format date
         */
        endDate?: string;
        /** The Amazon Ads report display name. */
        name?: string;
        /** The report time aggregation. */
        timeUnit?: "DAILY" | "SUMMARY";
        /** The Amazon Ads report format. */
        format?: "GZIP_JSON";
        /**
         * Seconds between report status checks.
         * @minimum 0
         * @maximum 300
         */
        pollIntervalSeconds?: number;
        /**
         * The maximum status checks within the ten-minute polling budget.
         * @minimum 1
         * @maximum 120
         */
        maxAttempts?: number;
      };
      output: {
        /** The Amazon report identifier. */
        reportId: string;
        /** The final or last observed report status. */
        status: string;
        /** The Amazon report download URL when the report is complete. */
        downloadUrl: string | null;
        /** The report compression algorithm when provided. */
        compressionAlgorithm: string | null;
        /**
         * The number of report status checks performed.
         * @minimum 0
         */
        pollAttempts: number;
      };
    };
    /** Generate a LinkFox Amazon commercial opportunity report for a keyword. */
    "linkfox.get_amazon_opportunity_report": {
      input: {
        /** The supported Amazon marketplace code. */
        site: "US";
        /**
         * The search keyword to analyze.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** The generated commercial insight report in Markdown. */
        report: string;
        /** The report generation time in milliseconds when provided. */
        costTime: number | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get detailed Amazon product data for up to forty ASINs through LinkFox. */
    "linkfox.get_amazon_product": {
      input: {
        /**
         * One to forty comma-separated uppercase Amazon ASINs.
         * @pattern ^[A-Z0-9]+(,[A-Z0-9]+){0,39}$
         */
        asins: string;
        /** The Amazon marketplace domain. */
        amazonDomain?: "amazon.com" | "amazon.co.uk" | "amazon.de" | "amazon.fr" | "amazon.it" | "amazon.es" | "amazon.co.jp" | "amazon.ca" | "amazon.com.au" | "amazon.com.br" | "amazon.in" | "amazon.nl" | "amazon.se" | "amazon.pl" | "amazon.sg" | "amazon.sa" | "amazon.ae" | "amazon.com.mx" | "amazon.com.tr" | "amazon.com.be" | "amazon.cn" | "amazon.eg";
        /** The Amazon locale code, such as en_US or de_DE. */
        language?: string;
        /** The destination postal code used to resolve localized prices. */
        deliveryZip?: string;
        /** The storefront device profile. */
        device?: "desktop" | "mobile" | "tablet";
        /** Whether to include frequently bought together products. */
        returnBoughtTogether?: boolean;
        /** Whether to include related products. */
        returnRelatedProducts?: boolean;
        /** Whether to include author review excerpts. */
        returnAuthorsReviews?: boolean;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Create an Amazon Selling Partner authorization URL through LinkFox. */
    "linkfox.get_amazon_store_authorization_url": {
      input: {
        /** The Amazon Selling Partner region. */
        region: "NA" | "EU" | "FE";
        /**
         * A display name used to identify the authorized store.
         * @minLength 1
         * @pattern \S
         */
        sellerName: string;
      };
      output: {
        /**
         * The URL the user should open to authorize the Amazon account.
         * @format uri
         */
        authorizeUrl: string;
      };
    };
    /** Create or resume an Amazon Selling Partner report and wait for a download URL. */
    "linkfox.get_amazon_store_report": {
      input: {
        /**
         * The authorized Amazon seller identifier.
         * @minLength 1
         */
        sellerId: string;
        /** The Amazon Selling Partner region. */
        region: "NA" | "EU" | "FE";
        /** An existing report identifier to resume instead of creating a report. */
        reportId?: string;
        /** The official Amazon Selling Partner report type. */
        reportType?: string;
        /**
         * The Amazon marketplace identifiers for a new report.
         * @minItems 1
         */
        marketplaceIds?: Array<string>;
        /** The optional report data start date or date-time. */
        dataStartTime?: string;
        /** The optional report data end date or date-time. */
        dataEndTime?: string;
        /** The optional vendor report update date or date-time. */
        lastUpdatedDate?: string;
        /** Report-type-specific Amazon report options. */
        reportOptions?: Record<string, unknown>;
        /**
         * Seconds between report status checks.
         * @minimum 0
         * @maximum 300
         */
        pollIntervalSeconds?: number;
        /**
         * The maximum status checks within the ten-minute polling budget.
         * @minimum 1
         * @maximum 120
         */
        maxAttempts?: number;
      };
      output: {
        /** The Amazon report identifier. */
        reportId: string;
        /** The final or last observed report status. */
        status: string;
        /** The Amazon report download URL when the report is complete. */
        downloadUrl: string | null;
        /** The report compression algorithm when provided. */
        compressionAlgorithm: string | null;
        /**
         * The number of report status checks performed.
         * @minimum 0
         */
        pollAttempts: number;
      };
    };
    /** Get the current LinkFox account without exposing personal contact data. */
    "linkfox.get_current_account": {
      input: Record<string, never>;
      output: {
        /** The stable LinkFox account identifier when available. */
        accountId: string | null;
        /** The LinkFox account nickname when available. */
        nickname: string | null;
        /** Whether the LinkFox account is personal or belongs to a team. */
        accountType: "personal" | "team";
        /** Whether LinkFox reports the account as verified. */
        verified: boolean;
      };
    };
    /** Get EchoTik details for a batch of TikTok products through LinkFox. */
    "linkfox.get_echotik_products": {
      input: {
        /**
         * TikTok product identifiers.
         * @maxItems 1000
         */
        productIds?: Array<string>;
        /**
         * TikTok Shop product URLs.
         * @maxItems 1000
         */
        productUrls?: Array<string>;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Get Kalodata details for a TikTok product through LinkFox. */
    "linkfox.get_kalodata_product": {
      input: {
        /**
         * The TikTok product identifier as a string.
         * @minLength 1
         */
        productId: string;
        /** The TikTok Shop market region, such as US. */
        region?: string;
        /** A relative range such as last7Day or last30Day. */
        dateRange?: string;
        /** The requested locale, such as en-US or zh-CN. */
        language?: string;
        /** The requested currency code, such as USD. */
        currency?: string;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List high-performing 1688 products from LinkFox rankings. */
    "linkfox.list_1688_hot_products": {
      input: {
        /**
         * A Chinese product search keyword.
         * @maxLength 50
         */
        keyWord?: string;
        /**
         * A 1688 product URL to use as the search seed.
         * @format uri
         */
        goodsUrl?: string;
        /** Up to twenty 1688 product identifiers separated by Chinese enumeration commas. */
        productIds?: string;
        /** The search match mode, where 1 is fuzzy and 3 is exact. */
        searchType?: 1 | 3;
        /** The result sort direction. */
        sortType?: "desc" | "asc";
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of products per page.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The minimum wholesale price.
         * @minimum 0
         */
        beginPrice?: number;
        /**
         * The maximum wholesale price.
         * @minimum 0
         */
        endPrice?: number;
        /**
         * The minimum dropshipping price.
         * @minimum 0
         */
        beginConsignPrice?: number;
        /**
         * The maximum dropshipping price.
         * @minimum 0
         */
        endConsignPrice?: number;
        /**
         * The minimum sales order count.
         * @minimum 0
         */
        beginOrderCount?: number;
        /**
         * The maximum sales order count.
         * @minimum 0
         */
        endOrderCount?: number;
        /**
         * The minimum units sold.
         * @minimum 0
         */
        beginSaleCount?: number;
        /**
         * The maximum units sold.
         * @minimum 0
         */
        endSaleCount?: number;
        /** The supplier type, where 0 is any, 1 is shop, and 2 is factory. */
        companyType?: 0 | 1 | 2;
        /** The 1688 offer badge filter. */
        offerType?: 0 | 2 | 3 | 4 | 5 | 6;
        /**
         * The ranking period date.
         * @format date
         */
        date?: string;
        /** The ranking period type, where 2 is weekly and 3 is monthly. */
        pageType?: 2 | 3;
        /** The billboard sort field. */
        sortField?: "orderCount" | "saleCount" | "saleVolume" | "offerCreateTime" | "price" | "consignPrice";
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List or refresh Amazon Ads profiles through LinkFox. */
    "linkfox.list_amazon_ads_profiles": {
      input: {
        /** Whether LinkFox should refresh profiles from Amazon Ads. */
        refresh?: boolean;
      };
      output: {
        /** The available Amazon Ads profiles. */
        profiles: Array<Record<string, unknown>>;
        /**
         * The number of returned profiles.
         * @minimum 0
         */
        total: number;
        /** Whether LinkFox refreshed the profiles from Amazon Ads. */
        refreshed: boolean;
      };
    };
    /** Retrieve Amazon product reviews through LinkFox. */
    "linkfox.list_amazon_product_reviews": {
      input: {
        /**
         * The Amazon ASIN whose reviews should be retrieved.
         * @minLength 1
         */
        asin: string;
        /** The Amazon marketplace domain suffix. */
        domainCode?: "com" | "ca" | "co.uk" | "in" | "de" | "fr" | "it" | "es" | "co.jp" | "com.au" | "com.br" | "nl" | "se" | "com.mx" | "ae";
        /**
         * The number of one-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star1Num?: number;
        /**
         * The number of two-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star2Num?: number;
        /**
         * The number of three-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star3Num?: number;
        /**
         * The number of four-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star4Num?: number;
        /**
         * The number of five-star reviews to retrieve.
         * @minimum 0
         * @maximum 100
         */
        star5Num?: number;
        /**
         * A keyword used to filter review text.
         * @maxLength 1000
         */
        filterByKeyword?: string;
        /** The review sort order. */
        sortBy?: "recent" | "helpful";
        /** Whether to include all reviews or verified purchases only. */
        reviewerType?: "all_reviews" | "avp_only_reviews";
        /** Whether to include all reviews or only reviews with media. */
        mediaType?: "all_contents" | "media_reviews_only";
        /** Whether to include all product formats or only the current format. */
        formatType?: "all_formats" | "current_format";
      };
      output: {
        /** The total review count when provided. */
        total: number | null;
        /** The Amazon reviews returned by LinkFox. */
        reviews: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List Amazon Ads accounts authorized through LinkFox. */
    "linkfox.list_authorized_amazon_ads_accounts": {
      input: Record<string, never>;
      output: {
        /** The authorized Amazon stores. */
        stores: Array<Record<string, unknown>>;
        /**
         * The number of authorized stores.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List Amazon stores authorized through LinkFox. */
    "linkfox.list_authorized_amazon_stores": {
      input: Record<string, never>;
      output: {
        /** The authorized Amazon stores. */
        stores: Array<Record<string, unknown>>;
        /**
         * The number of authorized stores.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List top-selling TikTok products from FastMoss through LinkFox. */
    "linkfox.list_fastmoss_top_selling_products": {
      input: {
        /** The TikTok Shop market region. */
        region: "US" | "GB" | "MX" | "ES" | "ID" | "VN" | "MY" | "TH" | "PH";
        /** The ranking date period. */
        dateInfo: {
          /** The ranking time granularity. */
          type: "day" | "week" | "month";
          /**
           * The date value matching the selected granularity.
           * @minLength 1
           */
          value: string;
        };
        /** An English TikTok category name. */
        category?: string;
        /** The ranking sort rule. */
        orderby?: {
          /** The ranking sort field. */
          field: "units_sold" | "gmv" | "total_units_sold" | "total_gmv" | "growth_rate";
          /** The ranking sort direction. */
          order: "desc" | "asc";
        };
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Browse Kalodata TikTok product rankings through LinkFox. */
    "linkfox.list_kalodata_products": {
      input: {
        /** The TikTok Shop market region, such as US. */
        region?: string;
        /** A relative range such as last7Day or last30Day. */
        dateRange?: string;
        /** The requested currency code, such as USD. */
        currency?: string;
        /** The requested locale, such as en-US or zh-CN. */
        language?: string;
        /** A Kalodata-supported sort specification. */
        sortField?: Record<string, unknown>;
        /**
         * The one-based page number.
         * @minimum 1
         * @maximum 5
         */
        pageNumber?: number;
        /**
         * The number of products per page.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** List Sponsored Products campaigns through the LinkFox Amazon Ads gateway. */
    "linkfox.list_sp_campaigns": {
      input: {
        /**
         * The Amazon Ads profile identifier.
         * @exclusiveMinimum 0
         */
        profileId: number;
        /** The Amazon Ads region. */
        region: "NA" | "EU" | "FE";
        /** Campaign identifier filters. */
        campaignIdFilter?: {
          /** Values to include. */
          include?: Array<string>;
          /** Values to exclude. */
          exclude?: Array<string>;
        };
        /** Campaign state filters. */
        stateFilter?: {
          /** Values to include. */
          include?: Array<string>;
          /** Values to exclude. */
          exclude?: Array<string>;
        };
        /** Campaign name filters. */
        nameFilter?: {
          /** The text matching mode. */
          queryTermMatchType: "BROAD_MATCH" | "EXACT_MATCH";
          /**
           * Campaign name terms to include.
           * @minItems 1
           */
          include: Array<string>;
        };
        /** Portfolio identifier filters. */
        portfolioIdFilter?: {
          /** Values to include. */
          include?: Array<string>;
          /** Values to exclude. */
          exclude?: Array<string>;
        };
        /** The Amazon Ads next-page token. */
        nextToken?: string;
        /**
         * The maximum campaigns per page. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** Whether to follow Amazon Ads pagination automatically. Defaults to true. */
        fetchAll?: boolean;
        /**
         * The maximum pages to follow when fetchAll is true. Defaults to 50.
         * @minimum 1
         * @maximum 50
         */
        maxPages?: number;
      };
      output: {
        /** The Sponsored Products campaigns. */
        campaigns: Array<Record<string, unknown>>;
        /**
         * The number of returned campaigns.
         * @minimum 0
         */
        total: number;
        /** The next-page token when more campaigns remain. */
        nextToken: string | null;
      };
    };
    /** Run a natural-language Amazon Brand Analytics query through LinkFox. */
    "linkfox.query_amazon_aba": {
      input: {
        /**
         * A precise natural-language description of the requested analysis.
         * @minLength 1
         */
        analysisDescription: string;
        /** The Amazon marketplace region code. */
        region?: "US" | "DE" | "BR" | "CA" | "AU" | "JP" | "AE" | "ES" | "FR" | "IT" | "SA" | "TR" | "MX" | "SE" | "NL";
        /** Whether LinkFox should create a CSV download URL for the results. */
        createDownloadUrl?: boolean;
      };
      output: {
        /** Whether LinkFox completed the analysis successfully. */
        success: boolean;
        /** The analysis result tables. */
        tables: Array<Record<string, unknown>>;
        /** The total result count when provided. */
        total: number | null;
        /** The CSV download URL when requested and available. */
        downloadUrl: string | null;
        /** An informational message returned by LinkFox. */
        message: string | null;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Find visually similar 1688 products through LinkFox. */
    "linkfox.search_1688_by_image": {
      input: {
        /**
         * A publicly accessible PNG or JPEG image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl?: string;
        /** A LinkFox 1688 image identifier returned by a previous page. */
        imageId?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** The minimum price in CNY. */
        priceStart?: string;
        /** The maximum price in CNY. */
        priceEnd?: string;
        /** Comma-separated official 1688 filter values. */
        filter?: string;
        /** A JSON string such as {"price":"asc"}. */
        sort?: string;
        /** A keyword used to narrow the image-search results. */
        keyword?: string;
        /** An official 1688 product collection identifier. */
        productCollectionId?: string;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search the LinkFox 1688 sourcing database. */
    "linkfox.search_1688_products": {
      input: {
        /**
         * A Chinese product search keyword.
         * @maxLength 50
         */
        keyWord?: string;
        /**
         * A 1688 product URL to use as the search seed.
         * @format uri
         */
        goodsUrl?: string;
        /** Up to twenty comma-separated 1688 product identifiers. */
        productIds?: string;
        /** The search match mode, where 1 is fuzzy and 3 is exact. */
        searchType?: 1 | 3;
        /** The result sort direction. */
        sortType?: "desc" | "asc";
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of products per page.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The minimum wholesale price.
         * @minimum 0
         */
        beginPrice?: number;
        /**
         * The maximum wholesale price.
         * @minimum 0
         */
        endPrice?: number;
        /**
         * The minimum dropshipping price.
         * @minimum 0
         */
        beginConsignPrice?: number;
        /**
         * The maximum dropshipping price.
         * @minimum 0
         */
        endConsignPrice?: number;
        /**
         * The minimum sales order count.
         * @minimum 0
         */
        beginOrderCount?: number;
        /**
         * The maximum sales order count.
         * @minimum 0
         */
        endOrderCount?: number;
        /**
         * The minimum units sold.
         * @minimum 0
         */
        beginSaleCount?: number;
        /**
         * The maximum units sold.
         * @minimum 0
         */
        endSaleCount?: number;
        /** The supplier type, where 0 is any, 1 is shop, and 2 is factory. */
        companyType?: 0 | 1 | 2;
        /** The 1688 offer badge filter. */
        offerType?: 0 | 2 | 3 | 4 | 5 | 6;
        /** The sales statistics period in days. */
        cycle?: "7" | "30";
        /** The product search sort field. */
        sortField?: "orderCount7d" | "saleCount7d" | "saleVolume7d" | "orderCount30d" | "saleCount30d" | "saleVolume30d" | "offerCreateTime" | "price" | "consignPrice";
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Find visually similar Amazon products through LinkFox. */
    "linkfox.search_amazon_by_image": {
      input: {
        /**
         * A publicly accessible source image URL.
         * @maxLength 1000
         * @format uri
         */
        imageUrl: string;
        /** The Amazon marketplace domain. */
        amazonDomain: "amazon.com" | "amazon.co.uk" | "amazon.de" | "amazon.fr" | "amazon.it" | "amazon.es" | "amazon.co.jp" | "amazon.in";
        /** The result sort order. */
        sort?: "default" | "price-asc-rank" | "price-desc-rank" | "rating-asc-rank" | "rating-desc-rank" | "ratings-asc-rank" | "ratings-desc-rank";
        /**
         * The destination postal code for in-market delivery.
         * @maxLength 1000
         */
        deliveryZip?: string;
        /**
         * The destination country or area code for cross-border delivery.
         * @maxLength 1000
         */
        countryOrAreaCode?: string;
        /** Whether to enrich results with available Keepa metrics. */
        aggregateByKeepaData?: boolean;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Screen Amazon commercial opportunities with LinkFox market metrics. */
    "linkfox.search_amazon_opportunities": {
      input: {
        /** The supported Amazon opportunity market. */
        amazonDomain?: "US";
        /**
         * The maximum number of opportunity records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** A keyword fragment to match. */
        keyword?: string;
        /** A normalized niche name fragment to match. */
        nicheName?: string;
        /** The minimum 360-day niche revenue floor in USD. */
        nicheRevenue360dMinUsdAtLeastGte?: number;
        /** The maximum 360-day niche revenue ceiling in USD. */
        nicheRevenue360dMaxUsdAtLeastLte?: number;
        /**
         * The minimum peak monthly search volume.
         * @minimum 0
         */
        nichePeakSearchVolumeAtLeastGte?: number;
        /** The minimum year-over-year search-volume growth percentage. */
        nicheSearchVolumeYoyChangePctAtLeastGte?: number;
        /**
         * The maximum active brand count.
         * @minimum 0
         */
        nicheBrandCountLte?: number;
        /**
         * The maximum top-five product click share percentage.
         * @minimum 0
         * @maximum 100
         */
        nicheTop5ProductClickSharePctAtLeastLte?: number;
        /**
         * The maximum top-five brand share percentage.
         * @minimum 0
         * @maximum 100
         */
        featureTop5BrandSharePctAtLeastLte?: number;
        /** A case-sensitive top-brand name fragment. */
        featureTopBrandsContains?: string;
        /**
         * The minimum acceptable niche price floor in USD.
         * @minimum 0
         */
        priceMinUsdGte?: number;
        /**
         * The maximum acceptable niche price ceiling in USD.
         * @minimum 0
         */
        priceMaxUsdLte?: number;
        /**
         * The maximum mid-tier price click share percentage.
         * @minimum 0
         * @maximum 100
         */
        priceMidClickSharePctAtLeastLte?: number;
        /** The dominant customer gender segment. */
        demoGenderDominant?: "female" | "male" | "mixed" | "unspecified";
        /** The primary customer income tier. */
        demoPrimaryIncomeTier?: "low" | "middle_low" | "middle" | "middle_upper" | "upper_middle" | "high";
        /** An emerging trend tag fragment. */
        featureEmergingTrendTagsContains?: string;
        /** An uncommon differentiating feature tag fragment. */
        featureUncommonFeatureTagsContains?: string;
        /** The normalized leading negative review topic. */
        reviewNegativeTop1Topic?: string;
        /**
         * The minimum share for the leading negative review topic.
         * @minimum 0
         * @maximum 100
         */
        reviewNegativeTop1PctAtLeastGte?: number;
      };
      output: {
        /** The matching opportunity records. */
        opportunities: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search Amazon storefront products through LinkFox. */
    "linkfox.search_amazon_products": {
      input: {
        /**
         * The localized product keyword to search for.
         * @maxLength 1024
         */
        keyword?: string;
        /** The Amazon marketplace domain. */
        amazonDomain?: "amazon.com" | "amazon.co.uk" | "amazon.de" | "amazon.fr" | "amazon.it" | "amazon.es" | "amazon.co.jp" | "amazon.ca" | "amazon.com.au" | "amazon.com.br" | "amazon.in" | "amazon.nl" | "amazon.se" | "amazon.pl" | "amazon.sg" | "amazon.sa" | "amazon.ae" | "amazon.com.mx" | "amazon.com.tr" | "amazon.com.be" | "amazon.cn" | "amazon.eg";
        /**
         * The optional Amazon category node.
         * @maxLength 1000
         */
        node?: string;
        /**
         * The Amazon locale code, such as en_US or de_DE.
         * @maxLength 1000
         */
        language?: string;
        /** The Amazon storefront sort order. */
        sort?: "relevanceblender" | "price-asc-rank" | "price-desc-rank" | "review-rank" | "date-desc-rank" | "exact-aware-popularity-rank";
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The destination postal code used for storefront simulation.
         * @maxLength 1000
         */
        deliveryZip?: string;
        /** The storefront device profile. */
        device?: "desktop" | "mobile" | "tablet";
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search orders for an authorized Amazon store through LinkFox. */
    "linkfox.search_amazon_store_orders": {
      input: {
        /**
         * The seller identifier returned by the LinkFox store authorization action.
         * @minLength 1
         */
        sellerId: string;
        /** The Amazon Selling Partner region. */
        region: "NA" | "EU" | "FE";
        /**
         * The Amazon marketplace identifiers to search.
         * @minItems 1
         * @maxItems 50
         */
        marketplaceIds: Array<string>;
        /**
         * The inclusive order creation lower bound.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * The exclusive order creation upper bound.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * The inclusive order update lower bound.
         * @format date-time
         */
        lastUpdatedAfter?: string;
        /**
         * The exclusive order update upper bound.
         * @format date-time
         */
        lastUpdatedBefore?: string;
        /** Amazon order fulfillment status filters. */
        fulfillmentStatuses?: Array<string>;
        /** The fulfillment channel filters. */
        fulfilledBy?: Array<"MERCHANT" | "AMAZON">;
        /**
         * The maximum results per page.
         * @minimum 1
         * @maximum 100
         */
        maxResultsPerPage?: number;
        /** The pagination token returned by the previous search. */
        paginationToken?: string;
        /** Additional Amazon Orders API data sections to include. */
        includedData?: Array<string>;
      };
      output: {
        /** The Amazon orders returned by SP-API. */
        orders: Array<Record<string, unknown>>;
        /** The pagination token for the next order page when available. */
        nextToken: string | null;
      };
    };
    /** Search EchoTik TikTok products through LinkFox. */
    "linkfox.search_echotik_products": {
      input: {
        /**
         * A product keyword translated to the target market language.
         * @maxLength 1000
         */
        keyword?: string;
        /** The TikTok Shop market region. */
        region?: "US" | "ID" | "TH" | "PH" | "MY" | "VN" | "GB" | "MX" | "SG" | "SA" | "BR" | "ES" | "JP" | "DE" | "IT" | "FR";
        /**
         * A Chinese product category keyword.
         * @maxLength 1000
         */
        categoryKeywordCN?: string;
        /**
         * The minimum lifetime units sold.
         * @minimum 0
         */
        minTotalSaleCnt?: number;
        /**
         * The maximum lifetime units sold.
         * @minimum 0
         */
        maxTotalSaleCnt?: number;
        /**
         * The minimum units sold in the last 30 days.
         * @minimum 0
         */
        minTotalSale30dCnt?: number;
        /**
         * The maximum units sold in the last 30 days.
         * @minimum 0
         */
        maxTotalSale30dCnt?: number;
        /**
         * The minimum average SPU price.
         * @minimum 0
         */
        minSpuAvgPrice?: number;
        /**
         * The maximum average SPU price.
         * @minimum 0
         */
        maxSpuAvgPrice?: number;
        /**
         * The minimum product rating.
         * @minimum 0
         * @maximum 5
         */
        minProductRating?: number;
        /**
         * The maximum product rating.
         * @minimum 0
         * @maximum 5
         */
        maxProductRating?: number;
        /**
         * The minimum review count.
         * @minimum 0
         */
        minReviewCount?: number;
        /**
         * The minimum commission rate as a decimal.
         * @minimum 0
         * @maximum 1
         */
        minProductCommissionRate?: number;
        /**
         * The minimum creator count.
         * @minimum 0
         */
        minTotalIflCnt?: number;
        /**
         * The minimum shoppable video count.
         * @minimum 0
         */
        minTotalVideoCnt?: number;
        /**
         * The EchoTik sort field code.
         * @minimum 1
         * @maximum 7
         */
        productSortField?: number;
        /**
         * The sort direction, where 0 is ascending and 1 is descending.
         * @minimum 0
         * @maximum 1
         */
        sortType?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
    /** Search FastMoss TikTok products through LinkFox. */
    "linkfox.search_fastmoss_products": {
      input: {
        /** A product title keyword. */
        keyword?: string;
        /** The TikTok Shop market region. */
        region?: "US" | "GB" | "MX" | "ES" | "DE" | "IT" | "FR" | "ID" | "VN" | "MY" | "TH" | "PH" | "BR" | "JP" | "SG";
        /** An English TikTok product category name. */
        category?: string;
        /**
         * The shop type, where 1 is local and 2 is cross-border.
         * @minimum 1
         * @maximum 2
         */
        shopType?: number;
        /** Whether to return only top-selling products. */
        isTopSelling?: boolean;
        /** Whether to return only newly listed products. */
        isNewListed?: boolean;
        /** Whether to return only TikTok fully managed products. */
        isSshop?: boolean;
        /** Whether to return only free-shipping products. */
        isFreeShipping?: boolean;
        /** Whether to return only locally stocked products. */
        isLocalWarehouse?: boolean;
        /** The inclusive product sales range. */
        unitsSoldRange?: {
          /** The inclusive minimum value. */
          min?: number;
          /** The inclusive maximum value. */
          max?: number;
        };
        /** The inclusive decimal commission-rate range. */
        commissionRateRange?: {
          /** The inclusive minimum value. */
          min?: number;
          /** The inclusive maximum value. */
          max?: number;
        };
        /** The inclusive creator-count range. */
        creatorCountRange?: {
          /** The inclusive minimum value. */
          min?: number;
          /** The inclusive maximum value. */
          max?: number;
        };
        /** The FastMoss result sort field. */
        orderField?: "day7_units_sold" | "day7_gmv" | "commission_rate" | "total_units_sold" | "total_gmv" | "creator_count";
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of products per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The total result count when LinkFox provides it. */
        total: number | null;
        /** The products returned by LinkFox. */
        products: Array<Record<string, unknown>>;
        /** The LinkFox token cost when provided. */
        costToken: number | null;
      };
    };
  }
}
