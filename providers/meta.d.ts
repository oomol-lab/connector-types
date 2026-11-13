import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Start an asynchronous Meta Ads insights report. Use get_insights_report to poll and retrieve its first result page; report handles expire after 30 days. */
    "meta.create_insights_report": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        objectId: string;
        /** The Meta insights aggregation level. */
        level?: "account" | "campaign" | "adset" | "ad";
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /** The Meta insights date preset. */
        datePreset?: "today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "data_maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year";
        /** The custom Meta insights date range. */
        timeRange?: {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        };
        /**
         * A list of string values.
         * @minItems 1
         */
        breakdowns?: Array<string>;
        /** Meta insights filtering expressions forwarded to the Graph API. */
        filtering?: Array<Record<string, unknown>>;
        /**
         * A list of string values.
         * @minItems 1
         */
        sort?: Array<string>;
        /**
         * A list of string values.
         * @minItems 1
         */
        actionAttributionWindows?: Array<string>;
        /**
         * A list of string values.
         * @minItems 1
         */
        actionBreakdowns?: Array<string>;
        /** The report time interval: all_days, monthly, or a number of days from 1 to 90. */
        timeIncrement?: "all_days" | "monthly" | number;
        /**
         * Multiple report date ranges. Takes precedence over datePreset, timeRange, and timeIncrement.
         * @minItems 1
         */
        timeRanges?: Array<{
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        }>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /**
         * The asynchronous report run ID.
         * @minLength 1
         */
        reportRunId: string;
      };
    };
    /** Create a text, link, or attached-photo post on a managed Facebook Page, immediately, unpublished, or scheduled. Upload unpublished photos first to obtain attachment IDs. */
    "meta.create_page_post": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /** The post text; an empty string can clear text when updating. */
        message?: string;
        /**
         * The link to attach to a new post.
         * @format uri
         */
        link?: string;
        /** Whether to publish immediately. Defaults to false when scheduledPublishTime is supplied, otherwise true. */
        published?: boolean;
        /** The scheduled publication time as Unix seconds. Meta validates the permitted scheduling window. */
        scheduledPublishTime?: number;
        /** Previously uploaded photo attachments. */
        attachedMedia?: Array<{
          /**
           * The uploaded photo ID.
           * @minLength 1
           */
          mediaFbid: string;
        }>;
        /** Audience restrictions using Meta targeting fields. */
        targeting?: Record<string, unknown>;
        /** Feed targeting using Meta targeting fields. */
        feedTargeting?: Record<string, unknown>;
        /** Additional documented Graph API parameters using upstream names. Cannot override authentication, routing, or explicitly supplied fields. */
        additionalParameters?: Record<string, unknown>;
      };
      output: {
        /**
         * The Facebook Page post ID, normally pageId_postId.
         * @minLength 1
         */
        postId: string;
      };
    };
    /** Delete a post from a managed Facebook Page. */
    "meta.delete_page_post": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Facebook Page post ID, normally pageId_postId.
         * @minLength 1
         */
        postId: string;
      };
      output: {
        /** Whether Meta completed the operation. */
        success: boolean;
      };
    };
    /** Retrieve one Meta ad and its creative reference. */
    "meta.get_ad": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        adId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** An advertising object. */
        ad: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The object name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Meta ad account. */
    "meta.get_ad_account": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        adAccountId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** A normalized Meta ad account. */
        adAccount: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The numeric Meta ad account ID without the act_ prefix. */
          accountId: string | null;
          /** The ad account name. */
          name: string | null;
          /** The ad account currency code. */
          currency: string | null;
          /** The ad account timezone name. */
          timezoneName: string | null;
          /** The numeric Meta ad account status. */
          accountStatus: number | null;
          /** The business name attached to the ad account. */
          businessName: string | null;
          /** The raw Meta ad account object returned by the Graph API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Meta ad creative. */
    "meta.get_ad_creative": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        creativeId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** An advertising object. */
        creative: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The object name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Meta ad set including budget, targeting, and delivery settings. */
    "meta.get_ad_set": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        adSetId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** An advertising object. */
        adSet: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The object name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Meta advertising campaign. */
    "meta.get_campaign": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        campaignId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** A normalized Meta campaign. */
        campaign: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The campaign name. */
          name: string | null;
          /** The configured campaign status. */
          status: string | null;
          /** The effective campaign delivery status. */
          effectiveStatus: string | null;
          /** The campaign objective. */
          objective: string | null;
          /** The campaign buying type. */
          buyingType: string | null;
          /** The campaign creation timestamp returned by Meta. */
          createdTime: string | null;
          /** The campaign update timestamp returned by Meta. */
          updatedTime: string | null;
          /** The raw Meta campaign object returned by the Graph API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the current Meta Graph API user for the connected access token. */
    "meta.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A normalized Meta Graph API user or system user. */
        user: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The Meta profile name when returned. */
          name: string | null;
          /** The raw Meta user object returned by the Graph API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve Meta Ads insights for an ad account, campaign, ad set, or ad object. */
    "meta.get_insights": {
      input: {
        /**
         * A Meta Graph API object identifier.
         * @minLength 1
         */
        objectId: string;
        /** The Meta insights aggregation level. */
        level?: "account" | "campaign" | "adset" | "ad";
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /** The Meta insights date preset. */
        datePreset?: "today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "data_maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year";
        /** The custom Meta insights date range. */
        timeRange?: {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        };
        /**
         * A list of string values.
         * @minItems 1
         */
        breakdowns?: Array<string>;
        /** Meta insights filtering expressions forwarded to the Graph API. */
        filtering?: Array<Record<string, unknown>>;
        /**
         * A list of string values.
         * @minItems 1
         */
        sort?: Array<string>;
        /**
         * A list of string values.
         * @minItems 1
         */
        actionAttributionWindows?: Array<string>;
        /**
         * A list of string values.
         * @minItems 1
         */
        actionBreakdowns?: Array<string>;
        /** The report time interval: all_days, monthly, or a number of days from 1 to 90. */
        timeIncrement?: "all_days" | "monthly" | number;
        /**
         * Multiple report date ranges. Takes precedence over datePreset, timeRange, and timeIncrement.
         * @minItems 1
         */
        timeRanges?: Array<{
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        }>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The Meta insights rows returned by the Graph API. */
        insights: Array<{
          /** The campaign ID when returned for the selected level. */
          campaignId: string | null;
          /** The campaign name when returned for the selected level. */
          campaignName: string | null;
          /** The ad set ID when returned for the selected level. */
          adsetId: string | null;
          /** The ad set name when returned for the selected level. */
          adsetName: string | null;
          /** The ad ID when returned for the selected level. */
          adId: string | null;
          /** The ad name when returned for the selected level. */
          adName: string | null;
          /** The impressions metric as returned by Meta. */
          impressions: string | null;
          /** The clicks metric as returned by Meta. */
          clicks: string | null;
          /** The spend metric as returned by Meta. */
          spend: string | null;
          /** The report start date returned by Meta. */
          dateStart: string | null;
          /** The report stop date returned by Meta. */
          dateStop: string | null;
          /** The raw Meta insights row returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** Check an asynchronous Meta Ads report and fetch a result page once complete. Pass the returned after cursor to retrieve further pages. */
    "meta.get_insights_report": {
      input: {
        /**
         * The asynchronous report run ID.
         * @minLength 1
         */
        reportRunId: string;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /**
         * The asynchronous report run ID.
         * @minLength 1
         */
        reportRunId: string;
        /** The normalized report state. */
        status: "running" | "succeeded" | "failed";
        /** The completion percentage reported by Meta. */
        progress: number | null;
        /** The report rows, empty until complete. */
        insights: Array<{
          /** The campaign ID when returned for the selected level. */
          campaignId: string | null;
          /** The campaign name when returned for the selected level. */
          campaignName: string | null;
          /** The ad set ID when returned for the selected level. */
          adsetId: string | null;
          /** The ad set name when returned for the selected level. */
          adsetName: string | null;
          /** The ad ID when returned for the selected level. */
          adId: string | null;
          /** The ad name when returned for the selected level. */
          adName: string | null;
          /** The impressions metric as returned by Meta. */
          impressions: string | null;
          /** The clicks metric as returned by Meta. */
          clicks: string | null;
          /** The spend metric as returned by Meta. */
          spend: string | null;
          /** The report start date returned by Meta. */
          dateStart: string | null;
          /** The report stop date returned by Meta. */
          dateStop: string | null;
          /** The raw Meta insights row returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
        /** The upstream object with credential fields removed. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a managed Facebook Page using its Page access token. */
    "meta.get_page": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** A Facebook Page. */
        page: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The Page name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Facebook Page post using the owning Page access token. */
    "meta.get_page_post": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Facebook Page post ID, normally pageId_postId.
         * @minLength 1
         */
        postId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
      };
      output: {
        /** A Facebook Page post. */
        post: {
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The post text. */
          message: string | null;
          /** The permanent URL of the post. */
          permalinkUrl: string | null;
          /** The post creation time. */
          createdTime: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Meta ad accounts available to the connected access token. */
    "meta.list_ad_accounts": {
      input: {
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The Meta ad accounts returned by the Graph API. */
        adAccounts: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The numeric Meta ad account ID without the act_ prefix. */
          accountId: string | null;
          /** The ad account name. */
          name: string | null;
          /** The ad account currency code. */
          currency: string | null;
          /** The ad account timezone name. */
          timezoneName: string | null;
          /** The numeric Meta ad account status. */
          accountStatus: number | null;
          /** The business name attached to the ad account. */
          businessName: string | null;
          /** The raw Meta ad account object returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List Meta ad creatives under an ad account. */
    "meta.list_ad_creatives": {
      input: {
        /**
         * The Meta ad account ID, with or without the act_ prefix.
         * @minLength 1
         */
        adAccountId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The advertising objects. */
        creatives: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The object name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List Meta ad sets under an ad account. */
    "meta.list_ad_sets": {
      input: {
        /**
         * The Meta ad account ID, with or without the act_ prefix.
         * @minLength 1
         */
        adAccountId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
        /** Filter by effective delivery statuses supported by Meta. */
        effectiveStatus?: Array<string>;
        /** The Meta insights date preset. */
        datePreset?: "today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "data_maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year";
        /** The custom Meta insights date range. */
        timeRange?: {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        };
        /** Only objects updated since this Unix timestamp. */
        updatedSince?: number;
        /** Filter ad sets by completion status. */
        isCompleted?: boolean;
      };
      output: {
        /** The advertising objects. */
        adSets: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The object name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List Meta ads under an ad account. */
    "meta.list_ads": {
      input: {
        /**
         * The Meta ad account ID, with or without the act_ prefix.
         * @minLength 1
         */
        adAccountId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
        /** Filter by effective delivery statuses supported by Meta. */
        effectiveStatus?: Array<string>;
        /** The Meta insights date preset. */
        datePreset?: "today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "data_maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year";
        /** The custom Meta insights date range. */
        timeRange?: {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        };
        /** Only objects updated since this Unix timestamp. */
        updatedSince?: number;
      };
      output: {
        /** The advertising objects. */
        ads: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The object name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List campaigns under one Meta ad account with optional delivery status filters. */
    "meta.list_campaigns": {
      input: {
        /**
         * The Meta ad account ID, with or without the act_ prefix.
         * @minLength 1
         */
        adAccountId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
        /**
         * A list of Meta delivery statuses.
         * @minItems 1
         */
        effectiveStatus?: Array<"ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED" | "IN_PROCESS" | "WITH_ISSUES">;
        /** Filter campaigns by completion status. */
        isCompleted?: boolean;
        /** The Meta insights date preset. */
        datePreset?: "today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "data_maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year";
        /** The custom Meta insights date range. */
        timeRange?: {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          since: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          until: string;
        };
      };
      output: {
        /** The Meta campaigns returned by the Graph API. */
        campaigns: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The campaign name. */
          name: string | null;
          /** The configured campaign status. */
          status: string | null;
          /** The effective campaign delivery status. */
          effectiveStatus: string | null;
          /** The campaign objective. */
          objective: string | null;
          /** The campaign buying type. */
          buyingType: string | null;
          /** The campaign creation timestamp returned by Meta. */
          createdTime: string | null;
          /** The campaign update timestamp returned by Meta. */
          updatedTime: string | null;
          /** The raw Meta campaign object returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List posts from a managed Facebook Page feed, including visitor content where permitted. Inspect is_published to distinguish published and unpublished posts. */
    "meta.list_page_posts": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
        /** The lower time bound accepted by Graph API. */
        since?: string;
        /** The upper time bound accepted by Graph API. */
        until?: string;
      };
      output: {
        /** The Page posts. */
        posts: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The post text. */
          message: string | null;
          /** The permanent URL of the post. */
          permalinkUrl: string | null;
          /** The post creation time. */
          createdTime: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List Facebook Pages available to the connected user or system user, including assigned tasks. Access tokens are never returned. */
    "meta.list_pages": {
      input: {
        /** The comma-separated Meta fields or list of fields to request. */
        fields?: string | Array<string>;
        /**
         * The maximum number of records Meta should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Graph API after cursor for requesting the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * The Graph API before cursor for requesting the previous page.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The available Pages. */
        pages: Array<{
          /**
           * A Meta Graph API object identifier.
           * @minLength 1
           */
          id: string;
          /** The Page name. */
          name: string | null;
          /** The upstream object with credential fields removed. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized Meta Graph API paging metadata. */
        paging: {
          /** The before and after cursor values returned by Meta. */
          cursors: {
            /** The previous-page cursor when present. */
            before: string | null;
            /** The next-page cursor when present. */
            after: string | null;
          };
          /**
           * The next page URL returned by Meta when present.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Meta when present.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** Publish or stage a photo on a managed Facebook Page from a public image URL. Meta downloads the image. Set published=false to obtain a photo ID for an attached-media post. */
    "meta.publish_page_photo": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /**
         * The public image URL that Meta will download.
         * @format uri
         */
        imageUrl: string;
        /** The photo caption. */
        caption?: string;
        /** Whether to publish immediately. Defaults to false when scheduledPublishTime is supplied, otherwise true. */
        published?: boolean;
        /** The scheduled publication time as Unix seconds. Meta validates the permitted scheduling window. */
        scheduledPublishTime?: number;
        /** Additional documented Graph API parameters using upstream names. Cannot override authentication, routing, or explicitly supplied fields. */
        additionalParameters?: Record<string, unknown>;
      };
      output: {
        /**
         * The uploaded photo ID.
         * @minLength 1
         */
        photoId: string;
        /**
         * The Facebook Page post ID, normally pageId_postId.
         * @minLength 1
         */
        postId: string | null;
      };
    };
    /** Update a Facebook Page post created by the same Meta app, including text, attachments, and publishing settings. */
    "meta.update_page_post": {
      input: {
        /**
         * The Facebook Page ID. The connector resolves its Page access token internally.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Facebook Page post ID, normally pageId_postId.
         * @minLength 1
         */
        postId: string;
        /** The post text; an empty string can clear text when updating. */
        message?: string;
        /** Whether the existing post should be published. Sent as is_published; omitted updates leave publication unchanged. */
        published?: boolean;
        /** The scheduled publication time as Unix seconds. Meta validates the permitted scheduling window. */
        scheduledPublishTime?: number;
        /** Previously uploaded photo attachments. */
        attachedMedia?: Array<{
          /**
           * The uploaded photo ID.
           * @minLength 1
           */
          mediaFbid: string;
        }>;
        /** Additional documented Graph API parameters using upstream names. Cannot override authentication, routing, or explicitly supplied fields. */
        additionalParameters?: Record<string, unknown>;
      };
      output: {
        /** Whether Meta completed the operation. */
        success: boolean;
      };
    };
  }
}
