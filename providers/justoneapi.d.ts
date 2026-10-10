import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieves the public product detail for a 1688 wholesale listing by item ID. Use it to review a known offer during product sourcing or catalog research. */
    "justoneapi.1688_product_details": {
      input: {
        /**
         * A unique product identifier on 1688.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches 1688 wholesale product listings by keyword. Use it to discover candidate products or suppliers during sourcing and market research. */
    "justoneapi.1688_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves an AliExpress product overview by item ID for the United States or global site. Use it to inspect a known listing for catalog review or search snippets. */
    "justoneapi.aliexpress_product_overview": {
      input: {
        /**
         * Numeric AliExpress item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * AliExpress site: US (default) or GLO (global).
         *
         * Available Values:
         * - `GLO`: Global site
         * - `US`: United States site
         * @default "US"
         */
        site?: "GLO" | "US";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches AliExpress products with optional query, page, sort, category, brand, location, attribute, price, locale, region, and currency controls. Use it for product discovery, catalog research, and marketplace assortment analysis. */
    "justoneapi.aliexpress_product_search": {
      input: {
        /** Product search query. */
        q?: string;
        /** One-based page number for pagination. */
        page?: string;
        /**
         * Sort order for product search results.
         *
         * Available Values:
         * - `default`: Default result order
         * - `salesDesc`: Sales volume, highest first
         * - `priceAsc`: Price, lowest first
         * - `priceDesc`: Price, highest first
         * @default "default"
         */
        sort?: "default" | "salesDesc" | "priceAsc" | "priceDesc";
        /** Category ID used to filter product search results. */
        catId?: string;
        /** Brand ID used to filter product search results. */
        brandId?: string;
        /** Location filter for product search results. */
        loc?: string;
        /** Search switches used to select optional result features. */
        switches?: string;
        /** Product attribute filter for search results. */
        attr?: string;
        /** Minimum product price filter, inclusive. */
        startPrice?: number;
        /** Maximum product price filter, inclusive. */
        endPrice?: number;
        /** Locale used for the AliExpress response. */
        locale?: string;
        /** AliExpress marketplace region. */
        region?: string;
        /** Currency code used for product prices. */
        currency?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves paginated Amazon Best Sellers for a category path in a selected country marketplace. Use it to study category leaders, discover popular products, or compare bestseller pages across marketplaces. */
    "justoneapi.amazon_best_sellers": {
      input: {
        /**
         * Best Sellers category path taken from an Amazon Best Sellers URL. It may be a category slug or a nested category path.
         * @minLength 1
         */
        category: string;
        /**
         * Country code for the Amazon product.
         *
         * Available Values:
         * - `US`: United States
         * - `AU`: Australia
         * - `BR`: Brazil
         * - `CA`: Canada
         * - `CN`: China
         * - `FR`: France
         * - `DE`: Germany
         * - `IN`: India
         * - `IT`: Italy
         * - `MX`: Mexico
         * - `NL`: Netherlands
         * - `SG`: Singapore
         * - `ES`: Spain
         * - `TR`: Turkey
         * - `AE`: United Arab Emirates
         * - `GB`: United Kingdom
         * - `JP`: Japan
         * - `SA`: Saudi Arabia
         * - `PL`: Poland
         * - `SE`: Sweden
         * - `BE`: Belgium
         * - `EG`: Egypt
         * - `ZA`: South Africa
         * - `IE`: Ireland
         * @default "US"
         */
        country?: "US" | "AU" | "BR" | "CA" | "CN" | "FR" | "DE" | "IN" | "IT" | "MX" | "NL" | "SG" | "ES" | "TR" | "AE" | "GB" | "JP" | "SA" | "PL" | "SE" | "BE" | "EG" | "ZA" | "IE";
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for an Amazon product identified by ASIN in a selected country marketplace. Use it to look up a known listing for catalog review, product comparison, or downstream commerce analysis. */
    "justoneapi.amazon_product_details": {
      input: {
        /**
         * ASIN (Amazon Standard Identification Number).
         * @minLength 1
         */
        asin: string;
        /**
         * Country code for the Amazon product.
         *
         * Available Values:
         * - `US`: United States
         * - `AU`: Australia
         * - `BR`: Brazil
         * - `CA`: Canada
         * - `CN`: China
         * - `FR`: France
         * - `DE`: Germany
         * - `IN`: India
         * - `IT`: Italy
         * - `MX`: Mexico
         * - `NL`: Netherlands
         * - `SG`: Singapore
         * - `ES`: Spain
         * - `TR`: Turkey
         * - `AE`: United Arab Emirates
         * - `GB`: United Kingdom
         * - `JP`: Japan
         * - `SA`: Saudi Arabia
         * - `PL`: Poland
         * - `SE`: Sweden
         * - `BE`: Belgium
         * - `EG`: Egypt
         * - `ZA`: South Africa
         * - `IE`: Ireland
         * @default "US"
         */
        country?: "US" | "AU" | "BR" | "CA" | "CN" | "FR" | "DE" | "IN" | "IT" | "MX" | "NL" | "SG" | "ES" | "TR" | "AE" | "GB" | "JP" | "SA" | "PL" | "SE" | "BE" | "EG" | "ZA" | "IE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Amazon marketplace products by keyword or ASIN with country, sort, condition, Prime-only, deals, and page controls. Use it to discover products for catalog research, price comparison, or competitive assortment analysis. */
    "justoneapi.amazon_product_search": {
      input: {
        /**
         * Search keyword or ASIN to find Amazon products.
         * @minLength 1
         */
        keyword: string;
        /**
         * Country code for the Amazon marketplace.
         *
         * Available Values:
         * - `US`: United States
         * - `AU`: Australia
         * - `BR`: Brazil
         * - `CA`: Canada
         * - `CN`: China
         * - `FR`: France
         * - `DE`: Germany
         * - `IN`: India
         * - `IT`: Italy
         * - `MX`: Mexico
         * - `NL`: Netherlands
         * - `SG`: Singapore
         * - `ES`: Spain
         * - `TR`: Turkey
         * - `AE`: United Arab Emirates
         * - `GB`: United Kingdom
         * - `JP`: Japan
         * - `SA`: Saudi Arabia
         * - `PL`: Poland
         * - `SE`: Sweden
         * - `BE`: Belgium
         * - `EG`: Egypt
         * - `ZA`: South Africa
         * - `IE`: Ireland
         * @default "US"
         */
        country?: "US" | "AU" | "BR" | "CA" | "CN" | "FR" | "DE" | "IN" | "IT" | "MX" | "NL" | "SG" | "ES" | "TR" | "AE" | "GB" | "JP" | "SA" | "PL" | "SE" | "BE" | "EG" | "ZA" | "IE";
        /**
         * Sort order for Amazon product search results.
         *
         * Available Values:
         * - `RELEVANCE`: Relevance
         * - `LOWEST_PRICE`: Lowest Price
         * - `HIGHEST_PRICE`: Highest Price
         * - `REVIEWS`: Reviews
         * - `NEWEST`: Newest
         * - `BEST_SELLERS`: Best Sellers
         * @default "RELEVANCE"
         */
        sortBy?: "RELEVANCE" | "LOWEST_PRICE" | "HIGHEST_PRICE" | "REVIEWS" | "NEWEST" | "BEST_SELLERS";
        /**
         * Product condition filter for Amazon search results.
         *
         * Available Values:
         * - `ALL`: All product conditions
         * - `NEW`: New products
         * - `USED`: Used products
         * - `RENEWED`: Renewed products
         * - `COLLECTIBLE`: Collectible products
         * @default "ALL"
         */
        productCondition?: "ALL" | "NEW" | "USED" | "RENEWED" | "COLLECTIBLE";
        /**
         * Whether to return only Prime-eligible products.
         * @default false
         */
        isPrime?: boolean;
        /**
         * Deals and discounts filter for Amazon search results.
         *
         * Available Values:
         * - `NONE`: Do not filter by deals or discounts
         * - `ALL_DISCOUNTS`: Return discounted products
         * - `TODAYS_DEALS`: Return today's deals
         * @default "NONE"
         */
        dealsAndDiscounts?: "NONE" | "ALL_DISCOUNTS" | "TODAYS_DEALS";
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the top reviews for an Amazon product identified by ASIN in a selected country marketplace. Use it to review prominent customer feedback for product research, sentiment analysis, or quality assessment. */
    "justoneapi.amazon_product_top_reviews": {
      input: {
        /**
         * ASIN (Amazon Standard Identification Number).
         * @minLength 1
         */
        asin: string;
        /**
         * Country code for the Amazon product.
         *
         * Available Values:
         * - `US`: United States
         * - `AU`: Australia
         * - `BR`: Brazil
         * - `CA`: Canada
         * - `CN`: China
         * - `FR`: France
         * - `DE`: Germany
         * - `IN`: India
         * - `IT`: Italy
         * - `MX`: Mexico
         * - `NL`: Netherlands
         * - `SG`: Singapore
         * - `ES`: Spain
         * - `TR`: Turkey
         * - `AE`: United Arab Emirates
         * - `GB`: United Kingdom
         * - `JP`: Japan
         * - `SA`: Saudi Arabia
         * - `PL`: Poland
         * - `SE`: Sweden
         * - `BE`: Belgium
         * - `EG`: Egypt
         * - `ZA`: South Africa
         * - `IE`: Ireland
         * @default "US"
         */
        country?: "US" | "AU" | "BR" | "CA" | "CN" | "FR" | "DE" | "IN" | "IT" | "MX" | "NL" | "SG" | "ES" | "TR" | "AE" | "GB" | "JP" | "SA" | "PL" | "SE" | "BE" | "EG" | "ZA" | "IE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves paginated Amazon products for a numeric category node in a selected country marketplace, with configurable result sorting. Use it to browse a category, compare assortments, or collect category-specific product candidates. */
    "justoneapi.amazon_products_by_category": {
      input: {
        /**
         * Numeric Amazon category node ID taken from the node query parameter of a category URL.
         * @minLength 1
         */
        categoryId: string;
        /**
         * Country code for the Amazon product.
         *
         * Available Values:
         * - `US`: United States
         * - `AU`: Australia
         * - `BR`: Brazil
         * - `CA`: Canada
         * - `CN`: China
         * - `FR`: France
         * - `DE`: Germany
         * - `IN`: India
         * - `IT`: Italy
         * - `MX`: Mexico
         * - `NL`: Netherlands
         * - `SG`: Singapore
         * - `ES`: Spain
         * - `TR`: Turkey
         * - `AE`: United Arab Emirates
         * - `GB`: United Kingdom
         * - `JP`: Japan
         * - `SA`: Saudi Arabia
         * - `PL`: Poland
         * - `SE`: Sweden
         * - `BE`: Belgium
         * - `EG`: Egypt
         * - `ZA`: South Africa
         * - `IE`: Ireland
         * @default "US"
         */
        country?: "US" | "AU" | "BR" | "CA" | "CN" | "FR" | "DE" | "IN" | "IT" | "MX" | "NL" | "SG" | "ES" | "TR" | "AE" | "GB" | "JP" | "SA" | "PL" | "SE" | "BE" | "EG" | "ZA" | "IE";
        /**
         * Sort by.
         *
         * Available Values:
         * - `RELEVANCE`: Relevance
         * - `LOWEST_PRICE`: Lowest Price
         * - `HIGHEST_PRICE`: Highest Price
         * - `REVIEWS`: Reviews
         * - `NEWEST`: Newest
         * - `BEST_SELLERS`: Best Sellers
         * @default "RELEVANCE"
         */
        sortBy?: "RELEVANCE" | "LOWEST_PRICE" | "HIGHEST_PRICE" | "REVIEWS" | "NEWEST" | "BEST_SELLERS";
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a supported Bilibili short share link that targets a video and return its public redirect URL. Use it to expand video links before subsequent Bilibili content lookup or processing. */
    "justoneapi.bilibili_share_link_resolution": {
      input: {
        /**
         * A Bilibili short share URL beginning with https://b23.tv/.
         * @minLength 1
         */
        shareUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Bilibili user profile identified by UID. Use it to look up a known account for creator research, profile review, or subsequent retrieval of that user's videos. */
    "justoneapi.bilibili_user_profile": {
      input: {
        /**
         * Bilibili User ID (UID).
         * @minLength 1
         */
        uid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves videos published by a Bilibili user identified by UID, with an optional continuation parameter from a prior response. Use it to browse a creator's uploads or continue through their video list. */
    "justoneapi.bilibili_user_published_videos": {
      input: {
        /**
         * Bilibili User ID (UID).
         * @minLength 1
         */
        uid: string;
        /** Pagination parameter from previous response. */
        param?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves relation statistics for a Bilibili user identified by WMID. Use it to compare audience relationships across creator accounts or track relation-count changes for a known user. */
    "justoneapi.bilibili_user_relation_stats": {
      input: {
        /**
         * Bilibili User ID (WMID).
         * @minLength 1
         */
        wmid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves caption data for a Bilibili video segment identified by BVID, AID, and CID. Use it to obtain subtitles for transcript extraction, accessibility review, or language-focused content analysis. */
    "justoneapi.bilibili_video_captions": {
      input: {
        /**
         * Bilibili Video ID (BVID).
         * @minLength 1
         */
        bvid: string;
        /**
         * Bilibili AID.
         * @minLength 1
         */
        aid: string;
        /**
         * Bilibili CID.
         * @minLength 1
         */
        cid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves comments for a Bilibili video identified by AID, with optional cursor pagination. Use it to review audience discussion, continue through comment pages, or support comment moderation and analysis. */
    "justoneapi.bilibili_video_comments": {
      input: {
        /**
         * Bilibili Archive ID (AID).
         * @minLength 1
         */
        aid: string;
        /** Pagination cursor. */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves one page of danmaku comments for a Bilibili video segment identified by AID and CID. Use it to review time-synchronized audience reactions or page through danmaku for a known video. */
    "justoneapi.bilibili_video_danmaku": {
      input: {
        /**
         * Bilibili Archive ID (AID).
         * @minLength 1
         */
        aid: string;
        /**
         * Bilibili Chat ID (CID).
         * @minLength 1
         */
        cid: string;
        /** Page number for pagination. */
        page?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Bilibili video identified by its BVID. Use it to look up a known video for content review, cataloging, or subsequent engagement analysis. */
    "justoneapi.bilibili_video_details": {
      input: {
        /**
         * Bilibili Video ID (BVID).
         * @minLength 1
         */
        bvid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Bilibili videos by keyword with page-based pagination and sorting by general ranking, play count, publish time, danmaku count, or favorites. Use it to support content discovery, topic research, or ranking-focused searches. */
    "justoneapi.bilibili_video_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Page number for pagination. */
        page?: string;
        /**
         * Sorting criteria for search results.
         *
         * Available Values:
         * - `general`: General
         * - `click`: Most Played
         * - `pubdate`: Latest
         * - `dm`: Most Danmaku
         * - `stow`: Most Favorite
         * @default "general"
         */
        order?: "general" | "click" | "pubdate" | "dm" | "stow";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves paginated Douban short comments for a movie or TV subject, ordered by time or newest rating. Use it to review concise audience feedback for a known subject. */
    "justoneapi.douban_movie_comments": {
      input: {
        /**
         * The unique ID for a movie or TV subject on Douban.
         * @minLength 1
         */
        subjectId: string;
        /**
         * Sort order for the result set.
         *
         * Available Values:
         * - `time`: Time
         * - `new_score`: New Score
         * @default "time"
         */
        sort?: "time" | "new_score";
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves paginated Douban long-form reviews for a movie or TV subject, ordered by time or popularity. Use it to browse in-depth audience reviews for a known subject. */
    "justoneapi.douban_movie_movie_reviews": {
      input: {
        /**
         * The unique ID for a movie or TV subject on Douban.
         * @minLength 1
         */
        subjectId: string;
        /**
         * Sort order for the result set.
         *
         * Available Values:
         * - `time`: Time
         * - `hotest`: Hotest
         * @default "time"
         */
        sort?: "time" | "hotest";
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a paginated list of movies currently featured in Douban's recent-hot collection. Use it to discover popular movie titles and continue through result pages. */
    "justoneapi.douban_movie_recent_hot_movie": {
      input: {
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a paginated list of TV titles currently featured in Douban's recent-hot collection. Use it to discover popular series and continue through result pages. */
    "justoneapi.douban_movie_recent_hot_tv": {
      input: {
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a single Douban long-form review by its review ID. Use it to inspect a known review after discovering it in a subject's review list. */
    "justoneapi.douban_movie_review_details": {
      input: {
        /**
         * The unique ID for a specific review on Douban.
         * @minLength 1
         */
        reviewId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the public detail page data for a Douban movie or TV subject by subject ID. Use it to inspect a known title before requesting its reviews or comments. */
    "justoneapi.douban_movie_subject_details": {
      input: {
        /**
         * The unique ID for a movie or TV subject on Douban.
         * @minLength 1
         */
        subjectId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) audience-distribution data for a creator, content channel, and selected relationship stage. Use it to assess audience fit for campaign targeting. */
    "justoneapi.douyin_creator_marketplace_xingtu_audience_distribution": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
        /**
         * Link type filter.
         *
         * Available Values:
         * - `CONNECTED`: Connected
         * - `AWARE`: Aware
         * - `INTERESTED`: Interested
         * - `LIKE`: Like
         * - `FOLLOW`: Follow
         * @default "CONNECTED"
         */
        linkType?: "CONNECTED" | "AWARE" | "INTERESTED" | "LIKE" | "FOLLOW";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) audience-touchpoint distribution data for a specified creator and content channel. Use it to compare audience-contact patterns during campaign research. */
    "justoneapi.douyin_creator_marketplace_xingtu_audience_touchpoint_distribution": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) comment keyword analysis for a specified creator. Use it to identify recurring audience discussion themes during creator research. */
    "justoneapi.douyin_creator_marketplace_xingtu_comment_keyword_analysis": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) commerce-seeding baseline information for a creator over a selectable 30- or 90-day period. Use it to research creators for product-seeding campaigns. */
    "justoneapi.douyin_creator_marketplace_xingtu_commerce_seeding_base_info": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Time range.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_90"
         */
        range?: "DAY_30" | "DAY_90";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) content keyword analysis for a specified creator. Use it to identify recurring content themes during creator positioning research. */
    "justoneapi.douyin_creator_marketplace_xingtu_content_keyword_analysis": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) conversion analysis for a creator, content channel, and 30- or 90-day period. Use it to compare creator conversion performance during commerce campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_conversion_analysis": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
        /**
         * Time range.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        range?: "DAY_30" | "DAY_90";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Lists Douyin Creator Marketplace (Xingtu) conversion-related videos or products for a creator, with industry, period, resource-type, and page filters. Use it to review commerce examples before creator selection. */
    "justoneapi.douyin_creator_marketplace_xingtu_conversion_resources": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
        /**
         * Industry category.
         *
         * Available Values:
         * - `ALL`: All
         * - `ELECTRONICS_AND_APPLIANCES`: Electronics and Appliances
         * - `SHOPPING`: Shopping
         * - `FOOD_AND_BEVERAGE`: Food and Beverage
         * - `CLOTHING_AND_ACCESSORIES`: Clothing and Accessories
         * - `HEALTHCARE_AND_MEDICAL`: Healthcare and Medical
         * - `MEDICAL_INSTITUTIONS`: Medical Institutions
         * - `HOME_AND_BUILDING_MATERIALS`: Home and Building Materials
         * - `LOCAL_SERVICES`: Local Services
         * - `BUSINESS_SERVICES`: Business Services
         * - `CULTURE_SPORTS_ENTERTAINMENT`: Leisure and Entertainment
         * - `BEAUTY_SERVICES`: Beauty Services
         * - `REAL_ESTATE`: Real Estate
         * - `EDUCATION_AND_TRAINING`: Education and Training
         * - `TRAVEL_AND_TOURISM`: Travel and Tourism
         * - `PUBLIC_SERVICES`: Public Services
         * - `GAMES`: Games
         * - `RETAIL`: Internet E-commerce Services
         * - `TRANSPORTATION_EQUIPMENT`: Transportation Equipment
         * - `AUTOMOTIVE`: Automotive
         * - `AGRICULTURE_FORESTRY_FISHERY`: Agriculture Forestry Fishery
         * - `CHEMICAL_AND_ENERGY`: Chemical and Energy
         * - `ELECTRONICS_AND_ELECTRICAL`: Electronics and Electrical
         * - `MACHINERY_EQUIPMENT`: Machinery Equipment
         * - `MEDIA_AND_INFORMATION`: Media and Information
         * - `LOGISTICS`: Logistics
         * - `TELECOMMUNICATIONS`: Telecommunications
         * - `FINANCIAL_SERVICES`: Financial Services
         * - `CATERING_SERVICES`: Catering Services
         * - `SOFTWARE_TOOLS`: Software Tools
         * - `FRANCHISING_AND_INVESTMENT`: Franchising and Investment
         * - `BEAUTY_AND_COSMETICS`: Beauty and Cosmetics
         * - `MOTHER_BABY_AND_PET`: Mother Baby and Pet
         * - `DAILY_CHEMICALS`: Daily Chemicals
         * - `PHYSICAL_BOOKS`: Physical Books
         * - `SOCIAL_AND_COMMUNICATION`: Social and Communication
         * - `CULTURAL_SUPPLIES`: Cultural Supplies
         * - `SPORTS_OUTDOOR`: Sports and Outdoors
         * @default "ALL"
         */
        industryId?: "ALL" | "ELECTRONICS_AND_APPLIANCES" | "SHOPPING" | "FOOD_AND_BEVERAGE" | "CLOTHING_AND_ACCESSORIES" | "HEALTHCARE_AND_MEDICAL" | "MEDICAL_INSTITUTIONS" | "HOME_AND_BUILDING_MATERIALS" | "LOCAL_SERVICES" | "BUSINESS_SERVICES" | "CULTURE_SPORTS_ENTERTAINMENT" | "BEAUTY_SERVICES" | "REAL_ESTATE" | "EDUCATION_AND_TRAINING" | "TRAVEL_AND_TOURISM" | "PUBLIC_SERVICES" | "GAMES" | "RETAIL" | "TRANSPORTATION_EQUIPMENT" | "AUTOMOTIVE" | "AGRICULTURE_FORESTRY_FISHERY" | "CHEMICAL_AND_ENERGY" | "ELECTRONICS_AND_ELECTRICAL" | "MACHINERY_EQUIPMENT" | "MEDIA_AND_INFORMATION" | "LOGISTICS" | "TELECOMMUNICATIONS" | "FINANCIAL_SERVICES" | "CATERING_SERVICES" | "SOFTWARE_TOOLS" | "FRANCHISING_AND_INVESTMENT" | "BEAUTY_AND_COSMETICS" | "MOTHER_BABY_AND_PET" | "DAILY_CHEMICALS" | "PHYSICAL_BOOKS" | "SOCIAL_AND_COMMUNICATION" | "CULTURAL_SUPPLIES" | "SPORTS_OUTDOOR";
        /**
         * Time range.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        range?: "DAY_30" | "DAY_90";
        /**
         * Resource type.
         *
         * Available Values:
         * - `VIDEO`: Video
         * - `PRODUCT`: Product
         * @default "VIDEO"
         */
        detailType?: "VIDEO" | "PRODUCT";
        /**
         * Page number.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) cost-performance information for a specified creator and content channel. Use it to compare creator efficiency during campaign budgeting. */
    "justoneapi.douyin_creator_marketplace_xingtu_cost_performance_analysis": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns the Douyin Creator Marketplace (Xingtu) business-card profile for a specified creator. Use it to review creator identity and business context before campaign outreach. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_business_card": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) channel information for a specified creator and content format. Use it to compare a creator's short-video, live, image-text, or short-drama presence. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_channel_metrics": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) commerce spread information for a specified creator. Use it to compare creators during commerce campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_commerce_spread_info": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) contract-related baseline information for a creator over a selectable 30- or 90-day period. Use it to review creator contract context during campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_contract_base_info": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Time range.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         */
        range?: "DAY_30" | "DAY_90";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Lists a Douyin Creator Marketplace (Xingtu) creator's homepage videos with keyword, video-type, assignment, date, and page filters. Use it to review relevant content before campaign selection. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_homepage_videos": {
      input: {
        /**
         * Author's unique Xingtu ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Page number, starting from 1.
         * @default 1
         */
        page?: number;
        /** Keyword used to search creator homepage videos. */
        keyword?: string;
        /**
         * Homepage video type filter.
         *
         * Available Values:
         * - `ALL`: All videos
         * - `PERSONAL`: Personal videos
         * - `XINGTU`: Xingtu videos
         * @default "ALL"
         */
        videoType?: "ALL" | "PERSONAL" | "XINGTU";
        /**
         * Whether to include only assigned videos. Xingtu usually shows this option when `videoType` is `XINGTU`.
         * @default false
         */
        onlyAssign?: boolean;
        /** Start publish date in yyyyMMdd format. The filter starts at 00:00:00 in Asia/Shanghai. */
        startDate?: string;
        /** End publish date in yyyyMMdd format. The filter ends at 23:59:59 in Asia/Shanghai. */
        endDate?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) creator-link metrics for a specified creator, content channel, and industry category. Use it to review creator link information in an industry context. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_link_metrics": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
        /**
         * Industry tag.
         *
         * Available Values:
         * - `ALL`: All
         * - `ELECTRONICS_AND_APPLIANCES`: Electronics and Appliances
         * - `SHOPPING`: Shopping
         * - `FOOD_AND_BEVERAGE`: Food and Beverage
         * - `CLOTHING_AND_ACCESSORIES`: Clothing and Accessories
         * - `HEALTHCARE_AND_MEDICAL`: Healthcare and Medical
         * - `MEDICAL_INSTITUTIONS`: Medical Institutions
         * - `HOME_AND_BUILDING_MATERIALS`: Home and Building Materials
         * - `LOCAL_SERVICES`: Local Services
         * - `BUSINESS_SERVICES`: Business Services
         * - `CULTURE_SPORTS_ENTERTAINMENT`: Leisure and Entertainment
         * - `BEAUTY_SERVICES`: Beauty Services
         * - `REAL_ESTATE`: Real Estate
         * - `EDUCATION_AND_TRAINING`: Education and Training
         * - `TRAVEL_AND_TOURISM`: Travel and Tourism
         * - `PUBLIC_SERVICES`: Public Services
         * - `GAMES`: Games
         * - `RETAIL`: Internet E-commerce Services
         * - `TRANSPORTATION_EQUIPMENT`: Transportation Equipment
         * - `AUTOMOTIVE`: Automotive
         * - `AGRICULTURE_FORESTRY_FISHERY`: Agriculture Forestry Fishery
         * - `CHEMICAL_AND_ENERGY`: Chemical and Energy
         * - `ELECTRONICS_AND_ELECTRICAL`: Electronics and Electrical
         * - `MACHINERY_EQUIPMENT`: Machinery Equipment
         * - `MEDIA_AND_INFORMATION`: Media and Information
         * - `LOGISTICS`: Logistics
         * - `TELECOMMUNICATIONS`: Telecommunications
         * - `FINANCIAL_SERVICES`: Financial Services
         * - `CATERING_SERVICES`: Catering Services
         * - `SOFTWARE_TOOLS`: Software Tools
         * - `FRANCHISING_AND_INVESTMENT`: Franchising and Investment
         * - `BEAUTY_AND_COSMETICS`: Beauty and Cosmetics
         * - `MOTHER_BABY_AND_PET`: Mother Baby and Pet
         * - `DAILY_CHEMICALS`: Daily Chemicals
         * - `PHYSICAL_BOOKS`: Physical Books
         * - `SOCIAL_AND_COMMUNICATION`: Social and Communication
         * - `CULTURAL_SUPPLIES`: Cultural Supplies
         * - `SPORTS_OUTDOOR`: Sports and Outdoors
         * @default "ALL"
         */
        industryTag?: "ALL" | "ELECTRONICS_AND_APPLIANCES" | "SHOPPING" | "FOOD_AND_BEVERAGE" | "CLOTHING_AND_ACCESSORIES" | "HEALTHCARE_AND_MEDICAL" | "MEDICAL_INSTITUTIONS" | "HOME_AND_BUILDING_MATERIALS" | "LOCAL_SERVICES" | "BUSINESS_SERVICES" | "CULTURE_SPORTS_ENTERTAINMENT" | "BEAUTY_SERVICES" | "REAL_ESTATE" | "EDUCATION_AND_TRAINING" | "TRAVEL_AND_TOURISM" | "PUBLIC_SERVICES" | "GAMES" | "RETAIL" | "TRANSPORTATION_EQUIPMENT" | "AUTOMOTIVE" | "AGRICULTURE_FORESTRY_FISHERY" | "CHEMICAL_AND_ENERGY" | "ELECTRONICS_AND_ELECTRICAL" | "MACHINERY_EQUIPMENT" | "MEDIA_AND_INFORMATION" | "LOGISTICS" | "TELECOMMUNICATIONS" | "FINANCIAL_SERVICES" | "CATERING_SERVICES" | "SOFTWARE_TOOLS" | "FRANCHISING_AND_INVESTMENT" | "BEAUTY_AND_COSMETICS" | "MOTHER_BABY_AND_PET" | "DAILY_CHEMICALS" | "PHYSICAL_BOOKS" | "SOCIAL_AND_COMMUNICATION" | "CULTURAL_SUPPLIES" | "SPORTS_OUTDOOR";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) creator-link structure data for a specified creator and content channel. Use it to compare creator link structures during performance research. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_link_structure": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) creator order-experience information for the last 30 or 90 days. Use it to review marketplace order history during creator evaluation. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_order_experience": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Time period.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        period?: "DAY_30" | "DAY_90";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns the Douyin Creator Marketplace (Xingtu) profile for a specified creator and content channel. Use it to review creator information before shortlisting or campaign outreach. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_profile": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Douyin Creator Marketplace (Xingtu) creators by keyword and structured filters for audience, pricing, content, performance, and campaign fit. Use it to build and compare campaign shortlists. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_search": {
      input: {
        /**
         * Search keyword.
         * @default ""
         */
        keyword?: string;
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
        /**
         * Creator search sorting. Values: FANS sorts by follower count descending, DEFAULT uses Xingtu score ranking.
         *
         * Available Values:
         * - `DEFAULT`: Platform default score ranking
         * - `FANS`: Sort by follower count descending
         * @default "FANS"
         */
        sort?: "DEFAULT" | "FANS";
        /**
         * Search criteria type.
         *
         * Available Values:
         * - `NICKNAME`: By Nickname
         * - `CONTENT`: By Content
         * @default "NICKNAME"
         */
        searchType?: "NICKNAME" | "CONTENT";
        /**
         * Marketing goal. Available values: BRAND_EXPOSURE/1/品牌曝光, CIRCLE_SEEDING/2/破圈种草, ACTION_CONVERSION/3/行动转化.
         *
         * Available Values:
         * - `BRAND_EXPOSURE`: Brand exposure
         * - `CIRCLE_SEEDING`: Out-of-circle seeding
         * - `ACTION_CONVERSION`: Action conversion
         */
        marketingTarget?: "BRAND_EXPOSURE" | "CIRCLE_SEEDING" | "ACTION_CONVERSION";
        /**
         * Recommended industry filter. Pass enum name, numeric industry ID, or Chinese industry label. Available values: - ALL/0/不限; - 1901: 3C及电器; - 1938: 购物; - 1903: 食品饮料; - 1904: 服装配饰; - 1905: 医药健康; - 1936: 医疗机构; - 1909: 家居建材; - 1907: 生活服务; - 1906: 商务服务; - 1921: 休闲娱乐; - 1937: 丽人; - 1908: 房地产; - 1910: 教育培训; - 1911: 出行旅游; - 1912: 社会公共; - 1913: 游戏; - 1914: 互联网电商服务; - 1915: 交通工具; - 1916: 汽车; - 1917: 农资园艺; - 1920: 机械设备; - 1939: 文化用品; - 1940: 运动户外; - 1922: 传媒资讯; - 1924: 通信; - 1925: 金融业; - 1927: 餐饮服务; - 1928: 工具类软件; - 1929: 招商加盟; - 1930: 美妆; - 1931: 母婴宠物; - 1933: 日化; - 1934: 实体书籍; - 1935: 社交通讯.
         *
         * Available Values:
         * - `ALL`: All
         * - `ELECTRONICS_AND_APPLIANCES`: Electronics and Appliances
         * - `SHOPPING`: Shopping
         * - `FOOD_AND_BEVERAGE`: Food and Beverage
         * - `CLOTHING_AND_ACCESSORIES`: Clothing and Accessories
         * - `HEALTHCARE_AND_MEDICAL`: Healthcare and Medical
         * - `MEDICAL_INSTITUTIONS`: Medical Institutions
         * - `HOME_AND_BUILDING_MATERIALS`: Home and Building Materials
         * - `LOCAL_SERVICES`: Local Services
         * - `BUSINESS_SERVICES`: Business Services
         * - `CULTURE_SPORTS_ENTERTAINMENT`: Leisure and Entertainment
         * - `BEAUTY_SERVICES`: Beauty Services
         * - `REAL_ESTATE`: Real Estate
         * - `EDUCATION_AND_TRAINING`: Education and Training
         * - `TRAVEL_AND_TOURISM`: Travel and Tourism
         * - `PUBLIC_SERVICES`: Public Services
         * - `GAMES`: Games
         * - `RETAIL`: Internet E-commerce Services
         * - `TRANSPORTATION_EQUIPMENT`: Transportation Equipment
         * - `AUTOMOTIVE`: Automotive
         * - `AGRICULTURE_FORESTRY_FISHERY`: Agriculture Forestry Fishery
         * - `CHEMICAL_AND_ENERGY`: Chemical and Energy
         * - `ELECTRONICS_AND_ELECTRICAL`: Electronics and Electrical
         * - `MACHINERY_EQUIPMENT`: Machinery Equipment
         * - `MEDIA_AND_INFORMATION`: Media and Information
         * - `LOGISTICS`: Logistics
         * - `TELECOMMUNICATIONS`: Telecommunications
         * - `FINANCIAL_SERVICES`: Financial Services
         * - `CATERING_SERVICES`: Catering Services
         * - `SOFTWARE_TOOLS`: Software Tools
         * - `FRANCHISING_AND_INVESTMENT`: Franchising and Investment
         * - `BEAUTY_AND_COSMETICS`: Beauty and Cosmetics
         * - `MOTHER_BABY_AND_PET`: Mother Baby and Pet
         * - `DAILY_CHEMICALS`: Daily Chemicals
         * - `PHYSICAL_BOOKS`: Physical Books
         * - `SOCIAL_AND_COMMUNICATION`: Social and Communication
         * - `CULTURAL_SUPPLIES`: Cultural Supplies
         * - `SPORTS_OUTDOOR`: Sports and Outdoors
         * @default "ALL"
         */
        industry?: "ALL" | "ELECTRONICS_AND_APPLIANCES" | "SHOPPING" | "FOOD_AND_BEVERAGE" | "CLOTHING_AND_ACCESSORIES" | "HEALTHCARE_AND_MEDICAL" | "MEDICAL_INSTITUTIONS" | "HOME_AND_BUILDING_MATERIALS" | "LOCAL_SERVICES" | "BUSINESS_SERVICES" | "CULTURE_SPORTS_ENTERTAINMENT" | "BEAUTY_SERVICES" | "REAL_ESTATE" | "EDUCATION_AND_TRAINING" | "TRAVEL_AND_TOURISM" | "PUBLIC_SERVICES" | "GAMES" | "RETAIL" | "TRANSPORTATION_EQUIPMENT" | "AUTOMOTIVE" | "AGRICULTURE_FORESTRY_FISHERY" | "CHEMICAL_AND_ENERGY" | "ELECTRONICS_AND_ELECTRICAL" | "MACHINERY_EQUIPMENT" | "MEDIA_AND_INFORMATION" | "LOGISTICS" | "TELECOMMUNICATIONS" | "FINANCIAL_SERVICES" | "CATERING_SERVICES" | "SOFTWARE_TOOLS" | "FRANCHISING_AND_INVESTMENT" | "BEAUTY_AND_COSMETICS" | "MOTHER_BABY_AND_PET" | "DAILY_CHEMICALS" | "PHYSICAL_BOOKS" | "SOCIAL_AND_COMMUNICATION" | "CULTURAL_SUPPLIES" | "SPORTS_OUTDOOR";
        /**
         * Whether to filter celebrity creators.
         * @default false
         */
        isSuperstar?: boolean;
        /** Raw follower count range in min-max format. Example: 1000-2000 means 1,000 to 2,000 followers; 5000000-10000000 means 5 million to 10 million followers. */
        followerRange?: string;
        /**
         * Creator quote type from the current Xingtu marketplace options.
         *
         * Available Values:
         * - `PRODUCT_PLACEMENT_VIDEO`: Product-placement video
         * - `CUSTOM_VIDEO`: Custom video
         * - `CUSTOM_SHORT_DRAMA_EPISODE`: Mini-drama episode
         * - `NATURAL_PLAY_CPM`: CPM naturally
         * - `SHORT_LIVE_SEEDING_VIDEO`: Short-live seeding video
         * - `SHORT_LIVE_WARMUP_VIDEO`: Short-live warm-up video
         * - `CELEBRITY_SHORT_LIVE_SEEDING`: Celebrity short-live seeding
         * - `CELEBRITY_SHORT_LIVE_WARMUP`: Celebrity short-live warm-up
         * - `CELEBRITY_VIDEO`: Celebrity video
         * - `COLLECTION_VIDEO`: Collection video
         * - `DOUYIN_SHORT_VIDEO_CO_CREATION_MAIN_CREATOR`: Douyin short video co-creation - main creator
         * - `DOUYIN_SHORT_VIDEO_CO_CREATION_PARTICIPANT`: Douyin short video co-creation - participant
         */
        kolPriceType?: "PRODUCT_PLACEMENT_VIDEO" | "CUSTOM_VIDEO" | "CUSTOM_SHORT_DRAMA_EPISODE" | "NATURAL_PLAY_CPM" | "SHORT_LIVE_SEEDING_VIDEO" | "SHORT_LIVE_WARMUP_VIDEO" | "CELEBRITY_SHORT_LIVE_SEEDING" | "CELEBRITY_SHORT_LIVE_WARMUP" | "CELEBRITY_VIDEO" | "COLLECTION_VIDEO" | "DOUYIN_SHORT_VIDEO_CO_CREATION_MAIN_CREATOR" | "DOUYIN_SHORT_VIDEO_CO_CREATION_PARTICIPANT";
        /** Creator quote range in min-max format (e.g., 10000-50000). Requires kolPriceType; omit kolPriceRange to use the full range for the selected quote type. */
        kolPriceRange?: string;
        /** Creator category filter. Pass Xingtu first-level or second-level category labels separated by commas. Available values: - 美妆: 美妆教程, 妆容展示, 护肤保养, 美妆测评种草; - 时尚: 穿搭, 街拍, 造型, 时尚媒体; - 萌宠: 日常宠物, 特别宠物, 宠物周边; - 测评: 美妆测评, 3C数码测评, 汽车测评, 美食产品测评, 母婴产品测评, 综合测评, 酒店测评; - 游戏: 游戏剧情, 游戏解说, 游戏资讯, 游戏其他, 游戏录屏, 游戏集锦; - 二次元: 二次元真人, 动画漫画, 配音声优, 宅物手办; - 旅行: 旅行记录, 旅行攻略, 旅行推荐, 户外生活; - 汽车: 汽车测评, 汽车知识, 汽车周边; - 生活: 生活记录, 生活小窍门, 好物推荐, 健康养生, 婚恋; - 音乐: 歌曲演唱, 乐器演奏, 音乐教学, 音乐其他, 音乐剪辑; - 舞蹈; - 美食: 美食教程, 美食探店, 美食产品测评, 乡村野食, 美食其他, 酒类; - 母婴亲子: 育儿科普, 萌娃日常, 亲子互动, 测评种草; - 运动健身: 健身, 极限运动, 体育资讯, 冰雪, 垂钓, 格斗, 球类项目, 综合体育; - 科技数码: 3C数码, 家居电器, 科技; - 教育培训: 考学培训, 语言教学, 个人管理, 职业教育; - 颜值达人: 美女, 帅哥; - 生活家居: 硬装, 软装, 生活技巧, 家居氛围; - 才艺技能: 创意才能, 手工, 摄影, 绘画, 其他才艺; - 影视娱乐: 影视解说, 影视混剪, 明星资讯, 综艺解说, 综艺混剪; - 艺术文化: 传统文化, 人文科普, 自然科学; - 财经投资: 传统金融, 互联网金融, 财经知识; - 三农; - 剧情搞笑: 剧情, 搞笑; - 情感; - 园艺; - 房产: 其他房产, 房产知识, 房产及投资, 楼盘评测, 楼市资讯, 租房; - 随拍; - 媒体号. Example: 美妆,穿搭,剧情搞笑 */
        contentTag?: string;
        /** Content theme filter. Pass Xingtu second-level content theme labels separated by commas. Only labels listed after each colon are accepted; category headings before the colons are descriptive only and must not be passed. Available values include: - 妆容妆造: 淡妆教程, 变装造型, 韩系妆容, 甜美妆容, 清透妆容, 复古妆容, 男性妆容; - 穿搭指南: 日常穿搭, 简约气质穿搭, 国风穿搭, 运动穿搭, 通勤穿搭, 旅行穿搭, 职业穿搭, 约会穿搭; - 亲子育儿: 亲子活动, 亲子沟通, 学前训练, 新手爸妈指导, 儿童护理, 宝宝辅食, 奶粉测评, 孕产饮食; - 美食教程与测评: 地方美食, 家常菜谱, 美食探店, 零食测评, 酒水品鉴, 厨房用品, 海鲜烹饪, 减脂美食; - 精彩车生活: 汽车行业资讯, 用车知识, 车辆保养, 自驾旅行, 新能源汽车资讯, 汽车用品测评, SUV测评; - 手机/数码/家电分享: 科技科普, 电子产品测评, 家电推荐, 手机评测, 智能家居, AI应用, 数码开箱; - 剧情演绎: 搞笑剧情, 剧情反转, 情感演绎, 家庭幽默演绎, 职场趣闻, 古风剧情, 生存挑战; - 萌宠养护: 宠物狗故事, 动物萌态, 宠物养护, 猫咪萌态, 宠物健康, 宠物护理, 宠物救助; - 旅行攻略: 国内旅行, 海外旅行, 城市旅行攻略, 酒店体验, 露营体验, 亲子旅行, 网红景点种草; - 家居好物: 清洁技巧, 生活好物评测, 家居选购, 家居装修, 家居收纳, 家装避坑, 房间布置; - 运动户外: 户外运动, 健身塑形, 赛事回顾, 体重管理, 极限运动, 跑步健身, 户外露营. Example: 亲子活动,宝宝辅食 */
        contentTheme?: string;
        /** Creator persona or background labels. Pass Xingtu labels or numeric tag IDs separated by commas. Available values: - 人群属性: Z世代, 新锐白领, 精致妈妈, 都市蓝领, 资深中产, 小镇青年, 小镇中老年, 都市银发; - 社会身份: 音乐人, 非遗传人, 画家; - 主要出镜人物: 海外华人, 外国友人, 情侣, 夫妻, 家庭, 朋友, 同事, 亲子, 个人; - 肤质肤色: 混油皮, 干皮, 油皮, 敏感肌, 痘痘肌, 黄皮, 白皮, 瑕疵皮; - 皮肤养护: 美白, 抗老, 祛皱, 抗炎, 修复, 控油, 眼部护理, 补水保湿, 祛斑, 祛痘祛闭口, 隔离防晒; - 母婴阶段: 孕期, 0-6月, 7-12月, 1-3岁, 3-6岁, 6-12岁, 12-15岁, 15-18岁; - 爱好: 摄影, 时尚穿搭, 美食制作, 科普, 星座, 绘画; - 职业: 法律从业者, 航空业从业者, 健身/舞蹈教练, 专业美食从业者, 室内设计师; - 学历: 大学生, 硕士生, 博士, 留学生; - 黄v认证: 美妆创作者, 体育创作者, 媒体人/主持人, 科技创作者, 运动员; - Other labels: 潮流运动, 球类, 非球类, 室内健身, 城市运动, 户外运动, 数码潮流玩家, 户外爱好者, 室内设计师, 品酒家/调酒师, 美食评论人, 母婴行业专家, 奶爸, 旧屋改造, 装修设计, 收纳, 新生儿妈妈, 孕妈, 时尚妈妈, 二三胎妈妈, 西餐, 火锅, 国风爱好者, 成分党. Example: 大学生,美妆创作者 */
        personaTag?: string;
        /**
         * Creator gender. Available values: MALE/1/男性, FEMALE/2/女性.
         *
         * Available Values:
         * - `MALE`: Male
         * - `FEMALE`: Female
         */
        gender?: "MALE" | "FEMALE";
        /** Creator location filter. Pass Chinese province or city names separated by commas. Available province values include: 北京市, 天津市, 河北省, 山西省, 内蒙古自治区, 辽宁省, 吉林省, 黑龙江省, 上海市, 江苏省, 浙江省, 安徽省, 福建省, 江西省, 山东省, 河南省, 湖北省, 湖南省, 广东省, 广西壮族自治区, 海南省, 重庆市, 四川省, 贵州省, 云南省, 西藏自治区, 陕西省, 甘肃省, 青海省, 宁夏回族自治区, 新疆维吾尔自治区, 台湾省, 香港特别行政区, 澳门特别行政区. Example: 广东省,深圳市 */
        location?: string;
        /** Creator tonality labels. Pass Xingtu first-level or second-level tonality labels separated by commas. Available values: - 身份/爱好: 马术, 高尔夫, 橄榄球, 时尚爱好者, 企业高管, 汽车爱好者, 学者专家, 古玩收藏; - 精致达人: 设计师, 高阶潮玩, 职业模特, 造型顾问, 独立设计师, 美术/画廊/展览, 歌剧舞台剧, 流行, 潮流买手, 电影; - 潮流酷: 冲浪, 浮潜, 说唱, 滑雪, 普拉提, 网球. Example: 精致达人,设计师 */
        tonalityTag?: string;
        /** Connected user count range. Pass raw user counts in min-max format. Example: 1000000-3000000 */
        connectedUserRange?: string;
        /** Audience profile filter from Xingtu Audience Image. Pass one or more shortcut values separated by commas. Only the values listed below are accepted. For gender thresholds, pass at most one GENDER_MALE_* value and at most one GENDER_FEMALE_* value. Available values: - Gender: GENDER_MALE_50, GENDER_MALE_60, GENDER_MALE_70, GENDER_MALE_80, GENDER_FEMALE_50, GENDER_FEMALE_60, GENDER_FEMALE_70, GENDER_FEMALE_80; - Age: AGE_18_23, AGE_24_30, AGE_31_40, AGE_41_50, AGE_GT_50; - Device: DEVICE_IPHONE, DEVICE_HUAWEI, DEVICE_XIAOMI, DEVICE_VIVO, DEVICE_OPPO; - City tier: CITY_TIER_1, CITY_TIER_2, CITY_TIER_3, CITY_TIER_4, CITY_TIER_5; - Average order amount: SPEND_0_50, SPEND_50_100, SPEND_100_200, SPEND_200_500, SPEND_GT_500; - Crowd profile: CROWD_REFINED_MOTHER(53 精致妈妈), CROWD_URBAN_SILVER(54 都市银发), CROWD_NEW_WHITE_COLLAR(55 新锐白领), CROWD_SENIOR_MIDDLE_CLASS(56 资深中产), CROWD_URBAN_BLUE_COLLAR(57 都市蓝领), CROWD_GEN_Z(58 Z世代), CROWD_TOWN_MIDDLE_AGED(59 小镇中老年), CROWD_TOWN_YOUTH(60 小镇青年). Numeric IDs and Chinese labels in parentheses are for reference only and are not accepted as input values. Example: GENDER_FEMALE_50,CROWD_REFINED_MOTHER */
        audienceImage?: string;
        /** Fan profile filter from Xingtu Fan Image. Pass one or more shortcut values separated by commas. Only the values listed below are accepted. For gender thresholds, pass at most one GENDER_MALE_* value and at most one GENDER_FEMALE_* value. Available values: - Gender: GENDER_MALE_50, GENDER_MALE_60, GENDER_MALE_70, GENDER_MALE_80, GENDER_FEMALE_50, GENDER_FEMALE_60, GENDER_FEMALE_70, GENDER_FEMALE_80; - Age: AGE_18_23, AGE_24_30, AGE_31_40, AGE_41_50, AGE_GT_50; - Device: DEVICE_IPHONE, DEVICE_HUAWEI, DEVICE_XIAOMI, DEVICE_VIVO, DEVICE_OPPO; - City tier: CITY_TIER_1, CITY_TIER_2, CITY_TIER_3, CITY_TIER_4, CITY_TIER_5; - Average order amount: SPEND_0_50, SPEND_50_100, SPEND_100_200, SPEND_200_500, SPEND_GT_500; - Crowd profile: CROWD_REFINED_MOTHER(53 精致妈妈), CROWD_URBAN_SILVER(54 都市银发), CROWD_NEW_WHITE_COLLAR(55 新锐白领), CROWD_SENIOR_MIDDLE_CLASS(56 资深中产), CROWD_URBAN_BLUE_COLLAR(57 都市蓝领), CROWD_GEN_Z(58 Z世代), CROWD_TOWN_MIDDLE_AGED(59 小镇中老年), CROWD_TOWN_YOUTH(60 小镇青年). Numeric IDs and Chinese labels in parentheses are for reference only and are not accepted as input values. Example: GENDER_FEMALE_50,CROWD_REFINED_MOTHER */
        fansImage?: string;
        /** Expected play count range. Use raw counts in min-max format. Page presets include 10000000 or above, 5000000-10000000, 3000000-5000000, 1000000-3000000, 100000-1000000, and 0-100000. For open-ended presets, pass a high upper bound such as 10000000-1000000000. Example: 1000000-3000000. */
        expectedPlayRange?: string;
        /** Expected CPM range in min-max format. Example values matching Xingtu packs: 0-10, 0-20, 0-30, 0-50, 0-100, 100-1000000. */
        expectedCpmRange?: string;
        /** Expected CPE range in min-max format. Example values matching Xingtu packs: 0-1, 0-2, 0-3, 0-5, 0-10, 10-1000000. */
        expectedCpeRange?: string;
        /** Interaction rate range in decimal min-max format. Example values: 0.01-1 for 1% or above, 0.02-1 for 2% or above. */
        interactionRateRange?: string;
        /** Completion rate range in decimal min-max format. Example values: 0.1-1 for 10% or above, 0.2-1 for 20% or above. */
        completionRateRange?: string;
        /** Viral content rate range in decimal min-max format. Page presets include 0-0.1, 0.1-0.25, 0.25-0.5, 0.5-0.99, and 0.99 or above. For open-ended presets, pass a high upper bound such as 0.99-1. Example: 0.1-0.25. */
        viralRateRange?: string;
        /** In-progress task count range. Place a colon between the day count and the min-max range; omit either bound for an open range. Example: 30:8- */
        progressTaskRange?: string;
        /**
         * Whether to include only Xingtu curated creators under Topic Recommendations.
         * @default false
         */
        isCuratedAuthor?: boolean;
        /**
         * Activity-curated creator list under Xingtu Topic Recommendations. Select at most one value. Pass an enum name, numeric list ID, or Chinese label. Available values: SHORT_LIVE_ENTERTAINMENT_CREATORS/7540478044453486642/短直联动娱播达人; SHORT_DRAMA_ACTORS/7591708652957155378/短剧演员; WECHAT_QUICK_CONNECT_CREATORS/7644854622347100210/企微可快速建联达人; AI_STAR_PLAN_CREATORS/7658250094571814938/AI星企划达人; COMMERCE_ADVANTAGE_CREATORS/7648906835038568499/带货优势达人; HIGH_VALUE_CREATORS/7656639212045516826/高性价比达人; SEEDING_ADVANTAGE_CREATORS/7663404694186033202/种草优势达人; BASKETBALL_CREATORS/7501674900550238234/运动圈层达人-篮球; PREMIUM_CONTENT_MEDIA/7586629331582222374/精品内容型媒体推荐; TREND_SETTING_MEDIA/7586616213569781769/趋势造风型媒体推荐; FACTORY_TRACEABILITY_MEDIA/7586616269403832370/探厂溯源型媒体推荐; RUNNING_CREATORS/7501675026170281994/运动圈层达人-跑步; LIGHT_OUTDOOR_CREATORS/7501674458878181413/运动圈层达人-轻户外; FITNESS_CREATORS/7501674307430236197/运动圈层达人-运动健身; YOGA_CREATORS/7501678481074929674/运动圈层达人-瑜伽; STREET_SPORTS_CREATORS/7501677564604383259/运动圈层达人-街头运动; CYCLING_CREATORS/7501677556094042149/运动圈层达人-骑行; FOOTBALL_CREATORS/7501674900550483994/运动圈层达人-足球; FISHING_CREATORS/7501676465915215881/运动圈层达人-垂钓; BEAUTY_QUALITY_CREATORS/7460387606572875826/美妆质感达人.
         *
         * Available Values:
         * - `SHORT_LIVE_ENTERTAINMENT_CREATORS`: Short-video and livestream entertainment creators
         * - `SHORT_DRAMA_ACTORS`: Short-drama actors
         * - `WECHAT_QUICK_CONNECT_CREATORS`: Creators available for fast WeChat Work contact
         * - `AI_STAR_PLAN_CREATORS`: AI Star Plan creators
         * - `COMMERCE_ADVANTAGE_CREATORS`: Creators with commerce conversion advantages
         * - `HIGH_VALUE_CREATORS`: High-value creators
         * - `SEEDING_ADVANTAGE_CREATORS`: Creators with product-seeding advantages
         * - `BASKETBALL_CREATORS`: Basketball creators
         * - `PREMIUM_CONTENT_MEDIA`: Premium-content media recommendations
         * - `TREND_SETTING_MEDIA`: Trend-setting media recommendations
         * - `FACTORY_TRACEABILITY_MEDIA`: Factory and product-origin media recommendations
         * - `RUNNING_CREATORS`: Running creators
         * - `LIGHT_OUTDOOR_CREATORS`: Light-outdoor creators
         * - `FITNESS_CREATORS`: Exercise and fitness creators
         * - `YOGA_CREATORS`: Yoga creators
         * - `STREET_SPORTS_CREATORS`: Street-sports creators
         * - `CYCLING_CREATORS`: Cycling creators
         * - `FOOTBALL_CREATORS`: Football creators
         * - `FISHING_CREATORS`: Fishing creators
         * - `BEAUTY_QUALITY_CREATORS`: Beauty creators with premium visual quality
         */
        authorList?: "SHORT_LIVE_ENTERTAINMENT_CREATORS" | "SHORT_DRAMA_ACTORS" | "WECHAT_QUICK_CONNECT_CREATORS" | "AI_STAR_PLAN_CREATORS" | "COMMERCE_ADVANTAGE_CREATORS" | "HIGH_VALUE_CREATORS" | "SEEDING_ADVANTAGE_CREATORS" | "BASKETBALL_CREATORS" | "PREMIUM_CONTENT_MEDIA" | "TREND_SETTING_MEDIA" | "FACTORY_TRACEABILITY_MEDIA" | "RUNNING_CREATORS" | "LIGHT_OUTDOOR_CREATORS" | "FITNESS_CREATORS" | "YOGA_CREATORS" | "STREET_SPORTS_CREATORS" | "CYCLING_CREATORS" | "FOOTBALL_CREATORS" | "FISHING_CREATORS" | "BEAUTY_QUALITY_CREATORS";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns the Douyin Creator Marketplace (Xingtu) side-card baseline information for a specified creator. Use it to review a creator's marketplace overview during shortlisting. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_side_base_info": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) tags for a specified creator. Use it to classify creators and compare their fit for campaign briefs. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_tags": {
      input: {
        /**
         * Creator's unique Xingtu ID.
         * @minLength 1
         */
        starAuthorId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns whether a specified creator can be displayed in Douyin Creator Marketplace (Xingtu) for the selected content channel. Use it to check creator availability before building a campaign shortlist. */
    "justoneapi.douyin_creator_marketplace_xingtu_creator_visibility_status": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) follower or loyal-follower distribution data for a specified creator. Use it to compare audience-profile distributions during creator selection. */
    "justoneapi.douyin_creator_marketplace_xingtu_follower_distribution": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Author type filter.
         *
         * Available Values:
         * - `FAN`: Fan
         * - `DIE_HARD_FAN`: Die Hard Fan
         * @default "FAN"
         */
        authorType?: "FAN" | "DIE_HARD_FAN";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) daily follower trend data for a specified creator and date range. Use it to review follower growth patterns during creator evaluation. */
    "justoneapi.douyin_creator_marketplace_xingtu_follower_growth_trend": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Start Date (yyyy-MM-dd).
         * @minLength 1
         */
        startDate: string;
        /**
         * End Date (yyyy-MM-dd).
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) report analysis for a specified video item. Use it to evaluate a video's reported performance during campaign review. */
    "justoneapi.douyin_creator_marketplace_xingtu_item_report_analysis": {
      input: {
        /**
         * Item's unique ID.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) report trend data for a specified video item. Use it to review how a video's reported performance changes over time. */
    "justoneapi.douyin_creator_marketplace_xingtu_item_report_trends": {
      input: {
        /**
         * Item's unique ID.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) live-stream statistics for a creator, with live-room, period, marketplace-order, and flow filters. Use it to compare live-streaming creators for campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_live_statistics": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Live room type filter.
         *
         * Available Values:
         * - `ALL`: All live rooms
         * - `GAME`: Game live rooms
         * - `ECOMMERCE`: E-commerce live rooms
         * - `OTHER`: Other live rooms
         */
        liveType?: "ALL" | "GAME" | "ECOMMERCE" | "OTHER";
        /**
         * Live data time period.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         */
        period?: "DAY_30" | "DAY_90";
        /**
         * Whether to include only Xingtu marketplace orders.
         * @default false
         */
        onlyStarOrder?: boolean;
        /**
         * Flow type filter.
         *
         * Available Values:
         * - `EXCLUDE`: Exclude
         * - `INCLUDE`: Include
         */
        flowType?: "EXCLUDE" | "INCLUDE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) live audience or follower watch-distribution data for a creator and selected live-room type. Use it to assess live audience fit for a campaign. */
    "justoneapi.douyin_creator_marketplace_xingtu_live_watch_distribution": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Live audience profile type.
         *
         * Available Values:
         * - `AUDIENCE`: Viewer profile
         * - `FANS`: Follower profile
         */
        liveCrowdType?: "AUDIENCE" | "FANS";
        /**
         * Live room type filter.
         *
         * Available Values:
         * - `ALL`: All live rooms
         * - `GAME`: Game live rooms
         * - `ECOMMERCE`: E-commerce live rooms
         * - `OTHER`: Other live rooms
         */
        liveType?: "ALL" | "GAME" | "ECOMMERCE" | "OTHER";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) marketing information for a specified creator and content channel. Use it to compare creator commercial offerings during campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_marketing_metrics": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) recommended videos for a specified creator and content channel. Use it to inspect representative content during creator research. */
    "justoneapi.douyin_creator_marketplace_xingtu_recommended_videos": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) showcase items for a creator, with content-channel, assignment, and flow filters. Use it to review a creator's marketplace showcase during commerce campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_showcase_items": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
        /**
         * Whether to only include assigned items.
         * @default false
         */
        onlyAssign?: boolean;
        /**
         * Flow type filter.
         *
         * Available Values:
         * - `EXCLUDE`: Exclude
         * - `INCLUDE`: Include
         * @default "EXCLUDE"
         */
        flowType?: "EXCLUDE" | "INCLUDE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) spread metrics for a creator, with channel, period, video-type, assignment, and flow filters. Use it to compare creator spread performance during campaign planning. */
    "justoneapi.douyin_creator_marketplace_xingtu_spread_metrics": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
        /**
         * Time range.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        range?: "DAY_30" | "DAY_90";
        /**
         * Video type.
         *
         * Available Values:
         * - `PERSONAL_VIDEO`: Personal video
         * - `XINTU_VIDEO`: Xingtu video
         * @default "PERSONAL_VIDEO"
         */
        type?: "PERSONAL_VIDEO" | "XINTU_VIDEO";
        /**
         * Whether to only include assigned videos.
         * @default false
         */
        onlyAssign?: boolean;
        /**
         * Flow type filter.
         *
         * Available Values:
         * - `EXCLUDE`: Exclude
         * - `INCLUDE`: Include
         * @default "EXCLUDE"
         */
        flowType?: "EXCLUDE" | "INCLUDE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) report details for a specified video item. Use it to inspect a video's marketplace report during content performance analysis. */
    "justoneapi.douyin_creator_marketplace_xingtu_video_details": {
      input: {
        /**
         * Item's unique ID.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Douyin Creator Marketplace (Xingtu) video-distribution data for a specified creator and content channel. Use it to analyze how the creator's videos are distributed during campaign research. */
    "justoneapi.douyin_creator_marketplace_xingtu_video_distribution": {
      input: {
        /**
         * Author's unique ID.
         * @minLength 1
         */
        oAuthorId: string;
        /**
         * Platform type.
         *
         * Available Values:
         * - `SHORT_VIDEO`: Short video
         * - `LIVE_STREAMING`: Live streaming
         * - `PICTURE_TEXT`: Picture and text
         * - `SHORT_DRAMA`: Short drama
         * @default "SHORT_VIDEO"
         */
        platform?: "SHORT_VIDEO" | "LIVE_STREAMING" | "PICTURE_TEXT" | "SHORT_DRAMA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves paginated customer comments for a Douyin E-commerce product by item ID. Use it to review product feedback for a known marketplace item. */
    "justoneapi.douyin_e_commerce_item_comments": {
      input: {
        /**
         * The unique ID of the item on Douyin E-commerce.
         * @minLength 1
         */
        itemId: string;
        /** Page number for paginated comments. */
        page?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Douyin E-commerce product details by item ID. Use it to inspect a known marketplace item for catalog or product research. */
    "justoneapi.douyin_e_commerce_item_details": {
      input: {
        /**
         * The unique ID of the item on Douyin E-commerce.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Douyin E-commerce products by keyword with page and search-ID pagination. Use it to discover marketplace products and continue a multi-page search. */
    "justoneapi.douyin_e_commerce_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Page number for pagination. */
        page?: string;
        /**
         * Search ID; use the search_id value returned by the last response for subsequent pages.
         * @default ""
         */
        searchId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves SKU information for a Douyin E-commerce product by item ID. Returns code 202 when the product is not supported. */
    "justoneapi.douyin_e_commerce_product_sku_info": {
      input: {
        /**
         * The unique ID of the item on Douyin E-commerce.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a paginated product list for a Douyin E-commerce shop by shop ID. Use it to browse a known seller's marketplace catalog page by page. */
    "justoneapi.douyin_e_commerce_shop_product_list": {
      input: {
        /**
         * The unique ID of the shop on Douyin E-commerce.
         * @minLength 1
         */
        shopId: string;
        /** Page number for pagination. */
        page?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies to a top-level Douyin (TikTok China) video comment with page-based pagination. Use it to inspect threaded discussions and review feedback under a known comment. */
    "justoneapi.douyin_tiktok_china_comment_replies": {
      input: {
        /**
         * The unique identifier of the top-level comment.
         * @minLength 1
         */
        commentId: string;
        /**
         * Page number (starting from 1).
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Douyin (TikTok China) content with optional keyword, category, video-type, ranking, pagination, engagement, and creator-follower filters. Use it to support trend discovery and campaign research. */
    "justoneapi.douyin_tiktok_china_hot_search": {
      input: {
        /** Optional search keyword. */
        keyword?: string;
        /**
         * Top-level content type. Only one content type can be selected.
         *
         * Available Values:
         * - `ALL`: All content types.
         * - `FASHION`: Fashion.
         * - `TECHNOLOGY`: Technology.
         * - `SCIENCE`: Science.
         * - `PHOTOGRAPHY`: Photography and videography.
         * - `FOOD`: Food.
         * - `MOTHER_BABY`: Mother and baby.
         * - `PARENTING`: Parenting.
         * - `DRAMA`: Drama.
         * - `GAME`: Game.
         * - `AUTOMOTIVE`: Automotive.
         * - `ANIMAL`: Animal.
         * - `TRAVEL`: Travel.
         * - `DANCE`: Dance.
         * - `TRADITIONAL_CULTURE`: Traditional culture.
         * - `ART`: Art.
         * - `SPORTS`: Sports.
         * - `MUSIC`: Music.
         * - `LIFE_RECORD`: Life records.
         * - `HOME_LIVING`: Home and living.
         * - `LEISURE_ENTERTAINMENT`: Leisure entertainment.
         * - `WORKPLACE`: Workplace.
         * - `AGRICULTURE`: Agriculture.
         * - `CASUAL`: Casual videos.
         * - `ACG`: Animation, comics, and games.
         * - `MOVIE`: Movie.
         * - `TV_SERIES`: TV series.
         * - `VARIETY_SHOW`: Variety show.
         * - `CELEBRITY`: Celebrity.
         * - `HUMANITIES_SOCIAL_SCIENCE`: Humanities and social science.
         * - `EDUCATION_CAMPUS`: Education and campus.
         * - `EMOTION`: Emotion.
         * - `FINANCE`: Finance.
         * - `PUBLIC_WELFARE`: Public welfare.
         * @default "ALL"
         */
        contentType?: "ALL" | "FASHION" | "TECHNOLOGY" | "SCIENCE" | "PHOTOGRAPHY" | "FOOD" | "MOTHER_BABY" | "PARENTING" | "DRAMA" | "GAME" | "AUTOMOTIVE" | "ANIMAL" | "TRAVEL" | "DANCE" | "TRADITIONAL_CULTURE" | "ART" | "SPORTS" | "MUSIC" | "LIFE_RECORD" | "HOME_LIVING" | "LEISURE_ENTERTAINMENT" | "WORKPLACE" | "AGRICULTURE" | "CASUAL" | "ACG" | "MOVIE" | "TV_SERIES" | "VARIETY_SHOW" | "CELEBRITY" | "HUMANITIES_SOCIAL_SCIENCE" | "EDUCATION_CAMPUS" | "EMOTION" | "FINANCE" | "PUBLIC_WELFARE";
        /**
         * Video type filter.
         *
         * Available Values:
         * - `ALL`: All video types.
         * - `XINGTU_VIDEO`: Xingtu commercial videos.
         * - `NATURAL_VIDEO`: Natural videos.
         * @default "ALL"
         */
        videoType?: "ALL" | "XINGTU_VIDEO" | "NATURAL_VIDEO";
        /**
         * Sorting criteria for hot content results.
         *
         * Available Values:
         * - `COMPREHENSIVE`: Comprehensive ranking.
         * - `HIGH_INTERACTION`: Highest interaction count.
         * - `HIGH_LIKE`: Highest like count.
         * - `HIGH_COMMENT`: Highest comment count.
         * - `HIGH_SHARE`: Highest share count.
         * @default "COMPREHENSIVE"
         */
        sortType?: "COMPREHENSIVE" | "HIGH_INTERACTION" | "HIGH_LIKE" | "HIGH_COMMENT" | "HIGH_SHARE";
        /**
         * Page number (starting from 1). Page size is fixed at 10.
         * @default 1
         */
        page?: number;
        /** Minimum raw like count. */
        likeCountMin?: number;
        /** Maximum raw like count. */
        likeCountMax?: number;
        /** Minimum raw comment count. */
        commentCountMin?: number;
        /** Maximum raw comment count. */
        commentCountMax?: number;
        /** Minimum raw share count. */
        shareCountMin?: number;
        /** Maximum raw share count. */
        shareCountMax?: number;
        /** Minimum raw interaction count. */
        interactionCountMin?: number;
        /** Maximum raw interaction count. */
        interactionCountMax?: number;
        /** Minimum raw creator follower count. */
        followerCountMin?: number;
        /** Maximum raw creator follower count. */
        followerCountMax?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Douyin (TikTok China) image posts by keyword with search-session pagination. Omit searchId for the first page, then use the search ID from the previous response to continue. Use it for visual-content discovery and topic research. */
    "justoneapi.douyin_tiktok_china_image_post_search": {
      input: {
        /**
         * The search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Search ID returned by the previous response. Leave it empty for the first page.
         * @default ""
         */
        searchId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a supported Douyin (TikTok China) short share link that targets a video and return its public redirect URL. Use it to expand video links before subsequent Douyin content lookup or processing. */
    "justoneapi.douyin_tiktok_china_share_link_resolution": {
      input: {
        /**
         * A Douyin short share URL beginning with https://v.douyin.com/.
         * @minLength 1
         */
        shareUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Douyin (TikTok China) user profile by secUid. Use it to review a known creator or account before monitoring related content or conducting account research. */
    "justoneapi.douyin_tiktok_china_user_profile": {
      input: {
        /**
         * The unique user ID (sec_uid) on Douyin.
         * @minLength 1
         */
        secUid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves videos published by a Douyin (TikTok China) user with cursor pagination. Use it to browse a known creator's public video history or continue through video pages. */
    "justoneapi.douyin_tiktok_china_user_published_videos": {
      input: {
        /**
         * The unique user ID (sec_uid) on Douyin.
         * @minLength 1
         */
        secUid: string;
        /**
         * Pagination cursor; use 0 for the first page, and the `max_cursor` from the previous response for subsequent pages.
         * @default 0
         */
        maxCursor?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Douyin (TikTok China) users by keyword with page-based pagination and optional account-type filtering. Use it to discover creators, brands, or verified accounts for research. */
    "justoneapi.douyin_tiktok_china_user_search": {
      input: {
        /**
         * The search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number (starting from 1).
         * @default 1
         */
        page?: number;
        /**
         * Filter by user type.
         *
         * Available Values:
         * - `common_user`: Common User
         * - `enterprise_user`: Enterprise User
         * - `personal_user`: Verified Individual User
         */
        userType?: "common_user" | "enterprise_user" | "personal_user";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves top-level comments for a Douyin (TikTok China) video by aweme ID with page-based pagination. Use it to review audience feedback or analyze discussion around a known video. */
    "justoneapi.douyin_tiktok_china_video_comments": {
      input: {
        /**
         * The unique video identifier (aweme_id).
         * @minLength 1
         */
        awemeId: string;
        /**
         * Page number (starting from 1).
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Douyin (TikTok China) video by video ID. Use it to look up a known video before content review, archiving, or related analysis. */
    "justoneapi.douyin_tiktok_china_video_details": {
      input: {
        /**
         * The unique video identifier (aweme_id or model_id).
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Douyin (TikTok China) videos by keyword with sort, publish-time, duration, and page filters; later pages require the previous search ID. Use it to support content discovery and trend research. */
    "justoneapi.douyin_tiktok_china_video_search": {
      input: {
        /**
         * The search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Sorting criteria for search results.
         *
         * Available Values:
         * - `_0`: General
         * - `_1`: More likes
         * - `_2`: Newest
         * @default "_0"
         */
        sortType?: "_0" | "_1" | "_2";
        /**
         * Filter by video publish time range.
         *
         * Available Values:
         * - `_0`: No Limit
         * - `_1`: Last 24 Hours
         * - `_7`: Last 7 Days
         * - `_180`: Last 6 Months
         * @default "_0"
         */
        publishTime?: "_0" | "_1" | "_7" | "_180";
        /**
         * Filter by video duration.
         *
         * Available Values:
         * - `_0`: No Limit
         * - `_1`: Under 1 Minute
         * - `_2`: 1-5 Minutes
         * - `_3`: Over 5 Minutes
         * @default "_0"
         */
        duration?: "_0" | "_1" | "_2" | "_3";
        /**
         * Page number (starting from 1).
         * @default 1
         */
        page?: number;
        /** Search ID; required for pages > 1. Use data.business_config.next_page.search_id from the previous response, and stop paging when data.business_config.has_more is 0. */
        searchId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies to a specific Facebook post comment using the legacy post ID, comment ID, and expansion token. Use it to inspect a known comment's nested discussion. */
    "justoneapi.facebook_comment_replies": {
      input: {
        /**
         * The legacy numeric identifier of the Facebook post.
         * @minLength 1
         */
        postId: string;
        /**
         * The unique identifier of the parent Facebook comment.
         * @minLength 1
         */
        commentId: string;
        /**
         * The expansion token associated with the parent Facebook comment.
         * @minLength 1
         */
        expansionToken: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolves the Facebook profile ID associated with a submitted profile-path value. Use it to obtain the identifier required before retrieving posts for a known public profile. */
    "justoneapi.facebook_get_profile_id": {
      input: {
        /**
         * The path portion of the Facebook profile URL, such as /<profile-path>. Do not include the scheme or host.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves public posts for a Facebook profile ID with cursor pagination. Use it to browse a known profile's public posting history or continue through subsequent post pages. */
    "justoneapi.facebook_get_profile_posts": {
      input: {
        /**
         * The unique Facebook profile ID.
         * @minLength 1
         */
        profileId: string;
        /**
         * Pagination cursor for fetching the next set of results.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves comments for a Facebook post ID with cursor pagination. Use it to review discussion associated with a known public post or continue through subsequent comment pages. */
    "justoneapi.facebook_post_comments": {
      input: {
        /**
         * The unique identifier of the Facebook post.
         * @minLength 1
         */
        postId: string;
        /**
         * Pagination cursor for fetching the next set of comments.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches public Facebook posts by keyword with optional inclusive date-range filters and cursor pagination. Use it to find topic-related posts or continue a time-bounded public-content search. */
    "justoneapi.facebook_post_search": {
      input: {
        /**
         * Keyword to search for in public posts. Supports basic text matching.
         * @minLength 1
         */
        keyword: string;
        /**
         * Start date for the search range (inclusive), formatted as yyyy-MM-dd.
         * @format date
         */
        startDate?: string;
        /**
         * End date for the search range (inclusive), formatted as yyyy-MM-dd.
         * @format date
         */
        endDate?: string;
        /**
         * Pagination cursor for fetching the next set of results.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the IMDb awards summary for a title ID using selected language and country preferences. Use it to research a title's awards record or support awards-focused catalog review. */
    "justoneapi.imdb_awards_summary": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves base IMDb information for a title ID using selected language and country preferences. Use it to perform a lightweight title lookup or populate basic catalog context. */
    "justoneapi.imdb_base_info": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the IMDb box-office summary for a title ID using selected language and country preferences. Use it to research reported theatrical performance or compare titles. */
    "justoneapi.imdb_box_office_summary": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the IMDb Top 250 movie or TV chart selected by ranking type using language and country preferences. Use it to monitor chart positions or compare highly ranked titles. */
    "justoneapi.imdb_chart_rankings": {
      input: {
        /**
         * Type of rankings chart to retrieve.
         *
         * Available Values:
         * - `TOP_250`: Top 250 Movies
         * - `TOP_250_TV`: Top 250 TV Shows
         * @minLength 1
         */
        rankingsChartType: "TOP_250" | "TOP_250_TV";
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb contribution questions associated with a title ID using selected language and country preferences. Use it to review available prompts for title-data contribution workflows. */
    "justoneapi.imdb_contribution_questions": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves countries of origin associated with an IMDb title ID using selected language and country preferences. Use it to enrich regional catalog metadata or support origin-based analysis. */
    "justoneapi.imdb_countries_of_origin": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the IMDb critics-review summary for a title ID using selected language and country preferences. Use it to review critical reception or compare titles during research. */
    "justoneapi.imdb_critics_review_summary": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb title details for a title ID using selected language and country preferences. Use it to support detailed title research or enrich a movie and television catalog. */
    "justoneapi.imdb_details": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb 'Did You Know' information for a title ID using selected language and country preferences. Use it to research title trivia and add editorial context. */
    "justoneapi.imdb_did_you_know_insights": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves extended IMDb details for a title ID using selected language and country preferences. Use it to enrich a title catalog or perform deeper research after a basic lookup. */
    "justoneapi.imdb_extended_details": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb news for a selected top, movie, TV, or celebrity category using language and country preferences. Use it to monitor entertainment news or research a specific category. */
    "justoneapi.imdb_news_by_category": {
      input: {
        /**
         * News category to filter by.
         *
         * Available Values:
         * - `TOP`: Top News
         * - `MOVIE`: Movie News
         * - `TV`: TV News
         * - `CELEBRITY`: Celebrity News
         * @minLength 1
         */
        category: "TOP" | "MOVIE" | "TV" | "CELEBRITY";
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb plot information for a title ID using selected language and country preferences. Use it to review a movie or series storyline or enrich title descriptions. */
    "justoneapi.imdb_plot_summary": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb titles similar to a specified title ID using selected language and country preferences. Use it to support related-title discovery, recommendations, or catalog curation. */
    "justoneapi.imdb_recommendations": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the IMDb Redux overview for a title ID using selected language and country preferences. Use it to obtain a consolidated title overview for catalog review or content research. */
    "justoneapi.imdb_redux_overview": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb release-expectation information for a title ID using selected language and country preferences. Use it to monitor a title's release context or support release-planning research. */
    "justoneapi.imdb_release_expectation": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb streaming picks for Prime Video using selected language and country preferences. Use it to explore streaming titles for discovery, catalog review, or watchlist research. */
    "justoneapi.imdb_streaming_picks": {
      input: {
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves IMDb top cast and crew information for a title ID using selected language and country preferences. Use it to research principal talent or enrich title credits. */
    "justoneapi.imdb_top_cast_and_crew": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the IMDb user-reviews summary for a title ID using selected language and country preferences. Use it to review audience reception or support title comparison and research. */
    "justoneapi.imdb_user_reviews_summary": {
      input: {
        /**
         * The IMDb title identifier in tt<digits> format.
         * @minLength 1
         */
        id: string;
        /**
         * Language and country preferences.
         *
         * Available Values:
         * - `en_US`: English (US)
         * - `fr_CA`: French (Canada)
         * - `fr_FR`: French (France)
         * - `de_DE`: German (Germany)
         * - `hi_IN`: Hindi (India)
         * - `it_IT`: Italian (Italy)
         * - `pt_BR`: Portuguese (Brazil)
         * - `es_ES`: Spanish (Spain)
         * - `es_US`: Spanish (US)
         * - `es_MX`: Spanish (Mexico)
         * @default "en_US"
         */
        languageCountry?: "en_US" | "fr_CA" | "fr_FR" | "de_DE" | "hi_IN" | "it_IT" | "pt_BR" | "es_ES" | "es_US" | "es_MX";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies to a specific Instagram post comment by media and comment IDs, with cursor pagination. Use it to inspect threaded discussion and continue through reply pages. */
    "justoneapi.instagram_comment_reply_list": {
      input: {
        /**
         * The numeric media ID of the Instagram post.
         * @minLength 1
         */
        mediaId: string;
        /**
         * The parent comment ID whose replies are to be retrieved.
         * @minLength 1
         */
        commentId: string;
        /**
         * Pagination cursor returned as next_min_child_cursor from the previous response.
         * @default ""
         */
        minId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Performs a general search on Instagram by keyword with token-based pagination. Use it to discover matching results, research topics, and continue through subsequent result pages. */
    "justoneapi.instagram_general_search": {
      input: {
        /**
         * The keyword to search for on Instagram.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination token from the previous response. Omit it for the first page.
         * @default ""
         */
        paginationToken?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Instagram posts by hashtag with cursor pagination. Use it to explore tagged content, monitor topics, and continue through subsequent result pages. */
    "justoneapi.instagram_hashtag_posts_search": {
      input: {
        /**
         * The hashtag or keyword to search for.
         * @minLength 1
         */
        hashtag: string;
        /**
         * Cursor used for retrieving the next page of results.
         * @default ""
         */
        endCursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves top-level comments for an Instagram post by shortcode, with cursor pagination and popular or newest sorting. Use it to review audience feedback or analyze discussion around a known post. */
    "justoneapi.instagram_post_comment_list": {
      input: {
        /**
         * The unique shortcode for the Instagram post.
         * @minLength 1
         */
        code: string;
        /**
         * Pagination cursor returned as next_min_id from the previous response.
         * @default ""
         */
        minId?: string;
        /**
         * Sort order for the comments.
         *
         * Available Values:
         * - `popular`: Popular
         * - `newest`: Newest
         * @default "newest"
         */
        sortOrder?: "popular" | "newest";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves an Instagram post by its shortcode. Use it to look up a known post before content review, archiving, comment analysis, or related workflows. */
    "justoneapi.instagram_post_details": {
      input: {
        /**
         * The unique shortcode from the Instagram post URL.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Instagram Reels by keyword or hashtag with token-based pagination. Use it to discover short-form videos, monitor topics, and continue through matching results. */
    "justoneapi.instagram_reels_search": {
      input: {
        /**
         * The search keyword or hashtag to filter Reels.
         * @minLength 1
         */
        keyword: string;
        /**
         * Token used for retrieving the next page of results.
         * @default ""
         */
        paginationToken?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves an Instagram user profile by username. Use it to review a known account before creator research, brand monitoring, or related post analysis. */
    "justoneapi.instagram_user_profile": {
      input: {
        /**
         * The Instagram username whose profile details are to be retrieved.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves posts published by an Instagram user with token-based pagination. Use it to browse a known account's post history or continue through subsequent result pages. */
    "justoneapi.instagram_user_published_posts": {
      input: {
        /**
         * The Instagram username whose published posts are to be retrieved.
         * @minLength 1
         */
        username: string;
        /**
         * Token used for retrieving the next page of results.
         * @default ""
         */
        paginationToken?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve paginated JD.com product comments for a specific SKU. Use it to review buyer feedback for that product. */
    "justoneapi.jdcom_product_comments": {
      input: {
        /**
         * A unique product identifier on JD.com (item ID).
         * @minLength 1
         */
        itemId: string;
        /** Page number for paginated comments. */
        page?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve JD.com product details by item ID, including a complete set of product images. Use it to review product information and images for catalog research or ecommerce analysis. */
    "justoneapi.jdcom_product_details": {
      input: {
        /**
         * A unique product identifier on JD.com (item ID).
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the current JD.com product price for a known item ID. Use it to check a product's price before catalog comparison or purchase analysis. */
    "justoneapi.jdcom_product_price": {
      input: {
        /**
         * A unique product identifier on JD.com (item ID).
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search JD.com products by keyword with page-based pagination. Use it to discover products and collect item IDs for follow-up lookups. */
    "justoneapi.jdcom_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Page number for pagination. */
        page?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a page of products from a JD.com shop identified by shop ID. Use it to browse a seller's catalog and collect item IDs for follow-up lookups. */
    "justoneapi.jdcom_shop_product_list": {
      input: {
        /**
         * A unique shop identifier on JD.com (Shop ID).
         * @minLength 1
         */
        shopId: string;
        /** Page number for the paginated shop product list. */
        page?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a supported Kuaishou short share link and return its public redirect URL. Use it to expand shared links before subsequent Kuaishou content lookup or processing. */
    "justoneapi.kuaishou_share_link_resolution": {
      input: {
        /**
         * A Kuaishou short share URL beginning with https://v.kuaishou.com/.
         * @minLength 1
         */
        shareUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the public profile for a Kuaishou user identified by user ID. Use it to inspect an account found through user or video results. */
    "justoneapi.kuaishou_user_profile": {
      input: {
        /**
         * The unique user ID on Kuaishou.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public videos published by a Kuaishou user, with optional cursor-based pagination. Use it to review a creator's content history or select videos for detail and comment requests. */
    "justoneapi.kuaishou_user_published_videos": {
      input: {
        /**
         * The unique user ID on Kuaishou.
         * @minLength 1
         */
        userId: string;
        /** Pagination cursor for subsequent pages. */
        pcursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search public Kuaishou user accounts by keyword with page-number pagination. Use it to discover relevant creators or accounts before requesting profile and published-video data. */
    "justoneapi.kuaishou_user_search": {
      input: {
        /**
         * The search keyword to find users.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number for results, starting from 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public comments for a Kuaishou video, with optional cursor-based pagination. Use it to review audience discussion and continue through additional comment pages. */
    "justoneapi.kuaishou_video_comments": {
      input: {
        /**
         * The Kuaishou video identifier or numeric refer_photo_id returned by a related response.
         * @minLength 1
         */
        videoId: string;
        /** Pagination cursor for subsequent pages. */
        pcursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public details for a Kuaishou video identified by its video ID. Use it to inspect a selected video after search or user-published-video discovery. */
    "justoneapi.kuaishou_video_details": {
      input: {
        /**
         * The unique video identifier returned by Kuaishou.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search public Kuaishou videos by keyword with page-number pagination. Use it to discover relevant videos and browse results by page. */
    "justoneapi.kuaishou_video_search": {
      input: {
        /**
         * The search keyword to find videos.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number for results, starting from 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves LinkedIn comments for an activity post with relevance or recent sorting, page-based navigation, a pagination token, and optional share URN. Use it to review public discussion around known professional content. */
    "justoneapi.linkedin_post_comments": {
      input: {
        /**
         * LinkedIn post ID.
         * @minLength 1
         */
        postId: string;
        /**
         * Page number, starting from 1.
         * @default 1
         */
        page?: number;
        /**
         * Comment sort order.
         *
         * Available Values:
         * - `RELEVANCE`: Sort comments by relevance
         * - `RECENT`: Sort comments from most recent
         */
        sortOrder?: "RELEVANCE" | "RECENT";
        /**
         * Pagination token returned by a previous response.
         * @default ""
         */
        paginationToken?: string;
        /**
         * Optional share URN for a shared post.
         * @default ""
         */
        shareUrn?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a LinkedIn profile by username, including documented core profile fields such as name and headline. Use it to inspect a person's professional background or before requesting published posts. */
    "justoneapi.linkedin_user_profile": {
      input: {
        /**
         * LinkedIn username from the profile URL, for example jack from linkedin.com/in/jack.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves posts published, commented on, or reacted to by a LinkedIn member using a profile URL, activity type, offset, and pagination token. Use it to review public professional activity and continue through additional result pages. */
    "justoneapi.linkedin_user_published_posts": {
      input: {
        /**
         * Full LinkedIn profile URL.
         * @minLength 1
         */
        url: string;
        /**
         * User activity type.
         *
         * Available Values:
         * - `POSTS`: Posts published by the user
         * - `COMMENTS`: Posts commented on by the user
         * - `REACTIONS`: Posts reacted to by the user
         */
        type?: "POSTS" | "COMMENTS" | "REACTIONS";
        /**
         * Pagination offset starting from 0, normally increasing by 50.
         * @default 0
         */
        start?: number;
        /**
         * Pagination token returned by a previous response.
         * @default ""
         */
        paginationToken?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches public Pixabay photo result pages by keyword with a requested image count and page controls. Each result includes its Pixabay photo page, public contributor information when shown, and a source-provided image URL. */
    "justoneapi.pixabay_photo_search": {
      input: {
        /**
         * Photo search keyword, up to 100 characters without control characters.
         * @minLength 1
         * @maxLength 100
         */
        keyword: string;
        /**
         * Maximum number of unique photos to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * First result page to search, starting from 1.
         * @minimum 1
         * @maximum 10000
         */
        startPage?: number;
        /**
         * Maximum number of pages to visit in this request. The last page must not exceed 10000.
         * @minimum 1
         * @maximum 100
         */
        maxPages?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Lists articles from a QQ Huxuan Official Account creator within a required date range, with an optional title keyword and a choice between all articles and Huxuan order articles. Use it to review a publisher's content for campaign planning. */
    "justoneapi.qq_huxuan_creator_marketplace_official_account_article_list": {
      input: {
        /**
         * Official Account creator app ID.
         * @minLength 1
         */
        appId: string;
        /**
         * Article title keyword. Leave empty to return all matched articles.
         * @default ""
         */
        keyword?: string;
        /**
         * Tencent Huxuan article type filter.
         *
         * Available Values:
         * - `ALL`: All articles
         * - `ORDER`: QQ Huxuan order articles
         * @default "ALL"
         */
        articleType?: "ALL" | "ORDER";
        /**
         * Start date in yyyyMMdd format.
         * @minLength 1
         */
        startDate: string;
        /**
         * End date in yyyyMMdd format.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number. The first page is 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves QQ Huxuan Official Account creator details for a known creator app ID. Use it to review a shortlisted publisher before Tencent Huxuan campaign selection. */
    "justoneapi.qq_huxuan_creator_marketplace_official_account_creator_details": {
      input: {
        /**
         * Official Account creator app ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches or browses QQ Huxuan Official Account creators by optional nickname or account keyword with page-number pagination. Use it to discover and shortlist publishers for Tencent Huxuan campaign planning. */
    "justoneapi.qq_huxuan_creator_marketplace_official_account_creator_search": {
      input: {
        /**
         * Creator nickname or account keyword. Leave empty to browse the default marketplace list.
         * @default ""
         */
        keyword?: string;
        /**
         * Page number. The first page is 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves QQ Huxuan Video Account creator details for a known creator app ID. Use it to review a shortlisted video creator before Tencent Huxuan campaign selection. */
    "justoneapi.qq_huxuan_creator_marketplace_video_account_creator_details": {
      input: {
        /**
         * Video Account creator app ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches or browses QQ Huxuan Video Account creators by optional nickname keyword with page-number pagination. Use it to discover and shortlist video creators for Tencent Huxuan campaign planning. */
    "justoneapi.qq_huxuan_creator_marketplace_video_account_creator_search": {
      input: {
        /**
         * Creator nickname keyword. Leave empty to browse the default marketplace list.
         * @default ""
         */
        keyword?: string;
        /**
         * Page number. The first page is 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Lists videos from a QQ Huxuan Video Account creator within a required date range, with a choice of all, Huxuan order, hot, or personal videos. Use it to review a shortlisted creator's content for campaign planning. */
    "justoneapi.qq_huxuan_creator_marketplace_video_account_recent_videos": {
      input: {
        /**
         * Video Account creator app ID.
         * @minLength 1
         */
        appId: string;
        /**
         * Tencent Huxuan video type filter.
         *
         * Available Values:
         * - `ALL`: All videos
         * - `ORDER`: QQ Huxuan order videos
         * - `HOT`: Hot videos
         * - `PERSON`: Personal videos
         * @default "ALL"
         */
        videoType?: "ALL" | "ORDER" | "HOT" | "PERSON";
        /**
         * Start date in yyyyMMdd format.
         * @minLength 1
         */
        beginDate: string;
        /**
         * End date in yyyyMMdd format.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number. The first page is 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Reddit posts by keyword with an optional continuation token. Use it to discover topic-related discussions or continue through additional search-result pages. */
    "justoneapi.reddit_keyword_search": {
      input: {
        /**
         * Search query keywords.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination token to retrieve the next set of results.
         * @default ""
         */
        after?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves comments for a Reddit post with pagination-token support. Use it to review a thread's discussion or continue through additional comment results for a known post. */
    "justoneapi.reddit_post_comments": {
      input: {
        /**
         * The unique identifier of the Reddit post.
         * @minLength 1
         */
        postId: string;
        /**
         * Pagination token for the next page of results.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Reddit post identified by its full post ID. Use it to look up a known post before discussion review, content analysis, or subsequent comment retrieval. */
    "justoneapi.reddit_post_details": {
      input: {
        /**
         * The Reddit post identifier in t3_<post-id> format.
         * @minLength 1
         */
        postId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Shopee item details by marketplace site, shop ID, and item ID using the version 2 data source. */
    "justoneapi.shopee_item_details": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a display snapshot for a Shopee item in the selected marketplace site. */
    "justoneapi.shopee_item_display_snapshot": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves installment and amount information for a Shopee item. This operation supports Taiwan and Indonesia but not Thailand. */
    "justoneapi.shopee_item_installments_and_amounts": {
      input: {
        /**
         * Shopee marketplace site. Taiwan and Indonesia are supported for this operation.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
        /** Detail level for the installment response. */
        detailLevel?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the review distribution across SKU models for a Shopee item. */
    "justoneapi.shopee_item_review_model_distribution": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves review tags for a Shopee item in the selected marketplace site. */
    "justoneapi.shopee_item_review_tags": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves reviews for a specified Shopee item with offset pagination and a rating filter. */
    "justoneapi.shopee_item_reviews": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
        /** Zero-based result offset. */
        offset?: string;
        /** Rating filter from 0 to 5, where 0 includes all ratings. */
        ratingType?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Shopee items by keyword in the selected marketplace site. */
    "justoneapi.shopee_item_search": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /**
         * Product search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the SKU option matrix for a Shopee item in the selected marketplace site. */
    "justoneapi.shopee_item_sku_matrix": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves observed SKU models for a Shopee item with offset and rating filters. */
    "justoneapi.shopee_item_sku_models": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Shopee item ID. */
        itemId: number;
        /** Zero-based result offset. */
        offset?: string;
        /** Rating filter from 0 to 5, where 0 includes all ratings. */
        ratingType?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves enriched Shopee shop reviews using a zero-based result offset. */
    "justoneapi.shopee_rich_shop_reviews": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Zero-based result offset. */
        offset?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves category facets for a Shopee product search keyword. */
    "justoneapi.shopee_search_category_facets": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /**
         * Product search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the basic Shopee shop profile by username and marketplace site. */
    "justoneapi.shopee_shop_basic_profile": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /**
         * Shopee shop username.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Shopee shop categories using a zero-based result offset. */
    "justoneapi.shopee_shop_categories": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Zero-based result offset. */
        offset?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves detailed Shopee shop information by username and marketplace site. */
    "justoneapi.shopee_shop_details": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /**
         * Shopee shop username.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Shopee item cards for a shop username in the selected marketplace site. */
    "justoneapi.shopee_shop_item_list": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /**
         * Shopee shop username.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Shopee shop profile and rating summary by marketplace site and shop ID. */
    "justoneapi.shopee_shop_profile_and_rating_summary": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Shopee shop reviews with offset pagination and a rating filter. */
    "justoneapi.shopee_shop_reviews": {
      input: {
        /**
         * Shopee marketplace site.
         *
         * Available Values:
         * - `TW`: Taiwan
         * - `ID`: Indonesia
         * - `TH`: Thailand
         * @minLength 1
         */
        site: "TW" | "ID" | "TH";
        /** Shopee shop ID. */
        shopId: number;
        /** Zero-based result offset. */
        offset?: string;
        /** Rating filter from 0 to 5, where 0 includes all ratings. */
        ratingType?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches recent content across news, Weibo, WeChat, Zhihu, Douyin, Xiaohongshu, Bilibili, and Kuaishou with source and time filters. Use it to monitor a topic across multiple platforms. */
    "justoneapi.social_media_cross_platform_search": {
      input: {
        /** @minLength 1 */
        nextCursor: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        start: string;
        /** @minLength 1 */
        end: string;
        [key: string]: unknown;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Taobao or Tmall product details by item ID through the V9 endpoint. Use it to perform direct product lookup for catalog research, product monitoring, or ecommerce analysis. */
    "justoneapi.taobao_and_tmall_product_details": {
      input: {
        /**
         * Unique product identifier on Taobao/Tmall (item ID).
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the Taobao or Tmall product social feed by item ID with page-based pagination. Use it to review product questions and related discussion during customer-concern or product research. */
    "justoneapi.taobao_and_tmall_product_questions": {
      input: {
        /**
         * Unique product identifier on Taobao/Tmall (item ID).
         * @minLength 1
         */
        itemId: string;
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Taobao and Tmall product reviews by item ID with page-based pagination and configurable sorting. Use it to analyze customer feedback. */
    "justoneapi.taobao_and_tmall_product_reviews": {
      input: {
        /**
         * Unique product identifier on Taobao/Tmall (item ID).
         * @minLength 1
         */
        itemId: string;
        /**
         * Sort order for the result set.
         *
         * Available Values:
         * - `feedbackdate`: Sort by feedback date
         * - `general`: General sorting
         * @default "feedbackdate"
         */
        orderType?: "feedbackdate" | "general";
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Taobao and Tmall products by keyword with page-based pagination and returns results sorted by sales. Use it to discover popular products for ecommerce research, catalog analysis, or product selection. */
    "justoneapi.taobao_and_tmall_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number for pagination, starting from 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves products from a Taobao or Tmall shop by seller ID with page-based pagination. Use it to browse or monitor a known seller's catalog across result pages. */
    "justoneapi.taobao_and_tmall_shop_product_list": {
      input: {
        /**
         * Taobao/Tmall seller user ID used to identify the shop.
         * @minLength 1
         */
        sellerId: string;
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies to a specific comment on a TikTok post with cursor pagination. Use it to inspect threaded discussions and continue through reply pages for a known post comment. */
    "justoneapi.tiktok_comment_replies": {
      input: {
        /**
         * The unique ID of the TikTok post.
         * @minLength 1
         */
        awemeId: string;
        /**
         * The unique ID of the comment to retrieve replies for.
         * @minLength 1
         */
        commentId: string;
        /**
         * Pagination cursor. Start with '0'.
         * @default "0"
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves comments for a TikTok post with cursor pagination. Use it to review audience discussion, continue through comment pages, or support comment analysis for a known post. */
    "justoneapi.tiktok_post_comments": {
      input: {
        /**
         * The unique ID of the TikTok post (awemeId).
         * @minLength 1
         */
        awemeId: string;
        /**
         * Pagination cursor. Start with '0'.
         * @default "0"
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a TikTok post identified by its post ID. Use it to look up a known TikTok video before content review, reporting, or related engagement analysis. */
    "justoneapi.tiktok_post_details": {
      input: {
        /**
         * The unique ID of the TikTok post.
         * @minLength 1
         */
        postId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches TikTok posts by keyword with offset pagination plus sorting, publish-time, and region controls. Use it to support regional content discovery, topic research, or monitoring keyword-related videos. */
    "justoneapi.tiktok_post_search": {
      input: {
        /**
         * Search keywords.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset, starting from 0 and stepping by 20.
         * @default 0
         */
        offset?: number;
        /**
         * Sorting criteria for search results.
         *
         * Available Values:
         * - `RELEVANCE`: Relevance (Default)
         * - `MOST_LIKED`: Most Liked
         * @default "RELEVANCE"
         */
        sortType?: "RELEVANCE" | "MOST_LIKED";
        /**
         * Filter posts by publishing time.
         *
         * Available Values:
         * - `ALL`: All Time
         * - `ONE_DAY`: Last 24 Hours
         * - `ONE_WEEK`: Last 7 Days
         * - `ONE_MONTH`: Last 30 Days
         * - `THREE_MONTHS`: Last 90 Days
         * - `HALF_YEAR`: Last 180 Days
         * @default "ALL"
         */
        publishTime?: "ALL" | "ONE_DAY" | "ONE_WEEK" | "ONE_MONTH" | "THREE_MONTHS" | "HALF_YEAR";
        /**
         * ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB').
         * @default "US"
         */
        region?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the public TikTok Shop product detail for a product ID in a selected region. Use it to inspect a known regional product after search or catalog discovery. */
    "justoneapi.tiktok_shop_product_details": {
      input: {
        /**
         * TikTok Shop Product ID.
         * @minLength 1
         */
        productId: string;
        /**
         * Target region for product detail.
         *
         * Available Values:
         * - `US`: United States
         * - `GB`: United Kingdom
         * - `FR`: France
         * - `SG`: Singapore
         * - `MY`: Malaysia
         * - `PH`: Philippines
         * - `TH`: Thailand
         * - `VN`: Vietnam
         * - `ID`: Indonesia
         * @default "US"
         */
        region?: "US" | "GB" | "FR" | "SG" | "MY" | "PH" | "TH" | "VN" | "ID";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches TikTok Shop products by keyword within a selected region, with offset and page-token pagination. Use it to discover regional products and continue through search results. */
    "justoneapi.tiktok_shop_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Target region for product search.
         *
         * Available Values:
         * - `US`: United States
         * - `GB`: United Kingdom
         * - `FR`: France
         * - `SG`: Singapore
         * - `MY`: Malaysia
         * - `PH`: Philippines
         * - `TH`: Thailand
         * - `VN`: Vietnam
         * - `ID`: Indonesia
         * @default "US"
         */
        region?: "US" | "GB" | "FR" | "SG" | "MY" | "PH" | "TH" | "VN" | "ID";
        /**
         * Search result offset.
         * @default 0
         */
        offset?: number;
        /** Pagination token for the next page. */
        pageToken?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a TikTok user profile by public username or secUid. Use it to look up a known account for creator research, profile review, or subsequent user-post retrieval. */
    "justoneapi.tiktok_user_profile": {
      input: {
        /**
         * The public TikTok handle or username of the user.
         * @default ""
         */
        uniqueId?: string;
        /**
         * The unique security ID of the user.
         * @default ""
         */
        secUid?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves posts published by a TikTok user identified by secUid, with cursor pagination and latest or popular sorting. Use it to browse a creator's posting history or continue through their public post feed. */
    "justoneapi.tiktok_user_published_posts": {
      input: {
        /**
         * The opaque security ID returned for the TikTok user.
         * @minLength 1
         */
        secUid: string;
        /**
         * Pagination cursor. Use '0' for the first page, then use the max_cursor value returned in the previous response.
         * @default "0"
         */
        cursor?: string;
        /**
         * Sorting criteria for the user's posts.
         *
         * Available Values:
         * - `LATEST`: Newest posts first (default)
         * - `MOST_POPULAR`: Most popular posts first
         * @default "LATEST"
         */
        sort?: "LATEST" | "MOST_POPULAR";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Toutiao article identified by its article ID. Use it to look up a known article for content review, archiving, or related media analysis. */
    "justoneapi.toutiao_article_details": {
      input: {
        /**
         * The unique identifier of the Toutiao article.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolves the user ID associated with a Toutiao profile URL. Use it to convert a known profile link into the identifier required for subsequent user-profile lookups. */
    "justoneapi.toutiao_user_id": {
      input: {
        /**
         * The Toutiao user profile URL used to resolve the user ID.
         * @minLength 1
         */
        userProfileUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Toutiao user profile identified by user ID. Use it to look up a known account for creator research, profile review, or related article analysis. */
    "justoneapi.toutiao_user_profile": {
      input: {
        /**
         * The unique identifier of the Toutiao user.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Toutiao video identified by its video ID. Use it to look up a known video for content review, archiving, or related media analysis. */
    "justoneapi.toutiao_video_details": {
      input: {
        /**
         * The unique identifier of the Toutiao video.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Toutiao web articles by keyword. Use it to discover relevant articles for topic research, media monitoring, or source collection. */
    "justoneapi.toutiao_web_keyword_search": {
      input: {
        /**
         * Search keyword or query.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the latest comments for an X (Twitter) post identified by tweet ID, with cursor pagination. Use it to review recent discussion on a known post and continue through additional comment pages. */
    "justoneapi.twitter_post_comments": {
      input: {
        /**
         * The unique identifier of the X (Twitter) post.
         * @minLength 1
         */
        tweetId: string;
        /**
         * Pagination cursor returned by the previous response.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the full detail of an X (Twitter) post identified by its tweet ID. Use it to inspect a known post after finding it through search, a user timeline, or an existing post URL. */
    "justoneapi.twitter_post_detail": {
      input: {
        /**
         * The unique identifier of the X (Twitter) post.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches X (Twitter) by keyword across top, latest, media, people, or list result modes with cursor pagination. Use it to find public conversations, accounts, media, or lists related to a topic. */
    "justoneapi.twitter_search_timeline": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Search result type.
         *
         * Available Values:
         * - `TOP`: Top search results
         * - `LATEST`: Latest search results
         * - `MEDIA`: Media search results
         * - `PEOPLE`: People search results
         * - `LISTS`: List search results
         */
        searchType?: "TOP" | "LATEST" | "MEDIA" | "PEOPLE" | "LISTS";
        /**
         * Pagination cursor returned by the previous response.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves an X (Twitter) user profile identified by its numeric Rest ID. Use it to review a known account before monitoring its posts or conducting creator and account research. */
    "justoneapi.twitter_user_profile": {
      input: {
        /**
         * The unique numeric identifier (Rest ID) for the X user.
         * @minLength 1
         */
        restId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves posts published by an X (Twitter) user identified by Rest ID, with cursor pagination. Use it to browse a known account's timeline or continue through its public post history. */
    "justoneapi.twitter_user_published_posts": {
      input: {
        /**
         * The unique numeric identifier (Rest ID) for the X user.
         * @minLength 1
         */
        restId: string;
        /**
         * Pagination cursor for navigating through long timelines.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches VCG images by keyword with page controls, resource ID exclusions, and an optional 500px Select/Prime filter excluding AIGC. Use full image details for collection or candidate_ids for single-page ID inspection. */
    "justoneapi.vcg_image_search": {
      input: {
        /**
         * Image search keyword, up to 200 characters without control characters.
         * @minLength 1
         * @maxLength 200
         */
        keyword: string;
        /**
         * Maximum number of unique images to return, excluding the supplied resource IDs.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * First page to search, starting from 1. For continuation, use the next page returned by the previous request.
         * @minimum 1
         * @maximum 10000
         */
        startPage?: number;
        /**
         * Maximum number of pages to visit in this request. The last requested page must not exceed 10000.
         * @minimum 1
         * @maximum 100
         */
        maxPages?: number;
        /**
         * Previously collected VCG resource IDs to exclude when continuing a search. Supply comma-separated IDs or repeat this query parameter.
         * @maxItems 100000
         */
        excludeResourceIds?: Array<string>;
        /**
         * Optional brand and AIGC search restriction. Keep this value unchanged across pagination and continuation.
         *
         * Available Values:
         * - `all`: Keep the default search without additional brand or AIGC filters.
         * - `selected_500px_no_aigc`: Select only 500px Select and 500px Prime, exclude AIGC using the site's filter, and retain best ordering. Do not expand to other brands when results run out.
         * @default "all"
         */
        contentFilter?: "all" | "selected_500px_no_aigc";
        /**
         * Result mode: full returns normal image details; candidate_ids only inspects one page of resource IDs and requires limit 10000, maxPages 1, and no excluded resource IDs. A candidate inspection does not complete or advance an image search.
         *
         * Available Values:
         * - `full`: Return the normal image search result with complete image details.
         * - `candidate_ids`: Inspect resource IDs from one validated search page without image details. Requires limit 10000, maxPages 1, and no excluded resource IDs; this is not an image result or a completion receipt.
         * @default "full"
         */
        resultMode?: "full" | "candidate_ids";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Looks up a specific WeChat Channels account identity by keyword. Use it to resolve a creator name or account term to the identifier required by account-video queries. */
    "justoneapi.wechat_channels_account_search": {
      input: {
        /**
         * Search keyword used to resolve a WeChat Channels account id.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a paginated WeChat Channels account feed by v2Name with continuation-buffer support. Use it to browse videos and other feed entries published by a known creator account. */
    "justoneapi.wechat_channels_account_videos": {
      input: {
        /**
         * WeChat Channels account unique id, usually ending with @finder.
         * @minLength 1
         */
        v2Name: string;
        /**
         * Pagination buffer returned by the previous WeChat Channels account videos response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        last_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Converts an encrypted WeChat Channels export ID from search results into a usable video object identity. Use it to prepare the identifier required by video lookup endpoints. */
    "justoneapi.wechat_channels_export_id_conversion": {
      input: {
        /**
         * Encrypted WeChat Channels exportId returned by video search results.
         * @minLength 1
         */
        exportId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Finds the WeChat Channels account bound to a WeChat Official Account using either its original ID or an article URL. Use it to connect an official account with its Channels identity. */
    "justoneapi.wechat_channels_get_bound_channel": {
      input: {
        /** @minLength 1 */
        ghid: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolves a copied WeChat Channels video link, preview URL, or short feed ID to basic video information. Use it to identify a shared Channels video before further lookups. */
    "justoneapi.wechat_channels_video_basic_info": {
      input: {
        /**
         * WeChat Channels copied video link, finder-preview URL, or short feed id.
         * @minLength 1
         */
        feedInfo: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves first-level comments for a WeChat Channels video by object ID with continuation-buffer pagination. Use it to review audience discussion on known video content. */
    "justoneapi.wechat_channels_video_comments": {
      input: {
        /**
         * WeChat Channels video object id used to fetch first-level comments. If you only have the exportId returned by a video search result, first call the Export Id Conversion (V1) endpoint at /api/weixin-channels/convert-export-id/v1 to convert it to an objectId.
         * @minLength 1
         */
        objectId: string;
        /**
         * Optional WeChat Channels object nonce id.
         * @default ""
         */
        objectNonceId?: string;
        /**
         * Pagination buffer returned by the previous first-level WeChat Channels comment response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        last_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a downloadable media URL for a WeChat Channels video by object ID and optional nonce ID. Use it to download or play media from a known Channels video. */
    "justoneapi.wechat_channels_video_download_url": {
      input: {
        /**
         * WeChat Channels video object id used to fetch downloadable media links.
         * @minLength 1
         */
        objectId: string;
        /**
         * Optional WeChat Channels object nonce id. Supplying it can improve media lookup accuracy.
         * @default ""
         */
        objectNonceId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves interaction metrics for a WeChat Channels video by object ID with optional continuation-buffer input. Use it to review engagement for known video content. */
    "justoneapi.wechat_channels_video_metrics": {
      input: {
        /**
         * WeChat Channels video object id used to fetch interaction metrics.
         * @minLength 1
         */
        objectId: string;
        /**
         * Optional WeChat Channels object nonce id.
         * @default ""
         */
        objectNonceId?: string;
        /**
         * Pagination buffer returned by the previous WeChat Channels metrics response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        last_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches the WeChat Channels video category by keyword with page, offset, and continuation-state controls. Use it to retrieve categorized video results and continue additional pages. */
    "justoneapi.wechat_channels_video_search": {
      input: {
        /**
         * Search keyword for categorized WeChat Channels video results.
         * @minLength 1
         */
        keyword: string;
        /**
         * Current page number starting from 1 for WeChat Channels web search pagination.
         * @default 1
         */
        currentPage?: number;
        /**
         * Search result offset returned by the previous WeChat Channels search response. Use 0 for the first page.
         * @default 0
         */
        offset?: number;
        /**
         * Opaque pagination state returned by the previous WeChat Channels web search response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        cookies_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies under a first-level WeChat Channels video comment using the video and root-comment IDs. Use it to continue a threaded comment discussion with buffer pagination. */
    "justoneapi.wechat_channels_video_sub_comments": {
      input: {
        /**
         * WeChat Channels video object id used to fetch second-level comment replies.
         * @minLength 1
         */
        objectId: string;
        /**
         * Root first-level comment id returned by the WeChat Channels video comments endpoint.
         * @minLength 1
         */
        rootCommentId: string;
        /**
         * Pagination buffer for WeChat Channels second-level comment replies. Use the first-level comment's last_buffer for the first reply page when present. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        last_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves lightweight title information for a WeChat Channels video by object ID and optional nonce ID. Use it to identify known video content without requesting downloadable media. */
    "justoneapi.wechat_channels_video_title": {
      input: {
        /**
         * WeChat Channels video object id.
         * @minLength 1
         */
        objectId: string;
        /**
         * Optional WeChat Channels object nonce id. Supplying it can improve lookup accuracy.
         * @default ""
         */
        objectNonceId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves basic profile information for a WeChat Official Account by account name. Use it to identify or enrich a known account before article, ownership, or publishing research. */
    "justoneapi.wechat_official_accounts_account_basic_info": {
      input: {
        /**
         * WeChat Official Account name used to fetch basic profile information.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves historical articles for a WeChat Official Account identified by ghid or article URL, with an offset cursor from the previous page. Use it to continue through an account's article archive with cursor pagination. */
    "justoneapi.wechat_official_accounts_account_historical_articles": {
      input: {
        /** @minLength 1 */
        ghid: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the original-article count for a WeChat Official Account identified by ghid or article URL. Use it to compare original publishing activity across known accounts. */
    "justoneapi.wechat_official_accounts_account_original_article_count": {
      input: {
        /** @minLength 1 */
        ghid: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves principal information for a WeChat Official Account identified by biz ID, article URL, or wxid. Use it to review the ownership or operating entity behind a known account. */
    "justoneapi.wechat_official_accounts_account_principal_info": {
      input: {
        /**
         * WeChat Official Account biz id. Use one of biz, url, or wxid.
         * @default ""
         */
        biz?: string;
        /**
         * WeChat Official Account article URL used to identify the account. Use one of biz, url, or wxid.
         * @default ""
         */
        url?: string;
        /**
         * WeChat Official Account wxid used to identify the account. Use one of biz, url, or wxid.
         * @default ""
         */
        wxid?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches WeChat Official Accounts by keyword with page, offset, and continuation-state pagination. Use it to browse broader account results for creator, brand, or publisher discovery. */
    "justoneapi.wechat_official_accounts_account_search": {
      input: {
        /**
         * Search keyword for WeChat Official Account web search.
         * @minLength 1
         */
        keyword: string;
        /**
         * Current page number starting from 1 for WeChat web search pagination.
         * @default 1
         */
        currentPage?: number;
        /**
         * Search result offset returned by the previous response. Use 0 for the first page.
         * @default 0
         */
        offset?: number;
        /**
         * Opaque pagination state returned by the previous WeChat web search response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        cookies_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies under a top-level comment for a WeChat Official Account article, identified by article URL and contentId. Use it to inspect threaded discussion beneath a known comment. */
    "justoneapi.wechat_official_accounts_article_comment_replies": {
      input: {
        /**
         * WeChat Official Account article URL used to fetch replies under a top-level comment.
         * @minLength 1
         */
        articleUrl: string;
        /**
         * Top-level comment content id used to fetch nested comment replies.
         * @minLength 1
         */
        contentId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves top-level comments for a WeChat Official Account article by URL, with an optional buffer cursor for pagination. Use it to review reader discussion or continue through comment pages for a known article. */
    "justoneapi.wechat_official_accounts_article_comments": {
      input: {
        /**
         * WeChat Official Account article URL used to fetch top-level article comments.
         * @minLength 1
         */
        articleUrl: string;
        /**
         * Comment pagination buffer returned by the previous response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves lightweight information for a WeChat Official Account article by URL. Use it to perform a quick article lookup before deeper content, metric, or comment retrieval. */
    "justoneapi.wechat_official_accounts_article_details": {
      input: {
        /**
         * WeChat Official Account article URL used to fetch lightweight article metadata and status information.
         * @minLength 1
         */
        articleUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Expands a WeChat Official Account article link to its resolved long-form destination. Use it to normalize a short or intermediate link before article lookup or collection. */
    "justoneapi.wechat_official_accounts_article_link_conversion": {
      input: {
        /**
         * WeChat Official Account article short link or intermediate link to convert.
         * @minLength 1
         */
        link: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves extended interaction metrics for a WeChat Official Account article by URL. Use it to compare article performance or support deeper engagement analysis for known content. */
    "justoneapi.wechat_official_accounts_article_metrics": {
      input: {
        /**
         * WeChat Official Account article URL used to fetch extended interaction and article performance metrics.
         * @minLength 1
         */
        articleUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches WeChat Official Account articles by keyword within a selected category such as followed accounts, latest, recently read, or hot, with continuation pagination. Use it to focus article discovery on a particular result stream. */
    "justoneapi.wechat_official_accounts_article_search": {
      input: {
        /**
         * Search keyword for categorized WeChat Official Account article web search.
         * @minLength 1
         */
        keyword: string;
        /**
         * Subcategory filter for categorized WeChat Official Account article web search.
         *
         * Available Values:
         * - `ALL`: All
         * - `FOLLOWED`: Followed accounts
         * - `LATEST`: Latest
         * - `RECENT_READ`: Recently read
         * - `HOT`: Hot
         * @default "ALL"
         */
        subSearchType?: "ALL" | "FOLLOWED" | "LATEST" | "RECENT_READ" | "HOT";
        /**
         * Current page number starting from 1 for WeChat web search pagination.
         * @default 1
         */
        currentPage?: number;
        /**
         * Search result offset returned by the previous response. Use 0 for the first page.
         * @default 0
         */
        offset?: number;
        /**
         * Opaque pagination state returned by the previous WeChat web search response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        cookies_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches WeChat Mini Programs by keyword with page, offset, and continuation-state pagination. Use it to discover mini programs related to a brand, service, topic, or product. */
    "justoneapi.wechat_official_accounts_mini_program_search": {
      input: {
        /**
         * Search keyword for WeChat mini program web search.
         * @minLength 1
         */
        keyword: string;
        /**
         * Current page number starting from 1 for WeChat web search pagination.
         * @default 1
         */
        currentPage?: number;
        /**
         * Search result offset returned by the previous response. Use 0 for the first page.
         * @default 0
         */
        offset?: number;
        /**
         * Opaque pagination state returned by the previous WeChat web search response. Leave it empty for the first page. For this POST endpoint, send it in an application/x-www-form-urlencoded form body.
         * @default ""
         */
        cookies_buffer?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves WeChat search suggestions for a keyword, optionally scoped by a supported business type. Use it to expand or refine a query before a targeted WeChat search. */
    "justoneapi.wechat_official_accounts_search_suggestions": {
      input: {
        /**
         * Keyword used to fetch WeChat search suggestions.
         * @minLength 1
         */
        keyword: string;
        /**
         * WeChat search business type used to scope suggestion results.
         *
         * Available Values:
         * - `ALL`: All
         * - `ACCOUNT`: Official accounts
         * - `ARTICLE`: Articles
         * - `CHANNEL`: Channels
         * - `MOMENTS`: Moments
         * - `LIVE`: Live
         * - `EMOJI`: Emoji
         * - `AUDIO`: Audio
         * - `BOOK`: Books
         * - `WECHAT_INDEX`: WeChat index
         * - `NEWS`: News
         * - `MINI_PROGRAM`: Mini programs
         * - `ENCYCLOPEDIA`: Encyclopedia
         * @default "ALL"
         */
        businessType?: "ALL" | "ACCOUNT" | "ARTICLE" | "CHANNEL" | "MOMENTS" | "LIVE" | "EMOJI" | "AUDIO" | "BOOK" | "WECHAT_INDEX" | "NEWS" | "MINI_PROGRAM" | "ENCYCLOPEDIA";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Queries WeChat Index for a keyword. Use it to examine trend interest within WeChat before planning content, campaigns, or further article research. */
    "justoneapi.wechat_official_accounts_wechat_index_search": {
      input: {
        /**
         * Keyword used to query WeChat Index trend signals.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the current Weibo hot-search ranking. Use it to identify trending topics for newsroom monitoring, content planning, or timely topic discovery. */
    "justoneapi.weibo_hot_search": {
      input: Record<string, never>;
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Weibo posts by keyword within a required day-and-hour time range, with page-based pagination, hot or time sorting, and filters for pictures, video, music, or links. Use it to find time-bounded posts for topic research or monitoring. */
    "justoneapi.weibo_keyword_search": {
      input: {
        /**
         * Search Keywords.
         * @minLength 1
         */
        q: string;
        /**
         * Start Day (yyyy-MM-dd).
         * @minLength 1
         */
        startDay: string;
        /** Start Hour (0-23). */
        startHour: number;
        /**
         * End Day (yyyy-MM-dd).
         * @minLength 1
         */
        endDay: string;
        /** End Hour (0-23). */
        endHour: number;
        /**
         * Hot sort, true for hot sort, false for time sort. Default is false.
         * @default false
         */
        hotSort?: boolean;
        /**
         * Contains filter for the result set.
         *
         * Available Values:
         * - `ALL`: All
         * - `PICTURE`: Has Picture
         * - `VIDEO`: Has Video
         * - `MUSIC`: Has Music
         * - `LINK`: Has Link
         * @default "ALL"
         */
        contains?: "ALL" | "PICTURE" | "VIDEO" | "MUSIC" | "LINK";
        /**
         * Page number, starting with 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves comments for a Weibo post identified by MID, with optional maxId cursor pagination and time or hot sorting. Use it to review audience discussion, continue through comment pages, or support moderation and feedback analysis. */
    "justoneapi.weibo_post_comments": {
      input: {
        /**
         * Weibo post mid.
         * @minLength 1
         */
        mid: string;
        /**
         * Sort order for the result set.
         *
         * Available Values:
         * - `TIME`: Time
         * - `HOT`: Hot
         * @default "TIME"
         */
        sort?: "TIME" | "HOT";
        /** Pagination cursor returned by the previous response. */
        maxId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Weibo post identified by its post ID. Use it to look up a known post for content review, archiving, or related engagement analysis. */
    "justoneapi.weibo_post_details": {
      input: {
        /**
         * Weibo post ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches posts published by a specific Weibo user, using a keyword, optional date range, and page-based pagination. Use it to find historical posts from a known account for topic research or campaign review. */
    "justoneapi.weibo_search_user_published_posts": {
      input: {
        /**
         * Weibo User ID (UID).
         * @minLength 1
         */
        uid: string;
        /**
         * Search Keywords.
         * @minLength 1
         */
        q: string;
        /** Start Day (yyyy-MM-dd). */
        startDay?: string;
        /** End Day (yyyy-MM-dd). */
        endDay?: string;
        /**
         * Page number, starting with 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Weibo TV video details for a colon-delimited object ID (OID). Use it to look up a known TV video for content review, cataloging, or downstream processing. */
    "justoneapi.weibo_tv_video_details": {
      input: {
        /**
         * Weibo video/object ID.
         * @minLength 1
         */
        oid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a page of fan accounts that follow a Weibo user identified by UID. Use it to browse the account's follower audience or continue through its fan list. */
    "justoneapi.weibo_user_fans": {
      input: {
        /**
         * Weibo User ID (UID).
         * @minLength 1
         */
        uid: string;
        /**
         * Page number, starting with 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a page of accounts followed by a Weibo user identified by UID. Use it to examine the account's outgoing follow network or continue through its following list. */
    "justoneapi.weibo_user_followers": {
      input: {
        /**
         * Weibo User ID (UID).
         * @minLength 1
         */
        uid: string;
        /**
         * Page number, starting with 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Weibo user profile identified by UID. Use it to look up a known account for creator research, profile review, or subsequent retrieval of that user's posts and videos. */
    "justoneapi.weibo_user_profile": {
      input: {
        /**
         * Weibo User ID (UID).
         * @minLength 1
         */
        uid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves posts published by a Weibo user identified by UID, using page numbers and a required sinceId cursor after the first page. Use it to browse an account's posting history or continue through its post feed. */
    "justoneapi.weibo_user_published_posts": {
      input: {
        /**
         * Weibo User ID (UID).
         * @minLength 1
         */
        uid: string;
        /**
         * Page number, starting with 1.
         * @default 1
         */
        page?: number;
        /** Pagination cursor (since_id). Required if page > 1. */
        sinceId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Weibo user's video waterfall feed by UID, with an optional cursor from a prior response. Use it to browse videos published by a known account or continue through its video feed. */
    "justoneapi.weibo_user_video_list": {
      input: {
        /**
         * Weibo User ID (UID).
         * @minLength 1
         */
        uid: string;
        /** Pagination cursor returned by the previous response. */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the public detail for a Xianyu (GooFish) second-hand listing by item ID. Use it to inspect a known resale item after search or link discovery. */
    "justoneapi.xianyu_goofish_product_details": {
      input: {
        /**
         * A unique product identifier on Xianyu.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Xianyu (GooFish) second-hand listings by keyword with page and sort controls. Use it to discover resale items by activity, recency, seller credit, price, or listing time. */
    "justoneapi.xianyu_goofish_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Page number for pagination. The first page is 1. */
        page?: string;
        /**
         * Sort order for Xianyu search results.
         *
         * Available Values:
         * - `active`: Active listings first.
         * - `recent`: Recent nearby or position-based results first.
         * - `credit`: Seller credit first.
         * - `price_asc`: Lowest price first.
         * - `price_desc`: Highest price first.
         * - `price_drop`: Reduced-price listings first.
         * - `newest`: Newly listed items first.
         * @default "active"
         */
        sort?: "active" | "recent" | "credit" | "price_asc" | "price_desc" | "price_drop" | "newest";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search Xiaohongshu Pugongying Content Square notes by keyword or browse all notes, with business-category, ranking, time-window, and page controls. Use it to discover high-performing campaign content. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_content_square_notes": {
      input: {
        /**
         * Keyword for note search. Empty string searches all notes.
         * @default ""
         */
        searchWord?: string;
        /**
         * Page number for results.
         * @default 1
         */
        pageNum?: number;
        /**
         * Business category.
         *
         * Available Values:
         * - `XIAOHONGSHU_HOT`: Xiaohongshu hot
         * - `PRODUCT_SEEDING`: Product seeding
         * - `ECOMMERCE_PROMOTION`: E-commerce promotion
         * - `PUGONGYING_COOPERATION`: Pugongying cooperation
         * - `LEAD_COLLECTION`: Lead collection
         * - `ECOMMERCE_HOT`: E-commerce hot
         * - `SEEDING_DIRECT`: Seeding direct
         * - `APP_PROMOTION`: App promotion
         * @default "XIAOHONGSHU_HOT"
         */
        bizType?: "XIAOHONGSHU_HOT" | "PRODUCT_SEEDING" | "ECOMMERCE_PROMOTION" | "PUGONGYING_COOPERATION" | "LEAD_COLLECTION" | "ECOMMERCE_HOT" | "SEEDING_DIRECT" | "APP_PROMOTION";
        /**
         * Ranking metric.
         *
         * Available Values:
         * - `premium_imp_num`: Exposure
         * - `premium_good_read_rate`: Read rate
         * - `premium_read_num`: Read count
         * - `premium_engage_num`: Engagement count
         * - `premium_engage_rate`: Engagement rate
         * - `premium_like_num`: Like count
         * - `premium_fav_num`: Favorite count
         * - `premium_cmt_num`: Comment count
         * @default "premium_imp_num"
         */
        orderBy?: "premium_imp_num" | "premium_good_read_rate" | "premium_read_num" | "premium_engage_num" | "premium_engage_rate" | "premium_like_num" | "premium_fav_num" | "premium_cmt_num";
        /**
         * Time range in days.
         *
         * Available Values:
         * - `DAY_3`: Last 3 days
         * - `DAY_7`: Last 7 days
         * - `DAY_14`: Last 14 days
         * - `DAY_30`: Last 30 days
         * @default "DAY_7"
         */
        nd?: "DAY_3" | "DAY_7" | "DAY_14" | "DAY_30";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the Xiaohongshu Pugongying cost-effectiveness analysis for a known creator. Use it to assess cooperation efficiency when comparing creators for a campaign. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_cost_effectiveness_analysis": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Xiaohongshu Pugongying content category tags associated with a known creator. Use it to understand the subjects and categories represented in the creator's published content. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_content_tags": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Xiaohongshu Pugongying core data for a creator with business, note-type, date-range, and advertisement filters. Use it to compare creators within a selected analysis scope. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_core_metrics": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Business type.
         *
         * Available Values:
         * - `DAILY_NOTE`: Daily notes
         * - `COOPERATE_NOTE`: Cooperative notes
         * @default "DAILY_NOTE"
         */
        business?: "DAILY_NOTE" | "COOPERATE_NOTE";
        /**
         * Type of note.
         *
         * Available Values:
         * - `PHOTO_TEXT_AND_VIDEO`: Photo and Video
         * - `PHOTO_TEXT`: Photo and Text
         * - `VIDEO`: Video only
         * @default "PHOTO_TEXT_AND_VIDEO"
         */
        noteType?: "PHOTO_TEXT_AND_VIDEO" | "PHOTO_TEXT" | "VIDEO";
        /**
         * Time range for data.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        dateType?: "DAY_30" | "DAY_90";
        /**
         * Advertisement filter.
         *
         * Available Values:
         * - `ALL`: All notes
         * - `ORGANIC_ONLY`: Organic notes only
         * @default "ALL"
         */
        advertiseSwitch?: "ALL" | "ORGANIC_ONLY";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Xiaohongshu Pugongying feature tags assigned to a known creator. Use it to understand the creator's recognized formats, styles, or content strengths. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_feature_tags": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a paginated Xiaohongshu Pugongying creator note list with advertisement, sort-order, note-type, and third-platform filters. Use it to browse selected content from a known creator. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_note_list": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Advertisement filter.
         *
         * Available Values:
         * - `ALL`: All notes
         * - `ORGANIC_ONLY`: Organic notes only
         * @default "ALL"
         */
        advertiseSwitch?: "ALL" | "ORGANIC_ONLY";
        /**
         * Sorting order.
         *
         * Available Values:
         * - `LATEST`: Latest
         * - `MOST_READ`: Most read
         * - `MOST_INTERACT`: Most interactions
         * @default "LATEST"
         */
        orderType?: "LATEST" | "MOST_READ" | "MOST_INTERACT";
        /**
         * Type of note.
         *
         * Available Values:
         * - `ALL`: All types
         * - `COOPERATION`: Cooperation notes
         * - `PHOTO_TEXT`: Photo and Text
         * - `VIDEO`: Video only
         * @default "ALL"
         */
        noteType?: "ALL" | "COOPERATION" | "PHOTO_TEXT" | "VIDEO";
        /**
         * Whether from third-party platform.
         *
         * Available Values:
         * - `NO`: No
         * - `YES`: Yes
         * @default "NO"
         */
        isThirdPlatform?: "NO" | "YES";
        /**
         * Page number.
         * @default 1
         */
        pageNumber?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a paginated Xiaohongshu Pugongying creator note list with advertisement, sort-order, and note-type controls. Use it to browse a creator's recent, most-read, or most-interacted notes. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_note_list_pro": {
      input: {
        /**
         * KOL ID.
         * @minLength 1
         */
        kolId: string;
        /**
         * Page number.
         * @default 1
         */
        page?: number;
        /**
         * Ad filter.
         *
         * Available Values:
         * - `_1`: Full traffic (All notes)
         * - `_0`: Natural traffic (Organic notes)
         * @minLength 1
         */
        adSwitch: "_1" | "_0";
        /**
         * Sorting order.
         *
         * Available Values:
         * - `_1`: Latest
         * - `_2`: Most read
         * - `_3`: Most interactions
         * @minLength 1
         */
        orderType: "_1" | "_2" | "_3";
        /**
         * Note type.
         *
         * Available Values:
         * - `_1`: Photo and Text notes
         * - `_2`: Video notes
         * - `_3`: Cooperation notes
         * - `_4`: All types
         * @default "_4"
         */
        noteType?: "_1" | "_2" | "_3" | "_4";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Xiaohongshu Pugongying creator profile and cooperation quote information for a known user ID. Use it to review a creator before campaign outreach or pricing comparison. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_profile": {
      input: {
        /**
         * Blogger's user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search Xiaohongshu Pugongying creators with keyword, audience, location, content, pricing, performance, cooperation, live, and similarity filters. Use it to build a campaign creator shortlist. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_creator_search": {
      input: {
        /**
         * Search criteria type.
         *
         * Available Values:
         * - `NICKNAME`: Search by nickname
         * - `NOTE`: Search by note content
         * @default "NICKNAME"
         */
        searchType?: "NICKNAME" | "NOTE";
        /** Search keyword. */
        keyword?: string;
        /**
         * Page number.
         * @default 1
         */
        page?: number;
        /**
         * Creator search sorting. Values: FANS sorts by follower count descending, DEFAULT uses Pugongying intelligent ranking.
         *
         * Available Values:
         * - `DEFAULT`: Platform default intelligent ranking
         * - `FANS`: Sort by follower count descending
         * @default "FANS"
         */
        sort?: "DEFAULT" | "FANS";
        /** Minimum number of fans. */
        fansNumberLower?: number;
        /** Maximum number of fans. */
        fansNumberUpper?: number;
        /**
         * Target fans age group.
         *
         * Available Values:
         * - `ALL`: All ages
         * - `LT_18`: Under 18
         * - `AGE_18_24`: 18 to 24
         * - `AGE_25_34`: 25 to 34
         * - `AGE_35_44`: 35 to 44
         * - `GT_44`: Above 44
         * @default "ALL"
         */
        fansAge?: "ALL" | "LT_18" | "AGE_18_24" | "AGE_25_34" | "AGE_35_44" | "GT_44";
        /**
         * Target fans gender.
         *
         * Available Values:
         * - `ALL`: All genders
         * - `MALE_HIGH`: Mainly Male
         * - `FE_MALE_HIGH`: Mainly Female
         * @default "ALL"
         */
        fansGender?: "ALL" | "MALE_HIGH" | "FE_MALE_HIGH";
        /**
         * Mother-and-baby audience stage filter. Pass Pugongying labels or numeric codes separated by English or Chinese commas.
         *
         * Available values:
         * - 1: 备孕
         * - 2: 0-6月
         * - 3: 7-12月
         * - 4: 1-3岁
         * - 5: 4-6岁
         * - 6: 7-12岁
         * - 7: 孕早期
         * - 8: 孕晚期
         *
         */
        fansChildAgeInfo?: string;
        /**
         * KOL's gender.
         *
         * Available Values:
         * - `ALL`: All genders
         * - `MALE`: Male
         * - `FEMALE`: Female
         * @default "ALL"
         */
        gender?: "ALL" | "MALE" | "FEMALE";
        /**
         * Creator profile location filter. Pass Pugongying location labels separated by English or Chinese commas. Country, China province or region, city-level paths, and district/county-level paths are supported. China province or region short labels are normalized to the full Pugongying value. Only paths present in the Pugongying location tree are accepted. Paths such as `河北 秦皇岛`, `山西 长治 潞州区`, or `中国 山西 长治 潞州区` are normalized to values like `中国 山西 长治 潞州区`.
         *
         * Available country/province base values:
         * - 中国
         * - 美国
         * - 日本
         * - 澳大利亚
         * - 英国
         * - 加拿大
         * - 韩国
         * - 法国
         * - 德国
         * - 新加坡
         * - 其他
         * - 中国 北京
         * - 中国 天津
         * - 中国 河北
         * - 中国 山西
         * - 中国 内蒙古
         * - 中国 辽宁
         * - 中国 吉林
         * - 中国 黑龙江
         * - 中国 上海
         * - 中国 江苏
         * - 中国 浙江
         * - 中国 安徽
         * - 中国 福建
         * - 中国 江西
         * - 中国 山东
         * - 中国 河南
         * - 中国 湖北
         * - 中国 湖南
         * - 中国 广东
         * - 中国 广西
         * - 中国 海南
         * - 中国 重庆
         * - 中国 四川
         * - 中国 贵州
         * - 中国 云南
         * - 中国 西藏
         * - 中国 陕西
         * - 中国 甘肃
         * - 中国 青海
         * - 中国 宁夏
         * - 中国 新疆
         * - 中国 澳门
         * - 中国 台湾
         * - 中国 香港
         *
         * Example:
         * - 广东,中国 上海,河北 秦皇岛,山西 长治 潞州区
         *
         */
        location?: string;
        /**
         * Content category filter. Pass first-level or second-level category labels from Pugongying, separated by commas.
         *
         * Available values:
         * - 美妆: 整体妆容, 唇妆, 眼妆, 美甲, 底妆, 美妆合集, 香水, 美妆其他
         * - 护肤: 面部保养, 面部清洁, 护肤合集, 护肤其他
         * - 个人护理: 头发产品, 身体护理, 口腔护理, 护理其他
         * - 母婴: 母婴日常, 早教, 婴童用品, 婴童洗护, 婴童食品, 婴童时尚, 孕期穿搭, 孕产经验, 产后恢复, 育儿经验, 宝宝才艺, 宝宝写真, 母婴其他
         * - 时尚: 穿搭, 配饰, 发型, 箱包, 鞋靴, 时尚其他
         * - 美食: 美食教程, 美食探店, 美食展示, 美食测评, 吃播, 美食其他
         * - 家居家装: 装修, 家居用品, 家居装饰, 家具, 家电, 室内设计, 居家经验, 家居家装其他
         * - 影视综资讯: 动漫, 电影, 电视, 娱乐资讯, 影视, 民生资讯, 综艺, 影视综其他
         * - 运动健身: 健身减肥, 健身塑形, 滑雪, 滑板, 水上活动, 运动其他, 足球, 篮球, 跑步, 游泳
         * - 宠物: 猫, 狗, 动物其他
         * - 文化艺术: 社科, 文化, 艺术, 文化艺术其他
         * - 兴趣爱好: 绘画, 手工, 阅读, 文具手账, 舞蹈, 益智玩具, 潮流玩具, 兴趣爱好其他
         * - 生活记录: 接地气生活, 日常片段, 中外生活, 品质生活, 校园生活
         * - 教育: 大学教育, k12教育, 家庭教育, 学习日常, 职场教育, 教育其他
         * - 情感: 情感知识, 情感日常, 情感其他
         * - 摄影: 人文风光摄影, 摄影技巧, 胶片摄影, 人像摄影, 摄影其他
         * - 游戏: 手机游戏, 主机游戏, 游戏其他, 线下游戏
         * - 科技数码: 数码, 玩机攻略, 数码科技其他
         * - 出行: 城市出行, 户外, 旅行
         * - 音乐
         * - 搞笑
         * - 健康养生
         * - 汽车
         * - 婚嫁: 婚礼造型, 婚礼记录, 婚礼经验, 婚礼用品
         * - 商业财经
         * - 素材
         * - 其他
         *
         */
        contentTag?: string;
        /**
         * Content scene label filter. Pass full Pugongying note category scene label paths separated by English or Chinese commas.
         *
         * Available values:
         * - 汽车 理性决策 选车攻略 政策
         * - 汽车 理性决策 选车攻略 购车顾虑
         * - 汽车 理性决策 选车攻略 配置
         * - 汽车 理性决策 选车攻略 能源类型优势对比
         * - 汽车 理性决策 选车攻略 攻略
         * - 汽车 理性决策 新车测评
         * - 汽车 理性决策 探店试驾
         * - 汽车 理性决策 车主心得
         * - 汽车 用车场景 远行近游 近郊探索
         * - 汽车 用车场景 远行近游 长途自驾
         * - 汽车 用车场景 远行近游 硬核越野
         * - 汽车 用车场景 提车/交付场景 场地布置与礼遇
         * - 汽车 用车场景 提车/交付场景 仪式感记录
         * - 汽车 用车场景 商务用车 移动头等舱
         * - 汽车 用车场景 商务用车 商务接待
         * - 汽车 用车场景 亲子家庭 家庭采购日
         * - 汽车 用车场景 亲子家庭 接送孩子
         * - 汽车 用车场景 亲子家庭 三代同堂
         * - 汽车 用车场景 亲子家庭 周末溜娃
         * - 汽车 用车场景 亲子家庭 车内学习室
         * - 汽车 用车场景 亲子家庭 车内育婴室
         * - 汽车 用车场景 朋友社交 后备箱经济
         * - 汽车 用车场景 朋友社交 移动娱乐屋
         * - 汽车 用车场景 礼赠场景 毕业礼物
         * - 汽车 用车场景 礼赠场景 送给父母
         * - 汽车 用车场景 礼赠场景 适合送男友
         * - 汽车 用车场景 礼赠场景 适合送女友
         * - 汽车 用车场景 户外兴趣 钓鱼/野营
         * - 汽车 用车场景 户外兴趣 骑行
         * - 汽车 用车场景 户外兴趣 徒步
         * - 汽车 用车场景 户外兴趣 硬核竞速
         * - 汽车 用车场景 宠物出行 大型宠物
         * - 汽车 用车场景 宠物出行 短途出行
         * - 汽车 用车场景 宠物出行 小型宠物
         * - 汽车 用车场景 宠物出行 长途出行
         * - 汽车 用车场景 城市通勤 车内小憩
         * - 汽车 用车场景 城市通勤 健身储物
         * - 汽车 用车场景 城市通勤 日常通勤
         * - 汽车 用车场景 城市通勤 生活圈代步
         * - 汽车 用车场景 城市通勤 移动美容舱
         * - 汽车 个性化美化 个性改装
         * - 汽车 个性化美化 储物收纳
         * - 汽车 个性化美化 车内装饰
         * - 汽车 个性化美化 车外装饰
         * - 汽车 个性化美化 车衣保护
         * - 汽车 个性化美化 汽车用品
         * - 汽车 车型品类 轿车
         * - 汽车 车型品类 SUV
         * - 汽车 车型品类 MPV
         * - 汽车 车型品类 跑车
         * - 汽车 车型品类 微型车
         * - 汽车 车型品类 微面
         * - 汽车 车型品类 房车
         * - 汽车 车型品类 越野车
         * - 汽车 车型品类 旅行车
         * - 汽车 圈层属性 改装圈层
         * - 汽车 圈层属性 痛车圈层
         * - 汽车 圈层属性 跑山圈层
         * - 汽车 品牌倾向 自主
         * - 汽车 品牌倾向 豪华
         * - 汽车 品牌倾向 集团
         * - 汽车 品牌倾向 新势力
         * - 汽车 能源类型 纯电车
         * - 汽车 能源类型 新能源
         * - 汽车 能源类型 油车
         * - 汽车 人生阶段 单身
         * - 汽车 人生阶段 多娃&大家庭阶段
         * - 汽车 人生阶段 银发退休阶段
         * - 游戏 游戏品类 网页游戏
         * - 游戏 游戏品类 电脑游戏
         * - 游戏 游戏品类 手机游戏
         * - 游戏 游戏类型 动作格斗游戏 永劫无间
         * - 游戏 游戏类型 即时制二次元游戏 境界刀鸣
         * - 游戏 游戏类型 即时制二次元游戏 黑色信标
         * - 游戏 游戏类型 即时制二次元游戏 物华弥新
         * - 游戏 游戏类型 即时制二次元游戏 无期迷途
         * - 游戏 游戏类型 即时制二次元游戏 新月同行
         * - 游戏 游戏类型 即时制二次元游戏 绝区零
         * - 游戏 游戏类型 即时制角色扮演 诛仙2
         * - 游戏 游戏类型 即时制角色扮演 诛仙
         * - 游戏 游戏类型 即时制角色扮演 明日之后
         * - 游戏 游戏类型 即时制角色扮演 超自然行动组
         * - 游戏 游戏类型 即时制角色扮演 永恒之塔2
         * - 游戏 游戏类型 回合制二次元游戏 未定事件簿
         * - 游戏 游戏类型 回合制二次元游戏 雷索纳斯
         * - 游戏 游戏类型 回合制二次元游戏 浮生忆玲珑
         * - 游戏 游戏类型 回合制二次元游戏 重返未来1999
         * - 游戏 游戏类型 回合制角色扮演 梦幻西游手游
         * - 游戏 游戏类型 回合制角色扮演 龙魂旅人
         * - 游戏 游戏类型 回合制角色扮演 最终幻想14
         * - 游戏 游戏类型 塔防游戏 保卫向日葵
         * - 游戏 游戏类型 塔防游戏 全境守卫
         * - 游戏 游戏类型 塔防游戏 向僵尸开炮
         * - 游戏 游戏类型 开放世界角色扮演 燕云十六声
         * - 游戏 游戏类型 开放世界角色扮演 王者荣耀世界
         * - 游戏 游戏类型 恋爱游戏 如鸢
         * - 游戏 游戏类型 恋爱游戏 银与绯
         * - 游戏 游戏类型 恋爱游戏 时空中的绘旅人
         * - 游戏 游戏类型 恋爱游戏 光与夜之恋
         * - 游戏 游戏类型 恋爱游戏 恋与深空
         * - 游戏 游戏类型 恋爱游戏 恋与制作人
         * - 游戏 游戏类型 战略游戏 率土之滨
         * - 游戏 游戏类型 战略游戏 群星纪元
         * - 游戏 游戏类型 战略游戏 阿瓦隆之王
         * - 游戏 游戏类型 战略游戏 快来当领主
         * - 游戏 游戏类型 战略游戏 冒险之星
         * - 游戏 游戏类型 战略游戏 无尽的拉格朗日
         * - 游戏 游戏类型 放置类二次元游戏 花花与幕间剧
         * - 游戏 游戏类型 放置类角色扮演 发条总动员
         * - 游戏 游戏类型 放置类角色扮演 遮天凡尘一叶
         * - 游戏 游戏类型 模拟养成 美人传
         * - 游戏 游戏类型 模拟养成 盲盒派对
         * - 游戏 游戏类型 模拟养成 闪耀暖暖
         * - 游戏 游戏类型 模拟养成 以闪亮之名
         * - 游戏 游戏类型 模拟养成 无限暖暖
         * - 游戏 游戏类型 模拟家园建造 江南百景图
         * - 游戏 游戏类型 模拟家园建造 动物森友会
         * - 游戏 游戏类型 模拟家园建造 星露谷物语
         * - 游戏 游戏类型 模拟经营 暴吵萌厨
         * - 游戏 游戏类型 模拟经营 肥鹅健身房
         * - 游戏 游戏类型 模拟职业 杜拉拉升职记
         * - 游戏 游戏类型 消除游戏 四季合合
         * - 游戏 游戏类型 生存沙盒游戏 无尽冬日
         * - 游戏 游戏类型 聚会游戏 蛋仔派对
         * - 游戏 游戏类型 聚会游戏 代号砰砰
         * - 游戏 游戏类型 解谜游戏 晴空之下
         * - 游戏 游戏类型 抓宠类游戏 洛克王国手游
         * - 游戏 游戏类型 射击游戏 三角洲行动
         * - 游戏 游戏类型 射击游戏 codm（使命召唤）
         * - 母婴 婴童洗护 安全防晒
         * - 母婴 婴童洗护 浴后护理
         * - 母婴 婴童洗护 敏感修护
         * - 母婴 婴童洗护 屏障树立
         * - 母婴 婴童洗护 泳后护理
         * - 母婴 婴童洗护 口周干裂
         * - 母婴 婴童洗护 分区清洁
         * - 母婴 婴童洗护 头皮问题
         * - 母婴 婴童洗护 驱虫驱蚊
         * - 母婴 婴童洗护 洁面清洁
         * - 母婴 婴童洗护 红屁股
         * - 母婴 婴童洗护 湿疹皮炎
         * - 母婴 婴童洗护 痱子热疹
         * - 母婴 婴童洗护 抚触链接
         * - 母婴 婴童洗护 趣味洗护
         * - 母婴 母婴纸品 精算育儿
         * - 母婴 母婴纸品 颜值派
         * - 母婴 母婴纸品 汗宝宝
         * - 母婴 母婴纸品 囤货党
         * - 母婴 母婴纸品 敏感肌
         * - 母婴 母婴纸品 肉腿娃
         * - 母婴 母婴纸品 功课党
         * - 母婴 母婴纸品 好动宝
         * - 母婴 母婴纸品 安睡整夜
         * - 母婴 母婴纸品 出行便携
         * - 母婴 母婴纸品 贵妇体验
         * - 母婴 母婴纸品 红屁屁
         * - 母婴 母婴小家电 空间收纳
         * - 母婴 母婴小家电 滋补养生
         * - 母婴 母婴小家电 温度把控
         * - 母婴 母婴小家电 夜奶操作
         * - 母婴 母婴小家电 新手喂养
         * - 母婴 母婴小家电 材质挑选
         * - 母婴 母婴小家电 三代同育
         * - 母婴 母婴小家电 户外喂养
         * - 母婴 母婴小家电 通乳攻略
         * - 母婴 母婴小家电 洁癖爸妈
         * - 母婴 母婴小家电 精准喂养
         * - 母婴 母婴小家电 职场妈妈
         * - 母婴 婴童辅食 吞咽能力
         * - 母婴 婴童辅食 多元辅食
         * - 母婴 婴童辅食 零食分享
         * - 母婴 婴童辅食 健康零食
         * - 母婴 婴童辅食 放学加餐
         * - 母婴 婴童辅食 出牙磨牙
         * - 母婴 婴童辅食 居家囤货
         * - 母婴 婴童辅食 节日礼包
         * - 母婴 婴童辅食 零食训练
         * - 母婴 婴童辅食 宝宝挑食
         * - 母婴 婴童辅食 户外零食
         * - 母婴 婴童辅食 低敏辅食
         * - 母婴 婴童辅食 入园社交
         * - 母婴 婴童辅食 居家辅食
         * - 母婴 婴童辅食 入园准备
         * - 母婴 婴童辅食 敏敏零食
         * - 母婴 婴童辅食 抓握训练
         * - 母婴 婴童辅食 外出口粮
         * - 母婴 婴童辅食 营养均衡
         * - 母婴 婴童辅食 自主进食
         * - 母婴 婴童辅食 第一口辅食
         * - 母婴 母婴营养品 开胃因子
         * - 母婴 母婴营养品 视力保护
         * - 母婴 母婴营养品 营养补充
         * - 母婴 母婴营养品 防护因子
         * - 母婴 母婴营养品 高钙因子
         * - 母婴 母婴营养品 自护构建
         * - 母婴 母婴营养品 发育表现
         * - 母婴 母婴营养品 助眠安睡
         * - 母婴 婴童奶粉 丝滑转奶
         * - 母婴 婴童奶粉 益生组合
         * - 母婴 婴童奶粉 眼脑体发育
         * - 母婴 婴童奶粉 选奶功课
         * - 母婴 婴童奶粉 防敏脱敏
         * - 母婴 婴童奶粉 助力聪明脑
         * - 母婴 婴童奶粉 乳铁自护
         * - 母婴 婴童奶粉 黄金长高
         * - 母婴 婴童奶粉 内修外护
         * - 母婴 婴童奶粉 肚肚吸收
         * - 母婴 婴童奶粉 断奶攻略
         * - 母婴 婴童奶粉 混合喂养
         * - 母婴 婴童奶粉 母源黄金HMO
         * - 母婴 婴童奶粉 长肉多肉
         * - 母婴 哺乳喂养工具 萌娃穿搭
         * - 母婴 哺乳喂养工具 安全材质
         * - 母婴 哺乳喂养工具 奶瓶喂养
         * - 母婴 哺乳喂养工具 颜值发育
         * - 母婴 哺乳喂养工具 哄娃安抚
         * - 母婴 哺乳喂养工具 餐具选购
         * - 母婴 哺乳喂养工具 学饮指南
         * - 母婴 哺乳喂养工具 换季保温
         * - 母婴 母婴孕产 职场孕妇
         * - 母婴 母婴孕产 产后复工
         * - 母婴 母婴孕产 顺产
         * - 母婴 母婴孕产 孕期变化
         * - 母婴 母婴孕产 孕期学习
         * - 母婴 母婴孕产 剖腹产
         * - 母婴 母婴家居 护脊深睡
         * - 母婴 母婴家居 安全翻滚
         * - 母婴 母婴家居 进食习惯
         * - 母婴 母婴家居 早教启蒙
         * - 母婴 母婴家居 学习角落
         * - 母婴 母婴家居 自主入睡
         * - 母婴 母婴家居 爬行探索
         * - 母婴 母婴家居 防惊跳
         * - 母婴 母婴出行&用品 长线旅途
         * - 母婴 母婴出行&用品 户外探索
         * - 母婴 母婴出行&用品 二胎/双胎
         * - 母婴 母婴出行&用品 新贵消费
         * - 母婴 母婴出行&用品 备产研究
         * - 母婴 母婴出行&用品 短途旅行
         * - 母婴 母婴出行&用品 高频出行
         * - 母婴 母婴出行&用品 新生出行
         * - 母婴 母婴出行&用品 务实精算
         * - 母婴 母婴出行&用品 遛娃必备
         *
         */
        contentSceneLabel?: string;
        /**
         * Blogger persona tag filter. Pass one or more Pugongying persona labels separated by English or Chinese commas.
         *
         * Available values:
         * - 妈妈
         * - 萌娃
         * - 爸爸
         * - 奶奶
         * - 情侣
         * - 夫妻
         * - 家庭
         * - 闺蜜
         * - 兄弟
         * - 备孕中
         * - 孕期中
         * - 12岁以上
         * - 传统行业
         * - 互联网
         * - 教育科研
         * - 金融法律
         * - 企业创业
         * - 时尚美妆
         * - 食品饮料
         * - 文化传媒
         * - 医疗健康
         * - 艺术设计
         * - 影视娱乐
         * - 运动健身
         * - 专业服务
         * - 工程师
         * - 销售
         * - HR
         * - 教练
         * - 运动员
         * - 舞蹈老师
         * - 生活背景
         * - 备考经验
         * - 兴趣爱好
         * - 留学背景
         * - 海外华人
         * - 铲屎官
         * - 孕妈
         * - 独居人群
         * - 外国人
         * - 混血儿
         *
         * Example:
         * - 妈妈,教练,运动员,舞蹈老师,留学背景
         *
         */
        personalTags?: string;
        /**
         * Marketing target filter. Pass one Pugongying marketing target value.
         *
         * Available values:
         * - estimateAllCpm: Exposure - exposure performance - cost
         * - mAccumImpNum: Exposure - exposure performance - scale
         * - readCost: Exposure - read performance - cost
         * - mValidRawReadFeedNum: Exposure - read performance - scale
         * - estimateEngageCost: Seeding - engagement performance - cost
         * - mEngagementNum90d: Seeding - engagement performance - scale
         * - estimateCpuv: Conversion - outer-store visit performance - cost
         * - mCpuvNum: Conversion - outer-store visit performance - scale
         *
         */
        marketTarget?: string;
        /**
         * Audience target filter. Pass Pugongying audience group IDs (`dmpGroupId`) separated by English or Chinese commas. These IDs are dynamic and account-specific, so there is no fixed global value list. Use the audience group name shown in Pugongying Audience Management to identify what each ID means.
         *
         */
        audienceGroup?: string;
        /** Top-20 audience filter. Pass top-level or child audience labels separated by commas; child labels are converted to Pugongying request values. */
        top20CrowdsLabel?: string;
        /** Industry-specific portrait filter. Pass Pugongying portrait value IDs or label values separated by commas. */
        industrySpecificCrowdsMotorDom?: string;
        /** Good-at content tag filter. Pass label values separated by commas. */
        featureTags?: string;
        /** Content theme filter. Pass Pugongying value IDs or label values separated by commas; labels are converted to value IDs. */
        contentThemeLabel?: string;
        /** Whether to exclude low-activity bloggers. */
        excludeLowActive?: boolean;
        /** Whether to exclude bloggers whose fan count is dropping. */
        fansNumUp?: boolean;
        /**
         * Note type filter. Values: ALL=all note types, PHOTO_TEXT=mainly photo-text notes, VIDEO=mainly video notes.
         *
         * Available Values:
         * - `ALL`: All note types
         * - `PHOTO_TEXT`: Mainly photo-text notes
         * - `VIDEO`: Mainly video notes
         * @default "ALL"
         */
        noteType?: "ALL" | "PHOTO_TEXT" | "VIDEO";
        /**
         * Pugongying industry preset for industry assistant style creator recommendations.
         *
         * Available Values:
         * - `BEAUTY_PERSONAL_CARE_BEAUTY`: Beauty and personal care - beauty
         * - `BEAUTY_PERSONAL_CARE_SKINCARE`: Beauty and personal care - skincare
         * - `BEAUTY_PERSONAL_CARE_PERSONAL_CARE`: Beauty and personal care - personal care
         * - `BEAUTY_PERSONAL_CARE_FRAGRANCE`: Beauty and personal care - fragrance
         * - `FOOD_BEVERAGE_SNACKS`: Food and beverage - snacks
         * - `FOOD_BEVERAGE_DRINKS`: Food and beverage - drinks
         * - `FOOD_BEVERAGE_HEALTH_FOOD`: Food and beverage - health food
         * - `FOOD_BEVERAGE_DAIRY`: Food and beverage - dairy
         * - `FOOD_BEVERAGE_ALCOHOL`: Food and beverage - alcohol
         * - `FOOD_BEVERAGE_GRAINS_OIL`: Food and beverage - grains and oil
         * - `FOOD_BEVERAGE_CROSS_BORDER_FOOD`: Food and beverage - cross-border food
         * - `FOOD_BEVERAGE_FRESH_FOOD`: Food and beverage - fresh food
         * - `FOOD_BEVERAGE_MEAL_REPLACEMENT`: Food and beverage - meal replacement
         * - `FOOD_BEVERAGE_TRADITIONAL_NOURISHMENT`: Food and beverage - traditional nourishment
         * - `MOTHER_BABY_SUPPLIES`: Mother and baby - baby supplies
         * - `MOTHER_BABY_FORMULA_FOOD`: Mother and baby - formula and baby food
         * - `DIGITAL_APPLIANCES_HOME_APPLIANCES`: Digital and appliances - home appliances
         * - `DIGITAL_APPLIANCES_DIGITAL_PRODUCTS`: Digital and appliances - digital products
         * - `DAILY_GOODS_HOUSEHOLD_DAILY_USE`: Daily goods - household daily use
         * - `DAILY_GOODS_PET_SUPPLIES_FOOD`: Daily goods - pet supplies and food
         * - `DAILY_GOODS_OFFICE_SUPPLIES`: Daily goods - office supplies
         * - `APPAREL_ACCESSORIES_CLOTHING_SHOES_HATS`: Apparel and accessories - clothing, shoes, and hats
         * - `APPAREL_ACCESSORIES_JEWELRY`: Apparel and accessories - jewelry
         * - `APPAREL_ACCESSORIES_BAGS_GLASSES`: Apparel and accessories - bags and glasses
         * - `APPAREL_ACCESSORIES_SPORTS_OUTDOOR`: Apparel and accessories - sports and outdoor
         * - `APPAREL_ACCESSORIES_WATCHES`: Apparel and accessories - watches
         * - `APPAREL_ACCESSORIES_SECOND_HAND_LUXURY`: Apparel and accessories - second-hand luxury
         * - `HOME_BUILDING_MATERIALS_HOME_DECOR`: Home and building materials - home decor
         * - `HOME_BUILDING_MATERIALS_FURNITURE`: Home and building materials - furniture
         * - `HOME_BUILDING_MATERIALS_MAIN_MATERIALS`: Home and building materials - main building materials
         * - `AUTOMOTIVE`: Automotive
         * - `INTERNET_ECOMMERCE`: Internet - e-commerce
         * - `INTERNET_SOFTWARE_TOOLS`: Internet - software tools
         * - `HEALTHCARE_MEDICAL_DEVICES`: Healthcare - medical devices
         * - `HEALTHCARE_MEDICAL_BEAUTY`: Healthcare - medical beauty
         * - `CULTURE_SPORTS_ENTERTAINMENT_SPORTS_GOODS`: Culture, sports, and entertainment - sports goods
         * - `CULTURE_SPORTS_ENTERTAINMENT_STATIONERY_TOYS_GIFTS`: Culture, sports, and entertainment - stationery, toys, and gifts
         * - `CULTURE_SPORTS_ENTERTAINMENT_OUTDOOR_PRODUCTS`: Culture, sports, and entertainment - outdoor products
         * - `CULTURE_SPORTS_ENTERTAINMENT_ART_COLLECTIBLES`: Culture, sports, and entertainment - art collectibles
         * - `LIFE_SERVICES_OFFLINE_RETAIL`: Life services - offline retail
         * - `LIFE_SERVICES_BEAUTY_HAIR`: Life services - beauty and hair
         * - `CATERING_RESTAURANTS`: Catering - restaurants
         * - `CATERING_DRINKS_DESSERTS`: Catering - drinks and desserts
         * - `BUSINESS_SERVICES`: Business services
         * - `EDUCATION_TRAINING_LANGUAGE_STUDY_ABROAD`: Education and training - language and study abroad
         * - `EDUCATION_TRAINING_VOCATIONAL_EDUCATION`: Education and training - vocational education
         * - `EDUCATION_TRAINING_INTEREST_TRAINING`: Education and training - interest training
         * - `EDUCATION_TRAINING_K12_EDUCATION`: Education and training - K-12 education
         * - `EDUCATION_TRAINING_DEGREE_EDUCATION`: Education and training - degree education
         * - `EDUCATION_TRAINING_CORPORATE_DEVELOPMENT`: Education and training - corporate and team development
         * - `EDUCATION_TRAINING_OTHER`: Education and training - other
         * - `GAMES`: Games
         * - `TRAVEL_TOURISM`: Travel and tourism
         */
        industry?: "BEAUTY_PERSONAL_CARE_BEAUTY" | "BEAUTY_PERSONAL_CARE_SKINCARE" | "BEAUTY_PERSONAL_CARE_PERSONAL_CARE" | "BEAUTY_PERSONAL_CARE_FRAGRANCE" | "FOOD_BEVERAGE_SNACKS" | "FOOD_BEVERAGE_DRINKS" | "FOOD_BEVERAGE_HEALTH_FOOD" | "FOOD_BEVERAGE_DAIRY" | "FOOD_BEVERAGE_ALCOHOL" | "FOOD_BEVERAGE_GRAINS_OIL" | "FOOD_BEVERAGE_CROSS_BORDER_FOOD" | "FOOD_BEVERAGE_FRESH_FOOD" | "FOOD_BEVERAGE_MEAL_REPLACEMENT" | "FOOD_BEVERAGE_TRADITIONAL_NOURISHMENT" | "MOTHER_BABY_SUPPLIES" | "MOTHER_BABY_FORMULA_FOOD" | "DIGITAL_APPLIANCES_HOME_APPLIANCES" | "DIGITAL_APPLIANCES_DIGITAL_PRODUCTS" | "DAILY_GOODS_HOUSEHOLD_DAILY_USE" | "DAILY_GOODS_PET_SUPPLIES_FOOD" | "DAILY_GOODS_OFFICE_SUPPLIES" | "APPAREL_ACCESSORIES_CLOTHING_SHOES_HATS" | "APPAREL_ACCESSORIES_JEWELRY" | "APPAREL_ACCESSORIES_BAGS_GLASSES" | "APPAREL_ACCESSORIES_SPORTS_OUTDOOR" | "APPAREL_ACCESSORIES_WATCHES" | "APPAREL_ACCESSORIES_SECOND_HAND_LUXURY" | "HOME_BUILDING_MATERIALS_HOME_DECOR" | "HOME_BUILDING_MATERIALS_FURNITURE" | "HOME_BUILDING_MATERIALS_MAIN_MATERIALS" | "AUTOMOTIVE" | "INTERNET_ECOMMERCE" | "INTERNET_SOFTWARE_TOOLS" | "HEALTHCARE_MEDICAL_DEVICES" | "HEALTHCARE_MEDICAL_BEAUTY" | "CULTURE_SPORTS_ENTERTAINMENT_SPORTS_GOODS" | "CULTURE_SPORTS_ENTERTAINMENT_STATIONERY_TOYS_GIFTS" | "CULTURE_SPORTS_ENTERTAINMENT_OUTDOOR_PRODUCTS" | "CULTURE_SPORTS_ENTERTAINMENT_ART_COLLECTIBLES" | "LIFE_SERVICES_OFFLINE_RETAIL" | "LIFE_SERVICES_BEAUTY_HAIR" | "CATERING_RESTAURANTS" | "CATERING_DRINKS_DESSERTS" | "BUSINESS_SERVICES" | "EDUCATION_TRAINING_LANGUAGE_STUDY_ABROAD" | "EDUCATION_TRAINING_VOCATIONAL_EDUCATION" | "EDUCATION_TRAINING_INTEREST_TRAINING" | "EDUCATION_TRAINING_K12_EDUCATION" | "EDUCATION_TRAINING_DEGREE_EDUCATION" | "EDUCATION_TRAINING_CORPORATE_DEVELOPMENT" | "EDUCATION_TRAINING_OTHER" | "GAMES" | "TRAVEL_TOURISM";
        /** Daily note exposure median range. Pass two comma-separated numeric bounds; use -1 or null for an open upper bound. */
        accumCommonImpMedinNum30d?: string;
        /** Daily note read median range. Pass two comma-separated numeric bounds; use -1 or null for an open upper bound. */
        readMidNor30?: string;
        /** Daily note interaction median range. Pass two comma-separated numeric bounds; use -1 or null for an open upper bound. */
        interMidNor30?: string;
        /** Thousand-like note ratio range. Pass fractional ratios such as 0.4,null or percentage values such as 40,null. */
        thousandLikePercent30?: string;
        /** Photo-text cooperation quote range. Pass two comma-separated numeric bounds; use -1 or null for an open upper bound. */
        notePrice?: string;
        /** Video cooperation quote range. Pass two comma-separated numeric bounds; use -1 or null for an open upper bound. */
        videoPrice?: string;
        /** 48-hour invite reply ratio range. Pass fractional ratios such as 0.9,0.95 or percentage values such as 90,95. */
        inviteReply48hNumRatio?: string;
        /** Current cooperation order count range. Pass two comma-separated numeric bounds. */
        progressOrderCnt?: string;
        /** Recent cooperation industry filter from Pugongying. */
        tradeType?: string;
        /** Recent cooperation brand IDs, separated by English or Chinese commas. */
        tradeReportBrandIds?: string;
        /** Whether to exclude creators who cooperated with the selected recent cooperation brands. */
        excludeTradeReportBrandIds?: boolean;
        /** Cooperation note exposure median range. Pass two comma-separated numeric bounds. */
        accumCoopImpMedinNum30d?: string;
        /** Cooperation note read median range. Pass two comma-separated numeric bounds. */
        readMidCoop30?: string;
        /** Cooperation note interaction median range. Pass two comma-separated numeric bounds. */
        interMidCoop30?: string;
        /** Cooperation note outer-store median range. Pass two comma-separated numeric bounds. */
        mCpuvNum30d?: string;
        /** Estimated photo-text CPM range. Pass two comma-separated numeric bounds. */
        estimatePictureCpm?: string;
        /** Estimated video CPM range. Pass two comma-separated numeric bounds. */
        estimateVideoCpm?: string;
        /** Estimated photo-text read unit price range. Pass two comma-separated numeric bounds. */
        estimatePicReadPrice?: string;
        /** Estimated video read unit price range. Pass two comma-separated numeric bounds. */
        estimateVideoReadPrice?: string;
        /** Estimated photo-text engagement unit price range. Pass two comma-separated numeric bounds. */
        estimatePictureEngageCost?: string;
        /** Estimated video engagement unit price range. Pass two comma-separated numeric bounds. */
        estimateVideoEngageCost?: string;
        /** Estimated outer-store visit unit price range. Pass two comma-separated numeric bounds. */
        estimateCpuv30d?: string;
        /** Live count in the last 30 days range. Pass two comma-separated numeric bounds. */
        kliveCnt30d?: string;
        /** Average live viewer count range. Pass two comma-separated numeric bounds. */
        avgLiveViewerNum?: string;
        /** Average live sales amount range. Pass two comma-separated numeric bounds. */
        avgAgmv90d?: string;
        /** Similar creator user ID. `similarUserId` and `similarWord` must be provided together. */
        similarUserId?: string;
        /** Similar creator keyword shown by Pugongying. `similarUserId` and `similarWord` must be provided together. */
        similarWord?: string;
        /**
         * Follower audience location filter. Pass Pugongying follower-region labels separated by English or Chinese commas. Country, China province, and city-level paths are supported; district/county-level paths are not accepted. Only paths present in the Pugongying follower-region tree are accepted. Use city paths such as `福建 南平`, `福建-南平`, or `中国 福建 南平`; they are normalized to values like `中国 福建 南平`.
         *
         * Examples:
         * - 福建 南平
         * - 中国 福建 南平,广东
         *
         */
        fansLocation?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the Xiaohongshu Pugongying data summary for a creator's daily or cooperation notes. Use it to compare aggregate creator performance between business modes. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_data_summary": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Business type.
         *
         * Available Values:
         * - `DAILY_NOTE`: Daily notes
         * - `COOPERATE_NOTE`: Cooperative notes
         * @default "DAILY_NOTE"
         */
        business?: "DAILY_NOTE" | "COOPERATE_NOTE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Xiaohongshu Pugongying follower profile data for a known creator. Use it to review a creator's audience profile during campaign planning. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_follower_distribution": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Xiaohongshu Pugongying follower history for a creator over the selected 30- or 90-day period. Use it to track total followers or new-follower growth over time. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_follower_growth_history": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Time range for data.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        dateType?: "DAY_30" | "DAY_90";
        /**
         * Type of growth data.
         *
         * Available Values:
         * - `FANS_TOTAL`: Total fans
         * - `FANS_INCREASE`: New fans increase
         * @default "FANS_TOTAL"
         */
        increaseType?: "FANS_TOTAL" | "FANS_INCREASE";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the Xiaohongshu Pugongying follower summary for a known creator. Use it to review the account's aggregate audience status before deeper demographic or trend analysis. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_follower_summary": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Xiaohongshu Pugongying details for a known note ID. Use it to review an individual note during creator or campaign research. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_note_details": {
      input: {
        /**
         * Note's unique ID.
         * @minLength 1
         */
        noteId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Xiaohongshu Pugongying aggregate note performance metrics for a creator with business, note-type, date-range, and advertisement filters. Use it to compare content performance across selected scopes. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_note_performance_metrics": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Business type.
         *
         * Available Values:
         * - `DAILY_NOTE`: Daily notes
         * - `COOPERATE_NOTE`: Cooperative notes
         * @default "DAILY_NOTE"
         */
        business?: "DAILY_NOTE" | "COOPERATE_NOTE";
        /**
         * Type of note.
         *
         * Available Values:
         * - `PHOTO_TEXT_AND_VIDEO`: Photo and Video
         * - `PHOTO_TEXT`: Photo and Text
         * - `VIDEO`: Video only
         * @default "PHOTO_TEXT_AND_VIDEO"
         */
        noteType?: "PHOTO_TEXT_AND_VIDEO" | "PHOTO_TEXT" | "VIDEO";
        /**
         * Time range for data.
         *
         * Available Values:
         * - `DAY_30`: Last 30 days
         * - `DAY_90`: Last 90 days
         * @default "DAY_30"
         */
        dateType?: "DAY_30" | "DAY_90";
        /**
         * Advertisement filter.
         *
         * Available Values:
         * - `ALL`: All notes
         * - `ORGANIC_ONLY`: Organic notes only
         * @default "ALL"
         */
        advertiseSwitch?: "ALL" | "ORGANIC_ONLY";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve paginated Xiaohongshu Pugongying creators similar to a known creator. Use it to expand a campaign shortlist from an existing reference account. */
    "justoneapi.xiaohongshu_creator_marketplace_pugongying_similar_creators": {
      input: {
        /**
         * KOL's user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Page number for results.
         * @default 1
         */
        pageNum?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Xiaohongshu E-commerce (RedNote) products by keyword with page and search-ID pagination; pages after the first require the search ID returned by the initial search. Use it to discover marketplace products and continue through multi-page results. */
    "justoneapi.xiaohongshu_e_commerce_rednote_product_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Page number, starting from 1. */
        page?: string;
        /**
         * Search ID returned by the first-page response; required when page is greater than 1.
         * @default ""
         */
        searchId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Queries Xiaohongshu (RedNote) Ask Dots AI with a keyword question. Use it to retrieve an AI answer for topic research and question exploration. */
    "justoneapi.xiaohongshu_rednote_ask_dots_ai": {
      input: {
        /**
         * Question or keyword to submit to Ask Dots AI.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves replies to a specific Xiaohongshu (RedNote) note comment with cursor pagination. Use it to inspect threaded discussions and continue through reply pages for feedback review or moderation. */
    "justoneapi.xiaohongshu_rednote_comment_replies": {
      input: {
        /**
         * Unique note identifier on Xiaohongshu.
         * @minLength 1
         */
        noteId: string;
        /**
         * Unique comment identifier on Xiaohongshu.
         * @minLength 1
         */
        commentId: string;
        /** Pagination cursor from the previous page (use the cursor value returned by the last response). */
        lastCursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves the Xiaohongshu (RedNote) creator center hot inspiration feed with cursor pagination. Use it to discover inspiration for content planning and explore further pages of creative ideas. */
    "justoneapi.xiaohongshu_rednote_hot_inspiration_feed": {
      input: {
        /**
         * Leave empty for the first request. For the next page, pass the cursor value returned by the previous response.
         * @default ""
         */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Xiaohongshu (RedNote) hot-content entries with optional keyword, content-category path, pagination, ranking metric, and time-range controls. Use it to support trend discovery, topic monitoring, and content planning. */
    "justoneapi.xiaohongshu_rednote_hot_search": {
      input: {
        /**
         * Search keyword.
         * @default ""
         */
        searchWord?: string;
        /**
         * Page number for pagination.
         * @default 1
         */
        pageNum?: number;
        /**
         * Sort metric for the result set.
         *
         * Available Values:
         * - `premium_imp_num`: Exposure
         * - `premium_good_read_rate`: Read rate
         * - `premium_read_num`: Read count
         * - `premium_engage_num`: Engagement count
         * - `premium_engage_rate`: Engagement rate
         * - `premium_like_num`: Like count
         * - `premium_fav_num`: Favorite count
         * - `premium_cmt_num`: Comment count
         * @default "premium_imp_num"
         */
        orderBy?: "premium_imp_num" | "premium_good_read_rate" | "premium_read_num" | "premium_engage_num" | "premium_engage_rate" | "premium_like_num" | "premium_fav_num" | "premium_cmt_num";
        /**
         * Time range in days.
         *
         * Available Values:
         * - `DAY_3`: Last 3 days
         * - `DAY_7`: Last 7 days
         * - `DAY_14`: Last 14 days
         * - `DAY_30`: Last 30 days
         * @default "DAY_7"
         */
        nd?: "DAY_3" | "DAY_7" | "DAY_14" | "DAY_30";
        /**
         * Content category filter. Pass one complete Pugongying category path joined with # separators. You may pass a parent path or append one listed child with another #. Only one path is accepted.
         *
         * Available values:
         *
         * Content categories:
         * - 内容类目#美妆: 整体妆容, 唇妆, 眼妆, 美甲, 底妆, 美妆合集, 香水, 美妆其他
         * - 内容类目#护肤: 面部保养, 面部清洁, 护肤合集, 护肤其他
         * - 内容类目#个人护理: 头发产品, 身体护理, 口腔护理, 护理其他
         * - 内容类目#母婴: 母婴日常, 早教, 婴童用品, 婴童洗护, 婴童食品, 婴童时尚, 孕期穿搭, 孕产经验, 产后恢复, 育儿经验, 宝宝才艺, 宝宝写真, 母婴其他
         * - 内容类目#时尚: 穿搭, 配饰, 发型, 箱包, 鞋靴, 时尚其他
         * - 内容类目#美食: 美食教程, 美食探店, 美食展示, 美食测评, 吃播, 美食其他
         * - 内容类目#家居家装: 装修, 家居用品, 花艺园艺, 家居装饰, 家具, 家电, 室内设计, 居家经验, 家居家装其他
         * - 内容类目#影视综资讯: 动漫, 娱乐资讯, 影视, 民生资讯, 综艺, 影视综其他
         * - 内容类目#运动健身: 减脂塑形, 滑雪, 滑板, 水上活动, 运动其他, 足球, 篮球, 跑步, 游泳
         * - 内容类目#宠物: 猫, 狗, 动物其他
         * - 内容类目#文化艺术: 社科, 文化, 艺术, 文化艺术其他
         * - 内容类目#兴趣爱好: 绘画, 手工, 阅读, 文具手账, 舞蹈, 兴趣爱好其他, 玩具周边
         * - 内容类目#生活记录: 接地气生活, 日常片段, 中外生活, 品质生活, 校园生活
         * - 内容类目#教育: 大学教育, k12教育, 家庭教育, 学习日常, 留学教育, 教育其他, 语言教育
         * - 内容类目#职场: 职场干货, 职场行业, 职业考试, 职场其他
         * - 内容类目#情感: 情感知识, 情感日常, 情感其他
         * - 内容类目#摄影: 人文风光摄影, 摄影技巧, 胶片摄影, 人像摄影, 摄影其他
         * - 内容类目#游戏: 手机游戏, 主机游戏, 游戏其他, 线下游戏
         * - 内容类目#科技数码: 移动数码, 玩机攻略, 数码科技其他
         * - 内容类目#出行旅游: 城市出行, 户外, 旅行
         * - 内容类目#音乐
         * - 内容类目#搞笑
         * - 内容类目#健康养生
         * - 内容类目#汽车: 用车攻略, 汽车评测, 汽车其他
         * - 内容类目#婚嫁: 婚礼造型, 婚礼记录, 婚礼经验, 婚礼用品
         * - 内容类目#商业财经
         * - 内容类目#素材
         * - 内容类目#其他
         *
         * Industry categories:
         * - 所属行业#母婴: 母婴出行, 哺乳喂养工具, 婴童个护清洁, 母婴家居, 母婴奶粉, 母婴辅零食, 婴童服饰鞋靴, 玩具相关, 母婴纸品, 孕产妇相关, 母婴营养品, 婴童面部护肤, 母婴小家电
         * - 所属行业#家用电器: 大家电, 厨卫电器, 生活电器, 家电套系
         * - 所属行业#3C数码: 手机, 数码设备, 电脑, 办公设备, 操作系统
         * - 所属行业#食品饮料: 休闲零食, 方便速食, 粮油调味, 预制菜, 饮料冲调, 乳制品, 水果/水产, 肉禽蛋品, 功能性食品, 酒类（新）
         * - 所属行业#美妆个护: 彩妆, 美容护肤, 香水香薰, 身体洗护, 口腔护理, 头发护理, 美容仪器
         * - 所属行业#汽车出行: 乘用车, 摩托车, 电动自行车, 自行车, 卡车, 汽车用品, 维修保养, 汽车服务
         * - 所属行业#本地生活: 奶茶果汁(新), 咖啡(新), 甜品烘焙(新), 熟食卤味(新), 特色小吃/特产(新), 酒吧(新), 西式快餐(新), 中式快餐(新), 中式正餐(新), 西式正餐(新), 线下零售
         * - 所属行业#日化家清: 家务工具, 家用清洁, 纸品, 护理用品
         * - 所属行业#医疗健康: OTC, 保健食品, 保健用品, 非OTC药品, 健康机械, 视力保健, 家用医疗器械, 成人计生（械）
         * - 所属行业#宠物（新）: 宠物服务, 宠物食品, 宠物用品, 养宠经验, 宠物药保
         * - 所属行业#家居家装: 灯饰光源, 家居百货, 家居建材零售, 家具, 家装辅材, 家装主材, 五金电具, 装修设计与工程服务, 智能家居, 家居卖场, 家居展会, 家纺, 餐厨杯
         * - 所属行业#出行旅游: 交通出行, 酒店住宿, 国内游(新), 出境游(新), 景点景区(新), 旅游攻略(新), 旅游主题(新)
         * - 所属行业#教育培训: K12教育, 素质教育, 图书, 成人兴趣培训, 学历教育, 语言及留学, 早教, 职业教育
         * - 所属行业#金融行业: 保险, 贷款, 银行, 证券
         * - 所属行业#医疗医美: 口腔医疗, 眼科医疗, 皮肤美容, 植发养发, 体检机构(新), 月子妇产(新), 面部塑形, 医美身体塑形, 中医医疗
         * - 所属行业#免税平台: 美妆个护, 奢侈品
         * - 所属行业#服饰鞋包: 女装, 男装, 女鞋, 男鞋, 女士内衣, 男士内衣, 服饰配件, 童装/亲子装, 箱包, 旅行箱, 童鞋/亲子鞋
         * - 所属行业#珠宝配饰: 腕表, 首饰, 眼镜, 配饰, 珠宝摆件, 金条、金币
         * - 所属行业#运动户外: 运动鞋, 户外鞋, 运动服装, 户外服装, 运动户外装备, 运动服配, 健身器械, 运动现场
         * - 所属行业#文玩娱乐: 玩具, 游戏, 文玩收藏, 文体, 文具
         * - 所属行业#到店综合: 商务服务, 生活服务
         * - 所属行业#奢侈品: 箱包, 服饰, 鞋履, 珠宝配饰, 腕表, 运动户外, 品质生活, 婴童, 内衣, 高端酒店, 书写工具
         * - 所属行业#互联网: 平台电商, 网服, 游戏, 内容消费, 生活服务, 软件工具, 会员服务
         * - 所属行业#影像婚美: 婚纱摄影, 写真摄影, 婚礼服务, 婚恋交友
         * - 所属行业#房地产: 房产中介, 房产开发, 商业地产
         *
         * Examples:
         * - 内容类目#美妆
         * - 内容类目#美妆#整体妆容
         * - 所属行业#母婴#母婴出行
         *
         */
        noteContentCategory?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Returns Xiaohongshu (RedNote) search keyword suggestions for a submitted seed term. Use it to expand query sets, refine content-research searches, and plan SEO or programmatic SEO keyword coverage. */
    "justoneapi.xiaohongshu_rednote_keyword_suggestions": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves comments for a Xiaohongshu (RedNote) note with cursor pagination and normal, latest, or like-count sorting. Use it to support feedback review, discussion analysis, and comment moderation workflows. */
    "justoneapi.xiaohongshu_rednote_note_comments": {
      input: {
        /**
         * A Xiaohongshu note ID or an explore URL containing /explore/.
         * @minLength 1
         */
        noteId: string;
        /** Pagination cursor from the previous page (use the cursor value returned by the last response). */
        lastCursor?: string;
        /**
         * Sort strategy for the result set.
         *
         * Available Values:
         * - `normal`: Normal
         * - `latest`: Latest
         * - `like_count`: Like Count
         * @default "latest"
         */
        sort?: "normal" | "latest" | "like_count";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Xiaohongshu (RedNote) video-note details by note ID. Use it to look up and process a known video note. */
    "justoneapi.xiaohongshu_rednote_note_details": {
      input: {
        /**
         * Unique note identifier on Xiaohongshu.
         * @minLength 1
         */
        noteId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Xiaohongshu (RedNote) notes through the mobile-app search flow with pagination, sorting, note-type, and time filters. Use it to support iterative topic research and filtered content discovery. */
    "justoneapi.xiaohongshu_rednote_note_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
        /**
         * Sort order for the result set.
         *
         * Available Values:
         * - `general`: General
         * - `popularity_descending`: Popularity Descending
         * - `time_descending`: Time Descending
         * - `comment_descending`: Comment Descending
         * - `collect_descending`: Collect Descending
         * @default "general"
         */
        sortType?: "general" | "popularity_descending" | "time_descending" | "comment_descending" | "collect_descending";
        /**
         * Note type filter.
         *
         * Available Values:
         * - `ALL`: No Limit
         * - `VIDEO_NOTE`: Video Note
         * - `NORMAL_NOTE`: Normal Note
         * @default "ALL"
         */
        noteType?: "ALL" | "VIDEO_NOTE" | "NORMAL_NOTE";
        /**
         * Publish time filter.
         *
         * Available Values:
         * - `ALL`: No Limit
         * - `ONE_DAY`: Within one day
         * - `ONE_WEEK`: Within one week
         * - `HALF_YEAR`: Within half a year
         * @default "ALL"
         */
        timeFilter?: "ALL" | "ONE_DAY" | "ONE_WEEK" | "HALF_YEAR";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a supported Xiaohongshu (RedNote) short share link and return its public redirect URL. Use it to expand shared links before subsequent Xiaohongshu content lookup or processing. */
    "justoneapi.xiaohongshu_rednote_share_link_resolution": {
      input: {
        /**
         * A Xiaohongshu (RedNote) short share URL beginning with http://xhslink.com/ or https://xhslink.com/.
         * @minLength 1
         */
        shareUrl: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves Xiaohongshu (RedNote) notes associated with a topic ID, with hot or latest sorting and cursor pagination. Use it to support topic content discovery, trend review, and continuing through topic result pages. */
    "justoneapi.xiaohongshu_rednote_topic_note_list": {
      input: {
        /**
         * Unique topic identifier on Xiaohongshu.
         * @minLength 1
         */
        topicId: string;
        /**
         * Sort order for the result set.
         *
         * Available Values:
         * - `time`: Latest
         * - `hot`: Hot
         * @default "hot"
         */
        sort?: "time" | "hot";
        /** Pagination cursor from the previous page. */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Xiaohongshu (RedNote) user profile from a user ID or supported profile URL. Use it to support creator discovery, account research, and reviewing a known profile before related content analysis. */
    "justoneapi.xiaohongshu_rednote_user_profile": {
      input: {
        /**
         * A Xiaohongshu user ID or a profile URL containing /user/profile/.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Reads a user's published public Xiaohongshu (RedNote) notes by user ID or supported profile URL, with lastCursor pagination. This endpoint does not create, upload or publish notes. */
    "justoneapi.xiaohongshu_rednote_user_published_notes": {
      input: {
        /**
         * A Xiaohongshu user ID or a profile URL containing /user/profile/.
         * @minLength 1
         */
        userId: string;
        /** Omit on the first request. For the next page, pass the last note's cursor value from the previous response. */
        lastCursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Xiaohongshu (RedNote) users by keyword with page-based pagination. Use it to support creator discovery, account research, and finding profiles related to a topic, name, or brand term. */
    "justoneapi.xiaohongshu_rednote_user_search": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number for pagination.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves a Youku user profile identified by UID. Use it to look up a known account for creator research, profile review, or related video discovery. */
    "justoneapi.youku_user_profile": {
      input: {
        /**
         * The unique identifier for the user.
         * @minLength 1
         */
        uid: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieves details for a Youku video identified by video ID. Use it to look up a known video for content review, cataloging, or subsequent video analysis. */
    "justoneapi.youku_video_details": {
      input: {
        /**
         * The unique identifier for the video.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Searches Youku videos by keyword with page-based pagination. Use it to discover videos related to a topic, title, creator, or other search term. */
    "justoneapi.youku_video_search": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number for pagination, starting from 1.
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public Shorts from a YouTube channel ID with optional continuation-token pagination. Use it to browse a channel's short-form videos and continue through additional result pages. */
    "justoneapi.youtube_channel_shorts": {
      input: {
        /**
         * The UC-prefixed unique identifier for a YouTube channel. @username handles are not supported.
         * @minLength 1
         */
        channelId: string;
        /**
         * Pagination token returned by the previous response.
         * @default ""
         */
        continuationToken?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public videos from a YouTube channel, with optional cursor-based pagination. Use it to browse a channel's uploads and continue through additional result pages. */
    "justoneapi.youtube_channel_videos": {
      input: {
        /**
         * The unique identifier for a YouTube channel.
         * @minLength 1
         */
        channelId: string;
        /** The cursor for pagination. */
        cursor?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search YouTube videos by keyword with optional language, upload-date, duration, and sort filters, or continue with a pagination token. Use it to discover public videos or browse additional result pages. */
    "justoneapi.youtube_general_search": {
      input: {
        /** @minLength 1 */
        keyword: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        nextToken: string;
        [key: string]: unknown;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve available caption tracks for a YouTube video or request captions in SRT, XML, JSON3, or plain-text format. Use it to support transcription, accessibility, localization, or text analysis. */
    "justoneapi.youtube_video_captions": {
      input: {
        /**
         * The unique identifier for a YouTube video.
         * @minLength 1
         */
        videoId: string;
        /**
         * Caption language code, such as en, zh-Hans, or a.en. Leave it empty to retrieve available caption tracks.
         * @default ""
         */
        languageCode?: string;
        /**
         * Caption output format.
         *
         * Available Values:
         * - `srt`: SubRip caption format with timeline cues
         * - `xml`: Original XML caption format
         * - `json3`: YouTube original JSON caption structure
         * - `txt`: Plain text without timeline cues
         * @default "srt"
         */
        format?: "srt" | "xml" | "json3" | "txt";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve first-level comments for a YouTube video with sorting, locale options, and cursor pagination. Use it to review audience discussion or continue through additional comment pages. */
    "justoneapi.youtube_video_comment_list": {
      input: {
        /**
         * The unique identifier for a YouTube video.
         * @minLength 1
         */
        videoId: string;
        /**
         * Pagination cursor returned by the previous response.
         * @default ""
         */
        cursor?: string;
        /**
         * Language preference for response data.
         * @default "zh-CN"
         */
        languageCode?: string;
        /**
         * Region code for response data.
         * @default "US"
         */
        countryCode?: string;
        /**
         * Sort order for the comment list.
         *
         * Available Values:
         * - `top`: Top comments
         * - `newest`: Newest comments
         * @default "newest"
         */
        sortBy?: "top" | "newest";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public details for a YouTube video identified by video ID. Use it to inspect a known video before further content or comment analysis. */
    "justoneapi.youtube_video_details": {
      input: {
        /**
         * The unique identifier for a YouTube video.
         * @minLength 1
         */
        videoId: string;
        /** Optional IETF language tag for localized video details, such as en-US. Leave empty to use the default language. */
        lang?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve replies associated with a YouTube comment continuation cursor, with optional locale settings. Use it to follow threaded discussion beyond first-level comments. */
    "justoneapi.youtube_video_sub_comment_list": {
      input: {
        /**
         * Reply cursor from a first-level comment response.
         * @minLength 1
         */
        cursor: string;
        /**
         * Language preference for response data.
         * @default "zh-CN"
         */
        languageCode?: string;
        /**
         * Region code for response data.
         * @default "US"
         */
        countryCode?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve comments for a Zhihu answer with hottest or latest sorting and offset pagination. Use it to review discussion around a known answer and continue through additional comment pages. */
    "justoneapi.zhihu_answer_comments": {
      input: {
        /**
         * Answer ID
         * @minLength 1
         */
        answerId: string;
        /**
         * Sorting order for comments.
         *
         * Available Values:
         * - `score`: Sort by highest score.
         * - `ts`: Sort by latest time.
         * @default "score"
         */
        orderBy?: "score" | "ts";
        /**
         * Pagination offset from the previous result.
         * @default ""
         */
        offset?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve answers for a Zhihu question with sorting and pagination controls. Use it to browse responses to a known question and continue through additional answer pages. */
    "justoneapi.zhihu_answer_list": {
      input: {
        /**
         * Question ID
         * @minLength 1
         */
        questionId: string;
        /**
         * Pagination cursor from previous result.
         * @default ""
         */
        cursor?: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
        /**
         * Sorting criteria for answers.
         *
         * Available Values:
         * - `_default`: Default sorting.
         * - `_updated`: Sorted by updated time.
         * @default "_updated"
         */
        order?: "_default" | "_updated";
        /**
         * Session ID from previous result.
         * @default ""
         */
        sessionId?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve details for a Zhihu column article identified by article ID. Use it to inspect a known article for reading, review, or archiving. */
    "justoneapi.zhihu_column_article_details": {
      input: {
        /**
         * Article ID
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve articles from a Zhihu column with offset pagination. Use it to browse a known column's publication history and select articles for detail lookup. */
    "justoneapi.zhihu_column_article_list": {
      input: {
        /**
         * Column ID
         * @minLength 1
         */
        columnId: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve replies to a Zhihu comment with hottest or latest sorting and offset pagination. Use it to follow discussion under a known comment and continue through additional reply pages. */
    "justoneapi.zhihu_comment_replies": {
      input: {
        /**
         * Comment ID
         * @minLength 1
         */
        commentId: string;
        /**
         * Sorting order for replies.
         *
         * Available Values:
         * - `score`: Sort by highest score.
         * - `ts`: Sort by latest time.
         * @default "score"
         */
        orderBy?: "score" | "ts";
        /**
         * Pagination offset from the previous result.
         * @default ""
         */
        offset?: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Search Zhihu by keyword with optional result-type, sort, time-interval, topic-display, and offset controls. Use it to find relevant answers, articles, or videos. */
    "justoneapi.zhihu_keyword_search": {
      input: {
        /**
         * Search keywords.
         * @minLength 1
         */
        keyword: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
        /**
         * Whether to show all topics.
         *
         * Available Values:
         * - `FALSE`: Do not show topics.
         * - `TRUE`: Show all topics.
         * @default "FALSE"
         */
        showAllTopics?: "FALSE" | "TRUE";
        /**
         * Result type filter.
         *
         * Available Values:
         * - `answer`: Answers only.
         * - `article`: Articles only.
         * - `zvideo`: Videos only.
         */
        vertical?: "answer" | "article" | "zvideo";
        /**
         * Sorting criteria.
         *
         * Available Values:
         * - `upvoted_count`: Most upvoted.
         * - `created_time`: Latest published.
         */
        sort?: "upvoted_count" | "created_time";
        /**
         * Publish time interval filter.
         *
         * Available Values:
         * - `a_day`: Within one day.
         * - `a_week`: Within one week.
         * - `a_month`: Within one month.
         * - `three_months`: Within three months.
         * - `half_a_year`: Within half a year.
         * - `a_year`: Within one year.
         */
        timeInterval?: "a_day" | "a_week" | "a_month" | "three_months" | "half_a_year" | "a_year";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve articles published by a Zhihu user with offset pagination and publish-time or upvote sorting. Use it to browse a creator's articles in the selected order. */
    "justoneapi.zhihu_user_articles": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
        /**
         * Sorting criteria for user articles.
         *
         * Available Values:
         * - `created`: Sort by publish time.
         * - `voteups`: Sort by upvote count.
         * @default "created"
         */
        sortType?: "created" | "voteups";
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Zhihu collections followed by a user, with offset pagination. Use it to browse the collections associated with a known account's follow activity. */
    "justoneapi.zhihu_user_follow_collections": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Zhihu columns followed by a user, with offset pagination. Use it to browse the columns associated with a known account's follow activity. */
    "justoneapi.zhihu_user_follow_columns": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Zhihu topics followed by a user, with offset pagination. Use it to browse the topics associated with a known account's follow activity. */
    "justoneapi.zhihu_user_follow_topics": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve accounts followed by a Zhihu user, with offset pagination. Use it to explore the outgoing connections of a known account. */
    "justoneapi.zhihu_user_followees": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve accounts that follow a Zhihu user, with offset pagination. Use it to explore the audience connections of a known account. */
    "justoneapi.zhihu_user_followers": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the included-article records exposed for a Zhihu user, with offset pagination. Use it to browse that account's included-article list. */
    "justoneapi.zhihu_user_included_articles": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
        /**
         * Start offset, begins with 0.
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the public profile for a Zhihu user identified by URL token. Use it to inspect an account found through Zhihu content or relationship data. */
    "justoneapi.zhihu_user_info": {
      input: {
        /**
         * Zhihu user URL token, such as the value in `zhihu.com/people/{userUrlToken}`.
         * @minLength 1
         */
        userUrlToken: string;
      };
      output: {
        /** Business status code; zero indicates success. */
        code: number;
        /** The upstream response message. */
        message?: string | null;
        /** Upstream business data, preserving platform fields, cursors, and media URLs. */
        data: unknown;
        /** The upstream record time when provided. */
        recordTime?: string | null;
        /** The upstream request identifier when provided. */
        requestId?: string;
        /** The upstream reason when provided. */
        reason?: string;
        [key: string]: unknown;
      };
    };
  }
}
