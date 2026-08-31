import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get EchoTik's T+1 market-size, sales, GMV, product, creator, price, and live-commerce overview for one first-level category. */
    "echotik.get_category_overview": {
      input: {
        /**
         * EchoTik first-level product category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryId: string;
        /**
         * Two-letter TikTok Shop region code, such as US or ID.
         * @minLength 2
         * @maxLength 2
         */
        region: string;
      };
      output: {
        /** Category overview records returned by EchoTik. */
        items: Array<{
          /**
           * EchoTik first-level product category ID.
           * @minLength 1
           */
          categoryId: string;
          /** TikTok Shop region code associated with the category overview. */
          region?: string;
          /** EchoTik category trend classification. */
          trend?: string;
          /** EchoTik category price trend classification. */
          priceTrend?: string;
          /** Cumulative category GMV estimated by EchoTik. */
          totalGmv?: number;
          /** Category GMV during the latest one-day window. */
          gmv1Day?: number;
          /** Category GMV during the latest seven-day window. */
          gmv7Days?: number;
          /** Category GMV during the latest 30-day window. */
          gmv30Days?: number;
          /** Cumulative category product sales estimated by EchoTik. */
          totalSales?: number;
          /** Category product sales during the latest one-day window. */
          sales1Day?: number;
          /** Category product sales during the latest seven-day window. */
          sales7Days?: number;
          /** Category product sales during the latest 30-day window. */
          sales30Days?: number;
          /** Total products collected for the category. */
          totalProducts?: number;
          /** Products added during the latest one-day window. */
          products1Day?: number;
          /** Products added during the latest seven-day window. */
          products7Days?: number;
          /** Products added during the latest 30-day window. */
          products30Days?: number;
          /** Total creators associated with the category. */
          totalInfluencers?: number;
          /** Creators added during the latest one-day window. */
          influencers1Day?: number;
          /** Creators added during the latest seven-day window. */
          influencers7Days?: number;
          /** Creators added during the latest 30-day window. */
          influencers30Days?: number;
          /** Current average product price in the category. */
          averagePrice?: number;
          /** Cumulative live-commerce sales for the category. */
          liveSales?: number;
        }>;
        /** EchoTik documents category overviews as T+1 data. */
        freshness: "t_plus_1";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get EchoTik offline daily sales and GMV trend snapshots for a region and optional first-, second-, or third-level category filters. */
    "echotik.get_category_trend": {
      input: {
        /**
         * Two-letter TikTok Shop region code, such as US or ID.
         * @minLength 2
         * @maxLength 2
         */
        region: string;
        /**
         * EchoTik first-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryId?: string;
        /**
         * EchoTik second-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryLevel2Id?: string;
        /**
         * EchoTik third-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryLevel3Id?: string;
        /**
         * Inclusive category trend start date.
         * @format date
         */
        startDate: string;
        /**
         * Inclusive category trend end date.
         * @format date
         */
        endDate: string;
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Category trend snapshots returned by EchoTik. */
        items: Array<{
          /**
           * Category trend snapshot date.
           * @minLength 1
           */
          date: string;
          /** TikTok Shop region code associated with the snapshot. */
          region?: string;
          /** EchoTik first-level category ID. */
          categoryId?: string;
          /** EchoTik second-level category ID. */
          categoryLevel2Id?: string;
          /** EchoTik third-level category ID. */
          categoryLevel3Id?: string;
          /** Category sales during the snapshot day. */
          dailySales?: number;
          /** Category GMV during the snapshot day. */
          dailyGmv?: number;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get EchoTik's offline creator profiles for up to 10 TikTok user IDs or handles in one request. */
    "echotik.get_influencer_details": {
      input: {
        /**
         * TikTok creator user IDs, with at most 10 IDs across the request.
         * @minItems 1
         * @maxItems 10
         */
        userIds?: Array<string>;
        /**
         * TikTok creator handles, with at most 10 handles across the request.
         * @minItems 1
         * @maxItems 10
         */
        uniqueIds?: Array<string>;
      };
      output: {
        /** Creators returned by EchoTik. */
        items: Array<{
          /**
           * TikTok creator user ID.
           * @minLength 1
           */
          userId: string;
          /** TikTok creator handle. */
          uniqueId?: string;
          /** TikTok creator nickname. */
          nickname?: string;
          /** TikTok creator profile signature. */
          signature?: string;
          /** TikTok creator region code. */
          region?: string;
          /** Primary creator language recorded by EchoTik. */
          language?: string;
          /** Gender classification estimated by EchoTik. */
          gender?: string;
          /** Creator category recorded by EchoTik. */
          category?: string;
          /** EchoTik creator avatar URL. */
          avatarUrl?: string;
          /** Creator contact email returned by EchoTik. */
          contactEmail?: string;
          /** EchoTik creator commerce score. */
          commerceScore?: number;
          /** Creator interaction rate reported by EchoTik. */
          interactionRate?: number;
          /** Current creator follower count. */
          followerCount?: number;
          /** Follower growth during the latest seven-day window. */
          followerGrowth7Days?: number;
          /** Follower growth during the latest 30-day window. */
          followerGrowth30Days?: number;
          /** Number of accounts followed by the creator. */
          followingCount?: number;
          /** Total creator likes. */
          likeCount?: number;
          /** Total videos published by the creator. */
          videoCount?: number;
          /** Total live sessions associated with the creator. */
          liveCount?: number;
          /** Total commerce products associated with the creator. */
          productCount?: number;
          /** Cumulative creator-attributed product sales estimated by EchoTik. */
          totalSales?: number;
          /** Cumulative creator-attributed GMV estimated by EchoTik. */
          totalGmv?: number;
          /** Creator-attributed GMV during the latest 30-day window. */
          gmv30Days?: number;
          /** Average creator-promoted product price over 30 days. */
          averageProductPrice30Days?: number;
          /** Whether the creator has a TikTok Shop showcase. */
          showcaseEnabled?: boolean;
        }>;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get EchoTik's offline audience and commerce profiles for up to 10 TikTok live rooms in one request. */
    "echotik.get_live_details": {
      input: {
        /**
         * TikTok live room IDs, conservatively limited to 10 IDs per connector request.
         * @minItems 1
         * @maxItems 10
         */
        roomIds: Array<string>;
      };
      output: {
        /** Live sessions returned by EchoTik. */
        items: Array<{
          /**
           * TikTok live room ID.
           * @minLength 1
           */
          roomId: string;
          /** TikTok creator user ID associated with the live session. */
          userId?: string;
          /** TikTok creator handle associated with the live session. */
          uniqueId?: string;
          /** TikTok creator nickname associated with the live session. */
          nickname?: string;
          /** Live session title. */
          title?: string;
          /** Live session region code. */
          region?: string;
          /** Normalized live session status. */
          status?: "live" | "ended" | "unknown";
          /** Normalized live session owner type. */
          liveType?: "shop" | "creator" | "unknown";
          /** Live session creation time returned by EchoTik. */
          startedAt?: number;
          /** Live session finish time returned by EchoTik. */
          finishedAt?: number;
          /** Live session duration in seconds. */
          durationSeconds?: number;
          /** EchoTik live cover URL. */
          coverUrl?: string;
          /** EchoTik creator avatar URL. */
          avatarUrl?: string;
          /** Peak concurrent live viewers. */
          peakViewCount?: number;
          /** Total live viewers. */
          totalViewCount?: number;
          /** Creator follower growth rate during the live session. */
          followerGrowthRate?: number;
          /** Creator followers added during the live session. */
          followerGrowthCount?: number;
          /** Number of products promoted during the live session. */
          productCount?: number;
          /** Number of promoted products with sales activity. */
          activeProductCount?: number;
          /** Product sales attributed to the live session by EchoTik. */
          productSales?: number;
          /** Product GMV attributed to the live session by EchoTik. */
          productGmv?: number;
          /** Average promoted product price. */
          averageProductPrice?: number;
          /** Provider-defined top-product summary returned by EchoTik. */
          topProducts?: string;
        }>;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get EchoTik's detailed offline commerce profile for up to 10 TikTok Shop products in one request. */
    "echotik.get_product_details": {
      input: {
        /**
         * TikTok Shop product IDs, with at most 10 IDs per EchoTik request.
         * @minItems 1
         * @maxItems 10
         */
        productIds: Array<string>;
      };
      output: {
        /** Detailed products returned by EchoTik. */
        items: Array<{
          /**
           * TikTok Shop product ID.
           * @minLength 1
           */
          productId: string;
          /** Product name recorded by EchoTik. */
          productName?: string;
          /** TikTok Shop region code associated with the product. */
          region?: string;
          /** EchoTik first-level product category ID. */
          categoryId?: string;
          /** EchoTik second-level product category ID. */
          categoryLevel2Id?: string;
          /** EchoTik third-level product category ID. */
          categoryLevel3Id?: string;
          /** TikTok Shop seller ID associated with the product. */
          sellerId?: string;
          /** EchoTik product cover URL, which may require the cover resolver API. */
          coverUrl?: string;
          /** Product covers decoded from EchoTik's encoded collection. */
          coverUrls?: Array<{
            /**
             * EchoTik product cover URL.
             * @minLength 1
             */
            url: string;
            /** Provider-defined cover position. */
            index?: number;
          }>;
          /** Lowest SKU price reported by EchoTik. */
          minimumPrice?: number;
          /** Highest SKU price reported by EchoTik. */
          maximumPrice?: number;
          /** Average SKU price reported by EchoTik. */
          averagePrice?: number;
          /** Product commission rate reported by EchoTik. */
          commissionRate?: number;
          /** Product rating reported by EchoTik. */
          rating?: number;
          /** Number of product reviews reported by EchoTik. */
          reviewCount?: number;
          /** Total or ranking-period product sales reported by EchoTik. */
          totalSales?: number;
          /** Product sales during the latest 30-day window. */
          sales30Days?: number;
          /** Total or ranking-period product GMV estimated by EchoTik. */
          totalGmv?: number;
          /** Product GMV estimated for the latest 30-day window. */
          gmv30Days?: number;
          /** Number of creators associated with the product. */
          influencerCount?: number;
          /** Number of commerce videos associated with the product. */
          videoCount?: number;
          /** Number of live sessions associated with the product. */
          liveCount?: number;
        }>;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get up to 180 days of EchoTik offline price, sales, GMV, creator, video, and live snapshots for one product. */
    "echotik.get_product_trend": {
      input: {
        /**
         * TikTok Shop product ID.
         * @minLength 1
         * @maxLength 256
         */
        productId: string;
        /**
         * Inclusive trend start date.
         * @format date
         */
        startDate: string;
        /**
         * Inclusive trend end date.
         * @format date
         */
        endDate: string;
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Product trend snapshots returned by EchoTik. */
        items: Array<{
          /**
           * Snapshot date returned by EchoTik.
           * @minLength 1
           */
          date: string;
          /** TikTok Shop product ID associated with the snapshot. */
          productId?: string;
          /** Average SKU price at the snapshot. */
          averagePrice?: number;
          /** Product sales added during the snapshot day. */
          dailySales?: number;
          /** Cumulative product sales at the snapshot. */
          totalSales?: number;
          /** Product GMV added during the snapshot day. */
          dailyGmv?: number;
          /** Cumulative product GMV at the snapshot. */
          totalGmv?: number;
          /** Cumulative number of creators associated with the product. */
          influencerCount?: number;
          /** Cumulative number of videos associated with the product. */
          videoCount?: number;
          /** Cumulative number of live sessions associated with the product. */
          liveCount?: number;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get EchoTik's offline TikTok Shop profile for a seller discovered through product or proxy workflows. */
    "echotik.get_shop_details": {
      input: {
        /**
         * TikTok Shop seller ID.
         * @minLength 1
         * @maxLength 256
         */
        shopId: string;
      };
      output: {
        /** Shops returned by EchoTik. */
        items: Array<{
          /**
           * TikTok Shop seller ID.
           * @minLength 1
           */
          shopId: string;
          /** TikTok Shop seller name. */
          shopName?: string;
          /** TikTok Shop seller URL. */
          shopUrl?: string;
          /** TikTok Shop region code. */
          region?: string;
          /** Normalized TikTok Shop seller type. */
          storeType?: "local" | "cross_border" | "unknown";
          /** EchoTik shop cover URL. */
          coverUrl?: string;
          /** Shop rating reported by EchoTik. */
          rating?: number;
          /** Number of shop reviews reported by EchoTik. */
          reviewCount?: number;
          /** Positive shop feedback rate. */
          positiveFeedbackRate?: number;
          /** Shop response rate. */
          responseRate?: number;
          /** Shop follower count. */
          followerCount?: number;
          /** Number of products associated with the shop. */
          productCount?: number;
          /** Number of creators associated with the shop. */
          influencerCount?: number;
          /** Number of commerce videos associated with the shop. */
          videoCount?: number;
          /** Number of live sessions associated with the shop. */
          liveCount?: number;
          /** Cumulative shop sales estimated by EchoTik. */
          totalSales?: number;
          /** Shop sales during the latest 30-day window. */
          sales30Days?: number;
          /** Cumulative shop GMV estimated by EchoTik. */
          totalGmv?: number;
          /** Shop GMV during the latest 30-day window. */
          gmv30Days?: number;
          /** Average shop product price reported by EchoTik. */
          averagePrice?: number;
        }>;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Get EchoTik's offline engagement and commerce profiles for up to 10 TikTok videos in one request. */
    "echotik.get_video_details": {
      input: {
        /**
         * TikTok video IDs, with at most 10 IDs per EchoTik request.
         * @minItems 1
         * @maxItems 10
         */
        videoIds: Array<string>;
      };
      output: {
        /** Videos returned by EchoTik. */
        items: Array<{
          /**
           * TikTok video ID.
           * @minLength 1
           */
          videoId: string;
          /** TikTok creator user ID associated with the video. */
          userId?: string;
          /** TikTok creator handle associated with the video. */
          uniqueId?: string;
          /** TikTok video caption. */
          description?: string;
          /** Video region code. */
          region?: string;
          /** Video creation time returned by EchoTik. */
          createdAt?: string;
          /** Video duration in seconds. */
          durationSeconds?: number;
          /** EchoTik video cover URL. */
          coverUrl?: string;
          /** Whether EchoTik marks the video as AI-created. */
          createdByAi?: boolean;
          /** Whether EchoTik marks the video as an advertisement. */
          isAd?: boolean;
          /** Total video views. */
          viewCount?: number;
          /** Video views added during the latest seven-day window. */
          views7Days?: number;
          /** Video views added during the latest 30-day window. */
          views30Days?: number;
          /** Total video likes. */
          likeCount?: number;
          /** Video likes added during the latest seven-day window. */
          likes7Days?: number;
          /** Video likes added during the latest 30-day window. */
          likes30Days?: number;
          /** Total video comments. */
          commentCount?: number;
          /** Total video favorites. */
          favoriteCount?: number;
          /** Total video shares. */
          shareCount?: number;
          /** Product sales attributed to the video by EchoTik. */
          productSales?: number;
          /** Product GMV attributed to the video by EchoTik. */
          productGmv?: number;
        }>;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** List EchoTik's localized TikTok Shop category dictionary at the first, second, or third level. */
    "echotik.list_product_categories": {
      input: {
        /**
         * Category level to retrieve: 1, 2, or 3.
         * @minimum 1
         * @maximum 3
         */
        level: number;
        /** Language used for EchoTik product category names. */
        language: "th-TH" | "en-US" | "id-ID" | "zh-CN" | "ms-MY" | "vi-VN";
        /**
         * Optional parent category ID used to narrow second- or third-level categories.
         * @minLength 1
         * @maxLength 256
         */
        parentCategoryId?: string;
      };
      output: {
        /** Product categories returned by EchoTik. */
        items: Array<{
          /**
           * EchoTik product category ID.
           * @minLength 1
           */
          categoryId: string;
          /** EchoTik category level, usually 1, 2, or 3. */
          level?: string;
          /** Localized EchoTik category name. */
          name?: string;
          /** Language returned for the category name. */
          language?: string;
          /** Parent EchoTik category ID. */
          parentId?: string;
        }>;
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** List EchoTik's offline TikTok Shop product reviews with optional integer rating filters. */
    "echotik.list_product_comments": {
      input: {
        /**
         * TikTok Shop product ID.
         * @minLength 1
         * @maxLength 256
         */
        productId: string;
        /**
         * Minimum integer product rating from 0 to 5.
         * @minimum 0
         * @maximum 5
         */
        minimumRating?: number;
        /**
         * Maximum integer product rating from 0 to 5.
         * @minimum 0
         * @maximum 5
         */
        maximumRating?: number;
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Product reviews returned by EchoTik. */
        items: Array<{
          /**
           * TikTok Shop review ID.
           * @minLength 1
           */
          reviewId: string;
          /** TikTok Shop product ID associated with the review. */
          productId?: string;
          /** Integer product rating from 0 to 5. */
          rating?: number;
          /** Review text returned by EchoTik. */
          text?: string;
          /** Review time as an epoch timestamp in milliseconds. */
          reviewedAt?: number;
          /** TikTok Shop SKU ID associated with the review. */
          skuId?: string;
          /** Human-readable SKU specification associated with the review. */
          skuSpecification?: string;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** List creators associated with an EchoTik product, including estimated attributed sales and GMV. */
    "echotik.list_product_influencers": {
      input: {
        /**
         * TikTok Shop product ID.
         * @minLength 1
         * @maxLength 256
         */
        productId: string;
        /** Sort direction for the requested records. */
        sortOrder?: "asc" | "desc";
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
        /** Creator field used to order the result. */
        sortBy?: "followers" | "likes" | "product_sales" | "product_gmv" | "videos" | "video_views" | "live_views";
      };
      output: {
        /** Creators returned by EchoTik. */
        items: Array<{
          /**
           * TikTok creator user ID.
           * @minLength 1
           */
          userId: string;
          /** TikTok Shop product ID used for this relationship. */
          productId?: string;
          /** Creator nickname. */
          nickname?: string;
          /** Creator region code. */
          region?: string;
          /** Creator category recorded by EchoTik. */
          category?: string;
          /** EchoTik creator avatar URL. */
          avatarUrl?: string;
          /** Creator follower count. */
          followerCount?: number;
          /** Total creator likes. */
          likeCount?: number;
          /** Product sales attributed to this creator by EchoTik. */
          productSales?: number;
          /** Product GMV attributed to this creator by EchoTik. */
          productGmv?: number;
          /** Total videos published by the creator. */
          videoCount?: number;
          /** Total creator video views. */
          videoViewCount?: number;
          /** Total live sessions associated with the creator. */
          liveCount?: number;
          /** Total creator live views. */
          liveViewCount?: number;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** List offline live sessions associated with an EchoTik product, including audience and estimated sales performance. */
    "echotik.list_product_lives": {
      input: {
        /**
         * TikTok Shop product ID.
         * @minLength 1
         * @maxLength 256
         */
        productId: string;
        /**
         * Minimum live creation time as a Unix timestamp.
         * @minimum 0
         */
        createdFrom?: number;
        /**
         * Maximum live creation time as a Unix timestamp.
         * @minimum 0
         */
        createdTo?: number;
        /** Live field used to order the result. */
        sortBy?: "peak_views" | "product_count" | "sales" | "gmv" | "total_views";
        /** Sort direction for the requested records. */
        sortOrder?: "asc" | "desc";
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Live sessions returned by EchoTik. */
        items: Array<{
          /**
           * TikTok live room ID.
           * @minLength 1
           */
          roomId: string;
          /** TikTok Shop product ID associated with the live session. */
          productId?: string;
          /** Product name recorded for the live session. */
          productName?: string;
          /** TikTok creator user ID associated with the live session. */
          userId?: string;
          /** Live session region code. */
          region?: string;
          /** Live session creation time returned by EchoTik. */
          createdAt?: number;
          /** Normalized live session owner type. */
          liveType?: "shop" | "creator" | "unknown";
          /** Live session cover URL. */
          coverUrl?: string;
          /** TikTok Shop seller ID associated with the live session. */
          sellerId?: string;
          /** TikTok Shop seller name associated with the live session. */
          sellerName?: string;
          /** Peak concurrent live viewers. */
          peakViewCount?: number;
          /** Total live viewers. */
          totalViewCount?: number;
          /** Number of products promoted during the live session. */
          productCount?: number;
          /** Product sales attributed to the live session by EchoTik. */
          productSales?: number;
          /** Product GMV attributed to the live session by EchoTik. */
          productGmv?: number;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** List EchoTik daily, weekly, or monthly TikTok Shop product rankings by sales or creator promotion growth. */
    "echotik.list_product_rankings": {
      input: {
        /**
         * Ranking date; use Monday for weekly rankings and the first day for monthly rankings.
         * @format date
         */
        date: string;
        /**
         * Two-letter TikTok Shop region code, such as US or ID.
         * @minLength 2
         * @maxLength 2
         */
        region: string;
        /** Ranking metric. */
        metric: "sales" | "influencers";
        /** Ranking period. */
        period: "daily" | "weekly" | "monthly";
        /** TikTok Shop seller type. */
        storeType?: "local" | "cross_border";
        /**
         * EchoTik first-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryId?: string;
        /**
         * EchoTik second-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryLevel2Id?: string;
        /**
         * EchoTik third-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryLevel3Id?: string;
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Ranked products returned by EchoTik. */
        items: Array<{
          /**
           * TikTok Shop product ID.
           * @minLength 1
           */
          productId: string;
          /** Product name recorded by EchoTik. */
          productName?: string;
          /** TikTok Shop region code associated with the ranked product. */
          region?: string;
          /** EchoTik first-level product category ID. */
          categoryId?: string;
          /** EchoTik second-level product category ID. */
          categoryLevel2Id?: string;
          /** EchoTik third-level product category ID. */
          categoryLevel3Id?: string;
          /** Lowest SKU price reported by EchoTik. */
          minimumPrice?: number;
          /** Highest SKU price reported by EchoTik. */
          maximumPrice?: number;
          /** Average SKU price reported by EchoTik. */
          averagePrice?: number;
          /** Product commission rate reported by EchoTik. */
          commissionRate?: number;
          /** Product sales added during the requested ranking period. */
          periodSales?: number;
          /** Product GMV added during the requested ranking period. */
          periodGmv?: number;
          /** Number of creators associated with the ranked product. */
          influencerCount?: number;
          /** Number of commerce videos associated with the ranked product. */
          videoCount?: number;
          /** Number of live sessions associated with the ranked product. */
          liveCount?: number;
        }>;
        /**
         * Ranking date requested from EchoTik.
         * @format date
         */
        date: string;
        /**
         * Two-letter TikTok Shop region code, such as US or ID.
         * @minLength 2
         * @maxLength 2
         */
        region: string;
        /** Ranking metric used for the result. */
        metric: "sales" | "influencers";
        /** Ranking period used for the result. */
        period: "daily" | "weekly" | "monthly";
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The ranking comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** List offline commerce videos associated with an EchoTik product, including engagement and estimated sales performance. */
    "echotik.list_product_videos": {
      input: {
        /**
         * TikTok Shop product ID.
         * @minLength 1
         * @maxLength 256
         */
        productId: string;
        /**
         * TikTok creator user ID used to filter videos.
         * @minLength 1
         * @maxLength 256
         */
        userId?: string;
        /**
         * Minimum video creation time as a Unix timestamp.
         * @minimum 0
         */
        createdFrom?: number;
        /**
         * Maximum video creation time as a Unix timestamp.
         * @minimum 0
         */
        createdTo?: number;
        /** Video field used to order the result. */
        sortBy?: "views" | "likes" | "shares" | "sales" | "gmv" | "created_at";
        /** Sort direction for the requested records. */
        sortOrder?: "asc" | "desc";
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Commerce videos returned by EchoTik. */
        items: Array<{
          /**
           * TikTok video ID.
           * @minLength 1
           */
          videoId: string;
          /** TikTok Shop product ID associated with the video. */
          productId?: string;
          /** TikTok creator user ID associated with the video. */
          userId?: string;
          /** Video region code. */
          region?: string;
          /** Video caption recorded by EchoTik. */
          description?: string;
          /** Video creation time returned by EchoTik. */
          createdAt?: string;
          /** Video duration in seconds. */
          durationSeconds?: number;
          /** Video playback URL, which may expire. */
          playUrl?: string;
          /** Video cover URL. */
          coverUrl?: string;
          /** Total video views. */
          viewCount?: number;
          /** Total video likes. */
          likeCount?: number;
          /** Total video comments. */
          commentCount?: number;
          /** Total video shares. */
          shareCount?: number;
          /** Total video favorites. */
          favoriteCount?: number;
          /** Product sales attributed to the video by EchoTik. */
          productSales?: number;
          /** Product GMV attributed to the video by EchoTik. */
          productGmv?: number;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** The result comes from EchoTik's provider-collected offline dataset. */
        freshness: "offline";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Browse EchoTik's T+1 TikTok Shop product dataset with category, sales, GMV, price, commission, store, and ranking filters. */
    "echotik.list_products": {
      input: {
        /**
         * Two-letter TikTok Shop region code, such as US or ID.
         * @minLength 2
         * @maxLength 2
         */
        region: string;
        /**
         * EchoTik first-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryId?: string;
        /**
         * EchoTik second-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryLevel2Id?: string;
        /**
         * EchoTik third-level category ID.
         * @minLength 1
         * @maxLength 256
         */
        categoryLevel3Id?: string;
        /** Seven-day sales trend filter. */
        salesTrend?: "stable" | "rising" | "falling";
        /**
         * Minimum lifetime product sales.
         * @minimum 0
         */
        minimumTotalSales?: number;
        /**
         * Maximum lifetime product sales.
         * @minimum 0
         */
        maximumTotalSales?: number;
        /**
         * Minimum product sales in the latest 30 days.
         * @minimum 0
         */
        minimumSales30Days?: number;
        /**
         * Maximum product sales in the latest 30 days.
         * @minimum 0
         */
        maximumSales30Days?: number;
        /**
         * Minimum average SKU price.
         * @minimum 0
         */
        minimumPrice?: number;
        /**
         * Maximum average SKU price.
         * @minimum 0
         */
        maximumPrice?: number;
        /**
         * Minimum product commission rate.
         * @minimum 0
         */
        minimumCommissionRate?: number;
        /**
         * Maximum product commission rate.
         * @minimum 0
         */
        maximumCommissionRate?: number;
        /**
         * Minimum number of associated creators.
         * @minimum 0
         */
        minimumInfluencerCount?: number;
        /**
         * Maximum number of associated creators.
         * @minimum 0
         */
        maximumInfluencerCount?: number;
        /**
         * Minimum number of associated commerce videos.
         * @minimum 0
         */
        minimumVideoCount?: number;
        /**
         * Maximum number of associated commerce videos.
         * @minimum 0
         */
        maximumVideoCount?: number;
        /**
         * Minimum product rating.
         * @minimum 0
         */
        minimumRating?: number;
        /**
         * Maximum product rating.
         * @minimum 0
         */
        maximumRating?: number;
        /**
         * Minimum lifetime product GMV.
         * @minimum 0
         */
        minimumTotalGmv?: number;
        /**
         * Maximum lifetime product GMV.
         * @minimum 0
         */
        maximumTotalGmv?: number;
        /**
         * Minimum product GMV in the latest 30 days.
         * @minimum 0
         */
        minimumGmv30Days?: number;
        /**
         * Maximum product GMV in the latest 30 days.
         * @minimum 0
         */
        maximumGmv30Days?: number;
        /** Commerce channel associated with the product. */
        salesChannel?: "video" | "live";
        /** TikTok Shop seller type. */
        storeType?: "local" | "cross_border";
        /** Whether to include only fully managed shops. */
        managedShop?: boolean;
        /** Whether to filter by free shipping. */
        freeShipping?: boolean;
        /** Whether to include only products that EchoTik marks as listed. */
        listedOnly?: boolean;
        /** Whether to filter by EchoTik's hot-product flag. */
        hotProduct?: boolean;
        /** Whether to filter by EchoTik's branded-store flag. */
        brandedStore?: boolean;
        /** Product field used to order the result. */
        sortBy?: "total_sales" | "total_gmv" | "average_price" | "sales_7_days" | "sales_30_days" | "gmv_7_days" | "gmv_30_days";
        /** Sort direction for the requested records. */
        sortOrder?: "asc" | "desc";
        /**
         * One-based EchoTik result page.
         * @minimum 1
         * @maximum 100000
         * @default 1
         */
        page?: number;
        /**
         * Number of records to return, up to EchoTik's limit of 10.
         * @minimum 1
         * @maximum 10
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Products returned by EchoTik. */
        items: Array<{
          /**
           * TikTok Shop product ID.
           * @minLength 1
           */
          productId: string;
          /** Product name recorded by EchoTik. */
          productName?: string;
          /** TikTok Shop region code associated with the product. */
          region?: string;
          /** EchoTik first-level product category ID. */
          categoryId?: string;
          /** EchoTik second-level product category ID. */
          categoryLevel2Id?: string;
          /** EchoTik third-level product category ID. */
          categoryLevel3Id?: string;
          /** TikTok Shop seller ID associated with the product. */
          sellerId?: string;
          /** EchoTik product cover URL, which may require the cover resolver API. */
          coverUrl?: string;
          /** Product covers decoded from EchoTik's encoded collection. */
          coverUrls?: Array<{
            /**
             * EchoTik product cover URL.
             * @minLength 1
             */
            url: string;
            /** Provider-defined cover position. */
            index?: number;
          }>;
          /** Lowest SKU price reported by EchoTik. */
          minimumPrice?: number;
          /** Highest SKU price reported by EchoTik. */
          maximumPrice?: number;
          /** Average SKU price reported by EchoTik. */
          averagePrice?: number;
          /** Product commission rate reported by EchoTik. */
          commissionRate?: number;
          /** Product rating reported by EchoTik. */
          rating?: number;
          /** Number of product reviews reported by EchoTik. */
          reviewCount?: number;
          /** Total or ranking-period product sales reported by EchoTik. */
          totalSales?: number;
          /** Product sales during the latest 30-day window. */
          sales30Days?: number;
          /** Total or ranking-period product GMV estimated by EchoTik. */
          totalGmv?: number;
          /** Product GMV estimated for the latest 30-day window. */
          gmv30Days?: number;
          /** Number of creators associated with the product. */
          influencerCount?: number;
          /** Number of commerce videos associated with the product. */
          videoCount?: number;
          /** Number of live sessions associated with the product. */
          liveCount?: number;
        }>;
        /** EchoTik page returned by the connector. */
        page: number;
        /** EchoTik page size returned by the connector. */
        pageSize: number;
        /** EchoTik documents this provider-collected dataset as T+1. */
        freshness: "t_plus_1";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
    /** Resolve a TikTok product share URL to the stable product ID used by EchoTik product actions. */
    "echotik.resolve_product_id": {
      input: {
        /**
         * TikTok product share URL, including supported TikTok short-link hosts.
         * @maxLength 4096
         * @format uri
         */
        shareUrl: string;
      };
      output: {
        /**
         * TikTok Shop product ID resolved by EchoTik.
         * @minLength 1
         */
        productId: string;
        /** The product ID was resolved through an EchoTik realtime endpoint. */
        freshness: "realtime";
        /** EchoTik request identifier, when returned. */
        requestId: string | null;
      };
    };
  }
}
