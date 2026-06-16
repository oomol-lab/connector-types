import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether a TikTok Shop store is already using custom shop ads and can promote all products with GMV Max. */
    "tiktok_business.check_gmv_max_shop_ad_usage": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
      };
      output: {
        /** Whether the store is running custom shop ads. */
        runningCustomShopAds: boolean;
        /** Whether all-product promotion is allowed. */
        promoteAllProductsAllowed: boolean;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max budget and bid recommendations before campaign changes. */
    "tiktok_business.get_gmv_max_bid_recommendation": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
        /** GMV Max shopping ads type. */
        shoppingAdsType: "LIVE" | "PRODUCT";
        /** GMV Max optimization goal. */
        optimizationGoal: "VALUE";
        /**
         * Optional TikTok item group IDs used to narrow the recommendation.
         * @minItems 1
         * @maxItems 50
         */
        itemGroupIds?: Array<string>;
        /**
         * Optional identity ID used to narrow the recommendation.
         * @minLength 1
         */
        identityId?: string;
      };
      output: {
        /** Recommended or reference budget returned by TikTok. */
        budget: unknown;
        /** Recommended CPA bid returned by TikTok. */
        cpaBid: unknown;
        /** Recommended ROAS bid returned by TikTok. */
        roasBid: unknown;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get detailed information for a TikTok GMV Max campaign. */
    "tiktok_business.get_gmv_max_campaign_info": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok GMV Max campaign ID.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** The raw TikTok Business API payload for this resource. */
        campaign: Record<string, unknown>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max custom anchor videos for campaign creation discovery. */
    "tiktok_business.get_gmv_max_custom_anchor_video_list": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok GMV Max custom anchor video list ID.
         * @minLength 1
         */
        campaignCustomAnchorVideoId: string;
        /**
         * Custom anchor video filters forwarded to TikTok.
         * @minItems 1
         * @maxItems 100
         */
        customAnchorVideoList: Array<Record<string, unknown>>;
      };
      output: {
        /** Custom anchor videos returned by TikTok. */
        customAnchorVideos: Array<Record<string, unknown>>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max exclusive authorization status for a store. */
    "tiktok_business.get_gmv_max_exclusive_authorization": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
        /**
         * The Business Center ID authorized to manage the TikTok Shop store.
         * @minLength 1
         */
        storeAuthorizedBcId: string;
      };
      output: {
        /** TikTok advertiser ID. */
        advertiserId?: string;
        /** TikTok advertiser name. */
        advertiserName?: string;
        /** TikTok advertiser status. */
        advertiserStatus?: string;
        /** GMV Max authorization status. */
        authorizationStatus?: string;
        /** Identity ID holding the exclusive authorization. */
        identityId?: string;
        /** TikTok Shop store ID. */
        storeId?: string;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List TikTok identities available for a GMV Max store. */
    "tiktok_business.get_gmv_max_identities": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
        /**
         * The Business Center ID authorized to manage the TikTok Shop store.
         * @minLength 1
         */
        storeAuthorizedBcId: string;
      };
      output: {
        /** GMV Max identities returned by TikTok. */
        identities: Array<{
          /** TikTok identity ID. */
          identityId: string;
          /** TikTok identity type. */
          identityType?: string;
          /** Identity display name. */
          displayName?: string;
          /** Identity username. */
          userName?: string;
          /** Identity profile image URL. */
          profileImage?: string;
          /** TikTok Shop store ID associated with the identity. */
          storeId?: string;
          /** Business Center ID authorized for the identity. */
          identityAuthorizedBcId?: string;
          /** Shop authorization ID for the identity. */
          identityAuthorizedShopId?: string;
          /** Whether the identity is available for live GMV Max. */
          liveGmvMaxAvailable?: boolean;
          /** Whether the identity is available for product GMV Max. */
          productGmvMaxAvailable?: boolean;
          /** Whether the identity is already running custom shop ads. */
          runningCustomShopAds?: boolean;
          /** Reason why the identity is unavailable. */
          unavailableReason?: string;
          /** The raw TikTok Business API payload for this resource. */
          raw: Record<string, unknown>;
        }>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max reporting rows for a store and date range. */
    "tiktok_business.get_gmv_max_report": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store IDs to include. TikTok GMV Max supports one store ID per request.
         * @minItems 1
         * @maxItems 1
         */
        storeIds: Array<string>;
        /**
         * Report dimensions to group by, such as campaign_id.
         * @minItems 1
         * @maxItems 3
         */
        dimensions: Array<string>;
        /**
         * Report metrics to return, such as spend or gross_revenue.
         * @minItems 1
         * @maxItems 100
         */
        metrics: Array<string>;
        /**
         * Report start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * Report end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** Whether TikTok should include total metric rows. */
        enableTotalMetrics?: boolean;
        /** Optional filters for the GMV Max report query. */
        filtering?: {
          /**
           * Filter report rows to these GMV Max campaign IDs.
           * @minItems 1
           * @maxItems 100
           */
          campaignIds?: Array<string>;
          /**
           * Filter report rows by campaign name.
           * @minLength 1
           */
          campaignName?: string;
          /**
           * Filter report rows by TikTok campaign delivery status.
           * @minItems 1
           * @maxItems 4
           */
          campaignStatuses?: Array<"delete" | "delivery_ok" | "disable" | "not_delivery">;
          /**
           * Filter report rows by GMV Max promotion type.
           * @minItems 1
           * @maxItems 2
           */
          gmvMaxPromotionTypes?: Array<"PRODUCT" | "LIVE">;
          /**
           * Filter report rows to these item group IDs.
           * @minItems 1
           * @maxItems 100
           */
          itemGroupIds?: Array<string>;
          /**
           * Filter report rows to these TikTok item IDs.
           * @minItems 1
           * @maxItems 100
           */
          itemIds?: Array<string>;
          /**
           * Filter report rows by creative source type.
           * @minItems 1
           * @maxItems 1
           */
          creativeTypes?: Array<"ADS_AND_ORGANIC" | "ORGANIC" | "REMOVED">;
          /**
           * Filter report rows to these live room IDs.
           * @minItems 1
           * @maxItems 100
           */
          roomIds?: Array<string>;
          /**
           * Free-text search term for report filtering.
           * @minLength 1
           */
          searchWord?: string;
          /**
           * Filter report rows by creative delivery status code.
           * @minItems 1
           * @maxItems 10
           */
          creativeDeliveryStatuses?: Array<string>;
        };
        /**
         * Metric or dimension field used for sorting.
         * @minLength 1
         */
        sortField?: string;
        /** Report sort direction. */
        sortType?: "ASC" | "DESC";
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of rows to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** Optional request context forwarded to TikTok Business API. */
        contextInfo?: {
          /** TikTok app ID to include in context_info. */
          appId?: number;
          /** TikTok core user ID to include in context_info. */
          coreUserId?: number;
          /** TikTok developer ID to include in context_info. */
          developerId?: number;
          /** Original client IP address for x_forwarded_for. */
          xForwardedFor?: string;
          /** Original client IP address for x_real_ip. */
          xRealIp?: string;
          /** Original client user agent. */
          userAgent?: string;
          /** Original request referer. */
          referer?: string;
        };
      };
      output: {
        /** Report rows returned by TikTok. */
        rows: Array<Record<string, unknown>>;
        /** The raw TikTok Business API payload for this resource. */
        pageInfo: Record<string, unknown>;
        /** The raw TikTok Business API payload for this resource. */
        totalMetrics: Record<string, unknown>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max campaign session details by session ID. */
    "tiktok_business.get_gmv_max_sessions": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The GMV Max session IDs to retrieve. TikTok allows up to 20 IDs per request.
         * @minItems 1
         * @maxItems 20
         */
        sessionIds: Array<string>;
      };
      output: {
        /** GMV Max sessions returned by TikTok. */
        sessions: Array<{
          /** TikTok GMV Max session ID. */
          sessionId: string;
          /** TikTok GMV Max campaign ID. */
          campaignId?: string;
          /** TikTok GMV Max session bid type. */
          bidType?: string;
          /** TikTok GMV Max session budget. */
          budget?: unknown;
          /** TikTok GMV Max session schedule type. */
          scheduleType?: string;
          /** Session start time returned by TikTok. */
          scheduleStartTime?: unknown;
          /** Session end time returned by TikTok. */
          scheduleEndTime?: unknown;
          /** Products attached to this GMV Max session. */
          productList?: Array<Record<string, unknown>>;
          /** TikTok item ID attached to this session. */
          itemId?: string;
          /** The raw TikTok Business API payload for this resource. */
          raw: Record<string, unknown>;
        }>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max shop video anchors for campaign creation discovery. */
    "tiktok_business.get_gmv_max_shop_video_anchors": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
        /**
         * The Business Center ID authorized to manage the TikTok Shop store.
         * @minLength 1
         */
        storeAuthorizedBcId: string;
        /**
         * TikTok shop video IDs to inspect for GMV Max anchors.
         * @minItems 1
         * @maxItems 100
         */
        videoIds?: Array<string>;
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of rows to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** Shop video anchors returned by TikTok. */
        videoAnchors: Array<Record<string, unknown>>;
        /** The raw TikTok Business API payload for this resource. */
        pageInfo: Record<string, unknown>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikTok GMV Max videos available for a store, identity, or SPU filter. */
    "tiktok_business.get_gmv_max_videos": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
        /**
         * The Business Center ID authorized to manage the TikTok Shop store.
         * @minLength 1
         */
        storeAuthorizedBcId: string;
        /**
         * TikTok SPU IDs used to filter GMV Max videos.
         * @minItems 1
         * @maxItems 100
         */
        spuIdList?: Array<string>;
        /**
         * TikTok identity objects used to filter GMV Max videos.
         * @minItems 1
         * @maxItems 100
         */
        identityList?: Array<Record<string, unknown>>;
        /** Whether to include authorization-code videos. */
        needAuthCodeVideo?: boolean;
        /** Whether to return custom-post eligible videos. */
        customPostsEligible?: boolean;
        /**
         * TikTok video sort field.
         * @minLength 1
         */
        sortField?: string;
        /** TikTok video sort direction. */
        sortType?: "ASC" | "DESC";
        /**
         * Keyword used to search GMV Max videos.
         * @minLength 1
         */
        keyword?: string;
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of rows to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** GMV Max videos returned by TikTok. */
        videos: Array<Record<string, unknown>>;
        /** The raw TikTok Business API payload for this resource. */
        pageInfo: Record<string, unknown>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List TikTok advertisers authorized for the connected TikTok Business user. */
    "tiktok_business.list_advertisers": {
      input: Record<string, never>;
      output: {
        /** Advertisers authorized for the connected TikTok user. */
        advertisers: Array<Record<string, unknown>>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List TikTok campaigns for an advertiser so users can discover campaign IDs. */
    "tiktok_business.list_campaigns": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /** Optional filters for the TikTok campaign list query. */
        filtering?: {
          /**
           * Filter campaigns to these TikTok campaign IDs.
           * @minItems 1
           * @maxItems 100
           */
          campaignIds?: Array<string>;
          /**
           * Filter campaigns by campaign name.
           * @minLength 1
           */
          campaignName?: string;
          /**
           * Filter campaigns by TikTok primary status.
           * @minLength 1
           */
          primaryStatus?: string;
          /**
           * Filter campaigns by TikTok secondary status.
           * @minLength 1
           */
          secondaryStatus?: string;
          /**
           * Filter campaigns by objective type.
           * @minLength 1
           */
          objectiveType?: string;
          /**
           * Filter campaigns by campaign type.
           * @minLength 1
           */
          campaignType?: string;
          /**
           * Filter campaigns by buying type.
           * @minItems 1
           * @maxItems 100
           */
          buyingTypes?: Array<string>;
          /**
           * Filter campaigns by TikTok campaign system origin.
           * @minItems 1
           * @maxItems 100
           */
          campaignSystemOrigins?: Array<string>;
          /**
           * Filter campaigns by campaign product source.
           * @minLength 1
           */
          campaignProductSource?: string;
          /**
           * Filter campaigns by TikTok creative campaign type.
           * @minItems 1
           * @maxItems 100
           */
          creativeCampaignType?: Array<string>;
          /**
           * Filter campaigns by optimization goal.
           * @minLength 1
           */
          optimizationGoal?: string;
          /**
           * Filter campaigns by sales destination.
           * @minLength 1
           */
          salesDestination?: string;
          /**
           * Filter campaigns created at or after this time.
           * @minLength 1
           */
          creationFilterStartTime?: string;
          /**
           * Filter campaigns created at or before this time.
           * @minLength 1
           */
          creationFilterEndTime?: string;
          /** Whether to filter Smart Performance Campaigns. */
          isSmartPerformanceCampaign?: boolean;
          /** Whether to filter campaigns by split test participation. */
          splitTestEnabled?: boolean;
        };
        /**
         * TikTok campaign fields to return.
         * @minItems 1
         * @maxItems 100
         */
        fields?: Array<string>;
        /**
         * TikTok field types to exclude from the campaign response.
         * @minItems 1
         * @maxItems 20
         */
        excludeFieldTypesInResponse?: Array<string>;
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of rows to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** Campaigns returned by TikTok. */
        campaigns: Array<Record<string, unknown>>;
        /** The raw TikTok Business API payload for this resource. */
        pageInfo: Record<string, unknown>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List custom shop ads occupying TikTok assets before GMV Max setup. */
    "tiktok_business.list_gmv_max_occupied_custom_shop_ads": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok Shop store ID used by the GMV Max workflow.
         * @minLength 1
         */
        storeId: string;
        /**
         * TikTok asset IDs to inspect for custom shop ads occupation.
         * @minItems 1
         * @maxItems 1
         */
        assetIds: Array<string>;
        /**
         * TikTok occupied asset type, such as SPU.
         * @minLength 1
         */
        occupiedAssetType: string;
      };
      output: {
        /** Custom shop ads occupying the requested TikTok assets. */
        occupiedCustomShopAds: Array<Record<string, unknown>>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List TikTok GMV Max campaign sessions for a campaign. */
    "tiktok_business.list_gmv_max_sessions": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
        /**
         * The TikTok GMV Max campaign ID.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** GMV Max sessions returned by TikTok. */
        sessions: Array<{
          /** TikTok GMV Max session ID. */
          sessionId: string;
          /** TikTok GMV Max campaign ID. */
          campaignId?: string;
          /** TikTok GMV Max session bid type. */
          bidType?: string;
          /** TikTok GMV Max session budget. */
          budget?: unknown;
          /** TikTok GMV Max session schedule type. */
          scheduleType?: string;
          /** Session start time returned by TikTok. */
          scheduleStartTime?: unknown;
          /** Session end time returned by TikTok. */
          scheduleEndTime?: unknown;
          /** Products attached to this GMV Max session. */
          productList?: Array<Record<string, unknown>>;
          /** TikTok item ID attached to this session. */
          itemId?: string;
          /** The raw TikTok Business API payload for this resource. */
          raw: Record<string, unknown>;
        }>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List TikTok Shop stores available to a TikTok GMV Max advertiser. */
    "tiktok_business.list_gmv_max_stores": {
      input: {
        /**
         * The TikTok advertiser ID that owns the GMV Max resource.
         * @minLength 1
         */
        advertiserId: string;
      };
      output: {
        /** GMV Max stores returned by TikTok. */
        stores: Array<{
          /** TikTok Shop store ID. */
          storeId: string;
          /** TikTok Shop store name. */
          storeName: string;
          /** TikTok Shop store code. */
          storeCode?: string;
          /** TikTok Shop status. */
          storeStatus?: string;
          /** Role of the connected user for this store. */
          storeRole?: string;
          /** Business Center ID authorized for this store. */
          storeAuthorizedBcId?: string;
          /** Whether GMV Max is available for this store. */
          gmvMaxAvailable?: boolean;
          /** Whether the authorized Business Center owns the store. */
          ownerBusinessCenter?: boolean;
          /** Region codes where the store can target GMV Max campaigns. */
          targetingRegionCodes?: Array<string>;
          /** Store thumbnail image URL. */
          thumbnailUrl?: string;
          /** The raw TikTok Business API payload for this resource. */
          raw: Record<string, unknown>;
        }>;
        /** TikTok request ID for tracing this API call. */
        requestId: string;
        /** The raw TikTok Business API data object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
