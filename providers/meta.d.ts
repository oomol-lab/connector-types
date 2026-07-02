import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
        datePreset?: "today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year";
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
        /**
         * A list of Meta delivery statuses.
         * @minItems 1
         */
        configuredStatus?: Array<"ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED" | "IN_PROCESS" | "WITH_ISSUES">;
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
  }
}
